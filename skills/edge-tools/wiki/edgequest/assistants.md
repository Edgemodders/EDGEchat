<!-- Copied from EDGEweb's docs/wiki/edgequest/assistants.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/assistants.html (reviewed 2026-11-13) -->

# EDGEquest for assistants

An AI assistant can use the same quest maker you have in VS Code. You describe the quest in a sentence or two; the assistant writes the story file, makes the quest's game files and works through its checklist. If the story file is open on the Storyboard, you can watch the cards change as it goes.

The assistant reaches EDGEquest through an **MCP server**: a small program that lets an assistant use a tool. EDGEquest's is called `@edgemodders/edgequest-mcp`. It is free, and it is on npm, the store Node.js programs come from.

| On this page | |
|---|---|
| [What an assistant can do](https://edgemodders.ai/wiki/edgequest/assistants.html#what-an-assistant-can-do) | With examples of what to ask |
| [Which assistant](https://edgemodders.ai/wiki/edgequest/assistants.html#which-assistant) | Claude Code, and others |
| [What you need](https://edgemodders.ai/wiki/edgequest/assistants.html#what-you-need) | |
| [Connect it](https://edgemodders.ai/wiki/edgequest/assistants.html#connect-it) | One command |
| [Try it](https://edgemodders.ai/wiki/edgequest/assistants.html#try-it) | A first request |
| [Its tools](https://edgemodders.ai/wiki/edgequest/assistants.html#its-tools) | What each does, and what it changes |

## What an assistant can do

| You ask | The assistant |
|---|---|
| "How does the quest Pyramid Song start, and what choices does it have?" | Finds the quest in your game and reads it to you in plain words, step by step |
| "Which quests use Judy's apartment?" | Searches the game's quests by person, place, fact or journal entry |
| "Start a side quest where V finds something odd at the apartment door, with three ways it can end" | Writes the story file in your project, with beats, a scene and a choice, and makes the quest |
| "Make the last option a Body check, and add a line before it" | Changes the story the way the Storyboard does |
| "What's left to do on this quest?" | Reads the checklist, and can do the items that are text, such as the description and the voice prompts |
| "Why doesn't this quest mod work?" | Runs the same checks as [Check Quest Mod](https://edgemodders.ai/wiki/edgequest/checking.html#check-quest-mod) and explains the findings |

What it can't do: play the quest for you, or get it into the game. Packing and installing stay with you, in REDcode. And the limits of this preview apply to an assistant too: V alone in scenes, subtitles only, a quest that starts on load, and one tested place.

## Which assistant

| Assistant | How it gets EDGEquest |
|---|---|
| [Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html), Anthropic's assistant for the terminal and VS Code. It needs a paid Claude plan | Add the server yourself, with the command [below](https://edgemodders.ai/wiki/edgequest/assistants.html#connect-it) |
| [EDGEchat](https://edgemodders.ai/wiki/edgechat/), the EDGE plugin for Claude Code | EDGEchat doesn't include EDGEquest's server yet. Add it yourself, the same way; it works beside the plugin |
| Other assistants that speak MCP | The same command |

The server has been run through a scripted test of an assistant's whole flow: start a quest, edit it, prepare its voice lines and make it. A session with a real assistant is not on record yet, so treat it as new, and please tell us how it goes on [Discord](https://discord.gg/63qP3Erw43).

## What you need

- Windows, with Cyberpunk 2077 2.5.
- [REDbridge](https://edgemodders.ai/wiki/redbridge/) 0.11.0 or later, the program that reads the game's files. REDcode's **Install REDbridge** command fetches it.
- The .NET 10 runtime, which REDbridge runs on, and [Node.js](https://nodejs.org/) 20 or newer, which the server runs on.
- ArchiveXL and RED4ext in the game, to play the quests it makes. See [What you need](https://edgemodders.ai/wiki/edgequest/install.html#what-you-need).

You don't need the EDGEquest extension for the server to work. With it, you see the assistant's work on the Storyboard.

## Connect it

With Claude Code, run this once in a terminal:

```
claude mcp add edgequest -- npx -y @edgemodders/edgequest-mcp
```

Then start a new Claude Code session. Other MCP clients take the same command: `npx -y @edgemodders/edgequest-mcp`.

On a PC where REDcode or EDGEquest is set up, the server needs nothing else: it finds the game folder, REDbridge and .NET from their settings. Otherwise, give them on the command line or in the environment:

| What | Command line | Environment |
|---|---|---|
| The game folder | `--game <path>` | `EDGEQUEST_GAME_PATH` |
| REDbridge.exe, or its folder | `--bridge <path>` | `REDBRIDGE_EXE` |
| A per-user .NET runtime | `--dotnet-root <path>` | `DOTNET_ROOT` |
| The quest index's folder | `--cache <path>` | `EDGEQUEST_CACHE` |

## Try it

1. In REDcode, make a new project, as in [Your first quest](https://edgemodders.ai/wiki/edgequest/first-quest.html#1-make-a-project).
2. In Claude Code, ask:

   > Use the edgequest tools. In my project at `<the project's folder>`, start a side quest called "Something at the Door". V goes home, notices something odd about the door, and can look closer, go inside or walk away. Make it, and tell me what is left on its checklist.

3. Claude Code asks before it uses each tool for the first time. Allow them.

**You should see** the assistant build the quest index if your game has none yet (about a minute and a half), then a new file `something_at_the_door.quest.yaml` at the top of your project, and a summary of the quest's beats, any problems, and its checklist. Open the story file to see it on the Storyboard.

Then [pack, install and play it](https://edgemodders.ai/wiki/edgequest/writing.html#play-it) yourself.

## Its tools

| Tool | What it does | What it changes |
|---|---|---|
| `quest_index` | Builds the quest index from your game (about a minute and a half, once), and says when the game has changed | Its own index file only |
| `quest_find` | Finds quests and phases by title, file name, fact, journal entry, scene, person or place | Nothing |
| `quest_describe` | A quest, phase or story file in plain words, step by step | Nothing |
| `quest_scene` | A scene in plain words: who is in it, the lines, the choices and where they lead | Nothing |
| `quest_check` | Checks a quest mod's files, as [Check Quest Mod](https://edgemodders.ai/wiki/edgequest/checking.html#check-quest-mod) does | Nothing |
| `quest_checklist` | What's left to do in a quest or a project | Nothing |
| `quest_new` | Starts a quest in a project, from the template or from a story the assistant wrote | Writes a new story file in the project |
| `quest_edit` | Changes a story file in story words: beats, where a choice goes, an option's kind, steps, lines, sounds and music | The story file |
| `quest_make` | Makes the quest's game files from its story file, and checks them | The quest's game files in the project, and the story file's checklist |
| `quest_voice` | A story's lines with their voice prompts and whether each has a take, ready for EDGEwave | Nothing, unless asked to prepare the lines: then it writes an id into each line of the story file |

Good to know:

- **Everything is written into your project.** No tool writes to the game folder. Nothing reaches the game until you pack and install.
- **The server doesn't ask before it writes.** Your assistant does: Claude Code asks permission for each tool unless you told it not to.
- **A bad edit is refused, and nothing is written.** Each writing tool answers with the quest's beats, its problems and what's left on its checklist, so the assistant sees at once whether its change worked.
- **A game file you changed by hand is kept,** as in the extension.

For connecting Claude Code to the other EDGE tools, see [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html).
