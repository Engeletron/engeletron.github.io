---
name: deploy-github-pages
description: Site no ar em engeletron.com.br (GitHub Pages); processo de deploy manual (dist→main), branches e rollback.
type: project
updated: 2026-05-29
---

## No ar
**https://engeletron.com.br/** — site Astro publicado via **GitHub Pages**, repo
**`Engeletron/engeletron.github.io`** (site de organização). O Pages serve **estático da RAIZ da
branch `main`** (modo "deploy from branch").

## Branches no repo de produção
- **`main`** = SAÍDA DO BUILD (`dist/`) publicada — é o que o Pages serve (`index.html`, `_astro/`,
  `assets/`, `CNAME`, `.nojekyll`).
- **`source`** = CÓDIGO‑FONTE Astro (espelho do repo local na branch `main`).
- **`site-legacy`** = site antigo (pré‑Astro), backup.
- **`backup-main-*`** = snapshots do build a cada deploy, para rollback (pre‑eng, pre‑entidades,
  pre‑datasheets, pre‑servicos, pre‑navbig, backup-main-20260529=adb6a1e o mais antigo,
  backup-main-20260602-datasheets=991b733 = build anterior à 1ª publicação dos datasheets revisados,
  backup-main-20260603-datasheets=86da20e = build anterior à atualização dos datasheets p/ versões mais novas,
  **backup-main-20260603-melhorias=b062a72** = build anterior às melhorias SEO/i18n → último build "bom"
  antes do deploy atual `56c8e19`).

> ⚠️ O repo **LOCAL** (branch `main`) é a **FONTE**; a **`main` REMOTA** é o **BUILD**. São conteúdos
> diferentes — **nunca** dar `git pull` de origin/main para a local. Existe `.github/workflows/deploy.yml`
> mas é vestigial (espera fonte na main); o deploy real é **manual**.

## Como publicar (processo manual)
1. Commitar a fonte → `git push origin main:source`.
2. Backup do build atual → `git push origin origin/main:refs/heads/backup-main-<rótulo>`.
3. `npm run build` (gera `dist/`).
4. `: > dist/.nojekyll`  ← **ESSENCIAL** (sem isso o Pages ignora a pasta `_astro/` e o CSS some).
5. Publicar o build via repo temporário em `dist/`:
   `git -C dist init && git -C dist add -A && git -C dist commit -m "Deploy: ..." && git -C dist push -f <repoURL> HEAD:main && rm -rf dist/.git`
   (`public/CNAME` = engeletron.com.br já entra no dist).
6. Verificar sem cache de CDN: `raw.githubusercontent.com/Engeletron/engeletron.github.io/main/<pagina>/index.html`.

**Rollback (1 linha):** `git push -f origin <backup-branch>:main`.
Propagação Pages/CDN: ~1–2 min (pode exigir hard refresh no navegador).

Ver [[site-build-status]], [[projeto-overview]].
