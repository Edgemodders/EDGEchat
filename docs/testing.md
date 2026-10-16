# <span class="y">Tests</span>

Every test run on EDGEplugin so far: how to run it again, what to expect, and what it showed. Each phase ends with a test on the dev PC ([design, "Phases"](design.html#phases)); new tests are added here when they are first run.

Last updated 2026-10-16.

## At a glance

| Test | Kind | Phase | Last run | Result |
|---|---|---|---|---|
| [Validate](#validate) | CLI | P0, P1 | 2026-10-16 | Pass, one expected warning |
| [Install from the checkout](#install-from-the-checkout) | CLI, scratch config | P0, P1 | 2026-10-16 | Pass |
| [Install from GitHub](#install-from-github) | CLI, scratch config | P1 | 2026-10-16 | Pass |
| [Plugin servers beside servers added by hand](#plugin-servers-beside-servers-added-by-hand) | CLI, scratch config | P0 | 2026-10-16 | Seen, recorded in the design |
| [Unset options](#unset-options) | CLI, scratch config | P1 | 2026-10-16 | Seen: empty string |
| [redcode server through the wrapper](#redcode-server-through-the-wrapper) | By hand, over stdio | P1 | 2026-10-16 | Pass |
| [rednode with no token](#rednode-with-no-token) | CLI, game running | P1 | 2026-10-16 | Seen: HTTP 401 |
| [P1 test in VS Code with the game](#p1-test-in-vs-code-with-the-game) | By hand, in a session | P1 | Not run | |
| [init-project on a real project](#init-project-on-a-real-project) | By hand, in a session | P1 | Not run | |

The skills have not run in a Claude Code session yet. A scratch config has no Claude login, so every test so far checked how the plugin installs and starts its servers, not what Claude does with it. The last two tests are the first ones in a session.

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

Last run 2026-10-16 with Claude Code 2.1.299: **pass.**

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

Last run 2026-10-16: **pass.**

| Check | Expected |
|---|---|
| Install | "Successfully installed plugin: edge@edgemodders (scope: user)" and "3 userConfig options not yet set" |
| `details` | Skills `init-project`, `setup`; MCP servers `rednode`, `redcode`; always-on cost about 150 tokens |
| `configure` | `game_path`, `rednode_token` (sensitive), `redbridge_exe`, all optional and not set |
| `mcp list` | `plugin:edge:redcode ... Connected`. `plugin:edge:rednode` connects only while the game runs (see [rednode with no token](#rednode-with-no-token)) |

With a local marketplace the plugin is read from the checkout (`CLAUDE_PLUGIN_ROOT` is the checkout itself), and the checkout's path has spaces: `redcode` still connects.

### Install from GitHub

What a user does. Needs the commit pushed.

```bash
claude plugin marketplace add Edgemodders/EDGEplugin
claude plugin install edge@edgemodders
claude mcp list
```

Last run 2026-10-16 at `4f07db8`: **pass.** The same results as from the checkout; the plugin runs from `<config>/plugins/cache/edgemodders/edge/0.0.1/`, and `redcode` connects from there.

### Plugin servers beside servers added by hand

Run 2026-10-16 in P0, on a throwaway copy of the plugin. Results, recorded in the [design's facts](design.html#facts-that-shape-the-design):

| Setup | `claude mcp list` showed |
|---|---|
| Plugin installed | `plugin:edge:redcode` and `plugin:edge:rednode`: plugin servers are named `plugin:<plugin>:<server>` |
| Plugin installed, plus `claude mcp add --transport http --scope user rednode http://127.0.0.1:41820/mcp ...` | Only the hand-added `rednode`; the plugin's copy is not listed. After `claude mcp remove rednode -s user`, `plugin:edge:rednode` is back |
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

Last run 2026-10-16: **pass.**

| Run | Expected |
|---|---|
| Through `scripts\redcode-mcp.cmd` | `gameLoaded: true`, REDbridge 0.8.0, WolvenKit 9.1.0, 57 archives, 583,798 files with the game on the dev PC; exit 0. The log names the bridge and game it took from REDcode's settings |
| The same, from a copy of the plugin in a folder with a space in its name | The same |
| `npx` directly, without the wrapper | Fails: "The argument 'file' cannot be empty. Received ''"; exit 1. This is why the wrapper exists ([design](design.html#mcp-servers)) |

On the dev PC, REDcode's setting points at a Release build in the REDbridge checkout, not an installed REDbridge.

### rednode with no token

Seen 2026-10-16 while the game ran, plugin installed in a scratch config with no `rednode_token`:

```
plugin:edge:rednode: http://127.0.0.1:41820/mcp (HTTP) - ✘ Failed to connect — Server rejected the configured Authorization header (HTTP 401). ... {"error":"A valid token is required"}
```

With the game closed it is `ECONNREFUSED` instead. `/edge:setup` tells the two apart this way.

### P1 test in VS Code with the game

Not run yet. The test that ends P1 ([design](design.html#phases)). Needs your own Claude Code login, so it runs in your real config.

1. Remove a `rednode` added by hand, which hides the plugin's: `claude mcp remove rednode -s user`.
2. In the VS Code extension: `/plugins`, add the marketplace `Edgemodders/EDGEplugin`, install `edge`.
3. Start the game. **F10**, **REDNODE** tab, **MCP server** on, **Copy setup**. Put only the token (after `Bearer `) in the plugin's `rednode_token`: the gear on the `edge` row.
4. Start a new session and run `/edge:setup`.

| Check | Expected |
|---|---|
| The settings form | Opens after install with the three options |
| `/edge:setup` | A table: `rednode` connected with the game state, `redcode` connected with REDbridge's version and the archive count |
| The tool names | `mcp__plugin_edge_rednode__*` and `mcp__plugin_edge_redcode__*` |
| `api_call` | Asks before it runs |

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
