<!-- Copied from EDGEweb's docs/wiki/redcode/settings.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/settings.html (reviewed 2026-10-24) -->

# Settings and commands

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `redcode`. Most people never change any of these: REDcode finds the game and fetches REDbridge on its own.

(Screenshot on the wiki, "REDcode in VS Code's settings": VS Code's Settings editor filtered to redcode, showing the game path, bridge path and pack settings.)

### Game and REDbridge

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.gamePath` | Steam's default folder, `C:\Program Files (x86)\Steam\steamapps\common\Cyberpunk 2077` | The Cyberpunk 2077 folder, the one with `bin`, `archive` and `r6`. If it isn't the game, REDcode offers one it finds on start | The game is somewhere else. **REDcode: Set Game Folder** sets it for you |
| `redcode.bridgePath` | empty | Path to `REDbridge.exe`, or its folder. Empty means a REDbridge bundled with the extension, else one on your PATH | Rarely. **Install REDbridge** sets it for you. Note the old value before you change it by hand |
| `redcode.dotnetRoot` | empty | Where the .NET 10 runtime is, for REDbridge only, when it's installed for your user rather than the whole PC | REDbridge can't find a .NET runtime that is installed |
| `redcode.bridgeRepository` | `Edgemodders/REDbridge` | The GitHub repository Install and Update REDbridge download from | Only if told to, for example to test a REDbridge build |
| `redcode.bridgeUpdateCheck` | on | Asks GitHub once per session whether a newer REDbridge exists, and offers it | You'd rather update by hand |

> **Never set `DOTNET_ROOT` for your whole Windows account.** Every .NET program then looks only there, which breaks other tools. Use `redcode.dotnetRoot`, which applies to REDbridge alone.

### Projects and packing

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.author` | empty | Your name, written into new projects | Set it once |
| `redcode.pack.clean` | on | Empties `packed` before packing, so a file you removed doesn't linger in the mod | Rarely. Keep it on |
| `redcode.pack.redmod` | off | Packs the project as a REDmod under `packed/mods/<mod name>` | You want to ship a REDmod |
| `redcode.launch` | `auto` | How Run Game starts the game: `auto` (through Steam for a Steam install, else the exe), `steam` or `exe` | Steam doesn't start the game the way you want |
| `redcode.loc.language` | `en-us` | The language of the texts in the LocKeys view and the LocKey hover, and of the localization file Add to Project Onscreens writes to. **LocKey Language...** sets it | You mod in another language |

### Export and import

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.export.textureFormat` | `png` | The image format Export to Raw writes for textures: `png`, `tga`, `dds`, `bmp`, `jpg` or `tiff` | Your image editor prefers another format |
| `redcode.export.meshFormat` | `glb` | Meshes as one `.glb` file, or `gltf` for a `.gltf` with its `.bin` | Your 3D tool prefers `.gltf` |
| `redcode.export.meshMaterials` | on | Exports a mesh's materials and their textures with it | You only want the shape |
| `redcode.import.keepSettings` | on | Import keeps the settings of the file it replaces: a texture's format, compression and flags, a mesh's materials | You want WolvenKit's defaults instead |
| `redcode.blenderPath` | empty | `blender.exe`, or its folder, for Edit in Blender. REDcode fills it in when it finds Blender | REDcode can't find your Blender |

## Commands

Open the command palette (`Ctrl+Shift+P`) and type `REDcode` to see them. Most are also buttons or right-click items in the REDcode sidebar. Commands marked *menu only* act on the row you clicked, so they don't appear in the palette. Some palette commands show only when they can work, for example once a project is open or the game is loaded.

### Projects

| Command | Does |
|---|---|
| New Project | Asks for a name and a folder, creates a WolvenKit project and opens it |
| Pack | Builds the project's `packed` folder. Also `Ctrl+Shift+B` |
| Pack and Install | Packs, then installs |
| Pack and Try | Packs, then sends the archive to Red Hot Tools' hot folder for the running game. Without Red Hot Tools, Pack and Install |
| Install | Puts the packed mod in the game, through EDGEdeck when it's installed |
| Uninstall | Takes the mod out of the game again |
| Install to the Hot Folder (Red Hot Tools) | Copies the packed archive to `archive/pc/hot`. Shown only when the game has Red Hot Tools. Untested |
| Run Game | Starts the game |
| Close Project | Closes the project's folder; the Project view goes back to New Project |
| Refresh Project | Re-reads the project folder |
| Filter the Project | Narrows the Project view to matching files |
| Clear the Project Filter | Shows the whole project again |

### Project view items (menu only)

| Command | Does |
|---|---|
| Export to Raw | Converts a game file to PNG, glTF, Ogg and so on under Raw |
| Import from Raw | Converts it back into the game's format under Archive. Also takes sound effect WAVs named after their hash |
| Edit in Blender | On a `.mesh` under Archive or a `.glb`/`.gltf` under Raw: opens it in Blender and imports each save |
| Open as JSON | Opens the game file as WolvenKit JSON |
| Open in CR2W Editor | On a texture: opens it in the CR2W editor |
| Open With... | VS Code's list of editors for the file |
| Copy Path | Copies the full path on disk |
| Reveal in File Explorer | Opens the folder in File Explorer |
| Delete | Sends the file or folder to the Recycle Bin, after asking |

### Game Assets

| Command | Does |
|---|---|
| Open game file as JSON | Searches the game as you type and opens the file you pick as JSON |
| Search game files | The same search, then Open as JSON, Add to project or Copy path |
| Browse Game Sounds | Opens the game's sound effects as a list to filter and play |
| Refresh Game Assets | Re-reads the tree |
| Filter Game Assets | Narrows the tree to matching files |
| Clear the Game Assets Filter | Shows the whole tree again |
| Add to Project *(menu only)* | Copies the file or folder into the project |
| Extract to... *(menu only)* | Copies the file or folder to a folder you choose |
| Open in Editor *(menu only)* | Opens the file read-only, as a click does |
| Open as JSON *(menu only)* | Opens a copy of the file as JSON |
| Open Texture *(menu only)* | Opens a texture in the texture viewer |
| Copy Game Path *(menu only)* | Copies the path inside the game |

### TweakDB

| Command | Does |
|---|---|
| Open TweakDB Record... | Searches records as you type and opens the one you pick |
| New Tweak from This Record... | Writes a TweakXL YAML file into the project that clones or changes the record. Needs a project |
| Copy Record Path *(menu only)* | Copies the record's path |
| Filter TweakDB | Narrows the TweakDB view to records matching your words |
| Clear TweakDB Filter | Shows the record types again |

### LocKeys

| Command | Does |
|---|---|
| Search LocKeys... | Finds the game's texts by key, secondary key or words |
| LocKey Language... | Picks the language of the texts |
| Clear LocKey Search *(menu only)* | Empties the LocKeys view |
| Copy LocKey *(menu only)* | Copies the entry's key |
| Copy Text *(menu only)* | Copies the entry's text |
| Open in Its File *(menu only)* | Opens the entry on its row in its localization file, as a click does |
| Add to Project Onscreens *(menu only)* | Copies the entry into the project's own localization file. Needs a project |

### Editing

| Command | Does |
|---|---|
| Save JSON to Project | On JSON opened from a project file: rebuilds the game file from it. Also the button in the editor's title bar |

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
| Stop Watching Blender | Not in the palette: ends Edit in Blender's watch from the status bar |

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
