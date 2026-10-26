<p align="center">
  <img src="docs/assets/brand/banner.png" alt="EDGEchat: the EDGEmodders plugin for Claude Code. Makes Claude a Cyberpunk 2077 modding assistant. For Claude Code, gives skills and MCP servers, MIT." width="100%">
</p>

<p align="center">
  <a href="https://edgemodders.github.io/EDGEchat/"><img src="docs/assets/brand/badges/docs.svg" alt="docs: read the docs"></a>
  <img src="docs/assets/brand/badges/status.svg" alt="status: 0.1.0">
  <img src="docs/assets/brand/badges/game.svg" alt="game: Cyberpunk 2077">
  <img src="docs/assets/brand/badges/for.svg" alt="for: Claude Code">
  <a href="LICENSE"><img src="docs/assets/brand/badges/license.svg" alt="license: MIT"></a>
</p>

Chat with EDGE in [Claude Code](https://code.claude.com/docs/en/overview). EDGEchat is a plugin that makes Claude a Cyberpunk 2077 modding assistant. Skills that know the game's files and frameworks, the EDGE tools that read the game's archives and the running game, and commands such as "start a new mod", in one install. It works in [EDGEkit](https://github.com/Edgemodders/EDGEkit), in VS Code, and in a terminal.

EDGEchat is not an agent: it connects Claude Code to EDGE while you build mods. [REDagent](https://github.com/Edgemodders/REDagent) is the agent in the game, with its own window and tools.

**[Docs](https://edgemodders.github.io/EDGEchat/)** · [Design](https://edgemodders.github.io/EDGEchat/design.html) · [EDGEkit](https://github.com/Edgemodders/EDGEkit) · [REDagent](https://github.com/Edgemodders/REDagent)

> [!NOTE]
> **Status: 0.1.0, the first release (2026-10-26).** It installs and connects the REDnode, REDcode, EDGEdeck and EDGEmat servers. Skills: `rednode-mods`, `wolvenkit-projects`, `archives-and-cr2w`, `edge-tools`. Commands: `/edge:setup`, `/edge:new-mod`, `/edge:check-mod`, `/edge:init-project`. Windows only for the servers. REDnode supports game version 2.5 from 0.38.1 (0.37.0 is the last for 2.31). The skills' game facts were checked on 2.5 (2026-10-26).

## Install

**In EDGEkit:** EDGEkit 1.140.2 or newer offers EDGEchat after its first-run steps. Click **Set Up**, then **Install** in Claude Code's plugin dialog; EDGEkit then opens a Claude Code session with `/edge:setup` ready to run.

**In VS Code** (the Claude Code extension's panel):

1. Type `/plugins` in the prompt box. The **Manage plugins** dialog opens.
2. In its **Marketplaces** tab, enter `Edgemodders/EDGEchat` to add EDGEchat's marketplace.
3. In its **Plugins** tab, find `edge` under the available plugins and click **Install**. Choose **Install for you**, so it works in every folder.
4. A form asks for the plugin's settings (below). Fill in what you need, scroll down to **Save configuration** at the bottom, and save.

In VS Code, you can also open this link from the Run dialog (Win+R) or a browser. It opens the same dialog on EDGEchat, adding the marketplace first:

```
vscode://anthropic.claude-code/install-plugin?plugin=edge&marketplace=Edgemodders/EDGEchat
```

**From a terminal prompt** (PowerShell, cmd or any shell, with Claude Code installed):

```
claude plugin install edge --marketplace Edgemodders/EDGEchat
```

It adds EDGEchat's marketplace and installs the plugin for you (user scope). Settings can go on the same line, one `--config` each, such as `--config game_path="E:\SteamLibrary\steamapps\common\Cyberpunk 2077"`. `claude plugin configure edge@edgemodders` lists the settings and which are unset.

**Inside a running `claude` session** in a terminal, the same as two slash commands:

```
/plugin marketplace add Edgemodders/EDGEchat
/plugin install edge@edgemodders
```

Every way installs the same plugin: the VS Code extension and the CLI share their plugins.

Then restart Claude Code (in VS Code, **Developer: Reload Window**) and run `/edge:setup`. It checks the servers and says what is missing.

The plugin asks for five settings, all optional: the game folder and `REDbridge.exe` (not needed if REDcode is set up in VS Code), EDGEdeck's library folder (only if you moved it from the default), and a Google Gemini or OpenAI key for EDGEmat's materials from words (your own key, billed to you). The keys are kept in your system's credential store. Change the settings later with the gear on the `edge` row in `/plugins` (then **Save configuration**, at the bottom of the form), or `/plugin configure edge@edgemodders` inside a `claude` session. The servers read their settings only when they start, so restart Claude Code after a change.

REDnode needs no setting: you allow Claude Code in the game. Start the game with REDnode, and in its Settings panel (**F10**, the **REDNODE** tab at the bottom left, then the gear at the right of the Theme row) switch **MCP server** on. In Claude Code, open `/mcp`, pick `plugin:edge:rednode` and choose **Authenticate**. Your browser shows a code; the game shows the same code in a **Connect** window. Press **F10**, then **Allow**. It stays signed in across game restarts, and REDnode's **Connected assistants** list can revoke it.

The servers need Windows and Node.js 20 or newer; the game 2.5 with REDnode 0.40.1 or newer for `rednode` (on game 2.31, REDnode 0.37.0 has no sign-in: add it by hand with its **Copy setup** command instead); the .NET 10 runtime and REDbridge 0.10.0 or newer for `redcode` and `edgemat`. Which REDbridge: on game 2.5, 0.10.0 reads all but some quest world sectors (262 of 3,041) and 0.11.0 reads them all; on game 2.31, keep 0.10.0, because 0.11.0 (WolvenKit 10 beta) misreads 2.31's world sectors. REDbridge needs no extension: download `REDbridge-<version>-win-x64.zip` from [its releases](https://github.com/Edgemodders/REDbridge/releases), unzip it anywhere and put the path of `REDbridge.exe` in the plugin's REDbridge setting (REDcode's **Install REDbridge** command in VS Code does the same). If you added `rednode`, `redcode`, `edgedeck` or `edgemat` by hand before, remove that copy (`/edge:setup` explains how).

The plugin is called `edge`, so commands stay short.

## Update

Auto-update is off by default for marketplaces like this one. To update by hand, from a terminal prompt:

```
claude plugin marketplace update edgemodders
claude plugin update edge@edgemodders
```

Inside a running `claude` session, the same commands start with `/plugin` instead of `claude plugin`. In VS Code, the refresh icon in `/plugins`' **Marketplaces** tab updates EDGEchat's listing.

To get new versions without asking, turn auto-update on: in the **Marketplaces** tab of `/plugins` (VS Code, EDGEkit) or `/plugin` (terminal), select `edgemodders`, then **Enable auto-update**. Claude Code then updates the plugin when a session starts, and the next session loads it.

Then restart Claude Code. A new version may add settings without saying so: `/edge:setup` names them.

## What it gives Claude

| Part | What |
|---|---|
| Skills | Modding knowledge, loaded only when a task needs it: REDnode packages (`rednode-mods`), WolvenKit projects across the EDGE tools (`wolvenkit-projects`), archives and CR2W files (`archives-and-cr2w`), how the EDGE tools work, from the EDGEmodders wiki (`edge-tools`). More (TweakXL, ArchiveXL, redscript, CET) only where tests show Claude needs them |
| MCP servers | [REDnode](https://edgemodders.github.io/REDnode/mcp.html)'s kernel server (the running game), [REDcode](https://edgemodders.github.io/REDcode/mcp.html)'s `redcode-mcp` (the game's files, offline), [EDGEdeck](https://github.com/Edgemodders/EDGEdeck)'s `edgedeck-mcp` (mods and deploys) and [EDGEmat](https://github.com/Edgemodders/EDGEmat)'s `edgemat-mcp` (materials); the other EDGE tools' as they are published, with every setting they need in the plugin's one form |
| Commands | `/edge:setup` checks the connections, `/edge:new-mod` starts a mod with you, `/edge:check-mod` finds what is wrong with one, `/edge:init-project` writes a project's `CLAUDE.md` |

Tools that change your game or your game folder (REDnode's `api_call` and `archives_reload`, EDGEdeck's deploy, undo and remove, and others) ask you before every call, in every permission mode. Reads of the game do not ask.

Made by EDGEmodders. Not affiliated with Anthropic or CD PROJEKT RED. Claude and Claude Code are trademarks of Anthropic; Cyberpunk 2077 is a trademark of CD PROJEKT.

## License

MIT. See [LICENSE](LICENSE).
