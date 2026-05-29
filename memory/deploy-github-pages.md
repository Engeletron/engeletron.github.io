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

## ⚠️ Sobre a cópia local desta pasta

- Esta pasta local **não é um repositório git** e a relação dela com a publicação que
  está no ar **não está confirmada** (pode ser a fonte original ou apenas uma cópia de
  trabalho). Portanto, **editar arquivos aqui NÃO atualiza o site automaticamente**.
- Antes de mexer no que está no ar, descobrir/confirmar com o usuário **de onde** o site
  publicado é servido (repositório GitHub + GitHub Pages? outro host?) e qual é o fluxo
  de deploy.
- Se um dia for republicar a partir desta pasta via GitHub Pages: o arquivo de domínio
  precisa se chamar **`CNAME`** (sem extensão) — hoje está como `CNAME.txt` — e os
  `src/*.tsx` vazios devem ser removidos (ver [[arquitetura-site-estatico]]).

**Como aplicar:** tratar publicação/alterações no site ao vivo somente após confirmar o
pipeline de deploy real; confirmar antes de renomear/remover (ver [[preferencias-usuario]]).
Ver também [[projeto-overview]] e [[estado-funcional]].
