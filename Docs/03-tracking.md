# 03 — Tracking e Mensuração
## Data Layer, eventos, server-side GTM, CAPI e consentimento

**Princípio**: tracking server-side com pegada client mínima. Pixels client-side pesados são a maior causa de LCP/INP ruins em landing pages — e este projeto tem budget de performance bloqueante. Nada de instalar Meta Pixel + TikTok + GA4 + Clarity direto no `<head>`.

**Contexto de privacidade**: página de nicho de **saúde** vendida em US/CA/UK. Isso impõe duas regras extras: (1) nunca enviar dados que revelem condição de saúde do usuário em parâmetros de evento; (2) consent management ativo para UK (GDPR) e postura conservadora para CA (PIPEDA/CPPA) e estados US com leis de privacidade.

---

## 1. Arquitetura

```
Browser (dataLayer mínimo + GTM web container leve)
        │  eventos first-party
        ▼
Server-side GTM (subdomínio próprio, ex.: mt.dominio.com — Stape ou Cloud Run)
        ├──► GA4 (server-side)
        ├──► Meta Conversions API (dedup com pixel via event_id)
        └──► [TikTok Events API — se houver campanha TikTok]

Checkout externo (Stripe/ThriveCart)
        └──► webhook → sGTM → evento Purchase (fonte da verdade de conversão)
```

- **Purchase é medido no servidor via webhook do checkout**, não no client — mais confiável (iOS/ITP/adblock) e única fonte para otimização de campanha.
- Client dispara apenas eventos de engajamento/funil superior.
- Dedup Meta: mesmo `event_id` no pixel (se ativo no client) e no CAPI.

## 2. Data Layer — eventos do client

Snippet base no `<head>` (inline, mínimo):
```html
<script>
  window.dataLayer = window.dataLayer || [];
</script>
```
GTM web container: carregar com `defer` após `load` OU via sGTM serving (gtm.js servido pelo subdomínio first-party). Nunca bloquear renderização.

### Tabela de eventos

| Evento | Disparo | Parâmetros |
|---|---|---|
| `page_view` | Padrão GA4 | `hero_variant` (a/b/c) |
| `view_section` | `IntersectionObserver` (threshold 0.5, uma vez por seção) nas seções-chave: `system`, `bonuses`, `stack`, `offer`, `guarantee`, `faq` | `section_id` |
| `scroll_depth` | 25 / 50 / 75 / 90% (uma vez cada) | `percent` |
| `cta_click` | Clique em qualquer CTA de checkout | `cta_position` (header/hero/blueprint/stack/offer/final), `hero_variant` |
| `begin_checkout` | Mesmo clique do `cta_click` (alias GA4 ecommerce) | `currency: "USD"`, `value: PRICE`, `items: [{item_id: "glp1-blueprint-bundle", item_name: "GLP-1 Success Blueprint Bundle"}]` |
| `faq_open` | Abertura de item do FAQ | `question_index` (1–12) |
| `preview_open` | Lightbox da Seção 11 | `preview_id` |

### Regra de higiene de dados (saúde)
- NUNCA incluir em parâmetros: termos de medicamento, condição, sintomas, ou qualquer PII (e-mail, nome). `item_name` genérico conforme tabela.
- URLs de checkout: repassar apenas `utm_*`, `event_id`/`external_id` anônimo e identificadores de campanha. Sem parâmetros descritivos de saúde.

## 3. Eventos server-side (webhook do checkout)

| Evento | Fonte | Destinos | Parâmetros |
|---|---|---|---|
| `purchase` | Webhook Stripe/ThriveCart → sGTM | GA4 + Meta CAPI | `transaction_id`, `value`, `currency`, `items`; user data hasheada (em, fn, ln, ct, st, zp, country) conforme exigido pelo CAPI, com hashing SHA-256 no servidor |
| `initiate_checkout` (CAPI) | Espelho do clique client via sGTM | Meta CAPI | `event_id` compartilhado para dedup |

- Configurar Enhanced Conversions (Google) e Advanced Matching (Meta) **somente** com dados coletados no checkout, hasheados server-side.
- Meta: verificar domínio, configurar `event_source_url` com URL limpa da LP.

## 4. Consentimento (Consent Management)

| Mercado | Regra aplicada |
|---|---|
| UK | Banner de consentimento GDPR real (aceitar/recusar com paridade visual); tracking de marketing só após opt-in; Google Consent Mode v2 (`ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization` default `denied` para UK) |
| Canadá | Mesmo banner (PIPEDA/CPPA — postura conservadora); consentimento antes de cookies de marketing |
| US | Consent Mode default `granted` aceitável, MAS exibir link "Do Not Sell/Share" se usar audiências (CCPA/CPRA); recomendação: usar o mesmo banner geo-condicionado |

- Implementação: CMP leve (ex.: script próprio + Consent Mode, ou CMP de mercado com < 20KB) **geo-condicionado no edge** (Cloudflare Worker lê país e injeta configuração default).
- O banner segue o design system: cores da paleta, sem dark patterns, botões "Accept"/"Decline" com mesmo peso visual.
- Eventos essenciais (page_view anônimo agregado via server, sem cookie) podem rodar em modo cookieless quando consentimento negado (Consent Mode v2 pings).

## 5. UTMs e A/B

- Padrão de UTM documentado: `utm_source` / `utm_medium` / `utm_campaign` / `utm_content` (criativo) / `utm_term` (opcional).
- `hero_variant`: definido por variável de build (deploys separados) OU Worker no edge (split 33/33/33 com cookie first-party `hv`, 30 dias). Registrar a variante em TODOS os eventos. Não usar ferramenta client-side de A/B (flicker + peso).
- Message match: cada campanha aponta para a variante de headline compatível com o criativo — manter planilha campanha ↔ variante.

## 6. QA de tracking (pré-launch)

- [ ] Todos os eventos da tabela §2 disparam no GTM Preview e chegam ao GA4 DebugView.
- [ ] `purchase` de teste via webhook chega a GA4 e Meta Events Manager (test events), com dedup confirmado (1 evento, não 2).
- [ ] Nenhum parâmetro contém termo de saúde ou PII em claro (auditar payloads no sGTM preview).
- [ ] Consent Mode: com consentimento negado (UK), nenhum cookie de marketing é criado; eventos essenciais seguem cookieless.
- [ ] Peso adicionado pelo tracking no client: < 30KB total; sem impacto > 100ms no LCP (comparar Lighthouse com/sem).
- [ ] UTMs preservados até o checkout (conferir query string na URL final).
