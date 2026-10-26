<!-- Copied from EDGEweb's docs/wiki/edgemat/settings.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/settings.html (reviewed 2026-10-24) -->

# Settings and commands

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `edgemat`. Most people never change any of these: with REDcode set up, EDGEmat uses REDcode's game folder and REDbridge, and otherwise finds the game on its own.

(Screenshot on the wiki, "EDGEmat in VS Code's settings": VS Code's Settings editor filtered to edgemat, showing its three settings, all empty.)

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `edgemat.gamePath` | empty | The Cyberpunk 2077 folder (the one with `bin`, `archive` and `r6`). Empty means REDcode's game folder, else a search of Steam, GOG and Epic | EDGEmat finds no game, or the wrong one. **Set Game Folder** sets it for you |
| `edgemat.bridgePath` | empty | `REDbridge.exe`, or its folder. Empty means REDcode's `redcode.bridgePath`, then REDbridge on your PATH. When REDcode is running with the same game, EDGEmat uses REDcode's running REDbridge instead | You don't use REDcode, or you build REDbridge yourself |
| `edgemat.dotnetRoot` | empty | The .NET location for EDGEmat's own REDbridge process only. Empty means REDcode's `redcode.dotnetRoot` | .NET 10 is installed for your user only and REDbridge can't find it |

> **Never set `DOTNET_ROOT` for your whole Windows account.** Every .NET program then looks only there, and it breaks other tools. Use `edgemat.dotnetRoot`, which applies to EDGEmat's REDbridge alone.

Changing any of these, or REDcode's game folder or REDbridge, makes EDGEmat start over: it restarts its REDbridge and checks the library against the game.

## Commands

Open the command palette (`Ctrl+Shift+P`) and type `EDGEmat`. Most are also buttons in EDGEmat's views; the ones that act on a row appear only on that row.

### The Library

| Command | Where | Does |
|---|---|---|
| New Material... | Library title bar (sparkle icon) | Opens the [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html) page, not aimed at a mesh |
| Open Setup... | Library title bar (go-to-file icon) | Opens a setup from the game, a file on disk, or a mod's archive |
| Search Library | Library title bar (magnifier) | Filters the Library by plain words |
| Clear Search | Library title bar, while searching | Shows the full Library again |
| Rebuild Library | Library title bar (refresh) | Builds the library again from the game |
| Set Game Folder | Library's **`...`** menu | Picks the Cyberpunk 2077 install EDGEmat reads, from the ones it found or a folder you browse to |
| Show Log | Library's **`...`** menu | EDGEmat's log in the Output panel |
| Connect an Assistant (MCP)... | Library's **`...`** menu | Connects Claude Code to EDGEmat's MCP server, or copies the command or a JSON entry for another client ([Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html#connect-claude-code)) |
| Open | Clicking a surface or microblend | Its [surface page](https://edgemodders.ai/wiki/edgemat/surfaces.html) |
| Copy Game Path | Hover a row (copy icon), or right-click | The file's game path to the clipboard |

### Find

| Command | Where | Does |
|---|---|---|
| Find... | The button in the empty Find view, or Find's title bar (magnifier, shown on hover) | Searches garments by name and meshes by path |
| Clear Find | Find's title bar, after a search | Empties the view |
| Open Setup | Clicking a layered material | Its setup in the setup editor, with the mesh's own mask set |
| View in 3D | Hover a mesh row (eye icon), or right-click | The mesh in REDcode's 3D viewer, with its colors from EDGEmat |
| New Material Here... | Hover a material (sparkle icon), or right-click | The [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html) page, aimed at that material on every body's mesh |
| Copy Game Path | Hover a mesh or layered material (copy icon), or right-click | The mesh's path, or the material's setup path |

### Saving and image services

| Command | Where | Does |
|---|---|---|
| Save to Project... | The setup editor's title bar (save icon) and its **Save to Project** button; `Ctrl+S` on a game file | Saves the setup into a WolvenKit project ([Save to Project](https://edgemodders.ai/wiki/edgemat/setup-editor.html#save-to-project)) |
| Set Image Service Key... | Command palette | Stores your Google Gemini or OpenAI key in VS Code's secret storage |
| Clear Image Service Key... | Command palette | Removes it; the next Generate asks again |

### In the setup editor and surface pages

These are buttons and switches on the page itself, not commands: **Keep open**, **Copy**, **Raw values**, **Hide unused slots**, **All layers** / **Selected layer**, **Change** (the mask set, a layer's surface or microblend) and **Open** (a layer's surface or microblend). In the setup editor, `Ctrl+Z` and `Ctrl+Y` undo and redo. Each is explained on its page: [Surface pages](https://edgemodders.ai/wiki/edgemat/surfaces.html), [The setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html), [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html).

The setup editor is also an editor you can pick for any `.mlsetup`: **Reopen Editor With...** › **EDGEmat Setup Editor**.

### Coming in the next version

Built, not released yet (after 0.3.1):

| Command | Where | Does |
|---|---|---|
| Open Material in EDGEmat... | Right-click a `.mlsetup`, `.mlsetup.json` or `.mltemplate` in the Explorer or on its tab; a `.mlsetup` in REDcode's Project view | A setup opens in the setup editor, a surface on its page |
| Open Mesh in EDGEmat | Right-click a `.mesh` in the Explorer or on its tab | Find shows the mesh with the look on screen open, and each material's setup or New Material Here |
