<!-- Copied from EDGEweb's docs/wiki/edgemat/find.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/find.html (reviewed 2026-11-13) -->

# Find

"I want to recolor the punk jeans." The hard part has always been finding which files that means. Find does it for you: type the name you see in the game, and it lists the garment with its materials, ready to open.

Find is the third view in EDGEmat's sidebar, below the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html) and [Game Materials](https://edgemodders.ai/wiki/edgemat/game-materials.html). It is often folded at the bottom: click its **FIND** header to open it.

| On this page | |
|---|---|
| [Search](https://edgemodders.ai/wiki/edgemat/find.html#search) | By in-game name, record id or file path |
| [From a garment to its materials](https://edgemodders.ai/wiki/edgemat/find.html#from-a-garment-to-its-materials) | What each row is |
| [What to do with what you found](https://edgemodders.ai/wiki/edgemat/find.html#what-to-do-with-what-you-found) | Recolor, replace, look, try in the game |
| [Two ways into a project](https://edgemodders.ai/wiki/edgemat/find.html#two-ways-into-a-project) | Straight from Find, or through the Desk |
| [Buttons on the rows](https://edgemodders.ai/wiki/edgemat/find.html#buttons-on-the-rows) | |
| [Limits](https://edgemodders.ai/wiki/edgemat/find.html#limits) | What Find doesn't follow yet |

(Screenshot on the wiki, "The Find view": The Find view after searching 'sunny ammo': the Items group with 'Sunny Ammo synthetic high-tops' expanded into Feminine body and Masculine body, one of them open down to its mesh and its two materials, red_yellow_graphic and dec_lights.)

## Search

Press **Find...** (the button in the empty view, or the magnifier that shows when you hover Find's header) and type one of these:

| Type | Example |
|---|---|
| A garment's in-game name, or part of it. The names come from your game, in English | `punk jeans`, `Sunny Ammo`, `samurai jacket` |
| A **record id**, or part of it. A record id is the game's internal name for an item. You use it later to give the item to V | `Items.Pants_03_basic_01`, `CasualShoes_01` |
| Part of a mesh's file path. A **mesh** is a garment's 3D shape, a `.mesh` file | `s1_055`, `t2_078 samurai` |

Find searches by the names you see in the game. The game's files are not named that way, which is why a file search can't do this. (The funnel on Game Materials is different: it only narrows that view's own list.)

| What you should see | |
|---|---|
| The first time | A progress bar along the top of Find for a few seconds, while EDGEmat reads the game's list of clothing, about 2,000 items. Later searches are instant |
| The header line | A count, such as `"sunny ammo": 3 items, 0 meshes` |
| Two groups | **Items** (clothing, found by name or id) and **Meshes** (files, found by path) |

Exact matches come first. Many items exist twice in the game's data, once as the item and once as a craftable copy: the item itself is listed before its copy.

**Clear Find** in the title bar empties the view.

## From a garment to its materials

Behind every garment is a chain of files: its item record, an entity, an appearance file, one or more meshes, and their materials. You don't need to know these, because Find follows the chain for you. The two you will work with are the **mesh** and its **materials**.

Unfold an item and you see:

| Row | What it is |
|---|---|
| The item | Its in-game name, followed in grey by where it is worn (such as Legs) and its record id |
| **Feminine body**, **Masculine body** | One row per body type. The two often wear different meshes: the punk jeans are one mesh on the feminine body (`l1_066`) and another on the masculine (`l1_062`) |
| The mesh | The `.mesh` file that body wears. The grey text names its **look**, such as "look red_yellow_graphic", and how many of its materials are layered |
| The materials | Each material on that mesh. A layered one has a stacked-sheets icon and names its setup file. Others name their base material, such as `metal_base.remt`; EDGEmat can't recolor those yet |

A mesh can have several **looks**: the same shape in different materials or colors. The game's files call a look an appearance. Under an item, Find shows the look that item wears.

A mesh you found by its path, under **Meshes**, unfolds differently: first all its looks, then each look's materials. Each look says who wears it: **worn by 2 items**, or **no item** for a look only NPCs wear. That is handy for comparing a mesh's looks, such as a jacket with and without its bags.

## What to do with what you found

| You want to | Do |
|---|---|
| **Read or recolor its layers** | Click a layered material. Its setup opens in the [setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html), with the right masks and the garment named in the header |
| **Work on it over time, or try several versions** | Hover the mesh row and press **+** (**Add to Desk**). See [The Desk](https://edgemodders.ai/wiki/edgemat/desk.html) |
| **See it in 3D** | Hover the mesh row and press the **eye**. See [View in 3D](https://edgemodders.ai/wiki/edgemat/view-in-3d.html) |
| **Replace a whole material with a new one** | Hover the material and press the **sparkle**. See [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html) |
| **Know which item to wear in the game** | Hover the mesh row: its tooltip lists the items that wear this look. Or right-click the item, the mesh or a material › **Copy REDnode Command**. See [Put the item on V](https://edgemodders.ai/wiki/edgemat/in-the-game.html#2-put-the-item-on-v) |

Step by step, from here to the game: [Tutorial: recolor a jacket](https://edgemodders.ai/wiki/edgemat/tutorial-recolor.html).

## Two ways into a project

A recolor reaches the game through a mod project. There are two ways to get it there. Both save your change as a new setup and copy the garment's mesh into the project, changed to use it, so no helper mod is needed.

| | Straight from Find: **Save to Project** | Through the Desk: **Add to Project** |
|---|---|---|
| How | Click the layered material in Find, change it, press **Save to Project** in the [setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html#save-to-project) | Press **+** on the mesh in Find, change it, press `Ctrl+S`, then **Add to Project** on its [Desk](https://edgemodders.ai/wiki/edgemat/desk.html#add-to-a-project) line |
| When the project changes | At once, when you save | Only when you add it. Until then your edit waits on the Desk, across restarts |
| Which meshes change | Every mesh EDGEmat finds beside the setup that uses it, shown in a list with tick boxes. For most garments that is the mesh of **both body types** | Only the mesh on that Desk line: **one body type** |
| Several versions | No: one save | Yes: variations of the same garment side by side, each with its own 3D view |
| Best for | A plain recolor that should fit any V. Start here | Experiments, and garments the first way can't reach |

Two things to know:

- **To cover both body types through the Desk,** put both meshes on it: press **+** on the mesh under **Feminine body** and again on the one under **Masculine body**. Make the same change on each, then add both to the project. If you only ever play one body, one is enough.
- **Some garments borrow a setup that is stored with another garment.** The Comfy rocker slim-fits use a setup kept with a pair of citizen jeans. Save to Project looks for meshes in the setup's own folder, so its list can name the other garment's meshes and not yours. Compare the names in the list with the mesh name Find shows. If yours is missing, cancel, and use the Desk for that garment.

You can also press **Save to Project** on a setup you opened from the Desk. It then works like the first way, and the Desk line keeps its edit.

## Buttons on the rows

All of these appear when you hover a row, and in its right-click menu.

| Button | On | Does |
|---|---|---|
| **+** (Add to Desk) | Mesh rows | Puts the mesh on the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html), with the look you found it under open, and its layered material in the setup editor |
| **Eye** (View in 3D) | Mesh rows | Opens the mesh in REDcode's 3D viewer with its colors |
| **Copy** (Copy Game Path) | Mesh rows and layered materials | Copies the mesh's path, or the material's setup path, for WolvenKit, REDcode or a mod's notes |
| **Sparkle** (New Material Here...) | Material rows | Opens [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html), set to replace that material on the garment for both body types |
| **Copy REDnode Command** (right-click only) | Items, mesh rows and materials | Copies the `addItem(...)` command that gives V the item, for [REDnode's Console](https://edgemodders.ai/wiki/edgemat/in-the-game.html#2-put-the-item-on-v). If several items wear the look, it asks which |

Hover a row for more: an item's tooltip has its entity and appearance names, and a material's has its setup and mask paths.

## Limits

- Find knows the game's own clothing. Items added by other mods (through ArchiveXL) aren't followed yet. Find their meshes by path instead.
- Your open project isn't searched. To open one of its setups, right-click it in the Explorer or in REDcode's Project view › **Open Material in EDGEmat...**. To put one of its meshes on the Desk, right-click it › **Open in EDGEmat**.
- Find always shows the game's original files, even after you have changed a garment. Your changes are not lost. A [new material](https://edgemodders.ai/wiki/edgemat/new-material.html) started from Find still goes onto your project's copy of the mesh, if the project has one.

## Ask an assistant instead

An assistant connected to EDGEmat can do the same search: ask "which materials do the punk jeans use, for each body?" It uses the tool `mat_find`. See [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html).
