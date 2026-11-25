<!-- Copied from EDGEweb's docs/wiki/edgemat/assistants.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/assistants.html (reviewed 2026-11-22) -->

# EDGEmat and assistants

Whatever you can do with EDGEmat's buttons, an AI assistant can do too. You ask in plain words, such as "make the punk jeans dark green on both bodies", and the assistant finds the garment, reads its layers, recolors them and saves the result into your mod project. You then pack and install the project as usual.

It works because EDGEmat comes with an **MCP server**: a small program that offers EDGEmat's abilities to an assistant as tools. [MCP](https://edgemodders.ai/wiki/glossary.html#mcp-server) is the standard way AI assistants use tools. The assistant on these pages is [Claude Code](https://claude.com/claude-code), Anthropic's assistant that runs in a terminal or inside VS Code.

| On this page | |
|---|---|
| [What you can ask](https://edgemodders.ai/wiki/edgemat/assistants.html#what-you-can-ask) | Examples, and what comes back |
| [The easy way: EDGEchat](https://edgemodders.ai/wiki/edgemat/assistants.html#the-easy-way-edgechat) | One plugin connects every EDGE tool |
| [Connect Claude Code yourself](https://edgemodders.ai/wiki/edgemat/assistants.html#connect-claude-code) | From EDGEmat, in three steps |
| [A key for new materials](https://edgemodders.ai/wiki/edgemat/assistants.html#a-key-for-new-materials) | Only for materials made from words |
| [Other assistants](https://edgemodders.ai/wiki/edgemat/assistants.html#other-assistants) | VS Code's own agents, other clients, no VS Code |
| [The tools](https://edgemodders.ai/wiki/edgemat/assistants.html#the-tools) | The ten everyday ones, and the [newer tools](https://edgemodders.ai/wiki/edgemat/assistants.html#newer-tools) |
| [Pointing the server somewhere else](https://edgemodders.ai/wiki/edgemat/assistants.html#pointing-the-server-somewhere-else) | Advanced |
| [Good to know](https://edgemodders.ai/wiki/edgemat/assistants.html#good-to-know) | Privacy, and what it can write |

## What you can ask

| Ask | What comes back |
|---|---|
| "Which materials do the punk jeans use, for each body?" | The item, its mesh for each body type, and each material with its setup file |
| "Describe the Sunny Ammo sneakers' layers. Which one is the sole?" | Each layer in plain words: surface, color, finish and how much of the shoe it covers |
| "What's the closest dark red the leather on the Arasaka jacket can take?" | The nearest colors that surface offers, with their names, and how close each is |
| "Find me a worn chrome surface and show its colors." | Matching surfaces from your game, and one surface's color list |
| "I opened a setup from a mod and one layer looks white in the game. Why?" | What looks wrong in the file, such as a color its surface doesn't have |
| "Make the Sturdy-stitched punk jeans dark green on both bodies, and save it into my project `C:\Mods\my_materials`." | The files it saved: a new setup and a mesh for each body. Then pack and install |
| "Make a dark green snakeskin material and put it on the Light Azure composite-lined slim-fits, both bodies, in my project `C:\Mods\my_materials`." | A new material in your project, on both meshes. Needs an image service key |
| "What parts does the vending machine in my project have? Put red car paint on its front and glass on its window." | Each part and what it wears, then the parts changed in your project. Pack it to see them |

The assistant answers from the same data you see in EDGEmat, and names the files behind it, so you can open them yourself. Some asks match many items ("samurai" fits 19): the assistant then picks one from the list, or asks you.

Step by step: [Tutorial: snakeskin by asking Claude](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html), and EDGEchat's [Recolor a jacket](https://edgemodders.ai/wiki/edgechat/recolor.html).

(Screenshot on the wiki, "Claude Code asking EDGEmat": A Claude Code session in a terminal answering 'describe the Arasaka samurai jacket's layers' with EDGEmat's mat_describe: the layers in plain words and their shares.)

## The easy way: EDGEchat

[EDGEchat](https://edgemodders.ai/wiki/edgechat/) is the EDGE plugin for Claude Code. It connects EDGEmat together with REDcode, EDGEdeck and REDnode, from one settings form, and adds guidance that helps Claude make mods. If you are starting out, use it: [Install EDGEchat](https://edgemodders.ai/wiki/edgechat/install.html). You don't need the EDGEmat extension for it, and you don't need the rest of this page.

Two things to know:

- EDGEchat brings its own copy of EDGEmat's server, an earlier version with the ten everyday tools. The [newer tools](https://edgemodders.ai/wiki/edgemat/assistants.html#newer-tools), the Desk among them, need the server connected from EDGEmat itself, below.
- Use one or the other. With EDGEchat and **Connect Claude Code** both, Claude Code has two EDGEmat servers and sees every tool twice. EDGEchat's `/edge:setup` finds such doubles.

All the EDGE servers, side by side: [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html).

## Connect Claude Code

The server comes with the EDGEmat extension. You need Claude Code installed.

1. In VS Code, open EDGEmat's **Game Materials** view, press **`...`** at its top right and choose **Connect an Assistant (MCP)...**. Or run it from the command palette (`Ctrl+Shift+P`).
2. Choose **Connect Claude Code**. If you have set an image service key in EDGEmat, it asks "Give the assistant your image service key too?" Say yes to let Claude make materials from words. See [A key for new materials](https://edgemodders.ai/wiki/edgemat/assistants.html#a-key-for-new-materials) first.
3. Start a **new** Claude Code session. A session that was already open doesn't see the new tools.

| What you should see | |
|---|---|
| After step 2 | "EDGEmat is connected to Claude Code. Start a new Claude Code session and ask it about a garment's materials." |
| After step 3 | Ask "Which EDGEmat tools do you have?": Claude lists tools whose names start with `mat_`. Or run `claude mcp list` in a terminal: `edgemat` shows as connected |

This connects EDGEmat for every Claude Code session on your PC, whichever folder you start it in. If you connected an older EDGEmat before, this replaces that connection. You don't need to install anything else: if you don't have [Node.js](https://nodejs.org/), the server runs with the copy built into VS Code. If EDGEmat can't find Claude Code's `claude` command, it offers to copy the line for you to run yourself.

The server finds your game and REDbridge the same way the extension does, so on a PC with REDcode set up it needs nothing more. It shares the extension's Game Materials list and Desk. If that list has never been built, ask the assistant: "Build the EDGEmat library." It can take a minute or two.

(Screenshot on the wiki, "Connect an Assistant": The Connect an Assistant (MCP) list in VS Code: Connect Claude Code, Copy the Claude Code command, Copy a JSON entry, Reveal the server file, and the hint at the top.)

## A key for new materials

Only making a material **from words** needs a key: your own Google Gemini or OpenAI key, as on the [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html#from-words-ai) page. Every other tool works without one, making a material from an image file included.

With REDcode 0.10.16 or later, the server reads your keys from [REDcode](https://edgemodders.ai/wiki/redcode/)'s **Keys** view, which every EDGE tool shares, at each call. Set a key there once (or in EDGEmat, which opens REDcode's box) and Claude Code can use it. **Connect Claude Code** puts no key in Claude Code's settings. (Before EDGEmat 0.3.4 it did, in plain text.)

| To | Do |
|---|---|
| Set or change a key | [REDcode](https://edgemodders.ai/wiki/redcode/)'s **Keys** view, or **EDGEmat: Set Image Service Key...** in the command palette |
| Use a key of your own for the server alone | Set `GEMINI_API_KEY` or `OPENAI_API_KEY` in Windows' environment variables. It wins over the shared key |
| With an older REDcode | The server can't reach the keys. Set the environment variable as above |

## Other assistants

| Assistant | How |
|---|---|
| Agents inside VS Code 1.101 or later | Nothing to do. VS Code lists EDGEmat among its MCP servers; it reads the shared keys as Claude Code's does. In editors without built-in MCP support, nothing happens: use the next row |
| Another MCP client | **Connect an Assistant (MCP)...** › **Copy a JSON entry**, for the client's settings file |
| Without VS Code, or on another PC | The same server is on npm: `claude mcp add --scope user edgemat -- cmd /c npx -y @edgemodders/edgemat-mcp` ([the package](https://www.npmjs.com/package/@edgemodders/edgemat-mcp)). It needs Node.js 20 or later |
| [REDagent](https://edgemodders.ai/wiki/redagent/), in the game | Nothing to do. REDnode brings EDGEmat's everyday tools and starts them when REDagent needs them: see [REDnode and agents](https://edgemodders.ai/wiki/rednode/agents.html) |

## The tools

You never have to name a tool: ask in plain words and the assistant picks. The names help when you read what the assistant did.

| Tool | Does | Same as |
|---|---|---|
| `mat_find` | Finds a garment by in-game name or record id, or a mesh by path, and follows it to its looks for each body type, its meshes and materials. For a mesh, it also lists the items that wear each look, with the command that gives V one | [Find](https://edgemodders.ai/wiki/edgemat/find.html) |
| `mat_describe` | Describes a setup layer by layer, in plain words and raw values, and says what looks wrong | [The setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html) |
| `mat_colors` | One surface's colors with plain names, and the closest to a color given in words, hex or RGB | [Surface pages](https://edgemodders.ai/wiki/edgemat/surfaces.html) |
| `mat_templates` | Searches the surfaces by plain words | [Game Materials](https://edgemodders.ai/wiki/edgemat/game-materials.html)' filter |
| `mat_microblends` | Searches the microblends (detail patterns) by plain words | Game Materials' Microblends group |
| `mat_library` | Says whether Game Materials is built and current, and builds it | Rebuild Game Materials |
| `mat_edit` | Changes a setup's layers in words ("dark red", "glossy", "leather standard clean") and saves it into a project, as a new setup with its meshes. It picks the surface's closest color and says how close. It can also show the result without saving | [Changing a layer](https://edgemodders.ai/wiki/edgemat/setup-editor.html#changing-a-layer) and [Save to Project](https://edgemodders.ai/wiki/edgemat/setup-editor.html#save-to-project) |
| `mat_generate` | Makes a material from words through Gemini or OpenAI with your key, and puts it on a garment's materials. It can make just the picture first, for you to look at | [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html) |
| `mat_from_image` | Makes a material from an image file, with no service or key, and puts it on a garment's materials | New Material › From an image file |
| `mat_apply` | Puts a material that is already in your project on a garment's materials. This is how a material made earlier gets onto a garment. On a part of a prop in your project, it can also put a game surface in a color (`surface`, with `color` and `tile`), a game material (`mi`), or the model's own texture back (`model: true`). Those three need the server connected from EDGEmat, below | A garment: no button yet. A prop's part: [Use a Game Surface..., Use a Game Material... and Back to the Model's Texture](https://edgemodders.ai/wiki/edgemat/desk.html#a-props-parts) |

### Newer tools

These tools came with the last few releases. They are in the server you connect from EDGEmat, and in the npm package. The copies of the server inside EDGEchat and REDnode are an earlier version and don't have them yet.

| Tool | Does | Needs | Tested |
|---|---|---|---|
| `mat_desk` | Lists the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html), puts a mesh or setup on it, names, takes off and clears lines, and adds lines to a project. `mat_edit` can also save an edit on a Desk line | Nothing extra | Yes, with Claude Code |
| `mat_parts` | Lists a prop's parts in your project and what each wears: the model's own texture, a game surface and its color, a game material, or one made in the project. Change one with `mat_apply` | Nothing extra | Outside VS Code with a test script. The same code passed in the game through the Desk's buttons |
| `mat_materials` | Finds the game's materials that suit any shape, for a prop's part: glass, glows, tiling metals, woods and more, by words such as "glass" or "glow blue". Decals and materials painted for one mesh are left out. The first search reads them from your game once | Nothing extra | As `mat_parts` |
| `mat_restyle` | Restyles a whole clothing item in one go. Asked about an item, it returns the item's look in plain words. Given changes in words ("red", "denim", "glossy"), it saves the changed setups into a project, with the item's meshes. It can also put a print such as "woodland camo" over a whole material | A print needs your Gemini or OpenAI key | From a test client, outside the game. The same code passed in the game inside Wardrobe Designer, below |
| `mat_reshape` | A first version, experimental. Changes a garment's **shape** by words, a step at a time: it draws the item from four sides, an image service changes the picture, and Tripo, a service that makes 3D models from pictures, builds the new shape, which is fitted onto the garment. The new shape keeps the game's own materials, so every look of the item keeps its colors and can still be restyled; small parts on top, such as a hat's band and buckle, stay the game's own, bent onto the new shape. Ask for Tripo's painted texture instead and it uses that (`wears: "tripo"`). Only garments that move with one bone, such as hats, helmets and glasses, can be fitted so far. Others say so before anything is paid | An image service key (OpenAI's GPT Image by default) and your own Tripo key, `TRIPO_API_KEY`. One model costs about 60 Tripo credits | The method was seen working in the game on a cowboy hat, in three of its looks with the game's own materials (the band a little bent by the fit). The tool has not had a full test of its own |
| `mat_from_model` | Makes game materials from a textured 3D model (a `.glb` file) or from texture files: color, roughness, metal, bumps and glow. Made for EDGEfab, the asset maker, which is still being built | Nothing extra | Outside the game only. Not yet seen in the game |

**Wardrobe Designer** is an app for players that runs in the game, on REDnode: pick a piece V is wearing, type how it should look, and it changes on V. It is built in EDGEmat's repo and uses the same code as `mat_restyle` and `mat_reshape`. It was tested in the game, but it is not released yet, so these pages don't cover it.

## Pointing the server somewhere else

For advanced setups. The server reads the game folder and REDbridge from VS Code's settings (EDGEmat's, then REDcode's). To point it elsewhere, add options after the server's file name in the command, or set environment variables. An empty one counts as not set.

| Option | Environment variable | What |
|---|---|---|
| `--game <folder>` | `EDGEMAT_GAME_PATH` | The Cyberpunk 2077 folder |
| `--bridge <path>` | `REDBRIDGE_EXE` | `REDbridge.exe`, or its folder |
| `--cache <folder>` | `EDGEMAT_CACHE` | Where Game Materials and the Desk live, `%LOCALAPPDATA%\EDGEmat` by default |

The server file is at `%LOCALAPPDATA%\EDGEmat\mcp\edgemat-mcp.cjs`, the same path for every version. Each update of the extension refreshes it, so a connection keeps working. **Reveal the server file** in the Connect list shows it. The server reads keys from its environment only: `GEMINI_API_KEY`, `OPENAI_API_KEY` and `TRIPO_API_KEY`.

## Good to know

- The server sends no telemetry. Its only network calls go to the image service, and for `mat_reshape` to Tripo, whose key you gave it, and only when you ask for something that needs them. Claude Code talks to Claude with your own account.
- It reads the game and never writes to it. It writes only into the project you name, and onto the Desk.
- While it runs, the server starts its own REDbridge. That is normal.
- Connected but Claude doesn't see the tools? See [Troubleshooting](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#assistants).
