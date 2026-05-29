---
name: produto-eetx433a
description: Especificações, encapsulamento e dados comerciais do ASIC EETX433A (produto único da Engeletron).
type: reference
updated: 2026-05-28
---

**EETX433A** — ASIC transmissor RF da Engeletron; é o **único produto** e o foco da nova fase.

Aplicação: transmissores para armar/desarmar alarmes residenciais e automotivos, abrir/fechar
portão eletrônico, e controle de acesso.

**Especificações:**
- Frequência: **433.92 MHz**
- Potência: **+13 dBm, ajustável**
- Teclas: **1 a 6**
- Codificação: **código FIXO**, **1.000.000** (1 milhão) de combinações
- Tempo de transmissão: **mín 800 ms / máx 5 s**
- **Dispensa gravação na produção** (pronto para uso); número serial de fábrica
- Compatível com protocolo **HT6P20B**

**Diferenciais (peça-chave de vendas) — DISPENSA componentes externos:**
- sem cristal (nem HC49S, nem SMD 3225) → oscilador interno proprietário
- sem ressonador **SAW SMD**
- sem diodos para 3+ teclas (nem 2× **1N4148** MiniMELF/SOD‑80, nem **BAV70** duplo SOT‑23)
- ⇒ menos BOM, placa menor, menor custo, menos pontos de falha.

**Encapsulamento:** SOIC‑8 / SOP‑8, "**150/50 mil**" = corpo 150 mil (3.9 mm) + passo 50 mil
(1.27 mm). Padrão **JEDEC MS‑012‑AA**. Tem **chanfro** ao longo do lado do pino 1 e **PONTO do
pino 1** no canto (não chanfro central). Montagem **SMD**.
Cotas (mm): A≤1.75 · A1 0.10–0.25 · A2 1.25–1.65 · b 0.31–0.51 · c 0.17–0.25 · D 4.80–5.00 ·
E 5.80–6.20 · E1 3.80–4.00 · e 1.27 BSC · L 0.40–1.27 · θ 0–8°.
Marcação real (foto fornecida pelo usuário): linha 1 **EETX433A**, linha 2 **2604 E.** (lote),
ponto do pino 1 no canto inferior‑esquerdo.

**Comercial:**
- Fornecimento em **tape & reel, 4000 pçs/rolo** = **MOQ** (quantidade mínima de compra).
- **Amostras mediante cadastro.**

Ver [[site-rebuild-decisoes]].
