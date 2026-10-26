<!-- Copied from EDGEweb's docs/wiki/edgekit/index.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgekit/ (reviewed 2026-10-24) -->

# EDGEkit

EDGEkit is the EDGEmodders editor: one app to install, with every EDGE tool already inside. It is built from Code - OSS, the open-source core of VS Code, with its own name and look, the way VSCodium is. You install EDGEkit and start modding Cyberpunk 2077, with no extensions to hunt for.

EDGEkit comes in two forms:

| Form | What it is | Status |
|---|---|---|
| **The EDGEkit app** | A complete editor of its own, with the EDGE extensions built in | **Released as a preview:** 1.140.1, 22 October 2026, Windows x64. See [Get the app](https://edgemodders.ai/wiki/edgekit/#get-the-app) below |
| **The EDGEkit extension pack** | One extension for VS Code (or VSCodium) that installs the published EDGE extensions in one go | **Available, as a preview.** See [Install the extension pack](https://edgemodders.ai/wiki/edgekit/install-pack.html) |

## Why you might want it

| If you... | EDGEkit gives you |
|---|---|
| Are new to modding and to VS Code | The app: one install instead of a list of extensions to find and set up |
| Already use VS Code | The extension pack: REDcode, EDGEdeck and the HUD theme in one click |
| Want your tools to stay current | Each EDGE extension updates on its own, so a fix in EDGEdeck reaches you without waiting for a new EDGEkit |
| Want to stay offline | The app works on first start with no network, since its extensions are built in |

## Get the app

1. Download `EDGEkitSetup-1.140.1.exe` from the [EDGEkit releases page](https://github.com/Edgemodders/EDGEkit/releases/latest).
2. Run it. The installer isn't signed yet, so Windows SmartScreen may warn: choose **More info**, then **Run anyway**. It installs for your Windows user only, beside VS Code, without touching it.
3. On first start, a short onboarding offers an optional GitHub sign-in and a theme choice, then EDGEkit's Welcome walkthrough. Claude Code installs from Open VSX after you confirm that you trust its publisher.
4. Follow each tool's first steps: [REDcode](https://edgemodders.ai/wiki/redcode/install.html) needs REDbridge, [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html) has its Set up steps.

EDGEkit checks for a new release when it starts and then every hour. When one is out, **Restart to Update** in the gear menu installs it. The built-in extensions update themselves from Open VSX in between. Each release's changes are in EDGEkit's [changelog](https://github.com/Edgemodders/EDGEkit/blob/main/CHANGELOG.md).

## What the app is

These are decisions from EDGEkit's design:

| Decision | What it means for you |
|---|---|
| Built on Code - OSS | It looks and works like VS Code, but is called EDGEkit everywhere, with its own icon and settings folder. It sits beside an installed VS Code without touching it |
| The EDGE extensions built in | In 1.140.1: REDcode 0.10.3, EDGEdeck 0.27.3, EDGEmat 0.3.1, EDGEwave 0.1.0, the REDnode HUD theme 0.3.1 (the default theme) and Redscript IDE 0.3.4. Each then updates itself from Open VSX. REDagent's editor view may join later |
| Extensions from Open VSX | VS Code's own Marketplace is only for Microsoft's products, so EDGEkit uses [Open VSX](https://open-vsx.org/), as VSCodium does |
| Windows x64 only, for now | Linux may come later |
| Unsigned at first | Windows SmartScreen may warn: choose **More info**, then **Run anyway** |
| No Copilot chat | Copilot chat and the Agents window are off. Claude Code installs from Open VSX on the first start, after you confirm |
| Rare releases | A new EDGEkit only when the editor itself changes. The extensions update themselves in between |

Giving Claude Code the modding knowledge and the EDGE tools is the job of EDGEchat, a separate Claude Code plugin (a preview, not released yet). The next EDGEkit, built but not released, offers to set EDGEchat up with one click (**EDGEkit: Set Up Claude Code for EDGE**). Until then, see [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html).

## Status

As of 2026-10-24:

| Phase | State |
|---|---|
| K0 Decide | Done 2026-10-15: the decisions above |
| K1 Build | Done 2026-10-18: Code - OSS built from source, without Copilot |
| K2 Brand | Under way: name, icons, installer, default theme and watermark done; the onboarding and Welcome text wait for the owner's review |
| K3 Bundle | Done 2026-10-21: the EDGE extensions built in, working offline, updating from Open VSX |
| K4 Release | **EDGEkit 1.140.1, the first release, published 2026-10-22.** The extension pack is published as a preview on the VS Code Marketplace and Open VSX (0.2.0, 2026-10-17); pack 0.3.0, adding EDGEmat and EDGEwave, is built but not published yet. Not yet seen: a real **Restart to Update** from an installed 1.140.x |

## Roadmap

In plain words. Each phase ends with a test on the developer's PC.

| Phase | What it adds | Status |
|---|---|---|
| K0 Decide | The name, platform, updates, AI and trademark decisions | Done |
| K1 Build | Code - OSS built from source, unbranded | Done |
| K2 Brand | EDGEkit's name, icons, default theme and welcome page | Under way |
| K3 Bundle | The released EDGE extensions built in, working with no network, and updating themselves from Open VSX | Done |
| K4 Release | A Windows installer anyone can download, which updates itself. The extension pack shipped early | 1.140.1 released; pack published |
| K5 Track upstream | Moving to newer Code - OSS releases every month or so, sooner for a security fix | Planned |

## In this section

| Page | |
|---|---|
| [Get the app](https://edgemodders.ai/wiki/edgekit/#get-the-app) | Download and install the EDGEkit app (on this page) |
| [Install the extension pack](https://edgemodders.ai/wiki/edgekit/install-pack.html) | Get the EDGE extensions in VS Code with one install |

The [EDGEkit docs](https://edgemodders.github.io/EDGEkit/) and its [design](https://edgemodders.github.io/EDGEkit/design.html) are the developer reference. Source and issues: [github.com/Edgemodders/EDGEkit](https://github.com/Edgemodders/EDGEkit).

EDGEkit is not affiliated with Microsoft. Visual Studio Code is a trademark of Microsoft; EDGEkit is built from the MIT-licensed Code - OSS.
