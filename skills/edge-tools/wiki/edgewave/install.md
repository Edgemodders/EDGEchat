<!-- Copied from EDGEweb's docs/wiki/edgewave/install.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgewave/install.html (reviewed 2026-11-22) -->

# Install and set up EDGEwave

EDGEwave is an extension for VS Code, the free code editor from Microsoft. You don't write code in it: EDGEwave adds its own panels and a sound editor.

**The short way,** if you start from nothing:

1. Install [VS Code](https://code.visualstudio.com/), then EDGEwave, as below. That installs [REDcode](https://edgemodders.ai/wiki/redcode/) too.
2. On its first start REDcode finds your game and offers **Install REDbridge**: press it. REDbridge is the small program that reads the game's files. See [Install and set up REDcode](https://edgemodders.ai/wiki/redcode/install.html#installing-redbridge).

Or get the [EDGEkit app](https://edgemodders.ai/wiki/edgekit/install.html), one editor with REDcode, EDGEwave and the other EDGE tools already inside. New to EDGE altogether? Start at [Getting started](https://edgemodders.ai/wiki/getting-started.html).

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgewave/install.html#what-you-need) | The game, VS Code, REDcode, and what is optional |
| [Install EDGEwave](https://edgemodders.ai/wiki/edgewave/install.html#install-edgewave) | From the Extensions view, and other ways |
| [First start](https://edgemodders.ai/wiki/edgewave/install.html#first-start) | The two views, and what you should see |
| [Try it: hear a game sound](https://edgemodders.ai/wiki/edgewave/install.html#try-it-hear-a-game-sound) | One minute, changes nothing |
| [Where EDGEwave keeps things](https://edgemodders.ai/wiki/edgewave/install.html#where-edgewave-keeps-things) | In your project, on your PC, in the game |
| [Updating and removing](https://edgemodders.ai/wiki/edgewave/install.html#updating-and-removing) | |
| [Next](https://edgemodders.ai/wiki/edgewave/install.html#next) | Your first sound mod |

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | Steam, GOG or Epic. EDGEwave reads the game's own sounds and ships none of them |
| [VS Code](https://code.visualstudio.com/) 1.90 or later | Or the [EDGEkit app](https://edgemodders.ai/wiki/edgekit/), which has EDGEwave built in |
| [REDcode](https://edgemodders.ai/wiki/redcode/) 0.10.3 or later, set up with REDbridge | Installed with EDGEwave. EDGEwave reads every game sound through it, and does not run without it |
| A project | A folder that holds your mod's files. REDcode's **New Project** makes one ([Projects](https://edgemodders.ai/wiki/redcode/projects.html#make-a-new-project)). EDGEwave saves your sounds into it, and REDcode packs it into a mod. You can listen to game sounds without one |
| Optional: [REDnode](https://edgemodders.ai/wiki/rednode/install.html) in the game | For **Play in the Game**, for sounds that REDnode mods play, and for EDGEwave Voice. Not needed to replace a game sound |
| Optional: an [ElevenLabs](https://elevenlabs.io) account and API key | Only for the [voice tools](https://edgemodders.ai/wiki/edgewave/voices.html). Each use spends your ElevenLabs credits. Everything else works without one. The key is kept in REDcode's Keys (REDcode 0.10.16 or later), shared by every EDGE tool |

## Install EDGEwave

EDGEwave is on the VS Code Marketplace, published by **Edgemodders**. It is marked **Preview**: it is new, so expect rough edges.

1. In VS Code, open the **Extensions** view (`Ctrl+Shift+X`).
2. Search for `EDGEwave`.
3. Pick **EDGEwave** by Edgemodders and press **Install**. VS Code installs **REDcode for Cyberpunk 2077** with it, if you don't have it yet.

The same listing is on the web: [EDGEwave on the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgewave). If you prefer a terminal:

```powershell
code --install-extension edgemodders.edgewave
```

### Other ways to install

| Way | When | How |
|---|---|---|
| **Open VSX** | Your editor is built on VS Code but uses Open VSX instead of Microsoft's Marketplace, such as VSCodium | Search for `EDGEwave` in the editor's Extensions view, or see [EDGEwave on Open VSX](https://open-vsx.org/extension/edgemodders/edgewave) |
| **The EDGEkit app** | You want one editor with the EDGE tools built in | The [EDGEkit app](https://edgemodders.ai/wiki/edgekit/install.html) comes with EDGEwave |
| **A `.vsix` file** | No store access, or you want one exact version | Download `edgewave-<version>.vsix` from the [releases page](https://github.com/Edgemodders/EDGEwave/releases) or from [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35493). In the Extensions view, press the **`...`** menu at the top right, choose **Install from VSIX...** and pick the file. EDGEwave needs REDcode: if your editor doesn't fetch it, install [REDcode](https://edgemodders.ai/wiki/redcode/install.html) first |

## First start

An EDGEwave icon appears in the activity bar, the strip of icons down the far left edge of VS Code. Click it. EDGEwave's sidebar has four views:

| View | What it is |
|---|---|
| **Desk** | Sounds you are working on, kept until they go into a project or the Library, and below them the ones you opened lately. Empty at first. See [The Desk](https://edgemodders.ai/wiki/edgewave/finding.html#the-desk) |
| **Project** | The open project's mixes, and the sounds it puts in the game. See [The Project view](https://edgemodders.ai/wiki/edgewave/finding.html#the-project-view) |
| **Library** | Your [EDGE Library](https://edgemodders.ai/wiki/library.html)'s sounds, shared by every EDGE tool. See [The Library view](https://edgemodders.ai/wiki/edgewave/finding.html#the-library-view) |
| **Game Assets** | The game's sounds, and nothing else: sound effects, voice lines and music. See [Find and play sounds](https://edgemodders.ai/wiki/edgewave/finding.html) |

| What you should see | |
|---|---|
| **Desk** | "The Desk keeps the sounds you are working on, across restarts, ...", with the buttons **Create a Sound on the Desk...** and **Open Sound...** |
| **Project** | With a project open, its **Mixes** and **Project sounds**. Without, **Open Folder...** |
| **Library** | With no Library folder set yet, **Set the Library Folder...** and **What is the Library?** |
| **Game Assets** | Three groups: **Sound effects**, **Voice lines**, **Music and streamed sounds** |

Game Assets reads the game through REDcode. If a group says "REDcode's REDbridge is not running", open a REDcode project, or finish REDcode's setup ([Install and set up REDcode](https://edgemodders.ai/wiki/redcode/install.html)). More cases are in [Troubleshooting](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#setting-up).

## Try it: hear a game sound

1. Open a REDcode project, or make one: press `Ctrl+Shift+P`, run **REDcode: New Project**, name it `my_sounds` and choose a folder outside the game folder.
2. Click EDGEwave's icon. Move the mouse over the **Game Assets** view and press the funnel icon in its title bar (**Filter the Game's Sounds**).
3. Type `katana equip` and press Enter.
4. Under **Sound effects**, move the mouse over `w_melee_katana_equip` and press the **▶** that appears on the row.

| What you should see | |
|---|---|
| After step 3 | A short list of events under **Sound effects**, each with its number of variations |
| After step 4 | You hear V draw a katana. No tab opens. The status bar, the strip at the bottom of VS Code, says `EDGEwave: playing w_melee_katana_equip`, with the recording's number. Press **▶** again to stop a long sound |

Press **▶** a few more times: the event has several recordings, and EDGEwave picks one each time, as the game does. Nothing is changed by listening. To see every sound again, press **Clear the Filter** in the view's title bar.

## Where EDGEwave keeps things

**In your project.** Everything you make is in the project's `source` folder. `source\raw` is the project's folder for working files: it is yours to keep and share, and is not packed into the mod.

| What | Where in the project |
|---|---|
| A game sound effect you opened | `source\raw\sfx\<event>\<hash>.edgewave`, and its WAV beside it when you render |
| A game voice line you opened | The line's own game path under `source\raw`, with `.edgewave` added, and its WAV beside it |
| A new sound made with **Create a Sound in the Project** | `source\raw\edgewave\sounds\<name>.edgewave`, unless you choose another place |
| A sound moved in from the Desk, or added from the Library | `source\raw\edgewave\sounds\<name>\`, with its files. Library sounds are noted in `source\library.json` |
| Sound files you dropped in from the desktop | `<name>.sounds`, a folder beside the sound document |
| Sounds and lines made by the voice tools | `<name>.gen`, a folder beside the sound document |
| A quest's voiced lines | `source\raw\edgewave\voice\<quest>` |
| What **Add to Project** writes for the game | `source\archive`, `source\customSounds` and `source\resources`. See [Into the game](https://edgemodders.ai/wiki/edgewave/into-the-game.html#what-each-route-writes) |

A sound file from your PC gets its `.edgewave` document beside it. Rendering a `.wav` writes `<name>.edit.wav`, so your original is kept. With no project open, a new sound, or a game sound you open, goes on the [Desk](https://edgemodders.ai/wiki/edgewave/finding.html#the-desk).

**On your PC.** `%LOCALAPPDATA%\EDGEwave` holds:

| What | Safe to delete? |
|---|---|
| `events.json`, the list of the game's sound event names that EDGEwave reads from your game | Yes: EDGEwave makes it again |
| `mcp`, the program AI assistants use to reach EDGEwave ([Assistants](https://edgemodders.ai/wiki/edgewave/assistants.html)) | Yes: EDGEwave makes it again |
| `desk`, the sounds on your [Desk](https://edgemodders.ai/wiki/edgewave/finding.html#the-desk) | No, unless you no longer want them |
| `characters.json` and `lines`, your [character voices](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices) and the lines spoken in them for other tools | Only if you no longer want them. Spoken again, the lines spend credits |

Your [EDGE Library](https://edgemodders.ai/wiki/library.html) is wherever you chose, `Documents\EDGE Library` by default. Your ElevenLabs key is in REDcode's Keys, encrypted for your Windows user ([Your key](https://edgemodders.ai/wiki/edgewave/voices.html#your-key)).

**In the game folder.** Nothing, with two exceptions that you choose yourself: a REDnode package made with **New package in the game folder...** ([Into the game](https://edgemodders.ai/wiki/edgewave/into-the-game.html#a-sound-for-a-rednode-package)), and EDGEwave Voice ([Voices for quests and mods](https://edgemodders.ai/wiki/edgewave/voice-lines.html#edgewave-voice-for-rednode)). Your mod itself goes into the game through REDcode's **Pack and Install**.

## Updating and removing

Installed from the Marketplace or Open VSX, EDGEwave updates like any other extension: VS Code fetches new versions by itself unless you turned automatic updates off. If you installed from a `.vsix` file, install the newer file the same way. Your projects and settings stay either way.

To remove EDGEwave, uninstall it in the Extensions view. Your ElevenLabs key stays in REDcode's Keys for the other EDGE tools: remove it there if no tool needs it. Uninstalling leaves `%LOCALAPPDATA%\EDGEwave`, your Library and your projects behind: delete the first by hand if you want it gone. A mod you installed stays in the game until you [take it out](https://edgemodders.ai/wiki/edgewave/into-the-game.html#take-it-out-again).

## Next

1. Follow [Tutorial: your first sound mod](https://edgemodders.ai/wiki/edgewave/tutorial.html): about 20 minutes, no account needed.
2. Then read [Edit and mix](https://edgemodders.ai/wiki/edgewave/editing.html) and try the other effects.
3. Problems? See [Troubleshooting](https://edgemodders.ai/wiki/edgewave/troubleshooting.html), or tell us on [EDGEwave's issues page](https://github.com/Edgemodders/EDGEwave/issues) or the [EDGEmodders Discord](https://discord.gg/63qP3Erw43).
