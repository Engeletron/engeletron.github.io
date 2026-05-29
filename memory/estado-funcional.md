---
name: estado-funcional
description: Site verificado funcionando — renderiza sem erros de console (2026-05-28).
type: project
updated: 2026-05-28
---

Verificação feita em **2026-05-28** servindo `index.html` via `python -m http.server` e
abrindo no navegador (Playwright):

- ✅ Carrega com **0 erros e 0 warnings** no console.
- ✅ Renderização visual completa e correta (header com seletor de idiomas, hero, cards de
  serviços, seção ASIC, equipe, formulário de contato, rodapé institucional).
- ✅ Todos os assets locais referenciados existem.

Além da cópia local, o **site publicado** também foi verificado no ar em
**https://engeletron.com.br/** (WebFetch, 2026-05-28): carrega com sucesso e exibe o mesmo
conteúdo. Ver [[deploy-github-pages]].

**Nota histórica:** no início desta sessão os arquivos estavam como `.docx` (Word real com
o conteúdo); foram convertidos para `.html`/`.txt` reais — formato correto para o site.

Ver [[arquitetura-site-estatico]].
