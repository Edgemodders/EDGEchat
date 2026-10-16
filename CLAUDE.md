# EDGEplugin: notes for Claude sessions

EDGEplugin is the EDGE plugin for Claude Code: skills with Cyberpunk 2077 modding knowledge, the EDGE MCP servers (REDnode's kernel server for the running game, REDcode's `redcode-mcp` for the game's files, later EDGEmat's), and a few commands, in one install from this repo's own plugin marketplace. It works in EDGEkit, VS Code and the terminal. Read [docs/design.md](docs/design.md) first: it has the facts from the Claude Code docs that the design rests on, with their pages.

## Status and next step

- Scaffold created 2026-10-16 from the EDGEkit session: README, license, docs site (HUD layout, design draft 0.1, dev setup), Pages workflow. No plugin files yet.
- **Next: P0 Decide** with the user (open questions at the end of the design): names, where shared knowledge lives (with the REDagent session), how `redcode-mcp` reaches users (with the REDcode session), and a `claude plugin validate` check that one repo can be both marketplace and plugin. Then **P1 Skeleton**.
- The Claude Code facts were read on 2026-10-16. Claude Code changes often: recheck a fact's page before building on it, and fix the design when it has moved.

## Conventions

- Same as the sibling repos: commit straight to `main` in small commits and push; plain, short sentences; tables for facts; mark anything unverified.
- **Git identity:** per repo, `CyberbuildsAI` with the GitHub no-reply email (`340969962+CyberbuildsAI@users.noreply.github.com`), plus `credential.https://github.com.username CyberbuildsAI`. Push with `GIT_TERMINAL_PROMPT=0 GCM_INTERACTIVE=never timeout 120 git push`. Never change the global identity.
- **Do not change the other EDGE repos from here.** Needs go to their sessions (through the user) or as issues: `redcode-mcp` publishing to REDcode, briefing sharing to REDagent, token handover to REDnode.
- **Knowledge is checked, not guessed.** Every fact a skill states about the game is checked against it through the MCP servers (`rednode` while the game runs, `redcode` offline), or marked unverified. Community sources (wiki.redmodding.org, framework docs) are written in our own words with links back, never copied.
- **Skills stay small:** a sharp `description` (it is always in context), `SKILL.md` under 500 lines, details in reference files beside it.
- **Safety in the skills:** mods never change the game's own files; deploy with REDdeck; `api_call` on the `rednode` server stays on "ask".
- **Never commit game files**, extracted game data, tokens or keys.
- **Trademarks:** the plugin says what it is (for Claude Code, for Cyberpunk 2077) and never implies endorsement by Anthropic or CD PROJEKT RED. No names starting `claude-` or `anthropic-`.
- **Docs site:** `docs/` is published by GitHub Pages through `.github/workflows/pages.yml` (Settings > Pages > Source: GitHub Actions). `docs/index.md` is the landing page (document ledger and roadmap status); add every page to `nav` in `docs/_config.yml`. Record every tool install in `docs/dev-setup.md`, with versions and exact commands.
