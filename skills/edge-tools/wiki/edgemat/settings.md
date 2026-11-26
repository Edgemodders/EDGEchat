<!-- Copied from EDGEweb's docs/wiki/edgemat/settings.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/settings.html (reviewed 2026-11-22) -->

# Settings and commands

A reference page. Most people never change a setting: with REDcode set up, EDGEmat uses REDcode's game folder and REDbridge, and otherwise finds the game by itself.

| On this page | |
|---|---|
| [Settings](https://edgemodders.ai/wiki/edgemat/settings.html#settings) | The three settings |
| [Commands](https://edgemodders.ai/wiki/edgemat/settings.html#commands) | By view: [the Desk](https://edgemodders.ai/wiki/edgemat/settings.html#the-desk), [Game Materials](https://edgemodders.ai/wiki/edgemat/settings.html#game-materials), [Find](https://edgemodders.ai/wiki/edgemat/settings.html#find), [other views and the Explorer](https://edgemodders.ai/wiki/edgemat/settings.html#from-other-views-and-the-explorer), [saving and image services](https://edgemodders.ai/wiki/edgemat/settings.html#saving-and-image-services) |
| [Buttons on the pages](https://edgemodders.ai/wiki/edgemat/settings.html#buttons-on-the-pages) | In the setup editor and on surface pages |
| [Keyboard shortcuts](https://edgemodders.ai/wiki/edgemat/settings.html#keyboard-shortcuts) | |
| [Tools for assistants](https://edgemodders.ai/wiki/edgemat/settings.html#tools-for-assistants) | |

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `edgemat`.

(Screenshot on the wiki, "EDGEmat in VS Code's settings": VS Code's Settings editor filtered to edgemat, showing its three settings, all empty.)

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `edgemat.gamePath` | empty | The Cyberpunk 2077 folder, the one with `bin`, `archive` and `r6`. Empty means REDcode's game folder, then EDGEdeck's, then a search of Steam, GOG and Epic | EDGEmat finds no game, or the wrong one. **Set Game Folder** sets it for you |
| `edgemat.bridgePath` | empty | `REDbridge.exe`, or its folder. Empty means REDcode's `redcode.bridgePath`, then REDbridge on your PATH. When REDcode is running with the same game, EDGEmat uses REDcode's running REDbridge instead | You don't use REDcode, or you build REDbridge yourself |
| `edgemat.dotnetRoot` | empty | Where .NET is, for EDGEmat's own REDbridge process only. Empty means REDcode's `redcode.dotnetRoot` | .NET 10 is installed for your user only and REDbridge can't find it |

> **Never set `DOTNET_ROOT` for your whole Windows account.** Every .NET program then looks only there, and it breaks other tools. Use `edgemat.dotnetRoot`, which applies to EDGEmat's REDbridge alone.

Changing any of these, or REDcode's game folder or REDbridge, makes EDGEmat reconnect: it restarts its REDbridge and checks Game Materials against the game. Your Desk and your projects are not touched.

## Commands

Open the command palette (`Ctrl+Shift+P`) and type `EDGEmat`. Most commands are also buttons in EDGEmat's views. The ones that act on a row appear only on that row, when you hover it or in its right-click menu, and are not in the palette. The views are, top to bottom, the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html), [Game Materials](https://edgemodders.ai/wiki/edgemat/game-materials.html) and [Find](https://edgemodders.ai/wiki/edgemat/find.html).

### The Desk

| Command | Where | Does |
|---|---|---|
| Add the Desk to Project... | Desk title bar (**+**), and the palette | Puts every line into a project. Asks which variation when a mesh is there twice |
| Clear the Desk... | Desk title bar, when it has lines, and the palette | Removes everything, edits included, after asking |
| Add to Project... | A line (new-file icon), or right-click | Puts that line into a project. A project REDcode doesn't have open opens afterwards |
| Rename... | Right-click a line | Names a variation, such as `blue` |
| Remove | A line (**×**), or right-click | Removes that line from the Desk. Asks first if it has edits. (Take Off the Desk before 0.3.4) |
| View in 3D, Copy Game Path, New Material Here..., Copy REDnode Command | Rows under a line | As in [Find](https://edgemodders.ai/wiki/edgemat/settings.html#find), below, on the Desk's own copy |
| Use a Game Surface... | A part of a mesh from your project (colors icon), or right-click | A game surface in one of its colors on that part, as a one-layer setup ([A prop's parts](https://edgemodders.ai/wiki/edgemat/desk.html#a-props-parts)) |
| Use a Game Material... | Right-click a part of a mesh from your project | A game material that suits any shape on that part, such as glass or a glow, or any `.mi` by its path |
| Back to the Model's Texture | Right-click a part of a prop EDGEfab made | The part wears its model's own texture again |

### Game Materials

| Command | Where | Does |
|---|---|---|
| New Material... | Title bar (sparkle), and the palette | Opens the [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html) page, not set to a garment |
| Open Setup... | Title bar (a page with an arrow), and the palette | Opens a setup from the game, a file on disk, or a mod's archive |
| Filter Game Materials | Title bar (funnel), and the palette | Narrows the list by plain words |
| Clear Filter | Title bar and the palette, while a filter is set | Shows the full list again |
| Rebuild Game Materials | Title bar (refresh), and the palette | Builds the list again from the game |
| Set Game Folder | Title bar's **`...`** menu, and the palette | Picks the Cyberpunk 2077 install EDGEmat reads, from the ones it found or a folder you browse to |
| Show Log | Title bar's **`...`** menu, and the palette | EDGEmat's log in the Output panel |
| Connect an Assistant (MCP)... | Title bar's **`...`** menu, and the palette | Connects Claude Code to EDGEmat's MCP server, or copies the command or a JSON entry for another client ([Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html#connect-claude-code)) |
| Open | Clicking a surface or microblend | Its [surface page](https://edgemodders.ai/wiki/edgemat/surfaces.html) |
| Copy Game Path | A row (copy icon), or right-click | The file's game path to the clipboard |

Up to EDGEmat 0.3.1 the view was called Library, and three of these were **Search Library**, **Clear Search** and **Rebuild Library**. Keyboard shortcuts you set for them then still work.

### Find

| Command | Where | Does |
|---|---|---|
| Find... | The button in the empty Find view, Find's title bar (magnifier), and the palette | Searches garments by name and meshes by path |
| Clear Find | Find's title bar and the palette, after a search | Empties the view |
| Open Setup | Clicking a layered material | Its setup in the setup editor, with the mesh's own mask set |
| Add to Desk | A mesh row (**+**), or right-click | Puts the mesh on the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html) |
| View in 3D | A mesh row (eye), or right-click | The mesh in REDcode's 3D viewer, with its colors from EDGEmat |
| New Material Here... | A material row (sparkle), or right-click | The [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html) page, set to that material on the garment's mesh for both body types |
| Copy Game Path | A mesh or layered material (copy icon), or right-click | The mesh's path, or the material's setup path |
| Copy REDnode Command | Right-click an item, a mesh, a look or a material | `addItem("Items....")` for [REDnode's Console](https://edgemodders.ai/wiki/edgemat/in-the-game.html#2-put-the-item-on-v), to give V the item |

### From other views and the Explorer

| Command | Where | Does |
|---|---|---|
| Open in EDGEmat | Right-click a `.mesh` in REDcode's Game Assets or Project view, in VS Code's Explorer or on its editor tab. Also a button in REDcode's 3D view | Puts the mesh on the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html), with a look open and its layered material in the setup editor. On a game `.mlsetup` in Game Assets, it puts the setup on the Desk. On an `.mltemplate`, it opens the surface's page |
| Open Material in EDGEmat... | Right-click an `.mlsetup`, `.mlsetup.json` or `.mltemplate` in the Explorer or on its editor tab, or an `.mlsetup` in REDcode's Project view | A setup opens in the setup editor, a surface on its page. A plain click on an `.mlsetup` in the Explorer already opens the setup editor, which is VS Code's default editor for them |

### Saving and image services

| Command | Where | Does |
|---|---|---|
| Save to Project... | The setup editor's **Save to Project** button, the save icon in its title bar, and the palette while a setup editor is in front | Saves the setup into a project ([Save to Project](https://edgemodders.ai/wiki/edgemat/setup-editor.html#save-to-project)) |
| Set Image Service Key... | Command palette | Sets your Google Gemini or OpenAI key in REDcode's **Keys** view, shared by every EDGE tool (REDcode 0.10.16 or later). With an older REDcode, in VS Code's secret storage, after checking it looks right (an OpenAI key starts with `sk-`) |
| Clear Image Service Key... | Command palette | Points to **Remove Key** in REDcode's Keys view. With an older REDcode, removes EDGEmat's own key after asking |

## Buttons on the pages

These are buttons and switches on the pages themselves, not commands: **Keep open**, **Copy**, **Raw values**, **Hide unused slots**, **All layers** / **Selected layer**, the map's **+**, **−** and **Fit**, **Change** (the mask set, a layer's surface or microblend) and **Open** (a layer's surface or microblend). Each is explained on its page: [Surface pages](https://edgemodders.ai/wiki/edgemat/surfaces.html), [The setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html), [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html).

The setup editor is also an editor you can pick for any `.mlsetup`: **Reopen Editor With...** › **EDGEmat Setup Editor**.

## Keyboard shortcuts

EDGEmat adds no shortcuts of its own. These VS Code keys work in the setup editor:

| Key | Does |
|---|---|
| `Ctrl+S` | Saves the setup. Where it goes depends on where the setup was opened from: a game file opens **Save to Project**, a Desk setup saves on the Desk, a project file saves in place. See [Save to Project](https://edgemodders.ai/wiki/edgemat/setup-editor.html#save-to-project) |
| `Ctrl+Z`, `Ctrl+Y` | Undo and redo a change to a layer. Click an empty part of the page first if the cursor is in a box |
| `Ctrl+Shift+P` | The command palette, for every command above marked "the palette" |

## Tools for assistants

The MCP server's tools, such as `mat_find` and `mat_edit`, are listed on [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html#the-tools).
