---
name: edge-tools
description: How the EDGE tools work - REDnode, REDcode, REDbridge, EDGEdeck, EDGEmat, EDGEwave, EDGEbuilder, EDGEfab, EDGEhack, EDGEquest, EDGEdir, EDGEkit, REDagent and this plugin - installing, settings, features and fixes, from the EDGEmodders wiki. Use when the user asks how an EDGE tool works, how to do something in one, what a button or setting does, or where its docs are.
---

# The EDGE tools

The EDGE tools are EDGEmodders' open-source toolkits for modding Cyberpunk 2077. This skill answers how they work for the person using them, from the **EDGEmodders wiki** at <https://edgemodders.ai/wiki/>, copied beside this file.

| Read | For |
|---|---|
| [wiki/contents.md](wiki/contents.md) | Every wiki page with what it covers. Start here to pick the page |
| `wiki/<tool>/...` | The pages, one folder per tool, as on the site |

## How to answer

1. Find the page in [wiki/contents.md](wiki/contents.md) and read it. Read a second page only if the first sends you there.
2. Answer from the page, in your own short words, with the steps the user needs.
3. End with the live page's link. It is in the page's second line, `Live page: ...`.
4. If the page does not cover it, say so, and point to the tool's docs site or repo below. Do not guess how a tool behaves.

The copy is from a fixed date, in each page's first line. For something newer (a version, a feature the copy lacks), the live wiki and the tool's releases page are the source. Each EDGE MCP server's tool descriptions explain its tools: they are the reference for what Claude can do with the tools, the wiki for what the user does.

## The tools

| Tool | What it is | Wiki | Docs site, for developers | Repo |
|---|---|---|---|---|
| REDnode | The runtime: Node mods and HTML overlay apps in the running game, with hot reload; the launcher (**F10**), the Mod Manager, and the `rednode` MCP server | [wiki/rednode](wiki/rednode/index.md) | [edgemodders.github.io/REDnode](https://edgemodders.github.io/REDnode/) | [Edgemodders/REDnode](https://github.com/Edgemodders/REDnode) |
| REDcode | A modding IDE on VS Code: game archives, game files as JSON, projects, pack; the `redcode` MCP server (`@edgemodders/redcode-mcp`) | [wiki/redcode](wiki/redcode/index.md) | [edgemodders.github.io/REDcode](https://edgemodders.github.io/REDcode/) | [Edgemodders/REDcode](https://github.com/Edgemodders/REDcode) |
| REDbridge | WolvenKit's engine as a local process, used by REDcode, EDGEdeck, EDGEmat and EDGEbuilder. Its own download: [releases](https://github.com/Edgemodders/REDbridge/releases) | [wiki/redbridge](wiki/redbridge/index.md) | [edgemodders.github.io/REDbridge](https://edgemodders.github.io/REDbridge/) | [Edgemodders/REDbridge](https://github.com/Edgemodders/REDbridge) |
| EDGEdeck | A mod manager in VS Code: library, on and off, deploy, undo, conflicts, Nexus, Vortex import; the `edgedeck` MCP server (`@edgemodders/edgedeck-mcp`) | [wiki/edgedeck](wiki/edgedeck/index.md) | [edgemodders.github.io/EDGEdeck](https://edgemodders.github.io/EDGEdeck/) | [Edgemodders/EDGEdeck](https://github.com/Edgemodders/EDGEdeck) |
| EDGEmat | A material editor: find a garment, its layers in plain words, recolor, new materials from words or an image; the `edgemat` MCP server (`@edgemodders/edgemat-mcp`) | [wiki/edgemat](wiki/edgemat/index.md) | [edgemodders.github.io/EDGEmat](https://edgemodders.github.io/EDGEmat/) | [Edgemodders/EDGEmat](https://github.com/Edgemodders/EDGEmat) |
| EDGEwave | A sound studio beside REDcode | [wiki/edgewave](wiki/edgewave/index.md) | [edgemodders.github.io/EDGEwave](https://edgemodders.github.io/EDGEwave/) | [Edgemodders/EDGEwave](https://github.com/Edgemodders/EDGEwave) |
| EDGEbuilder | A world builder inside the game, on REDnode | [wiki/edgebuilder](wiki/edgebuilder/index.md) | [edgemodders.github.io/EDGEbuilder](https://edgemodders.github.io/EDGEbuilder/) | [Edgemodders/EDGEbuilder](https://github.com/Edgemodders/EDGEbuilder) |
| EDGEfab | An asset maker in VS Code: props from a 3D model or from words, made ready for the game and put into a project; the `edgefab` MCP server (`@edgemodders/edgefab-mcp`) | [wiki/edgefab](wiki/edgefab/index.md) | [edgemodders.github.io/EDGEfab](https://edgemodders.github.io/EDGEfab/) | [Edgemodders/EDGEfab](https://github.com/Edgemodders/EDGEfab) |
| EDGEhack | A quickhack editor beside REDcode: read, change and make quickhacks, try them in the game; the `edgehack` MCP server (`@edgemodders/edgehack-mcp`) | [wiki/edgehack](wiki/edgehack/index.md) | [edgemodders.github.io/EDGEhack](https://edgemodders.github.io/EDGEhack/) | [Edgemodders/EDGEhack](https://github.com/Edgemodders/EDGEhack) |
| EDGEquest | A quest maker beside REDcode: the game's quests in plain words, new quests from a story file; the `edgequest` MCP server (`@edgemodders/edgequest-mcp`) | [wiki/edgequest](wiki/edgequest/index.md) | [edgemodders.github.io/EDGEquest](https://edgemodders.github.io/EDGEquest/) | [Edgemodders/EDGEquest](https://github.com/Edgemodders/EDGEquest) |
| EDGEdir | A director's tool: scenes of the game's characters and animations on a timeline, in VS Code and in the game (EDGE Director) | [wiki/edgedir](wiki/edgedir/index.md) | [edgemodders.github.io/EDGEdir](https://edgemodders.github.io/EDGEdir/) | [Edgemodders/EDGEdir](https://github.com/Edgemodders/EDGEdir) |
| EDGEkit | The EDGEmodders editor app, or an extension pack for VS Code, with the tools built in | [wiki/edgekit](wiki/edgekit/index.md) | [edgemodders.github.io/EDGEkit](https://edgemodders.github.io/EDGEkit/) | [Edgemodders/EDGEkit](https://github.com/Edgemodders/EDGEkit) |
| REDagent | A modding agent inside the game, powered by Claude | [wiki/redagent](wiki/redagent/index.md) | [edgemodders.github.io/REDagent](https://edgemodders.github.io/REDagent/) | [Edgemodders/REDagent](https://github.com/Edgemodders/REDagent) |
| EDGEchat | This plugin: the skills, the EDGE MCP servers in one install, `/edge:setup` and the other commands | [wiki/edgechat](wiki/edgechat/index.md), and [connect-claude-code.md](wiki/connect-claude-code.md) | [edgemodders.github.io/EDGEchat](https://edgemodders.github.io/EDGEchat/) | [Edgemodders/EDGEchat](https://github.com/Edgemodders/EDGEchat) |

Every repo has its releases at `https://github.com/Edgemodders/<repo>/releases`. Start-here pages: [the EDGE platform](wiki/index.md), [getting started](wiki/getting-started.md), [FAQ](wiki/faq.md), [glossary](wiki/glossary.md). Help from people: the EDGEmodders Discord, linked on every wiki page.

## Rules

| Rule | Why |
|---|---|
| The user already has this plugin. For connecting Claude Code, send them to `/edge:setup`, not to the wiki's "one server at a time" steps or a tool's own **Connect an Assistant (MCP)** command | Those add each server by hand, beside the plugin's: every tool twice, or the plugin's `rednode` hidden. The plugin has `rednode`, `redcode`, `edgedeck`, `edgemat`, `edgefab`, `edgehack` and `edgequest` |
| Say what the user does in the tool's own words: the button, the menu, the setting | The wiki is written for users; its names match what they see |
| Building a REDnode package is the `rednode-mods` skill; a new mod, `new-mod`; a broken one, `check-mod` | This skill explains the tools, not how to make a mod with them |
| A game fact (paths, file types, versions of the game) comes from the game through the servers, or `archives-and-cr2w` | The wiki describes the tools; the game is checked, not taken from a page |
