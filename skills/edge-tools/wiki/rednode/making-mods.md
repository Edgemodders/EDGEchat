<!-- Copied from EDGEweb's docs/wiki/rednode/making-mods.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/making-mods.html (reviewed 2026-10-26) -->

# Making mods and apps

This part of the REDnode section is for people who want to make something. You need some JavaScript, or [REDagent](https://edgemodders.ai/wiki/redagent/) to write it with you. You don't need to know redscript, Lua or C++.

## Packages

Everything REDnode runs is a **package**: a folder in the apps folder with a manifest file, `rednode-app.json`. A package can be:

| Kind | What it is | Made of | Good for |
|---|---|---|---|
| **Node mod** | Code that runs in Node, outside the game | A `.mjs` file | Logic: reacting to the game, changing values, talking to other programs. Can open simple windows without any HTML |
| **Overlay app** | A web page drawn over the game | An `.html` page, with CSS and JavaScript | Rich windows and tools |
| **HUD widget** | An overlay app that never takes input | The same, with `"kind": "hud"` | Read-outs that sit on screen like the game's HUD |
| **App and mod together** | A page for the looks and a Node mod behind it | Both, talking over a channel | A web UI with a back end |

Node mods and overlay apps use the same `rednode` package to reach the game, so what works in one works in the other.

| | Node mod | Overlay app |
|---|---|---|
| Runs in | Its own Node process | A Chromium page in the overlay host |
| UI | REDnode's [ui builder](https://edgemodders.ai/wiki/rednode/node-mods.html#windows-without-html) | Any HTML and CSS, or the [UI kit](https://edgemodders.ai/wiki/rednode/overlay-apps.html#the-ui-kit) |
| npm packages | Yes | Yes, bundled or as plain browser scripts |
| If it crashes | Only that mod stops. **Restart** in the launcher | Only that page |
| Page | [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html) | [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html) |

## The manifest

`rednode-app.json` tells REDnode what the package is. A Node mod:

```json
{
  "id": "hello-mod",
  "name": "Hello mod",
  "version": "0.1.0",
  "author": "you",
  "description": "Shows where V is.",
  "main": "mod.mjs",
  "open": true
}
```

The fields you'll use most:

| Field | Means |
|---|---|
| `id` | Unique. Lowercase letters, digits, `-` and `_`. REDnode saves positions and settings under it, so don't change it later |
| `name`, `version`, `author`, `description` | Shown in the launcher and Mod Manager |
| `main` | A Node mod: the file to run |
| `entry` | An overlay app: the page to show. Needs `width` and `height` |
| `open` | Start it on (true) until the player decides otherwise |
| `permissions` | Powers the package asks the player for. See below |
| `requires` | Other mods it needs, with versions |
| `service` | Functions other packages can call. See [Mod services](https://edgemodders.ai/wiki/rednode/making-mods.html#mod-services) |

The full list, with window placement (`anchor`, `x`, `y`), `kind`, `hideWith`, `sounds` and `isolation`, is in [Settings and controls](https://edgemodders.ai/wiki/rednode/settings.html#manifest-fields).

## The apps folder

Packages live in `red4ext\plugins\REDnode\apps` in the game folder, one folder each. The overlay host watches that folder while the game runs:

| You | REDnode |
|---|---|
| Add a package folder | Finds it at once. It starts if its manifest says `"open": true`; otherwise switch it on in the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html). It starts unpinned and counts as new |
| Change the manifest | Restarts the package |
| Change a file, with **Hot reload** on | Restarts the mod, or reloads the page, in about a second |
| Delete the folder | Stops the package |
| Save a manifest that names a file you haven't written yet | Skips the package until that file exists |

So the loop is: game running, **Hot reload** switched on in the launcher's Settings drawer (the gear), your package's folder open in an editor. Save, and look. No game restart.

**Working outside the game folder.** With **Developer mode** on, add your project's folder under **Development folders** in the Settings drawer. Its packages run from there, with hot reload, instead of any installed copy, and the Mod Manager marks them **DEV**. See [Development folders](https://edgemodders.ai/wiki/rednode/settings.html#development-folders).

Write files your package keeps (settings, saves) to its data folder (`pkg.dataDir`), never into its own folder: hot reload watches that, and an update would overwrite it.

## Permissions

A package can ask for powers the player must allow, in its manifest:

```json
"permissions": ["agent", "bridge"]
```

| Permission | Gives | See |
|---|---|---|
| `mcp` | REDnode's MCP tools for an AI agent inside the package | [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) |
| `agent` | Asking REDagent questions | [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html#asking-redagent-from-a-mod) |
| `bridge` | REDbridge: the game's archives and files | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#the-games-files-through-redbridge) |
| `front` | Staying in the tool layer, above other packages | [Spaces and layers](https://edgemodders.ai/wiki/rednode/spaces.html#the-tool-layer) |
| `solo` | Solo mode | [Spaces and layers](https://edgemodders.ai/wiki/rednode/spaces.html#solo-mode) |
| `archives` | Swapping archives into the running game, through RED Hot Tools | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#swapping-archives-into-the-running-game) |
| `admin` | Managing REDnode: what every package costs, ending or restarting packages, switching AI assistants' tools | REDnode's [Admin Tools guide](https://edgemodders.github.io/REDnode/admin-tools.html#the-admin-permission) |

The calls that need a permission reject until the player allows it. Explain in your description why you need it.

## Requirements

If your package needs another mod, say so:

```json
"requires": {
  "codeware": ">=1.14",
  "tweakxl": ">=1.10"
}
```

REDnode checks the game folder: RED4ext plugins by folder or DLL, redscript modules in `r6/scripts`, Cyber Engine Tweaks mods, and `red4ext`, `cet` and `redscript` themselves. `requires` can also name `rednode` (a REDnode new enough), `redbridge` (the Mod Manager then offers **Get REDbridge**), or another REDnode package by its id. Versions come from the DLL where it has one. Ranges work the npm way (`>=1.16`, `^1.16`, `~1.16`, `*`). The player sees what's missing in the launcher and Mod Manager, and your code can ask with `kernel.requirements()`. Your package still runs, so it can explain.

The [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html#requirements) has every rule for names and ranges.

## What's in the `rednode` package

| Part | For | Page |
|---|---|---|
| `game` | Player position, game events, what the game is showing, UI sounds | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#the-game-helper) |
| `api` | Any game function, typed | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#calling-any-game-function) |
| `tweakdb` | Reading and changing TweakDB | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#tweakdb) |
| `world` | Spawning and moving objects (needs Codeware) | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#placing-things-in-the-world) |
| `ui` | Windows from Node, and solo mode | [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html#windows-without-html) |
| `pkg`, `secrets` | Your package's id, folders and secrets | [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html#data-and-secrets) |
| `channel` | Messages between your page and your Node mod | [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html#a-page-and-a-mod-together) |
| `kernel` | Requirements, REDbridge, the MCP server | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#the-games-files-through-redbridge), [Agents](https://edgemodders.ai/wiki/rednode/agents.html) |
| `agent` | Asking REDagent | [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html#asking-redagent-from-a-mod) |
| `service` | Calling other packages, and offering your own functions | [Mod services](https://edgemodders.ai/wiki/rednode/making-mods.html#mod-services) |
| `audio` | Your own sound files, following the game's volume | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#sound) |
| `archives` | Swapping archives into the running game | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#swapping-archives-into-the-running-game) |
| `ink`, `t` | The game's own UI widgets on the HUD, and text in the player's language (experimental, needs Codeware) | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#more-of-the-game) |
| `quests`, `journal` | Quest facts and journal entries, for testing a quest | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#more-of-the-game) |
| `admin` | For admin tools: what every package costs, ending packages, AI tools' switches | [Admin Tools guide](https://edgemodders.github.io/REDnode/admin-tools.html#the-admin-permission) |

The `rednode` package is written in TypeScript and carries types for every call, and for the game's 15,000-odd classes. An editor such as [REDcode](https://edgemodders.ai/wiki/redcode/) completes them as you type. The [API reference](https://edgemodders.github.io/REDnode/api/) lists every call with examples.

## Mod services

Packages can work together. A package names a **service file** in its manifest, and every function that file exports can be called by other packages, by the package's id:

```json
{ "id": "counter-service", "name": "Counter service", "version": "0.1.0", "service": "service.mjs" }
```

```js
// In another package
import { service } from 'rednode';

const counter = await service.connect('counter-service');
await counter.add(5);
counter.$on('changed', (e) => console.log(e.count)); // its events
```

| Good to know | |
|---|---|
| Where it runs | In the package's Node mod, after `main`. A package can have a service and no `main`. Overlay pages can call services too |
| What crosses | Plain values: numbers, strings, booleans, arrays, plain objects. Not game references |
| Errors and waiting | A call fails with a reason when the package isn't installed, is off or crashed. Calls time out after 30 seconds unless you give a longer `timeoutMs` |
| Descriptions | The JSDoc above each function describes it. REDnode checks each call's arguments against it, and the Mod Manager lists the functions |
| Tools for AI assistants | A function marked `@tool` is offered to Claude Code and REDagent through the [MCP server](https://edgemodders.ai/wiki/rednode/agents.html#mods-tools-for-ai-assistants). `@readonly` ones run without asking; the rest ask the player first |
| Requirements | Name the other package in `requires`, so players see it's missing |

REDnode 0.34.0 to 0.36.0 added these step by step; all are in 0.37.0. The **Counter service** and **Counter panel** samples in REDnode's repo show both sides. The full rules are in [Calling other packages](https://edgemodders.github.io/REDnode/overlay-apps.html#calling-other-packages) and [Describing a service](https://edgemodders.github.io/REDnode/overlay-apps.html#describing-a-service).

## Learn from the samples

The release puts ten samples in the apps folder, switched off: Hello mod, Ask mod, UI kit, Vitals, Coords HUD, Perf, Test timer, Ink Coords, Ink vitals and Quest test. REDnode's repo has more, used for tests. Each is small and readable:

| Sample | Shows |
|---|---|
| Hello mod | A Node mod with a window, a button and live data |
| Ticker mod | A Node mod with no window: logs game events |
| Crash mod | Breaking on purpose, to see isolation and restarts |
| UI kit | Every UI kit widget in one window |
| Native button | A borderless button that looks like the game's |
| Coords HUD, Vitals | HUD widgets, reading V's position, health, level and money |
| Game API mod | Calling the game from Node, including a change (100 eddies) |
| TweakDB test | Reading and changing TweakDB |
| World test | Spawning a box in front of V |
| Layers test, Pointer lock test, Test timer | Solo mode, holding the cursor, staying on top |
| Ask mod | Asking REDagent and streaming the answer |
| Packaging test | Requirements and REDbridge |
| Ink Coords, Ink vitals | The game's own UI widgets on the HUD (need Codeware) |
| Quest test | Reading and setting quest facts and journal entries |
| Counter service, Counter panel | One package calling another's functions |
| Live log mod | A Node mod window with a scrolling list |

Their source is in REDnode's repo under [`packages/overlay/apps`](https://github.com/Edgemodders/REDnode/tree/main/packages/overlay/apps), and the [example apps](https://edgemodders.github.io/REDnode/examples/) page shows each one running, with its files to copy.

## Or let REDagent write it

[REDagent](https://edgemodders.ai/wiki/redagent/) writes, runs, checks and fixes REDnode packages with you, in the game. It only writes inside the apps folder, shows every change before making it, and can undo. See [Your first mod with REDagent](https://edgemodders.ai/wiki/redagent/first-mod.html).

## Sharing your package

Share a package as a zip laid out like the game folder, with your package's folder at `red4ext\plugins\REDnode\apps\<your id>\`. Players install it with Vortex, EDGEdeck or by extracting it into the game folder, after REDnode, the same way REDagent and the optional packs install.

On a mod site, list REDnode as a requirement, the way CET mods list CET, and say which game version you tested on (REDnode 0.38.1 and later are for 2.5; 0.37.0 for 2.31). In your manifest, add `"rednode": ">=<the version you tested>"` to `requires` so players with an older REDnode see it in the Mod Manager, and explain in `description` why you need any permission.
