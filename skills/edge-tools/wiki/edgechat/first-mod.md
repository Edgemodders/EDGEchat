<!-- Copied from EDGEweb's docs/wiki/edgechat/first-mod.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgechat/first-mod.html (reviewed 2026-11-13) -->

# Your first mod, no code

You describe a small mod in your own words. Claude picks how to build it, writes it, and checks it in the running game with you. The example here is a line on screen showing V's money, but any small idea works the same way. Allow 15 minutes.

Claude words its answers a little differently each time, so what you read won't match this page word for word. What it does, and what you see in the game, should.

| On this page | |
|---|---|
| [Before you start](https://edgemodders.ai/wiki/edgechat/first-mod.html#before-you-start) | Three things to have ready |
| [Step 1: Start with /edge:new-mod](https://edgemodders.ai/wiki/edgechat/first-mod.html#step-1-start-with-edgenew-mod) | Say what you want |
| [Step 2: Claude picks the kind of mod](https://edgemodders.ai/wiki/edgechat/first-mod.html#step-2-claude-picks-the-kind-of-mod) | And tells you why |
| [Step 3: Claude makes the package](https://edgemodders.ai/wiki/edgechat/first-mod.html#step-3-claude-makes-the-package) | Two files, and your first permission prompts |
| [Step 4: Claude tests it in the game, with you](https://edgemodders.ai/wiki/edgechat/first-mod.html#step-4-claude-tests-it-in-the-game-with-you) | Look, and say what you see |
| [Step 5: Grow it, one piece at a time](https://edgemodders.ai/wiki/edgechat/first-mod.html#step-5-grow-it-one-piece-at-a-time) | Change it by asking |
| [Step 6: When it works](https://edgemodders.ai/wiki/edgechat/first-mod.html#step-6-when-it-works) | Keep it, share it, remove it |
| [Other first mods to try](https://edgemodders.ai/wiki/edgechat/first-mod.html#other-first-mods-to-try) | Three more ideas |

## Before you start

- [Install and connect](https://edgemodders.ai/wiki/edgechat/install.html) done: `/edge:setup` shows all four connected.
- The game running at a loaded save, with **Hot reload** on in REDnode's [Settings drawer](https://edgemodders.ai/wiki/rednode/settings.html) (**F10**, **REDNODE** tab, the gear by **Theme**). Hot reload makes REDnode load a mod again each time its files change.
- Claude Code open in any folder. In VS Code, a folder for your mods, such as `Documents\Cyberpunk Mods`, is a good place.

## Step 1: Start with /edge:new-mod

Type `/edge:new-mod` and press Enter. Claude asks what the mod should do, a question or two at a time. Answer in your own words:

> I want to see how much money V has, in a corner of the screen, all the time.

It may ask more, such as when the line should show, or whether the mod is just for you or to share on Nexus. Then it says the mod back in one sentence, such as "A small widget in the top right corner that always shows V's money", and waits for your yes.

If that's not what you meant, say so. Nothing is built until you agree.

## Step 2: Claude picks the kind of mod

Claude first checks what it can reach: the running game, the game's files and your mod list. Then it tells you which kind of mod it will make, and why.

Something on screen becomes a [REDnode package](https://edgemodders.ai/wiki/rednode/overlay-apps.html): a small web page that REDnode draws over the game. This one is a **HUD widget**, a package that sits on the game's screen while you play.

| Your idea | The kind Claude picks |
|---|---|
| Something on screen, a window, a tool to use while playing | A REDnode package |
| Change numbers: prices, damage, stats | A TweakXL tweak, one `.yaml` file |
| Change how an item looks: color, texture | A WolvenKit project that replaces game files ([Recolor a jacket](https://edgemodders.ai/wiki/edgechat/recolor.html)) |
| Change a sound | A WolvenKit project with the new sound |
| A brand new item | ArchiveXL and TweakXL in a project, the hardest kind. Claude suggests starting by changing an existing look |
| Change how a game system behaves | redscript or a RED4ext plugin. EDGEchat's knowledge doesn't cover these yet, and Claude says so |

## Step 3: Claude makes the package

Claude says where it will put the package, and you can choose:

| Where | When |
|---|---|
| REDnode's apps folder in the game, `red4ext\plugins\REDnode\apps\<id>\` | The simple choice, and the one to take if you're unsure. REDnode picks the package up at once |
| A folder of your own outside the game, added to REDnode as a [development folder](https://edgemodders.ai/wiki/rednode/settings.html#development-folders) | To keep your work out of the game folder. Switch **Developer mode** on in REDnode's Settings drawer and add the folder |

Then it writes two files:

| File | Is |
|---|---|
| `rednode-app.json` | The package's description: its id (such as `money-hud`), its name, that it's a HUD widget, where it sits |
| A page, such as `index.html` | What the widget shows, and the code that reads V's money from the game |

**Your first permission prompts.** Before it writes each file, Claude Code stops and shows a prompt naming the file and what will go into it. Allow it to let Claude write the file. Deny it and nothing is written, and Claude asks what you'd like instead. [Safety](https://edgemodders.ai/wiki/edgechat/safety.html#how-asking-works) explains these prompts.

Before writing the code, Claude looks up the game functions it needs, so it uses the right names. You don't have to read the files. If you're curious, ask "what does each part do?".

## Step 4: Claude tests it in the game, with you

With **Hot reload** on, REDnode loads the package as soon as its files are written. Claude checks its own work: that the package runs, that it logged no errors, and often a screenshot of the game. Then it tells you what to look at, such as "the top right corner should show your money".

(Screenshot on the wiki, "The money widget": The game with a small HUD widget in the top right corner showing V's money, made with /edge:new-mod.)

Switch to the game and look.

| You should see | If not |
|---|---|
| A line with V's money, in the corner Claude named | Tell Claude what you see instead |
| The number changing when V's money does: buy or sell something to try it | Say "it doesn't update when I buy something" |

If something's off, say it plainly:

> It shows, but it's too small and hard to read.

> It says 0, but I have money.

Claude fixes it, the widget reloads, and you look again, until it's right.

## Step 5: Grow it, one piece at a time

Add one thing at a time, and check each in the game before the next:

> Make the text yellow, like the game's own HUD.

> Put the word "Eddies" before the number.

> Show how much I earned in the last minute below it.

Small steps are the point: when something breaks, you know which change did it.

## Step 6: When it works

| To | Do this |
|---|---|
| Keep it easy to work on | Claude offers to write a `CLAUDE.md` file for the mod, so a later chat knows it at once. See [Keep a project easy to work on](https://edgemodders.ai/wiki/edgechat/projects.html) |
| Share it | Make a zip laid out like the game folder: inside the zip, the package's folder sits at `red4ext\plugins\REDnode\apps\<id>\`. Players install it with EDGEdeck or Vortex, or by extracting it into their game folder, and they need REDnode. See [Sharing your package](https://edgemodders.ai/wiki/rednode/making-mods.html#sharing-your-package) |
| Remove it | Ask Claude, or delete the package's folder |

## What just happened

| Who | Did |
|---|---|
| You | Said what you wanted, and checked the result in the game |
| Claude | Picked the kind of mod, wrote the files, looked up the game functions, and tested it through the `rednode` connection |
| Claude Code | Asked before writing each file. Reading the game, such as V's money, never asks. Changing the game always does ([Safety](https://edgemodders.ai/wiki/edgechat/safety.html)) |

## Other first mods to try

| Say | Kind |
|---|---|
| "Show V's position on screen, so I can share places" | A REDnode HUD widget |
| "Make every jacket in the game cost half as much" | A TweakXL tweak. Claude looks up the jackets' prices in the game's data first. Unlike the widget, this kind of mod is put in the game by EDGEdeck with the game closed, so you see it after a restart |
| "A small window listing the quests in V's journal" | A REDnode overlay window: a package with a window you can move and close |

## Check

- Claude said the mod back in one sentence before building it.
- The widget shows in the game and updates as your money changes.
- You changed something about it by asking, and saw the change without restarting the game.

Next: [Recolor a jacket](https://edgemodders.ai/wiki/edgechat/recolor.html). EDGEchat's [lesson 2](https://edgemodders.github.io/EDGEchat/guide-first-mod.html) covers the same steps.
