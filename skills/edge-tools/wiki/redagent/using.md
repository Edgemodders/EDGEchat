<!-- Copied from EDGEweb's docs/wiki/redagent/using.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redagent/using.html (reviewed 2026-10-24) -->

# Using REDagent

New to REDagent? Start with [Your first mod](https://edgemodders.ai/wiki/redagent/first-mod.html). This page is the tour of everything else.

## The window

REDagent's window opens on the right of the game when it starts. If you close it, press **F10**, open the **Mod Manager** and press **Show** on REDagent. **Pin to launcher** there keeps it one press away.

(Screenshot on the wiki, "REDagent's window": The REDagent window with a short chat, the changes strip above the input, and the footer: the Opus 5.5 / Sonnet 5.5 choice, the chat's total cost, and the Chats, New and Key buttons.)

| Part | What it does |
|---|---|
| **The input** | Type your question and press **Enter** or **Send**. While REDagent answers, **Stop** stops it |
| **The model choice** | **Opus 5.5** (the default) or **Sonnet 5.5**. See [Models and costs](https://edgemodders.ai/wiki/redagent/using.html#models-and-costs) |
| **Total** | What this chat has cost so far |
| **Chats** | Your saved chats, and the [Mods](https://edgemodders.ai/wiki/redagent/other-mods.html) tab |
| **New** | Starts a fresh chat |
| **Key** | Replaces your saved Anthropic API key |
| **The changes strip** | Above the input, once REDagent has changed a file in this chat. See [Changes and Undo](https://edgemodders.ai/wiki/redagent/using.html#changes-and-undo) |

While REDagent works, the last line of the chat says **WORKING...**. When it says **WAITING FOR YOU...**, a card in the chat needs your answer: scroll to it.

## What to ask

Plain words work. Some ideas:

| You ask | REDagent |
|---|---|
| "What's in my mod log?" | Reads REDnode's Mod log, crashes included, and explains it |
| "What are V's health, level and money?" | Looks up the game's functions and asks the running game. Before any call that could change the game, it asks you |
| "What does the Hello mod window show?" | Captures that overlay window and reads it |
| "What's on my screen?" | Takes a picture of the game's screen, with or without REDnode's windows, and describes it |
| "Swap my changed archive into the game" | Swaps it into the running game through REDnode, so a changed mesh or texture shows without a restart. It asks you first |
| "What tools do my mods offer?" | Lists the tools your installed mods offer to AI assistants through REDnode, and can use them. Tools that only read run at once; the rest ask you first |
| "Why does the crash mod break?" | Reads the mod's files and explains the code |
| "Make a mod that ..." | Writes a new REDnode mod, waits for it to load, checks it runs, and fixes it |
| "Fix the Throw button" | Changes the file, then checks the log again |

Without REDnode's tools allowed (see [Troubleshooting](https://edgemodders.ai/wiki/redagent/using.html#when-something-goes-wrong)), REDagent can still chat and read your mods' files, but can't see the log, the game or overlay windows.

## Changes and Undo

REDagent writes only inside REDnode's apps folders. It never changes its own files or anything in a `node_modules` folder.

Before every change, a **change card** shows it as a diff, added lines in green and removed lines in red, with three buttons:

| Button | What happens |
|---|---|
| **Allow** | This one change is made |
| **Allow all in this chat** | This and every later change in this chat are made without asking. A new chat, or reopening a saved one, asks again |
| **Deny** | Nothing changes. REDagent is told you said no, and asks what you want instead |

REDagent backs up each file before changing it. The **changes strip** above the input counts this chat's changes, and how many you've undone. **Show** lists them all, each with **Undo**, however far the chat has scrolled. Undo puts a file back as it was, or removes a file REDagent created and any folder left empty. REDagent hears about the undo with your next question.

Backups are kept in `%APPDATA%\@rednode\overlay\packages\redagent\backups`.

## Saved chats

Every chat is saved as it goes, with its changes, so closing the game loses nothing. When the game starts, your last chat comes back, and Undo still works on its changes.

**Chats** in the footer opens the list of your last 30 chats, each with its date and cost. **Open** one to carry on where you left off, or **Delete** it. The chat you're in says **This chat**. **Back** or **Close** returns to the chat.

(Screenshot on the wiki, "The Chats list": REDagent's Chats tab: several saved chats with their titles, dates and costs, Open and Delete buttons, and This chat on the current one.)

**New** starts a fresh chat. Start one when you change topic: the whole chat is sent with each question, so long chats cost more per answer.

Chats are kept in `%APPDATA%\@rednode\overlay\packages\redagent\chats`.

## Models and costs

You pay Anthropic for what you use, through your own API key. Each answer shows its cost under it in dim text, beside the chat's running total.

| Model | Use it for |
|---|---|
| **Opus 5.5** (the default) | Writing and fixing mods, and harder questions |
| **Sonnet 5.5** | Quick questions, at a lower price |

To give you an idea: in REDagent's first test, six questions (five on Opus, one on Sonnet) cost $0.34 in all, and each took 11 to 55 seconds. Questions asked close together cost less, because Anthropic briefly caches REDagent's long instructions. A picture of the game's screen costs about as much as a page of text; REDagent takes one only when it needs to see.

Questions from [other mods](https://edgemodders.ai/wiki/redagent/other-mods.html) always use Sonnet 5.5, and each mod has its own daily limit.

## Your key and your data

| What | Where it goes |
|---|---|
| Your API key | Stored encrypted with your Windows account, by REDnode. Only used to talk to Anthropic, and never shown again. **Key** replaces it |
| Your questions and REDagent's answers | Sent to Anthropic's API, as with any use of the Claude API |
| What REDagent reads to answer | Also sent to Anthropic: mod logs, values from the game, pictures of overlay windows and of the screen, and the files it reads |
| Everything else | Stays on your PC. REDagent sends no telemetry |

## When something goes wrong

| You see | Do this |
|---|---|
| "REDnode's tools are off" | Press **F10**, open the **Mod Manager**, select REDagent, and switch **Allowed** on for "REDnode's tools for AI agents" |
| **Get the Agent SDK** fails | Check your connection and press it again. A partial or mismatched download is thrown away, never used |
| "That does not look like an Anthropic API key" | Copy the whole key. Anthropic keys start with `sk-ant-` |
| An error about your key or credit | Check the key and your credit at [console.anthropic.com](https://console.anthropic.com/), then press **Key** and save the key again |
| REDagent asks for your key again | The saved key couldn't be read, for example after a Windows account change. Paste it again |
| The window is gone | **F10**, **Mod Manager**: check REDagent is switched on, and press **Show** if its window was closed |
| Anything else | Open REDnode's Mod log app. REDagent's lines start with `[redagent]` |

Still stuck? Ask on [Discord](https://discord.gg/63qP3Erw43) or [open an issue](https://github.com/Edgemodders/REDagent/issues).
