<!-- Copied from EDGEweb's docs/wiki/rednode/making-mods.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/making-mods.html (reviewed 2026-11-18) -->

# Making mods and apps

This part of the REDnode section is for people who want to make something that runs in the game: a mod that changes or watches the game, a window, or a piece of HUD. You write it in JavaScript, or you let an AI assistant write it. You don't need redscript, Lua or C++.

## Start here

Pick the row that fits you. Each start takes 10 to 20 minutes and ends with something running in your game.

| You | Start with | Then |
|---|---|---|
| Don't code | [Your first mod with REDagent](https://edgemodders.ai/wiki/redagent/first-mod.html): you ask, REDagent writes the mod, in the game. Or the [UI Workbench tutorial](https://edgemodders.ai/wiki/rednode/ui-tools-tutorial.html): a HUD panel you change by editing words and numbers | Come back here when you want to read what was written |
| Know a little JavaScript | [Your first Node mod](https://edgemodders.ai/wiki/rednode/node-mods.html#your-first-node-mod) | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html) for what you can call |
| Can make a web page | [Your first app](https://edgemodders.ai/wiki/rednode/overlay-apps.html#your-first-app) | [The UI kit](https://edgemodders.ai/wiki/rednode/overlay-apps.html#the-ui-kit) |
| Want a panel in the game's own look | [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html), or the [UI Workbench](https://edgemodders.ai/wiki/rednode/ui-tools.html), which writes it with you | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html) for the data to show |

**Or let an assistant write it.** [REDagent](https://edgemodders.ai/wiki/redagent/) writes, runs, checks and fixes REDnode packages with you, in the game. It only writes inside the apps folder, shows every change before making it, and can undo. On the desktop, Claude Code does the same through REDnode's [MCP server](https://edgemodders.ai/wiki/rednode/agents.html). The pages below are then your way to read what the assistant wrote.

### The pages in this part

| Page | Kind | What it gives you |
|---|---|---|
| This page | Guide, then reference | What a package is, the manifest, permissions, sharing |
| [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html) | Guide | A first mod, windows without HTML, events, logs, saving data |
| [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html) | Guide | A first window from a web page, the UI kit, HUD widgets |
| [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html) | Guide | Panels the game draws itself, on its HUD |
| [UI Tools](https://edgemodders.ai/wiki/rednode/ui-tools.html) and its [tutorial](https://edgemodders.ai/wiki/rednode/ui-tools-tutorial.html) | Guide | The UI Workbench: inspect the game's UI and build native panels in the game, no code needed |
| [Game API](https://edgemodders.ai/wiki/rednode/game-api.html) | Guide, then reference | Calling the game: the helper, any game function, the rules |
| [TweakDB](https://edgemodders.ai/wiki/rednode/tweakdb.html), [The world](https://edgemodders.ai/wiki/rednode/world.html), [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html) | Reference with examples | Changing the game's data, placing objects and pins, quests, text, quickhacks, sound and files |
| [Debugging](https://edgemodders.ai/wiki/rednode/debugging.html), [Settings and controls](https://edgemodders.ai/wiki/rednode/settings.html) | Reference | Finding mistakes; every manifest field and setting |

### Before you start

| You need | Why |
|---|---|
| REDnode installed and working: see [Install and set up](https://edgemodders.ai/wiki/rednode/install.html) | Your package runs inside it |
| Your game folder: the one with `bin`, `archive` and `red4ext` in it | Packages go in `red4ext\plugins\REDnode\apps` |
| A text editor: [REDcode](https://edgemodders.ai/wiki/redcode/), VS Code, or even Notepad | The files are plain text |
| **Hot reload** switched on: press **F10**, open the launcher, click the gear, switch on **Hot reload** | REDnode then restarts your package each time you save a file. It is off by default |

Words you'll meet: **F10** switches the overlay to *interactive mode*, where you get a mouse cursor and REDnode's windows take your clicks. The *launcher* is the **REDNODE** tab at the lower left, and the *Mod Manager* is the list of every package, opened from the launcher. See [Using the overlay](https://edgemodders.ai/wiki/rednode/overlay.html) and the [glossary](https://edgemodders.ai/wiki/glossary.html).

## Packages

Everything REDnode runs is a **package**: a folder with a small file called `rednode-app.json` (the *manifest*) that says what the package is. There are four kinds:

| Kind | What it is | Made of | Good for |
|---|---|---|---|
| **Node mod** | Code that runs beside the game, in [Node](https://nodejs.org/) | A `.mjs` file | Logic: reacting to the game, changing values, talking to other programs. It can open simple windows without any HTML |
| **Overlay app** | A web page drawn over the game | An `.html` page, with CSS and JavaScript | Rich windows and tools |
| **HUD widget** | An overlay app the player only looks at: it can't be clicked, typed into or dragged, so it never gets in the way | The same, with `"kind": "hud"` | Read-outs that sit on screen like the game's HUD |
| **App and mod together** | A page for what the player sees, and a Node mod for the work a page can't do (files, npm packages, long jobs). They send each other messages | Both | A window that needs to save files or do heavy work. See [A page and a mod together](https://edgemodders.ai/wiki/rednode/node-mods.html#a-page-and-a-mod-together) |

Node mods and overlay apps reach the game through the same `rednode` package, so a call that works in one works in the other.

| | Node mod | Overlay app |
|---|---|---|
| Choose it when | You want logic, files or a quick window | You want a rich window, or you already know HTML and CSS |
| Runs in | Its own Node process, beside the game | A hidden browser page (Chromium, the engine inside Chrome) |
| Its windows | REDnode's [ui builder](https://edgemodders.ai/wiki/rednode/node-mods.html#windows-without-html): a few lines of JavaScript | Any HTML and CSS, or the ready-made [UI kit](https://edgemodders.ai/wiki/rednode/overlay-apps.html#the-ui-kit) |
| Files on disk | Yes | No: pair it with a mod |
| npm packages | Yes. See [npm packages and TypeScript](https://edgemodders.ai/wiki/rednode/node-mods.html#npm-packages-and-typescript) | Only as script files you put in the package's folder |
| If it crashes | Only that mod stops. **Restart** it in the launcher | Only that page |
| Guide | [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html) | [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html) |

## The manifest

`rednode-app.json` tells REDnode what the package is. This one is a Node mod's:

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

An overlay app's manifest has `entry`, `width` and `height` instead of `main`: see [Your first app](https://edgemodders.ai/wiki/rednode/overlay-apps.html#your-first-app).

The fields you'll use most:

| Field | Means |
|---|---|
| `id` | The package's own name for REDnode. Unique; lowercase letters, digits, `-` and `_`. Don't change it later: REDnode keeps the player's choices (on or off, window places, permissions) and the package's data folder and secrets under it, so a new id is a new, empty package, and other packages that call yours by id stop finding it |
| `name`, `version`, `author`, `description` | Shown in the launcher and the Mod Manager |
| `main` | A Node mod: the file to run |
| `entry` | An overlay app: the page to show. Needs `width` and `height` |
| `open` | `true`: the package starts by itself when REDnode first finds it. `false`: it stays off until the player switches it on in the Mod Manager. Once the player has switched it on or off, their choice wins. Left out, it counts as `true` |
| `permissions` | Powers the package asks the player for. See [Permissions](https://edgemodders.ai/wiki/rednode/making-mods.html#permissions) |
| `requires` | Other mods it needs, with versions. See [Requirements](https://edgemodders.ai/wiki/rednode/making-mods.html#requirements) |
| `service` | Functions other packages can call. See [Mod services](https://edgemodders.ai/wiki/rednode/making-mods.html#mod-services) |

The full list, with window placement (`anchor`, `x`, `y`), `kind`, `hideWith`, `sounds`, `isolation` and `calls`, is on [Settings and controls](https://edgemodders.ai/wiki/rednode/settings.html#manifest-fields).

## The apps folder

Packages live in `red4ext\plugins\REDnode\apps` in the game folder, one folder each. REDnode watches that folder while the game runs:

| You | REDnode |
|---|---|
| Add a package folder | Finds it within a second or two and starts it, unless its manifest says `"open": false` |
| Change the manifest | Restarts the package |
| Change another file, with **Hot reload** on | Restarts the mod, or reloads the page, in about a second |
| Delete the folder | Stops the package |
| Save a manifest that names a file you haven't written yet | Skips the package until that file exists |

**A new package is not pinned.** This is why a first window sometimes "doesn't show":

| A new package | To change it |
|---|---|
| Is listed in the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html) with a **NEW** badge, but not in the launcher | Press **Pin to launcher** in its details |
| Shows its windows only in interactive mode (after **F10**) | Press **Pin to HUD** to keep them on screen while you play. HUD widgets are always on screen |

### The working loop

1. Start the game and load a save.
2. Press **F10**, open the launcher, click the gear and check that **Hot reload** is on.
3. Open your package's folder in your editor (Alt+Tab out of the game).
4. Change a file and save.
5. Go back to the game and look. The package restarted with your change. No game restart.

**Working outside the game folder.** With **Developer mode** on, add your project's folder under **Development folders** in the launcher's settings. Its packages run from there, with hot reload, instead of any installed copy, and the Mod Manager marks them **DEV**. See [Development folders](https://edgemodders.ai/wiki/rednode/settings.html#development-folders).

### Where to save files

If your package saves files (settings, notes), save them in its **data folder**, `pkg.dataDir`, not in the package's own folder. Two reasons:

- Hot reload watches the package's folder, so every file you saved there would restart your mod.
- Installing an update replaces the package's folder, so the files would be lost.

`pkg.dataDir` is for Node mods. A page can't write files: give it a mod or a service file for that. See [Data and secrets](https://edgemodders.ai/wiki/rednode/node-mods.html#data-and-secrets).

## Permissions

Some calls need the player's OK. Your manifest lists the permissions you want:

```json
"permissions": ["agent", "bridge"]
```

The player allows each one in the Mod Manager: they select your package and switch **Allowed** on under **Permissions**. Until then, a call that needs the permission fails with an error that says which permission is missing. Catch it and tell the player what to do:

```js
import { kernel } from 'rednode';

try {
  const bridge = await kernel.bridge(); // needs the bridge permission
} catch (err) {
  console.log(`Not allowed yet: ${err.message}`); // shows in the Mod log
}
```

| Permission | Gives | See |
|---|---|---|
| `mcp` | REDnode's tools for an AI agent that runs inside your package ([MCP](https://edgemodders.ai/wiki/glossary.html) is the standard that lets AI agents use tools) | [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) |
| `agent` | Asking REDagent questions | [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) |
| `bridge` | REDbridge: reading the game's archives and files | [The game's files](https://edgemodders.ai/wiki/rednode/more-apis.html#the-games-files-through-redbridge) |
| `front` | Your windows stay above other packages' windows, with REDnode's own tools | [Spaces and layers](https://edgemodders.ai/wiki/rednode/spaces.html) |
| `solo` | Solo mode: hiding every other package's windows while your tool works | [Spaces and layers](https://edgemodders.ai/wiki/rednode/spaces.html) |
| `archives` | Swapping changed archives into the running game, through [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html) | [Swapping archives](https://edgemodders.ai/wiki/rednode/more-apis.html#swapping-archives-into-the-running-game) |
| `keys:<service>` | The player's [shared key](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys) for an AI service, such as `keys:anthropic` | [Data and secrets](https://edgemodders.ai/wiki/rednode/node-mods.html#data-and-secrets) |
| `admin` | Managing REDnode itself: stopping and starting other packages, and changing the game's own UI widgets live. For tools such as the [UI Workbench](https://edgemodders.ai/wiki/rednode/ui-tools.html). Players see a warning | REDnode's [Admin Tools guide](https://edgemodders.github.io/REDnode/admin-tools.html#the-admin-permission) |

Say in your `description` why you need each permission. Players are more willing to allow what they understand.

## Requirements

If your package needs another mod, say so in the manifest:

```json
"requires": {
  "codeware": ">=1.14",
  "tweakxl": ">=1.10"
}
```

| You can require | Write |
|---|---|
| A RED4ext plugin, such as Codeware, TweakXL or ArchiveXL | Its name: `codeware`, `tweakxl`, `archivexl` |
| A redscript mod or a Cyber Engine Tweaks mod | Its folder's name |
| The frameworks themselves | `red4ext`, `cet`, `redscript` |
| A REDnode new enough | `rednode` |
| REDbridge | `redbridge`. The Mod Manager then offers **Get REDbridge** |
| Another REDnode package | Its `id` |

Version ranges are written the npm way: `>=1.16` (1.16 or later), `^1.16` (1.16 or later, before 2), `~1.16` (any 1.16.x), `*` (any version).

**What the player sees.** A package that misses something has a **NEEDS** badge in the Mod Manager, and its details list what is missing.

**Your package still starts**, so your code can check and show its own message:

```js
import { kernel } from 'rednode';

const missing = (await kernel.requirements()).filter((r) => !r.ok);
if (missing.length) console.log('Missing:', missing.map((r) => `${r.name} ${r.wants}`).join(', '));
```

The [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html#requirements) has every rule for names and ranges.

## What's in the `rednode` package

Every package imports its tools from `rednode`. REDnode provides it: there is nothing to install.

| Part | For | Page |
|---|---|---|
| `game` | V's position and items, game events, what the game is showing, UI sounds | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#the-game-helper) |
| `api` | Any game function | [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#calling-any-game-function) |
| `tweakdb` | Reading and changing TweakDB, the game's database of items and stats | [TweakDB](https://edgemodders.ai/wiki/rednode/tweakdb.html) |
| `world` | Spawning and moving objects (needs Codeware), animating people, the weather, the world's own objects, and pins over places | [The world](https://edgemodders.ai/wiki/rednode/world.html) |
| `ui` | Windows from a Node mod, the clipboard, solo mode, an app's key | [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html#windows-without-html), [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html#an-apps-key) |
| `input` | The player's controller | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#the-controller) |
| `pkg`, `secrets` | Your package's id, folders and secrets | [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html#data-and-secrets) |
| `channel` | Messages between your page and your Node mod | [Node mods](https://edgemodders.ai/wiki/rednode/node-mods.html#a-page-and-a-mod-together) |
| `service`, `use` | Calling other packages, and offering your own functions | [Mod services](https://edgemodders.ai/wiki/rednode/making-mods.html#mod-services) |
| `kernel` | Requirements, REDbridge, the MCP server | [Requirements](https://edgemodders.ai/wiki/rednode/making-mods.html#requirements), [The game's files](https://edgemodders.ai/wiki/rednode/more-apis.html#the-games-files-through-redbridge), [Agents](https://edgemodders.ai/wiki/rednode/agents.html) |
| `agent` | Asking REDagent | [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) |
| `quests`, `journal` | Quest facts and journal entries | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#quests-and-the-journal) |
| `t`, `loc` | Text in the player's language: your own, and the game's | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#text-in-the-players-language) |
| `quickhacks` | Your own logic for a quickhack | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#quickhack-functions) |
| `audio` | Your own sound files, following the game's volume | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#sound) |
| `archives` | Swapping archives into the running game | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#swapping-archives-into-the-running-game) |
| `ink` | The game's own UI: panels on the HUD, and reading the game's widgets (experimental, needs Codeware) | [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html), [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#the-games-own-ui) |
| `admin` | For admin tools: what every package costs, stopping and switching packages | [Admin Tools guide](https://edgemodders.github.io/REDnode/admin-tools.html#the-admin-permission) |

The package is written in TypeScript and describes every call, and the game's 15,000-odd classes, so an editor can complete them as you type once it has the package's types (see [npm packages and TypeScript](https://edgemodders.ai/wiki/rednode/node-mods.html#npm-packages-and-typescript)). The [API reference](https://edgemodders.github.io/REDnode/api/) lists every call with examples.

## Mod services

Packages can work together. One package offers functions; others call them. A HUD widget can ask a stats mod for its numbers, or a quest mod can ask a world builder for a scene's places.

**To offer functions,** name a *service file* in your manifest. Every function that file exports can be called by other packages:

```json
{ "id": "counter-service", "name": "Counter service", "version": "0.1.0", "service": "service.mjs" }
```

`service.mjs`:

```js
import { service } from 'rednode';

let count = 0;

/**
 * Adds to the count, and tells every connected package.
 * @param {number} [by=1] How much to add.
 * @returns {number} The new count.
 */
export function add(by = 1) {
  count += by;
  service.emit('changed', { count }); // an event for everyone connected
  return count;
}
```

**To call them,** connect by the other package's id. Each exported function is then a method you `await`:

```js
import { service } from 'rednode';

const counter = await service.connect('counter-service');
console.log(await counter.add(5));                   // 5
counter.$on('changed', (e) => console.log(e.count)); // the events it sends with service.emit
```

**Try it:** the **Counter service** and **Counter panel** samples in REDnode's repo are these two sides. Copy both folders into your apps folder, switch them on, and press the panel's buttons: the count lives in one package and shows in the other.

| Good to know | |
|---|---|
| Where it runs | The service file runs in your package's Node mod, after `main`. A package can have a service and no `main` |
| Who can call | Any package's Node mod or page, your own page included. A `@tool` function that changes something needs more: see [Calls that change something](https://edgemodders.ai/wiki/rednode/making-mods.html#calls-that-change-something) |
| A page that needs files | A page can't read or write files. Give your package a service file for the file work and call it from the page. The UI Workbench works this way |
| What can be passed | Plain values: numbers, strings, booleans, arrays, plain objects. Not game objects |
| Errors and waiting | A call fails with a reason when the package isn't installed, is switched off or has crashed. A call gives up after 30 seconds: `counter.$with({ timeoutMs: 60000 }).add(1)` waits longer |
| The comment above a function | The `/** ... */` comment (JSDoc) is the function's description. REDnode checks each call's arguments against its `@param` lines, and the Mod Manager lists your functions with it |
| Tools for AI assistants | Add a line `@tool` to that comment and Claude Code and REDagent can call the function, through REDnode's [MCP server](https://edgemodders.ai/wiki/rednode/agents.html). Add `@readonly` to a function that changes nothing: it then runs without asking the player. Every other tool asks first |
| Requirements | Name the other package in `requires`, so players see when it's missing |

The full rules are in REDnode's guide: [Calling other packages](https://edgemodders.github.io/REDnode/overlay-apps.html#calling-other-packages) and [Describing a service](https://edgemodders.github.io/REDnode/overlay-apps.html#describing-a-service).

### Calls that change something

The player decides which mods may call another mod's tools that change something. If your package calls a `@tool` function that isn't `@readonly`, list it in your manifest:

```json
"calls": ["counter-service.add", "voice.speak"]
```

Each entry is `<package>.<function>`, or `<role>.<function>` for a [role](https://edgemodders.ai/wiki/rednode/making-mods.html#roles). The player allows each one in the Mod Manager's [Calls](https://edgemodders.ai/wiki/rednode/mod-manager.html#calls) section. Until then the call fails at once with a reason, such as "counter-service.add is not allowed for Counter panel. Allow it in the Mod Manager". Catch the error and tell the player what to do.

| Good to know | |
|---|---|
| What needs an entry | Only `@tool` functions that aren't `@readonly`. Read-only tools and other exports are open to every mod |
| A call you didn't list | Refused, and the player can't allow it: only you can, by listing it |
| The Tools Manager | Players with the [Admin Tools](https://edgemodders.ai/wiki/rednode/admin-tools.html#tools-manager) pack can also switch a tool on or off for every mod |
| Since | REDnode 0.67.3. Before it, any package could call any other's functions, so a package that calls a changing `@tool` must now list it |
| Samples | **Counter panel** and **Roles test** in REDnode's repo list their calls. Counter panel leaves `reset` out, to show the refusal |

The rules: REDnode's [Calls from mods](https://edgemodders.github.io/REDnode/services.html#calls-from-mods-22-built).

### Roles

Sometimes a mod wants a kind of service, not one particular package: a voice that speaks its lines, whichever voice package the player has. The package that offers it names a **role** in its manifest, and callers ask for the role with `use`:

```json
{ "id": "my-voice", "name": "My voice", "version": "0.1.0", "service": "service.mjs", "provides": ["voice"] }
```

```js
import { use } from 'rednode';

const voice = await use('voice');   // the same kind of handle as service.connect gives
await voice.speak('Choom, you look like hell.', 'judy');
```

| Case | What happens |
|---|---|
| One installed package provides the role | `use` finds it |
| Several do | The player picks one in the Mod Manager, in the package's **Provides** section. If they haven't picked and more than one is switched on, `use` fails and its error names them |
| None does | `use` fails with "No installed package provides ..." |

REDagent provides the `agent` role. You don't `use` it: call `agent.ask(...)` instead (see [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html)). The **Roles test** sample in REDnode's repo passed in game. The rules are in [Roles](https://edgemodders.github.io/REDnode/overlay-apps.html#roles-a-service-found-by-what-it-does).

## Learn from the samples

Each sample is small and readable. Twelve come with REDnode, in your apps folder, switched off: switch one on in the Mod Manager, then open its folder and read it.

| In the release | Shows |
|---|---|
| Hello mod | A Node mod with a window, a button and live data |
| UI kit | Every UI kit widget in one window, and a tab for trying game sounds |
| Coords HUD, Vitals | HUD widgets: V's position, health, level and money |
| Perf | What the overlay costs: the game's frame rate, and the overlay's time per frame and memory |
| Test timer | A stopwatch for tests, in a window that stays above other packages' windows (the `front` permission) |
| Ask mod | Asking REDagent and showing the answer as it arrives |
| Ink Coords, Ink vitals | The game's own UI widgets on the HUD, built in code (need Codeware) |
| Ink markup | A HUD panel written as an `.ink.html` file, with a list and a health bar. See [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html) |
| Quest test | Reading and setting quest facts and journal entries |
| Quickhack test | A quickhack with its own check and its own effect |

More samples are in REDnode's repo only, where they serve as tests. Copy a folder from there into your apps folder to run it:

| In the repo only | Shows |
|---|---|
| Ticker mod | A Node mod with no window: logs game events |
| Live log mod | A Node mod window with a scrolling list |
| Image mod, Views mod | Pictures in a Node mod's window; one window with two views and its own title-bar buttons |
| Crash mod | Breaking on purpose, to see that only the mod stops |
| Native button | A borderless button that looks like the game's |
| Game API mod | Calling the game from Node, including a change (100 eddies) |
| TweakDB test | Reading and changing TweakDB |
| World test, World objects test | Spawning a box in front of V; scenes, people and what's near V |
| Counter service, Counter panel, Roles test | One package calling another's functions |
| Packaging test | Requirements and REDbridge |
| Input test, Pointer lock test, Layers test, Fill test, Frame test | Keys and modifiers, holding the cursor, solo mode, a page over the whole screen, a frame from another address |

Their source is in REDnode's repo under [`packages/overlay/apps`](https://github.com/Edgemodders/REDnode/tree/main/packages/overlay/apps), and the [example apps](https://edgemodders.github.io/REDnode/examples/) page shows each one running in a preview, with its files to copy.

## Sharing your package

Share a package as a zip laid out like the game folder, so it installs like any other mod:

```
my-mod-0.1.0.zip
  red4ext\
    plugins\
      REDnode\
        apps\
          my-mod\
            rednode-app.json
            mod.mjs
```

To make it, build that folder tree anywhere on your PC, copy your package's folder into `apps`, and zip the top `red4ext` folder. Players add the zip to Vortex or EDGEdeck, or extract it into the game folder. The UI Workbench's [Export](https://edgemodders.ai/wiki/rednode/ui-tools-export.html) makes this zip for its own projects.

Before you upload:

| Do | Why |
|---|---|
| Add `"rednode": ">=<the version you tested with>"` to `requires` | Players with an older REDnode see it in the Mod Manager |
| Say in `description` why you need each permission | Players decide with it |
| Test the zip as a player: install it in a game where your working copy is not a development folder | You see what they will see: a package with a NEW badge, switched on or off as your `open` says |
| On the mod's page, list REDnode as a requirement, the way CET mods list CET | Players need it first |
| Say which game version you tested on | REDnode's current releases are for game version 2.5 |
