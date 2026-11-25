<!-- Copied from EDGEweb's docs/wiki/edgekit/troubleshooting.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgekit/troubleshooting.html (reviewed 2026-11-13) -->

# Troubleshooting EDGEkit

This page covers the EDGEkit app itself. A problem inside one tool belongs to that tool's own troubleshooting page: [REDcode](https://edgemodders.ai/wiki/redcode/troubleshooting.html), [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html), [EDGEmat](https://edgemodders.ai/wiki/edgemat/troubleshooting.html), [EDGEquest](https://edgemodders.ai/wiki/edgequest/troubleshooting.html), [EDGEhack](https://edgemodders.ai/wiki/edgehack/troubleshooting.html), [EDGEchat](https://edgemodders.ai/wiki/edgechat/troubleshooting.html).

## Installing and starting

| You see | Do this |
|---|---|
| "Windows protected your PC" when you run the installer | The installer isn't signed yet. Choose **More info**, then **Run anyway** |
| The GitHub sign-in on the welcome screens seems to do nothing (1.140.6) | The sign-in shows a one-time code in a small notification, and in 1.140.6 the welcome screens cover it. The **Copy & Continue to Browser** button has already copied the code: paste it on the GitHub page that opened. Or skip the sign-in; it is optional. Fixed in the next release |
| No welcome screens after installing again | Your settings from the earlier install were kept. That is expected. For a clean start, uninstall, delete `%APPDATA%\EDGEkit` and the `.edgekit` folder in your user folder, and install again |
| A tool's icon is missing from the activity bar | Right-click the activity bar and tick the tool's name. If it isn't listed, open the **Extensions** view (**Ctrl+Shift+X**) and check that the tool is there and enabled |

## Claude Code and EDGEchat

| You see | Do this |
|---|---|
| Claude Code didn't install | You may have said no to "Do you trust the publisher Anthropic?", or been offline. Open the **Extensions** view (**Ctrl+Shift+X**), search for **Claude Code** and install it |
| EDGEkit never asked "Set up Claude Code for EDGE?" | It asks once, and only after Claude Code is installed. Run it yourself: **Ctrl+Shift+P**, then `EDGEkit: Set Up Claude Code for EDGE` |
| "Claude Code did not open its plugin dialog" | Press **Copy the Commands** on that message, and paste them into Claude Code's chat one at a time: `/plugin marketplace add Edgemodders/EDGEchat`, then `/plugin install edge@edgemodders` |
| Claude Code asks you to sign in or says your plan doesn't include it | Claude Code needs a Claude account whose plan includes Claude Code. That is Anthropic's, separate from EDGE |
| `/edge:setup` lists something as missing | See [EDGEchat's Install and connect](https://edgemodders.ai/wiki/edgechat/install.html) and its [troubleshooting](https://edgemodders.ai/wiki/edgechat/troubleshooting.html) |

## Nexus Mods downloads

| You see | Do this |
|---|---|
| **Mod manager download** on Nexus opens Vortex, or another program | That program holds the links. Vortex and Mod Organizer take them back when they start. Open the Welcome page (**Help**, then **Welcome**) and press the button in **Get mods from Nexus Mods**, or use EDGEdeck's **Handle Nexus download links** row |
| The button does nothing | See [Nexus Mods in EDGEdeck](https://edgemodders.ai/wiki/edgedeck/nexus.html#download-links) |

## Updates and extensions

| You see | Do this |
|---|---|
| No **Restart to Update** though a new release is out | Download the new installer from the [releases page](https://github.com/Edgemodders/EDGEkit/releases/latest) and run it over the old one. Your settings and mods stay |
| An extension you know from VS Code isn't in the Extensions view | EDGEkit gets extensions from [Open VSX](https://open-vsx.org/), an open registry, because Microsoft's Marketplace is only for Microsoft's own editors. Some extensions aren't published there |
| Redscript IDE downloads something the first time | It fetches its language server from GitHub once. It needs a network connection that one time |
| Redscript IDE doesn't update | It isn't on Open VSX, so the copy inside EDGEkit changes only with a new EDGEkit release. The EDGE tools update themselves |

## EDGEkit's command

EDGEkit adds one command of its own. Each built-in tool has its own commands and settings, listed on its Settings and commands page.

| Command | What it does |
|---|---|
| **EDGEkit: Set Up Claude Code for EDGE** | Opens Claude Code's plugin dialog on EDGEchat. If EDGEchat is already installed, opens a new Claude Code chat with `/edge:setup` ready to send |

## Where EDGEkit keeps things

| What | Where |
|---|---|
| Settings | `%APPDATA%\EDGEkit` |
| Installed extensions | The `.edgekit` folder in your user folder |
| The app | Installed for your Windows user. Uninstall it in Windows Settings, under **Apps** |

These are EDGEkit's own. VS Code's settings and extensions are in different folders and are never touched.

## Still stuck?

Ask on [Discord](https://discord.gg/63qP3Erw43) or [open an issue](https://github.com/Edgemodders/EDGEkit/issues). Say which EDGEkit version you have: **Help**, then **About**.
