<!-- Copied from EDGEweb's docs/wiki/rednode/agents.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/agents.html (reviewed 2026-11-25) -->

# Agents and MCP

With REDnode in the game, an AI assistant on your PC can see the running game and act in it. You ask Claude Code "why did my mod crash?" or "what is V wearing?", and it reads the answer from the game itself. Anything that would change your game asks you first.

It works through REDnode's **MCP server**. MCP, the Model Context Protocol, is the standard way to give an AI assistant tools; see the [glossary](https://edgemodders.ai/wiki/glossary.html). REDnode works with assistants in three ways:

| Way | Who it's for | What it does |
|---|---|---|
| **The MCP server** | You, with Claude Code on your PC. [REDagent](https://edgemodders.ai/wiki/redagent/), the assistant inside the game, uses the same tools | The assistant reads mod logs, sees windows and the game's screen, looks up game functions and calls the game |
| **Mods' tools** | Mod makers | A mod offers its own functions as tools to every connected assistant |
| **`agent.ask`** | Mod makers | A mod asks REDagent a question and shows the answer |

All three passed their tests in the game.

| For players | |
|---|---|
| [Connect Claude Code](https://edgemodders.ai/wiki/rednode/agents.html#connect-claude-code) | The easy way with EDGEchat, or by hand |
| [Try it: first things to ask](https://edgemodders.ai/wiki/rednode/agents.html#try-it-first-things-to-ask) | Five prompts, and what each one does |
| [What the tools do](https://edgemodders.ai/wiki/rednode/agents.html#what-the-tools-do) | Tools that only look, and tools that ask you first |
| [Tools from mods and other EDGE tools](https://edgemodders.ai/wiki/rednode/agents.html#tools-from-mods-and-other-edge-tools) | What mods, EDGEmat and EDGEhack add |
| [Safety](https://edgemodders.ai/wiki/rednode/agents.html#safety) | Who can connect, and how to cut one off |

| For mod makers | |
|---|---|
| [For packages](https://edgemodders.ai/wiki/rednode/agents.html#for-packages) | An AI agent inside your own package |
| [Asking REDagent from a mod](https://edgemodders.ai/wiki/rednode/agents.html#asking-redagent-from-a-mod) | `agent.ask` |

## Connect Claude Code

[Claude Code](https://claude.com/claude-code) is Anthropic's assistant for your desktop: you chat with it in a terminal, or in a panel in VS Code or EDGEkit.

| You need | |
|---|---|
| Claude Code, installed and signed in | On the same PC as the game |
| The game running, with REDnode in it | [Install REDnode](https://edgemodders.ai/wiki/rednode/install.html) first |
| A loaded save | For questions about V |

### The easy way: EDGEchat

[EDGEchat](https://edgemodders.ai/wiki/edgechat/) is the EDGE plugin for Claude Code. It adds REDnode for you, as `plugin:edge:rednode`, beside the other EDGE tools, with nothing to type in a terminal. If you have it, or want it, follow [Install and connect](https://edgemodders.ai/wiki/edgechat/install.html), whose [step 5](https://edgemodders.ai/wiki/edgechat/install.html#step-5-let-claude-into-the-game) is the sign-in below. Don't also add REDnode by hand: its tools would show twice.

### By hand

1. In the game, press **F10**, open the launcher, and press the gear at the right of the **Theme** row to open the Settings drawer. Switch **MCP server** on.
2. Skip this step if you use EDGEchat. In a terminal on the same PC, run once:
   ```
   claude mcp add --transport http --scope user rednode http://127.0.0.1:41820/mcp
   ```
   It adds REDnode to Claude Code under the name `rednode`, for every project.
3. In Claude Code, type `/mcp`, pick `rednode` (with EDGEchat: `plugin:edge:rednode`) and choose **Authenticate**. Your browser opens a page titled **Approve in Cyberpunk 2077**, with a code such as `FPZ-4201`.
4. Switch to the game. A **Connect** window is already there, with the assistant's name and a code. Press **F10** so you can click, check that the code is the one in your browser, and press **Allow**.
5. Ask Claude Code something: see [Try it](https://edgemodders.ai/wiki/rednode/agents.html#try-it-first-things-to-ask).

| You should see | |
|---|---|
| In the browser, after **Allow** | The page hands you back to Claude Code |
| In Claude Code, under `/mcp` | REDnode's entry shown as connected |
| In the game's Settings drawer | Claude Code listed under **Connected assistants**, with a **Revoke** button |

If the two codes differ, press **Deny**: the request in the game is not the one you started. A request you don't answer lapses after two minutes.

You do this once. The connection lasts across game restarts, until you press **Revoke**. While the game is closed, Claude Code shows REDnode as failing to connect. That is normal: the server runs only with the game.

(Screenshot on the wiki, "MCP server switch": The REDnode launcher's Settings drawer with the MCP server switch on, Copy setup, and Connected assistants with Revoke.)

(Screenshot on the wiki, "The Connect window": The game with REDnode's Connect window: the assistant's name, Claude Code, the code to compare with the browser's, and the Allow and Deny buttons.)

If it doesn't connect, see [Troubleshooting](https://edgemodders.ai/wiki/rednode/troubleshooting.html#claude-code). [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html) covers REDnode beside the other EDGE tools' servers.

### Other assistants

An assistant that can't sign in this way can use a fixed token. Press **Copy setup** in the Settings drawer and run the copied command in a terminal once. Don't use it for Claude Code beside the entry you already have, or REDnode's tools show twice.

## Try it: first things to ask

Load a save, start a new Claude Code session, and ask these in turn. Each comes from REDnode's own test of the server.

| Ask | What happens |
|---|---|
| "Using the rednode tools, what are V's health, level and money?" | Claude looks up the game functions, then calls them. These calls only read, so they aren't held for your OK |
| "Show me the errors in the REDnode mod log." | It reads what your mods printed. With no errors, it says so |
| "Capture the Hello mod window and tell me what it shows." | Switch the **Hello mod** sample on first. Claude takes a picture of that window and describes it |
| "What does the game show right now, and what does the overlay cost?" | It reports whether a menu or photo mode is open, the frame rate and REDnode's cost. Try it once in play and once with the inventory open |
| "Give V 50 eddies." | This changes your game, so Claude Code stops and asks you. Allow it, and V's money goes up by 50 |

The question comes from Claude Code, in its own window, not from the game. For the tools that only look, Claude Code's permission settings decide whether it asks; allow those freely.

## What the tools do

**Tools that change your game always ask you first.** Claude Code asks before every single call of them, in every permission mode, auto mode included, and you can't turn that off.

| Tool | What it changes |
|---|---|
| `api_call` | Calls any game function. It can change your game, such as V's money or health |
| `archives_reload` | Swaps changed archives into the running game, through [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html). It replaces files in your game's mod folder, and a broken archive can crash the game |
| `game_facts_set`, `game_journal_set` | Change quest facts or journal entries in your save |
| `game_teleport` | Moves V |
| `world_spawn`, `world_remove`, `world_load` | Put a prop, an object or a person in the world, remove it, or load an EDGEbuilder scene (since 0.70.0 only some kinds of object, or without some, with `kinds` and `skip`) |
| `world_animate` | Plays, stops or reads a workspot (an animation) on a person the assistant spawned |
| `world_weather_set` | Sets and holds the weather, or gives it back to the game |
| `mod_call`, and a mod's own tools | Run a tool one of your mods offers, unless the mod's author marked it as read-only |
| `apps`, when it acts | Opens, closes, restarts or pins one of your packages |

**Tools that only look** carry no such rule. Claude Code's own permission settings decide whether it asks before using one.

| Tool | Gives the assistant |
|---|---|
| `logs` | What Node mods printed: all, one mod, or errors only |
| `apps` | Your packages, their state, memory, pins, requirements and windows |
| `game_state` | What the game shows (menu, photo mode, scene, main menu) and the overlay's mode |
| `perf` | Frame rate, the overlay's cost, memory |
| `gameapi_lookup` | The game's types and functions, with REDnode's notes |
| `window_text`, `window_image`, `window_console` | The text in an overlay window, a picture of it, and its console messages and errors |
| `game_image` | A picture of the game's screen, with or without the overlay. On an HDR screen the colours are approximate |
| `tweakdb` | Values and records from TweakDB, the game's database of items and stats |
| `api_read` | Calls a game function that only reads something. It accepts functions whose names start with Get, Is, Has, Can or Find, and refuses anything else |
| `api_get` | One property of a game object |
| `game_facts`, `game_journal` | Quest facts and journal entries |
| `world_near`, `world_spawned` | What is around V, with the files each thing uses, and what the assistant put in the world |
| `world_weather` | The weather now, who holds it, and every weather state |
| `world_pin`, `world_unpin`, `world_pins` | Drop a labelled pin in the world, at a place or on an object. Pins are only drawn over the game and change nothing in it |
| `mod_services`, `mod_read` | List the tools your mods offer, and run the ones that only read |

Every tool and its options are on REDnode's [MCP server page](https://edgemodders.github.io/REDnode/mcp.html).

## Tools from mods and other EDGE tools

### Mods' tools for AI assistants

A REDnode package can offer functions of its own as tools. Every connected assistant sees them, named `<package>__<function>`, with the author's description: Claude Code on your PC, and REDagent in the game. Tools the author marked read-only run without asking; every other one asks you before each call. Mod makers: see [Making mods and apps](https://edgemodders.ai/wiki/rednode/making-mods.html) for how to mark a function as a tool.

To see every tool an assistant can reach, and to switch any tool off for all assistants, install the [Tools Manager](https://edgemodders.ai/wiki/rednode/admin-tools.html#tools-manager) from the Admin Tools pack.

### EDGEmat and EDGEhack

| Tool | What an assistant can do | Where to read |
|---|---|---|
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/) | REDagent, in the game, can find a garment's materials and describe them without asking. Recolours and new materials ask you first. REDnode starts EDGEmat's tools by itself the first time REDagent needs them | [EDGEmat and AI assistants](https://edgemodders.ai/wiki/edgemat/assistants.html) |
| [EDGEhack](https://edgemodders.ai/wiki/edgehack/) | REDagent, in the game, can find and describe the game's quickhacks without asking. Making a quickhack, changing its costs, texts and effects, writing its script and trying it live ask you first. New ones go on EDGEhack's Desk unless you name a project. Since REDnode 0.65.3, with REDagent 0.4.4 | [EDGEhack with assistants](https://edgemodders.ai/wiki/edgehack/assistants.html) |

Both share REDnode's own REDbridge, so only one runs while you play. These tools are for assistants inside the game. Claude Code on your desktop gets EDGEmat and EDGEhack from those tools themselves, or all at once through [EDGEchat](https://edgemodders.ai/wiki/edgechat/).

## Safety

- **Only your own PC.** The server listens on `127.0.0.1`, port 41820, which other computers can't reach.
- **Only assistants you allowed.** Every request needs a token. An assistant gets one when you press **Allow** in the game, so only someone at the game can let a new assistant in. REDnode keeps only a scrambled form of each token, not the token.
- **No websites.** The server refuses requests sent by a web page, so a site can't reach it through your browser.
- **Only while you play.** It answers only while the game is running.
- **You can cut it off.** **Revoke** beside an assistant ends its access. Switching **MCP server** off closes the server to Claude Code and every other outside program.

## For packages

For mod makers. A package can use the same tools for an AI agent of its own. It asks for the `mcp` permission in its manifest; once the player allows it, `kernel.mcp()` gives it the server's address and its own token:

```js
import { kernel } from 'rednode';

const { url, headers } = await kernel.mcp(); // fails until the player allows it
```

For a package, the server runs even with the **MCP server** switch off: that switch only controls access from outside REDnode. [REDagent](https://edgemodders.ai/wiki/redagent/) works this way.

## Asking REDagent from a mod

For mod makers. Any package can ask [REDagent](https://edgemodders.ai/wiki/redagent/) a question and stream the answer into its window: a build suggestion, an explanation of an error, a summary of what's happening. REDagent must be installed and on, and the package needs the `agent` permission, which players see as "questions to the AI assistant".

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
| Every answer costs the player | It's their Anthropic account. Ask when the player wants it, never on a timer. REDagent gives each package a daily limit ($0.25 unless the player changes it); past it, `ask` fails and says so |
| The assistant only reads | When answering a package, REDagent can look at logs, the game state, the game API and other mods' read-only tools, but never changes files or the game |
| Send what it needs in `context` | So it doesn't spend time and money finding it |
| Let the player cancel | Pass an `AbortSignal` as `signal` |

The **Ask mod** sample asks whatever you type and streams the answer. The player's side of this is on REDagent's page [Mods that ask REDagent](https://edgemodders.ai/wiki/redagent/other-mods.html).
