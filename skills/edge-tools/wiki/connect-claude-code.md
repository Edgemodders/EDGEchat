<!-- Copied from EDGEweb's docs/wiki/connect-claude-code.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/connect-claude-code.html (reviewed 2026-10-24) -->

# Connect Claude Code

REDagent is the agent inside the game. On your desktop, [Claude Code](https://claude.com/claude-code) can use the same kind of tools through MCP, the Model Context Protocol. Four EDGE tools offer an MCP server. Each one adds different powers.

| MCP server | From | Gives the agent | Setup |
|---|---|---|---|
| REDnode kernel | REDnode | Mod logs, overlay windows (text, image and console), pictures of the game's screen, game types, TweakDB reads, live calls into the running game, archive swaps into the running game, quest facts and journal entries, and the tools your installed REDnode mods offer | [REDnode wiki: AI agents](https://edgemodders.ai/wiki/rednode/agents.html) |
| `redcode-mcp` | REDcode | The game's archives, game files as JSON, textures, hashes, node-by-node file editing, TweakDB, game sounds, pack, export and import (through REDbridge) | [REDcode wiki: assistants](https://edgemodders.ai/wiki/redcode/assistants.html) |
| EDGEdeck | EDGEdeck | The mod library: list, add, turn on or off, reorder, remove, deploy, undo, conflicts, loadouts, Vortex import | [EDGEdeck guide, section 13](https://edgemodders.github.io/EDGEdeck/guide.html) |
| `edgemat` | EDGEmat (preview) | A garment's materials from its in-game name, its layers in plain words, recolors saved into your project, new materials from words or an image | [EDGEmat wiki: assistants](https://edgemodders.ai/wiki/edgemat/assistants.html) |

## The easy way: the EDGE plugin for Claude Code

**EDGEchat**, the EDGE plugin for Claude Code, sets up all four servers in one install, plus modding skills and commands such as `/edge:new-mod`. It is a **preview (0.0.x), not released yet**, and its servers need Windows. In Claude Code:

```
/plugin marketplace add Edgemodders/EDGEchat
/plugin install edge@edgemodders
```

Then run `/edge:setup`: it checks each server and says what is missing. The plugin asks for a few optional settings, such as REDnode's token (see step 1 below: paste only the token, the text after `Bearer `, not the whole command). If you added a server by hand before, remove that copy; `/edge:setup` explains how. Details are in [EDGEchat's docs](https://edgemodders.github.io/EDGEchat/).

## In short, one server at a time

1. **REDnode:** in the game, press **F10** to open the REDnode launcher. On the **REDNODE** tab, press the gear at the right of the **Theme** row to open the Settings drawer, switch **MCP server** on, press **Copy setup**, and run the copied command in a terminal.
2. **REDcode:** run `claude mcp add redcode -- npx -y @edgemodders/redcode-mcp` in a terminal once. It needs Node 20 or later, the .NET 10 runtime and REDbridge (0.10.0 or later for every tool; REDcode's **Install REDbridge** fetches it). The [REDcode assistants page](https://edgemodders.ai/wiki/redcode/assistants.html) has the details, including the form Windows sometimes needs.
3. **EDGEdeck:** in VS Code, run **EDGEdeck: Connect an assistant (MCP)...** from the command palette, pick "Copy the Claude Code command" and run it in a terminal once. Agents inside VS Code 1.101 and later see EDGEdeck's tools with no setup.
4. **EDGEmat:** in VS Code, EDGEmat's Library view › **`...`** › **Connect an Assistant (MCP)...** › **Connect Claude Code**. The server comes with the extension. Details on the [EDGEmat assistants page](https://edgemodders.ai/wiki/edgemat/assistants.html).

Then start Claude Code and ask, for example:

> What errors are in my mod log?

> Find the texture for the Mantis Blades and show it to me.

> Turn off every mod that conflicts with my weapon pack, then deploy.

## Good to know

- Calls that could change the running game or the game folder ask you first, every time: REDnode's `api_call` and `archives_reload`, and EDGEdeck's deploy, undo and remove, among others. Reads of the game don't ask.
- REDnode's tools work while the game runs with REDnode in it, game version 2.31.
- Each server's docs page is the reference for its tools and settings. This page only shows you where to start.
- The tools never ship an API key. Claude Code uses your own account.
