<!-- Copied from EDGEweb's docs/wiki/redagent/other-mods.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redagent/other-mods.html (reviewed 2026-11-13) -->

# Mods that ask REDagent

Other REDnode mods can ask REDagent questions and show you the answers in their own windows: a mod that suggests a build, explains an error, or tells you what to do nearby. Each answer costs you a little, through your own API key, so you decide which mods may ask and how much they may spend.

## Letting a mod ask

A mod that wants to ask must request a permission called **agent**. It can't ask anything until you allow it:

1. Press **F10** and open the **Mod Manager** at the top of the REDnode launcher.
2. Select the mod and allow its permission: "questions to the AI assistant (REDagent); each answer costs you a little".

REDagent itself must be installed and switched on. Withdraw the permission the same way, and the mod's questions are refused again.

### Try it: the Ask mod

REDnode comes with a sample mod that does nothing but ask REDagent your question.

1. Press **F10**, open the launcher and switch on **Mod Manager**.
2. Find **Ask mod** in the table and switch it on. REDnode's samples start switched off.
3. In its details, switch **Allowed** on for "questions to the AI assistant (REDagent); each answer costs you a little".
4. Type a question in the Ask mod's window, such as "How many eddies does V have?", and press **Ask**. The answer appears as it is written, with its cost.
5. In REDagent, press **Chats**, then the **Mods** tab. The Ask mod is listed there with your question and what it cost.

(Screenshot on the wiki, "The Ask mod": REDnode's Ask mod window with a question typed in and REDagent's answer streaming in below it, with its cost.)

## What a mod's question can do

| | |
|---|---|
| **Read only** | A mod's question can read logs, the game's state, the game's functions, the text of overlay windows and your mods' files, and use other mods' tools that only read. It never changes your files or your game |
| **Pictures** | Off to start with, for every mod. A mod's questions can use pictures of windows or of your screen only after you switch **Pictures** on for that mod in the [Mods view](https://edgemodders.ai/wiki/redagent/other-mods.html#the-mods-view) |
| **Model** | Always **Sonnet 5.5**, whatever your own chat uses, to keep answers cheap |
| **One at a time** | REDagent answers mods' questions one after another |

In REDagent's in-game test, each of the Ask mod's answers cost between $0.008 and $0.02.

To answer, REDagent may read your logs and your mods' files and send them to Anthropic, as it does for your own questions. See [Your data](https://edgemodders.ai/wiki/redagent/costs.html#your-data).

## Daily limits

Every mod has its own **daily limit**, **$0.25** unless you change it. Once a mod has spent its limit for the day, its questions are refused until the next day, and the mod is told why. The count starts again at midnight on your PC's clock.

The limit is per mod, and there is no limit across all mods together: five mods you allow could spend $1.25 a day between them. Lower a mod's limit, or pause it, in the Mods view.

## The Mods view

To see and control what mods spend, press **Chats** in REDagent's footer, then the **Mods** tab. It lists every mod that has asked REDagent anything:

(Screenshot on the wiki, "REDagent's Mods view": The Mods tab in REDagent: the Ask mod with today's spending against its daily limit, its total, the limit field with Set, the Paused and Pictures switches, and its last questions.)

| You see | What it means or does |
|---|---|
| **Today ... of ...** | What the mod has spent today against its daily limit. Red once the limit is reached |
| **in all** | What the mod has spent since it first asked |
| **Daily limit** | Type a new amount in dollars and press **Set** |
| **Paused** | Switch on to refuse all of the mod's questions until you switch it off |
| **Pictures** | Switch on to let the mod's questions use pictures of windows and of your screen |
| The last questions | The mod's most recent questions, with their time and cost |

If no mod has asked yet, the tab says so and reminds you about the permission.

## For mod makers

Mods ask with `agent.ask` from REDnode's `rednode` package, and receive only REDagent's answer, as plain text (from REDagent 0.4.1). See [Asking the AI assistant](https://edgemodders.github.io/REDnode/overlay-apps.html#asking-the-ai-assistant) in REDnode's overlay apps guide for the API, and the [REDagent design](https://edgemodders.github.io/REDagent/design.html) for how questions are handled. The Ask mod is a short working example.
