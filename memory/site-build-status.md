---
name: site-build-status
description: Estado do novo site Astro — construído, PUBLICADO no ar, e com ajustes pós-deploy (e-mails, WhatsApp, mobile, notas de aplicação).
type: project
updated: 2026-07-22
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

**Sessão 2026-06-04 — App Notes removido + datasheets novos publicados (no ar):**

- **App Notes removido:** card "📘 Application Notes" da seção Documentação (`ProductPage.astro`) excluído — decisão
  do dono de integrar esse conteúdo ao próprio datasheet. Sobra só o card Datasheet EETX433A (download por idioma).
  Chaves i18n órfãs `product.docs.an.label`/`product.docs.an.sub` removidas nos 4 idiomas (`ui.ts`).
  `product.docs.soon` **MANTIDA** (fallback caso `datasheetsEnabled=false`).
- **Datasheets atualizados:** o dono trocou os 4 PDFs em `assets/datasheets/` por versões **maiores** (~2.1–2.3 MB:
  pt 2.193.451 / en 2.189.052 / es 2.191.751 / zh 2.359.491 — antes ~1.0–1.2 MB). Copiados p/ `public/assets/datasheets/`.
  Mesmos nomes de locale → **sem** mudança no mapa `datasheets`/`product.ts`.
- Build 32 páginas, 0 erros. Verificado no ar (raw `main`): página do produto com 0 "Application Notes", 1 card
  Datasheet, 4 links `ds-lang`; os 4 PDFs HTTP 200 com os tamanhos NOVOS exatos.
- **Git:** fonte commitada `01f937c` → `origin/source`; build force-push `origin/main` = `b1edbaa`; **backup do build
  anterior** (d04d3c3) em `origin/backup-main-20260604-appnotes-ds`.
  **Rollback:** `git push -f origin backup-main-20260604-appnotes-ds:main`. Ver [[deploy-github-pages]].

**Sessão 2026-06-07 — limpeza de assets não usados (PUBLICADO no ar):**

- Removidos todos os assets sem referência de runtime (commit `6bfa42b` na branch local `main`/fonte).
- **`public/assets/` (peso morto ~3.8 MB que ia pro `dist/` sem uso):** `SOIC-8-web-full.glb` (fallback nunca
  carregado — ChipViewer só usa `SOIC-8-web.glb`), `asic.png`, `eetx433a-photo.png` (foto transparente "p/ uso
  futuro" — nunca usada), `logomark_engeletron.png`/`.svg` (logomark com fundo branco, descartada), `icon_engeletron.png`
  (só o `.svg` é usado) e `public/favicon.svg` (default do Astro; favicon real = `/assets/icon_engeletron.svg`).
- **`assets/` raiz (originais, não entram no build):** 4 fotos antigas (asic, EETX433A_real_photo, eetx433a-photo,
  eetx433a-photo-stage), `SOIC-8.glb`+`SOIC-8-web.glb` (intermediários 3D, regeneráveis do `.STEP`), `photo-1550751827`
  (stock), `silicon_wafer_manufacturing2.jpeg`, `gitkeep.txt`, pasta `nova logomarca engeletron - 200924/` (kit+zips),
  banner LinkedIn, QR WeChat.
- **MANTIDOS (fonte-de-verdade):** `assets/SOIC-8.STEP`, `assets/datasheets/`, `assets/icon_engeletron.svg`,
  `assets/danilo.jpg`, `assets/gisely.jpg`; e todo `public/assets/` em uso (SOIC-8-web.glb, icon_engeletron.svg,
  eetx433a-photo-stage.jpg [=og:image], silicon_wafer_manufacturing.png, flags/, danilo/gisely.jpg, datasheets/).
- Verificado: `npm run build` = **32 páginas, 0 erros**; `dist/` sem o peso morto e com todos os assets usados presentes.
- ✅ **PUBLICADO no ar em 2026-06-07:** fonte enviada p/ `origin/source` (fast-forward → `1717ffe`); build
  force-push p/ `origin/main` = `5172b2c`; **backup do build anterior** (`b1edbaa`) em
  `origin/backup-main-20260607-assets-cleanup`. **Rollback:** `git push -f origin backup-main-20260607-assets-cleanup:main`.
  Verificado via `raw.githubusercontent` (sem cache): os 6 arquivos removidos retornam **404** (SOIC-8-web-full.glb,
  favicon.svg, logomark_engeletron.svg, asic.png, eetx433a-photo.png, icon_engeletron.png) e os usados retornam **200**
  (index.html, SOIC-8-web.glb, icon_engeletron.svg, eetx433a-photo-stage.jpg, silicon_wafer_manufacturing.png,
  datasheets/EETX433A_pt-BR.pdf, flags/br.png). Ver [[deploy-github-pages]].

**Sessão 2026-06-07 (2) — fotos corporativas da equipe + ordem do menu (PUBLICADO no ar):**

- **Fotos da equipe trocadas** (`EmpresaPage.astro`): `danilo.jpg`/`gisely.jpg` → novos headshots corporativos
  `danilo_corp.png`/`gisely_corp.png` (fundo branco, blazer azul-marinho). Originais full-res (1254×1254, ~880 KB)
  ficam em `assets/` como fonte-de-verdade; servidas otimizadas em `public/assets/` a **384×384 (~106–113 KB)**
  (4× o avatar de 96px). As antigas `danilo.jpg`/`gisely.jpg` foram **removidas** de `public/assets/` e `assets/`.
  Verificado com screenshot: render circular correto na seção "Quem projeta" (vale p/ Empresa nos 4 idiomas).
- **Ordem do menu invertida** (`Nav.astro`): **Serviços agora vem ANTES de Produtos** (era Produtos→Serviços).
  Nav é usado via `Base.astro` → vale em todas as páginas/idiomas.
- Build 32 páginas, 0 erros.
- ✅ **PUBLICADO no ar em 2026-06-07 (sessão 2):** fonte → `origin/source`; build force-push `origin/main` = `dbecc9f`;
  **backup do build anterior** (`5172b2c`) em `origin/backup-main-20260607-fotos-nav`.
  **Rollback:** `git push -f origin backup-main-20260607-fotos-nav:main`. Verificado via `raw.githubusercontent`:
  `danilo_corp.png`/`gisely_corp.png` → 200; `danilo.jpg`/`gisely.jpg` → 404; nav com "Serviços" antes de "Produtos".
  Ver [[deploy-github-pages]].

**Sessão 2026-07-06 — Notas de aplicação do EETX433A publicadas (no ar):**

- O dono entregou **4 notas de aplicação** em `assets/application_notes/`, cada uma nos 4 idiomas de locale
  (`AN-XXX_EETX433A_pt-BR/en-US/es-ES/zh-CN.pdf`) — cada nota documenta um **produto real** feito com o chip:
  **AN-TX** (Transmissor Chaveiro, controle 2–6 botões, v1.0), **AN-MAG** (Detector de Abertura Magnético
  porta/janela, Smart+violação, v1.1), **AN-PIR** (Detector de Movimento PIR, 1/2 elementos, v1.0),
  **AN-TXFLASH** (Transmissor Automotivo por pulso de farol, sem bateria, v1.0).
- **Onde ficam:** nova subseção **"Notas de aplicação"** dentro da seção Documentação da página do Produto
  (`ProductPage.astro`), logo abaixo do card do Datasheet. **Card por nota** espelhando o padrão do datasheet
  (ícone + título + badge de versão em ciano + grade 2×2 de 4 idiomas com bandeira + `download`). Sem JS novo.
- **Implementação:** `src/data/product.ts` ganhou `appNotes[]` (`{id,prefix,icon,version}`), `anLocale`
  (pt→pt-BR etc.) e flag **`appNotesEnabled`** (on/off, igual `datasheetsEnabled`). Títulos/descrições nos 4
  idiomas em `i18n/ui.ts` (chaves `product.docs.an.heading` + `product.docs.an.<id>.label/.sub`). PDFs servidos
  de `public/assets/appnotes/` (16); originais preservados em `assets/application_notes/` (fonte-de-verdade).
- Build **32 páginas, 0 erros**; navegador desktop 1280 + mobile 375px sem overflow, console 0 erros.
- ✅ **PUBLICADO no ar em 2026-07-06:** fonte commitada (`6c9a463`) → `origin/source`; build force-push
  `origin/main` = **`f8cb1c3`**; **backup do build anterior** (`dbecc9f`) em `origin/backup-main-20260707-appnotes`.
  **Rollback:** `git push -f origin backup-main-20260707-appnotes:main`. Verificado via `raw.githubusercontent`
  (`main`): 16 refs de PDF na página do produto, heading em PT (`Notas de aplicação`) e ZH (`应用笔记`), os 4
  PDFs pt-BR retornam HTTP 200. Ver [[deploy-github-pages]].

**Sessão 2026-07-07 — datasheets + notas de aplicação corrigidos (PUBLICADO no ar):**

- O dono substituiu **todos os 20 PDFs** em `assets/` (4 datasheets + 16 app notes) por versões corrigidas —
  as anteriores continham erros. **Versões/badges inalterados** (datasheet v1.3; AN-TX v1.0, AN-MAG v1.1,
  AN-PIR v1.0, AN-TXFLASH v1.0 — verificado extraindo o texto dos PDFs com pypdf) → **zero mudança de código**;
  só cópia p/ `public/assets/{datasheets,appnotes}/`. Tamanhos novos: datasheets pt 2.471.812 / en 2.457.631 /
  es 2.468.812 / zh 4.012.492.
- Build 32 páginas, 0 erros.
- ✅ **PUBLICADO no ar em 2026-07-07:** fonte `98805bb` → `origin/source`; build force-push `origin/main` =
  **`c8cd07b`**; **backup do build anterior** (`f8cb1c3`) em `origin/backup-main-20260707-docs-fix`.
  **Rollback:** `git push -f origin backup-main-20260707-docs-fix:main`. Verificado via `raw.githubusercontent`:
  os 20 PDFs retornam Content-Length exato dos arquivos novos (20/20 OK). Ver [[deploy-github-pages]].

**Sessão 2026-07-22 — datasheet v1.4 + app notes atualizados (PUBLICADO no ar):**

- O dono substituiu novamente **os 20 PDFs** em `assets/` (4 datasheets + 16 app notes). **Datasheet subiu
  p/ v1.4** (21 págs; zh 20) — a versão do datasheet NÃO aparece no site, então zero mudança de código.
  App notes mantêm versões/badges (AN-TX v1.0, AN-MAG v1.1, AN-PIR v1.0, AN-TXFLASH v1.0 — verificado com
  pypdf). Só cópia p/ `public/assets/{datasheets,appnotes}/`. Datasheets novos: pt 2.905.961 / en 2.889.039 /
  es 2.905.170 / zh 3.300.092.
- Build 32 páginas, 0 erros.
- ✅ **PUBLICADO no ar em 2026-07-22:** fonte `141be8d` → `origin/source`; build force-push `origin/main` =
  **`97be338`**; **backup do build anterior** (`c8cd07b`) em `origin/backup-main-20260722-docs-v14`.
  **Rollback:** `git push -f origin backup-main-20260722-docs-v14:main`. Verificado via `raw.githubusercontent`:
  os 20 PDFs retornam Content-Length exato dos arquivos novos (20/20 OK). Ver [[deploy-github-pages]].
