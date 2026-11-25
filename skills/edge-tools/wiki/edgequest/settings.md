<!-- Copied from EDGEweb's docs/wiki/edgequest/settings.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/settings.html (reviewed 2026-11-13) -->

# Settings and commands

This page lists every setting and command EDGEquest has, its views, the Storyboard's buttons, and where it keeps its files.

| On this page | |
|---|---|
| [Settings](https://edgemodders.ai/wiki/edgequest/settings.html#settings) | Five, and most people never change one |
| [Commands](https://edgemodders.ai/wiki/edgequest/settings.html#commands) | By what they are for |
| [Views](https://edgemodders.ai/wiki/edgequest/settings.html#views) | The two lists in the sidebar |
| [Storyboard buttons](https://edgemodders.ai/wiki/edgequest/settings.html#storyboard-buttons) | Everything you can press on the Storyboard |
| [Where things are kept](https://edgemodders.ai/wiki/edgequest/settings.html#where-things-are-kept) | Files EDGEquest writes |

## Settings

Open VS Code's settings (`Ctrl+,`) and search for **edgequest**. You normally don't need to change any of them: EDGEquest takes the game folder and REDbridge from REDcode.

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `edgequest.makeOnSave` | on | Makes a quest's game files each time its story file is saved. Problems go to the Problems panel | You'd rather make the quest only when you ask, with **Make Quest** |
| `edgequest.author` | empty (asked once) | Your modder name, in small letters. A quest's game files go in a folder named `mod\<author>\<id>`. Empty: New Quest asks, and saves your answer here | You want another name for new quests |
| `edgequest.gamePath` | empty | The Cyberpunk 2077 folder, the one holding `bin`, `archive` and `r6`. Empty: REDcode's game folder, then EDGEdeck's, then a look in your Steam, GOG and Epic libraries | EDGEquest finds the wrong game, or none. **Set Game Folder** sets it for you |
| `edgequest.bridgePath` | empty | REDbridge.exe, or the folder holding it. Empty: REDcode's `redcode.bridgePath`, then REDbridge on your PATH. When REDcode is running with the same game, EDGEquest uses REDcode's REDbridge | The Game Quests view says REDbridge wasn't found |
| `edgequest.dotnetRoot` | empty | Where .NET 10 is, when it's installed for your user only. Empty: REDcode's `redcode.dotnetRoot` | REDbridge can't start because it can't find .NET |

## Commands

Open the command palette (`Ctrl+Shift+P`) and type **EDGEquest**.

### Writing quests

| Command | What it does | Also at |
|---|---|---|
| **EDGEquest: New Quest...** | Starts a quest from the template in the open WolvenKit project: asks a title, an id and once your modder name, writes the story file, opens the Storyboard, and makes the quest | The top of Project Quests |
| **EDGEquest: Open Storyboard** | Opens a story file on the Storyboard | The editor's title bar, when a story file is open as text |
| **EDGEquest: Make Quest** | Saves the story file if it has unsaved changes, makes the quest's game files now, and checks them | The editor's title bar, and each quest in Project Quests |
| **EDGEquest: Made Files...** | Lists the game files made from a story. A phase or scene opens in plain words | Each quest in Project Quests (right-click) |
| **EDGEquest: Refresh** (Project Quests) | Reads the project's quests again | The top of Project Quests |

Open Storyboard, Make Quest and Made Files show in the command palette only while a story file (`.quest.yaml`) is the active tab. Story files open on the Storyboard by default; to see the text, use **Open YAML** on the Storyboard, or VS Code's **Reopen Editor With...**.

### Reading the game's quests

| Command | What it does | Also at |
|---|---|---|
| **EDGEquest: Find Quest...** | Searches the game's quests by title, file name, fact, journal entry, person or place | The search icon at the top of Game Quests |
| **EDGEquest: Open Quest** | Opens a game quest's page. Used by the views and links; not in the command palette | Clicking a quest in Game Quests |
| **EDGEquest: Refresh** (Game Quests) | Reads the game's quest list again | The top of Game Quests |

### Checking

| Command | What it does | Also at |
|---|---|---|
| **EDGEquest: Check Quest Mod...** | Checks a quest mod's `.archive`, WolvenKit project or extracted files, and names what's wrong. It changes nothing. See [Check Quest Mod](https://edgemodders.ai/wiki/edgequest/checking.html#check-quest-mod) | The top of Game Quests; right-click an `.archive` or a folder in the Explorer |

### Setup and maintenance

| Command | What it does | Also at |
|---|---|---|
| **EDGEquest: Set Game Folder** | Picks the Cyberpunk 2077 folder, and saves it in `edgequest.gamePath` | The Game Quests view, when it has no game |
| **EDGEquest: Rebuild Quest Index** | Builds the quest index from your game again (about a minute and a half) | The `...` menu of Game Quests |
| **EDGEquest: Show Log** | Opens EDGEquest's log: what it did, and any errors | The Game Quests view, after an error |

## Views

| View | What it shows |
|---|---|
| **Project Quests** | The quests in your open WolvenKit project, each with what's left to do, its beats and its checklist |
| **Game Quests** | Every quest, phase and scene in the game, in folders titled with their quest's name |

Both are under the EDGEquest icon in the activity bar.

## Storyboard buttons

The [Storyboard](https://edgemodders.ai/wiki/edgequest/writing.html#the-storyboard) opens when you open a story file.

| Where | Button | What it does |
|---|---|---|
| The top | **+ Beat** | Adds a beat that nothing leads to yet |
| | **Make** | Saves the story file and makes the quest |
| | **Made files** | Lists the game files made from the story |
| | **Layout** | Lays the board out afresh and fits it in view |
| | **Open YAML** | Opens the story file as text, beside the board |
| The board's corner | **+**, **−**, **Fit**, **1:1** | Zoom in, zoom out, fit the whole story, actual size |
| A beat's page | **Rename**, **+ Beat after**, **Delete** | Change the beat's objective, add a beat right after it, delete it |
| | **Then** | What follows the beat when no choice goes elsewhere |
| | **+ Step** | Adds a step: arrive, scene, wait, set a fact, music, sound, or an ending |
| A scene | **+ Line**, **+ Choice**, **+ Sound** | Add a line for V, a choice with two options, or a sound |
| | **Voice all lines** | Hands the scene's lines to EDGEwave for voicing |
| A choice | **+ Option** | Adds an option |
| An option | **goes on to**, the colour list, the condition list | Where it leads; yellow or white; a lifepath, a check or a payment |
| A line | **Generate** or **Regenerate** | Hands the line to EDGEwave for voicing |
| | **Direction**, **Say** | The line's voice prompt |
| Any row | **↑**, **↓**, **✕** | Move it up, move it down, delete it |
| A music or sound name | Click it | Pick another |
| The end of the page | **Checklist** | Tick an item |

## Where things are kept

| What | Where |
|---|---|
| A quest's story file | `<id>.quest.yaml`, at the top of the project |
| The game files made from it | In the project, under `source\archive\mod\<author>\<id>` and `source\resources`. See [What saving makes](https://edgemodders.ai/wiki/edgequest/story-file.html#what-saving-makes) |
| EDGEquest's list of the files it made | `.edgequest\<id>.made.json` in the project |
| Voice takes from EDGEwave | `source\raw\edgewave\voice\<id>` in the project |
| Your settings | VS Code's own settings |

EDGEquest writes nothing into the game folder. Your quest gets there when you pack and install it with REDcode.
