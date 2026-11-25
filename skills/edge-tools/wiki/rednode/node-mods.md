<!-- Copied from EDGEweb's docs/wiki/rednode/node-mods.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/node-mods.html (reviewed 2026-11-25) -->

# Node mods

A Node mod is a JavaScript file that REDnode runs beside the game, in [Node](https://nodejs.org/), the engine many web servers and tools run on. It can read and change the game, open simple windows, save files and use npm packages. It runs outside the game, so however long it takes over something, the game never waits for it.

| On this page | |
|---|---|
| [Your first Node mod](https://edgemodders.ai/wiki/rednode/node-mods.html#your-first-node-mod) | Two files, and what you should see |
| [Windows without HTML](https://edgemodders.ai/wiki/rednode/node-mods.html#windows-without-html) | Text, buttons, switches, sliders, lists and pictures |
| [Listening to the game](https://edgemodders.ai/wiki/rednode/node-mods.html#listening-to-the-game) | Save loads, menus, and whether V is in the world |
| [Logs](https://edgemodders.ai/wiki/rednode/node-mods.html#logs), [Isolation and crashes](https://edgemodders.ai/wiki/rednode/node-mods.html#isolation-and-crashes), [Hot reload](https://edgemodders.ai/wiki/rednode/node-mods.html#hot-reload) | Finding mistakes and working fast |
| [Data and secrets](https://edgemodders.ai/wiki/rednode/node-mods.html#data-and-secrets) | Saving files and keys |
| [A page and a mod together](https://edgemodders.ai/wiki/rednode/node-mods.html#a-page-and-a-mod-together) | A web page in front, a Node mod behind |
| [npm packages and TypeScript](https://edgemodders.ai/wiki/rednode/node-mods.html#npm-packages-and-typescript) | What works today |

## Your first Node mod

You need REDnode [installed](https://edgemodders.ai/wiki/rednode/install.html) and a save to load. This mod shows where V is, and plays a sound when you press a button.

**1. Make the folder.** In your game folder, open `red4ext\plugins\REDnode\apps` and make a new folder, `my-first-mod`.

**2. Add the manifest.** In that folder, make a file `rednode-app.json`:

```json
{
  "id": "my-first-mod",
  "name": "My first mod",
  "version": "0.1.0",
  "author": "you",
  "description": "Says where V is.",
  "main": "mod.mjs",
  "open": true
}
```

**3. Add the code.** Beside it, make a file `mod.mjs`. The name ends in `.mjs` so that `import` works.

```js
import { game, ui } from 'rednode';

const where = ui.text('Waiting for a save...');

ui.window({
  title: 'My first mod',
  anchor: 'right',
  x: -40,
  children: [where, ui.button('Beep', () => game.audio.play('ui_menu_onpress'))],
});

setInterval(async () => {
  try {
    const p = await game.player.position();
    where.set({ text: `X ${p.x.toFixed(1)}  Y ${p.y.toFixed(1)}  Z ${p.z.toFixed(1)}` });
  } catch {
    where.set({ text: 'No player yet', tone: 'dim' });
  }
}, 500);
```

**4. See it in the game.**

| Do | You should see |
|---|---|
| Start the game and load a save. (If the game was already running, REDnode finds the new folder by itself) | Nothing yet: a new package's window shows only in interactive mode |
| Press **F10** | A mouse cursor, and a window titled **My first mod** at the right edge of the screen. It shows three numbers, V's position, which change as V moves |
| Click **Beep** | The game's menu click sound |
| Press **Esc** to play again | The window hides. It comes back with F10 |

(Screenshot on the wiki, "My first mod": The game in interactive mode with the small My first mod window at the right edge: a line with V's X, Y and Z position and a Beep button.)

| If | Do this |
|---|---|
| There is no window after F10 | Open the launcher (the **REDNODE** tab at the lower left), open the **Mod Manager** and find **My first mod**. It has a **NEW** badge. Switch it on if it is off |
| It says **CRASHED** there | Switch on the **Mod log** in the launcher: it shows the error and the line. A missing comma in the manifest and a typo in the file name are the usual causes |
| The window says "No player yet" | You're at the main menu. Load a save |
| You want the window while you play, or in the launcher | In the Mod Manager, press **Pin to HUD** or **Pin to launcher** in the package's details. A new package has neither pin |

### What the code does

| Part | Does |
|---|---|
| `import { game, ui } from 'rednode'` | Takes two tools from REDnode's package: `game` reads the game, `ui` builds windows. Nothing to install |
| `ui.text('Waiting for a save...')` | Makes a line of text and keeps it in `where`, so the mod can change it later |
| `ui.window({ ... })` | Opens the window. `anchor: 'right'` with `x: -40` puts it at the right edge, 40 in. `children` are the things in it: the text and a button |
| `ui.button('Beep', () => ...)` | A button, and what to do when it is pressed: play one of the game's UI sounds |
| `setInterval(async () => { ... }, 500)` | Runs the part inside twice a second |
| `await game.player.position()` | Asks the game where V is and waits for the reply. Every call to the game needs `await` |
| `try { ... } catch { ... }` | At the main menu there is no V, so the call fails. `catch` shows a calm message instead of crashing the mod |
| `where.set({ text: ... })` | Changes the text in the open window |

### Try it: change the mod while the game runs

1. Press **F10**, open the launcher, click the gear, and switch on **Hot reload**. It is off by default.
2. In `mod.mjs`, change `title: 'My first mod'` to `title: 'Where is V'` and save the file.
3. Look at the game: within about a second the window closes and opens again with the new title.
4. Now add a second button. Change the `children` line to:

```js
  children: [where, ui.button('Beep', () => game.audio.play('ui_menu_onpress')), ui.button('Say hi', () => console.log('Hi from my mod'))],
```

5. Save, switch on the **Mod log** in the launcher, and click **Say hi**: the log shows `[my-first-mod] Hi from my mod`.

This is a cut-down version of the **Hello mod** sample that comes with REDnode.

## Windows without HTML

The `ui` builder makes windows from a few building blocks. REDnode draws them with its UI kit, in the theme the player picked. When the player clicks or changes something, your function runs in your mod.

Here is a small settings window that uses most of them:

```js
import { ui } from 'rednode';

const log = ui.list({ keep: 100, height: 120 });

ui.window({
  title: 'Settings demo',
  width: 380,
  height: 420,
  children: [
    ui.heading('Weather'),
    ui.toggle('Freeze time', (on) => log.push(`Freeze time: ${on}`), { checked: false }),
    ui.slider('Rain', (value) => log.push(`Rain: ${value} %`), { min: 0, max: 100, value: 35, unit: '%' }),
    ui.input({ label: 'Call sign', placeholder: 'Type and press Enter', onSubmit: (text) => log.push(`Call sign: ${text}`) }),
    ui.row(
      ui.button('Apply', () => log.push('Applied')),
      ui.button('Clear', () => log.clear(), { variant: 'ghost' }),
    ),
    log,
  ],
});
```

You should see a window with a heading, a switch, a slider, a text field, two buttons side by side and an empty list. Each thing you do adds a line to the list. (This example is put together from the API reference; each block in it is used by a sample in REDnode's repo.)

| Block | Makes | Your function gets |
|---|---|---|
| `ui.text(text, { tone })` | A line of text. `tone` can be `dim`, `accent` or `danger` | |
| `ui.heading(text)` | A heading | |
| `ui.button(label, onClick, { variant, sound })` | A button. `variant` is `ghost` (quiet) or `danger` (red); `sound` is a game sound to play on press | Nothing: it just runs |
| `ui.toggle(label, onChange, { checked })` | An on and off switch | `true` or `false` |
| `ui.slider(label, onChange, { min, max, step, value, unit, live })` | A slider | The number, when the player lets go. With `live: true`, also while they drag, about 20 times a second |
| `ui.input({ label, placeholder, value, onChange, onSubmit, password })` | A text field. `password: true` shows dots, for a key | The text: `onChange` as it changes, `onSubmit` on Enter |
| `ui.select(label, options, { value, placeholder, disabled, onChange })` | A dropdown. `options` are texts, or `{ value, label, disabled }` | The chosen option's value. Since REDnode 0.68.2 |
| `ui.progress(value, { label, max })` | A progress bar | |
| `ui.list({ lines, keep, height, follow })` | A list of lines that scrolls, for a log or a live feed. `push(...lines)` adds lines at the bottom and `clear()` empties it. `keep` is how many lines it holds (500 if left out) | |
| `ui.image(src, { width, alt, onClick })` | A picture (PNG, JPEG, WebP or GIF) from your package's folder or its data folder | Nothing |
| `ui.row(...blocks)`, `ui.column(...blocks)` | Puts blocks side by side, or one under the other | |
| `ui.window({ title, width, height, anchor, x, y, titleButtons, children, onClose })` | Opens the window. Without `width` and `height` it is 360 by 320 | `onClose` runs when the player closes it |

Every block has `set(...)`, which changes it in the open window at once, as `where.set(...)` does in the first mod.

Buttons, switches, sliders, text fields and dropdowns also take `tip`: a tooltip shown when the cursor rests on the control, a disabled one too, so a button that waits can say why. `set({ tip })` changes it. Since REDnode 0.70.0.

The player can drag the window and close it. If they close it, REDnode remembers that, and keeps it closed on the next start. To get it back they press **Show** beside "Window closed" under your package in the launcher.

### Pictures

`ui.image` shows a picture file. Give a path inside your package's folder, a full path in your data folder (`pkg.dataDir`), a `data:` URL, or the picture's bytes. A picture your mod made while it runs, such as a before and after, goes in the data folder:

```js
import { pkg, ui } from 'rednode';
import path from 'node:path';

const shot = ui.image(path.join(pkg.dataDir, 'after.png'), { width: 320, alt: 'After', onClick: () => console.log('clicked') });
ui.window({ title: 'Before and after', width: 360, height: 300, children: [shot] });
// Later, after writing a new after.png:
shot.set({ src: path.join(pkg.dataDir, 'after.png') });
```

`set({ src })` shows another picture, or the same file again after your mod wrote over it. A picture that can't be shown says why, in the window and in the Mod log. The **Image mod** sample in REDnode's repo shows each way.

### Title-bar buttons and views

A window can have buttons of your own in its title bar, and one window can swap between views, such as a main view and its settings. This needs REDnode 0.58.0 or later.

```js
import { ui } from 'rednode';

const main = [ui.text('The main view.')];
const settings = [ui.text('The settings.'), ui.button('Done', () => showMain())];

const mainButtons = [{ id: 'settings', label: 'Settings', icon: 'settings', onClick: () => showSettings() }];

const win = ui.window({ title: 'Views', width: 380, height: 260, titleButtons: mainButtons, children: main });

function showSettings() {
  win.set({
    title: 'Views: settings',
    titleButtons: [{ id: 'back', label: 'Back', icon: 'back', onClick: () => showMain() }],
    children: settings,
  });
}
function showMain() {
  win.set({ title: 'Views', titleButtons: mainButtons, children: main });
}
```

You should see a window with a gear icon beside its **✕**. Click the gear: the same window, in the same place, now shows the settings and a back arrow.

| Field of a button | Means |
|---|---|
| `id` | Names the button within the window |
| `label` | Its tooltip, or its text when it has no icon |
| `icon` | One of `key`, `settings`, `back`, `refresh`, `help`, `info`, `add`, `edit`, `search`, `list`, `home`, `pin`, `reset`, `space` |
| `on` | `true` lights it, for a switch that is on |
| `onClick` | Runs in your mod when the player presses it |

`win.set({ title, titleButtons, children })` changes only what you pass. The window keeps its place and size and doesn't flicker. A block you remove from the window keeps its state (a slider keeps its value), so you can show it again later. If the window is closed, it takes the changes and shows them when the player opens it again.

A title bar has room for three icons beside **✕**. Your buttons take the first places, and the window's own buttons (roll up, reset position) move into the **⋯** menu.

The **Views mod** sample in REDnode's repo does all of this.

For anything richer than these blocks, give your package a web page: see [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html) and [A page and a mod together](https://edgemodders.ai/wiki/rednode/node-mods.html#a-page-and-a-mod-together).

## Listening to the game

| Call | Tells you |
|---|---|
| `game.on('PlayerPuppet.OnGameAttached', fn)` | The main menu was reached, or a save finished loading |
| `game.on('language', fn)` | The player changed the game's language |
| `game.onState(fn)` | What the game is showing changed: a menu, photo mode, a scene, the main menu, whether V is in the world. It also runs once at the start, with the state now |
| `await game.state()` | The same state, read once |
| `quests.watch(names, fn)` | A quest fact changed. See [Quests and the journal](https://edgemodders.ai/wiki/rednode/more-apis.html#quests-and-the-journal) |

These are all the game events today. Hearing any game function as it is called is planned, not built.

**Fetch game objects again after each save load.** An object the game gave you (the player, a system) stops working when a save loads. `OnGameAttached` is the moment to fetch fresh ones:

```js
import { api, game } from 'rednode';

let player = null;

async function refresh() {
  player = await api.GetPlayer(game.instance); // null at the main menu
}

game.on('PlayerPuppet.OnGameAttached', refresh);
await refresh(); // and once now, in case a save is already loaded
```

**Wait for V to be in the world.** Much of the game exists only while a save is loaded. `game.onState` tells you when:

```js
game.onState((s) => {
  console.log(s.world ? 'V is in the world' : 'No world yet');
});
```

The state's fields, and the rule behind them, are on [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#is-v-in-the-world).

## Logs

Everything your mod prints with `console.log` (and `console.error` and the rest) goes to three places:

| Where | How to see it |
|---|---|
| The **Mod log** window | Switch it on in the launcher or the Mod Manager. It shows lines live, in the game |
| The file `red4ext\logs\rednode-mods.log` | Each line starts with your mod's id |
| Under your mod in the launcher and the Mod Manager | Its last few lines |

A crash shows in red with only the lines of the error that are in your own code, so you see where it broke. See [Debugging](https://edgemodders.ai/wiki/rednode/debugging.html) for breakpoints and more.

## Isolation and crashes

Each mod runs apart from the game, from REDnode's overlay and from other mods. By default each mod gets a process of its own, which uses about 80 to 100 MB of memory.

| What happens | Result |
|---|---|
| Your mod has an error nobody catches | Only your mod stops. It shows **CRASHED**, its windows close, and the error goes to the Mod log |
| An endless loop | After 10 seconds it shows **NOT RESPONDING**. **Restart** stops it anyway |
| `process.exit()` | Only your mod stops |
| A crash in compiled code, or running out of memory | The whole process ends. REDnode starts it again, up to 3 times a minute |

Players can group mods into one **shared process** to save memory (a switch per mod in the launcher and the Mod Manager). A mod there still stops alone on a JavaScript error. But a crash in compiled code ends every mod in the group. If your mod uses native addons (npm packages with compiled parts), add `"isolation": "process"` to the manifest: your mod then always gets its own process.

## Hot reload

With **Hot reload** on (the launcher's settings, behind the gear), saving any file of your mod restarts it in about a second, with the game still running. Its windows close and open again with the new code. It is off by default: switch it on before you start work.

A restart runs your mod again from its first line. So write it in a way that starting twice does no harm:

| Instead of | Do | Why |
|---|---|---|
| Giving V 100 eddies when the mod starts | Give them from a button | Every save of the file would give another 100 |
| Adding to a value at start (`x = x + 5`) | Setting it (`x = 5`) | Adding repeats; setting doesn't |

REDnode undoes much by itself when a mod stops: its windows, its TweakDB changes, the objects it spawned, its HUD panels and its pins all go.

## Data and secrets

| Call | Gives |
|---|---|
| `pkg.id` | Your package's id |
| `pkg.dir` | Your package's folder. Read from it; don't write to it |
| `pkg.dataDir` | A folder of your own, outside the apps folder, that survives updates. Write your files here. See [Where to save files](https://edgemodders.ai/wiki/rednode/making-mods.html#where-to-save-files) |
| `secrets.get(name)`, `secrets.set(name, value)`, `secrets.delete(name)` | A small safe for secrets such as an API key, encrypted with the player's Windows account. A package reads only its own. These work in a page too |
| `secrets.shared(service)`, `secrets.askShared(service, { reason, replace })` | The player's [shared key](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys) for an AI service, such as `anthropic`. Needs the `keys:<service>` permission. `replace: true` (REDnode 0.65.3) asks for a new key even when one is saved, for a key the service refused: the window shows the saved key's last 4 characters, and if the player says no, the saved key stays |

A visit counter that survives restarts:

```js
import { pkg } from 'rednode';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const file = join(pkg.dataDir, 'notes.json');

let notes = { visits: 0 };
try {
  notes = JSON.parse(await readFile(file, 'utf8'));
} catch {
  // no file yet: this is the first start
}
notes.visits += 1;
await writeFile(file, JSON.stringify(notes));
console.log(`Started ${notes.visits} time(s)`);
```

Switch the mod off and on in the Mod Manager and watch the Mod log: the number goes up each time.

A key the player typed into your window, kept in the safe:

```js
import { secrets, ui } from 'rednode';

let key = await secrets.get('api-key'); // null when none is saved yet

ui.window({
  title: 'My service',
  children: [
    ui.text(key ? 'A key is saved.' : 'No key yet.'),
    ui.input({ label: 'API key', password: true, onSubmit: async (text) => {
      await secrets.set('api-key', text);
      key = text;
    } }),
  ],
});
```

`secrets.get` gives `null` when nothing is saved under that name, and also for a secret that was saved under another Windows account.

For a key to one of the big AI services, ask for the player's shared key instead, so they type it once for every EDGE tool. `askShared` opens REDnode's own **Key request** window, where the player allows your package and pastes a missing key. The key never passes through your window:

```js
// rednode-app.json: "permissions": ["keys:gemini"]
const gemini = (await secrets.shared('gemini')) ?? (await secrets.askShared('gemini', { reason: 'To make your textures' }));
```

## A page and a mod together

A package can have both a page (`entry`) and a Node mod (`main`). The page is what the player sees; the mod does what a page can't: files, npm packages, long jobs. They send each other messages over `channel`. REDnode's own Console is built this way.

Here is a whole package: a notes window whose text is saved to a file.

`rednode-app.json`:

```json
{
  "id": "my-notes",
  "name": "My notes",
  "version": "0.1.0",
  "entry": "index.html",
  "main": "mod.mjs",
  "width": 360,
  "height": 220,
  "open": true
}
```

`index.html`, the page:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script src="rednode://ui/rednode-ui.js"></script>
<script type="importmap">{ "imports": { "rednode": "rednode://sdk/index.js" } }</script>
<style>
  html, body { margin: 0; width: 360px; height: 220px; background: transparent; }
  rn-window { position: absolute; inset: 6px; }
</style>
</head>
<body>
  <rn-window title="My notes" draggable>
    <rn-input id="note" label="Note" placeholder="Type a note"></rn-input>
    <rn-button id="save">Save</rn-button>
    <p id="out"></p>
  </rn-window>
  <script type="module">
    import { channel } from 'rednode';

    const note = document.getElementById('note');
    const out = document.getElementById('out');

    channel.on((msg) => {
      if (msg.type === 'saved') out.textContent = `Saved at ${msg.at}`;
      if (msg.type === 'note') note.value = msg.text;
    });
    document.getElementById('save').addEventListener('click', () => {
      channel.post({ type: 'save', text: note.value });
    });
    channel.post({ type: 'load' }); // ask the mod for the saved note
  </script>
</body>
</html>
```

`mod.mjs`, the mod:

```js
import { channel, pkg } from 'rednode';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const file = join(pkg.dataDir, 'note.txt');

channel.on(async (msg) => {
  if (msg.type === 'save') {
    await writeFile(file, msg.text);
    channel.post({ type: 'saved', at: new Date().toLocaleTimeString() });
  }
  if (msg.type === 'load') {
    try {
      channel.post({ type: 'note', text: await readFile(file, 'utf8') });
    } catch {
      // nothing saved yet
    }
  }
});
```

| Do | You should see |
|---|---|
| Press **F10** | The **My notes** window, at the top left |
| Type a note and click **Save** | "Saved at" with the time, under the button |
| Switch the package off and on in the Mod Manager | The window comes back with your note in the field |

What to know about `channel`:

| | |
|---|---|
| What can be sent | Plain values: numbers, strings, booleans, arrays, plain objects |
| Who gets it | What the mod posts, every page of the package gets. What a page posts, the mod gets |
| Who starts first | Not stated in REDnode's docs. If the note doesn't load on some starts, the page asked before the mod was listening: ask again from a button, or after a short wait |

This package is put together from the `channel` reference and the Console's design. It has not been run as a sample in REDnode's tests: tell us on Discord if a step differs.

The other way to give a page a back end is a **service file**: the page calls the file's functions and gets their results directly, with no messages to match up. See [Mod services](https://edgemodders.ai/wiki/rednode/making-mods.html#mod-services). Services are also how you call *another* package.

## npm packages and TypeScript

What works today, and what you have to do yourself:

| You want | How |
|---|---|
| `import ... from 'rednode'` | Nothing to do. REDnode gives every mod its own copy of the package |
| Node's built-in modules (`node:fs`, `node:path`, `fetch`) | Import them as in any Node program |
| An npm package | A Node mod finds packages the way Node always does: in a `node_modules` folder in the package's folder. Open a terminal in your package's folder, run `npm init -y` once, then `npm install <name>`. This needs [Node.js](https://nodejs.org/) installed on your PC |
| To share a mod that uses npm packages | Put `node_modules` in your zip, or bundle your code and the packages into one file with a bundler such as esbuild. The UI Workbench's Export leaves `node_modules` out |
| npm packages with compiled parts (native addons) | Set `"isolation": "process"` in the manifest. See [Isolation and crashes](https://edgemodders.ai/wiki/rednode/node-mods.html#isolation-and-crashes) |
| TypeScript | REDnode runs JavaScript files (`.mjs` or `.js`). Compile your `.ts` files to JavaScript first, with `tsc` or a bundler, and name the result in `main` |
| Completion and types in your editor | The types are part of the `rednode` package in [REDnode's repo](https://github.com/Edgemodders/REDnode/tree/main/packages/rednode). The package is not on npm yet, so today you get them by cloning the repo and building it |

REDnode's docs have no in-game test of a mod with `node_modules`, so treat the npm rows as how Node works rather than as tested steps. In an overlay page there is no Node: a library must be a script file in your package's folder (see [Using a library or framework](https://edgemodders.ai/wiki/rednode/overlay-apps.html#using-a-library-or-framework)).

If you would rather not set any of this up, ask [REDagent](https://edgemodders.ai/wiki/redagent/) or Claude Code for the mod: they write plain `.mjs` files that need no build.

## Good to know

- **Every game call is a round trip.** It runs between two game frames and its result comes back a frame or two later. To do several things in the same frame, start them together and wait once. See [Rules worth knowing](https://edgemodders.ai/wiki/rednode/game-api.html#rules-worth-knowing).
- **The game never waits for your mod.** So a Node mod can't change a value in the middle of a game function as it runs (multiply the damage of one hit, say). That needs code inside the game, which REDnode calls [Tier 1](https://edgemodders.ai/wiki/glossary.html): designed, not built.
- **The full API** with examples is in the [API reference](https://edgemodders.github.io/REDnode/api/), and REDnode's [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html#node-mods) has more detail.
