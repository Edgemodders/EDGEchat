<!-- Copied from EDGEweb's docs/wiki/edgebuilder/positioning.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/positioning.html (reviewed 2026-11-13) -->

# Positioning objects

Positioning is where an object goes from roughly there to exactly right. You can drag it, use keys like a 3D program, or type numbers.

| On this page | |
|---|---|
| [The Edit switch](https://edgemodders.ai/wiki/edgebuilder/positioning.html#the-edit-switch) | Turning the mouse over to EDGEbuilder |
| [Selecting](https://edgemodders.ai/wiki/edgebuilder/positioning.html#selecting) | Choosing what to move |
| [The gizmo](https://edgemodders.ai/wiki/edgebuilder/positioning.html#the-gizmo) | Dragging arrows and a ring |
| [G, R and S](https://edgemodders.ai/wiki/edgebuilder/positioning.html#g-r-and-s) | Move, turn and scale with keys |
| [Drop to floor](https://edgemodders.ai/wiki/edgebuilder/positioning.html#drop-to-floor) | Ctrl+E |
| [Typing numbers](https://edgemodders.ai/wiki/edgebuilder/positioning.html#typing-numbers) | The fields of the Selected panel |
| [Delete](https://edgemodders.ai/wiki/edgebuilder/positioning.html#delete) | |
| [Good to know](https://edgemodders.ai/wiki/edgebuilder/positioning.html#good-to-know) | Tilting, stretching, other windows |
| [Try it](https://edgemodders.ai/wiki/edgebuilder/positioning.html#try-it-put-a-crate-on-top-of-something) | Put a crate on top of something |

## The Edit switch

EDGEbuilder's window covers the whole game view, with its panel at the right. Normally the rest of it is see-through, and your mouse goes to the game.

The **Edit** switch at the right end of the panel's title bar (the bar that says EDGEBUILDER) hands the rest of the screen to EDGEbuilder, so you can select and move objects with the mouse.

| | Edit off | Edit on |
|---|---|---|
| The screen | The game as usual | Very slightly darker: that's how you know EDGEbuilder has the mouse |
| The mouse | Goes to the game | Selects and moves objects |
| The view | V's eyes | EDGEbuilder's own camera, with the game's HUD hidden. See [The camera and builder mode](https://edgemodders.ai/wiki/edgebuilder/camera.html) |
| The gizmo | Not drawn. The game's outline still marks the selection | Drawn on the selected object |

Edit works only while REDnode's windows have the mouse. Press **F10** once from play: a cursor appears, and the game stops taking your mouse and keys. REDnode calls this interactive mode: see [F10 and the three modes](https://edgemodders.ai/wiki/rednode/overlay.html#f10-and-the-three-modes).

A help line at the bottom centre of the screen says what you can do next.

(Screenshot on the wiki, "The Edit switch": The EDGEbuilder panel's title bar with the Edit switch at its right end turned on, and the help line at the bottom centre of the screen.)

## Selecting

With Edit on, **click an object** in the world to select it. The game outlines it, and the **Scene** tab opens with its numbers. Click empty space to select nothing.

Clicking an object in the **Scene** tab's list selects it too, with Edit on or off.

To select several objects at once, or one object out of a group, see [Selecting several objects](https://edgemodders.ai/wiki/edgebuilder/arranging.html#selecting-several-objects). Everything on this page then works on all of them together.

## The gizmo

The selected object gets a **gizmo**: handles drawn over the game that you drag.

| Part | Colour | Drag it to |
|---|---|---|
| X arrow | Red | Slide the object east or west |
| Y arrow | Green | Slide it north or south |
| Z arrow | Blue | Raise or lower it |
| Ring | Yellow | Turn it like a turntable, around the upright axis |

The arrows always point along the world's east, north and up, however the object is turned. A thin cyan box shows the object's size.

Hold **Ctrl** while dragging to snap: moves go in 0.25 m steps, turns in 15° steps.

Let go to keep the new position. The scene is saved as you go.

(Screenshot on the wiki, "The gizmo": A selected cargo crate with the red, green and blue arrows from its base, the yellow ring around it and the thin cyan box, with the mouse dragging the red arrow.)

## G, R and S

If you've used Blender, these work the same way. Select an object, then press:

| Key | Starts |
|---|---|
| **G** | Moving. The object follows the mouse |
| **R** | Turning, like a turntable |
| **S** | Scaling. Meshes only: an entity's size is fixed |

While it's going:

| Key | Does |
|---|---|
| **X**, **Y** or **Z** | Locks to that axis. Press it again to unlock |
| Digits, `.` and `-` | Type an exact amount: metres for G, degrees for R, a factor for S |
| **Backspace** | Removes the last typed character |
| **Ctrl** | Snaps, as with the gizmo: 0.25 m, 15°, or steps of 0.25 for scale |
| **Enter** or a click | Keeps it |
| **Esc** or a right-click | Puts the object back where it was |

The help line shows the amount so far.

Examples:

- **G**, **Z**, `1.5`, **Enter**: up 1.5 m.
- **R**, `90`, **Enter**: a quarter turn.
- **S**, `2`, **Enter**: twice the size.

A typed amount for **G** with no axis locked moves the object up or down: **G**, `2`, **Enter** raises it 2 m.

Scaling rebuilds the mesh's preview at the new size, so it blinks once.

## Drop to floor

**Ctrl+E**, or **Drop to floor** on the Scene tab, lowers the selected object onto the first surface below it: the ground, a floor, a pavement.

| If | Then |
|---|---|
| Nothing solid is found below | The message line says so, and the object stays put |
| You are far away | The game makes its ground solid only near the camera. Fly closer and try again |
| There is another preview below | The object falls through it. Previews aren't solid, so Drop to floor lands only on the game's own ground and objects |

## Typing numbers

The **Selected** panel on the **Scene** tab has these fields:

| Field | Meaning |
|---|---|
| **X**, **Y**, **Z** | Position in the game's world, in metres. X is east, Y north, Z up |
| **Heading** | Which way the object faces, in degrees |
| **Scale** | Size as a factor, for meshes. 1 is the original size. Hidden for an entity or a person |
| **Seen from, m** | Only matters once you bake: how far away the object is drawn. See [Seen from](https://edgemodders.ai/wiki/edgebuilder/baking.html#seen-from) |

For a mesh, the **Solid when baked** switch sits under the fields. It too only matters once you bake. See [The Solid switch](https://edgemodders.ai/wiki/edgebuilder/baking.html#the-solid-switch).

Type new values and press **Apply**, or **Enter** in a field. The object moves there.

Pressing Enter applies the number and moves the cursor out of the field. That matters for undo: while the cursor is in a field, **Ctrl+Z** undoes your typing. Once it has left, **Ctrl+Z** undoes the move.

With several objects selected, the fields work on the whole selection. See [Moving several at once](https://edgemodders.ai/wiki/edgebuilder/arranging.html#moving-several-at-once).

(Screenshot on the wiki, "The Selected panel": The Scene tab with a crate selected: its name, path and position at the top of the Selected panel, the X, Y and Z fields, Heading, Scale and Seen from, m, the Solid when baked switch with its note, and the Apply, Drop to floor and Delete buttons.)

## Delete

Press **Delete** with an object selected and Edit on, or the **Delete** button on the Scene tab. The object goes from the world and the scene. **Ctrl+Z**, or **Undo** on the Scene tab, brings it back.

## Good to know

- **Tilting.** **R** then **X** or **Y** turns an object around a level axis, which tilts it. The tilt is kept in the scene. The Selected panel shows only the heading, so use **Ctrl+Z** to take a tilt back. Tilting was tested less than turning: the tests in the game turned objects around the upright axis only.
- **Stretching.** **S** then **X**, **Y** or **Z** scales a mesh along one axis only. The **Scale** field is one number for all three, and applying it makes the mesh evenly scaled again. Stretching was not part of the tests in the game.
- **Smooth drags.** Drags follow the mouse at the game's frame rate, and don't lower it.
- **Other windows.** While Edit is on, other REDnode windows hide, or can't be clicked. See [Builder mode and other windows](https://edgemodders.ai/wiki/edgebuilder/camera.html#builder-mode-and-other-windows).

## Try it: put a crate on top of something

1. Drop a crate (search `cargo crate` on the Assets tab, then **Drop where I look**) near something in the world with a flat top: a dumpster, a low wall, a concrete block.
2. Switch **Edit** on and click the crate.
3. Drag the **blue** arrow up until the crate is higher than the object, then the **red** and **green** arrows until it's above it.
4. Press **Ctrl+E**. The crate drops onto the first solid surface below it: the object's top.
5. Press **R**, type `45` and press **Enter**. The crate turns an eighth of a turn.
6. In the **Selected** panel, type `0` in **Heading** and press **Enter**. It turns again, to heading 0.
7. Press **G**, **Z**, type `-0.5`, then press **Esc** instead of Enter. Nothing moved.
8. Press **Ctrl+Z** twice: the heading and the turn come undone. Once more and the drop comes undone: the crate is back in the air above the object.
