<!-- Copied from EDGEweb's docs/wiki/edgedir/settings.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedir/settings.html (reviewed 2026-11-21) -->

# Settings, commands and keys

**EDGEdir is not released yet.** This page describes what is built on its `main`, for review before the first release; see the [Overview](https://edgemodders.ai/wiki/edgedir/) for what has been tested.

A reference for EDGEdir 0.0.30 and EDGE Director 0.6.1.

| On this page | |
|---|---|
| [Settings](https://edgemodders.ai/wiki/edgedir/settings.html#settings) | Three, all optional |
| [Views](https://edgemodders.ai/wiki/edgedir/settings.html#views) | |
| [Commands](https://edgemodders.ai/wiki/edgedir/settings.html#commands) | |
| [Keys in the scene editor](https://edgemodders.ai/wiki/edgedir/settings.html#keys-in-the-scene-editor) | |
| [EDGE Director's window](https://edgemodders.ai/wiki/edgedir/settings.html#edge-directors-window) | |
| [Where things are kept](https://edgemodders.ai/wiki/edgedir/settings.html#where-things-are-kept) | |

## Settings

In VS Code's settings, search for `edgedir`. All three can stay empty when REDcode is installed.

| Setting | Means |
|---|---|
| `edgedir.gamePath` | The Cyberpunk 2077 folder. Empty: EDGEdir uses REDcode's or EDGEdeck's, or looks for the game itself |
| `edgedir.bridgePath` | `REDbridge.exe`, or its folder. Empty: REDcode's copy |
| `edgedir.dotnetRoot` | The folder of a .NET runtime installed for one user, for REDbridge. Empty: REDcode's setting, or the system's .NET |

## Views

| View | Shows |
|---|---|
| **Desk** | Your scenes and sequences; scenes opened from elsewhere under Recent |
| **Sets** | EDGEbuilder scenes in the EDGE Library and the open REDcode project |
| **Library** | Empty in this version |
| **Animations** | The game's animations, and ones made in EDGEfab |

## Commands

From the command palette (`Ctrl+Shift+P`, type `EDGEdir`), or from the views' buttons and right-click menus.

| Command | Does |
|---|---|
| **New Scene** | A new scene on the Desk |
| **New Sequence** | A new, empty sequence on the Desk, for one rig |
| **Open Scene**, **Rename...**, **Delete**, **Reveal in File Explorer** | On a scene or sequence of the Desk. Delete goes to the Recycle Bin |
| **Remove from Recent** | Forgets a scene opened from elsewhere; the file stays |
| **Refresh the Desk** | Looks at the Desk again |
| **Add to Track** | On an animation or a sequence: puts it on the selected actor track at the playhead |
| **Read the Game**, **Read the Game Again** | Reads characters and animations from your game; again after a game update |
| **Search Animations...**, **Clear the Search** | In the Animations view |
| **Only What Fits the Selected Actor** | Hides animations for other rigs |
| **Only the Selected Actor's Own Files** | Shows only the animation files that character carries |
| **Copy Animation Name**, **Copy Path** | On an animation or a file |
| **Refresh** | Looks again for made animations |
| **New Scene on This Set**, **Refresh Sets**, **Reveal in File Explorer** | In the Sets view |
| **Show Log** | EDGEdir's log, for when something fails |
| **Copy the Development Director into the Game** | For people working on EDGEdir itself: copies a built EDGE Director into the game folder. Players install its zip instead |

In the scene editor's toolbar: the transport, **Play in Game**, **Add Track**, **Add Clip**, **Add Transition**, **Split**, **Save as Sequence**, **Delete**, zoom out and in, **Fit**, **Snap**.

## Keys in the scene editor

They work while the timeline has the focus, not while you type in a field.

| Key | Does |
|---|---|
| **Space** | Play, stop |
| **←**, **→** | One frame; with **Shift**, ten |
| **Ctrl+←**, **Ctrl+→** | To the previous or next clip edge |
| **Home**, **End** | The scene's start and end |
| **S** | Split the clip under the playhead |
| **Delete**, **Backspace** | Delete the selection |
| **Ctrl+A** | Select every clip |
| **Esc** | Clear the selection |
| **Ctrl+C**, **Ctrl+X**, **Ctrl+V**, **Ctrl+D** | Copy, cut, paste, duplicate |
| **Ctrl+Z**, **Ctrl+Y** | Undo, redo |
| **Ctrl+S** | Save |
| **+**, **-** | Zoom the timeline in and out |
| **Alt**, while dragging | No snapping for that drag |
| **Ctrl** + scroll | Zoom the timeline. **Shift** + scroll moves along it |

## EDGE Director's window

| Where | Buttons |
|---|---|
| Scenes | A scene's row opens it; **Refresh** |
| The header | **Scenes** (back to the list), **The Scene Is Here**, **In Front of V** |
| The transport | **Play**, **Pause** (then **Resume**), **Stop**, **Start Again**, **Loop**; drag the playhead on the strip's ruler; drag the bar under the strip to size it |
| The strip | An actor's name chooses them |
| Adjust | **Move to V**, **Left**, **Right**, **Forward**, **Back**, **Turn -15**, **Turn +15** |
| Pins | The name box and **Drop a Pin Here** (or Enter); for each pin **Go There**, the actor **Here**, **Scene Here**, **Drop Again**, **Remove** |
| Cast | An actor's row chooses them; **Go There** |

It asks for two of REDnode's permissions, **bridge** and **archives**, to write each actor's animations into a form the game plays.

## Where things are kept

| What | Where |
|---|---|
| Your scenes and sequences (the Desk) | `%LOCALAPPDATA%\EDGEdir\desk` |
| A scene's own pins | `<scene>.pins.json`, beside the scene's file on the Desk |
| What was read from the game, and bodies and animations for the preview | `%LOCALAPPDATA%\EDGEdir\cache`. Safe to delete: EDGEdir reads it again |
| The folder EDGEdir and EDGE Director talk through | `%LOCALAPPDATA%\EDGEdir\play` |
| EDGE Director, in the game | `red4ext\plugins\REDnode\apps\edge-director` |
| Your own pin sets from REDnode's Pins window | `%APPDATA%\@rednode\overlay\pins`. EDGEdir reads them and never changes them |

EDGEdir changes nothing in the game's own files, and keeps no game data in a scene: a scene names animations by where they are in your game.
