---
title: Changelog
---

# Changelog

What changed in each EDGEchat release, newest first. The release workflow takes a release's notes from its section here (`tools/release/notes.mjs`): the section for GitHub, and its short Nexus summary for the Nexus page's changelog.

With each change a user would notice, add a line under **Unreleased** in the same commit, grouped **New**, **Changed**, **Fixed**, **Other**. Before a release, rename **Unreleased** to `## <version> (<date>)` (the version in `.claude-plugin/plugin.json`) and start a new empty one.

With the rename, write the section's **Nexus summary** under its heading: an HTML comment that starts `<!-- nexus` and ends `-->`, which GitHub and this site hide. One short plain line per change a user would notice, each starting `New:`, `Changed:`, `Fixed:`, `Removed:`, `Other:` or `Needs:`, at most 120 characters, no markdown, at most 12 lines; the notes script adds the `Full changelog` link. `node tools/release/notes.mjs --nexus` prints it, or says what is wrong with it. Nexus cannot change a changelog once posted.

## Unreleased

## 0.2.1 (2026-11-25)

<!-- nexus
New: EDGEfab, EDGEhack and EDGEquest servers in the same install: props, quickhacks and quests
New: /edge:continue picks up a chat from REDagent, the assistant in the game (REDagent 0.4.6 or newer)
New: A Tripo key setting; every key setting can stay empty when the key is in REDcode's Keys
Changed: redcode-mcp 0.7.0, edgedeck-mcp 0.34.1, edgemat-mcp 0.3.4
Changed: /edge:setup checks seven servers; the Safety page lists what each new tool asks first or costs
Changed: mesh_items finds outfit sets and cr2w_search reads material buffers, with REDbridge 0.12.0 or newer
Changed: REDnode's guide copied from REDnode 0.70.0, the EDGEmodders wiki from 2026-11-25
Other: The Nexus changelog is now a short summary for each release
-->

**New**

- Three more EDGE servers, so one install covers them: `edgefab` (EDGEfab 0.2.1: props from a 3D model or from words, ready for the game), `edgehack` (EDGEhack 0.1.3: the game's quickhacks in plain words, new ones, tried live in the game) and `edgequest` (EDGEquest 0.1.1: the game's quests in plain words, new quests from a story file). They use the plugin's game folder and REDbridge settings.
- `/edge:continue`: picks up a chat from REDagent, the assistant in the game. REDagent's **VS Code** button (REDagent 0.4.6 or newer) writes the chat to a file and copies the command; Claude Code reads it, says which chat, mods and files it took over, and carries on.
- A Tripo key setting (`tripo_api_key`), for EDGEfab's 3D models from words and EDGEmat's reshapes. Every key setting can stay empty when the key is in REDcode's **Keys** view, which every EDGE tool shares.

**Changed**

- The servers are newer: redcode-mcp 0.7.0 (sector scripts and edits, animations, lip sync, the EDGE Library), edgedeck-mcp 0.34.1 and edgemat-mcp 0.3.4 (restyle, reshape, materials for props from EDGEfab).
- `/edge:setup` checks the seven servers, and the guide and its Safety page list what each new tool asks first or costs.
- `archives-and-cr2w`: `mesh_items` finds outfit sets, and `cr2w_search` looks inside a mesh's material buffer, with REDbridge 0.12.0 or newer (both checked on the cop jacket).
- REDnode's guide in `rednode-mods` is copied from REDnode 0.70.0, and the EDGEmodders wiki in `edge-tools` from 2026-11-25, with the EDGEfab, EDGEhack, EDGEquest, EDGEdir and EDGEchat sections. `/edge:setup` and the Safety page know REDnode's world tools (spawn, weather, pins).

**Other**

- The Nexus page's changelog is a short summary written for each release (EDGEchat#6).

## 0.1.1 (2026-11-02)

<!-- nexus
New: A step-by-step guide on the docs site, six lessons from install to your own mods in the game
New: mesh_items on the redcode server: from a mesh to the items that show it
Changed: redcode-mcp 0.4.0 and edgedeck-mcp 0.30.0
Changed: Swapping a changed archive into the running game works on game 2.5 through REDswap, with REDnode 0.41.0
-->

**New**

- A step-by-step guide on the docs site (https://edgemodders.github.io/EDGEchat/guide.html): six lessons from installing to your own mods in the game (install and connect, a first mod without code, recolor a jacket, change it while you play, find what is wrong, keep a project ready), and pages on safety, troubleshooting, settings and updates. Each lesson follows a test run in the game.
- `mesh_items` on the `redcode` server: from a mesh to the items that show it (record, in-game name, look). Needs REDbridge 0.11.0. It does not find outfit sets yet (https://github.com/Edgemodders/REDcode/issues/17); `archives-and-cr2w` says what to do then.

**Changed**

- The `redcode` server is redcode-mcp 0.4.0, and `edgedeck` is edgedeck-mcp 0.30.0 (the files of one Nexus page are separate mods under one row; adding REDnode's own zip names it right; no "EPERM" error after adding a large mod).
- Swapping a changed archive into the running game works on game 2.5 with REDnode 0.41.0 or newer, through REDswap, which comes with REDnode: no RED Hot Tools needed. `wolvenkit-projects` and REDnode's guide in `rednode-mods` say so. The guide is copied from REDnode 0.50.2 (the Console, roles, shared keys, resizable and full-screen pages, frames from another address).
- `wolvenkit-projects`: a project packed as a REDmod deploys to `mods/`, and the game loads it only when started with `-modded`; what a swap does with an archive EDGEdeck never deployed. The fix after a swap (install the project again, then deploy with `restore`) is tested.
- `/edge:setup` notices EDGEmat's tools twice when REDnode is set to share them with desktop assistants.

## 0.1.0 (2026-10-26)

The first release.

**Changed**

- REDnode connects by allowing Claude Code in the game: in `/mcp`, **Authenticate** `plugin:edge:rednode`, then **Allow** in the game's **Connect** window. No token to copy: the REDnode token setting is gone. Needs REDnode 0.40.1 or newer (game 2.5). `/edge:setup` explains each step and what to do on older REDnode.
- The README and `/edge:setup` say which REDbridge to use: 0.10.0 or newer; on game 2.5, 0.11.0 also reads every quest world sector; on 2.31, keep 0.10.0.
- The install steps say what to click in VS Code (`/plugins`, the **Marketplaces** and **Plugins** tabs), with a `vscode://` link that opens the install, and one command for a terminal prompt (`claude plugin install edge --marketplace Edgemodders/EDGEchat`); EDGEkit 1.140.2 or newer offers it in one click; how to turn on auto-update. The same in the docs, the release notes, the zip's README.txt and the Nexus page.
- `/edge:setup` and the README say where the settings form's **Save configuration** button is: below the options, scroll down.
- `archives-and-cr2w` and `check-mod` checked against game 2.5: the archive layout, the item chain, every file type's root type and the log paths are unchanged; the counts are 2.5's.
- REDnode's guide in `rednode-mods` copied again from REDnode 0.40.1, and the wiki in `edge-tools` from EDGEweb's update for REDnode 0.40.1 and game 2.5.

**New**

- Skill `edge-tools`: ask how any EDGE tool works (REDnode, REDcode, REDbridge, EDGEdeck, EDGEmat, EDGEwave, EDGEbuilder, EDGEkit, REDagent), and Claude answers from the EDGEmodders wiki, copied into the plugin, with a link to the live page.

**Other**

- A release workflow (`.github/workflows/release.yml`) as EDGEmat's and REDnode's: a zip of the plugin for installing without GitHub, the GitHub release, and the Nexus Mods page kept from `nexus/` (Mod Manager Download off: a plugin, not a game mod).

## 0.0.11 (2026-10-25)

The preview so far, before the first release. Earlier 0.0.x versions were installed from the marketplace only, with no release.

**New**

- One install for Claude Code: skills, the REDnode, REDcode, EDGEdeck and EDGEmat MCP servers, and their settings in the plugin's one form.
- Commands: `/edge:setup`, `/edge:new-mod`, `/edge:check-mod`, `/edge:init-project`.
- Skills: `rednode-mods` (with REDnode's guide, copied from REDnode 0.38.1), `wolvenkit-projects`, `archives-and-cr2w`.
- Game 2.5 status: REDnode supports it from 0.38.1.
