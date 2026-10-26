<!-- Copied from EDGEweb's docs/wiki/rednode/agents.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/agents.html (reviewed 2026-10-24) -->

# Agents and MCP

REDnode was built with AI agents in mind. It talks to them in two ways:

| Way | For | Status |
|---|---|---|
| **The MCP server** | Claude Code on your PC, or an agent inside a package (REDagent), uses REDnode's tools: logs, windows, pictures of the game, game types, TweakDB, live game calls | Passed in game |
| **`agent.ask`** | Your mod asks REDagent a question and shows the answer | Passed in game |
| **Mods' tools** | Your mod offers functions as tools to every connected assistant | Passed in game |

MCP, the Model Context Protocol, is the standard way to give an AI agent tools. See the [glossary](https://edgemodders.ai/wiki/glossary.html).

## The MCP server

### Connect Claude Code

1. In the game, press **F10**, open the launcher, press the gear at the right of the **Theme** row to open the Settings drawer, and switch **MCP server** on.
2. Press **Copy setup** under it.
3. In a terminal on the same PC, paste and run the copied command once. It adds REDnode to Claude Code as `rednode`, for every project (`--scope user`).
4. Start a **new** Claude Code session while the game runs, and ask, for example: "Using the rednode tools, what are V's health, level and money?"

`claude mcp list` shows `rednode` as connected while the game runs, and as failing while it's closed, which is normal: the server lives in the overlay host, which runs with the game.

[Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html) covers REDnode beside the REDcode and EDGEdeck servers.

(Screenshot on the wiki, "MCP server switch": The REDnode launcher's Settings drawer with the MCP server switch on and the Copy setup button.)

### What the tools do

| Tool | Gives the agent | Asks you first |
|---|---|---|
| `logs` | What Node mods printed: all, one mod, or errors | No |
| `apps` | Your packages, their state, memory, pins, requirements and windows. Can open, close, restart and pin them | Only for those actions |
| `game_state` | What the game shows (menu, photo mode, scene, main menu) and the overlay mode | No |
| `perf` | Frame rate, the overlay's cost, memory | No |
| `gameapi_lookup` | Game types and functions, with REDnode's notes | No |
| `window_text` | The text in an overlay window | No |
| `window_image` | A picture of one overlay window | No |
| `window_console` | A window's console messages and errors | No |
| `game_image` | A picture of the game's screen, with or without the overlay. On an HDR screen the colours are approximate; HDR capture is not yet confirmed in game | No |
| `tweakdb` | TweakDB values and records from the running game | No |
| `api_read` | A live game call that only reads: functions named like reads (`Get`, `Is`, `Has`, `Can`, `Find`) and a TweakDB record's methods. It refuses the rest | No |
| `api_get` | A property of a game object | No |
| `game_facts`, `game_journal` | Quest facts and journal entries | No |
| `api_call` | Any live call into the game. It can change your game, such as money or health | **Always** |
| `archives_reload` | Swaps changed archives into the running game. It replaces files in your mod folder, and a broken archive can crash the game | **Always** |
| `game_facts_set`, `game_journal_set`, `game_teleport` | Change quest facts or journal entries in your save, or move V | **Always** |
| `mod_services`, `mod_read` | Lists the tools your mods offer, and calls the ones that only read | No |
| `mod_call` and each mod's own tools | Calls a mod's tool. See [Mods' tools for AI assistants](https://edgemodders.ai/wiki/rednode/agents.html#mods-tools-for-ai-assistants) | Unless the mod marks it read-only |

Claude Code asks you before every call of the tools marked **Always**, in every permission mode, auto mode included, and you can't turn that off. For the others, Claude Code's own permission settings decide.

### Mods' tools for AI assistants

A REDnode package can offer functions of its own as tools: the ones its [service file](https://edgemodders.ai/wiki/rednode/making-mods.html#mod-services) marks `@tool`. Every connected assistant sees them as `<package>__<function>`, with the author's description: Claude Code on your PC, and REDagent in the game. Tools marked read-only run without asking; every other one asks you before each call.

To see every tool an assistant can reach, and switch any tool or any mod's tools off for all assistants, install the **Tools Manager** from the [Admin Tools pack](https://edgemodders.ai/wiki/rednode/index.html#optional-packs). It also shows which assistants connected and their recent calls.

### Safety

- The server listens only on your own PC (`127.0.0.1`, port 41820), and every request needs the token in the setup command. The token is kept, so the setup keeps working.
- It only answers while the game is running.
- Switching **MCP server** off closes it to Claude Code and other outside programs.

Every tool and its options are on REDnode's [MCP server page](https://edgemodders.github.io/REDnode/mcp.html).

### For packages

A package can use the same tools for an AI agent of its own. It asks for the `mcp` permission in its manifest; once the player allows it, `kernel.mcp()` gives it the server's address and its own token:

```js
import { kernel } from 'rednode';

const { url, headers } = await kernel.mcp(); // fails until the player allows it
```

For a package, the server runs even with the **MCP server** switch off: that switch only controls access from outside REDnode. [REDagent](https://edgemodders.ai/wiki/redagent/) works this way.

## Asking REDagent from a mod

Any package can ask [REDagent](https://edgemodders.ai/wiki/redagent/) a question and stream the answer into its window: a build suggestion, an explanation of an error, a summary of what's happening. REDagent must be installed and on, and the package needs the `agent` permission ("questions to the AI assistant").

```js
import { agent, ui } from 'rednode';

const out = ui.text('');
let text = '';
await agent.ask('Suggest a build for a netrunner at level 12.', {
  context: { level: 12 },                        // your mod's state, sent with the question
  onText: (t) => out.set({ text: (text += t) }), // the answer as it arrives
});
```

| Rule | Why |
|---|---|
| Every answer costs the player | It's their Claude API account. Ask when the player wants it, never on a timer. REDagent gives each package a daily limit ($0.25 unless the player changes it); past it, `ask` fails and says so |
| The assistant only reads | When answering a package, REDagent can look at logs, the game state, the game API and other mods' read-only tools, but never changes files or the game |
| Send what it needs in `context` | So it doesn't spend time and money finding it |
| Let the player cancel | Pass an `AbortSignal` as `signal` |

The **Ask mod** sample asks whatever you type and streams the answer. A package that wants to *answer* questions itself, as REDagent does, uses `agent.serve` and says `"provides": ["agent"]` in its manifest.

## REDagent

REDagent is the agent that lives in the game: a chat window, powered by Claude, that writes, runs and fixes REDnode packages with you. It's a REDnode package with the `mcp` permission, released separately (0.3.1, for game 2.31). See the [REDagent section](https://edgemodders.ai/wiki/redagent/).
