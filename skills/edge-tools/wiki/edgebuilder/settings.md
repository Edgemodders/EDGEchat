<!-- Copied from EDGEweb's docs/wiki/edgebuilder/settings.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/settings.html (reviewed 2026-11-23) -->

# Settings and keys

A reference to look things up in. The pages before this one explain each part in context.

| On this page | |
|---|---|
| [The panel](https://edgemodders.ai/wiki/edgebuilder/settings.html#the-panel) | What is on each tab |
| [Settings](https://edgemodders.ai/wiki/edgebuilder/settings.html#settings) | The Settings tab |
| [Keys and mouse](https://edgemodders.ai/wiki/edgebuilder/settings.html#keys-and-mouse) | Selecting and positioning, arranging, the camera |
| [REDnode keys](https://edgemodders.ai/wiki/edgebuilder/settings.html#rednode-keys) | F10 and Esc |

## The panel

EDGEbuilder's panel sits at the right of the screen. From the top:

| Part | What it's for |
|---|---|
| The title bar, with the **Edit** switch | [The Edit switch](https://edgemodders.ai/wiki/edgebuilder/positioning.html#the-edit-switch) |
| Three status pills | The game, REDbridge and the list of models. See [Check the three pills](https://edgemodders.ai/wiki/edgebuilder/install.html#4-check-the-three-pills) |
| The message line | What just happened, or why something didn't |
| The busy bar, with **Stop** | Shows only while a long change runs. See [When EDGEbuilder is busy](https://edgemodders.ai/wiki/edgebuilder/arranging.html#when-edgebuilder-is-busy) |
| Seven tabs | Below |

### Assets tab

| Control | Does | See |
|---|---|---|
| The search box | Finds assets by name. Typing anywhere on the tab goes into it | [Search](https://edgemodders.ai/wiki/edgebuilder/browsing.html#search) |
| **All**, **Meshes**, **Entities**, **NPCs** | Narrow the results by kind | [Search](https://edgemodders.ai/wiki/edgebuilder/browsing.html#search) |
| **Everywhere**, **Game**, **Mods**, **Project** | Narrow the results by where the file comes from | [Your mods and your project](https://edgemodders.ai/wiki/edgebuilder/browsing.html#your-mods-and-your-project) |
| The **Mods** and **Project** line | Says what was found in your mods and your REDcode project | |
| The results | Click one to pick it | [Pick an asset](https://edgemodders.ai/wiki/edgebuilder/browsing.html#pick-an-asset) |
| The **Picked** panel | The picked asset's path, size and appearances | |
| **Drop where I look**, **Drop at click** | Put the picked asset in the world | [Drop it](https://edgemodders.ai/wiki/edgebuilder/browsing.html#drop-it) |
| The pin on the Picked panel | Keeps the panel at the bottom of the tab while the results scroll. On at first | [Pick an asset](https://edgemodders.ai/wiki/edgebuilder/browsing.html#pick-an-asset) |

### Scene tab

| Control | Does | See |
|---|---|---|
| **Open scene's name** | Shows the open scene's name. Change it and press Enter to rename the scene | [The Scene tab](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-scene-tab) |
| **Save**, **Save as**, **New**, **Open**, **Close** | Keep, copy, start, open and close scenes | [The Scene tab](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-scene-tab) |
| **Undo**, **Redo**, **Duplicate**, **Group**, **Ungroup** | The same as their keys | [Arranging a scene](https://edgemodders.ai/wiki/edgebuilder/arranging.html) |
| **World edits** | The game's own objects the scene removes, each with **Restore**. Shown when there are some | [Removing the game's doors](https://edgemodders.ai/wiki/edgebuilder/doors.html#removing-and-bringing-back) |
| The list | Every object and group in the scene. Click to select | |
| The **Selected** panel: **X**, **Y**, **Z**, **Heading**, **Scale** | The selected object's numbers | [Typing numbers](https://edgemodders.ai/wiki/edgebuilder/positioning.html#typing-numbers) |
| **Group name** | Shown for a group | [Groups](https://edgemodders.ai/wiki/edgebuilder/arranging.html#groups) |
| **Seen from, m** | How far away the object is drawn once baked | [Seen from](https://edgemodders.ai/wiki/edgebuilder/baking.html#seen-from) |
| **Solid when baked** | Whether a baked mesh stops V | [The Solid switch](https://edgemodders.ai/wiki/edgebuilder/baking.html#the-solid-switch) |
| **Apply** | Uses the numbers in the fields | [Typing numbers](https://edgemodders.ai/wiki/edgebuilder/positioning.html#typing-numbers) |
| **Drop to floor** | Lowers the selection onto the surface below | [Drop to floor](https://edgemodders.ai/wiki/edgebuilder/positioning.html#drop-to-floor) |
| **Delete** | Removes the selection | |
| **Rebuild previews** | Places every object that's in the scene but not in the world | [Previews and scenes](https://edgemodders.ai/wiki/edgebuilder/scenes.html#previews-and-scenes) |
| **Clear scene** | Removes every object. Ctrl+Z brings them back | |
| The pin on the Selected panel | Keeps the panel at the bottom of the tab while the list scrolls. On at first | [The Scene tab](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-scene-tab) |

### Library tab

| Control | Does | See |
|---|---|---|
| The tree | Every scene and bake in the [EDGE Library](https://edgemodders.ai/wiki/library.html), the open REDcode project and This PC | [The Library tab](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-library-tab) |
| **Make the Library** | Shown until you have a Library folder | |
| **Open**, **Close**, **Show in world**, **Objects**, **Refresh** | Act on the picked scene | [The Library tab](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-library-tab) |
| **Name**, **New scene here**, **Save open scene here**, **New folder** | Make things in the picked folder | [The Library tab](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-library-tab) |
| **Bake into Library** | Bakes the picked scene into the Library | [Bakes in the Library](https://edgemodders.ai/wiki/edgebuilder/baking.html#bakes-in-the-library) |
| **Include in project**, **Add open scene**, **Bake again**, **Delete** | Act on a picked Library bake | [Bakes in the Library](https://edgemodders.ai/wiki/edgebuilder/baking.html#bakes-in-the-library) |
| The models under the tree | GLBs in the Library and in the project's `source\raw`, and props on **EDGEfab's Desk** | [Find your model](https://edgemodders.ai/wiki/edgebuilder/importing.html#find-your-model) |
| **Import a GLB from anywhere**, **Pick** | Picks a model by its full path | [Find your model](https://edgemodders.ai/wiki/edgebuilder/importing.html#find-your-model) |
| **Name**, **Height, m**, **Solid** / **Solid, a box** / **Not solid**, **Import** | Import the picked model into the open REDcode project and the game | [Import it](https://edgemodders.ai/wiki/edgebuilder/importing.html#import-it) |
| The pin on the Picked panel | Keeps the panel at the bottom of the tab while the tree scrolls. On at first | |

### World tab

| Control | Does | See |
|---|---|---|
| **Doors**, **Painted-on doors**, **Meshes** | Which of the game's own objects a click picks and the list shows. EDGEbuilder remembers your choice | [Three kinds of door](https://edgemodders.ai/wiki/edgebuilder/doors.html#three-kinds-of-door) |
| **Nearby**, **Sectors** | The tab's two parts: the doors near V, and the game's streaming sectors | [Sectors](https://edgemodders.ai/wiki/edgebuilder/sectors.html) |
| **Scan Doors** | On Nearby: reads the doors near V again (Look again before 0.13.2) | |
| **Near V**, **Near the camera**, the text box, the kind switches and levels | On Sectors: which sectors the list shows. A click opens one in the Sector drawer | [Finding sectors](https://edgemodders.ai/wiki/edgebuilder/sectors.html#finding-sectors) |
| The list | On Nearby: the doors within 30 m of V, with their state and distance. Hover outlines one, a click picks it and flies the camera there | [Finding a door](https://edgemodders.ai/wiki/edgebuilder/doors.html#finding-a-door) |
| The **Picked in the world** panel | What you picked, where it is, and any warnings | |
| **Remove from world** | Removes the picked door from the world, kept in the open scene. Also **Delete** | [Removing and bringing back](https://edgemodders.ai/wiki/edgebuilder/doors.html#removing-and-bringing-back) |
| **Open**, **Close**, **Lock** or **Unlock** | Sets a picked working door, and the open scene keeps it that way | [Opening, closing and locking](https://edgemodders.ai/wiki/edgebuilder/doors.html#opening-closing-and-locking) |
| **Restore** | Brings back a door the scene removes, or puts a kept door back as it was | |
| **Go to** | Flies the camera to the picked door | |

### Bake tab

| Control | Does | See |
|---|---|---|
| The first two lines | The open scene, and the REDcode project it bakes into | [From scene to world](https://edgemodders.ai/wiki/edgebuilder/baking.html#from-scene-to-world) |
| **Project** | Shown when more than one REDcode window has a project open: **Follow REDcode** (the window you used last) or one project, which stays EDGEbuilder's while it is open. The Import box has the same row. Needs REDcode 0.10.15 or later | |
| The checks | What was found before the bake. A red one stops it | [The checks](https://edgemodders.ai/wiki/edgebuilder/baking.html#the-checks) |
| **Bake** | Writes the scene into the project | |
| **Refresh** | Looks at the project's bakes and the game's again, and asks REDcode which project is open | |
| **The last bake** | The files the last bake wrote | |
| **Bakes for** and the project's name | Each bake in that project (the panel was called Bakes in this project before 0.13.2), with a trash icon. A bake from the Library says **from** and its name, with **Update** when the Library's is newer | [After a bake](https://edgemodders.ai/wiki/edgebuilder/baking.html#after-a-bake) |

### Settings and About tabs

The **Settings** tab is described below. The **About** tab is a short summary of the keys. EDGEbuilder's version number is not on it: look in REDnode's Mod Manager, on EDGEbuilder's row.

(Screenshot on the wiki, "The Settings tab": EDGEbuilder's Settings tab: the REDbridge.exe and Game folder fields, Save and restart REDbridge, the While Edit is on panel with its two switches, the Library folder field with Use this folder, and the Rebuild asset index and Restart REDbridge buttons.)

## Settings

| Setting | Default | What it does |
|---|---|---|
| **REDbridge.exe** | Empty: found by itself | A path to a REDbridge of your choice. Leave it empty in nearly every case. When empty, the field shows `Automatic:` and the copy in use |
| **Game folder** | Empty: found from where REDnode runs | The game folder, for when EDGEbuilder can't find it. When empty, the field shows `Automatic:` and the folder in use |
| **Use EDGEbuilder's own camera (V stays put)** | On | Off: Edit works from V's own view. You lose flying, orbit, pan and frame |
| **Hide the game's HUD** | On | Off: the HUD stays on screen while Edit is on |
| **Library folder** | Empty until you make or choose one | The folder of the [EDGE Library](https://edgemodders.ai/wiki/library.html). Type a folder and press **Use this folder**. The choice is shared by every EDGE tool (it is stored in `%APPDATA%\EDGE\library.json`) |

| Button | What it does |
|---|---|
| **Save and restart REDbridge** | Saves the **REDbridge.exe** and **Game folder** fields, and restarts REDbridge if its path changed |
| **Rebuild asset index** | Reads the game's files again and rebuilds the list of models. Use it if assets seem to be missing |
| **Restart REDbridge** | Stops and starts REDbridge |

The two switches apply as soon as you flip them, even while Edit is on.

Below the buttons, the tab shows which REDbridge is in use, where the list of models is kept, and the path of the settings file.

## Keys and mouse

Keys work while [Edit](https://edgemodders.ai/wiki/edgebuilder/positioning.html#the-edit-switch) is on and the cursor is not in a text field of the panel. With Edit off, use the buttons on the Scene tab.

### Selecting and positioning

| Key or mouse | Does |
|---|---|
| Click an object | Select it, or its whole group. Click empty space to select nothing |
| **Ctrl+click** | Add an object to the selection, or take it out |
| **Shift+drag** | Select everything in a box |
| **Alt+click** | Select one object out of its group |
| Drag an arrow | Move along that axis (red X, green Y, blue Z) |
| Drag the ring | Turn like a turntable |
| **G**, **R**, **S** | Start moving, turning or scaling (meshes only) the selection |
| **X**, **Y**, **Z** | During G, R or S: lock to that axis. Again to unlock |
| Digits, `.`, `-`, **Backspace** | During G, R or S: type an exact amount |
| **Ctrl** | While dragging: snap to 0.25 m, 15° or 0.25 scale steps |
| **Enter** or a click | Keep |
| **Esc** or a right-click | Cancel: the object goes back |
| **Ctrl+E** | Drop the selection to the floor |
| **Delete** | Remove the selection; with a door of the game's picked, remove that door from the world |
| Click, after **Drop at click** | Drop the picked asset there. **Esc** or a right-click cancels |
| **Enter** in a Selected field | Apply it and leave the field |

### Arranging

| Key | Does |
|---|---|
| **Ctrl+A** | Select the whole scene |
| **Ctrl+G** | Group the selection |
| **Ctrl+Shift+G** | Ungroup |
| **Ctrl+D** | Duplicate: the copy follows the mouse until a click places it. **Esc** or a right-click takes it back |
| **Ctrl+C** | Copy the selection |
| **Ctrl+X** | Cut: copy, then delete |
| **Ctrl+V** | Paste where the cursor points |
| **Ctrl+Z** | Undo |
| **Ctrl+Y** or **Ctrl+Shift+Z** | Redo |
| **Ctrl+S** | Confirm the scene is saved: it's saved after every change anyway |
| **Ctrl+Shift+S** | Save a copy under a new name, which becomes the open scene |

### The camera

These need **Use EDGEbuilder's own camera** on. **F10** pauses builder mode, so V gets the view back, and F10 again returns to the editor camera: see [The camera and builder mode](https://edgemodders.ai/wiki/edgebuilder/camera.html#what-builder-mode-changes).

| Key or mouse | Does |
|---|---|
| Right mouse button held | Look around |
| Right mouse held, **W**, **A**, **S**, **D** | Fly forward, left, back, right |
| Right mouse held, **Q**, **E** | Fly down, up |
| Right mouse held, **Shift**, **Ctrl** | Faster, slower |
| Right mouse held, mouse wheel | Change the flying speed |
| Middle mouse button held | Orbit the selection, or a point 10 m ahead |
| **Shift** with the middle mouse button | Pan |
| Mouse wheel, no button held | Move closer or further |
| **F** | Frame the selection |

## REDnode keys

| Key | Does |
|---|---|
| **F10** | From play, gives REDnode's windows the mouse and keyboard (interactive mode). EDGEbuilder's Edit needs it |
| **Esc**, with nothing in progress in EDGEbuilder | Leaves interactive mode, so the game has the mouse again. Press **F10** to come back |

See [F10 and the three modes](https://edgemodders.ai/wiki/rednode/overlay.html#f10-and-the-three-modes).
