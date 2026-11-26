<!-- Copied from EDGEweb's docs/wiki/redagent/costs.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redagent/costs.html (reviewed 2026-11-25) -->

# Costs, your key and your data

REDagent itself is free and open source. Using it costs money, because each question goes to Claude through your own Anthropic API key, and Anthropic charges you for it from the credit you bought.

## What it costs

Each answer shows its cost under it in dim text, and the window's footer shows the chat's running total. These figures are from REDagent's own tests in the game, on Opus 5.5 unless it says otherwise:

| What was asked | Cost |
|---|---|
| The first question of a chat that reads the game | $0.26 in one test, $0.45 in another |
| Later questions in the same chat | $0.03 to $0.11 each |
| A small mod: a window that shows V's money | $0.13 |
| A chat of eight questions that built the low-health warning mod and fixed another mod | $0.50 |
| Six short questions, five on Opus 5.5 and one on Sonnet 5.5 | $0.34 in all |
| A question from another mod, on Sonnet 5.5 | $0.008 to $0.02 |

Your costs will differ with what you ask and how long the chat is. Anthropic's prices can change too.

**There is no spending limit on your own chat.** REDagent stops only when your credit at Anthropic runs out. Buy credit in small amounts, and watch the total in the footer. Questions from other mods do have a limit: see [daily limits](https://edgemodders.ai/wiki/redagent/other-mods.html#daily-limits).

## Keeping costs down

| Do this | Why it helps |
|---|---|
| Start a **New** chat when you change topic | REDagent sends the whole chat to Claude with every question, so the tenth question costs more than the first |
| Ask related questions close together | REDagent sends Claude a long set of instructions each time. Anthropic remembers them for a few minutes and charges less while it does |
| Use **Sonnet 5.5** for quick questions | It costs less per question than Opus 5.5 |
| Say what you want in one go | "A red warning at the top of the screen" costs less than a warning, then a colour change, then a move |

A picture of the game's screen costs about as much as a page of text. REDagent takes one only when it needs to see.

## Choosing a model

Pick the model in the window's footer. You can change it at any time.

| Model | Use it for |
|---|---|
| **Opus 5.5** (the default) | Writing and fixing mods, and harder questions |
| **Sonnet 5.5** | Quick questions, at a lower price |

Questions from [other mods](https://edgemodders.ai/wiki/redagent/other-mods.html) use Sonnet 5.5, whichever you picked, unless the mod asks for Opus 5.5 or Haiku 5.5 (from REDagent 0.4.6). Each mod has a daily limit, $2.00 unless you change it.

## Your key

| | |
|---|---|
| **Where it's kept** | In REDnode's shared keys, encrypted for your Windows account. It is never shown again after you paste it |
| **Who can use it** | REDagent, and any other EDGE tool you allow in REDnode's **Key request** window |
| **What REDagent does with it** | Talks to Anthropic. Nothing else |
| **Changing or removing it** | REDnode's Settings, under [Keys](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys): **Replace** on the Anthropic line, or remove it |

No key comes with REDagent. To get one, see [Get an Anthropic API key](https://edgemodders.ai/wiki/redagent/install.html#1-get-an-anthropic-api-key).

## Your data

| What | Where it goes |
|---|---|
| Your questions and REDagent's answers | To Anthropic's API, as with any use of Claude |
| What REDagent reads to answer | Also to Anthropic: mod logs, values from the game, the files it reads in the apps folder, and pictures of REDnode's windows and of the game's screen |
| Your chats and backups | Stay on your PC. See [Where REDagent keeps things](https://edgemodders.ai/wiki/redagent/install.html#where-redagent-keeps-things) |
| Everything else | Stays on your PC. REDagent sends no telemetry |

A picture of the screen holds whatever is on it at that moment, including other windows drawn over the game.
