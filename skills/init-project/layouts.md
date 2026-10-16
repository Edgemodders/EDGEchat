# Mod layouts

Facts for `init-project`, each with its source in the EDGE repos (read 2026-10-16). REDdeck's classifier is the code that decides where a mod's files deploy, so its paths are the ones REDdeck will use.

## Where each kind of file deploys

Paths are under the game's install folder.

| Kind | Deploys to | Source |
|---|---|---|
| Archive | `archive/pc/mod/<name>.archive` | REDdeck `src/classifier.ts` |
| ArchiveXL | `archive/pc/mod/<name>.archive.xl`, beside the archive | REDdeck `src/classifier.ts` |
| redscript | `r6/scripts/<ModName>/<file>.reds` | REDdeck `src/classifier.ts` |
| TweakXL | `r6/tweaks/<ModName>/<file>.yaml` (or `.yml`, `.tweak`) | REDdeck `src/classifier.ts` |
| Cyber Engine Tweaks | `bin/x64/plugins/cyber_engine_tweaks/mods/<ModName>/`, a folder with `init.lua` | REDdeck `src/classifier.ts` |
| RED4ext plugin | `red4ext/plugins/<ModName>/<file>.dll` | REDdeck `src/classifier.ts` |
| REDmod | `mods/<ModName>/`, with `info.json`; the game loads it after `redMod.exe deploy` and with `-modded` | REDdeck `src/classifier.ts`, `docs/design.html` |
| REDnode package | `red4ext/plugins/REDnode/apps/<id>/`, a folder with `rednode-app.json` | REDdeck `src/classifier.ts`; REDnode `docs/overlay-apps.md` |
| Audioware, input, config | `r6/audioware`, `r6/input`, `r6/config`, `engine/config`, path kept | REDdeck `src/classifier.ts` |

Load order: there is no plugin list; the folder is the registry. Archives in `archive/pc/mod` load in alphabetical order and the one loaded first wins; `modlist.txt` in that folder names archives to load first (REDdeck `docs/design.html`).

## A WolvenKit project

REDcode makes and reads the same project as WolvenKit (REDcode `extensions/redcode/src/project.ts`).

| Path | Holds |
|---|---|
| `<Name>.cpmodproj` | The project file (XML `<CP77Mod>`: Name, ModName, Author, Email, Description, Version) |
| `source/archive/` | Game files (CR2W) at their game paths (`base/...`, `ep1/...`), packed into the mod's archive |
| `source/raw/` | Working files exported from `source/archive` (glTF, images, WAV), imported back after editing |
| `source/resources/` | Loose files at their deploy paths, for example `r6/tweaks/x.yaml`, `r6/scripts/...`, `bin/x64/plugins/cyber_engine_tweaks/mods/...`, and `.xl` files |
| `packed/` | The build output, laid out like the game folder |

Packing (REDcode `extensions/redcode/src/pack.ts`, `docs/design/ship.md`):

- `source/archive` becomes `packed/archive/pc/mod/<ModName>.archive` (for a REDmod, `packed/mods/<ModName>/archives/`). Paths with capital letters or spaces get a warning.
- `.xl` files from `source/resources` go beside the archive. Every other resource keeps its path under `packed/`.
- `.tweak` files are packed only from `r6/tweaks`.

To test in the game: pack, then REDdeck installs the project (`reddeck_install_project` with the `.cpmodproj` path, or REDcode's command) and deploys it (`reddeck_deploy`). Deploy and undo write to the game folder, so ask the user first (REDdeck `src/mcp.ts`).

## Editing game files (CR2W)

From redcode-mcp's own instructions (REDcode `packages/redcode-mcp/src/server.ts`):

- Paths are dotted from the root chunk and match WolvenKit's JSON, for example `components.3.name`.
- Numbers are 32-bit floats (0.22 is stored as 0.219999999).
- In `.ent` and `.app` files, `compiledData` is rebuilt from `components` on save: edit `components`, never `compiledData`.
- Properties at their default value are not stored.

## A REDnode package

From REDnode `docs/overlay-apps.md` and `packages/overlay/README.md`:

- A folder with `rednode-app.json` and a page (`entry`) and/or a Node mod (`main`, `.mjs` for `import`). Fields: `id` (lowercase letters, digits, `-`, `_`), `name`, `version`, `entry`, `main`, `kind` (`window` or `hud`), `width`, `height`, `permissions`, `requires`.
- It needs no packing: the folder itself goes to `red4ext/plugins/REDnode/apps/<id>/`.
- With the launcher's **Hot reload** switch on, saving a mod's file restarts the mod and saving an app's file reloads its page. Write data to `dataDir`, never to the package's own folder, which hot reload watches.
- A Node mod's `console.log` goes to `red4ext/logs/rednode-mods.log` and the in-game Mod log app.
- To turn it on: in the game, **F10**, **REDNODE** tab, **Mod Manager**.
