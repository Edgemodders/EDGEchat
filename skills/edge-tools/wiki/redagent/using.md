<!-- Copied from EDGEweb's docs/wiki/redagent/using.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redagent/using.html (reviewed 2026-11-25) -->

# Using REDagent

New to REDagent? Start with [Your first mod](https://edgemodders.ai/wiki/redagent/first-mod.html). This page is the tour of the window and everything in it.

| On this page | |
|---|---|
| [The window](https://edgemodders.ai/wiki/redagent/using.html#the-window) | Its parts, and how to show it |
| [What to ask](https://edgemodders.ai/wiki/redagent/using.html#what-to-ask) | Requests that work, by kind |
| [Changes and Undo](https://edgemodders.ai/wiki/redagent/using.html#changes-and-undo) | Approving what REDagent writes, and taking it back |
| [Saved chats](https://edgemodders.ai/wiki/redagent/using.html#saved-chats) | Carrying on later |
| [Every control](https://edgemodders.ai/wiki/redagent/using.html#every-control) | All of REDagent's settings in one table |

## The window

Press **F10** in the game: a cursor appears, and REDagent's window shows on the right. Press **Esc** to go back to playing. The window hides while you play, unless you switch on **Pin to HUD** for REDagent in REDnode's Mod Manager.

If you closed the window, press **F10**, open the launcher (the **REDNODE** tab), switch on **Mod Manager** and press **Show** on REDagent. **Pin to launcher** there gives REDagent its own entry in the launcher.

(Screenshot on the wiki, "REDagent's window": The REDagent window with a short chat, the changes strip above the input, and the footer: the Opus 5.5 / Sonnet 5.5 choice, the chat's total cost, and the Chats, New and Key buttons.)

| Part | What it does |
|---|---|
| **The input** | Type your question and press **Enter** or **Send**. While REDagent answers, **Stop** stops it |
| **The model choice** | **Opus 5.5** (the default) or **Sonnet 5.5**. See [Choosing a model](https://edgemodders.ai/wiki/redagent/costs.html#choosing-a-model) |
| **Total** | What this chat has cost so far |
| **Chats** | Your [saved chats](https://edgemodders.ai/wiki/redagent/using.html#saved-chats), and the [Mods](https://edgemodders.ai/wiki/redagent/other-mods.html#the-mods-view) tab |
| **New** | Starts a fresh chat |
| **Key** | Opens the key panel. **Set up the key** there opens REDnode's **Key request** window |
| **The changes strip** | Above the input, once REDagent has changed a file in this chat. See [Changes and Undo](https://edgemodders.ai/wiki/redagent/using.html#changes-and-undo) |

The last line of the chat tells you whose turn it is:

| It says | Meaning |
|---|---|
| **WORKING...** | REDagent is thinking or using a tool. An answer usually takes 10 to 60 seconds |
| **WAITING FOR YOU...** | A card in the chat needs your answer. Scroll to it |

## What to ask

Plain words work. You don't need to know what anything is called.

### About your game

| You ask | REDagent |
|---|---|
| "What are V's health, level and money?" | Looks up how the game reports them and reads them from the running game |
| "What's on my screen?" | Takes a picture of the game's screen and describes it |
| "Give V 500 eddies." | Asks you first, with a card, as it does before anything that could change the game |

### Making and fixing mods

| You ask | REDagent |
|---|---|
| "Make a mod that ..." | Writes a new REDnode mod, waits for it to start, checks it runs, and fixes it |
| "Make the warning bigger." | Changes the file, then checks the log again |
| "My mod stopped working. Find out why." | Reads the mod's log and its files, explains the fault and offers a fix |
| "What's in my mod log?" | Reads REDnode's Mod log, crashes included, and explains it |
| "What does the Vitals window show?" | Reads that window directly. (Vitals is one of REDnode's sample mods) |

See [what REDagent can make](https://edgemodders.ai/wiki/redagent/index.html#what-it-can-make) for where its limits are.

### With other EDGE tools

| You ask | REDagent |
|---|---|
| "What tools do my mods offer?" | Lists the tools your installed mods offer to AI assistants through REDnode. It can use them: tools that only read run at once, the rest ask you first |
| "Find this jacket's materials and make the leather red." | Uses [EDGEmat](https://edgemodders.ai/wiki/edgemat/assistants.html)'s tools on a mod project you already have. Searches run at once; changes ask you first |
| "Swap my changed archive into the game." | For mod makers: puts a rebuilt mod file into the running game through REDnode, so a changed model or texture shows without a restart. It asks you first |

REDagent can only see the game, the mod log and windows once you have [allowed REDnode's tools](https://edgemodders.ai/wiki/redagent/install.html#allow-rednodes-tools). Without that, it can still chat and read your mods' files.

## Changes and Undo

Before REDagent creates or changes a file, a **change card** shows you exactly which lines it will add, in green, and remove, in red. Programmers call this a diff. The card has three buttons:

| Button | What happens |
|---|---|
| **Allow** | This one change is made |
| **Allow all in this chat** | This and every later change in this chat are made without asking. A new chat, or reopening a saved one, asks again |
| **Deny** | Nothing changes. REDagent is told you said no, and asks what you want instead |

You don't have to judge the code. Look at the file's name and folder: it should be in the mod you're working on. If in doubt, **Allow** and test; Undo is always there.

REDagent backs up each file before it changes it. The **changes strip** above the input counts this chat's changes, and how many you've undone. **Show** lists them all, each with **Undo**, however far the chat has scrolled.

| Undo on | Does this |
|---|---|
| A file REDagent changed | Puts the file back as it was |
| A file REDagent created | Removes the file, and any folder that leaves empty |

REDagent isn't told about an undo straight away. It learns of it when you next ask something, so it won't assume the change is still there.

**Where it can write.** REDagent creates and changes files only inside REDnode's apps folder (`red4ext\plugins\REDnode\apps` in the game folder), and in a [development folder](https://edgemodders.ai/wiki/rednode/settings.html#development-folders) if you set one. It can't change its own files, or the code libraries inside a mod.

## Saved chats

Every chat is saved as it goes, with its changes, so closing the game loses nothing. When the game starts, your last chat comes back, and Undo still works on its changes.

**Chats** in the footer lists your last 30 chats, each with its date and cost. **Open** one to carry on where you left off, or **Delete** it. The chat you're in says **This chat**. **Back** or **Close** returns to the chat.

(Screenshot on the wiki, "The Chats list": REDagent's Chats tab: several saved chats with their titles, dates and costs, Open and Delete buttons, and This chat on the current one.)

When you start a 31st chat, the oldest is deleted, and its Undo buttons go with it. The mods it made stay.

**New** starts a fresh chat. Start one when you change topic: REDagent sends the whole chat to Claude with each question, so a long chat costs more per answer.

## Continue in VS Code

To carry a chat on at your desk, press **VS Code** at the bottom of the window (from REDagent 0.4.6). REDagent writes the chat as a handoff file and copies `/edge:continue`. In Claude Code with [EDGEchat](https://edgemodders.ai/wiki/edgechat/) 0.2.0 or later, paste `/edge:continue` and send it: Claude reads the handoff (what you asked, what REDagent did, the files it changed and the mods involved), says which chat it took over, and carries on with the same EDGE tools. Changes it makes to a mod show in the game at once.

Handoffs are kept in `%APPDATA%\@rednode\overlay\packages\redagent\handoffs`, one file per chat, written again each time you press the button. They never hold your key. Without one, `/edge:continue` tells you to press **VS Code** first.

## Every control

REDagent has few settings, and they live in different places.

| Control | Where | Starts as | What it does |
|---|---|---|---|
| Model | The window's footer | Opus 5.5 | Which Claude model answers. See [Choosing a model](https://edgemodders.ai/wiki/redagent/costs.html#choosing-a-model) |
| **Allow all in this chat** | On a change card | Off | Stops the cards for this chat. Never carried into another chat |
| "REDnode's tools for AI agents" | REDnode's Mod Manager, REDagent's permissions | Off | Lets REDagent see the mod log, the game and windows |
| The Anthropic key | REDnode's Settings, under [Keys](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys) | None | Replace or remove your key |
| A mod's **Daily limit** | **Chats**, then the **Mods** tab | $2.00 ($0.25 before 0.4.6) | What one mod's questions may cost you each day. See [Mods that ask REDagent](https://edgemodders.ai/wiki/redagent/other-mods.html) |
| A mod's **Paused** | The same tab | Off | Refuses all of that mod's questions |
| A mod's **Pictures** | The same tab | Off | Lets that mod's questions use pictures of windows and of your screen |

Where chats, backups and the rest are stored: [Where REDagent keeps things](https://edgemodders.ai/wiki/redagent/install.html#where-redagent-keeps-things).
