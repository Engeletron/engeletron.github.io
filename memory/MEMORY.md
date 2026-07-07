# MEMORY — Índice de Memória do Projeto Engeletron

> Índice carregado a cada sessão. Uma linha por memória. **Não** coloque conteúdo de
> memória aqui — apenas o ponteiro. O conteúdo vive nos arquivos `*.md` ao lado.
> Formato de cada memória está documentado em [`../CLAUDE.md`](../CLAUDE.md).

## Projeto
- [Visão geral do projeto](projeto-overview.md) — site Astro: produto EETX433A (fabless RF) + serviços de engenharia, 4 idiomas, no ar.
- [Stack & arquitetura](arquitetura-site-estatico.md) — Astro 6 + TypeScript + CSS puro + i18n + model-viewer (NÃO é HTML puro/WordPress).
- [Estado funcional verificado](estado-funcional.md) — build 32 páginas, 0 erros; mobile 375/320px sem overflow.

## Nova fase — pivot p/ fabless de RF (2026-05)
- [Produto EETX433A](produto-eetx433a.md) — specs, encapsulamento SOIC-8, MOQ/tape&reel, diferenciais (sem cristal/SAW/diodos).
- [Decisões do novo site](site-rebuild-decisoes.md) — rebuild dark/premium, 4 idiomas, direção B+C; arte do chip (STEP→GLB marcado) aprovada; modelo fabless (projeto BR / fab China); seção wafer.
- Documento de design completo: `docs/superpowers/specs/2026-05-28-engeletron-rf-site-design.md` (aprovado 2026-05-28).
- [Estado do build / features](site-build-status.md) — registro completo das mudanças (cotação, bandeiras-imagem, seção Serviços, entidades, datasheets+flag, logo, nav, notas de aplicação). Build 32 páginas, no ar.

## Deploy / Publicação
- [Deploy / publicação](deploy-github-pages.md) — NO AR em engeletron.com.br; processo de deploy (dist→main), branches e rollback.

## Referência
- [Stakeholders e contatos](stakeholders.md) — diretores/engenheiros e dados institucionais da empresa.
- [Entidades legais](entidades-legais.md) — 2 PJs: desenvolvedora (Eng. Elétrica) vs comercial (Comércio e Importação), CNPJs; endereço não exibido.
- [Gotchas Astro/bandeiras/model-viewer](astro-model-viewer-flags.md) — emoji de bandeira não renderiza no Windows (usar imagens); attr booleano em custom element.

## Convenções
- [Preferências do usuário](preferencias-usuario.md) — comunicação em pt-BR; confirmar antes de remover arquivos.
