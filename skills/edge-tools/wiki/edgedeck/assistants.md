<!-- Copied from EDGEweb's docs/wiki/edgedeck/assistants.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/assistants.html (reviewed 2026-11-21) -->

# Assistants and the command line

An AI assistant can do most of what you do in the Mods view: look at your mods, add them, turn them on and off, and deploy. That's the EDGE platform's idea: a tool you can use, an assistant can use too.

| On this page | |
|---|---|
| [What you can ask](https://edgemodders.ai/wiki/edgedeck/assistants.html#what-you-can-ask) | With examples |
| [What an assistant can and can't do](https://edgemodders.ai/wiki/edgedeck/assistants.html#what-an-assistant-can-and-cant-do) | |
| [Connect an assistant](https://edgemodders.ai/wiki/edgedeck/assistants.html#connect-an-assistant) | The easy way first |
| [Safety](https://edgemodders.ai/wiki/edgedeck/assistants.html#safety) | What asks you first |
| [The command line](https://edgemodders.ai/wiki/edgedeck/assistants.html#the-command-line) | For your own scripts |

## What you can ask

Once an assistant is connected, ask in plain words:

> Which of my mods are off?

> Add the zip in my Downloads folder and tell me if it conflicts with anything.

> What will the next deploy change?

> Deploy my mods and tell me what changed.

> Save my current setup as a loadout called "photo mode".

(Screenshot on the wiki, "An assistant managing mods": Claude Code in a terminal answering "which of my mods conflict?" using EDGEdeck's tools, and the Mods view updating on its own.)

## What an assistant can and can't do

| It can | It can't, yet |
|---|---|
| List your mods and look at one in full: files, sizes, where it came from, conflicts | Download from Nexus, sign in to Nexus, check for updates or update mods |
| Add a mod from a file or folder on your PC | Get the frameworks |
| Add or refresh your own REDcode or WolvenKit project | See conflicts inside archives. It sees conflicts by file path only |
| Turn mods on or off, move them in the order, rename, remove | Make or change sections |
| Say what the next deploy will change | Start the game |
| Deploy everything or one mod, and undo a deploy | Move the library |
| List files changed in the game folder | |
| Save, switch and list loadouts | |
| List and import Vortex's mods | |

For the things in the right-hand column, use the buttons.

## Connect an assistant

Assistants reach EDGEdeck through **MCP**, the standard way AI assistants use tools (see the [Glossary](https://edgemodders.ai/wiki/glossary.html)). You don't need to know more than that: pick your row.

| You use | Do this |
|---|---|
| **Claude Code with EDGEchat**, the easy way, and what the EDGEkit app sets up | Nothing more. [EDGEchat](https://edgemodders.ai/wiki/edgechat/), the EDGE plugin for Claude Code, already connects EDGEdeck along with the other EDGE tools. See [Install EDGEchat](https://edgemodders.ai/wiki/edgechat/install.html) and [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html) |
| **Agents built into VS Code** (VS Code 1.101 or later) | Nothing. They see EDGEdeck's tools as soon as EDGEdeck is installed |
| **Claude Code without EDGEchat** | Press `Ctrl+Shift+P`, run **EDGEdeck: Connect an assistant (MCP)...**, choose **Copy the Claude Code command**, and paste it into a terminal once |
| **Another assistant that speaks MCP** | The same command can copy a settings entry for it |
| **No VS Code at all** | EDGEdeck's tools are also on npm: `claude mcp add edgedeck -- npx -y @edgemodders/edgedeck-mcp` adds them to Claude Code. They use the same library as the extension |

> **Connect it one way only.** If you have EDGEchat, don't also add EDGEdeck by hand: Claude would then see every EDGEdeck tool twice. If that has happened, run `/edge:setup` in Claude Code. It finds the copy you added by hand and explains how to remove it.

**Check that it worked:** ask "Which of my mods are on?". The assistant should answer with the mods from your list.

The routes outside VS Code need [Node.js](https://nodejs.org/) 20 or newer. If a copied command fails because `node` or `npx` isn't found, install it.

## Safety

- **Deploy, undo and remove ask first.** Those change the game folder or delete from your library, so they're marked as needing your say. Claude Code asks you before every one of them, in every permission mode, auto mode included.
- **The game must be closed.** Deploy and undo refuse while the game is running, as the buttons do.
- **What you see stays true.** The Mods view reloads by itself when an assistant changes your library or deploys.
- **Same rules as you.** An assistant goes through EDGEdeck, so it can only remove files EDGEdeck placed, and everything it deploys can be undone.

## The command line

For people who write scripts. The same engine runs from a terminal as the `edgedeck` command, which comes in the npm package with the assistant tools.

| To | Run |
|---|---|
| Try it without installing | `npx -p @edgemodders/edgedeck-mcp edgedeck <command>` |
| Install it once | `npm i -g @edgemodders/edgedeck-mcp`, then `edgedeck <command>` |

Add `--json` to any command for output a script can read.

| Command | Does |
|---|---|
| `list [--size]` | What's in the library, with sizes and status. `--size` sorts by size |
| `mod <id>` | One mod in full: files, sizes, source, Nexus data, conflicts |
| `add <file or folder> [--name N] [--option FOLDER]` | Add a mod from a zip, 7z or rar, a single mod file or a folder. `--option` picks one of a download's option folders. A mod with a FOMOD installer installs with its saved choices when they still fit; otherwise it lists its options, and `--fomod-choices` gives them (an assistant does this for you) |
| `install-project <.cpmodproj> [--follow \| --keep-both]` | Add a REDcode or WolvenKit project's packed output, or refresh it, and turn it on. Beside a mod of the same name, `--follow` makes that mod follow this project and `--keep-both` adds the project as another version of it |
| `on <id>`, `off <id>` | Turn a mod on or off |
| `up <id>`, `down <id>` | Move it in the order (first wins conflicts) |
| `rename <id> [name]` | A name of your own for the mod, for all its versions. No name puts the original back |
| `remove <id>` | Remove it from the library |
| `deploy [--keep PATH...] [--restore PATH...] [--mod ID]` | Deploy. `--keep` and `--restore` answer the "changed in game folder" question per file; `--mod` deploys that mod's changes only. Writes a deploy report and prints where. Refuses while the game is running |
| `undo` | Undo deploy. Refuses while the game is running |
| `changes` | Files changed in the game folder since the last deploy |
| `pending` | What the next deploy would do, and why |
| `conflicts` | Conflicts by file path |
| `loadout save <name>`, `loadout load <name or file>`, `loadout list` | Loadouts. `load` makes one active (a file is imported first); `list` marks the active one |
| `vortex list`, `vortex import` | See and import Vortex's mods |
| `mcp` | Start the server that assistants connect to |

`--library <folder>` and `--game <folder>` override the folders. Without `--game`, the command line uses the game folder the library remembers, or finds the game the way the extension does.
