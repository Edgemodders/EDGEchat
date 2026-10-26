# <span class="y">Tests</span>

Every test run on EDGEchat so far: how to run it again, what to expect, and what it showed. Each phase ends with a test on the dev PC ([design, "Phases"](design.html#phases)); new tests are added here when they are first run.

Last updated 2026-10-23.

## At a glance

| Test | Kind | Phase | Last run | Result |
|---|---|---|---|---|
| [Validate](#validate) | CLI | P0, P1 | 2026-10-23 | Pass, one expected warning |
| [Install from the checkout](#install-from-the-checkout) | CLI, scratch config | P0, P1 | 2026-10-23 | Pass |
| [Install from GitHub](#install-from-github) | CLI, scratch config | P1 | 2026-10-17 | Pass |
| [Update from GitHub](#update-from-github) | CLI, scratch config | P1 | 2026-10-21 | See the section |
| [Plugin servers beside servers added by hand](#plugin-servers-beside-servers-added-by-hand) | CLI, scratch config | P0, P1 | 2026-10-21 | Seen, recorded in the design |
| [Unset options](#unset-options) | CLI, scratch config | P1 | 2026-10-16 | Seen: empty string |
| [redcode server through the wrapper](#redcode-server-through-the-wrapper) | By hand, over stdio | P1 | 2026-10-23 | Pass |
| [edgedeck server through the wrapper](#edgedeck-server-through-the-wrapper) | By hand, over stdio | P1 | 2026-10-23 | Pass |
| [edgemat server](#edgemat-server) | By hand, over stdio | P1 | 2026-10-23 | Pass |
| [rednode with no token](#rednode-with-no-token) | CLI, game running | P1 | 2026-10-16 | Seen: HTTP 401 |
| [OAuth sign-in for a plugin server](#oauth-sign-in-for-a-plugin-server) | CLI, scratch config; then in the game | P4 | 2026-10-26 | Seen with a stand-in; against REDnode 0.40.1 in game: pass |
| [P1 test in VS Code with the game](#p1-test-in-vs-code-with-the-game) | By hand, in a session | P1 | 2026-10-21 | Pass; the ask before deploy failed, fixed in 0.0.5 ([asks before changes](#asks-before-changes)) |
| [Asks before changes](#asks-before-changes) | By hand, in a session | P1 | 2026-10-23 | Pass |
| [Changing the game folder](#changing-the-game-folder) | By hand, in a session | P3 | 2026-10-23 | Pass after a restart |
| [init-project on a real project](#init-project-on-a-real-project) | By hand, in a session | P1 | Not run | |
| [EDGEkit one-click setup](#edgekit-one-click-setup) | By hand, in EDGEkit | P4 | Not run | |
| [Evals: archives-and-cr2w](#evals-archives-and-cr2w) | `claude plugin eval` | P2 | 2026-10-23 | Skill fires; Δ 0.00 |
| [Evals: rednode-mods](#evals-rednode-mods) | `claude plugin eval` | P2 | 2026-10-25 | Δ +1.00; with `new-mod`, mean Δ +0.95 |
| [rednode-mods in the game](#rednode-mods-in-the-game) | By hand, in a session | P2 | 2026-10-23 | Pass |
| [Evals: wolvenkit-projects](#evals-wolvenkit-projects) | `claude plugin eval` | P2 | 2026-10-23 | Δ +0.33 |
| [Evals: edge-tools](#evals-edge-tools) | `claude plugin eval` | P3 | 2026-10-26 | Skill fires 9 of 9; Δ +1.00 |
| [Evals: the whole suite](#evals-the-whole-suite) | `claude plugin eval` | P2, P3 | 2026-10-23 | 12 cases, mean Δ +0.68 |

A scratch config has no Claude login, so the CLI tests check how the plugin installs and starts its servers, not what Claude does with it. The P1 test on 2026-10-21 was the first run of a skill in a session.

## A scratch config

`CLAUDE_CONFIG_DIR` points Claude Code at another settings folder, so a test never touches your own plugins, servers or login. Every CLI test below starts like this (Git Bash):

```bash
export CLAUDE_CONFIG_DIR=<an empty scratch folder>
```

## CLI

### Validate

```bash
claude plugin validate .
claude plugin validate .claude-plugin/plugin.json
claude plugin validate skills --strict
```

Last run 2026-10-25 with Claude Code 2.1.310, at 0.0.10: **pass**, the same one warning, plus two new "plugin directory" warnings that do not change the result: no icon (`ICON_MISSING`) and no `privacyPolicyUrl` (`PRIVACY_URL_MISSING`, since `rednode` is a remote server). Run 2026-10-23 with 2.1.302, at 0.0.5: pass, the one warning. First run 2026-10-16 with 2.1.299.

| Check | Expected |
|---|---|
| `.` (the marketplace manifest) | Passes with one warning: `CLAUDE.md at the plugin root is not loaded as project context`. That file is for sessions working on this repo, so the warning is expected and `--strict` fails on it |
| `.claude-plugin/plugin.json` | The same one warning |
| `skills --strict` | Passes |

In P0, `marketplace.json` failed `--strict` until it had a top-level `description`.

### Install from the checkout

```bash
claude plugin marketplace add "<path to this checkout>"
claude plugin install edge@edgemodders
claude plugin details edge@edgemodders
claude plugin configure edge@edgemodders
claude mcp list
```

Last run 2026-10-23 at 0.0.5 with Claude Code 2.1.302: **pass**: "6 userConfig options not yet set"; `details` lists the four servers, always-on cost about 185 tokens; `configure` lists the six options, `gemini_api_key` and `openai_api_key` sensitive; `mcp list` connects `redcode`, `edgedeck` and `edgemat` (`rednode` refused, game closed). Run 2026-10-21 at 0.0.2 with the results below. First run 2026-10-16 at 0.0.1, with the same results less `edgedeck` and its option.

| Check | Expected |
|---|---|
| Install | "Successfully installed plugin: edge@edgemodders (scope: user)" and "4 userConfig options not yet set" |
| `details` | `edge 0.0.2`; skills `init-project`, `setup`; MCP servers `rednode`, `redcode`, `edgedeck`; always-on cost about 150 tokens |
| `configure` | `game_path`, `rednode_token` (sensitive), `redbridge_exe`, `edgedeck_library`, all optional and not set |
| `mcp list` | `plugin:edge:redcode ... Connected` and `plugin:edge:edgedeck ... Connected`, each through its wrapper under the checkout's path. `plugin:edge:rednode` connects only while the game runs (see [rednode with no token](#rednode-with-no-token)) |

With a local marketplace the plugin is read from the checkout (`CLAUDE_PLUGIN_ROOT` is the checkout itself), and the checkout's path has spaces: `redcode` still connects.

### Install from GitHub

What a user does. Needs the commit pushed.

```bash
claude plugin marketplace add Edgemodders/EDGEchat
claude plugin install edge@edgemodders
claude mcp list
```

Last run 2026-10-17 at `8fd75a2`, just after the repo was renamed to EDGEchat: **pass.** `redcode` connects; `rednode` is `ECONNREFUSED` with the game closed.

First run 2026-10-16 at `4f07db8`, as `Edgemodders/EDGEplugin`: the same results as from the checkout; the plugin runs from `<config>/plugins/cache/edgemodders/edge/0.0.1/`, and `redcode` connects from there.

### Update from GitHub

What an existing user sees when a release adds a server and an option. Install the old version from GitHub first, push the new one, then update.

```bash
claude plugin marketplace add Edgemodders/EDGEchat     # before the push: installs the old version
claude plugin install edge@edgemodders
# push the new version, then:
claude plugin marketplace update edgemodders
claude plugin update edge@edgemodders
claude plugin details edge@edgemodders
claude mcp list
```

First run 2026-10-21, 0.0.1 to 0.0.2 (`5dbcc7c`), Claude Code 2.1.302: **pass**, with one gap.

| Check | Seen |
|---|---|
| `plugin update` | "Plugin "edge" updated from 0.0.1 to 0.0.2 for scope user. Restart to apply changes." |
| `details` | `edge 0.0.2`, MCP servers `rednode`, `redcode`, `edgedeck` |
| `mcp list` | `redcode` and `edgedeck` Connected from `<config>/plugins/cache/edgemodders/edge/0.0.2/` |
| `configure` | The new `edgedeck_library` listed, not set |
| The gap | The update says nothing about the new option, unlike install ("N userConfig options not yet set"). Whether the form opens after an update in VS Code is not seen yet. A new option a server cannot do without must say so in the release notes and in `/edge:setup` |

### Plugin servers beside servers added by hand

Run 2026-10-16 in P0, on a throwaway copy of the plugin. Results, recorded in the [design's facts](design.html#facts-that-shape-the-design):

| Setup | `claude mcp list` showed |
|---|---|
| Plugin installed | `plugin:edge:redcode` and `plugin:edge:rednode`: plugin servers are named `plugin:<plugin>:<server>` |
| Plugin installed, plus `claude mcp add --transport http --scope user rednode http://127.0.0.1:41820/mcp ...` | Only the hand-added `rednode`; the plugin's copy is not listed. After `claude mcp remove rednode -s user`, `plugin:edge:rednode` is back |
| Plugin 0.0.2 installed, plus `claude mcp add --scope user edgedeck -- npx -y @edgemodders/edgedeck-mcp@0.27.3` (run 2026-10-21) | Both `plugin:edge:edgedeck` and `edgedeck`, each Connected: a stdio server added by hand runs beside the plugin's, so Claude would see every tool twice. `/edge:setup` finds it |
| Working inside a folder with the servers in a root `.mcp.json` | The servers also show as that folder's project servers, "Pending approval". With the servers inline in `plugin.json`, they do not |

### Unset options

Run 2026-10-16 in P1. A test server that writes its `argv` and environment to a file, with `--game ${user_config.game_path}` in its `args` and `REDCODE_GAME_PATH`, `REDBRIDGE_EXE` from options in its `env`.

| Options | The server got |
|---|---|
| Not set | `--game ""`, `REDCODE_GAME_PATH=""`, `REDBRIDGE_EXE=""` |
| `game_path` set with `claude plugin configure edge@edgemodders --values-stdin` | The path in both places; `REDBRIDGE_EXE` still `""` |

Also seen: a server that uses an option `userConfig` does not declare is dropped, and `validate` says so. `CLAUDE_PLUGIN_ROOT` and `CLAUDE_PLUGIN_DATA` are in every server's environment.

## By hand

### redcode server through the wrapper

Speaks MCP to the server directly, with the plugin's options empty as when they are unset. Needs Node.js, the game and REDbridge, found from REDcode's VS Code settings.

```bash
node tools/test/mcp-probe.cjs --empty REDCODE_GAME_PATH --empty REDBRIDGE_EXE "scripts\redcode-mcp.cmd" bridge_info
node tools/test/mcp-probe.cjs --empty REDCODE_GAME_PATH --empty REDBRIDGE_EXE "npx -y @edgemodders/redcode-mcp@0.2.0" bridge_info
```

Last run 2026-10-23 through the wrapper with redcode-mcp 0.3.0: **pass**, REDbridge 0.10.0, game loaded, 57 archives, 583,798 files. First run 2026-10-16 with 0.2.0: **pass.**

| Run | Expected |
|---|---|
| Through `scripts\redcode-mcp.cmd` | `gameLoaded: true`, REDbridge 0.8.0, WolvenKit 9.1.0, 57 archives, 583,798 files with the game on the dev PC; exit 0. The log names the bridge and game it took from REDcode's settings |
| The same, from a copy of the plugin in a folder with a space in its name | The same |
| `npx` directly, without the wrapper | Fails: "The argument 'file' cannot be empty. Received ''"; exit 1. This is why the wrapper exists ([design](design.html#mcp-servers)) |

On the dev PC, REDcode's setting points at a Release build in the REDbridge checkout, not an installed REDbridge.

### edgedeck server through the wrapper

Speaks MCP to the server directly and calls `edgedeck_list`, which only reads. Needs Node.js 20 or newer. With options set, it makes an empty library in the folder it is given, so give it a scratch folder.

```bash
node tools/test/mcp-probe.cjs --empty EDGEDECK_LIBRARY --empty EDGEDECK_GAME "scripts\edgedeck-mcp.cmd" edgedeck_list
EDGEDECK_LIBRARY='<scratch>\deck lib (x86)' EDGEDECK_GAME='<game folder>' node tools/test/mcp-probe.cjs "scripts\edgedeck-mcp.cmd" edgedeck_list
```

Last run 2026-10-23 with both options empty and edgedeck-mcp 0.28.0: **pass**, the dev PC's library. First run 2026-10-21 with 0.27.3: **pass.**

| Run | Expected |
|---|---|
| Both options empty | The default library in `%USERPROFILE%\EDGEdeck`: the dev PC's mods, starting `[x] archivexl 1.26.8` |
| Library only, a scratch folder | `no mods`, and the folder gets a `library` folder |
| Library with spaces and parentheses, plus the game folder | The same, in that folder |

What the first runs found, and why the wrapper is written as it is:

| Tried | Seen |
|---|---|
| The folders as `args` in `plugin.json`, through the probe: `npx ... --library "" --game ""` | The server got the quotes: `mkdir '...\""\library'`. The probe's own quoting may add to it, but arguments through `cmd` and `npx` are fragile, so the plugin passes variables |
| The wrapper with `npx ... !ARGS!` (delayed expansion) | The default library, whatever was set: `npx.cmd` got the text `!ARGS!`. The wrapper's own `echo !ARGS!` showed the right value, which hid it |
| `endlocal & npx ... -- %ARGS%` | Works: `%ARGS%` is expanded before `npx.cmd` runs |
| The probe running a wrapper from a folder with a space in its name | No answer, for `redcode-mcp.cmd` too: the probe's quoting from Git Bash. Claude Code starts both wrappers from such a folder ([install from the checkout](#install-from-the-checkout)) |

### edgemat server

Speaks MCP to the server directly, with the plugin's options empty. Needs Node.js 20 or newer. `mat_library` with no arguments only reads.

```bash
node tools/test/mcp-probe.cjs --empty EDGEMAT_GAME_PATH --empty REDBRIDGE_EXE --empty GEMINI_API_KEY --empty OPENAI_API_KEY "npx -y @edgemodders/edgemat-mcp@0.3.1" mat_library
node tools/test/mcp-probe.cjs --empty GEMINI_API_KEY --empty OPENAI_API_KEY "npx -y @edgemodders/edgemat-mcp@0.3.1" mat_generate '{"words":"red leather"}'
```

First run 2026-10-23 with edgemat-mcp 0.3.1: **pass.**

| Run | Expected |
|---|---|
| `mat_library`, every option empty | The library's counts (17,734 setups on the dev PC), "matchesGame: not checked (the bridge is not running)", cache `%LOCALAPPDATA%\EDGEmat`; exit 0. Empty variables are taken as unset |
| `mat_generate`, no key | "No image service key: set GEMINI_API_KEY or OPENAI_API_KEY ..."; exit 1, and no network call |

### rednode with no token

Seen 2026-10-16 while the game ran, plugin installed in a scratch config with no `rednode_token`:

```
plugin:edge:rednode: http://127.0.0.1:41820/mcp (HTTP) - ✘ Failed to connect — Server rejected the configured Authorization header (HTTP 401). ... {"error":"A valid token is required"}
```

With the game closed it is `ECONNREFUSED` instead. `/edge:setup` tells the two apart this way.

### OAuth sign-in for a plugin server

Whether a plugin's HTTP server gets Claude Code's OAuth sign-in, for connecting to REDnode by approving in the game instead of pasting a token ([REDnode#19](https://github.com/Edgemodders/REDnode/issues/19)). Run 2026-10-26 with Claude Code 2.1.310 in a scratch config: a stand-in server on `127.0.0.1:41899` that answers `/mcp` with 401 and `WWW-Authenticate: Bearer resource_metadata="..."`, serves the two `.well-known` documents and `/register`, and logs every request; a scratch plugin whose only server is `{"type": "http", "url": "http://127.0.0.1:41899/mcp"}`.

| Step | Seen |
|---|---|
| `claude mcp list`, the same URL also added by hand | Only the hand-added server listed, "Needs authentication": it hides the plugin's |
| `claude mcp list`, plugin only | `plugin:otest:srv ... ! Needs authentication`. Requests: `POST /mcp`, then both `.well-known` documents |
| `claude mcp login plugin:otest:srv`, stdin not a terminal | `POST /register` with `client_name` "Claude Code (plugin:otest:srv)" and a `http://localhost:<port>/callback` redirect; prints the authorize URL (PKCE S256, `state`, `resource`); then stops: "stdin isn't a terminal" |
| Token exchange | Not run: needs an interactive sign-in. Test it against REDnode's build |

Then against REDnode itself, 2026-10-26, by the user on the dev PC: game 2.5, REDnode 0.40.0, then 0.40.1. REDnode's test "MCP sign-in: test" in its `docs/mcp.md`, with a header-less `rednode-signin` added by hand beside the plugin's (which still sends the token). **Pass** on 0.40.1, every step: authenticate, the same code in the browser and the game's **Connect** window, Allow, `game_state` answered, **Connected assistants** listed it, still connected after a game restart, Revoke, Deny, a request lapsing after 2 minutes. On 0.40.0, signing in again after Revoke failed with "Unknown client"; 0.40.1 fixed it ([REDnode#19](https://github.com/Edgemodders/REDnode/issues/19), closed).

| Seen | What it means for EDGEchat |
|---|---|
| After a Revoke, Claude Code shows the server connected until its next request, which gets a 401 | `/edge:setup` should take "connected" with a failing call as "signed out": authenticate again |
| A plain `{"type": "http", "url": "http://127.0.0.1:41820/mcp"}` signs in by itself | The plugin can drop `rednode_token` and the `Authorization` header once REDnode 0.40.1 is released |
| Whether the VS Code extension's `/mcp` offers Authenticate | Not noted |

### P1 test in VS Code with the game

The test that ends P1 ([design](design.html#phases)). Needs your own Claude Code login, so it runs in your real config.

1. Remove a `rednode` added by hand, which hides the plugin's: `claude mcp remove rednode -s user`.
2. In the VS Code extension: `/plugins`, add the marketplace `Edgemodders/EDGEchat`, install `edge`.
3. Start the game and load a save. Open the REDnode launcher (**F10** for REDnode's overlay, then the **REDNODE** tab at the bottom left), and its Settings panel with the gear at the right of the Theme row (REDnode 0.32.2 or newer; before that the switches were in the launcher itself): **MCP server** on, **Copy setup**. Do not run the copied command. Put only the token (after `Bearer `) in the plugin's `rednode_token`: the gear on the `edge` row.
4. Start a new session and run `/edge:setup`.

| Check | Expected |
|---|---|
| The settings form | Opens after install with the four options |
| `/edge:setup` | A table: `rednode` connected with the game state, `redcode` connected with REDbridge's version and the archive count, `edgedeck` connected with the mods |
| The tool names | `mcp__plugin_edge_rednode__*`, `mcp__plugin_edge_redcode__*`, `mcp__plugin_edge_edgedeck__*` |
| `api_call`, `edgedeck_deploy`, `edgedeck_undo` | Ask before they run (now its own test, [asks before changes](#asks-before-changes)) |

First run 2026-10-21, plugin 0.0.2 installed from GitHub on a second PC (the user's laptop, with the game, EDGEdeck and REDcode's REDbridge), in the VS Code extension. Steered from the dev PC's session, which could not run `/plugins` through Remote Control ("isn't available in this environment"), so the user installed it locally. **Pass**, one check not seen.

| Check | Seen |
|---|---|
| The settings form | **Pass**: opened after install with the four options, empty |
| `/edge:setup`, game closed, options empty | A correct table: `edgedeck` connected (18 mods, frameworks line "game 2.31"); `redcode` started (REDbridge 0.10.0, WolvenKit 9.1.0) with no game folder and 0 archives, and the next step named the right folder, the one EDGEdeck uses; `rednode` refused, "start the game". It found `edgemat` added by hand and said it duplicates nothing. It changed nothing |
| `/edge:setup` after setting `game_path` and `rednode_token`, game at the main menu | **Pass**: all three connected. `rednode`: REDnode 0.26.15, main menu, overlay interactive. `redcode`: REDbridge 0.10.0, 57 archives, 583,798 files. `edgedeck`: 18 mods, 15 on |
| The tool names | Not looked at; the skill called each server's tools, so they loaded |
| Asks before `api_call`, deploy, undo | **Fail** for deploy. Asked to deploy, Claude called `edgedeck_deploy` with no prompt; only EDGEdeck's refusal while the game runs stopped it (that refusal comes from inside the deploy, so the call was made). Whether `api_call` prompted was not noted. The session's permission mode was not reported; auto mode is the likely reason. Fixed in the servers: see [asks before changes](#asks-before-changes) |
| An approval step for the servers | None: the servers connected without asking (the user's recollection) |

Found on the way: the user did not know where "the REDNODE tab" was. 0.0.3 names the REDnode launcher everywhere. `redcode` did not fall back to REDcode's VS Code setting on that PC (whether REDcode's setting is set there, or the editor was EDGEkit, is not known), so `game_path` was needed.

### Changing the game folder

Run 2026-10-23 on the dev PC, plugin 0.0.8, game closed. The game had updated to 2.5, which the EDGE tools do not support yet, so the user pointed the tools at a backup of 2.31. **Pass** once the plugin's option was changed and Claude Code restarted.

| Step | Seen |
|---|---|
| REDcode's `redcode.gamePath` in VS Code set to the backup, plugin's `game_path` still the 2.5 folder | redcode, edgedeck: still the 2.5 folder. The plugin's `game_path` comes first |
| Plugin's `game_path` changed in `/plugins`, no restart | Saved in `settings.json`; the servers still on the 2.5 folder: they read it only at start |
| After a restart, `/edge:setup` | All on the backup. `redcode`: 57 archives, 583,798 files (592,071 on 2.5). `edgedeck`: 12 mods, 7 on, frameworks line "game 2.31 · 2 updates", the mods shown as deployed. `edgemat`: 17,734 setups, built 2026-10-21. `rednode`: refused, game closed |
| A session started before the update to 0.0.8 | Ran the servers from the 0.0.8 cache but the skills from the 0.0.2 cache, until a restart |

To change folders: set the plugin's `game_path`, not only REDcode's setting, then restart Claude Code.

### Asks before changes

Needs REDnode 0.26.16 or newer in the game, and plugin 0.0.5 or newer for the `edgedeck` rows (it runs edgedeck-mcp 0.28.0, the first with the flag). Run it in **auto** mode, the mode that skipped the prompt in P1. Game at a loaded save for the rednode rows, closed for the edgedeck rows. Deny every prompt, except the one allowed `api_call`.

| Ask Claude | Expected |
|---|---|
| "What's the player's money?" (or another read) | It uses `api_read`, which runs without a prompt |
| "Give the player 1 eddie" | `api_call` prompts, with no "don't ask again"; denied, nothing changes |
| Again, after allowing `api_call` once | It prompts again |
| "Reload my mod's archive" | `archives_reload` prompts |
| "Deploy my mods" | `edgedeck_deploy` prompts; denied, the game folder is unchanged |
| "Undo the last deploy", "Remove mod X" | `edgedeck_undo`, `edgedeck_remove` prompt |
| `/edge:setup` with REDnode older than 0.26.16 | It says to update REDnode, since `api_read` is missing |

First run 2026-10-23 on the user's laptop, in the VS Code extension in auto mode, plugin 0.0.5, REDnode 0.32.1: **pass.** The user's words: every prompt appeared as expected, and each was allowed or denied as the steps said.

| Asked | Seen |
|---|---|
| "How much money does V have right now? Just read it." | No prompt (`api_read`) |
| "Give V 1 eddie.", denied | `api_call` prompted |
| "Give V 1 eddie." again, allowed | Prompted |
| "Give V 1 more eddie.", denied | Prompted again after the allow |
| Reload an archive in `archive/pc/mod`, denied | `archives_reload` prompted |
| Game closed: "Deploy my mods.", denied | `edgedeck_deploy` prompted. In P1 it ran without one |
| "Undo the last deploy.", denied | `edgedeck_undo` prompted |

Not run: "remove a mod" (`edgedeck_remove` carries the same flag in edgedeck-mcp 0.28.0; not tried, to keep the mods safe), the default mode, and `/edge:setup` with an old REDnode.

### EDGEkit one-click setup

Not run yet. EDGEkit builds it (`da32f12`, [EDGEkit#5](https://github.com/Edgemodders/EDGEkit/issues/5)); EDGEkit checked that the keys are written, with no Claude login. This test is the part EDGEkit could not do. It waits for EDGEkit's next release, which EDGEkit will announce on #5. Report the result on #5, and close the issue if it passes (EDGEkit's request). In an EDGEkit with Claude Code signed in, and the plugin not installed:

| Step | Expected |
|---|---|
| Answer yes to "Set up Claude Code for EDGE?" | `settings.json` gains `extraKnownMarketplaces.edgemodders` and `enabledPlugins["edge@edgemodders"]`, other keys kept |
| Start a Claude Code session | "Plugins changed. Run /reload-plugins to activate." once the marketplace is fetched |
| `/reload-plugins`, or the next session | `edge` installed; `/edge:setup` runs |
| `/plugins`, gear on `edge` | The settings form, all six options |

### Evals: archives-and-cr2w

The P2 test ([design](design.html#phases)): each case runs with the plugin and without it, and the difference (Δ) is what the skill adds. Runs as you, on your Claude login; the plugin's servers are not started (no mocks), so only the skill is tested. The report stays local with `--no-publish`; results go to `evals/results/`, which git ignores.

```bash
claude plugin eval . --tag archives-and-cr2w --runs 1 -j 3 --no-publish --trust-plugin
```

First run 2026-10-23, Claude Code 2.1.302, one run per arm: 3 cases, $0.49, 41 s.

| Case | With | Without | Seen |
|---|---|---|---|
| `item-to-files` (item to its files, in order, with the linking fields) | 1.00 | 1.00 | Without the plugin, Claude gave the same chain from memory, down to `colorScale` in the `.mlsetup` |
| `path-capitals` (a replaced file with capitals in its path) | 1.00 | 1.00 | Both named the capitals and the path hash |
| `edit-app-mesh` (`components` or `compiledData`) | 1.00 | 1.00 | Both said `components` |

The skill fired in every run with the plugin. **Δ 0.00**: general WolvenKit knowledge is already in the model, so this skill adds little. See the design's P2 note.

### Evals: rednode-mods

```bash
claude plugin eval . --tag rednode-mods --runs 1 -j 3 --no-publish --trust-plugin
```

Run 2026-10-25 at 0.0.10, Claude Code 2.1.310, guide copied from REDnode `00c1947` (0.37.0), with development folders and services in the skill, together with `--tag new-mod` and `--judge-model sonnet`: 5 cases, $1.16, 71 s, **mean Δ +0.95**. The three `rednode-mods` cases Δ +1.00 each as before (`hud-widget` still names `red4ext/plugins/REDnode/apps`); `money-on-screen` +1.00, `cheaper-jackets` +0.75. `money-on-screen` again loaded `rednode-mods`, not `new-mod`.

First run 2026-10-23, Claude Code 2.1.302, one run per arm, skill copied from REDnode `7e0d9ca` (0.32.1): 3 cases, $0.63, 49 s. **Δ +1.00**: without the plugin, Claude failed every case; with it, it passed every one, and the skill fired each time.

| Case | With | Without |
|---|---|---|
| `hud-widget` (manifest, page and folder for a HUD widget showing V's position) | 1.00 | 0.00, and no `red4ext/plugins/REDnode/apps` |
| `mod-output` (where a Node mod's `console.log` goes; `mod.js` with `import`) | 1.00 | 0.00 |
| `data-folder` (a mod writing into its own folder restarts under hot reload) | 1.00 | 0.00, no `pkg.dataDir` |

### Evals: the whole suite

Every case, three runs per arm, judged by Sonnet. The first runs used the default judge (Haiku), which failed correct answers that were long or covered more than the rubric asked (`check-mod` found all three planted problems and got FAIL three times; Sonnet passed the same case). Use `--judge-model sonnet` from now on.

```bash
claude plugin eval . --runs 3 -j 6 --judge-model sonnet --no-publish --trust-plugin
```

Run 2026-10-23 at 0.0.8, Claude Code 2.1.302: 12 cases, 10 pass, **mean Δ +0.68**, $7.91, 5 min 22 s.

| Case | Skill | With | Without (3 runs) | Δ |
|---|---|---|---|---|
| `hud-widget`, `mod-output`, `data-folder` | `rednode-mods` | 1.00 each | 0, 0, 0 | +1.00 each |
| `changed-after-swap` | `wolvenkit-projects` | 1.00 | 0, 0, 0 | +1.00 |
| `into-the-game` | `wolvenkit-projects` | 0.67 (one run failed) | 0, 0, 0 | +0.67 |
| `pack-resources` | `wolvenkit-projects` | 1.00 | 1, 1, 1 | 0.00 |
| `money-on-screen` | `new-mod` | 1.00 | 0, 0, 0 | +1.00 |
| `cheaper-jackets` | `new-mod` | 0.83 | 0.25 each | +0.58 |
| `broken-package` | `check-mod` | 1.00 | 0, 0, 0 | +1.00 |
| `edit-app-mesh` | `archives-and-cr2w` | 1.00 | 0, 1, 0 | +0.67 |
| `item-to-files` | `archives-and-cr2w` | 1.00 | 1, 1, 0.33 | +0.22 |
| `path-capitals` | `archives-and-cr2w` | 1.00 | 1, 1, 1 | 0.00 |

Seen:

- With three runs, `archives-and-cr2w` shows some gain (Δ +0.67 and +0.22), where one run each showed none.
- `new-mod` and `check-mod` never fired on these plain-language prompts: Claude loaded `rednode-mods` instead, which carries the same knowledge, and the answers passed. The commands are for `/edge:new-mod` and `/edge:check-mod`; the in-game test runs them that way.
- `cheaper-jackets` lost points twice on `checks-tweakdb`, a regex for `tweakdb_`: those answers said they would check "with the TweakDB tools" without the tool's name. The regex is stricter than the rubric means.

### Evals: wolvenkit-projects

```bash
claude plugin eval . --tag wolvenkit-projects --runs 1 -j 3 --no-publish --trust-plugin
```

First run 2026-10-23, Claude Code 2.1.302, one run per arm: 3 cases, $0.47, 40 s. **Δ +0.33.**

| Case | With | Without | Seen |
|---|---|---|---|
| `into-the-game` (the steps and tools from an edited project to the game) | 1.00 | 0.00 | Without the plugin, Claude did not know the EDGE servers' flow |
| `pack-resources` (`.xl` and tweak files missing after `project_pack`) | 1.00 | 1.00 | The prompt said `project_pack` ran on `source/archive`, which gives the answer away |
| `changed-after-swap` (EDGEdeck reports a hot-swapped archive) | 1.00 | 1.00 | The prompt described keep and restore; plain Claude reasoned it out |

The two Δ 0 cases test reasoning from a detailed prompt more than knowledge. They stay as they are: rewording prompts until plain Claude fails would only flatter the skill.

### Evals: edge-tools

```bash
claude plugin eval . --tag edge-tools --runs 3 -j 6 --judge-model sonnet --no-publish --trust-plugin
```

First run 2026-10-26, Claude Code 2.1.310, plugin 0.0.12 (the wiki copied from EDGEweb `8b425af`), three runs per arm: 3 cases, $1.78, 51 s. The skill fired in all 9 runs with the plugin. **Mean Δ +0.93** as run; **+1.00** without the regex grader removed after it (below).

| Case | With | Without | Seen |
|---|---|---|---|
| `vortex-switch` (moving from Vortex to EDGEdeck, and back) | 1.00 | 0.00 | Without the wiki, Claude did not know EDGEdeck's Import from Vortex, the purge first, or Undo deploy |
| `edgemat-library` (where the library is, game updates, deleting it) | 1.00 | 0.00 | Without it, a wrong folder or a guess |
| `connect-claude` (connecting Claude Code, the plugin installed) | 0.78 | 0.00 | The judge passed all 3 answers with the plugin: `/edge:setup`, REDnode's MCP server switch. A regex grader for "no `claude mcp add`" failed 2 of them, which only warned to remove servers added by hand that way. The regex was removed; the rubric fails real advice to add servers by hand. Without the plugin, Claude gave `claude mcp add` steps |

### rednode-mods in the game

What the evals cannot show: Claude building a package in the running game with the skill and the `rednode` server. Plugin 0.0.6 or newer, the game at a loaded save, **Hot reload** on in the REDnode launcher's Settings panel (the gear at the right of the Theme row). In a new session:

> Make me a small REDnode HUD widget at the top of the screen that shows V's position. Build it in my game and check it works.

| Check | Expected |
|---|---|
| Before writing | It looks up the game functions it uses (`gameapi_lookup`) |
| Where | A folder in `red4ext/plugins/REDnode/apps/`, with `rednode-app.json` (`"kind": "hud"`) and a page; Claude Code asks before writing |
| After writing | It checks the package with `apps`, `logs` or a screenshot, and says what it checked |
| In the game | The widget shows V's position at the top of the screen |

First run 2026-10-23 on the user's laptop, in the VS Code extension, plugin 0.0.6, REDnode 0.32.1: **pass**, in the user's words "it showed up properly and worked". The package folder can be deleted afterwards.

### init-project on a real project

Not run yet. In a session with the plugin, in a WolvenKit project (for example one under `E:\Modding\Cyberpunk 2077\Projects`) and in a REDnode package folder:

```
/edge:init-project
```

| Check | Expected |
|---|---|
| What it finds | The project's kind from its files, and the frameworks from `source/resources` |
| An existing `CLAUDE.md` | It asks before changing it and adds an `## EDGE` section |
| The paths it writes | Only ones in `skills/init-project/layouts.md` or the project itself |
