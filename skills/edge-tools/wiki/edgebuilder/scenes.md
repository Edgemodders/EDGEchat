<!-- Copied from EDGEweb's docs/wiki/edgebuilder/scenes.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/scenes.html (reviewed 2026-11-23) -->

# Scenes and the Library

EDGEbuilder keeps everything you place in a **scene**, saves it after every change, and opens it again the next time you play. This page is about keeping scenes. Turning one into a mod is on the next page, [Baking](https://edgemodders.ai/wiki/edgebuilder/baking.html).

| On this page | |
|---|---|
| [Previews and scenes](https://edgemodders.ai/wiki/edgebuilder/scenes.html#previews-and-scenes) | What is saved, and what you see |
| [Where a scene is kept](https://edgemodders.ai/wiki/edgebuilder/scenes.html#where-a-scene-is-kept) | Library, Project or This PC |
| [The Scene tab](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-scene-tab) | The open scene: its name, its objects, the Selected panel |
| [The Library tab](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-library-tab) | Every scene you have, as one tree |
| [The Objects drawer](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-objects-drawer) | A scene's objects as a list |
| [Try it](https://edgemodders.ai/wiki/edgebuilder/scenes.html#try-it-the-library) | Folders, copies, open and close |
| [Giving a scene to someone else](https://edgemodders.ai/wiki/edgebuilder/scenes.html#giving-a-scene-to-someone-else) | |
| [Scenes with people](https://edgemodders.ai/wiki/edgebuilder/scenes.html#scenes-with-people) | And a note for mod makers |

## Previews and scenes

Two things are worth telling apart:

| | What it is | Where it lives |
|---|---|---|
| **The scene** | The list of everything you placed: which asset, which appearance, where, which way round, what size, and your groups | A file on your disk. It's saved after every change |
| **Previews** | The objects you see in the game | In the running game only. They go when a save loads or the game closes |

The scene is the record, and the previews are drawn from it. That's why EDGEbuilder can always put them back:

- **When a save loads**, the open scene's objects come back by themselves a moment later, wherever V is. The message line says how many.
- **At the next game start**, the scene you had open opens again.
- **If any are missing**, press **Rebuild previews** on the Scene tab.

> **Previews are only previews.** Without EDGEbuilder running, or for anyone else playing, the objects aren't there. Making them part of the world is what [baking](https://edgemodders.ai/wiki/edgebuilder/baking.html) is for.

(Screenshot on the wiki, "Rebuild previews": The Scene tab with objects listed as not in world, and the Rebuild previews button.)

<a id="named-scenes-and-the-library"></a>

## Where a scene is kept

Every scene has a name and a place. There are three places:

| Place | Where it is | Good for |
|---|---|---|
| **Library** | A folder of your own, shared by the EDGE tools: `Documents\EDGE Library` unless you choose another. You can make folders in it. See [The EDGE Library](https://edgemodders.ai/wiki/library.html) | Most scenes. They're kept apart from any one mod, and you can bake them into any project |
| **Project:** and its name | The open REDcode project's `source\scenes` folder, which REDcode shows as **Scenes** | A scene that belongs to one mod and travels with its project |
| **This PC** | EDGEbuilder's own data folder | Quick tests, or when you don't want a Library |

The Library is never required. Scenes work the same in all three.

**Before you name a scene.** On a fresh install, EDGEbuilder opens a scene called **Working scene**, kept on This PC, so your first drops have somewhere to go. Make a named scene when you want to keep something: see [Try it](https://edgemodders.ai/wiki/edgebuilder/scenes.html#try-it-the-library).

**With no scene open.** After **Close**, no scene is open. A drop then does nothing, and the message says **No scene is open: open one or make one on the Library tab.**

## The Scene tab

The **Scene** tab shows the open scene. From top to bottom:

| Part | What it's for |
|---|---|
| **Open scene's name** | A field holding the open scene's name. To rename the scene and its file, change the name and press **Enter**. It asks first: **Rename** or **Keep the name** |
| The line under it | Where the scene is, for example **In Library > Alleys. Saved after every change.** |
| **Save**, **Save as**, **New**, **Open**, **Close** | See the next table |
| The count | What the scene does to the world, how many groups, and how many are selected: **5 added, 2 removed, 1 group; 3 selected** means five objects of yours and two of the game's own removed |
| **World edits** | Shown when the scene removes some of the game's own objects or keeps a door open, closed or locked: each one, with **Restore** to put it back. See [Removing the game's doors](https://edgemodders.ai/wiki/edgebuilder/doors.html) |
| **This scene needs:** | Shown when the scene uses files from mods or a REDcode project. It names them. Without that mod installed, those objects can't be placed |
| **Undo**, **Redo**, **Duplicate**, **Group**, **Ungroup** | The same as their keys. See [Arranging a scene](https://edgemodders.ai/wiki/edgebuilder/arranging.html) |
| The list | Every object, with its kind at the right. Groups show as folders. Click an object to select it, Ctrl+click to add more |
| The **Selected** panel | The selected object's name, asset and numbers, and the buttons that act on it |

The scene buttons:

| Button or key | Does |
|---|---|
| **Save**, or **Ctrl+S** | Confirms the scene is saved. It's saved after every change anyway |
| **Save as**, or **Ctrl+Shift+S** | Makes a copy under a new name. The Library tab opens with the name ready: pick a folder and press **Save open scene here**. The copy becomes the open scene |
| **New** | Starts an empty scene. The Library tab opens: type a name, pick a folder, press **New scene here** |
| **Open** | Goes to the Library tab, to pick a scene |
| **Close** | Takes the scene's objects out of the world and leaves no scene open. Nothing is deleted: the scene is still saved. EDGEbuilder will not reopen it at the next start |

The Selected panel's buttons:

| Button | Does |
|---|---|
| **Apply** | Moves the object to the numbers typed in the fields. See [Typing numbers](https://edgemodders.ai/wiki/edgebuilder/positioning.html#typing-numbers) |
| **Drop to floor** | Lowers the object onto the surface below it. See [Drop to floor](https://edgemodders.ai/wiki/edgebuilder/positioning.html#drop-to-floor) |
| **Delete** | Removes the selected objects from the world and the scene. **Ctrl+Z** brings them back |
| **Rebuild previews** | Places every object that's in the scene but not in the world |
| **Clear scene** | Removes every object at once. **Ctrl+Z** brings them back, until you close the game |

**Not in world.** An object whose preview isn't in the game right now shows **not in world** in the list, in place of its kind. That happens before a save is loaded, after you pressed **Stop** on the busy bar, or when the game couldn't place it. Press **Rebuild previews**. If it stays that way, the object most likely comes from a mod that isn't installed: check the **This scene needs:** line.

**The pin.** The Selected panel has a pin in its top right corner. Pinned, the panel stays at the bottom of the tab while the list scrolls, so the numbers and buttons are always in view. It starts pinned. Click the pin to let the panel scroll with the tab. EDGEbuilder remembers your choice.

## The Library tab

The **Library** tab shows all three places as one tree: **Library** with your folders, **Project:** and the project's name while REDcode has a project open, and **This PC**. Each scene shows what it adds and removes, such as **+5 −2** (five objects added, two of the game's removed), and when it changed, and an **open** or **shown** tag.

Without a Library yet, the tab says **No Library folder yet** and offers **Make the Library**, which makes `Documents\EDGE Library`. To use another folder, see [Library folder](https://edgemodders.ai/wiki/edgebuilder/settings.html#settings) on the Settings tab.

Click a scene or a folder to pick it. The **Picked** panel under the tree then acts on it. It has a pin, like the [Selected panel](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-scene-tab).

| Button | Does |
|---|---|
| **Open** | Opens the picked scene. Two quick clicks on a scene in the tree do the same |
| **Close** | Closes the open scene |
| **Show in world** | Shows the picked scene's objects beside the one you're editing. Useful to line a new scene up against one you made earlier. They can't be selected: open the scene to change it. **Hide from world** takes them away |
| **Objects** | Slides out the [Objects drawer](https://edgemodders.ai/wiki/edgebuilder/scenes.html#the-objects-drawer) |
| **Refresh** | Looks at the folders again, after you changed them outside the game |
| **Name** | The name for a new scene or folder. The line under it says where it goes: **In Library > Alleys** |
| **New scene here** | Makes an empty scene in the picked folder, and opens it |
| **Save open scene here** | Saves a copy of the open scene in the picked folder. The copy becomes the open scene |
| **New folder** | Makes a folder inside the picked one. You can only make folders inside **Library**, not under Project or This PC |
| **Bake into Library** | Bakes the picked scene into the Library. See [Bakes in the Library](https://edgemodders.ai/wiki/edgebuilder/baking.html#bakes-in-the-library) |

(Screenshot on the wiki, "The Library tab": The Library tab: the tree with Library and two folders (Alleys, with Kabuki inside), scenes with their object counts and dates, one tagged open and one shown, Project: EDGEbuilder_Testing and This PC below, and the Picked panel with Open, Close, Show in world, Objects, Refresh, the Name field and New scene here, Save open scene here and New folder.)

## The Objects drawer

**Objects** on the Library tab slides a drawer out beside the panel. It lists every object of the picked scene, or of the open one. Its title names the scene.

| Do | What happens |
|---|---|
| **Two quick clicks** on an object | The camera flies to it and selects it. For a scene that isn't open, the scene is opened first |
| Click the **trash icon** on a row | Deletes that object, after asking, wherever it and the camera are. In a scene that isn't open, that delete can't be undone |

Use the drawer to find one object in a big scene, or to see what is where.

(Screenshot on the wiki, "The Objects drawer": The Objects drawer beside the EDGEbuilder panel, titled Objects: 200 Cargo Crates, its line saying 200 objects. Two clicks fly the camera to an object and select it, and the list of crates with a trash icon on each row.)

## Try it: the Library

1. Open the **Library** tab. If it offers **Make the Library**, press it.
2. Click **Library** in the tree. Type `Alleys` in **Name** and press **New folder**.
3. Click **Alleys**. Type `Back lot` in **Name** and press **New scene here**. It opens, empty.
4. Drop a crate or two (see [Your first scene](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#3-find-a-crate-and-drop-it)).
5. Press **Ctrl+Shift+S**. The Library tab opens with the name ready. Change it to `Back lot copy`, click **Alleys**, and press **Save open scene here**. The copy is now the open scene.
6. On the Scene tab, press **Close**. The crates leave the world.
7. On the Library tab, click **Back lot** twice quickly. It opens, and its crates come back.
8. Click **Back lot copy** and press **Show in world**. Its crates appear too, but a click on them selects nothing. Press **Hide from world**.
9. Press **Objects**. Click a crate in the drawer twice quickly: the camera flies to it and selects it.

## Giving a scene to someone else

There are two ways, for two kinds of reader:

| They | Give them |
|---|---|
| Play the game, and should just see your objects | A baked mod. See [Sharing a baked scene](https://edgemodders.ai/wiki/edgebuilder/baking.html#sharing-a-baked-scene) |
| Use EDGEbuilder, and want to open and change the scene | The scene's file. A scene is one file ending in `.scene.json`, in the folder its place names (in the Library, under `Documents\EDGE Library`). They copy it into their own Library folder and press **Refresh** on the Library tab |

Either way, if the Scene tab says **This scene needs:** a mod, they need that mod too.

Handing over a scene file follows from how scenes are stored. It was not part of the tests in the game.

## Scenes with people

A scene can hold the game's people as well as objects: see [People (NPCs)](https://edgemodders.ai/wiki/edgebuilder/browsing.html#people-npcs). They are saved with the scene and come back with it. People are not baked.

**For mod makers.** REDnode can load an EDGEbuilder scene file by itself, people included, without EDGEbuilder running. A REDnode mod does it with `world.load`, and an AI assistant with REDnode's `world_load` tool. See [Scenes, and what's near V](https://edgemodders.ai/wiki/rednode/world.html#scenes-and-whats-near-v) and the [scene format](https://edgemodders.github.io/EDGEbuilder/scene.html).

<a id="bake"></a><a id="the-solid-switch"></a><a id="seen-from"></a><a id="after-a-bake"></a><a id="bakes-in-the-library"></a>

## Baking

Baking turns a scene into a mod. It has a page of its own: [Baking](https://edgemodders.ai/wiki/edgebuilder/baking.html), with [the Solid switch](https://edgemodders.ai/wiki/edgebuilder/baking.html#the-solid-switch), [Seen from](https://edgemodders.ai/wiki/edgebuilder/baking.html#seen-from), [After a bake](https://edgemodders.ai/wiki/edgebuilder/baking.html#after-a-bake) and [Bakes in the Library](https://edgemodders.ai/wiki/edgebuilder/baking.html#bakes-in-the-library).
