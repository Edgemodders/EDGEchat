---
title: Changelog
---

# Changelog

What changed in each EDGEchat release, newest first. The release workflow takes a release's notes from its section here (`tools/release/notes.mjs`), for GitHub and for the Nexus page's changelog.

With each change a user would notice, add a line under **Unreleased** in the same commit, grouped **New**, **Changed**, **Fixed**, **Other**. Before a release, rename **Unreleased** to `## <version> (<date>)` (the version in `.claude-plugin/plugin.json`) and start a new empty one.

## Unreleased

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
