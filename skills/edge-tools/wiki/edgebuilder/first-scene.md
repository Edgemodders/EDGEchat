<!-- Copied from EDGEweb's docs/wiki/edgebuilder/first-scene.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/first-scene.html (reviewed 2026-11-23) -->

# Your first scene

This page takes you through EDGEbuilder once, start to finish. You'll build a small stack of crates, copy it, and bake it into the world, so the crates are in Night City and stop V even with EDGEbuilder closed.

It takes about 20 minutes. Steps 1 to 9 need no restart and nothing but EDGEbuilder, so you can stop after them. Steps 10 to 12 bake the scene, and need two game restarts.

The other pages explain each control in full. Here you only need to follow the steps.

| On this page | |
|---|---|
| [Before you start](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#before-you-start) | What to have ready |
| Steps [1](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#1-check-the-three-pills), [2](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#2-make-a-scene), [3](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#3-find-a-crate-and-drop-it) | Check the pills, make a scene, drop a crate |
| Steps [4](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#4-switch-edit-on-and-fly), [5](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#5-move-the-crate), [6](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#6-make-a-small-stack) | Fly the camera, move the crate, build a stack |
| Steps [7](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#7-group-the-stack-and-name-it), [8](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#8-copy-the-stack-somewhere-else), [9](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#9-undo-a-mistake) | Group, copy and paste, undo |
| Steps [10](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#10-bake-it-into-the-world), [11](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#11-see-it-in-the-game), [12](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#12-change-it-and-bake-again) | Bake, see it in the game, change it |
| [Clean up](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#clean-up) | Taking the crates out again |
| [Where next](https://edgemodders.ai/wiki/edgebuilder/first-scene.html#where-next) | |

## Before you start

| You need | Where to get it |
|---|---|
| EDGEbuilder installed, with its permissions allowed | [Install and set up](https://edgemodders.ai/wiki/edgebuilder/install.html) |
| A save where V stands somewhere quiet and open: an empty lot, a car park, a quiet alley | Your own saves. Busy streets work too, but traffic gets in the way |

Only for the bake, steps 10 to 12:

| You need | Where to get it |
|---|---|
| [REDcode](https://edgemodders.ai/wiki/redcode/) in VS Code, with a project open | [REDcode projects](https://edgemodders.ai/wiki/redcode/projects.html). Any project will do, even a new empty one |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) set up | REDcode installs the baked mod through it. See [Install EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html) |
| ArchiveXL deployed in the game | The game reads a bake through it. EDGEdeck's **Get the frameworks** includes it: see [step 1 of Install](https://edgemodders.ai/wiki/edgebuilder/install.html#1-get-the-frameworks-and-redbridge) |

Now load your save and press **F10**. A cursor shows: REDnode's windows now take the mouse. Open the launcher (the **REDNODE** tab) and switch **EDGEbuilder** on. If EDGEbuilder isn't in the launcher, see [Open it and allow its permissions](https://edgemodders.ai/wiki/edgebuilder/install.html#3-open-it-and-allow-its-permissions).

## 1. Check the three pills

At the top of EDGEbuilder's panel, three pills say whether everything is ready:

1. The first says **World ready**. If it says **Load a save**, load one.
2. The second says **REDbridge** and its version, in green. If it says **Allow REDbridge (hover)**, see [Open it and allow its permissions](https://edgemodders.ai/wiki/edgebuilder/install.html#3-open-it-and-allow-its-permissions).
3. The third counts the game's models, about **31,500 assets**. The first time, it says **Indexing...** for a few seconds.

When all three are green, you're ready.

(Screenshot on the wiki, "Ready to build": EDGEbuilder's panel at the right of the game, with its three pills green: World ready, REDbridge 0.12.1, 31,601 assets, and the Assets tab below them.)

## 2. Make a scene

A **scene** is the list of everything you place. EDGEbuilder saves it after every change, so you never lose work. Give your first one a name.

1. Open the **Library** tab. It shows a tree of the places a scene can be kept.
2. If it says **No Library folder yet**, press **Make the Library**. That makes `Documents\EDGE Library`, a folder the EDGE tools share for your work. (You can skip it: click **This PC** in the tree instead, and the scene is kept in EDGEbuilder's own folder.)
3. Click **Library** at the top of the tree, so new things go there.
4. In the **Picked** panel, type `Construction Crates` in **Name**.
5. Press **New scene here**.

**What you should see:** the message line says **New scene Construction Crates in Library**, and the scene shows in the tree with an **open** tag. On the **Scene** tab, the field labelled **Open scene's name** now reads Construction Crates.

(Screenshot on the wiki, "A new scene in the Library": The Library tab: the tree with Library at the top and Construction Crates under it tagged open, the Picked panel with Construction Crates typed in Name, and the New scene here button.)

## 3. Find a crate and drop it

1. Open the **Assets** tab and type `cargo crate`. Typing anywhere on the tab goes into the search box.
2. Click the **Meshes** tab above the results, so only meshes are listed. A **mesh** is a plain 3D model: it has a look, but no behaviour of its own.
3. Click `cargo_crate_a.mesh` in the list. The **Picked** panel shows its size in metres, as three numbers. The third is its height: remember it for step 6. Below the size are its **appearances**, the colours and labels the same crate comes in.
4. Click an appearance you like.
5. Press **Drop where I look**.

**What you should see:** the crate lands about 3 m in front of V, facing V. The message line says how long it took, for example **Dropped cargo_crate_a.mesh in 412 ms.**, and the **Scene** tab opens with the crate selected. The game draws its outline around it.

The crate is a **preview**: an object EDGEbuilder places in the running game while you build. Only you see it. You'll make the crates permanent in step 10.

(Screenshot on the wiki, "The crate dropped": A cargo crate standing on the ground in front of V, outlined by the game, and the Scene tab with cargo_crate_a in the list and the Selected panel showing its position.)

## 4. Switch Edit on and fly

1. Turn on the **Edit** switch at the right end of the panel's title bar. The view changes to EDGEbuilder's own camera, the game's HUD goes away, and V stays where V stood. The screen goes very slightly darker: the mouse now works in the world, not in the game.
2. Hold the **right mouse button** and move the mouse to look around.
3. Still holding it, press **W**, **A**, **S**, **D** to fly, and **E** to rise. Hold **Shift** to go faster.
4. Fly up a few metres and look down at the crate.

A help line at the bottom of the screen always says what you can do next.

(Screenshot on the wiki, "Looking down on the crate": Edit on: the editor camera a few metres above the crate, no HUD, V standing beside it, the help line at the bottom centre.)

## 5. Move the crate

The selected crate has a **gizmo**: handles drawn on it that you drag. It has red, green and blue arrows, and a yellow ring.

1. Click the crate if it isn't selected.
2. Drag the **red arrow**. The crate slides along it. Let go to keep it there.
3. Drag the **yellow ring** to turn the crate. Hold **Ctrl** while you drag and it turns in 15° steps.
4. Now with keys: press **G** (the crate follows the mouse), then **Z** (only up and down), type `2`, and press **Enter**. The crate rises exactly 2 m.
5. Press **Ctrl+E**. The crate drops back onto the ground.

If you get it wrong, **Esc** or a right-click puts the crate back while you're still moving it. After that, **Ctrl+Z** undoes it.

(Screenshot on the wiki, "Moving with the gizmo": The selected crate with its red, green and blue arrows, the yellow ring and the thin cyan box, the mouse dragging the red arrow, and the help line naming the move.)

## 6. Make a small stack

1. With the crate selected, press **Ctrl+D**. A copy follows the mouse.
2. Move it beside the first crate and click to put it down.
3. Press **Ctrl+D** again and put a third crate beside the others.
4. For a fourth on top, press **Ctrl+D** and click to put the copy on the ground near the others.
5. Lift it by one crate's height: press **G**, then **Z**, type the height you noted in step 3 (about `1`), and press **Enter**.
6. Drag its red and green arrows until it sits on the crates below.

Why not **Ctrl+E** here? Drop to floor lands on the game's own ground and objects. Previews aren't solid, so the crate would fall through the ones below.

(Screenshot on the wiki, "A small stack": Three cargo crates side by side on the ground and a fourth on top of them, the top one selected with its gizmo.)

## 7. Group the stack and name it

A **group** keeps objects together, so one click picks them all.

1. Hold **Shift** and drag a box around the four crates. All four are selected, and the Scene tab says **4 selected**.
2. Press **Ctrl+G**. The message says **Grouped 4 objects as Group 1**.
3. In the **Selected** panel, the **Group name** field holds **Group 1**. Type `Crate stack` and press **Enter**.
4. Click any one crate: the whole stack is selected. **Alt+click** picks one crate on its own.

**What you should see:** in the Scene tab's list, **Crate stack** shows as a folder with its four crates under it. The arrow beside it folds them away.

(Screenshot on the wiki, "The group in the Scene tab": The Scene tab's list with Crate stack as a group, group of 4 at its right, its four crates under it, and Group name in the Selected panel reading Crate stack.)

## 8. Copy the stack somewhere else

1. Click the stack to select it, and press **Ctrl+C**. The message says **Copied 4 objects. Ctrl+V pastes them where the cursor points.**
2. Fly about 10 metres away.
3. Point the cursor at the ground there and press **Ctrl+V**.

**What you should see:** a second stack on the ground under the cursor, already selected, as a new group of the same name.

(Screenshot on the wiki, "Two stacks": The camera looking at two identical stacks of four crates a few metres apart, the newer one selected.)

## 9. Undo a mistake

1. With the new stack selected, press **Delete**. It's gone.
2. Press **Ctrl+Z**. It's back, where it was.
3. Press **Ctrl+Y**, and it's deleted again. Press **Ctrl+Z** once more to keep it.

Undo covers your last 100 changes, until you close the game. The **Undo** and **Redo** buttons on the Scene tab do the same.

Your scene has been saved after every step. **Ctrl+S** confirms it, and the Scene tab says where: **In Library. Saved after every change.**

You can stop here. The scene opens again by itself the next time you start EDGEbuilder.

## 10. Bake it into the world

So far the crates are previews: only you see them, while EDGEbuilder runs, and V walks through them. **Baking** writes the crates into your REDcode project as a piece of the game world. When the project is packed into a mod, anyone who installs that mod gets the crates.

1. Make sure your REDcode project is open in VS Code.
2. Open the **Bake** tab. At the top it names the scene, **Construction Crates: 8 objects**, and the project it bakes into.
3. Read the checks under it. One says **8 meshes will stop V, bullets and cars. Entities keep their own collision.** New meshes start **Solid when baked**, so your crates will be solid. A red check stops the bake and says what to fix.
4. Press **Bake**.

**What you should see:** the message says **Baked Construction Crates: 8 objects into** your project, and **The last bake** lists the files it wrote.

(Screenshot on the wiki, "The Bake tab": The Bake tab for Construction Crates, 8 objects, into the REDcode project, with the checks (8 meshes will stop V, bullets and cars), the Bake button, and the project's bakes listing Construction Crates.)

## 11. See it in the game

The game reads a bake only as it starts, so this step needs a restart.

1. Switch **Edit** off, and quit the game.
2. In REDcode, press **Pack and Install** (the rocket button in the Project view). It packs the project into a mod and installs it with [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/). Wait for REDcode's message that the mod was installed. In EDGEdeck, the project now shows as a mod with the version `dev`, deployed.
3. Start the game and load the same save.
4. Walk V up to the crates and try to walk through them.

**What you should see:** the crates stop V. So do bullets and cars. If you open EDGEbuilder, the Bake tab says **Its bake is in the game**, and EDGEbuilder places no previews for this scene, so no crate is there twice.

Your crates are now part of the game, with EDGEbuilder closed or even uninstalled.

(Screenshot on the wiki, "Baked crates in the world": V standing against the baked stack of crates in first person, with the game's HUD back and EDGEbuilder's panel closed.)

## 12. Change it and bake again

A baked crate can't be moved in the game. You move its preview, then bake again.

1. Open EDGEbuilder, open the **Scene** tab and press **Rebuild previews**. The previews come back, so you can edit the scene. Each crate is now there twice, the baked one and its preview, so it may flicker. That is expected, and ends at the next game start.
2. Switch **Edit** on, select one stack and move it a few metres.
3. Open the **Bake** tab. It says **The scene changed since: bake again to bring it in.**
4. Press **Bake**, quit the game, **Pack and Install**, and start again.

**What you should see:** the stack in its new place, with nothing left at the old one.

(Screenshot on the wiki, "The scene changed since its bake": The Bake tab's state line: Baked with the date and 8 objects, then The scene changed since: bake again to bring it in.)

## Clean up

To take the crates out of your game again:

1. On the **Bake** tab, under **Bakes for** and your project's name, press the trash icon beside **Construction Crates**, then **Yes**.
2. Quit the game. In REDcode, press **Pack and Install** again.
3. Start the game. The baked crates are gone. Your save games are not affected.

The scene itself is still in the Library. While it is open, its crates show as previews again. Press **Close** on the Scene tab to take those out of the world too. See [After a bake](https://edgemodders.ai/wiki/edgebuilder/baking.html#after-a-bake).

## Where next

| To learn | Read |
|---|---|
| Every way to search, and your mods' models | [Browsing and dropping](https://edgemodders.ai/wiki/edgebuilder/browsing.html) |
| Placing people (NPCs) | [People](https://edgemodders.ai/wiki/edgebuilder/browsing.html#people-npcs) |
| Exact moves, turns and scales | [Positioning objects](https://edgemodders.ai/wiki/edgebuilder/positioning.html) |
| Orbit, pan and frame with the camera | [The camera and builder mode](https://edgemodders.ai/wiki/edgebuilder/camera.html) |
| Selecting, groups, copy and paste in depth | [Arranging a scene](https://edgemodders.ai/wiki/edgebuilder/arranging.html) |
| Keeping scenes, and the Library | [Scenes and the Library](https://edgemodders.ai/wiki/edgebuilder/scenes.html) |
| Solid objects, draw distance, sharing a bake, taking a bake out | [Baking](https://edgemodders.ai/wiki/edgebuilder/baking.html) |
| When something goes wrong | [Troubleshooting](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html) |
