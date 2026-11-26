<!-- Copied from EDGEweb's docs/wiki/redcode/other-tools.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/other-tools.html (reviewed 2026-11-25) -->

# Working with other tools

REDcode does one job, making mods from game files, and leaves the rest to tools that do theirs well. This page covers each of them.

| EDGE toolkits | Other tools |
|---|---|
| [EDGEdeck](https://edgemodders.ai/wiki/redcode/other-tools.html#edgedeck), [EDGEmat](https://edgemodders.ai/wiki/redcode/other-tools.html#edgemat), [EDGEwave](https://edgemodders.ai/wiki/redcode/other-tools.html#edgewave), [EDGEbuilder](https://edgemodders.ai/wiki/redcode/other-tools.html#edgebuilder), [the EDGE Library](https://edgemodders.ai/wiki/redcode/other-tools.html#the-edge-library), [REDnode](https://edgemodders.ai/wiki/redcode/other-tools.html#rednode), [EDGEhack and EDGEquest](https://edgemodders.ai/wiki/redcode/other-tools.html#edgehack-and-edgequest), [EDGEdir and EDGEfab](https://edgemodders.ai/wiki/redcode/other-tools.html#edgedir-and-edgefab), [your AI keys](https://edgemodders.ai/wiki/redcode/other-tools.html#your-ai-keys-for-every-edge-tool) | [WolvenKit](https://edgemodders.ai/wiki/redcode/other-tools.html#wolvenkit), [Blender](https://edgemodders.ai/wiki/redcode/other-tools.html#blender), [Uthana](https://edgemodders.ai/wiki/redcode/other-tools.html#uthana), [redscript](https://edgemodders.ai/wiki/redcode/other-tools.html#redscript), [REDcode's API](https://edgemodders.ai/wiki/redcode/other-tools.html#for-extension-authors-redcodes-api) |

## EDGEdeck

[EDGEdeck](https://edgemodders.ai/wiki/edgedeck/), the EDGE mod manager, is REDcode's partner. Both run in the same VS Code window.

| You press | In | What happens |
|---|---|---|
| **Install** or **Pack and Install** | REDcode | Your packed project becomes an EDGEdeck mod, version `dev`, and EDGEdeck deploys that mod alone. Each later Install refreshes the same mod. See [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html#install) |
| **Add from REDcode project** | EDGEdeck | The same, started from EDGEdeck's side |
| **Add to Project** | EDGEdeck | Copies files from a mod you have installed into your REDcode project. For a mod's `.archive`, you pick the files, and REDcode extracts them into `source/archive` |

All of this is in [EDGEdeck and REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html), from EDGEdeck's side.

EDGEdeck used to be called REDdeck. REDcode looks only for EDGEdeck; with only the old REDdeck installed, it installs directly, as with no mod manager.

Today REDcode and EDGEdeck each download their own copy of REDbridge. Sharing one copy is planned on REDcode's side.

## EDGEmat

[EDGEmat](https://edgemodders.ai/wiki/edgemat/), the EDGE material editor, draws its materials on REDcode's 3D mesh view when both are installed. See [EDGEmat in 3D](https://edgemodders.ai/wiki/edgemat/view-in-3d.html).

**Open in EDGEmat**, in the 3D view's toolbar, puts the mesh on EDGEmat's Desk with the appearance you're looking at open, ready to change its materials. Without EDGEmat installed, it offers to install it. EDGEmat's own **Open in EDGEmat** shows when you right-click a `.mesh` or `.mlsetup`.

- When EDGEmat adds a mesh to a project, REDcode's Project view selects it, so you see where it went.
- REDcode's [search for clothing by name](https://edgemodders.ai/wiki/redcode/game-assets.html#search) uses the same list of item names as EDGEmat, so whichever tool loads it first spares the other the wait.
- The 3D views' [light](https://edgemodders.ai/wiki/redcode/viewers.html#the-light), with reflections and Fixed light, was made for judging EDGEmat's materials: metals and gloss look like metals and gloss.
- In a [streaming sector](https://edgemodders.ai/wiki/redcode/sectors.html#picking-a-thing-and-its-materials), **Materials** draws the thing you pick as EDGEmat renders it, and **Open in EDGEmat** opens its mesh at the appearance that thing uses. Without EDGEmat, REDcode draws the materials itself with EDGEmat's renderer.

## EDGEwave

[EDGEwave](https://edgemodders.ai/wiki/edgewave/) is the EDGE platform's sound studio, for editing, mixing and re-voicing the game's sounds. REDcode finds sounds; EDGEwave works on them.

**Open in EDGEwave**, in REDcode's audio player and the game sound list, hands the sound that's playing to EDGEwave. Without EDGEwave installed, it offers to install it.

In REDcode's [Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html), **Adding a line** asks EDGEwave 0.3.0 or later to speak your words in the character's voice, with your ElevenLabs key; REDcode then makes the lip sync from EDGEwave's timing. EDGEwave asks once whether REDcode may spend your credits. This shipped untested. See [Adding a line](https://edgemodders.ai/wiki/redcode/lipsync.html#adding-a-line).

## EDGEbuilder

[EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/), the world builder, keeps its scenes in your project's `source\scenes` folder. The Project view shows that folder as **Scenes**, and a `<name>.scene.json` there opens as JSON. Scenes aren't packed: turning them into a mod comes with EDGEbuilder's bake, which is planned. EDGEbuilder finds the project through REDnode, as below.

## The EDGE Library

The [EDGE Library](https://edgemodders.ai/wiki/library.html) is one folder of your own where the EDGE tools keep things for good, outside any project.

**Add to Library...**, in the right-click menu of a file in Game Assets or under a project's Archive, saves that file as one Library item, together with the files it needs: a mesh takes its materials, masks and textures, and an entity also its appearances and meshes. Files the whole game shares, such as base materials, stay in the game and are only referred to.

- It asks which Library folder the item goes in, offers **New Folder...**, and **Use the game path**, which files the item under its game folders.
- With no Library yet, it asks where to make one, and suggests `Documents\EDGE Library`.
- An item that is already there can be replaced or added again beside it.

### The Library view

The **Library** view in REDcode's sidebar shows the Library: your folders, the items in them by name, and loose model files. It refreshes as soon as Add to Library writes.

| Action | Does |
|---|---|
| **Add to Project** (the **+** on an item) | Copies a mesh, entity, texture or other game file item into the open project, with the files it needs. If the project already has files of its own at those paths, it asks before replacing them, and closes REDcode's editors on them first |
| **Refresh Project from Library** (in the view's title bar) | Brings in the items your project took from the Library that have a newer version there |
| **Open**, **Reveal in File Explorer** | Opens an item's file, or shows it on disk |
| **Set Up the Library...** | Makes a Library, or picks the folder of one you have, when there is none yet |

Items from other tools, such as [EDGEfab](https://edgemodders.ai/wiki/edgefab/)'s props, show too; their own tool adds those to a project. The view doesn't rename or delete: do that in the tool that made the item, or in File Explorer. Each EDGE tool keeps its own Library view of the same Library, so you needn't switch tools to see it.

(Screenshot on the wiki, "The Library view": REDcode's Library view in the sidebar: a few Library folders opened to items named in plain words, one with the Add to Project button on its row, and the Refresh Project from Library button in the title bar.)

## REDnode

[REDnode](https://edgemodders.ai/wiki/rednode/) runs mods written in JavaScript inside the game. Two things already work between them:

- **Pack and Play** hands your packed archive to REDnode, which swaps it into the running game. See [Pack and Play](https://edgemodders.ai/wiki/redcode/pack-install.html#pack-and-play-into-the-running-game).
- **A package called REDcode in REDnode's Mod Manager.** When the game has REDnode, REDcode puts a small package named `redcode` into REDnode's apps folder. It has no window. Its one job is to tell REDnode mods, such as EDGEbuilder, which project is open in REDcode, so they can save into it. You can leave it alone. To stop REDcode adding it, turn off `redcode.rednode.installPackage`.

For developers: the package answers with the project's name, mod name and folders, and says when the project changes. Assistants connected to REDnode get it as the read-only tool `redcode__project`. With several VS Code windows, the one you last used with a project open counts, and `redcode__projects` lists every window's project, the last used first, so a tool such as EDGEbuilder can offer them all. Every window needs REDcode 0.10.15 or later for that: an older one puts back its older package.

The bigger loop is still **planned, not built**: write a REDnode mod in REDcode, send it into the running game without restarting, and see the game's logs and a debugger in VS Code.

## EDGEhack and EDGEquest

[EDGEhack](https://edgemodders.ai/wiki/edgehack/) (quickhacks) and [EDGEquest](https://edgemodders.ai/wiki/edgequest/) (quests) are their own extensions and build on REDcode through its API: its REDbridge, its editors, its import and its pack. A tool like these can claim the TweakDB records it is made for, so a click on one in REDcode's TweakDB view opens it in that tool. See [The TweakDB view](https://edgemodders.ai/wiki/redcode/tweakdb.html#the-tweakdb-view).

## EDGEdir and EDGEfab

Each animation REDcode [makes](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip) gets a set of its own and a record beside it, `<name>.edgefab.json` under Raw, saying what it was made from. That is the layout [EDGEfab](https://edgemodders.ai/wiki/edgefab/) uses for made animations, so [EDGEdir](https://edgemodders.ai/wiki/edgedir/) and EDGEfab read REDcode's clips as their own: see [Animations made in EDGEfab](https://edgemodders.ai/wiki/edgedir/actors.html#animations-made-in-edgefab). If EDGEfab has edited a clip, REDcode says so before you make it again. The steps you add in REDcode's [Edit tab](https://edgemodders.ai/wiki/redcode/viewers.html#editing-a-made-clip) are kept in the same record.

EDGEfab now covers props and clothing. Animation editing and the [Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html), which began in EDGEfab, are REDcode's.

## Your AI keys, for every EDGE tool

Some EDGE tools use an AI service on your own account, such as OpenAI, ElevenLabs or Tripo, and need your key for it. REDcode keeps one store of those keys for every EDGE tool in VS Code, shared with REDnode in the game.

- A tool that needs a key asks REDcode, not you. The first time, REDcode asks you whether that tool may read it (**Allow** or **Don't Allow**) and remembers your answer.
- You see, set and remove every key, and which tools read each, in REDcode's [Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view). A key set there works in the game too, and the other way round.
- The other tools keep no key code of their own. Each tool's own pages say which keys it uses.

## WolvenKit

REDcode isn't a replacement for [WolvenKit](https://github.com/WolvenKit/WolvenKit); it's built on it. WolvenKit's libraries read and write every game file in REDcode, so the results are the same.

- **Projects are shared.** A `.cpmodproj` project opens in both, and REDcode writes the project file exactly as WolvenKit does. Use whichever tool suits the task.
- **Packs match.** REDcode's Pack produces the same `packed` folder as WolvenKit's: on the developer's test project, the archives matched file for file. One difference, on purpose: REDcode keeps TweakXL `.tweak` files in `r6/tweaks`, which WolvenKit leaves out.
- **Not in REDcode:** graph editors for quest, scene and behaviour files, a preview of the game's interface widgets, and importing voice lines. Quest and scene graphs are in EDGEquest, and a widget preview is planned for REDcode. For that kind of work, open the same project in WolvenKit.

## Blender

**Edit in Blender** opens a project model in [Blender](https://www.blender.org/) and imports it back each time you save there. See [Edit in Blender](https://edgemodders.ai/wiki/redcode/export-import.html#edit-in-blender).

An animation made in Blender on the game's rig becomes a clip with **From a GLB…** in the animation view's Make panel, or **Add a Clip from GLB** on the `.glb`. See [Making a clip](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip).

A clip you made opens in Blender too, on the base body, with **Edit in Blender** in the animation view's Edit tab. Each save there becomes the clip's new start. See [Edit in Blender](https://edgemodders.ai/wiki/redcode/viewers.html#edit-in-blender) for animations.

## Uthana

[Uthana](https://uthana.com) is an AI service that makes body motion from a sentence. REDcode's **Generate** sends your words there and fits the motion it sends back onto the game's own skeleton. It is paid, at $0.10 a second for its main model, with your own Uthana account and key, which you set in the [Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view). You are charged only when a clip finishes. See [Making a clip](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip).

## redscript

REDcode doesn't handle [redscript](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms), the game's scripting language. The community's **Redscript IDE** extension for VS Code (`jac3km4.redscript-ide-vscode`, on the VS Code Marketplace) already does, and EDGE reuses it rather than rebuilding it. Install it beside REDcode if you write redscript. Pack copies your `.reds` files under `source/resources` into the mod like any other resource.

## For extension authors: REDcode's API

REDcode hands other VS Code extensions an API, so they can use its REDbridge, its project, its editors, its import and its pack without copying its code. EDGEwave, EDGEmat, EDGEquest and EDGEhack use it. Among its calls: select a file in the Project view (`revealInProject`), open a model in a titled 3D tab and close it again (`openModel`, `closeModel`, made for EDGEfab's props), open an animation on a character's meshes or with its synced set (`openAnimation`), open a streaming sector with one entry or a list of entries selected (`openSector`), read the shared AI keys, with your permission (`keys`: `get`, `ask`, `status`, `onDidChange`), make an animation with Uthana on your key (`generateAnimation`), and open the Lip Sync editor on a character, at one of their lines (`openLipSync`, new in 0.10.17). See [Extension API](https://edgemodders.github.io/REDcode/api.html) on REDcode's docs site.
