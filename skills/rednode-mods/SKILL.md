---
name: rednode-mods
description: Build REDnode packages for Cyberpunk 2077 - overlay apps (HTML over the game), HUD widgets and Node mods - with the rednode package (game, ui, api, tweakdb, world, audio), and test them in the running game. Use for a REDnode app, mod, window or HUD widget, or a folder with rednode-app.json.
---

# REDnode packages

REDnode is EDGE's Node.js runtime and overlay for Cyberpunk 2077. A **package** is a folder with a `rednode-app.json` manifest: an overlay app (`entry`, a web page drawn over the game), a Node mod (`main`, Node code running beside the game), or both.

| Read | For |
|---|---|
| [overlay-apps.md](overlay-apps.md) | REDnode's own guide, copied from REDnode: first app, UI kit, HUD widgets, sounds, Node mods and the `ui` builder, `pkg`, `secrets`, `kernel`, requirements, REDbridge, archive swaps, the game API, TweakDB, the world, debugging. Its examples were tested in game by REDnode |
| [manifest.md](manifest.md) | Every manifest field. Its `permissions` row is older than the guide: the guide also names `bridge`, `archives`, `front`, `solo` and `agent` |

Read the guide's section before writing code for it. The `rednode` server's tools say how to call them.

## Where a package lives

- While you build it: `<game folder>\red4ext\plugins\REDnode\apps\<id>\`, in a folder named after its `id` (lowercase letters, digits, `-`, `_`). It is the only folder REDnode watches in the game, so hot reload works only there. It is REDnode's folder, not the game's own files.
- At runtime a package writes only to `pkg.dataDir`, never to its own folder: hot reload watches it.
- To share it, the folder is the mod: EDGEdeck installs a REDnode package into the same place, and players add it like any other mod.

## The loop

Work as a mod author at the game does: one small change, then look.

1. **Before you start.** The game runs with a save loaded, and the `rednode` server answers (`game_state`; if not, `/edge:setup`). Ask the user to switch on **Hot reload** in the REDnode launcher (**F10**, then the **REDNODE** tab at the bottom left): for players it is off by default.
2. **Look up every game function** with `gameapi_lookup` before calling it or writing code with it. Types and argument order come from the game's own data; do not guess them.
3. **Start small**: the manifest and one file. Give it `"open": true` so it starts at once; otherwise the user switches it on in the **Mod Manager**. A new folder is picked up by itself, and a changed manifest restarts the package. Use `.mjs` for a Node mod with `import`.
4. **Wait about two seconds**, then check:
   - `apps`: is it running, and its last error.
   - `logs`: what a Node mod printed, and its crash. Look here first when something "doesn't work".
   - `window_text`, `window_image`, `window_console`: what an app's window shows and its page logged. `game_image` with `overlay: true` shows where a window sits on the game.
5. **Fix and go on.** Tell the user what you checked: "the log shows...", "the window reads...".

Reading the live game: `api_read` runs functions named like reads (`Get`, `Is`, `Has`, `Can`, `Find`) and TweakDB records' methods, without asking. `api_call` changes the game and Claude Code asks the user before every call: use it only for a change they asked for.

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

Checked: the folder REDnode watches in the game is the one its plugin passes as `--apps-dir` (REDnode `native/src/overlay/host.cpp`); hot reload off for players by default (REDnode `packages/overlay/README.md`); both read 2026-10-23 at REDnode 0.32.1. The rest is REDnode's guide.
