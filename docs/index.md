---
title: Docs
---

# EDGE<span class="y">chat</span>

The EDGE plugin for Claude Code: Cyberpunk 2077 modding knowledge as skills, the EDGE MCP servers, and modding commands, in one install. Source: [github.com/Edgemodders/EDGEchat](https://github.com/Edgemodders/EDGEchat).

A preview (plugin 0.0.x), not released yet. REDnode supports game version 2.5 from 0.38.1 (0.37.0 is the last for 2.31). The skills' game facts were checked on 2.31; their recheck on 2.5 comes before the first release.

## Install

**In EDGEkit:** nothing to install; EDGEkit comes with EDGEchat set up.

**In VS Code:** type `/plugins` in the Claude Code panel. In the **Marketplaces** tab, enter `Edgemodders/EDGEchat`; in the **Plugins** tab, click **Install** on `edge` and choose **Install for you**.

**From a terminal prompt:**

```
claude plugin install edge --marketplace Edgemodders/EDGEchat
```

Inside a running `claude` session, the same is `/plugin marketplace add Edgemodders/EDGEchat`, then `/plugin install edge@edgemodders`.

Then restart Claude Code and run `/edge:setup`: it checks each server and gives the one next step for what is missing. The settings, all optional, signing in to REDnode from the game, what the servers need and how to update are in the [README](https://github.com/Edgemodders/EDGEchat#install).

| Command | Does |
|---|---|
| `/edge:setup` | Checks the `rednode`, `redcode`, `edgedeck` and `edgemat` servers, finds copies added by hand, and says what to do next |
| `/edge:new-mod` | Starts a mod with you, even if you do not code: asks what it should do, picks the simplest kind, builds a first version and tests it in the game |
| `/edge:check-mod` | Lists what is wrong with a mod (its files, the logs, EDGEdeck's view), with a fix for each, changing nothing |
| `/edge:init-project` | Writes a `CLAUDE.md` into a mod project, so later sessions know its layout and how to test it |

The knowledge skills (`rednode-mods`, `wolvenkit-projects`, `archives-and-cr2w`, `edge-tools`) load by themselves when a task needs them.

## Documents

| Document | What it covers |
|---|---|
| [Design](design.html) | Why a plugin, the facts from the Claude Code docs that shape it, its shape (MCP servers, skills, commands), where the knowledge comes from, sharing with REDagent, phases P0 to P5, the P0 decisions. Draft 0.8 |
| [Dev setup](dev-setup.html) | What a PC needs to build and test the plugin |
| [Tests](testing.html) | Every test run so far, by CLI and by hand: how to run it again, what to expect, and what it showed |

## Roadmap status

| Phase | Status |
|---|---|
| P0 Decide | **Decided** 2026-10-23: the name EDGEchat (was EDGEplugin), names `edge@edgemodders`, one repo as marketplace and plugin, a separate repo (not in REDagent), REDagent C6 dropped, every EDGE server on npm, EDGEkit's one-click setup, knowledge shared through each tool's own docs, community sources in our own words, P2 EDGE first. EDGEkit built its side (`da32f12`, [EDGEkit#5](https://github.com/Edgemodders/EDGEkit/issues/5)), to test once it is in an EDGEkit release; REDagent's side still to tell |
| P1 Skeleton | **Done** 2026-10-21. Manifest, marketplace, `rednode`, `redcode`, `edgedeck` and (0.0.5) `edgemat`, `/edge:setup` and `/edge:init-project`. Installed from GitHub in VS Code on a second PC, `/edge:setup` reported all three connected with the game running |
| P2 Knowledge | **Done** 2026-10-23: `rednode-mods` (a working HUD widget built in the game), `wolvenkit-projects`, `archives-and-cr2w`, each checked against the game, with evals. No separate EDGEdeck or EDGEmat skill: their servers explain their tools |
| P3 Commands | Under way (2026-10-23): `/edge:new-mod` and `/edge:check-mod` in 0.0.8, with evals. Next: the in-game test, a non-coder makes a mod from `/edge:new-mod` alone |
| P4 Ship | Not started. Version 0.1.0, provided by EDGEkit, in its docs and welcome page |
| P5 Grow | Not started. EDGEmat and EDGEwave as they ship |
