<!-- Copied from EDGEweb's docs/wiki/edgebuilder/troubleshooting.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html (reviewed 2026-10-24) -->

# Troubleshooting EDGEbuilder

## Start with the pills and the logs

The three pills at the top of the panel say what's wrong most of the time. **Hover a red pill** for the reason.

For anything else, quit the game and look in the game folder's `red4ext/logs`:

| Log | What's in it |
|---|---|
| `rednode-mods.log` | EDGEbuilder's own lines, marked `[edgebuilder]`: REDbridge, the index, drops, builder mode |
| `rednode-overlay.log` | REDnode's host, which runs EDGEbuilder's window |
| `rednode-<date>.log` | REDnode's plugin in the game. Useful when the cursor misbehaves |

When you ask for help, include the `[edgebuilder]` lines.

## Problems and fixes

### The first pill says "No game" or "Load a save"

**No game**: REDnode isn't linked to a running game. Searching still works; dropping needs the game. Start the game with REDnode deployed.

**Load a save**: EDGEbuilder works in the world, not in the main menu. Load a save.

### The first pill says "Needs Codeware 1.14+"

REDnode's world calls need Codeware 1.14 or later. Add Codeware to EDGEdeck, deploy, and start the game again. REDnode's Mod Manager shows EDGEbuilder's **Requires** line with a tick when it's right.

### The second pill says "Allow REDbridge"

You haven't allowed EDGEbuilder to use REDbridge yet. Press **F10**, open the **Mod Manager**, select **EDGEbuilder**, and under **Permissions** switch **Allowed** on. EDGEbuilder looks again every five seconds. See [Install and set up](https://edgemodders.ai/wiki/edgebuilder/install.html#allow-redbridge).

### The second pill says "No REDbridge" or "REDbridge failed"

- **No REDbridge**: none was found. In EDGEdeck, use **Get REDbridge** in the Set up group. See [Install EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html#getting-redbridge). If you have it and the pill still says so, update REDnode: EDGEdeck was called REDdeck before 2026-10-17, and REDnode releases from before then look for REDbridge under the old name.
- **REDbridge failed**: it started and stopped. Hover the pill for its last words. Try **Restart REDbridge** in the Settings tab. If you set a path in **REDbridge.exe**, empty it and press **Save and restart REDbridge**, so EDGEbuilder uses EDGEdeck's copy.

If the message says the game folder wasn't found, put it in **Game folder** in the Settings tab.

### Search finds nothing, or assets are missing

Check the third pill. **No index** or **Index failed** means the index needs REDbridge: fix the second pill first, then press **Rebuild asset index** in the Settings tab.

Remember that only meshes and entities are listed today. Lights and other kinds come later.

### A drop doesn't happen

The message line under the pills says why:

| Message | Fix |
|---|---|
| "Not connected to the game..." | Start the game with REDnode, then load a save |
| "Load a save first." | Load a save |
| "The world is not ready yet; try again in a moment." | Wait a moment after a save loads, and try again |
| "Drop failed, nothing was added: ..." | The game refused the drop; the rest of the line says why. Nothing is left behind. If it keeps happening with one asset, report it with the log |

### Edit does nothing, or the mouse still moves V

The overlay must be interactive. Press **F10** until REDnode's windows take the mouse, then switch **Edit** on.

### "No camera yet" in the help line

EDGEbuilder hasn't got the game's camera yet. Load a save if you haven't. After a save loads, it picks up the new camera by itself.

### V's view is stuck, or the HUD is gone

EDGEbuilder probably stopped while Edit was on. **Load a save**: that gives V's camera back. EDGEbuilder also puts the camera and the HUD back by itself the next time it starts. If you only want the HUD back, switch **Hide the game's HUD** off in the Settings tab. See [The camera and builder mode](https://edgemodders.ai/wiki/edgebuilder/camera.html#if-vs-view-gets-stuck).

### The HUD came back after loading a save with Edit on

That was the behaviour in 0.3.0. Update to 0.3.1 or later, which hides the HUD again when the game brings it back (retested in game on 2026-10-16). If you still see it, check that **Hide the game's HUD** is on in the Settings tab, then report it with the log.

### I can't click other REDnode windows

While Edit is on, EDGEbuilder's layer covers them. Switch **Edit** off, use the other window, and switch Edit back on.

### The cursor stops at the edge of the screen while looking around

That's how looking works with REDnode older than 0.22.0, or EDGEbuilder older than 0.3.2. Update both, and the cursor is held still while you look. Until then, let go of the button, move the mouse back, and carry on.

### Right mouse does nothing, or the HUD stays on with Edit on

One of the Settings tab's switches is off: **Use EDGEbuilder's own camera** or **Hide the game's HUD**. Switch it back on. From 0.3.3 the message line says so when Edit goes on with a switch off.

### Pressing S says "Only meshes scale"

Entities keep the size their template gives them. Only meshes can be scaled.

### My objects are gone after loading a save

They're still in the scene. Open the **Scene** tab and press **Rebuild previews**. See [Scenes and baking](https://edgemodders.ai/wiki/edgebuilder/scenes.html).

### An object I don't remember placing is in the scene

The scene is kept between sessions, including drops from earlier ones. Select it in the Scene tab and press **Delete**.

### "The scene file could not be read"

The scene file was damaged. EDGEbuilder keeps the damaged file beside the new one, named `working.scene.json.unreadable-<time>`, and starts with an empty scene. Share that file when you report it.

### The EDGEbuilder window is in the wrong place

With REDnode older than 0.17.1, a window position saved from an older, smaller EDGEbuilder window can push the new full-screen one aside. Close the game and remove the `"edgebuilder"` entry from `%APPDATA%\@rednode\overlay\window-positions.json`, or update REDnode.

### The editor doesn't fill my ultrawide screen

EDGEbuilder's window is laid out for 16:9 (1920 x 1080, scaled to your screen). Ultrawide screens aren't covered yet.

### Something else

Ask on [Discord](https://discord.gg/63qP3Erw43) with the `[edgebuilder]` lines from `rednode-mods.log`, or [open an issue](https://github.com/Edgemodders/EDGEbuilder/issues) on EDGEbuilder's repo.
