<!-- Copied from EDGEweb's docs/wiki/redcode/editing.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/editing.html (reviewed 2026-11-25) -->

# Editing game files

Most game files are in a binary format called **CR2W**: data only the game and modding tools can read. REDcode opens them in the **CR2W editor**: a tree of what's in the file on the left, and the selected part's properties on the right, ready to change. WolvenKit's own reader and writer do the work, through REDbridge, so what you save is a file WolvenKit and the game understand.

| On this page | |
|---|---|
| [Which files open in it](https://edgemodders.ai/wiki/redcode/editing.html#which-files-open-in-it) | About forty file types |
| [Reading the tree](https://edgemodders.ai/wiki/redcode/editing.html#reading-the-tree) | What you're looking at |
| [Changing values](https://edgemodders.ai/wiki/redcode/editing.html#changing-values), [Undo, redo and save](https://edgemodders.ai/wiki/redcode/editing.html#undo-redo-and-save), [Search in a file](https://edgemodders.ai/wiki/redcode/editing.html#search-in-a-file) | The everyday work, and [going to a path](https://edgemodders.ai/wiki/redcode/editing.html#go-to-a-path) |
| [Try it: change one value](https://edgemodders.ai/wiki/redcode/editing.html#try-it-change-one-value) | A light's radius |
| [Localization files: the table view](https://edgemodders.ai/wiki/redcode/editing.html#localization-files-the-table-view) | The game's texts |
| [Atlases: the atlas view](https://edgemodders.ai/wiki/redcode/editing.html#atlases-the-atlas-view) | Interface pictures |
| [Sectors: nodeData and instanced meshes](https://edgemodders.ai/wiki/redcode/editing.html#sectors-nodedata-and-instanced-meshes) | What a placement points at, and what is inside a mesh buffer |
| [The Properties view](https://edgemodders.ai/wiki/redcode/editing.html#the-properties-view) | The same grid, in the sidebar |
| [Why a value looks different after saving](https://edgemodders.ai/wiki/redcode/editing.html#why-a-value-looks-different-after-saving) | Three rules of the format |
| [Editing as JSON](https://edgemodders.ai/wiki/redcode/editing.html#editing-as-json) | The whole file as text |

(Screenshot on the wiki, "The CR2W editor": An .ent file from a project open in the CR2W editor: the tree of chunks on the left with a component selected, its properties in the grid on the right, and the search box in the footer.)

## Which files open in it

Clicking a game file in the Project view or Game Assets opens the CR2W editor. That covers about forty file types, including entities (`.ent`, `.app`), meshes, atlases (`.inkatlas`), materials (`.mi`, `.mt`, `.mlsetup`, `.mlmask`), animations, rigs, interface widgets, scenes, quests, journals and the world's streaming sectors. [The file types you'll meet](https://edgemodders.ai/wiki/redcode/finding.html#the-file-types-youll-meet) says what the common ones are.

- A `.mesh` opens on its [3D view](https://edgemodders.ai/wiki/redcode/viewers.html#meshes-in-3d) first, an `.anims` file on its [Animations view](https://edgemodders.ai/wiki/redcode/viewers.html#animations), and a `.streamingsector` on its [3D view of the sector](https://edgemodders.ai/wiki/redcode/sectors.html). **Tree** switches to the editor, and the 3D view is as you left it when you come back.
- A texture (`.xbm`) opens in the texture viewer. **Open in CR2W Editor** in the Project view's right-click menu shows it in the editor instead, with the image above the grid and the texture's settings (format, compression, flags) in the grid.
- `.json` and `.csv` files that are CR2W inside, such as the game's localization files, offer the editor under **Open With...**.

Files from Game Assets open read-only, with a banner: *This is the game's copy and is read-only. Add the file to the project to edit it.* **Add to Project** in the editor's header does that: it copies the file into your project at its game path and selects it in the Project view. Open the project's copy to edit it. If the project has the file already, it asks first: open the project's copy, or replace it with the game's. See [Add to Project](https://edgemodders.ai/wiki/redcode/game-assets.html#add-to-project).

## Reading the tree

A game file is a nest of named things. The tree on the left shows them:

- The top entry is the file itself, with its type.
- Under it are its **properties**: named values. Some hold a single value, such as a number or a name. Some hold a list. Some hold another object with properties of its own, which you can open in turn.
- Click any entry (the docs call it a **node**) and the grid on the right shows its properties, each with its type and its value.

In an entity (`.ent`), the list you'll use most is `components`: the parts the object is made of, such as a mesh, a light or a collision shape. Open `components`, click a component, and its settings are in the grid.

## Changing values

Select a node in the tree, and its properties show in the grid. Every kind of value has its own control:

| Value | How you edit it |
|---|---|
| Numbers | Type the new number and press Enter. It's stored as the game stores it (see [Why a value looks different after saving](https://edgemodders.ai/wiki/redcode/editing.html#why-a-value-looks-different-after-saving)) |
| Names and paths | Edit the text |
| A fixed list of choices (an enum) | Pick from a dropdown |
| On or off | A checkbox |
| Lists (arrays) | Add, remove, and move items up and down |
| An empty place for an object (a handle) | Create the object, with the game's default values |

The footer says what each edit did, such as *Set components.0.radius*. Large files open quickly, because the editor reads only the part you're looking at.

You can drag the line between the tree and the grid to resize them. Double-click it to reset.

## Undo, redo and save

The CR2W editor works like any VS Code editor:

- `Ctrl+Z` and `Ctrl+Y` undo and redo.
- The tab shows a dot while you have unsaved changes.
- `Ctrl+S` writes the file through WolvenKit's writer and refreshes the view.
- If VS Code closes with unsaved changes, they're backed up and restored next time.

## Search in a file

The search box in the editor's footer finds values and property names anywhere in the file. Press Enter to search, click a hit to jump to it in the tree, and press Esc to clear the results. A hit far down a long list, past its first 200 entries, opens the tree at that entry and scrolls to it, as **Show in Tree** in the 3D views does.

On a sector's 3D view, the same box selects what it finds in the view: see [Search](https://edgemodders.ai/wiki/redcode/sectors.html#search) on the sector view's page.

### Go to a path

The same box also goes straight to a place in the file. Paste a path, such as `nodes.179.Data.buffer.Data` or `nodes[179].Data`, and press Enter: the tree opens there and selects it, switching from the 3D view if you were on it. Text that isn't a path searches as before.

Paths are written as in WolvenKit's JSON, dotted from the top, which is how assistants, scripts and error messages name places in a file.

## Try it: change one value

This changes the reach of a light the game uses in photo mode. It needs a project open ([make one](https://edgemodders.ai/wiki/redcode/projects.html#make-a-new-project) if you have none).

1. In **Game Assets**, press **Filter Game Assets** and type `photomode_arealight`.
2. On `base\entities\lights\photomode_arealight.ent`, press **Add to Project**.
3. In the Project view, click the file under **Archive**. It opens in the CR2W editor.
4. In the tree, open `components` and click the first component.
5. In the grid, find `radius`, type `12` and press Enter.
6. Press `Ctrl+S`.

| After | You should see |
|---|---|
| Step 2 | The file selected under Archive in the Project view |
| Step 5 | *Set components.0.radius* in the footer, and a dot on the tab |
| Step 6 | The dot gone. Close and reopen the file: `radius` is 12 |
| Clicking `compiledData` in the tree | A yellow banner and greyed-out fields. See [the rules](https://edgemodders.ai/wiki/redcode/editing.html#why-a-value-looks-different-after-saving) |

The edit itself was tested this way. What the bigger radius looks like in the game's photo mode has not been checked, so treat this as practice with the editor. Delete the file from your project afterwards (right-click, **Delete**) if you don't want it in your mod.

## Localization files: the table view

The game's text files, such as `onscreens.json` and the subtitle files, open as a **Table**: one row per text, with its key.

- Type in the filter box to narrow the rows by key or text.
- Click a text to edit it in place. Most entries keep their text in `femaleVariant` and leave `maleVariant` empty.
- Drag the edge of a column header to resize a column. Double-click it to fit the column to its keys.
- **Add row** adds a new entry and scrolls to it. Each row has a delete button.
- **Tree** shows the same file as the normal tree.

To find a text by its words across the whole game, use the [LocKeys view](https://edgemodders.ai/wiki/redcode/game-assets.html#the-lockeys-view). Its **Add to Project Onscreens** copies an entry into your project's file and opens this table on its row.

(Screenshot on the wiki, "The table view": A localization file in the table view: the filter box, rows with their keys and texts, one text being edited, and the Add row button.)

## Atlases: the atlas view

An atlas (`.inkatlas`) is one texture cut into many small pictures, called parts, that the game's interface uses: icons, for example. It opens in the **Atlas** view: the texture with every part drawn over it as a rectangle.

- Click a rectangle, or a part in the list, to select it. The list has its own filter.
- Edit a part's rectangle in pixels. REDcode also updates the coordinates the game itself reads, so the two always agree.
- Add and delete parts.
- An atlas can hold the same pictures at more than one size, each in its own **slot**: usually one texture for 4K screens and one for 1080p. The view shows one slot at a time and lets you switch.
- **Fit**, **1:1**, **Pixels** and **Labels** change how the texture shows. **Tree** is one click away.

(Screenshot on the wiki, "The atlas view": An .inkatlas in the atlas view: the texture with part rectangles drawn over it, one part selected and its pixel rectangle in the side list.)

## Sectors: nodeData and instanced meshes

A streaming sector keeps what it places in two lists. `nodes` holds each thing's definition: its mesh, its appearance, how it's drawn. `nodeData` holds each placement: where it stands and how it streams, with `nodeIdx` naming its node. Following those numbers by hand meant scrolling between the two lists. Now the editor follows them for you.

Select an entry under `nodeData` > `Data`. Below its own fields:

| Section | Shows |
|---|---|
| **nodeIdx 179 → nodes[179]** | The node it names, with its fields. In a project's copy of the sector you can edit them here: the edit lands on that node, and `Ctrl+Z` takes it back |
| **instanceIndex 541 → InnerNodes[541]** | For an instanced mesh: the instance it names, from the node's buffer, with its mesh and where each of its copies stands (position, turn, scale). Read-only |

**Show in tree** on either section goes to that place in the tree.

**Instanced mesh buffers.** Some nodes draw one mesh many times, such as railings or ceiling panels. Their copies live in buffers, `buffer` and `cookedWorldTransformsBuffer`, which used to show only a type name. Now they open as a tree like any list: the inner nodes, the transform ranges and the transforms, 200 at a time with **Load more**. They are read-only for now.

**Try it.** In Game Assets, open `base\worlds\03_night_city\_compiled\default\exterior_-11_11_0_1.streamingsector`, press **Tree**, open `nodeData` > `Data` and select `1441`. Below the entry's fields you see node 179 and its instance 541: `wat_kab_building_f_ceiling_w300_ab.mesh`, with its five copies.

Tested by REDcode's developer.

## The Properties view

The **Properties** view, the last view in the REDcode sidebar, shows the selected node of the editor you're in, in the same grid, and you can edit it there. That lets the editor stay on the table, the atlas or the 3D view while the values sit in the sidebar. An edit in either place shows in the other.

## Why a value looks different after saving

The format has three rules that explain almost every surprise:

| Rule | What you see |
|---|---|
| The game stores numbers to about seven digits | `0.22` reads back as `0.219999999`, which is the same number to the game. A change in the eighth digit or later is lost |
| An `.ent` or `.app` file holds its components twice: in `components`, the list you edit, and in `compiledData`, a ready-to-load copy that is rebuilt from `components` every time the file is saved | REDcode shows `compiledData` read-only, with a note. Edit the component under `components` and `compiledData` follows |
| Values at their default aren't stored | Setting a value back to its default makes the file smaller. Nothing is lost |

## Editing as JSON

Every game file can also be read as **WolvenKit JSON**: the same tree, written out as text. Use it to read a whole file at once, to compare two files, to change many values with find and replace, or to hand the file to an AI assistant. For a single value, the tree is quicker and safer.

- **Open as JSON**, in the right-click menu of the Project view or Game Assets, opens the file as JSON in a normal text tab.
- On a file from your project, change the JSON and press **Save JSON to Project**, the button in the editor's title bar. REDcode asks to confirm, rebuilds the game file in `source/archive` from the JSON, and reads it back into the tab.
- A message then says whether the file reads back exactly as saved. If a value didn't survive, it names it; the rules above are almost always why.
- Plain `Ctrl+S` only saves the JSON text, which REDcode keeps in its own storage folder, outside your project. It isn't part of your mod and never touches the game file, so a half-finished edit can't break anything.

In the JSON, an edit inside `compiledData` vanishes on save, for the reason above. In the CR2W editor that part is read-only, so you can't make that mistake there.

(Screenshot on the wiki, "Save JSON to Project": A project file open as JSON in a text tab, with the Save JSON to Project button in the editor title bar and the confirmation message after saving.)
