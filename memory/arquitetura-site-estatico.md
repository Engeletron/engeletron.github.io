---
name: arquitetura-site-estatico
description: HTML puro com CSS/JS inline; sem build/React; src/*.tsx vazios; deps via CDN.
type: project
updated: 2026-05-28
---

O site **não usa framework nem etapa de build**. Toda a página é um único `index.html`
(~72 KB) com **CSS e JavaScript embutidos inline**.

- JS inline cobre: seletor de idioma (`changeLanguage`) e submit do formulário de contato.
- Formulário de contato usa o serviço externo **formsubmit.co** (envia para o e-mail do
  diretor). Não há backend próprio.
- `src/App.tsx` e `src/components/AsicCard.tsx` estão **vazios (0 bytes)** — resquício de
  um scaffold React que nunca foi usado. Não fazem parte do site. Candidatos a remoção
  (confirmar com o usuário antes — ver [[preferencias-usuario]]).
- Dependências externas via **CDN**: Font Awesome, Google Fonts (Roboto + Material Icons),
  flagcdn (bandeiras). Visual completo exige internet.
- Assets locais (logos, ícones, fotos) em `assets/`; todos os referenciados existem.

Ver [[projeto-overview]] e [[estado-funcional]].
