# design.md — WellspringFlow Landing Page
### Guia técnico e visual para implementação (Claude Code)
Mercados: Estados Unidos · Canadá · Reino Unido | Nicho: saúde/apetite (adjacente a GLP-1) | Tier: infoproduto low-ticket

---

## 0. Como usar este documento

Este arquivo é a fonte única de verdade para implementação visual e técnica da landing page. Contém: identidade, cultura de mercado, sistema de cores, tipografia, grid, componentes, imagens, animação, acessibilidade, performance e compliance.

**Regra de ouro para qualquer decisão não coberta aqui**: mais simples, mais claro, mais rápido, mais transparente — nessa ordem de prioridade. Nunca adicionar elemento visual, animação ou copy que não tenha função clara de reduzir dúvida ou fricção do usuário.

**Idioma da página**: inglês nativo, com variante ortográfica ajustada por mercado quando a campanha for segmentada (ver seção 2). Nunca misturar inglês americano e britânico na mesma página.

---

## 1. Identidade e posicionamento visual

### 1.1 Conceito central
**Calm health intelligence.** A página deve parecer: marca de saúde contemporânea + publicação editorial premium + ferramenta prática de orientação + produto digital confiável e acessível.

### 1.2 O que a página DEVE transmitir
- "Isso parece sério."
- "Isso foi criado por alguém que entende o problema."
- "Consigo compreender rapidamente."
- "Não estão tentando me pressionar."
- "O produto parece simples de usar."

Palavras-chave: natural, sereno, organizado, confiável, humano, editorial, leve, acolhedor, funcional, premium discreto.

### 1.3 O que a página NÃO deve parecer
Clínica médica hospitalar · site farmacêutico tradicional · página de venda agressiva estilo LatAm · template de SaaS genérico · página de coach/guru · marca fitness extrema · produto dietético milagroso · marca "biohacking" neon · qualquer estética de "guru pose" (avião particular, dinheiro espalhado, carros de luxo).

---

## 2. Contexto cultural por mercado (obrigatório para copy e tom visual)

### 2.1 Estados Unidos
- Responde bem a: benefícios claros, autonomia, conveniência, resultado mensurável, linguagem confiante mas não vaga.
- Muito treinado para detectar: falsa escassez, depoimento artificial, promessa irreal, before/after exagerado, contador eterno, copy longa sem substância.
- Copy que funciona: "A simple, step-by-step system for…", "No complicated setup. No fluff.", "Instant access after checkout."
- Sensível a: transparência total de preço; cuidado extremo em claims de saúde ("may help", "designed to" — nunca garantia de resultado).
- 2025–2026: forte ceticismo pós "guru culture" (efeito Hormozi/backlash). Onda de "de-influencing": marcas que parecem **menos vendedoras** convertem mais.

### 2.2 Canadá
- Tom levemente mais moderado que os EUA; maior valorização de credibilidade e transparência; mais sensível a privacidade (PIPEDA/CPPA).
- Aceita padrão US se a página for global, mas evitar tom triunfalista, informalidade exagerada e qualquer referência "US-only" (bônus, preço em USD sem aviso).
- Copy que funciona: "A clear plan you can use right away.", "Straightforward guidance, without the overwhelm."

### 2.3 Reino Unido
- Cultura de **soft-sell**: publicidade agressiva é associada a "mis-selling"/golpe. Humor autodepreciativo e understatement geram mais confiança que superlativos.
- Headlines em CAPS, excesso de "!!!" e emojis = red flag imediato.
- Tabela de conversão de tom:

| Evitar (US-style) | Preferir (UK-style) |
|---|---|
| "This will change your life!" | "A practical starting point." |
| "The #1 secret nobody tells you" | "A clearer way to approach…" |
| "You NEED this" | "See whether it's a fit for you." |
| "Act now before it's too late!" | "Available now with instant access." |

- Ortografia britânica (versão dedicada UK): organise, personalise, maximise, colour, favourite, programme, centre. Nunca misturar com inglês americano na mesma página.
- Legal: política de reembolso nunca escondida; clareza sobre VAT quando aplicável.

### 2.4 Regra transversal (achado 2025–2026, todos os mercados)
Consumidores dos três países recompensam marcas que parecem **menos "vendedoras"** e mais **educativas/transparentes**. Isso vale mais que qualquer gatilho de conversão clássico. Linguagem de "educador" > linguagem de "vendedor" em toda a página.

### 2.5 Localização técnica
- **Moeda**: visível ANTES do clique no CTA, nunca surpresa no checkout. Global → USD + aviso "Prices shown in USD". Campanha CA → CAD. Campanha UK → GBP + menção a VAT quando aplicável.
- **Datas**: nunca formato numérico ambíguo. UK: "4 August 2026". US: "August 4, 2026".
- **Medidas**: se houver PDF/planner para impressão, oferecer US Letter e A4.

---

## 3. Sistema de cores

### 3.1 Paleta primária (marca)

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--brand-green` | Verde-musgo profundo | `#4C6235` | Logo, títulos secundários, ícones, institucional |
| `--brand-olive` | Verde-oliva | `#7C8B33` | Destaques, palavras-chave, indicadores pequenos |
| `--brand-dark` | Verde profundo | `#344426` | Fundos escuros, rodapé, faixas premium |
| `--brand-sage` | Verde sálvia | `#8F995E` | Bordas, ilustrações sutis, apoio |

### 3.2 Neutros

| Token | Nome | Hex | Uso |
|---|---|---|---|
| `--bg-main` | Marfim quente | `#F7F5EF` | Fundo geral da página |
| `--bg-light` | Branco editorial | `#FCFBF8` | Cards e seções internas |
| `--bg-cream` | Bege claro | `#E1DBCE` | Fundos alternativos, detalhes |
| `--text-muted` | Cinza mineral | `#9D9B95` | Textos secundários, legendas |
| `--text-primary` | Preto suavizado | `#22251F` | Títulos e textos principais |
| `--text-secondary` | Cinza escuro | `#4A4D47` | Parágrafos, descrições |
| Branco puro | — | `#FFFFFF` | Conteúdo sobre fundo escuro |

### 3.3 CTA (única cor de ação da página)

| Token | Nome | Hex |
|---|---|---|
| `--cta-primary` | Terracota-laranja | `#C96F3B` |
| `--cta-hover` | Terracota escuro | `#AD5C31` |
| `--cta-soft` | Pêssego suave | `#F2D6C4` |

Uso exclusivo do laranja: botão principal, indicadores de ação, preço promocional, marcação discreta em garantia, ícone de confirmação. **Nunca usar laranja fora do contexto de ação** — isso preserva a associação "laranja = ação". O verde nunca deve aparecer em botão de conversão simultaneamente ao laranja.

### 3.4 Semânticas

| Token | Hex | Uso |
|---|---|---|
| `--error` | `#A64A42` | Erro de formulário (vermelho escuro controlado, nunca vermelho puro) |
| `--success` | `#4C6235` | Sucesso/confirmação (reaproveita verde-musgo) |

### 3.5 Distribuição obrigatória
- **65%** off-white/branco
- **20%** verde-musgo/verde profundo
- **10%** cinza/creme
- **5%** laranja de conversão

⚠️ **Checar antes do build**: contraste `#C96F3B` (CTA) com texto branco deve atingir WCAG AA — mínimo 3:1 para texto grande/negrito (o caso do CTA, Inter 650 16–18px), mínimo 4.5:1 se algum texto normal usar essa cor. Validar com contrast checker antes de aprovar.

### 3.6 Cor por seção

| Seção | Fundo | Título | Apoio | CTA |
|---|---|---|---|---|
| Hero | `#F7F5EF` | `#22251F` | `#4C6235` | Laranja |
| Trust bar | `#FFFFFF` | `#22251F` | `#9D9B95` | — |
| Problema | `#FFFFFF` | `#22251F` | `#4A4D47` | — |
| Solução/Sistema | `#EEF1E7` | `#344426` | `#7C8B33` | Laranja |
| O que você recebe | `#FFFFFF` | `#22251F` | `#7C8B33` | Laranja |
| Benefícios | `#F7F5EF` | `#22251F` | `#4C6235` | — |
| Para quem é/não é | `#FFFFFF` | `#22251F` | `#4A4D47` | — |
| Prova social | `#F7F5EF` | `#22251F` | `#4C6235` | — |
| Sobre o criador | `#FFFFFF` | `#22251F` | `#4A4D47` | — |
| Oferta/preço | `#344426` | `#FFFFFF` | `#E1DBCE` | Laranja |
| Garantia | `#EEF1E7` | `#344426` | `#4C6235` | Laranja (opcional) |
| FAQ | `#FFFFFF` | `#22251F` | `#9D9B95` | — |
| CTA final | `#344426` | `#FFFFFF` | `#E1DBCE` | Laranja |
| Rodapé | `#344426` | `#FFFFFF` | `#E1DBCE` | — |

Fundo `#EEF1E7` (verde-claro) usado como variação de seção verde não listada nos tokens principais — derivar em build como `--bg-soft-green: #EEF1E7`.

---

## 4. Tipografia

### 4.1 Famílias (máximo 2, sem exceção)

**Editorial (títulos, preço, depoimentos destacados)**: DM Serif Display.
Alternativas de fallback, nessa ordem: Lora → Libre Baskerville → Fraunces.

**Funcional (corpo, botões, menus, formulários, FAQ, disclaimers)**: Inter.
Alternativas de fallback: Manrope → Source Sans 3 → Plus Jakarta Sans.

### 4.2 Escala desktop

| Elemento | Fonte | Tamanho | Peso | Line-height |
|---|---|---|---|---|
| Hero headline | DM Serif Display | 58–68px | 400 | 1.02–1.08 |
| Hero subheadline | Inter | 20–23px | 400 | 1.45 |
| Título de seção | DM Serif Display | 42–48px | 400 | 1.10 |
| Título de card | Inter | 20–22px | 600 | 1.30 |
| Corpo principal | Inter | 17–18px | 400 | 1.65 |
| Texto secundário | Inter | 15–16px | 400 | 1.55 |
| Eyebrow | Inter | 12–13px | 600 | 1.25 |
| CTA | Inter | 16–18px | 650 | 1.0 |
| Disclaimer | Inter | 12–13px | 400 | 1.45 |

### 4.3 Escala mobile

| Elemento | Tamanho |
|---|---|
| Hero headline | 40–46px |
| Hero subheadline | 18–20px |
| Título de seção | 32–38px |
| Título de card | 19–21px |
| Corpo principal | 16–18px (nunca abaixo de 16px) |
| CTA | 16–17px |
| Disclaimer | 12–13px |

### 4.4 Regras de legibilidade
- Headline: máx. 10–12 palavras por linha.
- Parágrafo: máx. 65–72 caracteres por linha (45–75 é o range aceitável).
- Subheadline: máx. 2–3 linhas, sem itálico, sem caixa alta, sem excesso de pontuação.
- Card de texto: máx. 4 linhas por bloco.
- Destaque de palavra: verde-oliva, peso 600, no máximo uma vez por headline — nunca amarelo neon, nunca sublinhado decorativo.
- Caixa alta somente em labels curtos (eyebrow, badges) com tracking 0.12em–0.18em.

---

## 5. Grid e espaçamento

### 5.1 Desktop
- Container: 1180–1240px.
- Margens laterais mínimas: 32px.
- Grid: 12 colunas, gutter 24–32px.
- Espaçamento entre seções: 96–128px.
- Hero em duas colunas: 55% (texto) / 45% (mockup).

### 5.2 Tablet
- Largura útil: 90%, grid 8 colunas.
- Espaçamento entre seções: 72–88px.
- Cards em 2 colunas.

### 5.3 Mobile (design mobile-first — desenhar mobile primeiro, expandir depois)
- Margens laterais: 20–24px.
- Grid: 4 colunas, 1 coluna de conteúdo.
- Padding vertical de seção: 64–80px.
- Cards sempre em 1 coluna, sem scroll horizontal.
- CTA principal em largura total.
- Texto alinhado à esquerda (nunca parágrafo centralizado).

### 5.4 Escala de espaçamento (8pt system — obrigatório, sem valores livres)
```
8 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128
```
Nunca usar valores como 27px, 43px, 71px.

---

## 6. Componentes

### 6.1 CTA principal
```css
background: #C96F3B;
color: #FFFFFF;
height: 56–60px; /* desktop */ /* mobile mínimo 52px */
padding: 0 28–36px;
border-radius: 10–12px;
font: Inter 650, 16–18px;
box-shadow: 0 8px 20px rgba(70, 45, 30, 0.12);
transition: 180–220ms;
```
Hover: `background: #AD5C31`, elevação 2px, **sem animação pulsante**.

Textos de exemplo (aprovados): "Get the Appetite Capacity OS", "Start Using the System", "Get Instant Access".
**Nunca usar**: "Buy Now!!!", "Unlock the Secret", "Transform Your Life Today".

Microtexto abaixo do CTA (12–13px, cinza escuro, ícones discretos — nunca 5–6 badges empilhados):
```
Instant access • One-time payment • 30-day guarantee
```

### 6.2 CTA secundário
```css
background: transparent;
border: 1px solid #4C6235;
color: #4C6235;
/* hover: background #EEF1E7 */
```

### 6.3 Cards
```css
/* padrão */
background: #FFFFFF;
border: 1px solid #E5E1D8;
border-radius: 14–16px;
padding: 28–32px;
box-shadow: 0 8px 30px rgba(44, 48, 38, 0.05);
```
- Card de benefício: ícone → título → descrição curta → detalhe de aplicação.
- Card de bônus: mockup pequeno → número → título → valor percebido → benefício direto. Sem bordas douradas, sem faixa vermelha, sem efeito 3D.
- Card de preço: fundo branco, borda `2px solid #4C6235`, topo verde-claro, preço em serifada, CTA laranja, garantia logo abaixo. Não pode parecer "tabela de planos SaaS".
- Máximo 3 cards por linha no desktop.

### 6.4 Ícones
Lineares, traço 1.5–2px, cantos suaves, sem preenchimento complexo, sem estilo cartoon. Cores: verde-musgo, verde-oliva, branco (fundo escuro), laranja (só ação/confirmação).

### 6.5 Badges
```css
/* badge editorial */
background: light-green;
color: dark-green;
font: Inter 600, 11–12px, caixa alta;
border-radius: 999px;
padding: 7px 12px;
```
Exemplos: `PRACTICAL SYSTEM`, `INSTANT ACCESS`, `ONE-TIME PAYMENT`. Nunca vermelho, nunca brilho, nunca mais de 2-3 badges agrupados.

### 6.6 Formulários
```css
height: min 52px;
border-radius: 8–10px;
background: #FFFFFF;
border: 1px solid #D8D5CC;
```
Label sempre visível (nunca só placeholder). Foco: borda verde-musgo, outline suave, **sem glow azul genérico**. Erro: `#A64A42` + mensagem abaixo do campo (nunca só cor). Sucesso: verde-musgo + ícone de check.

### 6.7 Bordas, radius, sombra
```css
--radius-button: 10–12px;
--radius-card: 14–16px;
--radius-image: 16–20px;
--radius-badge: 999px;

--shadow-card: 0 8px 30px rgba(44, 48, 38, 0.05);
--shadow-product: 0 20px 50px rgba(38, 45, 28, 0.12);
--shadow-header-sticky: 0 4px 20px rgba(44, 48, 38, 0.06);
```
Proibido: glassmorphism, blur excessivo, neon, sombra preta densa.

### 6.8 Cabeçalho
- Desktop: altura 72–80px, logo à esquerda, poucos links, CTA discreto à direita, fundo transparente/off-white, **sticky só após scroll**.
- Mobile: logo + CTA pequeno; sem hambúrguer se não houver navegação extensa.
- Logo: versão verde (fundo claro) / off-white (fundo escuro); 190–230px desktop, 150–180px mobile.

### 6.9 Rodapé
Fundo `#344426`. Conteúdo obrigatório: logo negativo, suporte, política de privacidade, termos, política de reembolso, contato (e-mail real, não só formulário), copyright, **disclaimer educacional**, **aviso de não substituição de orientação médica**. Texto branco/creme, 13–14px, line-height 1.6.

---

## 7. Fotografia e mockups

### 7.1 Direção fotográfica
Transmitir: vida real, tranquilidade, rotina, alimentação possível, ambientes claros, luz natural, organização sem perfeição artificial. Tons neutros/quentes, madeira clara, tecido natural, louça branca, verde discreto.

### 7.2 Pessoas (quando houver)
Aparência real, idades compatíveis com o público, expressões naturais. **Proibido**: pose de anúncio, corpo fitness extremo, jaleco médico (salvo contexto clínico legítimo), qualquer estética de emagrecimento rápido, balança, fita métrica na cintura, seringa ampliada como elemento promocional.

### 7.3 Hierarquia de confiança em imagem (da mais para a menos confiável)
1. Foto real (fundador, cliente, produto).
2. Banco de imagens (usar com moderação, evitar "cara de stock").
3. Imagem gerada por IA (evitar — público já reconhece; risco maior que ganho).

### 7.4 Mockups do produto
Realistas, mas discretos: livro impresso, páginas internas, tablet, checklist, cartões do sistema. Hero: 1 produto principal + até 3 materiais complementares parcialmente visíveis. Seção de conteúdo: conjunto completo, hierarquia clara, **nunca empilhar 10 mockups em perspectiva extrema**.

Sombra de mockup: `0 20px 50px rgba(38, 45, 28, 0.12)` — nunca sombra preta dura.

Proporção imagem:texto por seção: **40–55%**, especialmente em seções de demonstração — texto puro sem apoio visual é o maior fator de saída de página.

### 7.5 Especificação técnica de imagem (ligado à performance — seção 10)
- Formato: WebP (fallback AVIF quando suportado).
- Hero: < 200KB por imagem, mockup ocupando 35–50% da largura do hero no desktop.
- Proporções: 4:5 ou 1:1 (e-book/planner); 16:9 (dashboard/Notion/Canva).
- Lazy-load em todas as imagens abaixo da dobra; hero image com `fetchpriority="high"` e sem lazy-load.

---

## 8. Prova social

- Formato de depoimento: foto real pequena (circular, 40–64px) → nome → contexto → texto curto → resultado/percepção específica → disclosure quando aplicável.
- Design: fundo branco, borda suave, aspas discretas. **Proibido**: 5 estrelas gigantes, foto redonda genérica, texto vago tipo "Amazing product".
- Print real (WhatsApp, DM, e-mail, review) supera texto formatado bonito.
- **Prioridade de credibilidade 2026**: prova social **verificável externamente** (Trustpilot, Google Reviews com nota visível) pesa mais que depoimento apenas interno ao site — incluir se disponível; se não houver ainda, substituir por prova de produto (preview detalhado, demonstração, garantia clara), nunca por depoimento fabricado.
- Números: sempre crus/não-redondos ("1.247 alunos", nunca "mais de 1.000") — soam mais verificáveis.
- Todo depoimento com resultado financeiro ou de transformação exige disclosure visível (ver seção 11 — compliance).

---

## 9. Movimento e animação

**Permitido**: fade 200–350ms, deslocamento vertical até 12px, hover suave em cards, expansão de FAQ, microelevação de botão.

**Proibido**: CTA pulsando, números girando sem propósito, pop-up imediato, contador regressivo falso, carrossel automático rápido, mockup flutuando continuamente, elementos entrando de todos os lados, vídeo autoplay com som.

---

## 10. Performance (requisito técnico não negociável)

### 10.1 Stack de referência
- **Framework**: Astro 4/5 (SSG puro, islands só onde necessário) — evitar peso de runtime React desnecessário para página majoritariamente estática.
- **Hosting/Edge**: Cloudflare Pages + Workers (geo-routing de moeda, headers de segurança).
- **Interatividade**: Vanilla JS/Alpine para FAQ, sticky CTA, micro-interações. Orçamento de JS de UI: **< 15KB**.
- **Fontes**: self-hosted, formato woff2, `font-display: swap`, máximo 2 famílias (DM Serif Display + Inter), subsetting para reduzir peso.
- **Tracking**: server-side GTM (ex. Stape) + Meta CAPI + GA4 server-side; no client, apenas Data Layer mínimo — pixels client-side pesados são a maior causa de LCP/INP ruins em landing page.
- **Checkout**: processador externo (Stripe/ThriveCart/Lemon Squeezy) — nenhum processamento próprio na página.

### 10.2 Metas de performance (obrigatórias)
| Métrica | Meta |
|---|---|
| LCP | < 1.5s em 4G |
| CLS | < 0.05 |
| INP | < 200ms |
| Peso total no primeiro carregamento | < 500KB |
| Tempo de carregamento mobile | < 2.5s (abandono cresce exponencialmente acima disso) |

### 10.3 Por que isso importa nesses mercados
Mais de 80% do tráfego é mobile em US/CA/UK. Lentidão é lida pelo usuário como "site amador/pouco confiável" — não como problema técnico neutro. Performance ruim também eleva CPA no leilão de anúncios (Google/Meta usam page experience na precificação).

---

## 11. Acessibilidade e compliance

### 11.1 Acessibilidade (WCAG AA)
- Contraste mínimo AA em todo texto; nunca verde-oliva claro para texto longo; laranja sempre com contraste validado.
- Navegação por teclado, foco visível, labels em formulário, alt text em toda imagem, estados de erro nunca dependentes só de cor.
- Área de toque mínima 44×44px; botões mobile com altura mínima 48–52px.

### 11.2 Compliance — saúde/apetite (nicho sensível, obrigatório)
Como o produto referencia contexto de GLP-1/apetite, aplicar rigorosamente:
- **Nunca**: cura, tratamento garantido, resultado clínico sem base, "lose X pounds in Y days", linguagem que substitua orientação médica.
- **Incluir sempre no rodapé/seção relevante**: *"This resource is for educational purposes and is not medical advice."*
- **Incluir declaração de não afiliação**: o produto deve deixar claro que **não é afiliado, endossado ou associado a nenhum fabricante de medicamento GLP-1** — evita problema de trademark/endosso implícito, especialmente relevante no mercado dos EUA.
- Nenhuma imagem de seringa, balança ou fita métrica como elemento promocional (reforça também a seção 7.2).

### 11.3 Disclosure de prova social (FTC/ASA/Competition Act)
- **EUA**: qualquer conexão material com quem dá depoimento (pagamento, produto grátis) deve ser declarada; "results not typical" sozinho não basta — declarar resultado típico real quando houver claim de resultado.
- **Reino Unido**: proibido omitir informação material ou criar impressão fabricada de resultado (ASA/CAP + DMCCA); usar "#ad" quando aplicável.
- **Canadá**: Competition Act proíbe claim falso/exagerado; PIPEDA/CPPA exige consentimento claro para captura de dados (formulários, e-mail).
- Disclaimer de depoimento deve ser **visível e legível**, nunca escondido em rodapé minúsculo — isso aumenta credibilidade, não reduz.

### 11.4 Privacidade e e-mail
Coleta de e-mail com finalidade clara; checkbox de marketing separado quando aplicável; política de privacidade fácil de encontrar; nunca embutir inscrição em newsletter dentro do fluxo de compra sem transparência.

---

## 12. Checklist final de consistência (rodar antes de considerar a página "pronta")

1. Máximo 2 famílias tipográficas usadas.
2. Laranja aparece **somente** em elementos de conversão.
3. Off-white/branco domina visualmente (~65%).
4. Verde-musgo é a cor institucional predominante nos elementos não-CTA.
5. Nenhum parágrafo centralizado.
6. Cada seção comunica uma única ideia.
7. Máximo 3 cards por linha.
8. Nenhum selo de confiança empilhado (máx. 2–3 juntos, sempre contextualizados).
9. Nenhum contador/timer artificial.
10. Nenhum CAPS LOCK em headline; nenhuma exclamação de venda.
11. Disclaimers visíveis e legíveis (não miniaturizados).
12. Políticas, suporte e contato claros e acessíveis.
13. Correspondência total entre promessa do anúncio e headline da LP (message match).
14. Fotografias reais priorizadas sobre banco de imagens/IA.
15. Espaço em branco generoso mantido em todas as seções.
16. CTA repetido ao longo da página sem virar sequência de botões.
17. Contraste alto e navegação acessível testados.
18. Toda a página parece parte do mesmo sistema editorial da marca.
19. Metas de performance da seção 10.2 validadas em produção (Lighthouse/PageSpeed).
20. Compliance de nicho de saúde (seção 11.2–11.3) revisada linha a linha antes do deploy.
