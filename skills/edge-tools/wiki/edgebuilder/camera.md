<!-- Copied from EDGEweb's docs/wiki/edgebuilder/camera.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/camera.html (reviewed 2026-10-24) -->

# The camera and builder mode

Placing things from V's eyes is awkward: you can't see behind a crate, or look down on a room from above. So when you switch **Edit** on, EDGEbuilder looks through a **camera of its own** and the game's HUD gets out of the way. Together, that's **builder mode**.

## What happens when you switch Edit on

| | |
|---|---|
| The view | Switches to EDGEbuilder's camera, starting exactly where V's view is, so nothing jumps |
| V | Stays where V was standing. Only the camera moves |
| The HUD | The game's own HUD (minimap, quest tracker, crosshair) disappears |
| The help line | At the bottom of the screen, now also lists the camera keys |

Switch **Edit** off and the view snaps back to V's eyes and the HUD returns. Switch it on again and the camera starts from V's view again.

Both halves can be switched off in the Settings tab, if one misbehaves. See [Settings and keys](https://edgemodders.ai/wiki/edgebuilder/settings.html). From 0.3.3 the switches apply at once, even while Edit is on, and switching Edit on with one of them off says so in the message line.

(Screenshot on the wiki, "Builder mode": The game with Edit on and the camera flown up above a street: no minimap, quest tracker or crosshair, V standing small in the distance, and the EDGEbuilder panel at the right.)

## Moving the camera

| Mouse or key | Does |
|---|---|
| Hold the **right mouse button** and move the mouse | Look around |
| Right mouse held, plus **W**, **A**, **S**, **D** | Fly forward, left, back, right |
| Right mouse held, plus **Q** or **E** | Fly down or up |
| **Shift** or **Ctrl** while flying | Faster or slower |
| **Mouse wheel** while flying | Changes the flying speed. The message line shows it |
| Hold the **middle mouse button** and move | Orbit around the selected object, or a point 10 m ahead when nothing is selected |
| **Shift** with the middle mouse button | Pan: slide the camera sideways and up or down |
| **Mouse wheel** | Move closer or further |
| **F** | Frame the selection: bring the camera to a good distance from it |

The gizmo, the box and selecting by clicking all keep working from wherever the camera is.

### The cursor while looking

With **REDnode 0.22.0 or later** and EDGEbuilder 0.3.2 or later, the cursor disappears and stays put while you hold the right or middle button. The view keeps turning however far you move the mouse. Let go and the cursor is back where it was. **Esc** while holding ends the lock without leaving Edit.

With an older REDnode, the cursor moves while you look, and turning stops when it reaches the edge of the screen.

The cursor lock passed its in-game retest on 2026-10-16 (EDGEbuilder 0.3.2 with REDnode 0.24.0).

## Dropping from the camera

With the editor camera on, **Drop where I look** puts the asset on the first surface the camera looks at, up to 60 m away, turned to face the camera. That makes it easy to fly to a spot, look at it, and drop. **Drop at click** (0.3.3, untested in game) drops it where you click instead. See [Browsing and dropping](https://edgemodders.ai/wiki/edgebuilder/browsing.html#drop-it).

## How far can the camera go?

In the in-game test, the camera flew about 200 m away from V and the world stayed fully loaded there. You don't need to bring V along.

## Loading a save with Edit on

When a save loads, Edit stays on and the camera starts again from V's view.

In 0.3.0, the game's HUD came back after the load. 0.3.1 fixes that: while builder mode is on, EDGEbuilder checks every second and hides the HUD again if the game brought it back. The fix passed its in-game retest on 2026-10-16.

## If V's view gets stuck

If EDGEbuilder stops while Edit is on (it crashed, or you closed it), V's view may stay on the editor camera with the HUD hidden.

- **Load a save.** That gives V's camera back.
- EDGEbuilder also fixes it by itself the next time it starts: before it changes anything, it writes down what it changed, and puts V's camera and HUD back from that note. The message line says so when it does.

## Builder mode and other windows

Builder mode hides the game's HUD, not other REDnode windows. They stay on screen, and while Edit is on, EDGEbuilder's layer is over them, so they can't be clicked. Switch Edit off to use them. REDnode now has a solo mode that could hide them; EDGEbuilder doesn't use it yet.
