---
name: astro-model-viewer-flags
description: Gotchas — emoji de bandeira não renderiza no Windows (usar imagens); atributo booleano em custom element no Astro.
type: reference
updated: 2026-05-29
---

Dois aprendizados não óbvios do site Astro (sessão 2026-05-29):

1. **Bandeiras**: emoji de bandeira (🇧🇷 🇨🇳 …) **NÃO renderiza no Windows** (aparece como as
   letras "BR"/"CN" ou tofu). Solução adotada: imagens PNG locais em
   `public/assets/flags/{br,us,es,cn}.png` (baixadas do flagcdn, w160) + componente
   `src/components/Flag.astro` (bandeira inline) e `LangSwitcher.astro` (seletor com imagens).
   **Não usar emoji de bandeira em texto.**

2. **Atributo booleano em custom element (`<model-viewer>`) no Astro**: `attr={false}`
   renderiza `attr="false"` (atributo **presente** → o model-viewer trata como true).
   Use `attr={cond ? true : undefined}` para **omitir** quando falso. Foi o bug do chip
   "estático" do card que continuava com `camera-controls`/`auto-rotate` (e mostrava a
   barra de ícones de interação).

Ver [[site-build-status]].
