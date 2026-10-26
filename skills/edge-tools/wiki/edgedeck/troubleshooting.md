<!-- Copied from EDGEweb's docs/wiki/edgedeck/troubleshooting.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/troubleshooting.html (reviewed 2026-10-24) -->

# Troubleshooting EDGEdeck

## Start with the log

**Show log** in the Mods view's `...` menu, or **View**, **Output**, then **EDGEdeck** in the dropdown. The first lines say where the library and the game are and how the game was found. When you ask for help, include them.

## Problems and fixes

### "Game not found" in the status bar

EDGEdeck couldn't find Cyberpunk 2077 in your Steam libraries, GOG or Epic.

1. Click the status bar, or the **Find the game folder** row in the Set up group.
2. Pick the folder that contains `bin`, `archive` and `r6`.

If the game *is* in one of the Steam libraries the log lists, please [report it](https://github.com/Edgemodders/EDGEdeck/issues) with those log lines.

### "Cyberpunk 2077 is running"

Deploy and Undo deploy wait while the game runs, because the game keeps mod files open and Windows won't let EDGEdeck change them. Quit the game, then press **The game is closed now**. See [Deploying and undo](https://edgemodders.ai/wiki/edgedeck/deploying.html#close-the-game-first).

### A deploy stopped: a file "is in use"

Another program has a file in the game folder open, and the message names it. Close that program (or the game, if it's still shutting down) and deploy again. What the deploy finished before it stopped is kept; the rest is still waiting, and the Deploy button counts it.

### "Vortex manages the game"

Vortex has mods deployed in the game folder, and two managers can't deploy into one folder. Purge in Vortex (**Mods**, **Purge**), then deploy in EDGEdeck. See [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html).

### No conflicts inside archives

Those need REDbridge. Look at the EDGEdeck page's footer:

- A **green dot** and a REDbridge version: it's running. If you still see no archive conflicts, you may simply have none.
- A **Get REDbridge** button: click it. REDbridge also needs the .NET 10 runtime, which Get REDbridge installs for your user account.

### A mod says "changed in game folder" or "changed, deploy again"

Something outside EDGEdeck changed or replaced its files, usually a Steam **Verify integrity of game files** or a game update. Deploy. EDGEdeck asks about each changed file whether to keep the change or put the mod's file back. See [Deploying and undo](https://edgemodders.ai/wiki/edgedeck/deploying.html#changes-made-outside-edgedeck).

### "Premium only" when updating

Nexus gives direct downloads to Premium members only. EDGEdeck opens the file's Nexus page instead; press **Mod manager download** there and the file arrives through the download link. See [Nexus Mods](https://edgemodders.ai/wiki/edgedeck/nexus.html#premium-and-free-accounts).

### Mod manager download on Nexus opens Vortex, not EDGEdeck

Vortex takes the download links back every time it starts. Use **Nexus: handle download links (nxm)**, or the row that reappears in the Set up group.

### What did my last deploy change?

Every deploy writes a report: each mod's files added, replaced or removed, with their paths in the game folder. **View** on the deploy message opens it. Earlier reports, the newest 30, are in the `deploys` folder of your library (**Open library folder** in the Mods view's `...` menu). For what the *next* deploy will do, use **Show pending changes**. See [Deploying and undo](https://edgemodders.ai/wiki/edgedeck/deploying.html#deploy-reports).

### An archive mod is on but doesn't load

Check that it says `deployed`. Archives load in the order of `modlist.txt`, which EDGEdeck rewrites whenever the archives that are on change. If your library is from before EDGEdeck 0.26.1, the file may be out of date: it shows as one change waiting, and the next deploy fixes it. If it's deployed and still loses, look for a [conflict](https://edgemodders.ai/wiki/edgedeck/conflicts.html) inside archives.

### Deploy copies files instead of using hardlinks

Your library is on a different drive from the game. Hardlinks only work on the same drive. Put the library on the game's drive: set `edgedeck.libraryPath` to a folder there (the next version's **Move library...** does it for you). See [Library, disk space and loadouts](https://edgemodders.ai/wiki/edgedeck/library.html#moving-the-library).

### REDmod mods are deployed but don't load

REDmod mods load only when the game starts with `-modded`. Start it with **Run game** in EDGEdeck, which adds it, or add `-modded` to the game's launch options in Steam, GOG or Epic.

### The game won't start after a game update

A framework probably needs updating for the new game version. Check the Frameworks group's header and update what it names. See [Frameworks and game patches](https://edgemodders.ai/wiki/edgedeck/frameworks.html#after-a-game-update).

### The game won't start, or crashes, after adding mods

1. Press **Undo deploy** and start the game. If it works, a mod is the cause.
2. Keep your full setup safe: **Save as new loadout...** under a name like "testing", then **Switch loadout...** to it. Your changes from now on go into "testing", and your usual loadout stays as it was.
3. Turn half your mods off and deploy. Start the game. Keep halving until you find the mod. Leave the frameworks on: other mods need them.
4. Check that mod's Nexus page for its requirements: a framework it needs may be missing or out of date.
5. When you're done, **Switch loadout...** back to your usual loadout and deploy. See [Loadouts](https://edgemodders.ai/wiki/edgedeck/library.html#loadouts).

### Something else

Ask on [Discord](https://discord.gg/63qP3Erw43) with your log's first lines, or [open an issue](https://github.com/Edgemodders/EDGEdeck/issues) on EDGEdeck's repo.
