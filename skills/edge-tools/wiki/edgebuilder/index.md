<!-- Copied from EDGEweb's docs/wiki/edgebuilder/index.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/ (reviewed 2026-11-23) -->

# EDGEbuilder

EDGEbuilder is a world builder for Cyberpunk 2077 that runs inside the game. You search the game's own 3D models and people, and your mods', drop one into the world in front of you, and move, turn and scale it until it sits right. You save your work as named scenes, and you can bake a scene into a mod, so the objects are part of Night City for anyone who installs it.

(Screenshot on the wiki, "EDGEbuilder in the game": The game with Edit on: a cargo crate selected with its gizmo (red, green and blue arrows and a yellow ring), the EDGEbuilder panel on the right with its six tabs (Assets, Scene, Library, Bake, Settings, About) and the Assets tab open, and the help line at the bottom centre.)

**New here?** Read this page, then [Install and set up](https://edgemodders.ai/wiki/edgebuilder/install.html), then build [your first scene](https://edgemodders.ai/wiki/edgebuilder/first-scene.html). The first scene takes about 20 minutes. You don't need to code.

## What it's for

Night City is built from hundreds of thousands of pieces: crates, signs, lamps, vending machines, walls. Adding your own furniture to an apartment, a barricade to a street or props for a photo has always meant guessing coordinates in a file, or learning a separate 3D tool, then starting the game to see whether it worked.

EDGEbuilder lets you do it where you can see it: in the game, with the real lighting, from any angle.

| You want to | You do this | Read |
|---|---|---|
| Find something to place | Search the game's models, the game's people, and the models in your mods | [Browsing and dropping](https://edgemodders.ai/wiki/edgebuilder/browsing.html) |
| Place a model of your own | Import a GLB from Blender, a store or an AI model maker into the game | [Importing a model](https://edgemodders.ai/wiki/edgebuilder/importing.html) |
| Put it in the world | Pick it and drop it where you look, or where you click | [Browsing and dropping](https://edgemodders.ai/wiki/edgebuilder/browsing.html#drop-it) |
| Get it exactly right | Move, turn and scale it with the mouse, with keys or with typed numbers | [Positioning objects](https://edgemodders.ai/wiki/edgebuilder/positioning.html) |
| See it from anywhere | Fly a camera of EDGEbuilder's own, while V stays put | [The camera and builder mode](https://edgemodders.ai/wiki/edgebuilder/camera.html) |
| Build something bigger | Select several objects, group them, copy and paste them, undo | [Arranging a scene](https://edgemodders.ai/wiki/edgebuilder/arranging.html) |
| Keep your work | Save it as a named scene, and open it again later | [Scenes and the Library](https://edgemodders.ai/wiki/edgebuilder/scenes.html) |
| Open up a doorway | Remove one of the game's own doors, see it at once, and bake the removal into your mod | [Removing the game's doors](https://edgemodders.ai/wiki/edgebuilder/doors.html) |
| Hold a door open, or shut | Open, close or lock one of the game's doors, kept while your scene is open | [Opening, closing and locking](https://edgemodders.ai/wiki/edgebuilder/doors.html#opening-closing-and-locking) |
| Find what the game placed | List the entries of a streaming sector, and pick, fly to, hide or remove one | [Sectors](https://edgemodders.ai/wiki/edgebuilder/sectors.html) |
| Make it part of the game | Bake the scene into a mod | [Baking](https://edgemodders.ai/wiki/edgebuilder/baking.html) |

Two words you will meet on every page:

- A **preview** is an object you placed that is not baked yet. Only you see it, and only while EDGEbuilder is running. Loading a save removes previews from the world, but your scene remembers them, and EDGEbuilder puts them back a moment later.
- To **bake** a scene is to turn it into a mod. After a bake, the objects are in the world without EDGEbuilder, and for anyone who installs the mod.

## Why you'd want it

- **Build where you see it.** Place objects in the running game, in its own lighting, instead of guessing coordinates in a file.
- **The game's own models, with nothing to download.** EDGEbuilder reads a list of about 31,500 models from your own game files, in a few seconds, and about 6,600 of the game's people.
- **Your mods' models too.** The models in your installed mods are listed beside the game's, tagged with the mod they come from.
- **Your own models.** Import a textured GLB and it is a prop in the running game a few minutes later, ready to drop. Change it, import it again, and every placed copy changes.
- **Precise placement.** Drag with the mouse, use the keys G, R and S, or type exact numbers. Snap to steps, and drop an object onto the floor.
- **A free camera that leaves V alone.** Fly anywhere to place objects from any angle. V stays where V stood.
- **Arrange like a 3D program.** Select several objects, group them, duplicate, copy and paste, and undo the last 100 changes.
- **Nothing is lost.** A scene is saved after every change, and opens again the next time you play.
- **Take things away too.** Remove the game's own doors, painted-on ones included, and see the doorway open at once. Restore or Undo brings a door back.
- **Doors that do what your scene needs.** Keep a door open, closed or locked while your scene is open.
- **See what a place is made of.** List everything the game placed in one piece of the world, and pick, fly to, hide or remove any of it.
- **A real mod at the end.** A baked scene works with EDGEbuilder closed or uninstalled.

## What you need, in short

| To | You need |
|---|---|
| Place and arrange objects | Cyberpunk 2077 version 2.5 on PC, [REDnode](https://edgemodders.ai/wiki/rednode/), Codeware and [REDbridge](https://edgemodders.ai/wiki/redbridge/) |
| Bake a scene into a mod, or import a model | Also [REDcode](https://edgemodders.ai/wiki/redcode/) and [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/), which run in VS Code (a free code editor), and ArchiveXL. Baking removed doors needs REDbridge 0.16.0 or later |

[Install and set up](https://edgemodders.ai/wiki/edgebuilder/install.html) has the full list, with versions and links.

## Status

**Released, as a public preview.** The latest is EDGEbuilder 0.13.2 (2026-11-23), for game 2.5, on [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/36627) and [GitHub](https://github.com/Edgemodders/EDGEbuilder/releases). Everything on these pages passed its test in the game, unless a page says otherwise.

| | |
|---|---|
| **Works today** | Meshes and entities from the game, your mods and your REDcode project. People (NPCs). The editor camera. Groups, copy and paste, undo. Named scenes. Baking into a REDcode project, with solid meshes and a draw distance for each object. Bakes kept in the EDGE Library. Importing your own 3D model. Removing the game's own doors, live and baked. Opening, closing and locking doors while a scene is open. World > Sectors. Choosing between several open REDcode projects |
| **Not baked yet** | People. They show while EDGEbuilder is running, and a bake leaves them out |
| **Coming next** | Scenes written by a program: a documented scene format and a bake from a command line, with the game closed. Then importing a model again each time you save it (Watch) |
| **Planned, not started** | Picking and changing the rest of what the game itself placed. Places for quests. Lights, decals, effects and sounds. Favourites and prefabs. Working on a scene in REDcode with the game closed |

EDGEbuilder is inspired by World Builder by keanuWheeze, a Cyber Engine Tweaks mod that showed a world editor can live inside the running game. EDGEbuilder is its own design and uses none of World Builder's code, files or data.

## How it fits into EDGE

EDGEbuilder is an add-on that [REDnode](https://edgemodders.ai/wiki/rednode/) runs inside the game. REDnode calls such an add-on a [package](https://edgemodders.ai/wiki/glossary.html#package). The other EDGE tools each do one job for it:

| Toolkit | What it does for EDGEbuilder |
|---|---|
| [REDnode](https://edgemodders.ai/wiki/rednode/) | Runs it. Draws the editor over the game, and places, moves and removes the objects |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Reads the game's files, and your mods', to build the list of models. Writes the files of a bake |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | Installs EDGEbuilder from its zip. Later it also installs the mod that holds your baked scenes |
| [REDcode](https://edgemodders.ai/wiki/redcode/) | Holds the project your bakes go into and packs it into a mod. The project's own models are listed in EDGEbuilder too |
| [EDGEfab](https://edgemodders.ai/wiki/edgefab/) | Its core, inside EDGEbuilder, prepares a model you import. Props you make with EDGEfab can be imported from its Desk |

## In this section

| Page | |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/edgebuilder/install.html) | What you need, installing, allowing its permissions, the three status pills |
| [Your first scene](https://edgemodders.ai/wiki/edgebuilder/first-scene.html) | A walk through from start to finish: make a scene, drop and stack crates, group and copy them, undo, bake them into the world |
| [Browsing and dropping](https://edgemodders.ai/wiki/edgebuilder/browsing.html) | Meshes, entities and people, search, your mods and project, appearances, dropping |
| [Importing a model](https://edgemodders.ai/wiki/edgebuilder/importing.html) | A GLB or an EDGEfab prop into your project and the game: what you need, the Import box, the wait, importing again |
| [Positioning objects](https://edgemodders.ai/wiki/edgebuilder/positioning.html) | The Edit switch, the gizmo, G R S, typed numbers, snapping, drop to floor |
| [The camera and builder mode](https://edgemodders.ai/wiki/edgebuilder/camera.html) | Flying the editor camera, orbit, pan, frame, the hidden HUD and other windows |
| [Arranging a scene](https://edgemodders.ai/wiki/edgebuilder/arranging.html) | Several objects at once, groups, duplicate, copy, cut and paste, undo and redo |
| [Scenes and the Library](https://edgemodders.ai/wiki/edgebuilder/scenes.html) | Previews and scenes, where scenes are kept, the Scene tab, the Library tab |
| [Removing the game's doors](https://edgemodders.ai/wiki/edgebuilder/doors.html) | The World tab, picking a door, Remove from world, Restore, stand-ins, baking the removals, and opening, closing and locking, with walkthroughs |
| [Sectors](https://edgemodders.ai/wiki/edgebuilder/sectors.html) | World > Sectors: finding the game's streaming sectors, the Sector drawer, picking, hiding and removing an entry |
| [Remove Doors](https://edgemodders.ai/wiki/edgebuilder/remove-doors.html) | A small REDnode app of its own, beside EDGEbuilder: remove doors near V while you play, no REDbridge or project needed |
| [Baking](https://edgemodders.ai/wiki/edgebuilder/baking.html) | Turning a scene into a mod: what you need, solid objects, draw distance, sharing, bakes in the Library |
| [Settings and keys](https://edgemodders.ai/wiki/edgebuilder/settings.html) | Every tab, setting, key and mouse control |
| [Troubleshooting](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html) | What to do when something goes wrong |

## Reference

- [EDGEbuilder docs](https://edgemodders.github.io/EDGEbuilder/): the design, and the result of each test in the game
- [Changelog](https://edgemodders.github.io/EDGEbuilder/changelog.html): what changed in each release
- [Scene format](https://edgemodders.github.io/EDGEbuilder/scene.html), for mod makers
- [Source and issues](https://github.com/Edgemodders/EDGEbuilder)
