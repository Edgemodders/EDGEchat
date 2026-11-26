<!-- Copied from EDGEweb's docs/wiki/edgedir/preview.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedir/preview.html (reviewed 2026-11-21) -->

# The 3D preview

**EDGEdir is not released yet.** This page describes what is built on its `main`, for review before the first release; see the [Overview](https://edgemodders.ai/wiki/edgedir/) for what has been tested.

Above the timeline is a 3D view. Each actor stands there as a plain grey body and plays the clip under the playhead: when you drag the playhead, and when the scene plays. The game does not have to run.

(Screenshot on the wiki, "Two actors in the preview": The 3D preview with two grey bodies on a grid, each in the pose of the playhead's moment; a ring under each actor marks where they stand, and the selected one's is lit.)

| On this page | |
|---|---|
| [Moving the view](https://edgemodders.ai/wiki/edgedir/preview.html#moving-the-view) | |
| [The bodies](https://edgemodders.ai/wiki/edgedir/preview.html#the-bodies) | Where they come from, and V |
| [Marks](https://edgemodders.ai/wiki/edgedir/preview.html#marks) | Where each actor stands and faces |
| [What the view also shows](https://edgemodders.ai/wiki/edgedir/preview.html#what-the-view-also-shows) | A set's props, pins, the weather |
| [What it does not show](https://edgemodders.ai/wiki/edgedir/preview.html#what-it-does-not-show) | |

## Moving the view

| To | Do |
|---|---|
| Orbit | Drag |
| Pan | Drag with the right button |
| Zoom | Scroll |
| Bring everybody back into view | **Frame**, in the view's corner |
| Give the view more or less room | Drag the bar between the view and the toolbar |

The view fits each new body by itself until you move it by hand; after that it is yours.

## The bodies

The first time an actor is shown, EDGEdir takes their body from your game's files through REDbridge, which takes a few seconds; each animation takes a fraction of a second. Both are kept on your PC, so the next time is instant. The line at the bottom of the view says what is loading and what could not be loaded.

| You see | Because |
|---|---|
| Plain grey bodies | The preview is for timing and poses. Skin, clothes' colours and faces' details are not drawn |
| V without a head | V shows as the game's base body for V's rig. Your own V cannot be read from the game's files |
| A ring under each actor | Their [mark](https://edgemodders.ai/wiki/edgedir/preview.html#marks). The selected track's ring is lit |

## Marks

A **mark** is where an actor stands and which way they face. Select an actor's track; the inspector has three numbers:

| Field | Means |
|---|---|
| **Right (m)** | Metres to the right of the scene's middle |
| **Forward (m)** | Metres forward from it |
| **Turn (°)** | Which way they face, in degrees |

New actors are put 0.8 m apart, so they never start inside each other. Type a number, or use the small arrows, and the body moves at once.

In the game, a scene with no place of its own plays in front of V: the scene's middle is 3 m ahead of V, Right and Forward are as V sees them, and a Turn of 180 faces V. That reading has not been checked in the game yet. A scene can also have a fixed place: on a [set](https://edgemodders.ai/wiki/edgedir/sets.html), or at a spot you choose in the game ([Adjusting and pins](https://edgemodders.ai/wiki/edgedir/adjust.html)).

Marks can also be set in the game, by standing V where the actor should be: see [Adjusting](https://edgemodders.ai/wiki/edgedir/adjust.html#adjust).

An actor plays in place. An animation that walks forward shows the walk, but the person stays on their mark, in the preview and in the game.

## What the view also shows

| | |
|---|---|
| A set's props | Grey boxes of each prop's size, when the scene is on a [set](https://edgemodders.ai/wiki/edgedir/sets.html) |
| Pins | Thin yellow posts with their names, when the scene has [pins](https://edgemodders.ai/wiki/edgedir/adjust.html#pins-in-vs-code) and a place in the world |
| The weather | The line names the weather under the playhead and the view takes a tint: see [Weather](https://edgemodders.ai/wiki/edgedir/weather.html) |

## What it does not show

The preview is not the game. It does not show the place the scene plays in, textures, lighting, rain, or the people's faces. For those, [play it in the game](https://edgemodders.ai/wiki/edgedir/director.html).
