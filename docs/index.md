---
title: Docs
---

# EDGE<span class="y">chat</span>

The EDGE plugin for Claude Code: Cyberpunk 2077 modding knowledge as skills, the EDGE MCP servers, and modding commands, in one install. Source: [github.com/Edgemodders/EDGEchat](https://github.com/Edgemodders/EDGEchat).

## Documents

| Document | What it covers |
|---|---|
| [Design](design.html) | Why a plugin, the facts from the Claude Code docs that shape it, its shape (MCP servers, skills, commands), where the knowledge comes from, sharing with REDagent, phases P0 to P5, the P0 decisions. Draft 0.7 |
| [Dev setup](dev-setup.html) | What a PC needs to build and test the plugin |
| [Tests](testing.html) | Every test run so far, by CLI and by hand: how to run it again, what to expect, and what it showed |

## Roadmap status

| Phase | Status |
|---|---|
| P0 Decide | Under way. Done: the name EDGEchat (was EDGEplugin), the single-repo marketplace check, separate repo (not in REDagent), REDagent C6 dropped, `redcode-mcp` and `edgedeck-mcp` on npm. Open: plugin names (working names `edge@edgemodders`), knowledge sharing with REDagent, how EDGEkit provides the plugin, community source licenses |
| P1 Skeleton | **Done** 2026-10-21. Manifest, marketplace, `rednode`, `redcode`, `edgedeck` and (0.0.5) `edgemat`, `/edge:setup` and `/edge:init-project`. Installed from GitHub in VS Code on a second PC, `/edge:setup` reported all three connected with the game running |
| P2 Knowledge | Under way (2026-10-23). The modding skills, checked against the game, with evals. First: `archives-and-cr2w` (evals show Δ 0, see the design) |
| P3 Commands | Not started. New mod, check mod |
| P4 Ship | Not started. Version 0.1.0, provided by EDGEkit, in its docs and welcome page |
| P5 Grow | Not started. EDGEmat and EDGEwave as they ship |
