<!-- Copied from EDGEweb's docs/wiki/edgechat/safety.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgechat/safety.html (reviewed 2026-11-13) -->

# Safety: what Claude asks first

With EDGEchat, Claude can read a lot without asking: your game's files, the running game, your mod list. The short version of what it can change:

| What | Asks you first? |
|---|---|
| An EDGE tool changing the running game, your save or your game folder: a change to V, a swap, a deploy | **Yes, every time.** No setting turns this off |
| Claude Code writing files in your mod project | Yes, in Claude Code's default permission setting. See [Files in your project](https://edgemodders.ai/wiki/edgechat/safety.html#files-in-your-project) |
| A REDnode package you are building in REDnode's apps folder, which is inside the game folder | The same as any project file. This is [the one exception](https://edgemodders.ai/wiki/edgechat/safety.html#the-one-exception-in-the-game-folder) to "every time" for the game folder |
| Reading anything | No |

You can always say no.

| On this page | |
|---|---|
| [How asking works](https://edgemodders.ai/wiki/edgechat/safety.html#how-asking-works) | The permission prompt |
| [What asks every time, and what doesn't](https://edgemodders.ai/wiki/edgechat/safety.html#what-asks-every-time-and-what-doesnt) | Tool by tool |
| [Files in your project](https://edgemodders.ai/wiki/edgechat/safety.html#files-in-your-project) | Where Claude Code's own setting decides |
| [The one exception in the game folder](https://edgemodders.ai/wiki/edgechat/safety.html#the-one-exception-in-the-game-folder) | And how to avoid it |
| [The rules Claude works by](https://edgemodders.ai/wiki/edgechat/safety.html#the-rules-claude-works-by) | What EDGEchat tells Claude never to do |
| [Taking access back](https://edgemodders.ai/wiki/edgechat/safety.html#taking-access-back) | Revoke, undo, uninstall |

## How asking works

Before an action that needs your OK, Claude Code stops and shows a **permission prompt**: a box that names the tool and says what it is about to do. **Allow** runs it once. **Deny** stops it, and Claude carries on without it or asks you what to do instead. Depending on where you run Claude Code, the two choices can be worded Yes and No.

(Screenshot on the wiki, "A permission prompt": Claude Code asking before an EDGEdeck deploy, with the tool's name, what it will do, and the Allow and Deny choices.)

Claude Code has several **permission modes**, from asking about everything to working on its own (auto mode). Normally a mode decides how often you are asked, and a prompt can offer "don't ask again".

The EDGE tools don't leave that to the mode. Each EDGE toolkit marks every one of its actions that changes the game, the save or the game folder as "always ask". Claude Code obeys that mark in every permission mode, auto mode included, and offers no "don't ask again" for those actions. Claude can't turn the prompts off, and neither can a setting. EDGEchat's tests checked this with Claude Code in auto mode.

## What asks every time, and what doesn't

| Tool | Asks you first, every time | Doesn't ask |
|---|---|---|
| REDnode | Changing something in the running game, such as V's money or health | Reading something, such as V's money |
| REDnode | Swapping an archive into the running game ([Change it while you play](https://edgemodders.ai/wiki/edgechat/live.html)) | The game's state, logs, running apps, screenshots, reading TweakDB (the game's database of items and stats) |
| REDnode | Changing quest facts or the journal in your save, or moving V | Reading quest facts and the journal |
| REDnode | Placing or removing things in the world | Listing what's near V, or what was placed |
| REDnode | An installed mod's own tools, unless its author marked them read-only | Read-only mod tools |
| EDGEdeck | Deploy and undo, which write to the game folder. Remove, which deletes a mod from the library | Listing mods and conflicts, and showing what a deploy would change |

Two more:

- **EDGEmat** making a material from words sends your words to Google Gemini or OpenAI, billed to your key. It doesn't ask, so Claude says which service it will use before the first time. It only works if you gave EDGEchat a key.
- REDnode's optional **Tools Manager**, in its Admin Tools pack, switches any of REDnode's or a mod's tools off for every assistant. A tool that is switched off isn't offered to Claude at all. See [REDnode: AI agents](https://edgemodders.ai/wiki/rednode/agents.html).

## Files in your project

Work on the files of your mod project is different. That covers Claude Code writing or changing a file, and the `redcode` and `edgemat` connections making, changing and packing project files.

| Claude Code's permission setting | What happens |
|---|---|
| The default | Claude Code asks before each of these, and the prompt may offer not to ask again |
| A mode that lets Claude work on its own, such as auto mode | Claude can do these without asking |

Reading files never asks. If you want to see every file change before it happens, stay in the default setting.

## The one exception in the game folder

EDGEchat has Claude put things into the game folder only through EDGEdeck and REDnode, which ask every time. It allows one exception: **a REDnode package you are building**.

In [Your first mod](https://edgemodders.ai/wiki/edgechat/first-mod.html#step-3-claude-makes-the-package), the simple place for a new package is REDnode's apps folder, `red4ext\plugins\REDnode\apps\`, which is inside the game folder. Claude Code writes a package there like any project file. So in the default permission setting it asks before each file, and in a mode that lets it work on its own, it can write there without asking.

To keep Claude out of the game folder entirely, choose the other place in that step: a folder of your own, added to REDnode as a [development folder](https://edgemodders.ai/wiki/rednode/settings.html#development-folders).

## The rules Claude works by

EDGEchat's modding knowledge tells Claude to work this way. These are instructions Claude follows, not locks. The locks are the prompts described above.

| Claude is told never to | Instead |
|---|---|
| Change the game's own files | Mods are separate files the game loads on top. Remove the mod and the game is as before |
| Put files into the game folder, or delete files there, by hand | EDGEdeck deploys mods and can undo each deploy. The exception is the REDnode package above |
| Show your keys, paste them in chat or write them into files | Keys stay in Windows' credential store (the plugin's key settings) or in [REDnode's Keys](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys) |

## Taking access back

| To | Do this |
|---|---|
| Stop Claude reaching the game | In REDnode's Settings drawer, press **Revoke** beside Claude Code under **Connected assistants**, or switch **MCP server** off |
| Stop one tool | REDnode's Tools Manager, or deny its prompt |
| Undo what a deploy did | EDGEdeck's [Undo deploy](https://edgemodders.ai/wiki/edgedeck/deploying.html#undo-deploy) |
| Remove EDGEchat | Type `/plugins`, then uninstall `edge`. Or at a terminal prompt: `claude plugin uninstall edge@edgemodders` |

The [FAQ](https://edgemodders.ai/wiki/faq.html) answers more general questions about AI and safety on EDGE. EDGEchat's [safety page](https://edgemodders.github.io/EDGEchat/guide-safety.html) names each tool.
