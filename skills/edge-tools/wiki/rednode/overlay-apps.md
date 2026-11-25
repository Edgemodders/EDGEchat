<!-- Copied from EDGEweb's docs/wiki/rednode/overlay-apps.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/overlay-apps.html (reviewed 2026-11-21) -->

# Overlay apps

An overlay app is a web page that REDnode draws on top of the game. If you can make a web page, you can make an in-game window: HTML for the content, CSS for the look, JavaScript for the behaviour.

For UI that the game draws itself, in its own widgets on its HUD, see [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html) instead.

| On this page | |
|---|---|
| [Your first app](https://edgemodders.ai/wiki/rednode/overlay-apps.html#your-first-app) | Two files, and what you should see |
| [The UI kit](https://edgemodders.ai/wiki/rednode/overlay-apps.html#the-ui-kit) | Ready-made widgets, and how to read them from script |
| [HUD widgets](https://edgemodders.ai/wiki/rednode/overlay-apps.html#hud-widgets) | A read-out that stays on screen while you play |
| [Game sounds](https://edgemodders.ai/wiki/rednode/overlay-apps.html#game-sounds), [Talking to the game](https://edgemodders.ai/wiki/rednode/overlay-apps.html#talking-to-the-game), [Seeing errors](https://edgemodders.ai/wiki/rednode/overlay-apps.html#seeing-errors) | The rest of the basics |
| [Advanced](https://edgemodders.ai/wiki/rednode/overlay-apps.html#advanced) | The title bar, keys, holding the cursor, window sizes, frames |

## How it works

| Part | What it does for your app |
|---|---|
| REDnode's overlay host, a program beside the game | Loads your page in Chromium (the engine inside Chrome), off screen, and sends each new picture of it to the game |
| The REDnode plugin, in the game | Draws your window, moves it when it's dragged, and passes the mouse and keyboard to it in interactive mode (after **F10**) |
| The `rednode` package | Your page's way to the game, the same as a Node mod's |

## Your first app

You need REDnode [installed](https://edgemodders.ai/wiki/rednode/install.html) and a save to load. This app is a window with one button that says where V is.

**1. Make the folder.** In your game folder, open `red4ext\plugins\REDnode\apps` and make a new folder, `where-am-i`.

**2. Add the manifest.** In that folder, make a file `rednode-app.json`:

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

**3. Add the page.** Beside it, make a file `index.html`:

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

**4. See it in the game.**

| Do | You should see |
|---|---|
| Start the game and load a save. (If the game was already running, REDnode finds the new folder by itself) | Nothing yet: a new package's window shows only in interactive mode |
| Press **F10** | A window titled **Where am I** near the top left of the screen, with one button |
| Click **Where am I?** | A line under the button with three numbers: V's position |
| Drag the window by its title bar | It moves, and REDnode remembers the place |

(Screenshot on the wiki, "Where am I": The game in interactive mode with the Where am I window near the top left: its title bar, the Where am I? button and a line with V's X, Y and Z position.)

| If | Do this |
|---|---|
| There is no window after F10 | Open the launcher (the **REDNODE** tab at the lower left), open the **Mod Manager** and find **Where am I**. It has a **NEW** badge. Switch it on if it is off |
| The button does nothing | You may be at the main menu, where there is no V. Load a save. For any other reason, see [Seeing errors](https://edgemodders.ai/wiki/rednode/overlay-apps.html#seeing-errors) |
| You want the window while you play, or in the launcher | In the Mod Manager, press **Pin to HUD** or **Pin to launcher** in the package's details |

### What each part does

| Part | Does |
|---|---|
| `"entry"`, `"width"`, `"height"` in the manifest | The page to show, and the window's size |
| `"anchor": "top-left"`, `"x": 100`, `"y": 100` | Where the window starts: 100 right and 100 down from the top-left corner |
| `<script src="rednode://ui/rednode-ui.js">` | Loads the UI kit, which gives you `rn-window`, `rn-button` and the rest. REDnode serves it; there is nothing to download |
| `<script type="importmap">...` | Lets the page write `import { game } from 'rednode'`, as a Node mod does |
| `html, body { ... width: 360px; height: 200px; background: transparent; }` | Makes the page exactly as big as the manifest's window, and see-through where nothing is drawn |
| `rn-window { position: absolute; inset: 6px; }` | Stretches the window over the page, 6 pixels in from each edge |
| `<rn-window title="..." draggable>` | The window frame. `draggable` makes its title bar the handle to move it by |
| `await game.player.position()` | Asks the game where V is and waits for the reply |

### Three rules

| Rule | Why |
|---|---|
| Keep the page background **transparent** | Transparent parts show the game, and clicks there go through to whatever is behind |
| Give `body` the **same width and height as the manifest** | Design for a 1080p screen. REDnode scales the window with the screen's height, so at 4K it is drawn twice as big and takes the same share of the screen |
| **Don't draw a cursor** | REDnode draws it, at the game's frame rate |

Any element with the `data-rednode-drag` attribute is a drag handle. `<rn-window draggable>` makes its title bar one.

### Try it: change the page while the game runs

1. Press **F10**, open the launcher, click the gear, and switch on **Hot reload**. It is off by default.
2. In `index.html`, change the button's words to `Find V` and save.
3. Look at the game: the page reloads with the new words, in about a second.

## The UI kit

The UI kit is a set of ready-made widgets in the EDGE look, written as HTML tags. They work in plain HTML, and your page's CSS can't break them.

| Tag | Is |
|---|---|
| `rn-window` | A window with a title bar and a close button |
| `rn-panel` | A titled section |
| `rn-button` | A button. `variant="ghost"` is quiet, `variant="danger"` is red |
| `rn-select` with `rn-option` | A dropdown. Its list opens inside the page, and Esc closes it. Since REDnode 0.68.2 |
| `rn-toggle`, `rn-slider`, `rn-input` | A switch, a slider, a text field. `<rn-input clearable>` shows a **✕** in the field that empties it |
| `rn-list` with `rn-item`, `rn-menu` with `rn-menu-item`, `rn-tabs` with `rn-tab` | Lists, menus and tabs |
| `rn-progress`, `rn-tooltip`, `rn-notification` | A progress bar, a tooltip, a pop-up message |

They work with the keyboard too: Tab between widgets, arrows in lists and menus, Enter to choose. Every tag's attributes are in the [UI kit README](https://github.com/Edgemodders/REDnode/tree/main/packages/ui).

(Screenshot on the wiki, "The UI kit": The UI kit sample window in the REDnode theme, showing buttons, toggles, a slider, a text field and tabs.)

### Reading a widget from script

Each widget tells your script when the player changes it, with an ordinary event. The new value is in the event's `detail`:

| Widget | Event | The value |
|---|---|---|
| `rn-button` | `click` | |
| `rn-toggle` | `change` | `e.detail.checked`, or the widget's `checked` property |
| `rn-slider` | `input` while dragging, `change` when let go | `e.detail.value`, or its `value` property |
| `rn-input` | `input` as you type, `change`, and `submit` on Enter | `e.detail.value`, or its `value` property |
| `rn-list`, `rn-menu` | `select` | `e.detail.value`: the chosen item's `value` |
| `rn-tabs` | `change` | `e.detail.index`, `e.detail.label` |
| `rn-select` | `change` | `e.detail.value`, or its `value` property |

A small window that uses them. Put it in the `<body>` of a page like the first app's:

```html
<rn-window title="Weather control" draggable>
  <rn-toggle id="freeze" label="Freeze time"></rn-toggle>
  <rn-slider id="rain" label="Rain" min="0" max="100" value="35" unit="%"></rn-slider>
  <rn-button id="apply" sound="ui_menu_onpress">Apply</rn-button>
</rn-window>

<script type="module">
  const freeze = document.getElementById('freeze');
  const rain = document.getElementById('rain');

  rain.addEventListener('input', (e) => console.log('Rain while dragging:', e.detail.value));
  freeze.addEventListener('change', (e) => console.log('Freeze time:', e.detail.checked));

  document.getElementById('apply').addEventListener('click', () => {
    RednodeUI.notify(`Rain ${rain.value} %, freeze time ${freeze.checked ? 'on' : 'off'}`, { title: 'Weather', type: 'success' });
  });
</script>
```

Click **Apply** and a pop-up message shows the slider's and the switch's values, with the game's click sound. This example only shows the values: changing the game's weather is a job for the [game API](https://edgemodders.ai/wiki/rednode/game-api.html). The event names are from the UI kit's README; the **UI kit** sample that comes with REDnode uses them all.

### Themes

Windows follow the theme the player picks in the launcher: `rednode`, `hud` (HUD red, a look-alike of the game's UI) or `edge` (solid yellow title bars). To make your app always use one theme, whatever the player picked, set `theme` on `<body>` or on a single widget: `<body theme="hud">`.

### Looking like the game

Leave out the window and you get pieces that look like part of the game's UI. The **Native button** sample in REDnode's repo is a single game-style button on a transparent page, with a menu and a pop-up message. The game's own fonts and textures can't be shipped, so the `hud` theme rebuilds the look in CSS. For the game's real widgets, use [ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html).

### Using a library or framework

A page is a normal web page, so React, Vue or any other library works. The page loads files from your package's folder: put the library's built script file there and load it with a `<script src="...">` tag, as the UI Workbench does with its editor library in a `vendor` folder. If you use a bundler, point it at your package's folder and ship its output. There is no Node in a page: for files and npm packages that need Node, pair the page with a mod (see [A page and a mod together](https://edgemodders.ai/wiki/rednode/node-mods.html#a-page-and-a-mod-together)).

## HUD widgets

A HUD widget is an overlay app the player only looks at. Add `"kind": "hud"` to the manifest and the page is drawn on the HUD: it can't be focused, clicked or dragged, and it never gets in the way of a click. It is always on screen while you play, with no pin needed.

Here is a complete one, a strip at the top of the screen with V's position. It is the **Coords HUD** sample, cut down.

`rednode-app.json`:

```json
{
  "id": "my-coords",
  "name": "My coords",
  "version": "0.1.0",
  "entry": "index.html",
  "kind": "hud",
  "hideWith": ["menu", "photo-mode", "scene", "main-menu"],
  "width": 520,
  "height": 72,
  "anchor": "top",
  "x": 0,
  "y": 14,
  "open": true
}
```

`index.html`:

```html
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<script src="rednode://ui/rednode-ui.js"></script>
<script type="importmap">{ "imports": { "rednode": "rednode://sdk/index.js" } }</script>
<style>
  html, body { margin: 0; width: 520px; height: 72px; overflow: hidden; background: transparent; }
  .strip { position: absolute; left: 50%; top: 6px; transform: translateX(-50%); padding: 6px 18px;
    background: var(--rn-bg); color: var(--rn-fg); font: 600 15px var(--rn-mono); white-space: nowrap; }
</style>
</head>
<body theme="hud">
  <div class="strip" id="where">Waiting for V...</div>
  <script type="module">
    import { game } from 'rednode';

    async function update() {
      try {
        const p = await game.player.position();
        document.getElementById('where').textContent = `X ${p.x.toFixed(1)}   Y ${p.y.toFixed(1)}   Z ${p.z.toFixed(1)}`;
      } catch {
        // No V yet (main menu, loading): REDnode hides this widget then anyway.
      }
    }
    setInterval(update, 500);
    update();
  </script>
</body>
</html>
```

You should see a dark strip at the top middle of the screen while you play, with V's position changing as you walk. Open the map or the inventory and it hides; close it and it is back.

(Screenshot on the wiki, "A HUD widget": Normal gameplay, not interactive mode, with the My coords strip at the top middle of the screen showing V's X, Y and Z position.)

`hideWith` says when the game should hide the widget:

| `hideWith` | Hides while |
|---|---|
| `menu` | A game menu is open: inventory, map, pause |
| `photo-mode` | Photo mode is on |
| `scene` | A cinematic scene plays. Which scenes count is still being confirmed |
| `main-menu` | The main menu and loading screens |

REDnode hides the window itself, in the same frame the game changes, so there's no lag. Any window can use `hideWith`, not only HUD widgets.

`anchor` with `x` and `y` keeps a widget at the same edge on any screen size and shape. Anchors are `top-left` (the default), `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom` and `bottom-right`. With `top`, `y: 14` is 14 down from the top edge; with `bottom-right`, `x: -40` is 40 in from the right edge.

## Game sounds

Overlay apps can play the game's own UI sounds, which mix with the game and follow its volume:

```html
<rn-button sound="ui_menu_onpress" hover-sound="ui_menu_hover">Apply</rn-button>
```

```js
RednodeUI.playSound('ui_jingle_quest_success');
```

Names confirmed in game include `ui_menu_onpress`, `ui_menu_hover`, `ui_menu_tutorial_close`, `ui_loot_take_all`, `ui_menu_item_bought` and `ui_jingle_quest_success`. An unknown name plays nothing and is not an error. The **UI kit** sample's **Sound** tab is a quick way to try names. Your package can also play its own audio files: see [Sound](https://edgemodders.ai/wiki/rednode/more-apis.html#sound).

## Talking to the game

Import `rednode` exactly as a Node mod does. Everything on the [Game API](https://edgemodders.ai/wiki/rednode/game-api.html) pages works in a page: `game`, `api`, `tweakdb`, `world`, `audio`, `archives`, `quests`, `loc`, `secrets`, `kernel`, `agent`, and `service` to call other packages. From `ui`, a page can use `ui.copy` and `ui.solo`; `ui.window` and the other building blocks are for Node mods, since a page is its own window.

**A page can't read or write files.** `pkg.dataDir` and Node's file functions exist only in a Node mod. Give your package a mod or a service file for the file work: see [A page and a mod together](https://edgemodders.ai/wiki/rednode/node-mods.html#a-page-and-a-mod-together).

Two things REDnode tells a page through `window.rednode.on`: whether your window has the keyboard, and which mode the overlay is in.

```js
window.rednode.on((m) => {
  if (m.event === 'focus') console.log('has the keyboard:', m.focused);  // true or false
  if (m.event === 'overlay') console.log('mode:', m.mode);                // passive, interactive or hidden
});
```

Use `focus` to dim your title when another window has the keyboard, and `overlay` to pause work nobody can see.

## Seeing errors

A page's `console.log` lines and its errors go to the page's own console, as in a browser. To see it in the game:

1. In the launcher's settings (the gear), switch on **Developer mode**.
2. Your window's title bar now has a debug button. It opens Chromium's DevTools for your page, as a window in the game: the Console tab shows your lines and errors.

See [Debugging](https://edgemodders.ai/wiki/rednode/debugging.html) for the rest: inspecting elements, breakpoints, and the same tools on the desktop.

## Advanced

You can make a good app without anything below. Come back when you need it.

### The title bar

`rn-window` gives your window the standard title bar: **✕**, and up to three action buttons beside it (move to space, roll up, pin to HUD, reset position, key binding, debug), with **⋯** for the rest. [Using the overlay](https://edgemodders.ai/wiki/rednode/overlay.html) shows them from the player's side. To leave one out, add `no-space`, `no-rollup`, `no-key` or `no-debug`:

```html
<rn-window title="Speedometer" draggable no-rollup>...</rn-window>
```

A page can add buttons of its own next to **✕** by setting the window's `titleButtons` from script (REDnode 0.58.0 or later). Each has an `id`, a `label`, an `icon`, `on` to light it and an `onClick`, as [in a Node mod](https://edgemodders.ai/wiki/rednode/node-mods.html#title-bar-buttons-and-views). Your buttons take the first of the three places, and the window's own buttons move into **⋯**:

```js
document.querySelector('rn-window').titleButtons = [
  { id: 'settings', label: 'Settings', icon: 'settings', onClick: () => openSettings() },
];
```

Your package needs nothing to work with [spaces](https://edgemodders.ai/wiki/rednode/spaces.html): its windows join the space the player is in.

### Keys, modifiers and double-clicks

Keys and the mouse reach the window in use much as in a browser:

| What | How it works |
|---|---|
| Ctrl, Shift and Alt on the mouse | Clicks, moves and the wheel carry `ctrlKey`, `shiftKey` and `altKey`, so Ctrl+click, Shift+drag and Alt+click work |
| Edit keys | Ctrl+Z, Ctrl+Y, Ctrl+Shift+Z, Ctrl+A, Ctrl+C, Ctrl+V and Ctrl+X arrive as `keydown` events. A text field edits as usual. A page with its own undo or copy takes the key with `preventDefault()` |
| Double-clicks | Two presses of the same button within 450 ms and 6 px count as a double-click, so `dblclick` works: a text field selects a word |
| Esc | Esc normally leaves interactive mode, so a page never hears it. A page in the middle of something (a drag, a pick, a move) can ask for it with the web's Keyboard Lock API. While it has the keyboard, Esc then comes to it as a key. F10 always leaves interactive mode, so the player is never stuck |

```js
async function startMove() {
  await navigator.keyboard.lock(['Escape']); // Esc now comes to this page
  moving = true;
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && moving) cancelMove();
});
function endMove() {
  moving = false;
  navigator.keyboard.unlock(); // Esc leaves the overlay again
}
```

The UI Workbench's Pick uses this: Esc ends a pick and leaves you in interactive mode. The **Input test** sample in REDnode's repo shows all of these. Details: [Keys and modifiers](https://edgemodders.github.io/REDnode/overlay-apps.html#keys-and-modifiers).

### An app's key

Players can give any app a key of its own ([App keys](https://edgemodders.ai/wiki/rednode/overlay.html#app-keys)). Your app needs no code for it, and the key never changes your app's state: an editor stays in its edit mode while it is hidden. To react, for example to end a drag when the player hides the window, use `ui.onAppKey`, in a page or a Node mod:

```js
import { ui } from 'rednode';

ui.onAppKey((shown) => {
  if (!shown) endDrag();
});
```

A page with `"fill": "screen"` isn't hidden by its key: the page stays, with the cursor, and only its `rn-window` panels hide, which the UI kit does for you. A page that draws panels of its own, outside `rn-window`, hides them when `panels` is true:

```js
ui.onAppKey((shown, panels) => {
  if (panels) toolbar.hidden = !shown;
});
```

Every `rn-window` of your app offers **Key binding…**; `<rn-window no-key>` leaves it out of that window's menu. REDnode 0.67.3 or later. Details: [An app's key](https://edgemodders.github.io/REDnode/overlay-apps.html#an-apps-key).

### Holding the cursor (pointer lock)

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

While locked, the cursor is hidden and stays where it was, and each movement arrives with `movementX` and `movementY`. The lock ends with `exitPointerLock()`, **Esc**, **F10**, or the window closing; the `pointerlockchange` event tells the page. Only the window in use can take the lock, and only in interactive mode. It passed in game; the **Pointer lock test** sample in REDnode's repo shows it.

### Window size and the whole screen

| Manifest | What the player gets | What you must do | Since |
|---|---|---|---|
| `"resizable": true`, with `minWidth` and `minHeight` | A grip in the window's bottom-right corner to resize it, as the Mod Manager has. REDnode remembers the size, and **Reset position and size** in the title bar goes back to the manifest's | Size your page with `100vw` and `100vh`, not fixed pixels, so it follows | 0.49.5 |
| `"fill": "screen"` | A page that covers the whole game view, whatever the screen's shape | Lay the page out from its width: it is always 1080 high, and as wide as the view (1920 at 16:9, 2580 at 21:9, 3840 at 32:9). A `<rn-window draggable>` on it moves inside the page | 0.50.2 |
| `<rn-window draggable resizable min-width="..." min-height="...">` on a `fill` page | A window that resizes inside the page by its corner grip, down to its minimum (320 by 200 if not set) | Give the window a height and let its content fill it | 0.56.1 |

Use `"fill": "screen"` for a tool that draws over the whole game view while most of the page stays see-through. The UI Workbench does: it outlines widgets anywhere on screen, and its own window is a resizable `rn-window` on that page.

All three passed in game. The **Fill test** sample in REDnode's repo shows a full-view page. Details in the guide: [Resizable windows](https://edgemodders.github.io/REDnode/overlay-apps.html#resizable-windows), [A page that covers the whole game view](https://edgemodders.github.io/REDnode/overlay-apps.html#a-page-that-covers-the-whole-game-view).

### Frames from another address

A page can show another page in an `<iframe>`: one served by a program on the player's PC at `http://127.0.0.1:<port>` (a tool's own web UI, say), another site, or a sandboxed frame. The frame gets real input in the game: clicks, the wheel, hover, drags and typing. That holds even when the frame is scaled with CSS or sits inside another frame. It needs REDnode 0.50.2 or later, and passed in game with the **Frame test** sample. See [Frames from another address](https://edgemodders.github.io/REDnode/overlay-apps.html#frames-from-another-address).

## Good to know

- **Keep animation light.** Every repaint is copied to the game, at most 60 times a second. Many busy windows cost more.
- **Each open window is a Chromium page** using roughly 60 to 100 MB.
- **Tooltips:** the UI kit shows an element's `title` as a tooltip in the game (Chromium's own tooltips don't show in overlay windows). Players can switch them off.
- **Copying text:** use `ui.copy(text)` from the `rednode` package (`import { ui } from 'rednode'`, then `await ui.copy('some text')`). A page's `navigator.clipboard` isn't reliable in overlay windows.
- The developer reference, with every tested example, is the [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html).
