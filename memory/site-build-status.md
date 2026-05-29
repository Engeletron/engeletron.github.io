---
name: site-build-status
description: Estado da implementação do novo site Astro (branch feat/site-rf-astro) — construído e verificado.
type: project
updated: 2026-05-28
---

O novo site (Astro) foi **implementado e verificado** em 2026-05-28, na branch
**`feat/site-rf-astro`** (11 commits). Plano: `docs/superpowers/plans/2026-05-28-engeletron-rf-site.md`.

**Stack:** Astro 4 + TS, CSS puro (tokens em `src/styles/global.css`), i18n nativo
(PT raiz; EN/ES/中文 em `/en/ /es/ /zh/`), `<model-viewer>` (CDN) para o chip 3D.

**Estrutura:**
- `src/i18n/ui.ts` — dicionário (130 chaves × 4 idiomas) + `useTranslations`/`getLangFromUrl`.
- `src/data/product.ts` — specs do EETX433A (fonte única) + whatsapp/e‑mail + caminho do GLB.
- `src/layouts/Base.astro`; componentes em `src/components/` (Nav, Footer, LangSwitcher,
  ChipViewer, SpecTable, AdvantagesCompare, AppCards, SiliconSection, ProductCard, ContactCTA,
  e os componentes de página `HomePage/ProductPage/...Page`).
- Páginas: `src/pages/` (PT) + `src/pages/{en,es,zh}/` (wrappers finos). **28 páginas** no total.
- `public/assets/` — GLB **Draco 83 KB** (`SOIC-8-web.glb`; fallback full em `SOIC-8-web-full.glb`),
  `silicon_wafer_manufacturing.png`, logos, fotos. `public/CNAME` = engeletron.com.br.
- `.github/workflows/deploy.yml` — deploy GitHub Pages (push na `main`). README com passos.
- Site antigo em `legacy/`.

**Comandos:** `npm install` · `npm run dev` (localhost:4321) · `npm run build` (→ `dist/`).

**QA (2026-05-28):** build 28 páginas 0 erros; `astro check` limpo; console 0 erros (PT e EN);
chip 3D Draco renderiza com a marcação EETX433A; foto do wafer ok; i18n funcional.

**Pipeline do chip 3D:** `assets/SOIC-8.STEP` → (cascadio+trimesh) `SOIC-8-web.glb` recolorido +
marcação EETX433A → otimizado Draco em `public/assets/`. Ver [[site-rebuild-decisoes]] e [[produto-eetx433a]].

**Follow-ups de polimento (não bloqueiam):**
- `<title>`/`<meta description>` das páginas estão fixos em PT — localizar por idioma.
- Eyebrow EN diz "BRASIL" → trocar para "Brazil".
- `ProductCard` tem um placeholder "[ chip 3D / foto do produto ]" — pôr imagem real/chip.
- Formulário de amostra (cadastro) não implementado — CTAs vão a WhatsApp/e‑mail (decisão atual).
- Datasheet/App Notes em "em breve" até os PDFs existirem.

**Deploy:** ✅ PUBLICADO em 2026-05-29 — site novo no ar em https://engeletron.com.br/ (repo
`Engeletron/engeletron.github.io`, build na branch `main`; `site-legacy` = backup do antigo;
`source` = fonte Astro). Detalhes e rollback em [[deploy-github-pages]].
