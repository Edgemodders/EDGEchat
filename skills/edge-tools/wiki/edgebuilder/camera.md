<!-- Copied from EDGEweb's docs/wiki/edgebuilder/camera.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/camera.html (reviewed 2026-11-19) -->

# The camera and builder mode

Placing things from V's eyes is awkward: you can't see behind a crate, or look down on a room from above. So when you switch [Edit](https://edgemodders.ai/wiki/edgebuilder/positioning.html#the-edit-switch) on, EDGEbuilder looks through a **camera of its own** and the game's HUD gets out of the way. Together, that's **builder mode**.

| On this page | |
|---|---|
| [What builder mode changes](https://edgemodders.ai/wiki/edgebuilder/camera.html#what-builder-mode-changes) | The view, V, the HUD |
| [Moving the camera](https://edgemodders.ai/wiki/edgebuilder/camera.html#moving-the-camera) | Look, fly, orbit, pan, frame |
| [How far can the camera go?](https://edgemodders.ai/wiki/edgebuilder/camera.html#how-far-can-the-camera-go) | |
| [Builder mode and other windows](https://edgemodders.ai/wiki/edgebuilder/camera.html#builder-mode-and-other-windows) | Solo mode |
| [If V's view gets stuck](https://edgemodders.ai/wiki/edgebuilder/camera.html#if-vs-view-gets-stuck) | |
| [Try it](https://edgemodders.ai/wiki/edgebuilder/camera.html#try-it-a-look-from-the-rooftops) | A look from the rooftops |

## What builder mode changes

| | With Edit on |
|---|---|
| The view | Switches to EDGEbuilder's camera. It starts exactly where V's view is, so nothing jumps |
| V | Stays where V was standing. Only the camera moves |
| The HUD | The game's own HUD (minimap, quest tracker, crosshair) disappears |
| Other windows | Other REDnode windows hide, if you allowed [solo mode](https://edgemodders.ai/wiki/edgebuilder/camera.html#builder-mode-and-other-windows) |
| The help line | At the bottom of the screen, now also lists the camera keys |

Switch **Edit** off and the view snaps back to V's eyes and the HUD returns. Switch it on again and the camera starts from V's view again. If you load a save with Edit on, Edit stays on, and the camera starts again from V's view.

**F10 pauses builder mode.** Press F10 with Edit on, to leave REDnode's interactive mode, and V gets the view and the HUD back: you can walk and play. Press F10 again and you are back in EDGEbuilder's camera where you left it, with Edit still on and your selection kept.

Builder mode has two parts, the editor camera and the hidden HUD. Each has its own switch on the Settings tab, in case one misbehaves. They apply as soon as you flip them. See [Settings](https://edgemodders.ai/wiki/edgebuilder/settings.html#settings).

(Screenshot on the wiki, "Builder mode": The game with Edit on and the camera flown up above a street: no minimap, quest tracker or crosshair, V standing small in the distance, and the EDGEbuilder panel at the right.)

## Moving the camera

| Mouse or key | Does |
|---|---|
| Hold the **right mouse button** and move the mouse | Look around |
| Right mouse held, plus **W**, **A**, **S**, **D** | Fly forward, left, back, right |
| Right mouse held, plus **Q** or **E** | Fly down or up |
| Right mouse held, plus **Shift** or **Ctrl** | Fly faster or slower |
| Right mouse held, plus the **mouse wheel** | Changes the flying speed. The message line shows it |
| Hold the **middle mouse button** and move | Orbit: circle around the selected object, or around a point 10 m ahead when nothing is selected |
| **Shift** with the middle mouse button | Pan: slide the camera sideways and up or down |
| **Mouse wheel**, no button held | Move closer or further |
| **F** | Frame the selection: bring the camera to a good distance from it |

While you hold the right or middle button, the cursor disappears and stays put, so the view keeps turning however far you move the mouse. Let go and the cursor is back where it was.

Selecting and the gizmo keep working from wherever the camera is. **Drop where I look** then drops onto the surface the camera looks at: fly to a spot, look at it, and drop. See [Drop it](https://edgemodders.ai/wiki/edgebuilder/browsing.html#drop-it).

## How far can the camera go?

You can fly anywhere, and you don't need to bring V along. In the tests the camera flew about 200 m from V and the world there stayed fully drawn. Your scene's objects are placed wherever they are, however far V is.

One limit: the game makes its ground solid only near the camera. [Drop to floor](https://edgemodders.ai/wiki/edgebuilder/positioning.html#drop-to-floor) and Drop at click need you close to the spot.

## Builder mode and other windows

EDGEbuilder's window covers the whole screen. While Edit is on, that would leave other REDnode windows on screen but out of reach, under EDGEbuilder's layer. So builder mode hides them, and brings them back when you switch Edit off. REDnode calls this [solo mode](https://edgemodders.ai/wiki/rednode/spaces.html#solo-mode).

Solo mode needs your permission:

1. Press **F10**, open the launcher and the **Mod Manager**.
2. Click **EDGEbuilder**.
3. Under **Permissions**, switch **Allowed** on for "hiding every other package's windows ... (solo mode)".

| | With the permission | Without it |
|---|---|---|
| Other packages' windows, with Edit on | Hidden. The launcher tab shows **SOLO EDGEbuilder** | Still on screen, but they can't be clicked. EDGEbuilder says so once |
| With Edit off | Back, and usable | Usable |
| REDnode's own tools, such as the launcher | Stay | Stay |

Either way, switch Edit off to use another window.

## If V's view gets stuck

If EDGEbuilder stops while Edit is on (it crashed, or you closed it), V's view may stay on the editor camera with the HUD hidden.

- **Load a save.** That gives V's camera back.
- EDGEbuilder also repairs it by itself the next time it starts, and the message line says so.

## Try it: a look from the rooftops

1. Drop something in front of V and leave it selected.
2. Switch **Edit** on.
3. Hold the right mouse button and press **E** to rise above the street. Hold **Shift** to go faster, or turn the mouse wheel to change the speed.
4. Fly forward with **W** to a rooftop and look back down.
5. Let go, and press **F**. The camera comes back to a good distance from the selected object.
6. Hold the middle mouse button and move the mouse: the camera circles the object. Add **Shift** to slide it sideways or up.
7. Turn the mouse wheel to move closer and further.
8. Switch **Edit** off. You're back in V's eyes, where V stood all along.
