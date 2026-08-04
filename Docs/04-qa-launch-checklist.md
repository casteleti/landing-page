# 04 — QA e Checklist de Lançamento
## Rodar integralmente antes de considerar a página pronta. Itens marcados 🚫 são BLOQUEANTES.

---

## A. Conteúdo e copy

- [ ] 🚫 Copy implementada verbatim de `01-sections-copy.md` — diff manual seção por seção, sem paráfrase ou texto adicionado
- [ ] 🚫 Grafia 100% inglês americano — buscar e eliminar: "licence", "colour", "organise", "programme", "centre", "favourite" (busca global no build final)
- [ ] 🚫 Zero ocorrência dos termos proibidos: "prevent muscle loss", "stop side effects", "reverse", "eliminate food noise", "guarantee(d) weight loss/results", "avoid weight regain", "fix your metabolism", "cure", "clinically proven", "doctor approved", "FDA approved", "safe for everyone", "get the most from your medication", "Ozempic Face" (como nome de produto)
- [ ] 🚫 Bônus 5 nomeado "Face & Body Defense Guide™" (sem "Ozempic") em TODAS as ocorrências (card, stack, alt text, schema)
- [ ] 🚫 Bônus 7 com subtítulo "Regain-Awareness" (não "Prevention")
- [ ] Marcas farmacêuticas (Ozempic®, Wegovy®, Mounjaro®, Zepbound®) aparecem SOMENTE na FAQ #2 e no disclaimer do footer, sempre com ®
- [ ] As 10 perguntas do comprador respondidas na página; preço, "one-time payment" e "instant access" visíveis ANTES do primeiro CTA (microcopy do hero)
- [ ] Todos os placeholders resolvidos: `[$XX]`, `[CREATOR NAME]`, `[support email]`, `[year]`, `[Brand Name]`, `CHECKOUT_URL` — 🚫 nenhum colchete visível em produção
- [ ] Números de valor conferem: itens somam $397 (67+37+37+27+37+27+27+37+47+27+27)

## B. Compliance e confiança

- [ ] 🚫 Disclaimer médico completo no footer, legível (≥13px, contraste AA), verbatim
- [ ] 🚫 Versão curta do disclaimer visível junto à Seção 13 (oferta), com link para o completo
- [ ] 🚫 Zero depoimentos, ratings, contadores de clientes, "as seen on", notificações de compra — slots reservados apenas como comentário HTML
- [ ] 🚫 Zero countdown, timer, escassez ("only X left"), pop-up de entrada/saída
- [ ] 🚫 Sem strikethrough de preço; ancoragem apenas como "Combined Reference Value: $397"
- [ ] 🚫 Páginas /privacy-policy, /terms, /refund-policy publicadas com conteúdo legal REAL (sem placeholder "[LEGAL COPY PENDING]")
- [ ] 🚫 E-mail de suporte real e funcional (mailto testado; caixa monitorada)
- [ ] Garantia: prazo (7 dias) confirmado com a plataforma de checkout E revisado frente aos direitos do consumidor UK para conteúdo digital; política de reembolso descreve o mesmo prazo/condições da página
- [ ] Moeda: "Prices shown in USD" visível na Camada 6 e antes do checkout
- [ ] Schema JSON-LD sem `aggregateRating`
- [ ] Bio do criador: sem credenciais não documentadas; foto real; sem jaleco (salvo credencial clínica comprovada)
- [ ] Previews da Seção 11 são páginas REAIS dos PDFs
- [ ] Banner de consentimento ativo e geo-condicionado (UK: opt-in real) — ver `03-tracking.md` §4

## C. Design e consistência visual

- [ ] Tokens de `design.md` §28 aplicados; nenhuma cor fora da paleta
- [ ] Laranja `#C96F3B` presente APENAS em elementos de conversão
- [ ] Máx. 2 famílias tipográficas (DM Serif Display + Inter), self-hosted
- [ ] Fundos por seção conforme `design.md` §3.6 / mapa da copy
- [ ] Emojis do doc de copy convertidos em ícones SVG lineares — 🚫 zero emoji renderizado na página
- [ ] Nenhum parágrafo centralizado; texto alinhado à esquerda no mobile
- [ ] Espaçamentos apenas na escala 8pt; entre seções 96–128px desktop / 64–80px mobile
- [ ] Sombras/raios conforme tokens; sem glassmorphism, neon ou sombra preta dura
- [ ] Card "not for you" sem X vermelho (ícone neutro)
- [ ] Favicon + `<title>` com marca (usuários checam a aba antes de inserir cartão)

## D. Responsividade e UX

- [ ] Mobile-first verificado em 375 / 390 / 412 / 768 / 1440px — sem scroll horizontal em nenhuma largura ≥ 360px
- [ ] Botões mobile ≥ 52px de altura; áreas de toque ≥ 44×44px; corpo de texto ≥ 16px
- [ ] Sticky header aparece só após rolar o hero; sem layout shift ao fixar
- [ ] Sticky CTA mobile (se ativo): aparece só após o CTA do hero sair do viewport; não cobre footer nem elementos interativos
- [ ] FAQ: acordeão funcional, 1–2 itens abertos, animação suave, sem CLS
- [ ] Lightbox de previews: abre, fecha com Esc/backdrop, foco gerenciado
- [ ] Todos os 6 CTAs apontam para `CHECKOUT_URL` com UTMs preservados

## E. Performance 🚫 (nenhum deploy sem bater os 5)

- [ ] LCP < 1.5s (Lighthouse mobile, 4G simulado)
- [ ] CLS < 0.05
- [ ] INP < 200ms
- [ ] Peso total primeiro carregamento < 500KB (sem cache)
- [ ] JS de UI < 15KB min+gzip; tracking client < 30KB
- [ ] Lighthouse Performance mobile ≥ 95; Accessibility ≥ 95
- [ ] Hero image: fetchpriority=high, dimensões explícitas, < 200KB
- [ ] Demais imagens: lazy, WebP, srcset, dimensões explícitas
- [ ] Fontes: woff2, swap, preload apenas above-the-fold, fallback metric-adjusted
- [ ] Headers de segurança e cache ativos (conferir com curl -I)
- [ ] `prefers-reduced-motion` respeitado

## F. Acessibilidade (WCAG AA)

- [ ] Contraste AA em todos os pares de cor (auditar: CTA laranja/branco, footer creme/verde-escuro, cinza mineral/branco)
- [ ] Um único H1; hierarquia H2/H3 sem saltos
- [ ] Navegação completa por teclado; foco visível em todos os interativos; skip link presente
- [ ] `alt` descritivo em imagens informativas; `aria-hidden` em ícones decorativos
- [ ] FAQ e lightbox com semântica/ARIA corretos
- [ ] Nenhuma informação só por cor; estados de erro (se houver formulário) com texto

## G. Tracking (resumo — detalhes em `03-tracking.md` §6)

- [ ] Eventos client validados (GTM Preview + GA4 DebugView)
- [ ] 🚫 Purchase server-side de teste confirmado em GA4 e Meta Events Manager, com dedup
- [ ] 🚫 Nenhum parâmetro com termo de saúde ou PII em claro
- [ ] Consent Mode validado por geo (UK nega → sem cookies de marketing)
- [ ] `hero_variant` registrado em todos os eventos

## H. Smoke test final (as 10 perguntas do comprador)

Percorrer a página publicada respondendo onde cada uma é respondida:
1. O que é isso? → Hero
2. É para alguém como eu? → Eyebrow + Seção 10
3. Que resultado prático posso esperar? → Seções 5–6 (linguagem educacional)
4. O que exatamente vou receber? → Seções 6–8 + file details
5. Quanto custa, de verdade? → Microcopy do hero + Seção 13 🚫
6. Consigo usar sem esforço? → Seção 9
7. Posso confiar? → Seções 11–12 + políticas + disclaimer
8. Assinatura escondida? → "No subscription — ever" (hero + oferta) 🚫
9. Recebo imediatamente? → "Instant digital download" (hero) + FAQ 9 🚫
10. O risco vale o preço? → Garantia + prova de produto

Falhou alguma? A página volta para ajuste antes do lançamento.
