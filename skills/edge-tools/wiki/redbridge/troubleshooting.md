<!-- Copied from EDGEweb's docs/wiki/redbridge/troubleshooting.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redbridge/troubleshooting.html (reviewed 2026-10-24) -->

# Troubleshooting REDbridge

REDbridge has no window, so its problems show up in the tool that uses it. Start there.

## Where to look

| Tool | Where REDbridge shows | Its log |
|---|---|---|
| EDGEdeck | The EDGEdeck page's footer: a green dot and the running version, or a **Get REDbridge** button | **Show log** in the Mods view's `...` menu |
| REDcode | The status bar item for the bridge | **REDcode: Show REDbridge log**, or click the status bar item |
| REDnode | The Mod Manager, on a package that asks for the bridge permission or names REDbridge in its requirements, says which REDbridge it uses and where it came from, or shows **Get REDbridge** | REDnode's Mod log app, for the package's own messages |

## Problems and fixes

### EDGEdeck shows no conflicts inside archives

Look at the EDGEdeck page's footer. A **Get REDbridge** button means there's no REDbridge yet: click it. A green dot with a version means it's running, and you may simply have no conflicts inside archives. See [EDGEdeck's troubleshooting](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#no-conflicts-inside-archives).

### REDcode says REDbridge is too old

REDcode 0.10.0 and newer need REDbridge 0.10.0 or newer. Run **REDcode: Update REDbridge**. If you set `redcode.bridgePath` to a copy you manage yourself, download the newer release and unzip it over that copy instead. See [Install and update](https://edgemodders.ai/wiki/redbridge/install.html#which-version-do-i-need).

### REDbridge doesn't start

Usually the .NET 10 runtime is missing.

1. Through EDGEdeck or REDnode's Mod Manager: run **Get REDbridge** again. It installs the runtime for your user account when it's missing.
2. Through REDcode: accept its offer to install the runtime, or run `winget install Microsoft.DotNet.Runtime.10` in a terminal.
3. Then **REDcode: Restart REDbridge**, or reload VS Code.

If it still fails, check that you haven't set `DOTNET_ROOT` for your whole Windows account (in Windows' environment variables). Remove it if you have: it makes .NET programs look only there, and breaks other tools such as Vortex. Use `edgedeck.dotnetRoot` or `redcode.dotnetRoot` instead when REDbridge needs a particular .NET.

### A REDnode package says REDbridge isn't available

Two things must be true:

- **REDbridge is installed.** The simplest way is **Get REDbridge** in REDnode's Mod Manager (F10, then the Mod Manager), on the package's line. REDnode also uses a copy that EDGEdeck (**Get REDbridge**) or REDcode (**REDcode: Install REDbridge**) fetched.
- **You allowed the package's bridge permission** in REDnode's Mod Manager. The Mod Manager also shows where REDbridge was found.

If Get REDbridge fails, the Mod Manager shows the error and **Try again**. It needs to reach GitHub.

### The first TweakDB look-up is slow

That's expected. REDbridge reads the game's TweakDB file on the first request, which takes about 12 seconds. After that, look-ups are quick. REDcode's TweakDB view says when it's loading.

### Something else

Ask on [Discord](https://discord.gg/63qP3Erw43) with the lines from the tool's log, or [open an issue](https://github.com/Edgemodders/REDbridge/issues) on REDbridge's repo.
