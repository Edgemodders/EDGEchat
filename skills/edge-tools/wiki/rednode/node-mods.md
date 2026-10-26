<!-- Copied from EDGEweb's docs/wiki/rednode/node-mods.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/node-mods.html (reviewed 2026-10-24) -->

# Node mods

A Node mod is JavaScript that runs in [Node](https://nodejs.org/), the same engine many web servers and tools use, in a process of its own beside the game. It can use npm packages, wait for anything with `await`, and never slows the game down while it waits. It reaches the game through the `rednode` package.

## Your first Node mod

Make a folder `my-first-mod` in the apps folder (`red4ext\plugins\REDnode\apps`) with two files.

`rednode-app.json`:

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

`mod.mjs`:

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

With the game running, REDnode finds the folder and starts the mod. Its window appears at the right edge. Press F10 and click **Beep**. This is a cut-down version of the Hello mod sample.

A new package starts unpinned: it's listed in the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html), not the launcher, until you press **Pin to launcher**. And its window shows only while you press F10 into interactive mode, unless you pin it to the HUD.

Use the `.mjs` extension so `import` works, or add a `package.json` with `"type": "module"` beside your file.

## Windows without HTML

The `ui` builder makes windows from a few building blocks. REDnode draws them with its UI kit, in the player's theme. Clicks and changes come back to your mod.

| Block | Makes |
|---|---|
| `ui.text(text, { tone })` | Text. `tone` can be `dim`, `accent` or `danger` |
| `ui.heading(text)` | A heading |
| `ui.button(label, onClick, { variant, sound })` | A button |
| `ui.toggle(label, onChange, { checked })` | An on and off switch |
| `ui.slider(label, onChange, { min, max, step, value, unit })` | A slider |
| `ui.input({ label, placeholder, value, onChange, onSubmit })` | A text field |
| `ui.progress(value, { label, max })` | A progress bar |
| `ui.list({ lines, keep, height, follow })` | A list of lines that scrolls on its own, for a log or a live feed. `push(...lines)` adds lines, `clear()` empties it |
| `ui.row(...)`, `ui.column(...)` | Layout |
| `ui.window({ title, width, height, anchor, x, y, children, onClose })` | Opens the window |

Every block has `set(...)`, which changes it in the open window at once, as `where.set(...)` does above.

The player can drag the window, close it and bring it back. If they close it, REDnode remembers and keeps it closed on the next start, until they press **Show**.

For anything richer, give your package a web page too: see [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html) and [a page and a mod together](https://edgemodders.ai/wiki/rednode/node-mods.html#a-page-and-a-mod-together).

## Listening to the game

| Call | Gives |
|---|---|
| `game.on('PlayerPuppet.OnGameAttached', fn)` | Called at the main menu and on every save load |
| `game.onState(fn)`, `game.state()` | Whether a menu, photo mode, a scene or the main menu is showing, the overlay mode, and whether REDnode is linked to the game |

`OnGameAttached` is the moment to fetch fresh game objects: references from before a save load stop working. Quest facts can be watched as they change with `quests.watch` (see [Game API](https://edgemodders.ai/wiki/rednode/game-api.html#more-of-the-game)). More events, from any game function, are planned but not built.

For calling the game, see [Game API and TweakDB](https://edgemodders.ai/wiki/rednode/game-api.html).

## Logs

Everything your mod prints with `console.log` (and `console.error` and the rest) goes to:

- the **Mod log** window, live in the game (switch it on in the launcher or Mod Manager);
- the file `red4ext\logs\rednode-mods.log`, each line tagged with your mod's id;
- the last few lines under your mod in the launcher and Mod Manager.

A crash shows in red with only the stack lines from your own code, so you see where it broke. See [Debugging](https://edgemodders.ai/wiki/rednode/debugging.html).

## Isolation and crashes

Each mod runs on its own thread in a mod process, outside the game and outside the overlay host.

| What happens | Result |
|---|---|
| Your mod throws an uncaught error | Only your mod stops. It shows **CRASHED**, its windows close, the error goes to the Mod log |
| An endless loop | After 10 seconds it shows **NOT RESPONDING**. **Restart** stops it anyway |
| `process.exit()` | Only your mod stops |
| A native crash or running out of memory | The whole process ends. REDnode restarts it, up to 3 times a minute |

A mod process uses about 80 to 100 MB. Players can put several mods in one **shared process** to save memory. If your mod uses native addons (compiled npm packages), a crash in one could take down the mods beside it, so set `"isolation": "process"` in the manifest: the player then can't share its process.

## Hot reload

With **Hot reload** on in the launcher's Settings drawer (the gear at the right of the Theme row), saving any file of your mod restarts it in about a second, with the game still running. Windows close and reopen with the new code. Hot reload is on by default for developers running the host from REDnode's repo, and off by default for players.

Because a restart runs your mod from the top, write it so that starting twice is harmless: set your values when you start, rather than adding to them.

## Data and secrets

| Call | Gives |
|---|---|
| `pkg.id` | Your package's id |
| `pkg.dir` | Your package's folder in the apps folder. Read from it; don't write to it |
| `pkg.dataDir` | A folder of your own, outside the apps folder, that survives updates. Write your files here |
| `secrets.get(name)`, `secrets.set(name, value)`, `secrets.delete(name)` | Secrets such as an API key, encrypted with the player's Windows account. A package reads only its own |

```js
import { pkg, secrets } from 'rednode';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

await writeFile(join(pkg.dataDir, 'notes.json'), JSON.stringify({ visits: 1 }));
await secrets.set('api-key', key);
```

A secret saved under another Windows account reads as `null`.

## A page and a mod together

A package can have both an `entry` page and a `main` mod. They talk over `channel`:

```js
// In the mod and in the page
import { channel } from 'rednode';

channel.on((data) => console.log('got', data));
channel.post({ hello: 'from the other side' });
```

So the page does the looks, and the mod does the work: files, npm packages, long calculations.

To call *another* package's functions, or offer your own, see [Mod services](https://edgemodders.ai/wiki/rednode/making-mods.html#mod-services).

## Good to know

- **Every game call is a round trip.** It runs between game frames and answers a frame or two later. Calls you start together without awaiting each run in the same frame.
- **The game never waits for your mod.** A Node mod can't change a value in the middle of a game function as it runs. That needs code inside the game (Tier 1), which is designed but not built.
- **The full API** with examples is in the [API reference](https://edgemodders.github.io/REDnode/api/), and the [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html#node-mods) has more Node mod detail.
