---
name: deploy-github-pages
description: Site JÁ PUBLICADO e no ar em https://engeletron.com.br/ (verificado 2026-05-28).
type: project
updated: 2026-05-28
---

## ✅ Site no ar

O site **já está publicado e funcionando** em **https://engeletron.com.br/**.
Confirmado pelo proprietário (Danilo) e **verificado em 2026-05-28** via WebFetch:
carrega com sucesso, título "ENGELETRON | ENGENHARIA ELÉTRICA E PROJETOS ELETRÔNICOS",
headline "SOLUÇÕES INOVADORAS EM ENGENHARIA ELÉTRICA E ELETRÔNICA", e o conteúdo é
idêntico à cópia local (serviços PCB/IoT, ASIC RF, equipe, formulário). Domínio custom
ativo (HTTPS).

## ✅ Repositório de produção (CONFIRMADO pelo usuário em 2026-05-29)

- **Repo:** https://github.com/Engeletron/engeletron.github.io — site de **organização** do
  GitHub Pages (nome `<org>.github.io`).
- **Branch padrão:** `main`. O Pages serve **direto da raiz da `main`** (modo "deploy from
  branch", estático): `index.html`, `privacy-policy.html`, `assets/`, `src/` (stubs), `CNAME`.
- **A pasta local desta sessão era uma CÓPIA desse repo** (mesmos arquivos do início). O site
  antigo está preservado em `legacy/` no nosso repo local.

## 🚀 PUBLICADO — site novo no ar (2026-05-29)

O novo site Astro foi publicado e **verificado no ar em https://engeletron.com.br/** (e
engeletron.github.io): home "Projetamos o silício", chip 3D (GLB 83 KB, HTTP 200), /en/ em
inglês, foto do wafer — tudo OK.

**Mapa de branches no repo `Engeletron/engeletron.github.io`:**
- **`main`** = site novo publicado (saída do build do Astro, servida pelo Pages na raiz da main).
- **`site-legacy`** = backup do site antigo (era a `main` anterior, sha e19a112) — para rollback.
- **`source`** = código‑fonte Astro (o que o nosso repo local tem na `main`).

**Como atualizar o site no futuro:** editar a fonte (repo local / branch `source`),
`npm run build`, e publicar o `dist/` na `main` (mesmo processo). Alternativa melhor a fazer
um dia: trocar o Pages para *Source: GitHub Actions* (Settings → Pages) e dar push da fonte na
`main` — aí o workflow `.github/workflows/deploy.yml` compila e publica sozinho.

**Rollback (uma linha):** `git push --force origin site-legacy:main`.

Ver também [[site-build-status]], [[projeto-overview]], [[site-rebuild-decisoes]].
