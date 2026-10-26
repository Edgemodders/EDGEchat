<!-- Copied from EDGEweb's docs/wiki/redcode/install.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/install.html (reviewed 2026-10-24) -->

# Install and set up REDcode

## What you need

| You need | Notes |
|---|---|
| Windows | REDcode is built for Windows 64-bit only, because REDbridge and the game are |
| Cyberpunk 2077 | Steam, GOG or Epic. REDcode finds all three on its own |
| [VS Code](https://code.visualstudio.com/) 1.70 or later | REDcode is a VS Code extension. It's also on Open VSX, the store editors such as VSCodium use |
| The .NET 10 runtime | REDbridge runs on it. If it's missing, REDcode says so and offers to install it |
| REDbridge 0.10.0 or later | REDcode downloads it for you on first start |
| Optional: [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | So Install puts your mod in the game through EDGEdeck, with its undo. Any EDGEdeck release works. The old REDdeck isn't used: REDcode then installs directly |
| Optional: [Blender](https://www.blender.org/) | Only for **Edit in Blender**. REDcode finds it in Program Files or a Steam library |
| Optional: Node.js 20 or later | Only for `redcode-mcp`, the server for AI assistants. See [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html) |

## Install REDcode

REDcode is on the VS Code Marketplace and on Open VSX. It's marked **Preview**: what's there is tested, and new features arrive in small updates.

1. In VS Code, open the **Extensions** view (`Ctrl+Shift+X`).
2. Search for **REDcode for Cyberpunk 2077**. The publisher is **Edgemodders**.
3. Press **Install**.

From a terminal:

```powershell
code --install-extension edgemodders.redcode-cyberpunk
```

A REDcode icon appears in the activity bar on the left of VS Code. Click it to open the REDcode sidebar.

The same `.vsix` file is attached to each release on the [REDcode releases page](https://github.com/Edgemodders/REDcode/releases), if you need to install by hand: in the Extensions view, press **`...`**, then **Install from VSIX...**.

> **Search for "REDcode for Cyberpunk 2077", not just "REDcode".** Another extension called Redcode is for an old programming game, Core War, and has nothing to do with Cyberpunk.

(Screenshot on the wiki, "REDcode in the Extensions view": VS Code's Extensions view with REDcode for Cyberpunk 2077 by Edgemodders found, showing the Preview label and the Install button.)

### Coming from an older REDcode

REDcode changed its id twice before it reached the Marketplace. If you installed it from a file before October 2026, you may have **REDcode Core** or the older **REDcode** (`edgemodders.redcode`). VS Code treats each id as a different extension.

1. Install REDcode for Cyberpunk 2077 as above.
2. Uninstall the old one from the Extensions view, then reload the window.
3. If REDcode had downloaded REDbridge for you, run **REDcode: Install REDbridge** once more. Its download folder moved with the new id.

Your settings and keybindings carry over, because their names all start with `redcode.`. If the old one is still loaded, REDcode says so and offers **Show It** and **Reload Window**.

## First start

The first time REDcode starts, it does two things.

### Finding the game

REDcode looks for Cyberpunk 2077 in every Steam library, in GOG and in the Epic launcher, and asks:

> REDcode found Cyberpunk 2077 at ... Use it?

Press **Use It**. If it found more than one install, or the wrong one, **Choose Another...** lists them all or lets you browse. If EDGEdeck is running, REDcode offers the game folder EDGEdeck uses.

You can change it any time with **REDcode: Set Game Folder**, which is also a button in the empty Game Assets view. The folder you pick must contain `bin\x64\Cyberpunk2077.exe`.

### Installing REDbridge

REDbridge is the small program that runs WolvenKit's engine for REDcode. When REDcode can't find it, it asks:

> REDcode needs REDbridge, the local process that hosts WolvenKit's engine. Install the latest release?

Press **Install REDbridge**. REDcode downloads the latest release from GitHub into its own storage folder and points `redcode.bridgePath` at it. There is nothing to type.

If your PC has no .NET 10 runtime, REDbridge can't start. REDcode says so and offers **Install with winget**, which runs the install in a terminal, or **Download page**. When winget has finished, run **REDcode: Restart REDbridge**.

### When it's ready

The status bar at the bottom of VS Code shows REDcode's state: the open project's name, and the bridge's version and how many game files it indexed. Click it to open REDcode's log. The Game Assets view now shows the game's archives as folders.

(Screenshot on the wiki, "REDcode ready": The REDcode status bar item with a project name, the REDbridge version and the indexed file count, and the Game Assets view showing the top folders of the game's archives.)

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
