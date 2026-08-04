# GLP-1 Success Blueprint™ — Landing Page
## Documentação de implementação (Claude Code)

**Projeto**: Landing page de vendas para infoproduto low-ticket (bundle de PDFs educacionais para usuários de medicamentos GLP-1).
**Marca-mãe**: WellspringFlow. **Produto**: The GLP-1 Success Blueprint™ + 10 bonus guides.
**Mercados**: Estados Unidos (base) · Canadá · Reino Unido. **Idioma da página**: inglês americano.
**Tráfego esperado**: frio (Meta Ads/TikTok/Pinterest), majoritariamente mobile (>80%).

---

## Arquivos desta documentação

| Arquivo | Conteúdo | Quando usar |
|---|---|---|
| `design.md` | Sistema de design completo: tokens, cores, tipografia, grid, componentes, fotografia, animação, cultura de mercado | **Fonte única de verdade visual.** Consultar antes de estilizar qualquer elemento |
| `01-sections-copy.md` | As 16 seções da página com copy final em inglês, hierarquia de conteúdo, layout por seção e comportamento responsivo | **Fonte única de verdade de conteúdo e estrutura.** Implementar seção por seção, na ordem |
| `02-tech-spec.md` | Stack, estrutura de projeto, performance budgets, SEO, acessibilidade, imagens, fontes | Setup do projeto e requisitos técnicos transversais |
| `03-tracking.md` | Data Layer, eventos, sGTM/CAPI, consentimento, UTMs | Implementação da camada de mensuração |
| `04-qa-launch-checklist.md` | Checklist final de QA em 6 dimensões + itens bloqueantes de lançamento | Rodar ANTES de considerar a página pronta. Nenhum deploy sem passar 100% |

## Ordem de implementação recomendada

1. Ler `design.md` por completo (tokens, componentes, proibições).
2. Setup do projeto conforme `02-tech-spec.md` (Astro + Cloudflare Pages).
3. Implementar tokens CSS globais (`design.md` §28 / tokens da seção 3).
4. Implementar as 16 seções na ordem de `01-sections-copy.md`, mobile-first.
5. Implementar tracking conforme `03-tracking.md`.
6. Rodar `04-qa-launch-checklist.md` integralmente.

## Regras globais inegociáveis (resumo — detalhes nos arquivos)

1. **Copy é imutável.** A copy em inglês de `01-sections-copy.md` foi validada por compliance (nicho de saúde, 3 jurisdições). Não parafrasear, não "melhorar", não adicionar texto de venda. Placeholders `[$XX]`, `[CREATOR NAME]`, `[support email]`, `[year]`, `[Brand Name]` permanecem como variáveis de config até o cliente fornecer os valores.
2. **Grafia**: inglês americano em 100% da página ("license", "optimized", "color"). Nunca misturar variantes.
3. **Zero elementos de pressão**: sem countdown, sem "only X left", sem pop-up de saída, sem CTA pulsante, sem autoplay com som. Ver proibições em `design.md` §9 e §12.
4. **Zero prova social fabricada**: sem depoimentos, avaliações, contadores de clientes ou "as seen on". A Seção 11 usa prova de produto (previews). Espaços reservados para prova social futura estão marcados como comentário no código, vazios.
5. **Emojis do doc de copy (🎁 📄 🔒 🛡️ 🎓 ✓) são placeholders semânticos** — na implementação viram ícones SVG lineares do sistema (`design.md` §6.4), nunca emoji nativo.
6. **Um único CTA de conversão** em toda a página (mesmo destino de checkout, mesma cor `--cta-primary`), repetido nas posições especificadas.
7. **Disclaimers médicos/legais** são obrigatórios, visíveis e não podem ser reduzidos, escondidos ou movidos para longe da oferta.
8. **Performance é requisito, não meta**: LCP < 1.5s (4G), CLS < 0.05, INP < 200ms, primeiro carregamento < 500KB. Página que não bate isso não lança.
