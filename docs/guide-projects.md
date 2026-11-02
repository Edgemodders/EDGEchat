---
title: "Lesson 6: Keep a project easy to work on"
---

# Lesson 6: <span class="y">Keep a project easy to work on</span>

Each Claude Code session starts fresh: it doesn't remember yesterday's work. A `CLAUDE.md` file in your mod's folder fixes that. Claude Code reads it at the start of every session in that folder, so Claude knows the mod's layout, where it deploys and how to test it.

[&larr; Lesson 5](guide-check.html) · [Guide](guide.html)

## Step 1: Open Claude Code in the mod's folder

In VS Code: **File > Open Folder**, the mod's folder, such as `Documents\Cyberpunk Mods\red_badge_coat`. In a terminal: `cd` there, then `claude`.

## Step 2: Run it

```
/edge:init-project
```

Or name a folder: `/edge:init-project C:\Users\<you>\Documents\Cyberpunk Mods\red_badge_coat`.

This command only runs when you type it; Claude never starts it by itself.

## Step 3: What it does

1. **Works out what the mod is** from its files: a WolvenKit project (a `.cpmodproj`), a REDnode package (`rednode-app.json`), a Cyber Engine Tweaks mod, a REDmod, or loose redscript, TweakXL or ArchiveXL files. A WolvenKit project can hold several kinds at once; it looks in `source\resources` to see which.
2. **Checks for a `CLAUDE.md` already there.** If there is one, it shows what it would add and asks first, then adds an `## EDGE` section rather than replacing your text.
3. **Writes it**, short: the layout, where the files go in the game, how to build and test this kind of mod, and the house rules (the game's own files never change; deploys go through EDGEdeck).
4. **Shows you the file**, with one line on what it tells later sessions.

Every path in it comes from the project itself or from checked facts. If you want more in it, ask: it says which additions it can't check.

## Step 4: See it work

Start a new session in the same folder and ask:

> What is this mod, and how do I test a change?

Claude answers from the `CLAUDE.md` right away, without looking through the folder.

## Good to know

- `CLAUDE.md` is plain text: edit it yourself any time, such as to add "the coat should stay dark red, not bright".
- Share it with the mod's source if others work on it with Claude Code.
- `/edge:new-mod` offers to write it when a new mod works (lesson 2, step 6).

## Check

- [ ] The mod's folder has a `CLAUDE.md` describing it
- [ ] A new session answered "what is this mod" from it

## Where next

You've done every step a mod goes through: an idea, a first version, the game, changes while playing, finding problems, and keeping the project ready for next time. From here:

| To | Ask, or read |
|---|---|
| Make a bigger mod | `/edge:new-mod`, and grow it one piece at a time |
| Learn how an EDGE tool works | Ask Claude: "How does EDGEmat's library work?" It answers from the [EDGEmodders wiki](https://edgemodders.ai/wiki/) |
| Learn REDnode packages in depth | [REDnode's guide](https://edgemodders.github.io/REDnode/overlay-apps.html) |
| Know what Claude may do without asking | [Safety](guide-safety.html) |

[&larr; Lesson 5](guide-check.html) · [Guide](guide.html)
