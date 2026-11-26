<!-- Copied from EDGEweb's docs/wiki/edgequest/install.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/install.html (reviewed 2026-11-13) -->

# Install and set up EDGEquest

EDGEquest is an extension: an add-on for the editor VS Code. Installing it takes a few minutes, plus about a minute and a half while it reads your game's quests for the first time.

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgequest/install.html#what-you-need) | To read quests, and to play your own |
| [Install it](https://edgemodders.ai/wiki/edgequest/install.html#install-it) | Three steps |
| [The quest index](https://edgemodders.ai/wiki/edgequest/install.html#the-quest-index) | What EDGEquest builds the first time |
| [Try it](https://edgemodders.ai/wiki/edgequest/install.html#try-it) | A check that everything works |
| [If it can't find the game](https://edgemodders.ai/wiki/edgequest/install.html#if-it-cant-find-the-game) | |
| [Updating and uninstalling](https://edgemodders.ai/wiki/edgequest/install.html#updating-and-uninstalling) | |

## What you need

| You need | Why |
|---|---|
| Windows 10 or 11, 64-bit, and Cyberpunk 2077 **2.5** (Steam, GOG or Epic) | The game EDGEquest reads and writes for. Game 2.31 isn't supported |
| [VS Code](https://code.visualstudio.com/) 1.70 or later, or VSCodium, or the [EDGEkit](https://edgemodders.ai/wiki/edgekit/) app | EDGEquest runs inside it. EDGEkit 1.140.5 and later come with EDGEquest built in, so there is nothing to install: skip to [The quest index](https://edgemodders.ai/wiki/edgequest/install.html#the-quest-index) |
| [REDcode](https://edgemodders.ai/wiki/redcode/install.html), set up and ready | EDGE's editor for game files. EDGEquest uses its game folder, its project and its **Pack and Install** button. REDcode also downloads [REDbridge](https://edgemodders.ai/wiki/redbridge/) (0.11.0 or later), the program that reads the game's files, and offers to install the .NET 10 runtime REDbridge runs on |

To **play** a quest you made, the game also needs two free framework mods. You don't need them to read the game's quests.

| In the game | Why |
|---|---|
| **ArchiveXL** | Adds your quest, its journal entry and its texts to the game when the game starts. Without it your quest never appears |
| **RED4ext** | ArchiveXL needs it to load |

The easy way to get both is [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/)'s **Get the frameworks**: see [Getting the frameworks](https://edgemodders.ai/wiki/edgedeck/frameworks.html#getting-the-frameworks). Or install them by hand from their pages: [ArchiveXL](https://www.nexusmods.com/cyberpunk2077/mods/4198) and [RED4ext](https://www.nexusmods.com/cyberpunk2077/mods/2380).

Optional:

| Add | For |
|---|---|
| [EDGEwave](https://edgemodders.ai/wiki/edgewave/) 0.2.0 or later | Searching and hearing sounds from the Storyboard, making a sound of your own, and voice takes. See [Music and sound](https://edgemodders.ai/wiki/edgequest/music-sound.html) |
| [REDnode](https://edgemodders.ai/wiki/rednode/) 0.43 or later | Hearing a music cue in the running game before you pick it |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | Installing your packed quest like any other mod, with undo |

## Install it

1. **Install REDcode first**, and let it find the game and download REDbridge. See [Install and set up REDcode](https://edgemodders.ai/wiki/redcode/install.html). Carry on here when REDcode's sidebar shows the game's files.
2. **Install EDGEquest.** In VS Code, open the Extensions view (`Ctrl+Shift+X`), search for **EDGEquest**, and click **Install**. It updates itself from then on.
3. **Click the EDGEquest icon** in the activity bar, the strip of icons down the left edge of VS Code.

**You should see** two views in the sidebar: **Project Quests** (your own quests) and **Game Quests** (the game's). Game Quests says "Reading the game's quests..." for a moment, then fills with folders.

**Can't use the Marketplace** (for example in an editor that has no store)? Download the main file from [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35750) with **Manual download** and extract it. In the Extensions view, click **...** at the top, choose **Install from VSIX...** and pick `edgequest-<version>.vsix`.

> **Not a game mod.** EDGEquest is an extension for VS Code. Don't install it with Vortex or EDGEdeck: they would put it in the game folder, where it does nothing.

(Screenshot on the wiki, "The EDGEquest views": The EDGEquest activity bar icon selected, with Project Quests (one quest with its beats and checklist) above Game Quests (folders titled with quest names).)

## The quest index

The first time you open EDGEquest, it reads every quest in your game and builds a **quest index**: a list of the quests' titles, facts, journal entries, scenes, people, places and trigger areas. It takes about a minute and a half and runs in the background. The status bar at the bottom of the window shows its progress.

The index is what makes **Find Quest** fast. It is also where a new quest gets its map marker from, so wait for it to finish before you make your first quest.

EDGEquest builds the index again by itself when the game updates. To build it again by hand, use **Rebuild Quest Index** in the Game Quests view's **`...`** menu.

## Try it

1. Wait until the status bar no longer shows the quest index being built.
2. Click the search icon at the top of **Game Quests**.
3. Type `pyramid song`. That is Judy's side job.
4. Pick a result whose name starts with `sq030`.

**You should see** a page open with the quest's name at the top and a list of numbered steps in plain words. If it does, EDGEquest is set up. [Reading the game's quests](https://edgemodders.ai/wiki/edgequest/reading.html) shows what the page can do.

| If | Do this |
|---|---|
| The list of results stays empty | The index isn't ready. Wait for the status bar, then try again |
| Game Quests shows a message instead of folders | See [Game Quests stays empty](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#game-quests-stays-empty-or-says-something-is-missing) |

## If it can't find the game

EDGEquest uses REDcode's game folder and REDcode's REDbridge, so normally there is nothing to set. If REDcode isn't installed or isn't running, EDGEquest looks for the game in your Steam, GOG and Epic libraries by itself.

When it can't find something, the Game Quests view says what is missing and shows a button that fixes it, such as **Set Game Folder**. The settings behind this are listed in [Settings and commands](https://edgemodders.ai/wiki/edgequest/settings.html#settings).

## Updating and uninstalling

EDGEquest from a store updates itself. A copy installed from a `.vsix` file doesn't: download the new file and install it the same way.

To uninstall, click the gear on EDGEquest in the Extensions view and choose **Uninstall**. Your story files and the quest files made from them stay in your projects.

## Next steps

- Make and play a quest: [Your first quest](https://edgemodders.ai/wiki/edgequest/first-quest.html).
- Look inside a quest you know: [Reading the game's quests](https://edgemodders.ai/wiki/edgequest/reading.html).
