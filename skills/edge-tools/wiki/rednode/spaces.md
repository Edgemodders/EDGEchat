<!-- Copied from EDGEweb's docs/wiki/rednode/spaces.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/spaces.html (reviewed 2026-10-24) -->

# Spaces and layers

With a few HUD widgets and tool windows, the screen fills up fast. Switching packages off and on to make room loses their state. REDnode has three answers:

| Feature | What it does | Who controls it |
|---|---|---|
| **Spaces** | Named sets of windows. Only the current space's windows show | You |
| **The tool layer** | REDnode's own windows always stay above packages' windows | REDnode, and you for packages you allow |
| **Solo mode** | One package hides every other package's windows while it works | The package, with your permission |

All three passed in-game tests in October 2026.

## Spaces

A space is like a virtual desktop: a named set of windows. You might keep a "Combat" space with a few HUD widgets and a "Build" space with editing tools, and switch between them in a keystroke.

Until you make a second space, nothing changes: everything is in **Main**, and there's no switcher and no extra title-bar button.

(Screenshot on the wiki, "Switching spaces": The launcher tab showing ▾ Combat, with its list of spaces open: Main and Combat with their Ctrl+number.)

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
| Keys | **Ctrl+1** to **Ctrl+9** while the overlay is open: the first space is Ctrl+1, and so on |

### Put windows in a space

A window that opens for the first time joins the space you're in. To move it:

| Way | How |
|---|---|
| From the window | The space button on its title bar (next to **✕**, or under **⋯**): choose a space, or **All spaces** to show it everywhere |
| A whole package | In the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html), select it and press one of the space buttons in its details, or **All** |
| See where things are | The Mod Manager's **Space** column |

A window's own choice beats its package's. REDnode's own windows (the launcher, Mod log, Mod Manager, debuggers) show in every space.

### Spaces and Pin to HUD

They combine. A space decides which windows show *at all*. [Pin to HUD](https://edgemodders.ai/wiki/rednode/mod-manager.html#pin-to-launcher-and-pin-to-hud) decides which of those stay on screen *during gameplay*, rather than only in interactive mode.

## The tool layer

REDnode keeps its windows in two layers:

| Layer | Holds |
|---|---|
| **Tool layer** (on top) | The launcher, the Mod log, the Mod Manager, debuggers, and packages you allow to stay above others, such as the Test timer and the Admin Tools pack's apps |
| **Package layer** | Every other package's windows and widgets |

Clicking a window brings it to the front of its own layer only. So a package that covers the whole screen, such as an editor's viewport, can never hide the launcher: you can always reach REDnode's controls.

A package can ask to join the tool layer with the permission "staying above other packages' windows". Allow it in the Mod Manager. The Test timer sample asks for it, so its buttons stay reachable during tests.

## Solo mode

Some packages need the screen to themselves for a while, for example a world editor while you place objects. With your permission, such a package can switch on **solo mode**: every other package's windows and HUD widgets hide until it ends. Tool-layer windows stay.

While solo mode is on, the launcher tab shows **SOLO**, the package's name and **End**.

(Screenshot on the wiki, "Solo mode": The launcher tab showing SOLO with a package's name and the End button, with only the solo package's window and REDnode's own windows on screen.)

Solo mode ends when:

- the package turns it off;
- the package stops or crashes;
- another package takes solo mode;
- you withdraw the permission in the Mod Manager;
- you press **End** beside the launcher tab.

Everything that was hidden comes back. Solo mode beats spaces while it lasts.

The permission is called "hiding every other package's windows while it asks (solo mode)". A package that doesn't get it still runs, just without solo mode.
