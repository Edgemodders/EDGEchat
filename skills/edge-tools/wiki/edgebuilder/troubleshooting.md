<!-- Copied from EDGEweb's docs/wiki/edgebuilder/troubleshooting.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html (reviewed 2026-11-23) -->

# Troubleshooting EDGEbuilder

Find the part where you are stuck, then what you see in the left column. If it isn't here, the [last section](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#anything-else) says where to look and where to ask.

| Where you are stuck | |
|---|---|
| [Setting up and the three pills](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#setting-up-and-the-three-pills) | EDGEbuilder is missing, or a pill isn't green |
| [Finding assets](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#finding-assets) | Search, mods, the project |
| [Dropping](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#dropping) | A drop fails or lands wrong |
| [Keys and mouse](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#keys-and-mouse) | A key or a click does nothing |
| [The camera and the HUD](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#the-camera-and-the-hud) | A stuck view, a missing HUD, other windows |
| [Scenes and previews](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#scenes-and-previews) | Objects gone, or not in world |
| [People](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#people) | NPCs |
| [Importing a model](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#importing-a-model) | Import is off, or the prop isn't in the game |
| [Baking](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#baking) | The Bake tab, a bake that doesn't show, isn't solid or pops in |
| [Anything else](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#anything-else) | The logs, and where to ask |

**Start with the pills.** The three pills at the top of the panel say what's wrong most of the time. Hover one that isn't green for the reason.

## Setting up and the three pills

| You see | Do this |
|---|---|
| EDGEbuilder isn't in the launcher | A new package is listed only in the Mod Manager. Press **F10**, open the launcher, switch on **Mod Manager**, click **EDGEbuilder**, and switch it on and **Pin to launcher** on. See [Open it and allow its permissions](https://edgemodders.ai/wiki/edgebuilder/install.html#3-open-it-and-allow-its-permissions) |
| EDGEbuilder isn't in the Mod Manager either | It isn't in the game folder. In EDGEdeck, check that EDGEbuilder is ticked and deployed. See [Install EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/install.html#2-install-edgebuilder) |
| First pill: **No game** | REDnode isn't connected to a running game. Searching still works, dropping doesn't. Start the game with REDnode deployed |
| First pill: **Load a save** | EDGEbuilder works in the world, not in the main menu. Load a save |
| First pill: **Needs Codeware 1.14+** | Add Codeware to EDGEdeck, deploy, and start the game again. In REDnode's Mod Manager, EDGEbuilder's **Requires** line shows a tick when it's right |
| Second pill: **Allow REDbridge (hover)** | You haven't allowed EDGEbuilder to use REDbridge. In the Mod Manager, click **EDGEbuilder**, and under **Permissions** switch **Allowed** on for the REDbridge line. EDGEbuilder looks again every five seconds |
| Second pill: **No REDbridge** | None was found on this PC. In EDGEdeck, press **Get REDbridge** in the Set up group. See [Get the frameworks and REDbridge](https://edgemodders.ai/wiki/edgebuilder/install.html#1-get-the-frameworks-and-redbridge) |
| Second pill: **REDbridge failed** | Hover the pill to see the error it reported. Press **Restart REDbridge** on the Settings tab. If you typed a path in **REDbridge.exe**, empty it and press **Save and restart REDbridge**. If the error says the game folder wasn't found, type it in **Game folder**. For more, see [REDbridge's troubleshooting](https://edgemodders.ai/wiki/redbridge/troubleshooting.html) |
| Third pill: **No index** or **Index failed** | The list of models needs REDbridge. Fix the second pill first, then press **Rebuild asset index** on the Settings tab |

## Finding assets

| You see | Do this |
|---|---|
| Search finds nothing | Check the third pill (see above). Then check the two rows of tabs: **Game** hides your mods' files, **Mods** hides the game's, and **Meshes**, **Entities** or **NPCs** hide the other kinds. Click **All** and **Everywhere** |
| A light, a decal or a sound isn't listed | Only meshes, entities and people can be placed today. The other kinds are planned |
| The **Mods** tab doesn't list my mod | EDGEbuilder reads the archives in the game's `archive\pc\mod` folder and REDmod's `mods\<name>\archives`. A mod in EDGEdeck counts once it's deployed. Only meshes and entities are listed, so a mod that changes only textures or items has nothing to show |
| **No REDcode project open**, though one is | See [The Bake tab doesn't see my REDcode project](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#the-bake-tab-doesnt-see-my-redcode-project): the cause is the same |
| A mod's model has no size or appearances | Your REDbridge is older than 0.12.0, most likely a copy another tool fetched a while ago. Update it: EDGEdeck's **Update REDbridge**, or **Update REDbridge** in REDnode's Mod Manager |
| An entity has no size, and its selection box is a 1 m cube | Many entities have no size in the game's own files. They drop and move as usual |
| My project's file shows the game's version, or doesn't show | A project file is in the game only once the project is packed and loaded. Press **Pack and Play** in REDcode. See [Files from your project](https://edgemodders.ai/wiki/edgebuilder/browsing.html#files-from-your-project) |

## Dropping

The message line under the pills says why a drop failed:

| Message | Do this |
|---|---|
| "Not connected to the game..." | Start the game with REDnode, then load a save |
| "Load a save first." | Load a save |
| "The world is not ready yet; try again in a moment." | Wait a moment after a save loads, and try again |
| "No scene is open: open one or make one on the Library tab." | You closed the scene. Open one, or make a new one, on the Library tab |
| "Drop failed, nothing was added: ..." | The game refused the drop, and the rest of the line says why. Nothing is left behind. If it keeps happening with one asset, report it with the log |

| You see | Do this |
|---|---|
| **Drop at click** or **Drop to floor** finds nothing | The game makes its ground solid only near the camera, even where you can see it from afar. Fly closer and try again |
| An object dropped to the floor falls through another object of mine | Previews aren't solid. Drop to floor lands only on the game's own ground and objects. Lift the object with **G**, **Z** and a number instead |

## Keys and mouse

| You see | Do this |
|---|---|
| **Edit** does nothing, or the mouse still moves V | REDnode's windows don't have the mouse. Press **F10** once, so a cursor shows, then switch **Edit** on |
| G, R, S, Delete or a Ctrl key does nothing | Check three things. **Edit** must be on. The cursor must not be in a text field of the panel: click in the world first. And REDnode's windows must have the keyboard: press **F10** |
| Ctrl+Z undoes my typing, not the move | The cursor is still in a field. Click in the world, then press Ctrl+Z |
| **Esc** made the cursor vanish and the game took over | With nothing in progress, Esc leaves REDnode's interactive mode. Press **F10** to come back. To cancel a move, press Esc while it is still going, or right-click |
| Pressing **S** says "Only meshes scale" | An entity's size is fixed by its own file. Only meshes can be scaled |
| A person doesn't follow the gizmo while I drag | That is how people move: see [People](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#people) |
| My clicks seem to do nothing, and a bar shows at the top | A long change is running, and your clicks wait behind it. Wait, or press **Stop**. See [When EDGEbuilder is busy](https://edgemodders.ai/wiki/edgebuilder/arranging.html#when-edgebuilder-is-busy) |

## The camera and the HUD

| You see | Do this |
|---|---|
| "No camera yet" in the help line | EDGEbuilder hasn't got the game's camera yet. Load a save if you haven't. After a save loads, it picks the camera up by itself |
| V's view is stuck on the editor camera, or the HUD is gone, with EDGEbuilder closed | EDGEbuilder stopped while Edit was on. **Load a save**: that gives V's camera back. EDGEbuilder also repairs it by itself the next time it starts. See [If V's view gets stuck](https://edgemodders.ai/wiki/edgebuilder/camera.html#if-vs-view-gets-stuck) |
| The right mouse button doesn't look around | **Use EDGEbuilder's own camera** is off on the Settings tab. Switch it on |
| The HUD stays on screen with Edit on | **Hide the game's HUD** is off on the Settings tab. Switch it on |
| After F10, V moves but the view doesn't | Update EDGEbuilder: from 0.12.5, F10 with Edit on gives V the view back, and F10 again returns to the editor camera |
| I can't click another REDnode window while Edit is on | EDGEbuilder's layer covers it. Switch **Edit** off, use the other window, and switch Edit back on |
| Other REDnode windows stay on screen while Edit is on | EDGEbuilder isn't allowed solo mode. See [Builder mode and other windows](https://edgemodders.ai/wiki/edgebuilder/camera.html#builder-mode-and-other-windows) |
| <a id="edgebuilder-disappears-when-i-open-a-menu"></a>EDGEbuilder disappears when I open a menu | That is on purpose. The whole window, with the gizmo, hides while the game shows a menu: pause, Settings, inventory or map. It comes back when the menu closes, with Edit and the camera as they were. A move under way when the menu opened is cancelled |
| The editor doesn't fill my ultrawide screen | It should cover the whole game view at any width. Check that EDGEbuilder and REDnode are up to date, and tell us on Discord |

## Scenes and previews

| You see | Do this |
|---|---|
| My objects are gone after loading a save | They're still in the scene, and they come back by themselves a moment after the save is in. If any stay missing, press **Rebuild previews** on the Scene tab |
| An object says **not in world**, and **Rebuild previews** doesn't bring it back | The game couldn't place it. Most often it comes from a mod that isn't installed any more: look at the **This scene needs:** line on the Scene tab, and install or deploy that mod. `rednode-mods.log` says why each one failed |
| Rebuild previews or Undo leaves objects out | The message says how many the game didn't place. They're still in the scene: press **Rebuild previews** again |
| "The scene open last time ... is no longer there" | The scene's file was moved, renamed or deleted outside the game, or the Library folder was moved. EDGEbuilder opened another scene instead. Put the file back and press **Refresh** on the Library tab. If you moved the Library, set **Library folder** on the Settings tab |
| "The scene file could not be read" | The file was damaged. EDGEbuilder set the damaged file aside, beside the scene, with `.unreadable-` and the time added to its name, and started the scene empty. Send us that file when you report it |
| An object I don't remember placing is in the scene | A scene is kept between sessions, including drops from earlier ones. Select it on the Scene tab and press **Delete** |
| My scene's previews came back after I took its bake out | That is on purpose: without a bake in the game, the open scene shows its objects as previews again, so you can keep editing. Press **Close** on the Scene tab to take them away. The scene stays saved |

## People

| You see | Do this |
|---|---|
| A person doesn't follow the gizmo while I drag | That is how people move. Only the gizmo moves while you drag. When you let go, the person steps to the new place. The game moves its people only through their own behaviour, so a live drag would make them jump |
| A person won't tilt or scale | People always stand upright, and can't be scaled |
| A person I placed is gone after baking | People are not baked. They show only while EDGEbuilder is running and their scene is open. If the scene's bake is in the game, its previews stay off, people included: press **Rebuild previews** to see them |
| The NPCs tab is empty | The list of people is read from the game the first time, which takes a few seconds and needs REDbridge. Check the second pill |

## Importing a model

| You see | Do this |
|---|---|
| **Import** is greyed out | Import needs a REDcode project open in VS Code. Open one, then press **Refresh** on the Bake tab. It is also off while something else is busy |
| My GLB isn't on the Library tab | The tree lists GLBs in your Library's folders, in the open project's `source\raw` and props on EDGEfab's Desk. Anywhere else, type the file's full path in **Import a GLB from anywhere** and press **Pick** |
| "It is not in the game yet", and Drop says so too | EDGEbuilder may not put the prop into the game. In REDnode's Mod Manager, EDGEbuilder, **Permissions**, allow **Archives**, then press **Drop**: it puts the prop in, with no second Import |
| An Import takes minutes | Making textures is slow: about 10 s for each large (4096 px) texture. A model with small textures takes seconds. **Stop** ends it within one texture |
| The prop is huge or tiny | Its file has no real size. Import it again with the same name and a **Height** |
| A placed copy didn't change after a second Import | Use the same **Name** as before: a new name makes a second prop beside the first |

See [Importing a model](https://edgemodders.ai/wiki/edgebuilder/importing.html).

## Removing doors

| You see | Do this |
|---|---|
| The World tab's list is empty, or a click on a door picks nothing | The list shows doors within 30 m of **V**, not the camera: walk V closer, then **Scan Doors** (Look again before 0.13.2). **Doors** must be on. With Edit on, click the door itself |
| The World tab says the registry "knows no part of the world yet" | EDGEbuilder started after your save loaded, so REDnode didn't see that part of the world load. **Load the save again**, or fast travel, and pick the door again |
| **Remove from world** is greyed | No scene is open: a removal is kept in the open scene. Open or make one on the Library tab. Or the panel says the door's node was not found: move away and back, or load the save again |
| A door I brought back looks right but doesn't open | It is the door's **stand-in**: after a save loads with a door removed, the real door never comes in. Fast travel away and back, or load a save. See [Stand-ins](https://edgemodders.ai/wiki/edgebuilder/doors.html#stand-ins) |
| A removed door is back | Removals last while their scene is open in EDGEbuilder, or once baked. Open the scene, or bake it. Switching EDGEbuilder off brings every unbaked door back |
| The Bake tab says REDbridge "cannot bake removals" | Update REDbridge to 0.16.0 or later: **Get REDbridge** in EDGEdeck, or **Update REDbridge** in REDnode's Mod Manager. Then **Refresh** |
| A baked door is still there in the game | ArchiveXL must be in the game, and the project packed and installed after the bake. ArchiveXL's log (`red4ext\plugins\ArchiveXL`) says "All patches have been applied" for each part of the world it changed |

## Baking

| You see | Do this |
|---|---|
| The Bake tab says "No scene is open" | On the **Library** tab, pick a scene and press **Open**, or make one with **New scene here** |
| The **Bake** button is off, or a check is red | A red check stops the bake. [The checks](https://edgemodders.ai/wiki/edgebuilder/baking.html#the-checks) lists each one with its fix |
| The Bake tab says "No REDcode project is open" | A bake goes into a REDcode project. Open or make one in REDcode, in VS Code, then press **Refresh** on the Bake tab. If it still says so, see [below](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#the-bake-tab-doesnt-see-my-redcode-project) |
| The Bake tab bakes into the wrong project | The tab follows the project REDcode tells it about. With several VS Code windows open, that is the last one you used. Close the other windows. The line under the scene's name says which project: hover it for the folder |
| Baked objects pop in close, or vanish as I walk away | Each baked object is drawn only within its **Seen from** distance: about 40 m for a crate when the field is empty. Select the objects, type a larger distance in **Seen from, m**, and bake again. See [Seen from](https://edgemodders.ai/wiki/edgebuilder/baking.html#seen-from). If the Bake tab warns that REDbridge does not pass Seen from on, update REDbridge first. Hills and buildings hide objects too: check from the editor camera, high above |
| Objects are there twice, or flicker | The bake and the scene's previews are both in the world. That happens after **Rebuild previews** on a baked scene. Close the scene, or restart the game |
| A bake I renamed is in the world twice | A bake is named after its scene. After a rename, bake again, then take the old bake out with its trash icon in the **Bakes for** list, and Pack and Install |

<a id="my-bake-doesnt-show-in-the-game"></a>

### My bake doesn't show in the game

1. **Restart the game.** A bake comes in only as the game starts. Loading a save isn't enough, and neither is REDcode's **Pack and Play**.
2. **Pack and Install** after every bake. Baking writes into the project. Packing and installing puts it in the game.
3. **ArchiveXL** must be deployed in the game: the game reads a bake through it. In EDGEdeck, look for it in the Frameworks group. See [What you need to bake](https://edgemodders.ai/wiki/edgebuilder/baking.html#what-you-need-to-bake).
4. **Packed as a REDmod?** If you switched REDcode's `redcode.pack.redmod` setting on, the game must start with `-modded`. EDGEdeck's **Run game** does that for you.
5. Still nothing? Look at the Bake tab after the game starts. **Its bake is in the game** means the game has it, so look where the objects were placed: press **Objects** on the Library tab and click an object twice to fly to it. If the line isn't there, check in EDGEdeck that the project's mod is ticked and deployed.

### V walks through a baked mesh

| Cause | Fix |
|---|---|
| **Solid when baked** was off for that mesh | Select it on the Scene tab, switch it on, bake again, Pack and Install, restart |
| The mesh has no collision data | The Scene tab says **No collision data, so this mesh can't be solid.** Use another mesh, or an entity that is solid in the game, such as `crate_red.ent`. See [The Solid switch](https://edgemodders.ai/wiki/edgebuilder/baking.html#the-solid-switch) |
| REDbridge is older than 0.12.0 | The Bake tab warns that it writes no solid meshes. Update REDbridge, then bake again |
| It's a preview, not the bake | Previews are never solid. The Bake tab says whether the scene's bake is in the game |

### The Bake tab doesn't see my REDcode project

REDcode tells EDGEbuilder which project is open through a small REDnode package of its own, called `redcode`, which it puts in the game by itself.

1. Press **Refresh** on the Bake tab. It asks REDcode again.
2. If the tab says REDcode's package is not in the game, open VS Code's settings and search for REDcode. **Game Path** must be your game folder, and **REDnode: Install Package** must be on (it is by default). REDcode's output then says "Installed REDcode's REDnode package". Press **Refresh** again.
3. In REDnode's Mod Manager, check that a package called `redcode` is listed.
4. With several VS Code windows, the last one you used with a project open counts.
5. A project you just made with **New Project** opens in VS Code's **Restricted Mode** until you trust its folder, and REDcode stays off until then. Trust the folder when VS Code asks, and the project shows up in EDGEbuilder by itself.

## Anything else

REDnode writes its logs to `red4ext\logs` in the game folder (the folder where Cyberpunk 2077 is installed). Close the game before you read them.

| Log | What's in it |
|---|---|
| `rednode-mods.log` | EDGEbuilder's own lines, marked `[edgebuilder]`: REDbridge, the list of models, drops, builder mode |
| `rednode-overlay.log` | REDnode's side: the program that runs EDGEbuilder's window |
| `rednode-<date>.log` | REDnode inside the game. Useful when the cursor misbehaves |

To find EDGEbuilder's lines, open `rednode-mods.log` in Notepad and search for `[edgebuilder]`. While the game runs, REDnode's [Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log) window shows the same lines.

Still stuck? Ask on [Discord](https://discord.gg/63qP3Erw43) or [open an issue](https://github.com/Edgemodders/EDGEbuilder/issues). Say which EDGEbuilder, REDnode and REDbridge versions you have, and paste the `[edgebuilder]` lines.
