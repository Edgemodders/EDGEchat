<!-- Copied from EDGEweb's docs/wiki/index.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/ (reviewed 2026-11-25) -->

# The EDGE platform

**EDGE** is a set of free, open-source tools for making and using Cyberpunk 2077 mods, built by the EDGEmodders community. An AI assistant can work through the tools with you, using the same buttons you do.

Modding Cyberpunk used to mean learning file formats, scripting languages and a chain of separate programs before you could make anything. EDGE's goal is that **anyone can mod**. Describe what you want in plain words, see every change before it happens, and try it in the running game straight away.

> **New here?** [Your first hour](https://edgemodders.ai/wiki/first-hour.html) is one route from nothing installed to a first mod in your game. [Getting started](https://edgemodders.ai/wiki/getting-started.html) says which tool does what, and the [FAQ](https://edgemodders.ai/wiki/faq.html) covers cost, safety and saves.

## The toolkits

EDGE is a family of toolkits. Five of them cover the whole life of a mod, and they build on each other: each toolkit's Overview says what it needs.

| Stage | Toolkit | What it does | Latest release |
|---|---|---|---|
| Ask | [REDagent](https://edgemodders.ai/wiki/redagent/) | An AI assistant inside the game, powered by Claude. It writes, runs, checks and fixes mods with you while you play | 0.4.1 |
| Create | [REDcode](https://edgemodders.ai/wiki/redcode/) | An editor for the game's files, built on VS Code. Browse the game's files, change them and pack your mod | 0.10.17, a preview |
| Build | [REDbridge](https://edgemodders.ai/wiki/redbridge/) | The helper that reads and writes the game's files for the other tools, with WolvenKit's own code. The tools download it for you | 0.12.1 |
| Deploy | [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | A mod manager. Add mods, turn them on or off, deploy them to the game, and undo | 0.34.2, a preview |
| Run | [REDnode](https://edgemodders.ai/wiki/rednode/) | The part that runs in the game. Mods load and reload while you play, and draw their windows over the game | 0.67.3 |

More toolkits build on those five for particular jobs:

| Job | Toolkit | What it does | Latest release |
|---|---|---|---|
| Ask at your desk | [EDGEchat](https://edgemodders.ai/wiki/edgechat/) | The EDGE plugin for Claude Code, Anthropic's AI assistant. One install connects Claude to the running game, the game's files, your mods and their materials, props, quickhacks and quests | 0.2.1 |
| One install | [EDGEkit](https://edgemodders.ai/wiki/edgekit/) | The EDGEmodders editor: an app for Windows with the EDGE editor tools built in. Or an extension pack that installs them in VS Code | App 1.140.6 and pack 0.6.0, both previews |
| Materials | [EDGEmat](https://edgemodders.ai/wiki/edgemat/) | A material editor. Recolor clothes layer by layer, or make a new material by describing it | 0.3.4, a preview |
| Props | [EDGEfab](https://edgemodders.ai/wiki/edgefab/) | An asset maker. Turn a 3D model, or your own words, into a prop the game can use, and place it with EDGEbuilder | 0.2.1, a preview |
| Scenes with people | [EDGEdir](https://edgemodders.ai/wiki/edgedir/) | A director's tool. Lay out what the game's people do on a timeline, watch it in 3D, and play and adjust it in the running game | 0.0.30, not released yet; first steps run in the game |
| Quickhacks | [EDGEhack](https://edgemodders.ai/wiki/edgehack/) | A quickhack editor. Read any quickhack in plain words, change it, or make new ones and try them in the running game | 0.1.2, a preview |
| Sound | [EDGEwave](https://edgemodders.ai/wiki/edgewave/) | A sound studio. Find a game sound, cut, fade and mix it, and put your version into the game | 0.2.0, a preview |
| Quests | [EDGEquest](https://edgemodders.ai/wiki/edgequest/) | A quest maker. Read the game's quests in plain words, and write a small quest of your own as a short story | 0.1.1, a preview |
| Build in the world | [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) | A world builder inside the game. Place the game's own objects and people, arrange them, and bake a scene into a mod | 0.10.9, a public preview |

EDGE is made for **game version 2.5** on Windows. A **preview** is released and usable, but young. Each toolkit's Overview has a **Status** section: what was tested in the game, what was not, and what comes next. [Getting started](https://edgemodders.ai/wiki/getting-started.html#how-each-tool-installs-today) says where each tool installs from, and the [FAQ](https://edgemodders.ai/wiki/faq.html#which-game-versions-and-stores-does-it-work-with) covers a game kept on 2.31.

REDsave, a save game manager, is built into EDGEkit too. It has no section here yet: see [REDsave's docs](https://edgemodders.github.io/REDsave/).

## Platform benefits

Together, the toolkits add up to these. Each toolkit's Overview says why you might want it.

| Benefit | What it means | From |
|---|---|---|
| **Anyone can mod** | Describe a mod in plain words. An assistant writes it, runs it and fixes it: in the game, or at your desk | [REDagent](https://edgemodders.ai/wiki/redagent/), [EDGEchat](https://edgemodders.ai/wiki/edgechat/) |
| **You stay in control** | REDagent shows every file change before it happens, and its changes and EDGEdeck's deploys can be undone. With Claude Code, the EDGE tools ask before anything changes the running game, your save or the game folder | [REDagent](https://edgemodders.ai/wiki/redagent/), [EDGEchat](https://edgemodders.ai/wiki/edgechat/safety.html), [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) |
| **Assistants can use every tool** | Eight toolkits offer their tools to AI assistants through [MCP](https://edgemodders.ai/wiki/glossary.html#mcp-server): REDnode, REDcode, EDGEdeck, EDGEmat, EDGEfab, EDGEquest, EDGEhack and EDGEwave. EDGEchat connects all but EDGEwave in one install; EDGEwave [connects by hand](https://edgemodders.ai/wiki/connect-claude-code.html) | [EDGEchat](https://edgemodders.ai/wiki/edgechat/), [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html) |
| **Live in the game** | Change a mod and see it in the running game, with no restart. Mods can draw their own windows over the game or add panels to the game's HUD | [REDnode](https://edgemodders.ai/wiki/rednode/) |
| **A crash stays small** | Mods and their windows run outside the game, so a crash in one doesn't take the game down | [REDnode](https://edgemodders.ai/wiki/rednode/) |
| **Everything is text** | Game files, game values and scripts open as plain text, so you and an assistant can read any of it | [REDcode](https://edgemodders.ai/wiki/redcode/), [REDnode](https://edgemodders.ai/wiki/rednode/) |
| **WolvenKit inside** | WolvenKit's own code does the file work, and WolvenKit projects open and pack as they are | [REDbridge](https://edgemodders.ai/wiki/redbridge/), [REDcode](https://edgemodders.ai/wiki/redcode/) |
| **Simple mod management** | One list and four things to learn: add, turn on or off, deploy, remove. Conflicts are shown even inside mod archives. The frameworks most mods need come in one click, and Vortex mods can be imported | [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) |
| **Materials and sound in plain controls** | Recolor a garment layer by layer, or make a new material from your words. Cut, fade and mix a game sound and hear your version in the game | [EDGEmat](https://edgemodders.ai/wiki/edgemat/), [EDGEwave](https://edgemodders.ai/wiki/edgewave/) |
| **Quickhacks in plain words** | Every tier's cost, upload time, damage and effects, read from your own game. Change them, or make new quickhacks, and try them in the running game | [EDGEhack](https://edgemodders.ai/wiki/edgehack/) |
| **Direct the game's people** | Lay out what the game's own characters do on a timeline, watch it in 3D with no game running, then play it in the running game and adjust it where you stand. Not released yet, and mostly untested in the game | [EDGEdir](https://edgemodders.ai/wiki/edgedir/) |
| **Quests in plain words** | Read any of the game's quests as steps and lines, and write a small quest of your own as a story with places, choices and music | [EDGEquest](https://edgemodders.ai/wiki/edgequest/) |
| **Build where you see it** | Place the game's own objects and people in the running game by dragging them, with a free camera, instead of typing coordinates. Bake a scene into a mod | [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) |
| **One install** | The EDGEkit app comes with the editor tools built in and keeps them updated. The tools that run in the game install separately | [EDGEkit](https://edgemodders.ai/wiki/edgekit/) |
| **Built on the community, open source** | Works alongside RED4ext, CET, redscript, ArchiveXL and TweakXL. MIT, with GPL-3.0 where WolvenKit requires it | All toolkits |

The [platform page](https://edgemodders.ai/platform.html) shows the same benefits with where each one stands today.

## About this wiki

Each toolkit's docs site is its reference: every setting, the design, the API. This wiki sits on top of them, written for people. It covers how to start, how to do common things, and what to do when something goes wrong.

| Start with | If |
|---|---|
| [Your first hour](https://edgemodders.ai/wiki/first-hour.html) | You want to be led from nothing installed to a first mod |
| [Getting started](https://edgemodders.ai/wiki/getting-started.html) | You want to know which toolkit to use for what, and what you need |
| [FAQ](https://edgemodders.ai/wiki/faq.html) | You have a question about cost, safety, saves or compatibility |
| [Glossary](https://edgemodders.ai/wiki/glossary.html) | A word like archive, framework or MCP stopped you |
| [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html) | You want Claude Code on your PC to use the EDGE tools. [EDGEchat](https://edgemodders.ai/wiki/edgechat/) does most of it in one install |
| [The EDGE Library](https://edgemodders.ai/wiki/library.html) | You want to keep scenes and quickhacks for good, outside any one mod, and use them in several |

The wiki is curated: pages are checked against each toolkit's docs, and each one shows when it was last reviewed. To suggest a page or report a mistake, see [Contribute](https://edgemodders.ai/wiki/contribute.html), or come and talk on [Discord](https://discord.gg/63qP3Erw43).
