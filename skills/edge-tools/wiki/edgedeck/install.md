<!-- Copied from EDGEweb's docs/wiki/edgedeck/install.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/install.html (reviewed 2026-11-13) -->

# Install and set up EDGEdeck

EDGEdeck is an **extension**: an add-on for [VS Code](https://code.visualstudio.com/), a free editor from Microsoft. You install VS Code, add EDGEdeck to it, and go through a few set-up steps. You don't need to code. Allow about ten minutes.

> **Have the EDGEkit app?** [EDGEkit](https://edgemodders.ai/wiki/edgekit/) is EDGE's own editor and has EDGEdeck built in. Skip to [The Set up steps](https://edgemodders.ai/wiki/edgedeck/install.html#the-set-up-steps).

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgedeck/install.html#what-you-need) | The game, an editor, some disk space |
| [Install EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html#install-edgedeck) | In VS Code, and [other ways](https://edgemodders.ai/wiki/edgedeck/install.html#other-ways-to-install) |
| [The Set up steps](https://edgemodders.ai/wiki/edgedeck/install.html#the-set-up-steps) | What each one does and whether you need it |
| [Where EDGEdeck keeps things](https://edgemodders.ai/wiki/edgedeck/install.html#where-edgedeck-keeps-things) | Your mod library |
| [Updating](https://edgemodders.ai/wiki/edgedeck/install.html#updating-edgedeck), [Uninstalling](https://edgemodders.ai/wiki/edgedeck/install.html#uninstalling) | |

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | From Steam, GOG or Epic. EDGEdeck finds all three on its own |
| [VS Code](https://code.visualstudio.com/) 1.80 or later, or the [EDGEkit app](https://edgemodders.ai/wiki/edgekit/install.html) | Both are free. Any VS Code installed this year is new enough |
| Disk space for your mods | EDGEdeck keeps one copy of each mod. If that copy is on the same drive as the game, putting it in the game costs no extra space |
| Optional: a free [Nexus Mods](https://www.nexusmods.com/cyberpunk2077) account | Needed to download mods from Nexus at all. In EDGEdeck it adds update checks and one-click downloads |
| Optional: about 70 MB for REDbridge | The EDGE tool that reads inside mod archives, so EDGEdeck can show more conflicts. EDGEdeck downloads it for you |

## Install EDGEdeck

1. Open VS Code.
2. Open the **Extensions** view: click the icon of four squares in the **activity bar** (the strip of icons down the far left edge of the window), or press `Ctrl+Shift+X`.
3. Type `EDGEdeck` in the search box.
4. Pick **EDGEdeck** by **Edgemodders** and press **Install**. It is marked **Preview**, which means young.

**What you should see:** a new EDGEdeck icon in the activity bar. Click it. The **Mods** view opens beside it and says **No mods yet**, with a button for each thing you can do next.

(Screenshot on the wiki, "The EDGEdeck icon and an empty Mods view": VS Code's activity bar with the EDGEdeck icon highlighted, and the Mods view on first start: the No mods yet text with its Add mod button and the set-up buttons under it.)

EDGEdeck is not a game mod. Never install it with Vortex or another mod manager.

### Other ways to install

| Way | When | How |
|---|---|---|
| **The EDGEkit app** | You want one editor with the EDGE tools built in | The [EDGEkit app](https://edgemodders.ai/wiki/edgekit/install.html) comes with EDGEdeck, which then updates itself |
| **Open VSX** | Editors built on VS Code that use the Open VSX store, such as VSCodium | Search for `EDGEdeck` in the editor's Extensions view, or see [EDGEdeck on Open VSX](https://open-vsx.org/extension/edgemodders/edgedeck) |
| **From the web** | You like to read the listing first | [EDGEdeck on the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgedeck) |
| **A terminal** | You prefer typing | `code --install-extension edgemodders.edgedeck` |
| **A `.vsix` file** | No store access, or you want one exact version | Download `edgedeck-<version>.vsix` from the [releases page](https://github.com/Edgemodders/EDGEdeck/releases). In the Extensions view, press the **`...`** menu at the top right, choose **Install from VSIX...** and pick the file. Then press `Ctrl+Shift+P`, type `Developer: Reload Window` and press Enter |

## The Set up steps

EDGEdeck lists what it still needs, or can use, as **Set up** steps. Each one is a button that does the step for you.

Where you find them depends on whether you have any mods yet:

| Your list | Where the steps are |
|---|---|
| Empty | As buttons under **No mods yet** in the Mods view |
| At least one mod | As rows in a **Set up** group at the top of the Mods view. A row disappears when its step is done, and the **x** on a row hides a step you don't want |
| Either | Press `Ctrl+Shift+P`, type `EDGEdeck: Set up` and press Enter. This lists every step, done or not, and brings hidden ones back |

`Ctrl+Shift+P` opens the **command palette**: a search box for every command in the editor.

Two words first. EDGEdeck keeps your mods in a folder of its own, the **library**, outside the game. **Deploy** is the button that puts the mods you switched on into the game.

| Step | What it does | Needed? |
|---|---|---|
| **Find the game folder** | Appears only if EDGEdeck can't find Cyberpunk 2077 on its own. Pick the game's folder, the one that contains `bin`, `archive` and `r6` | Yes, if shown |
| **Move the library to the game's drive** | Appears when your library and the game are on different drives. In that case every mod takes up disk space twice, once in the library and once in the game. Moving the library avoids that. See [Moving the library](https://edgemodders.ai/wiki/edgedeck/library.html#moving-the-library) | No, but saves disk space |
| **Get the frameworks** | Appears while one of the six frameworks most mods need is missing. Gets them in one go. See [Frameworks](https://edgemodders.ai/wiki/edgedeck/frameworks.html#getting-the-frameworks). With an empty list, find it in the Mods view's **`...`** menu | Most mods need them |
| **Get REDbridge** | Downloads REDbridge, so EDGEdeck can see conflicts inside mod archives. See [Getting REDbridge](https://edgemodders.ai/wiki/edgedeck/install.html#getting-redbridge) | Recommended |
| **Sign in to Nexus Mods** | For update checks and downloads from Nexus. See [Signing in](https://edgemodders.ai/wiki/edgedeck/nexus.html#signing-in) | Optional |
| **Handle Nexus download links** | Makes the **Mod manager download** button on Nexus send files to EDGEdeck. You can do this before you sign in. See [Download links](https://edgemodders.ai/wiki/edgedeck/nexus.html#download-links) | Optional |
| **Import from Vortex** | Appears only when Vortex has Cyberpunk mods that EDGEdeck doesn't have yet. Follow [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html) | Optional |

(Screenshot on the wiki, "The Set up group": The Set up group at the top of the Mods view, with the Get REDbridge, Sign in to Nexus Mods and Import from Vortex rows.)

### Finding the game

Every time it starts, EDGEdeck looks for the game in every Steam library, then in GOG and Epic. You only see **Find the game folder** if all of that fails. If you pick `bin` or `bin\x64` by mistake, EDGEdeck works out the right folder.

The command palette calls the same step **Pick the game folder...**. Use it to point EDGEdeck at another copy of the game.

### Getting REDbridge

[REDbridge](https://edgemodders.ai/wiki/redbridge/) is the EDGE tool that reads inside game archives. **Get REDbridge** asks once, saying what it will download, then fetches the latest REDbridge (about 70 MB) into EDGEdeck's own folder. REDbridge needs .NET 10, a free Microsoft component. If your PC doesn't have it, EDGEdeck installs it for your Windows user only. Nothing else needs configuring.

After that, EDGEdeck checks once a day for a newer REDbridge and offers it. **Update REDbridge** in the command palette checks straight away. To see that it's running, open the EDGEdeck page (the first button in the Mods view's title bar): its footer names the REDbridge in use, with a green dot.

## Where EDGEdeck keeps things

Your mods go in the **library** folder, `%USERPROFILE%\EDGEdeck` by default (for most people, `C:\Users\<your name>\EDGEdeck`). The game folder only gets the files of the mods you switched on.

If the library is on the same drive as the game, those files cost no extra disk space. If your game is on another drive, use **Move the library to the game's drive**. See [Library and disk space](https://edgemodders.ai/wiki/edgedeck/library.html).

## Next: your first mod

EDGEdeck is ready. [Your first mod](https://edgemodders.ai/wiki/edgedeck/first-mod.html) takes you from this empty list to a mod working in the game.

## Updating EDGEdeck

EDGEdeck updates like any other extension: VS Code and EDGEkit fetch new versions by themselves, unless you turned automatic updates off. Each version's changes are in EDGEdeck's [changelog](https://github.com/Edgemodders/EDGEdeck/blob/main/CHANGELOG.md). If you installed from a `.vsix` file, install the newer file the same way. Your library, settings and Nexus sign-in stay either way.

## Uninstalling

1. Press **Undo deploy** in EDGEdeck (in the Mods view's **`...`** menu). This takes every file EDGEdeck placed out of the game folder, and puts back anything it moved aside.
2. Uninstall the extension from the Extensions view.
3. If you don't want your mods any more, delete the library folder (`%USERPROFILE%\EDGEdeck` unless you moved it). Otherwise keep it: reinstalling EDGEdeck picks it up again.
