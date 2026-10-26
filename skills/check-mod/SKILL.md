---
name: check-mod
description: Check a Cyberpunk 2077 mod for problems - its files, the game's and frameworks' logs, and EDGEdeck's view (conflicts, deploy state, outdated frameworks) - and list what is wrong with a fix for each, changing nothing. Use when the user runs check-mod, or says a mod does not work, crashes or does not show.
---

# Check a mod

Find what is wrong, most serious first, with a fix for each. Read only: change nothing until the user says which fix to make.

## 1. Which mod

A WolvenKit project (a `.cpmodproj`), a REDnode package (a folder with `rednode-app.json`), a mod in EDGEdeck (`edgedeck_list`, then `edgedeck_mod`), or the files the user names. Ask if it is not clear. Find out what the user expected and what happened instead.

## 2. Its files

| Kind | Check |
|---|---|
| Any archive mod | Game paths lowercase, no spaces: a capital letter changes the path's hash and the game never finds the file (`archives-and-cr2w`). Each CR2W file opens (`cr2w_read` of its root); one that does not is broken |
| WolvenKit project | `packed/` newer than everything in `source/`; otherwise pack again. Every `.xl` from `source/resources` beside the archive in `packed/archive/pc/mod`; tweaks under `r6/tweaks/`. Files left in `source/archive` that the mod does not change still replace the game's: drop them |
| TweakXL `.yaml` | Valid YAML. Every record it changes or uses as `$base` exists (`tweakdb_record`), and every flat exists with that type. The file is under `r6/tweaks/` |
| REDnode package | `rednode-app.json` is valid JSON; `id` is lowercase and names the folder; the `entry` or `main` file exists; a Node mod using `import` is `.mjs`; `requires` lists what it uses; `permissions` lists its powers |
| redscript | The compile result in `r6/logs/redscript_rCURRENT.log` |

## 3. The logs

In the game folder, newest file first (dates are in the names). Search for the mod's name, then for `error` and `warn`.

| Log | Says |
|---|---|
| `red4ext/logs/red4ext-<date>.log` | Which RED4ext plugins loaded, and which failed |
| `red4ext/plugins/ArchiveXL/ArchiveXL-<date>.log`, `TweakXL/TweakXL-<date>.log`, `Codeware/Codeware-<date>.log` | ArchiveXL's `.xl` files, TweakXL's tweaks, Codeware |
| `r6/logs/redscript_rCURRENT.log` | Script compile errors |
| `red4ext/logs/rednode-mods.log`, or the `rednode` server's `logs` while the game runs | REDnode Node mods' output and crashes |
| `bin/x64/plugins/cyber_engine_tweaks/cyber_engine_tweaks.log`, `scripting.log` | Cyber Engine Tweaks and its Lua mods |

While the game runs, a REDnode package's state is in `apps` (running, crashed, last error), and an app's page in `window_console`.

## 4. EDGEdeck

| Call | Shows |
|---|---|
| `edgedeck_mod` | Whether it is on and deployed, or waiting for a deploy |
| `edgedeck_list` | The frameworks line: after a game patch, "game updated to ..." and which frameworks need updates. An outdated framework is the most common reason everything breaks at once |
| `edgedeck_conflicts` | Other mods with the same files; the mod higher in the list wins |
| `edgedeck_changes` | Deployed files changed by something else since the last deploy |
| `edgedeck_pending` | What the next deploy would change |

## 5. Report

End with one table, most serious first, then the one thing to do first, and offer to make the fixes.

| Problem | Where | Why it matters | Fix |
|---|---|---|---|

Say what you checked and found fine in one line, so the user knows what was covered. Mark a guess as a guess.

Log paths checked in the dev PC's game folder on 2026-10-23 (game 2.31) and again on 2026-10-26 (game 2.5): all there, with the same names.
