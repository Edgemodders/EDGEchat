<!-- Copied from EDGEweb's docs/wiki/rednode/overlay-apps.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/overlay-apps.html (reviewed 2026-10-24) -->

# Overlay apps

An overlay app is a web page that REDnode draws on top of the game. If you can make a web page, you can make an in-game window: HTML for the content, CSS for the look, JavaScript for the behaviour. Any web framework works.

## How it works

| Part | What it does for your app |
|---|---|
| The overlay host, beside the game | Loads your page in Chromium (the engine inside Chrome), off screen, and sends each new picture of it to the game |
| The REDnode plugin, in the game | Draws your window, moves it when it's dragged, and passes mouse and keyboard to it in interactive mode |
| The `rednode` package | Your page's way to the game, the same as a Node mod's |

## Your first app

A folder in the apps folder with a manifest and a page.

`where-am-i/rednode-app.json`:

```json
{
  "id": "where-am-i",
  "name": "Where am I",
  "version": "0.1.0",
  "author": "you",
  "entry": "index.html",
  "width": 360,
  "height": 200,
  "anchor": "top-left",
  "x": 100,
  "y": 100,
  "open": true
}
```

`where-am-i/index.html`:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script src="rednode://ui/rednode-ui.js"></script>
<script type="importmap">{ "imports": { "rednode": "rednode://sdk/index.js" } }</script>
<style>
  html, body { margin: 0; width: 360px; height: 200px; background: transparent; }
  rn-window { position: absolute; inset: 6px; }
</style>
</head>
<body>
  <rn-window title="Where am I" draggable>
    <rn-button id="where">Where am I?</rn-button>
    <p id="out"></p>
  </rn-window>
  <script type="module">
    import { game } from 'rednode';
    document.getElementById('where').addEventListener('click', async () => {
      const p = await game.player.position();
      document.getElementById('out').textContent = `X ${p.x.toFixed(1)}  Y ${p.y.toFixed(1)}  Z ${p.z.toFixed(1)}`;
    });
  </script>
</body>
</html>
```

The first `<script>` loads the UI kit; the import map lets the page import `rednode` by name. Load a save, press F10 and click the button.

### Three rules

| Rule | Why |
|---|---|
| Keep the page background **transparent** | Transparent parts show the game, and clicks there pass through to what's behind |
| Make the page the **window's size** | Sizes are in pixels at 1080p. REDnode scales windows with the screen height: twice the size at 4K |
| **Don't draw a cursor** | REDnode draws it, at the game's frame rate |

Any element with the `data-rednode-drag` attribute is a drag handle. `<rn-window draggable>` makes its title bar one.

## The UI kit

The UI kit is a set of ready-made widgets in the EDGE HUD look, written as HTML tags. They work in plain HTML and inside React, Vue or anything else, and your page's CSS can't break them.

| Tag | Is |
|---|---|
| `rn-window` | A window with a title bar, close and the [title-bar buttons](https://edgemodders.ai/wiki/rednode/overlay.html#title-bar-buttons) |
| `rn-panel` | A titled section |
| `rn-button` | A button, with optional `sound` and `hover-sound` |
| `rn-toggle`, `rn-slider`, `rn-input` | Switch, slider, text field |
| `rn-list`, `rn-menu`, `rn-tabs` | Lists, menus and tabs |
| `rn-progress`, `rn-tooltip`, `rn-notification` | Progress bar, tooltip, pop-up message |

They work with the keyboard too: Tab between widgets, arrows in lists and menus, Enter to choose.

```html
<rn-window title="Weather control" draggable>
  <rn-toggle label="Freeze time"></rn-toggle>
  <rn-slider label="Rain" min="0" max="100" unit="%"></rn-slider>
  <rn-button>Apply</rn-button>
</rn-window>
```

(Screenshot on the wiki, "The UI kit": The UI kit sample window in the REDnode theme, showing buttons, toggles, a slider, a text field and tabs.)

### Themes

Windows follow the theme the player picks in the launcher: `rednode`, `hud` (HUD red, a look-alike of the game's UI) or `edge` (solid yellow title bars). To fix your app to one, set `theme` on the element, for example `<body theme="hud">`. The older names `game` and `yellow` still work.

### Looking like the game

Leave out the window and you get pieces that look like part of the game's UI. The **Native button** sample is a single game-style button on a transparent page, with a menu and a pop-up message. The game's own fonts and textures can't be shipped, so the `hud` theme rebuilds the look in CSS.

The full component reference is in the [UI kit README](https://github.com/Edgemodders/REDnode/tree/main/packages/ui).

## HUD widgets

Add `"kind": "hud"` to the manifest and the app becomes part of the HUD: drawn, but never focused, never dragged, and never in the way of a click. Add `"hideWith"` to hide it when the game shows something else:

```json
"kind": "hud",
"hideWith": ["menu", "photo-mode", "scene", "main-menu"],
"anchor": "top",
"x": 0,
"y": 14
```

| `hideWith` | Hides while |
|---|---|
| `menu` | A game menu is open: inventory, map, pause |
| `photo-mode` | Photo mode is on |
| `scene` | A cinematic scene plays. Which scenes count is still being confirmed |
| `main-menu` | The main menu and loading screens |

REDnode hides the window itself, in the same frame the game changes, so there's no lag. Any window can use `hideWith`, not only HUD widgets.

`anchor` with `x` and `y` keeps a widget at the same edge on any screen size and shape. Anchors are `top-left` (the default), `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom` and `bottom-right`.

## Game sounds

Overlay apps can play the game's own UI sounds, which mix with the game and follow its volume:

```html
<rn-button sound="ui_menu_onpress" hover-sound="ui_menu_hover">Apply</rn-button>
```

```js
RednodeUI.playSound('ui_jingle_quest_success');
```

Names confirmed in game include `ui_menu_onpress`, `ui_menu_hover`, `ui_menu_tutorial_close`, `ui_loot_take_all`, `ui_menu_item_bought` and `ui_jingle_quest_success`. An unknown name plays nothing. The UI kit sample's **Sound** tab is a quick way to try names. Your package can also play its own audio files: see [Sound](https://edgemodders.ai/wiki/rednode/game-api.html#sound).

## Talking to the game

Import `rednode` exactly as a Node mod does. Everything on [Game API and TweakDB](https://edgemodders.ai/wiki/rednode/game-api.html) works in a page: `game`, `api`, `tweakdb`, `world`, `audio`, `archives`, `secrets`, `kernel`, `agent`, and `service` to call other packages. A Node mod's `pkg.dataDir` and the file system are Node-only; pair your page with a mod for those (see [a page and a mod together](https://edgemodders.ai/wiki/rednode/node-mods.html#a-page-and-a-mod-together)).

Two events reach a page only through the older `window.rednode.on`: `focus` (your window gained or lost the keyboard; dim your title) and `overlay` (the mode changed: passive, interactive or hidden).

## The title bar

`rn-window` gives your window the standard title bar: **✕**, and up to three action buttons beside it (move to space, roll up, pin to HUD, reset position, debug), with **⋯** for the rest. See [title-bar buttons](https://edgemodders.ai/wiki/rednode/overlay.html#title-bar-buttons). To leave one out, add `no-space`, `no-rollup` or `no-debug`:

```html
<rn-window title="Speedometer" draggable no-rollup>...</rn-window>
```

Your package needs nothing to work with [spaces](https://edgemodders.ai/wiki/rednode/spaces.html): its windows join the space the player is in.

## Holding the cursor (pointer lock)

A 3D editor's camera turns while you hold a mouse button and move: the cursor must stay put while the movement keeps coming. Pages use the web's own Pointer Lock API for this, and REDnode does the holding in the game:

```js
pad.addEventListener('pointerdown', (e) => {
  if (e.button === 2) pad.requestPointerLock(); // right button
});
document.addEventListener('pointermove', (e) => {
  if (document.pointerLockElement === pad) turnCamera(e.movementX, e.movementY);
});
addEventListener('pointerup', (e) => {
  if (e.button === 2) document.exitPointerLock();
});
```

While locked, the cursor is hidden and stays where it was, and each movement arrives with `movementX` and `movementY`. The lock ends with `exitPointerLock()`, **Esc**, **F10**, or the window closing; `pointerlockchange` tells the page. Only the window in use can take the lock, and only in interactive mode. This passed its in-game test in REDnode 0.22.0. The **Pointer lock test** sample shows it.

## Good to know

- **Keep animation light.** Every repaint is copied to the game, at most 60 times a second. Many busy windows cost more.
- **Each open window is a Chromium page** using roughly 60 to 100 MB.
- **Hot reload** reloads your page when you save its files.
- **Tooltips:** the UI kit shows an element's `title` as a tooltip in the game (Chromium's own tooltips don't show in overlay windows). Players can switch them off.
- **Copying text:** use `ui.copy(text)` from the `rednode` package; a page's `navigator.clipboard` isn't reliable in overlay windows.
- The developer reference, with every tested example, is the [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html).
