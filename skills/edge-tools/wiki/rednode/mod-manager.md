<!-- Copied from EDGEweb's docs/wiki/rednode/mod-manager.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/mod-manager.html (reviewed 2026-10-24) -->

# The Mod Manager

The Mod Manager is a window built into REDnode that lists every REDnode package you have: apps, Node mods and HUD widgets. The launcher is for the few you use often; the Mod Manager is where you find, switch and inspect any of them.

> **Not the same as EDGEdeck.** [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) manages your game mods (archives, frameworks, scripts) before the game starts. The Mod Manager manages REDnode packages, inside the running game. You'll often use both.

## Open it

Press **F10**, open the launcher and switch on **Mod Manager**, the first entry. It's always there. Close it with its own **✕**.

(Screenshot on the wiki, "The Mod Manager": The Mod Manager window: the search box and filter chips at the top, the table of packages with the L and H pin columns, and the details panel on the right for a selected Node mod.)

## The table

One row per package, about 14 to a page. **Prev** and **Next** page through them. Click a column header to sort by it, again to reverse.

| Column | Shows |
|---|---|
| (tick box) | Select the row for a [bulk action](https://edgemodders.ai/wiki/rednode/mod-manager.html#bulk-actions) |
| **L** | Pinned to the launcher |
| **H** | Pinned to the HUD: stays on screen during gameplay |
| **Name** | With a **NEW** badge for packages you haven't seen yet, **NEEDS** when a required mod is missing, and **DEV** when it runs from a [development folder](https://edgemodders.ai/wiki/rednode/settings.html#development-folders) |
| **Kind** | App, Node mod, both, or HUD widget |
| **Status** | Off, open, or for a Node mod **RUNNING**, **STARTING**, **CRASHED** or **NOT RESPONDING** |
| **Space** | Which [space](https://edgemodders.ai/wiki/rednode/spaces.html) its windows show in. Appears once you have two spaces |
| **Mem** | Memory used by a Node mod's process |
| **Version**, **Author** | From the package |

### Finding a package

- **Search** matches the name, the id, the author and the description.
- The kind chips: **All**, **Apps**, **Mods**, **HUD**.
- The state chips: **Any**, **On**, **Off**, **Errors**, **New**.

**New** lists packages added since you last opened the Mod Manager, for example one REDagent just made for you. Opening the Mod Manager clears the "new" count in the launcher.

## A package's details

Select a row to see its details on the right:

| Part | What it's for |
|---|---|
| Name, version, author, description | What the package is |
| **Switches** | On and off, **Pin to launcher** and **Pin to HUD** |
| **Space** | Buttons for each space and **All**, to move the whole package's windows. Appears once you have two spaces |
| A Node mod's state | Status, own or shared process, memory, **Shared process** and **Restart** |
| Permissions | Each permission it asks for, with an **Allowed** switch |
| **Requires** | The mods it needs, each found or missing, with the version found. A **Get REDbridge** button when it needs REDbridge and none is found |
| **Service** | For a package that offers [mod services](https://edgemodders.ai/wiki/rednode/making-mods.html#mod-services): the functions other packages can call, with what each does, and which are tools for AI assistants |
| "Window closed" with **Show** | Brings back a window you closed |
| **Last error**, **Last lines** | What a Node mod printed most recently |
| **Window debugger**, **Debug (Node inspector)** | For developers: see [Debugging](https://edgemodders.ai/wiki/rednode/debugging.html) |

(Screenshot on the wiki, "A package's details": The Mod Manager's details panel for the Hello mod: the Switches section with Pin to launcher and Pin to HUD, its RUNNING status, memory, Shared process and Restart, and its last lines.)

## Pin to launcher and Pin to HUD

Two pins decide where a package shows up. They're independent.

| Pin | On | Off |
|---|---|---|
| **Pin to launcher** | The package is listed in the launcher | It's only in the Mod Manager. A crashed package shows in the launcher anyway |
| **Pin to HUD** | Its windows stay on screen during gameplay (passive mode) | Its windows show only while you press F10 into interactive mode |

HUD widgets are always on the HUD: that's what they are.

A package that arrives after you installed REDnode starts with **neither pin**, so new windows don't clutter your screen. The launcher counts it as new. Pin it if you want it in the launcher or on screen while you play. (Packages you had when the Mod Manager first ran kept both pins.)

You can also pin from a window's own title bar: see [title-bar buttons](https://edgemodders.ai/wiki/rednode/overlay.html#title-bar-buttons).

## Permissions

Some packages ask for powers beyond drawing a window and calling the game. Each one is off until you allow it, here or in the launcher, and you can withdraw it any time.

| Permission | The package can | Allow it when |
|---|---|---|
| REDnode's tools for AI agents | Use the [MCP server](https://edgemodders.ai/wiki/rednode/agents.html)'s tools, like Claude Code does | It's an AI assistant you trust, such as REDagent |
| Questions to the AI assistant | Ask REDagent questions. Each answer costs you a little on your Claude API account | You want its AI features. REDagent sets a daily limit for each package |
| REDbridge | Read the game's archives and files, and write files where it asks | It's a tool for making mods, such as EDGEbuilder |
| Staying above other packages' windows | Join REDnode's own tools in the [tool layer](https://edgemodders.ai/wiki/rednode/spaces.html#the-tool-layer) | It's something you must always reach, like the Test timer |
| Hiding every other package's windows (solo mode) | Clear the screen of other packages while it works | It needs the whole screen, such as an editor. See [solo mode](https://edgemodders.ai/wiki/rednode/spaces.html#solo-mode) |
| Swapping archives in the game's mod folder while the game runs | Replace an archive in `archive\pc\mod` and swap it into the running game, through RED Hot Tools | It's a tool you use to build and test mods, such as the Sound Tools pack's Hot swap |
| Managing REDnode | See what every package costs, end or restart any package, and switch AI assistants' tools on and off. The Mod Manager shows a warning under it | It's an admin tool you trust, such as the Task Manager and Tools Manager in the [Admin Tools pack](https://edgemodders.ai/wiki/rednode/index.html#optional-packs) |

A package that asks for a permission still runs without it; only the feature that needs it waits.

## Requirements

A package can say it needs other mods, such as Codeware or TweakXL. REDnode checks your game folder for them, with their versions. A package missing something:

- shows **NEEDS** in the Mod Manager, and lists what's missing under **Requires**;
- says "Needs ..." in the launcher.

It still runs, so it can tell you itself what's missing. Install the missing mod (with [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or your mod manager), restart the game, and the mark goes away.

A package can also require a newer REDnode, or another REDnode package by its id. If it needs REDbridge, press **Get REDbridge** in its details: REDnode downloads REDbridge from GitHub, and .NET 10 for your Windows user if it's missing, with no admin rights. Once a session REDnode checks for a newer REDbridge and offers **Update REDbridge**; it never updates by itself.

## Node mods: restart and shared process

Each Node mod runs in a process of its own, outside the game. If it crashes or hangs, only that mod stops:

| State | Means | Do |
|---|---|---|
| **RUNNING** | Working | Nothing |
| **CRASHED** | It stopped with an error. Its windows close. The error is in **Last error** and the [Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log) | **Restart**. If it crashes again, report it to its author with the error |
| **NOT RESPONDING** | It hasn't answered for 10 seconds, often an endless loop | **Restart** stops it even mid-loop |

To see what each running package costs in CPU, memory and game calls, and to end one, install the Task Manager from the [Admin Tools pack](https://edgemodders.ai/wiki/rednode/index.html#optional-packs).

**Shared process** saves memory: switched on for several mods, they share one process instead of one each. In the developer's tests three mods took about 150 MB shared against about 370 MB apart. The cost: a hard crash of the process stops every mod in it (they restart a couple of seconds later). Some mods insist on their own process; for them the switch is greyed out.

## Bulk actions

Tick several rows and a bar appears with: **On**, **Off**, **Pin to launcher**, **Unpin from launcher**, **Pin to HUD**, **Unpin from HUD**, **Shared process**, **Own process**, and **Clear** to untick them all.
