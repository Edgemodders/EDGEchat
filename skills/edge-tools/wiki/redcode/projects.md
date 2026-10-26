<!-- Copied from EDGEweb's docs/wiki/redcode/projects.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/projects.html (reviewed 2026-10-24) -->

# Projects

A mod starts as a **project**: a folder where you collect the game files you change, the files you export to edit elsewhere, your scripts and tweaks, and the finished mod. REDcode uses WolvenKit's own project format, so a project moves freely between the two tools.

## What a project is

A project is any folder with a `.cpmodproj` file in it. That file names the mod and holds a few details such as the author and version. REDcode writes the same file WolvenKit does, byte for byte.

| Folder | In the Project view | What goes in it |
|---|---|---|
| `source/archive` | **Archive** | Game files you add or change. They keep their game paths, such as `base\characters\...`. Pack puts them into your mod's `.archive` |
| `source/raw` | **Raw** | Files exported to formats other tools edit: PNG, glTF, Ogg. See [Export and import](https://edgemodders.ai/wiki/redcode/export-import.html) |
| `source/resources` | **Resources** | Files the mod ships as they are: TweakXL tweaks, ArchiveXL `.xl` files, scripts, CET mods. They keep their place under the game folder, so `r6/tweaks/my.yaml` lands in the game's `r6/tweaks` |
| `packed` | **Packed** | The finished mod, laid out like the game folder. Pack rebuilds it. See [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html) |
| `source/customSounds` | **Custom Sounds** | Only in REDmod projects that add new sounds: the WAV files the mod's `info.json` lists. Shown only when the folder exists |

REDcode adds one folder of its own, `.redcode`, only when it installs a mod without EDGEdeck. It records which files it put in the game.

## Make a new project

1. Run **REDcode: New Project**, or press the new-folder button in the Project view's title bar.
2. Type a name. It's also the mod's name, so keep it short, for example `MyJacket`.
3. Choose the folder to create the project in.

REDcode creates the folders above and the `.cpmodproj` file, and opens the project. Set `redcode.author` in VS Code's settings once to have your name written into new projects.

## Open a project

Open the project's folder in VS Code with **File**, **Open Folder...**. REDcode notices the `.cpmodproj` file and the Project view fills in. A project made in WolvenKit opens the same way.

With no project open, the Project view shows **New Project** and **Open Folder** buttons.

## Close a project

**Close Project**, in the Project view's **`...`** menu or the command palette, closes the project's folder, and the Project view goes back to New Project. In a workspace with other folders, only the project's folder is removed. Nothing is deleted.

## The Project view

Click the REDcode icon in the activity bar. The Project view shows the open project as one tree: the project at the top, with the mod name and version beside it, and the four folders below.

(Screenshot on the wiki, "The Project view": The Project view with a small project expanded: the project row with mod name and version, then Archive with a few game files, Raw with an exported PNG, Resources with a tweak file, and Packed.)

### Opening files

Click a file and REDcode opens it in the right place:

| File | Opens in |
|---|---|
| Game files: `.ent`, `.app`, `.mesh`, `.inkatlas`, materials, animations, scenes and the other CR2W types | The [CR2W editor](https://edgemodders.ai/wiki/redcode/editing.html). A `.mesh` opens on its [3D view](https://edgemodders.ai/wiki/redcode/viewers.html#meshes-in-3d) |
| Textures: `.xbm`, `.dds`, `.tga`, and in the Project view PNG, JPG, BMP and TIFF too | The [texture viewer](https://edgemodders.ai/wiki/redcode/viewers.html#textures) |
| Sounds: `.wem`, `.opus` | The [audio player](https://edgemodders.ai/wiki/redcode/viewers.html#sounds) |
| `.glb` and `.gltf` | The [3D mesh viewer](https://edgemodders.ai/wiki/redcode/viewers.html#meshes-in-3d) |
| Text: tweaks, YAML, Lua, JSON, `.xl` | VS Code's text editor |

### Buttons and menus

The view's title bar has the project buttons: **Pack** (the package), **Pack and Install** (the rocket), **Pack and Try** (a flame), **Run Game** (the play button), **New Project**, **Refresh Project** and **Filter the Project**. **Install**, **Uninstall** and **Close Project** are in its **`...`** menu. When the game has Red Hot Tools, a second flame button, **Install to the Hot Folder**, appears too. See [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html).

Hover over a file or folder and buttons appear on the right of its row. Right-click for the full list:

| Command | Does |
|---|---|
| Export to Raw, Import from Raw | Convert between game formats and editable ones. Shown only on files and folders that can be converted. See [Export and import](https://edgemodders.ai/wiki/redcode/export-import.html) |
| Edit in Blender | On a `.glb`, `.gltf` or `.mesh`: opens the model in Blender, and imports it back each time you save there. See [Edit in Blender](https://edgemodders.ai/wiki/redcode/export-import.html#edit-in-blender) |
| Open as JSON | Opens the game file as WolvenKit JSON text. See [Editing as JSON](https://edgemodders.ai/wiki/redcode/editing.html#editing-as-json) |
| Open in CR2W Editor | On a texture: opens it in the CR2W editor, with its image above the property grid |
| Open With... | VS Code's list of editors that can open the file, as in the Explorer |
| Copy Path | Copies the full path on disk. The status bar shows what was copied |
| Reveal in File Explorer | Opens the folder in Windows File Explorer |
| Delete | Asks first, counting the files in a folder, then sends it to the Recycle Bin |

## Filter the project

**Filter the Project**, the filter button in the title bar, narrows the tree to matching files as you type. It works the same as the Game Assets filter: see [Filter](https://edgemodders.ai/wiki/redcode/game-assets.html#filter). **Clear the Project Filter** brings the whole tree back.

## Getting files into a project

| From | How |
|---|---|
| The game | **Add to Project** in [Game Assets](https://edgemodders.ai/wiki/redcode/game-assets.html#add-to-project). The file lands under Archive at its game path |
| A mod you have installed in EDGEdeck | EDGEdeck's **Add to Project**. See [EDGEdeck and REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html) |
| TweakDB | **New Tweak from This Record** writes a tweak file under Resources. See [TweakDB and tweaks](https://edgemodders.ai/wiki/redcode/tweakdb.html) |
| Another tool | Save it under Raw and use **Import from Raw**, or put it under Resources by hand |

Your project is a normal folder, so Git works on it like on any code. Keep game files you haven't changed out of it: they make the mod bigger and can overwrite other mods.
