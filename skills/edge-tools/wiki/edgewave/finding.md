<!-- Copied from EDGEweb's docs/wiki/edgewave/finding.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgewave/finding.html (reviewed 2026-11-22) -->

# Find and play sounds

Before you can change a sound you have to find it. EDGEwave's **Game Assets** view lists the game's sounds and nothing else, with a play button on every row. Its **Desk**, **Project** and **Library** views list your own work.

| On this page | |
|---|---|
| [The three kinds of sound](https://edgemodders.ai/wiki/edgewave/finding.html#the-three-kinds-of-sound) | Sound effects, voice lines, music |
| [Browse Game Assets](https://edgemodders.ai/wiki/edgewave/finding.html#browse-game-assets) | The groups, and what each row can do |
| [Filter](https://edgemodders.ai/wiki/edgewave/finding.html#filter) | By words or a pattern, with a Try it |
| [Open a sound in the editor](https://edgemodders.ai/wiki/edgewave/finding.html#open-a-sound-in-the-editor) | A game sound, a voice line, a file from your PC |
| [A new, empty sound](https://edgemodders.ai/wiki/edgewave/finding.html#a-new-empty-sound) | Start from nothing |
| [The Hear tab](https://edgemodders.ai/wiki/edgewave/finding.html#the-hear-tab) | Every recording of an event |
| [Play in the Game](https://edgemodders.ai/wiki/edgewave/finding.html#play-in-the-game) | An event, on V, in the running game |
| [Which event am I hearing?](https://edgemodders.ai/wiki/edgewave/finding.html#which-event-am-i-hearing) | From a sound in the game to its name |
| [Your own sounds: Desk, Project and Library](https://edgemodders.ai/wiki/edgewave/finding.html#your-own-sounds-desk-project-and-library) | Sounds in progress, the project's mixes and what it puts in the game, and the EDGE Library |

## The three kinds of sound

| Group in Game Assets | What it holds | How it is arranged |
|---|---|---|
| **Sound effects** | Shots, doors, footsteps, interface clicks: every event that has recordings, about 20,000 | By **event**, the game's name for something to play. Under each event are its **variations**, the recordings the game picks from. An event the game's lists have no name for shows as `event` and a number, marked **no name** |
| **Voice lines** | Every spoken line, one `.wem` file each. English alone has about 100,000 | **Base game** and **Phantom Liberty**, then each language whose voices you have installed, then the folders `vo` (normal speech), `vo_holocall`, `vo_helmet` and `vo_rewinded` |
| **Music and streamed sounds** | About 4,800 long sounds, mostly music, named by number only, with their sizes | One list |

Music **cues**, the events that start and stop the game's music, are not in this view: they have no recording of their own to list. [EDGEquest](https://edgemodders.ai/wiki/edgequest/music-sound.html)'s pickers and [assistants](https://edgemodders.ai/wiki/edgewave/assistants.html) search them through EDGEwave.

## Browse Game Assets

Click EDGEwave's icon in the activity bar. **Game Assets** is the lower view. Unfold a group with the small arrow beside it.

Big folders are grouped by the parts of the names, split at `_`. Under Sound effects you first see groups such as `amb` and `w`, each with a count such as `312 events`. Voice lines unfold the same way: `judy`, then `judy_q307`, then the lines.

Move the mouse over a sound and buttons appear on its row. Right-click it for the same actions as a menu.

| Action | Where | Does |
|---|---|---|
| **▶** (Play) | On the row | Plays it at once, with no tab. An event plays one of its variations, picked at random as the game does. **▶** again stops it |
| **+** (Add to the Open Sound) | On the row | Adds it as a new track to the sound you have open in the editor. With none open, it offers **Open in EDGEwave** or **Create a Sound** |
| **Open in EDGEwave** (a page with an arrow) | On the row | Opens it in the [editor](https://edgemodders.ai/wiki/edgewave/editing.html) as its own sound document. On an event, that is its first variation |
| Click the row, or **Hear** | The row; the right-click menu | Opens [the Hear tab](https://edgemodders.ai/wiki/edgewave/finding.html#the-hear-tab) |
| **Play in the Game** | Right-click an event | Plays the event in the running game. See [below](https://edgemodders.ai/wiki/edgewave/finding.html#play-in-the-game) |
| **Copy Name** | Right-click | An event's name, for a quest or a script. A variation's hash. A file's game path |

| What you should see | |
|---|---|
| After **▶** | The status bar at the bottom of VS Code says `EDGEwave: playing ...`. The first sound takes about a second to start, later ones start at once |
| After **+** | The status bar says `EDGEwave: added to <name> as a new track`, and the editor has one more lane |

**▶** plays through Windows' default sound output. If it can't play a sound, a message says why and offers the Hear tab.

(Screenshot on the wiki, "Game Assets": EDGEwave's sidebar with the Desk and Project views on top and Game Assets below it: Sound effects unfolded to an event with three variations, Voice lines and Music and streamed sounds folded, and the play, add and open buttons on the hovered row.)

## Filter

Press the funnel icon in the Game Assets title bar (**Filter the Game's Sounds**), or run **EDGEwave: Filter the Game's Sounds** from the command palette (`Ctrl+Shift+P`).

| You type | It finds |
|---|---|
| Words, such as `katana equip` | Names that contain every word |
| A pattern with `*` (any text) and `?` (any one character), such as `*_q307_f_*` | Names that fit the pattern |
| A number | The event with that hash |

The filter covers all three groups at once. A search of the files stops at the first 5,000 matches, and the view says so when it does. **Clear the Filter**, beside the funnel while a filter is set, shows everything again.

### Try it: Judy's lines

1. Press the funnel, type `judy q307` and press Enter.
2. Unfold **Voice lines**.
3. Move the mouse over a line and press **▶**.

| What you should see | |
|---|---|
| After step 1 | Each group shows the filter beside its name. **Sound effects** says nothing matches |
| After step 2 | Judy's lines from the quest q307, each with its size and folder |
| After step 3 | You hear the line |

A voice line's file name ends in `_f_` or `_m_` and a long number. For V's own lines that is the female or the male voice.

## Open a sound in the editor

Opening a sound makes a **sound document** for it, a `.edgewave` file in your project, and opens that in EDGEwave's editor. With no project open, it goes on the [Desk](https://edgemodders.ai/wiki/edgewave/finding.html#the-desk) instead, with no question about a folder. Opening the same sound again reopens the same document, with your edits.

| You have | Do this |
|---|---|
| A game sound effect | In Game Assets, press **Open in EDGEwave** on a variation |
| A game voice line | In Game Assets, unfold **Voice lines**, find the line (the filter helps) and press **Open in EDGEwave**. The editor marks it as a voice line, which the [voice tools](https://edgemodders.ai/wiki/edgewave/voices.html) use |
| A sound playing in REDcode | REDcode's sound list (**REDcode: Browse Game Sounds**) and its audio player both have an **Open in EDGEwave** button. See [The game's sound effects](https://edgemodders.ai/wiki/redcode/viewers.html#the-games-sound-effects) |
| A sound file on your PC | In the **Desk** view's title bar, press the folder icon (**Open Sound in EDGEwave...**) and pick the file. Or right-click a sound file in VS Code's Explorer or REDcode's Project view and choose **Open Sound in EDGEwave...**. It takes `.wav`, `.ogg`, `.mp3`, `.flac`, `.opus` and `.wem` |

To add a sound to a mix you already have open, use **+** instead: see [Tracks](https://edgemodders.ai/wiki/edgewave/editing.html#tracks).

(Screenshot on the wiki, "Open in EDGEwave, and the mix in the Project view": REDcode's sound browser with the Open in EDGEwave button, and EDGEwave's Desk and Project views in the side bar listing the project's mix.)

## A new, empty sound

A sound doesn't have to start from the game.

1. In the **Project** view's title bar, press **+** (**Create a Sound in the Project...**).
2. A save box opens in your project's `source\raw\edgewave\sounds` folder, with the name `New sound.edgewave`. Change the name if you like and press **Save**.

With no project open, or for a sound you are not sure about yet, press **+** in the **Desk** view instead (**Create a Sound on the Desk...**) and give it a name.

| What you should see | |
|---|---|
| The editor | One empty lane, and a note: "No sound yet. Drop sound files here or on the lanes (hold Shift as you drop them), or use Add Sound (+), Generate Sound or Speak Line." |
| The buttons | **Render WAV** and **Add to Project...** are greyed until the sound has a track |

Fill it by dropping your own sound files on it, with **Add Sound**, or with a [voice tool](https://edgemodders.ai/wiki/edgewave/voices.html). [Edit and mix](https://edgemodders.ai/wiki/edgewave/editing.html#tracks) has the details.

## The Hear tab

Clicking a sound's row opens a tab titled **Hear: ...** beside the editor. It plays one recording, and has a **Play** button for each recording of an event, plus **Play a random one**. Use it to compare an event's variations.

The Hear tab plays the raw recordings. In the game, the same event can sound different: the game adds its own effects and distance.

## Play in the Game

To hear an event as the game plays it, right-click it in Game Assets and choose **Play in the Game**.

| You need | |
|---|---|
| [REDnode](https://edgemodders.ai/wiki/rednode/install.html) 0.43 or later in the game | It takes the request from VS Code |
| The game running, with a save loaded | The sound plays on V |

| What you should see | |
|---|---|
| With the game running | The status bar says `EDGEwave: playing <event> in the game`, and you hear it in the game, with the game's own mix |
| Without it | A message saying to start the game with REDnode |

**EDGEwave: Stop Sound**, in the command palette, stops a long sound. The next sound you play in the game also stops the one before.

Two things to know. The game says nothing about a name it doesn't know: you just hear nothing. And some events change the game's own sound state: in testing, after about 25 events tried in a row, all game sound stopped. Opening the pause menu and going back brought it back.

## Which event am I hearing?

Often you know the sound from playing, not its name. Two ways to get from one to the other:

- **Guess and filter.** Event names are built from plain words, such as `w_melee_katana_equip` for a weapon or `dev_vending_machine_can_falls` for a vending machine. Try the thing's name in the filter and listen with **▶**.
- **Trace it in the game.** REDnode's [Sound Tracer](https://edgemodders.ai/wiki/rednode/sound-tools.html#sound-tracer) lists every event the game plays, as it plays it. Do the thing in the game, read the name, and filter for it here.

One action can play several events at once. A can dropping from a vending machine is several sounds layered together, so changing one of them changes only part of what you hear.

<a id="the-sounds-view"></a>

## Your own sounds: Desk, Project and Library

Since EDGEwave 0.3.0, three views above Game Assets list your own work. Up to 0.2.0 they were one view, **Sounds**.

| View | What it holds |
|---|---|
| [**Desk**](https://edgemodders.ai/wiki/edgewave/finding.html#the-desk) | Sounds you are working on, kept across restarts until you move them into a project or add them to the Library. Below them, **Recent**: the sound documents you opened lately, from any folder |
| [**Project**](https://edgemodders.ai/wiki/edgewave/finding.html#the-project-view) | The open project: its **Mixes**, and **Project sounds**, what it puts in the game |
| [**Library**](https://edgemodders.ai/wiki/edgewave/finding.html#the-library-view) | Your [EDGE Library](https://edgemodders.ai/wiki/library.html)'s folders, with the sounds in them |

A **▶** on a mix's row plays its render at once, with no tab. A mix you haven't rendered yet shows it greyed: **Render it first**.

### The Desk

The Desk is EDGEwave's own scratch space, for sounds that don't belong to a project yet. It is kept in `%LOCALAPPDATA%\EDGEwave\desk`, and no other tool reads it.

| How a sound gets on the Desk | |
|---|---|
| **+** in the Desk's title bar (**Create a Sound on the Desk...**) | Asks a name, then an empty sound |
| **Create a Sound** or **Open in EDGEwave** on a game sound, with no project open | Lands here, with no question about a folder |
| **Copy to the Desk**, on a project's mix or a Recent one | A copy with its files. The original stays where it was |
| **Edit on the Desk**, on a Library sound | A copy to change and add to the Library again |
| **Open on the Desk**, on a plain sound file in the Library | A new sound with the file as its first track |

| On a Desk sound (hover, or right-click) | Does |
|---|---|
| **▶** | Plays its render |
| **Move to Project...** | Copies it into the open project, `source\raw\edgewave\sounds\<name>\`, and takes it off the Desk. Then its own **Add to Project...** puts it in the game |
| **Add to Library...** | Asks a Library folder and copies it there. It needs a render first. For a sound made from a game file, the folder list starts with **Use the game path**, which files it under the game's own folders. Adding it again later updates it there, one version up |
| **Reveal in Library** | Shows its copy in the Library view. The row says both versions |
| **Rename...** | Renames it and its files |
| **Take Off the Desk...** | Sends it to the Recycle Bin. A copy in the Library stays |

A copy always stands alone: any sound file it used from another folder is copied with it. The game's own sounds are never copied: a sound made from a game file keeps reading it from your game.

### The Project view

| Group | Shows | Click |
|---|---|---|
| **Mixes** | The project's sound documents. One taken from the Library says **from the Library, v*n*** | Opens it in the editor |
| **Project sounds** | What the project puts in the game, read from the project's own files: named sounds (a new sound, or one that replaces or silences a game event), overrides of a game sound, and REDnode package sounds. It lists them wherever the mix that made them is kept | Opens the Hear tab |

| Button | Where | Does |
|---|---|---|
| **+** | Title bar | **Create a Sound in the Project...** |
| **Refresh from Library...** | Title bar | Lists the project's Library sounds that have a newer version there, and copies in the ones you tick. A change you made to the project's copy is lost then, and the list says so |
| Refresh | Title bar | Reads the lists again |
| **▶**, **Open the Mix That Made It** | Hover a project sound | Plays it; opens its mix, when EDGEwave knows it |
| **Copy Name** | A named sound's row, or right-click | The name a quest, scene or script plays it by |
| **Show the WAV** | Right-click a named sound | Its WAV file in the project |

The view shows the project in the open folder: open the project's own folder in VS Code, the one with the `.cpmodproj` file directly in it.

### The Library view

The [EDGE Library](https://edgemodders.ai/wiki/library.html) is one folder of your own that every EDGE tool shares, for work you keep for good. The first time, EDGEwave offers `Documents\EDGE Library`, or a folder you pick. The folders under it are yours: EDGEwave never makes one by itself. The view shows every folder, but only the sounds in it: EDGEwave's sounds, and plain `.wav`, `.ogg`, `.mp3` and `.flac` files. Other tools' items are theirs to show.

| On a Library sound | Does |
|---|---|
| A click | The Hear tab |
| **▶** | Plays it at once |
| **Add to Project** | Copies it into the open project, and notes where it came from in the project's `source\library.json`. Adding it again later replaces that copy |
| **Edit on the Desk** | A copy on the Desk, to change |
| **Reveal in File Explorer** | Its folder in Windows' File Explorer. Each folder has the same button on hover, and the title bar has it for the whole Library |

**Set the Library Folder...**, in the title bar, picks another folder.

(Screenshot on the wiki, "The Desk, Project and Library views": EDGEwave's side bar with the Desk (a sound or two, one with its ▶ and Add to Library buttons on hover, and Recent below), the Project view (Mixes and Project sounds), the Library view with a folder unfolded, and Game Assets below.)
