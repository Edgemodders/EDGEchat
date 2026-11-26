<!-- Copied from EDGEweb's docs/wiki/edgemat/setup-editor.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/setup-editor.html (reviewed 2026-11-18) -->

# The setup editor

A garment's colors live in its **setup**, an `.mlsetup` file: a stack of up to 20 layers. The setup editor opens one, lays it out in plain words, lets you change any layer, and saves the result into your mod project. The game's own files are never changed.

Each layer has:

| Part | In plain words |
|---|---|
| A **surface** | The kind of stuff: a leather, a denim, a chrome |
| A **color** | One of the colors that surface offers |
| **Finishes** | How rough or glossy it is, how metallic, and how strong its bumps are |
| **Tiling** | How many times the surface's pattern repeats across the garment |
| A **microblend** | A small detail pattern on top: wear, dirt, scratches or a print. Also called a detail texture |

| On this page | |
|---|---|
| [Opening a setup](https://edgemodders.ai/wiki/edgemat/setup-editor.html#opening-a-setup) | From Find, the Desk, the game, a file, another mod |
| [The header](https://edgemodders.ai/wiki/edgemat/setup-editor.html#the-header) | What the lines under the title say |
| [The color map](https://edgemodders.ai/wiki/edgemat/setup-editor.html#the-color-map) | Where each layer goes, and [zooming in](https://edgemodders.ai/wiki/edgemat/setup-editor.html#zoom-in-on-the-map) |
| [The layers](https://edgemodders.ai/wiki/edgemat/setup-editor.html#the-layers) | Each layer's rows, and layers that don't show |
| [Changing a layer](https://edgemodders.ai/wiki/edgemat/setup-editor.html#changing-a-layer) | Surface, color, finish, with undo |
| [Save to Project](https://edgemodders.ai/wiki/edgemat/setup-editor.html#save-to-project) | The three choices, and what `Ctrl+S` does |
| [The mask set](https://edgemodders.ai/wiki/edgemat/setup-editor.html#the-mask-set) | When the map looks scrambled |
| [Raw values](https://edgemodders.ai/wiki/edgemat/setup-editor.html#raw-values) | The game's own names and numbers |

(Screenshot on the wiki, "The setup editor": The setup editor on the Sunny Ammo sneakers (ml_s1_055_pma_shoe__red_yellow_graphic): the header with '19 of 20 layers show', the color map on the left, and the layer list on the right with layer 7, the sole, selected and its details open.)

## Opening a setup

Most of the time: find the garment in [Find](https://edgemodders.ai/wiki/edgemat/find.html) and click its layered material, the one with a stacked-sheets icon. The other ways are for files you already have.

| From | How |
|---|---|
| A garment's name | [Find](https://edgemodders.ai/wiki/edgemat/find.html): type the name, unfold the item, and click a layered material under one of its meshes. The setup opens with the garment's own **mask set**, the images that say where each layer goes (see [The mask set](https://edgemodders.ai/wiki/edgemat/setup-editor.html#the-mask-set)) |
| The Desk | Click a layered material under a mesh on the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html). `Ctrl+S` then saves on the Desk, not in a project |
| The game, by file name | **Open Setup...** (the icon of a page with an arrow, in the Game Materials title bar) › **From the game**. Type words from the file name, such as `s1_055 red yellow`, and pick one |
| A file on disk | **Open Setup...** › **A file on disk**: an `.mlsetup`, or WolvenKit's text form of one, `.mlsetup.json` |
| Another mod | **Open Setup...** › **A file on disk**, pick the mod's `.archive`, then pick a setup inside it. The mod's own mask sets come along. The mod is only read, never changed |
| VS Code's Explorer or REDcode | Click an `.mlsetup` in the Explorer: EDGEmat's setup editor is VS Code's default editor for them. If another editor has it open, right-click the file or its tab › **Open Material in EDGEmat...** (also in REDcode's Project view). Or **Reopen Editor With...** › **EDGEmat Setup Editor** |

Find and the Desk are the two starting points for a recolor. Which to use: [Two ways into a project](https://edgemodders.ai/wiki/edgemat/find.html#two-ways-into-a-project).

## The header

| Line | Says |
|---|---|
| The title | The file's name, and where it came from: "game file", "project file", "from the mod ...", "on the Desk", or the garment you found it through |
| The count | How many layers show, such as "19 of 20 layers show", and the setup's **ratio**. The ratio changes how microblends are laid onto the garment. It is 1 in almost every setup, and EDGEmat leaves it alone |
| The edit line | "Select a layer to change it.", or "Edited, not saved yet." Then what `Ctrl+S` will do for this setup |
| **In the game** | Only for a setup opened from Find or the Desk. Folded: click its ▸. It lists the in-game items that wear this look, and for each one the command that gives it to V, with a **Copy** button. See [Put the item on V](https://edgemodders.ai/wiki/edgemat/in-the-game.html#2-put-the-item-on-v) |
| Top right | **Hide unused slots**, **Raw values** and the **Save to Project** button |

## The color map

On the left is the garment's texture, unwrapped flat like a sewing pattern, with each layer painted in its own color where its mask puts it. It shows *where* each layer goes. It isn't the in-game look, which also has shine, bumps and lighting. For the garment in 3D, see [View in 3D](https://edgemodders.ai/wiki/edgemat/view-in-3d.html).

- **Click a spot** on the map. The layer that shows there is selected and scrolled into view in the list.
- The switch under the map, **All layers** / **Selected layer**, shows the whole map, or dims it and lights up the selected layer's area, so you can see exactly which parts one layer covers.

### Zoom in on the map

To look at small details, such as stitching or a thin trim, zoom in on the map:

| To | Do |
|---|---|
| Zoom in or out | Scroll over the map. It zooms on the spot under the pointer. Or hover the map and use **+** and **−** at its top right |
| Move around | Drag the map. It stops at the map's edges |
| See the whole map again | **Fit**, at its top right |

The label beside the buttons says the zoom, from **1×** up to 16×. From 4× the map's pixels show as sharp squares: the map is 512 pixels across. A click without a drag still selects the layer there, and the zoom stays when you switch between **All layers** and **Selected layer**.

Some layers show only as specks, such as lint or dirt. The map draws them as specks, as the game does, and their **share** (how much of the garment they cover) is counted the same way.

## The layers

On the right is every layer from 0 (the base) upwards. Each line has the layer's number, a color swatch, the surface's thumbnail, "surface · color", its finish in a few words, and its **share**: how much of the garment's texture it covers, with a bar.

Click a layer and it opens. There is one view for reading and changing: every row shows the current value, and most have a control.

| Row | Shows | You can change |
|---|---|---|
| Surface | Its name and category, with **Open** for its [surface page](https://edgemodders.ai/wiki/edgemat/surfaces.html) | **Change...**: another surface |
| Color | The plain name and the swatch | Any color the surface offers, from a grid of swatches with a filter box |
| Roughness, Roughness contrast | How matte or glossy, such as "mostly rough" | A drop-down of the surface's choices |
| Metal, Metal contrast | Such as "not metal" | A drop-down |
| Bumps | Such as "faint bumps" | A drop-down |
| Tiling | How many times the surface repeats across the garment, such as ×10.1 | A number box |
| Offset | Where the pattern starts, across (U) and down (V) | Two number boxes |
| Opacity | "full", or a percentage | A number box. 0 hides the layer |
| Microblend | Its detail pattern, with **Open** for its page | **Change...**, and boxes for its tiling, contrast and bump strength |
| Shows on | The layer's share, such as "11% of the texture" | |

### Layers that don't show, and warnings

A layer can be in the file and still not show. EDGEmat dims it and says why:

| You see | Means |
|---|---|
| "not shown: unused slot" | An empty layer. **Hide unused slots** (top right, ticked at first) leaves these out of the list. The header still counts them |
| "not shown: opacity 0" | The layer is there but fully transparent |
| "not shown: no surface" | The layer names no surface |
| "not shown: all presets set to None" | The layer's color and finish choices (the game calls them presets) are all None, and the game hides such a layer |
| "not shown: no mask" | The mask set has fewer masks than the setup has layers. Mask 5 belongs to layer 5, so a layer past the last mask has nowhere to show. Often a sign of the wrong mask set ([below](https://edgemodders.ai/wiki/edgemat/setup-editor.html#the-mask-set)) |
| "not shown: covered by the layers above, or its mask is empty" | Nothing of it is left to see |
| ⚠ a color the surface lacks "shows white" | The layer names a color its surface doesn't have, and the game draws such a color white. A common mistake in hand-edited setups. Fix it by picking one of the surface's colors |

## Changing a layer

Click a layer, then use the controls in its rows. Each change shows at once in the list and on the map. A dot appears on the editor's tab, VS Code's sign for unsaved changes, and the header says "Edited, not saved yet."

| To change | Do |
|---|---|
| The color | Click a swatch in the **Color** row. Type in the filter box, such as `blue` or `dark red`, to narrow the grid. A layer can only take its surface's colors: see [Colors come from a list](https://edgemodders.ai/wiki/edgemat/index.html#colors-come-from-a-list) |
| The surface | **Change...** in the **Surface** row opens a searchable list of every surface. Type `leather`, `denim` or `chrome`. A new surface resets the layer's color and finish to that surface's defaults, and a line under the header says so |
| The finish | Pick from the Roughness, Metal and Bumps drop-downs. They hold the surface's own choices, in plain words |
| The pattern's size | Type a number in **Tiling** and press Enter. A higher number makes the pattern smaller |
| The detail pattern | **Change...** in the **Microblend** row. `default` is the plain one |
| Hide the layer | Set **Opacity** to 0 |

**Undo and redo.** Undo with `Ctrl+Z`, redo with `Ctrl+Y`. If nothing happens, click an empty part of the page first: while the cursor is in a box, the keys undo typing in that box.

(Screenshot on the wiki, "Editing a layer": The setup editor on the Rocker's Heart bomber with its biggest layer selected: the color swatches filtered by 'blue', a blue swatch outlined, the layer blue on the map, and the unsaved dot on the tab.)

### Try it: one layer, blue

1. In Find, search `rocker's heart`, unfold the bomber and click its material **black_red_glossy**.
2. Click the layer with the longest share bar.
3. Type `blue` in the Color row's filter box and click a strong blue swatch.
4. Click an empty part of the page, then press `Ctrl+Z`, then `Ctrl+Y`.

| What you should see | |
|---|---|
| After step 3 | The layer blue in the list and on the map, a dot on the tab, and "Edited, not saved yet." |
| After step 4 | The old color back, then blue again |

Close the tab and choose **Don't Save** to leave it there, or carry on into the game with [Tutorial: recolor a jacket](https://edgemodders.ai/wiki/edgemat/tutorial-recolor.html).

## Save to Project

**Save to Project** (the button at the top right, or the save icon in the editor's title bar) saves the setup into a mod project: REDcode's open project, or one you pick.

Choose **As a new setup** unless you know you need another. EDGEmat saves your recolored setup under a new name, and copies the garment's mesh files into your project, changed to use it. That is all the game needs: no helper mod. Other garments that share the original setup are not affected.

1. Press **Save to Project** and choose **As a new setup** (recommended).
2. A box shows the new file's path, ending in your project's name. Press Enter to accept it.
3. EDGEmat lists the meshes it found that use this setup, with tick boxes. For most garments that is one per body type, all ticked. Leave them ticked and press Enter.

| What you should see | |
|---|---|
| A message | "Saved into ... : the setup and 2 meshes pointed at it", with **Pack and Play** and **Open the Saved Setup** |
| The tab | No unsaved dot, and a line under the header saying where the setup went |

Check the list in step 3 against the mesh name [Find](https://edgemodders.ai/wiki/edgemat/find.html) showed. If your garment's mesh isn't in it, the garment borrows a setup stored with another garment: cancel and use the Desk instead ([Two ways into a project](https://edgemodders.ai/wiki/edgemat/find.html#two-ways-into-a-project)). If your project already holds meshes that use the setup, only those are ticked.

The three choices in full:

| Choice | What it writes | In the game |
|---|---|---|
| **As a new setup** (recommended) | The setup beside the original under a new name, and a copy of each ticked mesh, changed to use it | Shows with no helper mod. Only the meshes you ticked change |
| **In place of the game's setup** | The setup at the game's own path. No mesh is copied | Changes every item that uses that setup. Needs the Material Texture Override mod (on Nexus Mods) installed in the game: without it the game ignores a replaced `.mlsetup` |
| **At a game path you choose...** | The setup only, at your path | For experienced modders. Nothing uses it until you edit a mesh's material to name that path |

(Screenshot on the wiki, "Save to Project": The Save to Project list for the project my_materials: As a new setup (recommended), In place of the game's setup, At a game path you choose.)

### What Ctrl+S does

| The setup was opened from | `Ctrl+S` |
|---|---|
| The game (through Find or Open Setup), another mod, or a file outside any project | Opens **Save to Project**, as above |
| The Desk | Saves on its Desk line, with no questions. **Save to Project** still works from there |
| Your project | Saves the file itself, with no questions |

Once saved, the project's copy is yours: open it, change it, and `Ctrl+S` saves straight into it. If you later open the game's original again and save it as a new setup into the same project, EDGEmat overwrites the copy it made before. It does not make a second one.

### Pack and Play

The **Pack and Play** button in the message is REDcode's **Pack and Play**, on the project. It appears when REDcode has that project open. (Before EDGEmat 0.3.3 it was called Pack and Try.) With the game closed you can also use **Pack and Install** in REDcode's Project view.

| The game is | Pack and Play |
|---|---|
| Closed, or running without REDnode | Packs the project and installs it. Start, or restart, the game to see it |
| Running, with REDnode set up for swaps | Packs the project and swaps it into the running game |

Either way is fine. See [Your mod in the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html).

## The mask set

A **mask** is a black-and-white image that says where one layer shows. A garment has one per layer; together they are its **mask set**. A setup doesn't say which mask set it uses: the garment's mesh does. So:

| The setup was opened | The mask set is |
|---|---|
| Through Find or the Desk | The one the mesh names: "(named by the mesh's material)". Always right |
| Any other way | EDGEmat's best guess, by name, beside the setup: "(found beside the setup)". Usually right. If the map looks scrambled, the guess was wrong |

**Change** on the "Mask set" line under the map lists the other candidates, with a search of the game and a file on disk. Picking one redraws the map.

## Raw values

Tick **Raw values** (top right) to see the game's names and numbers in blue beside the plain words: paths, preset names and their values, RGB, tiling, offsets. The header adds the setup's normal-map setting and its WolvenKit JSON version. This is for people who also use WolvenKit, or who are asking for help on Discord.

## Ask an assistant instead

An assistant connected to EDGEmat can read and change setups too. Ask "describe this jacket's layers", or "make the punk jeans dark green on both bodies". The tools are `mat_describe` and `mat_edit`. See [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html).
