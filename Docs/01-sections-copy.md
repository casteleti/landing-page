# 01 — Seções e Copy Final
## GLP-1 Success Blueprint™ — Landing Page (16 seções)

**Regra absoluta**: a copy em inglês abaixo é FINAL e validada por compliance. Implementar verbatim. Qualquer texto entre colchetes `[...]` é placeholder/variável de configuração. Instruções de layout estão em português e não vão para a página.

**Referências cruzadas**: cores por seção → `design.md` §3.6 · componentes → `design.md` §6 · tipografia → `design.md` §4.

**IDs de âncora**: cada seção recebe o `id` indicado para navegação/tracking. Todos os CTAs apontam para a URL de checkout (variável `CHECKOUT_URL`), exceto quando indicado.

---

## SEÇÃO 1 — HEADER
`id="header"` · Componente: `design.md` §6.8

### Comportamento
- Desktop: altura 72–80px. Logo à esquerda (WellspringFlow, versão verde, 190–230px). À direita: linha de confiança + CTA discreto.
- Fundo `#F7F5EF` (mescla com o hero). **Sticky apenas após o usuário rolar** além do hero (threshold: bottom do hero). Ao fixar: fundo `#F7F5EF` com `--shadow-header-sticky`.
- Mobile: logo (150–180px) + CTA pequeno. Sem menu hambúrguer (página não tem navegação extensa).
- O CTA do header usa estilo secundário (outline verde) enquanto o hero está visível; troca para primário (laranja) quando sticky.

### Copy
- Linha de confiança (direita, desktop apenas, Inter 13px, `--text-muted`, separador "·"):
  `Secure checkout · Instant digital access`
- CTA: `Get Instant Access`

---

## SEÇÃO 2 — HERO
`id="hero"` · Fundo: gradiente quase imperceptível `#F7F5EF → #FFFFFF` · Layout: 55% texto / 45% mockup (desktop); mobile na ordem: eyebrow → headline → subheadline → imagem → CTA → microcopy → selo.

### Copy

**Eyebrow** (Inter 12–13px, caps, tracking 0.14em, `--brand-green`):
```
FOR ADULTS USING PRESCRIBED GLP-1 MEDICATIONS (SEMAGLUTIDE, TIRZEPATIDE, AND SIMILAR)
```

**Headline** (DM Serif Display, H1 — único H1 da página):
```
Your Practical GLP-1 Roadmap for Better Nutrition, Stronger Habits, and Lasting Confidence
```
Destaque opcional: "Practical GLP-1 Roadmap" em `--brand-olive` (uma única marcação, conforme design.md §4.4).

**Subheadline** (Inter, máx. 580px de largura):
```
A clear 4-phase system — plus 10 practical digital guides — designed to help you navigate low appetite, protein, everyday challenges, plateaus, and long-term maintenance.
```

**CTA primário** (botão laranja, largura total no mobile):
```
Get Instant Access — [$XX]
```

**Microcopy abaixo do CTA** (12–13px, `--text-secondary`, ícones lineares 14px antes de cada item):
```
One-time payment — no subscription · Instant digital download · Secure checkout
```

**Selo discreto** (badge editorial, fundo `#EEF1E7`, texto `--brand-dark`; ícone: graduation-cap linear):
```
Educational tools for GLP-1 users. Not medical advice.
```

### Visual
Mockup do Blueprint (capa + 1–2 páginas internas visíveis) em primeiro plano; stack dos 10 bônus parcialmente visível ao fundo (máx. 3 capas legíveis, resto sugerido). Specs: `design.md` §7.4–7.5. Imagem do hero: `fetchpriority="high"`, sem lazy-load, < 200KB, WebP com fallback.

### Variantes A/B (implementar via variável de build/edge — NÃO renderizar as três juntas)
- `hero_headline_a` (default): a headline acima.
- `hero_headline_b`: `Stop Guessing Your Way Through GLP-1. Follow a Clear, Practical Plan.`
- `hero_headline_c`: `The 4-Phase System for Navigating Real Life on GLP-1 Medication`

---

## SEÇÃO 3 — TRUST BAR
`id="trust-bar"` · Fundo `#FFFFFF` · Faixa horizontal fina logo abaixo do hero.

### Layout
Desktop: 5 itens em linha única, centralizados, separados por "·" ou espaçamento. Mobile: 2 colunas × 3 linhas OU scroll horizontal suave sem barra visível (preferir grid 2col). Cada item: ícone check linear `--brand-green` 16px + texto Inter 14–15px `--text-secondary`.

### Copy (5 itens)
```
Instant digital access
One-time payment
Mobile-friendly + printable
US & metric measurements
Judgment-free, education-first
```

---

## SEÇÃO 4 — PROBLEMA (reconhecimento, não drama)
`id="problem"` · Fundo `#FFFFFF` · Largura de leitura máx. 760px, centrada na página, texto à esquerda.

### Copy

**Headline** (H2, DM Serif Display):
```
Sound Familiar?
```

**Bullets de reconhecimento** (lista com ícone neutro — traço ou ponto fino verde-sálvia; NUNCA ícone de alerta/vermelho):
```
Not sure what to eat when your appetite disappears?
Worried whether that nausea, constipation, or fatigue is "normal"?
Trying to hit your protein target without forcing large meals?
Watching the scale stall and wondering if you should change something?
Quietly worried about losing muscle — or regaining the weight later?
Tired of conflicting advice from TikTok, Reddit, and 2 a.m. Google searches?
```

**Parágrafo de fechamento**:
```
Your medication changed your appetite. But nobody handed you a plan for what happens next — the meals, the symptoms, the routines, the real-life decisions. You don't need more noise. You need a practical roadmap.
```
"You need a practical roadmap." em peso 600 (Inter semibold), não em caps.

---

## SEÇÃO 5 — SOLUÇÃO (mecanismo: 4-Phase System)
`id="system"` · Fundo `#EEF1E7` · Títulos `--brand-dark`.

### Copy

**Headline** (H2):
```
Meet the GLP-1 Success Blueprint™
```

**Intro**:
```
A step-by-step educational system that organizes your entire GLP-1 journey into four practical phases — so you always know what to focus on next. No extreme rules. No shame. No guesswork.
```

**Cards do mecanismo** (4 cards; desktop: 4 colunas ou 2×2; mobile: 1 coluna. Cada card: número da fase em serifada grande + ícone linear + título + tagline itálica não → usar peso 600 em vez de itálico + descrição):

Card 1 — ícone: checklist
```
PRIME
Get ready with confidence.
Prepare your routine, kitchen, questions, and expectations before (or right at) the start.
```

Card 2 — ícone: calendário
```
INITIATE
Navigate your first 30 days.
Practical support for adaptation, common side-effect questions, and eating when appetite is low.
```

Card 3 — ícone: energia/força
```
OPTIMIZE
Protect what matters.
Prioritize protein, movement, recovery, and body composition — and understand plateaus without panic.
```

Card 4 — ícone: ciclo/infinito
```
SUSTAIN
Make it last.
Build flexible habits for maintenance, real life, and any medically supervised transition.
```

**Bloco "what this is / what this isn't"** (card branco destacado abaixo dos 4 cards, borda `--border-brand`):
```
This is not another generic weight-loss ebook, a diet program, or medical advice. It's a focused library of educational guides, checklists, trackers, and decision tools built around the real-life questions GLP-1 users face every day — always alongside your healthcare provider, never instead of them.
```
"not" em peso 600.

---

## SEÇÃO 6 — O QUE VOCÊ RECEBE (produto principal)
`id="blueprint"` · Fundo `#FFFFFF` · CTA presente.

### Copy

**Headline** (H2):
```
Inside The GLP-1 Success Blueprint™
```

**Sub** (Inter 18–20px, `--text-secondary`):
```
The 4-Phase Protocol to Lose the Weight, Keep the Muscle, and Build Habits That Last
```

**Cards por fase** (4 cards horizontais com mini-preview de página à esquerda + texto à direita; mobile: empilhados):
```
Phase 1 — PRIME
How GLP-1 medications work in plain language, questions to bring your prescriber, baseline tracking, and a printable readiness checklist.

Phase 2 — INITIATE
Week-by-week guidance for your first month: common vs. concerning symptoms, tolerable meals, hydration principles, and a weekly adaptation scorecard.

Phase 3 — OPTIMIZE
Protein made practical, muscle-supporting habits, minimum effective movement, and how to review a stall calmly before reacting.

Phase 4 — SUSTAIN
Maintenance routines, social flexibility, early-warning checklists, and a 90-day maintenance roadmap.
```

**Ferramentas internas** (linha de chips/badges editoriais, quebra em 2–3 linhas no mobile):
```
The Priority Plate™ · Protein Quick-Math Guide · Symptom → Action Matrix · Weekly Review Template · Body Composition Log · 5 educational Decision Trees (nausea, constipation, low appetite, hydration, plateau)
```

**File details** (caixa de transparência: card com fundo `#FCFBF8`, borda `--border-light`, ícone documento linear no topo):
```
Premium PDF, 80–120 pages · Clickable table of contents · Optimized for phone, tablet, and desktop · Printable in US Letter and A4 · Measurements in US and metric units · English language · Personal-use license · Instant download after checkout
```
⚠️ Grafia: **"license"** (americana). Nunca "licence".

**CTA intermediário**:
```
Get the Blueprint — [$XX]
```

---

## SEÇÃO 7 — BIBLIOTECA DE BÔNUS
`id="bonuses"` · Fundo `#F7F5EF` (alternar cards em branco) · Seção mais longa da página.

### Layout
- Intro + 4 grupos com subtítulo (H3) + cards de bônus.
- Card de bônus (`design.md` §6.3): mockup pequeno da capa à esquerda (mobile: topo) + conteúdo. Estrutura interna do card: título (Inter 600 20px) → subtítulo itálico não → Inter 400 15–16px `--text-secondary` → frase de dor (1 linha) → 4 bullets → linha de valor.
- Linha de valor: `($XX reference value)` em `--text-muted` + badge `INCLUDED FREE TODAY` (badge de destaque verde-oliva, `design.md` §6.5). NÃO usar preço riscado/strikethrough.
- Desktop: 2 cards por linha. Mobile: 1 coluna.
- Ícone de presente NÃO usar (emoji 🎁 do doc original é placeholder) — o mockup da capa já cumpre o papel visual.

### Copy

**Headline** (H2):
```
Plus 10 Premium Guides — Included Free Today
```

**Intro**:
```
Every guide answers a question GLP-1 users are already searching for. Use the one you need, the day you need it.
```

#### GROUP 1 (H3): `Start Strong`

**Card — Side Effect Survival Guide™**
```
Side Effect Survival Guide™
What to Do When Nausea, Constipation, Fatigue, Reflux & "Sulfur Burps" Hit
When symptoms show up, the last thing you need is more confusion.
• Quick-reference playbooks for nausea, constipation, fatigue, reflux, and low appetite
• A "common vs. concerning" table plus a clear red-flags card for when to contact your provider
• Printable SOS cards + a "What to Eat When Nothing Sounds Good" list
• Injection-Day Playbook and a 24-Hour Side Effect Reset
($37 reference value) — INCLUDED FREE TODAY
```

**Card — First 30 Days Survival Guide™**
```
First 30 Days Survival Guide™
Your Day-by-Day Playbook for the First Month on GLP-1
Stop wondering what you're supposed to do next.
• A visual 30-day calendar with week-by-week guidance
• Pre-day-1 prep checklist, starter kit list, and 10 questions for your prescriber
• Daily micro-tracker, weekly reviews, and scenario playbooks
• The 10 most common first-month mistakes — and how to sidestep them
($37 reference value) — INCLUDED FREE TODAY
```

#### GROUP 2 (H3): `Fuel & Protect Your Body`

**Card — Protein Priority Playbook™**
```
Protein Priority Playbook™
How to Meet Your Protein Needs When Your Appetite Is Low
A smaller appetite can make nutrition harder — not less important.
• Protein Quick-Math framework to discuss a personal target with your provider
• Protein-first meal hierarchy plus 30 quick meals and 30 snack combos
• Liquid, soft, and portable protein options for low-appetite days
• A "Protein Rescue Plan" for the hardest days
($27 reference value) — INCLUDED FREE TODAY
```

**Card — Muscle Preservation Blueprint™**
```
Muscle Preservation Blueprint™
Support Your Strength, Lean Mass & Confidence During Weight Loss
Losing weight and protecting your strength shouldn't feel like competing goals.
• The four pillars: protein, resistance, movement, recovery
• Minimum Effective Resistance Training framework with a 20-minute movement menu
• Adaptable weekly plan, progression basics, and general safety guidance
• Strength & mobility tracker + body composition check-ins
($37 reference value) — INCLUDED FREE TODAY
```

**Card — Face & Body Defense Guide™**
```
Face & Body Defense Guide™
Support Skin, Hair, Strength & Confidence Through Rapid Body Changes
Your body may change quickly — this judgment-free guide helps you focus on what you can support.
• Nutrition, hydration, sleep, and recovery fundamentals for general skin and hair support
• A simplified self-care routine and weekly checklist
• Questions to bring a dermatologist or qualified professional
• Wardrobe transition and body-confidence guide
($27 reference value) — INCLUDED FREE TODAY
```
⚠️ Nome do produto na página é "Face & Body Defense Guide™" — NUNCA "Ozempic Face..." (risco de trademark).

#### GROUP 3 (H3): `Navigate Progress & Long-Term Change`

**Card — Plateau Breaker Protocol™**
```
Plateau Breaker Protocol™
How to Understand a Stall Without Panic, Restriction, or Guesswork
A slower scale doesn't automatically mean you're doing something wrong.
• Plateau Diagnostic Worksheet + "Is this a true plateau?" decision tree
• A calm 7-Day Consistency Reset — no extremes, no crash rules
• Scale Neutrality Toolkit and beyond-the-scale dashboard
• Questions to bring your prescriber before changing anything
($27 reference value) — INCLUDED FREE TODAY
```

**Card — Life After GLP-1™**
```
Life After GLP-1™
The Long-Term Maintenance & Regain-Awareness Guide
The goal isn't just reaching a number — it's building routines you can return to.
• Two paths covered: ongoing use and medically supervised transitions
• Early Warning Signs checklist + monthly sustainability review
• 90-Day Maintenance Roadmap and food-environment redesign
• A guilt-free restart plan for imperfect weeks
($37 reference value) — INCLUDED FREE TODAY
```
⚠️ Subtítulo usa "Regain-Awareness" — NUNCA "Regain-Prevention" (compliance).

**Card — Food Noise Workbook™**
```
Food Noise Workbook™
Understand Your Triggers, Build Awareness & Create New Responses
Less food noise creates space — you still deserve tools for what fills it.
• Baseline assessment, trigger mapping, and hunger/fullness reflection scales
• Urge-surfing practice and a personal Pause Plan
• 14-Day Awareness Journal with weekly reflection pages
• A restart-without-shame plan
($27 reference value) — INCLUDED FREE TODAY
```

#### GROUP 4 (H3): `Make Real Life Easier`

**Card — High-Protein Recipe Book™**
```
High-Protein Recipe Book™
100+ Simple Recipes for Low-Appetite Days
When appetite is low, complicated meal plans are the last thing you need.
• 100+ protein-forward recipes: breakfasts, lunches, light dinners, snacks, and shakes
• Tags for real life: quick, no-cook, soft texture, freezer-friendly, portable
• Approximate protein per serving, prep time, and difficulty on every recipe
• US and metric measurements + batch-cooking and grocery lists
($47 reference value) — INCLUDED FREE TODAY
```

**Card — Restaurant & Social Survival Guide™**
```
Restaurant & Social Survival Guide™
Eat Out, Travel, Celebrate & Stay Flexible on GLP-1
Your plan should fit into your life — not shrink it.
• Restaurant decision cards, portion strategy, and fast-food smart choices
• Scripts for social pressure, comments, and questions you'd rather not answer
• Travel-day checklist, event prep sheet, and alcohol considerations to discuss with your provider
• A no-guilt reset guide for "I ate more than planned" days
($27 reference value) — INCLUDED FREE TODAY
```

---

## SEÇÃO 8 — TUDO EM UM SÓ SISTEMA (stack)
`id="stack"` · Fundo `#E1DBCE` (creme) · Títulos `--brand-dark`.

### Layout
Duas colunas no desktop: stack visual de todos os 11 mockups (esquerda, hierarquia: Blueprint grande + bônus menores organizados) e lista de valor (direita). Mobile: imagem do stack no topo, lista abaixo. Termina com bloco de preço resumido + CTA.

### Copy

**Headline** (H2):
```
Everything You Get Today
```

**Lista** (11 itens; cada linha: check verde + nome + valor à direita em `--text-muted`):
```
The GLP-1 Success Blueprint™ (80–120 pages) — $67 reference value
Side Effect Survival Guide™ — $37
First 30 Days Survival Guide™ — $37
Protein Priority Playbook™ — $27
Muscle Preservation Blueprint™ — $37
Face & Body Defense Guide™ — $27
Plateau Breaker Protocol™ — $27
Life After GLP-1™ — $37
High-Protein Recipe Book™ — $47
Food Noise Workbook™ — $27
Restaurant & Social Survival Guide™ — $27
```

**Bloco de fechamento**:
```
Combined Reference Value: $397
Today: [$XX] — one-time payment
```
"Combined Reference Value" em Inter 400; "$397" sem strikethrough. "Today: [$XX]" em DM Serif Display, tamanho de destaque.

**CTA**:
```
Get Instant Access — [$XX]
```
**Microcopy** (ícone cadeado linear):
```
Secure checkout · Instant access · No subscription
```

---

## SEÇÃO 9 — COMO USAR
`id="how-it-works"` · Fundo `#FFFFFF`.

### Layout
5 passos numerados. Desktop: linha horizontal com conectores sutis OU lista vertical com números em serifada; mobile: vertical. Números em DM Serif Display `--brand-green`.

### Copy

**Headline** (H2):
```
How It Works
```

**Passos** (título Inter 600 + descrição):
```
1. Purchase
Complete secure checkout in under a minute.

2. Download instantly
Get every guide right away, on any device.

3. Start where you are
Jump into the phase that matches your journey today.

4. Use what you need
Open the guide that answers today's question.

5. Check in weekly
Track patterns and bring better questions to your healthcare provider.
```

---

## SEÇÃO 10 — PARA QUEM É / NÃO É
`id="who-its-for"` · Fundo `#F7F5EF`.

### Layout
Dois cards lado a lado (desktop) / empilhados (mobile). Card "for you": borda `--border-brand`, checks verdes. Card "not for you": borda `--border-light`, ícone de traço/menos em `--text-muted` (NUNCA X vermelho — a página não pune o leitor).

### Copy

**Card 1 — título**: `This is for you if you:`
```
• Are starting — or currently using — a prescribed GLP-1 medication
• Want practical nutrition, routine, and habit support without extreme diet rules
• Are concerned about low appetite, protein, strength, plateaus, or maintenance
• Prefer organized, judgment-free education over scattered social media advice
• Want to feel more prepared for real-life situations: meals, travel, events, busy weeks
```

**Card 2 — título**: `This may not be for you if you:`
```
• Are looking for medical diagnosis, personalized dosing, or prescription advice
• Expect guaranteed weight loss or guaranteed results of any kind
• Want a replacement for your doctor, dietitian, or pharmacist
• Are seeking a crash diet or rapid-transformation promise
```

---

## SEÇÃO 11 — PROVA DE PRODUTO
`id="preview"` · Fundo `#FFFFFF`.

### Layout
Grid 3×2 (desktop) / 2×2 + scroll (mobile) de previews reais de páginas internas, com zoom/lightbox ao toque (`design.md` §7 — micro detalhe de alta conversão). Cada preview com legenda curta (ex.: "The Priority Plate™", "Symptom → Action Matrix", "30-Day Calendar", "Decision Tree: Nausea", "Recipe page", "Weekly Review"). Imagens lazy-load, WebP.

### Copy

**Headline** (H2):
```
See Exactly What's Behind the Button
```

**Copy**:
```
No mystery boxes. Browse real preview pages from the Blueprint and bonus guides — the layouts, the checklists, the decision trees, the recipe pages — before you buy.
```

### ⚠️ Regras
- Usar SOMENTE previews reais dos PDFs (placeholder durante dev: retângulos neutros com label "PREVIEW — pending asset", nunca conteúdo inventado).
- NÃO adicionar depoimentos, ratings, contagem de clientes ou logos de imprensa. Deixar comentário no código: `<!-- SOCIAL PROOF SLOT: adicionar somente com depoimentos reais + disclosure. Specs: 20–45 palavras, nome + contexto, foto real. -->`

---

## SEÇÃO 12 — SOBRE O CRIADOR
`id="creator"` · Fundo `#FCFBF8`.

### Layout
Foto real (esquerda, radius 16–20px, contexto cotidiano — cozinha/escritório; SEM jaleco se não houver credencial clínica documentada) + texto (direita). Mobile: foto acima do texto.

### Copy

**Headline** (H2):
```
Why I Built This
```

**Bio** (template — variável de config `CREATOR_BIO`; manter estrutura e tom ao preencher):
```
Hi, I'm [CREATOR NAME]. I created the GLP-1 Success Blueprint™ after [real context: personal experience / professional background helping GLP-1 users] and seeing how much conflicting, fragmented advice people face every day. I wanted one organized, judgment-free place for the practical side of this journey — built to work alongside your healthcare team, never instead of it.
```

### ⚠️ Regras
Proibido na bio e em qualquer lugar da página: "doctor-approved", "expert", "clinically proven", "FDA approved", credenciais não documentadas, "featured in" sem comprovação.

---

## SEÇÃO 13 — OFERTA E PREÇO (estrutura de 8 camadas)
`id="offer"` · Fundo `#344426` (seção escura premium) · Textos `#F7F5EF`/`#E1DBCE` · Card de preço branco central (`design.md` §6.3).

### Layout
Seção escura com card de preço branco centralizado (máx. 520px de largura). As 8 camadas empilham dentro/ao redor do card, nesta ordem exata:

### Copy

**Camada 1 — Recap** (dentro do card, checks verdes):
```
✓ The complete 4-Phase GLP-1 Success Blueprint™ (80–120 pages)
✓ 10 premium bonus guides covering side effects, protein, muscle, plateaus, recipes & real life
✓ 25+ printable tools: checklists, trackers, SOS cards, decision trees
✓ Mobile-friendly, printable, US & metric measurements
✓ Free updates to this edition
```

**Camada 2 — Ancoragem** (Inter, `--text-secondary`):
```
Combined Reference Value: $397
```

**Camada 3 — Preço** (DM Serif Display, maior elemento do card):
```
Today: [$XX]
One-time payment
```

**Camada 4 — CTA** (botão laranja, largura total do card):
```
Get Instant Access — [$XX]
```

**Camada 5 — Microcopy** (ícone cadeado):
```
Secure checkout · Instant digital access · No subscription — ever
```

**Camada 6 — Pagamento** (ícones monocromáticos discretos das bandeiras, altura 24px, tons de cinza):
```
[Visa] [Mastercard] [Amex] [PayPal] [Apple Pay]
Prices shown in USD
```

**Camada 7 — Garantia** (ícone escudo linear + texto, logo abaixo do card):
```
7-Day Satisfaction Guarantee
```

**Camada 8 — Prova pontual**: VAZIA. Comentário no código: `<!-- PROOF SLOT: número real de compradores quando existir (formato: "Joined by 1,247 GLP-1 users" — número exato, nunca redondo/inventado) -->`

---

## SEÇÃO 14 — GARANTIA
`id="guarantee"` · Fundo `#EEF1E7` · Componente: `design.md` §16 do manual (ícone escudo, título serifado, texto simples, borda verde sutil).

### Copy

**Headline** (H2):
```
Try It for 7 Days — Risk-Free*
```

**Copy**:
```
Download everything, explore the Blueprint, and put the tools to work. If it isn't a fit for you within 7 days, email us at [support email] and we'll refund your purchase. Simple as that.
```

**Nota de rodapé da seção** (12–13px, link):
```
*See our full refund policy for details.
```
Link → página `/refund-policy`. ⚠️ Prazo e condições devem ser confirmados com a plataforma de checkout e alinhados aos direitos do consumidor UK para conteúdo digital antes do lançamento (item bloqueante no QA).

---

## SEÇÃO 15 — FAQ
`id="faq"` · Fundo `#FFFFFF` · Acordeão (`design.md` §17): largura máx. 820–900px, centrado, texto à esquerda, ícone "+", apenas 1–2 abertos simultaneamente, animação curta.

### Implementação
- `<details>/<summary>` nativo estilizado (zero JS) OU Alpine.js — o que for mais leve.
- Adicionar schema `FAQPage` (JSON-LD) com as 12 perguntas — ver `02-tech-spec.md` §SEO.

### Copy (12 itens — pergunta / resposta)

```
1. Is this medical advice?
No. This is an educational product only. It does not diagnose, treat, or prescribe anything. Always follow your healthcare provider's guidance for medication, symptoms, and treatment decisions.

2. Does this work for Ozempic®, Wegovy®, Mounjaro®, Zepbound®, semaglutide, or tirzepatide users?
The guides cover general educational topics relevant to prescribed GLP-1 and GLP-1/GIP medications. Brand names belong to their owners; we are not affiliated with any manufacturer.

3. Can I use this if I've just started?
Yes — Phase 1 (PRIME) and the First 30 Days Survival Guide™ were built specifically for the beginning of the journey.

4. What if I've been on GLP-1 medication for months?
Start with Phase 3 (OPTIMIZE) or Phase 4 (SUSTAIN). The system is designed so you can jump into whichever phase matches where you are.

5. Will this tell me what dose to take?
No. Dosing, adjustments, and medication decisions belong exclusively to you and your prescriber. This product never gives dosing advice.

6. Will this replace my doctor or dietitian?
No — it's designed to complement professional care. Many tools help you organize observations and questions to make provider conversations more productive.

7. What format are the materials in?
Premium PDFs with clickable navigation. You'll receive the main Blueprint plus 10 bonus guides — over 400 combined pages of guides, checklists, and printable tools.

8. Are the PDFs mobile-friendly and printable?
Yes. Everything is optimized for phone, tablet, and desktop, and formatted for printing in both US Letter and A4.

9. How quickly will I get access?
Immediately. After checkout you'll receive instant download access, plus an email with your files. This is a digital product — nothing is shipped.

10. Are measurements in US and metric units?
Yes. Recipes and tools include cups/ounces and grams/milliliters, so they work in the US, Canada, and the UK.

11. Can I buy from the US, Canada, or the UK?
Yes. Prices are shown in USD; your bank or payment provider handles conversion. All content uses clear international English.

12. What if I experience severe symptoms?
Contact your healthcare provider or seek urgent medical care right away. This product is not for emergencies and never replaces professional medical attention.
```

---

## SEÇÃO 16 — CTA FINAL + FOOTER
`id="final-cta"` e `id="footer"` · Fundo `#344426` (CTA final e footer contínuos, separados por divisória sutil `--brand-sage` 1px com opacidade reduzida).

### Copy — CTA final

**Headline** (H2, `#F7F5EF`):
```
Feel More Prepared for the Real-Life Side of Your GLP-1 Journey
```

**Copy de fechamento**:
```
Stop piecing it together from random posts and late-night searches.
Get a practical, judgment-free system for your nutrition, routines, and long-term habits — starting today.
```

**CTA**:
```
Get Instant Access — [$XX]
```
**Microcopy**:
```
Instant access · One-time payment · Secure checkout · 7-day guarantee
```

### Copy — Footer

**Linha de links** (obrigatórios, todos funcionais no lançamento):
```
Contact: [support email] | Refund Policy | Privacy Policy | Terms of Use
© [year] [Brand Name]
```
Links → `/refund-policy`, `/privacy-policy`, `/terms`. E-mail como `mailto:` real, não formulário.

**Disclaimer obrigatório** (bloco destacado no footer, Inter 13–14px, `#E1DBCE`, line-height 1.6 — legível, NUNCA reduzido abaixo de 12px):
```
This product is for educational and informational purposes only. It is not medical advice and does not diagnose, treat, cure, or prevent any disease or medical condition. Always consult your qualified healthcare professional regarding medication, dosage, symptoms, nutrition, exercise, and any changes to your treatment plan. Seek urgent medical care for severe or concerning symptoms. Individual results and experiences vary. For adults only. Ozempic®, Wegovy®, Mounjaro®, Zepbound® and other trademarks belong to their respective owners. This product is not affiliated with, sponsored by, or endorsed by any pharmaceutical manufacturer.
```
⚠️ Este disclaimer aparece em DOIS lugares: footer (aqui) e visível próximo à Seção 13 (oferta) — na Seção 13, versão curta aceitável logo abaixo do card: `Educational product only. Not medical advice. Not affiliated with any pharmaceutical manufacturer.` com link "Full disclaimer" que rola até o footer.

---

## POSICIONAMENTO DOS CTAs (mapa consolidado)

| Posição | Seção | Texto | Estilo |
|---|---|---|---|
| 1 | Header (sticky) | Get Instant Access | Secundário → primário quando sticky |
| 2 | Hero | Get Instant Access — [$XX] | Primário |
| 3 | Fim da Seção 6 | Get the Blueprint — [$XX] | Primário |
| 4 | Fim da Seção 8 | Get Instant Access — [$XX] | Primário |
| 5 | Seção 13 (card) | Get Instant Access — [$XX] | Primário |
| 6 | Seção 16 | Get Instant Access — [$XX] | Primário |

Todos → `CHECKOUT_URL` + parâmetros de tracking (ver `03-tracking.md`). Nenhum outro botão de conversão. Barra fixa inferior mobile: OPCIONAL; se implementada, só aparece após o CTA do hero sair do viewport e nunca cobre conteúdo interativo (`design.md` §25.3).

## VARIÁVEIS DE CONFIGURAÇÃO (central, único lugar a editar)

```
PRICE            = "[$XX]"        # preço real — pendente (faixa recomendada $37–$47)
CHECKOUT_URL     = ""             # URL do checkout externo (Stripe/ThriveCart)
SUPPORT_EMAIL    = ""             # e-mail real de suporte
CREATOR_NAME     = ""
CREATOR_BIO      = ""             # preencher template da Seção 12
BRAND_NAME       = ""             # nome legal para copyright
YEAR             = "auto"
HERO_VARIANT     = "a"            # a | b | c (teste A/B)
GUARANTEE_DAYS   = "7"            # confirmar com plataforma + UK consumer rights
```
