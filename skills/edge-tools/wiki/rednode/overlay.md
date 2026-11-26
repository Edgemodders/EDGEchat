<!-- Copied from EDGEweb's docs/wiki/rednode/overlay.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/overlay.html (reviewed 2026-11-25) -->

# Using the overlay

The **overlay** is everything REDnode draws on top of the game: windows, HUD widgets and the launcher. It is drawn as part of each game frame, so it stays smooth and costs very little. This page covers how to show and hide it, open the launcher, move windows, and use the built-in Console.

| On this page | |
|---|---|
| [F10 and the three modes](https://edgemodders.ai/wiki/rednode/overlay.html#f10-and-the-three-modes) | Showing, using and hiding the overlay, and [the pause menu](https://edgemodders.ai/wiki/rednode/overlay.html#in-the-pause-menu) |
| [The launcher](https://edgemodders.ai/wiki/rednode/overlay.html#the-launcher) | REDnode's home, behind the REDNODE tab |
| [Windows](https://edgemodders.ai/wiki/rednode/overlay.html#windows) | Moving, closing, and the [title-bar buttons](https://edgemodders.ai/wiki/rednode/overlay.html#title-bar-buttons) |
| [App keys](https://edgemodders.ai/wiki/rednode/overlay.html#app-keys) | A key of your own that shows one app, or hides it |
| [HUD widgets](https://edgemodders.ai/wiki/rednode/overlay.html#hud-widgets) | Windows that act like part of the game's HUD |
| [The Pins window](https://edgemodders.ai/wiki/rednode/overlay.html#the-pins-window) | Every pin in the world, Go there, and your own pin sets |
| [Themes](https://edgemodders.ai/wiki/rednode/overlay.html#themes) | Three looks for every window |
| [The Console](https://edgemodders.ai/wiki/rednode/overlay.html#the-console) | Type commands for the game, with a [first command to try](https://edgemodders.ai/wiki/rednode/overlay.html#try-it-your-first-command) |
| [Keyboard shortcuts](https://edgemodders.ai/wiki/rednode/overlay.html#keyboard-shortcuts) | Every key REDnode uses |
| [Good to know](https://edgemodders.ai/wiki/rednode/overlay.html#good-to-know) | Cost, Alt+Tab, Open at start, what isn't handled yet |

## F10 and the three modes

**F10** switches between three modes, in this order:

| Mode | You see | The mouse and keyboard go to |
|---|---|---|
| **Passive** (the start) | HUD widgets, the REDNODE tab, and windows that are [pinned to the HUD](https://edgemodders.ai/wiki/rednode/mod-manager.html#pin-to-launcher-and-pin-to-hud) | The game. You play as normal |
| **Interactive** | Every open window, and a cursor | The windows. Click, type, drag |
| **Hidden** | Nothing from REDnode: no windows, no HUD widgets, no tab | The game |

The Welcome window calls the same three modes Showing, Using and Hidden.

In daily use you need two keys:

| To | Press |
|---|---|
| Use REDnode's windows | **F10** once, from play |
| Go back to playing, with your HUD widgets still showing | **Esc**, or click empty screen away from any window. With [Hide on a click in the game](https://edgemodders.ai/wiki/rednode/settings.html) on, that click hides everything instead |

> **F10 pressed in interactive mode hides everything.** It does not take you back to play with your widgets: it goes on to hidden mode, and the HUD widgets and the REDNODE tab vanish. Nothing is lost. Press **F10** once more and they are back. To leave interactive mode, use **Esc**.

While a window has your input, the game doesn't get it: V doesn't move or shoot. That's on purpose, the same as Cyber Engine Tweaks' windows.

Careful with **F9**, right beside F10: it is the game's Quick Load, not REDnode's. Pressed by mistake, it loads your last save.

(Screenshot on the wiki, "Interactive mode": Gameplay in interactive mode: several REDnode windows open, the REDnode cursor over one of them, and the launcher tab at the lower left.)

### In the pause menu

When you open the game's pause menu (**Esc** while you play), REDnode hides: its windows, HUD widgets and the REDNODE tab. Close the pause menu and REDnode comes back as it was.

| To | Do |
|---|---|
| Use REDnode in the pause menu | Press **F10** there, as anywhere else. If you change the mode with F10 while the pause menu is open, REDnode keeps your choice when it closes |
| Keep REDnode on screen in the pause menu | Switch **Hide in the pause menu** off in the [Settings drawer](https://edgemodders.ai/wiki/rednode/settings.html#launcher-settings). It is on by default |

## The launcher

The launcher is REDnode's home. Its tab sits at the lower left of the screen: **REDNODE** with a count, such as `· 9/20` (open packages out of all of them). Press F10, then click the tab to open the launcher; click it again to close it.

(Screenshot on the wiki, "The launcher": The launcher opened above its tab: the GAME LINKED status, the Mod Manager first in the list, a few pinned packages with their switches, and the Space row, the Theme buttons with the gear and the version at the bottom.)

| Part | What it does |
|---|---|
| **GAME LINKED** or **GAME OFF** | Whether REDnode is connected to the game |
| The list | The **Mod Manager** first, then REDnode's own tools, such as the Mod log, the Console and Pins, and every package pinned to the launcher. A package that crashed is listed even if it isn't pinned, so an error never hides |
| **Filter mods...** | Type part of a name to find any installed package, pinned to the launcher or not. Names that start with what you typed come first. The box has the keyboard as soon as the launcher opens, so you can type at once |
| **Open**, beside the filter | Opens the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html), which lists every package. Its tooltip says how many packages are not in the launcher, and how many are new |
| A package's name | A link. A click switches the package on if it is off, shows the windows you closed, or brings it into this [space](https://edgemodders.ai/wiki/rednode/spaces.html) from another |
| A package's switch | Turns it on or off: opens or closes an app, starts or stops a mod |
| A line starting **Asks for**, with an **Allowed** switch | A permission the package wants. The feature that needs it waits until you allow it. See [Permissions](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions) |
| A line starting "Needs" | A mod the package requires that your game doesn't have. See [Requirements](https://edgemodders.ai/wiki/rednode/mod-manager.html#requirements) |
| A Node mod's row | Also shows whether the mod is running, how much memory it uses, and the last lines it printed or its last error. **Restart** starts it again. See [Node mods: restart and shared process](https://edgemodders.ai/wiki/rednode/mod-manager.html#node-mods-restart-and-shared-process) |
| "Window closed" with **Show** | You closed one of the mod's windows. **Show** brings it back |
| The bottom | The [Space row](https://edgemodders.ai/wiki/rednode/spaces.html), the **Theme** buttons, the gear that opens the **Settings** drawer beside the launcher, and the REDnode version. See [Settings and controls](https://edgemodders.ai/wiki/rednode/settings.html) |

The tab has a striped grip on its left: drag it to move the launcher. When you have more than one [space](https://edgemodders.ai/wiki/rednode/spaces.html), the tab also shows **▾** and the current space's name. When a package is in [solo mode](https://edgemodders.ai/wiki/rednode/spaces.html#solo-mode), it shows **SOLO**, the package's name and **End**.

## Windows

In interactive mode:

| To | Do |
|---|---|
| Move a window | Drag its title bar, or the handle the app marks (for example a striped grip) |
| Resize it | Drag the grip in its bottom-right corner, if it has one. Not every window can be resized |
| Bring it to the front | Click it. Only the front window gets keyboard input |
| Click what's behind a window | Click where the window is see-through: the click passes to the window behind, or to the game |
| Close it | Its **✕**. For a Node mod's window, the mod keeps running; **Show** in the launcher or Mod Manager brings the window back |
| See what a button does | Hover over it: a tooltip names it. The **Tooltips** setting switches them off |

REDnode remembers where you put each window, and which windows you closed, across game starts. If an update to a mod changes its window's size, that window returns to its default place.

### Title-bar buttons

Windows built with REDnode's UI kit show a few small buttons beside **✕**, right to left, only when they apply:

| Button | Does | Shows when |
|---|---|---|
| Move to space | Puts the window in another [space](https://edgemodders.ai/wiki/rednode/spaces.html), or in all of them | You have two or more spaces |
| Roll up | Folds the window down to its title bar, and back | Usually. An app can leave it out |
| Pin to HUD | Keeps the window on screen in passive mode | Usually |
| Reset position | Puts the window back where it started | After you moved or resized it |
| Key binding… (the key icon) | Gives the app a key of its own. See [App keys](https://edgemodders.ai/wiki/rednode/overlay.html#app-keys) | Usually. An app can leave it out |
| Debug | Opens the window's debugger | [Developer mode](https://edgemodders.ai/wiki/rednode/debugging.html#developer-mode) is on |

Up to three buttons fit beside **✕**. When a window has more, the rest go into a **⋯** menu on the far left, each with its name. Some choices, such as which space to move to, open inside that menu, with **‹ Back** to return.

A package can add buttons of its own, such as a gear for its settings. They sit nearest **✕** and count toward the three, so REDnode's buttons that no longer fit move into **⋯**.

## App keys

Any app can have a key of its own. The key shows only that app, with the cursor, so you can use it at once. Pressed again, it hides the app and gives the game its mouse and keyboard back. It suits a tool you dip into while you play, such as EDGEbuilder or the Mod Manager.

To set one, press **F10**, then **Key binding…** in the app's title bar (the key icon, or in **⋯**), or **Key** in the app's details in the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html#a-packages-details). Press the key you want. **Save** lights up when REDnode accepts it.

| You press the app's key | What happens |
|---|---|
| While the app isn't on screen with the cursor (you're playing, or the overlay is hidden) | Only that app shows, with your HUD widgets and pins, and the cursor. A closed app opens; a stopped mod starts |
| Again | The app hides and the game gets its input back |
| **F10**, **Esc** or a click on empty screen, instead | Ends the one-app view: the overlay is back as it was |

| Good to know | |
|---|---|
| An app that covers the whole screen | Such as EDGEbuilder. It keeps its view: the key hides only its panels. You still move what you selected with its gizmo and turn its camera with the right mouse button, and the next press brings the panels back |
| The app stays as it was | Edit mode, solo mode and what you selected don't change |
| Keys you can't use | Any key the game uses: REDnode reads the game's key bindings, your own changes to them and input mods' files, and the window says why it refuses a key. REDnode's and Windows' own keys too. On game 2.5 the free keys include F2, F6, F7, F8, F11, F12, the numpad, Page Up, Page Down, End, Insert and Delete |
| Ctrl, Shift or Alt with the key | Allowed, with a note: the game hears them first (Ctrl crouches, Shift sprints) |
| One app per key | A key another app has is refused |
| To remove a key | **Remove** beside **Key** in the app's details in the Mod Manager |

### Try it: a key for the Mod Manager

1. Press **F10** and open the Mod Manager.
2. In its title bar, press the key icon (or **⋯**, then **Key binding…**). The Key binding window opens.
3. Press **Ctrl+B**, then **F7**, then **Save**.
4. Press **Esc** to go back to playing, then **F7**.
5. Press **F7** again.

| After | You should see |
|---|---|
| Step 3 | Ctrl+B is refused with the reason (the game uses B to holster your weapon), and Save stays grey. F7 is accepted and Save lights up |
| Step 4 | Only the Mod Manager, with the cursor. The tab and your other windows are gone |
| Step 5 | The Mod Manager hides and V moves again |

To take the key off, select **Mod Manager** in the Mod Manager and press **Remove** beside **Key**.

## HUD widgets

A HUD widget is a window that acts like part of the game's own HUD: it is drawn, but never takes the mouse or keyboard, even in interactive mode, and you can't drag it. The **Coords HUD** and **Vitals** samples are HUD widgets.

HUD widgets, and other windows that ask for it, hide by themselves:

| While the game shows | Which means |
|---|---|
| A menu | Inventory, map, pause menu and so on |
| Photo mode | While it's on |
| The main menu | The main menu and loading screens |
| A scene | A cinematic scene (a cutscene). Ordinary conversations with NPCs don't count. Which scenes count has not been fully tested yet: if a widget stays up in a cutscene, please report it |

## The Pins window

Mods, AI assistants and you can put **pins** in the world: glowing posts with a label and the distance, drawn by REDnode over the game. The **Pins** window lists them all and lets you drop your own. Switch on **Pins** in the launcher.

(Screenshot on the wiki, "The Pins window": The Pins window at the right of the screen: a few pins listed nearest first, each with its colour, where it comes from and its distance, a Go there button on each, the name box with Drop a pin here, and two of the pins visible in the world behind it.)

| Part | Does |
|---|---|
| The list | Every pin, nearest first, with its colour, where it comes from (one of your sets, a mod, an assistant) and its distance. A filter box narrows it |
| **Go there** | Moves V beside the pin, about 2.5 m from it, facing it |
| The name box and **Drop a pin here** | Puts a pin with that name at V's feet, in the set in use, and saves the way V faces. **Enter** in the box drops one too. Every pin keeps an id when you rename it, so a tool that uses your pins, such as EDGEdir, still finds it (since 0.70.0) |
| **✕** on one of your pins | Removes it from its set and its file at once. There is no undo |
| **Click a pin to go there** | Off by default. On, a click on a pin's label or post in the world, in interactive mode, moves V there |
| **Hide all** | Takes every pin out of the world for now. The list shows them dimmed |

The **Sets** tab keeps your own pins in **sets**, one file each:

| Part | Does |
|---|---|
| Your sets | Each one shown or hidden by its switch. **USE** picks the set that new pins go into |
| **New set** | Makes an empty set, in use at once |
| **Open** | Opens a `.pins.json` file by its full path, such as one from a mod project. Windows' Copy as path works |
| **✕** on a set | Takes it off the list. Its file stays |

Your sets, and which are shown, come back each time the game starts. A pin a mod or an assistant dropped goes when that mod stops, or when you load a save. A hidden set's pins are not listed.

### Try it: drop a pin and go back to it

1. Load a save, outdoors on open ground. Press **F10** and switch on **Pins** in the launcher.
2. Type `Start` in the name box and press **Drop a pin here**.
3. Walk about 50 m away. Press **Go there** on **Start**.

| After | You should see |
|---|---|
| Step 2 | A cyan pin at V's feet, listed as **Start** in the set My pins, 0 to 3 m away |
| Step 3 | The distance counts up as you walk. After **Go there**, V stands beside the pin, facing it |

Mod makers: see [Pins](https://edgemodders.ai/wiki/rednode/world.html#pins) on The world page.

## Themes

The **Theme** buttons at the bottom of the launcher recolour every window built with the UI kit, at once:

| Theme | Look |
|---|---|
| **REDnode** | The EDGE HUD look: dark panels, yellow and cyan |
| **HUD red** | A look-alike of the game's own red UI |
| **EDGE** | Like REDnode, with solid yellow title bars |

An app can choose its own look; it then keeps it whatever you pick. The HUD samples always use HUD red.

## The Console

The **Console** is a command line for the game, built into REDnode. It does the jobs players used Cyber Engine Tweaks' console for, such as giving V an item, and it needs no Cyber Engine Tweaks.

Switch on **Console** in the launcher: its window opens at the top of the screen. Type a line at the bottom and press Enter; the answer shows above.

(Screenshot on the wiki, "The Console": The Console window at the top of the screen after typing addItem with the trousers' id: its answer, 1 × Items.Pants_01_basic_01 added, and the line to type in below.)

### Try it: your first command

1. **Load a save.** The commands below act on V, and at the main menu V isn't in the world yet: they answer with an error there.
2. Press **F10**, click the **REDNODE** tab and switch on **Console**.
3. Click in the line at the bottom of the Console, type `pos()` and press **Enter**.
4. Type `addItem("Items.money", 1000)` and press **Enter**.
5. Press **Esc** and open the inventory.

| After | You should see |
|---|---|
| Step 2 | The Console at the top of the screen, with a welcome line |
| Step 3 | Where V stands: an x, a y and a z |
| Step 4 | The answer `1000 × Items.money added` |
| Step 5 | V's eddies up by 1,000 |

### Commands

| Type | Does |
|---|---|
| `addItem("Items.Pants_01_basic_01")` | Puts the item in V's inventory. Add a number for more than one: `addItem("Items.money", 1000)` gives V 1,000 eddies. A wrong id gets a red error, not an empty item |
| `removeItem("Items.Pants_01_basic_01")` | Takes the item out of V's inventory. Untested in the game |
| `pos()` | Where V is: x, y and z |
| `tp(x, y, z)` | Moves V there. Untested in the game: save first, since a wrong place can leave V stuck |
| `clear()` | Empties the window |
| `help()` | Lists these shortcuts |

Commands from Cyber Engine Tweaks' console, such as `Game.AddToInventory(...)`, are written in Lua and don't work here: use the shortcuts above.

### Finding an item's id

Every item has an id in **TweakDB**, the game's database of items and stats, such as `Items.Pants_01_basic_01`. Type it exactly as written, in quotes. Ways to find one:

| Way | How |
|---|---|
| Ask an assistant | Ask [REDagent](https://edgemodders.ai/wiki/redagent/) in the game, or Claude Code with [EDGEchat](https://edgemodders.ai/wiki/edgechat/): "What is V wearing in the outer torso slot? Give me its TweakDB record id." |
| Look it up in [REDcode](https://edgemodders.ai/wiki/redcode/tweakdb.html) | Its TweakDB view searches the game's records by name |
| An item list | Community lists of item codes for Cyber Engine Tweaks use the same ids. Take the part in quotes, such as `Items.money` |

### Keys in the Console

| Key | Does |
|---|---|
| **Enter** | Runs the line |
| **Shift+Enter** | Adds a new line without running |
| **Up**, **Down** | Bring back what you typed before, even after a game restart |
| **Tab** | Finishes the name you started typing |
| **Ctrl+L** | Empties the window, like `clear()` |
| **Stop** (a button) | Ends a line that never finishes, such as an endless loop. The Console starts again; the game and your other mods carry on |

Closing the Console's window ends the Console. What you typed before is kept for next time.

**For mod makers:** any JavaScript works in the Console, with the whole `rednode` package ready and no imports. Try a call from the [game API](https://edgemodders.ai/wiki/rednode/game-api.html) here before you put it in a package.

## Keyboard shortcuts

| Key | Where | Does |
|---|---|---|
| **F10** | Anywhere in the game | Passive, interactive, hidden, and round again. It always leaves interactive mode |
| **Esc** | Interactive mode | Back to passive. If a window is holding the cursor, for example to turn a 3D camera, the first Esc releases the cursor. A window that asks for Esc, such as the UI Workbench while it picks, gets it instead |
| Click empty screen | Interactive mode | Back to passive, or to hidden with **Hide on a click in the game** on (since 0.69.0) |
| **Ctrl+1** to **Ctrl+9** | Interactive mode | Switches to that [space](https://edgemodders.ai/wiki/rednode/spaces.html) |
| An app's own key, such as **F7** | Anywhere in the game | Shows only that app, with the cursor, or hides it again. You choose the key: see [App keys](https://edgemodders.ai/wiki/rednode/overlay.html#app-keys) |
| **Esc** | While you play | The game's pause menu. REDnode hides while it is open: see [In the pause menu](https://edgemodders.ai/wiki/rednode/overlay.html#in-the-pause-menu) |
| **Ctrl+C**, **Ctrl+V**, **Ctrl+X**, **Ctrl+A**, **Ctrl+Z**, **Ctrl+Y** | In the front window | Copy, paste, cut, select all, undo, redo. A window with its own undo or copy, such as an editor, handles them itself |
| Double-click, and **Ctrl**, **Shift** or **Alt** with a click | In a window | Reach the window as they would in a desktop program |
| **F9** | Anywhere in the game | Not REDnode's: it is the game's Quick Load. Mind it, right beside F10 |

The F10 key can't be changed yet.

## Good to know

- **REDnode's windows are drawn over everything,** game menus included. That is why HUD widgets hide themselves when a menu opens.
- **The cost is small.** In the developer's tests the overlay took about 0.1 ms of each game frame with every sample open. Each open window does use memory: roughly 60 to 100 MB.
- **Alt+Tab** to the desktop and back keeps interactive mode.
- **Open at start** is a switch in the Settings drawer, on by default. On, the REDNODE tab and your HUD-pinned windows show as soon as the game starts. Off, the game starts with only HUD widgets showing: the tab and the pinned windows wait for your first F10.
- **Where the windows come from.** A separate program beside the game, the overlay host, makes the windows' pictures, and the game draws them. That is why a window can crash without the game noticing.
- **Not yet handled:** HDR brightness matching, frame generation, resolution and window-mode changes and ultrawide screens are planned work. Steam Deck is untested.
