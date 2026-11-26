<!-- Copied from EDGEweb's docs/wiki/rednode/ui-tools-try.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/ui-tools-try.html (reviewed 2026-11-13) -->

# UI Workbench: Try

**Try** changes one of the game's own widgets while the game runs: hide it, fade it, tint it, resize it, move it, or change its text. It's for finding out what controls a look before you change any file, the way you would try a CSS value in a browser's developer tools.

Nothing Try does is kept. Each change remembers the value the widget had, **Reset** puts it back, and switching the Workbench off puts back everything that is left. A save never holds a change.

> **Needs the admin permission.** Try changes the game's own UI, so the Workbench needs the **managing REDnode** permission (admin) before it will do it. See [The admin permission](https://edgemodders.ai/wiki/rednode/ui-tools.html#the-admin-permission). Without it nothing changes, and the line under the fields says the permission is missing.

## Open it

1. In the **Inspect** tab, select a widget: pick it on screen with **Pick**, or click its row in the tree. See [Inspect](https://edgemodders.ai/wiki/rednode/ui-tools-inspect.html).
2. In the details, open **Try**. It is folded at first; once you open it, it stays open for the next widget.

(Screenshot on the wiki, "The Try part": The details of a picked HUD text with the Try part open: the visible switch, the opacity slider, the tint, text, font size, size, margin and x y fields filled with the widget's values, the line saying the value now and before, and Reset, Reset all and the count of changes tried.)

## The fields

Each field starts with the widget's value as the game has it now. Type a new value and press **Enter** to try it. The switch and the slider act at once.

| Field | Shown for | Type | Does |
|---|---|---|---|
| **visible** | Every widget | A switch | Shows or hides the widget, with everything inside it |
| **opacity** | Every widget | A slider, 0 to 100 % | Fades it. The widget follows **while you drag** |
| **tint** | Every widget | `#rrggbb` or `#rrggbbaa` | Its colour. Texts and shapes take the tint as their colour |
| **text** | Text widgets | Any text | What it says |
| **font size** | Text widgets | A number | The size of its letters |
| **size** | Every widget | Two numbers: `width height` | Its size, in the HUD's units |
| **margin** | Every widget | One number, or four: `left top right bottom` | Space around it, inside its parent |
| **padding** | Panels | One number, or four | Space inside it, around its children |
| **x y** | Every widget | Two numbers: `x y` | Moves it from where its parent puts it, without changing the layout. In **Properties** and in scripts this property is called `translation` |

The line under the fields reports each try: the property, the value now and the value **before**, for example `opacity: 0.4 (before: 1)`. A value the field can't read, such as a single number for **x y**, is refused with what it wants (`give two numbers: x y`) and changes nothing.

| Button | Does |
|---|---|
| **Reset** | Puts back everything tried on this widget, and reads it again |
| **Reset all** | Puts back everything tried on every widget, this one or others |
| The count beside them | How many changes are tried and not yet put back, or **nothing tried** |

### What puts a change back

| When | What happens |
|---|---|
| You press **Reset** or **Reset all** | The values from before come back at once |
| You switch the Workbench off, or close its window | REDnode puts back every change it tried |
| The REDnode host starts | It puts back anything an earlier session left, for a host that ended without cleaning up |
| A save loads | The game rebuilds its HUD with fresh widgets, so the ones you changed are gone. Pick again |
| The game removes the widget itself | The change goes with it. **Reset all** then says how many were on widgets the game had removed |

The game keeps running its own scripts while you try. If a widget's script (its *controller*) sets the same property, your change may be overwritten a moment later, as a clock rewrites its text every minute. That tells you something too: the value comes from the script, not from the widget's file. (This has not been checked for every HUD piece.)

## Walkthrough: change a HUD text, tint it, fade it, reset it

You need a save with the UI Workbench switched on and its admin permission allowed.

1. Load a save. Press **F10** for interactive mode.
2. In **Inspect**, press **Pick** and click a text on the HUD: the name of the quest you're tracking, or the clock. The details show a text widget, with its words in the **text** row.
3. Open **Try**. Its **text** field holds the same words.
4. Replace them with `Hello from REDnode` and press **Enter**. The game's own text changes on the HUD, in the game's own font. The line under the fields says `text: Hello from REDnode (before: ...)` with the old words.
5. Click the **tint** field, type `#ff3040` and press **Enter**. The text turns red.
6. Drag the **opacity** slider slowly to the left. The text fades while you drag, and comes back as you drag right.
7. Type `40 0` in **x y** and press **Enter**. The text moves 40 to the right; the panel around it stays.
8. The count beside **Reset all** says **4 change(s) tried**.
9. Press **Reset**. The text, its colour, its opacity and its place come back as they were, and the count says **nothing tried**.

(Screenshot on the wiki, "Try on a HUD text": The quest tracker's objective line on the HUD changed by Try: it reads Hello from REDnode, in red, shifted to the right, with the Workbench's Try part showing the before line.)

Now try two changes on two different widgets, and press **Reset all**: both come back. Try one more, then switch the Workbench off in the launcher: that one comes back too as it closes.

> **Tip:** the health bar at the top left hides itself out of combat. Pick the quest tracker, the clock or the minimap's labels for a first try.

## Finding what controls a look

| You want to know | Try |
|---|---|
| Which widget draws a line of text | Change its **text** to something obvious: if the text on screen changes, that's the one |
| Which panel holds a group | Switch **visible** off on the parent you picked with **Parent**: everything that vanishes is inside it |
| Where a colour comes from | Change the **tint** on the widget, then on its parents. If a parent's tint changes the child, the colour is inherited |
| Whether space comes from a margin or the layout | Change **margin** and **padding** and watch which one moves the widget |

When you've found it, press **Path** in the details to copy where the widget is, and look up the property's exact name under **Properties**. Note the `.inkwidget` file's hash from the details too.

## Making a change permanent

Try never keeps anything: it is for finding the widget and the property. To keep a change, you have three routes today.

| Route | What it is | Where to go |
|---|---|---|
| A panel of your own | Leave the game's piece alone and show your own beside it, built from a copy of it. The only route that needs no other tool | [To source](https://edgemodders.ai/wiki/rednode/ui-tools-to-source.html), then [Projects and Edit](https://edgemodders.ai/wiki/rednode/ui-tools-projects.html) and [Export](https://edgemodders.ai/wiki/rednode/ui-tools-export.html) |
| An archive mod | Change the game's `.inkwidget` file (the one the details name) and pack it as a mod that replaces it | REDcode opens and edits game files: see its [game assets](https://edgemodders.ai/wiki/redcode/game-assets.html) and [editing](https://edgemodders.ai/wiki/redcode/editing.html) pages. EDGE has no step-by-step guide for editing an `.inkwidget` yet |
| A script | A redscript mod, or a REDnode package with the `admin` permission, sets the property each time the widget appears | For REDnode: `ink.try`, under [For mod makers](https://edgemodders.ai/wiki/rednode/ui-tools-try.html#for-mod-makers). A package's tries are put back when it stops, so it must run while the change should show |

The path and the property name you noted are what the second and third routes need.

## For mod makers

Try is `ink.try(id, prop, value)` in the `rednode` package, for packages allowed `admin`; `ink.reset()` puts changes back and `ink.tried()` lists them. The properties, the form of each value and an example are in [The game's own UI](https://edgemodders.ai/wiki/rednode/more-apis.html#the-games-own-ui).
