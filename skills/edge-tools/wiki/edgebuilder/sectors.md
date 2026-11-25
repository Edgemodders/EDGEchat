<!-- Copied from EDGEweb's docs/wiki/edgebuilder/sectors.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/sectors.html (reviewed 2026-11-23) -->

# Sectors: what the game placed, piece by piece

Night City is too big to load at once. The game cuts it into pieces called **streaming sectors**, and loads each piece as V comes near. Every crate, door, light and wall the game placed belongs to one sector. From 0.13.2, the **World** tab has a **Sectors** part that finds the sectors around you and lists what each one places.

Use it to find something a click can't reach, to see what a place is made of, or to check which part of the game's files your scene takes things out of.

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgebuilder/sectors.html#what-you-need) | Versions |
| [Finding sectors](https://edgemodders.ai/wiki/edgebuilder/sectors.html#finding-sectors) | Near V, near the camera, by name or grid cell |
| [The Sector drawer](https://edgemodders.ai/wiki/edgebuilder/sectors.html#the-sector-drawer) | Everything one sector places |
| [What you can do with an entry](https://edgemodders.ai/wiki/edgebuilder/sectors.html#what-you-can-do-with-an-entry) | Pick, fly to, hide, remove |
| [Try it](https://edgemodders.ai/wiki/edgebuilder/sectors.html#try-it) | A short walkthrough |
| [Good to know](https://edgemodders.ai/wiki/edgebuilder/sectors.html#good-to-know) | Limits |

## What you need

EDGEbuilder 0.13.2 or later, [REDnode](https://edgemodders.ai/wiki/rednode/) 0.67.3 or later, and [REDbridge](https://edgemodders.ai/wiki/redbridge/) running (the pill at the top says so): EDGEbuilder reads the sectors from the game's files through it. To remove an entry you also need a scene open, as with [doors](https://edgemodders.ai/wiki/edgebuilder/doors.html).

## Finding sectors

Open the **World** tab and choose **Sectors**.

| Control | Finds |
|---|---|
| **Near V** | The sectors whose box holds the spot where V stands |
| **Near the camera** | The same around EDGEbuilder's camera, with Edit on. Fly somewhere first |
| The text box | Sectors by name, or by grid cell: type `-22 19` for the cell V's apartment is in |
| **Exterior**, **Interior**, **Quest**, **Other** | Which kinds of sector the list shows |
| **All levels**, **Level 0**, **1**, **2**, **3 and up** | How fine a sector is. Level 0 holds the small things near you; higher levels hold what is seen from far away |

The list shows up to 200 sectors, the finest level first. A sector the game has loaded now is marked **in**.

There are many more sectors at one spot than you'd expect: thousands of boxes hold V's apartment, most of them large ones for things seen from across the city. Start with **Level 0**.

## The Sector drawer

Click a sector. A drawer opens to the left of the window with everything that sector places, one row per **entry**: its number, its kind (an entity, a mesh, a light, a spot for a person to stand) and its file.

| In the drawer | Means |
|---|---|
| The first lines | The sector's kind and level, how many entries it has, and whether it is loaded now |
| The filter | Narrows the rows by kind, file name or entry number. The drawer shows the first 300 that match |
| ● | The entry is in the game now. ○ means it isn't: go nearer |
| ×12 | One entry that places twelve copies of the same model |
| The eye | Hides the entry until EDGEbuilder stops. It is not kept in your scene |

(Screenshot on the wiki, "The Sector drawer": EDGEbuilder with the World tab on Sectors and the Sector drawer open to its left on exterior_-22_19_1_0: the filter box, rows of entries with their numbers, kinds and files, the streamed-in dots and eyes, and entry 288, V's door, picked.)

## What you can do with an entry

| Do | Result |
|---|---|
| Click a row | The entry is picked: the **Picked in the world** panel on the World tab describes it, and it gets an outline in the game when it is loaded and draws something |
| Click it twice | Edit goes on and the camera flies to it |
| Press its eye | It disappears from the game until you press the eye again or EDGEbuilder stops |
| **Remove from world** in the panel | The entry is removed as part of the open scene, and the bake keeps it removed, exactly as with a [door](https://edgemodders.ai/wiki/edgebuilder/doors.html#removing-and-bringing-back). **Restore** on the Scene tab brings it back |

An entry that places a working door is picked as that door, so it also has **Open**, **Close** and **Lock**.

## Try it

Load a save at V's apartment in Megabuilding H10, with a scene open.

1. **World** tab, **Sectors**, **Near V**. Choose **Level 0**.
2. Type `-22 19` in the text box and click **exterior_-22_19_1_0**. The drawer says it has 853 entries and is streamed in now.
3. Type `door` in the drawer's filter and click **#288**. The panel shows V's door, and the door gets an outline.
4. Click **#289** twice: the camera flies to the elevator door.
5. Clear the filter, type `mesh`, and press the eye on a row with ●: that model disappears. Press it again: back.

## Good to know

- **Entries that draw nothing** (a spot for a person, a light channel, a sound area) have nothing to outline. The panel still describes them.
- **A project that replaces a sector.** If your REDcode project holds its own copy of a sector your scene removes from, ArchiveXL refuses those removals. The Bake tab warns you.
- **For other tools and assistants.** EDGEbuilder offers `select`, `focus` and `scenesEditing` through REDnode, so another tool or an AI assistant can pick an entry in the game or fly the camera to it. REDcode's sector view will use them.
- **A 3D view of a sector** and previews of changes are planned. See [EDGEbuilder's design](https://edgemodders.github.io/EDGEbuilder/world-objects.html).
