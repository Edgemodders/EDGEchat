<!-- Copied from EDGEweb's docs/wiki/edgebuilder/remove-doors.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/remove-doors.html (reviewed 2026-11-19) -->

# Remove Doors

**Remove Doors** is a small app for [REDnode](https://edgemodders.ai/wiki/rednode/), made beside EDGEbuilder. It does one thing: it takes the game's doors out of the world, and puts them back. Pick a door near V, press **Remove**, and the doorway is open. You don't need EDGEbuilder, REDbridge or a project for it, and it writes nothing into your game.

| | Remove Doors | [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/doors.html) |
|---|---|---|
| **For** | Opening up doorways while you play | Building scenes, and making removed doors part of a mod |
| **Removed doors last** | While the app is on, in every save | In your scene while it's open, and for good once baked into a mod |
| **Needs** | REDnode 0.67.3 or later, Codeware | Also REDbridge, and a REDcode project to bake |

Get it on [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/39060) or from EDGEbuilder's [releases page](https://github.com/Edgemodders/EDGEbuilder/releases).

| On this page | |
|---|---|
| [Install](https://edgemodders.ai/wiki/edgebuilder/remove-doors.html#install) | Where it goes, and switching it on |
| [The window](https://edgemodders.ai/wiki/edgebuilder/remove-doors.html#the-window) | Every button |
| [Try it: open V's secret room](https://edgemodders.ai/wiki/edgebuilder/remove-doors.html#try-it-open-a-doorway) | A walkthrough |
| [Good to know](https://edgemodders.ai/wiki/edgebuilder/remove-doors.html#good-to-know) | Stand-ins, missions, outlines |

## Install

1. Add the zip in EDGEdeck or Vortex and deploy with the game closed, or extract it into the game folder. The app lands in `red4ext/plugins/REDnode/apps/remove-doors/`.
2. Start the game. **Before loading a save**, press **F10**, open REDnode's **Mod Manager**, select **Remove Doors**, switch it on and pin it to the launcher. It needs to be on while the save loads, to see that part of the world load.

## The window

| Control | Does |
|---|---|
| **Doors**, **Painted-on doors** | Which doors the list shows: doors that open and close (apartments, elevators, shutters), and doors that never open, placed as decoration |
| **Scan Doors** | Lists the doors within 30 m of V, nearest first and numbered, with whether each is open, closed or locked. The door V is looking at gets an eye (👁) after its buttons, and is picked |
| **Show all** | Outlines every listed door in the game and pins its number over it, so the list and the game match |
| **Jump** | Takes V to that door: in front of it, on the floor, facing it. For a door you can't reach. If there's no floor on either side, V stays put |
| **Pick** | Picks that door: it gets an outline and a red **PICKED** pin |
| **Remove** | Removes the picked door from the world, with its stand-in, so V walks through |
| **Removed doors** | Every door you've removed, also far away ones, each with **Bring back**. **Bring all back** returns them all |

(Screenshot on the wiki, "Remove Doors": The Remove Doors window: the Doors and Painted-on doors switches, Scan Doors and Show all, a numbered list of doors near V with Jump and Pick buttons and an eye on the door V looks at, the Picked section with Remove, and the Removed doors list with Bring back.)

## Try it: open a doorway

1. Load a save at V's apartment in Megabuilding H10, with Remove Doors switched on.
2. Walk to the door of V's secret room, look at it, and press **Scan Doors**. Its row gets the eye, and in the game the door gets a red **PICKED** pin and an outline.
3. Press **Remove**. The door is gone: walk V through.
4. Save, and load that save. A few seconds later the doorway is open again.
5. Under **Removed doors**, press **Bring back**. The door returns, as its stand-in at first: fast travel away and back, and it's the working door again.

## Good to know

- **Stand-ins.** From far away the game draws a cheap copy of a door, its stand-in, and swaps in the real door as you come near. Remove Doors removes both. A door you bring back after a load shows as its stand-in, which doesn't open, until the area loads again.
- **Missions.** Removing a door a mission opens, locks or walks you through can break that mission, or let V into places that aren't finished. Bring it back if a mission stops.
- **Outlines are white.** The game draws a door's outline in white whatever colour is asked for, so the **PICKED** pin is what marks the picked door.
- **Started after the save loaded?** The window says so: load the save again, or fast travel, and it can remove doors.
- **Switching it off** in the Mod Manager brings every door back until you switch it on again.
- **Doors for everyone.** To make removed doors part of a mod that others install, with no app running, use [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/doors.html#baking-the-removals).
