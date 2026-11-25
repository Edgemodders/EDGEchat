<!-- Copied from EDGEweb's docs/wiki/edgemat/install.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/install.html (reviewed 2026-11-13) -->

# Install and set up EDGEmat

EDGEmat is an extension for VS Code, the free code editor from Microsoft. You don't write code in it: EDGEmat adds its own panels and buttons.

**The short way,** if you start from nothing:

1. Install [VS Code](https://code.visualstudio.com/), then [REDcode](https://edgemodders.ai/wiki/redcode/install.html). On its first start REDcode finds your game and offers **Install REDbridge**: press it.
2. Install EDGEmat, as below. It picks up the game folder and REDbridge from REDcode.

Or get the [EDGEkit app](https://edgemodders.ai/wiki/edgekit/install.html), one editor with REDcode, EDGEmat and the other EDGE tools already inside. New to EDGE altogether? Start at [Getting started](https://edgemodders.ai/wiki/getting-started.html).

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgemat/install.html#what-you-need) | The game, VS Code, REDbridge, and what is optional |
| [Install EDGEmat](https://edgemodders.ai/wiki/edgemat/install.html#install-edgemat) | From the Extensions view, and other ways |
| [First start](https://edgemodders.ai/wiki/edgemat/install.html#first-start) | The three views, the first build, and what you should see |
| [Where EDGEmat keeps things](https://edgemodders.ai/wiki/edgemat/install.html#where-edgemat-keeps-things) | And what is safe to delete |
| [Updating and removing](https://edgemodders.ai/wiki/edgemat/install.html#updating-and-removing) | |
| [Next](https://edgemodders.ai/wiki/edgemat/install.html#next) | Your first recolor |

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | Steam, GOG or Epic. EDGEmat reads the game's own files and ships none of them |
| [VS Code](https://code.visualstudio.com/) 1.70 or later | VSCodium and the EDGEkit app work too |
| REDbridge 0.8.0 or later | The small program that reads the game's files for the EDGE tools. The easy way is [REDcode](https://edgemodders.ai/wiki/redcode/install.html#installing-redbridge): its **Install REDbridge** fetches REDbridge and the .NET 10 runtime it runs on, and EDGEmat then uses REDcode's copy |
| Recommended: [REDcode](https://edgemodders.ai/wiki/redcode/) | With REDcode set up, EDGEmat needs no settings at all. REDcode also makes your mod project, packs it for the game, and shows garments in 3D ([View in 3D](https://edgemodders.ai/wiki/edgemat/view-in-3d.html)) |
| To save your changes: a project | A folder that holds your mod's files. REDcode's **New Project** makes one ([Projects](https://edgemodders.ai/wiki/redcode/projects.html#make-a-new-project)). EDGEmat saves into it, and REDcode packs it into a mod ([Your mod in the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html)) |
| To wear the result: [REDnode](https://edgemodders.ai/wiki/rednode/install.html) 0.49.5 or later, in the game | Optional. Its Console gives V the item you changed |
| Optional: an image service key | Only to make materials from words: your own Google Gemini or OpenAI key ([New Material](https://edgemodders.ai/wiki/edgemat/new-material.html)). Recoloring and everything else works without one |
| Some disk space | About 15 MB at first, in `%LOCALAPPDATA%\EDGEmat`. See [Where EDGEmat keeps things](https://edgemodders.ai/wiki/edgemat/install.html#where-edgemat-keeps-things) |

## Install EDGEmat

EDGEmat is on the VS Code Marketplace, published by **Edgemodders**. It is marked **Preview**: it is new, so expect rough edges. It runs on Windows only.

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
| **Open VSX** | Your editor is built on VS Code but uses Open VSX instead of Microsoft's Marketplace, such as VSCodium | Search for `EDGEmat` in the editor's Extensions view, or see [EDGEmat on Open VSX](https://open-vsx.org/extension/edgemodders/edgemat) |
| **The EDGEkit app** | You want one editor with the EDGE tools built in | The [EDGEkit app](https://edgemodders.ai/wiki/edgekit/install.html) comes with EDGEmat, and updates it from Open VSX |
| **A `.vsix` file** | No store access, or you want one exact version | Download `edgemat-<version>.vsix` from the [releases page](https://github.com/Edgemodders/EDGEmat/releases). In the Extensions view, press the **`...`** menu at the top right, choose **Install from VSIX...** and pick the file. Or run `code --install-extension edgemat-<version>.vsix` |

## First start

An EDGEmat icon appears in the activity bar, the strip of icons down the far left edge of VS Code. It shows two corner brackets around a stack of layers. Click it. EDGEmat's sidebar has three views, top to bottom:

| View | What it is |
|---|---|
| **Desk** | Garments you are working on, with your edits, until they go into a project. Empty at first. See [The Desk](https://edgemodders.ai/wiki/edgemat/desk.html) |
| **Game Materials** | Every surface and detail pattern in your game. See [Game Materials](https://edgemodders.ai/wiki/edgemat/game-materials.html) |
| **Find** | Garments by their in-game name. Often folded at the bottom of the sidebar: click its **FIND** header to open it. See [Find](https://edgemodders.ai/wiki/edgemat/find.html) |

(Screenshot on the wiki, "EDGEmat's sidebar on first start": The activity bar with the EDGEmat icon highlighted, the empty Desk, the Game Materials view building its list with a progress bar, and the collapsed FIND header below it.)

### Game Materials builds itself

The first time, EDGEmat builds its list of game materials from your game: every surface (about 390) with all its colors, every microblend (about 130), and a small picture of each. It takes under half a minute, and you don't have to do anything.

| What you should see | |
|---|---|
| While it builds | A progress line in the Game Materials view |
| When it is done | Categories such as **fabric**, **metal** and **plastic**, a **Microblends** group, and a line at the top such as "386 surfaces · 131 microblends · built 2026-10-19" |

After that the list opens instantly. EDGEmat builds it again by itself when a game update changes the game's files.

### If EDGEmat can't find the game or REDbridge

EDGEmat looks for the game in this order: its own setting, REDcode's game folder, [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/)'s, then the usual Steam, GOG and Epic folders. It accepts a folder only if `bin\x64\Cyberpunk2077.exe` is inside it.

| You see | Do this |
|---|---|
| "EDGEmat needs your Cyberpunk 2077 folder", with a **Set Game Folder** button | Press it and pick the folder that contains `bin`, `archive` and `r6` |
| "EDGEmat reads the game through REDbridge, which was not found" | Install [REDcode](https://edgemodders.ai/wiki/redcode/install.html) and run its **Install REDbridge**. Then press **Rebuild Game Materials**, the refresh icon in the Game Materials title bar |
| Game Materials fills with categories | You're set |

More cases are in [Troubleshooting](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#setting-up).

### Try it: look up a garment

1. Click the **FIND** header, then **Find...**.
2. Type `sunny ammo` and press Enter.
3. Open **Sunny Ammo synthetic high-tops**, then click the material with a stacked-sheets icon under one of its meshes.

| What you should see | |
|---|---|
| After step 2 | A line `"sunny ammo": 3 items, 0 meshes` and an **Items** group. The first search takes a few seconds while EDGEmat reads the game's clothing list |
| After step 3 | A tab with the sneakers' layers in plain words on the right, and a color map on the left |

Nothing is changed by looking. Close the tab when you're done.

## Where EDGEmat keeps things

Everything EDGEmat stores is in `%LOCALAPPDATA%\EDGEmat`, on your PC only. Paste that into File Explorer's address bar to open it.

| In the folder | What it is | Safe to delete? |
|---|---|---|
| The list of game materials and their pictures | Built from your game. It grows a little as you open more pages | Yes. EDGEmat builds it again on its next start |
| `desk` | The [Desk](https://edgemodders.ai/wiki/edgemat/desk.html): garments you put there, with the edits you have not added to a project yet | **No, unless you want to lose those edits.** Clear the Desk from inside EDGEmat instead |
| `mcp` | The program AI assistants use to reach EDGEmat ([Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html)) | Yes. EDGEmat puts it back the next time it starts |

So don't delete the whole folder to "start fresh" while you have work on the Desk. Your projects are not in this folder and are never touched.

## Updating and removing

Installed from the Marketplace or Open VSX, EDGEmat updates like any other extension: VS Code fetches new versions by itself unless you turned automatic updates off. If you installed from a `.vsix` file, install the newer file the same way. Game Materials, the Desk and your settings stay either way.

To remove EDGEmat, uninstall it in the Extensions view, or run `code --uninstall-extension edgemodders.edgemat`. That leaves `%LOCALAPPDATA%\EDGEmat` behind: delete it by hand if you want it gone.

## Next

1. Follow [Tutorial: recolor a jacket](https://edgemodders.ai/wiki/edgemat/tutorial-recolor.html): about 20 minutes, no key needed.
2. Then make a material from words: [Tutorial: worn leather](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html).
3. Or let Claude do the work: [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html).
