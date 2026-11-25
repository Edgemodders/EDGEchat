<!-- Copied from EDGEweb's docs/wiki/edgechat/projects.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgechat/projects.html (reviewed 2026-11-13) -->

# Keep a project easy to work on

Each Claude Code session (one conversation) starts fresh: it doesn't remember yesterday's work. A file named `CLAUDE.md` in your mod's folder fixes that. Claude Code reads it at the start of every session in that folder, so Claude knows the mod's layout, where it deploys and how to test it. Allow 5 minutes.

## Step 1: Open Claude Code in the mod's folder

| Where | How |
|---|---|
| VS Code, EDGEkit | **File > Open Folder**, and pick the mod's folder, such as `Documents\Cyberpunk Mods\red_badge_coat` |
| A terminal | `cd` to the folder, then run `claude` |

## Step 2: Run /edge:init-project

Type `/edge:init-project` and press Enter. To write the file for another folder, name it: `/edge:init-project C:\Users\<you>\Documents\Cyberpunk Mods\red_badge_coat`, with your Windows user name in place of `<you>`.

The command only runs when you type it. Claude never starts it by itself.

## Step 3: What it does

1. **Works out what the mod is** from its files: a WolvenKit project, a REDnode package, a Cyber Engine Tweaks mod, a REDmod, or loose redscript, TweakXL or ArchiveXL files. A WolvenKit project can hold several kinds at once, and Claude looks inside to see which.
2. **Checks for a `CLAUDE.md` already there.** If there is one, Claude shows what it would add and asks first. Then it adds a section named `EDGE` and leaves your text alone.
3. **Writes it**, short: the layout, where the files go in the game, how to build and test this kind of mod, and the house rules (the game's own files never change; deploys go through EDGEdeck).
4. **Shows you the file**, with one line on what it tells later sessions.

Claude writes only what it found in the project or has checked. You can ask it to add more, such as your plans for the mod. It tells you which of those additions it could not check.

(Screenshot on the wiki, "A CLAUDE.md for a mod": VS Code with the CLAUDE.md that /edge:init-project wrote for the red_badge_coat project open: its layout, where it deploys and how to test a change.)

### What the file looks like

A shortened example for the coat from [Recolor a jacket](https://edgemodders.ai/wiki/edgechat/recolor.html). Yours will differ in its details:

```markdown
# red_badge_coat

Recolors the NCPD badge coat's jacket to red. A Cyberpunk 2077 mod, a WolvenKit project.

## Layout

| Path | Holds | Deploys to |
|---|---|---|
| source/archive | The jacket's meshes and the red material | archive/pc/mod/red_badge_coat.archive |

## Build and test

1. Pack the project into packed/.
2. Install it with EDGEdeck, then deploy. Ask before deploying.
3. Check the game.

## Rules

- Never change the game's own files.
- Do not write into the game folder by hand. Deploys go through EDGEdeck.
```

## Step 4: See it work

Start a new session in the same folder and ask:

> What is this mod, and how do I test a change?

| You should see | |
|---|---|
| An answer straight away | Claude answers from the `CLAUDE.md`, without looking through the folder first |
| The mod's name, what it does, and the steps to test it | The same facts as in the file |

## Good to know

- `CLAUDE.md` is plain text. Edit it yourself any time, for example to add "the coat should stay dark red, not bright".
- If you share the project folder with someone who also uses Claude Code, include this file.
- `/edge:new-mod` offers to write it once a new mod works ([Your first mod](https://edgemodders.ai/wiki/edgechat/first-mod.html#step-6-when-it-works)).

## Check

- The mod's folder has a `CLAUDE.md` describing it.
- A new session answered "what is this mod" from it.

## Where next

You've been through every step a mod goes through: an idea, a first version, the game, changes while playing, finding problems, and keeping the project ready for next time.

| To | Ask, or read |
|---|---|
| Make a bigger mod | `/edge:new-mod`, and grow it one piece at a time |
| Learn how an EDGE tool works | Ask Claude, such as "How does EDGEmat's library work?". It answers from its copy of this wiki |
| Learn REDnode packages in depth | [REDnode: Making mods](https://edgemodders.ai/wiki/rednode/making-mods.html) and [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html) |
| Know what Claude may do without asking | [Safety](https://edgemodders.ai/wiki/edgechat/safety.html) |

EDGEchat's [lesson 6](https://edgemodders.github.io/EDGEchat/guide-projects.html) covers the same steps.
