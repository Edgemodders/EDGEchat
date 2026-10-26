<!-- Copied from EDGEweb's docs/wiki/redcode/editing.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/editing.html (reviewed 2026-10-24) -->

# Editing game files

Most game files are in a binary format called CR2W. REDcode opens them in the **CR2W editor**: a tree of what's in the file on the left, and the selected part's properties on the right, ready to change. WolvenKit's own reader and writer do the work, through REDbridge, so what you save is a file WolvenKit and the game understand.

(Screenshot on the wiki, "The CR2W editor": An .ent file from a project open in the CR2W editor: the tree of chunks on the left with a component selected, its properties in the grid on the right, and the search box in the footer.)

## Which files open in it

Clicking a game file in the Project view or Game Assets opens the CR2W editor. That covers entities (`.ent`, `.app`), meshes, atlases (`.inkatlas`), materials (`.mi`, `.mt`, `.mlsetup`, `.mlmask`), animations, rigs, ink widgets, scenes, quests, streaming sectors and around forty types in all.

- A `.mesh` opens on its [3D view](https://edgemodders.ai/wiki/redcode/viewers.html#meshes-in-3d) first; **Tree** switches to the editor.
- A texture (`.xbm`) opens in the texture viewer. **Open in CR2W Editor** in the Project view's right-click menu shows it in the editor instead, with the image above the grid and its setup selected.
- `.json` and `.csv` files that are CR2W inside, such as the game's localization files, offer the editor under **Open With...**.

Files from Game Assets open read-only, with a banner: *This is the game's copy and is read-only. Add the file to the project to edit it.*

## Changing values

Select a node in the tree, and its properties show in the grid. Every kind of value has its own control:

| Value | How you edit it |
|---|---|
| Numbers | Type the new number. It's stored as the game stores it (see [What the file keeps](https://edgemodders.ai/wiki/redcode/editing.html#what-the-file-keeps)) |
| Names and paths | Edit the text |
| Enums (a fixed list of choices) | Pick from a dropdown |
| On or off | A checkbox |
| Lists (arrays) | Add, remove, and move items up and down |
| An empty slot for an object (a handle) | Create it, with the game's default values |

The editor reads the file one node at a time, so even a large file opens quickly: a 21 MB localization file opens in under half a second, its rows paged 200 at a time.

You can drag the line between the tree and the grid to resize them. Double-click it to reset.

## Undo, redo and save

The CR2W editor works like any VS Code editor:

- `Ctrl+Z` and `Ctrl+Y` undo and redo.
- The tab shows a dot while you have unsaved changes.
- `Ctrl+S` writes the file through WolvenKit's writer and refreshes the view.
- If VS Code closes with unsaved changes, they're backed up and restored next time.

## Search in a file

The search box in the editor's footer finds values and property names anywhere in the file. Click a hit to jump to it in the tree.

## Localization files: the table view

Localization files, such as `onscreens.json` and subtitle files, open as a **Table**: one row per text, with its key.

- Type in the filter box to narrow the rows by key or text.
- Click a text to edit it in place.
- To find a text by its words across the whole game, use the [LocKeys view](https://edgemodders.ai/wiki/redcode/game-assets.html#the-lockeys-view). Its **Add to Project Onscreens** copies an entry into your project's file and opens this table on its row.
- **Add row** adds a new entry and scrolls to it. Each row has a delete button.
- **Tree** shows the same file as the normal tree.

(Screenshot on the wiki, "The table view": A localization file in the table view: the filter box, rows with their keys and texts, one text being edited, and the Add row button.)

## Atlases: the atlas view

An atlas (`.inkatlas`) is one texture cut into many small pictures, called parts, that the game's interface uses. It opens in the **Atlas** view: the texture with every part drawn over it as a rectangle.

- Click a rectangle, or a part in the list, to select it. The list has its own filter.
- Edit a part's rectangle in pixels. REDcode writes the coordinates the game reads at the same time.
- Add and delete parts, and switch between the atlas's slots.
- **Fit**, **1:1**, **Pixels** and **Labels** change how the texture shows. **Tree** is one click away.

(Screenshot on the wiki, "The atlas view": An .inkatlas in the atlas view: the texture with part rectangles drawn over it, one part selected and its pixel rectangle in the side list.)

## The Properties view

The **Properties** view, the last view in the REDcode sidebar, shows the selected node of the editor you're in, in the same grid, and you can edit it there. That lets the editor stay on the table, the atlas or the 3D view while the values sit in the sidebar. An edit in either place shows in the other.

## What the file keeps

WolvenKit's format has three rules that explain almost every surprise:

| Rule | What you see |
|---|---|
| Numbers are 32-bit floats | `0.22` reads back as `0.219999999`. A change smaller than about seven significant digits is no change at all |
| `compiledData` is rebuilt from `components` every time an `.ent` or `.app` file is written | REDcode shows `compiledData` read-only, with a note. Edit the same component under `components` and `compiledData` follows |
| Values at their default aren't stored | Setting a value back to its default makes the file smaller. Nothing is lost |

## Editing as JSON

Every game file can also be read as **WolvenKit JSON**: the same tree, written out as text. It's handy for reading a whole file at once, for comparing files, and for an AI assistant.

- **Open as JSON**, in the right-click menu of the Project view or Game Assets, opens the file as JSON in a normal text tab.
- On a file from your project, change the JSON and press **Save JSON to Project**, the button in the editor's title bar. REDcode asks to confirm, rebuilds the game file in `source/archive` from the JSON, and reads it back into the tab.
- A message then says whether the file reads back exactly as saved. If a value didn't survive, it names it; the rules above are almost always why.
- Plain `Ctrl+S` only saves the JSON text. It never touches the game file, so a half-finished edit can't break it.

In the JSON, an edit inside `compiledData` vanishes on save, for the reason above. In the CR2W editor that part is read-only, so you can't make that mistake there.

(Screenshot on the wiki, "Save JSON to Project": A project file open as JSON in a text tab, with the Save JSON to Project button in the editor title bar and the confirmation message after saving.)
