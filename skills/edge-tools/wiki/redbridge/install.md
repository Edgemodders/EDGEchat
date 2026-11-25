<!-- Copied from EDGEweb's docs/wiki/redbridge/install.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redbridge/install.html (reviewed 2026-11-22) -->

# Install and update REDbridge

You almost never install REDbridge yourself. The tool that needs it offers to download it, and asks you first. This page says where each copy comes from, so you know what you have.

| On this page | |
|---|---|
| [What it needs](https://edgemodders.ai/wiki/redbridge/install.html#what-it-needs) | |
| [Do I need several copies?](https://edgemodders.ai/wiki/redbridge/install.html#do-i-need-several-copies) | Which copy each tool uses |
| [How each tool gets it](https://edgemodders.ai/wiki/redbridge/install.html#how-each-tool-gets-it) | EDGEdeck, REDcode, REDnode |
| [Which version do I need?](https://edgemodders.ai/wiki/redbridge/install.html#which-version-do-i-need) | And game 2.31 |
| [The .NET 10 runtime](https://edgemodders.ai/wiki/redbridge/install.html#the-net-10-runtime) | |
| [Installing it by hand](https://edgemodders.ai/wiki/redbridge/install.html#installing-it-by-hand) | |
| [Settings that point at REDbridge](https://edgemodders.ai/wiki/redbridge/install.html#settings-that-point-at-redbridge) | |
| [Removing it](https://edgemodders.ai/wiki/redbridge/install.html#removing-it) | |

## What it needs

| You need | Notes |
|---|---|
| Windows, 64-bit | REDbridge is Windows only for now |
| The .NET 10 runtime | A free Microsoft component that .NET programs run on. EDGEdeck and REDnode install it for you. REDcode offers to |
| Disk space | The download is a zip of about 60 MB, and about 200 MB once unpacked, for each copy |
| Cyberpunk 2077 | For anything that reads the game's own files. Reading a mod's archive on disk works without the game |

## Do I need several copies?

No. One click in any one tool is enough to start, and extra copies do no harm.

| Tool | The copy it uses |
|---|---|
| REDnode and the mods it runs, such as [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) | The newest copy it finds among its own, EDGEdeck's and REDcode's. So if EDGEdeck or REDcode already fetched REDbridge, the game side needs nothing more |
| EDGEdeck | Its own copy |
| REDcode | Its own copy |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/) | REDcode's copy |
| [EDGEchat](https://edgemodders.ai/wiki/edgechat/) | The copy whose path you give it, or REDcode's |

So with EDGEdeck and REDcode both installed, you end up with two copies, one each. That is normal. Each tool updates its own.

To see which copy a tool is using, look where the [troubleshooting page](https://edgemodders.ai/wiki/redbridge/troubleshooting.html#where-to-look) says REDbridge shows in that tool.

## How each tool gets it

### EDGEdeck

| | |
|---|---|
| **Get it** | Press **Get REDbridge** in the Set up group. It says what it will download, then fetches the latest release. If your PC has no .NET 10 runtime, it installs one for your Windows user only |
| **Where it goes** | EDGEdeck's own storage folder inside VS Code's settings folder |
| **Updates** | EDGEdeck checks once a day and offers a newer release. **Update REDbridge** in the command palette checks straight away, and removes the old copy afterwards |

See [Getting REDbridge](https://edgemodders.ai/wiki/edgedeck/install.html#getting-redbridge).

### REDcode

| | |
|---|---|
| **Get it** | At its first start REDcode offers to download it: press **Install REDbridge**. The command **REDcode: Install REDbridge** does the same at any time |
| **Where it goes** | REDcode's own storage folder. REDcode remembers the path in its `redcode.bridgePath` setting |
| **Updates** | REDcode checks once each time you start it and offers a newer release. **REDcode: Update REDbridge** stops REDbridge, updates it and starts it again |

See [Installing REDbridge](https://edgemodders.ai/wiki/redcode/install.html#installing-redbridge).

### REDnode, in the game

| | |
|---|---|
| **Get it** | When a mod needs REDbridge and REDnode finds no copy on your PC, the Mod Manager shows **Get REDbridge** in that mod's details. It says what it will download, then fetches the latest release, with the .NET 10 runtime for your Windows user if it's missing. No administrator prompt appears |
| **Where it goes** | `%LOCALAPPDATA%\REDnode\bridge` |
| **Updates** | Each time you play, REDnode checks once and the Mod Manager offers **Update REDbridge**. It never updates without you |

A mod must also be allowed to use REDbridge. In the Mod Manager, click the mod and switch on **Allowed** beside the line that starts "REDbridge, WolvenKit's engine". For EDGEbuilder, see [Open it and allow its permissions](https://edgemodders.ai/wiki/edgebuilder/install.html#3-open-it-and-allow-its-permissions).

One REDbridge then serves every mod in the game. It starts when a mod first asks for it, and stops after 10 minutes without requests. See [Get REDbridge](https://edgemodders.ai/wiki/rednode/mod-manager.html#get-redbridge).

## Which version do I need?

**The newest release, 0.12.1, covers everything on game 2.5.** If a tool fetched REDbridge for you recently, you have it.

A copy that a tool fetched some time ago can be too old for another tool that shares it. These are the minimums:

| Tool | Needs REDbridge |
|---|---|
| [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/install.html) 0.10.9 | 0.12.1 or later. An older copy still lists the game's models, but leaves parts out of a bake, and the Bake tab warns about it |
| [REDcode](https://edgemodders.ai/wiki/redcode/) 0.10.16 | 0.18.0 or later. The Keys view needs it; 0.19.0 also gives Uthana its name there. If yours is older, REDcode says so and offers **Update REDbridge** |
| [EDGEchat](https://edgemodders.ai/wiki/edgechat/install.html) | 0.11.0 or later |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/install.html) | 0.8.0 or later |
| EDGEdeck | Any release it fetched |
| Another REDnode mod | The version in its requirements, which the Mod Manager shows |

### Game 2.31

REDbridge 0.11.0 and later are built for game 2.5. On a game kept at 2.31 they still work, with one exception: they read 2.31's **sector** files wrong. Sectors are the files that place objects in the world. If you edit those on 2.31, use REDbridge 0.10.0, [installed by hand](https://edgemodders.ai/wiki/redbridge/install.html#installing-it-by-hand). Most people never open a sector file and can ignore this.

Going the other way, REDbridge 0.10.0 and older fail to open some of game 2.5's files.

## The .NET 10 runtime

REDbridge is a .NET program, so it needs Microsoft's .NET 10 runtime.

| You got REDbridge through | The runtime |
|---|---|
| EDGEdeck or REDnode | **Get REDbridge** installs it for your Windows user when it's missing. Nothing else to do |
| REDcode | If REDbridge fails to start and no runtime is installed, REDcode says so and offers **Install with winget**, or the download page |
| By hand | Run `winget install Microsoft.DotNet.Runtime.10` in a terminal |

> **Never set `DOTNET_ROOT` in Windows' environment variables.** Set for your whole Windows account, it makes every .NET program look only in that folder, and it breaks other tools, Vortex among them. If REDbridge needs a particular .NET, use the VS Code settings `edgedeck.dotnetRoot` or `redcode.dotnetRoot`: they apply to REDbridge alone.

## Installing it by hand

For a copy you manage yourself. You need this in three cases: your PC can't reach GitHub from VS Code, you want REDbridge 0.10.0 for [game 2.31](https://edgemodders.ai/wiki/redbridge/install.html#game-231), or you use EDGEchat without REDcode.

1. Download `REDbridge-<version>-win-x64.zip` from the [releases page](https://github.com/Edgemodders/REDbridge/releases).
2. Unzip it anywhere, for example `C:\Tools\REDbridge`.
3. Point the tool at `REDbridge.exe`, with one of the [settings below](https://edgemodders.ai/wiki/redbridge/install.html#settings-that-point-at-redbridge).

A copy you set up yourself is yours to update: EDGEdeck's daily check leaves it alone. To update it, close VS Code and the game, download the newer zip and unzip it over the old copy.

Developers can build REDbridge from source. Its [setup guide](https://edgemodders.github.io/REDbridge/dev-setup.html) has every step.

## Settings that point at REDbridge

Leave all of these empty unless you installed REDbridge by hand.

| Tool | Setting | Where |
|---|---|---|
| EDGEdeck | `edgedeck.bridgePath`, and `edgedeck.dotnetRoot` | VS Code's settings (`Ctrl+,`) |
| REDcode | `redcode.bridgePath`, `redcode.dotnetRoot`, and `redcode.bridgeUpdateCheck` to switch the update check off | VS Code's settings. See [REDcode's settings](https://edgemodders.ai/wiki/redcode/settings.html#game-and-redbridge) |
| EDGEmat | `edgemat.bridgePath`. Empty means REDcode's copy | VS Code's settings |
| EDGEbuilder | The **REDbridge.exe** field | Its [Settings tab](https://edgemodders.ai/wiki/edgebuilder/settings.html#settings), in the game |
| EDGEchat | The **REDbridge.exe** setting of the plugin | `/plugin configure edge@edgemodders` in Claude Code. See [EDGEchat's install page](https://edgemodders.ai/wiki/edgechat/install.html#step-3-fill-in-the-settings) |

## Removing it

REDbridge has no installer and leaves nothing running. Uninstalling EDGEdeck or REDcode does not always remove the copy they fetched.

To remove a copy, close VS Code and the game, then delete its folder:

| Copy | Folder |
|---|---|
| REDnode's | `%LOCALAPPDATA%\REDnode\bridge` |
| EDGEdeck's | `%APPDATA%\Code\User\globalStorage\edgemodders.edgedeck\bridge` |
| REDcode's | `%APPDATA%\Code\User\globalStorage\edgemodders.redcode-cyberpunk\bridge` |
| One you unzipped yourself | Where you put it |

A tool that still needs REDbridge will offer to fetch it again.
