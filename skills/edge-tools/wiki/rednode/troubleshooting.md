<!-- Copied from EDGEweb's docs/wiki/rednode/troubleshooting.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/troubleshooting.html (reviewed 2026-11-25) -->

# Troubleshooting REDnode

Find the part where you are stuck, then what you see in the left column. If it isn't here, [Something else](https://edgemodders.ai/wiki/rednode/troubleshooting.html#something-else) says where to ask.

| Where you are stuck | |
|---|---|
| [Starting up](https://edgemodders.ai/wiki/rednode/troubleshooting.html#starting-up) | No REDNODE tab, GAME OFF, the game won't start, Vortex's "Invalid package" |
| [Windows and the overlay](https://edgemodders.ai/wiki/rednode/troubleshooting.html#windows-and-the-overlay) | A window is missing, flicker, the cursor, the pause menu, app keys, slow game, F9 |
| [Packages and mods](https://edgemodders.ai/wiki/rednode/troubleshooting.html#packages-and-mods) | Not in the launcher, CRASHED, NEEDS, a feature does nothing, a call that is not allowed |
| [The Console](https://edgemodders.ai/wiki/rednode/troubleshooting.html#the-console) | Errors, and commands that do nothing |
| [Archive swaps](https://edgemodders.ai/wiki/rednode/troubleshooting.html#archive-swaps) | A swap is refused, or doesn't show |
| [Claude Code](https://edgemodders.ai/wiki/rednode/troubleshooting.html#claude-code) | It can't reach REDnode, or shows it twice |
| [Making mods](https://edgemodders.ai/wiki/rednode/troubleshooting.html#making-mods) | Hot reload, and two errors mods run into |
| [The logs](https://edgemodders.ai/wiki/rednode/troubleshooting.html#the-logs) | Which log is which, and what to send when you ask for help |
| [UI Tools](https://edgemodders.ai/wiki/rednode/troubleshooting.html#ui-tools) | The optional pack's UI Workbench |
| [Building from source](https://edgemodders.ai/wiki/rednode/troubleshooting.html#building-from-source) | For developers working on REDnode itself |

## Starting up

### No REDNODE tab

The tab sits at the lower left of the screen. Work down this list:

1. **Press F10 once, wait a second, and press it again if needed.** F10 goes round three modes, and in hidden mode the tab is hidden too. If **Open at start** is switched off in REDnode's settings, the tab also waits for your first F10.
2. **Check your game version against REDnode's.** REDnode 0.38.1 and later are for game **2.5**, and 0.37.0 is for **2.31**. A REDnode made for the other version won't load. RED4ext must match too: 1.31 or later for 2.5.
3. **Check that RED4ext loaded REDnode.** Close the game and open the newest `red4ext-*.log` in `red4ext\logs` in the game folder. Look for a line saying REDnode `has been loaded`.

| In the RED4ext log | Do this |
|---|---|
| There is no RED4ext log at all | RED4ext itself isn't working. Install or update it for your game version |
| REDnode isn't mentioned | REDnode went somewhere else. Check that `red4ext\plugins\REDnode\REDnode.dll` is inside your game folder, and install the zip again if not |
| REDnode `has been loaded` | Look at `rednode-overlay.log` in the same folder. If it's missing or old, the overlay host didn't start. Check that `red4ext\plugins\REDnode\host\REDnode-overlay.exe` exists, and install the zip again if not |
| REDnode loaded and the exe exists, but still no host log | Security software may stop a game plugin from starting another program. Allow `REDnode-overlay.exe`, or restore it if your antivirus put it in quarantine |

### Other problems at the start

| You see | Do this |
|---|---|
| The launcher says **GAME OFF** | REDnode isn't connected to the game. It can show for a moment while the game starts. If it stays, quit the game and start it again, then check [the logs](https://edgemodders.ai/wiki/rednode/troubleshooting.html#the-logs) |
| The game won't start after installing REDnode | Usually a script error: open `r6\logs\redscript_rCURRENT.log` in the game folder. REDnode needs redscript installed. To test whether REDnode is the cause, switch it off in EDGEdeck or Vortex, or move the `red4ext\plugins\REDnode` folder out of the game folder (it holds your packages too), and start the game. If the game then starts, put REDnode back and ask for help with that log |
| Vortex says **Invalid package**, naming `host\resources\app.asar` | Update to REDnode 0.62.4 or later. Older versions had a file Vortex could not handle |
| F10 shows only a cursor, with no tab or windows | This happened when the game was started from VS Code or a terminal. Update to REDnode 0.59.1 or later |
| REDnode is gone after a game update | A game update needs a REDnode, and a RED4ext, made for the new game version. Check [REDnode's Status](https://edgemodders.ai/wiki/rednode/index.html#status) for the game version it supports, and update all three together |
| I want to see the Welcome window again | Switch on **Welcome** in the launcher |
| A mod manager can't update REDnode: files are in use | The game is still running, or stuck while closing. End it in Windows' Task Manager, then deploy again |

## Windows and the overlay

### A window I expect isn't showing

Work down this list:

| Check | Fix |
|---|---|
| Is the overlay hidden? | Press **F10** until windows show |
| Is the game's pause menu open? | REDnode hides there. Press **F10** to bring it up, or see [In the pause menu](https://edgemodders.ai/wiki/rednode/overlay.html#in-the-pause-menu) |
| Did you press an app's own key? | It shows only that app. Press the key again, or **F10** or **Esc**, and the rest come back. See [App keys](https://edgemodders.ai/wiki/rednode/overlay.html#app-keys) |
| Is it pinned to the HUD? | Unpinned windows show only in interactive mode, after F10. Pin it in the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html#pin-to-launcher-and-pin-to-hud) or from its title bar |
| Is it in another space? | Check the Mod Manager's **Space** column, or switch spaces with Ctrl+1 to 9 |
| Is a package in solo mode? | The tab shows **SOLO**. Press **End** |
| Did you close it? | "Window closed" with **Show** in the launcher or Mod Manager brings it back |
| Is a game menu open? | Many windows hide with menus, photo mode and loading screens |
| Is the package on? | Switch it on in the Mod Manager |

### Other problems with windows

| You see | Do this |
|---|---|
| My HUD widgets and the tab vanished when I pressed F10 | You went from interactive mode to hidden mode. Press **F10** once more. To go back to playing, use **Esc**. See [F10 and the three modes](https://edgemodders.ai/wiki/rednode/overlay.html#f10-and-the-three-modes) |
| I can't click or type in a window | Press **F10** until a cursor shows |
| REDnode vanished when I opened the pause menu | That's **Hide in the pause menu**, on by default. REDnode comes back when you close the pause menu, and **F10** brings it up there. Switch the setting off in the launcher's Settings drawer to keep it on screen |
| The Key binding window won't take my key | The game uses that key, or REDnode or Windows does: the window says which. Pick one it accepts, such as F6, F7 or F8 |
| Windows flicker, show garbage or don't update | Switch **GPU sharing** off in the launcher's Settings drawer (the gear). Every window reopens, drawn the other way. If that fixes it, please report it with your graphics card and the overlay host's log |
| The cursor vanishes, or interactive mode ends by itself | Press **F10** to get back. Both problems were fixed in earlier versions. If you still see either on the current version, please report it and attach the plugin log, which records each time the game window loses and regains focus |
| The cursor blinks with DLSS on | Update your graphics driver: an older NVIDIA driver caused this on one laptop |
| In a windowed game, the overlay's cursor and the Windows pointer drift apart in the menus | Update to REDnode 0.70.0 or later: with the game in a window smaller than the screen, the overlay's cursor follows the Windows pointer, and is not drawn outside the game's window |
| A HUD widget stays up in a cutscene, or hides in a conversation | Which scenes count as cutscenes has not been fully tested. Note what was happening and report it |
| The game runs slowly, or runs out of memory | The game alone needs 12 to 16 GB of RAM. Each open REDnode window adds roughly 60 to 100 MB and each mod process about 100 MB. Switch off windows you don't need, put mods in a [shared process](https://edgemodders.ai/wiki/rednode/mod-manager.html#node-mods-restart-and-shared-process), and close other programs. The **Perf** sample shows what the overlay costs |
| The game loaded an old save when I pressed a key | You pressed **F9**, the game's Quick Load, right beside F10. It isn't REDnode's. The game keeps its earlier saves and autosaves: load one from its menu |

## Packages and mods

| You see | Do this |
|---|---|
| A new package isn't in the launcher | Packages installed after REDnode start unpinned. Open the Mod Manager, click the **New** chip, then switch the package on and pin it |
| A package isn't in the Mod Manager either | Check that its folder is in `red4ext\plugins\REDnode\apps` in the game folder. Then read `rednode-overlay.log`: it names each package it skipped, and why |
| A mod shows **CRASHED** or **NOT RESPONDING** | Only that mod is affected; the game and other mods keep running. Read **Last error** in the Mod Manager or the [Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log), then press **Restart**. If it keeps crashing, send its author the error: **Copy** in the Mod log puts it on the clipboard |
| A package says **NEEDS**, or "Needs ..." | It requires a mod your game doesn't have, or has in an older version. The Mod Manager's **Requires** list says which, and what version. Install it with [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or your mod manager and restart the game |
| A mod's call fails with "... is not allowed ... Allow it in the Mod Manager" | The mod wants to call another mod's tool that changes something. If you trust it, select it in the Mod Manager and switch the call on under [Calls](https://edgemodders.ai/wiki/rednode/mod-manager.html#calls). Other reasons are in that section |
| **Update REDbridge** stays after I pressed it, and pressing it again does nothing | Fixed in REDnode 0.67.3: [update REDnode](https://edgemodders.ai/wiki/rednode/install.html#updating-rednode) |
| A package's feature does nothing | Three common causes. It waits for a permission: look for **Asks for** in its launcher row or Mod Manager details, and switch **Allowed** on if you trust it. It needs REDbridge: press [Get REDbridge](https://edgemodders.ai/wiki/rednode/mod-manager.html#get-redbridge) in its details. Or it needs a loaded save: load one |

## The Console

| You see | Do this |
|---|---|
| A red error after `addItem` | The id is wrong. Type it exactly, in quotes, such as `addItem("Items.money", 1000)`. See [Finding an item's id](https://edgemodders.ai/wiki/rednode/overlay.html#finding-an-items-id) |
| "V is not in the world yet" | You are at the main menu or in a loading screen. Load a save and try again |
| A command from a Cyber Engine Tweaks guide does nothing, or gives an error | Those commands are Lua. The Console runs JavaScript: use its own [commands](https://edgemodders.ai/wiki/rednode/overlay.html#commands) |
| The Console says **RUNNING** and never answers | The line never finishes. Press **Stop** |
| There is no Console in the launcher | The Console came with REDnode 0.49.5. [Update REDnode](https://edgemodders.ai/wiki/rednode/install.html#updating-rednode) |

## Archive swaps

| You see | Do this |
|---|---|
| "Load a save first" | Swaps work in a loaded save, not at the main menu |
| "cannot swap archives in this game" | REDswap's safety checks failed, usually after a game patch it doesn't know yet. Its log, `red4ext\logs\redswap-*.log`, says which check. Wait for a REDnode update |
| "REDswap ... is not loaded in the game" | The folder `red4ext\plugins\REDswap` is missing. Install REDnode again and restart the game |
| A package's swap does nothing | Allow its "swapping archives" permission in the Mod Manager |
| The swap worked but nothing changed | See [When a swap does not show](https://edgemodders.ai/wiki/rednode/redswap.html#when-a-swap-does-not-show) |
| The game closed at the swap | A broken archive crashes the game at the swap, as it would at the start. See [When a swap does not show](https://edgemodders.ai/wiki/rednode/redswap.html#when-a-swap-does-not-show) |
| A test archive is still in my game days later | A swapped archive stays installed. Remove it from `archive\pc\mod` when you're done testing. See [A swap is not temporary](https://edgemodders.ai/wiki/rednode/redswap.html#a-swap-is-not-temporary) |

You don't need RED Hot Tools on game 2.5. It has no build for 2.5, and REDnode swaps through its own REDswap. Only a game kept on 2.31, with REDnode 0.37.0, swaps through [RED Hot Tools](https://github.com/psiberx/cp2077-red-hot-tools/releases) 1.3 or later; there, a message about upper- and lowercase names means you need the [Edgemodders build](https://github.com/CyberbuildsAI/cp2077-red-hot-tools/releases) of it.

## Claude Code

Claude Code can't reach REDnode, or something about the connection looks wrong. [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html#connect-claude-code) has the steps.

| Check | Fix |
|---|---|
| Is the game running? | REDnode's server only runs with the game. Claude Code showing `rednode` as failing while the game is closed is normal |
| Is **MCP server** on? | Switch it on in the launcher's Settings drawer (the gear) |
| Did you connect it? | In Claude Code, type `/mcp`, pick REDnode's entry and choose **Authenticate**, then press **Allow** in the game |
| The browser shows a code, but the game shows no **Connect** window | Another program on your PC is using REDnode's port, 41820. The Settings drawer says **Waiting for port 41820** under **MCP server**, and names the program. Close that program: REDnode tries again every 10 seconds, with no restart |
| The codes in the browser and the game differ | Press **Deny**. The request in the game is not the one you started |
| REDnode's tools show twice | You have the [EDGEchat](https://edgemodders.ai/wiki/edgechat/) plugin, which adds REDnode as `plugin:edge:rednode`, and also added `rednode` by hand. Remove the hand-added one: `claude mcp remove rednode --scope user`. EDGEchat's `/edge:setup` finds such doubles |
| Did you press **Revoke**? | A revoked assistant must ask again: **Authenticate** in `/mcp`, and **Allow** in the game |
| Is it a new session? | Claude Code loads its servers when a session starts. Start a new one |

## Making mods

| You see | Do this |
|---|---|
| Hot reload doesn't pick up my changes | Switch **Hot reload** on in the launcher's Settings drawer. Make sure you're editing the copy REDnode runs: the one in the game's apps folder, or one in a [development folder](https://edgemodders.ai/wiki/rednode/settings.html#development-folders) you added. The Mod Manager marks a development copy **DEV** |
| "That game object no longer exists" | A mod used a game object from before a save load, or one the game removed. It's the mod's mistake, not the player's: a mod should fetch objects again after each load. Restarting the mod usually clears it |
| "V is not in the world yet" | A package called a game function that reaches the world (weather, time, districts) at the main menu or during a load. REDnode refuses such calls so they can't crash the game. A mod should wait until the game says V is in the world: see [Game API](https://edgemodders.ai/wiki/rednode/game-api.html) |
| A mod stopped at a debugger breakpoint shows **NOT RESPONDING** | That's expected. Resume it in the debugger |

## The logs

REDnode writes its logs to `red4ext\logs` in the game folder. Close the game before you read them: some are only complete after it exits.

| Log | File | Has |
|---|---|---|
| RED4ext | `red4ext-<date>.log` | Whether REDnode loaded at all: a line saying REDnode `has been loaded` |
| The plugin | `rednode-<date>.log`, such as `rednode-2026-11-13-14-44-27.log`. One per game start | The in-game side: `REDnode <version> loading`, that it started the overlay host, game calls that failed, F10 and cursor changes |
| The overlay host | `rednode-overlay.log` | Packages found, started and refused, permissions, spaces, the MCP server |
| The last session's host log | `rednode-overlay.prev.log` | Kept so a crash's log survives the next start |
| Mods | `rednode-mods.log` | Everything Node mods printed, and their crashes. The same lines as the [Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log) window |
| Faults | `rednode-faults.log` | What went wrong around an archive swap |
| REDswap | `redswap-<date>.log` | Whether REDswap can swap in this game, and why not |
| redscript | `r6\logs\redscript_rCURRENT.log` in the game folder (not in `red4ext`) | Script errors, if the game stopped at startup |

## Something else

Ask on [Discord](https://discord.gg/63qP3Erw43), or [open an issue](https://github.com/Edgemodders/REDnode/issues) on REDnode's repo. Say which REDnode version you have (the launcher shows it at the bottom) and your game version, and include the first lines of the plugin log and the overlay host's log, and the lines around the problem. Logs can hold your Windows user name in folder paths: remove it if you mind.

## UI Tools

Problems with the optional [UI Tools](https://edgemodders.ai/wiki/rednode/ui-tools.html) pack's **UI Workbench**.

### "Edit and Projects need the admin permission"

The Workbench is missing the `admin` permission, which Try, To source, Edit, Projects and Export need. In the Mod Manager, select **UI Workbench**, and under **Permissions** switch **Allowed** on for **managing REDnode**. Then open the tab again. A **Try** without it answers with the reason instead of changing the widget. **Inspect** works without it. See [The admin permission](https://edgemodders.ai/wiki/rednode/ui-tools.html#the-admin-permission).

### The UI Workbench isn't in the Mod Manager

| Check | Fix |
|---|---|
| Is it installed? | `red4ext\plugins\REDnode\apps\ui-workbench` must exist in the game folder. Install the [pack's zip](https://edgemodders.ai/wiki/rednode/ui-tools.html#install) again |
| Is your REDnode new enough? | It needs REDnode 0.56.0 or later. The Mod Manager shows **NEEDS** for an older one: [update REDnode](https://edgemodders.ai/wiki/rednode/install.html#updating-rednode) |
| Is Codeware installed? | It needs Codeware 1.16 or later; without it the Workbench shows **NEEDS** and reads no layers |

### The tree says "Waiting for the game"

The game didn't answer yet: at the start, before a save loads, or during a load. The Workbench asks again every 3 seconds by itself. Load a save; if it still waits, press **Refresh**. If it never reads, check that Codeware is installed for your game version.

### Pick finds nothing, or a HUD piece is missing

| What you see | Why, and what to do |
|---|---|
| "No drawn widget of the game is under that point." | Nothing the game draws is there, or what is there is fully transparent. Pick leaves out widgets at opacity 0 and the layers drawn onto surfaces in the world (signs, adverts, screens) |
| The health bar can't be picked | It hides itself out of combat. Pick it in a fight, or use the quest tracker, the minimap or the clock |
| A HUD entry says **not spawned** | The game makes that piece only when it's needed (a video, a boss fight, a vehicle). Once it's on screen, press **Refresh** and select it again |
| A menu's widgets aren't in the tree | Menu widgets exist only while their menu is open. Open the menu, then press **Refresh** |
| The widget you want is under another | Right-click while picking to set the top one aside, or select its parent and use **Pick inside**. See [Pick](https://edgemodders.ai/wiki/rednode/ui-tools-inspect.html#reach-a-widget-under-another) |

### Try's changes are gone

| When | Why |
|---|---|
| After a save load | The game rebuilds its HUD with fresh widgets, so the ones you changed are gone, and the new ones show the game's own values. Pick again |
| After the Workbench was switched off or closed | On purpose: REDnode puts back every change it tried. Nothing Try does is kept |
| A text changes back by itself | The game's own controller writes it again, such as a clock's. The property belongs to the controller |

### Run says "REDnode did not find ..."

The full message ends "check that the folder is watched (the launcher's Settings, Development folders)". REDnode runs projects from `Documents\REDnode\UI projects` as a development folder, and the Workbench adds that folder the first time it opens Projects in a session.

1. In the launcher's Settings drawer, switch on **Developer mode** and look at **Development folders**: `...\Documents\REDnode\UI projects` should be listed.
2. If you removed it, switch the Workbench off and on, and open **Projects** again: it adds the folder back. Or paste the folder's path into the list yourself.
3. A project made a moment ago can take a second or two to be found; press **Run** again.
4. Check `rednode-overlay.log` for the project's id: a project whose `rednode-app.json` doesn't read is skipped.

### "There is a project ... already"

Two projects can't share an id, and the id comes from the name. Pick another name. A project you deleted is in `.trash` and doesn't count.

### A project shows CRASHED

Its script stopped with an error. Read it in the **Mod log** (switch it on in the launcher): it names the file and line. A mistake shown in the editor's header (the markup's or the script's) does this if you save it while the project runs. Fix it, press **Save**, and if the panel doesn't come back, **Stop** and **Run**.

### The panel doesn't show on the HUD

| Check | Fix |
|---|---|
| Is the overlay in front? | Press **Esc** to leave interactive mode, so the HUD shows clearly |
| Is the project running? | The Projects tab marks it **running**. Press **Run** in Edit |
| Is there an error in its header? | The panel doesn't load until the markup reads. Fix it and save |
| Did you move it off screen? | Check the `<mount>` line's `anchor`, `x` and `y`. They are in the HUD's units, which are larger than the overlay's 1080p pixels (3840 x 2160 across the screen in the developer's tests) |
| Is a game menu open? | Panels go on the HUD; menus cover it |

### My installed export shows DEV, or runs the old version

A project in `Documents\REDnode\UI projects` wins over an installed mod with the same id: the Mod Manager marks it **DEV** and runs the project instead. Delete the project in **Projects** (it goes to `.trash`), or move its folder out of `UI projects`, then restart the game. Renaming the project in the Workbench isn't enough: the id stays. See [Install it on your own PC](https://edgemodders.ai/wiki/rednode/ui-tools-export.html#install-it-on-your-own-pc).

### Where's my deleted project?

In `Documents\REDnode\UI projects\.trash`, in a folder named after its id with the date and time it was deleted. Move it back into `UI projects` and rename the folder to its id (the part before the date).

## Building from source

Only for developers who build REDnode itself, as on [Install and set up](https://edgemodders.ai/wiki/rednode/install.html#building-from-source). The [developer setup](https://edgemodders.github.io/REDnode/dev-setup.html) has every tool's exact version.

| The deploy script says | Fix |
|---|---|
| `RED4ext not found under ...` | Your game isn't in the default Steam folder. Add `-GameDir '<your game folder>'` |
| `Close the game first.` | The game locks REDnode's files while it runs. Quit it, wait for it to close, and run the script again |
| `Nothing staged. Run tools\build-native.ps1 first.` | Build first: `.\tools\build-native.ps1`, then `npm run overlay:package` |

| The build fails | Fix |
|---|---|
| The Build Tools install runs out of memory or hangs | Close Steam and your browser. If an install is already running in the background, wait for it; don't start another |
| The first plugin build fails to download | Its first run downloads the RED4ext SDK. Check your internet connection and run it again |
| Packaging says Electron is missing | Run `node node_modules/electron/install.js` once in the REDnode folder |
| The launcher says **GAME OFF** while you run a host by hand | Only one overlay host can be connected to the game. Close the one you started with `npm run overlay` before you start the game |
