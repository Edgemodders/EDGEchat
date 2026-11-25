<!-- Copied from EDGEweb's docs/wiki/redbridge/troubleshooting.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redbridge/troubleshooting.html (reviewed 2026-11-13) -->

# Troubleshooting REDbridge

REDbridge has no window, so its problems show up in the tool that uses it. Start there: the first table says where to look in each tool. Then find what you see in the tables below.

| On this page | |
|---|---|
| [Where to look](https://edgemodders.ai/wiki/redbridge/troubleshooting.html#where-to-look) | Where each tool shows REDbridge, and its log |
| [Missing, or the download fails](https://edgemodders.ai/wiki/redbridge/troubleshooting.html#missing-or-the-download-fails) | |
| [Too old](https://edgemodders.ai/wiki/redbridge/troubleshooting.html#too-old) | |
| [Not starting](https://edgemodders.ai/wiki/redbridge/troubleshooting.html#not-starting) | Usually the .NET runtime |
| [Slow, or files that fail to open](https://edgemodders.ai/wiki/redbridge/troubleshooting.html#slow-or-files-that-fail-to-open) | |
| [Baking with EDGEbuilder](https://edgemodders.ai/wiki/redbridge/troubleshooting.html#baking-with-edgebuilder) | |
| [Anything else](https://edgemodders.ai/wiki/redbridge/troubleshooting.html#anything-else) | |

## Where to look

| Tool | Where REDbridge shows | Its log |
|---|---|---|
| EDGEdeck | The footer of the EDGEdeck page: a green dot and the running version, or a **Get REDbridge** button | **Show log** in the Mods view's **`...`** menu |
| REDcode | REDcode's item in the status bar, at the bottom of VS Code | **REDcode: Show REDbridge log**, or click the status bar item |
| REDnode | The Mod Manager, in the details of a mod that uses REDbridge: which copy it uses and where it came from, or a **Get REDbridge** button | REDnode's [Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log) window, for the mod's own messages |
| [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) | The second pill at the top of its panel: **REDbridge** and its version when all is well. Hover it for the reason when it isn't. Its Settings tab names the copy in use and has **Restart REDbridge** | The `[edgebuilder]` lines in `rednode-mods.log`. See [EDGEbuilder's troubleshooting](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#anything-else) |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/) | **Show Log** in Game Materials' **`...`** menu says "Using REDcode's REDbridge" or "Starting REDbridge from ..." | The same log |
| [EDGEchat](https://edgemodders.ai/wiki/edgechat/) | [EDGEchat's troubleshooting](https://edgemodders.ai/wiki/edgechat/troubleshooting.html) says how to check its connections | |

## Missing, or the download fails

| You see | Do this |
|---|---|
| EDGEdeck shows no conflicts inside archives | Look at the footer of the EDGEdeck page. A **Get REDbridge** button means there's no REDbridge yet: press it. A green dot with a version means it's running, and you may simply have no conflicts inside archives. See [EDGEdeck's troubleshooting](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#no-conflicts-inside-archives) |
| REDcode's status bar says "bridge not found" | Run **REDcode: Install REDbridge** from the command palette (`Ctrl+Shift+P`) |
| A mod in the game says REDbridge isn't available, or EDGEbuilder's pill says **No REDbridge** | REDnode found no copy on this PC. Press **Get REDbridge** in the mod's details in REDnode's Mod Manager, or in EDGEdeck. Any one copy will do: see [Do I need several copies?](https://edgemodders.ai/wiki/redbridge/install.html#do-i-need-several-copies) |
| EDGEbuilder's pill says **Allow REDbridge (hover)** | REDbridge is there, but the mod isn't allowed to use it. In the Mod Manager, click the mod and switch on **Allowed** beside the REDbridge line. See [Permissions](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions) |
| **Get REDbridge** fails or never finishes | It downloads from GitHub, so check your internet connection, and that a firewall or your network doesn't block github.com. REDnode's Mod Manager shows the error with **Try again**. If it keeps failing, [install it by hand](https://edgemodders.ai/wiki/redbridge/install.html#installing-it-by-hand) |
| The download worked, but `REDbridge.exe` is gone afterwards | An antivirus program may have removed it. Look in its quarantine, restore the file and allow the folder. We have not seen this ourselves, so tell us if it happens |

## Too old

| You see | Do this |
|---|---|
| REDcode says "REDbridge ... is older than this extension needs", or Find Items says it needs a newer REDbridge | Press **Update REDbridge**, or run **REDcode: Update REDbridge** |
| EDGEbuilder's Bake tab warns that REDbridge writes no solid meshes, or does not pass Seen from on | The copy REDnode found is older than 0.12.1. Update it in the tool that fetched it: **Update REDbridge** in EDGEdeck or in REDnode's Mod Manager, or **REDcode: Update REDbridge**. Then press **Restart REDbridge** on EDGEbuilder's Settings tab |
| A tool still uses the old copy after an update elsewhere | EDGEdeck and REDcode each use their own copy, so update each in its own tool. REDnode takes the newest copy it finds. See [Do I need several copies?](https://edgemodders.ai/wiki/redbridge/install.html#do-i-need-several-copies) |
| You pointed a tool at a copy you unzipped yourself, and it is too old | Close VS Code and the game. Download the newer zip and unzip it over that copy. See [Installing it by hand](https://edgemodders.ai/wiki/redbridge/install.html#installing-it-by-hand) |

See [Which version do I need?](https://edgemodders.ai/wiki/redbridge/install.html#which-version-do-i-need)

## Not starting

First read the error: [Where to look](https://edgemodders.ai/wiki/redbridge/troubleshooting.html#where-to-look) says where each tool's log is. The usual cause is a missing .NET 10 runtime.

| You use | Do this |
|---|---|
| EDGEdeck | Run **Get REDbridge** again. It installs the runtime for your Windows user when it's missing |
| REDcode | Accept its offer to install the runtime (**Install with winget**), or run `winget install Microsoft.DotNet.Runtime.10` in a terminal. Then run **REDcode: Restart REDbridge**, or reload VS Code |
| REDnode, or a mod in the game | Press **Get REDbridge** in the Mod Manager again. It installs the runtime when it's missing |
| EDGEbuilder | After the fix, press **Restart REDbridge** on its Settings tab, or restart the game. If you typed a path in its **REDbridge.exe** field, empty it and press **Save and restart REDbridge** |

| You see | Do this |
|---|---|
| The runtime is installed and REDbridge still won't start | Check that `DOTNET_ROOT` isn't set in Windows' environment variables (search the Start menu for "environment variables"). Remove it if it is: it makes every .NET program look only in one folder, and breaks other tools such as Vortex. If REDbridge needs a particular .NET, use the VS Code settings `edgedeck.dotnetRoot` or `redcode.dotnetRoot` |
| The runtime install was refused or failed | Download the **.NET Runtime 10** installer for Windows x64 from [dotnet.microsoft.com](https://dotnet.microsoft.com/download/dotnet/10.0) and run it yourself |
| REDcode says "the bridge stopped (exit code ...)" | Press **Restart REDbridge**. If it keeps happening, press **Show log** and include the last lines when you ask for help |

## Slow, or files that fail to open

| You see | Do this |
|---|---|
| The first look-up in TweakDB (the game's database of items and stats) is slow | That's expected. REDbridge reads the game's TweakDB file on the first request, which takes about 12 seconds. After that, look-ups are quick |
| Game 2.5 files fail to open | Your REDbridge is 0.10.0 or older, from before game 2.5. Update it |
| Only if you are still on game 2.31 and edit the world's sector files: sectors read wrong, or fail with "Non-zero padding bytes found" | REDbridge 0.11.0 and later read 2.31's sectors wrong. Everything else works on 2.31. Use REDbridge 0.10.0 for those. See [Game 2.31](https://edgemodders.ai/wiki/redbridge/install.html#game-231) |

## Baking with EDGEbuilder

Using EDGEbuilder? Its own page has these, in a player's words:

| You see | Read |
|---|---|
| V walks through a baked mesh, or a check says a mesh has no collision data | [V walks through a baked mesh](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#v-walks-through-a-baked-mesh) |
| A bake doesn't show in the game | [My bake doesn't show in the game](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#my-bake-doesnt-show-in-the-game) |
| Baked objects vanish as you walk away | [Seen from](https://edgemodders.ai/wiki/edgebuilder/baking.html#seen-from) |

**For tool makers** who call REDbridge directly:

| The call | What to know |
|---|---|
| `sector.build` writes a mesh that isn't solid | A mesh is solid only with `"solid": true` on it in the scene, and collision data in the mesh. Without the data it still shows, and the bake's warning names it. `mesh.info` tells you first: its `hasCollision` is false for those |
| `sector.build` refuses a file that isn't in the game's archives | Pass the mod's `archive` or the project's `root`, so REDbridge can check the file and read its size. Or give the object's `bounds` in the scene: the bake then runs, with a warning that the game needs the mod that has the file |

Both need REDbridge 0.12.0 or later. The [changelog](https://github.com/Edgemodders/REDbridge/blob/main/CHANGELOG.md) has the full shapes.

## Anything else

Ask on [Discord](https://discord.gg/63qP3Erw43) with the lines from the tool's log, or [open an issue](https://github.com/Edgemodders/REDbridge/issues). Say which tool you were using, and which REDbridge version it shows.
