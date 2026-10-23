---
name: setup
description: Check the EDGE plugin's connections to Cyberpunk 2077 (the rednode server for the running game, redcode for the game's files, edgedeck for the mod library and deploys, edgemat for materials), find EDGE servers added by hand that duplicate them, explain what is missing and give the one next step for each. Use when the user runs setup, or when rednode, redcode, edgedeck or edgemat tools are missing, fail, appear twice, or answer 401.
when_to_use: The user asks to set up or check the EDGE tools, or a modding task needs a server that is not there.
---

# Check the EDGE connections

Find out, for each server, whether it works, why not, and the single next step. End with the report table at the bottom. Change nothing in the user's setup without asking.

The plugin's servers:

| Server | Gives | Its tools are named |
|---|---|---|
| `rednode` | The running game: logs, apps, game state, game API lookup, reads (`api_read`) and calls (`api_call`), live TweakDB, screenshots. Only answers while the game runs | `mcp__plugin_edge_rednode__*` |
| `redcode` | The game's files, offline: archives, CR2W as JSON and edits, textures, the shipped TweakDB, sounds, WolvenKit project export, import and pack | `mcp__plugin_edge_redcode__*` |
| `edgedeck` | EDGEdeck's mod library: list, add, turn on and off, conflicts, deploy into the game and undo | `mcp__plugin_edge_edgedeck__*` |
| `edgemat` | EDGEmat's materials: find a garment's materials, describe, recolor, apply, make new ones from words or an image, into a WolvenKit project | `mcp__plugin_edge_edgemat__*` |

## 1. Servers added by hand

Tools named `mcp__<server>__*`, with no `plugin_edge_` in the name, come from a server the user added by hand before the plugin. The EDGE ones:

| Server added by hand | Where it came from | What it does beside the plugin |
|---|---|---|
| `rednode` | REDnode's **Copy setup** | Hides the plugin's copy (same name and URL, seen 2026-10-16), and keeps any old token it was given |
| `redcode` | REDcode's `claude mcp add redcode ...` line | Runs beside the plugin's copy: every tool twice |
| `edgedeck` | EDGEdeck's **Connect an assistant (MCP)** command, or its README's `claude mcp add edgedeck ...` | Runs beside the plugin's copy: every tool twice (seen 2026-10-21) |
| `edgemat` | EDGEmat's **Connect an Assistant (MCP)** command, or `claude mcp add edgemat ...` | Runs beside the plugin's copy: every tool twice. If it was given `-e GEMINI_API_KEY=...` or `OPENAI_API_KEY`, put that key in the plugin's option first |
| `reddeck` | REDdeck, before it was renamed EDGEdeck (2026-10-17) | An old server with the old library; EDGEdeck does not read it |

- Suggest removing each one so there is one copy. `claude mcp get <server>` shows its scope; then `claude mcp remove <server> -s <scope>`.
- Ask before running any of these commands. Removing the hand-added `rednode` means the plugin's needs its token (step 2). If the hand-added `edgedeck` had `--library <folder>`, put that folder in the plugin's `edgedeck_library` option first.
- Never print, quote or log a token, even if a command or a config file shows one.

## 2. rednode

Call `game_state` on the rednode server (it only reads).

| What happens | Why | Next step |
|---|---|---|
| It answers | Connected | Report the game state in one line |
| It answers, but rednode has no `api_read` tool | REDnode is older than 0.26.16, so its `api_call` and `archives_reload` do not make Claude Code ask before every call (step 6) | Update REDnode |
| No rednode tools, and `claude mcp list` says "Failed to connect" or ECONNREFUSED | The game is not running, or REDnode's MCP server is off | Start the game with REDnode and load a save. Open the REDnode launcher (**F10** for REDnode's overlay, then the **REDNODE** tab at the bottom left), switch **MCP server** on. Then reconnect from `/mcp`, or start a new session |
| `claude mcp list` says HTTP 401, "A valid token is required" | The plugin has no token, or an old one | In the game, open the REDnode launcher (**F10** for REDnode's overlay, then the **REDNODE** tab at the bottom left) and press **Copy setup**. The copied command ends with `Bearer <token>"`. Do not run it: it would add a second `rednode` by hand (step 1). Put only the token in the plugin's `rednode_token` option: in VS Code, `/plugins`, then the gear on the `edge` row; in the terminal, `/plugin configure edge@edgemodders`. Then restart Claude Code |

You only see a server's tools when it connected at session start. To see why it failed, run `claude mcp list` if `claude` is on the PATH; otherwise ask the user to open `/mcp` and read the status of `plugin:edge:rednode`.

## 3. redcode

Call `bridge_info` on the redcode server. It returns `version`, `wolvenKit`, `gameDir`, `gameLoaded`, `archives` and `files`.

| What happens | Why | Next step |
|---|---|---|
| `gameLoaded` is true | Connected | Report REDbridge's version and the archive and file counts |
| `gameLoaded` is false | redcode-mcp does not know the game folder | Set the plugin's `game_path` option to the game's install folder, or REDcode's `redcode.gamePath` setting in VS Code |
| The call fails starting the bridge | REDbridge is missing or older than 0.8.0, or the .NET 10 runtime is missing | In VS Code, REDcode's **Install REDbridge** command fetches it. Or set the plugin's `redbridge_exe` option to `REDbridge.exe` |
| No redcode tools | The server did not start | It runs through `npx`, so Node.js must be installed: check `node --version`. The first start downloads the package and can be slow; reconnect from `/mcp` |

redcode-mcp falls back to REDcode's settings only from VS Code's own settings folder (`%APPDATA%\Code\User`). In EDGEkit or another VS Code build, set the plugin's options instead.

## 4. edgedeck

Call `edgedeck_list` on the edgedeck server (it only reads).

| What happens | Why | Next step |
|---|---|---|
| It lists mods, or says "no mods" | Connected | Report the number of mods and the frameworks line |
| "no mods", but the user has mods in EDGEdeck | The server opened a different library. It does not read EDGEdeck's VS Code settings: without the plugin's `edgedeck_library` option it uses the `EDGEdeck` folder in the user's folder | Set `edgedeck_library` to the folder in EDGEdeck's **Library Path** setting, then restart Claude Code |
| No edgedeck tools | The server did not start | As for redcode: Node.js 20 or newer must be installed; the first start downloads the package |

The game folder comes from the plugin's `game_path` option, then the one the library remembers, then Steam, GOG or Epic.

## 5. edgemat

Call `mat_library` on the edgemat server with no arguments (action `status` only reads; never call `build` here).

| What happens | Why | Next step |
|---|---|---|
| It reports the library's counts | Connected | Report the setups count, and whether it matches the game |
| `exists: false` | The library is not built yet. It is built once from the user's own game and shared with the EDGEmat extension | Offer to build it (`mat_library` with action `build`, which needs REDbridge and takes a while) |
| It cannot find the game or REDbridge | No game folder or REDbridge | As for redcode: the plugin's `game_path` and `redbridge_exe` options, or REDcode's or EDGEmat's VS Code settings |
| No edgemat tools | The server did not start | As for redcode: Node.js 20 or newer; the first start downloads the package |

`mat_generate`, materials from words, needs the user's own key: the plugin's `gemini_api_key` or `openai_api_key` option. Say whether one is set only from what `mat_generate` answers; never ask the user to paste a key into the chat. `mat_from_image` needs no key.

## 6. Safety

A server can mark a tool so that Claude Code asks the user before every call of it, in every permission mode (auto included), with no "don't ask again". The tools that change things:

| Tool | Does | Asks before every call |
|---|---|---|
| rednode `api_read` | Game API calls that read: functions named `Get`, `Is`, `Has`, `Can` or `Find` with no change word after it, and TweakDB records' methods. It refuses the rest | No, and it needs no asking |
| rednode `api_call` | Any game API call: it can change the player's game (money, health, anything the game API can do) | Yes, from REDnode 0.26.16 |
| rednode `archives_reload` | Swaps archives into the running game. It replaces files in the game's mod folder, and a broken archive can crash the game | Yes, from REDnode 0.26.16 |
| edgedeck `edgedeck_deploy`, `edgedeck_undo`, `edgedeck_remove` | Write to the game folder, or delete a mod from the library | Yes, from edgedeck-mcp 0.28.0 (plugin 0.0.5) |
| edgemat `mat_generate` | Sends the words to Google Gemini or OpenAI, billed to the user's key | No. Say which service it will use before the first call |

- Read the game with `api_read`. Use `api_call` only for a change the user asked for.
- Mods never change the game's own files. They are deployed into the game folder by EDGEdeck, which can undo a deploy.

## Report

End with this table, one row per server, then the next step the user should take first.

| Server | State | Next step |
|---|---|---|
| rednode | Connected / older than 0.26.16 / not running / no token / added by hand | ... |
| redcode | Connected / no game folder / no REDbridge / not started / added by hand | ... |
| edgedeck | Connected / other library / not started / added by hand | ... |
| edgemat | Connected / library not built / no game or REDbridge / not started / added by hand | ... |
