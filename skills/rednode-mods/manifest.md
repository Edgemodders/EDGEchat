<!-- Copied from REDnode's packages/overlay/README.md, "Apps, mods and manifests" at 7e0d9ca 2026-10-23 by tools/sync-docs.mjs. Do not edit here: change it in REDnode. -->

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
| `isolation` | Node mods: `process` makes the mod always run in its own process, so the player cannot put it in the shared group. Use it for mods with native addons |
| `permissions` | Powers the package asks for, which the player allows in the launcher. Today `mcp`: the kernel MCP server's tools, through `kernel.mcp()` |
| `width`, `height` | Window size in page pixels, 1 to 4096. Needed with `entry` |
| `anchor` | `top-left` (default), `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom` or `bottom-right` |
| `x`, `y` | Offset from the anchor in reference pixels (1080p). `bottom-right` with x -40 is 40 px from the right edge |
| `kind` | `window` (default) or `hud`: drawn, but never takes input or focus, and cannot be dragged |
| `hideWith` | Game states that hide the window: `menu`, `photo-mode`, `scene`, `main-menu` |
| `open` | Whether the app is open, or the mod running, until the player changes it in the launcher |

A window the player has dragged keeps its saved position instead of the anchor. The launcher remembers which apps and mods are on, and which mods share a process. Both are kept in the host's user data folder, `%APPDATA%\@rednode\overlay`.
