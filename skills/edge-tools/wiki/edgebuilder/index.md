<!-- Copied from EDGEweb's docs/wiki/edgebuilder/index.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/ (reviewed 2026-10-24) -->

# EDGEbuilder

EDGEbuilder is a world builder for Cyberpunk 2077 that runs inside the game. You search the game's own 3D models, drop one into the world in front of you, and move, turn and scale it until it sits right. Later phases will let you arrange whole scenes and bake them into the world, so they load like any other mod.

(Screenshot on the wiki, "EDGEbuilder in the game": The game with Edit on: a cargo crate selected with its gizmo (red, green and blue arrows and a yellow ring), the EDGEbuilder panel on the right with the Assets tab open, and the help line at the bottom centre.)

## What it's for

Night City is built from hundreds of thousands of pieces: crates, signs, lamps, vending machines, walls. Adding your own furniture to an apartment, a barricade to a street or props for a photo has always meant guessing coordinates in a file, or learning a separate 3D tool, then starting the game to see whether it worked.

EDGEbuilder lets you do it where you can see it: in the game, with the real lighting, from any angle. It is built around six behaviours:

| Behaviour | What you do | Status |
|---|---|---|
| **Browse** | Search the game's meshes and entities by name | Passed in game |
| **Drop** | Pick one and it appears where you look, or where you click | Passed in game. Drop at click (0.3.3) is untested in game |
| **Position** | Move, turn and scale it with a gizmo, keys or typed numbers; drop it to the floor | Passed in game |
| **Arrange** | Group, duplicate, hide, undo and redo, save named scenes | Planned |
| **Bake** | Turn a scene into a mod that puts the objects in the world for good | Planned |
| **Return** | Open a saved scene and keep working on it | Partly: your working scene is kept between sessions. Named scenes are planned |

Until Bake exists, what you place is a **preview**: it's in the world while you play, and it goes when a save loads. EDGEbuilder remembers it and can put it back. See [Scenes and baking](https://edgemodders.ai/wiki/edgebuilder/scenes.html).

## Benefits

- **Build where you see it.** Place objects in the running game, with its own lighting and the game's own selection outline, instead of guessing coordinates in a file.
- **The game's own assets, no lists to download.** EDGEbuilder reads an index of about 31,500 meshes and entities from your own game files, in a few seconds, once per game version.
- **Precise placement.** A gizmo, the keys G, R and S with axis locks and typed numbers, snapping, drop to floor, and exact X, Y, Z and heading fields.
- **A free camera that leaves V alone.** Fly anywhere to place objects from any angle; V stays where V stood, and the game's HUD gets out of the way.
- **Easy to back out of.** Previews go away when a save loads, and come back only when you ask. Switch Edit off and the view, the HUD and the mouse are the game's again.
- **Part of EDGE, end to end.** REDnode runs it, REDbridge reads the game's files, EDGEdeck installs it. Baked scenes are planned to land in a REDcode project.

## How it fits into EDGE

EDGEbuilder is a **REDnode package**: an add-on for [REDnode](https://edgemodders.ai/wiki/rednode/) made of a window drawn over the game (the editor you see) and a Node mod (the part that remembers your scene and talks to the other tools). It is the first mod built on the whole EDGE platform.

| Toolkit | What it does for EDGEbuilder |
|---|---|
| [REDnode](https://edgemodders.ai/wiki/rednode/) | Runs it. Draws the editor over the game, and gives it the game calls that spawn, move and remove objects |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Reads the game's archives to build the list of assets, with each one's size and appearances. It will also write the baked files |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | Installs EDGEbuilder from its release zip. Later it will install what you bake, too |
| [REDcode](https://edgemodders.ai/wiki/redcode/) | Planned: holds your scenes in a project, and packs the bake into a mod |

## Status

| Phase | Status |
|---|---|
| B1 Browse and drop | Passed in game on 2026-10-13 |
| B2a Position | Passed in game on 2026-10-14 |
| B2b Camera | Passed in game on 2026-10-14. The fixes in 0.3.1 and 0.3.2 (the HUD after a save loads, looking across the window, the cursor held still while looking) passed their retest on 2026-10-16. 0.3.3's additions (Drop at click and others) wait for their in-game check |
| B2c Mod assets | Planned: list the objects in your mods and your open project too, not only the base game's. Its plan is still to be agreed |
| B3 Arrange and save | Not started |
| B3c NPCs and scenes through REDnode | Agreed on 2026-10-23: place NPCs, and let REDnode load EDGEbuilder's scene files so other mods can use them. Waits for REDnode's world objects work |
| B4 Bake | REDbridge's half is built but not yet tried in the game. EDGEbuilder's bake panel is not started |
| B5 Lights and more kinds | Not started. Today you can place meshes and entities only |
| B6 Comfort (favourites, prefabs, snapping) | Not started |
| B7 Scenes in REDcode with the game closed | Not started |

The latest release is **EDGEbuilder 0.3.3** (2026-10-16), on the [releases page](https://github.com/Edgemodders/EDGEbuilder/releases). 0.3.4, which finds the REDbridge that EDGEdeck fetched under EDGEdeck's new name, is built and waits for its in-game check. EDGEbuilder is a test build: a first public preview is planned after B4 (Bake). It needs [REDnode](https://edgemodders.ai/wiki/rednode/), which installs from its release zip, and game version 2.31. See [Install and set up](https://edgemodders.ai/wiki/edgebuilder/install.html).

EDGEbuilder is inspired by World Builder by keanuWheeze, a Cyber Engine Tweaks mod that showed a world editor can live inside the running game. EDGEbuilder is its own design and uses none of World Builder's code, files or data.

## In this section

| Page | |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/edgebuilder/install.html) | What you need, installing with EDGEdeck, allowing REDbridge, opening it in the game |
| [Browsing and dropping](https://edgemodders.ai/wiki/edgebuilder/browsing.html) | The asset index, search, appearances, dropping objects, the Scene tab |
| [Positioning objects](https://edgemodders.ai/wiki/edgebuilder/positioning.html) | The Edit switch, the gizmo, G R S, typed numbers, snapping, drop to floor, scale |
| [The camera and builder mode](https://edgemodders.ai/wiki/edgebuilder/camera.html) | Flying the editor camera, orbit, pan, frame, and the hidden HUD |
| [Scenes and baking](https://edgemodders.ai/wiki/edgebuilder/scenes.html) | What is kept today, and what Arrange and Bake will add |
| [Settings and keys](https://edgemodders.ai/wiki/edgebuilder/settings.html) | Every setting, button and key |
| [Troubleshooting](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html) | Symptoms and fixes |

The [EDGEbuilder docs](https://edgemodders.github.io/EDGEbuilder/), with the [design](https://edgemodders.github.io/EDGEbuilder/design.html) and the results of each in-game test, are the reference this section draws on.
