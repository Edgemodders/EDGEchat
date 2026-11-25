<!-- Copied from EDGEweb's docs/wiki/rednode/tweakdb.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/tweakdb.html (reviewed 2026-11-13) -->

# TweakDB from code

[TweakDB](https://edgemodders.ai/wiki/glossary.html) is the game's database of tuning data: items, weapons, vehicles, characters, perks. Change a value in it and you change the game: a weapon's quality, a car's top speed, an item's name. The `tweakdb` part of the `rednode` package reads it and changes it while the game runs.

Two words you need:

| Word | Means | Example |
|---|---|---|
| **Record** | One thing in the database | `Items.Preset_Lexington_Default`, the Lexington pistol |
| **Flat** | One value of a record | `Items.Preset_Lexington_Default.quality` |

| | Needs | Status |
|---|---|---|
| [Reading](https://edgemodders.ai/wiki/rednode/tweakdb.html#reading) | Nothing | Passed in game |
| [Changing](https://edgemodders.ai/wiki/rednode/tweakdb.html#changing) | [TweakXL](https://github.com/psiberx/cp2077-tweak-xl) 1.10 or later | Passed in game |

New to calling the game? Read [The game API](https://edgemodders.ai/wiki/rednode/game-api.html) first: every call here needs `await`.

## Try it in the Console

Load a save, press **F10**, switch on the **Console** in the launcher, and type:

```js
await tweakdb.get("Items.Preset_Lexington_Default.friendlyName")
```

You should see `'w_handgun_militech_lexington'`: the pistol's internal name. Now a whole list:

```js
(await tweakdb.records("Vehicle")).length
```

You should see a number above a thousand: every vehicle record in the game.

## Reading

```js
import { tweakdb } from 'rednode';

await tweakdb.get('Items.Preset_Lexington_Default.friendlyName'); // a flat's value
await tweakdb.flat('Items.Preset_Lexington_Default.quality');     // the value with its type
const gun = await tweakdb.record('Items.Preset_Lexington_Default', 'WeaponItem');
await gun?.FriendlyName();                                        // a method of the record
await tweakdb.records('Vehicle');                                 // every vehicle record's id
```

| Call | Gives |
|---|---|
| `tweakdb.get(path)` | A flat's value, or `null` when there is no such flat |
| `tweakdb.flat(path)` | The value and its type, such as `{ type: 'TweakDBID', value: '0x...' }` |
| `tweakdb.record(path, type?)` | The record as a game object you can call methods on, or `null`. The type, such as `WeaponItem`, only tells your editor which methods it has |
| `tweakdb.records(type)` | The ids of every record of a type |
| `tweakdb.type(path)` | A record's type, or `null` |
| `tweakdb.id(path)` | Turns a path into its id, `"0x..."` |
| `tweakdb.name(id)` | Turns an id back into its path, when REDnode knows it |
| `tweakdb.learn(paths)` | Teaches REDnode paths it hasn't seen, so their ids come back readable |

**Why some results are `0x...` numbers.** A list such as `tweakdb.records('Vehicle')` comes back mostly as ids like `0x12ab34cd0e`, not readable paths. The game stores every record under a number made from its path, and doesn't keep the path. REDnode remembers each path your package has used, so those come back readable. Tell it more with `tweakdb.learn`:

```js
tweakdb.learn(['Quality.Common', 'Quality.Rare']);
await tweakdb.get('Items.Preset_Lexington_Default.quality'); // 'Quality.Common', now that the name is known
```

Both forms, path and id, work wherever a call takes one. To browse records and their real paths, use REDcode's [TweakDB browser](https://edgemodders.ai/wiki/redcode/tweakdb.html).

## Changing

Changes go through TweakXL, the community's standard for TweakDB edits, so they work beside every other TweakXL mod. List it in your manifest so players without it see what's missing:

```json
"requires": { "tweakxl": ">=1.10" }
```

```js
import { tweakdb } from 'rednode';

await tweakdb.set('Items.Preset_Lexington_Default.friendlyName', 'My Lexington');
await tweakdb.clone('Items.MyMod_Lexington', 'Items.Preset_Lexington_Default');
await tweakdb.set('Items.MyMod_Lexington.quality', 'Quality.Legendary');
await tweakdb.set('Items.MyMod_Lexington.tags', ['Weapon', 'MyMod'], { type: 'array:CName' });
```

| Call | Does |
|---|---|
| `tweakdb.set(path, value)` | Changes a flat and applies it. The flat keeps its own type |
| `tweakdb.set(path, value, { type })` | Adds a flat the record didn't have. A new flat needs its type, such as `'Float'` or `'array:CName'` |
| `tweakdb.clone(path, base)` | Makes a new record, copied from another |
| `tweakdb.create(path, type)` | Makes a new, empty record of a type |

An item's shown name and description (`displayName`, `localizedDescription`) are text keys: set them to a `"LocKey#..."` key, not to plain text.

Without TweakXL these calls fail with "Changing TweakDB needs TweakXL".

### Undone when your package stops

REDnode remembers each flat's value from before your package first changed it, and puts it back when the package stops: switched off, restarted, hot reloaded or crashed.

| This means | |
|---|---|
| Set your values every time your package starts | They are gone after each stop |
| Switching your mod off really removes its changes | Players can trust the switch |
| Records you clone or create stay until the game closes | TweakDB can't remove a record |

**Things already in the game may not follow.** An item V already carries, or a car already spawned, may keep the values it copied when it was made. Which ones do is not yet confirmed. If a change doesn't show, try a fresh object: a new item, or a save load.

### Try it: a legendary Lexington

Put the four lines of the example above in a Node mod (or type them in the Console, one by one), then give V the new pistol:

```js
await game.player.addItem('Items.MyMod_Lexington');
```

Look in V's inventory for a second Lexington, of legendary quality. Cloning and `addItem` each passed in game on their own; this exact pair has not been run in REDnode's tests, so tell us on Discord what you see.

## When code is the wrong tool

For fixed edits that never change while the game runs, TweakXL's own `.yaml` and `.tweak` files are simpler: no package, no code. Use `tweakdb` when the value depends on something (a slider, the time, what V is doing), or when a tool wants to show a change live.

Reading TweakDB with the game closed is planned for REDnode but not built. REDcode's [TweakDB browser](https://edgemodders.ai/wiki/redcode/tweakdb.html) already does it, through REDbridge.

The **TweakDB test** sample in REDnode's repo reads and changes the Lexington with buttons. The developer's notes and test results are on REDnode's [TweakDB page](https://edgemodders.github.io/REDnode/tweakdb.html).
