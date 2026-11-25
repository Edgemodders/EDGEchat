<!-- Copied from EDGEweb's docs/wiki/rednode/ui-tools-to-source.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/ui-tools-to-source.html (reviewed 2026-11-13) -->

# UI Workbench: To source

**To source** turns a piece of the game's UI into a project of your own. It reads the widget you selected and everything under it, with their layout and look, and writes them as [ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html) in a new project, which opens in the **Edit** tab. Press **Run** and a copy shows on the HUD beside the original.

It's the quickest way to a panel that looks like the game's: the fonts, sizes, colours, icons and spacing come from the game's own widgets, and you change what you want from there.

> **Needs the admin permission**, as Projects does: To source makes a project, which is a package. See [The admin permission](https://edgemodders.ai/wiki/rednode/ui-tools.html#the-admin-permission).

## What it copies

| The game's widget | Becomes |
|---|---|
| A canvas, or a HUD piece's own window | `<canvas>` |
| A vertical panel | `<column>` |
| A horizontal panel | `<row>` |
| A text | `<text>`, with its words, size, weight, case, alignment and colour |
| An image | `<image>`, with its atlas (as a hash) and part |
| A rectangle, a circle | `<rect>`, `<circle>` |
| Any other class | `<widget class="...">`, by the class's script name |

For each widget it also writes where it sits (`align` and `grow` in a panel, `anchor`, `x` and `y` in a canvas), its margins and padding, its size (or the size it is drawn at, when it has none of its own), its colour as `#rrggbbaa`, and its opacity. A `{` or `}` in a game text is doubled, so it isn't read as a [slot](https://edgemodders.ai/wiki/rednode/ink-markup.html#data-slots).

| Left out or changed | Why |
|---|---|
| **Hidden widgets** | They aren't shown, so the copy leaves them out. The status line counts them |
| Anything past **600 widgets** | To keep the copy readable. The first comment says where it stopped |
| What markup can't say | Listed as **Approximated** in the markup's first comment: a widget stretched in one direction only; a panel's setting that gives every child a margin, which the copy adds to each child instead; a font other than the game's usual one; a colour brighter than white (the game's HDR colours). The copy may look slightly different in those places, and the comment tells you where |
| The HUD piece's own window | When you select a HUD piece's window (a full-screen `inkVirtualWindow` holding one widget), To source starts from what it holds, so the copy isn't wrapped in a full-screen frame |

### The copy doesn't update itself

The copy has the original's look, not its behaviour. The game's own **controller** (its script) is what fills the original with live numbers, moves it and animates it. The copy has no controller, so its texts say what they said when you copied them. To bring it to life, put `{slots}` in the markup and give them data from the script: [Make it live](https://edgemodders.ai/wiki/rednode/ui-tools-to-source.html#make-it-live) below shows how.

### Its name and place

| | |
|---|---|
| Name | The widget's name with ` copy`, such as **Root copy**. A widget the game left unnamed is named by its class instead, never by the game's placeholder `UNINITIALIZED_WIDGET`. A second copy of the same widget is **Root copy 2**, and so on |
| The project's id | Made from the name: `root-copy`, `root-copy-2` |
| Where it shows | The `<mount>` puts the copy beside the original: to its right when there's room, else to its left, else below it. Change the mount's `x` and `y` to move it |
| Its description | "A copy of the game's ... made with To source in the REDnode UI Workbench", with the widget's path |

The markup's first comment records what was copied, the date, how many widgets, how many hidden ones were left out, and what was approximated. The script loads the markup with no data:

```js
import { ink } from 'rednode';

// The functions the markup's on... attributes name (they fire from phase I3, Input).
const handlers = {};

const view = await ink.load('panel.ink.html', handlers, {});
```

The comment in it means: native panels can't be clicked yet, so `handlers` stays empty for now.

## Walkthrough: copy the quest tracker

The quest tracker is a good first piece: it's on screen whenever a quest is tracked, and it has texts, icons and panels. Expect a copy of a few dozen widgets, made at once.

> **Tip:** the health bar at the top left hides itself out of combat, so it may have nothing to copy when you try. That's why this walkthrough uses the quest tracker.

You need the UI Workbench switched on with its admin permission allowed, and a save with a quest tracked.

1. Load the save and press **F10** for interactive mode.
2. In **Inspect**, press **Pick** and click the quest's name in the tracker at the right of the HUD.
3. In the details, press **Parent** until the outline on screen covers the whole tracker: its title, its objectives and their icons. If you reach the tracker's own window (class `inkVirtualWindow`, a box the size of the screen), that's fine too: To source starts inside it.
4. Press **To source**. The status line says `To source: N widgets into ...`, with any hidden ones and approximations, and the **Edit** tab opens on the new project with no error. The markup is on the left, starting with a comment that lists what was copied; the short script is on the right. See [The Edit tab](https://edgemodders.ai/wiki/rednode/ui-tools-projects.html#the-edit-tab).
5. Press **Run**. Leave interactive mode (Esc) to see the HUD clearly: a copy of the tracker shows beside the original, with the same texts, icons and colours, standing still.
6. Press **F10** again. In the markup, look for the `<text ...>` line that holds the quest's name: its words are the ones you see on the HUD. Change the words between `<text ...>` and `</text>`, and press **Save** (or Ctrl+S). The copy shows your words a moment later.
7. Press **Stop**: the copy goes.

(Screenshot on the wiki, "To source: the quest tracker and its copy": The right side of the HUD with the game's quest tracker and its copy beside it, the copy's quest name changed, and the Workbench's Edit tab in front showing the copied markup.)

### Make it live

The copy shows fixed words. Three more steps make the script decide them:

1. In the markup, replace the quest's name between `<text ...>` and `</text>` with `{title}`.
2. In the script, change the last line's `{}` to the data: `const view = await ink.load('panel.ink.html', handlers, { title: 'My contract' });`
3. Press **Save**, then **Run**. The copy now shows **My contract**. Change the words in the script, save, and the copy follows.

From here the script can change the data whenever it likes with `view.set({ title: '...' })`: see [Data: slots](https://edgemodders.ai/wiki/rednode/ink-markup.html#data-slots) and the [tutorial](https://edgemodders.ai/wiki/rednode/ui-tools-tutorial.html).

Keep the project to build on, or delete it in **Projects**: press **Delete**, then **Sure?**. It goes to `.trash`, and you can [bring it back](https://edgemodders.ai/wiki/rednode/ui-tools-projects.html#bring-a-deleted-project-back).

## Good to know

| | |
|---|---|
| A copy of a menu | To source reads any widget the Inspect tab shows, but projects mount on the HUD only for now. A copy of a menu piece runs on the HUD |
| Icons | Images keep the game's atlas and part, so the game draws its own icon in your copy |
| Big pieces | Select a smaller part first (with **Parent** you go up; the tree's rows take you down). 600 widgets is the limit |
| Before you edit | The copy's markup can be long. Use the editor's completion and the error line to change it safely; a mistake is shown at its line before anything reaches the game |
