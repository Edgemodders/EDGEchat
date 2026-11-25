<!-- Copied from EDGEweb's docs/wiki/edgedir/troubleshooting.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedir/troubleshooting.html (reviewed 2026-11-21) -->

# Troubleshooting

EDGEdir is not released, and most of its in-game half is untested. Some of what follows is what should help, not what has been seen to help. If something here is wrong, or you hit something that is not here, please say so: [open an issue](https://github.com/Edgemodders/EDGEdir/issues), with the text of **EDGEdir: Show Log** if the trouble is in VS Code.

| On this page | |
|---|---|
| [In VS Code](https://edgemodders.ai/wiki/edgedir/troubleshooting.html#in-vs-code) | Reading the game, the preview, clips |
| [Playing in the game](https://edgemodders.ai/wiki/edgedir/troubleshooting.html#playing-in-the-game) | Play in Game and EDGE Director |
| [Known limits](https://edgemodders.ai/wiki/edgedir/troubleshooting.html#known-limits) | Not faults: not built yet |

## In VS Code

| You see | Try |
|---|---|
| **Read the Game** fails, or the Animations view says the game was not found | Set `edgedir.gamePath` to the Cyberpunk 2077 folder. With REDcode installed and its game folder set, this is not needed |
| A message that REDbridge was not found | Install [REDcode](https://edgemodders.ai/wiki/redcode/) and let it fetch REDbridge, or set `edgedir.bridgePath` to `REDbridge.exe`. If .NET is installed for your user only, set `edgedir.dotnetRoot` too |
| The Animations view lists files but no animations inside them, and says it needs a newer REDbridge | REDbridge is older than 0.14.0. Update it: REDcode's **Install REDbridge** fetches the latest |
| The first read takes minutes | It does: about two minutes for the files, about three and a half more for the animations, once for each game version. You can work meanwhile |
| The actor list is empty | The game is not read yet. The list says why at its top |
| A body does not appear in the preview, and the view's line says "Not loaded" | The line gives the reason. Click **Frame**: it asks again for every file that failed. The game's files must be reachable through REDbridge |
| V has no head | Meant: V shows as the game's base body. Your own V cannot be read from the game's files |
| A clip is hatched red and says **Unfit** | Its animation is made for another skeleton than the track's actor has: see [the rig rule](https://edgemodders.ai/wiki/edgedir/actors.html#the-rig-rule). Change the actor, or use another animation |
| A number you type goes back to what it was | The change does not fit, and a message says why: for example more loops than there is room for before the next clip |
| A scene opens as plain text | It was opened in VS Code's text editor. Right-click the file's tab, **Reopen Editor With...**, **EDGEdir Scene Editor**. A scene named on the command line when VS Code starts opens as text: a limit of VS Code's |
| The editor says the file is not a scene | The text is damaged. **Open as Text** shows it beside the message, which names what is wrong |
| The Sets view is empty | It lists EDGEbuilder scenes in your EDGE Library and the open REDcode project. Save the scene there in EDGEbuilder, then **Refresh Sets** |

## Playing in the game

| You see | Try |
|---|---|
| **Play in Game** says it needs EDGE Director | EDGE Director is not in the game's folder: [install it](https://edgemodders.ai/wiki/edgedir/install.html#edge-director-in-the-game) |
| It says EDGE Director is in the game's folder and is not running | Start the game and load a save. In REDnode's Mod Manager (F10) switch **EDGE Director** on and allow **bridge** and **archives** |
| It says the EDGE Director in the game is older than EDGEdir needs | Build its zip again and install it over the old one |
| EDGE Director is not in REDnode's Mod Manager | Check the folder `red4ext\plugins\REDnode\apps\edge-director` exists in the game's folder. It needs REDnode 0.67.2 or later: on an older REDnode the Mod Manager says so |
| "Nothing to play in the game" | No actor track has both an actor and a clip the game can play, and there is no weather. The message names the first reason: for instance a track with clips and no actor |
| The line turns red: "Not played", with a reason | EDGE Director could not do a step, and says which: an animation could not be written, a person could not be spawned. Nobody is left behind |
| "The player stopped: its people are gone from the game" | EDGE Director was switched off or ended while a scene played. Switch it on again and play |
| "V was not found: load a save first" | The game is at a menu. Load a save |
| The first Play fails and says to allow REDbridge | Allow EDGE Director's **bridge** permission (and **archives**) in REDnode's Mod Manager, then press Play again |
| The first play of a scene takes a few seconds longer | Each actor's animations are written once. Later plays of the same clips are quicker |
| A person stands stiff with arms out for a moment | The game's "T pose" at a person's first animation. EDGE Director starts everybody once before the scene to get past it; whether that is enough is one of the things the first tests must show |
| The scene does not look like the preview | Read [what the game will not match](https://edgemodders.ai/wiki/edgedir/director.html#what-the-game-will-not-match): several differences are known and listed |
| EDGE Director's Adjust and Pins buttons are off, with a yellow box | The scene has unsaved changes in VS Code. Save it there. Until then EDGE Director plays the scene as it was last saved |
| **Move to V** says the scene plays in front of V | Press Play first, or **The Scene Is Here**: [the scene's place](https://edgemodders.ai/wiki/edgedir/adjust.html#the-scenes-place) |
| An actor cannot stand at a pin | The scene plays in front of V. Give it a place first |
| The window does not take clicks | REDnode's overlay is in its passive mode. Press **F10** |

## Known limits

These are not faults. They are not built yet, or wait on another tool.

| Limit | Why |
|---|---|
| V does not act in the game | REDnode can direct only people it spawned. Work is planned in REDnode |
| A walk does not move its actor | The game does not apply an animation's own movement here. Walking an actor to a place is planned |
| **In** and **Speed** are the preview's | A clip in the game has no start point and no speed |
| Sound and camera tracks do nothing | Planned next |
| A scene cannot be packed into a mod | Planned: today a scene plays on your own PC through EDGE Director |
| Animations made in EDGEfab do not play in the game | They must first be turned into the game's format |
| A pin cannot be renamed | Remove it and drop a new one |
| Bodies are grey, with no clothes' colours or faces | The preview is for timing and poses |
