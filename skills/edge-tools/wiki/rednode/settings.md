<!-- Copied from EDGEweb's docs/wiki/rednode/settings.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/settings.html (reviewed 2026-11-25) -->

# Settings and controls

Every switch REDnode has, and where it keeps its files. The first half is for everyone; the second is reference for people who make packages.

| For everyone | |
|---|---|
| [Launcher settings](https://edgemodders.ai/wiki/rednode/settings.html#launcher-settings) | The Settings drawer, behind the gear |
| [Per-package settings](https://edgemodders.ai/wiki/rednode/settings.html#per-package-settings) | What you can set for each package |
| [Shared keys](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys) | Your AI service keys, set once for every EDGE tool |
| [Keyboard shortcuts](https://edgemodders.ai/wiki/rednode/settings.html#keyboard-shortcuts) | F10, Esc and the rest |
| [Files and folders](https://edgemodders.ai/wiki/rednode/settings.html#files-and-folders) | Where everything is kept |

| For mod makers | |
|---|---|
| [Development folders](https://edgemodders.ai/wiki/rednode/settings.html#development-folders) | Run a package from your own project folder |
| [Permissions in a manifest](https://edgemodders.ai/wiki/rednode/settings.html#permissions-in-a-manifest) | What a package can ask for |
| [Manifest fields](https://edgemodders.ai/wiki/rednode/settings.html#manifest-fields) | Every field of `rednode-app.json` |
| [Advanced: settings.json](https://edgemodders.ai/wiki/rednode/settings.html#advanced-settingsjson) | Settings that have no switch |
| [Running the host by hand](https://edgemodders.ai/wiki/rednode/settings.html#running-the-host-by-hand) | For work on REDnode itself |

## Launcher settings

REDnode's settings are in the **Settings** drawer: press F10, open the launcher with the REDNODE tab, then press the gear at the right of the **Theme** row. The drawer opens beside the launcher, one setting a row with a line on what it does. REDnode remembers them across game starts.

(Screenshot on the wiki, "The Settings drawer": The REDnode launcher with the Settings drawer open beside it: GPU sharing, Hot reload, MCP server with Copy setup, Developer mode, Open at start and Tooltips.)

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| **Keys** | | Opens the Keys panel beside the drawer. See [Shared keys](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys) | You set up REDagent, or another tool that uses an AI service |
| **GPU sharing** | on | How REDnode's windows get onto the game's screen. On is the fast way. Off is a slower, safer way. Switching closes and reopens every window | Windows flicker, show garbage or stop updating. If the fast way fails, REDnode switches it off by itself for that session |
| **Hot reload** | off | Restarts a mod, or reloads an app's page, when its files change | You're making or editing a package, or REDagent is |
| **MCP server** | off | Lets Claude Code and other programs on your PC use REDnode's [tools](https://edgemodders.ai/wiki/rednode/agents.html). If another program is using REDnode's port, a line under the switch names it | You want Claude Code to see and call the game |
| **Copy setup** | | Copies a command that adds REDnode to an assistant with a fixed token | Your assistant can't sign in the usual way. Claude Code can: see [Connect Claude Code](https://edgemodders.ai/wiki/rednode/agents.html#connect-claude-code) |
| **Connected assistants** | | The assistants you allowed in the game, each with **Revoke** | You want to cut one off. It then has to ask again |
| **Developer mode** | off | Adds a debug button to every window's title bar, and shows the [Development folders](https://edgemodders.ai/wiki/rednode/settings.html#development-folders) list | You're [debugging](https://edgemodders.ai/wiki/rednode/debugging.html) or making a package |
| **Open at start** | on | On: the REDNODE tab and your HUD-pinned windows show as soon as the game starts. Off: the game starts with only HUD widgets showing, and the tab and pinned windows wait for your first F10 | You want a clean screen at start |
| **Tooltips** | on | Hints when you hover a control, in every window | You know REDnode well and they get in the way |
| **Versions in title bars** | on | Each app's version, dimmed, beside its window's title (since 0.68.2) | You report a bug and want the version at a glance, or you'd rather not see it |
| **Hide on a click in the game** | off | A click outside REDnode's windows hides all of REDnode, HUD widgets and windows pinned to the HUD too, instead of going back to passive mode. Press F10 to bring it back (since 0.69.0) | You're testing and need the whole screen. Switch it off again for your usual setup |
| **Hide in the pause menu** | on | Hides REDnode's windows, HUD widgets and tab while the game's pause menu is open. They come back as they were when it closes, and F10 still brings REDnode up there. See [In the pause menu](https://edgemodders.ai/wiki/rednode/overlay.html#in-the-pause-menu) | You want your windows on screen in the pause menu |

The bottom of the launcher itself has:

| Setting | Default | What it does |
|---|---|---|
| **Space**: **New**, **Rename**, **Delete** | one space, Main | Your [spaces](https://edgemodders.ai/wiki/rednode/spaces.html) |
| **Theme**: **REDnode**, **HUD red**, **EDGE** | REDnode | The [look](https://edgemodders.ai/wiki/rednode/overlay.html#themes) of every UI kit window |

## Per-package settings

For each package, in the launcher or the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html):

| Setting | Default | What it does |
|---|---|---|
| On or off | Whatever the package's author chose. The samples start off | Whether the app is open or the mod runs |
| **Pin to launcher** | Off for packages installed after REDnode | Lists the package in the launcher |
| **Pin to HUD** | Off for packages installed after REDnode | Keeps its windows on screen during gameplay |
| **Shared process** | Off | Runs the Node mod in one process with other shared mods, to save memory |
| **Allowed**, per permission | Off | Grants a [permission](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions) the package asks for |
| **Allowed**, per call | Off | Lets the package call another mod's tool that changes something. See [Calls](https://edgemodders.ai/wiki/rednode/mod-manager.html#calls) |
| **Key** | None | For an app: a key that shows only it, or hides it. See [App keys](https://edgemodders.ai/wiki/rednode/overlay.html#app-keys) |
| Space | The space you were in when it first opened | Where its windows show |
| **Debug (Node inspector)** | Off, not saved | For mod makers: runs the Node mod so a [debugger](https://edgemodders.ai/wiki/rednode/debugging.html#the-node-debugger) can connect |

## Shared keys

Tools that use an AI service need your own **API key** for it: a long password that lets a program use the service on your account. REDagent needs an Anthropic key, for example. You set each key once, in the game, and every EDGE tool on your PC that supports shared keys can read it, after you allow it.

Don't have a key yet? [Get an Anthropic API key](https://edgemodders.ai/wiki/redagent/install.html#1-get-an-anthropic-api-key) shows how, and what it costs.

Open the Settings drawer and press **Open** on the **Keys** line: the Keys panel slides out beside it.

(Screenshot on the wiki, "The Keys panel": The launcher's Settings drawer with the Keys panel open beside it: an Anthropic line showing four dots and the key's last four characters with Used by REDagent, other services Not set with Set, and Other service id at the bottom.)

The panel has a line for each service EDGE tools know: Anthropic, Google Gemini, OpenAI, ElevenLabs and Tripo (a 3D service EDGEmat uses). You can set a key before any tool asks for it.

| A line shows | Means |
|---|---|
| `•••• abcd` | Set: the key's last 4 characters. The key itself is never shown again |
| From `GEMINI_API_KEY` | An environment variable on your PC holds the key, and wins over the saved one |
| Unreadable here | Saved by another Windows user or on another PC: set it again |
| Not set | No key yet |
| Used by ... | The tools that have read it |

| Button | Does |
|---|---|
| **Set**, **Replace** | Opens a box that shows dots: paste the key and press Enter. A key that doesn't look right for its service is refused: an Anthropic key starts with `sk-ant-`, an OpenAI key with `sk-` |
| **Remove** | Removes the key for every tool. It asks once more first |
| **Other service id** | Adds a line for a service not in the list |

Keys are kept encrypted for your Windows account, one file per service, in `%APPDATA%\Edgemodders\keys`.

A package can read a key only when it asks for that key's permission and you allow it. A package that needs a key you haven't set can ask REDnode to show its **Key request** window. You paste the key into REDnode's window, so the package itself never sees you type it.

More in REDnode's [shared keys guide](https://edgemodders.github.io/REDnode/keys.html).

## Keyboard shortcuts

The short list. [Using the overlay](https://edgemodders.ai/wiki/rednode/overlay.html#keyboard-shortcuts) has the full table.

| Key | Does |
|---|---|
| **F10** | Passive, interactive, hidden, and round again |
| **Esc**, or a click on empty screen | From interactive mode back to passive |
| **Ctrl+1** to **Ctrl+9** | In interactive mode, switches [space](https://edgemodders.ai/wiki/rednode/spaces.html) |
| An app's own key | Shows only that app, or hides it. You choose it: see [App keys](https://edgemodders.ai/wiki/rednode/overlay.html#app-keys) |

The F10 key can't be changed yet.

## Files and folders

| What | Where |
|---|---|
| REDnode | `red4ext\plugins\REDnode` in the game folder: `REDnode.dll`, `Scripts`, `host`, `apps` |
| Packages | `red4ext\plugins\REDnode\apps`, one folder each |
| REDswap | `red4ext\plugins\REDswap` in the game folder |
| Settings, positions, spaces, permissions, app keys, development folders, packages' data and secrets | `%APPDATA%\@rednode\overlay` |
| The pin sets you make in the [Pins window](https://edgemodders.ai/wiki/rednode/overlay.html#the-pins-window) | `%APPDATA%\@rednode\overlay\pins`, one `.pins.json` file per set. A set you opened from another folder stays there |
| Shared keys | `%APPDATA%\Edgemodders\keys`, one encrypted file per service |
| REDbridge, when **Get REDbridge** installed it | `%LOCALAPPDATA%\REDnode\bridge` |
| The [UI Workbench](https://edgemodders.ai/wiki/rednode/ui-tools.html)'s projects, and its exports | `Documents\REDnode\UI projects` (watched as a development folder) and `Documents\REDnode\UI exports` |
| Logs | `red4ext\logs` in the game folder. [The logs](https://edgemodders.ai/wiki/rednode/troubleshooting.html#the-logs) says which is which |
| For tools on your PC that talk to the game: a port and a token, written new each run | `%LOCALAPPDATA%\REDnode\editor.json` |

`%APPDATA%` and `%LOCALAPPDATA%` are folders in your Windows user profile. Paste either into File Explorer's address bar to open it.

## Development folders

For mod makers. A **development folder** is a folder outside the game, such as your own project, whose packages run in the game with hot reload in place of their installed copies.

1. Switch **Developer mode** on in the Settings drawer. The **Development folders** list appears in the drawer.
2. Paste a folder's full path into the list and press **Enter**. Its packages start at once.

| Good to know | |
|---|---|
| What a folder can hold | One package, or several in subfolders |
| In the Mod Manager | Such a package is marked **DEV**, and the Mod Manager names the installed copy it hides |
| **Remove** | Takes a folder off the list |
| With Developer mode off | Folders are kept, but the list is hidden |
| REDagent | REDagent can also create and edit packages in these folders. As always, it shows you each change and waits for your OK |

## Permissions in a manifest

For mod makers. What a package can ask for in its manifest's `permissions`, and the text players see after **Asks for**. The player's side of this is under [Permissions](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions) on the Mod Manager page.

| In the manifest | The launcher says it asks for | Gives |
|---|---|---|
| `mcp` | REDnode's tools for AI agents (the kernel MCP server) | `kernel.mcp()`: the [MCP tools](https://edgemodders.ai/wiki/rednode/agents.html#for-packages) for its own agent |
| `agent` | questions to the AI assistant (REDagent); each answer costs you a little | `agent.ask` |
| `bridge` | REDbridge, WolvenKit's engine: reads the game's archives and files, and can write files where the package asks | `kernel.bridge()` |
| `front` | staying above other packages' windows, with REDnode's own tools | The [tool layer](https://edgemodders.ai/wiki/rednode/spaces.html#the-tool-layer) |
| `solo` | hiding every other package's windows while it asks (solo mode) | `ui.solo()` |
| `archives` | swapping archives in the game's mod folder while the game runs (hot-loading) | `archives.reload()`, through [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html) |
| `keys:<service>`, such as `keys:anthropic` | your Anthropic key (or the service's), shared with every EDGE tool (calls with it may cost you) | `secrets.shared()` and `secrets.askShared()`: the player's [shared key](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys) |
| `admin` | managing REDnode: what every package costs, ending or restarting any package, and switching AI assistants' tools on and off | `admin`, as the [Admin Tools](https://edgemodders.ai/wiki/rednode/admin-tools.html) pack uses; also switching packages on and off (`admin.setOpen`), a projects folder under Documents (`admin.projectsFolder`) and changing the game's own UI widgets live (`ink.try`), as the [UI Workbench](https://edgemodders.ai/wiki/rednode/ui-tools.html) uses. The Mod Manager shows a warning under it |

## Manifest fields

For mod makers. Every field of `rednode-app.json`, the file that describes a package. [Making mods and apps](https://edgemodders.ai/wiki/rednode/making-mods.html) explains how to write one.

| Field | For | Means |
|---|---|---|
| `id` | All | Unique. Lowercase letters, digits, `-` and `_`. Settings and positions are saved under it |
| `name`, `version`, `author`, `description` | All | Shown in the launcher and Mod Manager |
| `main` | Node mods | The file to run, relative to the folder. `.mjs` for `import` syntax |
| `service` | Node mods | A `.mjs` or `.js` file whose exported functions other packages can call. A package may have a service and no `main` |
| `sounds` | All | The package's own sound files, played by name with `audio.play`: `{ "alarm": "sounds/alarm.ogg" }`. `.wav`, `.ogg`, `.mp3` or `.flac` |
| `entry` | Apps | The page to show, relative to the folder |
| `width`, `height` | Apps | Window size in pixels at 1080p, 1 to 4096. Needed with `entry` |
| `anchor` | Apps | `top-left` (default), `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom`, `bottom-right` |
| `x`, `y` | Apps | Offset from the anchor in 1080p pixels. With `bottom-right`, `x: -40` is 40 px in from the right edge |
| `kind` | Apps | `window` (default) or `hud`: drawn, never focused, never dragged |
| `resizable`, `minWidth`, `minHeight` | Apps | The player can resize the window by a grip in its corner, down to the minimum size |
| `fill` | Apps | `screen`: the page covers the whole game view at any aspect ratio |
| `hideWith` | Apps | Game states that hide the window: `menu`, `photo-mode`, `scene`, `main-menu` |
| `open` | All | Start open or running, until the player changes it |
| `isolation` | Node mods | `process`: always its own process, never shared. For mods with native addons |
| `permissions` | All | Powers to ask the player for (above) |
| `requires` | All | What it needs, with version ranges: game mods, `rednode`, `redbridge`, or another REDnode package by its id |
| `provides` | All | Roles it answers for other packages through its service file, such as `voice`. `agent` is REDagent's |
| `calls` | All | Other packages' tools it calls that change something: `"calls": ["counter-service.add", "voice.speak"]`, as `<package>.<function>` or `<role>.<function>`. The player allows each in the Mod Manager. See [Calls that change something](https://edgemodders.ai/wiki/rednode/making-mods.html#calls-that-change-something) |

## Advanced: settings.json

A few settings have no switch. They are in the file `settings.json` in `%APPDATA%\@rednode\overlay`. **Close the game before you edit it.** Most people never need to.

| Key | Default | What it does | Change it when |
|---|---|---|---|
| `mcp.port` | `41820` | The port REDnode's MCP server listens on | Another program on your PC must keep 41820. Assistants then need the new address |
| `"editorChannel": "off"` | on | Turns off the **editor channel** (below) | You want no program on your PC to reach the game this way |
| `"edgematTools": "all"` | in-game assistants only | Also shows EDGEmat's tools to desktop assistants such as Claude Code | Rarely: Claude Code gets EDGEmat through [EDGEchat](https://edgemodders.ai/wiki/edgechat/), and would then see each tool twice |
| `"edgehackTools": "all"` | in-game assistants only | Also shows EDGEhack's tools to desktop assistants such as Claude Code | Rarely, for the same reason as EDGEmat's |
| `"edgematBridge": "own"` | shared | Makes EDGEmat's tools start a REDbridge of their own in place of REDnode's | A problem with the shared one |

**The editor channel** lets EDGE tools on your PC, such as VS Code extensions, reach the running game without an MCP server. Through it a tool can play a game sound in the game, so you hear it with the game's own mix. Since 0.70.0 a tool can also call a mod's functions, as EDGEdir plays its scenes: the first time, the **Editor request** window names the tool and the mod, and your **Allow** holds for that tool and that mod until the game closes. A tool can also try a change in the game while you play, as [EDGEhack's Try Live](https://edgemodders.ai/wiki/edgehack/try-live.html) does: the first time, REDnode's **Editor request** window names the tool and waits for your **Allow** or **Deny**. The tool's changes are undone when REDnode stops. Only programs running as you, on your own PC, can use the channel.

**One REDbridge while you play.** Since REDnode 0.65.3, EDGEmat's and EDGEhack's tools for in-game assistants use REDnode's own REDbridge, so one runs, not two.

## Running the host by hand

For developers working on REDnode itself. From a REDnode checkout you can run the overlay host yourself in place of the packaged one, with switches the launcher doesn't have, such as several apps folders at once or a forced render path. Hot reload and the MCP server are then on by default. The options are in the [overlay host README](https://github.com/Edgemodders/REDnode/tree/main/packages/overlay).

Only one host can be connected to the game. If you start one by hand and then start the game, the game's own host exits and yours stays connected. A host you start by hand uses MCP port 41821, since 41820 is kept for the game's; `--mcp-port=<n>` picks another.
