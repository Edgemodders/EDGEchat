<!-- Copied from EDGEweb's docs/wiki/redbridge/install.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redbridge/install.html (reviewed 2026-10-24) -->

# Install and update REDbridge

You almost never install REDbridge yourself. The toolkit that needs it fetches it, with one question first. This page says where each copy comes from, so you know what you have.

## What it needs

| You need | Notes |
|---|---|
| Windows x64 | REDbridge is Windows only for now, because WolvenKit's texture tools are |
| The .NET 10 runtime | Microsoft's free runtime for .NET programs. EDGEdeck and REDnode install it for you; REDcode offers to |
| Disk space for each copy | The release download is a zip of about 60 MB |
| Cyberpunk 2077 | For anything that reads the game's own files. Reading a mod archive on disk works without it |

## How each toolkit gets it

| You use | How REDbridge arrives | How it stays current |
|---|---|---|
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html#getting-redbridge) | **Get REDbridge** in the Set up group says what it will download, then fetches the latest release into EDGEdeck's own folder. If your PC has no .NET 10 runtime, it installs one for your user account only | EDGEdeck checks once a day and offers a newer release. **Update REDbridge** checks straight away and removes the old copy afterwards |
| [REDcode](https://edgemodders.ai/wiki/redcode/) | On first start REDcode offers to download it. **REDcode: Install REDbridge** does the same at any time: it downloads the latest release into REDcode's storage and points REDcode at it | REDcode asks GitHub once per session and offers a newer release (setting `redcode.bridgeUpdateCheck`). **REDcode: Update REDbridge** stops the bridge, updates it and starts it again |
| [REDnode](https://edgemodders.ai/wiki/rednode/) | REDnode doesn't ship REDbridge, and players don't need VS Code for it. When a package needs REDbridge and none is found, REDnode's Mod Manager shows **Get REDbridge**: it says what it will download, then fetches the latest release into `%LOCALAPPDATA%\REDnode\bridge`, with the .NET 10 runtime for your user account if it's missing. No admin rights. Otherwise REDnode uses the newest copy that it, EDGEdeck or REDcode already fetched | REDnode asks GitHub once per session and the Mod Manager offers **Update REDbridge**. Never automatic |
| AI assistants | REDcode's MCP server, `@edgemodders/redcode-mcp`, uses the copy REDcode set up. With the EDGE plugin for Claude Code, you can instead download the zip yourself (see [Installing it by hand](https://edgemodders.ai/wiki/redbridge/install.html#installing-it-by-hand)) and give the plugin the path of `REDbridge.exe` | Through REDcode, or by hand |

Today EDGEdeck, REDcode and REDnode each keep their own copy. Sharing one copy between EDGEdeck and REDcode is planned on REDcode's side.

### REDnode packages

A REDnode package that wants REDbridge must ask for the **bridge** permission, and you allow it in REDnode's Mod Manager, which also shows where REDbridge was found. One REDbridge then serves every package: it starts on the first request, loads the game's archive index in about three seconds, and stops after 10 minutes without requests. See REDnode's [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html#the-games-files-through-redbridge) for the developer side.

### Which version do I need?

| Tool | Needs |
|---|---|
| REDcode 0.10.0 and newer | REDbridge 0.10.0 or newer. If yours is older, REDcode says so and offers **REDcode: Update REDbridge** |
| REDcode's MCP server 0.3.0 | REDbridge 0.10.0 for the `loc_*` tools, 0.9.0 for `sound_import` and mesh templates, 0.8.0 for the rest |
| A REDnode package that names REDbridge | The version in the package's requirements, which the Mod Manager shows. REDnode's Get REDbridge fetches the newest |
| EDGEdeck's Add to Project for archives | REDbridge 0.7.1 or newer |
| EDGEdeck's archive conflicts | Any release from 0.4.0 |

The newest release covers everything.

## The .NET 10 runtime

REDbridge is a .NET program, so it needs Microsoft's .NET 10 runtime.

- **Through EDGEdeck or REDnode:** Get REDbridge installs it for your user account when it's missing. Nothing else to do.
- **Through REDcode:** if the bridge fails to start and no runtime is installed, REDcode says so and offers to run `winget install Microsoft.DotNet.Runtime.10` in a terminal, or to open the download page.
- **By hand:** run `winget install Microsoft.DotNet.Runtime.10` in a terminal.

> **Never set `DOTNET_ROOT` for your whole Windows account.** Every .NET program then looks only there, and it breaks other tools, Vortex among them. If REDbridge needs a particular .NET, use `edgedeck.dotnetRoot` or `redcode.dotnetRoot`: they apply to REDbridge alone.

## Installing it by hand

For a copy you manage yourself, for example on a PC without access to GitHub from VS Code:

1. Download `REDbridge-<version>-win-x64.zip` from the [releases page](https://github.com/Edgemodders/REDbridge/releases).
2. Unzip it anywhere.
3. Point the tool at `REDbridge.exe`: the setting `edgedeck.bridgePath` for EDGEdeck, `redcode.bridgePath` for REDcode, or the REDbridge setting of the EDGE plugin for Claude Code (`/plugin configure edge@edgemodders`).

EDGEdeck's daily update check leaves a copy you set up yourself alone, so update it by hand too.

Developers can build REDbridge from source; its [setup guide](https://edgemodders.github.io/REDbridge/dev-setup.html) has every step.
