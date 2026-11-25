<!-- Copied from EDGEweb's docs/wiki/edgequest/troubleshooting.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/troubleshooting.html (reviewed 2026-11-13) -->

# Troubleshooting EDGEquest

Find what you see in the left column. If it isn't here, the [last section](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#anything-else) says where to look and where to ask.

| Where are you stuck? | |
|---|---|
| [Setting up](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#setting-up) | Empty views, the game folder, REDbridge |
| [Writing and saving](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#writing-and-saving) | The Storyboard, problems in the story file, made files |
| [In the game](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#in-the-game) | The quest doesn't show, V arrives and nothing happens, choices |
| [Music, sound and voices](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#music-sound-and-voices) | Music that plays on, silent sounds, the picker |
| [Assistants](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#assistants) | Claude can't see EDGEquest |
| [Anything else](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#anything-else) | The log, Check Quest Mod, where to ask |

EDGEquest from a store updates itself, and many problems are fixed in a newer version. If something looks broken, check the Extensions view for an update first.

## Setting up

<a id="game-quests-stays-empty-or-says-something-is-missing"></a>**Game Quests** shows a message instead of the game's quests:

| You see | Do this |
|---|---|
| "EDGEquest needs your Cyberpunk 2077 folder" | Click **Set Game Folder** and pick the folder that holds `bin`, `archive` and `r6` |
| "REDbridge, which was not found" | REDbridge is the program that reads the game's files. Install [REDcode](https://edgemodders.ai/wiki/redcode/install.html) and run its **Install REDbridge** command. Or set `edgequest.bridgePath` to where `REDbridge.exe` is |
| "Reading the game's quests..." for a long time | The first read takes a while. Then the quest index is built in the background, about a minute and a half: watch the status bar |
| "The game's quests could not be read" | Click **Show Log** to see why, then **Try Again**. The two usual causes are in the next rows |
| The log says REDbridge could not start, or mentions .NET | REDbridge needs the .NET 10 runtime. REDcode offers to install it: see [Installing REDbridge](https://edgemodders.ai/wiki/redcode/install.html#installing-redbridge) |
| It worked before a game update, or your game isn't 2.5 | EDGEquest works with game **2.5** and REDbridge **0.11.0** or later only. Update REDbridge from REDcode |
| Find Quest finds nothing | The quest index isn't built yet. Wait for the status bar. To build it again, use **Rebuild Quest Index** in the Game Quests view's **`...`** menu |

**Project Quests:**

| You see | Do this |
|---|---|
| "No WolvenKit project is open" | Open a project in REDcode, or open a folder that holds a `.cpmodproj` file. Then click **New Quest**. No project yet: see [Projects](https://edgemodders.ai/wiki/redcode/projects.html) |
| "This project has no quests yet" | Normal for a new project. Click **New Quest** |

## Writing and saving

| You see | Do this |
|---|---|
| The story file opens as text, not as the Storyboard | Press **Open Storyboard** in the editor's title bar, or right-click the file's tab, choose **Reopen Editor With...** and pick **Storyboard** |
| The Storyboard shows a list of problems instead of cards | The story file has a mistake, usually from an edit in the text. Each problem has a link to its line. Fix them there and the board comes back |
| I changed something on the Storyboard, but the game files didn't change | Changes are in the editor until you save. Press `Ctrl+S`, or **Make**. A dot on the tab means unsaved changes |
| The status bar says **problems, not made** | Click it. The Problems panel lists each problem at its line. The commonest are in the next table |
| The status bar says **not in a project** | The story file must be at the top of the project, beside its `.cpmodproj` file. Move it back there |
| <a id="a-file-i-changed-by-hand-isnt-updated"></a>The Problems panel says files "were changed by hand since EDGEquest made them, so they were kept" | You, or another tool, changed one of the made game files. EDGEquest keeps it so your change isn't lost, and stops updating it. To get EDGEquest's version again, delete the file it names and make the quest. To keep your change, put it into the story file instead, if the story file can say it |
| After voicing a scene: `"sound" cannot speak in this scene` | The first release of EDGEquest broke the story file when a scene with a sound in it was voiced. Update EDGEquest. The problem then names the fix: delete the `voice:` lines under the `sound:` item |

What the commonest problems mean:

| The problem says | It means |
|---|---|
| `go: "..." is not one of the beats` | An option leads to a beat that doesn't exist. Check the spelling, or pick the beat again in **goes on to** |
| "The scene ... is never played" | No beat has a step that plays this scene. Add a **Play a scene** step, or delete the scene |
| The place "is not a game map marker the quest index knows" | The marker's path is wrong, or the quest index isn't built yet. See [Places](https://edgemodders.ai/wiki/edgequest/story-file.html#places) |
| The place "has no trigger area to arrive in" | EDGEquest found no area for V to arrive in at that marker. See [Places](https://edgemodders.ai/wiki/edgequest/story-file.html#places) |
| "Every option of this choice has a lifepath, a check or a payment" | Some V could have nothing to pick. Leave one option open to everyone |
| "The file is not valid YAML" | The text's layout is broken, often the indentation. Undo your last edit in the text (`Ctrl+Z`) |

## In the game

Only one place, V's apartment door, has been tried in the game. If another place doesn't work, please [report it](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#anything-else).

<a id="the-quest-doesnt-show-in-the-journal"></a>**The quest doesn't show in the journal.** Check these in order:

| Check | Do this |
|---|---|
| Is ArchiveXL in the game, with RED4ext? | Without them the game never hears of your quest. See [What you need](https://edgemodders.ai/wiki/edgequest/install.html#what-you-need) |
| Did you **Pack and Install** after the last save? | Saving the story file changes the project, not the game. Quit the game, **Pack and Install**, start it again |
| Did you use **Pack and Play**? | It can't add a quest to a running game. Use **Pack and Install** and restart |
| Which save did you load? | Load a save from **before** you first installed the quest. A quest starts once in each save. In a save made later, it may already have started or ended, and it doesn't start again |
| Does the story file have problems? | A quest with problems isn't made. Look at the status bar and the Problems panel |
| Still nothing | Run **Check Quest Mod** on the project and fix what it names. See [Check Quest Mod](https://edgemodders.ai/wiki/edgequest/checking.html#check-quest-mod) |

Other things you may see:

| You see | Do this |
|---|---|
| <a id="v-reaches-the-place-and-nothing-happens"></a>V reaches the place and nothing happens | V arrives by stepping **inside the place's trigger area**, an invisible box, not by being close to the marker. Walk right into the spot, as you would in the game's own quest. For the template, that is inside V's apartment. If it still doesn't fire, run Check Quest Mod: it warns when a quest waits in an area that nothing switches on |
| <a id="two-quests-play-their-scenes-at-the-same-place"></a>Two quests play their scenes at the same place, and their options show in one list | Every quest made from the template starts when a save loads and waits at the same door. With two installed, both scenes play when V arrives, and the game merges their choices. Nothing is broken, but it's confusing. Keep one test quest at a time: [remove the old one](https://edgemodders.ai/wiki/edgequest/writing.html#removing-a-quest), then pack and install again |
| An attribute check shows `15 / 20` and can't be picked | That's the game saying V's attribute (15) is below what the check needs (20). Checks grow with V's level, and at a high level `hard` can ask for 20, the top of the scale. If most players should pass, use `easy` or `medium`. See [Kinds of options](https://edgemodders.ai/wiki/edgequest/story-file.html#kinds-of-options) |
| A failed check is dimmed, not red | That's how the game shows a failed check in a conversation. The all-red prompt is for objects, such as forcing a door |
| Lines show, but there are no voices | Expected in this preview: lines play as subtitles. See [Voices](https://edgemodders.ai/wiki/edgequest/music-sound.html#voices) |
| The quest stays open in the journal and never ends | A beat has nothing after it. On its page, set **Then** to an ending, or to the beat that should follow |
| I removed the quest, and a save still shows it | What a save does once a started quest is uninstalled hasn't been tested. Go back to a save from before the quest. See [Removing a quest](https://edgemodders.ai/wiki/edgequest/writing.html#removing-a-quest) |

## Music, sound and voices

| You see | Do this |
|---|---|
| The music keeps playing after the quest | A START cue plays until its STOP. Add a **Music** step with the STOP cue to **every** ending, including the failed ones. See [Music cues](https://edgemodders.ai/wiki/edgequest/music-sound.html#music-cues) |
| A sound from the game doesn't play | Look at the quest's checklist: a name EDGEquest doesn't know is listed there, and plays nothing. Check the spelling, or pick the sound again |
| My own sound (`edgewave_<name>`) doesn't play | Your own sounds only work in a REDmod, and the game reads them only when it starts. Switch on REDcode's `redcode.pack.redmod`, **Pack and Install** again, then quit the game and start it with REDcode's **Run Game**. See [Your own sounds](https://edgemodders.ai/wiki/edgequest/music-sound.html#your-own-sounds) |
| The sound picker is only a box to type in, with no search or ▶ | The search and the play button come from [EDGEwave](https://edgemodders.ai/wiki/edgewave/) 0.2.0 or later. Install or update it. Without it, type the name |
| ▶ on a music cue plays nothing | Music plays only in the running game. Start the game with [REDnode](https://edgemodders.ai/wiki/rednode/) 0.43 or later and load a save, then press ▶ again |
| The game went silent after trying cues from the picker | Open the game's pause menu and go back |
| **Generate** only copies the line | Your EDGEwave is older than 0.2.0. Update it. See [Voices](https://edgemodders.ai/wiki/edgequest/music-sound.html#voices) |
| I voiced the lines, and the game still has no voices | Expected. The takes are kept in your project, and the game doesn't play them yet |

## Assistants

| You see | Do this |
|---|---|
| Claude doesn't have the `quest_` tools | Connect the server, then start a new Claude Code session. [EDGEchat](https://edgemodders.ai/wiki/edgechat/) doesn't include it yet. See [Connect it](https://edgemodders.ai/wiki/edgequest/assistants.html#connect-it) |
| The server can't find the game or REDbridge | Give them on the command line. See the table under [Connect it](https://edgemodders.ai/wiki/edgequest/assistants.html#connect-it) |
| The assistant's first question takes a long time | It is building the quest index, about a minute and a half, once |

## Anything else

- **EDGEquest: Show Log** shows what EDGEquest did, and any errors.
- **EDGEquest: Check Quest Mod...** on your project names what's wrong with the quest's files. See [Checking a quest](https://edgemodders.ai/wiki/edgequest/checking.html#check-quest-mod).
- The **Problems panel** lists the story file's problems at their line.

Still stuck? Ask on the [EDGEmodders Discord](https://discord.gg/63qP3Erw43) or open an issue on [EDGEquest's GitHub](https://github.com/Edgemodders/EDGEquest/issues). Include what **Show Log** says.
