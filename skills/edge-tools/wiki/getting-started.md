<!-- Copied from EDGEweb's docs/wiki/getting-started.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/getting-started.html (reviewed 2026-11-25) -->

# Getting started

EDGE is a family of tools. You don't need all of them. This page helps you pick: first the three ways in, then a table by what you want to do.

**Want to be led through it?** [Your first hour](https://edgemodders.ai/wiki/first-hour.html) is one route from nothing installed to a first mod in your game, step by step.

## Three ways in

Most people start with one of these three. They are not rivals: many people end up with all of them.

| | [The EDGEkit app](https://edgemodders.ai/wiki/edgekit/) | [REDagent](https://edgemodders.ai/wiki/redagent/) | [EDGEchat](https://edgemodders.ai/wiki/edgechat/) |
|---|---|---|---|
| **What it is** | An editor for Windows with the EDGE tools built in | An AI assistant inside the game | An add-on that makes Claude Code, Anthropic's AI assistant, a modding assistant |
| **Where you use it** | On your desktop | In a chat window over the game, while you play | On your desktop: in EDGEkit, in VS Code or in a terminal |
| **What you do with it** | Install and manage mods, and make mods with buttons and lists: recolors, quickhacks, sounds, quests, changed game files | Ask for a mod in plain words. It writes mods that run beside the game and draw on the HUD | Ask for a mod in plain words. Claude makes mods that run beside the game, changed game values, recolored clothes and other mods made of game files |
| **An AI does the work** | No. You can add EDGEchat to it | Yes | Yes |
| **What it costs** | Free | Free, plus your own Anthropic API key, paid per use | Free, plus a Claude plan that includes Claude Code |
| **What it needs** | Windows | [REDnode](https://edgemodders.ai/wiki/rednode/) in the game | Claude Code, and the tools it connects: REDnode, REDbridge and EDGEdeck to start; EDGEmat, EDGEfab, EDGEhack and EDGEquest come with it. [The full list](https://edgemodders.ai/wiki/edgechat/install.html#what-you-need) |
| **Start with** | [Install the app](https://edgemodders.ai/wiki/edgekit/install.html), then [your first session](https://edgemodders.ai/wiki/edgekit/first-session.html) | [Install and set up](https://edgemodders.ai/wiki/redagent/install.html), then [your first mod](https://edgemodders.ai/wiki/redagent/first-mod.html) | [Install and connect](https://edgemodders.ai/wiki/edgechat/install.html), then [your first mod](https://edgemodders.ai/wiki/edgechat/first-mod.html) |

REDagent and EDGEchat are both AI assistants. The difference is where they are and how you pay: REDagent is in the game and uses an API key; EDGEchat is at your desk and uses a Claude plan. A Claude plan can't be used with REDagent, and an API key isn't what EDGEchat needs.

## I want to...

| I want to... | Use | Start with |
|---|---|---|
| Install, switch on and off, and update mods made by others | [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | [Install EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html), then [your first mod](https://edgemodders.ai/wiki/edgedeck/first-mod.html). Coming from Vortex? [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html) |
| Ask for a mod while I play | [REDagent](https://edgemodders.ai/wiki/redagent/) | [Install and set up REDagent](https://edgemodders.ai/wiki/redagent/install.html), then [your first mod](https://edgemodders.ai/wiki/redagent/first-mod.html) |
| Ask for a mod at my desk, with Claude Code | [EDGEchat](https://edgemodders.ai/wiki/edgechat/) | [Install and connect](https://edgemodders.ai/wiki/edgechat/install.html), then [your first mod](https://edgemodders.ai/wiki/edgechat/first-mod.html) |
| Get the editor tools in one install | [EDGEkit](https://edgemodders.ai/wiki/edgekit/) | The app: [Install the app](https://edgemodders.ai/wiki/edgekit/install.html). Already use VS Code: [Install the extension pack](https://edgemodders.ai/wiki/edgekit/install-pack.html) |
| Recolor clothes, or make a new material from my words | [EDGEmat](https://edgemodders.ai/wiki/edgemat/) | [Install EDGEmat](https://edgemodders.ai/wiki/edgemat/install.html), then [Tutorial: recolor a jacket](https://edgemodders.ai/wiki/edgemat/tutorial-recolor.html) |
| Change one of the game's quickhacks, or make a new one | [EDGEhack](https://edgemodders.ai/wiki/edgehack/) | [Install and set up EDGEhack](https://edgemodders.ai/wiki/edgehack/install.html), then [Change a game quickhack](https://edgemodders.ai/wiki/edgehack/edit-quickhack.html) |
| Change how something in the game sounds | [EDGEwave](https://edgemodders.ai/wiki/edgewave/) | [Install and set up EDGEwave](https://edgemodders.ai/wiki/edgewave/install.html), then [Tutorial: your first sound mod](https://edgemodders.ai/wiki/edgewave/tutorial.html) |
| Read the game's quests, or write a small quest of my own | [EDGEquest](https://edgemodders.ai/wiki/edgequest/) | [Install and set up EDGEquest](https://edgemodders.ai/wiki/edgequest/install.html), then [Your first quest](https://edgemodders.ai/wiki/edgequest/first-quest.html) |
| Make the game's people act out a scene | [EDGEdir](https://edgemodders.ai/wiki/edgedir/) | Not released yet: read [what it is](https://edgemodders.ai/wiki/edgedir/), then [build it from its source](https://edgemodders.ai/wiki/edgedir/install.html) and make [your first scene](https://edgemodders.ai/wiki/edgedir/first-scene.html) |
| Place objects in the game world and build a scene | [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) | [Install and set up EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/install.html), then [Your first scene](https://edgemodders.ai/wiki/edgebuilder/first-scene.html) |
| Look inside the game's files and change them by hand: a name, a texture, a stat | [REDcode](https://edgemodders.ai/wiki/redcode/) | [Install and set up REDcode](https://edgemodders.ai/wiki/redcode/install.html), then [Your first mod](https://edgemodders.ai/wiki/redcode/first-mod.html) |
| Find out why a mod doesn't work | [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/), or [EDGEchat](https://edgemodders.ai/wiki/edgechat/) | [Conflicts and who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html), or ask Claude: [When a mod doesn't work](https://edgemodders.ai/wiki/edgechat/check-mod.html) |
| Write a mod in JavaScript or TypeScript, or build an in-game app | [REDnode](https://edgemodders.ai/wiki/rednode/) | [Making mods and apps](https://edgemodders.ai/wiki/rednode/making-mods.html) |
| See how the game's own UI is built, or make a HUD panel that looks like the game's | [REDnode](https://edgemodders.ai/wiki/rednode/) with its UI Tools pack | [UI Tools](https://edgemodders.ai/wiki/rednode/ui-tools.html), then [your first native HUD panel](https://edgemodders.ai/wiki/rednode/ui-tools-tutorial.html) |
| Connect Claude Code to one tool by hand, without EDGEchat | The tool's own page for assistants | [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html) |

## What you need

Nobody needs every row. The second column says who needs each.

| You need | For | Notes |
|---|---|---|
| Cyberpunk 2077 on a Windows PC, game version 2.5 | Everything | The main menu shows the version. Still on 2.31? See the [FAQ](https://edgemodders.ai/wiki/faq.html#which-game-versions-and-stores-does-it-work-with) |
| The [EDGEkit app](https://edgemodders.ai/wiki/edgekit/install.html), or [VS Code](https://code.visualstudio.com/) | REDcode, EDGEdeck, EDGEmat, EDGEwave, EDGEquest and EDGEhack, which run inside an editor | Both are free. REDnode, REDagent and EDGEbuilder run in the game and need neither |
| RED4ext and redscript | [REDnode](https://edgemodders.ai/wiki/rednode/install.html), and so REDagent and EDGEbuilder | Two free frameworks most modded games already have. EDGEdeck's [Get the frameworks](https://edgemodders.ai/wiki/edgedeck/frameworks.html#getting-the-frameworks) installs them |
| [REDnode](https://edgemodders.ai/wiki/rednode/install.html) in the game | REDagent, EDGEbuilder and any REDnode mod. Also for trying a change in the running game from REDcode or EDGEhack | Free |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Every tool that reads the game's files | You don't install it yourself. The tools download it at a button press |
| Your own Anthropic API key, with some credit | REDagent | You pay Anthropic per use. [Get a key](https://edgemodders.ai/wiki/redagent/install.html#1-get-an-anthropic-api-key), and see [what it costs](https://edgemodders.ai/wiki/redagent/costs.html) |
| A Claude plan that includes Claude Code | EDGEchat | Paid to Anthropic. EDGEchat also needs Node.js 20 or later: [its list](https://edgemodders.ai/wiki/edgechat/install.html#what-you-need) |
| A free [Nexus Mods](https://www.nexusmods.com/cyberpunk2077) account | Downloading mods from Nexus Mods | Optional for the EDGE tools themselves |

A few optional features use an AI service with your own key. The [FAQ](https://edgemodders.ai/wiki/faq.html#what-does-edge-cost) lists them.

## How each tool installs today

| Tool | Where you get it | How it goes in |
|---|---|---|
| The EDGEkit app | An installer from [GitHub](https://github.com/Edgemodders/EDGEkit/releases/latest) | Run the installer. REDcode, EDGEdeck, EDGEmat, EDGEwave, EDGEquest and EDGEhack are built in |
| REDcode, EDGEdeck, EDGEmat, EDGEwave, EDGEquest | The VS Code Marketplace and Open VSX, the two stores editors install extensions from | From the editor's Extensions view, or all at once with the [EDGEkit extension pack](https://edgemodders.ai/wiki/edgekit/install-pack.html). Not needed in the EDGEkit app |
| EDGEhack | Open VSX, Nexus Mods and GitHub. Not on the VS Code Marketplace yet | In VS Code, from the downloaded file: [Install EDGEhack](https://edgemodders.ai/wiki/edgehack/install.html#install-edgehack). Not needed in the EDGEkit app |
| REDnode, REDagent, EDGEbuilder | A zip from Nexus Mods or GitHub | Into the game folder, with EDGEdeck or Vortex, or by hand |
| REDbridge | GitHub | EDGEdeck, REDcode and REDnode download it for you |
| EDGEdir | Not released yet: its source on [GitHub](https://github.com/Edgemodders/EDGEdir) | Built from source for now: [Install and set up EDGEdir](https://edgemodders.ai/wiki/edgedir/install.html) |
| EDGEchat | From inside Claude Code | One button in EDGEkit, or Claude Code's plugin dialog |

All of them are young. Each tool's Overview page has a **Status** section that says what is released, what was tested in the game and what is still planned.

## Where to go next

- [Your first hour](https://edgemodders.ai/wiki/first-hour.html): the route, step by step.
- The [FAQ](https://edgemodders.ai/wiki/faq.html): cost, safety, saves, uninstalling.
- Stuck on a word? The [Glossary](https://edgemodders.ai/wiki/glossary.html) explains the modding terms.
- Want to talk to people? Join us on [Discord](https://discord.gg/63qP3Erw43).
