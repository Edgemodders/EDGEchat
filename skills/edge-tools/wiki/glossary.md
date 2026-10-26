<!-- Copied from EDGEweb's docs/wiki/glossary.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/glossary.html (reviewed 2026-10-24) -->

# Glossary

Modding words in plain language. If a word you met isn't here, ask on [Discord](https://discord.gg/63qP3Erw43) and we'll add it.

## Game and modding terms

| Term | Meaning |
|---|---|
| Archive | A `.archive` file: a package of game files. The game ships hundreds; many mods are a single archive in `archive/pc/mod` |
| ArchiveXL | A framework that lets archive mods add new things (items, appearances) rather than only replace files |
| Codeware | A framework that gives other mods extra game functions. REDnode's world calls (and so EDGEbuilder) and its game UI (ink) calls need it |
| CET (Cyber Engine Tweaks) | A popular framework for Lua script mods and in-game ImGui windows |
| CR2W | The binary format of most game files inside archives. REDcode and REDbridge show them as readable JSON |
| Entity | A `.ent` file: a ready-made game object, such as a prop with its meshes, lights and behaviour |
| Hash | A number that stands for a file path inside an archive. Tools turn hashes back into paths when they know them |
| Load order | Which mod wins when two mods change the same file |
| Mesh | A `.mesh` file: the 3D shape of an object, with its materials |
| Multilayered material | How the game colours most clothing and many objects: up to 20 layers, each with a surface, a colour and a mask, stored in an `.mlsetup` file. EDGEmat shows them in plain words and recolours them |
| Nexus Mods | The main site where Cyberpunk mods are published |
| RED4ext | The framework that loads native plugins into the game. REDnode is one of them |
| RED Hot Tools | A plugin that loads changed archives into the running game. REDnode swaps archives through it |
| REDengine | The game's engine. The source of "RED" in the tool names |
| REDmod | CD PROJEKT RED's own mod format, deployed with their `redMod` tool |
| redscript | A language for scripting the game, compiled into the game's own scripts |
| RTTI | The game's type system: the classes, functions and enums it knows about at runtime. REDnode's game API is generated from it |
| Sector | A streaming sector: a game file that lists the objects in one part of the world, loaded as you get near. EDGEbuilder will bake scenes into one |
| TweakDB | The game's database of item stats, characters and settings |
| TweakXL | A framework that changes TweakDB with simple text files: YAML (`.yaml`) or the game's own tweak format (`.tweak`) |
| Vortex | A general-purpose mod manager. EDGEdeck can import its mods |
| WolvenKit | The community's main Cyberpunk modding tool. EDGE builds on its engine |

## EDGE terms

| Term | Meaning |
|---|---|
| EDGE | The platform: the EDGE toolkits working together |
| Agent | An AI that can use tools, not only chat. REDagent is one; Claude Code is another |
| Change card | REDagent's preview of a file change, as a diff, with Allow and Deny |
| Deploy | EDGEdeck putting your switched-on mods into the game folder, with hardlinks, recorded in a manifest |
| Extension pack | A VS Code extension that only installs other extensions. EDGEkit's pack installs the EDGE tools in one go |
| Hot reload | REDnode restarting a changed mod in the running game, without a game restart |
| Library | Where EDGEdeck keeps your mods, outside the game folder |
| MCP (Model Context Protocol) | The standard that lets AI agents use tools. REDnode, REDcode, EDGEdeck and EDGEmat each offer an MCP server |
| Mod Manager | REDnode's in-game list of installed packages, in the launcher (F10). New packages appear there first; you switch them on, allow their permissions and pin them |
| Mod service | A REDnode package's functions that other packages can call. Functions marked `@tool` are offered to AI agents too |
| Node mod | A REDnode mod written in JavaScript or TypeScript, running on its own thread in a Node process outside the game |
| Package | Anything REDnode runs: a Node mod, an overlay app, or both. EDGEbuilder and REDagent are packages |
| Overlay app | A small web app (HTML, CSS, JavaScript) that REDnode draws on top of the game |
| Permission | What a REDnode package may do beyond the basics, such as change TweakDB or swap archives. You allow each one in the Mod Manager |
| Scene | In EDGEbuilder, the set of objects you have placed. Today they are previews in the running game; baking turns a scene into a real mod (planned) |
| Tier 1, Tier 2 | REDnode's two kinds of mod code: Tier 2 runs outside the game (most mods); Tier 1 runs inside it for the rare cases that must change a value mid-call (planned) |
