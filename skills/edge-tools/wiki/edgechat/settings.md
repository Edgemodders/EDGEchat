<!-- Copied from EDGEweb's docs/wiki/edgechat/settings.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgechat/settings.html (reviewed 2026-11-25) -->

# Settings, commands and updates

| On this page | |
|---|---|
| [The six settings](https://edgemodders.ai/wiki/edgechat/settings.html#the-six-settings) | What each is for, and what happens when it's empty |
| [Changing them](https://edgemodders.ai/wiki/edgechat/settings.html#changing-them) | In VS Code, EDGEkit or a terminal |
| [The commands](https://edgemodders.ai/wiki/edgechat/settings.html#the-commands) | The five you type |
| [The skills](https://edgemodders.ai/wiki/edgechat/settings.html#the-skills) | The knowledge Claude loads by itself |
| [The connections](https://edgemodders.ai/wiki/edgechat/settings.html#the-connections) | The seven, and what each needs |
| [Updates](https://edgemodders.ai/wiki/edgechat/settings.html#updates) | Automatic, or by hand |
| [Uninstalling](https://edgemodders.ai/wiki/edgechat/settings.html#uninstalling) | Removing the plugin |
| [Where things are](https://edgemodders.ai/wiki/edgechat/settings.html#where-things-are) | Settings, the plugin, the libraries and Desks |

## The six settings

All six are optional.

| Setting | Id | What | When empty |
|---|---|---|---|
| Cyberpunk 2077 folder | `game_path` | The game's install folder, the one holding `archive`, `bin` and `r6` | The `redcode`, `edgemat`, `edgehack` and `edgequest` connections use REDcode's game folder setting in VS Code. The `edgedeck` connection uses the folder EDGEdeck's library remembers, or finds the game in Steam, GOG or Epic. `edgefab` needs no setting: it finds the game by itself |
| REDbridge.exe | `redbridge_exe` | The path of `REDbridge.exe` | REDcode's REDbridge setting in VS Code is used |
| EDGEdeck library | `edgedeck_library` | EDGEdeck's library folder | The `EDGEdeck` folder in your user folder. EDGEdeck's own settings in VS Code aren't read, so if you moved the library, fill this in |
| Google Gemini key | `gemini_api_key` | Your key, for EDGEmat's materials from words and patterns | The key in REDcode's **Keys**, if it's set there. A key you enter is kept in Windows' credential store |
| OpenAI key | `openai_api_key` | The same with OpenAI, for EDGEmat's materials and reshapes, and EDGEfab's pictures. If both EDGEmat keys are set, Gemini is used unless you ask for OpenAI | The same |
| Tripo key | `tripo_api_key` | Your key, for EDGEfab's 3D models from words or pictures and EDGEmat's reshapes, billed in Tripo credits | The same |

**Keys:** REDcode's **Keys** view in VS Code keeps one key per service for every EDGE tool, so you set a key once. A key in the plugin's settings wins over it. EDGEhack and EDGEquest need no key.

Two things to know about the empty case:

- **It reads VS Code's own settings only.** In EDGEkit or another editor, fill in the first two settings.
- **A filled-in setting wins.** If the plugin's setting has a value, changing REDcode's setting in VS Code has no effect on EDGEchat.

REDnode needs no setting: you allow Claude Code from inside the game ([Install and connect, step 5](https://edgemodders.ai/wiki/edgechat/install.html#step-5-let-claude-into-the-game)).

### Changing them

| Where | How |
|---|---|
| VS Code, EDGEkit | Type `/plugins`, then press the gear on the `edge` row. Change what you need, scroll down, and press **Save configuration** |
| Inside a terminal session | `/plugin configure edge@edgemodders` |
| At a terminal prompt | `claude plugin configure edge@edgemodders` lists them, and says which are unset |

Then restart Claude Code. The connections read the settings only when they start. In VS Code and EDGEkit, run **Developer: Reload Window** from the Command Palette (**Ctrl+Shift+P**).

## The commands

Type them in Claude Code's prompt box.

| Command | Does | Changes anything? |
|---|---|---|
| `/edge:setup` | Checks the seven connections, finds EDGE tools you connected by hand that would show twice, and gives one next step for each problem | No |
| `/edge:new-mod` | Asks what the mod should do, picks the simplest kind, makes it and tests it in the game with you: [Your first mod](https://edgemodders.ai/wiki/edgechat/first-mod.html) | Yes, and you are asked along the way |
| `/edge:check-mod` | Lists what's wrong with a mod, with a fix for each: [When a mod doesn't work](https://edgemodders.ai/wiki/edgechat/check-mod.html) | No, until you choose a fix |
| `/edge:init-project` | Writes a `CLAUDE.md` for your mod's folder: [Keep a project easy to work on](https://edgemodders.ai/wiki/edgechat/projects.html) | Writes one file, and asks first if one is there |
| `/edge:continue` | Picks up a chat you had with [REDagent](https://edgemodders.ai/wiki/redagent/using.html#continue-in-vs-code) in the game, after you pressed **VS Code** there: names the chat, its mods and files, and carries on | Only what you then ask for |

## The skills

A skill is a piece of knowledge that Claude loads by itself when a task needs it. You don't call these.

| Skill | Knows |
|---|---|
| `rednode-mods` | REDnode packages: overlay apps, HUD widgets, Node mods, the game API, and testing them in the running game. Copied from REDnode's own guide |
| `wolvenkit-projects` | Making, packing, deploying and swapping a WolvenKit project with the EDGE tools |
| `archives-and-cr2w` | The game's archives and file types, and how an item leads to its files |
| `edge-tools` | How the EDGE tools work, from a copy of this wiki made when the plugin was released (25 November 2026 for 0.2.1). Pages added to the wiki since then are not in it |

## The connections

A connection (Claude Code calls it an MCP server) lets Claude use one EDGE tool. `/mcp` in Claude Code lists them, each named `plugin:edge:` and then the name below.

| Connection | Runs | Needs |
|---|---|---|
| `rednode` | Inside the game, in [REDnode](https://edgemodders.ai/wiki/rednode/agents.html) | The game running, **MCP server** on, and Claude Code allowed once |
| `redcode` | On your PC, the [REDcode](https://edgemodders.ai/wiki/redcode/assistants.html) server | Node.js 20 or later, REDbridge and the .NET 10 runtime, the game folder |
| `edgedeck` | On your PC, the [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/assistants.html) server | Node.js 20 or later, the EDGEdeck library |
| `edgemat` | On your PC, the [EDGEmat](https://edgemodders.ai/wiki/edgemat/assistants.html) server | Node.js 20 or later, REDbridge and the .NET 10 runtime, the game folder, and its library built once |
| `edgefab` | On your PC, the [EDGEfab](https://edgemodders.ai/wiki/edgefab/assistants.html) server | Node.js 20 or later, REDbridge and the .NET 10 runtime. Props from words need your Tripo and OpenAI keys |
| `edgehack` | On your PC, the [EDGEhack](https://edgemodders.ai/wiki/edgehack/assistants.html) server | Node.js 20 or later, REDbridge and the .NET 10 runtime, the game folder. Trying a quickhack live needs the game with REDnode 0.62.0 or later |
| `edgequest` | On your PC, the [EDGEquest](https://edgemodders.ai/wiki/edgequest/assistants.html) server | Node.js 20 or later, REDbridge and the .NET 10 runtime, the game folder, and its quest index, built once by itself |

The six that run on your PC are downloaded the first time they start, so that start can be slow. EDGEchat starts a fixed version of each, chosen when the plugin was released. Newer versions of them arrive with EDGEchat updates.

## Updates

New versions come from EDGEchat's marketplace, the source on GitHub that Claude Code installed it from. Claude Code leaves auto-update off for marketplaces like this one, so you stay on the version you installed until you update.

**Turn on auto-update** (recommended). On the **Marketplaces** tab of `/plugins` (VS Code, EDGEkit) or `/plugin` (terminal), select `edgemodders`, then **Enable auto-update**. Claude Code then updates the plugin when a session starts, and the next session uses it.

(Screenshot on the wiki, "Turning on auto-update": The Marketplaces tab of Claude Code's /plugins dialog with the edgemodders marketplace selected and its Enable auto-update choice.)

**Or update by hand.** Use the pair that matches where you are:

| Where | Commands |
|---|---|
| At a terminal prompt | `claude plugin marketplace update edgemodders`, then `claude plugin update edge@edgemodders` |
| Inside a running `claude` session | `/plugin marketplace update edgemodders`, then `/plugin update edge@edgemodders` |
| VS Code, EDGEkit | The refresh icon on the **Marketplaces** tab of `/plugins` updates the listing |

After an update, restart Claude Code. A new version may add settings: `/edge:setup` names any that are unset. What changed is in EDGEchat's [changelog](https://edgemodders.github.io/EDGEchat/changelog.html).

## Uninstalling

Type `/plugins` and uninstall `edge`. Or at a terminal prompt: `claude plugin uninstall edge@edgemodders`.

Your mods, your projects, EDGEdeck's library, EDGEmat's library and the EDGEfab and EDGEhack Desks stay. To also stop Claude Code reaching the game, see [Taking access back](https://edgemodders.ai/wiki/edgechat/safety.html#taking-access-back).

## Where things are

| Thing | Where |
|---|---|
| The plugin's settings | Claude Code's user settings, `%USERPROFILE%\.claude\settings.json`, under `pluginConfigs`. Keys aren't there: they're in Windows' credential store |
| The plugin itself | Claude Code's plugin cache, managed by Claude Code. Don't edit it |
| EDGEmat's library | `%LOCALAPPDATA%\EDGEmat`, shared with the EDGEmat extension |
| EDGEfab's and EDGEhack's Desks | `%LOCALAPPDATA%\EDGEfab\desk` and `%LOCALAPPDATA%\EDGEhack\desk`, shared with the extensions: work waiting to go into a project |
| EDGEquest's quest index | `%LOCALAPPDATA%\EDGEquest` |
| EDGEdeck's library | The `edgedeck_library` setting, or `%USERPROFILE%\EDGEdeck` |
