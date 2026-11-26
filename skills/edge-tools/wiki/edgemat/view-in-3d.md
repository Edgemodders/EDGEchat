<!-- Copied from EDGEweb's docs/wiki/edgemat/view-in-3d.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/view-in-3d.html (reviewed 2026-11-22) -->

# View in 3D

The color map in the setup editor shows where each layer goes on a flat texture. **View in 3D** shows the garment itself, each layer with its own surface and color, in [REDcode](https://edgemodders.ai/wiki/redcode/)'s 3D viewer, where you can turn it around.

EDGEmat doesn't have a viewer of its own: REDcode shows the mesh (the garment's 3D shape), and EDGEmat gives REDcode's viewer the colors. So you need REDcode installed. Its REDbridge starts by itself when VS Code opens.

| On this page | |
|---|---|
| [How to use it](https://edgemodders.ai/wiki/edgemat/view-in-3d.html#how-to-use-it) | The eye button, and the one step people miss |
| [What you see, and what you don't yet](https://edgemodders.ai/wiki/edgemat/view-in-3d.html#what-you-see-and-what-you-dont-yet) | Colors and grain; no shine or bumps yet |
| [Live while you edit](https://edgemodders.ai/wiki/edgemat/view-in-3d.html#live-while-you-edit) | And where the preview reaches |
| [Good to know](https://edgemodders.ai/wiki/edgemat/view-in-3d.html#good-to-know) | |

(Screenshot on the wiki, "The Sunny Ammo sneakers in 3D": REDcode's 3D view of s1_055_pwa_shoe__converse.mesh with the look red_yellow_graphic picked: black sole, red trim and the orange-brown upper, and the 'EDGEmat: approximate' note in the viewer's toolbar.)

## How to use it

1. In [Find](https://edgemodders.ai/wiki/edgemat/find.html), search for a garment and unfold it to a mesh. A mesh on the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html) works the same way, and shows the Desk's edits.
2. Hover the mesh's row and click the **eye** (or right-click › **View in 3D**).
3. REDcode opens the mesh in a new tab, on its 3D view.
4. **Pick the right look.** A mesh can have several looks (the game's files call them appearances), and REDcode starts on the first one, which is often not yours. The status bar at the bottom of VS Code names the one you came from, for example: *EDGEmat: pick the look "red_yellow_graphic" in the 3D view*. Choose that name in the viewer's **Appearance** list.
5. Drag to turn the model. Switch looks in the Appearance list to compare them.

| What you should see | |
|---|---|
| After step 3 | The garment in 3D, in the colors of the mesh's first look |
| After step 4 | The garment in its layers' surfaces and colors, and an **approximate** note in the viewer |

Without REDcode installed, the eye says so and offers to show REDcode's extension page.

## What you see, and what you don't yet

| Kind of material | In the 3D view |
|---|---|
| Layered (`.mlsetup`) | Each layer's own surface, such as felt, leather or plastic, with its grain, under the layer's color, where its mask puts it. As light as the game shows it: a light grey felt hat looks light grey |
| Textured, such as decals, logos and stitches | Its own color texture, as in the game, with its tint |
| Glowing, such as lights, screens and the game's glow materials | The glow's color where it glows, such as blue for **z emissive blue** on a prop's part. Not its light yet: it does not shine or light what is near it. (Before 0.3.4 these were plain white) |
| Others: glass, hair, skin details | REDcode's own flat color, one plain color per material. That is normal |

The viewer marks EDGEmat's picture **approximate**. It shows color and grain, but not yet:

| Not yet | So |
|---|---|
| Shine and metal | Glossy and metal surfaces look matte. Glossy black leather looks dark grey here, darker in the game. Car paint looks flat |
| Bumps | The surface looks smooth up close |
| Glow's light | A glow shows its color, but no light or halo |
| The game's lighting | Light and shadow are REDcode's viewer's own |

Small differences remain too, such as a few specks or patches on some surfaces. Shine and the rest are planned. Trust the game over the preview.

Before EDGEmat 0.3.3 the view showed one flat color per layer, and many came out far too dark. If yours still does, update EDGEmat.

(Screenshot on the wiki, "The Arasaka jacket in 3D": REDcode's 3D view of t2_078_ma_jacket__samurai.mesh on its default look: a near-black jacket with the Arasaka decals and stitches showing as textures.)

## Live while you edit

Keep the 3D view open beside the [setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html). While a setup is open, the 3D view shows it as edited, before you save, and follows each change, undo (`Ctrl+Z`) and redo (`Ctrl+Y`) within about a second. Close the editor without saving and the 3D view goes back to the saved setup. After a save, a [new material](https://edgemodders.ai/wiki/edgemat/new-material.html) put on the mesh, or a change to a [prop's part](https://edgemodders.ai/wiki/edgemat/desk.html#a-props-parts) (a game surface, a game material, back to the model's texture), it draws the materials again by itself. (Before 0.3.4 a part's change needed the view closed and opened again.)

The live preview only reaches a 3D view opened from the same place as the setup:

| You opened the setup from | Open View in 3D from |
|---|---|
| Find (a game file) | The mesh row in Find |
| A line on the Desk | The eye on that Desk line |
| Your project | The project's copy of the mesh |

A 3D view of the game's mesh, opened from Find or from REDcode's Game Assets, keeps the game's colors. It does not show an edit you made on the Desk.

## Good to know

- The first time a material is shown, EDGEmat makes its picture from the game's files. That takes about a second for a whole jacket. After that it is kept.
- **Show Log** in Game Materials' **`...`** menu lists each request, such as `3D view: 5 of 5 materials for ...t2_078_ma_jacket__samurai.mesh, look default, in 1055 ms`.
- **View in 3D** on a mesh in your project opens the project's copy, and EDGEmat reads your project's copies of its setups and textures first. That holds for a project's mesh opened on the Desk too, such as a [prop's parts](https://edgemodders.ai/wiki/edgemat/desk.html#a-props-parts) with game surfaces or new materials on them. (Before 0.3.3 those showed flat, with "...is not in the loaded archives".)
- You can go the other way too: **Open in EDGEmat** in the 3D view's toolbar puts the mesh you are looking at on the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html).
