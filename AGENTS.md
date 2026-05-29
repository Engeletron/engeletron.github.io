# AGENTS.md — Instruções para Agentes de IA

Este projeto é compatível com múltiplos agentes de IA (Claude Code, Codex, Cursor,
Copilot, Gemini, etc.). As instruções completas estão em [`CLAUDE.md`](CLAUDE.md) —
**leia-o primeiro**; o conteúdo se aplica a qualquer agente.

## Resumo essencial

- **Projeto:** site institucional estático da Engeletron Engenharia Elétrica (HTML puro,
  sem build/React). Deploy em GitHub Pages, domínio `engeletron.com.br`.
- **Idioma de comunicação:** português (pt-BR).

## Memória permanente (obrigatório)

Existe um sistema de memória portátil dentro do projeto, em [`memory/`](memory/):

1. **No início da sessão:** leia [`memory/MEMORY.md`](memory/MEMORY.md) (índice) e os
   arquivos relevantes.
2. **Durante a sessão:** ao descobrir algo durável (decisões, restrições, pendências,
   preferências), grave um arquivo `memory/<slug>.md` e registre o ponteiro em
   `memory/MEMORY.md`. O formato está documentado em [`CLAUDE.md`](CLAUDE.md).

Esse diretório acompanha o projeto, então o contexto é preservado entre sessões e entre
agentes diferentes.
