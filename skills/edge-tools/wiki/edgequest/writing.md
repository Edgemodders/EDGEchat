<!-- Copied from EDGEweb's docs/wiki/edgequest/writing.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/writing.html (reviewed 2026-11-13) -->

# Writing a quest

In EDGEquest, a quest is one text file in your project, the **story file** (`<id>.quest.yaml`). You write the quest in story words, and EDGEquest makes the game's files from it each time you save. You can edit the story file on the **Storyboard**, with cards and buttons, or as text. Both change the same file.

**First time?** Follow [Your first quest](https://edgemodders.ai/wiki/edgequest/first-quest.html). It makes a quest step by step and plays it in the game. This page explains each part once you have done that.

| On this page | |
|---|---|
| [Starting a quest](https://edgemodders.ai/wiki/edgequest/writing.html#starting-a-quest) | New Quest, and what the template gives you |
| [The Storyboard](https://edgemodders.ai/wiki/edgequest/writing.html#the-storyboard) | Cards, arrows, and a beat's page |
| [What happens when you save](https://edgemodders.ai/wiki/edgequest/writing.html#what-happens-when-you-save) | The quest is made, and checked |
| [The Project Quests view](https://edgemodders.ai/wiki/edgequest/writing.html#the-project-quests-view) | Your quests in the sidebar |
| [Play it](https://edgemodders.ai/wiki/edgequest/writing.html#play-it) | Pack, install, and the test save |
| [Sharing your quest](https://edgemodders.ai/wiki/edgequest/writing.html#sharing-your-quest) | What players need |
| [Removing a quest](https://edgemodders.ai/wiki/edgequest/writing.html#removing-a-quest) | From the game, and from the project |

## Starting a quest

1. **Open a project in REDcode,** or make one with **REDcode: New Project**. A project is the folder that holds one mod's files; see [Projects](https://edgemodders.ai/wiki/redcode/projects.html).
2. **Run EDGEquest: New Quest...**, or press **New Quest** (the **+**) at the top of the Project Quests view.
3. **Give a title and an id.** The title is what the journal shows ("Something at the Door"). The id is short, in small letters, with `_` between words (`door_mystery`). The first time, EDGEquest also asks your modder name, and remembers it.
4. EDGEquest writes `door_mystery.quest.yaml` at the top of the project, opens it on the Storyboard, and makes the quest's game files.

**Choose the id with care.** It becomes part of the quest's file names and of everything the quest remembers in a save, so changing it later makes a different quest. Two quests with the same id overwrite each other.

The new quest already plays. It starts from EDGEquest's **template**: the objective "Go to the place" sends V to the apartment door in Megabuilding H10. When V gets there, V says a line and the player picks **Look around** or **Leave**. Each leads to its own ending.

The story file has to stay at the top of the project, beside the project's `.cpmodproj` file. Moved into a subfolder, it is no longer made.

## The Storyboard

The Storyboard shows your quest as **cards, one per beat**. A beat is one stage of the quest, with the objective the journal shows while it runs. Each card is titled with that objective.

| On the board | What it means |
|---|---|
| An arrow with a label | A choice leads there. The label is the option the player picks |
| A grey arrow | The default: where the quest goes after this beat if no choice sent it somewhere else |
| **quest succeeds** or **quest fails** on a card | The beat is an ending |
| A card no arrow leads to | Nothing in the quest goes there yet |

To move around:

- **Drag** the board to move it, and use the **mouse wheel** to zoom. The buttons in its corner zoom in, out, to fit the whole story, and to actual size.
- **Drag the line under the board** to make the board taller or shorter. Double-click the line to fit the board to the story.
- **Layout** lays the board out afresh and fits it in view. The beats that a choice leads to are placed side by side, in the same order as the options.

At the top of the Storyboard are its buttons:

| Button | What it does |
|---|---|
| **+ Beat** | Adds a new beat that nothing leads to yet, so the quest plays as before until you send a choice to it |
| **Make** | Saves the story file and makes the quest now |
| **Made files** | Lists the game files made from the story |
| **Layout** | Lays the board out afresh |
| **Open YAML** | Opens the story file as text, beside the board |

The header shows the quest's title, id and description. To change those, edit them in the text: see [The quest](https://edgemodders.ai/wiki/edgequest/story-file.html#the-quest).

(Screenshot on the wiki, "The Storyboard": A quest on the Storyboard: beat cards titled with their objectives, arrows labelled with the options that lead to them, the endings marked quest succeeds and quest fails, and the buttons + Beat, Make, Made files, Layout and Open YAML at the top.)

### A beat's page

Click a card to open its page below the board. Double-click a card to rename its objective. On the page you can:

| Do | How |
|---|---|
| Rename the objective, add a beat after this one, or delete the beat | **Rename**, **+ Beat after** and **Delete** at the top of the page. **+ Beat after** puts the new beat into the chain, right after this one |
| Say what follows the beat | The **Then** list: the next beat in the list, another beat, nothing, an ending that succeeds, or one that fails. "Nothing" stops the quest there and leaves it open in the journal |
| Add a step | **+ Step**: arrive at a place, play a scene (or a new one), wait, set a fact, music, sound, or end the quest |
| Move a step up or down, or delete it | The **↑**, **↓** and **✕** buttons beside it |
| Change a line's words, or an option's text | Click in its box, type, and press Enter |
| Add a line, a choice or a sound | **+ Line**, **+ Choice** and **+ Sound**, in the row at the end of each scene and under each option |
| Add an option to a choice | **+ Option** on the choice's row |
| Send an option to another beat | The **goes on to** list on the option. "The scene goes on" means the option leads nowhere special |
| Make an option yellow or white | The first list under the option. **auto** lets EDGEquest decide |
| Give an option a lifepath, an attribute check or a payment | The second list under the option: **Anyone**, a lifepath, a check, or **Pay eddies**. See [Kinds of options](https://edgemodders.ai/wiki/edgequest/story-file.html#kinds-of-options) |
| Move a line or an option up or down, or delete it | The **↑**, **↓** and **✕** buttons beside it. Where an option leads always stays its last item |
| Write how a line is spoken | The **Direction** and **Say** boxes under the line. See [Voice prompts](https://edgemodders.ai/wiki/edgequest/story-file.html#how-a-line-is-spoken) |
| Voice a line | **Generate** on the line, or **Voice all lines** on the scene. Both need EDGEwave. See [Voices](https://edgemodders.ai/wiki/edgequest/music-sound.html#voices) |
| Tick a checklist item | The **Checklist** at the end of the page |

Some things have no button yet and are done in the text, with **Open YAML**: the quest's title and description, its places, and a fact set in the middle of a scene.

(Screenshot on the wiki, "A beat's page": A beat's page under the Storyboard: its steps (a music cue and a scene), the scene's lines with their Direction and Say boxes, and a choice whose options have a goes on to list and colour and condition lists.)

Every change goes straight into the story file, with your comments kept. `Ctrl+Z` undoes it. [The story file](https://edgemodders.ai/wiki/edgequest/story-file.html) describes everything the file can hold.

## What happens when you save

A change on the Storyboard or in the text is in the editor only, and the tab shows a dot, until you **save** (`Ctrl+S`). Saving **makes the quest**: EDGEquest writes the quest's game files into your project and checks them against each other. The **Make** button and the command **EDGEquest: Make Quest** save and make in one go.

What you see after a save:

| Where | What |
|---|---|
| The status bar | While a story file is the active tab: when the quest was last made and how many checklist items are left, or how many problems it has. Click it to see the made files or the problems |
| VS Code's Problems panel | Each problem, at its line in the story file. A choice that goes to a beat that doesn't exist is one example |
| The Storyboard | With a problem in the story file, the cards give way to a notice that lists the problems. The board comes back once they are fixed |

Three rules:

- **A story with problems is not made.** The game files stay as they were at the last good save.
- **A made file you changed by hand is kept,** not overwritten. EDGEquest then lists it as a problem. See [A file I changed by hand isn't updated](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#a-file-i-changed-by-hand-isnt-updated).
- **Files that are no longer needed are removed** when you make the quest again, for example after you rename a scene. A file you changed by hand stays.

**Made Files...** lists the game files made from the story. Pick the quest's phase or a scene, and it opens in plain words on a quest page, just as the game's own do. [What saving makes](https://edgemodders.ai/wiki/edgequest/story-file.html#what-saving-makes) lists the files.

To make the quest only when you ask, switch off `edgequest.makeOnSave`. See [Settings and commands](https://edgemodders.ai/wiki/edgequest/settings.html).

## The Project Quests view

**Project Quests** lists the quests in REDcode's open project, or in any folder open in VS Code that is a WolvenKit project. Under each quest are its beats and its checklist, with how much is left to do. Click a quest to open its Storyboard. Each quest also has **Make Quest**, and **Made Files** in its right-click menu.

## Play it

Before the first time, make sure ArchiveXL and RED4ext are in the game ([What you need](https://edgemodders.ai/wiki/edgequest/install.html#what-you-need)), and **make a save and keep it**: your test save.

1. **Quit the game.**
2. In REDcode, **Pack and Install** the project. See [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html).
3. Start the game and **load your test save.**
4. The quest is in the journal. Track it and follow its marker.

(Screenshot on the wiki, "The quest in the game": Cyberpunk 2077 with the new quest's objective in the tracker, its map marker at V's apartment door, and the scene's choice on screen with its options.)

**Why a test save.** A quest starts once in each save, the first time that save loads with the quest installed. Saves made after that carry the quest's progress. A save from before the first install always starts the quest from the beginning, so it is the one to test with.

**To change the quest:** quit the game, edit the story, save, pack and install again, and load the test save again.

**A quest starts when a save loads.** In this preview there is no other way to start one: not at a place, not after another quest, not from a phone call. Other ways to start are planned. Until then, the first beat can make the player do something before anything else happens, such as going to a place.

REDcode's **Pack and Play**, which swaps a mod into the running game, doesn't work for quests: the game only takes in a new quest when it starts.

If something doesn't work, run **EDGEquest: Check Quest Mod...** on the project: it names what's wrong. **EDGEquest: Show Log** shows what EDGEquest did. See [Checking a quest](https://edgemodders.ai/wiki/edgequest/checking.html) and [Troubleshooting](https://edgemodders.ai/wiki/edgequest/troubleshooting.html).

> **Keep test quests apart.** Every quest made from the template starts on load and waits at the same door. Two installed together both play there, and their choices merge into one list. Keep one test quest per project, or [remove the old one](https://edgemodders.ai/wiki/edgequest/writing.html#removing-a-quest) before you test a new one.

## Sharing your quest

A quest is shared like any REDcode mod: see [Sharing your mod](https://edgemodders.ai/wiki/redcode/pack-install.html#sharing-your-mod). Tell players what it needs:

| Your quest | Players need |
|---|---|
| Always | ArchiveXL and RED4ext, and game 2.5 |
| It plays sounds you made yourself | The mod is then a REDmod, and the game must be started with REDmods switched on. See [Your own sounds](https://edgemodders.ai/wiki/edgequest/music-sound.html#your-own-sounds) |

Players don't need EDGEquest, REDcode or VS Code. A shared quest has not been tested on another player's PC yet.

## Removing a quest

**From the game:** in REDcode's Project view, open the **`...`** menu and choose **Uninstall**. See [Uninstall](https://edgemodders.ai/wiki/redcode/pack-install.html#uninstall). Your project is untouched.

**From the project:** there is no command for this yet. Deleting only the story file is not enough, because the game files made from it stay in the project and are packed again. Delete all of these in VS Code's Explorer:

| Delete | What it is |
|---|---|
| `<id>.quest.yaml` | The story file. To keep the quest for later, move it out of the project instead |
| `source\archive\mod\<author>\<id>` | The folder of game files made from it |
| `source\resources\<id>.archive.xl` | The file that tells ArchiveXL about the quest |
| `.edgequest\<id>.made.json` | EDGEquest's list of the files it made |

Then **Pack and Install** again, or **Uninstall** if the project is now empty.

**In your saves:** a save from before the quest was installed is not affected. What a save does when a quest it had started is no longer installed has not been tested, so keep your test save, and don't test on a save you care about.
