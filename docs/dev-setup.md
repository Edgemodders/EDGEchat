# Dev setup

What a PC needs to build and test EDGEchat. Taken from the Claude Code docs on 2026-10-16; the validate and install steps ran in P0 on a throwaway copy (below). Versions are the dev PC's on the date given.

| Tool | Why | Notes |
|---|---|---|
| Claude Code (CLI) | Loads, validates and evaluates the plugin | 2.1.299 on the dev PC at P0 (2026-10-16), 2.1.302 for the tests of 2026-10-21 to 2026-10-23, 2.1.310 on 2026-10-24: has `plugin validate`, `eval`, `details`, `configure` |
| The Claude Code VS Code extension | Tests the plugin where most modders will use it | EDGEkit installs it from Open VSX at its first start |
| Cyberpunk 2077 with REDnode | The `rednode` MCP server, for checking skills against the running game | [REDnode MCP setup](https://edgemodders.github.io/REDnode/mcp.html) |
| REDcode's `redcode-mcp` and REDbridge | The `redcode` MCP server, for the game's files offline | [REDcode MCP setup](https://edgemodders.github.io/REDcode/mcp.html). On npm as `@edgemodders/redcode-mcp`; the plugin pins 0.7.0 in `plugin.json` and starts it with `npx`. REDbridge 0.12.0 or newer (0.19.0 on the dev PC, 2026-11-25; `mesh_items` needs 0.11.0, outfit sets 0.12.0) from [its releases](https://github.com/Edgemodders/REDbridge/releases), and the .NET 10 runtime (10.0.9 on the dev PC, 2026-10-24) |
| `edgedeck-mcp`, `edgemat-mcp`, `edgefab-mcp`, `edgehack-mcp`, `edgequest-mcp` | The `edgedeck`, `edgemat`, `edgefab`, `edgehack` and `edgequest` servers | On npm under `@edgemodders/`: edgedeck-mcp pinned 0.34.1 in `scripts/edgedeck-mcp.cmd`; edgemat-mcp 0.3.4, edgefab-mcp 0.2.1, edgehack-mcp 0.1.3 and edgequest-mcp 0.1.1 pinned in `plugin.json` (2026-11-25); `npx` fetches them at the first start |
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

1. Raise `version` in `.claude-plugin/plugin.json`, rename **Unreleased** in `docs/changelog.md` to `## <version> (<date>)` and start a new empty one, and write the section's Nexus summary (the `<!-- nexus` block, rules at the top of the changelog; `node tools/release/notes.mjs --nexus` checks it, and `node ../EDGErepo/tools/nexus/nexus.mjs notes --notes <file>` checks the printed file as the release will). Update the README's status line and badge (CLAUDE.md, "README at each release"); commit and push.
2. Run the workflow with **Make a release** ticked: it builds `EDGEchat-<version>.zip` (`tools/release/nexus-zip.mjs`), tags `v<version>` and makes the GitHub release with the notes from the changelog (`tools/release/notes.mjs`).
3. Tick **Update Nexus Mods** too to upload the zip to the Nexus page (35680) with Mod Manager Download off, add the changelog and push `nexus/description.bbcode` (nexus/README.md). Needs the `NEXUS_KEY` organisation secret.

4. **The wiki, right after the release** (EDGEchat#7, the rule for every Edgemodders repo): in the sibling checkout `../EDGEweb`, bring every page that tells a modder about EDGEchat up to the version: its section `docs/wiki/edgechat/`, `docs/wiki/connect-claude-code.md`, its rows on the shared pages (such as `wiki/library.md`, `wiki/glossary.md`, `wiki/first-hour.md`, `wiki/faq.md`), its card on `docs/index.html` and its section on `docs/platform.html` (`grep -rln -i edgechat docs` finds the rest). The version's changelog section is the list of what changed. Set each changed page's `reviewed` date, follow EDGEweb's `CLAUDE.md` (Wiki) for front matter, terms and screenshots, and commit and push to EDGEweb's `main` as `CyberbuildsAI`. Only with a release, never ahead of it: the wiki describes what modders can install. Then copy the wiki back into `edge-tools` (`node tools/sync-docs.mjs wiki`) for the next version.
5. Pull the Nexus record (`node ../EDGErepo/tools/nexus/nexus.mjs pull`) and commit `nexus/nexus.json`, and update EDGEchat's entry on the EDGE dashboard (CLAUDE.md, Dashboard).

Users of the marketplace get the new version from `main` either way; the release is the zip and the Nexus page. Only after every test of the builds since the last release has passed (docs/testing.md).

On the dev PC, `node ../EDGErepo/tools/nexus/nexus.mjs status` shows the page, and `node ../EDGErepo/tools/nexus/nexus.mjs check --version <v>` what a release would do; both read the Nexus key from `%APPDATA%\Edgemodders\nexus-key.txt` (EDGErepo's `tools/nexus/api.mjs`). To run them, check out [EDGErepo](https://github.com/Edgemodders/EDGErepo) beside this repo; the release workflow clones it by itself.
