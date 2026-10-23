---
name: new-mod
description: Start a new Cyberpunk 2077 mod with the user, who may not code - ask what it should do, pick the simplest kind of mod, make the project, build a first small version and test it in the game. Use when the user runs new-mod or asks to make a new mod.
---

# Start a new mod

The user may never have made a mod. Speak plainly, explain each new word once, and keep each step small enough to check in the game.

## 1. Ask what it should do

In the user's own words, one or two questions at a time, until you can say the mod in one sentence:

- What should change in the game, and when: always, or when the player does something?
- Who or what does it touch: V, other characters, items, the screen?
- Is it for them, or to share on Nexus?

Say the mod back in one sentence and get a yes before going on.

## 2. Check the tools

Call `game_state` (rednode), `bridge_info` (redcode) and `edgedeck_list` (edgedeck). The frameworks line of `edgedeck_list` shows which frameworks are installed. If a server the mod needs is missing, run the `setup` skill's checks for it first.

## 3. Pick the kind

Pick the simplest kind that does the job, and say which and why in one sentence.

| The mod should | Kind | Needs | Read |
|---|---|---|---|
| Show something on screen, add a window or HUD widget, a tool to use while playing, react to what happens, call game functions while playing | REDnode package | REDnode | `rednode-mods` |
| Change numbers: prices, damage, armor, stats, how much of something | TweakXL tweak: a `.yaml` file | TweakXL | Check every record and flat name with the `tweakdb_*` tools before writing it |
| Change how an existing item, garment, weapon or place looks: color, texture, shape | Archive that replaces game files, from a WolvenKit project | WolvenKit project, redcode; edgemat for colors | `wolvenkit-projects`, `archives-and-cr2w` |
| Change a game sound | Archive from a WolvenKit project, with `sound_import` | redcode | `wolvenkit-projects` |
| Add a new item, or a new look beside the old one | ArchiveXL and TweakXL in a WolvenKit project | ArchiveXL, TweakXL | The hardest of these. Suggest a first version that replaces an existing look, then grow |
| Change how a game system behaves | redscript or a RED4ext plugin | redscript, RED4ext | Not covered by EDGEchat's skills: say so, and keep it small |

A replaced game file changes every place that uses it: say so when the user picks one item.

## 4. Make it

| Kind | Where | Start with |
|---|---|---|
| REDnode package | `<game folder>\red4ext\plugins\REDnode\apps\<id>\` (the only folder REDnode hot-reloads) | `rednode-app.json` and one file |
| WolvenKit project (tweaks, replacers, sounds) | A folder the user picks, outside the game folder, such as `Documents\Cyberpunk Mods\<Name>\` | The project folders and `.cpmodproj` (`wolvenkit-projects`). A tweak goes in `source/resources/r6/tweaks/<mod>/<name>.yaml` |

Names: an `id` or `ModName` in lowercase letters, digits and `-` or `_`, such as `money-hud` or `cheaper_jackets`. Claude Code asks before writing files; say what each file is for.

## 5. Build the smallest version, then test it in the game

Do the least that shows the idea works: one value changed, one line on screen, one garment recolored.

- A REDnode package: the loop in `rednode-mods` (hot reload, then `apps`, `logs`, a picture).
- A project: pack, install and deploy as `wolvenkit-projects` says. The game must be closed to deploy; start it again to test.

Tell the user exactly what to look at in the game ("open the inventory: the jacket should cost 500"), and ask what they see. Fix and repeat. Add the next piece only when this one works.

## 6. When it works

- Offer to write the project's `CLAUDE.md` with the `init-project` skill, so later sessions know the mod.
- To share it: a REDnode package is its folder; a project's mod is its `packed` folder, zipped. EDGEdeck installs either one.

## Rules

- Never change the game's own files. Mods reach the game through EDGEdeck, or REDnode's apps folder while a package is being built.
- Deploying, undoing and changes to the running game ask the user first; never work around that.
- When you are not sure a game fact is right, check it with the servers (`tweakdb_*`, `gameapi_lookup`, `archive_search`) or say it is a guess.
