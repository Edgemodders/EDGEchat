<!-- Copied from EDGEweb's docs/wiki/rednode/settings.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/settings.html (reviewed 2026-10-24) -->

# Settings and controls

## Launcher settings

REDnode's settings are in the **Settings** drawer: press F10, open the launcher with the REDNODE tab, then press the gear at the right of the **Theme** row. The drawer opens beside the launcher, one setting a row with a line on what it does. REDnode saves them and remembers them across game starts.

(Screenshot on the wiki, "The Settings drawer": The REDnode launcher with the Settings drawer open beside it: GPU sharing, Hot reload, MCP server with Copy setup, Developer mode, Open at start and Tooltips.)

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| **GPU sharing** | on | Windows reach the game as shared GPU textures, with no copying of pixels. Off, they're copied through the CPU instead. Switching reopens every window | A window looks wrong (garbage, flicker, stale pictures). If GPU sharing fails, REDnode switches it off by itself for that session |
| **Hot reload** | off for players | Restarts a mod, or reloads an app's page, when its files change | You're making or editing a package, or REDagent is |
| **MCP server** | off for players | Lets Claude Code and other programs on your PC use REDnode's [MCP tools](https://edgemodders.ai/wiki/rednode/agents.html) | You want Claude Code to see and call the game |
| **Copy setup** | | Copies the command that adds REDnode to Claude Code | Once, after switching the MCP server on |
| **Developer mode** | off | A debug button on every window's title bar, and the **Development folders** list | You're [debugging](https://edgemodders.ai/wiki/rednode/debugging.html) or making a package |
| **Open at start** | on | Off: the game starts with only HUD widgets showing, until your first F10 | You want a clean screen at start |
| **Tooltips** | on | Hints when you hover a control, in every window | You know REDnode well and they get in the way |

The bottom of the launcher itself has:

| Setting | Default | What it does |
|---|---|---|
| **Space**: **New**, **Rename**, **Delete** | one space, Main | Your [spaces](https://edgemodders.ai/wiki/rednode/spaces.html) |
| **Theme**: **REDnode**, **HUD red**, **EDGE** | REDnode | The look of every UI kit window |

### Development folders

With **Developer mode** on, the Settings drawer lists **Development folders**: folders outside the game, such as your own project, whose packages run in the game with hot reload instead of their installed copies. Paste a folder's full path and press **Enter**; its packages start at once. A folder can be one package or hold several in subfolders. The Mod Manager marks such a package **DEV** and names the installed copy it hides. **Remove** takes a folder off the list. Folders are kept even with Developer mode off, but the list shows only with it on. REDagent may write inside these folders too, still showing you each change first.

Per package, in the launcher or the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html):

| Setting | Default | What it does |
|---|---|---|
| On or off | From the package (`open`) | Whether the app is open or the mod runs |
| **Pin to launcher** | Off for new packages | Lists the package in the launcher |
| **Pin to HUD** | Off for new packages | Keeps its windows on screen during gameplay |
| **Shared process** | Off | Runs the Node mod in one process with other shared mods, to save memory |
| **Allowed**, per permission | Off | Grants a permission the package asks for |
| Space | The space you were in when it first opened | Where its windows show |
| **Debug (Node inspector)** | Off, not saved | Runs the Node mod with Node's inspector for debugging |

## Keys

| Key | Where | Does |
|---|---|---|
| **F10** | In the game | Passive, interactive, hidden, and round again |
| **Esc** | Interactive mode | Back to passive. Ends a held cursor first |
| Click empty screen | Interactive mode | Back to passive |
| **Ctrl+1** to **Ctrl+9** | Overlay open | Switch [space](https://edgemodders.ai/wiki/rednode/spaces.html) |
| **Ctrl+C**, **Ctrl+V**, **Ctrl+X**, **Ctrl+A**, **Ctrl+Z** | The front window | Copy, paste, cut, select all, undo |

The F10 key can't be changed yet.

## Permissions

What a package can ask for in its manifest's `permissions`, and the name you see in the launcher:

| In the manifest | The launcher says it asks for | Gives |
|---|---|---|
| `mcp` | REDnode's tools for AI agents (the kernel MCP server) | `kernel.mcp()`: the [MCP tools](https://edgemodders.ai/wiki/rednode/agents.html#for-packages) for its own agent |
| `agent` | questions to the AI assistant (REDagent); each answer costs you a little | `agent.ask` |
| `bridge` | REDbridge, WolvenKit's engine: reads the game's archives and files, and can write files where the package asks | `kernel.bridge()` |
| `front` | staying above other packages' windows, with REDnode's own tools | The [tool layer](https://edgemodders.ai/wiki/rednode/spaces.html#the-tool-layer) |
| `solo` | hiding every other package's windows while it asks (solo mode) | `ui.solo()` |
| `archives` | swapping archives in the game's mod folder while the game runs (hot-loading, through RED Hot Tools) | `archives.reload()` |
| `admin` | managing REDnode: what every package costs, ending or restarting any package, and switching AI assistants' tools on and off | `admin`, as the [Admin Tools pack](https://edgemodders.ai/wiki/rednode/index.html#optional-packs) uses. The Mod Manager shows a warning under it |

## Manifest fields

Every field of `rednode-app.json`:

| Field | For | Means |
|---|---|---|
| `id` | All | Unique. Lowercase letters, digits, `-` and `_`. Settings and positions are saved under it |
| `name`, `version`, `author`, `description` | All | Shown in the launcher and Mod Manager |
| `main` | Node mods | The file to run, relative to the folder. `.mjs` for `import` syntax |
| `service` | Node mods | A `.mjs` or `.js` file whose exported functions other packages can call. See [Mod services](https://edgemodders.ai/wiki/rednode/making-mods.html#mod-services). A package may have a service and no `main` |
| `sounds` | All | The package's own sound files, played by name with `audio.play`: `{ "alarm": "sounds/alarm.ogg" }`. `.wav`, `.ogg`, `.mp3` or `.flac` |
| `entry` | Apps | The page to show, relative to the folder |
| `width`, `height` | Apps | Window size in pixels at 1080p, 1 to 4096. Needed with `entry` |
| `anchor` | Apps | `top-left` (default), `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom`, `bottom-right` |
| `x`, `y` | Apps | Offset from the anchor in 1080p pixels. With `bottom-right`, `x: -40` is 40 px in from the right edge |
| `kind` | Apps | `window` (default) or `hud`: drawn, never focused, never dragged |
| `hideWith` | Apps | Game states that hide the window: `menu`, `photo-mode`, `scene`, `main-menu` |
| `open` | All | Start open or running, until the player changes it |
| `isolation` | Node mods | `process`: always its own process, never shared. For mods with native addons |
| `permissions` | All | Powers to ask the player for (above) |
| `requires` | All | What it needs, with version ranges: game mods, `rednode`, `redbridge`, or another REDnode package by its id. See [Requirements](https://edgemodders.ai/wiki/rednode/making-mods.html#requirements) |
| `provides` | All | What it offers other packages. Today only `agent`, as REDagent does |

## Files and folders

| What | Where |
|---|---|
| REDnode | `red4ext\plugins\REDnode` in the game folder: `REDnode.dll`, `Scripts`, `host`, `apps` |
| Packages | `red4ext\plugins\REDnode\apps`, one folder each |
| Settings, positions, spaces, permissions, development folders, secrets, packages' data | `%APPDATA%\@rednode\overlay` |
| REDbridge, when **Get REDbridge** installed it | `%LOCALAPPDATA%\REDnode\bridge` |
| Logs | `red4ext\logs` in the game folder: `rednode-overlay.log` (and `rednode-overlay.prev.log`, the last session's), `rednode-mods.log`, the plugin's `rednode-*.log`, and `rednode-faults.log` around archive swaps |

The MCP server's port, 41820, can be changed as `mcp.port` in the host's `settings.json` in that folder. Close the game first.

## For developers: running the host by hand

From a REDnode checkout you can run the overlay host yourself instead of the packaged one, with switches the launcher doesn't have, such as several apps folders at once or a forced render path. Hot reload and the MCP server are then on by default. The options are in the [overlay host README](https://github.com/Edgemodders/REDnode/tree/main/packages/overlay). Only one host runs at a time: one you started first keeps the game's connection.
