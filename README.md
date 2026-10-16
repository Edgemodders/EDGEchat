<p align="center">
  <img src="docs/assets/brand/banner.png" alt="EDGEplugin: the EDGEmodders plugin for Claude Code. Makes Claude a Cyberpunk 2077 modding assistant. For Claude Code, gives skills and MCP servers, MIT." width="100%">
</p>

<p align="center">
  <a href="https://edgemodders.github.io/EDGEplugin/"><img src="docs/assets/brand/badges/docs.svg" alt="docs: read the docs"></a>
  <img src="docs/assets/brand/badges/status.svg" alt="status: design draft">
  <img src="docs/assets/brand/badges/game.svg" alt="game: Cyberpunk 2077">
  <img src="docs/assets/brand/badges/for.svg" alt="for: Claude Code">
  <a href="LICENSE"><img src="docs/assets/brand/badges/license.svg" alt="license: MIT"></a>
</p>

The EDGE plugin for [Claude Code](https://code.claude.com/docs/en/overview): it makes Claude a Cyberpunk 2077 modding assistant. Skills that know the game's files and frameworks, the EDGE tools that read the game's archives and the running game, and commands such as "start a new mod", in one install. It works in [EDGEkit](https://github.com/Edgemodders/EDGEkit), in VS Code, and in a terminal.

**[Docs](https://edgemodders.github.io/EDGEplugin/)** · [Design](https://edgemodders.github.io/EDGEplugin/design.html) · [EDGEkit](https://github.com/Edgemodders/EDGEkit) · [REDagent](https://github.com/Edgemodders/REDagent)

> [!NOTE]
> **Status: P1, skeleton.** It installs and connects the servers, with two commands (`/edge:setup`, `/edge:init-project`). No modding skills yet. Windows only for the servers.

## Install

In Claude Code (the CLI, or `/plugins` in the VS Code extension and EDGEkit):

```
/plugin marketplace add Edgemodders/EDGEplugin
/plugin install edge@edgemodders
```

Then run `/edge:setup`. It checks the servers and says what is missing. The plugin asks for three settings, all optional: REDnode's token (from the game's launcher, **F10**, **REDNODE** tab, **Copy setup**), the game folder and `REDbridge.exe` (not needed if REDcode is set up in VS Code). Change them later with `/plugin configure edge@edgemodders`, or the gear on the plugin in VS Code.

The servers need Windows, the game with REDnode for `rednode`, and Node.js, the .NET 10 runtime and REDbridge 0.8.0 or newer for `redcode`. If you added `rednode` or `redcode` by hand before, remove that copy (`/edge:setup` explains how).

`edge` and `edgemodders` are working names until the first release.

## What it will give Claude

| Part | What |
|---|---|
| Skills | Modding knowledge, loaded only when a task needs it: the game's folders and frameworks, WolvenKit projects, archives and CR2W, TweakXL, ArchiveXL, redscript, CET, REDnode mods |
| MCP servers | [REDnode](https://edgemodders.github.io/REDnode/mcp.html)'s kernel server (the running game), [REDcode](https://edgemodders.github.io/REDcode/mcp.html)'s `redcode-mcp` (the game's files, offline) and REDdeck's (mods and deploys); EDGEmat's later |
| Commands | Set up and check the connections, start a mod, check a mod, write a project's `CLAUDE.md` |

Made by EDGEmodders. Not affiliated with Anthropic or CD PROJEKT RED. Claude and Claude Code are trademarks of Anthropic; Cyberpunk 2077 is a trademark of CD PROJEKT.

## License

MIT. See [LICENSE](LICENSE).
