---
name: site-rebuild-decisoes
description: Decisões do novo site da Engeletron (pivot p/ fabless de RF) + pipeline aprovado do modelo 3D do chip.
type: decision
updated: 2026-05-28
---

**Projeto:** reconstruir o site engeletron.com.br para a NOVA fase — de empresa de serviços
(PCB/firmware/apps) para **fabless de circuitos integrados de RF**, com produto único
[[produto-eetx433a]].

**Decisões de base (definidas com o usuário em 2026-05-28):**
- **Abordagem:** reconstruir do ZERO (site novo, moderno, rápido), reaproveitando logo/fotos.
- **Idiomas:** os 4 — PT / EN / ES / 中文.
- **Identidade visual:** DARK tech / RF premium, **mantendo o logo atual**.
- **Direção visual escolhida:** HÍBRIDO **B+C** — energia de RF (anéis/sinal saindo do chip) no
  hero + credibilidade técnica (specs / painel estilo datasheet) abaixo.
- **Conversão:** contato + WhatsApp + e-mail; "Solicitar amostra" via **formulário de cadastro**
  curto (nome, empresa, e-mail, aplicação, volume). Sem login/área de conta.
- **Estrutura proposta:** Home · Produtos→EETX433A · Tecnologia · Aplicações · Empresa · Contato/Amostra.
- **Cores de marca:** azul #1743c0 + ciano #5ce1e6 (sobre fundo dark).
- **Referências do setor:** AirTouch (en.airtouching.com), SGR Semi, Phosense — porém "muito mais moderno/rápido".

**Imagens do chip — RESOLVIDO e APROVADO ("ficou ótimo e realista"):**
- Usuário forneceu `assets/SOIC-8.STEP` (modelo CAD real e preciso) **e uma foto real** do
  componente (com marcação EETX433A / lote 2604 E. e ponto do pino 1).
- Pipeline 3D: STEP → GLB via **Python (cascadio 0.0.17 + trimesh 4.12.2)**, recolorido (corpo
  epóxi escuro + terminais metálicos) → `assets/SOIC-8-web.glb`; exibido com **`<model-viewer>`**
  (girável). Produção: otimizar GLB (Draco/meshopt).
- ✅ Marcação **EETX433A / lote 2604 E.** gravada na tampa do GLB (decalque PIL+trimesh), corpo
  epóxi escuro + terminais metálicos — **APROVADO pelo usuário**. Arte do chip FINALIZADA.
  (Pipeline de marcação: PNG via PIL com fonte Arial → plano com UV na tampa, normal +Y,
  double-sided, baseColorTexture+emissive; cor base em **0–1 floats**, não 0–255.)
- ⚠️ NÃO desenhar o chip à mão (SVG/3D paramétrico ficou ruim) — usar SEMPRE o STEP/foto reais.
  Ver [[preferencias-usuario]].
