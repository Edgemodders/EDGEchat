<!-- Copied from EDGEweb's docs/wiki/redcode/install.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/install.html (reviewed 2026-11-22) -->

# Install and set up REDcode

There are two things to do: install the extension, and answer two questions the first time it starts. Allow about ten minutes.

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/redcode/install.html#what-you-need) | Windows, the game, VS Code |
| [Install REDcode](https://edgemodders.ai/wiki/redcode/install.html#install-redcode) | From the Extensions view |
| [First start](https://edgemodders.ai/wiki/redcode/install.html#first-start) | Finding the game, installing REDbridge, and what "ready" looks like |
| [The REDnode HUD theme](https://edgemodders.ai/wiki/redcode/install.html#the-rednode-hud-theme) | Optional: the EDGE look |
| [Updating](https://edgemodders.ai/wiki/redcode/install.html#updating), [Uninstalling](https://edgemodders.ai/wiki/redcode/install.html#uninstalling) | And [coming from an older REDcode](https://edgemodders.ai/wiki/redcode/install.html#coming-from-an-older-redcode) |

> **Using EDGEkit?** REDcode is built into [EDGEkit](https://edgemodders.ai/wiki/edgekit/), so there is nothing to install. Go straight to [First start](https://edgemodders.ai/wiki/redcode/install.html#first-start).

## What you need

| You need | Notes |
|---|---|
| Windows | REDcode is built for Windows 64-bit only, because REDbridge and the game are |
| Cyberpunk 2077 | Steam, GOG or Epic. REDcode finds all three on its own |
| [VS Code](https://code.visualstudio.com/) 1.70 or later | REDcode is a VS Code extension. It's also on Open VSX, the store editors such as VSCodium use |
| The .NET 10 runtime | A free Microsoft component REDbridge runs on. If it's missing, REDcode says so and offers to install it |
| REDbridge 0.18.0 or later | The helper program that reads the game's files. REDcode downloads the newest for you on first start, and offers the update when it needs a newer one |
| Optional: [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | So Install puts your mod in the game through EDGEdeck, with its undo. Recommended if you use any other mods |
| Optional: [Blender](https://www.blender.org/) | Only for **Edit in Blender**. REDcode finds it in Program Files or a Steam library |
| Optional: Node.js 20 or later | Only for `redcode-mcp`, the server for AI assistants. See [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html) |

REDcode is developed and tested on a game with Phantom Liberty. TweakDB has not been checked on a game without it.

## Install REDcode

REDcode is on the VS Code Marketplace and on Open VSX. It's marked **Preview**: what's there is tested, and new features arrive in small updates.

1. In VS Code, open the **Extensions** view (`Ctrl+Shift+X`).
2. Search for **REDcode for Cyberpunk 2077**. The publisher is **Edgemodders**.
3. Press **Install**.

From a terminal:

```powershell
code --install-extension edgemodders.redcode-cyberpunk
```

**You should see** a REDcode icon appear in the activity bar, the strip of icons down the left edge of VS Code.

The same `.vsix` file is attached to each release on the [REDcode releases page](https://github.com/Edgemodders/REDcode/releases), if you need to install by hand: in the Extensions view, press **`...`**, then **Install from VSIX...**.

> **Search for "REDcode for Cyberpunk 2077", not just "REDcode".** Another extension called Redcode is for an old programming game, Core War, and has nothing to do with Cyberpunk.

(Screenshot on the wiki, "REDcode in the Extensions view": VS Code's Extensions view with REDcode for Cyberpunk 2077 by Edgemodders found, showing the Preview label and the Install button.)

## First start

Click the REDcode icon in the activity bar to open the REDcode sidebar. The first time, REDcode asks two things.

### Finding the game

REDcode looks for Cyberpunk 2077 in every Steam library, in GOG and in the Epic launcher, and asks:

> REDcode found Cyberpunk 2077 at ... Use it?

Press **Use It**. If it found more than one install, or the wrong one, **Choose Another...** lists them all or lets you browse. If EDGEdeck is running, REDcode offers the game folder EDGEdeck uses.

You can change it any time with **REDcode: Set Game Folder**, which is also a button in the empty Game Assets view. The folder you pick must contain `bin\x64\Cyberpunk2077.exe`.

### Installing REDbridge

REDbridge is the small program that runs WolvenKit's engine for REDcode. It is not inside the extension: REDcode downloads it. When REDcode can't find it, it asks:

> REDcode needs REDbridge, the local process that hosts WolvenKit's engine. Install the latest release?

Press **Install REDbridge**. REDcode downloads the latest release from GitHub into its own storage folder and remembers where it is. There is nothing to type.

If your PC has no .NET 10 runtime, REDbridge can't start. REDcode says so and offers **Install with winget**, which runs the install in a terminal, or **Download page**. When winget has finished, run **REDcode: Restart REDbridge** from the command palette (`Ctrl+Shift+P`).

### When it's ready

| Look at | You should see |
|---|---|
| The status bar, at the bottom of VS Code | REDcode's item, with REDbridge's version and how many game files it indexed. Click it to open REDcode's log |
| The **Game Assets** view in the REDcode sidebar | The game's files as folders: `base`, `ep1` and so on |
| The **Project** view | **New Project** and **Open Folder** buttons, until you open a project |

If Game Assets stays empty, see [Troubleshooting](https://edgemodders.ai/wiki/redcode/troubleshooting.html#setting-up).

(Screenshot on the wiki, "REDcode ready": The REDcode status bar item with a project name, the REDbridge version and the indexed file count, and the Game Assets view showing the top folders of the game's archives.)

**Next:** make [your first mod](https://edgemodders.ai/wiki/redcode/first-mod.html).

## The REDnode HUD theme

The EDGE tools are drawn for a dark colour theme called **REDnode HUD**: near-black panels, yellow for focus, cyan for links. It's optional, and a separate extension.

1. In the Extensions view, search for **REDnode HUD** (publisher Edgemodders) and install it. It's on the Marketplace and Open VSX.
2. Press `Ctrl+K` then `Ctrl+T` and choose **REDnode HUD**.

A theme can't set fonts. To match the EDGE docs, install [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) and set it as `editor.fontFamily` in VS Code's settings. EDGEdeck's **Suggest the HUD theme** command offers the same theme.

(Screenshot on the wiki, "The REDnode HUD theme": VS Code in the REDnode HUD theme, with a .tweak file open to show the yellow and cyan syntax colours.)

## Updating

**REDcode** updates itself from the Marketplace or Open VSX, like any extension. The [changelog](https://github.com/Edgemodders/REDcode/blob/main/extensions/redcode/CHANGELOG.md) says what changed.

**REDbridge** updates separately. Once per session REDcode asks GitHub whether a newer REDbridge exists and offers **Update REDbridge**. You can also run **REDcode: Update REDbridge** yourself. It stops the bridge, downloads the new one, and starts it again. If a REDcode update needs a newer bridge than you have, the status bar says so and offers the update.

## Uninstalling

1. If you installed a mod with REDcode, **Uninstall** it first (see [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html#uninstall)), so nothing is left in the game folder.
2. Uninstall REDcode from the Extensions view.

Your projects are ordinary folders and stay where they are. They still open in WolvenKit.

## Coming from an older REDcode

This applies only if you installed REDcode from a file before October 2026. REDcode changed its id twice before it reached the Marketplace, so you may have **REDcode Core** or the older **REDcode** (`edgemodders.redcode`). VS Code treats each id as a different extension.

1. Install REDcode for Cyberpunk 2077 as above.
2. Uninstall the old one from the Extensions view, then reload the window.
3. If REDcode had downloaded REDbridge for you, run **REDcode: Install REDbridge** once more. Its download folder moved with the new id.

Your settings and keybindings carry over, because their names all start with `redcode.`. If the old one is still loaded, REDcode says so and offers **Show It** and **Reload Window**.
