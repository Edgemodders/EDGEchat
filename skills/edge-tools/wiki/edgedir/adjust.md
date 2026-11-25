<!-- Copied from EDGEweb's docs/wiki/edgedir/adjust.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedir/adjust.html (reviewed 2026-11-21) -->

# Adjusting and pins

**EDGEdir is not released yet.** This page describes what is built on its `main`, for review before the first release; see the [Overview](https://edgemodders.ai/wiki/edgedir/) for what has been tested.

The 3D preview is good for timing. Where people should stand is easier to judge in the place itself. EDGE Director lets you put that right while you stand there: each change is saved into the scene's file at once, and the scene open in VS Code follows.

**Untested in the game**, like most of EDGE Director; its steps passed by script against a stand-in for the game. Moving a person while they play an animation is one of the things the first tests must show.

(Screenshot on the wiki, "Adjust and Pins in EDGE Director": EDGE Director's window with an actor chosen: the header says the scene is at the pin Stairs; Adjust shows the actor's mark with Move to V, Left, Right, Forward, Back and the two Turn buttons; Pins lists two pins with what follows each, their distance, and Go There, the actor Here, Scene Here, Drop Again and Remove.)

| On this page | |
|---|---|
| [Adjust](https://edgemodders.ai/wiki/edgedir/adjust.html#adjust) | Moving and turning an actor |
| [The scene's place](https://edgemodders.ai/wiki/edgedir/adjust.html#the-scenes-place) | In front of V, or fixed to a spot |
| [Pins](https://edgemodders.ai/wiki/edgedir/adjust.html#pins) | Named places, dropped where V stands |
| [Pins in VS Code](https://edgemodders.ai/wiki/edgedir/adjust.html#pins-in-vs-code) | The same pins in the editor |
| [Two tools, one scene](https://edgemodders.ai/wiki/edgedir/adjust.html#two-tools-one-scene) | Who may change what, and when |

## Adjust

Choose an actor: click their name at the left of the strip, or their row in **Cast**. **Adjust** shows their [mark](https://edgemodders.ai/wiki/edgedir/preview.html#marks) and these buttons:

| Button | Does |
|---|---|
| **Move to V** | Their mark becomes where V stands, facing as V faces. Walk V to the spot, look the way they should look, and press it |
| **Left**, **Right**, **Forward**, **Back** | Moves the mark 10 cm |
| **Turn -15**, **Turn +15** | Turns them 15 degrees |

An actor who is in the game moves at once and plays on. With nothing playing, the mark still changes in the file.

(Screenshot on the wiki, "Moving an actor in the game": The game with a scene playing: an actor with a pin of their name over them, standing where V stood a moment ago, and EDGE Director's Adjust section with Move to V beside them.)

Two cases where it says no:

| | |
|---|---|
| The scene plays in front of V and is not in the game | **Move to V** has nothing to measure from. Press Play first, or give the scene a place (below) |
| The actor is placed by a [set](https://edgemodders.ai/wiki/edgedir/sets.html) | Move the person in EDGEbuilder; the scene follows |

To type exact numbers, use the inspector in VS Code.

## The scene's place

A new scene plays **in front of V**, wherever V is when you press Play. That is handy for trying things, and wrong for a scene that belongs somewhere.

| Button | Does |
|---|---|
| **The Scene Is Here** | The scene keeps the spot it is playing at now. Nobody moves; from then on it plays there, wherever V is. With nothing playing, it takes the spot a play would use now: 3 m in front of V |
| **In Front of V** | Undoes it. A scene in the game moves in front of V at once |

The header says which it is. A scene on a [set](https://edgemodders.ai/wiki/edgedir/sets.html) plays where the set is, and has neither button.

## Pins

A **pin** is a named place in the world. Pins are [REDnode](https://edgemodders.ai/wiki/rednode/)'s world pins: a pin has a title and a place, stands in the world with its name over it, and is kept in a small file.

Walk V to a spot, type a name under **Pins**, and press **Drop a Pin Here**. The first pin makes the scene's own pin file, beside the scene on the Desk. The open scene's pins are drawn in the world; they go when you leave the scene.

For each pin:

| Button | Does |
|---|---|
| **Go There** | Puts V at the pin |
| The chosen actor's name and **Here** | That actor stands at this pin, and follows it. Choose an actor first |
| **Scene Here** | The scene's place is this pin, and follows it |
| **Drop Again** | Moves the pin to where V stands now. Whatever follows it moves with it: an actor in the game at once |
| **Remove** | Takes the pin away. What followed it stays where it is |

**Following** is the point of a pin. An actor "at the pin Doorway" keeps standing at that pin when you move it, in the game and in the file. A mark you nudge or type by hand lets go of its pin.

An actor can stand at a pin only in a scene that has a place: at a pin, at a spot (**The Scene Is Here**), or on a set. In a scene that plays in front of V, places in the world mean nothing, and the window says so.

(Screenshot on the wiki, "A scene's pins in the world": The game with two of the scene's pins standing in the world with their names over them, an actor standing at one, and EDGE Director's Pins section beside them.)

## Pins in VS Code

The scene editor shows the same pins. Click an empty part of the timeline; the inspector has a **Pins** section.

| There | Does |
|---|---|
| **Choose Pins...** | Takes a pin file for the scene: the scene's own, one of your pin sets from REDnode's Pins window in the game, one in the open REDcode project, or any `.pins.json` file |
| **The scene's place** | In front of V, or one of the pins |
| The list | Each pin with its place and what follows it |
| **Remove Pins** | The scene forgets its pins. Everything keeps its place and follows nothing |

(Screenshot on the wiki, "The inspector's Pins section": The lower part of the scene's inspector: the Pins section with the pin file's name, The scene's place set to a pin, and each pin with its place and what follows it.)

For an actor, the track's inspector has **At pin**: pick a pin, or None.

(Screenshot on the wiki, "Pins in the scene editor": The scene editor with a scene whose place is a pin: three yellow posts with the pins' names stand in the 3D preview, one actor stands at a pin, and the track's inspector has At pin set to that pin.)

In the preview each pin is a thin yellow post with its name, when the scene has a place in the world. EDGEdir reads your pin sets from REDnode's folder and never changes them. An open scene follows its pin file: move a pin in the game, and within a few seconds the post and the actor move in the editor.

## Two tools, one scene

There is one scene file, and both tools change it.

| When | What happens |
|---|---|
| EDGE Director changes a scene that is open and saved in VS Code | The editor shows the change by itself |
| The scene has unsaved changes in VS Code | EDGE Director shows a yellow box within a few seconds. Its own **Play** still plays the scene, as it was last saved; its Adjust and Pins buttons and The Scene Is Here are off until you save. So neither tool overwrites the other. (**Play in Game** in VS Code plays the unsaved changes: see [Playing in the game](https://edgemodders.ai/wiki/edgedir/director.html#play-in-game-from-vs-code)) |
| VS Code is closed | EDGE Director changes the file; VS Code sees it when it next opens the scene |

Against a stand-in for the game, a test by script showed both on 2026-11-21: a change made in EDGE Director's window appeared in the open, saved editor with no click and left the tab saved, and **Ctrl+Z** there took it back. Not checked in the game yet.
