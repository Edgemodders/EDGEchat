<!-- Copied from EDGEweb's docs/wiki/rednode/more-apis.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/more-apis.html (reviewed 2026-11-18) -->

# More of the game

The parts of the `rednode` package that are not on [The game API](https://edgemodders.ai/wiki/rednode/game-api.html), [TweakDB](https://edgemodders.ai/wiki/rednode/tweakdb.html) or [The world](https://edgemodders.ai/wiki/rednode/world.html). Each section says what the part is for, shows one example you can run, and links to the full reference. Every call needs `await`, and most need a loaded save.

| On this page | For | Needs |
|---|---|---|
| [Quests and the journal](https://edgemodders.ai/wiki/rednode/more-apis.html#quests-and-the-journal) | Reading, setting and watching quest facts; journal entries | Nothing |
| [Text in the player's language](https://edgemodders.ai/wiki/rednode/more-apis.html#text-in-the-players-language) | Your own translated text (`t`), and the game's own words (`loc`) | Nothing |
| [Quickhack functions](https://edgemodders.ai/wiki/rednode/more-apis.html#quickhack-functions) | Your own logic for when a quickhack can be used and what it does | REDnode 0.62.4 or later |
| [Sound](https://edgemodders.ai/wiki/rednode/more-apis.html#sound) | The game's UI sounds, and your own audio files | Nothing |
| [The controller](https://edgemodders.ai/wiki/rednode/more-apis.html#the-controller) | Hearing the player's Xbox or Sony pad | REDnode 0.65.3 or later |
| [The game's files through REDbridge](https://edgemodders.ai/wiki/rednode/more-apis.html#the-games-files-through-redbridge) | Searching and extracting the game's archives | REDbridge, and the `bridge` permission |
| [Swapping archives into the running game](https://edgemodders.ai/wiki/rednode/more-apis.html#swapping-archives-into-the-running-game) | Showing a changed archive without a restart | The `archives` permission |
| [The game's own UI](https://edgemodders.ai/wiki/rednode/more-apis.html#the-games-own-ui) | Reading the game's widgets from script | Codeware 1.16 or later |

All of these passed REDnode's tests in the running game, except where a section says otherwise.

## Quests and the journal

A **quest fact** is a named number the game's quests use to remember things: whether you met someone, which choice you made. A fact that was never set reads 0. The **journal** holds the quests and objectives the player sees. These calls are for testing a quest you are making, and for mods that react to the story.

```js
import { quests } from 'rednode';

console.log(await quests.fact('rednode_test'));    // 0: a made-up fact nobody has set

const stop = await quests.watch(['rednode_test'], ({ name, value }) => {
  console.log(`${name} is now ${value}`);
});
await quests.setFact('rednode_test', 1);            // the watcher logs "rednode_test is now 1"
stop();                                             // stop watching
```

Run it in a Node mod, with the Mod log open: you should see `0`, then `rednode_test is now 1`.

| Call | Does |
|---|---|
| `quests.fact(name)`, `quests.facts(names)` | Reads one fact, or several at once |
| `quests.setFact(name, value)` | Sets one. **This changes the player's save** |
| `quests.watch(names, fn)` | Runs your function at every change of the named facts. It keeps working after a save load. It gives back a function that stops it |
| `journal.entry(path, kind?)` | An entry's state (`"Inactive"`, `"Active"`, `"Succeeded"`, `"Failed"`) and whether it is tracked, or `null` when the path isn't in the journal. `kind` is `quest`, `phase`, `objective` (if left out), `subobjective` or `mappin` |
| `journal.setState(path, state, kind?)` | Changes it, with the game's own notification. **This changes the save** |
| `journal.track(path, kind?)` | Tracks an objective |
| `game.player.teleport({ x, y, z, yaw? })` | Moves V, to get to where a quest happens |

Use a test save when you set real quest facts: a wrong value can break a quest for that save. Starting a quest phase directly is not possible: no game function for it has been found.

The **Quest test** sample that comes with REDnode has a button for each call. More: REDnode's [Quest API page](https://edgemodders.github.io/REDnode/quests.html). For making quests, see [EDGEquest](https://edgemodders.ai/wiki/edgequest/).

## Text in the player's language

Two tools, for two kinds of text:

| | `t('key')` | `loc.text('LocKey#...')` |
|---|---|---|
| Whose text | Your package's own, from files you write | The game's own: a district's or an item's name |
| Where it comes from | `locales/<language>.json` in your package's folder | The game, by the text's key |

**Your own text.** Put one file per language in a `locales` folder, named by the game's language codes (`en-us`, `fr-fr`, `pl-pl`):

```
my-mod/
  rednode-app.json
  mod.mjs
  locales/
    en-us.json
    fr-fr.json
```

`locales/en-us.json`:

```json
{
  "title": "Bounty board",
  "reward": "Reward: {amount} €$",
  "found": { "one": "{count} contract found", "other": "{count} contracts found" },
  "thanks": { "m": "Thanks, mister.", "f": "Thanks, miss." }
}
```

```js
import { t } from 'rednode';

await t.ready;                                   // wait until the files are read
console.log(`${t('reward', { amount: 500 })}`);  // "Reward: 500 €$"
console.log(`${t('found', { count: 1 })}`);      // "1 contract found"
console.log(`${t('found', { count: 5 })}`);      // "5 contracts found"
console.log(`${t('thanks')}`);                   // by V's gender
```

| Feature | How |
|---|---|
| Placeholders | `{amount}` in the text takes `amount` from the second argument |
| Plurals | Give `count`, and write the forms the language has: `one` and `other` in English; some languages also have `few` and `many` |
| V's gender | `m` and `f` forms |
| A missing text | A key the player's language lacks shows in English; a key no file has shows as the key itself |
| In a HUD panel | Pass `t(...)` straight to an ink text: `ink.text(t('title'), { style: 'label' })`. It follows a language change by itself |
| The language itself | `await game.language()` gives `{ language: 'fr-fr', tag: 'fr-FR' }`, and `game.on('language', fn)` runs when the player changes it |

**The game's own text.** The game names its texts by keys such as `LocKey#10963`. `loc.text` gives the words in the player's language:

```js
import { loc } from 'rednode';

console.log(await loc.text('LocKey#10963')); // "Little China" in English
```

Try that line in the [Console](https://edgemodders.ai/wiki/rednode/game-api.html#try-it-in-the-console) (without the `import`). To find a key, search the game's texts by their words with REDbridge's `loc.search` (an assistant with REDcode's tools can do it for you), or read it from a TweakDB record: a district record's `LocalizedName()` gives its name's key.

The **Ink language** sample in REDnode's repo shows all of this on a HUD panel in English and French. More: REDnode's [Native game UI](https://edgemodders.github.io/REDnode/ink.html) page.

## Quickhack functions

A quickhack's numbers and effects live in TweakDB. Some ideas can't be written as data: "only on people", "more damage to the wounded". `quickhacks.define` gives a quickhack two functions of your own for those.

[EDGEhack](https://edgemodders.ai/wiki/edgehack/), EDGE's quickhack editor, writes these for you: see its [Scripts](https://edgemodders.ai/wiki/edgehack/scripts.html) page. Read on to write or understand one by hand.

```js
import { quickhacks } from 'rednode';

// Overheat only on people, and harder on the wounded.
await quickhacks.define(
  ['Items.OverheatProgram', 'Items.OverheatLvl1Program', 'Items.OverheatLvl2Program',
   'Items.OverheatLvl3Program', 'Items.OverheatLvl4Program', 'Items.OverheatLvl4PlusPlusProgram'],
  {
    canUse: (target) => target.isHuman,
    disabledText: 'People only',
    async onLand(target, hack) {
      if (target.healthPercent < 50) await target.damage(40 * hack.tier);
    },
  },
);
```

With this running, scan a person: Overheat shows "Checking..." for a second the first time, then as usable. Scan a robot or a drone: Overheat shows disabled, with "People only". Upload it on a wounded person and they take extra damage.

| Part | What it is |
|---|---|
| The first argument | The quickhack's item record, or a list of them for a quickhack that comes in tiers, lowest tier first. REDnode finds the hacks that belong to the items |
| `canUse(target)` | The **scan check**. It runs while V scans a person, and returns `true` (usable) or `false` (disabled). `disabledText` is what the player reads when it is disabled |
| `onLand(target, hack)` | Runs when the upload completes on a living person. It adds to what the hack does; it can't cancel it |

What your functions get:

| `target` | |
|---|---|
| `level`, `health`, `healthPercent` | As they were when the game asked. `healthPercent` is 0 to 100 |
| `isHuman`, `isBoss`, `isMechanical`, `isDrone`, `isAndroid`, `isElite`, `isCivilian` | What kind of person or machine |
| `damage(amount)` | Lowers its health by that many points, with V as the one who did it |
| `addEffect(effect)` | Puts a status effect on it from V, such as `'BaseStatusEffect.ContagionPoisonLvl2'` |
| `id` | Its entity id, for anything else through `api` |

| `hack` | |
|---|---|
| `tier` | Which item of your list this hack came from, counting from 1 |
| `action` | The hack's own record, such as `'QuickHack.OverheatLvl2Hack'` |
| `spread`, `byV` | In `onLand`: it reached this person by spreading; V uploaded it |

| Good to know | |
|---|---|
| "Checking..." | The game can't wait for your mod, so the hack shows locked with "Checking..." until `canUse` has replied. If no reply comes within about a second (your mod is off, or the function failed), the game's own result stands |
| Keep `canUse` quick | A check that reads only `target` is fastest. Each call to the game inside it costs about a frame |
| When your package stops | Your functions go, and every hack is the game's own again |
| One package per hack | A hack another package has already defined is refused |
| Limits | People only for now: devices are not covered. Hacks that reach a person by spreading were not run in REDnode's test, so `hack.spread` is untested |

The **Quickhack test** sample that comes with REDnode tries each case with buttons. More: REDnode's [Quickhack functions page](https://edgemodders.github.io/REDnode/quickhacks.html).

## Sound

| Want | Today |
|---|---|
| The game's own UI sounds | Works: `game.audio.play(name)`, or `sound` on UI kit buttons. See [Game sounds](https://edgemodders.ai/wiki/rednode/overlay-apps.html#game-sounds) |
| Your own audio files (WAV, OGG, MP3, FLAC) | Works: see below |
| Sound placed in the world, effects, voices | Planned |
| The game's own recordings and sound events | Experimental: `audio.playGame`, `audio.event`, `audio.searchSounds` and `audio.trace`, used by REDnode's optional Sound Tools pack |
| The rest of the game's audio system (parameters, radio) | Reachable through `api`, but untested beyond playing a sound |

### Your own audio files

Put the files in your package's folder and name them in the manifest:

```json
"sounds": {
  "alarm": { "file": "sounds/alarm.ogg", "volume": 0.8 },
  "theme": { "file": "sounds/theme.ogg", "category": "music", "loop": true, "fadeIn": 2000 },
  "click": "sounds/click.wav"
}
```

Then play them by name:

```js
import { audio } from 'rednode';

await audio.play('click');                               // once
const theme = await audio.play('theme');                 // with the manifest's settings
await theme.set({ fadeTo: { volume: 0.3, ms: 1000 } });  // quieter, over a second
await theme.stop({ fadeOut: 2000 });
```

You should hear your sound in the game, at the level of the game's own sounds. A file can also be played by its path in your package, with no manifest entry: `audio.play('sounds/ping.wav', { pan: -1 })`.

| Behaviour | |
|---|---|
| Volume | Each sound follows one of the game's volume sliders, by its `category`: `sfx` (if left out), `dialogue` or `music` |
| Menus | Sounds pause while a game menu is open. `pauseInMenu: false` keeps one playing |
| The game in the background | Sounds go quiet when the player's **Mute in background** setting is on |
| When your package stops | Its sounds stop |
| Settings | `volume`, `loop`, `delay`, `start`, `end`, `rate`, `semitones`, `pan` (-1 left to 1 right), `fadeIn`, in the manifest or in the call |
| A sound made while the game runs | Such as a spoken line from a speech service: write the file into your data folder and play it by its full path, `audio.play(path.join(pkg.dataDir, 'line-1.wav'), { category: 'dialogue' })` |
| The rest | `audio.playing()` lists your sounds, `audio.stopAll()` stops them |

The plan and its tests are on REDnode's [Sound API page](https://edgemodders.github.io/REDnode/sound.html). For replacing the game's own sounds, see [EDGEwave](https://edgemodders.ai/wiki/edgewave/).

## The controller

`input` hears the player's controller: which buttons are held and how far each trigger is pressed, at each change.

```js
import { input } from 'rednode';

let held = false;
input.onGamepad((pad) => {
  if (!held && pad.rt > 0.5) { held = true; console.log('right trigger down'); }
  if (held && pad.rt < 0.2) { held = false; console.log('right trigger up'); }
  if (pad.pressed.includes('y')) console.log('Y pressed');
});
```

| Call | Gives |
|---|---|
| `input.onGamepad(fn)` | Runs your function at each change: a button down or up, a trigger moving, the controller connected or gone. Gives back a function that stops listening |
| `input.gamepad()` | The last state heard |

| A state has | |
|---|---|
| `buttons`, `pressed`, `released` | The buttons held now, and those that went down or came up with this change, by their Xbox names: `a`, `b`, `x`, `y`, `lb`, `rb`, `ls`, `rs`, `up`, `down`, `left`, `right`, `start`, `back` |
| `lt`, `rt` | The triggers, from 0 (let go) to 1 (pressed all the way), in steps of about 1/16 |
| `connected` | False when the controller was unplugged or turned off |

| Good to know | |
|---|---|
| Which pads | Xbox pads, read through Windows' XInput. Sony's DualSense, DualSense Edge and DualShock 4, over USB or Bluetooth |
| It only reads | The game still gets every button, so give your own meaning to a button the game does nothing with at that moment. Sony pads keep their haptics, adaptive triggers and light bar |
| When | Changes come only while the game is in front |
| Try it | The **Controller test** sample, in the player zip, shows what REDnode reads from your controller and logs each press to the Mod log |

Keys and the game's own input actions are planned.

## The game's files through REDbridge

[REDbridge](https://edgemodders.ai/wiki/redbridge/) is EDGE's engine for the game's files, built on WolvenKit's code. It lists, searches and extracts the game's archives, turns game files into JSON and back, and textures into PNG. A package uses it with the `bridge` permission:

```json
"permissions": ["bridge"],
"requires": { "redbridge": ">=0.10" }
```

```js
import { kernel } from 'rednode';

const bridge = await kernel.bridge(); // fails until the player allows it, or if REDbridge isn't installed
const found = await bridge.call('archive.search', { query: 'player_ma_tpp', limit: 5 });
console.log(found.items.map((f) => f.name));
await bridge.call('archive.extract', { path: found.items[0].name, outFile: 'C:/temp/player.ent' });
```

You should see up to five file paths that contain `player_ma_tpp` in the Mod log, and the first of them copied out to `C:/temp/player.ent`.

| Good to know | |
|---|---|
| REDnode doesn't include REDbridge | If none is found, the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html) shows **Get REDbridge** on your package. It downloads REDbridge, and .NET 10 if missing, for the player's Windows user, with no admin rights |
| Why `requires` | With `"redbridge"` in `requires`, players see the button before your package runs |
| Other copies | A copy that [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or REDcode downloaded works too. The newest wins |
| Starting and stopping | One REDbridge serves every package. It starts on the first call, takes about three seconds to load the game's archive index, and stops after 10 minutes without calls |
| What you can call | The method names and their parameters are in [REDbridge's docs](https://edgemodders.github.io/REDbridge/) |

The **Packaging test** sample in REDnode's repo lists and searches the archives.

## Swapping archives into the running game

A tool that builds assets can show its result in the game without a restart. `archives.reload` swaps an `.archive` (or ArchiveXL's `.xl` or `.yaml`) into the running game and waits until it's done:

```js
import { archives } from 'rednode';

const r = await archives.reload(['C:/Projects/MyJacket/packed/archive/pc/mod/MyJacket.archive']);
console.log(`${r.reloaded.length} swapped in ${r.ms} ms`, r.failed);
```

| Good to know | |
|---|---|
| Needs | The `archives` permission. [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html), installed with REDnode, does the swap |
| When | In a loaded save, one swap at a time. At the main menu it's refused |
| Where it goes | It replaces the loaded archive of the same name and stays installed. A new one is added to `archive\pc\mod` |
| What V wears | Shows the new version straight away. Other objects already in the world keep the old version until they load again |
| Risk | A broken archive, or a mod missing its other parts, can crash the game at the swap |

What swaps and what doesn't, sound archives, and the player's side are on [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html). The same swap is the MCP tool `archives_reload`. Details for developers: [Swapping archives](https://edgemodders.github.io/REDnode/overlay-apps.html#swapping-archives-in-the-running-game).

## The game's own UI

The `ink` part of the package works with the game's own UI widgets, drawn by the game. It needs [Codeware](https://github.com/psiberx/cp2077-codeware) 1.16 or later and is experimental.

**Panels of your own** are written as ink markup and loaded with `ink.load`. That has its own guide: [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html).

**Reading the game's UI.** These calls only read, and need no permission. The [UI Workbench](https://edgemodders.ai/wiki/rednode/ui-tools.html) is built on them: try them there first, with no code.

| Call | Gives |
|---|---|
| `ink.layers()` | The game's UI layers, and each piece of the HUD with its controller (the script that drives it) |
| `ink.read(from, { depth, max })` | A tree of widgets in one call: class, name, visibility, box on screen, controller, text. With `props: true`, each widget's layout and look too (anchor, margins, size, tint, opacity, font size and weight, an image's atlas and part) |
| `ink.inspect(id)` | One widget in full: its path and parents, controllers, the `.inkwidget` file it came from, every property, and a reference for calling its own functions through `api` |
| `ink.at(x, y)` | The drawn widgets under a point, smallest first. The point is in the HUD's units |
| `ink.boxes()` | Every drawn widget's box in one call, for a page that highlights what is under the cursor |
| `ink.check(source)` | Checks ink markup without putting it on the UI: `null` when it has no mistakes, or the first mistake with its line and column |

```js
import { ink } from 'rednode';

const { hits } = await ink.at(200, 900);   // in the HUD's units
const w = await ink.inspect(hits[0].id);
console.log(w.path, w.controllers, w.properties.opacity);
```

**Changing the game's own widgets.** `ink.try(id, prop, value)` changes one property of one of the game's widgets live, and remembers the value it had, so `ink.reset()` can put it back. It is for packages the player allowed the `admin` permission, such as the UI Workbench.

| | |
|---|---|
| Properties | `visible`, `opacity`, `tint` (as `"#rrggbb"`), `size` and `translation` (as `[x, y]`), `margin` and `padding` (one number or four), and a text's `text` and `fontSize` |
| What it gives back | `{ was, now }`: the value before, and the value now |
| `ink.reset(id?, prop?)` | Puts back what was tried, newest first: everything, one widget's, or one property |
| `ink.tried()` | Lists what is still changed |
| When your package stops | REDnode puts back everything it tried. Nothing is ever kept in a save |

```js
const { hits } = await ink.at(1800, 300);
const r = await ink.try(hits[0].id, 'opacity', 0.3);
console.log(r.was, r.now); // the value before, and the value now
await ink.reset();
```

The UI Workbench's [Try](https://edgemodders.ai/wiki/rednode/ui-tools-try.html) does the same with fields and sliders. The full reference is REDnode's [Native game UI](https://edgemodders.github.io/REDnode/ink.html) page.
