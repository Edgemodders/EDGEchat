# EDGEchat design

EDGEchat is the EDGE plugin for [Claude Code](https://code.claude.com/docs/en/overview): one install that makes Claude a Cyberpunk 2077 modding assistant. It gives Claude the **context** (what the game's files, frameworks and folders are, and the EDGE house rules) and the **tools** (the EDGE MCP servers, which read the game's archives, the TweakDB and the running game). It works wherever Claude Code runs: in EDGEkit, in VS Code, and in a terminal.

**Status: draft 0.7, P1 done 2026-10-21; the tools that change things ask before every call, from their own servers (2026-10-22); `edgemat` added 2026-10-23 (plugin 0.0.5); renamed from EDGEplugin to EDGEchat on 2026-10-17; `edgedeck` added 2026-10-21 (plugin 0.0.2).** Proposed in the EDGEkit session on 2026-10-16 and agreed with the user, who created the repo. P0's checks ran on 2026-10-16 (see [P0 decisions](#p0-decisions)). P1's skeleton (manifest, marketplace, `rednode`, `redcode` and `edgedeck`, the `setup` and `init-project` skills) installs from GitHub, and in VS Code with the game running `/edge:setup` reported all three servers connected ([tests](testing.html#p1-test-in-vs-code-with-the-game)). P2, the knowledge skills, is next. The plugin is the one place every EDGE tool's MCP server reaches Claude Code, with every setting they need in one form ([Every EDGE server](#every-edge-server-in-the-plugin)).

## Why a plugin

Claude Code already runs in EDGEkit (from Open VSX) and in VS Code. Out of the box it knows little about Cyberpunk modding and cannot see the game. Claude Code has four standard ways to change that; a plugin carries the first three in one install.

| Mechanism | What it gives Claude | Role in EDGEchat |
|---|---|---|
| Skills | Instructions loaded only when a task needs them; their short descriptions are always in context | The modding knowledge, one skill per topic |
| MCP servers | Real tools | REDcode's `redcode-mcp` (archives, CR2W, TweakDB, sounds, offline), REDnode's kernel server (the running game), EDGEdeck's `edgedeck-mcp` (the mod library and deploys), later EDGEmat's `edgemat-mcp` and the other EDGE tools' servers |
| Skills the user calls (slash commands) | Repeatable tasks | Set up, start a mod, check a mod, write a project's CLAUDE.md |
| A project `CLAUDE.md` | Always-on context for one folder | A plugin cannot ship one (Claude Code ignores a plugin's CLAUDE.md). A skill writes one into the mod's project when the user asks |

## Facts that shape the design

From the Claude Code docs, read on 2026-10-16. Each row names its page under `https://code.claude.com/docs/en/`.

| Fact | Consequence | Page |
|---|---|---|
| A plugin is a folder with `.claude-plugin/plugin.json` (only `name` is required); `skills/<name>/SKILL.md`, `agents/`, `hooks/hooks.json`, `.mcp.json` and `bin/` sit at the plugin root | The repo root is the plugin | `plugins/manifest-reference` |
| A marketplace is `.claude-plugin/marketplace.json` with `name`, `owner.name` and `plugins` (each with `name` and `source`). A source of `"./"` means the marketplace's own root | This repo is both the marketplace and the plugin. **Checked in P0** (Claude Code 2.1.299): both manifests pass `claude plugin validate --strict`, and `marketplace add` of the folder then `plugin install edge@edgemodders` installs it. `--strict` wants a top-level `description` in `marketplace.json`. `validate .` checks the marketplace manifest; validate `plugin.json` by its path too | `plugins/marketplace-reference` |
| Users install with `/plugin marketplace add Edgemodders/EDGEchat`, then `/plugin install <plugin>@<marketplace>`; recent versions also take `claude plugin install <plugin> --marketplace Edgemodders/EDGEchat` | The README gives these two commands | `plugins/install` |
| Plugin and marketplace names are kebab-case and must not look like Anthropic's (for example not starting `claude-` or `anthropic-`) | See the naming question in P0 | `plugins/manifest-reference` |
| Skills: YAML frontmatter (`name`, `description`, `when_to_use`, `disable-model-invocation`, `user-invocable`, `allowed-tools`, ...), then Markdown. Descriptions are always in context (cut at 1,536 characters with `when_to_use`); the body loads when used. Keep `SKILL.md` under 500 lines; reference files and `scripts/` can sit beside it | Many small skills with sharp descriptions, details in reference files | `skills` |
| Plugin skills are namespaced: `/<plugin>:<skill>` | Commands read like `/edge:new-mod` if the plugin is named `edge` | `skills` |
| MCP servers go in `.mcp.json` (a `mcpServers` map: `command`, `args`, `env` for stdio; `url`, `headers` for http). `${CLAUDE_PLUGIN_ROOT}`, `${CLAUDE_PLUGIN_DATA}` and `${CLAUDE_PROJECT_DIR}` are substituted | REDnode's server is http with a bearer token; `redcode-mcp` is stdio | `mcp`, `plugins/manifest-reference` |
| `userConfig` in `plugin.json` asks the user for settings at install (types `string`, `number`, `boolean`, `directory`, `file`; `sensitive` values go to the OS secure store), used as `${user_config.KEY}` | The game folder and REDnode's token are asked once, the token kept secret | `plugins/manifest-reference` |
| The VS Code extension manages plugins with `/plugins` and shares plugins, marketplaces and MCP settings with the CLI. It installs in other VS Code forks from Open VSX | EDGEkit gets the plugin the same way. **Unverified** in EDGEkit itself until EDGEkit's K1 build exists | `vs-code` |
| `claude --plugin-dir ./` loads a plugin for one session; `/reload-plugins` applies edits; `claude plugin validate . --strict` checks it; `claude plugin eval` compares answers with and without the plugin | The dev loop and the tests | `plugins/create`, `plugins/cli-reference` |
| If `version` is set in `plugin.json`, users stay on it until it is raised; auto-update is off by default for third-party marketplaces | Raise `version` to release; the README tells users how to turn on auto-update | `plugins/loading`, `plugins/host-marketplace` |
| Whether plugin MCP servers need the user's approval is not documented | No approval step: in P0, `claude mcp list` connected the plugin's `redcode` without one, and in P1 (2026-10-21) the VS Code extension connected all three servers without asking. The servers are added silently once the plugin is on | `mcp` |
| Plugin MCP servers are named `plugin:<plugin>:<server>` | Ours show as `plugin:edge:rednode` and `plugin:edge:redcode`. **Checked in P0** | Seen in `claude mcp list` |
| A server the user added by hand with the same URL wins; the plugin's copy is not listed | Anyone who ran REDnode's **Copy setup** keeps that entry, old token and all. The `setup` skill finds it and tells the user to `claude mcp remove` it. **Checked in P0** | Seen in `claude mcp list` |
| A `.mcp.json` at the repo root is also read as this folder's project servers (asking for approval, with `${user_config.*}` unresolved) | The servers go inline in `plugin.json` (`mcpServers`), which validates and loads the same. **Checked in P0** | Seen in `claude mcp list` |
| An unset optional `userConfig` value becomes an empty string in a server's `args` and `env` | `redcode-mcp` 0.2.0 takes an empty variable as set (`??`), which hides REDcode's VS Code settings and fails with "The argument 'file' cannot be empty". The plugin starts it through `scripts/redcode-mcp.cmd`, which clears empty variables first. **Checked in P1** with an env dump and an MCP probe | Seen; the docs say only that `default` is the fallback |
| `claude plugin validate` warns that a `CLAUDE.md` at the plugin root is not loaded as context | Ours is for sessions working on this repo, as in every EDGE repo, so it stays; `--strict` fails on this one warning only | Seen in P1 |
| `claude plugin details` shows a plugin's parts and their always-on token cost; `claude plugin configure` lists and sets `userConfig` | The cost check for skill descriptions in P2; `configure` in the README | `claude plugin --help` |
| A `sensitive` option is masked and kept in the platform's secure credential store, not `settings.json`. `${user_config.KEY}` is substituted in MCP server `command`, `args` and `env`; in skill content a sensitive value becomes a placeholder. Options show after install as a form, and later under the gear on the plugin's row | API keys for the EDGE servers (Gemini and OpenAI for `edgemat`) are asked in the plugin's form and reach the server as its usual variable. Read 2026-10-21 | `plugins/manifest-reference` |
| `claude plugin update` raises the version and says "Restart to apply changes", but does not mention options the new version added (install does: "N userConfig options not yet set") | Every new option is optional, with a working default, and `setup` names it. Whether VS Code shows the form after an update is unverified. **Checked** 2026-10-21, 0.0.1 to 0.0.2 | Seen in the CLI |
| Claude Code cannot read VS Code's secret storage | A key the tool's own extension keeps there (EDGEmat's, EDGEwave's) is entered a second time in the plugin's form | VS Code's secret storage is an extension API |
| A server that sets `_meta: { "anthropic/requiresUserInteraction": true }` on a tool makes Claude Code ask before every call of it, in every permission mode (`acceptEdits`, `auto` and `bypassPermissions` included), with no "don't ask again"; allow rules do not skip it, and `dontAsk` denies it. A plugin cannot ship permission rules | The tools that change the game or the game folder carry the flag in their own servers: REDnode's `api_call` and `archives_reload` from 0.26.16, beside a new `api_read` for reads that never asks; EDGEdeck's `edgedeck_deploy`, `edgedeck_undo` and `edgedeck_remove` from edgedeck-mcp 0.28.0 (in the plugin from 0.0.5). Without it, auto mode ran `edgedeck_deploy` without asking (P1, 2026-10-21). Read 2026-10-21 | `mcp` |
| A server added by hand with the same name as a stdio plugin server runs beside it; both show as Connected | Claude sees every tool twice. `setup` finds `edgedeck`, `redcode` and the old `reddeck` added by hand. **Checked** 2026-10-21 with `edgedeck` | Seen in `claude mcp list` |
| The VS Code extension has no contribution point or API through which another VS Code extension adds plugins, skills or MCP servers. It shares `~/.claude` (settings, plugins, MCP config) with the CLI. It bundles its own CLI and does not put `claude` on the PATH. A user-level `enabledPlugins` entry, with the marketplace in `extraKnownMarketplaces`, makes Claude Code fetch the plugin | EDGEchat is a plugin, not a VS Code extension, and is not published to the extension marketplaces. An extension such as EDGEkit could install it for the user, with `claude plugin install edge --marketplace Edgemodders/EDGEchat` (needs the standalone CLI) or by writing those two settings (the docs do not say other programs may). EDGEkit's choice. Read 2026-10-19 | `vs-code`, `plugins/loading`, `plugins/org` |

## Shape

| Path | What it is |
|---|---|
| `.claude-plugin/plugin.json` | The plugin: name, version, description, `userConfig`, and the EDGE MCP servers inline (`mcpServers`), not in a root `.mcp.json` (see the facts above) |
| `.claude-plugin/marketplace.json` | The marketplace, listing this repo's root as its one plugin |
| `scripts/` | `redcode-mcp.cmd` and `edgedeck-mcp.cmd`, which start those servers ([MCP servers](#mcp-servers)) |
| `skills/` | One folder per skill, `SKILL.md` plus reference files |
| `evals/` | `claude plugin eval` cases: modding tasks answered with and without the plugin |
| `docs/` | This site |

### MCP servers

| Server | Transport | Gives | Needs |
|---|---|---|---|
| `rednode` | http, `http://127.0.0.1:41820/mcp`, `Authorization: Bearer ${user_config.rednode_token}` | The running game: logs, apps, game state, game API lookup, reads (`api_read`, REDnode 0.26.16) and calls, live TweakDB, screenshots ([REDnode MCP](https://edgemodders.github.io/REDnode/mcp.html)) | REDnode in the game with its MCP server switched on; the token from its launcher's **Copy setup** |
| `redcode` | stdio, `cmd /c scripts/redcode-mcp.cmd`, which runs `npx -y @edgemodders/redcode-mcp@<version>` | The game's files offline through REDbridge: archives, CR2W as JSON and edits, textures, the shipped TweakDB, sound events, WolvenKit project export, import and pack ([REDcode MCP](https://edgemodders.github.io/REDcode/mcp.html)) | Windows, .NET 10, REDbridge 0.8.0 or newer, the game folder (it finds them from REDcode's settings, or `REDBRIDGE_EXE` and `REDCODE_GAME_PATH`). Published on npm as `@edgemodders/redcode-mcp` (0.2.0 on 2026-10-16; the plugin runs 0.3.0 from 0.0.5, which adds the `loc_*` tools and `sound_import` with REDbridge 0.10.0 and 0.9.0, and still takes an empty variable as set). `cmd /c` because npx is a `.cmd` on Windows. The plugin pins the version and raises it in its own releases. With the plugin's options unset it falls back to REDcode's settings (checked in P1: game loaded, 57 archives), but only from VS Code's own settings folder (`%APPDATA%\Code\User`); in EDGEkit the options are needed. **Asked of REDcode:** take an empty variable as unset, and read EDGEkit's settings folder |
| `edgedeck` | stdio, `cmd /c scripts/edgedeck-mcp.cmd`, which runs `npx -y @edgemodders/edgedeck-mcp@<version> -- [--library <folder>] [--game <folder>]` | The mod library and deploys: list, add, turn on and off, move, conflicts, loadouts, install a WolvenKit project, deploy, undo, Vortex import (15 `edgedeck_*` tools; deploy, undo and remove ask before every call from 0.28.0) | Node.js 20 or newer, Windows. Published on npm as `@edgemodders/edgedeck-mcp` (0.27.3 on 2026-10-17, 0.28.0 on 2026-10-22, which the plugin runs from 0.0.5; REDdeck was renamed EDGEdeck that day, and `@edgemodders/reddeck-mcp` is deprecated). In the plugin since 0.0.2. The library is `edgedeck_library`, else `%USERPROFILE%\EDGEdeck`: the server does not read EDGEdeck's VS Code settings, so someone who moved the library sets the option. The game is `game_path`, else the one the library remembers, else Steam, GOG or Epic. It takes its folders only as arguments, so the wrapper turns the options, passed as variables, into arguments and leaves out an empty one. **Checked** 2026-10-21: empty options open the default library; a library path with spaces and parentheses opens that folder; `claude mcp list` connects it from a checkout whose path has spaces |
| `edgemat` | stdio, `cmd /c npx -y @edgemodders/edgemat-mcp@<version>`, no wrapper | Materials: the library built from the user's game, find a garment's materials, describe, recolor (`mat_edit`), apply, make new ones from words (`mat_generate`) or an image, saved into a WolvenKit project (10 `mat_*` tools) | Node.js 20 or newer, Windows, the game and REDbridge 0.8.0 or newer: `--game`/`EDGEMAT_GAME_PATH` and `--bridge`/`REDBRIDGE_EXE` (from `game_path` and `redbridge_exe`), else EDGEmat's or REDcode's VS Code settings. For `mat_generate`, the user's own key, `GEMINI_API_KEY` or `OPENAI_API_KEY`, from the `sensitive` options `gemini_api_key` and `openai_api_key`; Gemini when both are set. It takes an empty variable as unset, so it needs no wrapper. The library is kept in `%LOCALAPPDATA%\EDGEmat`, shared with the extension. Published on npm as `@edgemodders/edgemat-mcp` 0.3.1 (2026-10-21). In the plugin since 0.0.5. **Checked** 2026-10-23: with every option empty it starts and `mat_library` reports the dev PC's library; `mat_generate` with no key answers "No image service key"; `claude mcp list` connects it |
| EDGEfab, EDGEquest, EDGEmods, EDGEwave | stdio | Each design plans an MCP server beside its extension | Added as each one is published |

`api_call` and `archives_reload` on the `rednode` server can change the player's game; `edgedeck_deploy`, `edgedeck_undo` and `edgedeck_remove` write to the game folder or delete from the library. Each server marks these so Claude Code asks before every call, in every permission mode (see the facts above): REDnode from 0.26.16, EDGEdeck from 0.28.0. `edgemat`'s `mat_generate` does not ask, and sends the user's words to Google or OpenAI on the user's key; the setup skill says which service it will use.

### Every EDGE server in the plugin

The plugin is how every EDGE tool's MCP server reaches Claude Code: no `claude mcp add` step per tool, and every setting the servers need in one form. Shared settings are asked once (the game folder and REDbridge feed `redcode`, `edgedeck` and later `edgemat`). For a server to go in, it should:

| Need | Why |
|---|---|
| Be on npm as `@edgemodders/<tool>-mcp`, run with `npx -y` at a pinned version | No download step; the plugin raises the version in its own releases |
| Take every setting as an environment variable, and an empty one as unset | An unset option reaches the server as an empty string. Arguments through `cmd` and `npx` need a wrapper (`redcode`, `edgedeck` have one) |
| Read an AI service's key from the service's usual variable (`GEMINI_API_KEY`, `OPENAI_API_KEY`, `ELEVENLABS_API_KEY`) | The plugin fills it from a `sensitive` option |
| Fall back to the tool's VS Code settings when nothing is set | Works with the plugin's options left empty, for anyone with the tool set up in VS Code |

Each new server is then a server entry in `plugin.json`, options for what it needs, a row in `setup`, and a version raise.

### Skills (first set, P2)

Knowledge skills load on their own when a task matches; command skills are called by the user.

| Skill | Kind | Covers |
|---|---|---|
| `modding-basics` | Knowledge | The game's folders, the frameworks (RED4ext, CET, redscript, TweakXL, ArchiveXL, Codeware, REDmod) and what each is for, load order, the rule that mods never change the game's own files, deploying with EDGEdeck |
| `wolvenkit-projects` | Knowledge | The `.cpmodproj` project: `source/archive`, `source/raw`, `packed`; export, import and pack through `redcode-mcp` |
| `archives-and-cr2w` | Knowledge | Archive paths and hashes, CR2W as JSON (dotted paths, 32-bit floats, `compiledData`, defaults not stored), the one-call edit |
| `tweakxl` | Knowledge | TweakDB records and flats, `.yaml` and `.tweak` files, finding records with the TweakDB tools |
| `archivexl` | Knowledge | `.xl` files, appearances, resource patching |
| `redscript` | Knowledge | Classes, `@wrapMethod` and `@replaceMethod`, where `.reds` files go, REDscript IDE |
| `cet-lua` | Knowledge | Cyber Engine Tweaks mods: `init.lua`, events, the overlay |
| `rednode-mods` | Knowledge | REDnode packages, overlay apps and Node mods, hot reload, the kernel tools (shared with REDagent, below) |
| `setup` | Command | Checks the MCP servers answer, explains what is missing, and which tools ask before every call |
| `new-mod` | Command | Starts a mod: asks what it should do, picks the framework, makes the project |
| `check-mod` | Command | Reads a mod's files and the game's logs and lists what is wrong |
| `init-project` | Command | Writes a `CLAUDE.md` into the mod's project: its layout, its frameworks, the house rules |

### Where the knowledge comes from

| Source | Use |
|---|---|
| The EDGE repos' own docs (REDnode's guides, REDcode's MCP and API pages, EDGEmat's spec) | Taken directly; same owner, same license |
| REDagent's briefing (`REDagent/redagent/briefing.md`) | Shared, see below |
| The community wiki ([wiki.redmodding.org](https://wiki.redmodding.org)) and framework docs | Read and written in our own words, with links back; never copied. Their licenses are to check in P0 |
| The game, through the MCP servers | Every fact a skill states about the game is checked against it, as EDGEmat's M0 did |

### One source of truth with REDagent

REDagent briefs Claude for modding in the game (`briefing.md`, about 50 lines, plus REDnode's overlay apps guide copied in at build). Modders must not get different advice from REDagent and from Claude Code with EDGEchat.

The two do not overlap. REDagent is a whole agent, powered by Claude: its own window, tools and briefing. EDGEchat is not an agent: it connects Claude Code to EDGE, so you chat with EDGE while you build mods. REDagent is an Agent SDK product inside the game, on the player's API key, with `settingSources: []` (it reads no Claude Code settings, skills or plugins) and a rule that it must not look like Claude Code. EDGEchat is for Claude Code, wherever that runs. They share the `rednode` server. Its phase C6 (REDagent in REDcode) would have put a second assistant in the editor; **the user dropped C6 on 2026-10-16**, because Claude Code with EDGEchat covers the editor.

**Where knowledge lives (proposed in P0; REDagent's side to agree with its session):**

| Knowledge | Lives in | Reaches EDGEchat and REDagent by |
|---|---|---|
| One EDGE tool's own use (REDnode's guides, REDcode's MCP docs) | That tool's repo | Copied at build, the way REDagent already copies REDnode's `overlay-apps.md` |
| How to call a server's tools | The server's own instructions and tool descriptions | The server; skills do not repeat it |
| General modding (folders, frameworks, TweakXL, ArchiveXL, redscript, CET) | This repo, as skills | REDagent copies what it needs into its briefing, or loads the skills through the Agent SDK's `plugins` option (**unverified** for its SDK 0.3.296) |
| REDagent's own rules (what it may touch, its chat loop) | REDagent | Not shared |

## Phases

Phases are P0 to P5. **Unverified:** that no other EDGE repo uses P. Each ends with a test on the dev PC.

| Phase | Builds | The test proves |
|---|---|---|
| **P0 Decide** | The decisions below, with the user. The single-repo marketplace checked. The knowledge sources' licenses read | The plan is agreed |
| **P1 Skeleton** | `plugin.json` with `userConfig` (game folder, REDbridge path, REDnode token) and the servers `rednode`, `redcode` and `edgedeck` (added 2026-10-21); `marketplace.json`; the `setup` skill (servers answer, hand-added duplicates found); `init-project` | Installed from GitHub in the Claude Code CLI and in the VS Code extension, `setup` reports every server connected while the game runs |
| **P2 Knowledge** | The knowledge skills, each checked against the game through the MCP servers; eval cases for each. First the ones our own tools can check (`rednode-mods`, `archives-and-cr2w`, `wolvenkit-projects`, `tweakxl`), then the ones from community sources once their licenses are read (`modding-basics`, `redscript`, `archivexl`, `cet-lua`) | `claude plugin eval`: the plugin answers set modding tasks correctly where plain Claude Code does not |
| **P3 Commands** | `new-mod`, `check-mod` | A non-coder makes a small working mod from `/edge:new-mod` alone, in the game |
| **P4 Ship** | Version 0.1.0, README install steps, docs, EDGEkit providing the plugin (its welcome page and docs, and how it sets up Claude Code, agreed with the EDGEkit session), a line on EDGEkit's Nexus page, an EDGEweb wiki page; the REDagent knowledge sharing in place | A fresh PC installs Claude Code, adds the marketplace, installs the plugin and is modding |
| **P5 Grow** | EDGEmat's server and a materials skill (EDGEmat M2 onward), EDGEwave's sounds | Each new EDGE tool lands here when it ships |

## P0 decisions

| Question | Status |
|---|---|
| Product name | **EDGEchat**, decided by the user 2026-10-17 (was EDGEplugin): it names what the user does, chat with EDGE, without the word plugin; and it is not an agent, so not EDGEagent. The repo, docs site and brand were renamed the same day |
| Plugin and marketplace names | **Working names**, changeable until P4; the plugin stays `edge` after the rename, for short commands: marketplace `edgemodders`, plugin `edge`, so commands read `/edge:new-mod` and install is `/plugin install edge@edgemodders`. A marketplace is just the `marketplace.json` in this repo; the names are not registered anywhere, they only must not start with `claude-` or `anthropic-` |
| One repo as marketplace and plugin | **Checked** 2026-10-16, see the facts above |
| Separate repo, or a plugin folder in REDagent | **Separate**, decided 2026-10-16. REDagent is a game product that must not look like Claude Code; the plugin covers every EDGE tool; the shared knowledge lives in REDnode and REDcode, not REDagent |
| REDagent C6 | **Dropped** by the user 2026-10-16; Claude Code with EDGEchat is the editor's assistant |
| Where shared knowledge lives | **Proposed**, the table above. REDagent's side to agree with its session |
| How `redcode-mcp` reaches users | **Done** by REDcode: npm, `@edgemodders/redcode-mcp` 0.2.0 |
| How REDdeck's server reaches users | **Done**: REDdeck became EDGEdeck (2026-10-17) and publishes `@edgemodders/edgedeck-mcp` on npm; in the plugin since 0.0.2 (2026-10-21) |
| EDGEkit | EDGEkit should provide the plugin, not only point to it (user, 2026-10-16). To agree with the EDGEkit session; its design (line 126) says today it does not configure Claude Code |
| The REDnode token | `userConfig` with `sensitive: true`, entered once from REDnode's **Copy setup**. Whether REDnode could hand it over by itself later is REDnode's question |
| Windows only? | The game and REDbridge are Windows; Claude Code runs anywhere. Knowledge skills work everywhere, the servers on Windows |
| Community sources | Open: the wiki's and framework docs' licenses decide quote or paraphrase; paraphrase with links is the default |
