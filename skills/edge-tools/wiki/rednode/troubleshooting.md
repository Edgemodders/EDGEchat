<!-- Copied from EDGEweb's docs/wiki/rednode/troubleshooting.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/troubleshooting.html (reviewed 2026-10-26) -->

# Troubleshooting REDnode

## Start with the logs

REDnode writes its logs to `red4ext\logs` in the game folder. Close the game first: some are only complete after it exits.

| Log | Look for |
|---|---|
| `red4ext-*.log` | A line saying REDnode `has been loaded`. If it's missing, REDnode never started |
| `rednode-*.log` | The plugin: `REDnode 0.37.0 loading`, and that it started the host |
| `rednode-overlay.log` | The overlay host: packages found, started and refused, permissions, the MCP server. The last session's is kept as `rednode-overlay.prev.log` |
| `rednode-mods.log` | What Node mods printed, and their crashes |
| `r6\logs\redscript_rCURRENT.log` | Script errors, if the game stopped at startup |

When you ask for help, include the first lines of the plugin and host logs, and the lines around the problem.

## Problems and fixes

### No REDNODE tab at the main menu

1. Check your game version against REDnode's: REDnode 0.38.1 and later are for game **2.5**, and 0.37.0 is for **2.31**. RED4ext won't load a REDnode built for the other version. Update RED4ext too (1.31 or later for 2.5).
2. Check `red4ext-*.log` for REDnode. If RED4ext has no log at all, RED4ext itself isn't working: install or update it for your game version.
3. If RED4ext loaded but REDnode isn't mentioned, REDnode went somewhere else. Check that `red4ext\plugins\REDnode\REDnode.dll` is inside your game folder; install the zip again if not.
4. If REDnode loaded, check `rednode-overlay.log`. If it's missing or old, the host didn't start. Make sure `red4ext\plugins\REDnode\host\REDnode-overlay.exe` exists; if not, install the zip again.
5. Security software may stop a game plugin from starting another program. If the host is blocked, allow `REDnode-overlay.exe`.

### The launcher says GAME OFF

The overlay host isn't connected to the game. It can show for a moment while the game starts. If it stays, quit the game and start it again, then check `rednode-overlay.log` and the plugin log for errors. Only one host can run at a time: if you started one by hand (`npm run overlay`), close it before starting the game, or the game's own host exits.

### The game stops at startup after deploying

Usually a script error: check `r6\logs\redscript_rCURRENT.log`. REDnode needs redscript installed. To check whether REDnode is the cause, move the `red4ext\plugins\REDnode` folder out of the game folder (it holds your packages too) and start the game again.

### Building from source: the deploy script stops

| Message | Fix |
|---|---|
| `RED4ext not found under ...` | Your game isn't in the default Steam folder. Add `-GameDir '<your game folder>'` |
| `Close the game first.` | The game locks REDnode's files while it runs. Quit it, wait for it to close, and run the script again |
| `Nothing staged. Run tools\build-native.ps1 first.` | Build first: `.\tools\build-native.ps1`, then `npm run overlay:package` |

### Building from source: the build fails

| Problem | Fix |
|---|---|
| The Build Tools install runs out of memory or hangs | Close Steam and your browser. If an install is already running in the background, wait for it instead of starting another |
| The first plugin build fails to download | Its first run downloads the RED4ext SDK. Check your internet connection and run it again |
| Packaging says Electron is missing | Run `node node_modules/electron/install.js` once in the REDnode folder |

The [developer setup](https://edgemodders.github.io/REDnode/dev-setup.html) has every tool's exact version.

### A window I expect isn't showing

Work down this list:

| Check | Fix |
|---|---|
| Is the overlay hidden? | Press **F10** until windows show |
| Is it pinned to the HUD? | Unpinned windows show only in interactive mode. Pin it in the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html#pin-to-launcher-and-pin-to-hud) or from its title bar |
| Is it in another space? | Check the Mod Manager's **Space** column, or switch spaces with Ctrl+1 to 9 |
| Is a package in solo mode? | The tab shows **SOLO**. Press **End** |
| Did you close it? | "Window closed" with **Show** in the launcher or Mod Manager brings it back |
| Is a game menu open? | Many windows hide with menus, photo mode and loading screens |
| Is the package on? | Switch it on in the Mod Manager |

### A new package isn't in the launcher

New packages start unpinned. Open the Mod Manager and use the **New** filter, then switch it on and pin it. If it isn't in the Mod Manager either, check `rednode-overlay.log`: a package whose manifest names a file that doesn't exist yet is skipped until the file is there.

### A mod shows CRASHED or NOT RESPONDING

Only that mod is affected; the game and other mods keep running. Read **Last error** in the Mod Manager or the [Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log), then press **Restart**. If it keeps crashing, send its author the error: **Copy** in the Mod log puts it on the clipboard. A mod stopped at a debugger breakpoint shows NOT RESPONDING too; that's expected.

### A package says NEEDS, or "Needs ..."

It requires a mod your game doesn't have, or has in an older version. The Mod Manager's **Requires** list says which and what version. Install it with [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or your mod manager and restart the game.

### A package's feature does nothing

It may be waiting for a permission. Look for **Asks for ...** in its launcher row or Mod Manager details, and switch **Allowed** on if you trust it. Features that need REDbridge also need REDbridge installed: press **Get REDbridge** in the package's details in the Mod Manager.

### An archive swap is refused

| Message is about | Fix |
|---|---|
| The main menu | Load a save first |
| RED Hot Tools | Install [RED Hot Tools](https://github.com/psiberx/cp2077-red-hot-tools/releases) 1.3 or later and restart the game |
| Upper- and lowercase names | The official RED Hot Tools would end the game on this swap. Install the [Edgemodders build](https://github.com/CyberbuildsAI/cp2077-red-hot-tools/releases) over it, then restart the game |
| A permission | Allow the package's "swapping archives" permission in the Mod Manager |

After a swap, things already in the world can keep the old look until they load again; clothes V wears update straight away. A swapped archive stays installed: remove it from `archive\pc\mod` when you're done testing.

### "That game object no longer exists"

A mod used a game object from before a save load, or one the game removed. It's the mod's mistake, not yours: it should fetch objects again after each load. Restarting the mod usually clears it.

### Windows flicker, show garbage or don't update

Switch **GPU sharing** off in the launcher's Settings drawer (the gear). Every window reopens with the other way of drawing. If that fixes it, report it with your graphics card and the host log.

### The cursor vanishes, or interactive mode ends by itself

Press F10 to get back to interactive mode. Fixes for both went into earlier versions and passed their tests, so if it happens on 0.37.0, report it with the plugin log: it records when the game leaves and comes back to the front. If the arrow blinks with DLSS on, update your GPU driver: an older NVIDIA driver caused it on one laptop.

### A HUD widget stays up in a cutscene, or hides in a conversation

Which scenes count as cutscenes is still being confirmed. Note what was happening and report it: it helps settle it.

### The game runs slowly, or runs out of memory

The game alone needs 12 to 16 GB of RAM. Each open REDnode window adds roughly 60 to 100 MB and each mod process about 100 MB. Switch off windows you don't need, put mods in a **shared process**, and close other programs. The **Perf** sample shows what the overlay costs.

### Claude Code can't reach REDnode

| Check | Fix |
|---|---|
| Is the game running? | The server only runs with the game. `claude mcp list` showing `rednode` failing while the game is closed is normal |
| Is **MCP server** on? | Switch it on in the launcher's Settings drawer (the gear) |
| Did you connect it? | Run `claude mcp add --transport http --scope user rednode http://127.0.0.1:41820/mcp` once, then `/mcp` › `rednode` › **Authenticate** and **Allow** in the game (REDnode 0.40.1 or later). Or press **Copy setup** and run the command in a terminal once |
| Did you press **Revoke**? | A revoked assistant asks again: **Authenticate** in `/mcp` and **Allow** in the game |
| Is it a new session? | Claude Code loads MCP servers when a session starts. Start a new one |

### Hot reload doesn't pick up my changes

Switch **Hot reload** on in the launcher's Settings drawer. Make sure you're editing the copy REDnode runs: the one in the game's apps folder, or one in a [development folder](https://edgemodders.ai/wiki/rednode/settings.html#development-folders) you added. The Mod Manager marks a development copy **DEV**.

### I pressed F9 and lost progress

F9 is the game's Quick Load, not REDnode's: it loads your last save. It sits right beside F10, so mind it.

### Something else

Ask on [Discord](https://discord.gg/63qP3Erw43) with your logs' first lines, or [open an issue](https://github.com/Edgemodders/REDnode/issues) on REDnode's repo.
