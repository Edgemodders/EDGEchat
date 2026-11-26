<!-- Copied from EDGEweb's docs/wiki/rednode/install.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/install.html (reviewed 2026-11-18) -->

# Install and set up REDnode

REDnode comes as one zip, laid out like the game folder, so you can install it with Vortex, [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or by hand. The current release is **0.67.3** (2026-11-18), for **game version 2.5**. Allow about fifteen minutes.

If you kept your game on version 2.31, install REDnode **0.37.0** instead, the last release for 2.31. The two don't mix: a REDnode made for 2.5 won't load on 2.31, and 0.37.0 won't load on 2.5.

If the steps below look like too much, ask on [Discord](https://discord.gg/63qP3Erw43): someone can walk you through it.

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/rednode/install.html#what-you-need) | In the game and on your PC |
| [Install the release](https://edgemodders.ai/wiki/rednode/install.html#install-the-release) | With a mod manager or by hand |
| [First start](https://edgemodders.ai/wiki/rednode/install.html#first-start) | The Welcome window, the REDNODE tab, F10 |
| [Check it worked](https://edgemodders.ai/wiki/rednode/install.html#check-it-worked) | What you should see |
| [Try it: your first widget](https://edgemodders.ai/wiki/rednode/install.html#try-it-your-first-widget) | Switch on a sample and see it while you play |
| [The samples](https://edgemodders.ai/wiki/rednode/install.html#the-samples) | What each one shows |
| [Where REDnode keeps things](https://edgemodders.ai/wiki/rednode/install.html#where-rednode-keeps-things) | Packages, settings, logs |
| [Updating REDnode](https://edgemodders.ai/wiki/rednode/install.html#updating-rednode), [Removing REDnode](https://edgemodders.ai/wiki/rednode/install.html#removing-rednode) | And [building from source](https://edgemodders.ai/wiki/rednode/install.html#building-from-source), for developers |

## What you need

### In the game

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows, **version 2.5** | Tested on Steam. GOG and Epic copies are untested. For 2.31, REDnode 0.37.0 |
| [RED4ext](https://github.com/WopsS/RED4ext/releases) 1.31 or later | Required. RED4ext is the framework that loads plugins such as REDnode into the game |
| [redscript](https://github.com/jac3km4/redscript/releases) | Required. redscript compiles scripts into the game, and REDnode adds a few small scripts of its own |
| [Codeware](https://github.com/psiberx/cp2077-codeware) | Optional. Only packages that place objects in the world (1.14 or later) or work with the game's own UI (the Ink samples and the [UI Tools](https://edgemodders.ai/wiki/rednode/ui-tools.html) pack ask for 1.16 or later) need it |
| [TweakXL](https://github.com/psiberx/cp2077-tweak-xl) 1.10 or later | Optional. Only packages that change TweakDB, the game's database of items and stats, need it |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Optional. Only packages that read the game's files need it. The Mod Manager's **Get REDbridge** button installs it for you; a copy [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html#getting-redbridge) or REDcode downloaded works too |

Most modded games already have RED4ext and redscript. If yours doesn't, install them with [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/frameworks.html) or another mod manager, in the versions made for your game version. The same goes for Codeware and TweakXL. A package that needs one of them tells you in the Mod Manager.

Nothing more is needed to swap archives into the running game: REDnode brings its own plugin for that, [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html). RED Hot Tools, which older guides name, has no build for game 2.5.

### On your PC

| You need | Notes |
|---|---|
| About 16 GB of RAM | The game alone takes 12 to 16 GB. REDnode adds roughly 60 to 100 MB for each open window and about 100 MB for each Node mod process. On a 16 GB PC, close other programs before you play |
| Disk space | In the game folder, REDnode takes about 320 MB, most of it the program that draws its windows |

You don't need Node.js or any developer tools: REDnode brings its own.

## Install the release

1. **Download** `REDnode-<version>.zip` from [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35419) or [REDnode's releases](https://github.com/Edgemodders/REDnode/releases) on GitHub. The releases page also has the [optional packs](https://edgemodders.ai/wiki/rednode/index.html#optional-packs); you don't need them to start.
2. **Close the game.**
3. **Install the zip** one of the two ways in the table below.
4. **Start the game.** See [First start](https://edgemodders.ai/wiki/rednode/install.html#first-start).

| With | Do this |
|---|---|
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/adding-mods.html) or Vortex | Add the zip as you would any mod, and deploy |
| By hand | Extract the zip into your Cyberpunk 2077 folder, the one with `bin` and `archive` in it |

### What goes into the game

Nearly everything lands in one folder, `red4ext\plugins\REDnode` inside the game folder:

| Item | What it is |
|---|---|
| `REDnode.dll` | The plugin. RED4ext loads it when the game starts |
| `Scripts\` | REDnode's small redscript parts |
| `host\` | The **overlay host**, `REDnode-overlay.exe`: the program that draws REDnode's windows and runs its mods. The plugin starts it with the game and it closes with the game. You never start it yourself |
| `apps\` | The **apps folder**: every REDnode package lives here, each in a folder of its own. The release puts REDnode's [samples](https://edgemodders.ai/wiki/rednode/install.html#the-samples) here, all switched off |
| `README.txt`, `LICENSE.txt`, `THIRD-PARTY-NOTICES.txt` | What REDnode is, and the licences |

One more folder, `red4ext\plugins\REDswap`, holds [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html).

[REDagent](https://edgemodders.ai/wiki/redagent/) and the optional packs install the same way, after REDnode. Their apps land in the same apps folder.

## First start

1. Start the game the normal way. Don't start anything else: the plugin starts REDnode's overlay host by itself.
2. The first time, a **Welcome** window explains the basics. Note its warning: **F9**, right beside F10, is the game's Quick Load. Close the window with **Got it**; after that it opens only when you switch on **Welcome** in the launcher.
3. A small **REDNODE** tab sits at the lower left, with a count: open packages out of all packages.
4. Press **F10**. A cursor appears, and REDnode's windows now take your mouse and keyboard. REDnode calls this interactive mode.
5. Click the **REDNODE** tab to open the launcher, REDnode's home. Press **Esc** to go back to the game.

(Screenshot on the wiki, "The first start": The main menu with the Welcome window and the REDNODE tab at the lower left.)

[Using the overlay](https://edgemodders.ai/wiki/rednode/overlay.html) explains F10's modes and the launcher in full.

## Check it worked

| Look at | You should see |
|---|---|
| The REDNODE tab | At the lower left of the main menu. Press F10 and click it: the launcher says **GAME LINKED**, and shows the version at the bottom, such as **Version 0.67.3** |
| `red4ext\logs\red4ext-*.log` in the game folder | A line saying REDnode `has been loaded` |
| `red4ext\logs\rednode-overlay.log` | The overlay host's log. Its first line is `REDnode overlay host 0.67.3`, with your version |

If the tab doesn't appear, see [Troubleshooting](https://edgemodders.ai/wiki/rednode/troubleshooting.html#no-rednode-tab).

## Try it: your first widget

The samples that come with REDnode start switched off. This switches two of them on. It takes two minutes.

1. **Load a save.** The samples show V's numbers, so they need V in the world.
2. Press **F10**, click the **REDNODE** tab, and switch on **Mod Manager**, the first entry in the launcher. A window opens with every package in a table.
3. Click the **Vitals** row, then switch it on in the details at the right.
4. Press **Esc** to go back to the game.

| You should see | |
|---|---|
| A small panel near the top of the screen | V's health, level and money. This is a **HUD widget**: it stays on screen while you play and never takes the mouse |
| The panel goes away when you open the inventory or the map | HUD widgets hide with the game's menus, and come back after |

Now a window:

1. Press **F10** again and switch on **Hello mod** the same way. Its window opens at the right of the screen, with V's position. Press its **Play sound** button: the game plays a menu sound.
2. Look at Hello mod's **Pin to HUD** switch in the Mod Manager, then press **Esc**.
3. Press **F10**, switch **Pin to HUD** the other way, and press **Esc** again to see the difference.

| Pin to HUD | After Esc |
|---|---|
| On | The Hello mod window stays on screen while you play |
| Off | The window hides, and comes back with F10 |

To tidy up, press **F10** and switch both samples off in the Mod Manager.

Next: [Using the overlay](https://edgemodders.ai/wiki/rednode/overlay.html) for everything F10 and the launcher do, [REDagent](https://edgemodders.ai/wiki/redagent/) if that is why you came, or [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) to connect Claude Code to the game.

## The samples

The release's samples are there to try things and to learn from. Mod makers can read their code in the apps folder.

| Sample | What you see | Needs |
|---|---|---|
| **Vitals** | A HUD widget with V's health, level and money | A loaded save |
| **Coords HUD** | A HUD widget at the top of the screen with V's position | A loaded save |
| **Hello mod** | A window with V's position, a sound button and a switch. A Node mod with no web page | |
| **UI kit** | Every control of REDnode's UI kit in one window, to see the themes | |
| **Perf** | What the overlay costs: frame rate, time per frame, memory | |
| **Test timer** | A stopwatch for tests. **Mark** writes a step number and the time to the [Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log), so you can match log lines to what you did | Asks to stay above other windows |
| **Ask mod** | Type a question and REDagent answers in the window | [REDagent](https://edgemodders.ai/wiki/redagent/), and a permission. Each answer costs a little |
| **Ink Coords**, **Ink vitals**, **Ink markup** | Panels the game itself draws on its HUD, in the game's own look | Codeware 1.16 or later, and a loaded save |
| **Quest test** | Reads and sets quest facts and journal entries, and moves V to a saved spot. For mod makers | A loaded save |
| **Quickhack test** | Gives the game's Overheat quickhack test rules. For mod makers | A loaded save |

## Where REDnode keeps things

| What | Where |
|---|---|
| Packages (apps and mods) | `red4ext\plugins\REDnode\apps` in the game folder |
| Your choices: which packages are on, pins, spaces, theme, window positions, permissions | `%APPDATA%\@rednode\overlay` |
| Each package's own data and secrets | In the same folder. Secrets are encrypted for your Windows account |
| Your AI service keys | `%APPDATA%\Edgemodders\keys`, encrypted for your Windows account. See [Shared keys](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys) |
| REDbridge, when the Mod Manager's **Get REDbridge** installed it | `%LOCALAPPDATA%\REDnode\bridge` |
| Logs | `red4ext\logs` in the game folder. [The logs](https://edgemodders.ai/wiki/rednode/troubleshooting.html#the-logs) says which is which |

`%APPDATA%` and `%LOCALAPPDATA%` are folders in your Windows user profile: paste either into File Explorer's address bar to open it. Your settings and packages' data are kept there, outside the game folder, so they survive updates.

## Updating REDnode

1. Close the game.
2. Download the new zip and install it as before: update it in Vortex or EDGEdeck, or extract it over the old one.

Updating replaces REDnode's own files and the samples. Your other packages, REDagent included, stay, and so do your settings. The launcher shows the new version at the bottom.

**If you extract by hand and come from 0.59.1 or earlier:** you can delete the old file `red4ext\plugins\REDnode\host\resources\app.asar`. Newer versions don't use it.

Before you update the game itself, check that REDnode supports the new game version. Today that is 2.5.

## Removing REDnode

With the game closed, remove it in Vortex or EDGEdeck, or delete the `red4ext\plugins\REDnode` folder.

> **Deleting that folder deletes the apps folder too,** with REDagent and every package you or REDagent made. Copy `red4ext\plugins\REDnode\apps` somewhere safe first if you want to keep any of them.

Your settings in `%APPDATA%\@rednode\overlay` stay. Delete that folder too if you want REDnode completely gone. REDswap is in its own folder, `red4ext\plugins\REDswap`.

## Building from source

Only for working on REDnode itself. Players never need this. REDnode's [developer setup](https://edgemodders.github.io/REDnode/dev-setup.html) has the exact commands and versions for every tool. In outline:

| You need | Notes |
|---|---|
| Git | To download REDnode's source |
| Node.js 24 | The developer uses nvm for Windows to install it |
| Visual Studio 2022 Build Tools, with the C++ workload | To build the plugin. A download of several GB; its install shows an admin prompt and takes 10 to 20 minutes |

1. Clone `https://github.com/Edgemodders/REDnode`, open a terminal in that folder and run `npm install`.
2. Build the plugin with `.\tools\build-native.ps1`, and the overlay host with `npm run overlay:package`.
3. Close the game and copy everything into it with `.\tools\deploy-native.ps1`. If your game isn't in the default Steam folder, add `-GameDir 'D:\Games\Cyberpunk 2077'` with your folder. The script refuses to run while the game is open, and stops if it can't find RED4ext.

`.\tools\deploy-native.ps1 -Remove` deletes the whole `red4ext\plugins\REDnode` folder, apps folder included. `npm run release:zip` makes the same zip as a release. If a step fails, see [Building from source](https://edgemodders.ai/wiki/rednode/troubleshooting.html#building-from-source) in Troubleshooting.
