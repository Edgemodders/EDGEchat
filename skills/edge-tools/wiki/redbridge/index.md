<!-- Copied from EDGEweb's docs/wiki/redbridge/index.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redbridge/ (reviewed 2026-10-24) -->

# REDbridge

REDbridge is EDGE's engine room. It runs [WolvenKit](https://github.com/WolvenKit/WolvenKit)'s proven C# libraries in a small local program and offers them to the other toolkits, so EDGE never has to reinvent the game's file formats. Most people never run it directly: REDcode, EDGEdeck, REDnode and the EDGE plugin for Claude Code start it when they need it.

(Screenshot on the wiki, "REDbridge at work": The EDGEdeck page's footer with the green dot and the running REDbridge version, next to REDcode's status bar showing the bridge it uses.)

## What it's for

Cyberpunk 2077 keeps its models, textures, sounds and game data packed inside `.archive` files, in formats only specialist tools can read. WolvenKit is the community's tool for that, built over years. REDbridge puts WolvenKit's engine behind a simple local connection, so tools written in other languages (VS Code extensions, Node mods, AI assistants) can ask it to do the reading and writing.

You don't talk to REDbridge yourself. You notice it through what the other toolkits can do with it:

| Toolkit | What REDbridge lets it do |
|---|---|
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | See [conflicts inside mod archives](https://edgemodders.ai/wiki/edgedeck/conflicts.html), and list an archive's contents for Add to Project |
| [REDcode](https://edgemodders.ai/wiki/redcode/) | Browse the game's archives, open and edit game files, view textures and meshes, play game sounds with their names, browse TweakDB and the game's on-screen texts (LocKeys), export, import and pack mods, replace game sound effects |
| [REDnode](https://edgemodders.ai/wiki/rednode/) | Packages you allow can read the game's archives while you play |
| AI assistants | REDcode's MCP server, `redcode-mcp`, gives Claude and other assistants the same abilities as tools. The EDGE plugin for Claude Code, a preview, sets it up for you |

## Benefits

- **WolvenKit's own engine.** The same code WolvenKit trusts reads and writes the game's files.
- **Fast.** Indexes a game install's archives (over 580,000 files) in about a second, and opens large game files in a fraction of a second.
- **Exact round trips.** Game files convert to JSON and back byte for byte.
- **Works without the game running.** Reads any mod archive on disk, which is how EDGEdeck finds conflicts inside archives, and reads the game's TweakDB (its database of items, stats and more) straight from the game folder.
- **One engine, many clients.** The same calls serve REDcode, EDGEdeck, REDnode packages and AI agents.
- **Fetched for you.** EDGEdeck, REDcode and REDnode's Mod Manager download it with one click, and offer updates. EDGEdeck and REDnode also install the .NET runtime it needs.

## Status

The latest release is **0.10.0** (16 October 2026), built with WolvenKit 9.1.0. It added the game's on-screen texts (LocKeys) in all 19 languages, which REDcode's LocKeys view uses. 0.9.0 before it added replacing game sound effects from WAV files, and turning a 3D model (GLB) into a new mesh from a game mesh. 0.8.0 added offline TweakDB reading. Since 15 October REDbridge takes WolvenKit from WolvenKit's own published packages, so it can follow each new WolvenKit release more easily.

The next release adds the game's spoken lines (subtitles) and texture settings for image imports, for EDGEquest and EDGEmat. They are built but not released yet.

REDbridge runs on Windows x64 and needs Microsoft's free .NET 10 runtime. It has no window and no settings of its own.

The scene baking it does for EDGEbuilder is written and checked by reading the files back, but hasn't been loaded in the game yet.

REDbridge is GPL-3.0, because it links WolvenKit's GPL-3.0 libraries. The tools that talk to it stay MIT, and talk to it only through its local connection.

## In this section

| Page | |
|---|---|
| [Install and update](https://edgemodders.ai/wiki/redbridge/install.html) | How each toolkit gets REDbridge, updating it, the .NET 10 runtime, and installing it by hand |
| [Troubleshooting](https://edgemodders.ai/wiki/redbridge/troubleshooting.html) | REDbridge missing, too old, or not starting |

## Reference

- [REDbridge docs](https://edgemodders.github.io/REDbridge/) and its [README](https://github.com/Edgemodders/REDbridge#readme), with the list of methods
- [Releases](https://github.com/Edgemodders/REDbridge/releases), [source and issues](https://github.com/Edgemodders/REDbridge)
- [REDcode's MCP server](https://edgemodders.github.io/REDcode/mcp.html), for assistants
