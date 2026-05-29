---
name: entidades-legais
description: Estrutura societária Engeletron — desenvolvedora (engenharia) vs comercial (importação), CNPJs + endereço compartilhado NÃO exibido no site.
type: reference
updated: 2026-05-29
---

A marca **Engeletron** opera com **duas pessoas jurídicas distintas**:

- **Desenvolvedora** (projeto/IP do EETX433A): **Engeletron Engenharia Elétrica Ltda** — CNPJ **37.912.040/0001-10**.
- **Comercializadora / importadora** (vendas): **Engeletron Comércio e Importação Ltda** — CNPJ **54.338.273/0001-70**.

**Endereço (o MESMO para as duas empresas):**
Av. Beira Mar, 9009, Sala 1, Balneário Albatroz — Matinhos‑PR, CEP 83260‑000.

> ⚠️ Decisão do dono (2026-05-29): **NÃO exibir o endereço no site** (de nenhuma das duas) por ora.
> Por isso a linha de endereço foi removida de Contato, Empresa e da Política de Privacidade. O endereço
> fica registrado aqui (e como comentário em `src/data/company.ts`) para uso futuro.

**No site:** fonte única em `src/data/company.ts` (`companies.developer` / `companies.seller`); rótulos
i18n `company.role.dev` ("Desenvolvido por") / `company.role.seller` ("Comercializado por"). Aparece em:
**Empresa** (Estrutura societária), **Rodapé**, e **Política de Privacidade** (o contato lista as duas).
Ver [[site-build-status]], [[stakeholders]].
