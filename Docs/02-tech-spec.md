# 02 — Especificação Técnica
## Stack, estrutura, performance, SEO e acessibilidade

---

## 1. Stack

| Camada | Escolha | Justificativa |
|---|---|---|
| Framework | **Astro 4/5** (SSG puro) | Zero-JS por padrão; página é 95% estática |
| Hospedagem/Edge | **Cloudflare Pages** (+ Workers se necessário) | PoPs excelentes em US/CA/UK; TTFB < 100ms; headers e A/B no edge |
| Interatividade | **Vanilla JS** (preferência) ou Alpine.js | FAQ, sticky header, lightbox, sticky CTA — orçamento total de JS de UI: **< 15KB** min+gzip |
| CSS | CSS puro com custom properties (tokens do `design.md` §28) ou Tailwind com tokens mapeados | Sem CSS-in-JS, sem runtime |
| Fontes | Self-hosted, woff2, subset latin | DM Serif Display (400) + Inter (400, 600; 650 via variable font se disponível, senão 600/700) |
| Checkout | Externo (Stripe Payment Links / ThriveCart / equivalente) | Página não processa pagamento; CTA = `<a>` para `CHECKOUT_URL` |
| Tracking | sGTM + CAPI (ver `03-tracking.md`) | Client-side mínimo |

**Proibido**: React/Vue/Svelte runtime para esta página, jQuery, bibliotecas de animação (AOS, GSAP etc.), CSS frameworks pesados, iframes de terceiros acima da dobra, fontes via Google Fonts CDN (sempre self-host).

## 2. Estrutura de projeto (Astro)

```
/
├── public/
│   ├── fonts/                  # woff2 self-hosted
│   ├── images/                 # otimizadas no build (ver §5)
│   ├── favicon.svg + favicon.ico
│   └── robots.txt
├── src/
│   ├── config.ts               # TODAS as variáveis de 01-sections-copy.md
│   ├── styles/
│   │   ├── tokens.css          # design.md §28 verbatim + derivados (--bg-soft-green)
│   │   └── global.css          # reset, base, tipografia
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Cta.astro           # componente único de CTA (primário/secundário via prop)
│   │   ├── BonusCard.astro
│   │   ├── PhaseCard.astro
│   │   ├── Faq.astro
│   │   ├── Lightbox.astro
│   │   └── Icon.astro          # SVGs lineares inline (sprite)
│   ├── sections/               # 1 arquivo por seção, numerados
│   │   ├── S01Header.astro ... S16FinalCtaFooter.astro
│   ├── layouts/Base.astro      # head, meta, schema, tracking snippet
│   └── pages/
│       ├── index.astro
│       ├── privacy-policy.astro
│       ├── terms.astro
│       └── refund-policy.astro
└── astro.config.mjs
```

- **Toda copy** vem de `01-sections-copy.md` — pode ser hardcoded nos componentes de seção (conteúdo estático) ou centralizada em `src/content/copy.ts`; escolher UM padrão e manter.
- **Nenhum texto novo** pode ser inventado durante a implementação. Placeholder faltante = usar a variável de config, nunca improvisar copy.

## 3. Performance (requisitos bloqueantes)

### 3.1 Budgets
| Métrica | Limite | Ferramenta de verificação |
|---|---|---|
| LCP | < 1.5s (4G simulado) | Lighthouse mobile, WebPageTest |
| CLS | < 0.05 | Lighthouse |
| INP | < 200ms | Lighthouse / CrUX pós-launch |
| Peso total 1º load | < 500KB | Network tab (sem cache) |
| JS de UI | < 15KB min+gzip | Bundle analyzer |
| Lighthouse Performance (mobile) | ≥ 95 | CI ou manual |

### 3.2 Técnicas obrigatórias
- Hero image: `fetchpriority="high"`, `loading="eager"`, dimensões explícitas (`width`/`height`) — LCP element.
- Todas as demais imagens: `loading="lazy"`, `decoding="async"`, dimensões explícitas (previne CLS).
- Fontes: `font-display: swap`, `<link rel="preload">` apenas para as 2 fontes usadas acima da dobra; fallback metric-adjusted (`ascent-override` etc. ou `size-adjust`) para reduzir CLS de swap.
- CSS crítico inline no `<head>` (Astro faz por padrão em páginas pequenas); zero CSS não usado.
- Nenhum script de terceiro bloqueante; tracking com `defer`/pós-`load` (ver `03-tracking.md`).
- Sem layout shift em: sticky header (reservar altura), badges, imagens, accordion do FAQ (animar `grid-template-rows` ou `max-height` com conteúdo medido).
- `prefers-reduced-motion`: desabilitar todas as animações de entrada.

### 3.3 Headers (Cloudflare `_headers`)
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: [gerar conforme domínios finais de tracking/checkout — não usar 'unsafe-inline' para scripts; usar nonce ou hash]

/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable
```
HTML: cache curto/`stale-while-revalidate` via Cloudflare padrão.

## 4. Responsividade

- **Mobile-first obrigatório**: escrever estilos base para mobile e expandir com `min-width`.
- Breakpoints: `640px` (tablet-sm), `900px` (tablet/desktop-sm), `1200px` (desktop). Container máx. 1240px (`design.md` §5).
- Regras por dispositivo, grid e espaçamento: seguir `design.md` §5 e §25 integralmente (alturas de botão, área de toque 44×44, texto mínimo 16px, sem scroll horizontal).
- Testar em: iPhone SE (375px), iPhone 14/15 (390–393px), Android médio (412px), iPad (768px), desktop 1440px.
- Sticky CTA mobile (se implementado): `IntersectionObserver` no CTA do hero; aparece somente quando ele sai do viewport; `padding-bottom` no body para não cobrir o footer; dispensável via performance — só manter se não degradar INP.

## 5. Imagens

- Pipeline: `astro:assets` (Sharp) gerando WebP (+ AVIF quando ganho > 10%) com `srcset` responsivo.
- Larguras geradas: 400 / 800 / 1200 (hero até 1600).
- Hero mockup: < 200KB na maior variante. Previews (Seção 11): < 80KB cada, lazy.
- `alt` descritivo em toda imagem (ver §7). Mockups pendentes durante dev: usar placeholder neutro cinza com label — NUNCA gerar conteúdo fake de página interna.
- Ícones: SVG inline via componente `Icon.astro` (sprite único), stroke 1.5–2px, `currentColor` — jamais font-icons ou emoji.

## 6. SEO e metadados

```html
<title>The GLP-1 Success Blueprint™ — Practical Guides for Your GLP-1 Journey</title>
<meta name="description" content="A 4-phase educational system plus 10 practical guides to help you navigate low appetite, protein, side-effect questions, plateaus, and long-term habits on prescribed GLP-1 medication. Instant digital access.">
```
- Canonical absoluto; `og:title`, `og:description`, `og:image` (1200×630 com mockup), `twitter:card=summary_large_image`.
- `lang="en"` no `<html>`.
- **Um único `<h1>`** (headline do hero); H2 por seção; H3 nos grupos de bônus — hierarquia sem pular níveis.
- JSON-LD: `Product` (name, description, offers com `price` da config, `priceCurrency: USD`) + `FAQPage` (as 12 perguntas/respostas verbatim da Seção 15). NÃO incluir `aggregateRating` (não há reviews reais).
- `robots.txt`: liberar página principal; `noindex` nas páginas de política é opcional (manter indexáveis é aceitável).
- Compliance de anúncio: a página deve manter message match com os anúncios (headline ↔ promessa do ad) — documentar variante de headline usada por campanha.

## 7. Acessibilidade (WCAG 2.1 AA — bloqueante)

- Contraste: validar TODOS os pares de `design.md` §3.6, com atenção especial: branco sobre `#C96F3B` (CTA — passa como large/bold text; não usar essa combinação em texto pequeno), `#E1DBCE` sobre `#344426` (footer), `#9D9B95` sobre branco (usar só em texto ≥ 15px de apoio; se falhar AA, escurecer para `#7A7D76`).
- Foco visível em todos os interativos (outline 2px `--brand-green`, offset 2px) — nunca `outline: none` sem substituto.
- FAQ: se `<details>`, semântica nativa já cobre; se custom, `button` com `aria-expanded` + `aria-controls`.
- Lightbox: foco preso no modal, `Esc` fecha, `aria-modal`, retorno de foco ao gatilho.
- Skip link ("Skip to content") como primeiro elemento focável.
- `alt` real e descritivo (ex.: "Preview of the Priority Plate meal-building page from the Blueprint") — não "image", não vazio em imagem informativa.
- Ícones decorativos: `aria-hidden="true"`.
- Nenhuma informação transmitida apenas por cor.
- Navegação 100% por teclado testada de ponta a ponta.

## 8. Páginas legais (mesmo repositório)

`/privacy-policy`, `/terms`, `/refund-policy` — layout simples (header reduzido + texto + footer), mesmos tokens. Conteúdo legal será fornecido pelo cliente; até lá, páginas existem com placeholder claramente marcado `[LEGAL COPY PENDING — do not launch]`. **Lançamento é bloqueado enquanto houver placeholder legal** (ver checklist).

## 9. O que NÃO implementar (reforço)

- Countdown/timers de qualquer tipo; contadores de estoque/vagas.
- Pop-ups (entrada, saída, scroll), notificações fake de compra ("Sarah from Texas just bought…").
- Depoimentos, estrelas, ratings, "as seen on", logos de imprensa.
- Chat widgets, players de vídeo de terceiros acima da dobra.
- Barra de urgência no topo.
- Strikethrough de preço (a ancoragem usa "Combined Reference Value", sem preço riscado).
- Qualquer texto de venda não presente em `01-sections-copy.md`.
