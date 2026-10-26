<!-- Copied from EDGEweb's docs/wiki/rednode/index.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/ (reviewed 2026-10-26) -->

# REDnode

REDnode is the EDGE platform's runtime. It plugs into Cyberpunk 2077 and lets two new kinds of mod run beside the game: **Node mods**, written in JavaScript or TypeScript, and **overlay apps**, small web pages drawn on top of the game. Both can read and change the running game. REDagent, EDGE's in-game assistant, is itself a REDnode package, and it writes its mods for REDnode.

(Screenshot on the wiki, "REDnode in the game": Gameplay with the REDnode launcher open at the lower left, the Mod Manager in the middle, and a couple of HUD widgets (Coords HUD at the top, Vitals under it).)

## What it's for

Most Cyberpunk mods today are archives (replaced game files), redscript (scripts compiled into the game) or Lua for Cyber Engine Tweaks. Each needs its own tools and its own language, and a mistake in a script can stop the game from starting.

REDnode adds a different way in:

- **Mods in JavaScript or TypeScript,** the most widely known programming languages, with npm's packages and normal web tooling.
- **In-game windows and HUD widgets made from web pages,** in any look CSS can draw, including one that looks like the game's own UI.
- **The whole game in reach.** A mod can call any function the game exposes, typed from the game's own type data, and read or change TweakDB, the game's database of items and stats.
- **Safe to experiment.** Mods run in their own processes outside the game. If one crashes or hangs, the game keeps running, and you restart the mod with one click.
- **Change it while you play.** With hot reload, saving a mod's file restarts it in the running game. No game restart.

## Why you might want it

| If you... | REDnode gives you |
|---|---|
| Play, and want REDagent | REDagent runs on REDnode. Install REDnode first |
| Want useful windows over the game | HUD widgets and tool windows, switched on and off in the Mod Manager, sorted into [spaces](https://edgemodders.ai/wiki/rednode/spaces.html) you flip between |
| Want to make a mod but don't know redscript or Lua | Write it in JavaScript or TypeScript, or ask REDagent to write it with you |
| Know web development | Build in-game UI with HTML and CSS, with a ready-made UI kit in the HUD look |
| Make tools for other modders | Overlay apps can use REDbridge to read the game's archives, the [world API](https://edgemodders.ai/wiki/rednode/game-api.html#placing-things-in-the-world) to place objects, as EDGEbuilder does, and swap changed archives into the running game |
| Want mods that work together | A mod can offer functions to other mods, which call them by the mod's id: [mod services](https://edgemodders.ai/wiki/rednode/making-mods.html#mod-services) |
| Want Claude to see and call the game | An MCP server gives Claude Code your mod logs, your overlay windows, pictures of the game and live game calls, asking you before calls that change the game. Mods can offer it tools of their own |

## How it fits into EDGE

REDnode is the **Run** stage of the EDGE platform: the part that is in the game while you play.

| Toolkit | How it works with REDnode |
|---|---|
| [REDagent](https://edgemodders.ai/wiki/redagent/) | A REDnode package: the chat window in the game, and the agent that writes REDnode mods |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | REDnode packages can use it to read the game's archives and files. The Mod Manager's **Get REDbridge** button installs it, or REDnode uses the copy EDGEdeck or REDcode downloaded |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | Manages your *game* mods (archives, frameworks) before the game starts. REDnode's Mod Manager manages REDnode packages *in* the game. They are separate |
| [REDcode](https://edgemodders.ai/wiki/redcode/) | Where you edit REDnode mods. Its REDnode HUD colour theme comes from REDnode's look |
| Claude Code | Connects to REDnode's [MCP server](https://edgemodders.ai/wiki/rednode/agents.html) |

## Status

**Released.** REDnode 0.40.1 came out on 2026-10-26, for **game version 2.5**. REDnode supports 2.5 from 0.38.1 (2026-10-25); 0.37.0 is the last release for game 2.31, still on the releases page for a game kept on 2.31.

Download `REDnode-<version>.zip` from [REDnode's releases](https://github.com/Edgemodders/REDnode/releases) and see [Install and set up](https://edgemodders.ai/wiki/rednode/install.html). It is also on [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35419), with the optional [Admin Tools](https://www.nexusmods.com/cyberpunk2077/mods/35793) pack and [REDagent](https://www.nexusmods.com/cyberpunk2077/mods/35670). It is still young: every part below as passed was tested in the developer's modded game, and the overlay was also tested side by side with Cyber Engine Tweaks and ten other RED4ext plugins.

| Part | Status |
|---|---|
| Overlay windows, the launcher, F10 modes, HUD widgets | Passed in game |
| Node mods, hot reload, the Mod log | Passed in game |
| The game API (call any game function, typed) | Passed in game |
| Mod Manager, Pin to launcher, Pin to HUD | Passed in game |
| Debugger for windows and Node mods, in the game | Passed in game |
| Tool layer and solo mode | Passed in game |
| Spaces (sets of windows, like virtual desktops) | Passed in game |
| Pointer lock (holding the cursor for a 3D camera) | Passed in game |
| MCP server for AI agents, with sign-in by allowing an assistant in the game | Passed in game |
| Asking REDagent from other mods | Passed in game |
| World API (placing objects, people who stand still, EDGEbuilder scenes, what is near V; needs Codeware) | Passed in game |
| TweakDB: reading, and changing through TweakXL | Passed in game |
| Sound: the game's UI sounds, and packages' own audio files | Passed in game |
| Swapping changed archives into the running game (needs RED Hot Tools), sound archives included | Passed in game on 2.31. On 2.5 it waits for a RED Hot Tools release for 2.5 |
| The game's own UI from Node (ink; needs Codeware), in the player's language | Passed in game. Experimental |
| Quest API (quest facts, the journal, moving V) | Passed in game |
| Mod services (mods calling each other, and offering tools to AI assistants) | Passed in game |
| Development folders (run a package from your own project folder) | Passed in game |
| Optional packs: [Admin Tools](https://edgemodders.ai/wiki/rednode/#optional-packs) and [Sound Tools](https://edgemodders.ai/wiki/rednode/#optional-packs) | Released |
| TweakDB without the game running | Not built yet |
| Display: HDR, frame generation, ultrawide | Planned |
| Console (type JavaScript in the game, like CET's console) | Proposed, not scheduled |
| Code that runs inside the game (Tier 1), declarative rules | Not started |

### Optional packs

Two app packs come as their own zips, attached to each REDnode release. Install them only if you want them.

| Pack | Apps | For |
|---|---|---|
| **REDnode Admin Tools** 0.1.0 | Task Manager (what every package costs, **End task**, **Restart**), Tools Manager (every tool an AI assistant sees, switched on and off) | Players and modders who want to manage REDnode itself. Needs REDnode 0.37.0 and the `admin` permission. [Guide](https://edgemodders.github.io/REDnode/admin-tools.html) |
| **REDnode Sound Tools** 0.1.0 | Sound Tracer, Sound Search, Hot swap | Sound modders: see and hear every sound the game plays, and swap a sound mod in without a restart. [Guide](https://edgemodders.github.io/REDnode/sound-tools.html) |

## In this section

**Using REDnode**

| Page | |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/rednode/install.html) | What you need, installing the release, first start, updating and removing, building from source |
| [Using the overlay](https://edgemodders.ai/wiki/rednode/overlay.html) | F10 and the three modes, the launcher, moving windows, themes, keys |
| [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html) | Every package in one table: on and off, pins, permissions, restart |
| [Spaces and layers](https://edgemodders.ai/wiki/rednode/spaces.html) | Sets of windows you switch between, the tool layer, solo mode |

**Making mods and apps**

| Page | |
|---|---|
| [Making mods and apps](https://edgemodders.ai/wiki/rednode/making-mods.html) | Package kinds, the manifest, the apps folder, permissions, requirements, mod services and sharing |
| [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html) | Mods in Node, windows without HTML, logs, isolation, hot reload |
| [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html) | Web pages over the game, the UI kit, HUD widgets, sounds, pointer lock |
| [Game API and TweakDB](https://edgemodders.ai/wiki/rednode/game-api.html) | Calling the game, TweakDB, placing objects, the game's files, sound |
| [Debugging](https://edgemodders.ai/wiki/rednode/debugging.html) | The Mod log, Developer mode, DevTools in the game, attaching VS Code |
| [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) | Claude Code and the MCP server, and asking REDagent from a mod |

**Reference**

| Page | |
|---|---|
| [Settings and controls](https://edgemodders.ai/wiki/rednode/settings.html) | Every switch, key, permission and manifest field |
| [Troubleshooting](https://edgemodders.ai/wiki/rednode/troubleshooting.html) | Logs, symptoms and fixes |

The [REDnode docs](https://edgemodders.github.io/REDnode/) are the developer reference this section draws on: the [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html), the [API reference](https://edgemodders.github.io/REDnode/api/), the [game API reference](https://edgemodders.github.io/REDnode/game/), the [example apps](https://edgemodders.github.io/REDnode/examples/), the [changelog](https://edgemodders.github.io/REDnode/changelog.html) and the [design](https://edgemodders.github.io/REDnode/design.html).
