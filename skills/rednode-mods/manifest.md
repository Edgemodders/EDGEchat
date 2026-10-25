<!-- Copied from REDnode's packages/overlay/README.md, "Apps, mods and manifests" at 00c1947 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in REDnode. -->

# Apps, mods and manifests

Every folder in the apps folder with a `rednode-app.json` is a package: an overlay app (`entry`), a Node mod (`main`) or both. In the repo the apps folder is [apps/](https://github.com/Edgemodders/REDnode/tree/main/packages/overlay/apps); for players it is `red4ext/plugins/REDnode/apps/` in the game folder.

```json
{
  "id": "native",
  "name": "Native button",
  "version": "0.1.0",
  "author": "Edgemodders",
  "description": "A borderless, game-style button and menu.",
  "entry": "index.html",
  "kind": "window",
  "width": 440,
  "height": 380,
  "anchor": "bottom-right",
  "x": -40,
  "y": -100,
  "open": true
}
```

| Field | Meaning |
|---|---|
| `id` | Unique, lowercase letters, digits, `-` and `_`. Saved positions and settings use it |
| `name`, `version`, `author`, `description` | Shown in the launcher |
| `entry` | An overlay app: the page to load, relative to the folder |
| `main` | A Node mod: the file to run, relative to the folder. Use `.mjs` for `import` syntax |
| `service` | Functions other packages may call (REDnode 0.34.0 and later): a `.mjs` or `.js` file whose exported functions are the package's service. It runs in the package's Node mod, after `main`; a package may have a service and no `main`. See [Mod services](overlay-apps.md#calling-other-packages) |
| `isolation` | Node mods: `process` makes the mod always run in its own process, so the player cannot put it in the shared group. Use it for mods with native addons |
| `permissions` | Powers the package asks for; the player allows each in the Mod Manager. `mcp` (the kernel MCP server's tools, through `kernel.mcp()`), `agent` (questions to the AI assistant), `bridge` (REDbridge, the game's files), `front` (staying above other packages' windows), `solo` (hiding the others' windows while it asks), `archives` (swapping archives while the game runs), `admin` (managing REDnode: the Task Manager's and Tools Manager's calls, through `admin`; the Mod Manager warns the player) |
| `provides` | Roles the host knows, which one package fills. Today `agent`: it answers other packages' `agent.ask` (REDagent) |
| `requires` | What the package needs, with a version range: game mods (`"codeware": ">=1.16"`, checked against the game folder), `"rednode"`, `"redbridge"`, or another REDnode package by its id. The Mod Manager shows what is missing before the package runs |
| `sounds` | Sound files the package plays by name with `audio.play`: `{ "alarm": "sounds/alarm.ogg" }`, or an object with `file` and options. `.wav`, `.ogg`, `.mp3` or `.flac` |
| `width`, `height` | Window size in page pixels, 1 to 4096. Needed with `entry` |
| `anchor` | `top-left` (default), `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom` or `bottom-right` |
| `x`, `y` | Offset from the anchor in reference pixels (1080p). `bottom-right` with x -40 is 40 px from the right edge |
| `kind` | `window` (default) or `hud`: drawn, but never takes input or focus, and cannot be dragged |
| `hideWith` | Game states that hide the window: `menu`, `photo-mode`, `scene`, `main-menu` |
| `open` | Whether the app is open, or the mod running, until the player changes it in the launcher |

A window the player has dragged keeps its saved position instead of the anchor. The launcher remembers which apps and mods are on, and which mods share a process. Both are kept in the host's user data folder, `%APPDATA%\@rednode\overlay`.
