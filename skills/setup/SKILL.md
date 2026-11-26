---
name: setup
description: Check the EDGE plugin's connections to Cyberpunk 2077 (the rednode server for the running game, redcode for the game's files, edgedeck for the mod library and deploys, edgemat for materials, edgefab for props, edgehack for quickhacks, edgequest for quests), find EDGE servers added by hand that duplicate them, explain what is missing and give the one next step for each. Use when the user runs setup, or when the EDGE servers' tools are missing, fail, appear twice, or answer 401.
when_to_use: The user asks to set up or check the EDGE tools, or a modding task needs a server that is not there.
---

# Check the EDGE connections

Find out, for each server, whether it works, why not, and the single next step. End with the report table at the bottom. Change nothing in the user's setup without asking.

The plugin's servers:

| Server | Gives | Its tools are named |
|---|---|---|
| `rednode` | The running game: logs, apps, game state, game API lookup, reads (`api_read`) and calls (`api_call`), live TweakDB, screenshots, archive swaps, quest facts and journal, and installed mods' own tools (`<package>__<function>`). Only answers while the game runs | `mcp__plugin_edge_rednode__*` |
| `redcode` | The game's files, offline: archives, CR2W as JSON and edits, textures, the shipped TweakDB, sounds, WolvenKit project export, import and pack | `mcp__plugin_edge_redcode__*` |
| `edgedeck` | EDGEdeck's mod library: list, add, turn on and off, conflicts, deploy into the game and undo | `mcp__plugin_edge_edgedeck__*` |
| `edgemat` | EDGEmat's materials: find a garment's materials, describe, recolor, restyle, reshape, apply, make new ones from words, an image or a model, into a WolvenKit project | `mcp__plugin_edge_edgemat__*` |
| `edgefab` | EDGEfab's props: from a 3D model, or from words through a picture and Tripo, made ready for the game, into a project or the EDGE Library | `mcp__plugin_edge_edgefab__*` |
| `edgehack` | EDGEhack's quickhacks: the game's in plain words, changed or new ones, their scripts, packed and tried live in the game | `mcp__plugin_edge_edgehack__*` |
| `edgequest` | EDGEquest's quests: the game's in plain words, new ones from a story file, their game files, checks | `mcp__plugin_edge_edgequest__*` |

To change one of the plugin's options (`game_path`, `redbridge_exe`, `edgedeck_library`, the Gemini, OpenAI and Tripo keys): in VS Code, `/plugins`, then the gear on the `edge` row; in the terminal, `/plugin configure edge@edgemodders`. In VS Code the form's **Save configuration** button is below the options: tell the user to scroll down to it (missed on 2026-10-26). The servers read the options only when they start, so restart Claude Code (in VS Code, **Developer: Reload Window**) after saving.

Updates: Claude Code leaves auto-update off for this marketplace, so the user stays on the version they installed. If they want new versions by themselves: the **Marketplaces** tab of `/plugins` (VS Code) or `/plugin` (terminal), select `edgemodders`, then **Enable auto-update**.

## 1. Servers added by hand

Tools named `mcp__<server>__*`, with no `plugin_edge_` in the name, come from a server the user added by hand before the plugin. The EDGE ones:

| Server added by hand | Where it came from | What it does beside the plugin |
|---|---|---|
| `rednode` | REDnode's **Copy setup**, or `claude mcp add ... rednode http://127.0.0.1:41820/mcp` | Hides the plugin's copy (same URL, seen 2026-10-16 and 2026-10-26) |
| `redcode` | REDcode's `claude mcp add redcode ...` line | Runs beside the plugin's copy: every tool twice |
| `edgedeck` | EDGEdeck's **Connect an assistant (MCP)** command, or its README's `claude mcp add edgedeck ...` | Runs beside the plugin's copy: every tool twice (seen 2026-10-21) |
| `edgemat` | EDGEmat's **Connect an Assistant (MCP)** command, or `claude mcp add edgemat ...` | Runs beside the plugin's copy: every tool twice. If it was given `-e GEMINI_API_KEY=...` or `OPENAI_API_KEY`, put that key in the plugin's option first |
| `edgefab`, `edgehack`, `edgequest` | Each tool's **Connect an Assistant (MCP)** command, or its README's `claude mcp add ...` line | Runs beside the plugin's copy: every tool twice. A key given with `-e TRIPO_API_KEY=...` or `OPENAI_API_KEY` goes in the plugin's option first, or in REDcode's Keys |
| `reddeck` | REDdeck, before it was renamed EDGEdeck (2026-10-17) | An old server with the old library; EDGEdeck does not read it |

- Suggest removing each one so there is one copy. `claude mcp get <server>` shows its scope; then `claude mcp remove <server> -s <scope>`.
- Ask before running any of these commands. After the hand-added `rednode` is gone, the plugin's signs in by itself (step 2). The exception: a player on game 2.31 has REDnode 0.37.0 at most, which has no sign-in, so the hand-added copy with **Copy setup**'s token is their only way to connect REDnode; leave it. If the hand-added `edgedeck` had `--library <folder>`, put that folder in the plugin's `edgedeck_library` option first.
- rednode tools named `edgemat__mat_*` beside the plugin's `edgemat` ones: REDnode 0.45.0 or later shares EDGEmat with desktop assistants only when its settings say `"edgematTools": "all"`, which gives every EDGEmat tool twice. Suggest setting it back to its default; this plugin brings EDGEmat itself. The same for `edgehack__hack_*` beside the plugin's `edgehack`: REDnode 0.63.0 or later, with `"edgehackTools": "all"` (REDnode's `docs/mcp.md`).
- Never print, quote or log a token, even if a command or a config file shows one.

## 2. rednode

Call `game_state` on the rednode server (it only reads).

| What happens | Why | Next step |
|---|---|---|
| It answers | Connected | Report the game state in one line |
| No rednode tools, and `claude mcp list` says "Failed to connect" or ECONNREFUSED | The game is not running, or REDnode's MCP server is off | Start the game with REDnode and load a save. Open the REDnode launcher's Settings panel (below) and switch **MCP server** on. Then reconnect from `/mcp`, or start a new session |
| No rednode tools, and `/mcp` or `claude mcp list` says "Needs authentication" | Not signed in to REDnode yet. Claude Code cannot start the sign-in itself | The user, in `/mcp`: pick `plugin:edge:rednode`, then **Authenticate**. The browser shows **Approve in Cyberpunk 2077** with a code; in the game a **Connect** window shows the same code. Check that they match, press **F10**, then **Allow**. The sign-in lasts across game restarts |
| The browser says the request was denied or lapsed | **Deny** was pressed, or nobody answered within two minutes | **Authenticate** again, and press **Allow** in the game |
| Authenticate gives no sign-in page, or an error about the server's sign-in or client registration | REDnode older than 0.40.1, which only takes the token from **Copy setup** (the exact message is not checked) | Update REDnode to 0.40.1 or newer, which needs game 2.5. On game 2.31, REDnode 0.37.0 is the last: there, the only way is REDnode added by hand with **Copy setup** (step 1) |
| rednode tools are there, but every call fails as unauthorized | The player pressed **Revoke** in REDnode's **Connected assistants**. Claude Code shows the server connected until its next request fails | **Authenticate** again from `/mcp`, and **Allow** in the game |

The launcher's Settings panel: **F10** for REDnode's overlay, the **REDNODE** tab at the bottom left, then the gear at the right of the Theme row. It has **MCP server**, **Hot reload**, **Copy setup** (a fixed token, for clients other than this plugin) and, from REDnode 0.40.1, **Connected assistants**, each with **Revoke**.

You only see a server's tools when it connected at session start. To see why it failed, run `claude mcp list` if `claude` is on the PATH; otherwise ask the user to open `/mcp` and read the status of `plugin:edge:rednode`.

## 3. redcode

Call `bridge_info` on the redcode server. It returns `version`, `wolvenKit`, `gameDir`, `gameLoaded`, `archives` and `files`.

| What happens | Why | Next step |
|---|---|---|
| `gameLoaded` is true | Connected | Report REDbridge's version and the archive and file counts |
| `gameLoaded` is false | redcode-mcp does not know the game folder | Set the plugin's `game_path` option to the game's install folder, or REDcode's `redcode.gamePath` setting in VS Code |
| The call fails starting the bridge | REDbridge is missing or too old, or the .NET 10 runtime is missing | REDbridge is its own download, no extension needed: `REDbridge-<version>-win-x64.zip` from [its releases](https://github.com/Edgemodders/REDbridge/releases), unzipped anywhere, then the plugin's `redbridge_exe` option set to the `REDbridge.exe` in it. It needs the .NET 10 runtime ([dotnet.microsoft.com](https://dotnet.microsoft.com/download/dotnet/10.0)). With REDcode in VS Code, its **Install REDbridge** command does the download instead |
| No redcode tools | The server did not start | It runs through `npx`, so Node.js must be installed: check `node --version`. The first start downloads the package and can be slow; reconnect from `/mcp` |

Which REDbridge: 0.10.0 or newer (0.8.0 starts, but redcode's `loc_*` tools need 0.10.0). On game 2.5, 0.10.0 reads everything but 262 of 3,041 quest world sectors, and 0.11.0 (WolvenKit 10 beta) reads them all; `mesh_items` (a mesh to its items) needs 0.11.0, and 0.12.0 for outfit sets; `cr2w_search` looks inside a mesh's material buffer from 0.12.0. On game 2.31, keep 0.10.0: 0.11.0 misreads 2.31's world sectors. Report the version `bridge_info` gives, and point this out only when the user works with world sectors, needs `mesh_items`, or is on 2.31 with 0.11.0 or newer.

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

`mat_generate` (materials from words), `mat_restyle`'s patterns and `mat_reshape` need the user's own key: Gemini or OpenAI, and Tripo for a reshape's model. EDGEmat reads them from REDcode's Keys, the key store the EDGE tools share (set in VS Code, REDcode's Keys view), or from the plugin's `gemini_api_key`, `openai_api_key` and `tripo_api_key` options, which win. Say whether one is set only from what the tool answers; never ask the user to paste a key into the chat. `mat_from_image` and `mat_from_model` need no key.

## 6. edgefab

Call `fab_tripo` with action `status` on the edgefab server (it only reads, and never shows the key).

| What happens | Why | Next step |
|---|---|---|
| It answers | Connected | Report whether the Tripo and OpenAI keys are set and where from, and the credits it gives |
| A key is not set | Props from words need Tripo (the model) and OpenAI (the picture first); props from the user's own model need neither | The user sets it in VS Code, REDcode's Keys view, **Set Key** (every EDGE tool shares it), or in the plugin's `tripo_api_key` and `openai_api_key` options |
| "REDcode's Keys can't be reached", or REDbridge is not installed | EDGEfab reads the key store through REDbridge 0.18.0 or newer, found as REDcode finds it | The plugin's `redbridge_exe` option, as for redcode |
| No edgefab tools | The server did not start | As for redcode: Node.js 20 or newer; the first start downloads the package |

Props wait on EDGEfab's Desk (`%LOCALAPPDATA%\EDGEfab\desk`, shared with the extension) until `fab_add` puts them into a project.

## 7. edgehack

Call `hack_find` with query `overheat` on the edgehack server (it only reads; the first call reads the game's TweakDB, about 15 seconds).

| What happens | Why | Next step |
|---|---|---|
| It lists Overheat | Connected | Report that it reads the game's quickhacks |
| It cannot find the game or REDbridge | No game folder or REDbridge | As for redcode: the plugin's `game_path` and `redbridge_exe` options, or REDcode's or EDGEdeck's VS Code settings |
| No edgehack tools | The server did not start | As for redcode: Node.js 20 or newer; the first start downloads the package |

`hack_try` tries a quickhack in the running game through REDnode 0.62.0 or newer; its first try in a session waits for the player to allow EDGEhack in the game.

## 8. edgequest

Call `quest_index` with action `status` on the edgequest server (it only reads; never call `build` here).

| What happens | Why | Next step |
|---|---|---|
| The index exists and matches the game | Connected | Report it in one line |
| No index yet, or it does not match the game | It is built once from the user's own game, about 90 seconds, and again after a game update | Offer to build it (`quest_index` with action `build`). `quest_find` also builds it when it is missing |
| It cannot find the game or REDbridge | No game folder or REDbridge | As for redcode: the plugin's `game_path` and `redbridge_exe` options, or REDcode's or EDGEquest's VS Code settings |
| No edgequest tools | The server did not start | As for redcode: Node.js 20 or newer; the first start downloads the package |

## 9. Safety

A server can mark a tool so that Claude Code asks the user before every call of it, in every permission mode (auto included), with no "don't ask again". The tools that change things:

| Tool | Does | Asks before every call |
|---|---|---|
| rednode `api_read` | Game API calls that read: functions named like reads (starting `Get`, `Is`, `Has`, `Can` or `Find`), and every method of a TweakDB record. It refuses the rest, and a read name joined to a change word with `Or`, `And` or `Then` (such as `GetOrCreate…`, `GetOrAdd…`); before REDnode 0.32.1 it also refused names with a change word as a noun (`GetItemInEquipSlot`) | No |
| rednode `api_call` | Any game API call: it can change the player's game (money, health, anything the game API can do) | Yes, from REDnode 0.26.16 |
| rednode `archives_reload` | Swaps archives into the running game. It replaces files in the game's mod folder, and a broken archive can crash the game | Yes, from REDnode 0.26.16 |
| rednode `game_facts_set`, `game_journal_set`, `game_teleport` | Change quest facts or journal entries in the player's save, or move V | Yes, from REDnode 0.32.0 |
| rednode `world_spawn`, `world_animate`, `world_remove`, `world_load`, `world_weather_set` | Spawn, animate or remove people and objects in the world, load a scene, set and hold the weather | Yes (checked in REDnode 0.70.0's server) |
| rednode `mod_call`, and mods' own tools (`<package>__<function>`) not marked `@readonly` | Whatever the mod does | Yes, from REDnode 0.36.0 |
| rednode `api_get`, `game_facts`, `game_journal`, `mod_services`, `mod_read`, mods' tools marked `@readonly`, `world_near`, `world_spawned`, `world_weather`, the pins (`world_pin`, `world_unpin`, `world_pins`, which only draw markers), and the rest (`logs`, `game_state`, `tweakdb`, `window_*`, `game_image`, ...) | Read only. `apps` changes something only with an action (open, close, restart, pin) | No |
| edgedeck `edgedeck_deploy`, `edgedeck_undo`, `edgedeck_remove` | Write to the game folder, or delete a mod from the library | Yes, from edgedeck-mcp 0.28.0 (plugin 0.0.5) |
| edgehack `hack_new`, `hack_edit`, `hack_script`, `hack_pack`, `hack_try` | Write quickhack documents, scripts and the packed mod; `hack_try` changes the running game | Yes (checked in edgehack-mcp 0.1.3) |
| edgemat `mat_generate`, `mat_restyle` with patterns, `mat_reshape` step change | Send words or a picture to Google Gemini or OpenAI (and Tripo for a reshape's model), billed to the user's key | No. Say which service it will use, and that it costs, before the first call |
| edgefab `fab_picture` | Draws the object with OpenAI's GPT Image: a few cents of the user's OpenAI credit | No. Say so before the first call |
| edgefab `fab_make` from `picture` or `tripo` | Makes the 3D model with Tripo: about 50 to 80 Tripo credits a model (EDGEfab 0.2.1) | No. Say the cost and get the user's yes first; `fab_tripo` gives the balance |
| redcode `anim_generate` | An animation from words through Uthana, billed to the user's Uthana account by the second | No. Say the cost and get the user's yes first, as its description says |
| redcode `script_write`, `script_run` | Write a sector script, and run one as the user (any Node code); `apply: true` writes the changes into a project's sector | No. Run only scripts the user knows or asked for; try without `apply` first |
| The servers' project writes (redcode's edits and pack, edgemat's apply, edgefab's `fab_add`, edgequest's `quest_new`, `quest_edit`, `quest_make`) | Write into a WolvenKit project, never the game folder | No. They are the user's project files, as Claude Code's own edits are |

- Read the game with `api_read`, and a mod's tools with `mod_read`. Use `api_call` and the other asking tools only for a change the user asked for.
- The player can switch any of REDnode's or a mod's tools off for every assistant in the **Tools Manager** (REDnode's optional Admin Tools pack). A tool switched off is not listed.
- Mods never change the game's own files. They are deployed into the game folder by EDGEdeck, which can undo a deploy.

## Report

End with this table, one row per server, then the next step the user should take first.

| Server | State | Next step |
|---|---|---|
| rednode | Connected / not running / not signed in / revoked / older than 0.40.1 / added by hand | ... |
| redcode | Connected / no game folder / no REDbridge / not started / added by hand | ... |
| edgedeck | Connected / other library / not started / added by hand | ... |
| edgemat | Connected / library not built / no game or REDbridge / not started / added by hand | ... |
| edgefab | Connected (keys set or not) / no REDbridge for the keys / not started / added by hand | ... |
| edgehack | Connected / no game or REDbridge / not started / added by hand | ... |
| edgequest | Connected / index not built / no game or REDbridge / not started / added by hand | ... |
