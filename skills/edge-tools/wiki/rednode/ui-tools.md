<!-- Copied from EDGEweb's docs/wiki/rednode/ui-tools.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/ui-tools.html (reviewed 2026-11-13) -->

# REDnode UI Tools

**REDnode UI Tools** is an optional app pack for REDnode, for anyone curious about the game's own interface or wanting to build on it. Its one app, the **UI Workbench**, opens inside the game and does five jobs:

| Job | Where in the Workbench | What it does |
|---|---|---|
| [Inspect](https://edgemodders.ai/wiki/rednode/ui-tools-inspect.html) | The **Inspect** tab | Shows the game's UI as a live tree: every layer, every HUD piece, every widget. Point at anything on the HUD or in a menu and it tells you what it is, where it came from and every property it has |
| [Try](https://edgemodders.ai/wiki/rednode/ui-tools-try.html) | A part of Inspect's details | Changes a game widget live (its text, colour, opacity, size, place) to find what controls a look. Never kept |
| [To source](https://edgemodders.ai/wiki/rednode/ui-tools-to-source.html) | A button in Inspect's details | Copies a piece of the game's HUD into a project of your own, as [ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html), so you start from the game's own look |
| [Projects and Edit](https://edgemodders.ai/wiki/rednode/ui-tools-projects.html) | The **Projects** and **Edit** tabs | Write a native HUD panel (its markup and its script) in an editor in the game, with mistakes shown as you type, and run it live |
| [Export](https://edgemodders.ai/wiki/rednode/ui-tools-export.html) | A button in Edit and in Projects | Turns a project into a zip that installs as a mod of its own, ready to share |

> **New here?** [Install it](https://edgemodders.ai/wiki/rednode/ui-tools.html#install), [switch it on](https://edgemodders.ai/wiki/rednode/ui-tools.html#switch-it-on), then follow the [tutorial](https://edgemodders.ai/wiki/rednode/ui-tools-tutorial.html): your first HUD panel in about 20 minutes, with no code to write.

*Native UI* means UI the game draws itself, with its own widgets, fonts and colours, as opposed to REDnode's [overlay windows](https://edgemodders.ai/wiki/rednode/overlay-apps.html), which are web pages drawn on top. The game's UI system is called **ink**. If the words are new, read [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html) first; the Workbench writes that markup for you.

(Screenshot on the wiki, "The UI Workbench in the game": The game's HUD with the UI Workbench open in interactive mode: the Inspect tab with the layer tree at the left, the details of a picked widget at the right, and the picked widget outlined on the HUD behind the window.)

## Why you'd want it

| If you... | The Workbench gives you |
|---|---|
| Wonder how a piece of the HUD is built | Pick it and read its widgets, their classes, sizes, colours and the file it came from, with no tools outside the game |
| Want to change how the game's UI looks, in an archive or a redscript mod | Try a value on the live widget first, to see which property does what before you edit any file |
| Want a HUD panel of your own that fits the game | Copy the game's own panel with To source, or start from the template, and run it in the game as you edit |
| Can't code yet | The template works as it is: change words and numbers, press Save and watch the panel change. The [tutorial](https://edgemodders.ai/wiki/rednode/ui-tools-tutorial.html) walks you through it |
| Want to share what you made | Export makes a zip any REDnode player installs like any other mod |

Inspect only reads. Try's changes are put back when you press Reset or switch the Workbench off, and a save never holds one. Your projects live in your Documents folder, away from the game folder.

## Status

**Released.** REDnode UI Tools **0.1.0**, with the **UI Workbench 0.4.1**, is the pack's first release. Every working part below passed its in-game test on game version 2.5:

| Part | Status |
|---|---|
| Inspect: the tree, Pick, Pick inside, the details | Passed in game |
| Projects and Edit: New, Rename, Delete, the editor, Run, Stop, Save while it runs | Passed in game |
| Try and To source | Passed in game |
| Export, and installing the export as a mod | Passed in game |
| Buttons and other controls inside a native panel | Not yet. Planned for a later REDnode release, then a later Workbench |
| Projects on a menu, and whole screens of your own | Planned |

It is a preview, built in the open: expect changes.

## Install

| You need | Why |
|---|---|
| [REDnode](https://edgemodders.ai/wiki/rednode/install.html) **0.56.1** or later | The Workbench is a REDnode package |
| [Codeware](https://github.com/psiberx/cp2077-codeware) **1.16** or later | The game's UI layers reach REDnode through it |
| Cyberpunk 2077 on PC, game version **2.5** | As REDnode |

Download **REDnode-UI-Tools-0.1.0.zip** from its [Nexus Mods page](https://www.nexusmods.com/cyberpunk2077/mods/36958), or from [REDnode's releases](https://github.com/Edgemodders/REDnode/releases) on GitHub, where it is attached beside REDnode's own zip. Then, with the game closed:

- **Vortex:** use Mod Manager Download on Nexus, then enable and deploy.
- **[EDGEdeck](https://edgemodders.ai/wiki/edgedeck/adding-mods.html):** add the zip and deploy.
- **By hand:** extract the zip into your Cyberpunk 2077 folder, the one with `bin` and `archive` in it. The app lands in `red4ext\plugins\REDnode\apps\ui-workbench`.

Install it after REDnode: it goes into REDnode's apps folder. To remove it, remove it in your mod manager, or delete that `ui-workbench` folder. REDnode and your projects stay.

## Switch it on

1. Start the game and load a save.
2. Press **F10** for interactive mode and click the **REDNODE** tab at the lower left to open the launcher. In the launcher, switch on **Mod Manager** to open it.
3. Find **UI Workbench** (type `work` in the search box) and switch it on. It starts switched off, like every new package.
4. To reach it in one click next time, press **Pin to launcher** in its details.

The Workbench window opens. Its **Inspect** tab works straight away; the other tabs need a permission first (next section).

(Screenshot on the wiki, "The UI Workbench in the Mod Manager": The Mod Manager with UI Workbench selected: its details on the right with the Running switch on, Pin to launcher, and the Permissions part with the red warning under managing REDnode and its Allowed switch.)

### The admin permission

Four of the Workbench's jobs need REDnode's **admin** permission, shown in the Mod Manager as **managing REDnode**, because they start and stop packages (your projects) and change the game's own widgets.

| Needs `admin` | Works without it |
|---|---|
| **Try**, **To source**, the **Edit** and **Projects** tabs, **Export** | **Inspect**: the tree, Pick, the details, Path, JSON, Read all |

To allow it: in the Mod Manager, select **UI Workbench**, read the warning under **Permissions**, and switch **Allowed** on for **managing REDnode**. Then open the tab you wanted again. Without it, Edit and Projects say: "Edit and Projects need the admin permission: allow it for UI Workbench in the Mod Manager (Permissions), then open this tab again."

It is a strong permission: a package that has it can stop or start any other package. The Workbench uses it only to run your projects and for Try. Allow it for tools you trust. You can switch it off again at any time, and Inspect keeps working.

## The Workbench window

The Workbench draws on the whole screen, so that it can outline widgets anywhere, but only its window reacts to the mouse. Clicks elsewhere go to the game or to other windows as usual.

| To | Do |
|---|---|
| Move it | Drag its title bar |
| Resize it | Drag the grip in its bottom-right corner. It can't go smaller than 760 x 420 |
| Put it back where it started | **Reset position and size** in its title bar (in the **⋯** menu when there's no room for its icon) |
| Switch tabs | **Inspect**, **Edit**, **Projects** at the top |
| Read a status line cut short | Point at it: its tooltip shows the whole text |
| Close it | Its **✕**. Closing it puts back everything Try changed |

It keeps its place and size across starts. Like every REDnode window it shows only in interactive mode (F10), unless you pin it to the HUD; native panels it runs stay on the HUD either way, since the game draws them.

(Screenshot on the wiki, "The Workbench's three tabs": The UI Workbench window alone, cropped: its title bar with the reset and close icons, the Inspect, Edit and Projects tabs, the Refresh, Pick and Pick inside buttons, and the status line at the right.)

## Where things are kept

| What | Where |
|---|---|
| The app | `red4ext\plugins\REDnode\apps\ui-workbench` in the game folder |
| Your projects | `Documents\REDnode\UI projects`, one folder each. REDnode watches this folder as a [development folder](https://edgemodders.ai/wiki/rednode/settings.html#development-folders), so your projects run without being copied into the game |
| Deleted projects | `Documents\REDnode\UI projects\.trash`, where you can take them back |
| Exports | `Documents\REDnode\UI exports`, one zip per project and version |

Projects and exports are outside the game folder, so game updates, reinstalls and EDGEdeck's deploys never touch them.

## In this part

| Page | |
|---|---|
| [Inspect](https://edgemodders.ai/wiki/rednode/ui-tools-inspect.html) | The tree, Pick, Pick inside, a widget's details |
| [Try](https://edgemodders.ai/wiki/rednode/ui-tools-try.html) | Change a game widget live, with a walkthrough |
| [To source](https://edgemodders.ai/wiki/rednode/ui-tools-to-source.html) | Copy a HUD piece into a project, with a walkthrough |
| [Projects and Edit](https://edgemodders.ai/wiki/rednode/ui-tools-projects.html) | New, the editor, Run, Stop and Save while it runs |
| [Export](https://edgemodders.ai/wiki/rednode/ui-tools-export.html) | Share a project as a mod |
| [Tutorial: your first native HUD panel](https://edgemodders.ai/wiki/rednode/ui-tools-tutorial.html) | From New to an installed mod, step by step |
| [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html) | The markup the Workbench writes, for newcomers |
| [Troubleshooting](https://edgemodders.ai/wiki/rednode/troubleshooting.html) | When a tab says no, a pick finds nothing, or a project won't run |

The developer reference is REDnode's [UI Tools guide](https://edgemodders.github.io/REDnode/ui-tools.html) and its [Native game UI](https://edgemodders.github.io/REDnode/ink.html) page.

## For mod makers

Everything the Workbench reads is in the `rednode` package, for your own packages: `ink.layers`, `ink.read`, `ink.inspect`, `ink.at` and `ink.boxes` read the game's UI and need no permission, and `ink.try` changes a widget with the `admin` permission. The calls, with examples, are in [The game's own UI](https://edgemodders.ai/wiki/rednode/more-apis.html#the-games-own-ui).
