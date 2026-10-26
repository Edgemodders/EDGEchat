<!-- Copied from EDGEweb's docs/wiki/edgewave/index.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgewave/ (reviewed 2026-10-24) -->

# EDGEwave

EDGEwave is the EDGE platform's sound studio. It is a VS Code extension that works beside [REDcode](https://edgemodders.ai/wiki/redcode/): REDcode finds and plays a game sound, and one button, **Open in EDGEwave**, takes it into the studio. There you cut, fade, mix and shape the sound, and put the result into the mod you are making.

**EDGEwave 0.1.0 is out, as a preview** (2026-10-20), on the VS Code Marketplace and Open VSX. It edits a sound, mixes several with effects, puts the result into the game (replacing a sound effect, or a whole audio event through REDmod), and makes new sounds and voice lines through ElevenLabs with your own key. See [Install and use EDGEwave](https://edgemodders.ai/wiki/edgewave/try-it.html).

(Screenshot on the wiki, "EDGEwave's sound editor": A game sound open in the EDGEwave editor: the waveform with a selection, the Edits list, and the Render pane, in REDcode's HUD colours.)

## What it's for

Cyberpunk 2077 stores its sounds in formats that ordinary audio tools can't open, packed inside the game's archives. Changing a gunshot, a menu click or a line of dialogue today means extracting it with one tool, editing it in another and converting it back with a third.

EDGEwave puts those steps in one place, next to the mod project:

- **open any game sound** straight from REDcode's sound browser or audio player;
- **edit it** with the basics: trim, cut, copy and paste, silence, fades, gain, normalize, mono or stereo, loop points;
- **keep the original safe**: your edits are a list of steps saved in a small `.edgewave` file, so you can undo, change or remove any of them later;
- **mix** several sounds on tracks, with effects (EQ, filters, reverb, distortion, compressor) and presets such as **Radio**, **Holocall**, **PA speaker** and **Muffled through a wall**;
- **render** the result to a WAV file in your project;
- **put it into the game** with **Into the Game…**: replace one sound effect, or replace or silence a whole audio event as a REDmod custom sound;
- **make new sounds and voices** through ElevenLabs: a sound effect from a description, a line spoken in a voice, or a line re-voiced.

Later phases add a search over all of the game's audio, and more (see [Roadmap](https://edgemodders.ai/wiki/edgewave/#roadmap)).

## Why you might want it

| If you... | EDGEwave gives you |
|---|---|
| Want to change how something in the game sounds | The game's own sound, opened in one click from REDcode, with no converting by hand |
| Are new to audio editing | The common edits as buttons, with undo and redo like any VS Code file |
| Share your mod's source, for example on GitHub | The `.edgewave` file lists your edits, never the audio itself, so it holds no game data and is safe to share. EDGEwave fetches the sound again from your own game when you open it |
| Make voice mods | **Speak Line** and **Re-Voice** through ElevenLabs, with your own API key (each use spends your ElevenLabs credits). A voice line can't go into the game as a voice line yet: that needs a `.wem` file, made with Wwise. **Translate** is planned |

## How it fits into EDGE

| Toolkit | Role for EDGEwave |
|---|---|
| [REDcode](https://edgemodders.ai/wiki/redcode/) | Required (0.10.0 or later for EDGEwave 0.1.0; installing EDGEwave installs it). Owns the mod project, finds and plays game sounds, hands them to EDGEwave with **Open in EDGEwave**, and packs the mod. EDGEwave does not run without it |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Reads the game's archives and audio for REDcode, and writes a replaced sound effect into the game's format |
| [REDnode](https://edgemodders.ai/wiki/rednode/) | Plays sounds in the running game with its Sound API. EDGEwave's next version adds **As a REDnode sound**, which hands a mix to a REDnode package (built, not released, and untested in game) |
| [EDGEkit](https://edgemodders.ai/wiki/edgekit/) | The EDGEkit editor has EDGEwave 0.1.0 built in |

## Status

As of 2026-10-24:

| Part | State |
|---|---|
| A0 Scaffold | Done 2026-10-14: the extension skeleton, docs site and design |
| A1 Edit | Done 2026-10-16: the single-sound editor, hand test passed |
| A2 Mix | Done 2026-10-20: tracks, effects and presets, hand test passed |
| A3 Into the game | Done 2026-10-20: a replaced sound effect, a REDmod replacement and a silence all played in the game |
| V1 Voice tools | Done 2026-10-20: Generate Sound, Speak Line and Re-Voice through ElevenLabs, hand test passed |
| Release | **0.1.0, a preview**, released 2026-10-20 on the VS Code Marketplace and Open VSX, and on [GitHub](https://github.com/Edgemodders/EDGEwave/releases). A Nexus page is still to come |
| V2 Voice a quest | Built 2026-10-24, hand test pending, not released: voices a quest's dialogue lines handed over by EDGEquest, sound events for quests, an MCP server for assistants |

What it can't do yet: put a voice line into the game as a voice line (that needs a `.wem`, which needs Wwise), or combine two mods that override sound effects (only one wins; the REDmod routes combine). To hear a sound mod, install it and start the game again.

[Install and use EDGEwave](https://edgemodders.ai/wiki/edgewave/try-it.html) shows how to get started.

## Roadmap

In plain words. Each phase ends with a test on the developer's PC.

| Phase | What it adds | Status |
|---|---|---|
| A0 Scaffold | The project itself | Done |
| A1 Edit | The single-sound editor, render to WAV | Done, in 0.1.0 |
| A2 Mix | Layer several sounds on tracks; effects such as EQ, reverb and distortion; presets modders reach for (radio, holocall, PA speaker, muffled through a wall); a quick search to add game sounds | Done, in 0.1.0 |
| A3 Into the game | Replace a game sound effect, or replace or silence an audio event with REDmod, so the edited sound plays in the game after REDcode packs the mod. Voice lines need a `.wem`, still being researched | Done, in 0.1.0 |
| V1 Voice tools | Generate Sound, Speak Line and Re-Voice through ElevenLabs | Done, in 0.1.0 |
| V2 Voice a quest | Voice a quest's lines, sound events for quests, tools for AI assistants (MCP) | Built, hand test pending |
| A4 Index | Build an index of all the game's audio from your own install, and search it: events, sounds, switches and parameters | Planned |
| A5 Voices and objects | Find dialogue by its text, with subtitles and scenes; weapons, vehicles and radio stations and the sounds they use | Planned |
| A6 EDGE | Play a sound in the running game through REDnode | Planned. The MCP server came with V2 |

**Translate** (the same line in another language) is planned, with no phase until it is defined.

## Credits

EDGEwave's search (A4) is inspired by [Cyberpunk 2077 SoundDB](https://gitlab.com/cp2077-sounddb/frontend) by Zhincore. It is written from scratch from SoundDB's public documentation, uses none of its code or data, and builds its index from your own game.

## In this section

| Page | |
|---|---|
| [Install and use EDGEwave](https://edgemodders.ai/wiki/edgewave/try-it.html) | Install it, open a sound, edit, mix, put it into the game, the voice tools, settings |

The [EDGEwave docs](https://edgemodders.github.io/EDGEwave/), with its [design](https://edgemodders.github.io/EDGEwave/design.html) and the [A1 Edit](https://edgemodders.github.io/EDGEwave/a1-edit.html), [A2 Mix](https://edgemodders.github.io/EDGEwave/a2-mix.html) and [A3 Into the game](https://edgemodders.github.io/EDGEwave/a3-game.html) pages, are the developer reference. Source and issues: [github.com/Edgemodders/EDGEwave](https://github.com/Edgemodders/EDGEwave).
