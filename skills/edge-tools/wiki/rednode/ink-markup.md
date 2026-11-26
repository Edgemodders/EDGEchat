<!-- Copied from EDGEweb's docs/wiki/rednode/ink-markup.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/ink-markup.html (reviewed 2026-11-13) -->

# Native UI with ink markup

REDnode gives you two ways to put UI in front of the player. [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html) are web pages that REDnode draws **over** the game. **Native UI** is made of the game's own widgets, the same ones its HUD and menus use, so the game draws it **as part of** its UI. This page is about native UI, written as **ink markup**: an HTML-style file that lists the widgets and where your data goes.

*Ink* is the name of the game's UI system. A piece of ink UI is a tree of **widgets**: panels that hold other widgets, texts, images, shapes. The game spawns them, lays them out and draws them in its own fonts and colours.

| | Overlay app | Native UI (ink) |
|---|---|---|
| Drawn by | Chromium, beside the game, then put on top | The game itself, in its HUD |
| Looks like | Whatever CSS draws: the UI kit, or your own look | The game's own UI, in its fonts, colours and styles |
| Written in | HTML, CSS, JavaScript | Ink markup (`.ink.html`) and a Node mod's script |
| Takes clicks and typing | Yes, in interactive mode (F10) | Not yet |
| Needs | REDnode | REDnode 0.56.1 or later and [Codeware](https://github.com/psiberx/cp2077-codeware) 1.16 or later |

> **Status:** ink markup passed in game with the **Ink markup** sample. It is experimental, with two limits today. Panels go on the HUD only: menus and screens of your own are planned. And **panels can't be clicked yet**: put buttons and sliders in an overlay window that drives the panel, as the UI Workbench's template does. See [Events](https://edgemodders.ai/wiki/rednode/ink-markup.html#events-not-yet).

The optional [UI Tools](https://edgemodders.ai/wiki/rednode/ui-tools.html) pack's UI Workbench writes, checks and runs ink markup for you in the game, and can copy a piece of the game's own HUD into markup to start from. This page teaches the markup itself, so you can read and change what the Workbench writes.

| On this page | |
|---|---|
| [Your first panel](https://edgemodders.ai/wiki/rednode/ink-markup.html#your-first-panel) | Three files, and what you should see |
| [How a file is laid out](https://edgemodders.ai/wiki/rednode/ink-markup.html#how-a-file-is-laid-out), [The tags](https://edgemodders.ai/wiki/rednode/ink-markup.html#the-tags), [Attributes every tag takes](https://edgemodders.ai/wiki/rednode/ink-markup.html#attributes-every-tag-takes) | The markup, piece by piece |
| [Data: slots](https://edgemodders.ai/wiki/rednode/ink-markup.html#data-slots), [Lists](https://edgemodders.ai/wiki/rednode/ink-markup.html#lists), [Live game values](https://edgemodders.ai/wiki/rednode/ink-markup.html#live-game-values-bind) | Filling the panel with data |
| [Loading it from your script](https://edgemodders.ai/wiki/rednode/ink-markup.html#loading-it-from-your-script) | `ink.load` and the view it gives you |
| [Good to know](https://edgemodders.ai/wiki/rednode/ink-markup.html#good-to-know), [Learn from the samples](https://edgemodders.ai/wiki/rednode/ink-markup.html#learn-from-the-samples) | Limits, and where to look next |

**The quickest way to try any snippet on this page** is a UI Workbench project: make one, paste the markup into its left editor, press **Save**, and look at the HUD. The [tutorial](https://edgemodders.ai/wiki/rednode/ui-tools-tutorial.html) shows how, in 20 minutes.

## Your first panel

A native panel is a normal [Node mod](https://edgemodders.ai/wiki/rednode/node-mods.html) with one more file. Make a folder in REDnode's apps folder (or a [development folder](https://edgemodders.ai/wiki/rednode/settings.html#development-folders)) with three files.

`hello-panel/rednode-app.json`:

```json
{
  "id": "hello-panel",
  "name": "Hello panel",
  "version": "0.1.0",
  "main": "mod.mjs",
  "open": true,
  "requires": { "codeware": ">=1.16" }
}
```

`hello-panel/panel.ink.html`:

```html
<!-- A small panel at the left of the HUD. -->
<mount layer="hud" anchor="left" x="80" y="-60">
  <column gap="10">
    <text style="label">Hello, Night City</text>
    <text style="body" tone="dim">Level {level}</text>
  </column>
</mount>
```

`hello-panel/mod.mjs`:

```js
import { ink } from 'rednode';

// The file, its handlers (none yet: see Events), and its data.
const view = await ink.load('panel.ink.html', {}, { level: 1 });

// Change the data later: only the text that reads {level} is sent again.
setTimeout(() => view.set({ level: 2 }), 5000);
```

| Do | You should see |
|---|---|
| Load a save. You don't need F10: the game draws the panel on its HUD | A small panel at the left edge of the screen, a little above the middle: **HELLO, NIGHT CITY** in the game's own label style, and "Level 1" under it in grey |
| Wait five seconds | "Level 1" turns to "Level 2" |
| Switch the mod off in the Mod Manager | The panel goes: REDnode removes a mod's panels when it stops |

In the markup, `anchor="left" x="80" y="-60"` puts the panel at the left edge, 80 in and a little above the middle: `x` counts to the right and `y` counts down, so a minus `y` is up. `{level}` is a *slot*: the place where the script's data shows.

If nothing shows, open the Mod Manager (F10, then the launcher): a **NEEDS** badge on **Hello panel** means Codeware is missing or too old, and **CRASHED** means a mistake in a file, with its line in the Mod log.

(Screenshot on the wiki, "A first ink panel": The game's HUD with a small panel at the left: HELLO, NIGHT CITY in the game's red label style, and Level 2 under it in grey.)

**Try it:** with **Hot reload** on (the launcher's settings, behind the gear), change `Hello, Night City` to your own words and save the `.ink.html` file. The mod restarts and the panel comes back changed. A mistake in the file stops the mod and shows the file, line and column in the Mod log (see [Debugging](https://edgemodders.ai/wiki/rednode/debugging.html)), for example `panel.ink.html:4:11: style: "lable" is not one of: title, subtitle, heading, ...`.

## How a file is laid out

| Part | What it is |
|---|---|
| `<mount>` | Where the panel goes on the game's UI. It goes at the top of the file, never inside another tag. A file can hold several |
| Panels: `column`, `row`, `canvas`, `list` | Widgets that hold other widgets and lay them out |
| Leaves: `text`, `image`, `rect`, `circle`, `bar` | The widgets you see |
| `{name}` | A slot: the script's data goes there |
| `<!-- ... -->` | A comment, as in HTML |

Everything is checked when the file is read: an unknown tag or attribute, a style or tone that doesn't exist, a number that isn't one, a tag left open, or text outside a `<text>` is refused, with its line and column. Nothing is sent to the game unless the whole file is valid.

### The mount

Positions and sizes in ink markup are in the HUD's own units, not screen pixels. On the developer's 4K screen the HUD measured 3840 by 2160 units, so `x="80"` is about 2 % of the screen's width. Whether the numbers are the same at other resolutions is not confirmed: the UI Workbench's status line shows the size on your PC (`ink size ...`) after **Refresh**.

```html
<mount layer="hud" anchor="top-right" x="-40" y="120">
  <!-- the panel's widgets go here -->
</mount>
```

| Attribute | Means |
|---|---|
| `layer` | Which layer of the game's UI. Today only `hud` |
| `anchor` | The edge or corner it keeps to: `top-left`, `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom`, `bottom-right`, or `fill` |
| `x`, `y` | How far from the anchor: `x` to the right, `y` down. With `top-right`, `x="-40"` is 40 in from the right edge. With `left`, `y="-60"` is 60 above the middle |

## The tags

| Tag | Is | Holds |
|---|---|---|
| `column` | A panel that stacks its children top to bottom. `vbox` works too | Other tags |
| `row` | A panel that puts its children side by side. `hbox` works too | Other tags |
| `canvas` | A panel where each child places itself with `anchor`, `x` and `y` | Other tags |
| `text` | A text, in the game's fonts | Text and `{slots}` only |
| `image` | A picture from one of the game's atlases, or one of its icons | Nothing |
| `rect` | A filled rectangle | Nothing |
| `circle` | A filled circle | Nothing |
| `bar` | A bar that fills from 0 to 1, or from a game value | Nothing |
| `list` | One copy of its inner tag for each item of a list in the data | Exactly one tag |
| `widget` | Any other ink widget, by its class. For the rare widget the tags above don't cover, such as an outline: `<widget class="inkBorder" width="200" height="40" color="red" SetThickness="2" />`. An attribute with a capital letter calls that function of the widget | Other tags |

A `canvas` is for placing things freely, such as a label in each corner of a box:

```html
<canvas width="400" height="200">
  <text style="small" anchor="top-left">Top left</text>
  <text style="small" anchor="bottom-right">Bottom right</text>
  <rect width="12" height="12" tone="highlight" anchor="center" />
</canvas>
```

## Attributes every tag takes

| Attribute | Value | Does |
|---|---|---|
| `id` | A name | Lets the script find the widget with `view.get("name")` |
| `look` | `game` or `plain` | `game` styles the widget from the game's own style sheet; `plain` leaves it to your own attributes. You rarely write it: using a `tone` or a text `style` switches `game` on, and without either a widget is `plain` |
| `tone` | A tone, below | One of the game's colour roles |
| `color` | `#rrggbb`, `#rrggbbaa`, a name (`white`, `black`, `red`, `cyan`, `yellow`, `green`, `blue`, `grey`) or a game colour such as `MainColors.Yellow` | Its own colour. Wins over `tone` |
| `opacity` | 0 to 1 | How see-through |
| `visible` | `true` or `false`; `visible` alone is `true` | Shown or hidden |
| `width`, `height` | Numbers | Its size. Give both: one given alone leaves the other at 0. A `column`, `row` or `text` with neither takes the size of what it holds |
| `margin` | One number, or four: `left top right bottom` | Space around it |
| `anchor`, `x`, `y` | As on the mount | Where it sits in a `canvas` (a `column` or `row` places its children itself) |
| `align` | `left`, `center`, `right`, `top`, `bottom`, `fill` | In a `column`: left, centre or right. In a `row`: top, centre or bottom. `fill` stretches it |
| `grow` | A number | In a `column` or `row` that has a size: how much of the leftover space this widget takes. With `grow="1"` on one child, it stretches to fill the rest; with `grow="1"` and `grow="2"` on two, the second gets twice as much |

Panels (`column`, `row`, `canvas`, `list`) also take:

| Attribute | Does |
|---|---|
| `gap` | Space between the children |
| `pad` | Space inside, around the children: one number or four |
| `align` | How the children line up, unless a child says otherwise |

Attribute names with a dash work as written in camel case too: `text-align` and `textAlign` are the same.

### Text

`<text>` holds its text between its tags. (A `text="..."` attribute does the same; this page writes it between the tags.) It also takes:

| Attribute | Does |
|---|---|
| `style` | One of the game's text styles, below |
| `size` | The font size. Without it, the `style`'s size, or 32 when there is no style |
| `weight` | The font's weight, such as `Medium`, `Semi-Bold` or `Bold` |
| `case` | `upper`, `lower` or `original` |
| `text-align` | `left`, `center` or `right`, within the text's own width |
| `font` | A font family's path in the game's files; the game's Rajdhani if left out |
| `key` | One of the game's own text keys, so the game shows its own words in the player's language: `<text style="body" key="UI-ResourceExports-Inventory" />` shows "Inventory" in English. (On a `<list>`, `key` means something else: see [Lists](https://edgemodders.ai/wiki/rednode/ink-markup.html#lists)) |
| `bind`, `format`, `decimals` | Show a game value, read by the game every frame. See [Live game values](https://edgemodders.ai/wiki/rednode/ink-markup.html#live-game-values-bind) |

| Style | Size | Weight | Upper case |
|---|---|---|---|
| `title` | 70 | Semi-Bold | Yes |
| `subtitle` | 60 | Semi-Bold | Yes |
| `heading` | 50 | Semi-Bold | Yes |
| `body` | 42 | Medium | No |
| `label` | 38 | Medium | Yes |
| `value` | 42 | Semi-Bold | No, in the `accent` tone |
| `small` | 30 | Medium | No |
| `fluff` | 25 | Medium | Yes, faded like the HUD's small print |

### Tones

A tone is one of the game's colour roles, taken from its own style sheet, so your panel matches the HUD.

| Tone | The game's colour |
|---|---|
| `normal` | The HUD's red (the default for text styles) |
| `accent` | Blue |
| `highlight` | Yellow |
| `success` | Green |
| `warning` | The warning colour |
| `danger` | The bright alarm red |
| `dim` | Grey |
| `white` | White |
| `background` | The darkest background |

### Images, shapes and bars

| Tag | Attributes |
|---|---|
| `image` | `icon`: one of the game's icons, by its TweakDB record (the `UIIcon.*` records). Or `atlas` (the path of an `.inkatlas` file, a sheet of pictures) with `part` (the name of one picture on it). Give `width` and `height` too |
| `rect`, `circle` | Only the common ones: give `width`, `height` and a `tone` or `color` |
| `bar` | `value` (0 to 1), or `bind` with `of`; `track`, the tone behind the fill; `width` (300 if left out) and `height` (8) |

```html
<mount layer="hud" anchor="bottom-left" x="80" y="-200">
  <row gap="12" align="center">
    <rect width="12" height="12" tone="highlight" />
    <text style="small" tone="dim">Charge</text>
    <bar value="0.65" tone="accent" track="dim" width="240" height="8" />
  </row>
</mount>
```

An icon:

```html
<image icon="UIIcon.Assault_Area_02_Perk_1" width="64" height="64" tone="white" />
```

To find more: the game has thousands of `UIIcon.` records, which REDcode's [TweakDB browser](https://edgemodders.ai/wiki/redcode/tweakdb.html) lists. Or pick an icon on the game's HUD with the UI Workbench and press [To source](https://edgemodders.ai/wiki/rednode/ui-tools-to-source.html): the copy's `<image>` line carries that icon's `atlas` and `part`. A few records name a picture the game no longer has, and show nothing.

## Data: slots

A `{name}` in a text or an attribute reads the named data your script gives. The script never builds widgets itself: it changes data, and REDnode sends the game only the widgets that read what changed.

| Write | Reads |
|---|---|
| `{level}` | The data's `level` |
| `{player.name}` | A field: `name` of the data's `player` |
| `{.}` | Inside a list: the item itself |
| `{$index}` | Inside a list: the item's place, from 0 |

Rules worth knowing:

- **No expressions.** `{level + 1}` is refused. Work the value out in the script and give it a name.
- **A slot alone keeps its type.** A bar's `value` must be a number, so write `value="{fill}"` with nothing else inside the quotes: the number itself is passed. A slot with other characters around it, as in `<text>Level {level}</text>`, always makes text.
- **Literal braces.** {% raw %}`{{`{% endraw %} and {% raw %}`}}`{% endraw %} are the characters `{` and `}`. A lone `}` is refused.
- **Tones and visibility from data.** `tone="{tone}"` and `visible="{shown}"` work, so the script can turn a value red or hide a line by changing data.

```html
<mount layer="hud" anchor="left" x="80" y="-60">
  <column gap="10">
    <text style="label">{title}</text>
    <row gap="12" align="center">
      <bar value="{fill}" tone="{tone}" track="dim" width="240" height="8" />
      <text style="value" tone="{tone}">{level}%</text>
    </row>
    <text style="small" tone="dim" visible="{hot}">Running hot</text>
  </column>
</mount>
```

```js
const view = await ink.load('panel.ink.html', {}, { title: 'Heat', fill: 0.5, level: 50, tone: 'accent', hot: false });
view.set({ fill: 0.8, level: 80, tone: 'warning', hot: true });
```

## Lists

A `<list>` repeats one tag for each item of a list in the data. `items` names the list. `key` names the field that tells the items apart (here each contract's `id`), so REDnode can tell which item changed, moved or left. This `key` has nothing to do with a text's `key`.

```html
<mount layer="hud" anchor="top-right" x="-40" y="120">
  <column gap="6">
    <text style="title">Bounty board</text>
    <list items="contracts" key="id" gap="4">
      <row gap="12">
        <text style="body">{name}</text>
        <text style="value">{reward} &#8364;$</text>
      </row>
    </list>
  </column>
</mount>
```

```js
const board = await ink.load('board.ink.html', {}, { contracts: [] });
board.set({ contracts: [{ id: 1, name: 'Watson', reward: 1500 }, { id: 2, name: 'Kabuki', reward: 900 }] });
```

Inside the list, `{name}` reads the item's own field first, then the outer data. A list takes `direction="row"` to lay its items side by side (a column by default), and `gap` and `pad` like a panel. When the list changes, only the items that changed are sent: a new item adds widgets, a removed one takes its widgets away, and the others stay.

HTML entities work in texts: `&#8364;` is the euro sign, `&amp;` an ampersand, `&lt;` a `<`.

## Live game values (`bind`)

Some values change every frame, such as V's health. If your script read V's health and sent it to the panel, each update would arrive a frame or two late, and your script would be busy all the time. Instead, `bind` a text or a bar to the value: the game itself reads it each frame and changes the widget when what it shows changes. Your script sends nothing after the panel is loaded.

{% raw %}
```html
<mount layer="hud" anchor="left" x="80" y="200">
  <row gap="12" align="center">
    <text style="small" tone="dim">Health</text>
    <bar bind="player.health" of="player.healthMax" width="220" height="6" />
    <text style="small" tone="accent" bind="player.health" format="{{value}} HP" />
  </row>
</mount>
```
{% endraw %}

| Can be bound | |
|---|---|
| `player.health`, `player.healthMax` | V's health and its maximum |
| `player.stamina`, `player.memory` | 0 to 100 |
| `player.money`, `player.level`, `player.streetCred` | Eddies, level, Street Cred |
| `player.x`, `player.y`, `player.z` | V's position |
| `game.hour`, `game.minute` | The game's clock |

`format` says how the value shows: `{value}` stands for it, written {% raw %}`{{value}}`{% endraw %} in markup so it isn't read as a slot. `decimals` sets the decimals (0 by default). A bar's `of` is what the value is out of: a number, or another game value (100 if left out).

## Loading it from your script

| Call | Does |
|---|---|
| `await ink.load(file, handlers, data)` | Reads an `.ink.html` file from your package's folder and puts it on the game's UI. Mistakes name the file, line and column |
| `ink.parse(source, handlers, data)` | The same, from markup in a string |
| `ink.check(source)` | Checks markup without putting anything on the UI: `null` when the markup has no mistakes, or the first mistake with its line and column |
| `view.set(data)` | Changes some of the data. Only what reads a changed name is sent again |
| `view.data` | The data as it is now |
| `view.get(id)` | The widget with that `id` attribute. Its `set(...)` changes that one widget directly: `view.get('status').set({ color: 'red' })` |
| `view.unmount()` | Takes the panel away. REDnode also does this when the mod stops |

`ink.load` and `ink.parse` both give back a **view**: the object you use to change the panel's data or remove it. Both fail with an error you can catch when the markup has a mistake:

```js
import { ink } from 'rednode';

let view;
try {
  view = await ink.load('panel.ink.html', {}, { level: 1 });
} catch (err) {
  console.log(`The panel did not load: ${err.message}`); // panel.ink.html:7:11: ...
}
```

### Events: not yet

A native panel can't be clicked today. Put the controls the player uses in an overlay window, as the UI Workbench's template does with a slider in a [`ui` window](https://edgemodders.ai/wiki/rednode/node-mods.html#windows-without-html) that drives the panel.

You can already write an `on...` attribute, such as `onclick="track"`. It names a function of the **handlers**, the second argument of `ink.load`. REDnode checks that the function exists and refuses the markup if it doesn't, but nothing runs it yet: input on native panels is planned for a later REDnode release. The simplest course for now is to leave `on...` attributes out.

## Good to know

| | |
|---|---|
| A save load rebuilds the HUD | REDnode puts your panel back after each load by itself |
| Menus | Panels go on the HUD only for now. Menus and full screens of your own are planned |
| The game's own pieces | You can't change the game's own widgets from markup. The UI Workbench's [Try](https://edgemodders.ai/wiki/rednode/ui-tools-try.html) changes them live, never kept, to find what controls a look |
| Without Codeware | `ink.load` fails and says so. Add `"requires": { "codeware": ">=1.16" }` to your manifest so players see it in the Mod Manager |
| Building panels in code instead | Markup builds the same widgets as the `ink` functions (`ink.mount`, `ink.text`, `ink.bar`, `ink.list`), which you can call from code without any markup file |
| Text in the player's language | A text's `key` shows the game's own words. For your own translated text, see [Text in the player's language](https://edgemodders.ai/wiki/rednode/more-apis.html#text-in-the-players-language) |

## Learn from the samples

| Sample | Shows |
|---|---|
| **Ink markup** (comes with REDnode) | A HUD panel from `board.ink.html`: a health bar bound to V's health, a list of contracts, and buttons in an overlay window that add, rename and remove contracts with `set()`. **Broken markup** shows a refused file's message |
| **Ink Coords**, **Ink vitals** (come with REDnode) | Panels built with the `ink` functions in code instead of markup |
| A UI Workbench project's template | A slider in an overlay window driving a HUD panel live. See [Your first native HUD panel](https://edgemodders.ai/wiki/rednode/ui-tools-tutorial.html) |

The full reference, with every tag's properties and the design behind them, is REDnode's [Native game UI](https://edgemodders.github.io/REDnode/ink.html) page and the [`ink` API reference](https://edgemodders.github.io/REDnode/api/). The [example apps](https://edgemodders.github.io/REDnode/examples/) page shows the Ink markup sample running in a preview.
