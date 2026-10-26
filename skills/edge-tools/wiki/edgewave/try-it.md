<!-- Copied from EDGEweb's docs/wiki/edgewave/try-it.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgewave/try-it.html (reviewed 2026-10-24) -->

# Install and use EDGEwave

EDGEwave 0.1.0 is a **preview**: everything in it passed its hand test, in the game where it applies, but expect rough edges. EDGEwave never changes your game folder by itself: what it makes goes into your REDcode project, and REDcode packs it into a mod.

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows | Steam, GOG or Epic. EDGEwave reads its sounds through REDcode and REDbridge |
| [VS Code](https://code.visualstudio.com/) 1.90 or later | Or the [EDGEkit](https://edgemodders.ai/wiki/edgekit/) editor, which has EDGEwave built in |
| [REDcode](https://edgemodders.ai/wiki/redcode/) 0.10.0 or later, set up with REDbridge | Installing EDGEwave installs REDcode with it. REDcode offers to download REDbridge the first time it needs it |
| A REDcode project | Where EDGEwave saves your edits and renders. See [Projects](https://edgemodders.ai/wiki/redcode/projects.html) |
| For the voice tools only: an [ElevenLabs](https://elevenlabs.io) account and API key | Each use spends your ElevenLabs credits |

## Install it

1. In VS Code, open the **Extensions** view (Ctrl+Shift+X).
2. Search for **EDGEwave** (publisher Edgemodders, id `edgemodders.edgewave`) and press **Install**. It is on the VS Code Marketplace and on Open VSX, so it installs the same way in editors that use Open VSX.
3. VS Code installs REDcode for Cyberpunk 2077 with it, if you don't have it yet.

The `.vsix` file is also on [EDGEwave's releases page](https://github.com/Edgemodders/EDGEwave/releases), for installing by hand (**Extensions: Install from VSIX…**). Updates come through the Extensions view.

## Edit a sound

1. **Open a sound.** Run **REDcode: Browse Game Sounds**, play a sound, and click **Open in EDGEwave**. Or right-click a `.wav` or `.ogg` file in REDcode's Project view or VS Code's Explorer and choose **Open Sound in EDGEwave…**.
2. **Listen and select.** Space plays and stops. Drag on the waveform to select part of it; **Loop** repeats the selection. Ctrl+mouse wheel zooms, and **Fit** shows the whole sound.
3. **Edit.** Trim, Cut, Copy, Paste, Silence, Fade in and out (three curves), Apply gain, Normalize, Mono or Stereo. Each edit is listed under **Edits**, where × removes it. Ctrl+Z and Ctrl+Y undo and redo, and Ctrl+S saves.
4. **Render.** Pick a sample rate and click **Render WAV**. A 16-bit WAV appears in your project.

The EDGEwave icon in the activity bar opens the **Sounds** view: your project's sound documents, and the ones you opened lately.

(Screenshot on the wiki, "The Sounds view and Open in EDGEwave": REDcode's sound browser with the Open in EDGEwave button, and EDGEwave's Sounds view in the activity bar listing two sound documents.)

## Mix several sounds

| Part | What it does |
|---|---|
| **Add Sound** | Adds a track: a game sound effect, a game file by its path, or a sound file |
| The lanes | One per track on a shared timeline. Drag a clip sideways to move it in time, or a lane up or down to reorder it. A checkbox per lane puts the track in the mix or leaves it out; right-click a lane for **Only This Track** and **All Tracks** |
| **Track** | Level, Pan, Rate (pitch and speed together) and Start, for the selected track |
| **Effects** | Per track and on the master: EQ, Low-pass, High-pass, Band-pass, Reverb, Distortion, Compressor. Presets: **Radio**, **Holocall**, **PA speaker**, **Muffled through a wall** |

Drag the bar between the Track bar and the Clip bar to give the lanes more room. **Render WAV** renders the checked tracks, reverb tails included.

## Put it into the game

**Into the Game…** asks what the mix should replace. It lists every game sound effect on a track, the tracks in the mix first:

| Route | What it does | Works beside other sound mods |
|---|---|---|
| **Override sound `<hash>`** | Replaces that one sound (one variation of its event) | No: the last mod loaded wins |
| **Replace the event, every variation, with REDmod** | The game plays your mix for that audio event | Yes |
| **Silence the event, every variation, with REDmod** | The game plays silence for that event | Yes |
| **A REDmod custom sound for an event…** | The same, for an event you name | Yes |

What goes in is the mix of the checked tracks. Then:

1. For the REDmod routes, turn on REDcode's `redcode.pack.redmod` setting first.
2. Pack the project with REDcode and install the mod. See [Pack and install](https://edgemodders.ai/wiki/redcode/pack-install.html).
3. Start the game again to hear it: a sound mod is read when the game starts. For the REDmod routes, start it with REDcode's **Run Game**, so REDmod deploys the sound.

Voice lines can't go into the game as voice lines yet: that needs a `.wem` file, which needs Wwise. A REDmod custom sound can still play a mix for an event.

## Voice tools (ElevenLabs)

| Button | What it makes |
|---|---|
| **Generate Sound…** | A sound effect from a description, with a length, Loop, and how closely to follow the description |
| **Speak Line…** | A line spoken in one of your ElevenLabs voices, or in the selected game line's voice |
| **Re-Voice…** | The selected line's words and timing in another voice: describe it (such as `female, calm`) or pick one of your voices |

Set your key with **EDGEwave: Set ElevenLabs API Key**. It is kept in VS Code's secret storage, not in a settings file. Using a game line's voice makes a voice clone in your ElevenLabs account: EDGEwave asks once before the first clone, reuses it for that line, and **EDGEwave: ElevenLabs Voices Made by EDGEwave…** lists the clones so you can delete them. A game line's voice belongs to a real voice actor: use clones only for your own mods, and follow ElevenLabs' terms.

## Settings

| Setting | Default | What it does |
|---|---|---|
| `edgewave.elevenlabs.sampleRate` | 48000 | The rate the voice tools ask for. If your plan refuses it, EDGEwave uses 24000 from then on |
| `edgewave.elevenlabs.speechModel` | Empty: ElevenLabs' default | The model Speak Line starts with |
| `edgewave.elevenlabs.voiceChangerModel` | `eleven_multilingual_sts_v2` | The model Re-Voice starts with |
| `edgewave.elevenlabs.baseUrl` | `https://api.elevenlabs.io` | ElevenLabs' server, for data residency |

## Where files go

| You opened | EDGEwave saves |
|---|---|
| A game sound effect | `source\raw\sfx\<event>\<sound>.edgewave` in your project, and the WAV beside it |
| A game voice line | The game file's own path under `source\raw`, and the WAV beside it |
| A file on disk | A `.edgewave` file beside it. Rendering a `.wav` writes `<name>.edit.wav`, so your original is kept |

Opening the same sound again reopens its `.edgewave` file, with your edits. The `.edgewave` file holds your edits, never audio, so it is safe to share.

## Coming in the next version

Built but not released, and still in hand test (see EDGEwave's [changelog](https://github.com/Edgemodders/EDGEwave/blob/main/CHANGELOG.md)): **As a REDnode sound** in Into the Game, **Voice Lines** for a quest's dialogue, a search over the game's sound events, and **EDGEwave: Connect an Assistant (MCP)…** for AI assistants such as Claude Code. The next version needs REDcode 0.10.3 or later.

## Tell us what you find

Report problems on [EDGEwave's issues page](https://github.com/Edgemodders/EDGEwave/issues) or on the [EDGEmodders Discord](https://discord.gg/63qP3Erw43). Say what you did, what you expected and what happened.
