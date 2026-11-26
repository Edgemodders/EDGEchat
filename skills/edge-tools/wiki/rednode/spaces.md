<!-- Copied from EDGEweb's docs/wiki/rednode/spaces.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/spaces.html (reviewed 2026-11-13) -->

# Spaces and layers

With a few HUD widgets and tool windows, the screen fills up fast. Switching packages off and on to make room loses their state. REDnode has three answers:

| Feature | What it does | Who controls it |
|---|---|---|
| [**Spaces**](https://edgemodders.ai/wiki/rednode/spaces.html#spaces) | Named sets of windows. Only the current space's windows show | You |
| [**The tool layer**](https://edgemodders.ai/wiki/rednode/spaces.html#the-tool-layer) | REDnode's own windows always stay above packages' windows | REDnode, and you for packages you allow |
| [**Solo mode**](https://edgemodders.ai/wiki/rednode/spaces.html#solo-mode) | One package hides every other package's windows while it works | The package, with your permission |

## Spaces

A space is like a virtual desktop: a named set of windows. You might keep a "Combat" space with a few HUD widgets and a "Build" space with editing tools, and switch between them in a keystroke.

Until you make a second space, nothing changes: everything is in **Main**, and there's no switcher and no extra title-bar button.

(Screenshot on the wiki, "Switching spaces": The launcher tab showing ▾ Combat, with its list of spaces open: Main and Combat with their Ctrl+number.)

### Try it: make a second space

With a save loaded, press **F10** and open the launcher. Switch on **Hello mod** first, so there is a window to watch.

1. In the **Space** row at the bottom of the launcher, press **New**, type `Build` and press **Enter**.
2. Press **Ctrl+1**.
3. Press **Ctrl+2**.
4. Press **Ctrl+1** again. On the Hello mod's title bar, press the space button (next to **✕**, or under **⋯**) and choose **All spaces**.
5. Press **Ctrl+2**.

| After | You should see |
|---|---|
| Step 1 | The Hello mod window is gone: you are in the new, empty space. The launcher tab now shows **▾** and **Build** |
| Step 2 | You are back in **Main**, and the Hello mod window is back |
| Step 3 | **Build** again, without the window |
| Step 5 | The Hello mod window shows in **Build** too |

To undo it all, press **Delete** in the Space row while you are in **Build**.

### Make, rename and delete spaces

In the launcher, the **Space** row at the bottom shows the current space with three buttons:

| Button | Does |
|---|---|
| **New** | Type a name and press Enter. The new space is created and becomes the current one, empty apart from REDnode's own windows |
| **Rename** | Gives the current space a new name |
| **Delete** | Deletes the current space. Its windows move to the first space, so nothing is lost |

**Cancel** abandons a name you're typing.

### Switch spaces

| Way | How |
|---|---|
| The launcher tab | Once there are two spaces, the tab shows **▾** and the current space. Click it for the list |
| Keys | **Ctrl+1** to **Ctrl+9** in interactive mode (after F10): the first space is Ctrl+1, and so on |

### Put windows in a space

A window that opens for the first time joins the space you're in. To move it:

| Way | How |
|---|---|
| From the window | The space button on its title bar (next to **✕**, or under **⋯**): choose a space, or **All spaces** to show it everywhere |
| A whole package | In the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html), select it and press one of the space buttons in its details, or **All** |
| See where things are | The Mod Manager's **Space** column |

If you moved one window with its own title-bar button, it stays where you put it, even when you later move its whole package. REDnode's own windows (the launcher, Mod log, Mod Manager, debuggers) show in every space.

### Spaces and Pin to HUD

They combine. A space decides which windows show *at all*. [Pin to HUD](https://edgemodders.ai/wiki/rednode/mod-manager.html#pin-to-launcher-and-pin-to-hud) decides which of those stay on screen *during gameplay*, rather than only in interactive mode.

## The tool layer

REDnode keeps its windows in two layers:

| Layer | Holds |
|---|---|
| **Tool layer** (on top) | The launcher, the Mod log, the Mod Manager, debuggers, and packages you allow to stay above others, such as the Test timer and the [Admin Tools](https://edgemodders.ai/wiki/rednode/admin-tools.html) pack's apps |
| **Package layer** | Every other package's windows and widgets |

Clicking a window brings it to the front of its own layer only. So a package that covers the whole screen, such as an editor's viewport, can never hide the launcher: you can always reach REDnode's controls.

A package can ask to join the tool layer. The launcher and the Mod Manager show the request as "Asks for staying above other packages' windows": switch **Allowed** on to grant it. See [Permissions](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions). The Test timer sample asks for it, so its buttons stay reachable during tests.

## Solo mode

Some packages need the screen to themselves for a while, for example a world editor while you place objects. Such a package can switch on **solo mode**: every other package's windows and HUD widgets hide until it ends. Tool-layer windows stay.

A package needs your permission for this. It shows as "Asks for hiding every other package's windows while it asks (solo mode)"; allow it in the Mod Manager, under [Permissions](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions). A package that doesn't get it still runs, just without solo mode.

While solo mode is on, the launcher tab shows **SOLO**, the package's name and **End**.

(Screenshot on the wiki, "Solo mode": The launcher tab showing SOLO with a package's name and the End button, with only the solo package's window and REDnode's own windows on screen.)

Solo mode ends when:

- the package turns it off;
- the package stops or crashes;
- another package takes solo mode;
- you withdraw the permission in the Mod Manager;
- you press **End** beside the launcher tab.

Everything that was hidden comes back. While solo mode is on, the other packages' windows stay hidden in every space.
