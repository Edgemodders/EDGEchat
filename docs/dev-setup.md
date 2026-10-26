# Dev setup

What a PC needs to build and test EDGEchat. Taken from the Claude Code docs on 2026-10-16; the validate and install steps ran in P0 on a throwaway copy (below). Versions are the dev PC's on the date given.

| Tool | Why | Notes |
|---|---|---|
| Claude Code (CLI) | Loads, validates and evaluates the plugin | 2.1.299 on the dev PC at P0 (2026-10-16), 2.1.302 for the tests of 2026-10-21 to 2026-10-23, 2.1.310 on 2026-10-24: has `plugin validate`, `eval`, `details`, `configure` |
| The Claude Code VS Code extension | Tests the plugin where most modders will use it | EDGEkit installs it from Open VSX at its first start |
| Cyberpunk 2077 with REDnode | The `rednode` MCP server, for checking skills against the running game | [REDnode MCP setup](https://edgemodders.github.io/REDnode/mcp.html) |
| REDcode's `redcode-mcp` and REDbridge | The `redcode` MCP server, for the game's files offline | [REDcode MCP setup](https://edgemodders.github.io/REDcode/mcp.html). On npm as `@edgemodders/redcode-mcp`; the plugin pins 0.3.0 in `scripts/redcode-mcp.cmd` and starts it with `npx`. REDbridge 0.8.0 or newer (0.10.0 on the dev PC) from [its releases](https://github.com/Edgemodders/REDbridge/releases), and the .NET 10 runtime (10.0.9 on the dev PC, 2026-10-24) |
| `edgedeck-mcp`, `edgemat-mcp` | The `edgedeck` and `edgemat` servers | On npm as `@edgemodders/edgedeck-mcp` (pinned 0.28.0 in `scripts/edgedeck-mcp.cmd`) and `@edgemodders/edgemat-mcp` (pinned 0.3.1 in `plugin.json`); `npx` fetches them at the first start |
| Node.js | `npx` for the stdio servers; `tools/sync-docs.mjs` and `tools/test/mcp-probe.cjs` | 20 or newer. 24.11.1 on the dev PC (2026-10-24) |
| Python, Chrome or Edge | `tools/brand/render.ps1` (brand images, headless Chrome or Edge) and `tools/brand/badges.py` (the README badges, also run alone with `python -I tools/brand/badges.py docs/assets/brand/badges`) | Python 3.13.9 on the dev PC (2026-10-24) |

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

A scratch config has no Claude login, so `claude -p` does not work there. To test a stdio server without Claude, `tools/test/mcp-probe.cjs` speaks MCP to it directly and calls one tool. Every test and its last result is on the [tests page](testing.html).

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

## Releasing

The **Release** workflow (`.github/workflows/release.yml`, Actions tab, Run workflow) releases the same way as EDGEmat's and REDnode's:

1. Raise `version` in `.claude-plugin/plugin.json`, rename **Unreleased** in `docs/changelog.md` to `## <version> (<date>)` and start a new empty one; commit and push.
2. Run the workflow with **Make a release** ticked: it builds `EDGEchat-<version>.zip` (`tools/release/nexus-zip.mjs`), tags `v<version>` and makes the GitHub release with the notes from the changelog (`tools/release/notes.mjs`).
3. Tick **Update Nexus Mods** too to upload the zip to the Nexus page (35680) with Mod Manager Download off, add the changelog and push `nexus/description.bbcode` (nexus/README.md). Needs the `NEXUS_KEY` organisation secret.

Users of the marketplace get the new version from `main` either way; the release is the zip and the Nexus page. Only after every test of the builds since the last release has passed (docs/testing.md).

On the dev PC, `node tools/nexus/nexus.mjs status` shows the page, and `node tools/nexus/nexus.mjs check --version <v>` what a release would do; both read the Nexus key from `%APPDATA%\Edgemodders\nexus-key.txt` (`tools/nexus/api.mjs`).
