<!-- Copied from EDGEweb's docs/wiki/redagent/index.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redagent/ (reviewed 2026-10-24) -->

# REDagent

REDagent is EDGE's modding agent. It lives in a chat window drawn over Cyberpunk 2077 and writes, runs, checks and fixes [REDnode](https://edgemodders.ai/wiki/rednode/) mods with you, while you play. It is powered by Claude.

(Screenshot on the wiki, "REDagent in the game": The REDagent chat window on the right of the game screen, with a question, an answer with its cost in dim text, and the footer with the model choice, the chat total, Chats, New and Key.)

## Benefits

- **Ask in plain words.** "Make me a mod that warns me when my health drops below 30%" is enough.
- **It checks its own work.** REDagent reads the mod's log, looks at its overlay window and asks the running game, then fixes what is wrong.
- **You approve every change.** Each file change appears as a diff with **Allow**, **Allow all in this chat** or **Deny**.
- **Everything can be undone.** Every change is backed up and listed with an **Undo** button, even after you restart the game.
- **Live.** REDnode loads a new or changed mod a moment after REDagent writes it, with no game restart.
- **Chats are kept.** Close the game and carry on later: your last 30 chats are saved, with their changes.
- **Clear costs.** Each answer shows what it cost. Pick Opus for building mods or Sonnet for quick questions.
- **Other mods can ask it, on your terms.** A mod you allow can ask REDagent questions and show you the answers, read-only and within a daily spending limit you set.
- **It uses other mods' tools.** Mods can offer tools to AI assistants through REDnode. REDagent uses them: tools that only read run at once, the rest ask you first.

## What it can't do

It sees REDnode's overlay windows, and sees the game's screen only when it takes a picture, which it does when it needs one. Pictures on an HDR screen are not yet tested in game. It can't press keys or move the mouse in the game, run commands or install npm packages. It only writes inside REDnode's apps folders.

## What you need

| You need | Why |
|---|---|
| Cyberpunk 2077 on PC, **game version 2.31**, with [REDnode](https://edgemodders.ai/wiki/rednode/install.html) 0.32.1 or later | REDagent is a REDnode package. Game version 2.5 is not supported yet: REDnode and REDagent move to it once RED4ext, redscript and Codeware support it |
| Your own Anthropic API key | REDagent calls Claude with your key; Anthropic bills you per use. A Claude.ai subscription can't be used |
| About 300 MB of disk, and a 140 MB download at first start | Mostly Anthropic's Claude Agent SDK. It is not in REDagent's zip: REDagent downloads it once, when you press **Get the Agent SDK** |
| About 120 MB of memory while the game runs | REDagent runs in its own process, outside the game |

## Status

**Released.** REDagent 0.3.1 came out on 2026-10-24 (the first release, 0.3.0, on 2026-10-23), for game version 2.31. It is the last release for 2.31: the next one moves to game 2.5 with REDnode. Every phase passed its in-game test:

| Phase | Passed in game |
|---|---|
| Chat in the game | 2026-10-12 |
| Writing and fixing mods, with change cards, backups and Undo | 2026-10-12 |
| Saved chats, pictures of the game's screen, a waiting line | 2026-10-13 |
| Other mods asking REDagent, with daily limits and the Mods view | 2026-10-13 |
| Using other mods' tools (0.3.1) | 2026-10-24 |

Download `REDagent-<version>.zip` from [REDagent's releases](https://github.com/Edgemodders/REDagent/releases) and follow the [install steps](https://edgemodders.github.io/REDagent/guide.html#install). Next, not started: REDagent inside REDcode, with edits reviewed in VS Code.

## In this section

| Page | |
|---|---|
| [Your first mod with REDagent](https://edgemodders.ai/wiki/redagent/first-mod.html) | From an empty chat to a working mod, step by step |
| [Using REDagent](https://edgemodders.ai/wiki/redagent/using.html) | The window, saved chats, changes and Undo, models and costs, your key and data, troubleshooting |
| [Mods that ask REDagent](https://edgemodders.ai/wiki/redagent/other-mods.html) | Letting other mods ask questions, daily limits and the Mods view |

## Reference

- [REDagent guide](https://edgemodders.github.io/REDagent/guide.html): install, first run, changes and undo, chats, your key and data, costs, troubleshooting
- [Changelog](https://edgemodders.github.io/REDagent/changelog.html): what changed in each release
- [Design and test results](https://edgemodders.github.io/REDagent/design.html)
- [Source and issues](https://github.com/Edgemodders/REDagent)
