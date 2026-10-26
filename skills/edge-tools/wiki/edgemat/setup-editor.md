<!-- Copied from EDGEweb's docs/wiki/edgemat/setup-editor.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/setup-editor.html (reviewed 2026-10-24) -->

# The setup editor

A garment's look lives in its **setup**, an `.mlsetup` file: a stack of up to 20 layers, each with a surface, a color, finishes, tiling and a detail texture. The setup editor opens one, lays it out in plain words, lets you change any layer, and saves the result into your mod project. Recolors made this way were tested in the game on 2026-10-20.

(Screenshot on the wiki, "The setup editor": The setup editor on the Sunny Ammo sneakers (ml_s1_055_pma_shoe__red_yellow_graphic): the header with '19 of 20 layers show', the color map on the left, and the layer list on the right with layer 7, the sole, selected and its details open.)

## Opening a setup

| From | How |
|---|---|
| A garment's name | [Find](https://edgemodders.ai/wiki/edgemat/find.html): type the name, open a body and a mesh, click a layered material. This is the best way: the setup opens with the exact mask set the garment uses |
| The game, by file name | **Open Setup...** (the go-to-file icon in the Library's title bar) › **From the game**, then type words from the file name, such as `s1_055 red yellow`, and pick one |
| A file on disk | **Open Setup...** › **A file on disk**: a binary `.mlsetup`, or WolvenKit's JSON form, `.mlsetup.json`. A file in a WolvenKit project works too |
| Another mod | **Open Setup...** › **A file on disk**, pick the mod's `.archive`, then pick a setup inside it. The mod's own mask sets come along. The mod is only read, never changed |
| REDcode or the Explorer | Open any `.mlsetup`. If REDcode's editor opens instead, right-click the editor tab (or press `Ctrl+Shift+P`) › **Reopen Editor With...** › **EDGEmat Setup Editor**. VS Code may ask which editor to use the first time. The next version (built, not released yet) adds **Open Material in EDGEmat...** to the right-click menu of a setup in the Explorer, on its tab and in REDcode's Project view |

The header names the file and where it came from: "Setup · game file", "project file", "from the mod ...", or the garment you found it through. It also counts the layers that show and the setup's **ratio** (how the detail textures map onto the garment).

## The color map

On the left: the garment's texture, unwrapped flat, with each layer painted in its own color where its mask puts it. It shows *where* each layer goes; it isn't the in-game look, which also has shine, bumps and lighting. (For the garment in 3D, see [View in 3D](https://edgemodders.ai/wiki/edgemat/view-in-3d.html).)

- **Click a spot** on the map: the layer that shows there is selected, and scrolled into view in the list.
- The switch under the map, **All layers** / **Selected layer**, either shows the whole map or dims it and lights up the selected layer's area, so you can see exactly which parts one layer covers.

## The layers

On the right, every layer from 0 (the base) upwards, each with its index, a color swatch, the surface's thumbnail, "surface · color", its finish in a few words, and its **share**: how much of the texture it covers, with a bar.

Click a layer for its details:

| Row | Shows |
|---|---|
| Surface | Its name, with **Open** for its [surface page](https://edgemodders.ai/wiki/edgemat/surfaces.html) |
| Color | The plain name and the swatch |
| Roughness, Metal, Bumps | In plain words, such as "mostly rough", "not metal", "faint bumps" |
| Tiling | How many times the surface repeats across the garment, such as ×10.1 |
| Opacity | "full", or a percentage |
| Microblend | Its detail texture, with **Open** for its page, its tiling and contrast |
| Share | "Shows on 11% of the texture" |

### Layers that don't show, and warnings

A layer can be in the file and still not show. EDGEmat dims it and says why:

| You see | Means |
|---|---|
| "not shown: unused slot" | An empty layer. Tick **Hide unused slots** (top right) to leave these out of the list; the header still counts them |
| "not shown: opacity 0" | The layer is there but fully transparent |
| "not shown: no surface" | The layer names no surface |
| "not shown: all presets set to None" | The game hides a layer whose presets are all None (found in EDGEmat's in-game tests) |
| "not shown: no mask" | The mask set has fewer masks than the setup has layers. Mask 5 belongs to layer 5, so a layer past the last mask has nowhere to show. Often a sign of the wrong mask set ([below](https://edgemodders.ai/wiki/edgemat/setup-editor.html#the-mask-set)) |
| "not shown: covered by the layers above, or its mask is empty" | Nothing of it is left to see |
| ⚠ a color the surface lacks "shows white" | The layer names a color its surface doesn't have, and the game draws such a color white. A common mistake in hand-edited setups |

## Changing a layer

Click a layer: its details turn into controls. Each change shows at once in the list and on the map, and the tab shows the unsaved dot.

| Row | Control |
|---|---|
| Surface | **Change...** opens a searchable list of every surface. A new surface resets the layer's color and finish to that surface's defaults, and a line under the header says so |
| Color | The surface's own colors as swatches, the current one outlined. Type in the filter box, such as `blue` or `dark red`, to narrow them. A layer can only take its surface's colors (see [Surface pages](https://edgemodders.ai/wiki/edgemat/surfaces.html)); for a color the surface lacks, try another surface |
| Roughness, Roughness contrast, Metal, Metal contrast, Bumps | Drop-downs of the surface's presets, in plain words. With **Raw values** ticked they also show the game's names |
| Tiling, Offset U and V, Opacity | Number boxes. Opacity 0 hides the layer |
| Microblend | **Change...** for another detail texture, and boxes for its tiling, contrast and bump strength |

**Undo and redo:** `Ctrl+Z` and `Ctrl+Y`, with the focus on the page (click an empty part of it first, not a box).

A layer flagged "shows white" is fixed by picking one of its surface's colors.

(Screenshot on the wiki, "Editing a layer": The setup editor on the Rocker's Heart bomber with its biggest layer selected: the color swatches filtered by 'blue', a blue swatch outlined, the layer blue on the map, and the unsaved dot on the tab.)

## Save to Project

The game's files are never changed. **Save to Project** (the button top right, the icon in the editor's title bar, or `Ctrl+S` on a game file) saves the setup into a WolvenKit project: REDcode's open project, or one you pick. It offers three ways:

| Choice | What it writes | In the game |
|---|---|---|
| **As a new setup** (recommended) | The setup beside the original under a new name (ending in your project's name), and a copy of every mesh that uses it, pointed at the new setup. EDGEmat lists the meshes it found, all ticked, before saving | Shows with no other mod. Only the meshes you tick change, even where other items share the game's setup |
| **In place of the game's setup** | The setup at the game's own path | Needs the Material Texture Override mod, which lets a mod replace a game `.mlsetup`. Changes every item that uses the setup |
| **At a game path you choose...** | The setup at your path | Up to you to point something at it |

When it's done: "Saved into ... : the setup and 2 meshes pointed at it", with **Pack and Try** and **Open the Saved Setup**. Then see [Your mod in the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html).

Once saved, the project's copy is yours: open it, change it, and `Ctrl+S` saves straight into it, with no questions. Saving the game's setup again as a new setup updates the same files.

Find the garment through [Find](https://edgemodders.ai/wiki/edgemat/find.html) first if you can: the setup then opens with the right mask set, and Save to Project finds its meshes for both bodies.

(Screenshot on the wiki, "Save to Project": The Save to Project list for the project MyMaterials: As a new setup (recommended), In place of the game's setup, At a game path you choose.)

## The mask set

A setup doesn't say which masks it uses: the garment's mesh does. So:

- Opened through **Find**, the setup uses the mask set the mesh names: "(named by the mesh's material)". Always right.
- Opened any other way, EDGEmat picks the best match by name beside the setup, on disk, in the mod, or in the game: "(found beside the setup)". Usually right; if the map looks scrambled, it isn't.
- **Change** on the "Mask set" line under the map lists the other candidates, with a search and a file on disk. Picking one redraws the map.

## Raw values

Tick **Raw values** (top right) to see the game's names and numbers in blue beside the plain words: paths, preset names and their values, RGB, tiling, offsets. The header adds the setup's normal setting and its WolvenKit JSON version. Handy alongside WolvenKit, or when asking for help.

## For assistants

The same view, as data, is the MCP tool `mat_describe`: "describe this jacket's layers". Editing and saving is `mat_edit`: "make the punk jeans dark green on both bodies". See [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html).
