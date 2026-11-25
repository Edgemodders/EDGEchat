<!-- Copied from EDGEweb's docs/wiki/rednode/mod-manager.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/mod-manager.html (reviewed 2026-11-18) -->

# The Mod Manager

The Mod Manager is a window built into REDnode that lists every REDnode **package** you have: apps, Node mods and HUD widgets. The launcher is for the few you use often; the Mod Manager is where you find, switch and inspect any of them.

> **Not the same as EDGEdeck.** [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) manages your game mods (archives, frameworks, scripts) before the game starts. The Mod Manager manages REDnode packages, inside the running game. You'll often use both.

| On this page | |
|---|---|
| [Open it](https://edgemodders.ai/wiki/rednode/mod-manager.html#open-it) | And a [first thing to try](https://edgemodders.ai/wiki/rednode/mod-manager.html#try-it-switch-on-a-widget-and-pin-it) |
| [The table](https://edgemodders.ai/wiki/rednode/mod-manager.html#the-table) | Columns, search and filters |
| [A package's details](https://edgemodders.ai/wiki/rednode/mod-manager.html#a-packages-details) | Everything about one package |
| [Pin to launcher and Pin to HUD](https://edgemodders.ai/wiki/rednode/mod-manager.html#pin-to-launcher-and-pin-to-hud) | Where a package shows up |
| [Permissions](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions) | Extra powers, each off until you allow it |
| [Calls](https://edgemodders.ai/wiki/rednode/mod-manager.html#calls) | Which mods may call another mod's tools |
| [Requirements](https://edgemodders.ai/wiki/rednode/mod-manager.html#requirements) | When a package needs another mod, or REDbridge |
| [Node mods: restart and shared process](https://edgemodders.ai/wiki/rednode/mod-manager.html#node-mods-restart-and-shared-process) | Crashed and stuck mods, and saving memory |
| [Bulk actions](https://edgemodders.ai/wiki/rednode/mod-manager.html#bulk-actions) | Several packages at once |

## Open it

Press **F10**, click the **REDNODE** tab to open the launcher, and switch on **Mod Manager**, the first entry. It is a window like any other, so its switch opens it and its own **✕** closes it. It is always in the launcher.

(Screenshot on the wiki, "The Mod Manager": The Mod Manager window: the search box and filter chips at the top, the table of packages with the L and H pin columns, and the details panel on the right for a selected Node mod.)

### Try it: switch on a widget and pin it

With a save loaded and the Mod Manager open:

1. Click the **HUD** chip above the table. Only HUD widgets are listed.
2. Click the **Coords HUD** row. Its details open at the right.
3. Switch it on there.
4. Switch **Pin to launcher** on, if it isn't already.
5. Press **Esc**.

| After | You should see |
|---|---|
| Step 3 | The row's status changes from off to open |
| Step 4 | A mark in the row's **L** column, and Coords HUD listed in the launcher |
| Step 5 | V's position at the top of the screen while you play |

Switch it off again the same way, or from its switch in the launcher.

## The table

One row per package, as many to a page as fit. **Prev** and **Next** page through them.

| To | Do |
|---|---|
| Sort | Click a column header; click again to reverse |
| Resize a column | Drag the edge between two headers |
| Resize the window | Drag the grip in its bottom-right corner |

REDnode keeps the window's size, the column widths and whether the details panel is closed for your next visit.

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

- **Search** looks in the name, id, author and description, and puts the closest name matches first. The **✕** at the right of the box clears it.
- The kind chips: **All**, **Apps**, **Mods**, **HUD**.
- The state chips: **Any**, **On**, **Off**, **Errors**, **New**.

**New** lists packages added since you last opened the Mod Manager, for example one REDagent just made for you. Opening the Mod Manager clears the "new" count in the launcher.

## A package's details

Select a row to see its details on the right.

| To | Do |
|---|---|
| Close the details, for a wider table | Click the tab between the table and the details. Click it again to open them |
| Make the details wider or narrower | Drag the edge between the table and the details. A double-click on the edge puts back the first width |

| Part | What it's for |
|---|---|
| Name, version, author, description | What the package is |
| **Switches** | On and off, **Pin to launcher** and **Pin to HUD** |
| **Key** | For an app: its own key, with **Change** and **Remove**. See [App keys](https://edgemodders.ai/wiki/rednode/overlay.html#app-keys) |
| **Space** | Buttons for each space and **All**, to move the whole package's windows. Appears once you have two spaces |
| A Node mod's state | Status, own or shared process, memory, **Shared process** and **Restart** |
| Permissions | Each permission it asks for, with an **Allowed** switch |
| **Calls** | The other mods' tools it wants to call that change something, each with an **Allowed** switch. See [Calls](https://edgemodders.ai/wiki/rednode/mod-manager.html#calls) |
| **Requires** | The mods it needs, each found or missing, with the version found. A **Get REDbridge** button when it needs REDbridge and none is found |
| "Window closed" with **Show** | Brings back a window you closed |
| **Last error**, **Last lines** | What a Node mod printed most recently |
| **Service** | For mod makers. For a package that offers [mod services](https://edgemodders.ai/wiki/rednode/making-mods.html): the functions other packages can call, and which are tools for AI assistants |
| **Provides** | For mod makers. The roles a package answers, such as `voice`. When two installed packages provide the same role, choose here which one answers |
| **Window debugger**, **Debug (Node inspector)** | For mod makers: see [Debugging](https://edgemodders.ai/wiki/rednode/debugging.html) |

(Screenshot on the wiki, "A package's details": The Mod Manager's details panel for the Hello mod: the Switches section with Pin to launcher and Pin to HUD, its RUNNING status, memory, Shared process and Restart, and its last lines.)

## Pin to launcher and Pin to HUD

Two pins decide where a package shows up. They're independent.

| Pin | On | Off |
|---|---|---|
| **Pin to launcher** | The package is listed in the launcher | It's only in the Mod Manager. A crashed package shows in the launcher anyway |
| **Pin to HUD** | Its windows stay on screen during gameplay (passive mode) | Its windows show only after you press F10, in interactive mode |

HUD widgets are always on the HUD: that's what they are.

How a package starts:

| Package | Starts with |
|---|---|
| The samples that came with REDnode, at its first start | Both pins. They are still switched off, so nothing shows until you switch one on |
| Anything installed later, such as REDagent, a pack, or a mod REDagent wrote | **Neither pin**, so new windows don't clutter your screen. The launcher counts it as new. Pin it if you want it in the launcher or on screen while you play |

You can also pin from a window's own title bar: see [title-bar buttons](https://edgemodders.ai/wiki/rednode/overlay.html#title-bar-buttons).

## Permissions

Some packages ask for powers beyond drawing a window and calling the game. Each one is off until you allow it, here or in the launcher. A package that asks for a permission still runs without it; only the feature that needs it waits.

To allow one, switch on **Allowed** beside it. To take it back, switch **Allowed** off in the same place, at any time.

The launcher and the Mod Manager show each permission as a line starting **Asks for**:

| It asks for | The package can | Allow it when | Know before you allow |
|---|---|---|---|
| "REDnode's tools for AI agents" | Use the tools of REDnode's [MCP server](https://edgemodders.ai/wiki/rednode/agents.html), as Claude Code does: read logs, see windows and the game, call the game | It's an AI assistant you trust, such as REDagent | The tools can change your game. Assistants such as REDagent ask you before they do |
| "questions to the AI assistant (REDagent)" | Ask REDagent questions | You want its AI features | Each answer costs you a little on your Anthropic account. REDagent sets a daily limit for each package |
| "REDbridge, WolvenKit's engine" | Read the game's files, and write files where it asks | It's a tool for making mods, such as EDGEbuilder | It can write files on your PC |
| "staying above other packages' windows" | Join REDnode's own tools in the [tool layer](https://edgemodders.ai/wiki/rednode/spaces.html#the-tool-layer) | It's something you must always reach, like the Test timer | It can cover other packages' windows |
| "hiding every other package's windows while it asks (solo mode)" | Clear the screen of other packages while it works. See [solo mode](https://edgemodders.ai/wiki/rednode/spaces.html#solo-mode) | It needs the whole screen, such as an editor | **End** beside the launcher tab always ends it |
| "swapping archives in the game's mod folder while the game runs" | Replace an archive in `archive\pc\mod` and swap it into the running game, through [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html) | It's a tool you use to build and test mods, such as the Sound Tools pack's [Hot swap](https://edgemodders.ai/wiki/rednode/sound-tools.html#hot-swap) | It replaces files in your game folder, and a broken archive can crash the game at the swap |
| "managing REDnode", with a warning under it | See what every package costs, end or restart any package, switch packages on and off, change the game's own UI widgets live, and switch AI assistants' tools on and off | It's an admin tool you trust, such as the [Admin Tools](https://edgemodders.ai/wiki/rednode/admin-tools.html) pack's apps or the [UI Workbench](https://edgemodders.ai/wiki/rednode/ui-tools.html) | It can stop any of your mods, and switch on AI tools you switched off |
| "your Anthropic key, shared with every EDGE tool" (or another service's name) | Read your [shared key](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys) for that AI service | You trust the package with your key and your bill, such as REDagent with your Anthropic key | Calls made with your key may cost you |

## Calls

Mods can call each other's tools: a quest mod might ask a voice mod to speak a line. A tool that only reads is open to every mod. A tool that changes something is called only with your OK: the calling package lists the tool in its manifest, and you allow it here.

Select the calling package. Its **Calls** section lists each tool it wants to call, the package that answers it, whether it needs your OK, and an **Allowed** switch. The switch is off until you turn it on, and you can turn it off again at any time.

A call you haven't allowed is refused at once, and the reason goes to the calling mod's [Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log). You never get a prompt in the middle of play. The reason says what to do:

| The reason says | Means |
|---|---|
| "... is not allowed for ... Allow it in the Mod Manager" | Switch on **Allowed** for that call here, if you trust the mod |
| "... does not list ... in its manifest's "calls", so the player cannot allow it" | Only the mod's author can fix this, by listing the call |
| "... is switched off for mods" | The tool is switched off for mods in the [Tools Manager](https://edgemodders.ai/wiki/rednode/admin-tools.html#tools-manager) |

The Tools Manager, in the optional Admin Tools pack, sets per tool which mods may call it: any, only those you allowed here, or none. AI assistants' calls have their own switches there.

## Requirements

A package can say it needs other mods, such as Codeware or TweakXL. REDnode checks your game folder for them, with their versions. A package missing something:

- shows **NEEDS** in the Mod Manager, and lists what's missing under **Requires**;
- shows a line starting "Needs" in the launcher.

It still runs, so it can tell you itself what's missing. Install the missing mod (with [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or your mod manager), restart the game, and the mark goes away.

A package can also require a newer REDnode, or another REDnode package.

### Get REDbridge

[REDbridge](https://edgemodders.ai/wiki/redbridge/) is the engine that reads the game's files. If a package needs it, press **Get REDbridge** in the package's details.

| What happens | |
|---|---|
| REDnode downloads REDbridge from GitHub | It goes into `%LOCALAPPDATA%\REDnode\bridge`. The button shows only when REDnode finds no REDbridge: a copy that EDGEdeck or REDcode downloaded counts |
| REDbridge needs Microsoft's .NET 10 | If your PC doesn't have it, REDnode downloads that too, for your Windows account only, so no administrator prompt appears |
| Updates | Each time you play, REDnode checks once for a newer REDbridge and shows **Update REDbridge** if there is one. It never updates without you. A REDbridge that is running when you update stops as soon as no call waits for it, and the next call starts the new one |

## Node mods: restart and shared process

Each Node mod runs in a **process** of its own, outside the game. A process is a separate running program, with its own memory. If the mod crashes or hangs, only that mod stops:

| State | Means | Do |
|---|---|---|
| **RUNNING** | Working | Nothing |
| **CRASHED** | It stopped with an error. Its windows close. The error is in **Last error** and the [Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log) | **Restart**. If it crashes again, report it to its author with the error |
| **NOT RESPONDING** | It hasn't answered for 10 seconds, often an endless loop | **Restart** stops it even mid-loop |

To see what each running package costs in CPU, memory and game calls, and to end one, install the [Task Manager](https://edgemodders.ai/wiki/rednode/admin-tools.html#task-manager) from the Admin Tools pack.

**Shared process** saves memory: switched on for several mods, they share one process instead of one each. In the developer's tests three mods took about 150 MB shared against about 370 MB apart. The cost: a hard crash of the process stops every mod in it (they restart a couple of seconds later). Some mods insist on their own process; for them the switch is greyed out.

Leave it off unless you run many mods and memory is tight.

## Bulk actions

Tick several rows and a bar appears with: **On**, **Off**, **Pin to launcher**, **Unpin from launcher**, **Pin to HUD**, **Unpin from HUD**, **Shared process**, **Own process**, and **Clear** to untick them all.
