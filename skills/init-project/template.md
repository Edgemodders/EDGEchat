# Template for a mod project's CLAUDE.md

Fill the angle brackets; drop the rows and sections that do not apply.

```markdown
# <Mod name>

<One sentence: what the mod does in the game.> A Cyberpunk 2077 mod, <a WolvenKit project / a REDnode package / a CET mod / ...>.

## Layout

| Path | Holds | Deploys to |
|---|---|---|
| <path in this project> | <what> | <path under the game folder> |

## Build and test

1. <For a WolvenKit project: pack (REDcode's Pack, or redcode's project_pack) into packed/.>
2. <Install with EDGEdeck (edgedeck_install_project with <Name>.cpmodproj), then deploy (edgedeck_deploy). Ask before deploying.>
3. <For a REDnode package: turn on Hot reload in the launcher; saving reloads it.>
4. Check the game: the rednode server's `logs` tool, <red4ext/logs/rednode-mods.log for a Node mod>.

## Rules

- Never change the game's own files. Everything this mod changes lives in this project and reaches the game through EDGEdeck, which can undo a deploy.
- Do not write into the game folder by hand.
- Editing CR2W files: edit `components`, never `compiledData`; numbers are 32-bit floats; defaults are not stored.
- Read the running game with the rednode server's `api_read`. Its `api_call` and `archives_reload` change the game: use them only for a change the user asked for (Claude Code asks before each call).

## Tools

The EDGE plugin for Claude Code gives the `rednode` server (the running game), the `redcode` server (the game's files) and the `edgedeck` server (the mod library and deploys). `/edge:setup` checks them.
```
