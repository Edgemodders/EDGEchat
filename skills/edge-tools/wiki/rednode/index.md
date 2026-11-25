<!-- Copied from EDGEweb's docs/wiki/rednode/index.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/ (reviewed 2026-11-25) -->

# REDnode

REDnode is the EDGE platform's runtime: the part that is in the game while you play. It plugs into Cyberpunk 2077 and lets small programs run beside the game and draw their own windows over it. REDagent, EDGE's in-game assistant, runs on REDnode, and so do the mods it writes.

Anything REDnode runs is called a **package**. There are two kinds, and one package can be both:

| Kind | What it is |
|---|---|
| **Node mod** | A mod written in JavaScript or TypeScript. It can read and change the running game |
| **Overlay app** | A small web page drawn over the game, as a window or as a HUD widget |

(Screenshot on the wiki, "REDnode in the game": Gameplay with the REDnode launcher open at the lower left, the Mod Manager in the middle, and a couple of HUD widgets (Coords HUD at the top, Vitals under it).)

**New here?** Pick your route:

| You want to | Read |
|---|---|
| Use REDnode, or install it for REDagent | [Install and set up](https://edgemodders.ai/wiki/rednode/install.html), then [Using the overlay](https://edgemodders.ai/wiki/rednode/overlay.html). Allow about fifteen minutes |
| Let Claude Code on your PC see and call your game | [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) |
| Write a mod or an app | [Making mods and apps](https://edgemodders.ai/wiki/rednode/making-mods.html) |

| On this page | |
|---|---|
| [Why you might want it](https://edgemodders.ai/wiki/rednode/#why-you-might-want-it) | What REDnode gives players and mod makers |
| [What you need](https://edgemodders.ai/wiki/rednode/#what-you-need) | The short list |
| [How it fits into EDGE](https://edgemodders.ai/wiki/rednode/#how-it-fits-into-edge) | REDnode beside the other toolkits |
| [Status](https://edgemodders.ai/wiki/rednode/#status) | The current release, and what comes next |
| [Optional packs](https://edgemodders.ai/wiki/rednode/#optional-packs) | UI Tools, Admin Tools, Sound Tools |
| [In this section](https://edgemodders.ai/wiki/rednode/#in-this-section) | Every page, for players and for mod makers |
| [What works today](https://edgemodders.ai/wiki/rednode/#what-works-today) | Each part, and whether it passed its test in the game |

## Why you might want it

Most Cyberpunk mods today are archives (replaced game files), redscript (scripts compiled into the game) or Lua for Cyber Engine Tweaks. Each needs its own tools and its own language, and a mistake in a script can stop the game from starting. REDnode adds a different way in.

| If you... | REDnode gives you |
|---|---|
| Play, and want REDagent | REDagent runs on REDnode. Install REDnode first |
| Want useful windows over the game | HUD widgets and tool windows, switched on and off in the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html) and sorted into [spaces](https://edgemodders.ai/wiki/rednode/spaces.html) you flip between |
| Want a command line in the game | The built-in [Console](https://edgemodders.ai/wiki/rednode/overlay.html#the-console): give V an item or find where V stands, with no Cyber Engine Tweaks |
| Want Claude Code to see and call the game | Claude Code on your PC can connect to the running game: read mod logs, look at your windows and the game's screen, and call game functions. It asks you before any call that changes your game. See [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) |
| Test archive mods | A changed archive swaps into the running game in a moment, with no restart. See [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html) |
| Want to make a mod but don't know redscript or Lua | Write it in JavaScript or TypeScript, the most widely known programming languages, or ask [REDagent](https://edgemodders.ai/wiki/redagent/) to write it with you |
| Know web development | Build in-game windows with HTML and CSS, with a ready-made UI kit in the game's look |
| Want to change or add to the game's own UI | Panels the game draws on its HUD, written as [ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html), and the [UI Tools](https://edgemodders.ai/wiki/rednode/ui-tools.html) pack to inspect the game's UI and try changes live |
| Make tools for other modders | Packages can read the game's files (through [REDbridge](https://edgemodders.ai/wiki/redbridge/)), place objects and people in the world, animate them, set the weather, and swap changed archives into the running game. See [Game API](https://edgemodders.ai/wiki/rednode/game-api.html) and [The world](https://edgemodders.ai/wiki/rednode/world.html) |

Three things hold for every package:

- **Safe to experiment.** Packages run in their own processes, outside the game. A process is a separate running program. If a mod crashes or hangs, the game keeps running, and you restart the mod with one click.
- **Change it while you play.** With hot reload, saving a mod's file restarts it in the running game. No game restart.
- **You stay in charge.** A package gets extra powers, such as asking an AI or swapping archives, only after you allow each one. See [Permissions](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions).

## What you need

| You need | Notes |
|---|---|
| Cyberpunk 2077 on Windows, game version 2.5 | For a game kept on 2.31, an older REDnode works: see [Install](https://edgemodders.ai/wiki/rednode/install.html) |
| RED4ext and redscript | Two free frameworks most modded games already have. RED4ext loads REDnode into the game |
| About 16 GB of RAM | The game takes most of it. REDnode adds roughly 60 to 100 MB for each open window |

You don't need Node.js, a code editor or any developer tools to use REDnode. The full list, with versions, is on [Install and set up](https://edgemodders.ai/wiki/rednode/install.html#what-you-need).

## How it fits into EDGE

REDnode is the **Run** stage of the EDGE platform.

| Toolkit | How it works with REDnode |
|---|---|
| [REDagent](https://edgemodders.ai/wiki/redagent/) | A REDnode package: the chat window in the game, and the agent that writes REDnode mods |
| [EDGEchat](https://edgemodders.ai/wiki/edgechat/) | The EDGE plugin for Claude Code. It connects Claude Code to REDnode for you |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | The engine that reads the game's files. REDnode packages can use it |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | Manages your *game* mods (archives, frameworks) before the game starts. REDnode's Mod Manager manages REDnode packages *in* the game. They are separate |
| [REDcode](https://edgemodders.ai/wiki/redcode/) | Where you edit REDnode mods, and where **Pack and Play** hands a packed mod to REDnode to swap into the game |
| [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/), [EDGEmat](https://edgemodders.ai/wiki/edgemat/), [EDGEhack](https://edgemodders.ai/wiki/edgehack/) | Tools that show their work in the running game through REDnode |

## Status

**Released.** The current version is **0.70.0** (2026-11-25), for **game version 2.5**. For a game kept on 2.31, use REDnode 0.37.0, the last release for it.

Get it from [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35419) or [REDnode's releases](https://github.com/Edgemodders/REDnode/releases) on GitHub, then follow [Install and set up](https://edgemodders.ai/wiki/rednode/install.html).

REDnode is still young. "Passed in game" on these pages means the developer tested that part in their own modded game. The overlay was also tested running beside Cyber Engine Tweaks and ten other RED4ext plugins. Everything on the player pages passed in game unless the page says otherwise.

| | |
|---|---|
| **New in the latest releases** | Scenes loaded only in part (only their people, or without some objects), tools on your PC that call a mod's functions once you allow them, pins that keep their id and the way V faced, tooltips on the buttons and switches Node mods build, and the overlay's cursor following the pointer in a windowed game (0.70.0). A switch that hides all of REDnode, HUD widgets too, when you click in the game (0.69.0). A dropdown for the windows Node mods build and for pages, each app's version beside its title, and a Mod log you can resize (0.68.2). A key of your own for any app, and REDnode stepping aside in the pause menu (0.67.3). You choose which mods may call another mod's tools (0.67.3). Mods can set the weather and animate the people they spawn (0.67.3). A **Pins** window, a filter box in the launcher, and the controller in mods (0.65.3). [EDGEhack](https://edgemodders.ai/wiki/edgehack/assistants.html)'s quickhack tools for REDagent (0.65.3) |
| **Coming next** (built, in testing) | People you spawn put on the ground, so their animations don't float; picks that see the objects EDGEbuilder bakes; a list of every mod that provides a role; and mods choosing REDagent's model, or an answer with no tools |
| **Planned** | Clicks and typing on panels the game draws itself. HDR, frame generation and ultrawide screens. TweakDB without the game running |

What each release added is in the [changelog](https://edgemodders.github.io/REDnode/changelog.html). Part by part, see [What works today](https://edgemodders.ai/wiki/rednode/#what-works-today).

## Optional packs

Three app packs come as their own zips, attached to each REDnode release and on their own Nexus pages. Install them only if you want them.

| Pack | Apps | For | Needs | Read more |
|---|---|---|---|---|
| **REDnode Admin Tools** | Task Manager, Tools Manager | Seeing what each package costs, ending a stuck one, and choosing which tools AI assistants and other mods may use | REDnode 0.66.0 or later for version 0.2.0, so 0.67.3 or later among releases | [Admin Tools](https://edgemodders.ai/wiki/rednode/admin-tools.html) |
| **REDnode Sound Tools** | Sound Tracer, Sound Search, Hot swap | Sound modders: see and hear every sound the game plays, and swap an archive in without a restart | REDnode 0.41.0 or later | [Sound Tools](https://edgemodders.ai/wiki/rednode/sound-tools.html) |
| **REDnode UI Tools** | UI Workbench | UI modders, and anyone curious how the game's UI is built: inspect it, try changes live, and write HUD panels of your own | REDnode 0.56.0 or later, Codeware 1.16 or later | [UI Tools](https://edgemodders.ai/wiki/rednode/ui-tools.html) |

## In this section

**For players: using REDnode**

| Page | |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/rednode/install.html) | What you need, installing, the first start, a first widget to try, updating and removing |
| [Using the overlay](https://edgemodders.ai/wiki/rednode/overlay.html) | F10 and the three modes, the pause menu, the launcher, moving windows, app keys, HUD widgets, the Pins window, themes, the Console |
| [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html) | Every package in one table: on and off, pins, permissions, calls between mods, restart |
| [Spaces and layers](https://edgemodders.ai/wiki/rednode/spaces.html) | Sets of windows you switch between, the tool layer, solo mode |
| [Admin Tools](https://edgemodders.ai/wiki/rednode/admin-tools.html) | An optional pack: the Task Manager and the Tools Manager |
| [Sound Tools](https://edgemodders.ai/wiki/rednode/sound-tools.html) | An optional pack: Sound Tracer, Sound Search and Hot swap |
| [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html) | Swapping a changed archive into the running game |
| [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) | Connecting Claude Code to the running game, what it can do, and what it asks first |
| [Settings and controls](https://edgemodders.ai/wiki/rednode/settings.html) | Every switch, the shared keys, keyboard shortcuts, files and folders |
| [Troubleshooting](https://edgemodders.ai/wiki/rednode/troubleshooting.html) | What to do when something goes wrong, and the logs |

**For mod makers: making mods and apps**

| Page | |
|---|---|
| [Making mods and apps](https://edgemodders.ai/wiki/rednode/making-mods.html) | Package kinds, the manifest, the apps folder, permissions, requirements, mod services and sharing |
| [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html) | Mods in Node, windows without HTML, logs, isolation, hot reload |
| [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html) | Web pages over the game, the UI kit, HUD widgets, sounds, keys, pointer lock |
| [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html) | HUD panels the game draws itself, written as `.ink.html` files |
| [Game API](https://edgemodders.ai/wiki/rednode/game-api.html) | How packages call the game: the Console, the game helper, any game function |
| [TweakDB](https://edgemodders.ai/wiki/rednode/tweakdb.html) | Reading and changing the game's database of items and stats from code |
| [The world](https://edgemodders.ai/wiki/rednode/world.html) | Placing objects and people, EDGEbuilder scenes, what is near V, animating people, the weather, the world's own objects, pins |
| [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html) | Quests, text, quickhacks, sound, the controller, the game's files, the game's own UI |
| [Debugging](https://edgemodders.ai/wiki/rednode/debugging.html) | The Mod log, Developer mode, DevTools in the game, attaching VS Code |

**UI Tools** (an optional pack)

| Page | |
|---|---|
| [UI Tools](https://edgemodders.ai/wiki/rednode/ui-tools.html) | What the UI Workbench is, installing it, its admin permission |
| [Inspect](https://edgemodders.ai/wiki/rednode/ui-tools-inspect.html) | The game's UI as a tree, Pick, a widget's details |
| [Try](https://edgemodders.ai/wiki/rednode/ui-tools-try.html) | Change a game widget live, never kept |
| [To source](https://edgemodders.ai/wiki/rednode/ui-tools-to-source.html) | Copy a HUD piece into a project of your own |
| [Projects and Edit](https://edgemodders.ai/wiki/rednode/ui-tools-projects.html) | Write and run native HUD panels in the game |
| [Export](https://edgemodders.ai/wiki/rednode/ui-tools-export.html) | Share a project as a mod |
| [Tutorial: your first native HUD panel](https://edgemodders.ai/wiki/rednode/ui-tools-tutorial.html) | From New to an installed mod, step by step |

The [REDnode docs](https://edgemodders.github.io/REDnode/) are the developer reference this section draws on: the [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html), the [API reference](https://edgemodders.github.io/REDnode/api/), the [game API reference](https://edgemodders.github.io/REDnode/game/), the [example apps](https://edgemodders.github.io/REDnode/examples/), the [changelog](https://edgemodders.github.io/REDnode/changelog.html) and the [design](https://edgemodders.github.io/REDnode/design.html).

## What works today

Each part of REDnode, and whether it passed the developer's test in the game. "Experimental" means it works but its shape may still change.

**For players**

| Part | Status |
|---|---|
| Windows over the game, the launcher, F10's three modes, HUD widgets | Passed in game |
| The [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html), with Pin to launcher and Pin to HUD | Passed in game |
| [Spaces](https://edgemodders.ai/wiki/rednode/spaces.html), the tool layer and solo mode | Passed in game |
| Windows you can resize, and title-bar buttons | Passed in game |
| The launcher's filter box, which finds any package by name | Passed in game |
| [App keys](https://edgemodders.ai/wiki/rednode/overlay.html#app-keys): a key of your own that shows one app, or hides it | Passed in game |
| REDnode [stepping aside in the pause menu](https://edgemodders.ai/wiki/rednode/overlay.html#in-the-pause-menu) | Passed in game |
| The [Pins window](https://edgemodders.ai/wiki/rednode/overlay.html#the-pins-window): every pin in the world, **Go there**, your own pin sets | Passed in game |
| [Choosing which mods may call](https://edgemodders.ai/wiki/rednode/mod-manager.html#calls) another mod's tools | Passed in game |
| The [Console](https://edgemodders.ai/wiki/rednode/overlay.html#the-console) | Passed in game. Its `removeItem` and `tp` shortcuts are untested |
| [Shared keys](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys): your AI service keys, set once for every EDGE tool | Passed in game |
| [Claude Code connected to the game](https://edgemodders.ai/wiki/rednode/agents.html), with sign-in by allowing it in the game | Passed in game |
| [Swapping changed archives](https://edgemodders.ai/wiki/rednode/redswap.html) into the running game | Passed in game. Archives that change the game's sound are untested on game 2.5 |
| The optional packs: [Admin Tools](https://edgemodders.ai/wiki/rednode/admin-tools.html), [Sound Tools](https://edgemodders.ai/wiki/rednode/sound-tools.html), [UI Tools](https://edgemodders.ai/wiki/rednode/ui-tools.html) | Released |
| HDR brightness, frame generation, ultrawide screens | Planned |

**For mod makers**

| Part | Status |
|---|---|
| [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html), hot reload, the Mod log | Passed in game |
| Calling any game function from a mod, with editor hints made from the game's own list of functions | Passed in game |
| Reading TweakDB, and changing it through TweakXL | Passed in game |
| The quest API: quest facts, the journal, moving V | Passed in game |
| The world API: placing objects and people, loading EDGEbuilder scenes, what is near V, objects that stay spawned far from V (needs Codeware) | Passed in game |
| World pins: labelled posts in the world, drawn by the overlay | Passed in game. Experimental |
| The weather: setting and holding it, then giving it back | Passed in game |
| Animations on people a mod spawns: the game's workspots, and workspots a mod writes | Passed in game. The game's quest workspots play once, briefly |
| The world's own objects: picking, outlining and hiding what the game placed | Experimental. Passed in game on static objects, such as a bench and a ground decal. Objects placed as entities, such as street lamps, can't be picked yet |
| Quickhack functions: a mod decides whether a quickhack can be used on a target, and what happens when it lands | Passed in game |
| Sound: the game's UI sounds, and a package's own audio files | Passed in game |
| The game's own UI from a mod, and [ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html) for HUD panels the game draws (need Codeware) | Passed in game. Experimental |
| Reading the game's own UI and trying changes on it live | Passed in game |
| Clicks and typing on panels the game draws | Planned |
| Pictures, sliders, double-clicks and title-bar buttons in Node mod windows | Passed in game |
| Pages that cover the whole game view, and frames from other web addresses | Passed in game |
| A window that holds the cursor, for example to turn a 3D camera (pointer lock) | Passed in game |
| Mod services: mods calling each other, and offering tools to AI assistants | Passed in game |
| Calls from mods: the player allows each call that changes something | Passed in game |
| The controller: hearing the player's Xbox or Sony pad | Passed in game |
| Roles: asking for a kind of service, such as a voice, whichever package provides it | Passed in game |
| Asking REDagent a question from another mod | Passed in game |
| Development folders: running a package from your own project folder | Passed in game |
| The debuggers for windows and Node mods, in the game | Passed in game. Attaching VS Code is untested |
| Tools on your PC playing a game sound in the running game, and trying a change live after you allow it (the editor channel) | Passed in game |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/)'s material tools and [EDGEhack](https://edgemodders.ai/wiki/edgehack/)'s quickhack tools for REDagent | Passed in game |
| TweakDB without the game running | Not built yet |
| Mod code that runs inside the game itself, and simple rules that need no code | Not started |
