---
name: setup
description: Check the EDGE plugin's connections to Cyberpunk 2077 (the rednode server for the running game, the redcode server for the game's files), explain what is missing and give the one next step for each. Use when the user runs setup, or when rednode or redcode tools are missing, fail, or answer 401.
when_to_use: The user asks to set up or check the EDGE tools, or a modding task needs a server that is not there.
---

# Check the EDGE connections

Find out, for each server, whether it works, why not, and the single next step. End with the report table at the bottom. Change nothing in the user's setup without asking.

The plugin's servers:

| Server | Gives | Its tools are named |
|---|---|---|
| `rednode` | The running game: logs, apps, game state, game API lookup and calls, live TweakDB, screenshots. Only answers while the game runs | `mcp__plugin_edge_rednode__*` |
| `redcode` | The game's files, offline: archives, CR2W as JSON and edits, textures, the shipped TweakDB, sounds, WolvenKit project export, import and pack | `mcp__plugin_edge_redcode__*` |

REDdeck's server (the mod library and deploys) is not in the plugin yet. If the user has it, it was added by hand from REDdeck's **Connect an assistant (MCP)** command.

## 1. Servers added by hand

If you have tools named `mcp__rednode__*` or `mcp__redcode__*` (no `plugin_edge_` in the name), the user added that server by hand before: REDnode's **Copy setup** command or REDcode's `claude mcp add redcode ...` line. A server added by hand with the same name and URL as the plugin's hides the plugin's copy (seen with `rednode` on 2026-10-16), so it keeps any old token it was given.

- Suggest removing the hand-added one so there is one copy. `claude mcp get rednode` shows its scope; then `claude mcp remove rednode -s <scope>`. Same for `redcode`.
- Ask before running either command. Removing the hand-added `rednode` means the plugin's needs its token (step 2).
- Never print, quote or log a token, even if a command or a config file shows one.

## 2. rednode

Call `game_state` on the rednode server (it only reads).

| What happens | Why | Next step |
|---|---|---|
| It answers | Connected | Report the game state in one line |
| No rednode tools, and `claude mcp list` says "Failed to connect" or ECONNREFUSED | The game is not running, or REDnode's MCP server is off | Start the game with REDnode. Press **F10**, open the **REDNODE** tab at the lower left, switch **MCP server** on. Then reconnect from `/mcp`, or start a new session |
| `claude mcp list` says HTTP 401, "A valid token is required" | The plugin has no token, or an old one | In the game, **F10**, **REDNODE** tab, **Copy setup**. The copied command ends with `Bearer <token>"`. Put only the token in the plugin's `rednode_token` option: in VS Code, `/plugins`, then the gear on the `edge` row; in the terminal, `/plugin configure edge@edgemodders`. Then restart Claude Code |

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

## 4. Safety

- `api_call` on the rednode server changes the player's game (money, health, anything the game API can do). Tell the user to keep it on "ask": allow the read-only tools freely, never `api_call`. Do not add it to an allow list.
- Mods never change the game's own files. They are deployed into the game folder by REDdeck, which can undo a deploy.

## Report

End with this table, one row per server, then the next step the user should take first.

| Server | State | Next step |
|---|---|---|
| rednode | Connected / not running / no token / added by hand | ... |
| redcode | Connected / no game folder / no REDbridge / not started / added by hand | ... |
