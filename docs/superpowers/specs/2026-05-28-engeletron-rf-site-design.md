# Design — Novo site Engeletron (fabless de RF)

**Data:** 2026-05-28 · **Status:** aprovado para planejamento · **Domínio:** engeletron.com.br

## 1. Objetivo e contexto

A Engeletron Engenharia Elétrica Ltda mudou de fase: deixou de ser uma empresa de **serviços**
(PCB, firmware, apps, IoT) para ser uma **fabless de circuitos integrados de RF**, com um produto
único — o **ASIC EETX433A**. O site atual (engeletron.com.br, HTML estático de serviços) será
**reconstruído do zero** com padrão **premium, moderno e rápido**, comunicando essa virada.

**Referências de setor:** AirTouch (en.airtouching.com), SGR Semi, Phosense — porém com visual
mais moderno e leve.

## 2. Público e idiomas

- **Público:** engenheiros e compradores de fabricantes de controles remotos, alarmes, portões e
  controle de acesso (B2B), no Brasil e exterior.
- **Idiomas:** 4 — **PT (padrão), EN, ES, 中文**. Seletor no header.

## 3. Arquitetura de informação (páginas)

1. **Home** — hero da empresa + destaque do produto + tecnologia + aplicações + empresa + contato.
2. **Produtos → EETX433A** — página de produto completa (specs, vantagens, aplicações, downloads,
   comercial, amostra).
3. **Tecnologia** — diferenciais de RF (oscilador interno, sem cristal/SAW, sem diodos).
4. **Aplicações** — portões, alarmes, controle de acesso.
5. **Empresa** — sobre a Engeletron, dados institucionais (CNPJ, Matinhos‑PR, engenheiros CREA‑PR).
6. **Contato / Amostra** — formulário de cadastro para amostra + WhatsApp + e‑mail.

## 4. Identidade visual (direção aprovada: "Híbrido B+C")

- **Tema:** dark tech / RF premium. Fundo `#070b16`; painéis `#0f1729`; linhas `#1d2940`.
- **Acentos de marca:** ciano `#5ce1e6` + azul `#3b6dff` (mantém a paleta da marca atual, agora em
  fundo escuro). **Logo atual mantido.**
- **Tipografia:** títulos **Space Grotesk**; texto **Inter**.
- **Energia "B" (RF):** anéis/ondas de emissão ao redor do chip no hero.
- **Credibilidade "C" (datasheet):** specs em tabela técnica, chips de parâmetros, tom preciso.
- **Componentes recorrentes:** nav fixa com blur; botões `fill` (gradiente ciano→azul) e `ghost`;
  cards com borda `#1d2940`; seções separadas por borda superior.

## 5. Peça central — modelo 3D do EETX433A

- **Fonte:** arquivo CAD real do cliente `assets/SOIC-8.STEP` (geometria precisa: chanfro lateral,
  ponto do pino 1, terminais gull‑wing).
- **Pipeline (validado nesta sessão):** STEP → GLB via Python (`cascadio` + `trimesh`); recolorido
  (corpo epóxi escuro + terminais metálicos); **marcação `EETX433A` gravada na tampa** (decalque
  de textura, fonte Arial, alinhada como na foto real do componente) → `assets/SOIC-8-web.glb`.
- **Exibição:** Web Component **`<model-viewer>`** (girável, auto‑rotação) no hero da home e da
  página de produto, com anéis de RF ao fundo.
- **Produção:** otimizar o GLB (compressão **Draco/meshopt**) para carregar leve.
- **Imagem de produto complementar:** **foto real** do componente (fornecida pelo cliente) — usar
  como imagem fotográfica nas galerias/SEO.
- **Regra:** não recriar o chip "à mão" (SVG/3D paramétrico) — usar sempre o STEP/foto reais.
- **Imagem de die de silício (credibilidade de design):** seção **"Projetamos o silício"** na Home
  e em Tecnologia/Empresa, com **micrografia real do die / foto de wafer** do EETX433A, reforçando
  que a Engeletron **projeta o CI** (não só monta). Para autenticidade, usar a **foto real do die**
  fornecida pelo cliente (mesmo fluxo do STEP/foto do componente). Placeholder elegante até chegar.

## 5.1 Posicionamento (modelo fabless, transparente)

Mensagem honesta e padrão da indústria: a Engeletron é **fabless** — **projeta** o CI e **terceiriza
a fabricação**. Comunicar de forma transparente:
- **Concepção & projeto:** Brasil (Engeletron). A ideia, a arquitetura de RF e o projeto/IP do
  EETX433A são da empresa.
- **Fabricação & wafer:** parceiros (foundries) **na China** — a produção do wafer e o
  encapsulamento são feitos por parceiros que têm equipamento, equipe e custo adequados.
  (Sem mencionar a ausência de fábricas no Brasil; foco no que é positivo.)
- Enquadrar como o modelo das maiores empresas de chips do mundo (que também não têm fábrica
  própria). **Não exagerar** ("classe mundial" → linguagem factual e humilde).

## 6. Conteúdo do EETX433A (fonte da verdade)

**Specs:** 433.92 MHz · +13 dBm ajustável · 1–6 teclas · código fixo, 1.000.000 combinações ·
Tx 800 ms–5 s · oscilador interno · compatível HT6P20B · não requer gravação na produção ·
encapsulamento SOIC‑8 (150/50 mil, JEDEC MS‑012‑AA), SMD.

**Diferenciais (figura "Integração radical"):** dispensa cristal (HC49S/SMD 3225), ressonador SAW
SMD, e diodos (2× 1N4148 MiniMELF/SOD‑80 ou BAV70 duplo) ⇒ menos BOM, placa menor, menor custo.

**Comercial:** fornecimento em tape & reel, **4.000 pç/rolo = MOQ**; **amostras mediante cadastro**.

**Downloads (futuros):** Datasheet (PDF) e Application Notes (PDF) — exibir como "em breve" até
serem produzidos.

## 7. Conversão / contato

- **Sem login/área de conta.**
- **"Solicitar amostra"** → formulário de **cadastro curto** (nome, empresa, e‑mail, aplicação,
  volume estimado). Envio por e‑mail (ex.: serviço tipo FormSubmit, como no site atual) — definir
  no planejamento.
- Canais diretos: **WhatsApp** e **e‑mail** comercial.

## 8. Abordagem técnica (a confirmar no planejamento)

Requisitos: estático, rápido, multilíngue (4 idiomas), deploy em **GitHub Pages** no domínio
`engeletron.com.br`, fácil de manter, suportar `<model-viewer>`.

- **Recomendado:** **Astro** (gera HTML estático, ~zero JS por padrão, i18n nativo, componentes
  reutilizáveis, ótimo desempenho, deploy estático em Pages). Alternativa simples: **HTML/CSS/JS
  puro** com dicionário de i18n (sem build) — mais simples, porém repetitivo nos 4 idiomas.
- **Evitar:** SPA pesada (React/Next runtime) — exagero para um site de produto.
- Decisão final do stack na fase de planejamento.

## 9. Deploy

- Renomear `CNAME.txt` → **`CNAME`** (sem extensão) para o domínio custom no GitHub Pages.
- Inicializar git e publicar (a pasta ainda não é repositório).
- Remover `src/*.tsx` vazios (resquício não usado).

## 10. Não‑objetivos / futuro

- Catálogo multi‑produto (hoje há 1 produto; estrutura deve permitir crescer).
- Datasheet/App Notes reais (entram quando prontos).
- E‑commerce/checkout (venda é B2B via MOQ/RFQ offline).

## 11. Verificação (como saberemos que ficou bom)

- Renderiza sem erros de console; Lighthouse de performance alto (estático + GLB otimizado).
- 4 idiomas navegáveis; troca de idioma funcional.
- `<model-viewer>` carrega o chip em desktop e mobile; fallback (foto) se WebGL indisponível.
- Formulário de amostra envia e gera lead.
- Responsivo (mobile/desktop).

## 12. Questões em aberto

1. Stack final (Astro vs HTML puro)?
2. Serviço de envio do formulário (FormSubmit, Formspree, e‑mail próprio)?
3. Conteúdo institucional da página Empresa (texto/fotos da equipe) — reaproveitar do site atual?
4. Lote/date code na marcação do chip 3D — removido (só "EETX433A"); manter assim.
