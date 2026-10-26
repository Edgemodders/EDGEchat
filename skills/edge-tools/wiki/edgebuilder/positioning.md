<!-- Copied from EDGEweb's docs/wiki/edgebuilder/positioning.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/positioning.html (reviewed 2026-10-24) -->

# Positioning objects

**Position** is where an object goes from roughly there to exactly right. You can drag it, use keys like a 3D program, or type numbers.

## The Edit switch

EDGEbuilder's window covers the whole game view, with its panel at the right. Normally the rest of it is see-through, and your mouse goes to the game.

The **Edit** switch at the right end of the panel's title bar (the bar that says EDGEBUILDER) turns the rest of the screen into EDGEbuilder's **viewport**: the area where you select and move objects with the mouse.

| | Edit off | Edit on |
|---|---|---|
| The screen | The game as usual | Very slightly darker: that's how you know the viewport has the mouse |
| The mouse | Goes to the game | Selects and moves objects |
| The view | V's eyes | EDGEbuilder's own camera, and the game's HUD hidden. See [The camera and builder mode](https://edgemodders.ai/wiki/edgebuilder/camera.html) |
| The gizmo | Not drawn. The game's outline still marks the selection | Drawn on the selected object |

The overlay must be **interactive** for Edit to work: press **F10** until REDnode's windows take the mouse.

A help line at the bottom of the screen says what you can do next. From 0.3.3 it sits at the bottom centre, clear of REDnode's launcher; before that, at the bottom left.

(Screenshot on the wiki, "The Edit switch": The EDGEbuilder panel's title bar with the Edit switch at its right end turned on, and the help line at the bottom centre of the screen.)

## Selecting

With Edit on, **click an object** in the world to select it. The game outlines it, and the **Scene** tab opens with its numbers. Click empty space to select nothing.

Clicking in the **Scene** tab's list selects too.

## The gizmo

The selected object gets a **gizmo**, drawn over the game:

| Part | Colour | Drag it to |
|---|---|---|
| X arrow | Red | Slide the object east or west |
| Y arrow | Green | Slide it north or south |
| Z arrow | Blue | Raise or lower it |
| Ring | Yellow | Turn it around the vertical |

A thin cyan box shows the object's size. In the in-game test, the gizmo and the box landed exactly on the object (0.0 px off the game's own projection).

Hold **Ctrl** while dragging to snap: moves go in 0.25 m steps, turns in 15° steps.

Let go to keep the new position. The scene is saved as you go.

(Screenshot on the wiki, "The gizmo": A selected cargo crate with the red, green and blue arrows from its base, the yellow ring around it and the thin cyan box, with the mouse dragging the red arrow.)

## G, R and S

If you've used Blender, these work the same way. Select an object, then:

| Key | Starts |
|---|---|
| **G** | Moving. The object follows the mouse |
| **R** | Turning. Around the vertical unless you lock another axis |
| **S** | Scaling. Meshes only: an entity keeps the size its template gives it |

While it's going:

| Key | Does |
|---|---|
| **X**, **Y** or **Z** | Locks to that axis. Press it again to unlock |
| Digits, `.` and `-` | Type an exact amount: metres for G, degrees for R, a factor for S. With G and no axis locked, a typed amount moves the object up or down |
| **Backspace** | Removes the last typed character |
| **Ctrl** | Snaps, as with the gizmo (0.25 m, 15°, 0.25 for scale) |
| **Enter** or a click | Keeps it |
| **Esc** or a right-click | Puts the object back where it was |

The help line shows the amount so far.

Examples:

- **G**, **Z**, `1.5`, **Enter**: up 1.5 m.
- **R**, `90`, **Enter**: a quarter turn.
- **S**, `2`, **Enter**: twice the size.

Scaling rebuilds the mesh's preview at the new size, so it blinks once.

## Drop to floor

**Ctrl+E**, or **Drop to floor** in the Scene tab, lowers the selected object onto the first surface below it: the ground, a floor, a pavement. If there's nothing within 100 m, the message line says so and the object stays put.

## Typing numbers

The **Selected** panel in the **Scene** tab has five fields:

| Field | Meaning |
|---|---|
| **X**, **Y**, **Z** | Position in the game's world, in metres. X is east, Y north, Z up |
| **Heading** | The turn around the vertical, in degrees |
| **Scale** | Size as a factor, for meshes. 1 is the original size. Greyed out for entities |

Type new values and press **Apply**, or **Enter** in a field. The object moves there.

(Screenshot on the wiki, "The Selected panel": The Scene tab with a crate selected: its name, path and position at the top of the Selected panel, the X, Y, Z, Heading and Scale fields, and the Apply, Drop to floor and Delete buttons.)

## Delete

Press **Delete** with an object selected, or **Delete** in the Scene tab. It goes from the world and the scene. There's no undo yet.

## Good to know

- Drags follow the mouse at the game's frame rate. In the in-game test, dragging didn't lower the frame rate.
- While Edit is on, EDGEbuilder's layer is over other REDnode windows, so you can't click them. Switch Edit off to use them.
- The fields set the heading only. **R** with **X** or **Y** locked turns around those axes instead, which tilts the object; the in-game test turned objects around the vertical only.
