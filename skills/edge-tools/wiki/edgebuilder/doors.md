<!-- Copied from EDGEweb's docs/wiki/edgebuilder/doors.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/doors.html (reviewed 2026-11-23) -->

# Removing the game's doors

Everything else in EDGEbuilder adds things to the world. This page is about taking something away: a door the game placed. Open up a doorway for a scene, take a painted-on door off a wall, or clear a blocked passage. You pick the door in the game, remove it, and see the result at once. When you bake the scene, the removal goes into your mod, and the door stays gone for anyone who installs it.

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgebuilder/doors.html#what-you-need) | For removing live, and for baking |
| [Three kinds of door](https://edgemodders.ai/wiki/edgebuilder/doors.html#three-kinds-of-door) | Doors, painted-on doors, and other meshes |
| [Finding a door](https://edgemodders.ai/wiki/edgebuilder/doors.html#finding-a-door) | The World tab, or a click in the world |
| [Removing and bringing back](https://edgemodders.ai/wiki/edgebuilder/doors.html#removing-and-bringing-back) | Remove from world, Restore, Undo |
| [Stand-ins](https://edgemodders.ai/wiki/edgebuilder/doors.html#stand-ins) | The copy the game shows in a door's place |
| [Opening, closing and locking](https://edgemodders.ai/wiki/edgebuilder/doors.html#opening-closing-and-locking) | A door kept open, closed or locked while your scene is open |
| [Baking the removals](https://edgemodders.ai/wiki/edgebuilder/doors.html#baking-the-removals) | Making it last, without EDGEbuilder |
| [Try it](https://edgemodders.ai/wiki/edgebuilder/doors.html#try-it-remove-vs-door) | Five short walkthroughs |
| [Good to know](https://edgemodders.ai/wiki/edgebuilder/doors.html#good-to-know) | Quests, saves, and what comes later |

## What you need

| To | You need |
|---|---|
| **Find and remove doors while you play** | EDGEbuilder 0.12.5 or later, [REDnode](https://edgemodders.ai/wiki/rednode/) 0.67.3 or later, and a scene open on the [Scene tab](https://edgemodders.ai/wiki/edgebuilder/scenes.html). A removal is kept in the open scene |
| **Open, close and lock doors** | EDGEbuilder 0.13.2 or later |
| **Bake removals into a mod** | Also [REDbridge](https://edgemodders.ai/wiki/redbridge/) **0.16.0** or later, a [REDcode](https://edgemodders.ai/wiki/redcode/) project open in VS Code, and ArchiveXL in the game. Get the newest REDbridge with **Get REDbridge** in EDGEdeck, or **Update REDbridge** in REDnode's Mod Manager |

## Three kinds of door

The game has doors that work and doors that are only painted on. EDGEbuilder knows both, and its **World** tab has a switch for each kind:

| Kind | What it is | Starts |
|---|---|---|
| **Doors** | Doors that open and close: apartment doors, elevator doors, shutters. EDGEbuilder shows whether each is open, closed or locked | On |
| **Painted-on doors** | Doors that never open, placed as decoration on walls where there is nothing behind | On |
| **Meshes** | Any model the game placed: a bin, a bench, a sign, a wall. Some painted-on doors are plain meshes and are only found this way | Off, so a click on a wall doesn't pick the wall |

## Finding a door

**On the World tab.** The tab has two parts, **Nearby** and **Sectors**. Nearby lists the doors within 30 m of V, nearest first, with their state and distance. **Scan Doors** reads the list once more after you move (before 0.13.2 the button was called Look again). [Sectors](https://edgemodders.ai/wiki/edgebuilder/sectors.html) lists everything a part of the world places, doors included. Hover over a row and the door gets an outline in the game. Click a row to pick that door, and the camera flies to it. The list is around V, not the camera, so walk V near the doors you want.

**In the world.** With **Edit** on, click a door. EDGEbuilder picks the first door your click passes, up to the first wall, and the World tab shows it. A click on one of your own scene's objects still picks your object. With **Meshes** on, a click that finds no door picks the mesh it hits.

The **Picked in the world** panel on the World tab says what you picked:

- its file and appearance, such as `single_door.ent` and `doors_single_kitsch_g_frameless`;
- for a working door, its state: open or closed, locked, how it starts, and whether it closes by itself;
- where it is, and which part of the world's files placed it;
- **warnings**: a door a quest uses (V's own apartment door is one), a door in one of the game's quest areas, or a mesh that holds several models as one, so removing it removes them all.

(Screenshot on the wiki, "The World tab": EDGEbuilder's World tab at V's apartment: the Doors, Painted-on doors and Meshes switches, the list of doors near V with their state and distance, and the Picked in the world panel for V's door with its quest warning and the Remove from world button.)

## Removing and bringing back

Press **Remove from world** in the panel, or **Delete**. The door goes, and so does what makes it solid: V walks through the doorway. The removal is kept in the open scene, saved like everything else.

| To bring it back | Do |
|---|---|
| Right after removing | **Ctrl+Z** (Undo). **Ctrl+Y** removes it again |
| Any time | **Restore** next to it in the **World edits** list on the Scene tab, under the scene's name and counts. Or pick the door again and press **Restore** in the panel |
| For now, without changing the scene | **Close** the scene on the Scene tab. Its doors come back; open the scene again and they go again |

(Screenshot on the wiki, "World edits on the Scene tab": The Scene tab of a scene that removes two doors: the count 0 added, 2 removed, and the World edits list with V's door and the elevator door, each with a Restore button.)

The Scene tab counts what a scene does to the world: **"3 added, 2 removed"** means three objects of yours and two of the game's removed. The Library tab shows the same as **+3 −2**.

A removal follows the scene: it comes back after you load a save, when you open the scene, and when the scene is shown beside the one you edit. Switching EDGEbuilder off in REDnode's Mod Manager brings every door back until it runs again.

## Stand-ins

Seen from far away, a door is not the real door: the game draws a cheap copy of it, a **stand-in** (the game calls it a proxy mesh), and swaps in the real door as you come near. EDGEbuilder takes care of both. When you remove a door, its stand-in goes too, so the doorway is really open.

One thing to know: after you load a save with a door removed, the real door never comes into the game. If you bring that door back then (Restore, Undo, Close, or EDGEbuilder switched off), you see its **stand-in**: it looks like the door but doesn't open. EDGEbuilder says so in its message. Fast travel away and back, or load a save, and the working door is there again.

## Opening, closing and locking

From 0.13.2, a working door you picked has three more buttons in the **Picked in the world** panel: **Open**, **Close** and **Lock** (which reads **Unlock** once the door is locked). They run the door's own actions, the ones its panel and a quickhack use, so the door moves as it does in the game. A painted-on door has none of them.

The open scene **keeps** the door that way. The row in the list says **kept**, and the Scene tab lists the door under **World edits** with its state, such as "open, locked". The scene's count ends "1 door set".

| What happens | When |
|---|---|
| The door is set again | After you load a save, after a fast travel, when you open the scene, and each time the door comes back into the world |
| A door kept open stays open | It no longer closes by itself while the scene keeps it |
| An elevator's door is **sealed** | An elevator unlocks its own doors when it arrives, whatever their lock. So for an elevator's door, Lock closes and seals it, and the elevator cannot open it. Unlock takes the seal off. The panel says "an elevator's door" |
| The door goes back as it was | **Restore** on the Scene tab, **Ctrl+Z**, or closing the scene. It closes by itself again too |

Between those moments the door is still a door: V can open a door the scene keeps closed, unless it is also locked.

**A bake leaves door states out.** The game's files cannot hold a door's state, so it is EDGEbuilder that sets it while your scene is open. The Bake tab says so. The state the door has when you save the game is in your save, as with any door.

## Baking the removals

A bake writes the scene's removals into your mod, as instructions for ArchiveXL to leave those doors out of the world, and their stand-ins with them. With the mod installed, the doors are gone for anyone, with EDGEbuilder closed or uninstalled.

- A scene can **only** remove things. Its bake has no objects, just the instructions, in one small file (`<scene>.archive.xl`).
- The **Bake** tab says how many doors the bake removes and that the mod needs ArchiveXL. After the bake, the bake's line says **"0 added, 2 removed (and their 2 stand-ins)"**, and the list of bakes shows **+0 −2**.
- Finding the stand-ins reads part of the world's files. The first bake around a place can take half a minute; after that it's quick.
- Once the bake is in the game, EDGEbuilder knows: opening that scene doesn't hide the doors a second time.

Everything else about baking, packing and sharing is on [Baking](https://edgemodders.ai/wiki/edgebuilder/baking.html).

## Try it: remove V's door

Load a save at V's apartment in Megabuilding H10, open EDGEbuilder, and make a new scene on the Library tab (call it **Doors**).

1. Open the **World** tab. V's door is near the top of the list: `Door single_door.ent (doors_single_kitsch_g_frameless)`, closed.
2. Hover over its row: the door gets an outline. Click the row: Edit goes on and the camera flies to the door.
3. Read the panel: the door's file, "closed; starts closed; closes by itself", and a warning that a quest uses it.
4. Press **Remove from world**. The door is gone. Switch Edit off and walk V through the doorway.

## Try it: bring it back, three ways

1. Press **Ctrl+Z**: the door is back. **Ctrl+Y**: gone again.
2. On the **Scene** tab, under the counts ("0 added, 1 removed"), press **Restore** next to the door: back again.
3. Remove it once more, then **Close** the scene: the door is back. Open **Doors** on the Library tab: gone again.

## Try it: bake two doors away

You need a REDcode project open in VS Code (the Bake tab names it) and REDbridge 0.16.0 or later.

1. With **Doors** open and V's door removed, pick the **elevator door** next to it on the World tab (`megabuilding_elevator_double_door.ent`) and remove it too. The Scene tab says "0 added, 2 removed".
2. Open the **Bake** tab. There is no error, and a line says the bake removes 2 of the game's objects and needs ArchiveXL.
3. Press **Bake**. The message says "2 removals of the game's own objects (and 2 stand-ins)". The project's list of bakes shows **doors** with **+0 −2**.
4. Pack and install the project as you would any bake ([After a bake](https://edgemodders.ai/wiki/edgebuilder/baking.html#after-a-bake)), and quit the game.
5. Start the game. Before loading a save, switch **EDGEbuilder off** in REDnode's Mod Manager. Load the save: both doorways are open, with no stand-ins, and V walks through.

## Try it: take the bake out

1. Switch EDGEbuilder on again and open the **Bake** tab.
2. Press the bin next to **doors** in the list of bakes. The bake's files leave the project; the scene stays as it was.
3. Pack and install the project again, and restart the game: the doors are back.

## Try it: hold the elevator

1. Pick the **elevator door** on the World tab. The panel's state line ends "an elevator's door".
2. Press **Lock**. Switch Edit off and call the elevator: the door stays shut.
3. Press **Unlock** and call it again: it opens.
4. Pick **V's door** and press **Open**. Wait half a minute: it stays open. Press **Restore** on the Scene tab: it closes, and closes by itself again.

## Good to know

- **Quests.** Removing a door a quest opens, locks or walks you through can break that mission, or let V into places that aren't finished. EDGEbuilder warns you; it doesn't stop you.
- **Saves.** A removal isn't written into your save. Without EDGEbuilder running and without a bake, the door is back.
- **Door states are not baked.** A door stays open, closed or locked only while the scene is open in EDGEbuilder.
- **Picking around the camera** rather than V: the [Sectors](https://edgemodders.ai/wiki/edgebuilder/sectors.html) part of the World tab finds what is around the camera. Copying and changing the rest of what the game placed come later. See [EDGEbuilder's design](https://edgemodders.github.io/EDGEbuilder/world-objects.html).
- **Other mods** that load your scene through REDnode see its objects but not yet its removals.
- **Just want doors gone while you play?** [Remove Doors](https://edgemodders.ai/wiki/edgebuilder/remove-doors.html), a small app of its own, does that without scenes, REDbridge or a project.
