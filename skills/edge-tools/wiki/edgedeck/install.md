<!-- Copied from EDGEweb's docs/wiki/edgedeck/install.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/install.html (reviewed 2026-10-24) -->

# Install and set up EDGEdeck

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | Steam, GOG or Epic. EDGEdeck finds all three on its own |
| [VS Code](https://code.visualstudio.com/) 1.80 or later | EDGEdeck is a VS Code extension. Version 1.101 or later also lets VS Code's built-in agents use EDGEdeck |
| Disk space for your mods | The library holds one copy of each mod. On the same drive as the game, deploying costs no extra space |
| Optional: a Nexus Mods account | For update checks and one-click downloads. Not needed to add mods from files |
| Optional: about 70 MB for REDbridge | For conflicts inside archives. EDGEdeck downloads it for you |

## Install EDGEdeck

EDGEdeck is on the VS Code Marketplace, published by **Edgemodders** and marked **Preview** (young, and Windows only).

1. In VS Code, open the **Extensions** view (`Ctrl+Shift+X`).
2. Search for `EDGEdeck`.
3. Pick **EDGEdeck** by Edgemodders and press **Install**.

The same listing is on the web: [EDGEdeck on the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgedeck). If you prefer a terminal:

```powershell
code --install-extension edgemodders.edgedeck
```

### Other ways to install

| Way | When | How |
|---|---|---|
| **Open VSX** | Editors built on VS Code that use Open VSX instead of Microsoft's Marketplace, such as VSCodium | Search for `EDGEdeck` in the editor's Extensions view, or see [EDGEdeck on Open VSX](https://open-vsx.org/extension/edgemodders/edgedeck) |
| **The EDGEkit app** | You want one editor with the EDGE tools built in | [EDGEkit](https://edgemodders.ai/wiki/edgekit/#get-the-app) 1.140.1 comes with EDGEdeck 0.27.3, which then updates itself from Open VSX |
| **A `.vsix` file** | No store access, or you want one exact version | Download `edgedeck-<version>.vsix` from the [releases page](https://github.com/Edgemodders/EDGEdeck/releases). In the Extensions view, press the **`...`** menu at the top right, choose **Install from VSIX...** and pick the file. Then run **Developer: Reload Window** from the command palette (`Ctrl+Shift+P`) |

A EDGEdeck icon appears in the activity bar on the left of VS Code. Click it to open the **Mods** view.

(Screenshot on the wiki, "The EDGEdeck icon and an empty Mods view": VS Code's activity bar with the EDGEdeck icon highlighted, and the Mods view on first start with the Set up group and its buttons.)

## The Set up steps

The first time you open EDGEdeck, the Mods view shows a **Set up** group with one row for each thing EDGEdeck needs or can use. Each row is a button. Rows disappear as you finish them, and the **x** on a row hides one you don't want.

| Step | What it does | Needed? |
|---|---|---|
| **Find the game folder** | Appears only if EDGEdeck can't find Cyberpunk 2077 on its own. Pick the folder that contains `bin`, `archive` and `r6` | Yes, if shown |
| **Get REDbridge** | Downloads REDbridge, and the .NET 10 runtime for your user account if you don't have it, so EDGEdeck can see conflicts inside mod archives | Recommended |
| **Sign in to Nexus Mods** | For update checks and downloads from Nexus | Optional |
| **Handle Nexus download links** | Makes the **Mod manager download** button on Nexus send files to EDGEdeck | Optional |
| **Import from Vortex** | Copies your Vortex mods into EDGEdeck's library. Shown only when Vortex has Cyberpunk mods and the library has none from it yet | Optional |

**EDGEdeck: Set up...** in the command palette lists every step, done or not, and brings hidden rows back.

The next version after 0.28.0 (built, not released yet) adds two rows: **Get the frameworks**, while any of RED4ext, CET, redscript, ArchiveXL, TweakXL or Codeware is missing (see [Frameworks and game patches](https://edgemodders.ai/wiki/edgedeck/frameworks.html#getting-the-frameworks)), and **Move library...**, when the library and the game are on different drives (see [Library, disk space and loadouts](https://edgemodders.ai/wiki/edgedeck/library.html#moving-the-library)).

(Screenshot on the wiki, "The Set up group": The Set up group at the top of the Mods view, with the Get REDbridge, Sign in to Nexus Mods and Import from Vortex rows.)

### Finding the game

On every start EDGEdeck looks for the game in every Steam library Steam knows about, then in GOG and Epic. You only see **Find the game folder** if all of that fails. If you pick `bin` or `bin\x64` by mistake, EDGEdeck works out the right folder.

The status bar at the bottom of VS Code always shows EDGEdeck's state in one line: how many mods are on, whether a deploy is waiting, or that the game wasn't found. Clicking it deploys, or opens the folder picker if the game is missing.

### Getting REDbridge

**Get REDbridge** asks once, saying what it will download, then fetches the latest REDbridge release (about 70 MB) into EDGEdeck's own folder. If your PC has no .NET 10 runtime, it installs one for your user account only. Nothing else needs configuring.

After that, EDGEdeck checks once a day for a newer REDbridge and offers it. **Update REDbridge** in the command palette checks straight away and removes the old version after updating. The EDGEdeck page's footer shows which REDbridge is running, with a green dot.

### Nexus sign-in

See [Nexus Mods](https://edgemodders.ai/wiki/edgedeck/nexus.html) for the details. In short: **Sign in to Nexus Mods** either opens Nexus in your browser, or, until Nexus has registered EDGEdeck, opens your API Access page so you can create a personal key and paste it in. Both work the same way afterwards.

### Coming from Vortex

Follow [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html). The one rule: only one manager can have mods deployed at a time, so you purge in Vortex before you deploy in EDGEdeck.

## Where EDGEdeck keeps things

Your mods go in a **library** folder, `%USERPROFILE%\EDGEdeck` by default. For deploys to cost no extra disk space, the library should be on the same drive as the game. If your game is on another drive, set `edgedeck.libraryPath` to a folder on that drive before you add mods. See [Library, disk space and loadouts](https://edgemodders.ai/wiki/edgedeck/library.html).

## Next steps

1. Add the frameworks most mods need (RED4ext, Cyber Engine Tweaks, redscript, ArchiveXL, TweakXL, Codeware). See [Frameworks and game patches](https://edgemodders.ai/wiki/edgedeck/frameworks.html).
2. [Add a mod](https://edgemodders.ai/wiki/edgedeck/adding-mods.html), tick it, and [deploy](https://edgemodders.ai/wiki/edgedeck/deploying.html).
3. Press **Run game**, the play button in the Mods view's title bar, to start the game with your mods.

## Updating EDGEdeck

Installed from the Marketplace or Open VSX, EDGEdeck updates like any other extension: VS Code fetches new versions by itself unless you turned automatic updates off. Each version's changes are in EDGEdeck's [changelog](https://github.com/Edgemodders/EDGEdeck/blob/main/CHANGELOG.md) and on its [releases page](https://github.com/Edgemodders/EDGEdeck/releases). If you installed from a `.vsix` file, install the newer file the same way. Your library, settings and Nexus sign-in stay either way.

## Uninstalling

1. Press **Undo deploy** in EDGEdeck. This takes every file EDGEdeck placed out of the game folder, and puts back anything it moved aside.
2. Uninstall the extension from VS Code's Extensions view.
3. If you don't want your mods any more, delete the library folder (`%USERPROFILE%\EDGEdeck` unless you moved it). Otherwise keep it: reinstalling EDGEdeck picks it up again.
