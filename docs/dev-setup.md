# Dev setup

What a PC needs to build and test EDGEplugin. **Unverified:** taken from the Claude Code docs on 2026-10-16, not yet run here. P1 runs it and records exact versions.

| Tool | Why | Notes |
|---|---|---|
| Claude Code (CLI) | Loads, validates and evaluates the plugin | Recent enough for `claude plugin validate` and `claude plugin eval`; record the version in P1 |
| The Claude Code VS Code extension | Tests the plugin where most modders will use it | Also in EDGEkit, from Open VSX, once EDGEkit's K1 build exists |
| Cyberpunk 2077 with REDnode | The `rednode` MCP server, for checking skills against the running game | [REDnode MCP setup](https://edgemodders.github.io/REDnode/mcp.html) |
| REDcode's `redcode-mcp` and REDbridge | The `redcode` MCP server, for the game's files offline | [REDcode MCP setup](https://edgemodders.github.io/REDcode/mcp.html); until it is published, build it from a REDcode checkout |

## The dev loop

```
claude --plugin-dir .                # this checkout as a plugin, for one session
/reload-plugins                      # in the session, after an edit
claude plugin validate . --strict    # the manifest, the marketplace and the skills
claude plugin eval                   # the eval cases, with and without the plugin
```

Install it as a user would, from a local marketplace path:

```
/plugin marketplace add ./
/plugin install <plugin>@<marketplace>
```
