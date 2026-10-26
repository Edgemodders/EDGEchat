<!-- Copied from EDGEweb's docs/wiki/edgedeck/adding-mods.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/adding-mods.html (reviewed 2026-10-24) -->

# Adding mods

Adding a mod puts it in your [library](https://edgemodders.ai/wiki/edgedeck/library.html). It doesn't touch the game: the mod goes on the list, and you [deploy](https://edgemodders.ai/wiki/edgedeck/deploying.html) when you're ready.

## From a file or folder

1. Press **Add mod** in the Mods view's title bar, or on the EDGEdeck page's toolbar.
2. Pick a `.zip`, `.7z` or `.rar` file, a single mod file, or a folder. A `.rar` needs [7-Zip](https://7-zip.org) or WinRAR installed; zip and 7z work on their own.

EDGEdeck unpacks it, works out what kind of mod it is and where each file belongs in the game folder, and adds it to the list. It asks you only when it can't tell, for example when the download contains a choice of options.

**A single mod file** works too: some mods are just one `.archive`, `.reds` or `.lua` file, with no zip around it. EDGEdeck puts it where its type goes, and asks when it can't tell.

(Screenshot on the wiki, "Adding a mod": Add mod's file picker, then the new mod in the list with its kind chips and the status not deployed yet.)

> **Tip:** keep the original download. EDGEdeck keeps a copy of it in its `downloads` folder too, so a mod can be added again later. See [Library, disk space and loadouts](https://edgemodders.ai/wiki/edgedeck/library.html).

## How EDGEdeck decides where files go

Mod downloads from Nexus aren't consistent. Some are laid out from the game folder down, some contain only a bare `.archive` file, some have a readme and two option folders. Other managers handle this with dozens of special-case installers. EDGEdeck uses one set of rules: it looks for folder and file names it recognises, and maps every file to its place under the game folder.

| If the download contains | Kind | Files go to |
|---|---|---|
| `archive/pc/mod/`, or a `.archive` file anywhere | `archive` (and `xl` for `.archive.xl` files) | `archive/pc/mod/` |
| A REDmod package (`info.json` with `archives`, `scripts` or `tweaks` beside it) | `redmod` | `mods/<name>/` |
| `r6/scripts/` or `.reds` files | `reds` | `r6/scripts/<mod name>/` |
| `r6/tweaks/` or TweakXL `.yaml` files | `tweak` | `r6/tweaks/<mod name>/` |
| `init.lua` or a `cyber_engine_tweaks/mods/` folder | `cet` | `bin/x64/plugins/cyber_engine_tweaks/mods/<mod name>/` |
| A `rednode-app.json` (a REDnode app or mod) | `rednode` | `red4ext/plugins/REDnode/apps/<id>/` |
| `red4ext/plugins/`, or a `.dll` with no `.exe` beside it | `red4ext` | `red4ext/plugins/<mod name>/` |
| `r6/audioware/`, `r6/input/`, `r6/config/`, `engine/config/` or `.asi` files | `audioware`, `input`, `config`, `asi` | The same path in the game folder |
| A framework's own files (RED4ext, CET, redscript, ArchiveXL, TweakXL and others) | `framework` | The same path, shown in the Frameworks group |

### When EDGEdeck asks

If nothing matches, or a download offers a choice (folders such as "Option A" and "Option B" that contain the same kinds of files), EDGEdeck asks. It shows the folder tree with its best guess, and you correct it once. The answer is stored with the mod, so it isn't asked again.

> In the library, each mod's folder is laid out exactly as it will deploy. So "what will this mod do to my game folder?" is answered by looking in its folder, and you or an assistant can check or fix a mod with File Explorer.

## From Nexus Mods

| How | Steps |
|---|---|
| **Mod manager download** | With EDGEdeck handling Nexus download links, press **Mod manager download** on any file on Nexus. The file lands in your library |
| **Paste a link** | Without link handling, copy the `nxm://` link (right-click **Mod manager download**, copy link) and use **Nexus: add from a link** |
| **Update from a row** | When a mod says `update 1.2 available`, click it. See [Nexus Mods](https://edgemodders.ai/wiki/edgedeck/nexus.html#updates) |

Mods added from Nexus remember their Nexus id, so EDGEdeck can check them for updates.

## From Vortex

**Import from Vortex** lists the mods Vortex has for Cyberpunk. Tick the ones you want, and EDGEdeck copies them into the library with their names, versions and Nexus ids. Common frameworks show under their usual names, such as Cyber Engine Tweaks rather than the download's file name. Vortex keeps its own copies. See [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html).

## From a REDcode project

**Add from REDcode project** adds a REDcode or WolvenKit project's packed output as a mod that follows the project. Pack the project again and the library copy refreshes. See [EDGEdeck and REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html).

## Versions

A mod has one row however many of its versions are in the library. The newest, or the one that's on, stands for it. The others wait in the version dropdown on the EDGEdeck page and in **Switch version...**, which appears when you hover the mod's row in the Mods view. Adding a version the library already has does nothing. Adding a newer version takes the old one's place in the order, on if the old one was on, and turns the old one off; an older version arrives switched off.

To go back to an older version, switch to it and deploy. To clear out old versions, see [Library, disk space and loadouts](https://edgemodders.ai/wiki/edgedeck/library.html).

## Removing a mod

Right-click it and choose **Remove**, or use the detail panel. This deletes the mod from the library. If it was deployed, its files come out of the game at the next deploy.
