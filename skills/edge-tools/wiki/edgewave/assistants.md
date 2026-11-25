<!-- Copied from EDGEweb's docs/wiki/edgewave/assistants.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgewave/assistants.html (reviewed 2026-11-22) -->

# EDGEwave and assistants

An AI assistant can do some of EDGEwave's work for you. You ask in plain words, such as "find the music cues for the Dex meeting", and the assistant searches the game's sound events. It can also turn a WAV file into a new sound event in your project, voice a quest's lines, and speak a single line in a character's voice.

It works because EDGEwave comes with an **MCP server**: a small program that offers these abilities to an assistant as tools. [MCP](https://edgemodders.ai/wiki/glossary.html#mcp-server) is the standard way AI assistants use tools. The assistant on this page is [Claude Code](https://claude.com/claude-code), Anthropic's assistant that runs in a terminal or inside VS Code.

The assistant gets six tools, not the whole studio. Editing, mixing and Add to Project's other routes are done with the buttons.

| On this page | |
|---|---|
| [What you can ask](https://edgemodders.ai/wiki/edgewave/assistants.html#what-you-can-ask) | Examples, and what comes back |
| [Connect Claude Code](https://edgemodders.ai/wiki/edgewave/assistants.html#connect-claude-code) | Three steps |
| [The ElevenLabs key](https://edgemodders.ai/wiki/edgewave/assistants.html#the-elevenlabs-key) | Only for voices, read from REDcode's Keys |
| [Other assistants](https://edgemodders.ai/wiki/edgewave/assistants.html#other-assistants) | VS Code's own agents, other clients |
| [The tools](https://edgemodders.ai/wiki/edgewave/assistants.html#the-tools) | All six |
| [Good to know](https://edgemodders.ai/wiki/edgewave/assistants.html#good-to-know) | Credits, the event list, what it can write |

## What you can ask

| Ask | What comes back |
|---|---|
| "Search the game's sound events for an airdrop landing." | Matching events, such as `sa_airdrop_package_land`, with their lengths and tags |
| "Which music cues does the quest q001 have for meeting Dex?" | The `mus_q001_...` cues that start and stop that music |
| "Which sounds does my project `C:\Mods\my_quest` already have?" | The project's own named sounds first, then the game's |
| "Make `C:\Sounds\knock.wav` a sound my quest can play, in my project `C:\Mods\my_quest`. Call it knock." | A new event, `edgewave_knock`, written into the project. Then pack and install, as in [A new sound for this project](https://edgemodders.ai/wiki/edgewave/into-the-game.html#a-new-sound-for-this-project) |
| "Which ElevenLabs voices do I have that sound like an older man?" | Voices from your account. Needs your key |
| "Voice the lines of my quest with EDGEwave." | With [EDGEquest](https://edgemodders.ai/wiki/edgequest/) connected too: a take for each line, as in [Voice a quest](https://edgemodders.ai/wiki/edgewave/voice-lines.html#voice-a-quest). Needs your key, and spends credits |
| "Have Judy say 'Took you long enough.', tired." | A WAV of the line in Judy's [character voice](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices), with its timings. Needs your key and a voice for `judy` set in VS Code. A new line spends credits; the same line again is free |

## Connect Claude Code

The server comes with the EDGEwave extension. You need Claude Code installed. [EDGEchat](https://edgemodders.ai/wiki/edgechat/), the EDGE plugin for Claude Code, does not include EDGEwave, so you connect it here.

1. In VS Code, press `Ctrl+Shift+P` and run **EDGEwave: Connect an Assistant (MCP)...**.
2. Choose **Connect Claude Code**. It doesn't ask about your ElevenLabs key: the server reads it from REDcode's Keys itself. See [The ElevenLabs key](https://edgemodders.ai/wiki/edgewave/assistants.html#the-elevenlabs-key).
3. Start a **new** Claude Code session. A session that was already open doesn't see the new tools.

| What you should see | |
|---|---|
| After step 2 | "EDGEwave is connected to Claude Code, reading your ElevenLabs key from REDcode's Keys. Start a new Claude Code session and ask it to find a sound event, or to voice a quest's lines." |
| After step 3 | Ask "Which EDGEwave tools do you have?": Claude lists `sound_events`, `sound_custom`, `voice_lines`, `voice_status`, `voice_voices` and `voice_speak_line`. Or run `claude mcp list` in a terminal: `edgewave` shows as connected |

This connects EDGEwave for every Claude Code session on your PC, whichever folder you start it in, and replaces an older connection. You don't need to install anything else: if you don't have [Node.js](https://nodejs.org/) 20 or later, the server runs with the copy built into VS Code. If EDGEwave can't find Claude Code's `claude` command, it offers to copy the line for you to run yourself.

All the EDGE servers, side by side: [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html).

(Screenshot on the wiki, "Connect an Assistant": The list titled 'EDGEwave: Connect an Assistant (MCP)' in VS Code: Connect Claude Code, Copy the Claude Code command, Copy a JSON entry and Reveal the server file.)

## The ElevenLabs key

Only the voice tools need a key: `voice_lines`, `voice_voices` and `voice_speak_line`. Searching sound events and making a new event work without one.

Since EDGEwave 0.3.0 no assistant holds your key. The server reads it from [REDcode's Keys](https://edgemodders.ai/wiki/edgewave/voices.html#your-key), the store every EDGE tool shares, each time a voice tool needs it. So a key you change or remove in REDcode's Keys counts at once, and REDcode's Keys view lists "EDGEwave MCP" among the tools that read it.

| | |
|---|---|
| **Connected with EDGEwave 0.2.0** | That connection may hold your key in Claude Code's settings file, in plain text. Connect again: the new connection replaces it with one that holds no key. **Connect Claude Code** says so when it finds the old one, and so does the message when your key moves to REDcode's Keys |
| **With a REDcode older than 0.10.16** | No Keys. When you connect, EDGEwave asks "Give the assistant your ElevenLabs key too?". **Yes** hands the key to Claude Code, which keeps it **in its own settings file, in plain text**. **No** keeps it in VS Code, and the voice tools don't work for the assistant |

## Other assistants

| Assistant | How |
|---|---|
| **Agents inside VS Code** (1.101 or later) | Nothing to do: they see EDGEwave's tools by themselves, and the server reads your key from REDcode's Keys |
| **Another MCP client** | In the same list, choose **Copy a JSON entry** and paste it into the client's MCP settings. **Copy the Claude Code command** gives the one-line command instead. Neither holds your key |
| **By hand** | **Reveal the server file** shows it: `%LOCALAPPDATA%\EDGEwave\mcp\edgewave-mcp.cjs`. Any MCP client can run it with Node.js 20 or later. It reads the key from REDcode's Keys, or from the environment variable `ELEVENLABS_API_KEY` when that is set |

The server needs no VS Code to run. It reads EDGEwave's settings from VS Code's settings file.

## The tools

| Tool | Does | Writes? |
|---|---|---|
| `sound_events` | Searches the game's sound events by words, tags or hash. It can keep to music cues, or to events marked for quests. With a project's folder, the project's own sounds come first | No |
| `sound_custom` | Makes a WAV file into a new event, `edgewave_<name>`, in a project: a sound effect with a position, or music that plays the same everywhere | Yes, into the project |
| `voice_lines` | Voices a quest's lines through ElevenLabs and saves the takes and their record | Yes, into the project. Spends credits |
| `voice_status` | Says which lines of a quest are voiced, changed or missing | No |
| `voice_voices` | Lists the voices in your ElevenLabs account, with a search | No |
| `voice_speak_line` | Speaks one line in a character's voice, or a voice you name, with how it is spoken, such as `tired, quiet`. Gives back the WAV and its timings, for lip sync. The character's voice must be in [Character voices](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices), set in VS Code | Yes, into EDGEwave's own folder. Spends credits for a new line |

## Good to know

- **`voice_lines` and `voice_speak_line` do not ask first.** An assistant that decides to voice lines does so, and each new line spends ElevenLabs credits. If you want a say, tell the assistant to ask you before it voices anything.
- **The event list comes from VS Code.** `sound_events` reads a list EDGEwave builds from your game. If the assistant says EDGEwave has not read the game's sound events yet, open VS Code with a REDcode project, click EDGEwave's icon and unfold **Sound effects** in Game Assets once. Then ask again.
- **A new event needs packing.** `sound_custom` only writes into the project. The game plays the sound after you switch on [the REDmod setting](https://edgemodders.ai/wiki/edgewave/into-the-game.html#the-redmod-setting), **Pack and Install**, and start the game with **Run Game**.
- **An open Voice Lines tab follows along.** While the assistant voices lines, each row in the tab flashes as its take changes.
- **Privacy.** The server makes no network calls of its own. Only the voice tools reach ElevenLabs, as on [Voice tools](https://edgemodders.ai/wiki/edgewave/voices.html#cost-privacy-and-your-key). What the assistant itself sends to its maker is that assistant's business.
