<!-- Copied from EDGEweb's docs/wiki/edgefab/settings.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgefab/settings.html (reviewed 2026-11-22) -->

# Settings and commands

| On this page | |
|---|---|
| [Settings](https://edgemodders.ai/wiki/edgefab/settings.html#settings) | Two of them |
| [Commands in the palette](https://edgemodders.ai/wiki/edgefab/settings.html#commands-in-the-palette) | `Ctrl+Shift+P`, then type EDGEfab |
| [Buttons and menus](https://edgemodders.ai/wiki/edgefab/settings.html#buttons-and-menus) | The Desk, the Pictures tab, the Library, the Explorer |
| [Environment variables](https://edgemodders.ai/wiki/edgefab/settings.html#environment-variables) | Keys, mostly for assistants |
| [Where EDGEfab keeps things](https://edgemodders.ai/wiki/edgefab/settings.html#where-edgefab-keeps-things) | Folders |

## Settings

Open VS Code's Settings (`Ctrl+,`) and search for **EDGEfab**.

| Setting | Values | Default | Does |
|---|---|---|---|
| **Collision** (`edgefab.collision`) | `physical`, `box`, `none` | `physical` | How a prop added to a project is solid: see [Collision](https://edgemodders.ai/wiki/edgefab/add-to-project.html#collision) |
| **Generate In Parts** (`edgefab.generateInParts`) | on, off | on | Generated models come in named parts, a material each. Costs Tripo 20 to 30 credits more, and EDGEfab asks the height: see [Parts](https://edgemodders.ai/wiki/edgefab/models.html#parts) |

In `settings.json`:

```json
{
  "edgefab.collision": "physical",
  "edgefab.generateInParts": true
}
```

Three more choices are kept by EDGEfab itself, not in VS Code's settings, because assistants share them:

| Choice | Set with |
|---|---|
| Your Tripo plan, paid or free | **EDGEfab: Set Tripo Plan (Paid or Free)** |
| The Library's folder | **Set the Library Folder...** in the Library view's **`...`** menu. Shared with every EDGE tool |
| Your own folder in game paths | **Set Your Folder in Game Paths...** in the same menu |

## Commands in the palette

| Command | Does |
|---|---|
| **EDGEfab: Import a GLB...** | A model of your own onto the Desk |
| **EDGEfab: Generate from Words...** | A picture first, or straight to 3D |
| **EDGEfab: Set Tripo Key**, **Clear Tripo Key** | Your Tripo key, in REDcode's Keys (Clear points you to REDcode's Keys view) |
| **EDGEfab: Set OpenAI Key**, **Clear OpenAI Key** | Your OpenAI key, the same way |
| **EDGEfab: Set Tripo Plan (Paid or Free)** | Which plan your Tripo key is on |
| **EDGEfab: Connect an Assistant (MCP)...** | Connects Claude Code, or copies what another assistant needs: see [Assistants](https://edgemodders.ai/wiki/edgefab/assistants.html) |
| **EDGEfab: Set the Library Folder...** | Where the EDGE Library lives |
| **EDGEfab: Set Your Folder in Game Paths...** | Your own folder for Library props' game files |
| **EDGEfab: Refresh Project from Library...** | Newer Library versions into the open project |
| **EDGEfab: Show Log** | Everything EDGEfab did, with file paths and errors. Look here first when something fails |

EDGEfab has no keyboard shortcuts of its own, except `Ctrl+Enter` in the Pictures tab, which is **Edit Picture**.

## Buttons and menus

**The Desk**

| Where | Entry |
|---|---|
| Top of the view | **Import a GLB...**, **Generate from Words...**, **Refresh** |
| On a model's line | **Open in 3D**, **Add to Project** |
| A model's right-click menu | **Add to Project**, **Add to Library...**, **Open in 3D**, **Open Tripo's Preview**, **Reveal in File Explorer**, **Set Size...**, **Make the Painted Lights Glow...**, **Glow Strength...** and **Stop the Glow** (when it glows), **Rename...**, **Delete** |
| On a picture's line | **Generate 3D Model...**, **Open the Pictures** |
| A picture's right-click menu | **Generate 3D Model...**, **Edit Picture...**, **Open the Pictures**, **Reveal in File Explorer**, **Rename...**, **Delete** |

**The Pictures tab**

| Button | Does |
|---|---|
| **Generate 3D Model** | Makes the 3D model from the picture in view |
| **Edit Picture** (`Ctrl+Enter`) | Changes the picture in view by your words |
| **Draw Picture** | Draws a new picture from your words alone |
| **Cancel** | Stops a picture being drawn |

**The Library**

| Where | Entry |
|---|---|
| Top of the view | **Refresh Project from Library...**, **Refresh the Library**, and under **`...`**: **Set the Library Folder...**, **Set Your Folder in Game Paths...** |
| A prop's right-click menu | **Add to Project**, **Open in 3D**, **Edit on the Desk**, **Reveal in File Explorer** |
| A `.glb` file's right-click menu | **Make a Prop**, **Reveal in File Explorer** |

**VS Code's Explorer**

| Where | Entry |
|---|---|
| Right-click a `.glb` or `.gltf` file | **Make a Prop (EDGEfab)** |

## Environment variables

| Variable | Read by | For |
|---|---|---|
| `TRIPO_API_KEY` | The extension and the MCP server | Your Tripo key. It wins over the key in REDcode's Keys |
| `OPENAI_API_KEY` | The extension and the MCP server | Your OpenAI key, the same way |

You don't need them: the extension and the MCP server both read REDcode's Keys. See [Keys for the server](https://edgemodders.ai/wiki/edgefab/assistants.html#keys-for-the-server).

## Where EDGEfab keeps things

| What | Where |
|---|---|
| The Desk | `%LOCALAPPDATA%\EDGEfab\desk\<name>.prop.asset` |
| The MCP server | `%LOCALAPPDATA%\EDGEfab\mcp\edgefab-mcp.cjs` |
| Your Tripo plan and your game folder name | In `%LOCALAPPDATA%\EDGEfab` |
| Where the Library is | `%APPDATA%\EDGE\library.json`, shared by every EDGE tool |
| Your keys | REDcode's Keys, shared by every EDGE tool (`%APPDATA%\Edgemodders\keys`, encrypted for your Windows user) |
| A prop in a project | `<project>\source\archive\<project>\props\<name>\` and the same under `source\raw` |

Inside a prop's folder on the Desk:

```text
neon_vending_machine.prop.asset\
    asset.json                        its name, id, source, license and history
    source\raw\neon_vending_machine\
        neon_vending_machine.glb      the model for the game
        view.glb                      the same model with its textures, for the 3D view
        original.glb                  the model as it arrived
        neon_vending_machine_<part>_basecolor.png, _normal.png, _orm.png
        prepared.json                 size, parts, levels of detail, glow, notes
        picture\1\, picture\2\ ...    each picture: the four views and the sheet
```

You can read these files freely. Change them through EDGEfab, so its records stay true.
