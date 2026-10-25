---
name: rednode-mods
description: Build REDnode packages for Cyberpunk 2077 - overlay apps (HTML over the game), HUD widgets and Node mods - with the rednode package (game, ui, api, tweakdb, world, audio), and test them in the running game. Use for a REDnode app, mod, window or HUD widget, or a folder with rednode-app.json.
---

# REDnode packages

REDnode is EDGE's Node.js runtime and overlay for Cyberpunk 2077. A **package** is a folder with a `rednode-app.json` manifest: an overlay app (`entry`, a web page drawn over the game), a Node mod (`main`, Node code running beside the game), or both.

| Read | For |
|---|---|
| [overlay-apps.md](overlay-apps.md) | REDnode's own guide, copied from REDnode: first app, UI kit, HUD widgets, sounds, Node mods and the `ui` builder, development folders, `pkg`, `secrets`, `kernel`, requirements, REDbridge, archive swaps, calling other packages (services), the game API, TweakDB, the world, debugging. Its examples were tested in game by REDnode |
| [manifest.md](manifest.md) | Every manifest field, with `service`, `permissions`, `requires` and `sounds` |

Read the guide's section before writing code for it. The `rednode` server's tools say how to call them.

## Where a package lives

REDnode runs packages from its apps folder and from **development folders**, and watches both, so hot reload works in either.

| Folder | What it is |
|---|---|
| `<game folder>\red4ext\plugins\REDnode\apps\<id>\` | The apps folder in the game, where installed packages live. The package's folder is named after its `id` (lowercase letters, digits, `-`, `_`). It is REDnode's folder, not the game's own files |
| A development folder, such as `E:\Modding\MyMod\` | A folder outside the game (REDnode 0.33.0 or later). The user adds it: launcher's Settings panel (**F10**, the **REDNODE** tab at the bottom left, the gear at the right of the Theme row), switch **Developer mode** on, paste the path under **Development folders**, press **Enter**. It holds one package (its own `rednode-app.json`) or packages in subfolders. Its packages start at once |

- Prefer a development folder when the user keeps the mod in a project of their own: nothing is written into the game folder. Only the user can add one; ask them to.
- A package in both places runs from the development folder; the installed copy is skipped, and the **Mod Manager** marks the package **DEV**. Removing the folder (its **Remove** button) brings the installed copy back.
- At runtime a package writes only to `pkg.dataDir`, never to its own folder: hot reload watches it. `pkg.dataDir` is the same for a development copy and the installed one; `pkg.dir` is the folder it runs from.
- To share it, the folder is the mod: EDGEdeck installs a REDnode package into the same place, and players add it like any other mod.

## The loop

Work as a mod author at the game does: one small change, then look.

1. **Before you start.** The game runs with a save loaded, and the `rednode` server answers (`game_state`; if not, `/edge:setup`). Ask the user to switch on **Hot reload** in the REDnode launcher's Settings panel (**F10**, the **REDNODE** tab at the bottom left, then the gear at the right of the Theme row): for players it is off by default.
2. **Look up every game function** with `gameapi_lookup` before calling it or writing code with it. Types and argument order come from the game's own data; do not guess them.
3. **Start small**: the manifest and one file. Give it `"open": true` so it starts at once; otherwise the user switches it on in the **Mod Manager**. A new folder is picked up by itself, and a changed manifest restarts the package. Use `.mjs` for a Node mod with `import`.
4. **Wait about two seconds**, then check:
   - `apps`: is it running, and its last error.
   - `logs`: what a Node mod printed, and its crash. Look here first when something "doesn't work".
   - `window_text`, `window_image`, `window_console`: what an app's window shows and its page logged. `game_image` with `overlay: true` shows where a window sits on the game.
5. **Fix and go on.** Tell the user what you checked: "the log shows...", "the window reads...".

Reading the live game: `api_read` runs functions named like reads (`Get`, `Is`, `Has`, `Can`, `Find`) and TweakDB records' methods, without asking. `api_call` changes the game and Claude Code asks the user before every call: use it only for a change they asked for.

## Calling other packages

A package can offer functions to other packages, and to AI assistants (REDnode 0.34.0 to 0.36.0). Read the guide's section "Calling other packages" before writing one; in short:

| Piece | What it does |
|---|---|
| `"service": "service.mjs"` in the manifest | Every function the file exports can be called by other packages, by this package's `id`. It runs in the package's Node mod, after `main`, sharing its state. Only plain JSON-like values cross, never game references |
| `const x = await service.connect('<id>')`, then `await x.add(5)` | Calls another package's functions (`service` from `rednode`). `x.$on(name, fn)` hears its `service.emit` events. Put the other package in `requires` with a version range |
| JSDoc above each export | Its description: the host checks each call's arguments against `@param` types, the Mod Manager lists the functions, `service.describe(id)` hands it out |
| `@tool` | An assistant may call it, as the MCP tool `<package>__<function>` (dashes become `_`). Write the description for someone who never saw the mod |
| `@readonly` | It changes nothing, so an assistant calls it without asking. Every other tool asks the player first |
| `npx rednode describe src/service.ts` | For a bundled or TypeScript package, whose comments a bundler removes: writes `service.json` beside the manifest; ship it |

To try a mod's tools from here: `mod_services` lists them (also ones started after this session read its tools), `mod_read` calls a read-only one, `mod_call` any other (it asks). A new `<package>__<function>` tool shows by name only after `/mcp` reconnect or a new session.

## Rules

| Rule | Why |
|---|---|
| An app's page has a transparent background, the window's fixed size, and draws no cursor | Transparent pixels show the game and let clicks through; pages are drawn 1:1 at 1080p; the plugin draws the cursor |
| Ask the game only a few times a second | Every game call is a round trip on the game thread, answered a frame or two later |
| Get game objects again after each save load (`PlayerPuppet.OnGameAttached`) | References die when the object goes or a save loads |
| TweakDB changes go through `tweakdb.set` (TweakXL), and the package sets them every time it starts | REDnode puts the old values back when the package stops |
| List what the package needs in `requires` (`codeware`, `tweakxl`, `redbridge`, ...) and powers in `permissions` | The Mod Manager shows a player what is missing; the player allows each power |
| Leave `isolation` out unless the mod has native addons | The player decides whether mods share a process |
| Remind players that **F9**, beside F10, is the game's Quick Load | Pressed by mistake, it loads the last save |
| Use `archives.reload` (or `archives_reload`) only in a loaded save, and only for archives that are whole | A broken archive can crash the game at the swap |

Checked: the apps folder in the game is the one REDnode's plugin passes as `--apps-dir` (REDnode `native/src/overlay/host.cpp`, read 2026-10-23 at REDnode 0.32.1); hot reload off for players by default (REDnode `packages/overlay/README.md`); development folders kept in the host's settings as `devFolders` and watched with the apps folder (REDnode `packages/overlay/main.js`), and `rednode describe` (REDnode `packages/rednode/bin/rednode.mjs`), read 2026-10-25 at REDnode 0.37.0. The rest is REDnode's guide.
