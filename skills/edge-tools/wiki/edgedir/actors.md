<!-- Copied from EDGEweb's docs/wiki/edgedir/actors.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedir/actors.html (reviewed 2026-11-21) -->

# Actors and animations

**EDGEdir is not released yet.** This page describes what is built on its `main`, for review before the first release; see the [Overview](https://edgemodders.ai/wiki/edgedir/) for what has been tested.

An **actor** is a character of the game chosen for a track. An **animation** is one movement from the game's files. A clip on an actor's track gives one to the other: this person does this, from here to here. Both come from your own game, read once: see [Read the game](https://edgemodders.ai/wiki/edgedir/install.html#read-the-game).

| On this page | |
|---|---|
| [Actors](https://edgemodders.ai/wiki/edgedir/actors.html#actors) | Choosing a character, or V |
| [Animations](https://edgemodders.ai/wiki/edgedir/actors.html#animations) | The Animations view, search and filters |
| [Putting an animation on a track](https://edgemodders.ai/wiki/edgedir/actors.html#putting-an-animation-on-a-track) | |
| [The rig rule](https://edgemodders.ai/wiki/edgedir/actors.html#the-rig-rule) | Why some animations do not fit |
| [Animations made in EDGEfab](https://edgemodders.ai/wiki/edgedir/actors.html#animations-made-in-edgefab) | |

## Actors

Select an actor track and click **Choose Actor...** in the inspector.

| In the list | |
|---|---|
| The game's characters | About 6,600. Named people come first, then the rest by their record's name. Type any part of a name |
| **V (the player)** | On top, once for each body. A scene has V once at most |
| An appearance | Most characters have several looks. A second list offers them; "Any" lets the game pick |

(Screenshot on the wiki, "Choosing an actor": The Choose Actor list in VS Code with a few letters typed: V on top in two bodies, then matching characters of the game, each with its record name.)

The inspector then shows the actor, their **record** (the game's name for the character), appearance and **rig** (their skeleton). **Change Actor...** swaps in someone else and keeps the track's clips.

V in a scene:

| Where | What happens |
|---|---|
| The preview | V shows as the game's base body for V's rig, without a head: your V's own head and looks cannot be read from the game's files |
| The game | **V does not play in the game yet.** V's track is left out, and EDGEdir says so before it plays. It waits on work in REDnode |

## Animations

The **Animations** view lists what EDGEdir read from your game.

| Group | Holds |
|---|---|
| **Game** | The game's animation files, about 14,000, by folder. Open a file to see the animations in it, each with its length |
| **Project** | Animations made in EDGEfab in the open REDcode project |
| **Library** | Animations made in EDGEfab and kept in your EDGE Library |

(Screenshot on the wiki, "The Animations view": The Animations view with a search typed: a list of the game's animations that match, each with its length and its file, and a + at the right of the row under the mouse.)

| In the view's title bar | Does |
|---|---|
| **Search Animations...** | Lists animations whose name or file has every word you type, in any order. **Clear the Search** goes back to the folders |
| **Only What Fits the Selected Actor** | Hides animations made for another rig than the selected track's actor |
| **Only the Selected Actor's Own Files** | Shows only the animation files that actor's character carries in the game: the movements the game itself gives them |
| **Refresh**, **Read the Game Again** | Looks again; reads everything again after a game update |

Right-click an animation for **Copy Animation Name** and **Copy Path**.

## Putting an animation on a track

Select an actor's track, put the playhead where the clip should start, and click the **+** on an animation (**Add to Track**). The clip lands at the playhead, or at the first free moment after it, as long as the animation. It is selected, so its numbers are in the inspector at once: see [An animation clip's numbers](https://edgemodders.ai/wiki/edgedir/editor.html#an-animation-clips-numbers).

Dragging an animation from the view onto a lane is not built; **+** is the way.

## The rig rule

Every animation is made for one **rig**, a skeleton. Most women of the game share one, most men another, and children, big bodies and others have their own. An animation plays only on an actor with its rig.

| When | What you see |
|---|---|
| You add an animation made for another rig | The clip lands on the track hatched red, and the inspector says **Unfit** and why. It does not play |
| You change the actor to one with another rig | The track's clips stay, hatched red and unfit. They do not play on this actor, in the preview or the game. Nothing is removed |
| You change the actor back, or to anyone with the first rig | The clips play again |

Turning on **Only What Fits the Selected Actor** keeps unfit animations out of sight.

## Animations made in EDGEfab

[EDGEfab](https://edgemodders.ai/wiki/edgefab/) is the EDGE tool for making single animations, for instance from a video. An animation it stores shows here under **Project** or **Library**, and goes onto a lane with **+** like the game's.

Two limits for now. EDGEfab does not store animations yet, so these groups are normally empty. And **a made animation does not play in the game yet**: EDGEdir leaves such a clip out of the game and says so, and the clip before it goes on.
