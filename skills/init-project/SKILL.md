---
name: init-project
description: Write a CLAUDE.md into a Cyberpunk 2077 mod project, so every later session knows the project's layout, where its files deploy, how to build and test it, and the house rules.
argument-hint: "[project folder]"
disable-model-invocation: true
---

# Write the mod project's CLAUDE.md

The project folder is `$ARGUMENTS`, or the current folder if that is empty.

## 1. Find out what the project is

Look at the folder (do not search the whole disk). Match it against [layouts.md](layouts.md):

| You find | It is |
|---|---|
| A `.cpmodproj` file | A WolvenKit project (REDcode makes the same kind). Read its `<Name>`, `<ModName>`, `<Author>`, `<Version>` |
| `rednode-app.json` | A REDnode package: an overlay app, a HUD widget, or a Node mod. Read its `id`, `name`, `entry`, `main`, `kind`, `permissions` |
| `init.lua` | A Cyber Engine Tweaks mod |
| `info.json` next to `archives`, `scripts`, `tweaks` or `customSounds` | A REDmod |
| Loose `.reds`, `.yaml`/`.tweak`, `.xl` files | redscript, TweakXL or ArchiveXL files, without a project around them |
| Nothing of the above | Ask the user what the mod should do before writing anything |

A WolvenKit project can hold several kinds at once: list the folders under `source/resources` to see which (for example `r6/scripts` means redscript, `r6/tweaks` means TweakXL).

## 2. Check for an existing CLAUDE.md

If the project already has a `CLAUDE.md`, show the user what you would add and ask before changing it. Add an `## EDGE` section rather than replacing their text.

## 3. Write it

Use [template.md](template.md). Keep only the rows and sections that fit this project; do not describe frameworks it does not use. Keep it short: it is read at the start of every session in this folder.

Every path in it comes from [layouts.md](layouts.md) or from the project itself. Do not add game facts that are not there; if the user wants more, say which ones are unchecked.

## 4. Finish

Show the user the file and say in one line what it tells future sessions. If the plugin's servers are not connected, suggest `/edge:setup`.
