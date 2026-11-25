<!-- Copied from EDGEweb's docs/wiki/redbridge/index.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redbridge/ (reviewed 2026-11-22) -->

# REDbridge

REDbridge is a small helper program that reads and writes Cyberpunk 2077's game files for the other EDGE tools. It has no window. You don't open it or use it yourself: the tools download it with one click and start it when they need it. Inside, it uses the same code as [WolvenKit](https://github.com/WolvenKit/WolvenKit), the community's main modding tool.

(Screenshot on the wiki, "REDbridge at work": The footer of the EDGEdeck page in VS Code, with the green dot and the version of the running REDbridge.)

**New here?** You most likely don't need to read further. When a tool needs REDbridge, it offers a **Get REDbridge** or **Install REDbridge** button: press it. Come back if a tool says REDbridge is missing or too old: [Troubleshooting](https://edgemodders.ai/wiki/redbridge/troubleshooting.html).

| On this page | |
|---|---|
| [What it's for](https://edgemodders.ai/wiki/redbridge/#what-its-for) | What each tool does with it |
| [Do I need to do anything?](https://edgemodders.ai/wiki/redbridge/#do-i-need-to-do-anything) | Usually one click |
| [Is it safe?](https://edgemodders.ai/wiki/redbridge/#is-it-safe) | What it can and can't reach |
| [Status](https://edgemodders.ai/wiki/redbridge/#status) | The current release |
| [For tool makers](https://edgemodders.ai/wiki/redbridge/#for-tool-makers) | Where the reference is |

## What it's for

Cyberpunk 2077 keeps its models, textures, sounds and game data packed inside `.archive` files, in formats only specialist tools can read. WolvenKit is the community's tool for that, built over years. REDbridge puts WolvenKit's reading and writing code in a program the EDGE tools can call, so each tool doesn't have to learn the game's formats again.

You notice REDbridge through what the other tools can do with it:

| Toolkit | What REDbridge lets it do |
|---|---|
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | See [conflicts inside mod archives](https://edgemodders.ai/wiki/edgedeck/conflicts.html), and list what is in an archive |
| [REDcode](https://edgemodders.ai/wiki/redcode/) | Browse and open the game's files, view models and textures, look up items and texts, and pack your mod |
| [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) | List the game's models, and your mods', with their sizes and looks. [Bake a scene](https://edgemodders.ai/wiki/edgebuilder/baking.html) into a mod |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/), [EDGEwave](https://edgemodders.ai/wiki/edgewave/), [EDGEquest](https://edgemodders.ai/wiki/edgequest/) | Read and write the game's materials, sounds and spoken lines |
| [REDnode](https://edgemodders.ai/wiki/rednode/) | Mods you allow can read the game's files while you play |
| AI assistants | Claude and other assistants reach the same abilities through REDcode's connection for assistants. [EDGEchat](https://edgemodders.ai/wiki/edgechat/) sets it up for you |

REDbridge can also read what the game itself placed in the world. EDGEbuilder will use that for a world map and an inspector, which are planned.

## Do I need to do anything?

Usually one click, once.

| You use | What to do |
|---|---|
| EDGEdeck | Press **Get REDbridge** in the Set up group |
| REDcode | Press **Install REDbridge** when REDcode asks at its first start |
| Only tools in the game, such as EDGEbuilder | Press **Get REDbridge** in REDnode's Mod Manager. If EDGEdeck or REDcode already fetched a copy, REDnode uses that one and you do nothing |

REDbridge needs Microsoft's free .NET 10 runtime. EDGEdeck and REDnode install it for you, and REDcode offers to. After that, each tool tells you when a newer REDbridge is out.

[Install and update](https://edgemodders.ai/wiki/redbridge/install.html) has the details: where each copy goes, which version each tool needs, and installing by hand.

## Is it safe?

- **It runs only on your PC**, and only while a tool needs it. The tool that started it stops it again.
- **Only the tool that started it can talk to it.** REDbridge opens no network port. It takes requests from the program that launched it and from nothing else.
- **In the game, you decide.** A REDnode mod can use REDbridge only after you switch on **Allowed** for it in the Mod Manager, because REDbridge can read and write files. See [Permissions](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions).
- **Its source is public.** REDbridge is open source, under the GPL-3.0 licence, as WolvenKit is.

## Status

**Released.** The latest is REDbridge 0.19.0 (2026-11-22), for game 2.5, built with WolvenKit 10.0.0-beta.1. 0.19.0 names Uthana in the shared key store, and an animation imported from Blender no longer crashes the game when it starts, for REDcode's Animation Tools. 0.18.0 keeps the EDGE tools' shared AI service keys, for REDcode's Keys view: only a tool that asks for the key store when it starts REDbridge can read them, so REDnode's mods cannot. 0.17.0 reads where each member of a synced animation stands, for REDcode's synced sets, and fixes animations that collapsed to one point or moved too fast. 0.16.0 removes things such as doors from the game's own world, for EDGEbuilder. 0.15.0 imports animations from Blender. 0.14.0 reads the game's animations without unpacking them, for EDGEdir's animation index. It is on [GitHub](https://github.com/Edgemodders/REDbridge/releases), and the tools fetch it from there.

| | |
|---|---|
| **Runs on** | Windows, 64-bit, with the .NET 10 runtime |
| **Game version** | 2.5. On a game kept at 2.31, see [Game 2.31](https://edgemodders.ai/wiki/redbridge/install.html#game-231) |
| **Used by** | EDGEdeck, REDcode, REDnode, EDGEbuilder, EDGEmat, EDGEwave, EDGEquest and EDGEchat |
| **In the game** | The baking it does for EDGEbuilder passed its tests in game 2.5: baked objects are in the world, solid, and drawn at the distance the scene sets |
| **Planned** | Linux. Not scheduled |

What changed in each release is in the [changelog](https://github.com/Edgemodders/REDbridge/blob/main/CHANGELOG.md).

<a id="reading-and-building-the-world"></a><a id="solid-objects"></a>

## For tool makers

REDbridge answers requests in JSON from the program that starts it. If you are making a tool of your own, the reference is on REDbridge's side, not here:

| You want | Read |
|---|---|
| Every method, by group, and how a program talks to REDbridge | The [README](https://github.com/Edgemodders/REDbridge#readme) |
| Each method's parameters, with examples: reading the world's sectors (`sector.find`, `sector.nodes`), sizes and looks (`mesh.info`), baking with solid objects (`sector.build`), and animations (`anims.info`, `project.export` with `animations`) | The [changelog](https://github.com/Edgemodders/REDbridge/blob/main/CHANGELOG.md) |
| Using REDbridge from a REDnode mod | REDnode's [overlay apps guide](https://edgemodders.github.io/REDnode/overlay-apps.html#the-games-files-through-redbridge) |
| Using it from an AI assistant | [REDcode's MCP server](https://edgemodders.github.io/REDcode/mcp.html) |
| Building REDbridge from source | The [REDbridge docs](https://edgemodders.github.io/REDbridge/) |

For what baking does from a user's side, such as which objects end up solid, see EDGEbuilder's [Baking](https://edgemodders.ai/wiki/edgebuilder/baking.html) page.

REDbridge is GPL-3.0 because it includes WolvenKit's GPL-3.0 code. The tools that use it keep their own MIT licence, and talk to it only as a separate program.

## In this section

| Page | |
|---|---|
| [Install and update](https://edgemodders.ai/wiki/redbridge/install.html) | How each tool gets REDbridge, which copy is used, versions, the .NET 10 runtime, installing by hand, removing it |
| [Troubleshooting](https://edgemodders.ai/wiki/redbridge/troubleshooting.html) | REDbridge missing, too old, or not starting |

## Reference

- [REDbridge docs](https://edgemodders.github.io/REDbridge/) and its [README](https://github.com/Edgemodders/REDbridge#readme)
- [Releases](https://github.com/Edgemodders/REDbridge/releases), [source and issues](https://github.com/Edgemodders/REDbridge)
