<!-- Copied from EDGEweb's docs/wiki/edgequest/index.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/ (reviewed 2026-11-13) -->

# EDGEquest

EDGEquest is the EDGE platform's quest maker for Cyberpunk 2077. It runs inside VS Code, beside [REDcode](https://edgemodders.ai/wiki/redcode/), EDGE's editor for game files. It does two things:

- **It reads the game's quests to you.** Open any of the game's quests and see it as numbered steps in plain words: what starts it, where V has to go, who says what, which choices lead where, and what goes in the journal.
- **It writes quests from a story.** You write your quest as a short text: its objectives, the place V goes, the lines V says and the choices the player makes. EDGEquest turns that into the game's own quest files. You never open those files.

**What you can make today.** EDGEquest is a preview. A quest you make sends V to a place. There V speaks in subtitles and the player chooses. Choices can branch to several endings, and the quest can play the game's music and sounds, or sounds of your own. Not yet: other people in a scene, voiced lines, phone calls. A quest starts when the player loads a save, and only one place, V's apartment door, has been tried in the game.

**New here?** [Install and set up](https://edgemodders.ai/wiki/edgequest/install.html), then follow [Your first quest](https://edgemodders.ai/wiki/edgequest/first-quest.html): about 30 minutes, with no coding, from an empty project to your quest in the game. To learn how the game builds its own quests first, try [Reading the game's quests](https://edgemodders.ai/wiki/edgequest/reading.html). The other pages are for looking things up.

(Screenshot on the wiki, "EDGEquest in VS Code": VS Code with the EDGEquest activity bar open: the Project Quests and Game Quests views on the left, and a quest's Storyboard on the right, with beat cards joined by arrows labelled with choices.)

| On this page | |
|---|---|
| [What it's for](https://edgemodders.ai/wiki/edgequest/#what-its-for) | Why quests are hard, and what EDGEquest does about it |
| [Words you'll meet](https://edgemodders.ai/wiki/edgequest/#words-youll-meet) | Beat, scene, fact, story file and the rest |
| [Why you might want it](https://edgemodders.ai/wiki/edgequest/#why-you-might-want-it) | |
| [How it fits into EDGE](https://edgemodders.ai/wiki/edgequest/#how-it-fits-into-edge) | What it needs from the other tools |
| [Status](https://edgemodders.ai/wiki/edgequest/#status) | The current release, what works, what is coming |
| [In this section](https://edgemodders.ai/wiki/edgequest/#in-this-section) | Every page |

## What it's for

Quests are among the hardest things to mod in Cyberpunk 2077. Inside the game, a quest is hundreds of small steps wired together, kept in several files that must all match: one for the quest's flow, one for the journal, one for each conversation, one for the subtitles, and one that tells the game the quest exists. One wrong number and a choice shows no text, or the game crashes.

EDGEquest does that part for you:

| You want to | EDGEquest gives you |
|---|---|
| Learn how the game builds a quest | Any quest or conversation as plain words, with links you can follow from step to step |
| Find where a quest is | **Find Quest**, by its in-game title, a person, a place, a fact or a journal entry |
| Make your own side quest | **New Quest** starts one from a template that already plays in the game |
| Change your quest without editing game files | The **Storyboard**: your quest as cards, edited with buttons. The same quest is also a text file you can edit directly |
| Know what's left to do | A checklist in the quest, kept up to date each time you save |
| Find out why a quest mod doesn't work | **Check Quest Mod** names what's wrong in plain words |
| Let an AI assistant write the quest | A connection for assistants (an MCP server) with the same quest maker. See [For assistants](https://edgemodders.ai/wiki/edgequest/assistants.html) |

## Words you'll meet

| Word | Means |
|---|---|
| **Quest** | A whole quest, as the journal shows it: a title, objectives, and what happens |
| **Story file** | Your quest, written in story words, as one text file in your project (`<id>.quest.yaml`). It is the only file you edit. See [The story file](https://edgemodders.ai/wiki/edgequest/story-file.html) |
| **Storyboard** | EDGEquest's editor for a story file: one card per beat, with arrows between them |
| **Beat** | One stage of your quest, with the objective the journal shows while it runs: "Go to your apartment", then "Look at the door". Beats are EDGEquest's word; the game has no beats |
| **Step** | One thing that happens in a beat, in order: wait for V to arrive, play a scene, start music, end the quest |
| **Scene** | A conversation or a moment: lines and choices. In this preview V is the only speaker. (In [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/), "scene" means something else: a set of objects you placed in the world) |
| **Choice**, **option** | A choice is the moment the player picks. Its options are the lines to pick from |
| **Ending** | A beat that ends the quest, as succeeded or as failed. A quest can have several |
| **Objective**, **journal** | The journal is the game's quest log. An objective is the one line it shows for the current stage, also in the tracker on the HUD |
| **Place**, **map marker** | A place in your quest is a map marker the game already has: the icon on the map and minimap that the objective points at |
| **Trigger area** | An invisible box in the world. The game notices when V steps into it. "V arrives" means V is inside the place's trigger area |
| **Fact** | A named number the game keeps in your save, to remember what happened ("V met Judy" = 1). See [Facts](https://edgemodders.ai/wiki/edgequest/story-file.html#facts) |
| **Phase** | The game's word for a part of a quest: a set of steps and the links between them. You meet it when reading game quests. Your whole quest becomes one phase |
| **Make** | EDGEquest writing the quest's game files from your story file. It happens each time you save |
| **Music cue**, **sound event** | The names the game plays music and sounds by, such as `mus_q104_drone_flight_01_START`. See [Music and sound](https://edgemodders.ai/wiki/edgequest/music-sound.html) |
| **Project** | Your mod project: a folder REDcode makes for your mod's files. It is the same kind of project WolvenKit uses, so these pages also say WolvenKit project |
| **Pack** | Turn a project into the files the game loads. REDcode does it |
| **ArchiveXL** | A free framework mod. It adds your quest to the game's own quests when the game starts |

The wiki's [glossary](https://edgemodders.ai/wiki/glossary.html) has the wider modding terms.

## Why you might want it

| If you... | EDGEquest gives you |
|---|---|
| Have never opened a quest file | Plain words instead of the game's raw data. The raw file is one click away when you want it |
| Want V to go somewhere, think aloud and choose | A quest you write in a few lines, with places, beats, scenes and choices |
| Want choices that feel like the game's | Yellow or white options, lifepath options, attribute checks and payments, shown with the game's own tags |
| Want music and sound in your quest | The game's music cues and sound events, by name, in a beat or between lines |
| Worry about breaking your game | EDGEquest only writes into your project. Nothing reaches the game until you pack and install it |

## How it fits into EDGE

EDGEquest is a specialist toolkit. It builds on the core toolkits:

| Toolkit | What it does for EDGEquest |
|---|---|
| [REDcode](https://edgemodders.ai/wiki/redcode/) | Required. Finds the game, installs REDbridge, makes the project, and packs and installs your quest |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Reads and writes the game's files, through WolvenKit's libraries. REDcode installs it |
| [EDGEwave](https://edgemodders.ai/wiki/edgewave/) | Optional. The sound studio: search the game's sounds from the Storyboard and hear them before you pick, make a sound of your own for a quest, and make voice takes for lines |
| [REDnode](https://edgemodders.ai/wiki/rednode/) | Optional. Plays a music cue in the running game, so you can hear it before you pick it |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | Optional. The mod manager: installs your packed quest like any other mod, with undo, and gets the frameworks |
| Claude and other assistants | EDGEquest's MCP server gives them the same quest maker. See [For assistants](https://edgemodders.ai/wiki/edgequest/assistants.html) |

## Status

EDGEquest **0.1.1**, a **preview**, came out on 6 November 2026. It's on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgequest), [Open VSX](https://open-vsx.org/extension/edgemodders/edgequest) and [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35750), and it is built into the [EDGEkit](https://edgemodders.ai/wiki/edgekit/) app from 1.140.5. Its server for assistants, `@edgemodders/edgequest-mcp`, is on npm at the same version. It works with game **2.5** only.

| Feature | Where it stands |
|---|---|
| Reading the game's quests: Game Quests, quest and scene pages, Find Quest, the step trail, Raw | Works. A whole side quest was followed on its pages alone |
| The template quest: marker, arriving, the scene, the choice, the end | Works: played in the game from start to end |
| A choice that branches the quest to two endings | Works: both endings were reached in the game |
| The Storyboard, New Quest, making the quest on save | Works: tested by hand in VS Code |
| Kinds of options: yellow, white, lifepath, attribute check, payment | Works: seen in the game. One gap: a lifepath option was not yet checked to be hidden from a V with another lifepath |
| Music cues and sounds, including a sound of your own | Works: heard in the game, with [EDGEwave](https://edgemodders.ai/wiki/edgewave/) 0.2.0 for the search, the play button and your own sounds |
| Voice takes for lines, through EDGEwave | The takes are made and kept in your project. The game does not play them yet: lines show as subtitles |
| Check Quest Mod | Works: on a published quest mod it found every fault already known, and two more |
| The MCP server | Works in a scripted test of an assistant's whole flow. Not on record yet: a session with a real assistant |
| Places other than V's apartment door | Untested. Other map markers are made the same way but haven't been tried in the game |

**Coming:** phone calls, copying a game scene into your quest, people standing in a scene, voiced lines in the game, other ways to start a quest, and happenings (scripted moments in the city that aren't a quest).

The dates and details of each test are in EDGEquest's [test record](https://edgemodders.github.io/EDGEquest/testing.html).

## In this section

| Page | |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/edgequest/install.html) | What you need, installing, the quest index, and a check that it works |
| [Your first quest](https://edgemodders.ai/wiki/edgequest/first-quest.html) | A walkthrough: make a quest, change it, and play it in the game |
| [Reading the game's quests](https://edgemodders.ai/wiki/edgequest/reading.html) | Game Quests, Find Quest, the quest and scene pages, the step trail, Raw |
| [Writing a quest](https://edgemodders.ai/wiki/edgequest/writing.html) | The Storyboard and its buttons, what saving does, playing, sharing and removing a quest |
| [The story file](https://edgemodders.ai/wiki/edgequest/story-file.html) | Everything a quest can hold: places, beats and steps, scenes, choices and their kinds, facts, voice prompts |
| [Music and sound](https://edgemodders.ai/wiki/edgequest/music-sound.html) | Music cues, sound events, your own sounds, and the picker |
| [Checking a quest](https://edgemodders.ai/wiki/edgequest/checking.html) | The checklist, and Check Quest Mod |
| [For assistants](https://edgemodders.ai/wiki/edgequest/assistants.html) | What Claude can do for a quest writer, and how to connect it |
| [Settings and commands](https://edgemodders.ai/wiki/edgequest/settings.html) | Every setting, command and button |
| [Troubleshooting](https://edgemodders.ai/wiki/edgequest/troubleshooting.html) | What to do when something doesn't work |

For the developer reference and design notes, see [EDGEquest's docs](https://edgemodders.github.io/EDGEquest/).
