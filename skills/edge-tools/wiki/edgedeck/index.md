<!-- Copied from EDGEweb's docs/wiki/edgedeck/index.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/ (reviewed 2026-11-25) -->

# EDGEdeck

EDGEdeck is the EDGE platform's mod manager for Cyberpunk 2077. It looks after the mods you download: it keeps them, puts the ones you want into the game, takes them out again, and tells you when two of them change the same thing. You don't need to code to use it.

EDGEdeck is an add-on (an **extension**) for [VS Code](https://code.visualstudio.com/), a free editor from Microsoft. It also comes built into the [EDGEkit app](https://edgemodders.ai/wiki/edgekit/), EDGE's own editor.

(Screenshot on the wiki, "EDGEdeck in VS Code": The EDGEdeck Mods view in VS Code's sidebar with a typical list of mods, the Frameworks group at the top, and the EDGEdeck page open beside it.)

**New here?** Read this page, then [Install and set up](https://edgemodders.ai/wiki/edgedeck/install.html), then put [your first mod](https://edgemodders.ai/wiki/edgedeck/first-mod.html) in the game. Allow about twenty minutes. **Coming from Vortex?** After installing, go to [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html) instead.

## What it's for

Cyberpunk 2077 has no built-in list of mods. A mod is a set of files dropped into the right folders inside the game folder: archives in one place, scripts in another, plugins in a third. Doing that by hand works for two or three mods. With twenty, you lose track of which file came from which mod, removing a mod means hunting for its files, and a game update can quietly break everything.

A mod manager does that bookkeeping for you. EDGEdeck:

- **keeps your mods in a library**, a folder of its own outside the game folder, so turning a mod off doesn't mean deleting it;
- **deploys** the mods you switch on: it puts their files into the game folder, and records every file it puts there;
- **undoes** a deploy exactly, removing only the files it placed;
- **shows conflicts** when two mods change the same thing, and lets you choose the winner;
- **checks Nexus Mods** for updates and downloads them for you.

There are four things to learn: **add** a mod, **turn it on or off**, **deploy**, **remove**.

## Why you might want it

| If you... | EDGEdeck gives you |
|---|---|
| Find other mod managers confusing | One list of mods and four verbs: add, turn on or off, deploy, remove. Plain words throughout |
| Worry about breaking your game | Every deploy is recorded and can be undone. EDGEdeck never deletes a file it didn't put there |
| Have mods that clash in strange ways | EDGEdeck sees conflicts *inside* mod archives, which managers that only compare file names can't see, and says who wins |
| Don't want to hunt down frameworks | **Get the frameworks** fetches the six that most mods need in one go, and **Update all** brings every mod up to date after one question |
| Already use Vortex | A guided import of your Vortex mods, with the choices you made in their installers. Vortex keeps its copies, so you can go back |
| Want an AI assistant to manage mods for you | Claude or another assistant can list, add, switch and deploy your mods, and asks before it touches the game. See [Assistants](https://edgemodders.ai/wiki/edgedeck/assistants.html) |
| Make mods in REDcode | Your project becomes a mod in the list that refreshes every time you pack it |

## How it fits into EDGE

EDGEdeck is the part of EDGE that puts mods into the game. It works on its own, and other EDGE tools add to it when they're present:

| Tool | What it adds to EDGEdeck |
|---|---|
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Reads inside mod archives, so EDGEdeck can show conflicts between them. EDGEdeck downloads and updates it for you |
| [REDcode](https://edgemodders.ai/wiki/redcode/) | A REDcode project can become an EDGEdeck mod, and EDGEdeck mods can feed files back into a project |
| [EDGEchat](https://edgemodders.ai/wiki/edgechat/) and other assistants | EDGEchat connects Claude Code to EDGEdeck, so an AI assistant can manage your mods |

## Status

**Released, as a preview.** The latest is EDGEdeck 0.34.2 (2026-11-25), for Windows only, on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgedeck), [Open VSX](https://open-vsx.org/extension/edgemodders/edgedeck) and [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35420). It updates itself. It is young: its developer uses it daily on two PCs, so expect rough edges and [report them](https://github.com/Edgemodders/EDGEdeck/issues).

| | |
|---|---|
| **In daily use** | The library, deploy, undo, conflicts, loadouts |
| **Passed the developer's tests, little use beyond them** | Nexus downloads and updates, Get the frameworks, REDmod deploys |
| **Fixed in 0.34.2** | After EDGEdeck updated in the background, adding or updating a mod failed with `7za.exe ENOENT`; now it offers **Reload window** ([Troubleshooting](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#adding-mods)) |
| **Fixed in 0.34.1** | Packing a [REDcode project](https://edgemodders.ai/wiki/edgedeck/redcode.html) again no longer changes the game folder before you deploy |
| **New in 0.34.0** | In the [Mods view](https://edgemodders.ai/wiki/edgedeck/mods-view.html), **Deploy**, **Check for updates** and **Update** buttons on each mod's row, and icon colors: cyan while changes wait for a deploy, green with an update on Nexus |
| **New in 0.33.0** | A [security fix for Nexus download links](https://edgemodders.ai/wiki/edgedeck/nexus.html#download-links), and **Keep all** and **Put all back** when [several files changed in the game folder](https://edgemodders.ai/wiki/edgedeck/deploying.html#changes-made-outside-edgedeck) |
| **New in 0.32.0, tested by its contributor** | [FOMOD installers](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#mods-with-an-installer-fomod): pick a mod's options, keep them across updates, bring them over from Vortex. The developer's own tests are still to run |
| **Game version** | EDGEdeck places files and isn't tied to one game version. Its recorded tests ran on game 2.31; a test on game 2.5 is not recorded in its repo |
| **Not switched on yet** | Signing in to Nexus through your browser. Nexus has to approve EDGEdeck first. Until then you copy a personal key from your Nexus account page and paste it in once: see [Signing in](https://edgemodders.ai/wiki/edgedeck/nexus.html#signing-in) |

## In this section

Start here:

| Page | |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/edgedeck/install.html) | What you need, installing, the Set up steps, updating and uninstalling |
| [Your first mod](https://edgemodders.ai/wiki/edgedeck/first-mod.html) | From an empty list to one mod working in the game, step by step |
| [Frameworks and game patches](https://edgemodders.ai/wiki/edgedeck/frameworks.html) | The tools most mods need, and what to do after a game update |

Everyday use:

| Page | |
|---|---|
| [Adding and removing mods](https://edgemodders.ai/wiki/edgedeck/adding-mods.html) | From files, folders and Nexus; versions; removing |
| [Deploying and undo](https://edgemodders.ai/wiki/edgedeck/deploying.html) | What deploy does, closing the game first, Run game, one mod at a time, undo |
| [Conflicts and who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html) | What conflicts are, the order rule, and how to choose the winner |
| [Nexus Mods](https://edgemodders.ai/wiki/edgedeck/nexus.html) | Signing in, download links, updates, Update all, several files from one page |
| [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html) | Move your mods over safely |

Going further, and reference:

| Page | |
|---|---|
| [The Mods view and the EDGEdeck page](https://edgemodders.ai/wiki/edgedeck/mods-view.html) | A tour of the two places you work in, then every button, status and column |
| [Library and disk space](https://edgemodders.ai/wiki/edgedeck/library.html) | Where everything is kept, moving it, what uses space |
| [Loadouts](https://edgemodders.ai/wiki/edgedeck/loadouts.html) | Named sets of mods you switch between |
| [EDGEdeck and REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html) | For mod makers: testing your own mods, and borrowing files from installed ones |
| [Assistants and the command line](https://edgemodders.ai/wiki/edgedeck/assistants.html) | Let Claude manage your mods, or script EDGEdeck |
| [Settings and commands](https://edgemodders.ai/wiki/edgedeck/settings.html) | Every setting and command |
| [Troubleshooting](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html) | What you see, and what to do |

## Coming from REDdeck

EDGEdeck was called REDdeck up to version 0.26.6. EDGEdeck is a separate extension with its own library folder, so it does not see REDdeck's mods or settings. To move:

1. In REDdeck, turn every mod off and deploy. That takes REDdeck's files out of the game.
2. Uninstall REDdeck, then [install EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html).
3. Add your mods again. REDdeck kept the original downloads in `%USERPROFILE%\REDdeck\downloads`, so you can [add them](https://edgemodders.ai/wiki/edgedeck/adding-mods.html) from there.

## Reference

- [EDGEdeck guide](https://edgemodders.github.io/EDGEdeck/guide.html): the project's own short guide
- [Changelog](https://github.com/Edgemodders/EDGEdeck/blob/main/CHANGELOG.md): what changed in each release
- [Design](https://edgemodders.github.io/EDGEdeck/design.html), for developers
- [Source and issues](https://github.com/Edgemodders/EDGEdeck)
