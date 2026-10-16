# EDGEplugin design

EDGEplugin is the EDGE plugin for [Claude Code](https://code.claude.com/docs/en/overview): one install that makes Claude a Cyberpunk 2077 modding assistant. It gives Claude the **context** (what the game's files, frameworks and folders are, and the EDGE house rules) and the **tools** (the EDGE MCP servers, which read the game's archives, the TweakDB and the running game). It works wherever Claude Code runs: in EDGEkit, in VS Code, and in a terminal.

**Status: draft 0.1, scaffold.** Proposed in the EDGEkit session on 2026-10-16 and agreed with the user, who created the repo. No plugin files yet. Next: P0, the decisions below.

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
| A marketplace is `.claude-plugin/marketplace.json` with `name`, `owner.name` and `plugins` (each with `name` and `source`). A source of `"./"` means the marketplace's own root | This repo can be both the marketplace and the plugin. **Unverified:** the docs have no worked example; P0 checks it with `claude plugin validate` | `plugins/marketplace-reference` |
| Users install with `/plugin marketplace add Edgemodders/EDGEplugin`, then `/plugin install <plugin>@<marketplace>`; recent versions also take `claude plugin install <plugin> --marketplace Edgemodders/EDGEplugin` | The README gives these two commands | `plugins/install` |
| Plugin and marketplace names are kebab-case and must not look like Anthropic's (for example not starting `claude-` or `anthropic-`) | See the naming question in P0 | `plugins/manifest-reference` |
| Skills: YAML frontmatter (`name`, `description`, `when_to_use`, `disable-model-invocation`, `user-invocable`, `allowed-tools`, ...), then Markdown. Descriptions are always in context (cut at 1,536 characters with `when_to_use`); the body loads when used. Keep `SKILL.md` under 500 lines; reference files and `scripts/` can sit beside it | Many small skills with sharp descriptions, details in reference files | `skills` |
| Plugin skills are namespaced: `/<plugin>:<skill>` | Commands read like `/edge:new-mod` if the plugin is named `edge` | `skills` |
| MCP servers go in `.mcp.json` (a `mcpServers` map: `command`, `args`, `env` for stdio; `url`, `headers` for http). `${CLAUDE_PLUGIN_ROOT}`, `${CLAUDE_PLUGIN_DATA}` and `${CLAUDE_PROJECT_DIR}` are substituted | REDnode's server is http with a bearer token; `redcode-mcp` is stdio | `mcp`, `plugins/manifest-reference` |
| `userConfig` in `plugin.json` asks the user for settings at install (types `string`, `number`, `boolean`, `directory`, `file`; `sensitive` values go to the OS secure store), used as `${user_config.KEY}` | The game folder and REDnode's token are asked once, the token kept secret | `plugins/manifest-reference` |
| The VS Code extension manages plugins with `/plugins` and shares plugins, marketplaces and MCP settings with the CLI. It installs in other VS Code forks from Open VSX | EDGEkit gets the plugin the same way. **Unverified** in EDGEkit itself until EDGEkit's K1 build exists | `vs-code` |
| `claude --plugin-dir ./` loads a plugin for one session; `/reload-plugins` applies edits; `claude plugin validate . --strict` checks it; `claude plugin eval` compares answers with and without the plugin | The dev loop and the tests | `plugins/create`, `plugins/cli-reference` |
| If `version` is set in `plugin.json`, users stay on it until it is raised; auto-update is off by default for third-party marketplaces | Raise `version` to release; the README tells users how to turn on auto-update | `plugins/loading`, `plugins/host-marketplace` |
| Whether plugin MCP servers need the user's approval is not documented | Checked in P1 | `mcp` |

## Shape

| Path | What it is |
|---|---|
| `.claude-plugin/plugin.json` | The plugin: name, version, description, `userConfig` |
| `.claude-plugin/marketplace.json` | The marketplace, listing this repo's root as its one plugin |
| `.mcp.json` | The EDGE MCP servers |
| `skills/` | One folder per skill, `SKILL.md` plus reference files |
| `evals/` | `claude plugin eval` cases: modding tasks answered with and without the plugin |
| `docs/` | This site |

### MCP servers

| Server | Transport | Gives | Needs |
|---|---|---|---|
| `rednode` | http, `http://127.0.0.1:41820/mcp`, `Authorization: Bearer ${user_config.rednode_token}` | The running game: logs, apps, game state, game API lookup and calls, live TweakDB, screenshots ([REDnode MCP](https://edgemodders.github.io/REDnode/mcp.html)) | REDnode in the game with its MCP server switched on; the token from its launcher's **Copy setup** |
| `redcode` | stdio, `redcode-mcp` | The game's files offline through REDbridge: archives, CR2W as JSON and edits, textures, the shipped TweakDB, sound events, WolvenKit project export, import and pack ([REDcode MCP](https://edgemodders.github.io/REDcode/mcp.html)) | REDbridge and the game folder (it finds them from REDcode's settings, or `REDBRIDGE_EXE` and `REDCODE_GAME_PATH`). **Dependency:** `redcode-mcp` 0.1.0 is not published anywhere yet (checked 2026-10-16: not on npm, not in REDcode's releases). The plugin needs it published by REDcode, on npm (`npx`) or as a release asset |
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

REDagent briefs Claude for modding in the game (`briefing.md`, about 50 lines, plus REDnode's overlay apps guide copied in at build), and its phase C6 brings the same agent into the editor. Modders must not get different advice from REDagent and from Claude Code with EDGEplugin.

**Proposal (to agree in P0 with the REDagent session):** general modding knowledge lives here, as skills. REDagent's build copies the skills it needs into its briefing, the way it already copies REDnode's guide. REDagent's own rules (what it may touch, its chat loop) stay in REDagent. REDnode's guides stay in REDnode, and the `rednode-mods` skill links or copies them at build.

## Phases

Phases are P0 to P5. **Unverified:** that no other EDGE repo uses P. Each ends with a test on the dev PC.

| Phase | Builds | The test proves |
|---|---|---|
| **P0 Decide** | The open questions below, with the user. The single-repo marketplace checked with `claude plugin validate`. The knowledge sources' licenses read | The plan is agreed |
| **P1 Skeleton** | `plugin.json` with `userConfig` (game folder, REDnode token), `marketplace.json`, `.mcp.json` with `rednode`, the `setup` skill. `redcode` once `redcode-mcp` is published | Installed from GitHub in the Claude Code CLI and in the VS Code extension, `setup` reports `rednode` connected while the game runs |
| **P2 Knowledge** | The knowledge skills, each checked against the game through the MCP servers; eval cases for each | `claude plugin eval`: the plugin answers set modding tasks correctly where plain Claude Code does not |
| **P3 Commands** | `new-mod`, `check-mod`, `init-project` | A non-coder makes a small working mod from `/edge:new-mod` alone, in the game |
| **P4 Ship** | Version 0.1.0, README install steps, docs, an entry in EDGEkit's welcome page and docs, a line on EDGEkit's Nexus page; the REDagent briefing sharing in place | A fresh PC installs Claude Code, adds the marketplace, installs the plugin and is modding |
| **P5 Grow** | EDGEmat's server and a materials skill (EDGEmat M3 onward), EDGEwave's sounds | Each new EDGE tool lands here when it ships |

## Open questions for P0

| Question | Notes |
|---|---|
| Plugin and marketplace names | Suggested: marketplace `edgemodders`, plugin `edge`, so commands read `/edge:new-mod` and install is `/plugin install edge@edgemodders`. Must not start with `claude-` or `anthropic-` |
| Where shared knowledge lives | The proposal above: here, with REDagent copying. Agree with the REDagent session |
| How `redcode-mcp` reaches users | Published by REDcode on npm (then `npx -y redcode-mcp`) or as a release asset the plugin downloads. Asked of the REDcode session |
| The REDnode token | `userConfig` with `sensitive: true`, entered once from REDnode's **Copy setup**. Whether REDnode could hand it over by itself later is REDnode's question |
| Windows only? | The game and REDbridge are Windows; Claude Code runs anywhere. Knowledge skills work everywhere, the servers on Windows |
| Community sources | The wiki's and framework docs' licenses decide quote or paraphrase; paraphrase with links is the default |
