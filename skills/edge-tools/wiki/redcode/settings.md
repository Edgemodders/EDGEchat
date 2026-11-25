<!-- Copied from EDGEweb's docs/wiki/redcode/settings.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/settings.html (reviewed 2026-11-25) -->

# Settings and commands

| On this page | |
|---|---|
| [Settings](https://edgemodders.ai/wiki/redcode/settings.html#settings) | [Game and REDbridge](https://edgemodders.ai/wiki/redcode/settings.html#game-and-redbridge), [Projects and packing](https://edgemodders.ai/wiki/redcode/settings.html#projects-and-packing), [Export and import](https://edgemodders.ai/wiki/redcode/settings.html#export-and-import) |
| [The Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view) | The AI service keys every EDGE tool shares, and which tools may read each |
| [Commands](https://edgemodders.ai/wiki/redcode/settings.html#commands) | By where they live, with their icons |
| [Keyboard shortcuts](https://edgemodders.ai/wiki/redcode/settings.html#keyboard-shortcuts) | The shortcuts in one place |
| [Editors under Open With](https://edgemodders.ai/wiki/redcode/settings.html#editors-under-open-with) | Which editor opens which file |

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `redcode`. Most people never change any of these: REDcode finds the game and fetches REDbridge on its own.

(Screenshot on the wiki, "REDcode in VS Code's settings": VS Code's Settings editor filtered to redcode, showing the game path, bridge path and pack settings.)

### Game and REDbridge

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.gamePath` | Steam's default folder, `C:\Program Files (x86)\Steam\steamapps\common\Cyberpunk 2077` | The Cyberpunk 2077 folder, the one with `bin`, `archive` and `r6`. If it isn't the game, REDcode offers one it finds on start | The game is somewhere else. **REDcode: Set Game Folder** sets it for you |
| `redcode.bridgePath` | empty | Path to `REDbridge.exe`, or its folder. **Install REDbridge** fills it in. While it is empty, REDcode only finds a REDbridge that is on your PATH; none comes inside the extension | Rarely. Write the old value down before you change it by hand, so you can go back: Install REDbridge overwrites it |
| `redcode.dotnetRoot` | empty | Where the .NET 10 runtime is, for REDbridge only, when it's installed for your user rather than the whole PC | REDbridge can't find a .NET runtime that is installed |
| `redcode.bridgeRepository` | `Edgemodders/REDbridge` | The GitHub repository Install and Update REDbridge download from | Only if told to, for example to test a REDbridge build |
| `redcode.bridgeUpdateCheck` | on | Asks GitHub once per session whether a newer REDbridge exists, and offers it | You'd rather update by hand |

> **Never set `DOTNET_ROOT` for your whole Windows account.** Every .NET program then looks only there, which breaks other tools. Use `redcode.dotnetRoot`, which applies to REDbridge alone.

### Projects and packing

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.author` | empty | Your name, written into new projects | Set it once |
| `redcode.pack.clean` | on | Empties `packed` before packing, so a file you removed doesn't linger in the mod | Rarely. Keep it on |
| `redcode.pack.redmod` | off | Packs the project as a REDmod under `packed/mods/<mod name>` | You want to ship a REDmod. See [Packing as a REDmod](https://edgemodders.ai/wiki/redcode/pack-install.html#packing-as-a-redmod) |
| `redcode.launch` | `auto` | How Run Game starts the game: `auto` (through Steam for a Steam install, else the exe), `steam` or `exe` | Steam doesn't start the game the way you want |
| `redcode.rednode.installPackage` | on | When the game has REDnode, installs and updates REDcode's small REDnode package, `redcode`, in REDnode's apps folder. It tells REDnode mods, such as EDGEbuilder, and assistants which project is open in REDcode | You don't want REDcode to add anything to the game folder |
| `redcode.loc.language` | `en-us` | The language of the texts in the LocKeys view and the LocKey hover, and of the text file Add to Project Onscreens writes to. **LocKey Language...** sets it | You play or mod in another language |

### Export and import

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.export.textureFormat` | `png` | The image format Export to Raw writes for textures: `png`, `tga`, `dds`, `bmp`, `jpg` or `tiff` | Your image editor prefers another format |
| `redcode.export.meshFormat` | `glb` | Meshes as one `.glb` file, or `gltf` for a `.gltf` with its `.bin` | Your 3D tool prefers `.gltf` |
| `redcode.export.meshMaterials` | on | Exports a mesh's materials and their textures with it | You only want the shape |
| `redcode.export.meshLods` | off | Exports every level of detail (LOD) of a mesh, each named `_LOD_1`, `_LOD_2` and so on, not only the most detailed one | You want to edit the simpler copies the game shows at a distance too |
| `redcode.import.keepSettings` | on | Import keeps the settings of the file it replaces: a texture's format, compression and flags, a mesh's materials | You want WolvenKit's defaults instead |
| `redcode.blenderPath` | empty | `blender.exe`, or its folder, for Edit in Blender. REDcode fills it in when it finds Blender | REDcode can't find your Blender |

## The Keys view

Some EDGE tools use an AI service on your own account: Uthana for [making animations](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip), and OpenAI, Anthropic, Gemini, ElevenLabs or Tripo in other tools. Each needs your **[API key](https://edgemodders.ai/wiki/glossary.html#api-key)** for it. The EDGE tools share one store of keys, in VS Code and in the game, so you type each key once. REDcode keeps that store for every EDGE tool in VS Code: the others ask REDcode for a key, and REDcode asks you.

The **Keys** view is in REDcode's sidebar, below LocKeys. It starts folded: click its title to open it. It needs REDbridge 0.18.0 or later, and says so on an older one.

| A row shows | Means |
|---|---|
| `…abcd · used by EDGEwave` | Set: the key's last 4 characters, and the tools that have read it. The key itself is never shown |
| `…abcd · not used yet` | Set, and no tool has read it yet |
| `…abcd from GEMINI_API_KEY` | An environment variable on your PC holds the key, and wins over the store. Change it where the variable is set |
| can't be read here | Saved by another Windows user or on another PC. Set it again |
| not set | No key yet |

Hover a row to see when the key was saved and which tools you allowed or refused.

| Button | Does |
|---|---|
| **Set Key...** (a pencil) | Opens a box that shows dots: paste the key and press Enter. A key that doesn't look right for its service is refused, with the reason, and the box asks again. Escape leaves the key as it was |
| **Remove Key...** (a bin) | Removes the key for every tool, after asking |
| **Forget Tool Permissions for This Key...** (an unlock) | Shows on a key some tool has asked for. It lists the tools and your answers, then forgets them for this key only: each tool asks again next time |
| **Add a Key for Another Service...** (a plus, in the title bar) | Adds a row for a service not in the list |
| **Refresh Keys** (a circling arrow, in the title bar) | Reads the store again |
| **Forget Tool Permissions for Keys** (in the view's **`...`** menu) | Forgets every answer, for every key |

**Asking you.** The first time a tool wants a key, REDcode asks, for example "EDGEwave wants your ElevenLabs key", with **Allow** and **Don't Allow**, and remembers your answer for that tool and that key. After a **Don't Allow**, the tool can tell that you said no, rather than that no key is set, so it doesn't keep asking you to type one. Closing the question without an answer saves nothing: it asks again next time.

The keys are the same ones REDnode's [Keys panel](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys) shows in the game, kept encrypted for your Windows account in `%APPDATA%\Edgemodders\keys`. A key set in the game shows here at once, and the other way round.

(Screenshot on the wiki, "The Keys view": REDcode's Keys view in the sidebar: Anthropic, Gemini, OpenAI, ElevenLabs, Tripo and Uthana, one set with its last four characters and used by a tool, with the pencil, unlock and bin buttons on its row, the others not set, and the tooltip naming the tools allowed and refused.)

## Commands

Open the command palette (`Ctrl+Shift+P`) and type `REDcode` to see them. Most are also buttons or right-click items in the REDcode sidebar; the Icon column shows the button's picture where there is one. Commands marked *menu only* act on the row you clicked, so they don't appear in the palette. Some palette commands show only when they can work, for example once a project is open or the game is loaded.

### Projects

| Command | Icon | Does |
|---|---|---|
| New Project | A folder with a plus | Asks for a name and a folder, creates a WolvenKit project and opens it, after a reminder to trust the folder if VS Code asks |
| New File... | A page with a plus | Makes a new game or text file in the project: a texture from an image, an atlas, a material instance and more. Also a hover button on folders, the roots and the project, and in the **`...`** menu |
| Pack | A package | Builds the project's `packed` folder. Also `Ctrl+Shift+B` |
| Pack and Install | A rocket | Packs, then installs |
| Pack and Play | A flame | Packs, then swaps the archive into the running game through REDnode. Without REDnode running, Pack and Install. It was called Pack and Try before 0.10.5, and the old command id, `redcode.packAndTry`, still works for keybindings |
| Install | | Puts the packed mod in the game, through EDGEdeck when it's installed. In the Project view's **`...`** menu |
| Uninstall | | Takes the mod out of the game again. In the **`...`** menu |
| Run Game | A play triangle | Starts the game |
| Close Project | | Closes the project's folder; the Project view goes back to New Project. In the **`...`** menu |
| Refresh Project | A circling arrow | Re-reads the project folder |
| Filter the Project | A funnel | Narrows the Project view to matching files |
| Clear the Project Filter | Crossed-out lines | Shows the whole project again |

### Project view items (menu only)

| Command | Icon | Does |
|---|---|---|
| New File... | A page with a plus | On a folder, a root or the project: makes a new file there |
| Export to Raw | An arrow out of a box | Converts a game file to PNG, glTF, Ogg and so on under Raw |
| Import from Raw | An arrow into a screen | Converts it back into the game's format under Archive. Also takes sound effect WAVs named after their hash |
| Edit in Blender | A pencil | On a `.mesh` under Archive or a `.glb`/`.gltf` under Raw: opens it in Blender and imports each save |
| Add a Clip from GLB | | On a `.glb` with an animation on the game's rig: makes an animation clip from it on the game's rig, in a set of its own. See [Making a clip](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip) |
| Add to Library... | Books | On a file under Archive: saves it with the files it needs as an item in the EDGE Library |
| Open as JSON | | Opens the game file as WolvenKit JSON |
| Open in CR2W Editor | | On a texture: opens it in the CR2W editor |
| Open With... | | VS Code's list of editors for the file |
| Copy Path | Two pages | Copies the full path on disk |
| Reveal in File Explorer | An open folder | Opens the folder in File Explorer |
| Delete | A bin | Sends the file or folder to the Recycle Bin, after asking |

### Game Assets

| Command | Icon | Does |
|---|---|---|
| Open game file as JSON | | Searches the game as you type and opens the file you pick as JSON |
| Search game files | A magnifier | Finds files by name or path, and clothing by its name in the game or TweakDB id. A pick opens the file; Add to project, Copy path and Open as JSON are buttons on each row |
| Browse Game Sounds | A speaker | Opens the game's sound effects as a list to filter and play. In the view's **`...`** menu |
| Refresh Game Assets | A circling arrow | Re-reads the tree |
| Filter Game Assets | A funnel | Narrows the tree to matching files |
| Clear the Game Assets Filter | Crossed-out lines | Shows the whole tree again |
| Add to Project *(menu only)* | A page with a plus | Copies the file or folder into the project |
| Extract to... *(menu only)* | | Copies the file or folder to a folder you choose |
| Add to Library... *(menu only)* | Books | Saves the file with the files it needs as an item in the EDGE Library |
| Open in Editor *(menu only)* | | Opens the file read-only, as a click does |
| Open as JSON *(menu only)* | | Opens a copy of the file as JSON |
| Open Texture *(menu only)* | | Opens a texture in the texture viewer |
| Copy Game Path *(menu only)* | Two pages | Copies the path inside the game |

### TweakDB

| Command | Icon | Does |
|---|---|---|
| Open TweakDB Record... | A magnifier | Searches records as you type and opens the one you pick |
| Open In... *(menu only)* | | On a record another EDGE tool can open: lists the tools to open it in |
| New Tweak from This Record... | A page with a plus | Writes a TweakXL YAML file into the project that clones or changes the record. Needs a project |
| Copy Record Path *(menu only)* | Two pages | Copies the record's path |
| Filter TweakDB | A funnel | Narrows the TweakDB view to records matching your words |
| Clear TweakDB Filter | Crossed-out lines | Shows the record types again |

### LocKeys

| Command | Icon | Does |
|---|---|---|
| Search LocKeys... | A magnifier | Finds the game's texts by words, by key or by secondary key |
| LocKey Language... | A globe | Picks the language of the texts |
| Clear LocKey Search | Crossed-out lines | Empties the LocKeys view. A button in the view's title bar |
| Add to Project Onscreens *(menu only)* | A page with a plus | Copies the entry into the project's own text file. Needs a project |
| Copy LocKey *(menu only)* | Two pages | Copies the entry's key |
| Copy Text *(menu only)* | | Copies the entry's text |
| Open in Its File *(menu only)* | | Opens the entry on its row in its localization file. A click on the entry does this |

### Library

| Command | Icon | Does |
|---|---|---|
| Refresh | A circling arrow | Reads the Library again |
| Set Up the Library... | | Makes a Library, or picks one you have. Shown when there is none |
| Refresh Project from Library | Two circling arrows | Brings in the project's Library items that have a newer version |
| Add to Project *(menu only)* | A plus | Copies the item, with the files it needs, into the project. Asks before replacing the project's own files |
| Open *(menu only)* | A page with an arrow | Opens the item's file |
| Reveal in File Explorer *(menu only)* | | Shows the item on disk |

### Keys

| Command | Icon | Does |
|---|---|---|
| Set Key... | A pencil | Sets or replaces a key, for every tool. On each row of the Keys view |
| Remove Key... | A bin | Removes a key, for every tool, after asking. On each set key's row |
| Forget Tool Permissions for This Key... *(menu only)* | An unlock | Forgets which tools you allowed or refused for this key only |
| Add a Key for Another Service... | A plus | Adds a key for a service not in the list. In the view's title bar |
| Refresh Keys | A circling arrow | Reads the key store again. In the view's title bar |
| Forget Tool Permissions for Keys | | Forgets every answer you gave tools, for every key. In the view's **`...`** menu |

### Animations

| Command | Icon | Does |
|---|---|---|
| Generate an Animation with Uthana | A sparkle | Asks the rig, the words and the length, makes the clip with Uthana and opens it. Paid, with your own key. Needs a project. See [Making a clip](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip) |
| Add a Clip from GLB | | Makes a clip from a `.glb` on the game's rig, in a set of its own. Needs a project. Also on a `.glb` in the Project view |
| Replace a Game Clip | | Puts a clip from Uthana or a `.glb` in place of one of the game's clips, in a copy of its set. Needs a project |

The **Make** panel, in the animation view's **Clip** tab, does all three with buttons. Editing a made clip is in its **Edit** tab: see [Editing a made clip](https://edgemodders.ai/wiki/redcode/viewers.html#editing-a-made-clip).

### Lip Sync

| Command | Icon | Does |
|---|---|---|
| Open Lip Sync | Two speech bubbles | Asks for a character and opens the [Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html) on their lip synced lines. The audio player's **Lip Sync** button and the animation view's **Open in Lip Sync** open it at one line |

### Editing

| Command | Icon | Does |
|---|---|---|
| Save JSON to Project | A yellow save mark | On JSON opened from a project file: rebuilds the game file from it. The button is in the editor's title bar |
| Add to Project | | In the CR2W editor's header, on a game file: copies it into the project at its game path. If the project has the file already, it asks first |

### Setup and REDbridge

| Command | Does |
|---|---|
| Set Game Folder | Lists the game installs REDcode found, or lets you browse for one |
| Install REDbridge | Downloads the latest REDbridge and points REDcode at it |
| Update REDbridge | Checks for a newer REDbridge and installs it |
| Restart REDbridge | Stops and starts REDbridge |
| Show REDbridge log | Opens REDcode's log. Clicking the status bar item does the same |

### For other tools

| Command | Does |
|---|---|
| Extract from a Mod Archive into the Project | Not for typing: EDGEdeck calls it for its **Add to Project** on a mod's `.archive` |
| Stop Watching Blender | Not in the palette: click the **Blender** item in the status bar to end Edit in Blender's watch |

## Keyboard shortcuts

REDcode adds no global shortcuts of its own. These work in its views:

| Key | Where | Does |
|---|---|---|
| `Ctrl+Shift+B` | Anywhere, with a project open | Pack, as VS Code's build task `redcode: pack` |
| `Ctrl+S`, `Ctrl+Z`, `Ctrl+Y` | The CR2W editor | Save, undo, redo |
| `Esc` | The CR2W editor's search | Clears the results |
| `Alt+Left`, `Alt+Right` | A TweakDB record page | Back and forward through the records you opened |
| `W`, `A`, `S`, `D`, `Q`, `E` | A sector's 3D view, while the right button is held or after a click on it | Fly the camera; with `Shift`, faster, with `Ctrl`, slower |
| `F` | A sector's 3D view | Frame the picked thing |
| `Ctrl+A`, `Esc` | A sector's 3D view, after a click in it | Select everything shown; select nothing, and take away the volume and Isolate |
| `Space` | The audio player | Play and pause |
| `Space`, arrow keys, `Home`, `End` | An animation's 3D view, after a click on it | Play or stop; step a frame; jump to the beginning or the end |
| `Space`, arrow keys, `Home` | The Lip Sync editor | Play or stop; step a frame; back to the start |
| Arrow keys | The game sound list | Step through the sounds, playing each |
| `Ctrl+/` | A tweak file | Comment a line in or out |
| `Ctrl+K` then `Ctrl+T` | Anywhere | VS Code's theme picker, for the REDnode HUD theme |

To give a command your own shortcut, open VS Code's **Keyboard Shortcuts** (`Ctrl+K` then `Ctrl+S`) and search for `REDcode`.

## Editors under Open With

REDcode adds these to VS Code's **Open With...** list, by file type:

| Editor | Default for | Offered for |
|---|---|---|
| REDcode CR2W Editor | Entities, meshes, atlases, materials, animations, scenes and the other CR2W types | `.xbm`, `.json`, `.csv` |
| REDcode Texture | `.xbm`, `.dds`, `.tga` | PNG, JPG, BMP, TIFF |
| REDcode Mesh | `.glb`, `.gltf` | |
| REDcode Audio | `.wem`, `.opus` | WAV, Ogg, MP3, FLAC |
| REDcode Game Sounds | `.opusinfo` | |

Right-click a file in VS Code's Explorer, choose **Open With...**, and pick **Configure default editor** there to change a default.
