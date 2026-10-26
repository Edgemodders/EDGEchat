<!-- Copied from EDGEweb's docs/wiki/edgemat/view-in-3d.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/view-in-3d.html (reviewed 2026-10-19) -->

# View in 3D

The color map in the setup editor shows where each layer goes on a flat texture. **View in 3D** shows the same colors on the garment itself, in [REDcode](https://edgemodders.ai/wiki/redcode/)'s 3D viewer, where you can turn it around.

EDGEmat doesn't have a viewer of its own: REDcode shows meshes, and EDGEmat gives REDcode's viewer the colors. You need REDcode installed, with its REDbridge running (it starts with VS Code).

(Screenshot on the wiki, "The Sunny Ammo sneakers in 3D": REDcode's 3D view of s1_055_pwa_shoe__converse.mesh with the look red_yellow_graphic picked: black sole, red trim and the orange-brown upper, and the 'EDGEmat: approximate' note in the viewer's toolbar.)

## How to use it

1. In [Find](https://edgemodders.ai/wiki/edgemat/find.html), search for a garment and open it down to a mesh, or find a mesh by path.
2. Hover the mesh's row and click the **eye** (or right-click › **View in 3D**).
3. REDcode opens the mesh in a new tab, on its 3D view.
4. REDcode starts on the mesh's first look. The status bar at the bottom of VS Code names the look you came from, for example: *EDGEmat: pick the look "red_yellow_graphic" in the 3D view*. Pick it in the viewer's appearance list.
5. Drag to turn the model; switch looks in the appearance list to compare them.

Without REDcode installed, the eye says so and offers to show REDcode's extension page.

## What you see, and what you don't (yet)

| Kind of material | In the 3D view |
|---|---|
| Layered (`.mlsetup`) | Its color map, each layer's color where its mask puts it: the same picture as the setup editor's map, on the model |
| Textured (such as decals, logos and stitches) | Its own color texture, as in the game |
| Others (glass, hair, skin details, lights) | REDcode's flat colors, one per material |

The viewer marks EDGEmat's colors **approximate**, because this first version gives **colors only**: no shine, no bumps, no metal, no detail textures, and no lighting the way the game does it. The full preview with all of that is a later phase (M5). Some colors may also look darker than in the game while that is being checked.

(Screenshot on the wiki, "The Arasaka jacket in 3D": REDcode's 3D view of t2_078_ma_jacket__samurai.mesh on its default look: a near-black jacket with the Arasaka decals and stitches showing as textures.)

## Good to know

- The first time a material is shown, EDGEmat makes its picture from the game's files, which takes about a second for a whole jacket; after that it's cached.
- **Show Log** in the Library's **`...`** menu lists each request, such as `3D view: 5 of 5 materials for ...t2_078_ma_jacket__samurai.mesh, look default, in 1055 ms`.
- Opening a mesh from your own project in REDcode works the same way, and EDGEmat reads your project's copies of its setups and textures first. This hasn't been tried in a real project yet.
