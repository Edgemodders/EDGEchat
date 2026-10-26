<!-- Copied from EDGEweb's docs/wiki/edgemat/troubleshooting.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/troubleshooting.html (reviewed 2026-10-24) -->

# Troubleshooting EDGEmat

## Start with the log

**Show Log** in the Library's **`...`** menu, or **View**, **Output**, then **EDGEmat** in the dropdown. It says which game and which REDbridge EDGEmat uses ("Using REDcode's REDbridge for ...", or "Starting REDbridge from ..."), how the library build went, and every file it couldn't read. When you ask for help, include those lines.

## Problems and fixes

### "EDGEmat needs your Cyberpunk 2077 folder"

EDGEmat couldn't find the game through REDcode or in the usual Steam, GOG and Epic folders. Press **Set Game Folder** and pick the folder that contains `bin`, `archive` and `r6`. EDGEmat only accepts a folder with `bin\x64\Cyberpunk2077.exe` in it.

### "EDGEmat reads the game through REDbridge, which was not found"

EDGEmat needs REDbridge 0.8.0 or later. The easy way: install [REDcode](https://edgemodders.ai/wiki/redcode/) and run its **Install REDbridge**, then press **Rebuild Library** in EDGEmat. Or set `edgemat.bridgePath` to `REDbridge.exe` ([Settings](https://edgemodders.ai/wiki/edgemat/settings.html)).

If the log says REDbridge "could not start", .NET 10 may be missing or installed for your user only: REDcode's **Install REDbridge** fetches it, or see `edgemat.dotnetRoot`.

### "The library could not be built"

Press **Show Log** for the reason, then **Try Again**. Common causes: REDbridge stopped (it restarts when needed; try again), or REDcode's REDbridge is older than 0.8.0 (update it in REDcode). A few files the game itself lacks are listed apart as "missing in the game"; that's normal and not an error.

### The Library shows old data after a game update

EDGEmat checks the game's archives on every start and rebuilds when they changed. If it didn't, press **Rebuild Library**.

### The setup editor's color map looks scrambled

The setup is probably drawn with the wrong mask set: a setup doesn't name its masks, so when you open one directly EDGEmat guesses by name. Press **Change** on the "Mask set" line under the map and pick another, or open the setup through [Find](https://edgemodders.ai/wiki/edgemat/find.html), which uses the mask set the garment's mesh names.

### A layer says "shows white"

The layer names a color its surface doesn't offer, and the game draws such a color white. That's in the file itself, often from hand editing. Click the layer, pick one of its surface's colors, and [save it into your project](https://edgemodders.ai/wiki/edgemat/setup-editor.html#save-to-project).

### My change doesn't show in the game

Usually the archive isn't where the game loads it. With Red Hot Tools installed, Pack and Try only copies it to `archive\pc\hot`, which loads only into a running game; with the game closed, use **Pack and Install**. With `redcode.pack.redmod` on, the mod goes to `mods\` and needs a deploy and the `-modded` start. Also check the body, the look, and how you saved. All of it: [Your mod in the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html#if-you-dont-see-your-change).

### The game closes when Pack and Try swaps a new build

With the official RED Hot Tools, swapping a new build of an archive whose name has capital letters can close the game. Use the Edgemodders build of RED Hot Tools, which fixes it: see [Your mod in the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html#pack-and-install), pitfall 3.

### Save to Project finds no mesh

The message says why. EDGEmat looks for meshes beside the setup that name it. A setup opened from a file with no game path, or one no mesh nearby uses, saves alone: point a mesh at it yourself, or open the garment through [Find](https://edgemodders.ai/wiki/edgemat/find.html) and save from there.

### New Material: the service refuses or doesn't answer

| Message | Means |
|---|---|
| "... refused the key" | The key is wrong, revoked, or for another service. **Set Image Service Key...** to enter it again |
| "No answer from ... in ... s" | The service was slow or down. Try again; nothing was added |
| The service says the request was blocked | It refused the words. Rephrase them, or edit **The words sent** |
| OpenAI asks to verify your organization | OpenAI's rule for GPT Image: verify on platform.openai.com, or use Gemini |
| "Cancelled." | You pressed Cancel. The service may still count the call |

The services set prices and limits; a free key may have none for image models. **List models** shows what your key can use.

### Find finds nothing

- Names come from your game in English: try part of the name ("ammo"), or the record id ("CasualShoes").
- Items added by mods aren't followed yet. Find their meshes by path instead.
- The first search reads the game's clothing list and takes a few seconds; if REDbridge isn't running, Find says so.

### Find is missing from the sidebar

It's there, below the Library, often collapsed at the bottom: click its **FIND** header. Collapse the Library (click its header) if Find is squeezed. The magnifier at the top of the Library is Search Library, not Find.

### View in 3D does nothing, or says REDcode isn't installed

- View in 3D needs [REDcode](https://edgemodders.ai/wiki/redcode/). Without it, the eye offers to show REDcode's extension page.
- "REDcode's REDbridge is not running": press **Restart REDbridge** in the message, wait for it, then click the eye again.

### The 3D view shows flat colors

- Pick the look you came from in the viewer's appearance list: REDcode starts on the mesh's first look, and the status bar names the right one.
- Some materials have no colors to give (glass, hair, lights without a texture) and keep REDcode's flat color.
- If every material is flat, check the log for `3D view:` lines. With none, REDcode didn't ask: restart VS Code with both extensions installed.

### Colors look darker than in the game

Known: EDGEmat shows the surfaces' color values as screen colors, and the game may treat some of them differently. Being checked against in-game screenshots for the full preview (M5).

## Still stuck

Ask on the community [Discord](https://discord.gg/63qP3Erw43), or [open an issue](https://github.com/Edgemodders/EDGEmat/issues) with the log lines and what you did.
