<!-- Copied from EDGEweb's docs/wiki/edgehack/troubleshooting.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgehack/troubleshooting.html (reviewed 2026-11-25) -->

# Troubleshooting EDGEhack

Find what you see in the left column. If it isn't here, the [last section](https://edgemodders.ai/wiki/edgehack/troubleshooting.html#anything-else) says where to look and where to ask.

| Where are you stuck? | |
|---|---|
| [Setting up](https://edgemodders.ai/wiki/edgehack/troubleshooting.html#setting-up) | The icon, an empty Quickhacks view |
| [Saving](https://edgemodders.ai/wiki/edgehack/troubleshooting.html#saving) | A save that writes no mod files |
| [Try Live](https://edgemodders.ai/wiki/edgehack/troubleshooting.html#try-live) | The game isn't reached, or nothing changes |
| [In the game](https://edgemodders.ai/wiki/edgehack/troubleshooting.html#in-the-game) | The quickhack, its name, its icons, its script, vendors |
| [After a game patch](https://edgemodders.ai/wiki/edgehack/troubleshooting.html#after-a-game-patch) | |
| [The Desk and the Library](https://edgemodders.ai/wiki/edgehack/troubleshooting.html#the-desk-and-the-library) | |
| [Assistants](https://edgemodders.ai/wiki/edgehack/troubleshooting.html#assistants) | Claude Code can't see EDGEhack |

## Setting up

| You see | Do this |
|---|---|
| No EDGEhack icon in the activity bar after installing | Press `Ctrl+Shift+P`, type `Developer: Reload Window` and press Enter. Still missing: right-click the activity bar and check that **EDGEhack** is ticked |
| A message that EDGEhack needs REDcode | Install [REDcode](https://edgemodders.ai/wiki/redcode/install.html), then reload the window |
| A message that REDcode's REDbridge is not running | REDbridge is the part that reads the game's files. Open REDcode's side bar and wait for it to start, or run **REDcode: Restart REDbridge** from the command palette. Then press **Refresh** in the Quickhacks view's title bar |
| The Quickhacks view stays empty | REDcode must know where the game is: see [Finding the game](https://edgemodders.ai/wiki/redcode/install.html#finding-the-game). Then press **Refresh**. The first read takes about 15 seconds |
| A quickhack from another mod is missing or looks unchanged | EDGEhack reads the game as it is installed. After you install or remove a mod, press **Refresh** |
| **Edit...** and **Clone and Modify...** are missing on a page | It is a device or vehicle quickhack. Those are read-only for now |

## Saving

The line under the quickhack's title says what the save did.

| It says | Do this |
|---|---|
| Saved on the Desk, or Saved in the EDGE Library | Normal. Desk and Library quickhacks have no mod files. Press **Add to Project** |
| "this document is not in the project open in REDcode" | Open the project the quickhack belongs to in REDcode, and save again |
| "It changes nothing yet" | Every field still has the game's value, so there is nothing to write. Change something |
| "where the game sells it could not be read, so Get it was left out" | Save again. If it repeats, press **Refresh** in the Quickhacks view first |
| "the script file ... is not there" | The quickhack names a script file that was deleted. Press **Add** in its Scripts section to make it again, or **Remove** to take the script off |
| A yellow warning about a shared number | Some tiers share one effect in the game, so they can't have different durations. Give those tiers the same value |

## Try Live

| You see | Do this |
|---|---|
| "Start the game with REDnode ... to try it live" | The game isn't running, has no [REDnode](https://edgemodders.ai/wiki/rednode/install.html), or has no save loaded. Start it and load a save |
| "Try Live needs REDnode ... or later" | Update REDnode: see [What each feature needs](https://edgemodders.ai/wiki/edgehack/install.html#what-each-feature-needs) |
| The page waits at "Sending ... changes to the game" | The game is waiting for you. Press `F10` in the game and press **Allow** in the **Editor request** window |
| "Allow EDGEhack in the game's Editor request window" | You pressed **Deny**. REDnode keeps that answer until the game restarts: restart the game and press **Allow** next time |
| "It changes nothing yet, so there is nothing to try" | Change a number first |
| Try Live worked, but the number in the game is the same | A change shows on the next scan, not on a quickhack already uploading. Scan again. The game also lowers costs by V's perks, so compare with the cost before your change |
| A new quickhack is in V's backpack but doesn't show on enemies | See the next section: it needs redscript and a mod installed once |

## In the game

| You see | Do this |
|---|---|
| The Console line says the item doesn't exist, or nothing arrives | The quickhack isn't in the game yet. Press **Pack and Play** with the game closed and start the game, or press **Try Live** first. Also check that you copied the line from your own page: it contains your project's name |
| Pack and Play does nothing, or EDGEdeck asks you to quit the game | The game is running. Close it, then press **Pack and Play** again. See [Pack and Play](https://edgemodders.ai/wiki/edgehack/try-live.html#pack-and-play) |
| Pack and Play swapped an archive and warned about files it did not carry | Choose **Install for Next Start**, then restart the game. A quickhack's numbers are read only when the game starts |
| My change to a game quickhack doesn't show | Check that TweakXL is installed and deployed: see [What each feature needs](https://edgemodders.ai/wiki/edgehack/install.html#what-each-feature-needs). Its log, `red4ext\plugins\TweakXL\TweakXL.log` in the game folder, names each tweak file it loaded and any error. If another mod changes the same quickhack, the two can undo each other: try with the other mod switched off |
| A new quickhack doesn't show when scanning an enemy | It needs **redscript**. Each mod with a new quickhack includes one small script, without which a new quickhack can't be used on enemies. Check that redscript is installed and deployed, and that the mod was installed with Pack and Play at least once. `r6\logs\redscript_rCURRENT.log` in the game folder shows script errors. Also check the target: some of the game's quickhacks, such as Contagion, can't be used on machines, and a quickhack cloned from one keeps that rule |
| A new quickhack's name shows as `LocKey#...` | While trying it live, that is expected: the game reads names only when it starts. Press **Pack and Play**, then restart the game. If it still shows after that, check that ArchiveXL is installed |
| A changed name or description doesn't show | Texts need **Pack and Play** and a game restart, and ArchiveXL |
| Icons of my own don't show | They come with the mod: **Pack and Play**, then restart. Check that ArchiveXL is installed. Uploading and generating icons need an up-to-date REDcode |
| **Generate** fails | It needs an OpenAI API key with credit on the account. Run **EDGEhack: Set the OpenAI Key...** to enter it again in REDcode's box. The error shows in the Generate box, above Generate |
| **Generate** says you chose Don't Allow | Run **Forget Tool Permissions for Keys** in REDcode's Keys view, press Generate again and choose **Allow** |
| A script doesn't run | Open REDnode's launcher (`F10`). In the Mod Manager, check that **`<your mod's name>` quickhacks** is listed and switched on. The **Mod log** shows the mod's own lines and any error in your script. The script file must still contain `export function canUse` or `export async function onLand`. Scripts don't run in Try Live, only from the installed mod |
| The scan check shows "Checking..." for a moment | Expected the first time V scans a person. If it stays, the check is too slow: answer from `target` alone |
| A vendor doesn't sell my new quickhack | Open **Get it** on its page for that tier. It says how many vendors sell the original and what they require, such as a street cred level. Check that **Sell it there** is ticked. Some tiers are not sold anywhere in the game, and then yours isn't either. Use the Console line to test |

## After a game patch

A patch can change the game's numbers. EDGEhack keeps the number you asked for, so nothing in your documents needs changing. The mod's files do need writing again, because they hold the difference from the game's number:

1. Update the frameworks: see [After a game update](https://edgemodders.ai/wiki/edgedeck/frameworks.html#after-a-game-update).
2. In EDGEhack's **Quickhacks** view, press **Refresh**, so EDGEhack reads the new numbers.
3. Open each quickhack in your project and save it (`Ctrl+S`).
4. Press **Pack and Play**.

If a save in step 3 changes nothing because the page has no unsaved change, change any number, change it back, and save.

## The Desk and the Library

| You see | Do this |
|---|---|
| **Add to Library** put the quickhack in the Library's top folder | The folder list opens right after the first-time question about where the Library goes, and is easy to click through. To move the quickhack, choose **Remove from Library** and add it again, picking **New Folder...** or a folder of yours |
| **Add to Project** says to open a project first | Open your project's folder in VS Code, so REDcode's Project view shows it. Then choose Add to Project again |
| The Library view is empty though other EDGE tools use the Library | The view lists only folders that hold quickhacks |
| A Project quickhack is marked **newer in the Library** | You changed the Library's copy after adding it to the project. **Refresh from Library** takes the new version, and replaces changes made in the project |

## Assistants

| You see | Do this |
|---|---|
| Claude Code's `/mcp` doesn't list `edgehack` | Run **EDGEhack: Connect an Assistant (MCP)...**, choose **Connect Claude Code**, then start a **new** Claude Code session. A session that was already running doesn't see it |
| "Claude Code's `claude` command isn't on the PATH" | Choose **Copy the Command**, and paste it into a terminal where the `claude` command works |
| Claude Code makes the quickhack in the wrong place | The server works on the project in the folder where Claude Code started. Start it in your project's folder, or give the folder in your request. With no project, quickhacks go on the Desk |
| I have EDGEchat, and it has no quickhack tools | EDGEchat includes EDGEhack from 0.2.1: [update EDGEchat](https://edgemodders.ai/wiki/edgechat/settings.html#updates), then restart Claude Code |
| REDagent in the game has no quickhack tools | That is not released yet: see [REDagent in the game](https://edgemodders.ai/wiki/edgehack/assistants.html#redagent-in-the-game) |

## Anything else

EDGEhack writes what it does to its log: **View › Output**, then pick **EDGEhack** in the list. Reading the game, each save and the files it wrote, Try Live and the Library are all there.

Ask on the community [Discord](https://discord.gg/63qP3Erw43), or open an [issue](https://github.com/Edgemodders/EDGEhack/issues). Include the log's last lines and say what you did before the problem.
