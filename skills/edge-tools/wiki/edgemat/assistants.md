<!-- Copied from EDGEweb's docs/wiki/edgemat/assistants.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/assistants.html (reviewed 2026-10-24) -->

# EDGEmat and assistants

EDGEmat comes with an **MCP server**, so an AI assistant such as [Claude Code](https://claude.com/claude-code) can use EDGEmat the way you do: find a garment's materials, describe its layers, recolor them, and make new materials from words or an image, saving into your mod project. Every EDGEmat feature comes to the buttons and the assistant together.

## Connect Claude Code

The server comes with the extension (from version 0.3.1): installing EDGEmat puts it at `%LOCALAPPDATA%\EDGEmat\mcp\edgemat-mcp.cjs`, the same path for every version, and each update refreshes it.

1. In VS Code, open EDGEmat's Library view, press **`...`** at its top right and choose **Connect an Assistant (MCP)...** (or run it from the command palette, `Ctrl+Shift+P`).
2. Choose **Connect Claude Code**. If you set an image service key in EDGEmat, it asks whether to give Claude Code the key too: say yes to let Claude make materials from words (`mat_generate`). Claude Code keeps the key in its own settings file, in plain text.
3. Start a new Claude Code session. It sees EDGEmat's tools. To check, run `claude mcp list` in a terminal: `edgemat` shows as connected.

The command registers EDGEmat for every folder (`--scope user`) and replaces an older registration, such as one for 0.3.0's downloaded file. Claude Code runs the server with [Node.js](https://nodejs.org/) 20 or later when you have it, else with VS Code's own program. If Claude Code's `claude` command isn't found, the command offers to copy the line instead.

(Screenshot on the wiki, "Connect an Assistant": The Connect an Assistant (MCP) list in VS Code: Connect Claude Code, Copy the Claude Code command, Copy a JSON entry, Reveal the server file, and the hint at the top.)

### Other assistants

| Assistant | How |
|---|---|
| Agents inside VS Code 1.101 or later | Nothing to do: VS Code lists EDGEmat among its MCP servers, with your image service keys from EDGEmat. Editors without MCP support of their own skip this |
| Another MCP client | **Connect an Assistant (MCP)...** › **Copy a JSON entry**, for the client's settings file |
| Without VS Code (EDGEchat, REDagent, another PC) | The same server on npm: `claude mcp add --scope user edgemat -- cmd /c npx -y @edgemodders/edgemat-mcp` ([the package](https://www.npmjs.com/package/@edgemodders/edgemat-mcp)). It needs Node.js 20 or later |

The server finds the game and REDbridge from your VS Code settings, the same way the extension does (EDGEmat's settings, then REDcode's), so on a PC with REDcode set up it needs nothing more. It shares the extension's material library; with none built yet, ask the assistant to build it first. It starts its own REDbridge while it runs.

To point it elsewhere, add options after the file name, or set environment variables (an empty one counts as not set):

| Option | Environment variable | What |
|---|---|---|
| `--game <folder>` | `EDGEMAT_GAME_PATH` | The Cyberpunk 2077 folder |
| `--bridge <path>` | `REDBRIDGE_EXE` | `REDbridge.exe`, or its folder |
| `--cache <folder>` | `EDGEMAT_CACHE` | Where the library lives, `%LOCALAPPDATA%\EDGEmat` by default |

### A key for new materials

`mat_generate` calls an AI image service with your own key. Claude Code runs the server outside VS Code, so it can't read VS Code's secret storage: **Connect Claude Code** offers to pass your key in the server's environment. To change the key later, set it in EDGEmat (**Set Image Service Key...**) and run **Connect Claude Code** again. By hand, add `-e GEMINI_API_KEY=<your key>` or `-e OPENAI_API_KEY=<your key>` before `--`. Every other tool, `mat_from_image` included, works without a key.

For the other EDGE tools' servers, see [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html).

(Screenshot on the wiki, "Claude Code asking EDGEmat": A Claude Code session in a terminal answering 'describe the Arasaka samurai jacket's layers' with EDGEmat's mat_describe: the layers in plain words and their shares.)

## What it can do

| Tool | Does | Like the UI's |
|---|---|---|
| `mat_find` | Finds a garment by in-game name or record id, or a mesh by path, and walks it to its looks per body type, meshes and materials, with each setup and the mask set it uses | [Find](https://edgemodders.ai/wiki/edgemat/find.html) |
| `mat_describe` | Describes a setup layer by layer, in plain words and raw values: surface, color, finishes, tiling, opacity, detail texture, share of the garment, and what looks wrong | [The setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html) |
| `mat_colors` | One surface's colors with plain names, and the closest to a color given in words, hex or RGB; its finishes in plain words | [Surface pages](https://edgemodders.ai/wiki/edgemat/surfaces.html) |
| `mat_templates` | Searches the surfaces by plain words | [The Library](https://edgemodders.ai/wiki/edgemat/library.html)'s search |
| `mat_microblends` | Searches the detail textures by plain words | The Library's Microblends |
| `mat_library` | Says whether the library is built and current, and builds it | Rebuild Library |
| `mat_edit` | Changes a setup's layers in words ("dark red", "glossy", "leather standard clean") and saves it into a project, as a new setup with its meshes (the default) or in place. Picks the surface's closest color and says how close; `preview` shows the result without saving | [Editing and Save to Project](https://edgemodders.ai/wiki/edgemat/setup-editor.html#changing-a-layer) |
| `mat_generate` | Makes a material from words through Gemini or OpenAI with your key, and puts it on mesh materials. `imageOnly` makes just the image, to look at first | [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html) |
| `mat_from_image` | Makes a material from an image file, no service or key, and puts it on mesh materials | New Material › From an image file |
| `mat_apply` | Puts an existing material (`.mi`) on mesh materials | |

## Things to ask

> Which materials do the punk jeans use, for each body?

> Describe the Sunny Ammo sneakers' layers. Which one is the sole?

> What's the closest dark red the leather on the Arasaka jacket can take?

> Find me a worn chrome surface and show its colors.

> I opened a setup from a mod and one layer looks white in the game. Why?

> Make the Sturdy-stitched punk jeans dark green on both bodies, and save it into my project C:\...\MyMaterials.

> Make a dark green snakeskin material and put it on the Light Azure composite-lined slim-fits, both bodies, in my project C:\...\MyMaterials.

Step by step: [Tutorial: snakeskin by asking Claude](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html).

The assistant answers from the same data you see, and names the files behind it, so you can open them yourself.

## Good to know

- The server sends no telemetry. Its only network calls are `mat_generate`'s, to the image service whose key you gave it, when asked. Claude Code talks to Claude with your own account.
- It reads the game and never writes to it. It writes only into the project you name.
- Some asks match many items ("samurai" fits 19). The assistant then gets a list and picks one, or asks you.
