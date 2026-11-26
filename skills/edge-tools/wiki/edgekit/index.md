<!-- Copied from EDGEweb's docs/wiki/edgekit/index.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgekit/ (reviewed 2026-11-13) -->

# EDGEkit

EDGEkit is the easiest way to get the EDGE tools. It is a free app for Windows: an editor that looks and works like VS Code, a popular free editor, with the EDGE modding tools already installed. You install one app and start modding Cyberpunk 2077, with nothing else to hunt for. You don't need to know how to code to use it.

(Screenshot on the wiki, "EDGEkit": The EDGEkit window just after its first start: the Welcome walkthrough in the middle, and the EDGE tools' icons down the activity bar on the left.)

**New here?** [Install the app](https://edgemodders.ai/wiki/edgekit/install.html), then follow [Your first session](https://edgemodders.ai/wiki/edgekit/first-session.html).

## Two ways to get it

| | What it is | For you if |
|---|---|---|
| **The EDGEkit app** | A complete editor of its own, with the EDGE tools built in. [Install the app](https://edgemodders.ai/wiki/edgekit/install.html) | You are new to modding, or don't use VS Code |
| **The EDGEkit extension pack** | One extension for VS Code or VSCodium that installs the EDGE tools there in one go. [Install the extension pack](https://edgemodders.ai/wiki/edgekit/install-pack.html) | You already work in VS Code and want to stay there |

Both give you the same tools. The app adds Claude Code, the AI assistant, at its first start.

## What's inside

| Tool | What it does | In the wiki |
|---|---|---|
| REDcode | Browse the game's files, edit them, and build mods from a project | [REDcode](https://edgemodders.ai/wiki/redcode/) |
| EDGEdeck | The mod manager: install mods, switch them on and off, deploy them to the game | [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) |
| EDGEmat | Recolor clothes and make new materials | [EDGEmat](https://edgemodders.ai/wiki/edgemat/) |
| EDGEwave | Edit, mix and re-voice the game's sounds | [EDGEwave](https://edgemodders.ai/wiki/edgewave/) |
| EDGEquest | Read the game's quests and write your own | [EDGEquest](https://edgemodders.ai/wiki/edgequest/) |
| EDGEhack | Change the game's quickhacks and make new ones | [EDGEhack](https://edgemodders.ai/wiki/edgehack/) |
| REDsave | Search your save games, keep sets of them and name them | [REDsave's docs](https://edgemodders.github.io/REDsave/) |
| Redscript IDE, by jac3km4 | Help with redscript, the game's scripting language, for those who write it | |
| REDnode HUD | The dark theme EDGEkit starts in | |
| Claude Code | Anthropic's AI assistant. The app installs it at the first start, with your OK | [EDGEchat](https://edgemodders.ai/wiki/edgechat/) |

## What isn't inside

EDGEkit holds the tools that run in the editor. The tools that run inside the game are separate installs, into the game folder:

| Tool | What it is | Install |
|---|---|---|
| REDnode | The runtime that lets mods and apps run in the game | [Install REDnode](https://edgemodders.ai/wiki/rednode/install.html) |
| REDagent | The AI assistant inside the game | [Install REDagent](https://edgemodders.ai/wiki/redagent/install.html) |
| EDGEbuilder | The world builder inside the game | [Install EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/install.html) |

REDbridge, the engine REDcode and the others use to read the game's files, isn't in the app either. REDcode downloads it for you: see [Your first session](https://edgemodders.ai/wiki/edgekit/first-session.html#set-up-the-tools).

## Why you'd want it

- **One install.** No list of extensions to find and set up.
- **It works straight away.** The tools are built in, so the first start needs no network.
- **Your tools stay current.** Each EDGE tool updates itself. A fix in EDGEdeck reaches you without waiting for a new EDGEkit.
- **It leaves VS Code alone.** EDGEkit has its own name, icon and settings folder, and installs beside VS Code without touching it.
- **AI included.** Claude Code installs at the first start, and EDGEkit offers to set up [EDGEchat](https://edgemodders.ai/wiki/edgechat/), which makes it a modding assistant.

## What it costs

EDGEkit and the EDGE tools are free and open source. Claude Code is Anthropic's, and needs a Claude account whose plan includes Claude Code: that is paid for separately, and you can skip it. Everything else in EDGEkit works without it.

## Status

| | |
|---|---|
| **The app** | A preview. The latest is 1.140.6 (2026-11-12), for Windows x64 |
| **The extension pack** | A preview. The latest is 0.6.0 (2026-11-12), on the VS Code Marketplace and Open VSX |
| **Good to know** | The installer isn't signed yet, so Windows may warn before it runs. Updating with **Restart to Update** was tested on the developer's PC, by running what the button runs; a click on the button in a released copy is not confirmed yet |
| **Next** | Following newer releases of Code - OSS, the open-source editor EDGEkit is built from. A Linux build may come later |

## In this section

| Page | |
|---|---|
| [Install the app](https://edgemodders.ai/wiki/edgekit/install.html) | What you need, the installer, the first start, updating and uninstalling |
| [Your first session](https://edgemodders.ai/wiki/edgekit/first-session.html) | Finding your way around, setting up each tool, and Claude Code with EDGEchat |
| [Install the extension pack](https://edgemodders.ai/wiki/edgekit/install-pack.html) | The EDGE tools in VS Code or VSCodium instead |
| [Troubleshooting](https://edgemodders.ai/wiki/edgekit/troubleshooting.html) | Fixes, EDGEkit's own command, and where it keeps things |

## Reference

- [EDGEkit docs](https://edgemodders.github.io/EDGEkit/) and its [design](https://edgemodders.github.io/EDGEkit/design.html), for developers
- [Changelog](https://github.com/Edgemodders/EDGEkit/blob/main/CHANGELOG.md): what changed in each release
- [Source and issues](https://github.com/Edgemodders/EDGEkit)

EDGEkit is built from Code - OSS, the MIT-licensed open-source core of VS Code, the way VSCodium is. It is not affiliated with Microsoft; Visual Studio Code is a trademark of Microsoft.
