# Dev setup

What a PC needs to build and test EDGEplugin. Taken from the Claude Code docs on 2026-10-16; the validate and install steps ran in P0 on a throwaway copy (below). P1 runs the rest and records exact versions.

| Tool | Why | Notes |
|---|---|---|
| Claude Code (CLI) | Loads, validates and evaluates the plugin | 2.1.299 on the dev PC (2026-10-16): has `plugin validate`, `eval`, `details`, `configure` |
| The Claude Code VS Code extension | Tests the plugin where most modders will use it | Also in EDGEkit, from Open VSX, once EDGEkit's K1 build exists |
| Cyberpunk 2077 with REDnode | The `rednode` MCP server, for checking skills against the running game | [REDnode MCP setup](https://edgemodders.github.io/REDnode/mcp.html) |
| REDcode's `redcode-mcp` and REDbridge | The `redcode` MCP server, for the game's files offline | [REDcode MCP setup](https://edgemodders.github.io/REDcode/mcp.html). On npm as `@edgemodders/redcode-mcp` (0.2.0); the plugin starts it with `npx`, so Node.js is needed |
| Node.js | `npx` for `redcode-mcp` | Record the version in P1 |

## Test without touching your own Claude Code

`CLAUDE_CONFIG_DIR` points Claude Code at another settings folder, so an install test leaves your own plugins and servers alone. This is how P0 checked the single-repo marketplace:

```
export CLAUDE_CONFIG_DIR=<an empty scratch folder>
claude plugin marketplace add <path to this checkout>
claude plugin install edge@edgemodders
claude plugin details edge@edgemodders      # parts and always-on token cost
claude plugin configure edge@edgemodders    # the userConfig values
claude mcp list                             # servers show as plugin:edge:<name>
```

A server added by hand with the same URL (REDnode's **Copy setup**) hides the plugin's copy. Remove it with `claude mcp remove rednode -s user` before testing the plugin's.

A scratch config has no Claude login, so `claude -p` does not work there. To test a stdio server without Claude, speak MCP to it directly: send `initialize`, then `notifications/initialized`, then `tools/call`, one JSON line each, on its stdin. P1 tested `scripts/redcode-mcp.cmd` this way with `bridge_info`.

## The dev loop

```
claude --plugin-dir .                # this checkout as a plugin, for one session
/reload-plugins                      # in the session, after an edit
claude plugin validate .                          # the marketplace manifest
claude plugin validate .claude-plugin/plugin.json  # the plugin manifest
claude plugin validate skills --strict            # the skills
# Without --strict for the first two: they warn that this repo's own CLAUDE.md is not plugin context, which is expected.
claude plugin eval                   # the eval cases, with and without the plugin
```

Install it as a user would, from a local marketplace path:

```
/plugin marketplace add ./
/plugin install edge@edgemodders
```
