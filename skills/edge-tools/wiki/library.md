<!-- Copied from EDGEweb's docs/wiki/library.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/library.html (reviewed 2026-11-22) -->

# The EDGE Library

The **EDGE Library** is one folder of your own where the EDGE tools keep your work for good, outside any single mod. Today it holds EDGEbuilder's scenes and bakes, EDGEhack's quickhacks, EDGEwave's sounds, and game files you set aside from REDcode. Props from [EDGEfab](https://edgemodders.ai/wiki/edgefab/library.html), the asset maker, are built and come with its first release, which is not out yet.

When you make a mod, you copy what it needs out of the Library into the mod's project. Several mods can use the same item.

It's **optional**. If you keep everything in one project, you never have to open the Library, and every tool still works. A newcomer can skip this page.

> **Where it stands:** four tools use the Library in their current releases: EDGEbuilder, EDGEhack, EDGEwave and REDcode. The rest is planned. See [Which tools use it](https://edgemodders.ai/wiki/library.html#which-tools-use-it).

## Why have one

A big piece of work, such as a district you extend over months and release in parts, doesn't belong to one mod. The Library is the warehouse for it, and projects are what you ship. A project is one mod's working folder.

| | What it is | How long it lasts |
|---|---|---|
| **The EDGE Library** | Your long-term store: scenes, bakes, quickhacks, sounds and assets, in folders you organise | For good. One folder, so a backup is one copy |
| **A tool's Desk** | One tool's scratch area for the work in hand. EDGEmat, EDGEhack and EDGEwave have one | Across restarts, but not organised or kept for good |
| **A project** | One mod: what gets packed, installed and released. REDcode makes it | As long as the mod |
| **EDGEdeck's mod library** | The mods you have installed, outside the game folder | As long as they're installed |

Another thing shares the word: EDGEdeck's **mod library** (your installed mods, see [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/library.html)). It isn't the EDGE Library. EDGEmat's list of the game's surfaces and microblends was called Library too, up to EDGEmat 0.3.1; since 0.3.2 it is [Game Materials](https://edgemodders.ai/wiki/edgemat/game-materials.html).

## Where it lives

The first tool that needs the Library asks where to put it and offers **`Documents\EDGE Library`**. You can pick any folder that isn't inside the game's folder or a tool's install folder. Every tool, in the game or in VS Code, finds it through one small file, `%APPDATA%\EDGE\library.json`, so changing it in one tool changes it for all.

**Relocate**, which moves the whole Library to another drive in one go, is planned.

## Which tools use it

| Tool | Its part | Status |
|---|---|---|
| [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/scenes.html) | Scenes in Library folders, the in-game **Library** tab, scenes shown beside the one you edit | Released. Passed in the game |
| [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/baking.html#bakes-in-the-library) | Bakes in the Library, and **Include in project** | Released. Passed in the game |
| [EDGEhack](https://edgemodders.ai/wiki/edgehack/desk-library.html) | Quickhacks kept in the Library: **Add to Library**, **Add to Project**, a Library view and **Refresh from Library** | Released. Tested in VS Code |
| [REDcode](https://edgemodders.ai/wiki/redcode/other-tools.html#the-edge-library) | **Add to Library** on a game file or a project file, with the files it needs; a [Library view](https://edgemodders.ai/wiki/redcode/other-tools.html#the-library-view) with **Add to Project** and **Refresh Project from Library** | Released. Tested by hand |
| [EDGEwave](https://edgemodders.ai/wiki/edgewave/finding.html#the-library-view) | Sounds as Library items: **Add to Library** from its Desk, a Library view with **Add to Project** and **Edit on the Desk**, and **Refresh from Library** | In EDGEwave 0.3.0. Tested in VS Code |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/) | Materials and looks on Library assets | Planned, later |
| [EDGEfab](https://edgemodders.ai/wiki/edgefab/library.html) | Props as Library items: **Add to Library**, a Library view, **Add to Project**, **Edit on the Desk** and **Refresh Project from Library** | In EDGEfab 0.1.0 |

## What goes in it

| Thing | Made by | Looks like | Today |
|---|---|---|---|
| **Scene** | [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/scenes.html) | `market_square.scene.json`: the objects you placed, where they are and their groups | Yes |
| **Bake** | [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/baking.html#bakes-in-the-library) | `market_square.bake`: a folder with the game files that put one or more scenes in the world, and a note of what they were baked from | Yes |
| **Quickhack** | [EDGEhack](https://edgemodders.ai/wiki/edgehack/desk-library.html) | `overclock_plus.quickhack.asset`: a quickhack you made or changed, with its icons. It has no game files of its own: they are written into a project when you add it to one | Yes |
| **Asset** | [REDcode](https://edgemodders.ai/wiki/redcode/other-tools.html#the-edge-library) and [EDGEwave](https://edgemodders.ai/wiki/edgewave/finding.html#the-library-view) today. EDGEfab and EDGEmat are planned | `comfy_rocker.mesh.asset`, `door_knock.sound.asset` (a sound: its mix and its WAV), and later `rusty_oil_drum.prop.asset`: a folder laid out like a small project, with its game files and what they were made from. It keeps a stable id, so a project finds it even after you rename or move it | Game files from REDcode, sounds from EDGEwave |
| **Plain file** | You | `model.glb`, `knock.wav`: kept as they are, to use later | Yes |

## Moving things between the Library and projects

| Step | Where | What happens |
|---|---|---|
| **Save** a scene | EDGEbuilder | Into a Library folder you pick, or into the project, or on this PC |
| **Add to Library** | REDcode, EDGEhack, EDGEwave | Copies a game file, a quickhack or a sound into a Library folder you pick |
| **Add to Project**, **Include in project** | REDcode, EDGEhack, EDGEwave, EDGEbuilder | Copies a Library item's files into the open project and notes where they came from |
| **Refresh from Library** | EDGEhack, on a quickhack in a project; EDGEwave's Project view, for the project's sounds; REDcode's **Refresh Project from Library**, for the project's items | Shows that the Library has a newer version, and copies it when you ask |

For a first try, EDGEbuilder's [Named scenes and the Library](https://edgemodders.ai/wiki/edgebuilder/scenes.html#named-scenes-and-the-library) and EDGEhack's [The Desk and the Library](https://edgemodders.ai/wiki/edgehack/desk-library.html) each walk through it.

## The rules every tool follows

| Rule | What it means for you |
|---|---|
| **The folders are yours** | Make any folders you like, such as `Production\Meshes` and `Development\Meshes`, or `Alleys\Kabuki`. No tool makes `scenes` or `meshes` folders on its own. A tool offers the folder you used last |
| **Use the game path, if you want it** | A game path is where a file sits inside the game's own files, such as `base\environment\decoration`. When you add something from the game's files, the tool offers to put it in Library folders that match that path, so the Library looks like the game's files in Explorer. It's your choice, and the tool remembers it. It isn't offered for things with no game path: scenes, bakes, quickhacks, and models and sounds of your own |
| **The file name says what a thing is** | A scene ends in `.scene.json`, a bake in `.bake`, an asset in `.<kind>.asset`, so it doesn't matter which folder they're in. A search for `mesh` finds every mesh asset |
| **Plain files are welcome** | A GLB, FBX, `.blend`, images or a WAV you keep to use later can sit in any folder as they are |
| **A project remembers what it took** | When a tool copies something from the Library into a project, it notes it in the project (`source\library.json`), so the project can later show what changed in the Library and take the new version |
| **A Desk is one tool's own** | Work in progress waits on that tool's Desk, then goes to a project or into the Library. Only the Library is shared |
| **Never in the game folder** | Installing mods and REDnode's hot reload never touch the Library |

## If you build tools

The exact shapes (the asset item's `asset.json`, the project's `source\library.json`, a bake's `bake.json`) are on [EDGEbuilder's Library page](https://edgemodders.github.io/EDGEbuilder/library.html#shared-rules), with EDGEfab's [Library assets page](https://edgemodders.github.io/EDGEfab/library.html) for assets. A tool that wants another kind of item, or a change to the rules, asks there with an issue labelled `request`.
