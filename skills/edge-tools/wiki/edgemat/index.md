<!-- Copied from EDGEweb's docs/wiki/edgemat/index.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/ (reviewed 2026-10-24) -->

# EDGEmat

EDGEmat is the EDGE platform's material editor for Cyberpunk 2077. It runs inside VS Code. Type a garment's in-game name, such as "punk jeans", and EDGEmat shows what it is made of: each layer in plain words ("leather, black, 6% of the jacket"), a map of where each layer sits, and the garment in 3D with its colors. Change any layer and save it into your mod project, or describe a new material in words and put it on the garment. An AI assistant such as Claude can do all of it too.

**It is a preview.** Version 0.3 reads, recolors and makes materials, and each was tested in the game. Materials for brand-new clothes and objects come next.

(Screenshot on the wiki, "EDGEmat in VS Code": VS Code with EDGEmat's icon selected in the activity bar: the Library and Find views in the sidebar, and the setup editor open on the Sunny Ammo sneakers, showing the color map and the layer list.)

## What it's for

In Cyberpunk 2077, most clothing and many objects get their look from **multilayered materials**. A jacket isn't one picture: it is a stack of up to 20 layers, such as leather, metal studs and stitching. Each layer has a **surface** (leather, denim, chrome), a color from that surface's list, and a **mask** that paints it onto part of the garment. A small file, the `.mlsetup`, holds the stack.

Recoloring a garment means editing that file, and today that takes specialist tools and some knowledge of how the layers fit together. EDGEmat's aim is to make it a few clicks, or one sentence to an assistant. Version 0.3 can:

- **find a garment's materials** from its in-game name, down to the exact files behind it, for each body type;
- **show the layers in plain words**: surface, color, shine, metal, bumps and how much of the garment each covers, with the raw values one click away;
- **show where each layer goes**, on a color map you can click;
- **show the garment in 3D** with its colors, in REDcode's viewer;
- **browse every surface and detail texture** in your game, with every color as a named swatch;
- **open a material file from anywhere**: the game, your project, a file on disk, or another mod's archive;
- **recolor a layer**: its surface, color, finish, tiling and detail, with undo, and **save it into your mod project** so it shows in the game with no other mod;
- **make a new material** from words, through Google Gemini or OpenAI with your own key, or from a photo, and put it on part of a garment, which keeps its own folds;
- **answer an assistant**: every one of these is also an MCP tool.

One thing to know: a layer's color isn't a free choice. Each surface offers a fixed list of colors, so "red" means the closest red that surface has, or a different surface with a better one. EDGEmat's surface pages and its "closest to" search are built around that. Truly free colors are a later phase.

## Why you might want it

| If you... | EDGEmat gives you |
|---|---|
| Want to recolor a jacket but don't know where to start | Type the jacket's name; EDGEmat finds its files and lays out its layers in plain words |
| Use MlsetupBuilder or WolvenKit today | The same layers, read through WolvenKit's own engine, with names in plain words and the item-to-files chain done for you |
| Wonder which file a mod changed, or why a layer shows white | Open the mod's archive; EDGEmat reads its setups and flags what looks wrong |
| Want Claude to do it for you | MCP tools to find, describe, recolor and make materials: "make the punk jeans dark green" |
| Want a look the game doesn't have | Describe it ("dark green snakeskin") and wear it in the game minutes later: [the tutorials](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html) |
| Make new clothes or objects | Next: materials for new meshes, for [EDGEfab](https://github.com/Edgemodders/EDGEfab) |

## How it fits into EDGE

| Part | Role for EDGEmat |
|---|---|
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) | Reads every game file, using WolvenKit's engine. EDGEmat needs it |
| [REDcode](https://edgemodders.ai/wiki/redcode/) | Recommended. With it, EDGEmat takes the game folder and REDbridge from REDcode, so there is nothing to set up. EDGEmat saves into REDcode's open project, and REDcode packs it for the game. REDcode's 3D viewer shows EDGEmat's colors |
| Claude and other agents | EDGEmat's MCP server lets an AI assistant find, describe, recolor and make materials. Every feature comes to the buttons and the assistant together. EDGEmat makes no network calls of its own, except to an image service you chose, when you press Generate |
| [EDGEkit](https://edgemodders.ai/wiki/edgekit/) | The EDGEkit app (1.140.1) has EDGEmat 0.3.1 built in. In VS Code, install EDGEmat on its own for now: the extension pack adds it in its next version |

EDGEmat builds its material library from your own game the first time it runs, so it ships no game data and stays current after game patches.

## Status

Version 0.3.0, the first preview, was released on 2026-10-20, after every test passed on the developer's PC and in the game. The current version is **0.3.1** (2026-10-21), which brings the assistants' server inside the extension and puts it on npm. It is on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgemat), [Open VSX](https://open-vsx.org/extension/edgemodders/edgemat) and [GitHub](https://github.com/Edgemodders/EDGEmat/releases): [Install and set up](https://edgemodders.ai/wiki/edgemat/install.html). Windows only.

Built for the next version, not released yet: **Open Material in EDGEmat...** and **Open Mesh in EDGEmat** on a right-click on a setup or mesh file (also from REDcode's Project view), and REDcode's 3D view redrawing after you save.

| Phase | State |
|---|---|
| M0 Spec | Done 2026-10-16. What a material editor must understand, checked against the game's files and tested in the game |
| M1 Library | Done 2026-10-16 |
| M2 Read | Done 2026-10-19: surface pages, the setup editor, Find, View in 3D, and the assistant's tools |
| M3 Edit | Done 2026-10-20: editing and Save to Project, and the first slice of M4, New Material, all seen in the game. Version 0.3 |
| M4 Make | Next |

## Roadmap

In plain words. Each phase ends with a test on the developer's PC, and in the game where it matters.

| Phase | What it adds |
|---|---|
| M4 Make | Materials for new meshes: from a model's own textures, from a photo, or generated from your words (that part is in 0.3 already). Materials picked from the game for new clothes and objects. A mesh's looks (appearances). This is what [EDGEfab](https://github.com/Edgemodders/EDGEfab) builds on |
| M5 Preview | The full preview: shine, bumps, metal and detail on the model, not just colors, compared with the game |
| M6 Beyond layers | Colors no surface offers, other kinds of material, several layers on a new mesh |
| M7 Ship | A Nexus Mods page. Some parts came early: the Marketplace and Open VSX (0.3.0), the assistants' server on npm (0.3.1), and a place in the EDGEkit app (1.140.1). The goal: a non-coder recolors an item from the docs alone |

A longer-term idea in the design: change materials in the running game by asking REDagent, for example looking at a crate and saying "make it blue".

## In this section

| Page | |
|---|---|
| [Install and set up](https://edgemodders.ai/wiki/edgemat/install.html) | Requirements, installing the preview, the first library build |
| [The Library](https://edgemodders.ai/wiki/edgemat/library.html) | Every surface and detail texture in your game |
| [Surface pages](https://edgemodders.ai/wiki/edgemat/surfaces.html) | A surface's colors as named swatches, the closest color to one you name, and its finish in plain words |
| [The setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html) | A garment's layers in plain words, the color map, what looks wrong; changing layers and Save to Project |
| [Find](https://edgemodders.ai/wiki/edgemat/find.html) | From a garment's name to its materials, for each body type |
| [View in 3D](https://edgemodders.ai/wiki/edgemat/view-in-3d.html) | The garment on its mesh, with its colors, in REDcode's viewer |
| [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html) | A material from words or a photo, put on a garment |
| [Your mod in the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html) | Pack, install, and wear what you changed |
| [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html) | Let Claude find, describe, recolor and make materials for you |
| [Tutorial: worn leather](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html) | Leather pants from one line of words, in the editor |
| [Tutorial: snakeskin](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html) | Snakeskin pants by asking Claude |
| [Settings and commands](https://edgemodders.ai/wiki/edgemat/settings.html) | Every setting and command |
| [Troubleshooting](https://edgemodders.ai/wiki/edgemat/troubleshooting.html) | Symptoms and fixes |

## Credits

EDGEmat learns from [MlsetupBuilder](https://github.com/Neurolinked/MlsetupBuilder) by Neurolinked, the multilayered material editor many modders already know, and from [WolvenKit](https://github.com/WolvenKit/WolvenKit) and the [Cyberpunk 2077 modding wiki](https://wiki.redmodding.org/). EDGEmat is a new editor written from scratch: it studied how MlsetupBuilder behaves, and uses none of its code or data. Neurolinked has been contacted about it. EDGEmat is an EDGEmodders project; it is not made with or endorsed by MlsetupBuilder's author.

## Reference

- [EDGEmat docs](https://edgemodders.github.io/EDGEmat/): the [design](https://edgemodders.github.io/EDGEmat/design.html), the [behavior spec](https://edgemodders.github.io/EDGEmat/design/behavior.html), the [changelog](https://edgemodders.github.io/EDGEmat/changelog.html) and the [progress log](https://edgemodders.github.io/EDGEmat/progress.html)
- [Source and issues](https://github.com/Edgemodders/EDGEmat)
