<!-- Copied from EDGEweb's docs/wiki/edgedeck/assistants.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/assistants.html (reviewed 2026-10-24) -->

# Assistants and the command line

Everything you can do in EDGEdeck's Mods view, an AI assistant can do for you. That's the EDGE platform's idea: every tool you use, an agent can use too.

## What you can ask

Once an assistant is connected, ask in plain words:

> Which of my mods are off?

> Add the zip in my Downloads folder and tell me if it conflicts with anything.

> What will the next deploy change?

> Deploy my mods and tell me what changed.

> Save my current setup as a loadout called "photo mode".

The assistant uses EDGEdeck's tools: list and inspect mods, add, install a REDcode project, turn on or off, reorder, rename, remove, show pending changes, deploy, undo, changes in the game folder, conflicts, loadouts and Vortex import.

(Screenshot on the wiki, "An assistant managing mods": Claude Code in a terminal answering "which of my mods conflict?" using EDGEdeck's tools, and the Mods view updating on its own.)

## Connect an assistant

| Assistant | How |
|---|---|
| **Agents inside VS Code** (VS Code 1.101 and later) | Nothing to do. They see EDGEdeck's tools as soon as EDGEdeck is installed |
| **Claude Code** | Run **EDGEdeck: Connect an assistant (MCP)...** from the command palette, choose "Copy the Claude Code command", and paste it into a terminal once |
| **Other MCP clients** | The same command copies a JSON entry for the client's settings. Or point the client at `node <EDGEdeck extension folder>/dist/mcp.js --library <folder> --game <folder>` |
| **Without VS Code** | EDGEdeck's tools are also on npm: `npx -y @edgemodders/edgedeck-mcp` starts the server. For Claude Code: `claude mcp add edgedeck -- npx -y @edgemodders/edgedeck-mcp`. It shares the library with the extension |

Outside VS Code, EDGEdeck's MCP server runs with Node (20 or newer). If the copied command fails because `node` or `npx` isn't found, install [Node.js](https://nodejs.org/).

## Safety

- **Deploy, undo and remove ask first.** Those tools change the game folder or your library, so they're marked as needing your say: Claude Code asks you before every call, in every permission mode, auto mode included. Deploy and undo also refuse while the game is running, as the buttons do.
- **What you see stays true.** The Mods view reloads by itself when an assistant changes your library or deploys.
- **Same rules as you.** An assistant goes through EDGEdeck, so it can only remove files EDGEdeck placed, and everything it deploys can be undone.

## The command line

The same engine runs from a terminal, for your own scripts. It's on npm with the MCP server: run `npx -p @edgemodders/edgedeck-mcp edgedeck <command>`, or install it once with `npm i -g @edgemodders/edgedeck-mcp` and run `edgedeck <command>`. (In a checkout of the [EDGEdeck repo](https://github.com/Edgemodders/EDGEdeck), `node bin/edgedeck.mjs <command>` is the same.) Add `--json` to any command for machine-readable output.

| Command | Does |
|---|---|
| `list [--size]` | What's in the library, with sizes and status. `--size` sorts by size |
| `mod <id>` | One mod in full: files, sizes, source, Nexus data, conflicts |
| `add <file or folder> [--name N] [--option FOLDER]` | Add a mod from a zip, 7z or rar, a single mod file or a folder. `--option` picks one of a download's option folders |
| `install-project <.cpmodproj> [--follow \| --keep-both]` | Add a REDcode or WolvenKit project's packed output, or refresh it, and turn it on. Beside a mod of the same name, `--follow` makes that mod follow this project and `--keep-both` adds the project as another version of it |
| `on <id>`, `off <id>` | Turn a mod on or off |
| `up <id>`, `down <id>` | Move it in the order (first wins conflicts) |
| `rename <id> [name]` | A name of your own for the mod, for all its versions. No name puts the first one back |
| `remove <id>` | Remove it from the library |
| `deploy [--keep PATH...] [--restore PATH...] [--mod ID]` | Deploy. `--keep` and `--restore` answer the "changed in game folder" question per file; `--mod` deploys that mod's changes only. Writes a deploy report and prints where. Refuses while the game is running |
| `undo` | Undo deploy. Refuses while the game is running |
| `changes` | Files changed in the game folder since the last deploy |
| `pending` | What the next deploy would do, and why |
| `conflicts` | Conflicts by file path |
| `loadout save <name>`, `loadout load <name or file>`, `loadout list` | Loadouts. `load` makes one active (a file is imported first); `list` marks the active one |
| `vortex list`, `vortex import` | See and import Vortex's mods |
| `mcp` | Start the MCP server |

`--library <folder>` and `--game <folder>` override the folders. The command line finds the game the same way the extension does.
