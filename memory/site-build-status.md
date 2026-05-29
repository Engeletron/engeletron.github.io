---
name: site-build-status
description: Estado do novo site Astro — construído, PUBLICADO no ar, e com ajustes pós-deploy (e-mails, WhatsApp, mobile).
type: project
updated: 2026-05-29
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
- ✅ RESOLVIDO: card "Nosso produto" da home usa o chip 3D (ChipViewer). (Testamos uma foto real no card e o usuário REJEITOU — manter 3D.)
- Formulário de amostra (cadastro) não implementado — CTAs vão a WhatsApp/e‑mail (decisão atual).
- Datasheet/App Notes em "em breve" até os PDFs existirem.

**Mudanças pós-deploy (2026-05-29, todas no ar):**
- E-mails de contato → **danilo@engeletron.com.br** e **gisely@engeletron.com.br** (em `src/data/product.ts` e `EmpresaPage.astro`).
- **Ícone oficial do WhatsApp**: `src/components/WhatsAppIcon.astro` + botão flutuante verde (FAB) em todas as páginas, via `Base.astro`.
- **Responsividade mobile**: guardas anti-overflow no `global.css` (`overflow-x:hidden`, img/svg max-width) + `Nav.astro` quebra o menu em linha no mobile (≤760px). Verificado a 390px: sem overflow horizontal.
- **Foto real do chip** tratada (fundo azul removido + realce) salva em `public/assets/eetx433a-photo.png` (transparente) e `eetx433a-photo-stage.jpg` (palco escuro). NÃO usada no card (3D mantido) — disponível para uso futuro.
- **Como atualizar o site:** editar a fonte (repo local na branch `main` = fonte Astro; espelhada na branch remota `source`) → `npm run build` → publicar `dist/` na `main` remota (force-push do build). Rollback: `git push --force origin site-legacy:main`.

**Deploy:** ✅ PUBLICADO em 2026-05-29 — site novo no ar em https://engeletron.com.br/ (repo
`Engeletron/engeletron.github.io`, build na branch `main`; `site-legacy` = backup do antigo;
`source` = fonte Astro). Detalhes e rollback em [[deploy-github-pages]].

**Mudanças de UI (2026-05-29, sessão 2 — BUILDADAS e verificadas, ainda NÃO publicadas):**
- "comb." → "códigos" (codes / 编码) no card e no spec `encoding` (`product.ts`).
- Fontes pequenas aumentadas ~1.4× em todo o site (global.css + componentes) p/ legibilidade.
- Bandeiras BR/China agora são **IMAGENS** (não emoji — ver [[astro-model-viewer-flags]]): seletor de
  idioma = 4 bandeiras 60px lado a lado (e o botão CTA ao lado foi removido); destaques (eyebrow do
  hero, stat BR, boxes silício BR/CN) usam `Flag.astro`. China corrigida (🌏→bandeira CN). EN: "Brasil"→"Brazil".
- Hero: eyebrow "◢ Nossa criação" acima do chip 3D, alinhado ao eyebrow do hero (`align-items:start`).
- **Todo o site fala em "cotação"** (não "amostra"): botões + headings (contact.cta.title/sub, contact.page.sub,
  product.commercial.title/sample.title/sample.body) trocados nos 4 idiomas (quote / cotización / 报价).
  As CHAVES i18n `cta.sample`/`product.commercial.sample.*` mantêm o nome interno (não exibido).
- Card "Nosso produto": chip agora **ESTÁTICO em vista de cima, texto horizontal** (ChipViewer com props
  `orbit/rotate/controls`; orbit `270deg 4deg`). Hero **mantém girando** com `disable-zoom` (rotação sim, zoom não).
- `ChipViewer.astro` ganhou props `orbit`, `rotate`, `controls` (defaults preservam o hero).
- Build 28 páginas, 0 erros; verificado no navegador (desktop 1280 + mobile 390px), 0 erros de console.
- **Auditoria de tradução (i18n)**: valores de spec antes fixos em PT agora localizados via `eetx433aI18n`
  + `advantagesEliminatedI18n` em `product.ts` (SpecTable/AdvantagesCompare fazem merge por idioma). Chips
  "ajustável/Código fixo", rótulo "Endereço", link "Política de Privacidade" (Footer) e cargos da equipe
  passaram a usar i18n. ✅ `<title>`/`<meta>` de todas as páginas localizados (`meta.title.*`/`meta.desc.*`) e
  a Política de Privacidade inteira traduzida nos 4 idiomas via `src/data/privacy.ts` (render por idioma).
  (Astro: generic `<...>` em expressão de template quebra o build — usar `as any`.)
- Pós-ajustes: "+13 dBm" com "dBm" em branco nos chips; "1N4148" → "LL4148" em todo o site.
- **Seção "Engenharia inclusa"** (`EngineeringProgram.astro`) na Home e na página do Produto: 5 serviços
  gratuitos para quem adota o EETX433A (consultoria RF, projeto p/ gabinete, documentação de produção,
  protótipo, testes de potência) + card-selo "Custo absorvido pela Engeletron" + CTAs. i18n nos 4 idiomas.
  Auditoria mobile (375/320 px, PT+ZH): 0 overflow horizontal em todas as páginas.
- ✅ **PUBLICADO no ar em 2026-05-29 (sessão 2)** — fonte commitada e enviada p/ `origin/source` (1952cc1);
  build force-pushed p/ `origin/main` (0dbb226, com `.nojekyll` + `CNAME`). **Backup do build anterior** em
  `origin/backup-main-20260529` (adb6a1e). Verificado em https://engeletron.com.br/ (PT "Nossa criação"/
  "Solicitar cotação"; EN specs "adjustable/Fixed code"). **Rollback:** `git push -f origin backup-main-20260529:main`.
