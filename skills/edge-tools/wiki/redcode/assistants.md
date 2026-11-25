<!-- Copied from EDGEweb's docs/wiki/redcode/assistants.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/assistants.html (reviewed 2026-11-25) -->

# Assistants and MCP

REDcode is built so an AI assistant can work on your mod with you. You don't need to know how a game file is laid out: ask in plain words, and the assistant finds the file, reads it, changes your project's copy, and packs the mod.

| On this page | |
|---|---|
| [Which assistant](https://edgemodders.ai/wiki/redcode/assistants.html#which-assistant) | REDagent or Claude Code |
| [What you can ask](https://edgemodders.ai/wiki/redcode/assistants.html#what-you-can-ask) | With an [example, start to finish](https://edgemodders.ai/wiki/redcode/assistants.html#an-example-start-to-finish) |
| [What it can do](https://edgemodders.ai/wiki/redcode/assistants.html#what-it-can-do) | The tools, in groups |
| [Connect it: the easy way](https://edgemodders.ai/wiki/redcode/assistants.html#connect-it-the-easy-way) | EDGEchat, the EDGE plugin for Claude Code |
| [Connect it by hand](https://edgemodders.ai/wiki/redcode/assistants.html#connect-it-by-hand) | `redcode-mcp` on its own |
| [Tips for working with an assistant](https://edgemodders.ai/wiki/redcode/assistants.html#tips-for-working-with-an-assistant) | |

## Which assistant

EDGE has two assistants, for two kinds of mod:

| You want | Use | Where it runs |
|---|---|---|
| A mod made of **game files**: a look, a texture, a text, a stat, a sound | **Claude Code** with REDcode's tools. This page | On your desktop, in VS Code or a terminal |
| A mod that **runs in the game**: something on the HUD, a window, a reaction to what happens | [REDagent](https://edgemodders.ai/wiki/redagent/) | Inside the game |

**Claude Code** is Anthropic's AI assistant for working with files. It has its own account and its own cost, separate from EDGE: see [Claude Code's setup](https://code.claude.com/docs/en/setup). REDcode's tools reach it through **`redcode-mcp`**, a small program that gives an assistant the same engine the REDcode editor uses. [MCP](https://edgemodders.ai/wiki/glossary.html#mcp-server) is the standard that lets AI assistants use tools; any assistant that speaks it can use `redcode-mcp`.

## What you can ask

Once it's connected, for example:

> Find the texture for the Mantis Blades and show it to me.

> In my project, make the photo mode area light's radius 12 instead of its default.

> List every jacket in TweakDB with its price.

> Export every texture under my project's Archive folder to PNG.

> Find the revolver reload sound effects and save them to my desktop.

> Pin the sliding feet of the animation I made, then turn his head to the left at 2.5 seconds.

> In my project's copy of this sector, find every node with a streaming distance under 45 m and set it to 90.

> Write me a sector script that selects every light.

(Screenshot on the wiki, "An assistant using redcode-mcp": Claude Code in a terminal answering a request about a game file, with its calls to redcode-mcp tools such as archive_search and cr2w_read visible.)

### An example, start to finish

This exchange is illustrative: the wording will differ, the steps are what happens. The edit in it is one of the checks `redcode-mcp` was tested with.

> **You:** In my project, make the photo mode area light's radius 12.

| The assistant | You see |
|---|---|
| Searches the game's files for the light, and finds `base\entities\lights\photomode_arealight.ent` | Its search, and the path it found |
| Reads the file's components and finds the light's `radius` | The current value |
| Asks to write a changed copy into your project, at the same game path under `source\archive` | Claude Code's permission prompt. Allow it |
| Says what it changed | The file under **Archive** in REDcode's Project view (press **Refresh Project** if it isn't there yet) |

Then you take over: open the file in the [CR2W editor](https://edgemodders.ai/wiki/redcode/editing.html) to check the value, and press **Pack and Install**. Or ask the assistant to pack. Installing and starting the game are yours, or EDGEdeck's tools' if you have [EDGEchat](https://edgemodders.ai/wiki/edgechat/).

## What it can do

| Group | The assistant can |
|---|---|
| Archives | Search the game's files, list folders, extract files, and look inside a mod's `.archive` on disk |
| Game files | Read any game file as WolvenKit JSON, write one from JSON, and open a file to read or change it part by part |
| Textures and hashes | Decode a texture to PNG, and turn file hashes into paths |
| Meshes | Find the items in TweakDB that wear a mesh, with their `.app` looks |
| Project | Export to Raw, import from Raw, and pack, as REDcode's buttons do |
| TweakDB | List record types and records, read a record or one value, search by words |
| Texts | Find the game's on-screen texts (LocKeys) by key or words, in any of its languages, including the texts your project changes |
| Sounds | Find sound effect events by name or tag, save their sounds as `.opus` files, and replace sound effects in your project from WAV files |
| Animations | Make a clip from words with [Uthana](https://edgemodders.ai/wiki/glossary.html#uthana) (it costs you money, so the assistant asks you first), from a `.glb`, or in place of a game clip; list your made clips. Then edit a made clip as REDcode's [Edit tab](https://edgemodders.ai/wiki/redcode/viewers.html#editing-a-made-clip) does: read its steps and where its feet slide, and add, change or remove steps (trim, loop, key a bone, pin a foot or hand, layer another clip) |
| Lip sync | List the characters with lip sync and a character's lines, scene by scene; read one line's clip as curves; and turn a spoken line, with its timing from [EDGEwave](https://edgemodders.ai/wiki/edgewave/assistants.html), into mouth shapes and the game's lip sync tracks. See [the Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html) |
| Sectors | List a sector's nodes, filtered by class, mesh, a value (such as a streaming distance under 45) or a box in the world; read one in full; change values in a project's copy. The game's copy is refused |
| Sector scripts | List and run your [sector scripts](https://edgemodders.ai/wiki/redcode/sectors.html#sector-scripts), read one, and write a new one, which REDcode's **Scripts** menu lists at once. A new script runs in REDcode only after you say yes. It also picks up the requests your scripts hand to an assistant, and marks them done |
| EDGE Library | Save a game file or a project file, with the files it needs, as an item in the [EDGE Library](https://edgemodders.ai/wiki/library.html) |

It never changes the game's archives. When it edits a game file, it writes a changed copy: into your project, or wherever you ask. Every edit can be reversed: ask the assistant to undo its last change.

**How far it's tested.** Each group of tools was checked with an MCP client against the game when it was added: the archive, game file and texture tools, the TweakDB tools, the sound list tools, the text tools, the mesh tool, export and import, the Library tool, the lip sync tools, and the sector and script tools. The animation editing tools were also tested in the game: an assistant pinned a clip's feet and turned its head, and the clip played so. An assistant writing a script that REDcode then listed and ran was tested by hand. Packing, sound import, reading a mod's archive and making clips through `redcode-mcp` have no check of their own on record beyond answering; they call the same code as REDcode's buttons, which were tested by hand.

The [MCP docs](https://edgemodders.github.io/REDcode/mcp.html) and the [package README](https://github.com/Edgemodders/REDcode/blob/main/packages/redcode-mcp/README.md) list every tool.

## Connect it: the easy way

Use **[EDGEchat](https://edgemodders.ai/wiki/edgechat/)**, the EDGE plugin for Claude Code. One install connects `redcode-mcp` together with the other EDGE tools (REDnode, EDGEdeck, EDGEmat), and teaches Claude how Cyberpunk's files fit together.

1. Set up REDcode as on [Install and set up](https://edgemodders.ai/wiki/redcode/install.html), so the game and REDbridge are found.
2. Follow [Install EDGEchat](https://edgemodders.ai/wiki/edgechat/install.html).
3. In Claude Code, run `/edge:setup`. It checks each connection and says what is missing.

Then come back here and try a request from [What you can ask](https://edgemodders.ai/wiki/redcode/assistants.html#what-you-can-ask). EDGEchat may carry a slightly older `redcode-mcp` than the newest on npm; that is fine.

> **Don't connect it twice.** If you add `redcode-mcp` by hand and also install EDGEchat, Claude Code has two copies of the same tools. `/edge:setup` finds servers added by hand that duplicate the plugin's and tells you how to remove them. Pick one way.

## Connect it by hand

For another assistant, or Claude Code without EDGEchat. `redcode-mcp` is published on npm as [`@edgemodders/redcode-mcp`](https://www.npmjs.com/package/@edgemodders/redcode-mcp). It isn't part of the REDcode extension: you register it with your assistant once.

**You need:** REDcode set up as on [Install and set up](https://edgemodders.ai/wiki/redcode/install.html) (so REDbridge and the game are found), and [Node.js](https://nodejs.org/) 20 or later. VS Code doesn't have to be running: `redcode-mcp` starts REDbridge itself.

In a terminal:

```powershell
claude mcp add redcode -- npx -y @edgemodders/redcode-mcp
```

On Windows, if Claude Code can't start the server, register it through `cmd` instead, because `npx` is a `.cmd` script there:

```powershell
claude mcp add redcode -- cmd /c npx -y @edgemodders/redcode-mcp
```

Then start Claude Code and ask away. Other MCP clients take the same command: `npx -y @edgemodders/redcode-mcp`.

See [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html) for the other EDGE servers, REDnode and EDGEdeck, which add powers of their own.

### How it finds REDbridge and the game

On a PC where REDcode is set up, nothing more is needed: the server reads REDcode's own settings. To point it somewhere else, it looks in this order: the command line, then environment variables, then VS Code's settings.

| What | Command line | Environment | REDcode setting |
|---|---|---|---|
| REDbridge.exe, or its folder | `--bridge <path>` | `REDBRIDGE_EXE` | `redcode.bridgePath` |
| The game folder | `--game <path>` | `REDCODE_GAME_PATH` | `redcode.gamePath` |
| A per-user .NET runtime | `--dotnet-root <path>` | `DOTNET_ROOT` | `redcode.dotnetRoot` |

An empty environment variable counts as unset, so REDcode's settings still apply. Prefer the command line or REDcode's setting for .NET. Setting `DOTNET_ROOT` for your whole Windows account breaks other .NET programs.

For example:

```powershell
claude mcp add redcode -- npx -y @edgemodders/redcode-mcp --bridge "D:\Tools\REDbridge" --game "D:\Games\Cyberpunk 2077"
```

### Good to know

- The server starts REDbridge on the first tool call. Loading the list of game files takes about three seconds; after that it stays up for the session.
- The first TweakDB call takes about 12 seconds, as in REDcode.
- If REDbridge stops, the next call starts it again. Files the assistant had open for editing are closed by that, so it has to open them again.
- It works with the REDbridge that REDcode installs. A few of the newest options need REDbridge 0.12.0 or later.
- `redcode-mcp` needs no key of its own. The assistant you connect it to has its own account and its own costs.
- `redcode-mcp` 0.7.0 is the latest, released with REDcode 0.10.17. It works with REDbridge 0.18.0, as REDcode does. The animation tools take your Uthana key from the shared store you set in the [Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view), or from the `UTHANA_API_KEY` environment variable.
- REDnode adds two more tools when REDcode is open, through REDnode's own MCP server: `redcode__project`, the project open in REDcode, and `redcode__display`, the game's window mode and resolution with the sizes it offers. See [REDnode](https://edgemodders.ai/wiki/redcode/other-tools.html#rednode).

## Tips for working with an assistant

- **Start in your project's folder,** so "my project" means something to the assistant. In VS Code, open the project folder (**File**, **Open Folder...**) and start Claude Code there. In a terminal, go to the folder first: `cd "C:\path\to\my_jacket"`, then `claude`.
- **Ask it to explain first.** "What does this `.ent` file do?" is a good start before "change it".
- **Check before you pack.** Open the changed file in the CR2W editor, or ask the assistant what it changed, and ask it to undo anything you don't want.
- **It knows the format's rules.** The tools tell the assistant the three rules of the file format (see [Why a value looks different after saving](https://edgemodders.ai/wiki/redcode/editing.html#why-a-value-looks-different-after-saving)), so it edits `components`, not `compiledData`.
- **For looks and colours,** [EDGEchat's recolor walkthrough](https://edgemodders.ai/wiki/edgechat/recolor.html) shows a whole mod made this way.
