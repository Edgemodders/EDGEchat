<!-- Copied from EDGEweb's docs/wiki/redcode/assistants.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/assistants.html (reviewed 2026-10-24) -->

# Assistants and MCP

REDcode is built so an AI assistant can work on your mod with you. Game files become readable text, and **`redcode-mcp`** gives an assistant the same engine the REDcode editor uses, through [MCP](https://edgemodders.ai/wiki/glossary.html#edge-terms), the standard that lets AI agents use tools. You don't need to know how a CR2W file is laid out: ask in plain words, and the assistant looks it up.

## What you can ask

Once it's connected, for example:

> Find the texture for the Mantis Blades and show it to me.

> In my project, make the photo mode area light's radius 12 instead of its default.

> List every jacket in TweakDB with its price.

> Export every texture under my project's Archive folder to PNG.

> Find the revolver reload sound effects and save them to my desktop.

(Screenshot on the wiki, "An assistant using redcode-mcp": Claude Code in a terminal answering a request about a game file, with its calls to redcode-mcp tools such as archive_search and cr2w_read visible.)

## What it can do

| Group | The assistant can |
|---|---|
| Archives | Search the game's files, list folders, extract files, and look inside a mod's `.archive` on disk |
| Game files | Read any game file as WolvenKit JSON, write one from JSON, and open a file to read or change it part by part, with every change undoable |
| Textures and hashes | Decode a texture to PNG, and turn file hashes into paths |
| Project | Export to Raw, import from Raw, and pack, as REDcode's buttons do |
| TweakDB | List record types and records, read a record or one value, search by words |
| Texts | Find the game's on-screen texts (LocKeys) by key or words, in any of its languages, with your project's own over them |
| Sounds | Find sound effect events by name or tag, save their sounds as `.opus` files, and replace sound effects in your project from WAV files |

It never changes the game's archives. When it edits a game file, it writes a changed copy: into your project, or wherever you ask.

The [MCP docs](https://edgemodders.github.io/REDcode/mcp.html) and the [package README](https://github.com/Edgemodders/REDcode/blob/main/packages/redcode-mcp/README.md) list every tool. The first tools were checked against a game install with an MCP client; the TweakDB, sound and project tools use the same REDbridge methods as REDcode's own features, which were tested by hand.

## Connect Claude Code

`redcode-mcp` is published on npm as [`@edgemodders/redcode-mcp`](https://www.npmjs.com/package/@edgemodders/redcode-mcp), version 0.3.0. It isn't part of the REDcode extension: you register it with your assistant once.

The easiest way is the **EDGE plugin for Claude Code**, which sets up `redcode-mcp` with the other EDGE servers in one install. It's a preview; see [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html). To register `redcode-mcp` on its own, read on.

**You need:** REDcode set up as on [Install and set up](https://edgemodders.ai/wiki/redcode/install.html) (so REDbridge and the game are found), and [Node.js](https://nodejs.org/) 20 or later.

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

Prefer the command line or REDcode's setting for .NET. Setting `DOTNET_ROOT` for your whole Windows account breaks other .NET programs.

For example:

```powershell
claude mcp add redcode -- npx -y @edgemodders/redcode-mcp --bridge "D:\Tools\REDbridge" --game "D:\Games\Cyberpunk 2077"
```

### Good to know

- The server starts REDbridge on the first tool call. Loading the archive index takes about three seconds; after that it stays up for the session.
- The first TweakDB call takes about 12 seconds, as in REDcode.
- If REDbridge stops, the next call starts it again. Files the assistant had open for editing are closed by that, so it has to open them again.
- It needs REDbridge 0.10.0 or later for the text tools, 0.9.0 for sound import, and 0.8.0 for the rest. REDcode 0.10.0 and later need 0.10.0 anyway.
- The tools never ship an API key. Claude Code uses your own account.

## Tips for working with an assistant

- **Open your project folder** in the terminal where you run Claude Code, so "my project" means something to it.
- **Ask it to explain first.** "What does this `.ent` file do?" is a good start before "change it".
- **Check before you pack.** Open the changed file in the CR2W editor, or ask the assistant what it changed. Every edit through `redcode-mcp` comes back with the step that would undo it.
- **Format rules.** The tools tell the assistant WolvenKit's three rules (see [What the file keeps](https://edgemodders.ai/wiki/redcode/editing.html#what-the-file-keeps)), so it edits `components`, not `compiledData`.
