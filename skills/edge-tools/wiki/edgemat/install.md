<!-- Copied from EDGEweb's docs/wiki/edgemat/install.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/install.html (reviewed 2026-10-24) -->

# Install and set up EDGEmat

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | Steam, GOG or Epic. EDGEmat reads the game's own files; it ships none |
| [VS Code](https://code.visualstudio.com/) 1.70 or later | EDGEmat is a VS Code extension. VSCodium and EDGEkit work too |
| REDbridge 0.8.0 or later | The engine that reads the game's files. The easy way is [REDcode](https://edgemodders.ai/wiki/redcode/): its **Install REDbridge** fetches REDbridge and the .NET 10 runtime it needs, and EDGEmat then uses REDcode's copy |
| Recommended: [REDcode](https://edgemodders.ai/wiki/redcode/) | With REDcode set up, EDGEmat needs no configuration at all: it takes REDcode's game folder and its running REDbridge. [View in 3D](https://edgemodders.ai/wiki/edgemat/view-in-3d.html) needs REDcode |
| To save your changes: a WolvenKit project | REDcode's **New Project** makes one. EDGEmat saves into REDcode's open project, and REDcode packs it for the game ([Your mod in the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html)) |
| Optional: an image service key | Only to generate materials from words: your own Google Gemini or OpenAI key ([New Material](https://edgemodders.ai/wiki/edgemat/new-material.html)). Everything else works without one |
| Some disk space | About 15 MB for the material library EDGEmat builds from your game, in `%LOCALAPPDATA%\EDGEmat`, growing a little as you open pages and setups (their images are kept there too). Safe to delete; EDGEmat builds it again |

## Install EDGEmat

EDGEmat is on the VS Code Marketplace, published by **Edgemodders** and marked **Preview** (young, and Windows only).

1. In VS Code, open the **Extensions** view (`Ctrl+Shift+X`).
2. Search for `EDGEmat`.
3. Pick **EDGEmat** by Edgemodders and press **Install**.

The same listing is on the web: [EDGEmat on the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgemat). If you prefer a terminal:

```powershell
code --install-extension edgemodders.edgemat
```

(Screenshot on the wiki, "EDGEmat in the Extensions view": VS Code's Extensions view after searching EDGEmat: the EDGEmat listing by Edgemodders with its Preview badge and the Install button.)

### Other ways to install

| Way | When | How |
|---|---|---|
| **Open VSX** | Editors built on VS Code that use Open VSX instead of Microsoft's Marketplace, such as VSCodium | Search for `EDGEmat` in the editor's Extensions view, or see [EDGEmat on Open VSX](https://open-vsx.org/extension/edgemodders/edgemat) |
| **The EDGEkit app** | You want one editor with the EDGE tools built in | [EDGEkit](https://edgemodders.ai/wiki/edgekit/#get-the-app) 1.140.1 comes with EDGEmat 0.3.1, which then updates itself from Open VSX |
| **A `.vsix` file** | No store access, or you want one exact version | Download `edgemat-<version>.vsix` from the [releases page](https://github.com/Edgemodders/EDGEmat/releases). In the Extensions view, press the **`...`** menu at the top right, choose **Install from VSIX...** and pick the file. Or run `code --install-extension edgemat-<version>.vsix` |

Installed from the Marketplace or Open VSX, EDGEmat updates like any other extension: VS Code fetches new versions by itself unless you turned automatic updates off. Each version's changes are in EDGEmat's [changelog](https://edgemodders.github.io/EDGEmat/changelog.html) and on the [releases page](https://github.com/Edgemodders/EDGEmat/releases). If you installed from a `.vsix` file, install the newer file the same way. Your library and settings stay either way.

To remove EDGEmat, uninstall it in the Extensions view, or run `code --uninstall-extension edgemodders.edgemat`.

## First start

An EDGEmat icon appears in the activity bar on the left of VS Code: two corner brackets around a stack of layers. Click it. EDGEmat's sidebar has two views:

| View | What it is |
|---|---|
| **Library** | Every surface and detail texture in your game. See [The Library](https://edgemodders.ai/wiki/edgemat/library.html) |
| **Find** | Below the Library, often collapsed at the bottom of the sidebar: click its **FIND** header to open it. See [Find](https://edgemodders.ai/wiki/edgemat/find.html) |

(Screenshot on the wiki, "EDGEmat's sidebar on first start": The activity bar with the EDGEmat icon highlighted, the Library view building its library with a progress bar, and the collapsed FIND header below it.)

### The library builds itself

The first time, EDGEmat builds its material library from your game: every surface (about 390) with all its colors, every detail texture (about 130), and a thumbnail for each. It shows progress in the Library view and takes under half a minute. After that the library opens instantly, and EDGEmat rebuilds it on its own when a game update changes the archives.

### Finding the game and REDbridge

EDGEmat looks for the game in this order: its own setting, REDcode's game folder, then the usual Steam, GOG and Epic folders. It takes a folder only when it holds `bin\x64\Cyberpunk2077.exe`.

| You see | Do this |
|---|---|
| "EDGEmat needs your Cyberpunk 2077 folder" with a **Set Game Folder** button | Press it and pick the folder that contains `bin`, `archive` and `r6` |
| "EDGEmat reads the game through REDbridge, which was not found" | Install [REDcode](https://edgemodders.ai/wiki/redcode/) and run its **Install REDbridge**, or point the `edgemat.bridgePath` setting at `REDbridge.exe`. Then press **Rebuild Library** |
| The Library fills with categories | You're set |

When REDcode is running with the same game, EDGEmat uses REDcode's REDbridge rather than starting a second one. **Show Log** (in the Library's **`...`** menu) says which: "Using REDcode's REDbridge", or "Starting REDbridge from ...".

## Next

- Browse the [Library](https://edgemodders.ai/wiki/edgemat/library.html), or go straight to [Find](https://edgemodders.ai/wiki/edgemat/find.html) and type a garment's name.
- Connect Claude: [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html).
