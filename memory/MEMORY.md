# MEMORY — Índice de Memória do Projeto Engeletron

> Índice carregado a cada sessão. Uma linha por memória. **Não** coloque conteúdo de
> memória aqui — apenas o ponteiro. O conteúdo vive nos arquivos `*.md` ao lado.
> Formato de cada memória está documentado em [`../CLAUDE.md`](../CLAUDE.md).

## Projeto
- [Visão geral do projeto](projeto-overview.md) — site estático institucional da Engeletron, HTML puro sem build.
- [Arquitetura do site](arquitetura-site-estatico.md) — index.html com CSS/JS inline; src/*.tsx vazios; deps via CDN.
- [Estado funcional verificado](estado-funcional.md) — site renderiza sem erros de console (verificado 2026-05-28).

## Nova fase — pivot p/ fabless de RF (2026-05)
- [Produto EETX433A](produto-eetx433a.md) — specs, encapsulamento SOIC-8, MOQ/tape&reel, diferenciais (sem cristal/SAW/diodos).
- [Decisões do novo site](site-rebuild-decisoes.md) — rebuild dark/premium, 4 idiomas, direção B+C; arte do chip (STEP→GLB marcado) aprovada; modelo fabless (projeto BR / fab China); seção wafer.
- Documento de design completo: `docs/superpowers/specs/2026-05-28-engeletron-rf-site-design.md` (aprovado 2026-05-28).
- [Estado do build do site](site-build-status.md) — ✅ Astro construído e verificado na branch `feat/site-rf-astro` (28 páginas, 4 idiomas, chip 3D Draco). Plano em `docs/superpowers/plans/`.

## Deploy / Publicação
- [Site publicado](deploy-github-pages.md) — ✅ NO AR em https://engeletron.com.br/ (verificado 2026-05-28); ressalvas sobre a cópia local.

## Referência
- [Stakeholders e contatos](stakeholders.md) — diretores/engenheiros e dados institucionais da empresa.

## Convenções
- [Preferências do usuário](preferencias-usuario.md) — comunicação em pt-BR; confirmar antes de remover arquivos.
