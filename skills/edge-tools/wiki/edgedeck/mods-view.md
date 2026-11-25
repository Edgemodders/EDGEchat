<!-- Copied from EDGEweb's docs/wiki/edgedeck/mods-view.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/mods-view.html (reviewed 2026-11-23) -->

# The Mods view and the EDGEdeck page

EDGEdeck shows your mods in two places. Both show the same library, and a change in one appears in the other.

| Place | What it is | Use it for |
|---|---|---|
| **The Mods view** | A compact list in the side bar. Click the EDGEdeck icon in the activity bar, the strip of icons down the far left edge of the window | Everyday use: tick, deploy, play |
| **The EDGEdeck page** | A wide table in the middle of the window. Press **Open EDGEdeck**, the first button in the Mods view's title bar | Bigger jobs: searching, filtering, sorting by size, sections, loadouts |

The first half of this page is a tour. The second half is reference: look things up there when you need them.

| The tour | |
|---|---|
| [The Mods view](https://edgemodders.ai/wiki/edgedeck/mods-view.html#the-mods-view) | Groups, a mod's row, what you can do with it |
| [The EDGEdeck page](https://edgemodders.ai/wiki/edgedeck/mods-view.html#the-edgedeck-page) | What the table adds |
| [The detail panel](https://edgemodders.ai/wiki/edgedeck/mods-view.html#the-detail-panel) | Everything about one mod |

| Reference | |
|---|---|
| [What the status means](https://edgemodders.ai/wiki/edgedeck/mods-view.html#what-the-status-means) | `deployed`, `not deployed yet` and the rest |
| [The Mods view's buttons and menus](https://edgemodders.ai/wiki/edgedeck/mods-view.html#the-mods-views-buttons-and-menus) | Title bar, `...` menu, right-click menu |
| [The EDGEdeck page, part by part](https://edgemodders.ai/wiki/edgedeck/mods-view.html#the-edgedeck-page-part-by-part) | Toolbar, filters, columns, footer |
| [Sections](https://edgemodders.ai/wiki/edgedeck/mods-view.html#sections) | Group a long list your way |
| [The status bar](https://edgemodders.ai/wiki/edgedeck/mods-view.html#the-status-bar) | EDGEdeck in one line |

## The Mods view

(Screenshot on the wiki, "The Mods view": The sidebar list with the Frameworks group (and its game version line) above the Mods group, checkboxes, the status text after each name, and one mod expanded to show its folders and files.)

The line at the top counts your mods and names the active [loadout](https://edgemodders.ai/wiki/edgedeck/loadouts.html), for example `Library: 38 mods · Loadout: Default`. Under it, the list has these groups:

| Group | Holds |
|---|---|
| **Set up** | Steps still to do. Gone when there are none. See [The Set up steps](https://edgemodders.ai/wiki/edgedeck/install.html#the-set-up-steps) |
| **Frameworks** | The tools most mods need, such as RED4ext and Cyber Engine Tweaks. Its header shows a count and the game version, for example `6, 6 on · game 2.5`. See [Frameworks and game patches](https://edgemodders.ai/wiki/edgedeck/frameworks.html) |
| **Your sections** | Groups you make yourself on the EDGEdeck page, shown between Frameworks and Mods. See [Sections](https://edgemodders.ai/wiki/edgedeck/mods-view.html#sections) |
| **Mods** | Everything else |

With no mods at all, the view shows **No mods yet** and a few buttons instead of groups.

### A mod's row

A row reads like this:

`☑ Cool Jacket   1.1 (+1)  ·  24 MB  ·  deployed`

| Part | Meaning |
|---|---|
| The checkbox | The mod is on or off. Ticking it changes nothing in the game until you [deploy](https://edgemodders.ai/wiki/edgedeck/deploying.html) |
| `1.1` | The version in use |
| `(+1)` | One more version of this mod is in the library. See [Versions](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#versions) |
| `24 MB` | Its size in the library |
| `deployed` | Its status. See [What the status means](https://edgemodders.ai/wiki/edgedeck/mods-view.html#what-the-status-means) |

What you can do with a row:

| Do this | To |
|---|---|
| Tick or untick the box | Turn the mod on or off |
| Click the name | Open its [detail panel](https://edgemodders.ai/wiki/edgedeck/mods-view.html#the-detail-panel) |
| Click the arrow before the name | See the folders it goes into in the game, and the files in each. Click a file to open it |
| Hover the row | Show its buttons: **Deploy this mod**, **Move up**, **Move down**, then for a mod from Nexus **Check for updates** and **Update**, and last **Switch version...**. Moving a mod up makes it win over the mod above it: see [Who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html#who-wins). Deploy puts this mod alone in the game: see [Deploying one mod](https://edgemodders.ai/wiki/edgedeck/deploying.html#deploying-one-mod) |
| Hover anything a little longer | See a card with its size, dates, where it goes in the game and where it came from |
| Right-click | Open the menu with everything else. See [the right-click menu](https://edgemodders.ai/wiki/edgedeck/mods-view.html#the-right-click-menu) |
| Press **F2** | Rename the mod |

**Renaming** gives the mod a name of your own. The new name applies to every version of the mod you have, and to versions you add later. It is only a label inside EDGEdeck: the mod's files and the game are not changed. To get the original name back, rename it again and leave the box empty.

**Files from one Nexus page.** Two or more files from the same Nexus page, such as a main file and an optional patch, sit under one row named after the page, with a row per file under it. See [Several files from one page](https://edgemodders.ai/wiki/edgedeck/nexus.html#several-files-from-one-page).

## The EDGEdeck page

Press **Open EDGEdeck**, the first button in the Mods view's title bar.

(Screenshot on the wiki, "The EDGEdeck page": The full-width EDGEdeck table with search, the filter chips (All, On, Off, Needs deploy, Conflicts, Update available) and their counts, the toolbar with Update all, the Library count at the right of the loadout row, and the footer with disk use and the running REDbridge.)

The page shows the same mods as a table, one row per mod, with buttons on every row. What it adds to the Mods view:

- **Search and filters.** Type in the search box, or press a chip such as **Off** or **Update available**, to narrow the list.
- **Sorting.** **Largest first** finds what uses your disk space. **Newest update first** shows what changed lately.
- **Buttons on every row**: deploy this mod alone, move it, put it in a section, check it for an update, remove it.
- **Sections**: your own groups, such as "Visuals" or "Testing".
- **Loadouts**: named sets of which mods are on.
- **A footer** that says where the library is, how much disk it uses and whether REDbridge is running.

Each of these is described under [The EDGEdeck page, part by part](https://edgemodders.ai/wiki/edgedeck/mods-view.html#the-edgedeck-page-part-by-part).

## The detail panel

Click a mod's name for its detail panel, which opens in the middle of the window.

(Screenshot on the wiki, "A mod's detail panel": The detail panel for one mod: its version and source, the files it deploys with their sizes per folder, its conflicts by file path and inside archives, and the action buttons.)

| It shows | |
|---|---|
| The mod's files | Folder by folder, with sizes, as they will sit in the game |
| Its conflicts | By file path and inside archives. See [Conflicts and who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html) |
| Its Nexus page | And, for a file from a page with several files in your library, the other files |
| Buttons | Turn on or off, deploy or undeploy this mod alone, move up or down, open its folder, rename, open on Nexus, update, remove |

## What the status means

| Status | Meaning | What to do |
|---|---|---|
| `deployed` | On, and its files are in the game | Nothing |
| `not deployed yet` | On, but you haven't deployed since adding it or turning it on | Deploy |
| `off` | Off, and not in the game | Nothing |
| `off, still deployed` | You turned it off, but its files are still in the game | Deploy to take them out |
| `changed in game folder` | The game's copy of one of its files was altered by something other than EDGEdeck, such as a Steam verify or a game update | Deploy. EDGEdeck asks what to keep. See [Changes made outside EDGEdeck](https://edgemodders.ai/wiki/edgedeck/deploying.html#changes-made-outside-edgedeck) |
| `changed, deploy again` | The mod is in the game, but some of its files still need to go in: its copy in the library changed (for example your own project was packed again), a file went missing from the game, or it now wins a file it used to lose | Deploy |
| `..., 2 conflicts` | Added after any status: the mod shares files with other mods | Nothing, unless the wrong mod wins. See [Conflicts](https://edgemodders.ai/wiki/edgedeck/conflicts.html) |
| `update 1.2 available` | Nexus has a newer version | Click it to update. See [Updates](https://edgemodders.ai/wiki/edgedeck/nexus.html#updates) |
| `options to review` | An update of a mod with a FOMOD installer is downloaded, but its installer changed, so your choices no longer fit. The old version stays in use | Click it to pick again. See [Mods with an installer](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#mods-with-an-installer-fomod) |
| `loses 3 archive files` | Another mod replaces 3 of the things (models, textures and so on) packed inside this mod's archives, so this mod's versions of them won't show in the game | Check [Conflicts](https://edgemodders.ai/wiki/edgedeck/conflicts.html) if that's not what you want |
| `overrides 2 archive files` | It replaces 2 things packed inside another mod's archives | Usually intended |

The icon before the name has a color too, so you can tell without reading to the end of the row:

| Color | Means |
|---|---|
| Yellow, a warning sign or a pencil | Something needs a look: a conflict, or a file changed in the game folder |
| Cyan | Changes wait for a deploy: not deployed yet, changed, or off but still in the game |
| Green | On, and Nexus has a newer version |
| The normal accent | On and deployed |
| Dim | Off |

A row over several files from one Nexus page takes the color of its files, the first that applies in this list. Themes can change the cyan and the green with the colors `edgedeck.pending` and `edgedeck.update`.

## The Mods view's buttons and menus

### The title bar

The row of icons at the top of the view. Hover one to see its name.

| Button | Does |
|---|---|
| **Open EDGEdeck** | Opens the EDGEdeck page |
| **Add mod** | Adds a mod from a file or folder. See [Adding and removing mods](https://edgemodders.ai/wiki/edgedeck/adding-mods.html) |
| **Deploy** | Makes the game match your list. See [Deploying and undo](https://edgemodders.ai/wiki/edgedeck/deploying.html) |
| **Run game** | The play button. Deploys what is waiting, then starts the game. See [Start the game](https://edgemodders.ai/wiki/edgedeck/deploying.html#start-the-game) |
| **Nexus: check for updates** | Asks Nexus now. See [Updates](https://edgemodders.ai/wiki/edgedeck/nexus.html#updates) |
| **Switch loadout...** | Makes another [loadout](https://edgemodders.ai/wiki/edgedeck/loadouts.html) active |
| **Refresh** | Reads the library and the game folder again |
| **Hide mods that are off** | The eye. The list then shows only the mods that are on, and a line above it says how many are hidden. Press it again (**Show all mods**) to see them all. EDGEdeck remembers the choice. The EDGEdeck page has its own filters and isn't affected |

### The ... menu

The **`...`** at the end of the title bar holds the rest:

| Group | Items |
|---|---|
| Looking | **Show conflicts**, **Show pending changes** |
| Getting mods | **Nexus sign in**, **Import from Vortex**, **Get the frameworks...**, **Update all**, **Nexus: add from a link**, **Add from REDcode project** |
| Undoing | **Undo deploy**, once something is deployed |
| Folders and tools | **Get REDbridge**, **Open library folder**, **Move library...**, **Pick the game folder...**, **Show log** |
| Loadouts | **Switch loadout...**, **Save as new loadout...**, **Export the active loadout...**, **Import a loadout...** |

Every one of these is also in the command palette (`Ctrl+Shift+P`, then type `EDGEdeck`). [Settings and commands](https://edgemodders.ai/wiki/edgedeck/settings.html#commands) says what each does.

### The right-click menu

Right-click a mod for:

| Item | Does |
|---|---|
| **Deploy this mod**, **Undeploy** | Puts this mod alone in the game, or takes it out. See [Deploying one mod](https://edgemodders.ai/wiki/edgedeck/deploying.html#deploying-one-mod) |
| **Check for updates**, **Update** | For a mod from Nexus. Check for updates asks Nexus about this mod only. Update asks too and, when there is a newer file, downloads it in the mod's place after one question. See [Updates](https://edgemodders.ai/wiki/edgedeck/nexus.html#updates) |
| **Details** | Opens the detail panel |
| **Open on Nexus Mods** | Opens the mod's Nexus page |
| **Reveal in File Explorer** | Opens the mod's copy in the library |
| **Reveal in Game Folder** | Shows where the mod sits in the game. Works on a folder or a file too |
| **Add to REDcode project** | For mod makers, when a REDcode project is open. See [EDGEdeck and REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html) |
| **Rename...** | A name of your own for the mod |
| **Remove** | Deletes the mod from the library. See [Removing a mod](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#removing-a-mod) |

The Frameworks group's header has two buttons of its own when you hover it: **Get the frameworks...** and, while any mod has an update waiting, **Update all**.

## The EDGEdeck page, part by part

| Part | What it does |
|---|---|
| **Toolbar** | **+ Add mod**. **Check updates**, which reads **Nexus sign in** until you are signed in. **Update all**, greyed out while nothing waits and with a count when something does; it reads **Update shown** while a search or filter narrows the list. **Conflicts**, with a count. **Undo deploy**, once something is deployed. The number of changes waiting: click it to list them. **Deploy**, which reads **Deployed** when nothing waits. **Run game** |
| **Set up** | A strip of buttons for the [Set up steps](https://edgemodders.ai/wiki/edgedeck/install.html#the-set-up-steps) still to do |
| **Loadout** | A dropdown of your [loadouts](https://edgemodders.ai/wiki/edgedeck/loadouts.html) (saved sets of which mods are on), with buttons to make, rename, export, import and delete one. **Library**, at the right of the row, counts your mods and versions; click it to open the library folder |
| **Search** | Matches name, version, kind and status. `fomod` lists the mods from a [FOMOD installer](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#mods-with-an-installer-fomod) |
| **Filter chips** | **All**, **On** and **Off** are always there. **Deployed**, **Not deployed**, **Needs deploy**, **Changed in game folder**, **Conflicts**, **Update available** and **Options to review** appear when at least one mod fits. Each shows its count |
| **Largest first** | Lists every mod by size, across every section |
| **Newest update first** | Lists every mod by when the version in use came into the library, newest on top. While either sort is on, rows can't be dragged |
| **Columns** | A button that picks which columns show: Version, Kind, Size, Added, Updated and Status. The mod's box, its name and its buttons always show. Added and Updated start hidden. **Added** is when the mod first came into your library; **Updated** is when the version in use did |
| **Column widths** | Drag the edge of a column heading to resize it. Double-click the edge for automatic widths. EDGEdeck remembers both |
| **The version cell** | A dropdown when the library holds several versions of a mod, or Nexus has a newer one. Pick a version to switch to it, or **Get x.y from Nexus** |
| **The status cell** | When a mod has changes waiting, click its status to see which files the next deploy will add, replace or remove for that mod, and why |
| **Actions** | Icon buttons on each row, in this order: **Deploy** or **Undeploy** this mod alone (yellow while its changes wait; see [Deploying one mod](https://edgemodders.ai/wiki/edgedeck/deploying.html#deploying-one-mod)), Details, Move up, Move down, Section, Open folder, **Check for an update** and **Update** (for a mod from Nexus; Update only while one waits), Open on Nexus, Remove |
| **Sections** | Frameworks, sections of your own, and Mods, each in its own box. See [Sections](https://edgemodders.ai/wiki/edgedeck/mods-view.html#sections). After a game patch, or while a framework is missing, a link beside the Frameworks heading reads **Update the frameworks** or **Get the frameworks**: see [Frameworks](https://edgemodders.ai/wiki/edgedeck/frameworks.html) |
| **Nexus pages** | Two or more files from one Nexus page sit under a row named after the page, with its own box and buttons. See [Several files from one page](https://edgemodders.ai/wiki/edgedeck/nexus.html#several-files-from-one-page) |
| **Footer** | The library folder and whether deploy uses hardlinks or copies, the last deploy, disk use, and which REDbridge is running |

The page remembers your search, filters and columns.

## Sections

Sections let you group a long list your way: "Visuals", "Gameplay", "Testing", whatever helps you find things. Frameworks and Mods are built in. Your own sections sit between them, on the EDGEdeck page and in the Mods view.

(Screenshot on the wiki, "Sections on the EDGEdeck page": The EDGEdeck page with a section of your own between Frameworks and Mods: its header with the on/off box, the move and remove buttons, and one folded section below it.)

**Sections only group the list. They don't decide which mod wins a conflict.** See [Who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html#who-wins).

| To... | Do this on the EDGEdeck page |
|---|---|
| Make a section | Press **+ Section** and give it a name |
| Put a mod in a section | Press the mod's **Section** button and pick one, or drag the mod's row onto the section's header |
| Rename, move or delete a section | Use the buttons on its header. Deleting it (the **X**) sends its mods back to Mods, or Frameworks, and removes nothing |
| Fold a section | Click its name or its arrow. It stays folded after a restart. While you search or filter, folded sections open so matches are never hidden |
| Turn a whole section on or off | Tick or untick the box on its header. It shows a dash when only some of its mods are on |
| Move all of a section's mods to another section | The move button on its header |
| Remove all of a section's mods from the library | The remove button on its header. EDGEdeck asks once, listing them, and every version of each goes |

> **Move and remove act on the mods the section shows.** With no search or filter, that is every mod in the section. With a search or a filter chip on, it is only the mods still showing. That makes cleaning up easy: press the **Off** chip, then remove on a section, to clear out the mods you no longer use there. Read the list in the question before you confirm.

A new version of a mod lands in the same section as the old one. Every [loadout](https://edgemodders.ai/wiki/edgedeck/loadouts.html) shares the same sections.

## The status bar

The status bar at the bottom of the window shows EDGEdeck in one line. Click it to do the obvious next thing.

| It says | Meaning | Clicking it |
|---|---|---|
| `12 of 14 mods on · deployed` | The game matches your list | |
| `12 of 14 mods on · Deploy (3 changes)` | Three changes wait for a deploy | Deploys |
| `... · Vortex manages the game` | Vortex has mods deployed. See [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html) | Explains |
| `EDGEdeck: game not found` | See [Finding the game](https://edgemodders.ai/wiki/edgedeck/install.html#finding-the-game) | Opens the folder picker |
