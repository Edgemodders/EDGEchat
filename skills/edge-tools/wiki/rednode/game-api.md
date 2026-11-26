<!-- Copied from EDGEweb's docs/wiki/rednode/game-api.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/game-api.html (reviewed 2026-11-25) -->

# The game API

This page is about calling the game from your code: reading where V is, giving an item, calling any of the game's own functions. Everything here works the same in a [Node mod](https://edgemodders.ai/wiki/rednode/node-mods.html) and in an [overlay app](https://edgemodders.ai/wiki/rednode/overlay-apps.html).

One rule comes before all others: **put `await` before every call.** Each call travels to the game, runs there between two frames, and its result comes back a frame or two later. `await` waits for it. Without `await` you get a *promise* (a value that isn't there yet) and your next line runs before the game has replied. A call the game can't do fails with an error, which you catch with `try` and `catch`.

| On this page | |
|---|---|
| [Try it in the Console](https://edgemodders.ai/wiki/rednode/game-api.html#try-it-in-the-console) | Run a call in the game without writing a package |
| [The game helper](https://edgemodders.ai/wiki/rednode/game-api.html#the-game-helper) | Everyday calls: V's position, items, sounds, events |
| [Is V in the world?](https://edgemodders.ai/wiki/rednode/game-api.html#is-v-in-the-world) | Why calls fail at the main menu, and how to wait |
| [Calling any game function](https://edgemodders.ai/wiki/rednode/game-api.html#calling-any-game-function) | `api`, and [finding the function you need](https://edgemodders.ai/wiki/rednode/game-api.html#finding-a-function-to-call) |
| [How values look in JavaScript](https://edgemodders.ai/wiki/rednode/game-api.html#how-values-look-in-javascript), [Rules worth knowing](https://edgemodders.ai/wiki/rednode/game-api.html#rules-worth-knowing) | Reference for when a call surprises you |
| [Not yet](https://edgemodders.ai/wiki/rednode/game-api.html#not-yet) | What can't be done today |

## All the parts

The `rednode` package has more than fits on one page. This table is the map. "Passed in game" means REDnode's own test of that part passed in the running game.

| Part | Does | Needs | Status | Where |
|---|---|---|---|---|
| `game` | Everyday helpers | Nothing | Passed in game | [Below](https://edgemodders.ai/wiki/rednode/game-api.html#the-game-helper) |
| `api` | Any game function | Nothing | Passed in game | [Below](https://edgemodders.ai/wiki/rednode/game-api.html#calling-any-game-function) |
| `tweakdb` | Read TweakDB, the game's database of items and stats | Nothing | Passed in game | [TweakDB](https://edgemodders.ai/wiki/rednode/tweakdb.html) |
| `tweakdb` | Change TweakDB, undone when your package stops | [TweakXL](https://github.com/psiberx/cp2077-tweak-xl) 1.10 or later | Passed in game | [TweakDB](https://edgemodders.ai/wiki/rednode/tweakdb.html#changing) |
| <a id="placing-things-in-the-world"></a><a id="objects-far-from-v"></a><a id="scenes-and-whats-near-v"></a>`world` | Spawn, move and remove objects; load scenes; see what's near V | [Codeware](https://github.com/psiberx/cp2077-codeware) 1.14 or later | Passed in game | [The world](https://edgemodders.ai/wiki/rednode/world.html) |
| `world.pin` | Labelled pins over places and objects; moving V to one; pin sets in files | REDnode 0.59.1 or later; `goTo` and `pinSet` 0.65.3 | Passed in game | [The world](https://edgemodders.ai/wiki/rednode/world.html#pins) |
| `world.useWorkspot`, `world.writeWorkspot` | Animations on people you spawned: the game's workspots, and your own | Codeware; REDnode 0.67.3 or later. Writing your own also needs REDbridge and the `bridge` and `archives` permissions | Passed in game | [The world](https://edgemodders.ai/wiki/rednode/world.html#animations-on-people-you-spawn) |
| `world.weather`, `world.setWeather` | Read the weather, set and hold it, give it back | REDnode 0.67.3 or later | Passed in game | [The world](https://edgemodders.ai/wiki/rednode/world.html#weather) |
| `world.pick` | The world's own objects: find, outline and hide what the game placed | REDnode 0.67.3 or later | Experimental. Passed in game on static objects; not yet on objects placed as entities, such as street lamps | [The world](https://edgemodders.ai/wiki/rednode/world.html#the-worlds-own-objects) |
| `quests`, `journal` | Quest facts and journal entries | Nothing | Passed in game | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#quests-and-the-journal) |
| `t`, `loc` | Text in the player's language | Nothing | Passed in game | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#text-in-the-players-language) |
| `quickhacks` | Your own logic for a quickhack | REDnode 0.62.4 or later | Passed in game, except spreading hacks | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#quickhack-functions) |
| `audio`, `game.audio` | Your own audio files; the game's UI sounds | Nothing | Passed in game | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#sound) |
| `input` | The player's controller: Xbox and Sony pads | REDnode 0.65.3 or later | Passed in game | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#the-controller) |
| `kernel.bridge()` | The game's archives and files | [REDbridge](https://edgemodders.ai/wiki/redbridge/) and the `bridge` permission | Passed in game | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#the-games-files-through-redbridge) |
| <a id="swapping-archives-into-the-running-game"></a>`archives` | Swap changed archives into the running game | [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html), installed with REDnode, and the `archives` permission | Passed in game | [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#swapping-archives-into-the-running-game) |
| <a id="the-games-own-ui"></a>`ink` | The game's own UI: panels on the HUD, and reading the game's widgets | Codeware 1.16 or later | Passed in game. Experimental | [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html), [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html#the-games-own-ui) |

## Try it in the Console

REDnode's **Console** is a command line for the game. It is the quickest way to try any call on these pages before you put it in a package: the whole `rednode` package is ready in it, with no `import` lines.

1. Load a save and press **F10**.
2. In the launcher, switch on **Console**.
3. Type this at the bottom and press **Enter**:

```js
await game.player.position()
```

You should see V's position above the line you typed, something like `{ x: -1234.5, y: 987.6, z: 12.3 }`. Now try a change:

```js
await game.player.addItem("Items.money", 500)
```

V has 500 more eddies. See [Using the overlay](https://edgemodders.ai/wiki/rednode/overlay.html) for the Console's shortcuts and keys.

## The game helper

`game` holds the calls most mods need first.

```js
import { game } from 'rednode';

const p = await game.player.position();                // { x, y, z }, V's position
await game.audio.play('ui_menu_onpress');               // a game UI sound
await game.player.addItem('Items.Pants_01_basic_01');   // an item in V's inventory
game.on('PlayerPuppet.OnGameAttached', () => console.log('A save was loaded'));
const state = await game.state();                       // what the game is showing
```

| Call | Does | Status |
|---|---|---|
| `game.player.position()` | V's position. Fails at the main menu, where there is no V | Passed in game |
| `game.player.addItem(id, count?)` | Puts items in V's inventory by their TweakDB id. Fails for an id that doesn't exist, so a typo gives nothing | Passed in game |
| `game.player.removeItem(id, count?)` | Takes items out. Gives `true` if the game took any | Untested in the game |
| `game.player.getHealth()`, `game.player.setHealth(value)` | Reads and sets V's health, in health points | `setHealth` is untested in the game |
| `game.player.teleport({ x, y, z, yaw? })` | Moves V | Passed in game |
| `game.player.body()` | V's body from character creation, `"wa"` or `"ma"`, to pick the workspot or garment made for it. Since 0.70.0 | Passed in game |
| `game.audio.play(name)` | Plays one of the game's UI sounds. See [Game sounds](https://edgemodders.ai/wiki/rednode/overlay-apps.html#game-sounds) | Passed in game |
| `game.on(name, fn)` | Runs your function at a game event, such as a fight (`combat`, `npcDowned`, since 0.73.1). See [Listening to the game](https://edgemodders.ai/wiki/rednode/node-mods.html#listening-to-the-game) | Passed in game |
| `game.state()`, `game.onState(fn)` | What the game is showing. See [below](https://edgemodders.ai/wiki/rednode/game-api.html#is-v-in-the-world) | Passed in game |
| `game.language()` | The game's language, such as `fr-fr` | Passed in game |
| `game.instance` | Not a call: a value that stands for the game itself. Many game functions want it as their first argument | |

## Is V in the world?

Most of the game exists only while a save is loaded and V is in the world. At the main menu, while the game starts and during every load, there is no V, no weather, no quests. Calls that need them fail then with "V is not in the world yet". This is the most common reason a first mod "doesn't work": it ran before a save was loaded.

`game.state()` tells you what the game is showing:

```js
const s = await game.state();
if (s.world) console.log('V is in the world');
```

| Field | True while |
|---|---|
| `world` | V is in the world: a save has loaded and no other load has started |
| `mainMenu` | The main menu shows |
| `menu` | A game menu is open: inventory, map, pause |
| `pauseMenu` | The game's pause menu is open. REDnode 0.67.3 or later |
| `photoMode` | Photo mode is on |
| `scene` | A scene has taken control of V. Which scenes count is not yet confirmed |
| `connected` | REDnode is linked to the game. When it isn't, every field above is false |
| `overlay` | Not true or false: the overlay's mode, `"passive"`, `"interactive"` or `"hidden"` |

Mind the `await`: `game.state()` gives a promise, so write `(await game.state()).world`, not `game.state().world`.

To start work when V arrives and stop it when a load begins, use `game.onState`. It runs your function at every change, and once at the start with the state now:

```js
import { api, game } from 'rednode';

let timer;
game.onState((s) => {
  if (s.world && !timer) timer = setInterval(readWeather, 1000);     // V arrived
  if (!s.world && timer) { clearInterval(timer); timer = undefined; } // a load started, or the main menu
});

async function readWeather() {
  const weather = await api.GameInstance.GetWeatherSystem(game.instance);
  // ...
}
```

## Calling any game function

The game's own scripts are made of thousands of functions: give an item, read a stat, start an effect. `api` lets you call any of them by name. There are three kinds:

| Kind | What it is | You write |
|---|---|---|
| A global function | A function that belongs to no class, such as `GetPlayer` | `api.GetPlayer(...)` |
| A static function | A function of a class that you call on the class itself, such as `GameInstance.GetTransactionSystem` | `api.GameInstance.GetTransactionSystem(...)` |
| A method | A function of one game object, such as the transaction system's `GetItemQuantity` | `shop.GetItemQuantity(...)`, on an object an earlier call gave you |

All three in one example, which reads V's money and gives 100 eddies:

```js
import { api, game } from 'rednode';

const player = await api.GetPlayer(game.instance);                        // a global function
const shop = await api.GameInstance.GetTransactionSystem(game.instance);  // a static function
const money = await api.MarketSystem.Money();                             // a static function: the id of eddies
const eddies = await shop.GetItemQuantity(player, money);                 // a method of a game object
console.log(`V has ${eddies} eddies`);
await shop.GiveItem(player, money, 100);                                  // a change: 100 more
```

Paste the lines after `import` into the [Console](https://edgemodders.ai/wiki/rednode/game-api.html#try-it-in-the-console) one by one to watch each result. This is cut down from the **Vitals** and **Game API mod** samples, which passed in game.

Many game functions want the game itself as their first argument. `game.instance` is that value: pass it wherever the reference shows a `GameInstance` parameter, as in `api.GetPlayer(game.instance)`.

### Finding a function to call

Say you want V's money, and you don't know the game has a "transaction system".

| Way | How |
|---|---|
| Search the reference | REDnode's [game API reference](https://edgemodders.github.io/REDnode/game/) lists every class, function and enum of game version 2.5, with a search box. Search for a word you'd expect in the function's name, such as `ItemQuantity`. A function's page shows the class it belongs to (here the transaction system) and what it takes |
| Follow the chain | A system such as `TransactionSystem` is fetched with a static function of `GameInstance` named after it: `GameInstance.GetTransactionSystem`. Search the reference for the system's name to find its getter |
| Ask an assistant | [REDagent](https://edgemodders.ai/wiki/redagent/) in the game, or Claude Code with REDnode's [MCP server](https://edgemodders.ai/wiki/rednode/agents.html), can search the same reference and try the call for you: "How do I read V's money?" |
| Look at other mods | redscript and Cyber Engine Tweaks mods call the same functions. A call you find in one works through `api` |

The reference is built from the game's own type data, like the community's NativeDB site, and carries REDnode's notes on how things behave.

### More ways to call

| To | Use |
|---|---|
| Read a property of a game object | `await player.$get('quickSlotsManager')` |
| Write a property | `await mesh.$set('meshAppearance', 'default')` |
| Make a new game object | `await api.$new('entMeshComponent', { name: 'my_box' })` |
| Pass "no object" on purpose | `api.$null`. See the rules below |
| Call a function that writes its result into an argument | Pass `api.$out` in that argument's place. The call then gives `{ result, out }`: the function's own result, and what it wrote |
| Call a function by its full name, when several share a name | `api.$call('Cast;EntityID;StatsObjectID', id)`. Rarely needed: the reference shows the full names |

## How values look in JavaScript

| Game type | In JavaScript |
|---|---|
| Bool, whole numbers, Float, Double | `boolean`, `number` |
| Int64, Uint64 | `string`, because JavaScript numbers lose precision past 2^53 |
| CName (the game's type for a name), String | `string` |
| Enums | The member's name, such as `"Health"` |
| TweakDBID | `"0x..."`. A record path such as `"Items.money"` works as an argument |
| Structs (Vector4, ItemID...) | Plain objects, such as `{ X: 1, Y: 2, Z: 3, W: 0 }` |
| Game objects | References: handles you call methods on, with `await`. `null` when there is none |
| Resource references | A path such as `"base\\environment\\ld_kit\\marker.mesh"`, or its hash |

## Rules worth knowing

| Rule | |
|---|---|
| References stop working on a save load | A game object you hold stops working when the game deletes it or a save loads. Calls on it fail with "that game object no longer exists". Fetch fresh ones after `PlayerPuppet.OnGameAttached`: see [Listening to the game](https://edgemodders.ai/wiki/rednode/node-mods.html#listening-to-the-game) |
| Not while V is out of the world | At the main menu and during a load, functions that reach the world's systems (such as `GameInstance.GetWeatherSystem`) are refused with "V is not in the world yet". Some would crash the game. `GetPlayer` and `GetSettingsSystem` still work. See [Is V in the world?](https://edgemodders.ai/wiki/rednode/game-api.html#is-v-in-the-world) |
| Wrong arguments are refused | Arguments are checked against the function's types first. A wrong one fails with its name and type, and the game isn't touched |
| Right types, wrong moment | The checks catch wrong types, not wrong values. Calling a function at a moment the game doesn't expect can still crash it, as with any script mod |
| No plain `null` for a needed object | Many game functions crash when given no object. So a plain `null` is refused where the game doesn't mark the parameter optional, and the error names the parameter. Pass `api.$null` when you mean "no object" on purpose |
| `script_ref` parameters | The reference shows some parameters as `script_ref<String>`. Ignore the wrapper and pass the value itself: `api.GetLocalizedText("LocKey#10947")` |
| Names | Where the game wants a name (a CName), pass a plain string. Names the game gives back are strings too |
| Many calls at once | Each `await` waits a frame or two. To do many things in the same frame, start them all, then wait for them together (below). Up to 256 calls run per frame; the rest wait for the next frames |

One after another, ten moves take ten or more frames:

```js
for (const id of ids) await world.move(id, place);
```

Started together, they run in the same frame:

```js
await Promise.all(ids.map((id) => world.move(id, place)));
```

## Not yet

| Want | Status |
|---|---|
| Change what a game function does while it runs (multiply damage, cancel a call) | Not possible yet. It needs a part of REDnode that runs inside the game ([Tier 1](https://edgemodders.ai/wiki/glossary.html)), which is designed but not built. [Quickhack functions](https://edgemodders.ai/wiki/rednode/more-apis.html#quickhack-functions) are the one case that works today |
| Hear any game function being called, as an event | Planned |
| Read TweakDB with the game closed | Planned for REDnode. REDcode's [TweakDB browser](https://edgemodders.ai/wiki/redcode/tweakdb.html) already does it |
