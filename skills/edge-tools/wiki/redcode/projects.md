<!-- Copied from EDGEweb's docs/wiki/redcode/projects.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/projects.html (reviewed 2026-11-22) -->

# Projects

A mod starts as a **project**: a folder where you collect the game files you change, the files you export to edit elsewhere, your scripts and tweaks, and the finished mod. REDcode uses WolvenKit's own project format, so a project moves freely between the two tools.

| On this page | |
|---|---|
| [What a project is](https://edgemodders.ai/wiki/redcode/projects.html#what-a-project-is) | The folders, and what goes in each |
| [Make a new project](https://edgemodders.ai/wiki/redcode/projects.html#make-a-new-project), [Open](https://edgemodders.ai/wiki/redcode/projects.html#open-a-project), [Close](https://edgemodders.ai/wiki/redcode/projects.html#close-a-project) | |
| [The Project view](https://edgemodders.ai/wiki/redcode/projects.html#the-project-view) | [Opening files](https://edgemodders.ai/wiki/redcode/projects.html#opening-files), [the buttons](https://edgemodders.ai/wiki/redcode/projects.html#the-buttons), [the right-click menu](https://edgemodders.ai/wiki/redcode/projects.html#the-right-click-menu) |
| [Filter the project](https://edgemodders.ai/wiki/redcode/projects.html#filter-the-project) | Narrow the list |
| [New File](https://edgemodders.ai/wiki/redcode/projects.html#new-file) | A texture from an image, an atlas, a material and more, from nothing |
| [Getting files into a project](https://edgemodders.ai/wiki/redcode/projects.html#getting-files-into-a-project) | From the game, a mod, the Library, TweakDB or another tool |

## What a project is

A project is any folder with a `.cpmodproj` file in it. That file names the mod and holds a few details such as the author and version.

| Folder | In the Project view | What goes in it |
|---|---|---|
| `source/archive` | **Archive** | Game files you add or change. Each keeps its game path, such as `base\characters\...`. Pack puts them into your mod's `.archive` |
| `source/raw` | **Raw** | Files exported to formats other tools edit: PNG, glTF, Ogg. See [Export and import](https://edgemodders.ai/wiki/redcode/export-import.html) |
| `source/resources` | **Resources** | Files the mod ships as they are: [TweakXL](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms) tweaks, [ArchiveXL](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms) `.xl` files, scripts, [CET](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms) mods. They keep their place under the game folder, so `r6/tweaks/my.yaml` lands in the game's `r6/tweaks` |
| `packed` | **Packed** | The finished mod, laid out like the game folder. Pack rebuilds it. See [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html) |

**Why game paths matter.** A mod replaces a game file by shipping a file with the same path. The game then loads the mod's copy wherever it would have loaded its own. That is why a file under Archive must keep its path exactly, and why you only put files there that you mean to change.

Two more folders show only when a project has them:

| Folder | In the Project view | What goes in it |
|---|---|---|
| `source/scenes` | **Scenes** | [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/)'s scenes. They aren't packed |
| `source/customSounds` | **Custom Sounds** | Only in REDmod projects that add new sounds: the WAV files the mod's `info.json` lists. See [Packing as a REDmod](https://edgemodders.ai/wiki/redcode/pack-install.html#packing-as-a-redmod) |

REDcode adds one folder of its own, `.redcode`, only when it installs a mod without EDGEdeck. It records which files it put in the game.

## Make a new project

1. Run **REDcode: New Project**, or press the **New Project** button (a folder with a plus) in the Project view's title bar.
2. Type a name, for example `my_jacket`. It's also the mod's name, and the name of the mod's `.archive` file.
3. Choose the folder to create the project in: anywhere outside the game folder. REDcode makes a folder with the project's name there.

Before it opens the folder, REDcode reminds you to **trust** it if VS Code asks. VS Code asks whether you trust the authors of a folder it hasn't seen; in Restricted Mode, REDcode stays off and the other EDGE tools can't see the project. **Open, and Don't Say This Again** stops the reminder.

**You should see** VS Code open the new folder, and the Project view show the project with **Archive**, **Raw**, **Resources** and **Packed** under it.

**Naming.** REDcode accepts letters, digits, spaces, `-` and `_`. This wiki uses short names in small letters with no spaces, such as `my_jacket`, and recommends you do the same: some features use the mod's name inside game paths (your project's text file is `my_jacket\localization\en-us.json`), and Pack warns about game paths with capital letters or spaces, because the game may not find them.

Set `redcode.author` in VS Code's settings once to have your name written into new projects.

## Open a project

Open the project's folder in VS Code with **File**, **Open Folder...**. REDcode notices the `.cpmodproj` file and the Project view fills in. A project made in WolvenKit opens the same way.

With no project open, the Project view shows **New Project** and **Open Folder** buttons.

## Close a project

**Close Project**, in the Project view's **`...`** menu or the command palette, closes the project's folder, and the Project view goes back to New Project. In a workspace with other folders, only the project's folder is removed. Nothing is deleted.

## The Project view

Click the REDcode icon in the activity bar. The Project view shows the open project as one tree: the project at the top, with the mod name and version beside it, and its folders below.

The folders you leave open stay open after a reload of the window, and the ones you shut stay shut. Folders shut with VS Code's **Collapse All** are the exception: they open again.

(Screenshot on the wiki, "The Project view": The Project view with a small project expanded: the project row with mod name and version, then Archive with a few game files, Raw with an exported PNG, Resources with a tweak file, and Packed.)

### Opening files

Click a file and REDcode opens it in the right place:

| File | Opens in |
|---|---|
| Game files: `.ent`, `.app`, `.mesh`, `.inkatlas`, materials, animations, scenes and the other CR2W types | The [CR2W editor](https://edgemodders.ai/wiki/redcode/editing.html). A `.mesh` opens on its [3D view](https://edgemodders.ai/wiki/redcode/viewers.html#meshes-in-3d), an `.anims` file on its [Animations view](https://edgemodders.ai/wiki/redcode/viewers.html#animations), a `.streamingsector` on [its 3D view](https://edgemodders.ai/wiki/redcode/sectors.html) |
| Textures: `.xbm`, `.dds`, `.tga`, and in the Project view PNG, JPG, BMP and TIFF too | The [texture viewer](https://edgemodders.ai/wiki/redcode/viewers.html#textures) |
| Sounds: `.wem`, `.opus` | The [audio player](https://edgemodders.ai/wiki/redcode/viewers.html#sounds) |
| `.glb` and `.gltf` | The [3D mesh viewer](https://edgemodders.ai/wiki/redcode/viewers.html#meshes-in-3d) |
| Text: tweaks, YAML, Lua, JSON, `.xl` | VS Code's text editor |
| [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) scenes, `<name>.scene.json` | VS Code's text editor, as JSON |

### The buttons

The view's title bar holds the buttons you use most. Hover over one to see its name.

| Icon | Button | Does |
|---|---|---|
| A package | **Pack** | Builds the mod into `packed` |
| A rocket | **Pack and Install** | Packs, then puts the mod in the game |
| A flame | **Pack and Play** | Packs, then swaps the mod into the running game through REDnode |
| A play triangle | **Run Game** | Starts Cyberpunk 2077 |
| A folder with a plus | **New Project** | Makes a new project |
| A circling arrow | **Refresh Project** | Reads the project folder again |
| A funnel | **Filter the Project** | Narrows the tree as you type |
| **`...`** | The menu | **New File...**, **Install**, **Uninstall** and **Close Project** |

What each of the first four does, and when to use which, is on [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html#which-button).

Hover over a file or folder and more buttons appear on the right of its row: **Export to Raw** or **Import from Raw** where the file can be converted, **Copy Path**, **Reveal in File Explorer** and **Delete**. On a folder, a root such as Archive, or the project itself, **New File...** is there too.

### The right-click menu

| Command | Does |
|---|---|
| New File... | On a folder, a root or the project: makes a new file there. See [New File](https://edgemodders.ai/wiki/redcode/projects.html#new-file) |
| Export to Raw, Import from Raw | Convert between game formats and editable ones. Shown only on files and folders that can be converted. See [Export and import](https://edgemodders.ai/wiki/redcode/export-import.html) |
| Edit in Blender | On a `.glb`, `.gltf` or `.mesh`: opens the model in Blender, and imports it back each time you save there. See [Edit in Blender](https://edgemodders.ai/wiki/redcode/export-import.html#edit-in-blender) |
| Add a Clip from GLB | On a `.glb` with an animation on the game's rig: makes it a clip in a set of its own. See [Making a clip](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip) |
| Add to Library... | On a file under Archive: saves it, with the files it needs, as one item in the [EDGE Library](https://edgemodders.ai/wiki/library.html), the store the EDGE tools share. See [The EDGE Library](https://edgemodders.ai/wiki/redcode/other-tools.html#the-edge-library) |
| Open as JSON | Opens the game file as WolvenKit JSON text. See [Editing as JSON](https://edgemodders.ai/wiki/redcode/editing.html#editing-as-json) |
| Open in CR2W Editor | On a texture: opens it in the CR2W editor, with its image above the property grid |
| Open With... | VS Code's list of editors that can open the file, as in the Explorer |
| Copy Path | Copies the full path on disk. The status bar shows what was copied |
| Reveal in File Explorer | Opens the folder in Windows File Explorer |
| Delete | Asks first, counting the files in a folder, then sends it to the Recycle Bin |

## Filter the project

**Filter the Project**, the funnel in the title bar, narrows the tree to matching files as you type. It works the same as the Game Assets filter: see [Filter](https://edgemodders.ai/wiki/redcode/game-assets.html#filter). **Clear the Project Filter** brings the whole tree back.

## New File

**New File...** makes a game file from nothing, where WolvenKit would have you copy a game file and empty it. Press it on a folder, a root or the project (the hover button, or the right-click menu), pick a kind, and type a name.

| Kind | Starts as |
|---|---|
| **Texture from an Image...** (`.xbm`) | Pick a PNG, JPG, TGA, DDS or BMP and how it is used: **color**, **normal map**, **mask** or **UI**. The image is copied into Raw and imported, so you can change it there and import it again |
| **Ink Atlas** (`.inkatlas`) | Pick its texture, from the project or a new one from an image. It starts with one part, `whole`, covering the texture, ready to [cut into parts](https://edgemodders.ai/wiki/redcode/editing.html#atlases-the-atlas-view) |
| **Material Instance** (`.mi`) | Pick its base material from the ones the game uses most, such as `multilayered.mt`, or type any path |
| **Entity**, **Appearance**, **Multilayer Setup** (`.ent`, `.app`, `.mlsetup`) | Empty, with the game's defaults |
| **Start from a Game File...** | Search the game, and the file you pick is copied here under your new name |
| **TweakXL**, **ArchiveXL**, **Redscript** | A blank file with a comment saying what it is, in its usual place (`r6\tweaks`, beside the archive, `r6\scripts`), whichever folder you clicked |

The new file opens in its editor and is selected in the Project view.

- **Names** are checked as game paths: small letters, no spaces. Clicked on a folder under Archive, the file goes in that folder; anywhere else, the name box offers `<mod name>\<name>`, and you can type folders with `\` or `/`.
- **An image with an odd width or height** can't be compressed by the game's format. REDcode says so first and offers **Resize** (a copy, each odd side one pixel shorter, with the size shown) or **Import Uncompressed**. Your image itself is never changed.

These files were made, opened and packed in REDcode's tests. Whether the game takes each new kind has not been tried yet.

(Screenshot on the wiki, "New File": The New File list over the Project view: Game files (Texture from an Image, Ink Atlas, Material Instance, Entity, Appearance, Multilayer Setup, Start from a Game File) and Text files (TweakXL, ArchiveXL, Redscript), with the folder it will be made in at the top.)

## Getting files into a project

| From | How |
|---|---|
| Nothing | **New File...** on a folder. See [New File](https://edgemodders.ai/wiki/redcode/projects.html#new-file) |
| The game | **Add to Project** in [Game Assets](https://edgemodders.ai/wiki/redcode/game-assets.html#add-to-project), in Search game files, in the editor's header on a game file you are looking at, or **Add Mesh to Project** in a [sector's 3D view](https://edgemodders.ai/wiki/redcode/sectors.html#picking-a-thing-and-its-materials). The file lands under Archive at its game path. If the project has it already, REDcode asks before it replaces it |
| Words, or a GLB from Blender | A new animation clip, with the **Make** panel in the animation view. See [Making a clip](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip) |
| The EDGE Library | **Add to Project** in the [Library view](https://edgemodders.ai/wiki/redcode/other-tools.html#the-edge-library) |
| The game's texts | **Add to Project Onscreens** in the [LocKeys view](https://edgemodders.ai/wiki/redcode/game-assets.html#the-lockeys-view) |
| A mod you have installed in EDGEdeck | EDGEdeck's **Add to Project**. See [EDGEdeck and REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html) |
| TweakDB | **New Tweak from This Record** writes a tweak file under Resources. See [TweakDB and tweaks](https://edgemodders.ai/wiki/redcode/tweakdb.html) |
| Another tool | Save it under Raw and use **Import from Raw**, or put it under Resources by hand |

Your project is a normal folder, so Git works on it like on any code. Keep game files you haven't changed out of it: they make the mod bigger and can overwrite other mods.

**New to this?** [Your first mod](https://edgemodders.ai/wiki/redcode/first-mod.html) makes a project and takes it into the game.
