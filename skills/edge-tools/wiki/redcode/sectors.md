<!-- Copied from EDGEweb's docs/wiki/redcode/sectors.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/sectors.html (reviewed 2026-11-25) -->

# The sector view

The game's world is cut into **streaming [sectors](https://edgemodders.ai/wiki/glossary.html#sector)** (`.streamingsector` files), each a list of what stands in one piece of the map: buildings, props, decals, lights. A sector from the game or your project opens on a **3D view**, with every mesh drawn where the sector places it. **Tree** shows the file's data in the [CR2W editor](https://edgemodders.ai/wiki/redcode/editing.html#sectors-nodedata-and-instanced-meshes); **3D** goes back, as you left it.

The view draws the sector; it does not move things. To change values, use the [Properties tab](https://edgemodders.ai/wiki/redcode/sectors.html#changing-many-at-once-the-properties-tab), a [script](https://edgemodders.ai/wiki/redcode/sectors.html#sector-scripts) or the tree, on your project's copy of the sector.

| On this page | |
|---|---|
| [Moving round](https://edgemodders.ai/wiki/redcode/sectors.html#moving-round) | The mouse, the keys and the camera row |
| [Picking a thing and its materials](https://edgemodders.ai/wiki/redcode/sectors.html#picking-a-thing-and-its-materials) | What a thing is, and how it really looks |
| [More in the toolbar](https://edgemodders.ai/wiki/redcode/sectors.html#more-in-the-toolbar) | Markers, By material, Streamed, Coarser levels |
| [Selecting many things](https://edgemodders.ai/wiki/redcode/sectors.html#selecting-many-things) | Ctrl+click, a box, a Volume, the list, Only, Back and Forward |
| [Search](https://edgemodders.ai/wiki/redcode/sectors.html#search) | Select what a word finds |
| [Overlaps: the sectors that reach in](https://edgemodders.ai/wiki/redcode/sectors.html#overlaps-the-sectors-that-reach-in) | Other sectors in the same place, as layers |
| [Changing many at once: the Properties tab](https://edgemodders.ai/wiki/redcode/sectors.html#changing-many-at-once-the-properties-tab) | What the selection shares, set on all of it |
| [Sector scripts](https://edgemodders.ai/wiki/redcode/sectors.html#sector-scripts) | Small JavaScript files that find, select or change nodes |

**Try it.** Search game files for `exterior_-22_7_0_0.streamingsector` and open it: about 105 meshes drawn nearly 9,000 times, and 202 markers. Click the cardboard and bottles on the street, then turn on **Materials**: the cardboard is drawn with its own texture. Then Shift+drag a box over part of the street, and the list fills.

(Screenshot on the wiki, "A streaming sector in 3D": A streaming sector open on the 3D view: buildings and street seen from above, a few things selected and one outlined in the accent colour, the toolbar with Markers, By material, Materials, Streamed, Coarser levels, Volume, Scripts and Light, the camera row under it, the Selections, Overlaps and Properties tabs on the right, and the line below naming the picked mesh.)

## Moving round

| To | Do |
|---|---|
| Orbit | Drag |
| Look round and fly | Hold the right button: move the mouse to look round where the camera stands, W, A, S and D to fly, Q and E to go down and up. The wheel changes the fly speed while you hold it. As in [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) |
| Pan | Drag with the middle button, or with the left and Ctrl held |
| Zoom | The wheel. It goes towards the thing under the cursor, not the middle of the view |
| Fly close to a thing | Double-click it |
| Frame the picked thing | `F`, or **Frame** |

Shift makes any move faster, and Ctrl slower. Once you have clicked in the view, W, A, S, D, Q and E fly without the right button too.

The **camera row** under the toolbar does the same with buttons, for a touchpad, or when you'd rather click. **Zoom**, **Move** (forward, back, left and right), **Pan**, **Height** and **Orbit** move the camera while a button is held. **Speed** sets the fly speed (shown as ×1.0). **Top** looks down from above, on the picked thing or the sector, and **Reset** goes back to the view the sector opened with. **?** shows a line naming the mouse and keys.

## Picking a thing and its materials

Click a thing to pick it. It is outlined, and the Properties view shows its entry. The line under the view names its id, its mesh's file name, the appearance it uses and its materials; hover that line for the mesh's path and the material of each part. Beside it:

| Button | Does |
|---|---|
| **Show in Tree** | Goes to the thing's entry in the file |
| **Open Mesh** | Opens its mesh in the [3D mesh view](https://edgemodders.ai/wiki/redcode/viewers.html#meshes-in-3d) |
| **Open in EDGEmat** | Puts the mesh on [EDGEmat](https://edgemodders.ai/wiki/edgemat/)'s Desk, at the appearance this thing uses |
| **Add Mesh to Project** | Copies the mesh into your project. It asks first, because a change to the mesh then shows everywhere the game uses it |

**Materials**, in the toolbar, draws the picked thing with its own materials, textures included. With EDGEmat installed, EDGEmat renders them; without it, REDcode does, with EDGEmat's renderer. A note says which. Like the mesh view's colours, it is approximate. The world's **multilayered** materials, on most buildings and the pavement, still come out a flat grey.

On a project's copy of a sector, a thing whose mesh is in the project too is drawn with the project's own materials.

## More in the toolbar

- **Markers** shows the things that aren't meshes, such as entities, decals and lights, as markers.
- **By material** colours each thing by the materials its appearance names, instead of by mesh. Things that share a material share a colour: the tall buildings of a plaza are often one. The first time, a line counts the meshes as their material names are read.
- **Streamed** shows only what the game would draw from where the camera is. Fly closer and more appears.
- **Coarser levels** adds the sectors that hold what is seen from far away over this one. There can be hundreds, so a bar over the view counts them as they are read, then as their meshes export.
- **Light** and **Fixed light** work as in the [mesh view](https://edgemodders.ai/wiki/redcode/viewers.html#the-light).
- The first time, each mesh is exported, which takes a few seconds for a busy sector (Coarser levels can take minutes). After that a sector opens at once.

## Selecting many things

The side panel has three tabs: **Selections**, **Overlaps** and **Properties**. **Selections** lists what is selected. Empty, it says how to select.

| To | Do |
|---|---|
| Add a thing, or take it out | Ctrl+click it. The last one added is the current one, in the accent colour; the line below and the Properties view follow it |
| Select what is in a box on the screen | Shift+drag. Everything whose middle is in the box is selected. Hold Ctrl as well to add to what you had |
| Select what is in a box in the world | **Volume**: drag its base on the ground, move the mouse up for its height, and click. Everything inside is selected |
| Take long things too | **Touching**: roads, walls and other long things whose box reaches into yours count as well |
| Select what a word finds | Type it in the [search box](https://edgemodders.ai/wiki/redcode/sectors.html#search) at the bottom |
| Select everything shown, or nothing | `Ctrl+A`, or `Esc`, after a click in the view |

A volume keeps a handle on each face, to resize it, and a round one above, to move it along the ground. The selection follows. A click inside the volume still picks the thing there. `Esc` takes away the selection, the volume and Isolate; pressed before you draw, it turns Volume off.

In the list, click a row to fly to it and make it the current one. Hover a row for its buttons, icons named in their tooltips:

| Row button | Does |
|---|---|
| **Fly To** | Flies the camera to it |
| **Show in Tree** | Goes to its entry in the file |
| **Only** | Keeps just the selected things that draw this row's mesh |
| **Open Mesh**, **Open in EDGEmat**, **Add Mesh to Project** | As on the [picked line](https://edgemodders.ai/wiki/redcode/sectors.html#picking-a-thing-and-its-materials) |
| **Take Out** | Takes it out of the selection |

The buttons above the list act on the whole selection. They are icons too:

| Button | Does |
|---|---|
| **Back**, **Forward** | Go to the selection before or after, as a browser does with pages. Also after Clear or a script. A fast change, such as dragging a volume, is one step. The arrows grey out at either end |
| **Frame All** | Fits the view to everything selected |
| **Isolate** | Makes everything else see-through and ghostly. It follows the selection while it is on, and ends when nothing is selected. Press it again to see everything |
| **Add Meshes to Project** | Copies each selected thing's mesh into your project, each mesh once. One question names how many first |
| **Copy** | Copies one line per thing, its id and its mesh, to paste anywhere |
| **Clear** | Empties the selection. **Back** brings it back |

**Try it: every copy of one mesh.** Select one soda can, then press **Scripts** and pick **Every copy of these meshes**: every can in the sector is selected. Press **Isolate** to see only them. **Back** returns to the one can. With several things selected, **Only** on one row first narrows the selection to that mesh.

(Screenshot on the wiki, "A volume in a sector": A see-through Volume box drawn on a street in a sector's 3D view, with a handle on each face and the round one above, the things inside it selected and listed on the right, and Isolate on so everything else is ghostly.)

## Search

The search box at the bottom of a sector's 3D view selects what it finds: every thing whose node data or node holds the words, such as a mesh's name or a class. `soda` selects the soda cans. The count shows beside the box. Clearing the box clears the count; **Back** returns to the selection before.

On a mesh's or an animation's 3D view, the same box finds values in the file, and shows the matches in **Tree**.

## Overlaps: the sectors that reach in

One sector alone doesn't show everything the player sees in a place. The cells next to it, the coarser sectors drawn from far away, and quest sectors all add things there. **Overlaps**, the side panel's second tab, lists the sectors whose things reach into the one you opened, and lets you draw each of them as a **layer**.

1. Click **Overlaps**. A spinner counts the sectors checked ("Checking 120 of 3,107…"), and rows appear as they are found.
2. The rows come in groups, each with its colour, such as **Neighbours** (the cells beside this one), **Other levels** (the coarser sectors over it) and **Global** (quest and always-loaded sectors, collapsed at first, since many load only while their quest runs).
3. Hover a row for its level, how many of its things reach in, and its variants.
4. Set a layer to **Ghost** to draw its things see-through in its group's colour, or **Shown** to draw them like the opened sector's. **Off** hides it again. A spinner shows on the row while its meshes load.

| You can | How |
|---|---|
| Turn a whole group off | **Off** on the group's heading |
| Turn every layer off | The **×** at the top of the tab |
| Pick a layer's thing | Click it, ghosted or shown. The line under the view names its sector and says "(a layer's)" |
| Select a layer's things | Ctrl+click, a box or a volume, as in the opened sector. In **Selections** their rows start with their sector's name, such as `exterior_-22_6_0_0#455.2` |
| Open a layer's sector | The open icon on its row: the sector opens in its own tab |

- The first look at a place takes about a minute, because REDcode reads every sector that might reach in. It keeps what it found, so the next time takes about a second.
- Every layer starts **Off** when you open a sector. Layers are not kept when the tab closes.
- A layer is drawn from your project's copy of its sector when the project has one.
- For now, the [Properties tab](https://edgemodders.ai/wiki/redcode/sectors.html#changing-many-at-once-the-properties-tab) and scripts change only the opened sector's own things. To change a layer's thing, open its sector.

**Try it.** Open `exterior_-22_7_0_0.streamingsector` and click **Overlaps**. After about a minute: "16 sectors reach in". Set `exterior_-22_6_0_0` to **Ghost**: its things appear see-through around the opened sector.

Tested by REDcode's developer and by script. Selecting and changing across layers, links between a thing's entries in the picked panel, and opening the sector where V stands in the game are planned.

(Screenshot on the wiki, "The Overlaps tab": A sector's 3D view with the Overlaps tab open: rows grouped as Neighbours, Other levels and Global, each row with its Off, Ghost and Shown switch and an open icon, one row set to Ghost and its things drawn see-through in light blue around the opened sector.)

## Changing many at once: the Properties tab

**Properties**, the side panel's third tab, shows what every selected thing shares, so you can change a value on all of them in one go. Select the things first, in any way above.

The tab has two parts:

| Part | What it holds |
|---|---|
| **Node data** | How each placement streams: its streaming distance, priority, flags and the like |
| **Node** | What is drawn and how: its appearance, whether it casts shadows, whether it shows in the game, and the like |

Several placements can share one node, such as the copies of an instanced mesh: that node is changed once. With things of several kinds selected, the heading says how many kinds, and only what every kind has shows.

- A value shows when every selected thing has it. Where they differ it says **mixed**.
- Only plain values show: numbers, text, names, yes or no, and choices from a list. The numbers that tie a sector together, such as `nodeIdx` and `instanceIndex`, are left out on purpose: one value for all of them would break it.
- Change a value (type it and press Enter, tick a box, or pick from a list). A question says how many values change. **Apply** sets them as one edit, which one `Ctrl+Z` takes back. **Show List** writes each change to the REDcode output first, then asks again.
- On the game's copy of a sector, the question offers **Add to Project and Apply** (or **Open the Project's Copy and Apply** when the project has one): REDcode adds the sector to your project, opens the copy with the same things selected, and makes the changes there, unsaved. The game's files never change.

**Try it.** In your project's copy of `exterior_-22_7_0_0`, type `soda` in the search box to select the soda cans, open **Properties**, set `streamingPriority` to `5` and press Enter. The question names the changes; **Apply**. One `Ctrl+Z` takes them all back.

Tested by REDcode's developer and by script.

(Screenshot on the wiki, "The Properties tab": A sector's 3D view with soda cans selected and the Properties tab open: the heading naming how many node data entries and nodes are selected, the Node data and Node sections with their values, one reading mixed, and the question after a change: how many values change, with Apply and Show List.)

## Sector scripts

A sector has thousands of nodes. Finding the few with a wrong value by hand is hopeless; a short script does it in a moment. A **sector script** is a small JavaScript file that visits every node, or the selected ones, and selects them, changes a value, or hands them to an assistant.

**Scripts**, in the sector view's toolbar, opens VS Code's own menu of scripts, grouped by where they live:

| Group | Where the files are |
|---|---|
| The project's scripts | `.redcode\scripts` in the project folder. Never packed into the mod |
| Your scripts | `%APPDATA%\Edgemodders\redcode\scripts`, offered in every project |
| Examples | Shipped with REDcode, read-only: **Short streaming distance**, **Raise short streaming distances** and **Every copy of these meshes** |

- **Enter** runs a script on every node. The buttons on its row are **Run on Selection**, **Debug**, **Edit** and **Remove**. An example has **View** and **Copy to My Scripts** instead.
- **New Script…** asks for a name and where it goes (this project or your scripts), and opens a new file from a template. **Open Scripts Folder** opens the folder.
- While a script runs, the button shows a spinner, and **Stop** ends it at once. VS Code stays responsive: a script runs in its own process.
- When it ends, the line under the view says what it did, such as "Short streaming distance: 68 selected, 0 changed, 1,233 nodes", and how the selection changed, such as "selection 20 → 72". Its log lines go to the REDcode output.

**Changes** are shown before they're made. A script that sets values asks first, with the number of changes, **Apply** and **Show List**, and Apply makes them one edit, which one `Ctrl+Z` takes back. As with the Properties tab, values change only in a project's copy of a sector: on the game's, one answer, **Add to Project and Apply**, adds the sector, opens its copy and makes the changes there.

**Safety.** A script is code that runs with your rights. Scripts run only in a trusted folder (VS Code's Workspace Trust). A script REDcode did not make, such as one you were sent, first opens beside a question, "It has not run on this computer before", and runs only after **Run**. That is asked once per file.

### Writing one

A script is one `.mjs` file. This is the example that raises short streaming distances:

```js
export default {
  name: "Raise short streaming distances",
  description: "Sets streaming distances under 45 m to 90 m",
  visit(node, ctx) {
    if (node.streamingDistance < 45) {
      ctx.select(node);
      node.set("streamingDistance", 90);
    }
  },
};
```

`visit` is called once for each node. A script can give `run(ctx)` instead, to work through `ctx.nodes()` itself.

| A `node` has | |
|---|---|
| `id`, `entry` | Its id, `<sector>#<entry>`, as the sector view, ArchiveXL and REDnode name it |
| `type`, `mesh`, `appearance`, `position`, `streamingDistance` | The usual facts, read from the node and its node data entry |
| `get(path)`, `set(path, value)` | Any value by its path in the node's JSON. `set` only proposes a change, made on **Apply** |

| `ctx` has | |
|---|---|
| `nodes()`, `selected()` | Every node, and the ones selected in the view |
| `select(node)`, `deselect(node)` | Build the selection the view shows when the script ends |
| `log(...)` | A line in the REDcode output |
| `game.read(path)` | Another game or project file, as JSON |
| `tools.call(extension, method, ...)` | Another EDGE tool's API, such as EDGEmat's |
| `agent.request(text, nodes)` | Hands nodes to an assistant, below |

**Debug**, on a script's row, runs it under VS Code's own debugger: it stops at your breakpoints, and you can hover values and step through.

### Handing work to an assistant

`ctx.agent.request("Check these for wrong values", nodes)` saves a request in the project's `.redcode\requests` folder and copies a short prompt, such as "Do REDcode request 1…". Paste it to Claude Code: it reads the request with `redcode-mcp`'s `request_get`, does the work with the sector tools, and marks it done with `request_done`. An assistant can also write a script for you with `script_write`; it shows in the Scripts menu at once, and runs only after the first-run question. See [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html#what-it-can-do).

**Try it.** Open `exterior_-22_7_0_0.streamingsector` from Game Assets, press **Scripts** and pick **Short streaming distance**: 68 of its 1,233 nodes are selected, the ones the game stops drawing closer than 45 m. Then pick **Raise short streaming distances** and **Show List** to see the 68 changes it would make.

Tested by REDcode's developer, Debug and the requests included.

(Screenshot on the wiki, "The Scripts menu": The Scripts menu open over a sector's 3D view: the project's scripts, your scripts and the three examples, the row buttons Run on Selection, Debug, Edit and Remove on the highlighted one, and New Script… and Open Scripts Folder at the bottom.)
