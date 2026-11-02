---
title: "Safety: what Claude asks before doing"
---

# Safety: <span class="y">what Claude asks before doing</span>

Claude can read a lot without asking: your game's files, the running game, your mod list. Anything that changes your game, its folder or your save asks you first, every time, and you can always say no.

[&larr; Guide](guide.html)

## How asking works

Before such an action, Claude Code shows a permission prompt with what it's about to do. **Allow** runs it once; **Deny** stops it, and Claude carries on or asks you what to do instead.

These prompts come from the EDGE tools themselves: each marks its changing tools as "always ask". So they appear in every permission mode, including auto mode, and there's no "don't ask again" for them. Claude can't turn them off, and neither can a setting.

## What asks, and what doesn't

| Asks you first, every time | Doesn't ask |
|---|---|
| **REDnode** `api_call`: calls into the game that can change it, such as V's money or health | `api_read`: game calls that only read (`Get...`, `Is...`, `Has...`), such as V's money |
| `archives_reload`: swaps an archive into the running game ([lesson 4](guide-live.html)) | `game_state`, `logs`, `apps`, screenshots, TweakDB reads, the entities near V |
| `game_facts_set`, `game_journal_set`, `game_teleport`: change quest facts or the journal in your save, or move V | `game_facts`, `game_journal`: read them |
| `world_spawn`, `world_remove`, `world_load`: place or remove things in the world | `world_near`, `world_spawned` |
| An installed mod's own tools, unless its author marked them read-only | Read-only mod tools |
| **EDGEdeck** deploy, undo, remove: write to the game folder, or delete a mod from the library | List, conflicts, pending, changes |
| **Claude Code** writing or changing files in your project (in its default permission mode) | Reading files |

Two more:

- **EDGEmat** making a material from words (`mat_generate`) sends your words to Google Gemini or OpenAI and is billed to your key. It doesn't ask, so Claude says which service it will use before the first time.
- REDnode's optional **Tools Manager** (in its Admin Tools pack) switches any of REDnode's or a mod's tools off for every assistant. A tool switched off isn't offered to Claude at all.

## What never happens

| Never | Instead |
|---|---|
| The game's own files changed | Mods are separate files the game loads on top. Remove the mod and the game is as before |
| Files put in or deleted in the game folder by hand | EDGEdeck deploys mods and can undo each deploy. The one exception: a REDnode package you're building, in REDnode's apps folder |
| Your keys shown, pasted in chat or written in files | They stay in Windows' credential store (the plugin's key settings) or REDnode's **Keys** |

## Taking access back

| To | Do |
|---|---|
| Stop Claude reaching the game | REDnode's Settings panel: **Revoke** Claude Code under **Connected assistants**, or switch **MCP server** off |
| Stop one tool | REDnode's Tools Manager, or deny its prompt |
| Remove EDGEchat | `/plugins`, then uninstall `edge`. Or in a terminal: `claude plugin uninstall edge@edgemodders` |

[&larr; Guide](guide.html)
