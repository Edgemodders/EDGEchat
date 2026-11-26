<!-- Copied from EDGEweb's docs/wiki/redagent/index.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redagent/ (reviewed 2026-11-25) -->

# REDagent

REDagent is an AI assistant inside Cyberpunk 2077. You type what you want into a chat window drawn over the game, and it writes the mod, runs it, checks that it works and fixes it, while you play. It is powered by Claude, the AI made by Anthropic.

(Screenshot on the wiki, "REDagent in the game": The REDagent chat window on the right of the game screen, with a question, an answer with its cost in dim text, and the footer with the model choice, the chat total, Chats, New and Key.)

**New here?** Read this page, then [Install and set up](https://edgemodders.ai/wiki/redagent/install.html), then make [your first mod](https://edgemodders.ai/wiki/redagent/first-mod.html). Allow about half an hour, most of it downloads.

## What it can make

The mods REDagent writes are **REDnode mods**: small programs that run beside the game through [REDnode](https://edgemodders.ai/wiki/rednode/), EDGE's scripting runtime. They can read what happens in the game, change it, and draw their own windows and HUD pieces over it. They can't add new clothes, cars or quests: those are made of game files, and other EDGE tools make them.

| You want | Can REDagent do it? | Example |
|---|---|---|
| Something on screen that reacts to the game | Yes | "Warn me when V's health drops below 30%." "Show a clock in the corner of the HUD." |
| A window with game information | Yes | "Make a window that shows V's money and level." |
| Answers about your game or your mods | Yes | "How many eddies does V have?" "What's in my mod log?" "Why does this mod crash?" |
| A change to the game right now | Yes, and it asks first | "Give V 500 eddies." |
| A recolored garment | Yes, with [EDGEmat](https://edgemodders.ai/wiki/edgemat/)'s tools, in a mod project you already have | "Find this jacket's materials and make the leather red." |
| New clothes, weapons, sounds or quests | No. Use [EDGEchat](https://edgemodders.ai/wiki/edgechat/), [REDcode](https://edgemodders.ai/wiki/redcode/), [EDGEmat](https://edgemodders.ai/wiki/edgemat/), [EDGEwave](https://edgemodders.ai/wiki/edgewave/) or [EDGEquest](https://edgemodders.ai/wiki/edgequest/) | |

## Why you'd want it

- **Ask in plain words.** You describe the mod. REDagent writes the code.
- **It checks its own work.** After writing a mod, REDagent reads the mod's log, looks at its window and asks the running game, then fixes what is wrong.
- **You approve every change.** Before REDagent creates or changes a file, it shows you the change and waits for **Allow** or **Deny**.
- **Everything can be undone.** Every file it changes is backed up first and listed with an **Undo** button, even after you restart the game.
- **No restart.** REDnode starts a new or changed mod about two seconds after REDagent writes it.
- **Chats are kept.** Close the game and carry on later: your last 30 chats are saved, with their changes.
- **You see what it costs.** Each answer shows its price under it. See [Costs, your key and your data](https://edgemodders.ai/wiki/redagent/costs.html).
- **It works with your other mods.** A mod can offer REDagent extra tools, and a mod you allow can ask REDagent questions for you. See [Mods that ask REDagent](https://edgemodders.ai/wiki/redagent/other-mods.html).

## What it can't do

- **It can't play for you.** It can't press keys or move the mouse in the game.
- **It sees the game only through pictures.** It reads REDnode's own windows directly. To see the game itself it takes a picture of your screen, and only when it needs one. Pictures on an HDR screen are untested.
- **It can't install software.** It can't run programs or download code libraries onto your PC.
- **It writes files in one place only.** Every file REDagent creates or changes is inside REDnode's apps folder, where REDnode keeps its mods (and in a [development folder](https://edgemodders.ai/wiki/rednode/settings.html#development-folders), if you set one). It can't touch the game's own files, and it can't change itself.

One exception to know about: tools that other EDGE software gives it can change other things. EDGEmat's tools, for example, change a material in your own mod project. Each of those changes asks you first, the same way.

## What you need

| You need | Why |
|---|---|
| Cyberpunk 2077 on PC, game version 2.5 | REDagent 0.4.1 is for game 2.5. On a game kept at 2.31, use REDagent 0.3.1 with REDnode 0.37.0 |
| [REDnode](https://edgemodders.ai/wiki/rednode/install.html) 0.50.2 or later | REDagent runs inside REDnode, which draws its window and connects it to the game |
| Your own Anthropic API key, with some credit | The key lets REDagent use Claude. You pay Anthropic for what you use. [Get a key](https://edgemodders.ai/wiki/redagent/install.html#1-get-an-anthropic-api-key) |
| About 300 MB of disk, and a 140 MB download at first start | Mostly Anthropic's Claude Agent SDK, the software REDagent runs on. REDagent downloads it once |
| About 120 MB of memory while the game runs | REDagent runs in its own process, outside the game |

> **A Claude subscription is not an API key.** A Claude.ai plan can't be used with REDagent. To make mods with a Claude plan, at your desk, use [EDGEchat](https://edgemodders.ai/wiki/edgechat/).

## Status

**Released.** The latest is REDagent 0.4.6 (2026-11-25), for game 2.5, on [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35670) and [GitHub](https://github.com/Edgemodders/REDagent/releases). Everything on these pages passed its test in the game, except pictures on an HDR screen.

| | |
|---|---|
| **New in the latest releases** | **Continue in VS Code**: hand a chat to Claude Code with EDGEchat; mods can ask for answers with no tools and pick a model; a mod's daily limit of $2.00 (0.4.6). Making and changing quickhacks with [EDGEhack](https://edgemodders.ai/wiki/edgehack/)'s tools, and **Replace the key** (0.4.4) |
| **Planned, not started** | REDagent's chats listed in REDcode, and one briefing shared with EDGEchat |

## In this section

| Page | |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/redagent/install.html) | Getting an API key, installing, the first start, updating and removing |
| [Your first mod](https://edgemodders.ai/wiki/redagent/first-mod.html) | From an empty chat to a working mod, step by step |
| [Using REDagent](https://edgemodders.ai/wiki/redagent/using.html) | The window, what to ask, changes and Undo, saved chats, every control |
| [Costs, your key and your data](https://edgemodders.ai/wiki/redagent/costs.html) | What it costs, how to keep costs down, and what is sent where |
| [Mods that ask REDagent](https://edgemodders.ai/wiki/redagent/other-mods.html) | Letting other mods ask questions, daily limits and the Mods view |
| [Troubleshooting](https://edgemodders.ai/wiki/redagent/troubleshooting.html) | What to do when something goes wrong |

## Reference

- [REDagent guide](https://edgemodders.github.io/REDagent/guide.html): the project's own short guide
- [Changelog](https://edgemodders.github.io/REDagent/changelog.html): what changed in each release
- [Design and test results](https://edgemodders.github.io/REDagent/design.html), for developers
- [Source and issues](https://github.com/Edgemodders/REDagent)
