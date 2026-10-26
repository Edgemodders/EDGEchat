<!-- Copied from EDGEweb's docs/wiki/rednode/install.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/install.html (reviewed 2026-10-26) -->

# Install and set up REDnode

REDnode comes as one zip, laid out like the game folder, so you can install it with Vortex, [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or by hand. The current release is **0.40.1**, for **game version 2.5**. On a game kept on 2.31, use **0.37.0**, the last release for 2.31: RED4ext won't load a 2.5 build on 2.31, nor 0.37.0 on 2.5.

If the steps below look like too much, ask on [Discord](https://discord.gg/63qP3Erw43): someone can walk you through it.

## What you need

### In the game

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows, **version 2.5** | Tested on Steam. For 2.31, REDnode 0.37.0 |
| [RED4ext](https://github.com/WopsS/RED4ext/releases) | Required. It loads REDnode into the game. 1.31 or later for game 2.5 |
| [redscript](https://github.com/jac3km4/redscript/releases) | Required. REDnode adds a few small scripts to the game |
| [Codeware](https://github.com/psiberx/cp2077-codeware) | Optional. Only packages that place objects in the world (1.14 or later) or draw the game's own UI (the Ink samples ask for 1.16 or later) need it |
| [TweakXL](https://github.com/psiberx/cp2077-tweak-xl) 1.10 or later | Optional. Only packages that change TweakDB need it |
| [RED Hot Tools](https://github.com/psiberx/cp2077-red-hot-tools/releases) 1.3 or later | Optional. Only packages that swap archives into the running game need it. The [Edgemodders build](https://github.com/CyberbuildsAI/cp2077-red-hot-tools/releases) fixes swaps of archives with mixed-case names, which REDnode otherwise refuses |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Optional. Only packages that read the game's archives need it. The Mod Manager's **Get REDbridge** button installs it for you; a copy [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html#getting-redbridge) or REDcode downloaded works too |

You can install RED4ext, redscript, Codeware, TweakXL and RED Hot Tools with [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or another mod manager. Match their versions to your game version. A package that needs one of them tells you in the Mod Manager.

### On your PC

| You need | Notes |
|---|---|
| About 16 GB of RAM | The game alone takes 12 to 16 GB. REDnode adds roughly 60 to 100 MB for each open window and about 100 MB for each Node mod process. On a 16 GB PC, close other programs before you play |
| Disk space | In the game folder, REDnode takes about 320 MB, most of it the overlay host |

You don't need Node.js or any developer tools: REDnode brings its own.

## Install the release

1. **Download** `REDnode-<version>.zip` from [REDnode's releases](https://github.com/Edgemodders/REDnode/releases). The same page has the optional packs (`REDnode-Admin-Tools-...zip`, `REDnode-Sound-Tools-...zip`); you don't need them to start.
2. **Close the game.**
3. **Install the zip** in one of these ways:
    - Add it to Vortex or [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/adding-mods.html) and deploy, like any other mod.
    - Or extract it into your Cyberpunk 2077 folder, the one with `bin` and `archive` in it. It adds `red4ext\plugins\REDnode`.
4. **Start the game.** See [First start](https://edgemodders.ai/wiki/rednode/install.html#first-start).

An optional pack installs the same way, after REDnode. Its apps land in REDnode's apps folder.

### What goes into the game

Everything lands in one folder, `red4ext\plugins\REDnode` inside the game folder:

| Item | What it is |
|---|---|
| `REDnode.dll` | The plugin. RED4ext loads it when the game starts |
| `Scripts\` | REDnode's small redscript parts |
| `host\` | The overlay host, `REDnode-overlay.exe`. The plugin starts it with the game and it closes with the game. You never start it yourself |
| `apps\` | The **apps folder**: every REDnode package lives here, each in a folder of its own. The release puts REDnode's sample apps and mods here, all switched off |
| `README.txt`, `LICENSE.txt`, `THIRD-PARTY-NOTICES.txt` | What REDnode is, and the licences |

REDagent and the optional packs install into the same apps folder, after REDnode. See [REDagent](https://edgemodders.ai/wiki/redagent/).

## First start

1. Start the game the normal way. Don't start anything else: the plugin starts REDnode's overlay host by itself.
2. The first time, a **Welcome** window explains the basics. It shows once. Note its warning: **F9**, right beside F10, is the game's Quick Load.
3. A small **REDNODE** tab appears at the lower left, with a count: open packages out of all packages.
4. Press **F10** to make the windows take the mouse, then click the tab to open the launcher. See [Using the overlay](https://edgemodders.ai/wiki/rednode/overlay.html).
5. The samples start switched off. Open the **Mod Manager**, the first entry in the launcher, and switch on the ones you want to try, such as **Hello mod**, **Vitals** or the **UI kit**. Press **Pin to launcher** on any you want one click away.

(Screenshot on the wiki, "The first start": The main menu with the Welcome window and the REDNODE tab at the lower left.)

The release's samples are Hello mod, Ask mod, UI kit, Vitals, Coords HUD, Perf, Test timer, Ink Coords, Ink vitals and Quest test. They are there to try things and to learn from. The Ink samples need Codeware.

### Check it worked

| Look at | You should see |
|---|---|
| The REDNODE tab | At the lower left of the main menu. Click it after pressing F10: the launcher says **GAME LINKED** and shows the version at the bottom, such as **Version 0.37.0** |
| `red4ext\logs\red4ext-*.log` | A line saying REDnode `has been loaded` |
| `red4ext\logs\rednode-overlay.log` | The host's log, starting with `REDnode overlay host 0.37.0` |

If the tab doesn't appear, see [Troubleshooting](https://edgemodders.ai/wiki/rednode/troubleshooting.html).

## Where REDnode keeps things

| What | Where |
|---|---|
| Packages (apps and mods) | `red4ext\plugins\REDnode\apps` in the game folder |
| Your choices: which packages are on, pins, spaces, theme, window positions, permissions | The host's settings, in `%APPDATA%\@rednode\overlay` |
| Each package's own data, and secrets such as an API key | In the same folder. Secrets are encrypted with your Windows account |
| REDbridge, when the Mod Manager's **Get REDbridge** installed it | `%LOCALAPPDATA%\REDnode\bridge` |
| Logs | `red4ext\logs` in the game folder: `rednode-overlay.log` (the host; the last session's is kept as `rednode-overlay.prev.log`), `rednode-mods.log` (what Node mods print) |

Your settings and packages' data are kept outside the game folder, so they survive updates.

## Updating REDnode

1. Close the game.
2. Download the new zip from [REDnode's releases](https://github.com/Edgemodders/REDnode/releases) and install it as before: update it in Vortex or EDGEdeck, or extract it over the old one.

This replaces REDnode's own files and the samples. Other packages in the apps folder, REDagent's included, stay, and so do your settings. The launcher shows the new version at the bottom.

Before you update the game itself, check that REDnode supports the new game version. Today that is 2.5 (REDnode 0.38.1 or later).

## Removing REDnode

With the game closed, remove it in Vortex or EDGEdeck, or delete the `red4ext\plugins\REDnode` folder.

Deleting that folder deletes the **apps folder too**, with REDagent and any packages you made. Copy out anything you want to keep first. Your settings in `%APPDATA%\@rednode\overlay` stay; delete that folder too if you want REDnode completely gone.

## Building from source

Only for working on REDnode itself. REDnode's [developer setup](https://edgemodders.github.io/REDnode/dev-setup.html) has the exact commands and versions for every tool. In outline:

| You need | Notes |
|---|---|
| Git | To download REDnode's source |
| Node.js 24 | The developer uses nvm for Windows to install it |
| Visual Studio 2022 Build Tools, with the C++ workload | To build the plugin. A download of several GB; its install shows an admin prompt and takes 10 to 20 minutes |

1. Clone `https://github.com/Edgemodders/REDnode`, open a terminal in that folder and run `npm install`.
2. Build the plugin with `.\tools\build-native.ps1`, and the overlay host with `npm run overlay:package`.
3. Close the game and copy everything into it with `.\tools\deploy-native.ps1`. If your game isn't in the default Steam folder, add `-GameDir 'D:\Games\Cyberpunk 2077'` with your folder. The script refuses to run while the game is open, and stops if it can't find RED4ext.

`.\tools\deploy-native.ps1 -Remove` deletes the whole `red4ext\plugins\REDnode` folder, apps folder included. `npm run release:zip` makes the same zip as a release.
