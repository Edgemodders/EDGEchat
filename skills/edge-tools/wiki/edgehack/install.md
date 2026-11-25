<!-- Copied from EDGEweb's docs/wiki/edgehack/install.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgehack/install.html (reviewed 2026-11-22) -->

# Install and set up EDGEhack

EDGEhack is an extension for VS Code, not a game mod. You install it in VS Code, and it makes game mods. Allow about ten minutes, most of it downloads.

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgehack/install.html#what-you-need) | To run EDGEhack |
| [What each feature needs](https://edgemodders.ai/wiki/edgehack/install.html#what-each-feature-needs) | Frameworks and REDnode, in one table |
| [Install EDGEhack](https://edgemodders.ai/wiki/edgehack/install.html#install-edgehack) | Three ways, by editor |
| [Where it shows](https://edgemodders.ai/wiki/edgehack/install.html#where-it-shows) | Its icon and three views |
| [Try it](https://edgemodders.ai/wiki/edgehack/install.html#try-it) | Open Overheat. Nothing is changed |
| [Updating](https://edgemodders.ai/wiki/edgehack/install.html#updating), [Uninstalling](https://edgemodders.ai/wiki/edgehack/install.html#uninstalling) | |

## What you need

| You need | Notes |
|---|---|
| Windows, and [VS Code](https://code.visualstudio.com/) 1.90 or later | Or an editor built on it, such as VSCodium or Cursor. The [EDGEkit](https://edgemodders.ai/wiki/edgekit/) app comes with EDGEhack built in |
| Cyberpunk 2077, version 2.5 | EDGEhack reads the quickhacks from your own game |
| [REDcode](https://edgemodders.ai/wiki/redcode/) 0.10.16 or later | EDGE's editor for game files. EDGEhack reads the game through it and saves into its project. REDcode fetches [REDbridge](https://edgemodders.ai/wiki/redbridge/) and .NET 10, the parts that read the game's files, the first time it starts: see [Install and set up REDcode](https://edgemodders.ai/wiki/redcode/install.html) |
| A project open in REDcode | The folder your mod's files go into. No project yet? Run **REDcode: New Project** from the command palette (`Ctrl+Shift+P`): see [Make a new project](https://edgemodders.ai/wiki/redcode/projects.html#make-a-new-project). Without a project you can still read quickhacks and work on the [Desk](https://edgemodders.ai/wiki/edgehack/desk-library.html) |

## What each feature needs

A **framework** is a mod that other mods need. The mods EDGEhack makes need some in the game, and two features need [REDnode](https://edgemodders.ai/wiki/rednode/), EDGE's in-game runtime.

| To do this | You need in the game |
|---|---|
| Play any mod made with EDGEhack | [TweakXL](https://www.nexusmods.com/cyberpunk2077/mods/4197), and [RED4ext](https://www.nexusmods.com/cyberpunk2077/mods/2380), which TweakXL runs on |
| See a name, description or icon of your own | [ArchiveXL](https://www.nexusmods.com/cyberpunk2077/mods/4198) |
| Use a new quickhack on enemies | [redscript](https://www.nexusmods.com/cyberpunk2077/mods/1511). Each mod with a new quickhack includes one small script. Without redscript the new quickhack does not show on enemies |
| Run a quickhack's [script](https://edgemodders.ai/wiki/edgehack/scripts.html) | [REDnode](https://edgemodders.ai/wiki/rednode/install.html) 0.61.1 or later |
| [Try Live](https://edgemodders.ai/wiki/edgehack/try-live.html), and the Console line that gives V a quickhack | REDnode 0.62.4 or later |
| Have REDcode swap icons into the running game | REDnode with its **MCP server** switched on: see [Pack and Play](https://edgemodders.ai/wiki/edgehack/try-live.html#pack-and-play) |
| Draw icons with **Generate** | An OpenAI API key of your own. Each picture is billed to your OpenAI account. Uploading your own pictures needs no key |
| Ask [REDagent](https://edgemodders.ai/wiki/redagent/) for a quickhack in the game | Coming. It needs a REDnode and a REDagent that are not released yet |

All of these REDnode versions are released, so the current REDnode covers them.

**The quick way to get the frameworks:** in [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/), **Get the frameworks...** fetches RED4ext, TweakXL, ArchiveXL and redscript (and two more that many mods need) in one go. Then close the game and deploy. See [Getting the frameworks](https://edgemodders.ai/wiki/edgedeck/frameworks.html#getting-the-frameworks).

**Sharing your mod?** Whoever installs it needs the same rows of this table as you do: TweakXL and RED4ext always, ArchiveXL for your texts and icons, redscript for a new quickhack, REDnode for a script. They don't need EDGEhack, REDcode or VS Code. See [Sharing your mod](https://edgemodders.ai/wiki/redcode/pack-install.html#sharing-your-mod) for what to zip.

## Install EDGEhack

Pick the row for your editor.

| Your editor | How |
|---|---|
| **The EDGEkit app** | Nothing to do: EDGEhack is built in, and it updates itself |
| **VSCodium, Cursor, or another editor that uses Open VSX** | Open the Extensions view (`Ctrl+Shift+X`), search for **EDGEhack** and press **Install**. REDcode is installed with it. Here it updates itself too |
| **VS Code** | From the VS Code Marketplace: search **EDGEhack** in the Extensions view. Or from the download, below |

In VS Code:

1. Install [REDcode](https://edgemodders.ai/wiki/redcode/install.html) from the Extensions view first, if you don't have it.
2. Download `EDGEhack-<version>-nexus.zip` from [EDGEhack's Nexus Mods page](https://www.nexusmods.com/cyberpunk2077/mods/37293), where it is listed as **Quickhack Editor**. Or download `edgehack-<version>.vsix` from the [releases page](https://github.com/Edgemodders/EDGEhack/releases) and skip step 3.
3. Unzip it. Inside is a `.vsix` file, which is the extension.
4. In VS Code, open the Extensions view (`Ctrl+Shift+X`).
5. Click the **`...`** at the top of that view and choose **Install from VSIX...**.
6. Pick the `.vsix` file.

Don't install the download with Vortex or EDGEdeck. It is not a game mod.

**You should see** a new icon in the activity bar, the strip of icons down the left edge of VS Code: a chip with a bolt. If it doesn't appear, run **Developer: Reload Window** from the command palette.

Then open your project in REDcode: **File › Open Folder...** on the project's folder.

## Where it shows

Click EDGEhack's icon in the activity bar. Its side bar has three views:

| View | What it lists |
|---|---|
| **Desk** | Quickhacks you're working on outside a project. Below them, a **Project** group with the quickhacks in the open project |
| **Library** | Quickhacks you keep in the [EDGE Library](https://edgemodders.ai/wiki/library.html), in folders you made |
| **Quickhacks** | The game's own quickhacks. **People** holds the ones V uses on enemies, in the game's four categories (Control Hack, Covert Hack, Damage Hack, Ultimate Hack), each quickhack with its icon and its number of tiers. **Devices** and **Vehicles** hold the rest, which are read-only for now |

(Screenshot on the wiki, "EDGEhack's views": VS Code's activity bar with EDGEhack's chip-and-bolt icon selected, and EDGEhack's side bar: the Desk view with a quickhack or two and a Project group, the Library view, and the Quickhacks view open on People with Control Hack and Damage Hack expanded, each family with its icon and its number of tiers.)

The first time the Quickhacks view opens, EDGEhack reads the game's database, which takes about 15 seconds. After that everything opens at once until VS Code restarts.

Two buttons sit in the Quickhacks view's title bar. **Filter** narrows the list by words, such as `overheat` or `control`. **Refresh** reads the game again: use it after a game patch, or after you install or remove a mod that changes quickhacks.

## Try it

1. Click EDGEhack's icon in the activity bar.
2. In **Quickhacks**, open **People**, then **Damage Hack**.
3. Click **Overheat**.

| What you should see | |
|---|---|
| A new tab | Overheat's icon and name, "Quickhack · Damage Hack · 6 tiers", and the words "The game's own quickhack" |
| A row of tier buttons | Common to Legendary++. Click one to see that tier |
| For the tier you picked | Its name, icons, RAM, upload time, damage, duration and effects in plain words |
| Two buttons | **Edit...** and **Clone and Modify...** |

This page is read-only. Nothing is written anywhere until you press **Edit...** or **Clone and Modify...**. Those are the next two pages: [Change a game quickhack](https://edgemodders.ai/wiki/edgehack/edit-quickhack.html) and [Your first quickhack](https://edgemodders.ai/wiki/edgehack/first-quickhack.html).

If the view stays empty, see [Troubleshooting](https://edgemodders.ai/wiki/edgehack/troubleshooting.html#setting-up).

## Updating

| Installed from | Updates |
|---|---|
| The EDGEkit app, or Open VSX | By itself |
| A `.vsix` in VS Code | Not by itself. Download the new version and install it the same way, over the old one. Your quickhacks are not touched |

The current version is on the [Overview](https://edgemodders.ai/wiki/edgehack/index.html#status). The version you have is on EDGEhack's entry in the Extensions view.

## Uninstalling

In the Extensions view, find **EDGEhack**, click the gear and choose **Uninstall**. What stays behind:

| What | Where | To remove it |
|---|---|---|
| Quickhacks in your projects, and their mod files | In each project | They are yours. A mod you already installed keeps working without EDGEhack |
| Quickhacks on the Desk | `%LOCALAPPDATA%\EDGEhack\desk` | Delete the `EDGEhack` folder there |
| Quickhacks in the EDGE Library | Your Library folder | They are yours, and other EDGE tools share the folder |
| Your OpenAI key | REDcode's Keys, shared with the other EDGE tools | Leave it for the other tools, or use **Remove Key** in REDcode's Keys |
| The connection to Claude Code, if you made one | Claude Code's settings | Run `claude mcp remove --scope user edgehack` in a terminal |
