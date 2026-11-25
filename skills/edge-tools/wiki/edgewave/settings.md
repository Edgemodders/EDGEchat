<!-- Copied from EDGEweb's docs/wiki/edgewave/settings.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgewave/settings.html (reviewed 2026-11-22) -->

# Settings and commands

A reference page. Most people never change a setting: all five are about ElevenLabs, and the voice tools work with the defaults.

| On this page | |
|---|---|
| [Settings](https://edgemodders.ai/wiki/edgewave/settings.html#settings) | The five settings, and one of REDcode's |
| [Commands](https://edgemodders.ai/wiki/edgewave/settings.html#commands) | [In the command palette](https://edgemodders.ai/wiki/edgewave/settings.html#in-the-command-palette), [the Desk](https://edgemodders.ai/wiki/edgewave/settings.html#the-desk), [the Project view](https://edgemodders.ai/wiki/edgewave/settings.html#the-project-view), [the Library](https://edgemodders.ai/wiki/edgewave/settings.html#the-library), [Game Assets](https://edgemodders.ai/wiki/edgewave/settings.html#game-assets), [other views](https://edgemodders.ai/wiki/edgewave/settings.html#from-other-views) |
| [Buttons in the editor](https://edgemodders.ai/wiki/edgewave/settings.html#buttons-in-the-editor) | |
| [Keys](https://edgemodders.ai/wiki/edgewave/settings.html#keys) | |
| [Tools for assistants](https://edgemodders.ai/wiki/edgewave/settings.html#tools-for-assistants) | |

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `edgewave`.

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `edgewave.elevenlabs.sampleRate` | 48000 | The sound quality the voice tools ask ElevenLabs for, in samples per second: 48000, 44100, 32000, 24000, 22050 or 16000. If your plan refuses the rate, EDGEwave uses 24000 from then on | Rarely. 44100 needs ElevenLabs' Pro plan |
| `edgewave.elevenlabs.speechModel` | empty | The model **Speak Line** starts with, such as `eleven_v3`. Empty means ElevenLabs' default. Speak Line lists your account's models either way | You always pick the same model by hand |
| `edgewave.elevenlabs.voiceChangerModel` | `eleven_multilingual_sts_v2` | The model **Re-Voice** starts with | ElevenLabs brings out a newer voice changer you prefer |
| `edgewave.voiceLines.model` | `eleven_v3` | The model **Voice Lines** speaks a quest's lines with. `eleven_v3` follows delivery tags such as `[softly]`; other models get the tags taken out. An assistant's `voice_lines` uses it too | You want plain delivery, or another language model |
| `edgewave.elevenlabs.baseUrl` | `https://api.elevenlabs.io` | ElevenLabs' server | Only if your ElevenLabs account uses one of its regional servers: `https://api.us.elevenlabs.io`, `https://api.eu.residency.elevenlabs.io`, `https://api.in.residency.elevenlabs.io` or `https://api.sg.residency.elevenlabs.io` |

Your ElevenLabs key is not a setting. It is kept in REDcode's Keys, shared by every EDGE tool, and set with a command, below ([Your key](https://edgemodders.ai/wiki/edgewave/voices.html#your-key)).

**One REDcode setting matters to EDGEwave:**

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `redcode.pack.redmod` | off | Packs the whole project as a REDmod | You use **Replace the event**, **Silence the event** or **A new sound for this project**. See [The REDmod setting](https://edgemodders.ai/wiki/edgewave/into-the-game.html#the-redmod-setting) |

EDGEwave takes the game folder and REDbridge from REDcode. Those settings are on REDcode's [Settings and commands](https://edgemodders.ai/wiki/redcode/settings.html) page.

## Commands

### In the command palette

Press `Ctrl+Shift+P` and type `EDGEwave`.

| Command | Does |
|---|---|
| **Create a Sound in the Project...** | A new, empty sound document in the project ([A new, empty sound](https://edgemodders.ai/wiki/edgewave/finding.html#a-new-empty-sound)). With no project open, it goes on the Desk |
| **Create a Sound on the Desk...** | A new, empty sound on the [Desk](https://edgemodders.ai/wiki/edgewave/finding.html#the-desk) |
| **Open Sound in EDGEwave...** | Opens a sound file from your PC in the editor |
| **Filter the Game's Sounds** | Narrows Game Assets by words or a pattern ([Filter](https://edgemodders.ai/wiki/edgewave/finding.html#filter)) |
| **Refresh Game Assets** | Reads the game's sounds again, for example after a game update |
| **Stop Sound** | Stops a sound started with **▶**, or one playing in the game |
| **Set ElevenLabs API Key** | Sets or replaces your key, in REDcode's Keys, for every EDGE tool |
| **Clear ElevenLabs API Key** | Points you to REDcode's Keys view, where **Remove Key** removes it ([Your key](https://edgemodders.ai/wiki/edgewave/voices.html#your-key)) |
| **Character Voices...** | The voice each game character speaks in, for every tool: pick, design, hear or forget one ([Character voices](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices)) |
| **ElevenLabs Voices Made by EDGEwave...** | Lists the voice clones and saved voices EDGEwave made in your account, to delete them ([Voice clones](https://edgemodders.ai/wiki/edgewave/voices.html#voice-clones)) |
| **Voice Lines...** | Reopens the Voice Lines tab of a quest voiced before ([Voice a quest](https://edgemodders.ai/wiki/edgewave/voice-lines.html#voice-a-quest)) |
| **Voices for REDnode...** | Installs or updates EDGEwave Voice in the game and names its voices ([EDGEwave Voice](https://edgemodders.ai/wiki/edgewave/voice-lines.html#edgewave-voice-for-rednode)) |
| **Connect an Assistant (MCP)...** | Connects Claude Code to EDGEwave's MCP server, or copies the command or a JSON entry for another client ([Assistants](https://edgemodders.ai/wiki/edgewave/assistants.html#connect-claude-code)) |
| **Set the Library Folder...** | Picks your [EDGE Library](https://edgemodders.ai/wiki/library.html)'s folder, shared by every EDGE tool |
| **Refresh from Library...** | Brings newer versions of the project's Library sounds into the project ([The Project view](https://edgemodders.ai/wiki/edgewave/finding.html#the-project-view)) |

The commands below act on a row or a view. They are buttons or right-click entries there, and are not in the palette.

<a id="the-sounds-view"></a>

### The Desk

Up to EDGEwave 0.2.0 this was the Sounds view. See [The Desk](https://edgemodders.ai/wiki/edgewave/finding.html#the-desk).

| Command | Where | Does |
|---|---|---|
| Create a Sound on the Desk... | Title bar (**+**) | As above |
| Open Sound in EDGEwave... | Title bar (folder) | As above |
| Refresh | Title bar | Reads the lists again |
| Play | A rendered sound's row (**▶**), or right-click | Plays its render at once, with no tab |
| Add to Library... | A Desk sound's row, or right-click | Copies it into a Library folder, or updates it there |
| Reveal in Library | A Desk sound with a Library copy, or right-click | Shows that copy in the Library view |
| Move to Project... | Right-click a Desk sound | Copies it into the open project and takes it off the Desk |
| Rename... | Right-click a Desk sound | Renames it and its files |
| Take Off the Desk... | Right-click a Desk sound | Sends it to the Recycle Bin |
| Copy to the Desk | Right-click a Recent sound | A copy on the Desk, with its files |
| Remove from Recent | A Recent row (**×**), or right-click | Takes it off the list. The file stays |
| Clear Recent | The **Recent** heading, or right-click it | Empties the list |

### The Project view

| Command | Where | Does |
|---|---|---|
| Create a Sound in the Project... | Title bar (**+**) | As above |
| Refresh from Library... | Title bar | As above |
| Refresh | Title bar | Reads the lists again |
| Play | A mix's row, or a project sound's (**▶**), or right-click | Plays its render at once |
| Copy to the Desk | Right-click a mix | A copy on the Desk, with its files |
| Hear | Click a project sound, or right-click it | Opens it in [the Hear tab](https://edgemodders.ai/wiki/edgewave/finding.html#the-hear-tab) |
| Open the Mix That Made It | A project sound's row, or right-click | Opens its mix, when EDGEwave knows it |
| Copy Name | A named sound's row (copy icon), or right-click | The name a quest, scene or script plays it by |
| Show the WAV | Right-click a named sound | Its WAV file |
| Reveal in File Explorer | Right-click an override or a REDnode sound | Its file in File Explorer |
| Open Folder... | The view, with no folder open | VS Code's Open Folder box |

### The Library

| Command | Where | Does |
|---|---|---|
| Reveal in File Explorer | Title bar (folder); a folder's row; right-click a sound | Opens the Library, the folder or the sound's folder in File Explorer |
| Refresh the Library | Title bar | Reads the Library again |
| Set the Library Folder... | Title bar (gear) | As above |
| Play | A sound's row (**▶**) | Plays it at once |
| Hear | Click a sound, or right-click it | Opens it in the Hear tab |
| Add to Project | A sound's row, or right-click | Copies it into the open project |
| Edit on the Desk | An EDGEwave sound's row, or right-click | A copy on the Desk, to change |
| Open on the Desk | A plain sound file's row, or right-click | A new sound on the Desk with the file as its first track |

### Game Assets

| Command | Where | Does |
|---|---|---|
| Filter the Game's Sounds | Title bar (funnel) | As above |
| Clear the Filter | Title bar, while a filter is set | Shows everything again |
| Refresh Game Assets | Title bar | As above |
| Play | A sound's row (**▶**) | Plays it at once, with no tab. Again stops it |
| Add to the Open Sound | A sound's row (**+**), or right-click | A new track on the sound open in the editor |
| Open in EDGEwave | A sound's row (a page with an arrow), or right-click | Opens it as its own sound document |
| Hear | Click a row, or right-click | Opens it in the Hear tab |
| Play in the Game | Right-click an event | Plays the event in the running game, through REDnode ([Play in the Game](https://edgemodders.ai/wiki/edgewave/finding.html#play-in-the-game)) |
| Copy Name | Right-click | An event's name, a variation's hash, or a file's game path |

### From other views

| Command | Where | Does |
|---|---|---|
| Open Sound in EDGEwave... | Right-click a sound file (`.wav`, `.ogg`, `.mp3`, `.flac`, `.opus`, `.wem`) in VS Code's Explorer, or in REDcode's Project view | Opens it in the editor |
| Open in EDGEwave | REDcode's sound list (**Browse Game Sounds**) and its audio player | Hands the sound that is playing to EDGEwave. It is REDcode's button |

Other EDGE tools also reach EDGEwave directly. EDGEquest's sound pickers search and play sounds through it, and its Storyboard opens Voice Lines.

## Buttons in the editor

| Where | Buttons |
|---|---|
| Header | **Generate Sound...**, **Speak Line...**, and on a voice line **Re-Voice...** and **Translate** (planned). The **Voice line** tick box |
| Mix bar | Previous clip edge, play, stop, next clip edge, loop, **+** (**Add Sound**), **Render WAV**, **Add to Project...** |
| Lanes | A tick box per lane. Right-click a lane: **Only This Track**, **All Tracks**, **Move Up**, **Move Down** |
| Track bar | **Level**, **Pan**, **Rate**, **Start**, **Remove** |
| Clip bar | Play, stop, **+**, **−**, **Fit**, **Sel** |
| Under the waveform | **Trim**, **Cut**, **Copy**, **Paste**, **Silence**, **Fade in**, **Fade out** and their curve, **Apply gain**, **Normalize**, **Mono** or **Stereo**, **Set loop**, **Clear loop** |
| Effects and Master panes | **Preset...**, **Add effect...**, and on each effect a tick box and **×**. Master also has **Gain** and the **Render** sample rate |

What each does: [Edit and mix](https://edgemodders.ai/wiki/edgewave/editing.html). **Add to Project...** has a page of its own: [Into the game](https://edgemodders.ai/wiki/edgewave/into-the-game.html).

## Keys

These work in the editor, once you have clicked the waveform.

| Key | Does |
|---|---|
| `Space` | Play or stop the selected clip |
| `Shift+Space` | Play or stop the whole mix |
| `Ctrl+X`, `Delete`, `Backspace` | Cut the selection |
| `Ctrl+C`, `Ctrl+V` | Copy the selection, paste at the cursor |
| `Ctrl+A` | Select the whole clip |
| `Home`, `End` | Cursor to the start, to the end |
| `Ctrl` + mouse wheel | Zoom the waveform |
| `Ctrl+Z`, `Ctrl+Y` | Undo, redo |
| `Ctrl+S` | Save the sound document |
| `Escape` | Closes a voice tool's window, or the right-click menu |

EDGEwave sets no global keyboard shortcuts. To give a command one, use VS Code's **Keyboard Shortcuts** (`Ctrl+K Ctrl+S`) and search for `EDGEwave`.

## Tools for assistants

An AI assistant gets six tools through EDGEwave's MCP server: `sound_events`, `sound_custom`, `voice_lines`, `voice_status`, `voice_voices` and `voice_speak_line`. They are listed on [Assistants](https://edgemodders.ai/wiki/edgewave/assistants.html#the-tools).
