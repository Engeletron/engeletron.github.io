# CLAUDE.md — Site Institucional Engeletron

> Este arquivo é lido automaticamente pelo Claude Code no início de cada sessão.
> Ele descreve o projeto **e** ativa o sistema de memória permanente local.

## ⚡ Sistema de Memória Permanente (LEIA PRIMEIRO)

Este projeto tem um **sistema de memória portátil contido na própria pasta**, em
[`memory/`](memory/). Ele acompanha o projeto (entra no git, em backups, etc.) e
preserva o contexto entre sessões e entre diferentes agentes de IA.

**No início de TODA sessão:**
1. Leia [`memory/MEMORY.md`](memory/MEMORY.md) — é o índice de tudo que já foi aprendido.
2. Abra os arquivos de memória relevantes para a tarefa atual.

**Ao longo da sessão, GRAVE memória sempre que descobrir algo durável:**
decisões tomadas, restrições, preferências do usuário, fatos não óbvios sobre o
deploy/arquitetura, pendências. NÃO grave o que o código já deixa óbvio.

**Como gravar uma memória:**
1. Crie/atualize um arquivo `memory/<slug-curto>.md` com este formato:
   ```markdown
   ---
   name: <slug-em-kebab-case>
   description: <resumo em uma linha — usado para decidir relevância>
   type: project | feedback | reference | decision
   updated: AAAA-MM-DD
   ---

   <o fato. Para feedback/decisão, inclua **Porquê:** e **Como aplicar:**.>
   Vincule memórias relacionadas com [[outro-slug]].
   ```
2. Adicione uma linha de ponteiro em [`memory/MEMORY.md`](memory/MEMORY.md):
   `- [Título](arquivo.md) — gancho de uma linha`
3. Antes de criar, verifique se já existe um arquivo que cobre o tema — atualize em
   vez de duplicar. Apague memórias que se provarem erradas.

> Regra de precedência: instruções diretas do usuário > este CLAUDE.md > comportamento padrão.

---

## 📋 O Projeto

Site institucional **estático** da **Engeletron Engenharia Elétrica Ltda** (Matinhos-PR),
empresa de projetos elétricos/eletrônicos (PCB, firmware, IoT, ASIC RF, gigas de teste).

- **Tipo:** site estático (HTML puro com CSS e JS embutidos inline — **não usa React/build**).
- **Deploy alvo:** GitHub Pages, domínio próprio `engeletron.com.br` (ver `CNAME.txt`).
- **Idiomas:** PT / EN / ES / 中文 (seletor via JS no `index.html`).

### Estrutura
```
index.html            # Homepage single-page (CSS + JS inline). Fonte de verdade do site.
privacy-policy.html   # Política de Privacidade (LGPD)
CNAME.txt             # Domínio: engeletron.com.br
assets/               # Logos, ícones, fotos da equipe
src/*.tsx             # VAZIOS (0 bytes) — resquício de scaffold React não usado
memory/               # Sistema de memória permanente (veja acima)
.planning/            # Artefatos de planejamento (GSD)
```

## 🛠️ Como rodar / verificar localmente
```powershell
# servir o site
python -m http.server 8765 --bind 127.0.0.1
# abrir http://127.0.0.1:8765/index.html no navegador
```
Não há etapa de build, lint ou testes — é HTML estático.

## ⚠️ Pontos de atenção conhecidos
Estes estão detalhados nos arquivos de `memory/`. Resumo:
- A pasta **ainda não é um repositório git**.
- Para o GitHub Pages, o arquivo de domínio deve se chamar **`CNAME`** (sem `.txt`).
- `src/*.tsx` estão vazios e não fazem parte do site — candidatos a remoção.
- Visual completo depende de CDNs (Font Awesome, Google Fonts, flagcdn).

## ✅ Convenções de trabalho
- Comunicação com o usuário em **português (pt-BR)**.
- Antes de remover/sobrescrever qualquer arquivo do projeto, confirme o conteúdo.
- Ao concluir uma mudança relevante, **atualize a memória**.
