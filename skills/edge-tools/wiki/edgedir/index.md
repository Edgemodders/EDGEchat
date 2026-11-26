<!-- Copied from EDGEweb's docs/wiki/edgedir/index.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedir/ (reviewed 2026-11-21) -->

# EDGEdir

EDGEdir is a director's tool for Cyberpunk 2077. You make a **scene**: a timeline that says what each person does, and when. You pick the game's own characters as **actors**, give them the game's own **animations** as clips, join the clips so they move as one, and watch it all in a 3D view. Then you play the scene in the running game, on real people, where it belongs.

It has two halves that work on the same scene:

| | EDGEdir, in VS Code | EDGE Director, in the game |
|---|---|---|
| Is | The editor: the timeline, the clips, the 3D preview | A window in the game: the same scene, on real people, in its real place |
| Best at | Building a scene: choosing animations, timing, transitions | Seeing it, and putting things right where they stand |

You don't write code for any of this.

**EDGEdir is not released yet.** It is built and its tests in VS Code have passed. In the game, only the first steps have run so far: EDGE Director played a scene of two people through on 2026-11-20. This section describes what is built; where something is untested, it says so. To try it now you build it from its source: see [Install and set up](https://edgemodders.ai/wiki/edgedir/install.html).

(Screenshot on the wiki, "EDGEdir's scene editor": The scene editor: the 3D preview on top with two actors' bodies mid-animation, the transport and the toolbar under it, the timeline with one lane for each actor and their clips, and the inspector on the right.)

| On this page | |
|---|---|
| [What it's for](https://edgemodders.ai/wiki/edgedir/#what-its-for) | Why a scene is hard to make by hand |
| [What it can do](https://edgemodders.ai/wiki/edgedir/#what-it-can-do) | The features, each with its page |
| [Words you'll meet](https://edgemodders.ai/wiki/edgedir/#words-youll-meet) | Scene, track, clip, actor, mark and the rest |
| [How it fits into EDGE](https://edgemodders.ai/wiki/edgedir/#how-it-fits-into-edge) | What it needs from the other tools |
| [Status](https://edgemodders.ai/wiki/edgedir/#status) | What is built, what was tested, what is not |
| [In this section](https://edgemodders.ai/wiki/edgedir/#in-this-section) | Every page |

## What it's for

The game has about 6,600 characters and about 147,000 animations. Making a person stand somewhere and do three things in a row, in time with someone else, normally means writing game files by hand and restarting the game to see each try.

EDGEdir reads the characters and animations from your own game and lets you lay them out on a timeline, as a video editor lays out film. The 3D preview shows the result at once, with no game running. When it looks right, **EDGE Director** plays it in the game: it spawns the people, starts each on their first animation, and moves each to their next one on time.

## What it can do

| You can | Where |
|---|---|
| **Make a scene** as a timeline with tracks and clips: move, trim, split, copy, undo | [The scene editor](https://edgemodders.ai/wiki/edgedir/editor.html) |
| **Pick actors** from the game's characters, and V | [Actors and animations](https://edgemodders.ai/wiki/edgedir/actors.html#actors) |
| **Find animations** by name among the game's, and put them on an actor's track | [Actors and animations](https://edgemodders.ai/wiki/edgedir/actors.html#animations) |
| **Watch it in 3D**: each actor's body plays the clip under the playhead | [The 3D preview](https://edgemodders.ai/wiki/edgedir/preview.html) |
| **Place the actors**: where each stands and which way they face | [The 3D preview](https://edgemodders.ai/wiki/edgedir/preview.html#marks) |
| **Join clips** with a transition, so two animations view as one movement | [Transitions and sequences](https://edgemodders.ai/wiki/edgedir/transitions.html) |
| **Reuse a run of clips** as a sequence, on any actor with the same skeleton | [Transitions and sequences](https://edgemodders.ai/wiki/edgedir/transitions.html#sequences) |
| **Use a stage**: play a scene on an [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) scene, with its props and people | [Sets](https://edgemodders.ai/wiki/edgedir/sets.html) |
| **Play it in the game**, from VS Code or from a window in the game | [Playing in the game](https://edgemodders.ai/wiki/edgedir/director.html) |
| **Adjust it in the game**: move an actor to where V stands, nudge and turn them, fix the scene to a spot | [Adjusting and pins](https://edgemodders.ai/wiki/edgedir/adjust.html) |
| **Name places** with pins, and have actors and the scene follow them | [Adjusting and pins](https://edgemodders.ai/wiki/edgedir/adjust.html#pins) |
| **Change the weather** for part of a scene | [Weather](https://edgemodders.ai/wiki/edgedir/weather.html) |

Not built yet: sound and camera tracks, packing a scene into a mod other players install, and V acting in a scene in the game. The timeline already has tracks for them, which hold named blocks for now.

## Words you'll meet

| Word | Means |
|---|---|
| **Scene** | One timeline: who does what, and when. A file ending in `.edgedir` |
| **Track** | One lane of the timeline. An **actor track** is one person; there are also audio, camera, weather, script, video and AI tracks |
| **Clip** | A block on a track. On an actor's track a clip is one animation, played for as long as the block is |
| **Actor** | A character of the game chosen for a track, or V |
| **Animation** | One movement from the game's files, such as a wave or a walk |
| **Rig** | A character's skeleton. An animation is made for one rig, and plays only on actors with that rig |
| **Mark** | Where an actor stands in the scene and which way they face: metres right and forward of the scene's middle, and a turn in degrees |
| **Transition** | A short block over the join between two clips that blends one into the other |
| **Sequence** | A run of clips with their transitions, stored by itself and reused |
| **Set** | The stage a scene plays on: an EDGEbuilder scene, with its props and people |
| **Pin** | A named place in the world, dropped where V stands. [REDnode](https://edgemodders.ai/wiki/rednode/)'s world pins |
| **The Desk** | Where EDGEdir keeps the scenes you are working on, on this PC |
| **EDGE Director** | EDGEdir's app in the game. It plays and adjusts scenes there |

## How it fits into EDGE

| It needs | For |
|---|---|
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Reading your game's characters and animations, and the bodies for the 3D preview. [REDcode](https://edgemodders.ai/wiki/redcode/) installs it; EDGEdir can also use its own copy |
| [REDnode](https://edgemodders.ai/wiki/rednode/) in the game | EDGE Director is a REDnode app. REDnode spawns the people, plays their animations and sets the weather |
| [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/), optional | Making a set: the props and people a scene plays among |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or Vortex, optional | Installing EDGE Director's file into the game |

## Status

**Version 0.0.30 with EDGE Director 0.6.1, not released (2026-11-21).**

| Part | Built | Tested |
|---|---|---|
| The scene editor, the Desk | Yes | In VS Code, by script: every step passed |
| Actors, the animation search, animations as clips | Yes | In VS Code, by script: every step passed |
| The 3D preview, marks | Yes | In VS Code, by script: every step passed |
| Transitions and sequences | Yes | In VS Code, by script: every step passed |
| Sets | Yes | In VS Code, by script: every step passed, with a hand-written set file. Not yet with a scene EDGEbuilder itself saved |
| Play in Game from VS Code | Yes | In VS Code against a stand-in for the game: passed. **Not in the game** |
| EDGE Director's window: opening and playing a scene | Yes | By script against a stand-in for the game: 12 of 13 steps passed; the one miss (a scene played from VS Code was not marked In the game) is fixed in 0.6.1 and not run again yet. **In the game, 2026-11-20:** it started, listed the Desk, and played two people through, on time and on the right sides. Pause, the playhead, Loop and the rest are not run there yet |
| EDGE Director: adjust, pins | Yes | By script against a stand-in for the game, with VS Code open beside it: every step passed. Pins in the scene editor: every step passed. **Not in the game** |
| Weather | Yes | In VS Code and against a stand-in, by script: 8 of 11 steps passed. The three misses (a weather clip's inspector had no In the game lines) are fixed in 0.0.30 and not run again yet. **Not in the game** |
| Sound, camera | No | |
| Packing a scene into a mod | No | |

"By script" means a Claude session ran the test's steps with real mouse and key presses, in a VS Code window or in EDGE Director's page in a browser; nobody watched. A "stand-in" runs EDGE Director's own code with no game and prints each thing it would ask the game to do. The owner's own tests by hand, and everything in the game, are still to come. The full record is on [EDGEdir's Tests page](https://edgemodders.github.io/EDGEdir/testing.html).

What is known not to match yet between the preview and the game is listed on [Playing in the game](https://edgemodders.ai/wiki/edgedir/director.html#what-the-game-will-not-match).

## In this section

| Page | What it covers |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/edgedir/install.html) | What you need, building it from source for now, and EDGE Director in the game |
| [Your first scene](https://edgemodders.ai/wiki/edgedir/first-scene.html) | A walk-through: one actor, two animations, a transition, the preview |
| [The scene editor](https://edgemodders.ai/wiki/edgedir/editor.html) | The timeline, clips, the transport, the inspector, the Desk, keys |
| [Actors and animations](https://edgemodders.ai/wiki/edgedir/actors.html) | Choosing actors, reading the game, searching animations, the rig rule |
| [The 3D preview](https://edgemodders.ai/wiki/edgedir/preview.html) | The view, the bodies, marks |
| [Transitions and sequences](https://edgemodders.ai/wiki/edgedir/transitions.html) | Joining clips, and reusing a run of them |
| [Sets](https://edgemodders.ai/wiki/edgedir/sets.html) | Playing a scene on an EDGEbuilder scene |
| [Playing in the game](https://edgemodders.ai/wiki/edgedir/director.html) | EDGE Director's window, Play in Game, what the game will not match |
| [Adjusting and pins](https://edgemodders.ai/wiki/edgedir/adjust.html) | Moving actors and the scene in the game, and named places |
| [Weather](https://edgemodders.ai/wiki/edgedir/weather.html) | The weather track |
| [Settings, commands and keys](https://edgemodders.ai/wiki/edgedir/settings.html) | Every setting, command, view and key |
| [Troubleshooting](https://edgemodders.ai/wiki/edgedir/troubleshooting.html) | When something does not work |
