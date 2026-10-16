# EDGEplugin design

EDGEplugin is the EDGE plugin for [Claude Code](https://code.claude.com/docs/en/overview): one install that makes Claude a Cyberpunk 2077 modding assistant. It gives Claude the **context** (what the game's files, frameworks and folders are, and the EDGE house rules) and the **tools** (the EDGE MCP servers, which read the game's archives, the TweakDB and the running game). It works wherever Claude Code runs: in EDGEkit, in VS Code, and in a terminal.

**Status: draft 0.2, P0 under way.** Proposed in the EDGEkit session on 2026-10-16 and agreed with the user, who created the repo. P0's checks ran on 2026-10-16 (see [P0 decisions](#p0-decisions)). No plugin files yet. Next: the names, then P1.

## Why a plugin

Claude Code already runs in EDGEkit (from Open VSX) and in VS Code. Out of the box it knows little about Cyberpunk modding and cannot see the game. Claude Code has four standard ways to change that; a plugin carries the first three in one install.

| Mechanism | What it gives Claude | Role in EDGEplugin |
|---|---|---|
| Skills | Instructions loaded only when a task needs them; their short descriptions are always in context | The modding knowledge, one skill per topic |
| MCP servers | Real tools | REDcode's `redcode-mcp` (archives, CR2W, TweakDB, sounds, offline), REDnode's kernel server (the running game), later EDGEmat's `edgemat-mcp` |
| Skills the user calls (slash commands) | Repeatable tasks | Set up, start a mod, check a mod, write a project's CLAUDE.md |
| A project `CLAUDE.md` | Always-on context for one folder | A plugin cannot ship one (Claude Code ignores a plugin's CLAUDE.md). A skill writes one into the mod's project when the user asks |

## Facts that shape the design

From the Claude Code docs, read on 2026-10-16. Each row names its page under `https://code.claude.com/docs/en/`.

| Fact | Consequence | Page |
|---|---|---|
| A plugin is a folder with `.claude-plugin/plugin.json` (only `name` is required); `skills/<name>/SKILL.md`, `agents/`, `hooks/hooks.json`, `.mcp.json` and `bin/` sit at the plugin root | The repo root is the plugin | `plugins/manifest-reference` |
| A marketplace is `.claude-plugin/marketplace.json` with `name`, `owner.name` and `plugins` (each with `name` and `source`). A source of `"./"` means the marketplace's own root | This repo is both the marketplace and the plugin. **Checked in P0** (Claude Code 2.1.299): both manifests pass `claude plugin validate --strict`, and `marketplace add` of the folder then `plugin install edge@edgemodders` installs it. `--strict` wants a top-level `description` in `marketplace.json`. `validate .` checks the marketplace manifest; validate `plugin.json` by its path too | `plugins/marketplace-reference` |
| Users install with `/plugin marketplace add Edgemodders/EDGEplugin`, then `/plugin install <plugin>@<marketplace>`; recent versions also take `claude plugin install <plugin> --marketplace Edgemodders/EDGEplugin` | The README gives these two commands | `plugins/install` |
| Plugin and marketplace names are kebab-case and must not look like Anthropic's (for example not starting `claude-` or `anthropic-`) | See the naming question in P0 | `plugins/manifest-reference` |
| Skills: YAML frontmatter (`name`, `description`, `when_to_use`, `disable-model-invocation`, `user-invocable`, `allowed-tools`, ...), then Markdown. Descriptions are always in context (cut at 1,536 characters with `when_to_use`); the body loads when used. Keep `SKILL.md` under 500 lines; reference files and `scripts/` can sit beside it | Many small skills with sharp descriptions, details in reference files | `skills` |
| Plugin skills are namespaced: `/<plugin>:<skill>` | Commands read like `/edge:new-mod` if the plugin is named `edge` | `skills` |
| MCP servers go in `.mcp.json` (a `mcpServers` map: `command`, `args`, `env` for stdio; `url`, `headers` for http). `${CLAUDE_PLUGIN_ROOT}`, `${CLAUDE_PLUGIN_DATA}` and `${CLAUDE_PROJECT_DIR}` are substituted | REDnode's server is http with a bearer token; `redcode-mcp` is stdio | `mcp`, `plugins/manifest-reference` |
| `userConfig` in `plugin.json` asks the user for settings at install (types `string`, `number`, `boolean`, `directory`, `file`; `sensitive` values go to the OS secure store), used as `${user_config.KEY}` | The game folder and REDnode's token are asked once, the token kept secret | `plugins/manifest-reference` |
| The VS Code extension manages plugins with `/plugins` and shares plugins, marketplaces and MCP settings with the CLI. It installs in other VS Code forks from Open VSX | EDGEkit gets the plugin the same way. **Unverified** in EDGEkit itself until EDGEkit's K1 build exists | `vs-code` |
| `claude --plugin-dir ./` loads a plugin for one session; `/reload-plugins` applies edits; `claude plugin validate . --strict` checks it; `claude plugin eval` compares answers with and without the plugin | The dev loop and the tests | `plugins/create`, `plugins/cli-reference` |
| If `version` is set in `plugin.json`, users stay on it until it is raised; auto-update is off by default for third-party marketplaces | Raise `version` to release; the README tells users how to turn on auto-update | `plugins/loading`, `plugins/host-marketplace` |
| Whether plugin MCP servers need the user's approval is not documented | In P0, `claude mcp list` connected the plugin's `redcode` with no approval step. **Unverified** in an interactive session and in VS Code; P1 checks | `mcp` |
| Plugin MCP servers are named `plugin:<plugin>:<server>` | Ours show as `plugin:edge:rednode` and `plugin:edge:redcode`. **Checked in P0** | Seen in `claude mcp list` |
| A server the user added by hand with the same URL wins; the plugin's copy is not listed | Anyone who ran REDnode's **Copy setup** keeps that entry, old token and all. The `setup` skill finds it and tells the user to `claude mcp remove` it. **Checked in P0** | Seen in `claude mcp list` |
| A `.mcp.json` at the repo root is also read as this folder's project servers (asking for approval, with `${user_config.*}` unresolved) | The servers go inline in `plugin.json` (`mcpServers`), which validates and loads the same. **Checked in P0** | Seen in `claude mcp list` |
| `claude plugin details` shows a plugin's parts and their always-on token cost; `claude plugin configure` lists and sets `userConfig` | The cost check for skill descriptions in P2; `configure` in the README | `claude plugin --help` |

## Shape

| Path | What it is |
|---|---|
| `.claude-plugin/plugin.json` | The plugin: name, version, description, `userConfig`, and the EDGE MCP servers inline (`mcpServers`), not in a root `.mcp.json` (see the facts above) |
| `.claude-plugin/marketplace.json` | The marketplace, listing this repo's root as its one plugin |
| `skills/` | One folder per skill, `SKILL.md` plus reference files |
| `evals/` | `claude plugin eval` cases: modding tasks answered with and without the plugin |
| `docs/` | This site |

### MCP servers

| Server | Transport | Gives | Needs |
|---|---|---|---|
| `rednode` | http, `http://127.0.0.1:41820/mcp`, `Authorization: Bearer ${user_config.rednode_token}` | The running game: logs, apps, game state, game API lookup and calls, live TweakDB, screenshots ([REDnode MCP](https://edgemodders.github.io/REDnode/mcp.html)) | REDnode in the game with its MCP server switched on; the token from its launcher's **Copy setup** |
| `redcode` | stdio, `cmd /c npx -y @edgemodders/redcode-mcp@<version>` | The game's files offline through REDbridge: archives, CR2W as JSON and edits, textures, the shipped TweakDB, sound events, WolvenKit project export, import and pack ([REDcode MCP](https://edgemodders.github.io/REDcode/mcp.html)) | Windows, .NET 10, REDbridge 0.8.0 or newer, the game folder (it finds them from REDcode's settings, or `REDBRIDGE_EXE` and `REDCODE_GAME_PATH`). Published on npm as `@edgemodders/redcode-mcp` 0.2.0 (2026-10-16). `cmd /c` because npx is a `.cmd` on Windows. The plugin pins the version and raises it in its own releases. In P0 it connected with the game folder unset; whether its tools then fall back to REDcode's settings is checked in P1 |
| `reddeck` | stdio | The mod library and deploys: list, add, turn on and off, conflicts, deploy, undo (14 `reddeck_*` tools) | REDdeck's server is inside its extension today, at a path with the version in it. **Dependency:** REDdeck is publishing it on npm (asked 2026-10-16); added when it is out |
| `edgemat` | stdio | Materials: find, describe, edit, render | EDGEmat's M1 and later |

`api_call` on the `rednode` server can change the player's game. The setup skill tells the user to keep it on "ask".

### Skills (first set, P2)

Knowledge skills load on their own when a task matches; command skills are called by the user.

| Skill | Kind | Covers |
|---|---|---|
| `modding-basics` | Knowledge | The game's folders, the frameworks (RED4ext, CET, redscript, TweakXL, ArchiveXL, Codeware, REDmod) and what each is for, load order, the rule that mods never change the game's own files, deploying with REDdeck |
| `wolvenkit-projects` | Knowledge | The `.cpmodproj` project: `source/archive`, `source/raw`, `packed`; export, import and pack through `redcode-mcp` |
| `archives-and-cr2w` | Knowledge | Archive paths and hashes, CR2W as JSON (dotted paths, 32-bit floats, `compiledData`, defaults not stored), the one-call edit |
| `tweakxl` | Knowledge | TweakDB records and flats, `.yaml` and `.tweak` files, finding records with the TweakDB tools |
| `archivexl` | Knowledge | `.xl` files, appearances, resource patching |
| `redscript` | Knowledge | Classes, `@wrapMethod` and `@replaceMethod`, where `.reds` files go, REDscript IDE |
| `cet-lua` | Knowledge | Cyber Engine Tweaks mods: `init.lua`, events, the overlay |
| `rednode-mods` | Knowledge | REDnode packages, overlay apps and Node mods, hot reload, the kernel tools (shared with REDagent, below) |
| `setup` | Command | Checks the MCP servers answer, explains what is missing, and how to keep `api_call` on ask |
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

REDagent briefs Claude for modding in the game (`briefing.md`, about 50 lines, plus REDnode's overlay apps guide copied in at build). Modders must not get different advice from REDagent and from Claude Code with EDGEplugin.

The two do not overlap. REDagent is an Agent SDK product inside the game, on the player's API key, with `settingSources: []` (it reads no Claude Code settings, skills or plugins) and a rule that it must not look like Claude Code. EDGEplugin is for Claude Code, wherever that runs. They share the `rednode` server. Its phase C6 (REDagent in REDcode) would have put a second assistant in the editor; **the user dropped C6 on 2026-10-16**, because Claude Code with EDGEplugin covers the editor.

**Where knowledge lives (proposed in P0; REDagent's side to agree with its session):**

| Knowledge | Lives in | Reaches EDGEplugin and REDagent by |
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
| **P1 Skeleton** | `plugin.json` with `userConfig` (game folder, REDbridge path, REDnode token) and the servers `rednode`, `redcode`, and `reddeck` once published; `marketplace.json`; the `setup` skill (servers answer, hand-added duplicates found); `init-project` | Installed from GitHub in the Claude Code CLI and in the VS Code extension, `setup` reports every server connected while the game runs |
| **P2 Knowledge** | The knowledge skills, each checked against the game through the MCP servers; eval cases for each. First the ones our own tools can check (`rednode-mods`, `archives-and-cr2w`, `wolvenkit-projects`, `tweakxl`), then the ones from community sources once their licenses are read (`modding-basics`, `redscript`, `archivexl`, `cet-lua`) | `claude plugin eval`: the plugin answers set modding tasks correctly where plain Claude Code does not |
| **P3 Commands** | `new-mod`, `check-mod` | A non-coder makes a small working mod from `/edge:new-mod` alone, in the game |
| **P4 Ship** | Version 0.1.0, README install steps, docs, EDGEkit providing the plugin (its welcome page and docs, and how it sets up Claude Code, agreed with the EDGEkit session), a line on EDGEkit's Nexus page, an EDGEweb wiki page; the REDagent knowledge sharing in place | A fresh PC installs Claude Code, adds the marketplace, installs the plugin and is modding |
| **P5 Grow** | EDGEmat's server and a materials skill (EDGEmat M2 onward), EDGEwave's sounds | Each new EDGE tool lands here when it ships |

## P0 decisions

| Question | Status |
|---|---|
| Plugin and marketplace names | **Working names**, changeable until P4: marketplace `edgemodders`, plugin `edge`, so commands read `/edge:new-mod` and install is `/plugin install edge@edgemodders`. A marketplace is just the `marketplace.json` in this repo; the names are not registered anywhere, they only must not start with `claude-` or `anthropic-` |
| One repo as marketplace and plugin | **Checked** 2026-10-16, see the facts above |
| Separate repo, or a plugin folder in REDagent | **Separate**, decided 2026-10-16. REDagent is a game product that must not look like Claude Code; the plugin covers every EDGE tool; the shared knowledge lives in REDnode and REDcode, not REDagent |
| REDagent C6 | **Dropped** by the user 2026-10-16; Claude Code with EDGEplugin is the editor's assistant |
| Where shared knowledge lives | **Proposed**, the table above. REDagent's side to agree with its session |
| How `redcode-mcp` reaches users | **Done** by REDcode: npm, `@edgemodders/redcode-mcp` 0.2.0 |
| How REDdeck's server reaches users | **Asked** of the REDdeck session 2026-10-16: npm, like `redcode-mcp` |
| EDGEkit | EDGEkit should provide the plugin, not only point to it (user, 2026-10-16). To agree with the EDGEkit session; its design (line 126) says today it does not configure Claude Code |
| The REDnode token | `userConfig` with `sensitive: true`, entered once from REDnode's **Copy setup**. Whether REDnode could hand it over by itself later is REDnode's question |
| Windows only? | The game and REDbridge are Windows; Claude Code runs anywhere. Knowledge skills work everywhere, the servers on Windows |
| Community sources | Open: the wiki's and framework docs' licenses decide quote or paraphrase; paraphrase with links is the default |
