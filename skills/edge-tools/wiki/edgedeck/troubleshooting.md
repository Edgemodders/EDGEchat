<!-- Copied from EDGEweb's docs/wiki/edgedeck/troubleshooting.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/troubleshooting.html (reviewed 2026-11-25) -->

# Troubleshooting EDGEdeck

Find what you see in the left column. If it isn't here, the [last section](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#anything-else) says where to look and where to ask.

| Where are you stuck? | |
|---|---|
| [Setting up](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#setting-up) | The icon, the game folder, REDbridge |
| [Adding mods](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#adding-mods) | A file that won't add, mods missing from the list |
| [Deploying](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#deploying) | The game is running, Vortex, a file in use, changed files |
| [Nexus Mods](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#nexus-mods) | Signing in, download links, updates |
| [In the game](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#in-the-game) | A mod doesn't show, the game won't start |
| [Assistants](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#assistants) | Claude can't see EDGEdeck, or sees it twice |

EDGEdeck updates itself, and many problems are fixed in a newer version. If something looks broken, check the Extensions view for an update first.

## Setting up

| You see | Do this |
|---|---|
| No EDGEdeck icon in the activity bar after installing | Press `Ctrl+Shift+P`, type `Developer: Reload Window` and press Enter. Still missing: right-click the activity bar and check that **EDGEdeck** is ticked. EDGEdeck runs on Windows only |
| **No mods yet**, and no Set up group | Normal for an empty list. The set-up steps are the buttons under the text, and **Get the frameworks...** is in the **`...`** menu. See [The Set up steps](https://edgemodders.ai/wiki/edgedeck/install.html#the-set-up-steps) |
| `EDGEdeck: game not found` in the status bar | EDGEdeck couldn't find Cyberpunk 2077 through Steam, GOG or Epic. Click the status bar, or **Find the game folder**, and pick the folder that contains `bin`, `archive` and `r6`. If the game *is* in a Steam library the [log](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#anything-else) lists, please [report it](https://github.com/Edgemodders/EDGEdeck/issues) with those lines |
| <a id="no-conflicts-inside-archives"></a>No conflicts inside archives | Those need REDbridge. Look at the EDGEdeck page's footer. A **green dot** and a REDbridge version: it's running, and you may simply have no such conflicts. A **Get REDbridge** button: press it. It also installs the .NET 10 runtime REDbridge needs, for your Windows user |
| Deploy copies files instead of using hardlinks | Your library is on a different drive from the game. Use **Move library...**, or the **Move the library to the game's drive** step, then deploy once. See [Moving the library](https://edgemodders.ai/wiki/edgedeck/library.html#moving-the-library) |

## Adding mods

| You see | Do this |
|---|---|
| Adding or updating a mod fails with `spawn ...7za.exe ENOENT`, or EDGEdeck says it was updated while the window was open | VS Code updated EDGEdeck in the background and removed the old version's files while this window still ran it. Press **Reload window**, or `Ctrl+Shift+P` and `Developer: Reload Window`, then try again. Nothing was added, and finished downloads are not downloaded again. EDGEdeck 0.34.2 and later use an installed 7-Zip instead, when you have one |
| A `.rar` file won't add | EDGEdeck opens zip and 7z on its own, but a rar needs [7-Zip](https://7-zip.org) or WinRAR installed. Install one, or pack the files again as a zip |
| "Nothing in ... looks like a Cyberpunk mod file" | The download holds no file EDGEdeck knows a place for. Check that it is a Cyberpunk 2077 mod, and that you picked the download itself, not a readme |
| "... files EDGEdeck did not know where to put were left out" | The mod was added without those files. The [log](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#anything-else) names them. Often they are readmes or pictures and don't matter |
| Mods I installed by hand aren't in the list | The list shows only mods in EDGEdeck's library. Add their original downloads with **Add mod**. See [Mods you installed by hand](https://edgemodders.ai/wiki/edgedeck/deploying.html#mods-you-installed-by-hand) |
| The list is empty, but I had mods | EDGEdeck may be looking at another library folder. Check the setting `edgedeck.libraryPath`: see [Moving the library](https://edgemodders.ai/wiki/edgedeck/library.html#moving-the-library) |

## Deploying

| You see | Do this |
|---|---|
| "Cyberpunk 2077 is running" | The game keeps mod files open, and Windows won't let EDGEdeck change them. Quit the game, then press **The game is closed now**. See [Close the game first](https://edgemodders.ai/wiki/edgedeck/deploying.html#close-the-game-first) |
| A deploy stopped: a file "is in use" | Another program has a file in the game folder open, and the message names it. Close that program (or the game, if it's still shutting down) and deploy again. What the deploy finished is kept; the rest is still waiting |
| "Vortex manages the game", or "Vortex manages this game folder" | Vortex has mods deployed, and two managers can't deploy into one folder. Purge in Vortex (**Mods**, **Purge**), then deploy in EDGEdeck. See [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html) |
| A mod says `changed in game folder` or `changed, deploy again` | Something outside EDGEdeck changed or replaced its files, usually a Steam **Verify integrity of game files** or a game update. Deploy. EDGEdeck asks about each changed file whether to keep the change or put the mod's file back. See [Changes made outside EDGEdeck](https://edgemodders.ai/wiki/edgedeck/deploying.html#changes-made-outside-edgedeck) |
| "A deploy is already under way", or a similar short notice | You pressed a button twice. The first press is still working: wait for it |
| I don't know what my last deploy changed | Press **View** on the deploy message. Earlier reports, the newest 30, are in the `deploys` folder of your library. For what the *next* deploy will do, use **Show pending changes**. See [Deploy reports](https://edgemodders.ai/wiki/edgedeck/deploying.html#deploy-reports) |

## Nexus Mods

| You see | Do this |
|---|---|
| Nexus rejects the key | Copy the whole **Personal API Key** from the bottom of your Nexus [API Access page](https://www.nexusmods.com/users/myaccount?tab=api+access), with no spaces around it, and run **Nexus: set API key (paste, instead of signing in)**. See [Signing in](https://edgemodders.ai/wiki/edgedeck/nexus.html#signing-in) |
| **Sign in** opens a Nexus page about API keys, not a sign-in screen | That is how signing in works for now: copy the key from that page and paste it into the box in the editor |
| **Mod manager download** opens Vortex, not EDGEdeck | Vortex takes the download links back every time it starts. Run **Nexus: handle download links (nxm)**, or use the step that reappears in the Set up group |
| **Mod manager download** does nothing | The first time a link arrives, the editor asks whether EDGEdeck may open it, and that question can sit behind your browser: switch to the editor. Otherwise another program has the links: run **Nexus: handle download links (nxm)** again. The [log](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#anything-else) line "Nexus download links go to:" says who has them |
| The link opens another editor | With EDGEdeck in two editors, such as VS Code and EDGEkit, the links go to the one where you last ran **Nexus: handle download links (nxm)**. Run it in the editor you want |
| "Premium only" when updating | Nexus gives direct downloads to Premium members only. EDGEdeck opens the file's download page instead: press the download button there and the file arrives through the link. See [Premium and free accounts](https://edgemodders.ai/wiki/edgedeck/nexus.html#premium-and-free-accounts) |
| A download says "waiting: 2 downloads ahead" | Normal on a free account: downloads run one at a time. See [Downloads](https://edgemodders.ai/wiki/edgedeck/nexus.html#downloads) |
| The update check finds nothing for a mod | The mod doesn't know its Nexus page, usually because you added it from a file. Remove it and add it again with **Mod manager download**. Mods imported from Vortex with an older EDGEdeck may need removing and importing again |
| A second file from a Nexus page seems to have replaced the first | Each file is a mod of its own, under one row named after the page: click the row's arrow to see both. See [Several files from one page](https://edgemodders.ai/wiki/edgedeck/nexus.html#several-files-from-one-page) |

## In the game

| You see | Do this |
|---|---|
| A mod says `deployed`, but nothing changes in the game | Most often something it needs is missing. Open the mod's Nexus page (right-click, **Open on Nexus Mods**) and check its **Requirements** against your list, frameworks included. Then check [Show conflicts](https://edgemodders.ai/wiki/edgedeck/conflicts.html#the-conflicts-page): another mod may be winning its files |
| An archive mod is on but doesn't show | Check that it says `deployed`. If its status says `loses ... archive files`, another mod is replacing its contents: see [Changing who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html#changing-who-wins) |
| REDmod mods are deployed but don't load | REDmod mods load only when the game starts with `-modded`. Start the game with **Run game** in EDGEdeck, which adds it, or add `-modded` to the game's launch options in Steam, GOG or Epic |
| REDnode's window doesn't open after **Run game** | Update EDGEdeck and REDnode. See [REDnode's troubleshooting](https://edgemodders.ai/wiki/rednode/troubleshooting.html) |
| The game won't start after a game update | A framework probably needs updating for the new game version. Press **Update the frameworks** on the EDGEdeck page, then deploy. See [After a game update](https://edgemodders.ai/wiki/edgedeck/frameworks.html#after-a-game-update) |
| The game won't start, or crashes, after adding mods | Follow [Finding the mod that breaks the game](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#finding-the-mod-that-breaks-the-game) below |

### Finding the mod that breaks the game

1. Press **Undo deploy** and start the game. If it works now, a mod is the cause. If it still fails, the cause is elsewhere: verify the game's files in Steam, GOG or Epic.
2. Keep your full setup safe: choose **Save as new loadout...** and name it "testing", then **Switch loadout...** to it. Your changes from now on go into "testing", and your usual [loadout](https://edgemodders.ai/wiki/edgedeck/loadouts.html) stays as it was.
3. Turn half your mods off and deploy. Start the game. If it works, the culprit is in the half you turned off; if not, in the half still on. Keep halving until you find the mod. Leave the frameworks on: other mods need them.
4. Check that mod's Nexus page for its requirements: a framework it needs may be missing or out of date.
5. When you're done, **Switch loadout...** back to your usual loadout and deploy.

## Assistants

| You see | Do this |
|---|---|
| Claude Code can't see EDGEdeck's tools | With EDGEchat: run `/edge:setup`, which checks each connection and says what to do. See [EDGEchat's troubleshooting](https://edgemodders.ai/wiki/edgechat/troubleshooting.html). Without it: see [Connect an assistant](https://edgemodders.ai/wiki/edgedeck/assistants.html#connect-an-assistant) |
| Every EDGEdeck tool shows twice | EDGEdeck is connected twice, by EDGEchat and by hand. Run `/edge:setup`: it names the copy added by hand and explains how to remove it |
| The assistant sees no mods, but you have some | It opened another library. In EDGEchat's settings, fill in **EDGEdeck library** with your library folder, then restart Claude Code. See [EDGEchat's settings](https://edgemodders.ai/wiki/edgechat/install.html#step-3-fill-in-the-settings) |
| "node" or "npx" isn't found | Install [Node.js](https://nodejs.org/) 20 or newer |

## Anything else

Open the log: choose **Show log** in the Mods view's **`...`** menu, or the editor's **View**, **Output**, then pick **EDGEdeck** in the dropdown. The first lines say where the library and the game are and how the game was found. Errors are marked `Error:`.

Still stuck? Ask on [Discord](https://discord.gg/63qP3Erw43) or [open an issue](https://github.com/Edgemodders/EDGEdeck/issues). Say which EDGEdeck version you have, and paste the log's first lines.
