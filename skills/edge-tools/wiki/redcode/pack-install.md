<!-- Copied from EDGEweb's docs/wiki/redcode/pack-install.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/pack-install.html (reviewed 2026-10-24) -->

# Pack, install and run

Three steps take a project into the game: **Pack** builds the mod, **Install** puts it in the game folder, and **Run Game** starts the game. The rocket button in the Project view, **Pack and Install**, does the first two in one go. **Pack and Try**, the flame, sends the mod into a game that's already running, when Red Hot Tools is there.

## Pack

**REDcode: Pack**, the package button in the Project view's title bar, builds your project's `packed` folder: the finished mod, laid out like the game folder. `Ctrl+Shift+B` runs it too, as VS Code's build task `redcode: pack`.

Pack does what WolvenKit's pack does, so the result installs the same way. On the developer's test project, REDcode's archive matched WolvenKit's file for file.

| From your project | Goes to |
|---|---|
| Everything in `source/archive` | One archive, `packed/archive/pc/mod/<mod name>.archive`, written by WolvenKit's packer |
| ArchiveXL files (`.xl`) under `source/resources` | Beside the archive |
| Other files under `source/resources` | The same path under `packed`, so `resources/r6/tweaks/my.yaml` becomes `packed/r6/tweaks/my.yaml` |

A few files are left out, as in WolvenKit: `.script` and `.ws` files, `info.json`, and `.tweak` files outside `r6/tweaks`. One difference on purpose: REDcode packs `.tweak` files in `r6/tweaks`, which WolvenKit drops.

- `packed` is **emptied first**, so a file you removed from the project doesn't linger in the mod. The setting is `redcode.pack.clean`.
- A project with nothing in `source/archive` is fine: the mod may be tweaks or scripts only. A project with nothing in `source/archive` or `source/resources` has nothing to pack, and REDcode says so.
- Paths with **capital letters or spaces** are listed in REDcode's log, as WolvenKit warns about them.

(Screenshot on the wiki, "Packing": The Project view after a pack: the Pack, Pack and Install and Run Game buttons in the title bar, and Packed expanded to show the mod's archive and a tweak file.)

### Packing as a REDmod

Turn on `redcode.pack.redmod` to pack the project as a [REDmod](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms) instead, as WolvenKit's REDmod option does. The archive and ArchiveXL files go under `packed/mods/<mod name>/archives`, scripts under `packed/mods/<mod name>/scripts`, with an `info.json` written from the project. Most mods ship as plain archives, so it's off by default.

A REDmod can add new sounds: list them under `customSounds` in `source/resources/info.json` and put the WAV files in `source/customSounds`. Pack copies them into the mod, as WolvenKit does, and warns about a listed WAV that's missing. Pack and Install asks before installing a REDmod with a missing sound, because REDmod would refuse it. Custom sounds play only in a REDmod.

## Install

**Install** is in the Project view's **`...`** menu; **Pack and Install** (the rocket) packs first. What Install does depends on whether you have EDGEdeck.

| With | Install does |
|---|---|
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | Hands the project to EDGEdeck. The first time, it becomes a mod named after the project, version `dev`. After that, the same mod gets the new files and keeps its place in your list. EDGEdeck deploys it, with its record of every file, its conflict check and its undo. If EDGEdeck already has another mod of the same name, it asks first; cancel there and nothing is installed |
| No EDGEdeck | Copies `packed` into the game folder and records every file in the project's `.redcode/installed.json` |

With EDGEdeck, if other mods also have changes waiting to deploy, REDcode asks before the deploy takes them along.

Without EDGEdeck, if a file is already in the game, REDcode asks, then backs it up before replacing it. Installing again first removes the previous set of files, so a file you dropped from the project doesn't stay behind. This path has only been tested against a stand-in game folder, not a real install.

> **Use EDGEdeck if you use any mod manager.** A tool that copies files into the game behind a mod manager's back confuses it. Through EDGEdeck, your own mod sits in the same list as everything else, and conflicts with other mods show up. See [EDGEdeck and REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html).

If the project hasn't been packed yet, Install says so and offers **Pack and Install**. If the project has no files at all and an earlier install of it is still in the game, REDcode offers **Uninstall**.

(Screenshot on the wiki, "Your mod in EDGEdeck": EDGEdeck's Mods view after Install from REDcode: the project listed as a mod with version dev, switched on and deployed.)

## Uninstall

**Uninstall**, in the same **`...`** menu, takes your mod out of the game again:

- with EDGEdeck, it turns the mod off in EDGEdeck and deploys;
- without EDGEdeck, it removes exactly the files listed in `.redcode/installed.json`, and puts back anything it backed up.

## Pack and Try, and the Hot Folder

[Red Hot Tools](https://github.com/psiberx/cp2077-red-hot-tools) is a mod for modders that reloads archives **while the game is running**.

- **Pack and Try**, the flame button in the Project view, packs, then copies the archive into the game's `archive/pc/hot` folder, where Red Hot Tools reloads it. Respawn or re-equip what uses it to see the change. Without Red Hot Tools, Pack and Try does **Pack and Install** instead, and you restart the game to see the change.
- **Install to the Hot Folder (Red Hot Tools)**, a second flame button that appears only when the game has Red Hot Tools, copies an archive you already packed.

Red Hot Tools picks archives up from the hot folder **only while the game runs**. Pressed with the game closed, the archive just waits there and the game starts without it: use **Pack and Install** then. Once loaded, Red Hot Tools moves the archive into `archive/pc/mod`, so it stays installed after the game closes. Remove it from there before a clean session.

> **Two things crash a running game.** Swapping in an archive that **replaces game sounds** crashes it, so install sound mods and restart instead. And the official Red Hot Tools (1.3.0-rc.3 and earlier) can miss an archive it already loaded when the archive's **name has capital letters**, such as `MyJacket.archive`, and the game then quits. EDGEmodders' build of Red Hot Tools, [`v1.3.0+edgemodders.1`](https://github.com/CyberbuildsAI/cp2077-red-hot-tools/releases), fixes the name lookup; a fix is offered upstream. Found while testing REDnode's archive swaps.

**Untested in REDcode:** the developer doesn't have Red Hot Tools installed, so REDcode's hot folder path hasn't been tried against it. Please report how it goes on [Discord](https://discord.gg/63qP3Erw43) or in an [issue](https://github.com/Edgemodders/REDcode/issues).

## Run Game

**Run Game**, the play button, starts Cyberpunk 2077.

- For a Steam install it starts the game through Steam, so the overlay and achievements work. Otherwise it starts `bin\x64\Cyberpunk2077.exe`.
- `redcode.launch` chooses: `auto` (the default, as above), `steam` or `exe`.
- If the project packs as a REDmod, REDcode adds `-modded`, the game's launch option for REDmods.

## The everyday loop

1. Change something: a value in the CR2W editor, a texture, a tweak.
2. Press **Pack and Install**.
3. Press **Run Game** and look.
4. Close the game, and go back to 1.

With Red Hot Tools, keep the game running and press **Pack and Try** in step 2 instead, except for sounds.

When you're done for the day, nothing needs undoing. When you want the game clean, **Uninstall**.
