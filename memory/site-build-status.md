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
- **Logomarca:** nav usa `public/assets/icon_engeletron.svg` (transparente) + glow ciano; rodapé com selo
  da marca (mesmo ícone centralizado). `logomark_engeletron.svg` NÃO é usado (tem `<rect fill:#fff>` embutido
  → fundo branco, ruim no dark). Favicon = mesmo ícone.
- **Datasheets:** PDFs PT/EN/ES/CN em `public/assets/datasheets/` (originais também em `assets/datasheets/`);
  mapa em `src/data/product.ts` (`datasheets` por idioma). Seção Documentação do produto mostra download
  **1-clique por idioma** (bandeira + nome + "PDF", attr `download`); botão "Baixar datasheet" do hero baixa o
  idioma atual. App Notes seguem "EM BREVE".
- **Página "Serviços"** (`/servicos` + `/en,/es,/zh`; `ServicosPage.astro` + `src/data/services.ts`): compila os
  6 serviços de engenharia do site antigo (Dispositivos IoT, Servidor IoT, Aplicativo IoT, Projetos de PCB,
  Firmware C/C++, Gigas de teste) em estilo premium; item "Serviços" no nav após "Produtos". i18n nos 4 idiomas.
- ⚙️ **Datasheets** (`src/data/product.ts`): flag `datasheetsEnabled` controla seção Documentação + botão do
  hero. Histórico: desativados em 29/05 (docs em revisão) → **REATIVADOS em 2026-06-02** com PDFs revisados.
  **Nomenclatura atual = locale** (`EETX433A_pt-BR.pdf` / `en-US` / `es-ES` / `zh-CN`), em `assets/datasheets/`
  (originais) **e** `public/assets/datasheets/` (servidos), com o mapa `datasheets` apontando p/ esses nomes.
  Os nomes antigos (`_PT/_EN/_ES/_CN.pdf`, ~124 KB) foram **substituídos** pelos revisados (~1 MB).
- **Nav (destaque da marca):** ícone real `icon_engeletron.svg` a **48px** + wordmark 19px; no mobile as
  bandeiras ficam numa **linha própria centralizada** (logo `flex:none` p/ evitar colisão com os links).
- **Estado ao fim da sessão (2026-05-29):** site no ar com produto + serviços + datasheets desativados;
  build **32 páginas**, 0 erros; mobile 0 overflow. `origin/source` = fonte; `origin/main` = build publicado.
- ✅ **PUBLICADO no ar em 2026-05-29 (sessão 2)** — fonte commitada e enviada p/ `origin/source` (1952cc1);
  build force-pushed p/ `origin/main` (0dbb226, com `.nojekyll` + `CNAME`). **Backup do build anterior** em
  `origin/backup-main-20260529` (adb6a1e). Verificado em https://engeletron.com.br/ (PT "Nossa criação"/
  "Solicitar cotação"; EN specs "adjustable/Fixed code"). **Rollback:** `git push -f origin backup-main-20260529:main`.

**Sessão 2026-06-02 — datasheets revisados publicados (no ar):**

- O dono entregou os PDFs revisados (~1 MB cada) em `assets/datasheets/` com nomes de locale
  (`EETX433A_pt-BR/en-US/es-ES/zh-CN.pdf`). Copiados p/ `public/assets/datasheets/`; os 4 antigos
  (`_PT/_EN/_ES/_CN.pdf`) foram removidos. Mapa `datasheets` em `product.ts` atualizado p/ os novos nomes.
- **`datasheetsEnabled: false → true`** — downloads de novo ativos nos 4 idiomas (hero + seção Documentação).
- Build 32 páginas, 0 erros. Verificado no ar (raw.githubusercontent `main`): HTML referencia os 4 PDFs,
  4 links `ds-lang` ativos, PDFs HTTP 200 (pt 1.033.476 / en 1.028.836 / es 1.031.699 / zh 1.192.842 bytes).
- **Git:** fonte `origin/source` = `e257bb8`; build `origin/main` = `86da20e` (force-push); **backup do build
  anterior** (991b733) em `origin/backup-main-20260602-datasheets`.
  **Rollback:** `git push -f origin backup-main-20260602-datasheets:main`.

**Sessão 2026-06-03 — datasheets atualizados (versões mais novas) publicados (no ar):**

- O dono substituiu os 4 PDFs em `assets/datasheets/` por versões **ainda mais novas** (pt 1.037.600 /
  en 1.032.902 / es 1.035.827 / zh 1.201.560 bytes — antes eram pt 1.033.476 / en 1.028.836 /
  es 1.031.699 / zh 1.192.842). Só os originais vieram trocados; copiei p/ `public/assets/datasheets/`
  (que é o que vai pro build). Nomes de arquivo (locale) e `datasheetsEnabled=true` inalterados — sem mudança de código.
- Build 32 páginas, 0 erros. Verificado no ar (raw.githubusercontent `main`): página do produto referencia
  os 4 PDFs; os 4 retornam HTTP 200 com os tamanhos NOVOS exatos.
- **Git:** fonte commitada `5bcf126` e enviada p/ `origin/source` (fast-forward, sem force); build
  force-pushed p/ `origin/main` = `b062a72`; **backup do build anterior** (86da20e) em
  `origin/backup-main-20260603-datasheets`.
  **Rollback:** `git push -f origin backup-main-20260603-datasheets:main`. Ver [[deploy-github-pages]].

**Sessão 2026-06-03 (2) — melhorias pós-auditoria publicadas (no ar):**

Auditoria do site (erros/ambiguidades/apresentação) → 3 ondas implementadas e publicadas:
- **SEO:** `Base.astro` agora emite `<link rel="canonical">` + `hreflang` (pt-BR/en/es/zh + `x-default`) +
  Open Graph/Twitter (`og:image` = `/assets/eetx433a-photo-stage.jpg`). Adicionado **`@astrojs/sitemap`**
  (`^3.7.3`, com bloco i18n → gera `sitemap-index.xml`+`sitemap-0.xml` com alternates) e **`public/robots.txt`**
  (aponta o sitemap). `astro.config.mjs` ganhou `integrations:[sitemap({...})]`.
- **Perf:** o script pesado `model-viewer` (CDN) agora carrega **só** nas páginas com chip 3D — `Base.astro`
  recebe prop `chip3d` (default false); passada só em `HomePage`/`ProductPage`. (Empresa NÃO usa chip.)
- **Texto/i18n (4 idiomas):** copy de "cadastro/registro" reescrita p/ o fluxo real (cotação via WhatsApp/
  e‑mail; datasheet = download livre) — chaves `contact.cta.sub`, `product.commercial.sample.title/body`.
  Selo `home.stat3.label`: "projeto nacional/national design/国产自研" → "projeto brasileiro / designed in
  Brazil / diseño brasileño / 巴西自主研发". Negrito da seção silício (`silicon.lead`) agora embutido no i18n
  e renderizado em TODOS os idiomas (antes só PT, via `.replace` frágil em `SiliconSection.astro`).
  Número de códigos no hero do produto localizado (`product.codes`: 1.000.000 / 1,000,000 / 100万) — antes
  fixo em formato PT. Criadas `meta.desc.tech`/`meta.desc.apps` (Tecnologia/Aplicações tinham desc genérica).
  Adicionado lead (`apps.lead`) na página Aplicações.
- **A11y/UX:** regra `:focus-visible` global (`global.css`); `target="_blank" rel="noopener"` nos links da
  página Contato.
- Build **32 páginas, 0 erros**. Verificado no ar: robots/sitemap 200; home com canonical+hreflang+og;
  Tecnologia sem model-viewer; datasheet pt-BR ainda 200 (1.037.600 B, sem regressão).
- **Git:** fonte `5093bdc` → `origin/source`; build force-push `origin/main` = `56c8e19`; **backup** (b062a72)
  em `origin/backup-main-20260603-melhorias`.
  **Rollback:** `git push -f origin backup-main-20260603-melhorias:main`.
- ✅ **Política de Privacidade (`src/data/privacy.ts`) — RESOLVIDA e publicada** (dono aprovou): e‑mail
  `danilo.engeletron@gmail.com` → corporativo `danilo@engeletron.com.br` (helper `contactList`, vale p/ os 4
  idiomas de uma vez); texto adaptado de "aplicativo" → "site + aplicativos da Engeletron" (intro, info de
  uso, seção de alterações); data → 03/06/2026. A frase sobre Google Play/App Store foi **mantida** (a
  Engeletron publica apps como serviço). Fonte `0fcdc7b`→source; `origin/main` = `d04d3c3`; **backup** (56c8e19)
  em `origin/backup-main-20260603-privacidade`. Rollback: `git push -f origin backup-main-20260603-privacidade:main`.
  Verificado no ar: corporativo presente, gmail ausente, data 2026.
