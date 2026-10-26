<!-- Copied from EDGEweb's docs/wiki/connect-claude-code.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/connect-claude-code.html (reviewed 2026-10-26) -->

# Connect Claude Code

REDagent is the agent inside the game. On your desktop, [Claude Code](https://claude.com/claude-code) can use the same kind of tools through MCP, the Model Context Protocol. Four EDGE tools offer an MCP server. Each one adds different powers.

| MCP server | From | Gives the agent | Setup |
|---|---|---|---|
| REDnode kernel | REDnode | Mod logs, overlay windows (text, image and console), pictures of the game's screen, game types, TweakDB reads, live calls into the running game, archive swaps into the running game, quest facts and journal entries, things in the world (what is near V, spawns, EDGEbuilder scenes), and the tools your installed REDnode mods offer | [REDnode wiki: AI agents](https://edgemodders.ai/wiki/rednode/agents.html) |
| `redcode-mcp` | REDcode | The game's archives, game files as JSON, textures, hashes, node-by-node file editing, TweakDB, game sounds, pack, export and import (through REDbridge) | [REDcode wiki: assistants](https://edgemodders.ai/wiki/redcode/assistants.html) |
| EDGEdeck | EDGEdeck | The mod library: list, add, turn on or off, reorder, remove, deploy, undo, conflicts, loadouts, Vortex import | [EDGEdeck guide, section 13](https://edgemodders.github.io/EDGEdeck/guide.html) |
| `edgemat` | EDGEmat (preview) | A garment's materials from its in-game name, its layers in plain words, recolors saved into your project, new materials from words or an image | [EDGEmat wiki: assistants](https://edgemodders.ai/wiki/edgemat/assistants.html) |

## The easy way: the EDGE plugin for Claude Code

**EDGEchat**, the EDGE plugin for Claude Code, sets up all four servers in one install, plus modding skills and commands such as `/edge:new-mod`. It is a **preview (0.0.x), not released yet**, and its servers need Windows. In Claude Code:

```
/plugin marketplace add Edgemodders/EDGEchat
/plugin install edge@edgemodders
```

Then run `/edge:setup`: it checks each server and says what is missing. The plugin asks for a few optional settings, such as REDnode's token: in REDnode's Settings drawer press **Copy setup**, and paste only the token, the text after `Bearer `, not the whole command. (REDnode 0.40.1 can also connect with no token, by allowing it in the game, step 1 below; the plugin still uses the token for now.) If you added a server by hand before, remove that copy; `/edge:setup` explains how. Details are in [EDGEchat's docs](https://edgemodders.github.io/EDGEchat/).

## In short, one server at a time

1. **REDnode:** in the game, press **F10** to open the REDnode launcher. On the **REDNODE** tab, press the gear at the right of the **Theme** row to open the Settings drawer, and switch **MCP server** on. Then run `claude mcp add --transport http --scope user rednode http://127.0.0.1:41820/mcp` in a terminal once. In Claude Code, `/mcp` › `rednode` › **Authenticate**: the game shows a **Connect** window with the code your browser shows; press **F10**, then **Allow**. No token to copy (REDnode 0.40.1 or later; before that, press **Copy setup** and run the copied command). See [REDnode wiki: AI agents](https://edgemodders.ai/wiki/rednode/agents.html#connect-claude-code).
2. **REDcode:** run `claude mcp add redcode -- npx -y @edgemodders/redcode-mcp` in a terminal once. It needs Node 20 or later, the .NET 10 runtime and REDbridge (0.10.0 or later for every tool; REDcode's **Install REDbridge** fetches it). The [REDcode assistants page](https://edgemodders.ai/wiki/redcode/assistants.html) has the details, including the form Windows sometimes needs.
3. **EDGEdeck:** in VS Code, run **EDGEdeck: Connect an assistant (MCP)...** from the command palette, pick "Copy the Claude Code command" and run it in a terminal once. Agents inside VS Code 1.101 and later see EDGEdeck's tools with no setup.
4. **EDGEmat:** in VS Code, EDGEmat's Library view › **`...`** › **Connect an Assistant (MCP)...** › **Connect Claude Code**. The server comes with the extension. Details on the [EDGEmat assistants page](https://edgemodders.ai/wiki/edgemat/assistants.html).

Then start Claude Code and ask, for example:

> What errors are in my mod log?

> Find the texture for the Mantis Blades and show it to me.

> Turn off every mod that conflicts with my weapon pack, then deploy.

## Good to know

- Calls that could change the running game or the game folder ask you first, every time: REDnode's `api_call` and `archives_reload`, and EDGEdeck's deploy, undo and remove, among others. Reads of the game don't ask.
- REDnode's tools work while the game runs with REDnode in it: game version 2.5 with REDnode 0.38.1 or later, or 2.31 with REDnode 0.37.0.
- Each server's docs page is the reference for its tools and settings. This page only shows you where to start.
- The tools never ship an API key. Claude Code uses your own account.
