---
name: arquitetura-site-estatico
description: Stack e arquitetura — Astro 6 (SSG) + TypeScript + CSS puro + i18n + model-viewer; build estático para GitHub Pages.
type: project
updated: 2026-05-29
---

**NÃO é HTML puro escrito à mão nem WordPress.** É um site **estático moderno (Jamstack)** gerado por **Astro**.

**Stack / linguagens:**
- **Astro 6** (gerador estático, componentes `.astro`) + **TypeScript** + **HTML5** + **CSS puro**
  (design tokens/variáveis em `src/styles/global.css`; sem Bootstrap/Tailwind).
- **i18n próprio:** `src/i18n/ui.ts` (dicionário dos 4 idiomas + `useTranslations`/`getLangFromUrl`);
  rotas PT na raiz e `/en /es /zh` (wrappers finos em `src/pages/**` que só importam o componente da página).
- **Chip 3D:** web component **`<model-viewer>`** (Google, via CDN) + modelo **GLB Draco** em `public/assets/`.
- **Build/tooling:** Node + npm + **Vite** (embutido no Astro). `npm run dev` (localhost:4321) · `npm run build` (→ `dist/`).
- Fontes Google (Space Grotesk + Inter); bandeiras = **imagens PNG locais** (emoji de bandeira não
  renderiza no Windows — ver [[astro-model-viewer-flags]]).

**Estrutura:**
- `src/pages/**` = rotas. `src/components/*.astro` = Nav, Footer, HomePage, ProductPage, ServicosPage,
  EmpresaPage, ContatoPage, PrivacidadePage, SiliconSection, EngineeringProgram, AppCards, SpecTable,
  AdvantagesCompare, ChipViewer, Flag, LangSwitcher, WhatsAppIcon.
- **Dados (fonte única):** `src/data/product.ts` (specs + datasheets + flag), `services.ts`, `privacy.ts`,
  `company.ts` (as 2 PJs). Textos localizáveis ficam no `i18n/ui.ts`.
- `public/` = assets servidos (flags, GLB, datasheets, ícone). `legacy/` = site antigo (não usado).

Ver [[projeto-overview]], [[site-build-status]], [[deploy-github-pages]].
