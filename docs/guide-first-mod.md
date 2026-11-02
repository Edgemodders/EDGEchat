---
title: "Lesson 2: Your first mod, no code"
---

# Lesson 2: <span class="y">Your first mod, no code</span>

You describe a small mod in your own words; Claude picks how to build it, writes it, and checks it in the running game with you. The example is a line on screen showing V's money, but any small idea works the same way.

[&larr; Lesson 1](guide-install.html) · [Guide](guide.html)

## Before you start

- Lesson 1 done: `/edge:setup` shows all four connected.
- The game running at a loaded save, with **Hot reload** on in REDnode's Settings panel (**F10**, **REDNODE** tab, the gear at the right of the **Theme** row).
- Claude Code open in any folder. In VS Code, a folder for your mods, such as `Documents\Cyberpunk Mods`, is a good place.

## Step 1: Start with `/edge:new-mod`

Type:

```
/edge:new-mod
```

Claude asks what the mod should do, one or two questions at a time. Answer in your own words. For this lesson:

> I want to see how much money V has, in a corner of the screen, all the time.

It may ask more: when it should show, whether it's just for you or to share on Nexus. Then it says the mod back in one sentence, such as "A small widget in the top right corner that always shows V's money", and waits for your yes. If it's not what you meant, say so: nothing is built until you agree.

## Step 2: It checks the tools and picks the kind of mod

Claude checks the game, REDbridge and EDGEdeck, then tells you which kind of mod it will make and why, in a sentence. For something on screen, it's a **REDnode package**: a small web page REDnode draws over the game, here a **HUD widget**.

| Your idea | The kind Claude picks |
|---|---|
| Something on screen, a window, a tool to use while playing | A REDnode package |
| Change numbers: prices, damage, stats | A TweakXL tweak, one `.yaml` file |
| Change how an item looks: color, texture | A WolvenKit project that replaces game files (lessons 3 and 4) |
| Change a sound | A WolvenKit project with the new sound |
| A brand new item | ArchiveXL and TweakXL in a project: the hardest. Claude suggests starting by changing an existing look |
| Change how a game system behaves | redscript or a RED4ext plugin: EDGEchat's knowledge doesn't cover these yet, and Claude says so |

## Step 3: It makes the package

Claude says where it puts the package. You can choose:

| Where | When |
|---|---|
| `<game folder>\red4ext\plugins\REDnode\apps\<id>\` | The simple choice. REDnode picks it up at once |
| A folder of your own, outside the game, added to REDnode as a **development folder** | To keep your work outside the game folder. In REDnode's Settings panel, switch **Developer mode** on and add the folder |

Then it writes two files, and Claude Code asks before writing each:

| File | Is |
|---|---|
| `rednode-app.json` | The package's description: its id (such as `money-hud`), its name, that it's a HUD widget, where it sits |
| A page, such as `index.html` | What the widget shows, and the code that reads V's money from the game |

Before writing the code, Claude looks up the game functions it needs, so it uses the right names. You don't have to read the files, but you can: ask "what does each part do?".

## Step 4: It tests it in the game, with you

With **Hot reload** on, REDnode loads the package as soon as the files are written. Claude then checks its own work: that the package runs, that it logged no errors, and often a screenshot of the game. It tells you what it checked, and what to look at:

> Look at the top right corner: it should show your money, such as "€$ 12,345".

Look, and say what you see. If something's off, say that in plain words:

> It shows, but it's too small and hard to read.

> It says 0, but I have money.

Claude fixes it, the widget reloads, and you look again. Repeat until it's right.

## Step 5: Grow it, one piece at a time

Add one thing at a time and check each in the game before the next:

> Make the text yellow, like the game's own HUD.

> Put the word "Eddies" before the number.

> Show how much I earned in the last minute below it.

Small steps are the point: when something breaks, you know which change did it.

## Step 6: When it works

Claude offers to write a `CLAUDE.md` for the mod, so a later session knows it at once (see [lesson 6](guide-projects.html)). To share the mod, zip the package's folder: players install it with EDGEdeck, like any mod. They need REDnode.

To remove it: ask Claude, or delete the package's folder.

## What just happened

- **You** said what you wanted, and checked the result in the game.
- **Claude** picked the kind of mod, wrote the files, looked up the game functions, and tested it through `rednode`.
- **Claude Code** asked before writing each file. Reading the game, such as V's money, never asks; changing it does (see [Safety](guide-safety.html)).

## Other first mods to try

| Say | Kind |
|---|---|
| "Show V's position on screen, so I can share places" | REDnode HUD widget |
| "Make every jacket in the game cost half as much" | TweakXL tweak. Claude checks the jacket's record in the game's data before writing it, and the mod reaches the game through EDGEdeck, with the game closed |
| "A small window listing the quests in V's journal" | REDnode overlay window |

## Check

- [ ] Claude said the mod back in one sentence before building
- [ ] The widget shows in the game and updates as your money changes
- [ ] You changed something about it by asking, and saw the change without restarting

[&larr; Lesson 1](guide-install.html) · [Guide](guide.html) · [Next: Recolor a jacket &rarr;](guide-recolor.html)
