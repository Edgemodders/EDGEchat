<!-- Copied from EDGEweb's docs/wiki/redcode/other-tools.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/other-tools.html (reviewed 2026-10-24) -->

# Working with other tools

REDcode does one job, making mods, and leaves the rest to tools that do theirs well. This page covers each of them.

## EDGEdeck

[EDGEdeck](https://edgemodders.ai/wiki/edgedeck/), the EDGE mod manager, is REDcode's partner. Both run in the same VS Code window.

| From | To | What happens |
|---|---|---|
| REDcode's **Install** | EDGEdeck | Your packed project becomes an EDGEdeck mod, version `dev`, and EDGEdeck deploys it. Each later Install refreshes the same mod. See [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html#install) |
| EDGEdeck's **Add from REDcode project** | EDGEdeck | The same, started from EDGEdeck's side |
| EDGEdeck's **Add to Project** | REDcode | Copies files from a mod you have installed into your project. For a mod's `.archive`, REDcode extracts the resources you pick into `source/archive`. Needs REDcode 0.6.1 and REDbridge 0.7.1 or later |

All of this is in [EDGEdeck and REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html), from EDGEdeck's side.

EDGEdeck used to be called REDdeck. REDcode looks only for EDGEdeck (`edgemodders.edgedeck`); with only the old REDdeck installed, it installs directly, as with no mod manager.

Today REDcode and EDGEdeck each download their own copy of REDbridge. Sharing one copy is planned on REDcode's side.

## WolvenKit

REDcode isn't a replacement for [WolvenKit](https://github.com/WolvenKit/WolvenKit); it's built on it. WolvenKit's libraries read and write every game file in REDcode, so the results are the same.

- **Projects are shared.** A `.cpmodproj` project opens in both, and REDcode writes the project file exactly as WolvenKit does. Use whichever tool suits the task.
- **Packs match.** REDcode's Pack produces the same `packed` folder as WolvenKit's, with one difference: REDcode keeps TweakXL `.tweak` files in `r6/tweaks`, which WolvenKit leaves out.
- **Not in REDcode:** graph editors for quest, scene and behaviour files, a preview of the game's interface widgets, and importing voice lines. Quest and scene graphs are planned in EDGEquest, and widget preview later in REDcode. For that kind of work, open the same project in WolvenKit.

## EDGEwave

EDGEwave is the EDGE platform's sound studio, for editing, mixing and re-voicing the game's sounds. REDcode finds sounds; EDGEwave works on them.

**Open in EDGEwave**, in REDcode's audio player and the game sound list, hands the sound that's playing to EDGEwave. Without EDGEwave installed, it offers to install it.

EDGEwave 0.1.0, a preview, came out on 21 October 2026 on the VS Code Marketplace and Open VSX. See [EDGEwave](https://edgemodders.ai/wiki/edgewave/).

## EDGEmat

[EDGEmat](https://edgemodders.ai/wiki/edgemat/), the EDGE material editor, draws its materials on REDcode's 3D mesh view when both are installed. See [EDGEmat in 3D](https://edgemodders.ai/wiki/edgemat/view-in-3d.html).

## Blender

**Edit in Blender** opens a project model in [Blender](https://www.blender.org/) and imports it back each time you save there. See [Edit in Blender](https://edgemodders.ai/wiki/redcode/export-import.html#edit-in-blender).

## redscript

REDcode doesn't handle [redscript](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms), the game's scripting language. The community's **Redscript IDE** extension for VS Code (`jac3km4.redscript-ide-vscode`, on the VS Code Marketplace) already does, and EDGE reuses it rather than rebuilding it. Install it beside REDcode if you write redscript. Pack copies your `.reds` files under `source/resources` into the mod like any other resource.

## REDnode

[REDnode](https://edgemodders.ai/wiki/rednode/) runs mods written in JavaScript inside the game. The plan is one loop between the two: write a REDnode mod in REDcode, send it into the running game without restarting, and see the game's logs and a debugger in VS Code. That will be a separate add-on, `redcode-rednode`. It's **planned, not built**: it waits for a development connection on REDnode's side.

## For extension authors: REDcode's API

REDcode hands other VS Code extensions an API, so they can use it without copying its code. Version 1 offers the running REDbridge, the game folder, the open project and its changes, the game's sound effect index, any sound as audio a webview can play, import of a raw file, pack, Pack and Try, and Edit in Blender. EDGEwave and EDGEmat use it. See [Extension API](https://edgemodders.github.io/REDcode/api.html) on REDcode's docs site.
