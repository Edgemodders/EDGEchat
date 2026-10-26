---
title: Changelog
---

# Changelog

What changed in each EDGEchat release, newest first. The release workflow takes a release's notes from its section here (`tools/release/notes.mjs`), for GitHub and for the Nexus page's changelog.

With each change a user would notice, add a line under **Unreleased** in the same commit, grouped **New**, **Changed**, **Fixed**, **Other**. Before a release, rename **Unreleased** to `## <version> (<date>)` (the version in `.claude-plugin/plugin.json`) and start a new empty one.

## Unreleased

**Changed**

- REDnode connects by allowing Claude Code in the game: in `/mcp`, **Authenticate** `plugin:edge:rednode`, then **Allow** in the game's **Connect** window. No token to copy: the REDnode token setting is gone. Needs REDnode 0.40.1 or newer (game 2.5). `/edge:setup` explains each step and what to do on older REDnode.
- The README and `/edge:setup` say which REDbridge to use: 0.10.0 or newer; on game 2.5, 0.11.0 also reads every quest world sector; on 2.31, keep 0.10.0.
- The install steps say what to click in VS Code (`/plugins`, the **Marketplaces** and **Plugins** tabs), with a `vscode://` link that opens the install; EDGEkit comes with EDGEchat set up. The same in the docs, the release notes, the zip's README.txt and the Nexus page.
- `/edge:setup` and the README say where the settings form's **Save configuration** button is: below the options, scroll down.
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
