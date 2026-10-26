<!-- Copied from EDGEweb's docs/wiki/redcode/index.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/ (reviewed 2026-10-24) -->

# REDcode

REDcode is the EDGE platform's modding workspace for Cyberpunk 2077. It is an extension for VS Code, listed as **REDcode for Cyberpunk 2077**, that brings WolvenKit's way of making mods into the editor where your AI assistant already works. You browse the game's files, add the ones you want to a project, change them, look at them in 3D or listen to them, and pack the result into a mod, all in one window.

REDcode doesn't reinvent the hard part. Every game file is read and written by [WolvenKit](https://github.com/WolvenKit/WolvenKit)'s own libraries, which run in [REDbridge](https://edgemodders.ai/wiki/redbridge/), a small helper program REDcode starts for you.

(Screenshot on the wiki, "REDcode in VS Code": VS Code with the REDcode sidebar open (Project, Game Assets, TweakDB, LocKeys and Properties views), a game file open in the CR2W editor, and the REDcode status bar item at the bottom.)

## What it's for

A Cyberpunk 2077 mod is mostly game files that have been changed: an item's appearance, a texture, a sound, a line of text, a stat in the game's database. Those files live inside the game's [archives](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms) in a binary format called CR2W, which no ordinary editor can open. Modders use WolvenKit to get them out, change them and pack them back.

REDcode does that work inside VS Code:

- **browse the game** in a folder tree, with a filter and a search;
- **keep your work in a project**, the same `.cpmodproj` project WolvenKit uses;
- **edit game files** in a tree and property grid, or as readable JSON text;
- **look and listen**: textures, atlases, 3D meshes, voice lines and the game's sound effects;
- **look things up** in TweakDB, the game's database of items and stats, and start a tweak from any record;
- **find the game's texts** (LocKeys) in any of its 19 languages, and add your own;
- **export and import** to formats other tools edit, such as PNG and glTF, and send a model to Blender and back;
- **replace game sound effects** with your own WAV files;
- **pack, install and run**: build the mod, put it in the game (through [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) when you have it) and start the game.

## Why you might want it

| If you... | REDcode gives you |
|---|---|
| Want an AI assistant to help you mod | Everything is text or a click away from text. `redcode-mcp` gives Claude Code and other assistants the same engine, so they can read and edit game files with you |
| Already use WolvenKit | Your projects open in REDcode as they are, and a project made in REDcode opens in WolvenKit. Switch back and forth freely |
| Find big modding tools intimidating | One sidebar, four trees and a handful of buttons. Plain messages that say what went wrong and offer the fix |
| Want to look before you change | Textures, meshes in 3D, sounds and TweakDB records open with a click, straight from the game, without extracting anything |
| Like VS Code already | Git, themes, extensions, search and your assistant, next to your mod |
| Use EDGEdeck | Install hands your mod to EDGEdeck, so one tool keeps track of everything in the game folder |

## How it fits into EDGE

REDcode is the **Create** stage of the EDGE platform. It works on its own, and other toolkits add to it when they're present:

| Toolkit | What it adds to REDcode |
|---|---|
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Needed. It runs WolvenKit's engine. REDcode downloads and updates it for you |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | Install goes through EDGEdeck, with its record of every file and its undo. EDGEdeck can also copy files from installed mods into your project |
| Claude and other agents | `redcode-mcp` lets an assistant browse the archives, read and patch game files, query TweakDB, export, import and pack |
| [EDGEwave](https://edgemodders.ai/wiki/edgewave/) | Open in EDGEwave hands a sound to the EDGE sound studio |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/) | The 3D view shows a mesh's materials as EDGEmat renders them: colours only, approximate |
| [REDnode](https://edgemodders.ai/wiki/rednode/) | Planned: edit a REDnode mod in REDcode and send it into the running game. Not built yet |

## Status

REDcode **0.10.3** is the latest release (21 October 2026). It's on the **VS Code Marketplace** as a Preview and on **Open VSX**, under the id `edgemodders.redcode-cyberpunk`. It runs on Windows and needs REDbridge 0.10.0 or newer, which it fetches for you.

| Area | State |
|---|---|
| Projects, Game Assets, filter and search | Released. The filter was tested by hand |
| CR2W editor: tree, property grid, search, table, atlas and texture views, Properties view | Released, each part tested by hand on the developer's game |
| Texture viewer, 3D mesh viewer, audio player, game sound list | Released and tested by hand. Game meshes show a colour per material, not their textures; a GLB that carries its own textures shows them |
| TweakDB view, record page, New Tweak and hover | Released in 0.9.0 and tested by hand |
| LocKeys view: the game's texts, hovers, Add to Project Onscreens | Released in 0.10.0 and tested by hand |
| Edit in Blender | Released in 0.10.0 and tested by hand with Blender 5.2.2 |
| Pack | Released and tested by hand: the archive matched a WolvenKit pack of the same project |
| Install through EDGEdeck, Uninstall, Run Game | Released and tested by hand |
| Install without EDGEdeck | Released, tested only against a stand-in game folder |
| Install to the Hot Folder and Pack and Try (Red Hot Tools) | Released. The Red Hot Tools part is **untested** in REDcode: the developer doesn't have Red Hot Tools. Without it, Pack and Try packs and installs, which was tested |
| Export and import | Released and tested by hand. Game sound effects import from WAV files; voice lines (`.wem`) can be exported but not imported |
| `redcode-mcp` for assistants | 0.3.0 on npm (16 October 2026) |
| The REDnode loop (live testing in the running game) | Planned, waits for REDnode |
| Ink widget preview, a branded REDcode app | Planned, later. Graph views for quests and scenes are planned in [EDGEquest](https://github.com/Edgemodders/EDGEquest) instead |

## In this section

| Page | |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/redcode/install.html) | Requirements, installing, REDbridge, the HUD theme, updating |
| [Projects](https://edgemodders.ai/wiki/redcode/projects.html) | New projects, the Project view, and how a project is laid out |
| [Game Assets](https://edgemodders.ai/wiki/redcode/game-assets.html) | Browsing, filtering and searching the game, taking files out, and the game's texts in the LocKeys view |
| [Editing game files](https://edgemodders.ai/wiki/redcode/editing.html) | The CR2W editor, the Properties view, and editing as JSON |
| [Textures, meshes and sounds](https://edgemodders.ai/wiki/redcode/viewers.html) | The texture viewer, the 3D mesh viewer, the audio player and the game's sound effects |
| [TweakDB and tweaks](https://edgemodders.ai/wiki/redcode/tweakdb.html) | Looking up records, starting a tweak from one, and `.tweak` files |
| [Export and import](https://edgemodders.ai/wiki/redcode/export-import.html) | Out to PNG, glTF and Ogg, and back into the game's formats; Blender; replacing sound effects |
| [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html) | Turning a project into a mod and trying it in the game, with Pack and Try |
| [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html) | Let Claude work on your mod with you |
| [Working with other tools](https://edgemodders.ai/wiki/redcode/other-tools.html) | EDGEdeck, WolvenKit, EDGEwave, redscript, and REDcode's API |
| [Settings and commands](https://edgemodders.ai/wiki/redcode/settings.html) | Every setting and command |
| [Troubleshooting](https://edgemodders.ai/wiki/redcode/troubleshooting.html) | Symptoms and fixes |

The [REDcode docs](https://edgemodders.github.io/REDcode/) are the developer reference this section draws on: the [design](https://edgemodders.github.io/REDcode/design.html), the [MCP server](https://edgemodders.github.io/REDcode/mcp.html) and the [extension API](https://edgemodders.github.io/REDcode/api.html). Source and issues are on [GitHub](https://github.com/Edgemodders/REDcode).

REDcode stands on WolvenKit. Credit for the file formats, the archive reader, the importers and exporters, and years of research belongs to the WolvenKit team and contributors.
