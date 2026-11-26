<!-- Copied from EDGEweb's docs/wiki/redcode/index.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/ (reviewed 2026-11-25) -->

# REDcode

REDcode is the EDGE platform's workspace for making mods that change the game's files: how an item looks, a texture, a sound, a line of text, a stat. It is an add-on (an extension) for VS Code, Microsoft's free code editor, where an AI assistant such as Claude Code can work beside you. In the extension stores it is listed as **REDcode for Cyberpunk 2077**.

REDcode does what [WolvenKit](https://github.com/WolvenKit/WolvenKit), the community's main modding tool, does, with WolvenKit's own engine. That engine runs in [REDbridge](https://edgemodders.ai/wiki/redbridge/), a small helper program REDcode downloads and starts for you.

(Screenshot on the wiki, "REDcode in VS Code": VS Code with the REDcode sidebar open (Project, Game Assets, TweakDB, LocKeys and Properties views), a game file open in the CR2W editor, and the REDcode status bar item at the bottom.)

**New here?** Read this page, then [Install and set up](https://edgemodders.ai/wiki/redcode/install.html), then make [your first mod](https://edgemodders.ai/wiki/redcode/first-mod.html). Allow about half an hour. You don't need to know how to code.

## What it's for

A Cyberpunk 2077 mod is mostly game files that have been changed. Those files live inside the game's **archives** (`.archive` files, each a package of many game files) in a binary format called **CR2W**, which no ordinary editor can open. REDcode gets them out, lets you change them, and packs your changed copies into a mod:

- **browse the game** in a folder tree, with a filter and a search;
- **keep your work in a project**, the same `.cpmodproj` project WolvenKit uses;
- **edit game files** in a tree and property grid, or as readable JSON text;
- **look and listen**: textures, atlases, 3D meshes, animations on a body, pieces of the world in 3D with their materials, voice lines and the game's sound effects;
- **see lip sync**: a character's spoken lines played on their own head, with the mouth's curves under the voice;
- **work on the world**: see the sectors that add to one place as layers, change what many things share at once, and run small scripts that find, select or fix nodes;
- **find clothing by its name in the game**, find the items that wear a mesh, and open a mesh in EDGEmat to change its materials;
- **make new files**: a texture from an image, an atlas, a material and more;
- **make animations from words** with Uthana, an AI service, on your own key, or from a GLB made in Blender, and **edit them**: pin a sliding foot, turn a bone, lay another clip on a hand, trim, loop, or reshape it in Blender;
- **keep your AI service keys** in one place, for every EDGE tool, in VS Code and in the game;
- **look things up** in TweakDB, the game's database of items and stats, and start a tweak from any record;
- **find the game's texts** (LocKeys) in any of its 19 languages, and change them;
- **export and import** to formats other tools edit, such as PNG and glTF, and send a model to Blender and back;
- **replace game sound effects** with your own WAV files, in one step;
- **reuse your work** from the [EDGE Library](https://edgemodders.ai/wiki/library.html), the store the EDGE tools share;
- **pack, install and run**: build the mod, put it in the game (through [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) when you have it) and start the game, or swap it into the game while it runs, through [REDnode](https://edgemodders.ai/wiki/rednode/).

## Where to start

| You want to | Go to |
|---|---|
| Make something work, start to finish | [Your first mod](https://edgemodders.ai/wiki/redcode/first-mod.html): rename an item, about 15 minutes |
| Change a name or a text | [The LocKeys view](https://edgemodders.ai/wiki/redcode/game-assets.html#the-lockeys-view) |
| Change how something looks | [Finding what you want to change](https://edgemodders.ai/wiki/redcode/finding.html), then [Export and import](https://edgemodders.ai/wiki/redcode/export-import.html), or [EDGEmat](https://edgemodders.ai/wiki/edgemat/) for colours |
| Change a price or a stat | [TweakDB and tweaks](https://edgemodders.ai/wiki/redcode/tweakdb.html) |
| Replace a sound | [Replacing a sound](https://edgemodders.ai/wiki/redcode/viewers.html#replacing-a-sound) |
| Make an animation | [Making a clip](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip), then [Editing a made clip](https://edgemodders.ai/wiki/redcode/viewers.html#editing-a-made-clip) |
| See how a character's lines are lip synced | [The Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html) |
| Change many things in a piece of the world at once | [The sector view](https://edgemodders.ai/wiki/redcode/sectors.html): its Properties tab and sector scripts |
| Have an assistant do it | [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html) |
| Carry on from WolvenKit | [Projects](https://edgemodders.ai/wiki/redcode/projects.html) and [Working with other tools](https://edgemodders.ai/wiki/redcode/other-tools.html#wolvenkit) |

## Why you might want it

| If you... | REDcode gives you |
|---|---|
| Want an AI assistant to help you mod | REDcode turns the game's files into text an assistant can read. A companion tool, `redcode-mcp`, lets Claude Code open, search and change them for you |
| Already use WolvenKit | Your projects open in REDcode as they are, and a project made in REDcode opens in WolvenKit. Switch back and forth freely |
| Find big modding tools intimidating | One sidebar, a few lists and a handful of buttons. Plain messages that say what went wrong and offer the fix |
| Want to look before you change | Textures, meshes in 3D, sounds and TweakDB records open with a click, straight from the game, without extracting anything |
| Like VS Code already | Git, themes, extensions, search and your assistant, next to your mod |
| Use EDGEdeck | Install hands your mod to EDGEdeck, so one tool keeps track of everything in the game folder. Installing your mod does not push through other changes you have waiting in EDGEdeck |

## How it fits into EDGE

REDcode is the **Create** stage of the [EDGE platform](https://edgemodders.ai/wiki/index.html). It works on its own, and other toolkits add to it when they're present:

| Toolkit | What it adds to REDcode |
|---|---|
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Needed. It runs WolvenKit's engine. REDcode downloads and updates it for you |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | Install goes through EDGEdeck, with its record of every file and its undo. EDGEdeck can also copy files from installed mods into your project |
| Claude Code and other assistants | `redcode-mcp` lets an assistant browse the archives, read and change game files, query TweakDB, export, import and pack, make and edit animations, read lip sync, and find and change a sector's nodes, with your sector scripts. The easy way to connect it is [EDGEchat](https://edgemodders.ai/wiki/edgechat/) |
| [EDGEwave](https://edgemodders.ai/wiki/edgewave/) | **Open in EDGEwave** hands a sound to the EDGE sound studio. In the Lip Sync editor, EDGEwave speaks a new line in the character's voice |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/) | The 3D view shows a mesh's materials as EDGEmat renders them: colours only, approximate. The sector view's **Materials** draws a picked thing with EDGEmat's rendering. **Open in EDGEmat** puts the mesh on EDGEmat's Desk. The two share the list of clothing names |
| EDGE tools that use an AI service | They ask REDcode for your keys, from the [Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view), and REDcode asks you the first time each tool wants one |
| [EDGEdir](https://edgemodders.ai/wiki/edgedir/) and [EDGEfab](https://edgemodders.ai/wiki/edgefab/) | They read the record REDcode keeps beside each animation it makes. The Lip Sync editor and animation editing began in EDGEfab and are REDcode's now |
| [REDnode](https://edgemodders.ai/wiki/rednode/) | **Pack and Play** swaps your mod into the running game through REDnode. REDnode mods and assistants can ask which project is open, in every VS Code window. Editing and debugging a REDnode mod from REDcode is planned |
| [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) | Its scenes show in the Project view as **Scenes** |
| [EDGEfab](https://edgemodders.ai/wiki/edgefab/) and the [EDGE Library](https://edgemodders.ai/wiki/library.html) | The **Library** view shows the Library, EDGEfab's props included, and adds its items to your project |
| [EDGEhack](https://edgemodders.ai/wiki/edgehack/), [EDGEquest](https://edgemodders.ai/wiki/edgequest/) and other EDGE tools | They build on REDcode: a click on a TweakDB record can open it in the tool made for it, and they use REDcode's editors and its pack |

## Status

REDcode **0.10.17** is the latest release (25 November 2026). It is on the **VS Code Marketplace**, as a Preview, and on **Open VSX**, under the id `edgemodders.redcode-cyberpunk`, and on [GitHub](https://github.com/Edgemodders/REDcode/releases). [EDGEkit](https://edgemodders.ai/wiki/edgekit/) has it built in. It runs on Windows and needs REDbridge 0.18.0 or later, which it offers to fetch for you. Its companion for assistants, `redcode-mcp`, is at 0.7.0 on npm, released with it.

New in 0.10.17: the [Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html), [editing made animations](https://edgemodders.ai/wiki/redcode/viewers.html#editing-a-made-clip) in REDcode and in Blender, the animation view's Clip, Edit and Animations tabs and its media buttons, and in the [sector view](https://edgemodders.ai/wiki/redcode/sectors.html) the Overlaps and Properties tabs, search that selects, Back and Forward, and sector scripts. In the CR2W editor, a sector's nodeData entry shows the node and instance it names, and the search box goes to a pasted path.

"Tested" below means tested by hand by REDcode's developer, on game 2.5 with Phantom Liberty.

| State | What |
|---|---|
| **Works, tested** | Projects, Game Assets, the filter and the search, including clothing by its name in the game |
| | New File: textures from images, atlases, material instances and the rest, made, opened and packed |
| | The CR2W editor: tree, property grid, search, the table view for texts, the atlas view, the Properties view, and editing as JSON |
| | The texture viewer, the 3D mesh viewer, the audio player and the game sound list. Game meshes show a colour per material, not their textures |
| | The CR2W editor on a sector: a nodeData entry's node and instance, instanced mesh buffers as a tree, and going to a pasted path |
| | Animations: an `.anims` file plays on its rig, on the game's base body or a character's meshes, with root motion, and a synced set plays together; the Clip, Edit and Animations tabs and the media buttons |
| | Making animations: the Make panel and its commands, from words with Uthana or from a GLB, as a new clip or in place of a game clip. A replaced clip played in the game, and an In place clip kept its feet still there |
| | Editing made clips: pins, keys, layers, trim and loop, with Undo and Redo, and Edit in Blender. An assistant's edits played in the game |
| | The Lip Sync editor: a character's lines, played on their head with the curves, and its links from the audio player and the animation view |
| | Streaming sectors in 3D, with Coarser levels and Show in Tree, Materials on a picked thing, the camera row and controls, and selecting many things (Ctrl+click, a box, a Volume, Isolate, Only, Back and Forward, Add Meshes to Project, Copy) |
| | The sector view's Overlaps (the sectors that reach in, as layers) and Properties (changing what the selection shares), and sector scripts, Debug included |
| | The Keys view, with each tool's permission, and the key API other EDGE tools use |
| | Find Items and Open in EDGEmat in the 3D view |
| | The TweakDB view, the record page, New Tweak from This Record and the hover |
| | The LocKeys view: the game's texts, hovers, Add to Project Onscreens |
| | Export and import, Edit in Blender (with Blender 5.3, skinned meshes included), and replacing a sound effect from a WAV file, heard in the game |
| | Pack: the archive matched a WolvenKit pack of the same project |
| | Install and Uninstall through EDGEdeck, and Run Game |
| | Pack and Play through REDnode, for an archive, a sound mod included |
| | Add to Library, the Library view, and EDGEbuilder's scenes in the Project view |
| | `redcode-mcp`: each group of tools was checked with an MCP client against the game when it was added |
| **Works, not yet tested in a real game** | Install without EDGEdeck: tested only against a stand-in game folder |
| | A REDmod's custom sound, heard in the game |
| | The game reading each kind of file New File makes |
| | A new mesh from a template with a different number of parts than the model |
| | TweakDB on a game without Phantom Liberty |
| | A made clip that travels across the floor (**In place** off) |
| | Adding a line in the Lip Sync editor, spoken through EDGEwave: shipped untested |
| | The sector view's search box selecting what it finds: built after the sector tests |
| **Planned** | Importing voice lines |
| | Lip sync: editing a line's curves, another head, and writing a new line, its voice and its subtitle into a mod |
| | Animations: a timeline with moves on tracks, hand poses, joining clips, and the editor in the game |
| | Sectors: selecting and changing across layers, links between a thing's entries, and opening the sector where V stands |
| | Editing and debugging a REDnode mod from REDcode |
| | A preview of the game's interface widgets, and a branded REDcode app. Graph views for quests and scenes are in [EDGEquest](https://edgemodders.ai/wiki/edgequest/) instead |

## In this section

| Page | |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/redcode/install.html) | Requirements, installing, REDbridge, the HUD theme, updating |
| [Your first mod](https://edgemodders.ai/wiki/redcode/first-mod.html) | A walkthrough: rename an item, from a new project to the game |
| [Projects](https://edgemodders.ai/wiki/redcode/projects.html) | New projects, the Project view and its buttons, New File, and how a project is laid out |
| [Game Assets](https://edgemodders.ai/wiki/redcode/game-assets.html) | Browsing, filtering and searching the game, taking files out, and the game's texts in the LocKeys view |
| [Finding what you want to change](https://edgemodders.ai/wiki/redcode/finding.html) | From an item you know in the game to the files and records behind it |
| [Editing game files](https://edgemodders.ai/wiki/redcode/editing.html) | The CR2W editor, the Properties view, and editing as JSON |
| [Textures, meshes and sounds](https://edgemodders.ai/wiki/redcode/viewers.html) | The texture viewer, the 3D mesh viewer and Find Items, animations, synced sets, making and editing clips, the audio player, the game's sound effects and replacing one |
| [The sector view](https://edgemodders.ai/wiki/redcode/sectors.html) | A piece of the world in 3D: moving round, materials, selecting many things, search, Overlaps, the Properties tab and sector scripts |
| [The Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html) | A character's lip synced lines on their head, and new lines through EDGEwave |
| [TweakDB and tweaks](https://edgemodders.ai/wiki/redcode/tweakdb.html) | Looking up records, starting a tweak from one, and `.tweak` files |
| [Export and import](https://edgemodders.ai/wiki/redcode/export-import.html) | Out to PNG, glTF and Ogg, and back into the game's formats; Blender |
| [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html) | Turning a project into a mod and trying it in the game, with Pack and Play; sharing it |
| [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html) | Let Claude work on your mod with you |
| [Working with other tools](https://edgemodders.ai/wiki/redcode/other-tools.html) | EDGEdeck, WolvenKit, EDGEwave, EDGEmat, EDGEbuilder, the EDGE Library and its view, REDnode, redscript, and REDcode's API |
| [Settings and commands](https://edgemodders.ai/wiki/redcode/settings.html) | Every setting, the Keys view, every command, button and shortcut |
| [Troubleshooting](https://edgemodders.ai/wiki/redcode/troubleshooting.html) | What you see, and what to do |

The [REDcode docs](https://edgemodders.github.io/REDcode/) are the developer reference this section draws on: the [design](https://edgemodders.github.io/REDcode/design.html), the [MCP server](https://edgemodders.github.io/REDcode/mcp.html), the [extension API](https://edgemodders.github.io/REDcode/api.html) and the [record of tests](https://edgemodders.github.io/REDcode/testing.html). Source and issues are on [GitHub](https://github.com/Edgemodders/REDcode).

REDcode stands on WolvenKit. Credit for the file formats, the archive reader, the importers and exporters, and years of research belongs to the WolvenKit team and contributors.
