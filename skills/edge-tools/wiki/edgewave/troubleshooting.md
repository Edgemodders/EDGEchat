<!-- Copied from EDGEweb's docs/wiki/edgewave/troubleshooting.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgewave/troubleshooting.html (reviewed 2026-11-22) -->

# Troubleshooting EDGEwave

Find what you see in the left column. If it isn't here, the [last section](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#anything-else) says where to look and where to ask.

| Where are you stuck? | |
|---|---|
| [Setting up](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#setting-up) | The icon, REDcode, empty views, the Library |
| [Finding and hearing sounds](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#finding-and-hearing-sounds) | Nothing plays, names missing, Play in the Game |
| [In the editor](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#in-the-editor) | Dropped files, keys, missing buttons |
| [Add to Project](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#add-to-project) | A row is missing, a message stops you |
| [In the game](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#in-the-game) | You hear no change, or something else changed |
| [Voice tools](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#voice-tools) | The key, Don't Allow, credits, clones, game lines |
| [Voice Lines and EDGEwave Voice](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#voice-lines-and-edgewave-voice) | |
| [Assistants](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#assistants) | Claude can't see EDGEwave, or can't search |

EDGEwave updates itself, and many problems are fixed in a newer version. If something looks broken, check the Extensions view for an update first, for EDGEwave and for REDcode.

## Setting up

| You see | Do this |
|---|---|
| No EDGEwave icon in the activity bar after installing | Press `Ctrl+Shift+P`, type `Developer: Reload Window` and press Enter. Still missing: right-click the activity bar and check that **EDGEwave** is ticked |
| "EDGEwave needs REDcode for Cyberpunk 2077 ... Install it from the Marketplace." | REDcode is not installed or is switched off. Install **REDcode for Cyberpunk 2077** by Edgemodders in the Extensions view |
| "EDGEwave needs REDcode 0.9.0 or later ... Update REDcode." | Update REDcode in the Extensions view. This EDGEwave is made for REDcode 0.10.3 or later |
| A Game Assets group says "REDcode's REDbridge is not running" | Open a REDcode project. If REDcode itself asks for the game folder or for REDbridge, finish its setup first: [Install and set up REDcode](https://edgemodders.ai/wiki/redcode/install.html). Then press **Refresh Game Assets** in the view's title bar |
| "REDcode has no game folder set" | Set the game folder in REDcode: [Finding the game](https://edgemodders.ai/wiki/redcode/install.html#finding-the-game) |
| The **Project** view is empty, but I have mixes | Open the project's own folder in VS Code, the one with the `.cpmodproj` file directly in it. Mixes saved outside the project show in the Desk view, under **Recent** |
| The Project view says no folder is open | Press **Open Folder...** in it and open your project's folder |
| I can't find the Sounds view | Since EDGEwave 0.3.0 it is three views: **Desk**, **Project** and **Library**. See [Your own sounds](https://edgemodders.ai/wiki/edgewave/finding.html#your-own-sounds-desk-project-and-library) |
| The Library view asks for a folder | Press **Set the Library Folder...**. EDGEwave offers `Documents\EDGE Library`, or pick one of your own outside the game folder. Every EDGE tool shares it: see [The EDGE Library](https://edgemodders.ai/wiki/library.html) |
| **Add to Library...** says the sound needs a render | Press **Render WAV** in the editor first: a project takes the WAV |
| **▶** on a mix is greyed: **Render it first** | The mix has no WAV yet. Open it and press **Render WAV** |

## Finding and hearing sounds

| You see | Do this |
|---|---|
| **▶** plays nothing | It plays through Windows' default sound output: check that device and its volume. If EDGEwave can't play the sound, a message says why and offers the Hear tab |
| "REDcode could not read ..." or "No sound ... in the game's sound effect index" | The game's sound list no longer has that recording, usually after a game update. Press **Refresh Game Assets**, find the sound again and open it from there. The reason is in EDGEwave's [log](https://edgemodders.ai/wiki/edgewave/troubleshooting.html#anything-else) |
| The Hear tab opens but is silent | Press **Play** in the tab |
| An event shows as `event` and a number, marked **no name** | Neither of the game's lists names it. It still plays and opens |
| My language is missing under **Voice lines** | The view lists only the languages whose voices are installed. Most players have English alone |
| The filter stopped at 5,000 files | Add a word to narrow it |
| **Play in the Game** says to start the game with REDnode | The game isn't running, or [REDnode](https://edgemodders.ai/wiki/rednode/install.html) is older than 0.43 or not installed. Start the game, load a save and try again. If the game is still loading, wait a moment |
| **Play in the Game** worked, but I heard nothing | The game says nothing about an event it can't play right now. Try another event to check the link |
| After trying many events in the game, all game sound is gone | Open the pause menu and go back. Some events change the game's own sound state |
| A music cue won't play in VS Code | Music lives in the game's sound banks, so a cue plays only in the running game, through REDnode |

## In the editor

| You see | Do this |
|---|---|
| A dropped sound file opens in a tab of its own | Hold **Shift** as you drop. Without it VS Code handles the file itself |
| "EDGEwave takes sound files ..." after a drop | The file isn't a sound EDGEwave reads: `.wav`, `.ogg`, `.mp3`, `.flac`, `.opus` or `.wem` |
| `Space` and other keys do nothing | Click the waveform. While the cursor is in a number box, keys type there |
| **Apply gain** doesn't change how loud the track is in the mix | Apply gain is an edit on the clip. For the track's loudness in the mix, use **Level** in the Track bar |
| No **Re-Voice** button | It shows only while the selected track is a voice line. Select the line's lane, or tick **Voice line** in the header |
| **Render WAV** and **Add to Project...** are greyed | The sound has no track yet. Add one: [Tracks](https://edgemodders.ai/wiki/edgewave/editing.html#tracks) |
| I can't find Mute and Solo | The tick box at the left of each lane replaced them. Right-click a lane for **Only This Track** and **All Tracks** |
| "The source file is missing: ..." | A sound file this mix uses was moved or deleted. Put it back where the message says |
| "This document cannot be edited here ... Fix the JSON" | The `.edgewave` file was changed by hand and is no longer valid. Right-click its tab, choose **Reopen Editor With...**, then **Text Editor**, and fix or undo the change |
| "The render file is a track's source file" | Rendering would overwrite one of the mix's own sound files. Open the `.edgewave` file as text, as in the row above, and change the file name under `render` |
| "... has its unsaved changes back from before the window reloaded" | Normal. VS Code reloaded, and EDGEwave kept your unsaved work. Press `Ctrl+S` to keep it |

## Add to Project

| You see | Do this |
|---|---|
| "Open a REDcode project first" | Open your project's folder in VS Code, or make one with **REDcode: New Project** |
| "No track is in the mix" | Tick at least one lane's box |
| No **Override sound** or **Replace the event** rows | No track holds a game sound effect. Add the sound you want to replace with **Add Sound**, untick its lane if it should not be heard, and open the list again. See [What goes in, and what it replaces](https://edgemodders.ai/wiki/edgewave/into-the-game.html#what-goes-in-and-what-it-replaces) |
| "Voice lines cannot replace a game line yet" | Expected: see [Voice lines](https://edgemodders.ai/wiki/edgewave/into-the-game.html#voice-lines). The list still offers the routes that work |
| "REDcode could not import ..." | REDcode's log says why: open the Output panel and choose **REDcode**. An old REDbridge is the usual cause: run **REDcode: Update REDbridge** |
| "REDmod custom sounds need REDcode to pack the mod as a REDmod" | Press **Open Setting** in the message and tick `redcode.pack.redmod`. See [The REDmod setting](https://edgemodders.ai/wiki/edgewave/into-the-game.html#the-redmod-setting) |
| A question before replacing an event's sound | The project already has a sound for that event, made from another sound document. **Replace** if you mean to |
| A name is refused for a new sound | It is the name of one of the game's own events. Pick another, or use **Replace a game event by name...** if replacing is what you want |
| Two rows read the same in the package list | The packages have the same name. Tell them apart by the id beside each |

## In the game

**First, for any route:** the game reads its sounds once, when it starts. Close the game, **Pack and Install**, then start it.

| You hear | Do this |
|---|---|
| The original, after an **override** | 1. Try several times: you replaced one recording, and the game picks among the event's variations. 2. Check that the mod is installed: with [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/), it is in the Mods list, switched on and deployed. 3. If another installed mod also overrides sounds, only one of the two works: see [Other sound mods](https://edgemodders.ai/wiki/edgewave/into-the-game.html#other-sound-mods). 4. If the project also has a REDmod replacement of the same event, that one plays |
| The original, after **Replace**, **Silence** or a **new sound** | 1. Was `redcode.pack.redmod` on **before** you packed? Pack and Install again if not. 2. Start the game with REDcode's **Run Game**. Started from Steam, GOG or a shortcut, the game ignores REDmods. 3. Read `tools\redmod\bin\REDmodLog.txt` in the game folder: it says if REDmod refused the sound |
| Part of the sound changed, part did not | One action can play several events at once. Find the others with REDnode's [Sound Tracer](https://edgemodders.ai/wiki/rednode/sound-tools.html#sound-tracer) |
| A silenced event still sounds | The same: other events play with it. Test Silence on an event that sounds alone |
| My new sound, but from one side | A sound with a position plays from V and can seem off-centre. Add it again as **The same everywhere (2D)** |
| My sound, too loud or too quiet | Change it in the mix (**Level**, or the Master's **Gain**), then Add to Project again. The `gain` number in `info.json` has no effect that we could hear |
| The game closes a few seconds after a sound mod was swapped in while it ran | Swapping a sound mod into a running game is untested on the current game version, and crashed it with older tools. Start the game again, and use **Pack and Install** with the game closed from then on |
| My recolored clothes vanished after I made a REDmod sound | The setting packs the whole project as a REDmod. Start the game with **Run Game**. See [The REDmod setting](https://edgemodders.ai/wiki/edgewave/into-the-game.html#the-redmod-setting) |
| A REDnode package's sound doesn't play | The package plays it once, when a save is loaded. Check REDnode's launcher (**F10**) for the package and its state |

To take a sound mod out, see [Take it out again](https://edgemodders.ai/wiki/edgewave/into-the-game.html#take-it-out-again).

## Voice tools

| You see | Do this |
|---|---|
| "No ElevenLabs API key is set yet." | Press **Set ElevenLabs API Key...** in the same window and paste your key into REDcode's password box. **Where to make one** opens ElevenLabs' help. Or set it in REDcode's Keys view |
| "You chose Don't Allow when REDcode asked whether EDGEwave may read your ElevenLabs key ..." | In REDcode's Keys view, run **Forget Tool Permissions for Keys**. Try the voice tool again and choose **Allow** |
| "REDcode's question about your ElevenLabs key was closed without an answer." | Try again, and choose **Allow** when REDcode asks |
| VS Code asks for the key again, after it moved to REDcode's Keys | A window with an older EDGEwave or REDcode, without Keys, keeps its own copy. Update both in the Extensions view |
| "ElevenLabs refused the API key" | The key is wrong, or it lacks permissions. On the ElevenLabs site, give the key **text to speech**, **voices**, **sound effects** and **voice changer**, or make a new one. Then set it again |
| A message about quota or credits | Your ElevenLabs account has none left. That is between you and ElevenLabs: a new key does not help |
| The log says ElevenLabs refused 48000 Hz | Nothing to do. Your plan doesn't offer that quality, and EDGEwave uses 24000 from then on |
| "Pick a voice, or select a voice line to speak in its voice." | Choose a voice in the list. Or close the window, select a voice line's lane and open Speak Line again |
| "Cancelled: no clone was made." | You said no to the question about cloning. Nothing was sent. See [Voice clones](https://edgemodders.ai/wiki/edgewave/voices.html#voice-clones) |
| **In the selected line's voice** is off, or Re-Voice's buttons are off, saying the game's own audio is not sent | Expected: EDGEwave never sends the game's audio to ElevenLabs. Use one of your voices, or [design a character's voice](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices) |
| ElevenLabs refuses to clone a voice | ElevenLabs can block voices, and its rules forbid cloning a real person's voice without consent. EDGEwave can't change that |
| EDGEwave asks whether a tool may spend your credits | Another EDGE tool, such as EDGEfab, asked EDGEwave to speak a line. Answer once: EDGEwave keeps the answer for that tool. See [Character voices](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices) |
| "That take is gone: generate it again." | Takes live only while the window is open, and only the last 20. Generate again |
| My ElevenLabs account is out of voice slots | Delete the ones EDGEwave made: **EDGEwave: ElevenLabs Voices Made by EDGEwave...** |

## Voice Lines and EDGEwave Voice

| You see | Do this |
|---|---|
| "no quest has voice lines here yet" | **Voice Lines...** only reopens a quest voiced before. Start from EDGEquest's Storyboard: [Voice a quest](https://edgemodders.ai/wiki/edgewave/voice-lines.html#voice-a-quest) |
| "No voice chosen for ..." | Pick a voice for that speaker at the top of the panel |
| Voiced lines are silent in the game | Expected for now: they play as subtitles only. See [Voice a quest](https://edgemodders.ai/wiki/edgewave/voice-lines.html#voice-a-quest) |
| Lines I voiced show **no take** again, and the panel lists them twice | The lines' ids changed in the story file. This happened once in testing and its cause is not known. The takes are still on disk. Please [report it](https://github.com/Edgemodders/EDGEwave/issues) with the last thing you did |
| EDGEwave Voice: "No ElevenLabs API key yet" | Paste the key in its window in the game. A key set in VS Code doesn't reach the game |
| EDGEwave Voice's window won't open | With a save loaded, switch EDGEwave Voice off and on in REDnode's launcher |
| EDGEwave Voice: the message lists voice names | The mod asked for a voice name that isn't set up. Run **EDGEwave: Voices for REDnode...** again, or edit `voices.json` |

## Assistants

| You see | Do this |
|---|---|
| Claude doesn't have EDGEwave's tools | Start a **new** Claude Code session after connecting. Check with `claude mcp list` |
| "EDGEwave has not read the game's sound events yet" | Open VS Code with a REDcode project, click EDGEwave's icon and unfold **Sound effects** in Game Assets once. Then ask again |
| "No ElevenLabs API key is set" from the assistant | Set the key in REDcode's Keys view (or **EDGEwave: Set ElevenLabs API Key**). With a REDcode older than 0.10.16, connect again and answer **Yes, include my ElevenLabs key**. See [The ElevenLabs key](https://edgemodders.ai/wiki/edgewave/assistants.html#the-elevenlabs-key) |
| "... REDbridge.exe is not installed" from the assistant | The server reads the key through REDbridge. In VS Code, run **REDcode: Install REDbridge** |
| "The key store needs REDbridge 0.18.0 or later" | In VS Code, run **REDcode: Update REDbridge** |
| "EDGEwave has no voice for ... yet" from `voice_speak_line` | Set the character's voice in VS Code: **EDGEwave: Character Voices...** |
| "Claude Code's claude command isn't on the PATH" | Press **Copy the Command** and run it in a terminal where `claude` works |
| "the MCP server file is missing" | Reinstall EDGEwave from the Extensions view, then try again |

## Anything else

**The log.** Open VS Code's Output panel (**View**, **Output**) and choose **EDGEwave** in its menu. Every error is written there, with REDcode's own reason when a game sound can't be read. For packing and installing, choose **REDcode** in the same menu, and see REDcode's [Troubleshooting](https://edgemodders.ai/wiki/redcode/troubleshooting.html).

**Ask.** Report problems on [EDGEwave's issues page](https://github.com/Edgemodders/EDGEwave/issues) or on the [EDGEmodders Discord](https://discord.gg/63qP3Erw43). Say what you did, what you expected and what happened, and paste the lines from the log.
