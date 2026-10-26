<!-- Copied from EDGEweb's docs/wiki/rednode/overlay.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/overlay.html (reviewed 2026-10-24) -->

# Using the overlay

The **overlay** is everything REDnode draws on top of the game: windows, HUD widgets and the launcher. REDnode draws it after the game draws each frame, using the game's own graphics device, so it moves at the game's frame rate. What the windows show comes from the overlay host, a program beside the game.

## F10 and the three modes

**F10** switches between three modes, in this order:

| Mode | You see | The mouse and keyboard go to |
|---|---|---|
| **Passive** (the start) | HUD widgets, and windows that are [pinned to the HUD](https://edgemodders.ai/wiki/rednode/mod-manager.html#pin-to-launcher-and-pin-to-hud) | The game. You play as normal |
| **Interactive** | Every open window, and a cursor | The windows. Click, type, drag |
| **Hidden** | Nothing from REDnode | The game |

To leave interactive mode, press **Esc** or click empty screen, away from any window. Both take you back to passive.

While a window has your input, the game doesn't get it: V doesn't move or shoot. That's on purpose, the same as Cyber Engine Tweaks' windows.

(Screenshot on the wiki, "Interactive mode": Gameplay in interactive mode: several REDnode windows open, the REDnode cursor over one of them, and the launcher tab at the lower left.)

## The launcher

The launcher is REDnode's home. Its tab sits at the lower left of the screen: **REDNODE** with a count, such as `· 9/20` (open packages out of all of them). Press F10, then click the tab to open the launcher; click it again to close it.

(Screenshot on the wiki, "The launcher": The launcher opened above its tab: the GAME LINKED status, the Mod Manager first in the list, a few pinned packages with their switches, and the Space row, the Theme buttons with the gear and the version at the bottom.)

| Part | What it does |
|---|---|
| **GAME LINKED** or **GAME OFF** | Whether the overlay host is connected to the game |
| The list | The **Mod Manager** first, then every package pinned to the launcher, and any package that crashed even if it isn't pinned, so an error never hides |
| "3 more in the Mod Manager · 1 new" | Packages not in the launcher, and new ones you haven't looked at yet. **Open** opens the Mod Manager |
| A package's switch | Turns it on or off: opens or closes an app, starts or stops a mod |
| **Asks for ...** with **Allowed** | A permission the package wants. Nothing happens until you allow it. See [Permissions](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions) |
| "Needs ..." | A mod the package requires that your game doesn't have |
| For a Node mod | Its state (**RUNNING**, **STARTING**, **CRASHED**, **NOT RESPONDING**), own or shared process, memory, its last lines and last error, **Shared process** and **Restart** |
| "Window closed" with **Show** | You closed one of the mod's windows. **Show** brings it back |
| The bottom | The [Space row](https://edgemodders.ai/wiki/rednode/spaces.html), the **Theme** buttons, the gear that opens the **Settings** drawer beside the launcher, and the REDnode version. See [Settings and controls](https://edgemodders.ai/wiki/rednode/settings.html) |

The first time REDnode starts, a **Welcome** window teaches these basics once. It also warns that **F9**, right beside F10, is the game's Quick Load: pressed by mistake, it loads your last save.

The tab has a striped grip on its left: drag it to move the launcher. When you have more than one [space](https://edgemodders.ai/wiki/rednode/spaces.html), the tab also shows **▾** and the current space's name; when a package is in [solo mode](https://edgemodders.ai/wiki/rednode/spaces.html#solo-mode), it shows **SOLO**, the package's name and **End**.

## Windows

In interactive mode:

| To | Do |
|---|---|
| Move a window | Drag its title bar, or the handle the app marks (for example a striped grip) |
| Bring it to the front | Click it. Only the front window gets keyboard input |
| Click what's behind a window | Click where the window is see-through: the click passes to the window behind, or to the game |
| Close it | Its **✕**. For a Node mod's window, the mod keeps running; **Show** in the launcher or Mod Manager brings the window back |
| See what a button does | Hover over it: a tooltip names it. The **Tooltips** setting switches them off |

REDnode remembers where you put each window, and which windows you closed, across game starts. A saved position applies while the window keeps its size; if a mod changes the size, the window goes back to its default place.

### Title-bar buttons

Windows built with REDnode's UI kit show a few small buttons beside **✕**, right to left, only when they apply:

| Button | Does | Shows when |
|---|---|---|
| Move to space | Puts the window in another [space](https://edgemodders.ai/wiki/rednode/spaces.html), or in all of them | You have two or more spaces |
| Roll up | Folds the window down to its title bar, and back | Usually. An app can leave it out |
| Pin to HUD | Keeps the window on screen in passive mode | Usually |
| Reset position | Puts the window back where it started | After you moved it |
| Debug | Opens the window's debugger | [Developer mode](https://edgemodders.ai/wiki/rednode/debugging.html#developer-mode) is on |

At most three of them fit beside **✕**. If a window has more, a **⋯** button appears on the far left with the rest, each with its name. A choice such as "which space" opens in the same list, with **‹ Back**.

## HUD widgets

A HUD widget is a window that acts like part of the game's own HUD: it is drawn, but never takes the mouse or keyboard, even in interactive mode, and you can't drag it. The **Coords HUD** and **Vitals** samples are HUD widgets.

HUD widgets, and other windows that ask for it, hide by themselves while the game shows:

| State | When |
|---|---|
| A menu | Inventory, map, pause menu and so on |
| Photo mode | While it's on |
| The main menu | The main menu and loading screens |
| A scene | A cinematic scene. Conversations with NPCs are normal play and don't count. Exactly which scenes count is still to be confirmed in a cutscene |

## Themes

The **Theme** buttons at the bottom of the launcher recolour every window built with the UI kit, at once:

| Theme | Look |
|---|---|
| **REDnode** | The EDGE HUD look: dark panels, yellow and cyan |
| **HUD red** | A look-alike of the game's own red UI |
| **EDGE** | Like REDnode, with solid yellow title bars |

An app can choose its own look; it then keeps it whatever you pick. The HUD samples always use HUD red.

## Keys

| Key | Where | Does |
|---|---|---|
| **F10** | Anywhere in the game | Passive, interactive, hidden, and round again |
| **Esc** | Interactive mode | Back to passive. Ends a held cursor first (pointer lock) |
| **Ctrl+1** to **Ctrl+9** | While the overlay is open | Switches to that [space](https://edgemodders.ai/wiki/rednode/spaces.html) |
| **Ctrl+C**, **Ctrl+V**, **Ctrl+X**, **Ctrl+A**, **Ctrl+Z** | In the front window | Copy, paste, cut, select all, undo |
| **F9** | Anywhere in the game | Not REDnode's: it is the game's Quick Load. Mind it, right beside F10 |

## Good to know

- **REDnode's windows sit above everything,** game menus included, because they're drawn after the game's frame. Windows that hide with menus avoid the clash.
- **The cost is small.** In the developer's tests the overlay took about 0.1 ms of each game frame with every sample open. Each open window does use memory in the host: roughly 60 to 100 MB.
- **Alt+Tab** to the desktop and back keeps interactive mode.
- **Open at start** in the Settings drawer: switch it off and the game starts with only HUD widgets showing, until your first F10.
- **Not yet handled:** HDR brightness matching, frame generation, resolution and window-mode changes and ultrawide screens are planned work. Steam Deck is untested.
