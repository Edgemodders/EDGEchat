<!-- Copied from EDGEweb's docs/wiki/redcode/export-import.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/export-import.html (reviewed 2026-11-22) -->

# Export and import

Some changes need another tool: you repaint a texture in an image editor, or reshape a mesh in Blender. **Export to Raw** turns a game file into a format those tools open. **Import from Raw** turns it back into the game's format, ready to pack. WolvenKit's own exporter and importer do the converting, through REDbridge, with the same results as in WolvenKit.

| On this page | |
|---|---|
| [The round trip](https://edgemodders.ai/wiki/redcode/export-import.html#the-round-trip) | Out, edit, back in |
| [Try it: repaint a texture](https://edgemodders.ai/wiki/redcode/export-import.html#try-it-repaint-a-texture) | With any image editor |
| [What converts](https://edgemodders.ai/wiki/redcode/export-import.html#what-converts) | Which files go out and come back |
| [Edit in Blender](https://edgemodders.ai/wiki/redcode/export-import.html#edit-in-blender) | A shortcut for meshes |
| [Settings are kept on import](https://edgemodders.ai/wiki/redcode/export-import.html#settings-are-kept-on-import) | Why an import doesn't lose anything |
| [Exporting and importing folders](https://edgemodders.ai/wiki/redcode/export-import.html#exporting-and-importing-folders), [After an import](https://edgemodders.ai/wiki/redcode/export-import.html#after-an-import) | |

## The round trip

1. Add the game file to your project (see [Game Assets](https://edgemodders.ai/wiki/redcode/game-assets.html#add-to-project)). It's under **Archive** in the Project view.
2. Hover over it and press **Export to Raw**, or right-click it. The converted file appears under **Raw**, at the same path.
3. Edit the file in your other tool and save it. It is in your project folder under `source\raw`, at the same path as the game file: right-click it under Raw and choose **Reveal in File Explorer** to find it.
4. Hover over the file under Raw and press **Import from Raw**. REDcode rebuilds the game file under Archive from it.
5. [Pack](https://edgemodders.ai/wiki/redcode/pack-install.html) and try it in the game.

Export and Import only show on files that can be converted. Both work on a folder too.

(Screenshot on the wiki, "Export and import buttons": The Project view with a texture under Archive showing the Export to Raw hover button, and its exported PNG under Raw showing the Import from Raw button.)

## Try it: repaint a texture

You need a project open and any image editor that saves PNG files.

1. In **Game Assets**, press **Filter Game Assets** and type `xbm` and a word for something you know, such as a brand or a weapon. Click a few textures until you find one you'd recognise in the game.
2. Press **Add to Project** on it.
3. In the Project view, hover over the texture under **Archive** and press **Export to Raw**.
4. Right-click the PNG under **Raw**, choose **Reveal in File Explorer**, and open the PNG in your image editor. Paint something obvious on it, and save it under the same name.
5. Back in REDcode, hover over the PNG under **Raw** and press **Import from Raw**.
6. Click the texture under **Archive**.

| After | You should see |
|---|---|
| Step 3 | A `.png` under Raw, at the same path as the texture |
| Step 5 | A status line saying the file was imported |
| Step 6 | Your painted version in the texture viewer |

To see it in the game, press **Pack and Install** and go to where the texture is used. Where that is depends on the texture, so this last step is yours to check. Many surfaces don't get their colour from a texture at all: most clothing is coloured by layered materials, which [EDGEmat](https://edgemodders.ai/wiki/edgemat/) changes. See [Finding what you want to change](https://edgemodders.ai/wiki/redcode/finding.html).

## What converts

**Out of the game and back:**

| Game file | Exports to | Imports back? |
|---|---|---|
| Texture (`.xbm`) | An image: PNG by default, or TGA, DDS, BMP, JPG or TIFF (`redcode.export.textureFormat`) | Yes |
| Mesh (`.mesh`) | glTF, the 3D format Blender and other tools open: one `.glb` file by default, or `.gltf` with a `.bin` beside it (`redcode.export.meshFormat`). Its materials and their textures come along (`redcode.export.meshMaterials`). Only the most detailed level of detail is exported, unless you turn on `redcode.export.meshLods` | Yes |
| Voice line or other sound (`.wem`) | Ogg | **No.** WolvenKit's library can't import them yet, so Import doesn't offer it |
| Masks, morph targets, animations, fonts, CSV and a few more | The format WolvenKit uses for each | Where WolvenKit can |

**New files into the game:**

| Your file | Becomes | How |
|---|---|---|
| A WAV file named after a sound's hash, such as `832549876.wav` | A replaced game sound effect | See [Replacing a sound](https://edgemodders.ai/wiki/redcode/viewers.html#replacing-a-sound) |
| A model from another tool (`.glb`, `.gltf`) with no `.mesh` at its path yet | A new mesh | REDcode asks for a **template**: a game mesh to start from, whose materials and appearances the new mesh keeps. If your model has more or fewer parts than the template, REDcode fits the template's appearances to it, and the log says what it changed. That case hasn't been tested yet |

Files with no such format, such as entities and appearances, aren't exported: edit them in the [CR2W editor](https://edgemodders.ai/wiki/redcode/editing.html) or [as JSON](https://edgemodders.ai/wiki/redcode/editing.html#editing-as-json) instead.

## Edit in Blender

For meshes there's a shortcut. Right-click a `.mesh` under Archive, or a `.glb` or `.gltf` under Raw, and choose **Edit in Blender**. You need [Blender](https://www.blender.org/) installed; no Blender add-on is needed.

1. REDcode exports a `.mesh` to Raw first, if it hasn't been.
2. REDcode starts Blender with the model loaded.
3. Change the model and save in Blender with `Ctrl+S`. Each save also writes the model back to the `.glb` under Raw, and REDcode then imports it into Archive.
4. Carry on as long as you like. When you close Blender, REDcode stops watching.

**You should see** an item in VS Code's status bar, **Blender:** and the model's file name, while REDcode is watching for your saves. Click it to stop watching before you close Blender. After each save, the 3D view of the mesh in REDcode shows the new shape.

Good to know:

- **Skinned meshes** work too: a body or a garment opens in Blender on its armature, its skeleton of bones. Tested with Blender 5.3 on the game's base male body.
- **Only the mesh's own parts come back.** The import writes back the parts the mesh had, by their names. An object you add in Blender, such as a sphere, is left out. After the save, REDcode names each object it left out and says how to keep it: join it into one of the parts (select it, then the part, and press `Ctrl+J`).

REDcode finds Blender in Program Files or a Steam library and writes the one it found to `redcode.blenderPath`. If it finds none, set that setting to `blender.exe` or its folder.

## Settings are kept on import

A texture has settings an image file can't hold: its compression, its format, flags that tell the game how to stream it. A mesh has its materials. With `redcode.import.keepSettings` on (the default), the file you import **keeps the settings of the file it replaces**. This is WolvenKit's "use existing file" option. REDcode also keeps every texture flag, which WolvenKit's library on its own doesn't.

Turn the setting off only if you want WolvenKit's defaults instead.

## Exporting and importing folders

- **Export** on a folder asks first, with the number of files, then exports each one it can.
- **Import** on a folder only **re-imports**. It takes a raw file only if its game file is already under Archive. If several raw files belong to the same game file, it takes the newest.

The re-import rule matters for meshes. A mesh export writes its material textures into Raw too. Without the rule, a folder import would turn them all into new textures in your mod, which would replace the game's. To import one of those textures on purpose, import that file on its own.

## After an import

A file that's open in the CR2W editor reloads by itself. If it had unsaved edits, REDcode warns you instead: revert the file (**File**, **Revert File**) to see the import, or save to keep your edits over it.

## For assistants

`redcode-mcp` has `project_export` and `project_import`, so an assistant can do the same, for example exporting every texture in a folder for you. See [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html).
