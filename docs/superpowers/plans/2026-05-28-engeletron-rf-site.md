# Site Engeletron (fabless RF) — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reconstruir o site engeletron.com.br como um site estático **Astro**, dark/premium, em 4 idiomas (PT/EN/ES/中文), apresentando a Engeletron como fabless de RF e o produto EETX433A, com o chip 3D girável (model-viewer) e a seção de silício/wafer, publicado no GitHub Pages.

**Architecture:** Astro com i18n nativo (PT padrão na raiz; EN/ES/中文 sob `/en/ /es/ /zh/`). Conteúdo textual centralizado em dicionários i18n; specs do produto numa fonte única de dados; componentes reutilizáveis (Nav, Footer, Hero, ChipViewer, SpecTable, etc.). Build estático servido pelo GitHub Pages via GitHub Action. Sem backend — CTAs de amostra abrem WhatsApp/e‑mail.

**Tech Stack:** Astro 4, TypeScript, CSS puro (design tokens), `@google/model-viewer` (CDN), gltf-transform (otimização Draco do GLB), GitHub Actions (deploy Pages).

**Fonte de design:** `docs/superpowers/specs/2026-05-28-engeletron-rf-site-design.md` e os mockups aprovados em `.superpowers/brainstorm/1630-1780005353/content/` (home-engeletron, produto-eetx433a-page, home-silicio-section).

**Verificação (adaptada a site estático):** em vez de TDD unitário, cada fase verifica com `npm run build` (sem erro), `astro check` (sem erro de tipo), `npm run dev` + checagem de console limpo no navegador, troca de idioma funcional, e o model-viewer carregando o GLB.

---

## Mapa de arquivos

```
/ (raiz = projeto Astro)
├── package.json                      # deps e scripts
├── astro.config.mjs                  # i18n, site, base
├── tsconfig.json
├── .gitignore                        # node_modules, dist, .superpowers/
├── public/
│   ├── CNAME                         # engeletron.com.br
│   └── assets/                       # GLB, wafer, fotos, logos (movidos de /assets)
├── src/
│   ├── styles/global.css             # design tokens + base
│   ├── i18n/ui.ts                    # dicionários pt/en/es/zh + helper t()
│   ├── data/product.ts               # specs do EETX433A (fonte única)
│   ├── layouts/Base.astro            # <head>, fontes, tema, Nav, Footer, slot
│   ├── components/
│   │   ├── Nav.astro  Footer.astro  Button.astro  LangSwitcher.astro
│   │   ├── ChipViewer.astro          # <model-viewer> + anéis RF
│   │   ├── Hero.astro                # hero da home
│   │   ├── SpecTable.astro  AdvantagesCompare.astro  AppCards.astro
│   │   ├── SiliconSection.astro      # "Projetamos o silício" + wafer + fabless
│   │   └── ProductCard.astro  ContactCTA.astro
│   └── pages/
│       ├── index.astro               # home PT
│       ├── produtos/eetx433a.astro
│       ├── tecnologia.astro  aplicacoes.astro  empresa.astro  contato.astro  privacidade.astro
│       └── en/  es/  zh/              # mesmas páginas por locale (thin wrappers)
└── .github/workflows/deploy.yml
```

> **Migração:** os arquivos do site antigo (`index.html`, `privacy-policy.html`, `CNAME.txt`, `src/*.tsx` vazios) saem da raiz para `legacy/` (Task 1). Os ativos de `assets/` (logos, `SOIC-8-web.glb`, `silicon_wafer_manufacturing.png`, `danilo.jpg`, `gisely.jpg`, foto do componente) são copiados para `public/assets/`.

---

## Fase 0 — Repositório e scaffold

### Task 1: Inicializar git e arquivar o site antigo

**Files:** Create: `.gitignore`, `legacy/` ; Move: `index.html`, `privacy-policy.html`, `CNAME.txt`, `src/App.tsx`, `src/components/AsicCard.tsx`

- [ ] **Step 1: Inicializar git e branch**

```bash
cd <repo>
git init
git checkout -b feat/site-rf-astro
```

- [ ] **Step 2: Criar `.gitignore`**

```
node_modules/
dist/
.astro/
.superpowers/
*.log
assets/_marking.png
```

- [ ] **Step 3: Arquivar site antigo (não apagar)**

```bash
mkdir legacy
mv index.html legacy/ ; mv privacy-policy.html legacy/ ; mv CNAME.txt legacy/CNAME.txt.bak
rm -f src/App.tsx src/components/AsicCard.tsx ; rmdir src/components src 2>/dev/null || true
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: init repo, archive legacy static site"
```

### Task 2: Scaffold Astro

**Files:** Create: `package.json`, `astro.config.mjs`, `tsconfig.json`

- [ ] **Step 1: Criar projeto Astro (mínimo)**

```bash
npm create astro@latest . -- --template minimal --no-install --no-git --typescript strict --yes
npm install
```

- [ ] **Step 2: Substituir `astro.config.mjs`**

```js
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://engeletron.com.br',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
});
```

- [ ] **Step 3: Verificar build vazio** — Run: `npm run build` · Expected: build conclui sem erro (gera `dist/`).
- [ ] **Step 4: Commit** — `git add -A && git commit -m "chore: scaffold Astro with i18n config"`

---

## Fase 1 — Design system e layout base

### Task 3: Design tokens (`src/styles/global.css`)

**Files:** Create: `src/styles/global.css`

- [ ] **Step 1: Escrever tokens e base** (extraídos dos mockups aprovados)

```css
:root{
  --bg:#070b16; --bg2:#0b1120; --panel:#0f1729; --line:#1d2940;
  --txt:#e8eefc; --dim:#8b97b4; --cyan:#5ce1e6; --blue:#3b6dff;
  --maxw:1200px;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;color:var(--txt);background:var(--bg);line-height:1.6}
a{color:inherit;text-decoration:none}
h1,h2,h3,.font-grotesk{font-family:'Space Grotesk',sans-serif}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 5vw}
.cyan{color:var(--cyan)}
.eb{color:var(--cyan);font-weight:600;letter-spacing:.28em;font-size:11px;text-transform:uppercase}
.btn{font-size:13px;font-weight:600;padding:10px 18px;border-radius:9px;display:inline-block;cursor:pointer}
.btn.fill{background:linear-gradient(120deg,var(--cyan),var(--blue));color:#04101e}
.btn.ghost{border:1px solid #2a3a5c;color:#cdd8f2}
.chip{font-size:12.5px;border:1px solid var(--line);background:rgba(92,225,230,.05);color:#cdd8f2;padding:7px 12px;border-radius:8px}
.chip b{color:var(--cyan)}
section{padding:50px 0;border-top:1px solid var(--line)}
.stitle{font-size:12px;letter-spacing:.28em;text-transform:uppercase;color:var(--cyan);font-weight:600}
.sh{font-size:30px;margin:8px 0 6px;font-family:'Space Grotesk',sans-serif}
```

- [ ] **Step 2: Commit** — `git add -A && git commit -m "feat: design tokens and base styles"`

### Task 4: i18n — dicionário e helper (`src/i18n/ui.ts`)

**Files:** Create: `src/i18n/ui.ts`

- [ ] **Step 1: Escrever a estrutura de tradução** (chaves PT completas; EN/ES/ZH preenchidas na Fase 4)

```ts
export const languages = { pt: 'Português', en: 'English', es: 'Español', zh: '中文' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

export const ui = {
  pt: {
    'nav.products':'Produtos','nav.tech':'Tecnologia','nav.apps':'Aplicações',
    'nav.company':'Empresa','nav.contact':'Contato','cta.sample':'Solicitar amostra',
    'home.hero.eyebrow':'◢ Fabless RF Semiconductor · Brasil',
    'home.hero.title.a':'Projetamos o ','home.hero.title.em':'silício','home.hero.title.b':' que transmite.',
    'home.hero.tag':'Circuitos integrados de RF em 433.92 MHz para controles, alarmes e acesso — sem cristal, sem SAW, sem diodos. Da Engeletron, engenharia brasileira.',
    'cta.knowProduct':'Conheça o EETX433A','cta.whatsapp':'WhatsApp','cta.email':'E‑mail','cta.viewProduct':'Ver produto',
    'silicon.eyebrow':'◢ Projetamos o silício',
    'silicon.title.a':'Do projeto do CI ao ','silicon.title.em':'wafer fabricado e cortado','silicon.title.b':'.',
    'silicon.lead':'A Engeletron não apenas usa chips — nós projetamos o circuito integrado. O EETX433A nasce como um die em lâmina de silício, fabricado em wafer e cortado em milhares de unidades, encapsuladas em SOIC‑8.',
    'silicon.br.title':'🇧🇷 Brasil — Engeletron','silicon.br.body':'A ideia, a arquitetura de RF e o projeto/IP do EETX433A são nossos, feitos no Brasil.',
    'silicon.cn.title':'🌏 Parceiros — China','silicon.cn.body':'A produção do wafer e o encapsulamento são feitos por foundries parceiras na China, que reúnem o equipamento, a equipe e o custo necessários para produzir com qualidade.',
    'silicon.fabless':'Modelo fabless, com transparência: o projeto e a propriedade do EETX433A são da Engeletron; a fabricação fica com parceiros que têm a estrutura para isso — como operam as maiores empresas de chips do mundo.',
  },
  en: {}, es: {}, zh: {},
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui['pt']): string {
    return (ui[lang] as Record<string,string>)[key] ?? ui.pt[key];
  };
}
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return (seg in languages ? seg : defaultLang) as Lang;
}
```

> Nota: o fallback para `pt` garante que chaves ainda não traduzidas não quebrem a página.

- [ ] **Step 2: Verificar tipos** — Run: `npx astro check` · Expected: sem erros.
- [ ] **Step 3: Commit** — `git commit -am "feat: i18n dictionary and helpers"`

### Task 5: Dados do produto (`src/data/product.ts`)

**Files:** Create: `src/data/product.ts`

- [ ] **Step 1: Escrever a fonte única de specs**

```ts
export const eetx433a = {
  partNumber: 'EETX433A',
  freq: '433.92 MHz', power: '+13 dBm (ajustável)', keys: '1 a 6',
  encoding: 'Código fixo · 1.000.000 comb.', txTime: '800 ms – 5 s',
  oscillator: 'Interno (sem cristal/SAW)', protocol: 'Compatível HT6P20B',
  programming: 'Não requer (pronto p/ uso)', package: 'SOIC‑8 (150/50 mil), SMD',
  supply: 'Tape & reel — 4.000 pç/rolo (MOQ)',
  glb: '/assets/SOIC-8-web.glb',
  whatsapp: 'https://wa.me/5541999042212',
  email: 'danilo.engeletron@gmail.com',
} as const;
export const advantagesEliminated = ['Cristal SMD 3225 (XTAL)','Ressonador SAW SMD','2× diodo 1N4148 (MiniMELF)','Diodo duplo BAV70 (SOT‑23)'];
export const applications = [
  {icon:'🚪', key:'gates'}, {icon:'🚨', key:'alarms'}, {icon:'🔑', key:'access'},
];
```

- [ ] **Step 2: Commit** — `git commit -am "feat: EETX433A product data source"`

### Task 6: Layout base (`src/layouts/Base.astro`)

**Files:** Create: `src/layouts/Base.astro`

- [ ] **Step 1: Escrever o layout** (head, fontes, model-viewer via CDN, Nav, Footer)

```astro
---
import '../styles/global.css';
import Nav from '../components/Nav.astro';
import Footer from '../components/Footer.astro';
import { getLangFromUrl } from '../i18n/ui';
const { title, description } = Astro.props;
const lang = getLangFromUrl(Astro.url);
---
<!DOCTYPE html>
<html lang={lang}>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="icon" href="/assets/icon_engeletron.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
</head>
<body>
  <Nav />
  <slot />
  <Footer />
</body>
</html>
```

- [ ] **Step 2: Commit** — `git commit -am "feat: base layout"`

### Task 7: Nav, Footer, LangSwitcher

**Files:** Create: `src/components/Nav.astro`, `Footer.astro`, `LangSwitcher.astro`

- [ ] **Step 1: `Nav.astro`** (logo, links traduzidos, LangSwitcher, CTA amostra→WhatsApp)

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/ui';
import LangSwitcher from './LangSwitcher.astro';
import { eetx433a } from '../data/product';
const lang = getLangFromUrl(Astro.url); const t = useTranslations(lang);
const base = lang === 'pt' ? '' : `/${lang}`;
---
<nav>
  <a class="logo" href={base + '/'}>
    <span class="m"></span><b>ENGELETRON</b><span class="tag">SEMICONDUCTOR</span>
  </a>
  <div class="links">
    <a href={base + '/produtos/eetx433a'}>{t('nav.products')}</a>
    <a href={base + '/tecnologia'}>{t('nav.tech')}</a>
    <a href={base + '/aplicacoes'}>{t('nav.apps')}</a>
    <a href={base + '/empresa'}>{t('nav.company')}</a>
    <a href={base + '/contato'}>{t('nav.contact')}</a>
  </div>
  <div class="right">
    <LangSwitcher />
    <a class="btn fill" href={eetx433a.whatsapp}>{t('cta.sample')}</a>
  </div>
</nav>
<style>
  nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:22px;padding:14px 5vw;background:rgba(7,11,22,.82);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
  .logo{display:flex;align-items:center;gap:10px}
  .logo .m{width:26px;height:26px;border-radius:6px;background:linear-gradient(135deg,var(--cyan),var(--blue));box-shadow:0 0 16px rgba(92,225,230,.5)}
  .logo b{font-family:'Space Grotesk';letter-spacing:.18em;font-size:15px}
  .logo .tag{color:var(--cyan);font-size:9px;letter-spacing:.34em;border-left:1px solid var(--line);padding-left:9px}
  .links{display:flex;gap:20px;margin-left:18px;font-size:14px;color:var(--dim)}
  .links a:hover{color:var(--txt)}
  .right{margin-left:auto;display:flex;align-items:center;gap:14px}
  @media(max-width:760px){.links{display:none}}
</style>
```

- [ ] **Step 2: `LangSwitcher.astro`** — links para o mesmo path em cada locale

```astro
---
import { languages, getLangFromUrl } from '../i18n/ui';
const cur = getLangFromUrl(Astro.url);
const rest = Astro.url.pathname.replace(/^\/(en|es|zh)/, '') || '/';
function href(l:string){ return l === 'pt' ? rest : `/${l}${rest}`; }
---
<details class="lang">
  <summary>{cur.toUpperCase()} ▾</summary>
  <ul>{Object.keys(languages).map(l => <li><a href={href(l)}>{l.toUpperCase()}</a></li>)}</ul>
</details>
<style>
  .lang{position:relative} .lang summary{list-style:none;cursor:pointer;color:var(--cyan);font-size:13px;font-weight:600}
  .lang ul{position:absolute;right:0;top:130%;background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:6px;min-width:80px}
  .lang li{list-style:none} .lang a{display:block;padding:6px 10px;font-size:13px;color:var(--dim)} .lang a:hover{color:var(--txt)}
</style>
```

- [ ] **Step 3: `Footer.astro`** — dados institucionais (CNPJ, link privacidade)

```astro
---
import { getLangFromUrl } from '../i18n/ui';
const lang = getLangFromUrl(Astro.url); const base = lang==='pt'?'':`/${lang}`;
---
<footer>© 2026 ENGELETRON ENGENHARIA ELÉTRICA LTDA · CNPJ 37.912.040/0001-10 · Matinhos‑PR ·
  <a href={base+'/privacidade'}>Política de Privacidade</a></footer>
<style>footer{border-top:1px solid var(--line);padding:30px 5vw;color:var(--dim);font-size:12.5px;text-align:center}footer a{color:var(--cyan)}</style>
```

- [ ] **Step 4: Verificar** — Run: `npm run build` · Expected: sem erro.
- [ ] **Step 5: Commit** — `git commit -am "feat: Nav, Footer, LangSwitcher"`

---

## Fase 2 — Componentes de conteúdo

### Task 8: ChipViewer (model-viewer + anéis RF)

**Files:** Create: `src/components/ChipViewer.astro`

- [ ] **Step 1: Escrever o componente** (porta o hero 3D dos mockups)

```astro
---
import { eetx433a } from '../data/product';
const { height = '440px' } = Astro.props;
---
<div class="stagewrap" style={`--h:${height}`}>
  <div class="rings"><i style="width:170px;height:170px"></i><i style="width:300px;height:300px"></i><i style="width:430px;height:430px"></i></div>
  <model-viewer src={eetx433a.glb} alt="EETX433A — SOIC-8" camera-controls auto-rotate
    rotation-per-second="16deg" camera-orbit="40deg 64deg auto" exposure="1.1"
    tone-mapping="aces" shadow-intensity="1.2" environment-image="neutral" interaction-prompt="none"></model-viewer>
</div>
<style>
  .stagewrap{position:relative;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:radial-gradient(520px 360px at 55% 42%,rgba(92,225,230,.14),transparent 65%),#05070d}
  .rings{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
  .rings i{position:absolute;border:1px solid rgba(92,225,230,.16);border-radius:50%}
  model-viewer{width:100%;height:var(--h);background:transparent;--poster-color:transparent}
</style>
```

- [ ] **Step 2: Commit** — `git commit -am "feat: ChipViewer (model-viewer)"`

### Task 9: SpecTable, AdvantagesCompare, AppCards, SiliconSection, ProductCard, ContactCTA

**Files:** Create os 6 componentes em `src/components/`

- [ ] **Step 1: `SpecTable.astro`** — tabela de specs a partir de `product.ts`

```astro
---
import { eetx433a } from '../data/product';
const rows = [
  ['Frequência de operação', eetx433a.freq],['Potência de saída', eetx433a.power],
  ['Número de teclas', eetx433a.keys],['Codificação', eetx433a.encoding],
  ['Tempo de transmissão', eetx433a.txTime],['Oscilador', eetx433a.oscillator],
  ['Protocolo', eetx433a.protocol],['Gravação na produção', eetx433a.programming],
  ['Encapsulamento', eetx433a.package],['Fornecimento', eetx433a.supply],
];
---
<div class="specs">{rows.map(([k,v]) => <div class="spec"><span>{k}</span><b>{v}</b></div>)}</div>
<style>
  .specs{display:grid;grid-template-columns:1fr 1fr;gap:14px 40px}
  .spec{display:flex;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid #16223a;font-size:14.5px}
  .spec span{color:var(--dim)} .spec b{color:#eaf0fb;font-weight:500;font-family:'Space Grotesk'}
  @media(max-width:760px){.specs{grid-template-columns:1fr}}
</style>
```

- [ ] **Step 2: `AdvantagesCompare.astro`** — porta o bloco "Integração radical" (duas colunas: dispensados ✕ vs EETX433A ✓) do mockup `produto-eetx433a-page.html`.
- [ ] **Step 3: `AppCards.astro`** — 3 cards (portões/alarmes/acesso) a partir de `applications` + chaves i18n.
- [ ] **Step 4: `SiliconSection.astro`** — porta a seção aprovada `home-silicio-section.html` (texto fabless transparente já corrigido; imagem `/assets/silicon_wafer_manufacturing.png`; timeline Projeto→Wafer→Dicing→EETX433A). Usa chaves `silicon.*`.
- [ ] **Step 5: `ProductCard.astro`** — card de destaque do EETX433A (chips + "Ver produto").
- [ ] **Step 6: `ContactCTA.astro`** — bloco de CTA (amostra→WhatsApp, e‑mail) a partir de `product.ts`.
- [ ] **Step 7: Verificar** — `npm run build` sem erro. **Commit** — `git commit -am "feat: content components"`

---

## Fase 3 — Páginas (PT)

### Task 10: Home PT (`src/pages/index.astro`)

**Files:** Create: `src/pages/index.astro`

- [ ] **Step 1: Compor a home** (Base + Hero + ProductCard + Tecnologia + SiliconSection + AppCards + ContactCTA), portando a estrutura do mockup `home-engeletron.html` e usando `t()`.

```astro
---
import Base from '../layouts/Base.astro';
import ChipViewer from '../components/ChipViewer.astro';
import ProductCard from '../components/ProductCard.astro';
import SiliconSection from '../components/SiliconSection.astro';
import AppCards from '../components/AppCards.astro';
import ContactCTA from '../components/ContactCTA.astro';
import { getLangFromUrl, useTranslations } from '../i18n/ui';
import { eetx433a } from '../data/product';
const lang = getLangFromUrl(Astro.url); const t = useTranslations(lang);
const base = lang==='pt'?'':`/${lang}`;
---
<Base title="Engeletron — Circuitos integrados de RF" description={t('home.hero.tag')}>
  <div class="wrap">
    <div class="hero">
      <div>
        <div class="eb">{t('home.hero.eyebrow')}</div>
        <h1>{t('home.hero.title.a')}<em>{t('home.hero.title.em')}</em>{t('home.hero.title.b')}</h1>
        <p class="tag">{t('home.hero.tag')}</p>
        <div class="cta">
          <a class="btn fill" href={base+'/produtos/eetx433a'}>{t('cta.knowProduct')}</a>
          <a class="btn ghost" href={eetx433a.whatsapp}>{t('cta.sample')}</a>
        </div>
      </div>
      <ChipViewer height="460px" />
    </div>
    <ProductCard /><SiliconSection /><AppCards /><ContactCTA />
  </div>
  <style>
    .hero{display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:center;padding:60px 0 40px}
    .hero h1{font-size:clamp(40px,6.4vw,72px);line-height:1;letter-spacing:-.015em;margin:14px 0 8px}
    .hero h1 em{font-style:normal;background:linear-gradient(120deg,var(--cyan),var(--blue));-webkit-background-clip:text;background-clip:text;color:transparent}
    .hero .tag{color:var(--dim);font-size:18px;max-width:50ch;margin-bottom:24px}
    .cta{display:flex;flex-wrap:wrap;gap:10px}
    @media(max-width:900px){.hero{grid-template-columns:1fr}}
  </style>
</Base>
```

- [ ] **Step 2: Verificar no navegador** — `npm run dev`; abrir `http://localhost:4321/`; confirmar console limpo e model-viewer carregando. **Commit.**

### Task 11: Página de produto PT (`src/pages/produtos/eetx433a.astro`)

**Files:** Create: `src/pages/produtos/eetx433a.astro`

- [ ] **Step 1: Compor** portando `produto-eetx433a-page.html` (hero com ChipViewer + chips; SpecTable; AdvantagesCompare; AppCards; Downloads "em breve"; bloco comercial MOQ + amostra→WhatsApp/e‑mail). **Commit.**

### Task 12: Demais páginas PT

**Files:** Create: `tecnologia.astro`, `aplicacoes.astro`, `empresa.astro`, `contato.astro`, `privacidade.astro`

- [ ] **Step 1: `tecnologia.astro`** — diferenciais (oscilador interno, sem diodos, pronto p/ uso) + AdvantagesCompare.
- [ ] **Step 2: `aplicacoes.astro`** — AppCards expandidos com descrição.
- [ ] **Step 3: `empresa.astro`** — sobre a Engeletron + SiliconSection + dados institucionais (reaproveitar texto do `legacy/` e stakeholders da memória).
- [ ] **Step 4: `contato.astro`** — WhatsApp + e‑mail + endereço; nota "amostras: fale conosco" (sem form por ora).
- [ ] **Step 5: `privacidade.astro`** — portar o texto de `legacy/privacy-policy.html` (LGPD).
- [ ] **Step 6: Verificar** `npm run build`; **Commit.**

---

## Fase 4 — Internacionalização (EN / ES / 中文)

### Task 13: Preencher dicionários EN/ES/ZH

**Files:** Modify: `src/i18n/ui.ts`

- [ ] **Step 1: Traduzir todas as chaves de `pt`** para `en`, `es`, `zh` (mesmas chaves; manter termos técnicos como EETX433A, 433.92 MHz, dBm, SOIC‑8). **Commit.**

### Task 14: Rotas por locale

**Files:** Create: `src/components/pages/*.astro` (corpos compartilhados) e `src/pages/en|es|zh/*`

- [ ] **Step 1: Extrair o corpo de cada página PT** para `src/components/pages/HomePage.astro`, `ProductPage.astro`, etc. (recebem `lang` via `getLangFromUrl`). As páginas PT passam a importar esses corpos.
- [ ] **Step 2: Criar wrappers finos por locale.** Ex.: `src/pages/en/index.astro` → `---import Home from '../../components/pages/HomePage.astro';--- <Home/>`. Repetir para todas as páginas em `en/`, `es/`, `zh/`.
- [ ] **Step 3: Verificar troca de idioma** — `npm run dev`; alternar PT/EN/ES/中文 pelo LangSwitcher; confirmar conteúdo traduzido e URLs `/en/...`.
- [ ] **Step 4: Commit** — `git commit -am "feat: 4-language i18n routes"`

---

## Fase 5 — Ativos, otimização e deploy

### Task 15: Mover e otimizar ativos

**Files:** Create: `public/assets/*`, `public/CNAME`

- [ ] **Step 1: Copiar ativos** de `assets/` para `public/assets/` (logos SVG/PNG, `danilo.jpg`, `gisely.jpg`, foto do componente, `silicon_wafer_manufacturing.png`).
- [ ] **Step 2: Otimizar o GLB com Draco**

```bash
npx -y @gltf-transform/cli optimize assets/SOIC-8-web.glb public/assets/SOIC-8-web.glb --compress draco --texture-compress webp
```
Expected: GLB de saída bem menor que 3,3 MB; verificar que ainda abre no model-viewer.

- [ ] **Step 3: Criar `public/CNAME`** com o conteúdo `engeletron.com.br` (sem extensão).
- [ ] **Step 4: Verificar** `npm run build`; servir `dist/` e confirmar model-viewer + imagens. **Commit.**

### Task 16: Deploy GitHub Pages

**Files:** Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Workflow de deploy**

```yaml
name: Deploy to GitHub Pages
on: { push: { branches: [main] } }
permissions: { contents: read, pages: write, id-token: write }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: '${{ steps.deployment.outputs.page_url }}' }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2:** Documentar no README os passos manuais: criar repo no GitHub, habilitar Pages (Source: GitHub Actions), apontar DNS `engeletron.com.br` para o Pages, mesclar na `main`.
- [ ] **Step 3: Commit** — `git commit -am "ci: GitHub Pages deploy workflow"`

---

## Fase 6 — Verificação final

### Task 17: QA do site

- [ ] **Step 1: Build limpo** — `npm run build && npx astro check` (sem erros).
- [ ] **Step 2: Console limpo** — `npm run preview`; abrir cada página (PT/EN/ES/ZH) e confirmar 0 erros no console.
- [ ] **Step 3: model-viewer** — chip carrega e gira em desktop e mobile (DevTools responsivo).
- [ ] **Step 4: Links e i18n** — todos os links de nav/rodapé funcionam; troca de idioma preserva a página.
- [ ] **Step 5: Lighthouse** — alvo ≥90 em Performance/SEO/Acessibilidade.
- [ ] **Step 6: Responsivo** — hero, grids e nav colapsam bem no mobile.
- [ ] **Step 7: Commit final** — `git commit -am "test: QA pass"`.

---

## Notas de execução

- **Mockups aprovados** são a referência visual fiel: `home-engeletron.html`, `produto-eetx433a-page.html`, `home-silicio-section.html` (em `.superpowers/brainstorm/1630-1780005353/content/`). Portar o markup/CSS deles para os componentes Astro.
- **Não recriar o chip à mão** — usar o `SOIC-8-web.glb` (gerado do STEP real do cliente).
- **Texto fabless** já está no tom transparente aprovado (sem mencionar ausência de fábricas no Brasil).
- **Formulário de amostra:** fora de escopo agora (CTAs → WhatsApp/e‑mail). Adicionar depois (FormSubmit) como fase futura.
- **Datasheet / App Notes (PDF):** exibir "em breve" até serem fornecidos.
