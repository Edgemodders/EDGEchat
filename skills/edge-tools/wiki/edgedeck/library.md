<!-- Copied from EDGEweb's docs/wiki/edgedeck/library.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/library.html (reviewed 2026-11-13) -->

# Library and disk space

| On this page | |
|---|---|
| [The library](https://edgemodders.ai/wiki/edgedeck/library.html#the-library) | The folder that holds your mods |
| [Moving the library](https://edgemodders.ai/wiki/edgedeck/library.html#moving-the-library) | To the game's drive, to save space |
| [Disk space](https://edgemodders.ai/wiki/edgedeck/library.html#disk-space) | What uses it, and what is safe to delete |

Looking for loadouts? They have [their own page](https://edgemodders.ai/wiki/edgedeck/loadouts.html).

## The library

The **library** is the folder where EDGEdeck keeps your mods, outside the game. By default it is `%USERPROFILE%\EDGEdeck` (for most people, `C:\Users\<your name>\EDGEdeck`). **Open library folder** in the Mods view's **`...`** menu opens it.

Every mod in your list, on or off, is a copy kept in this folder. A mod that isn't in the list isn't in the library. The Mods view's top line counts them, for example `Library: 38 mods · Loadout: Default`. On the EDGEdeck page, **Library** at the right of the loadout row shows the count of mods and versions; click it to open the folder.

You never need to open these, but it's safe to look:

| Folder or file | Contents |
|---|---|
| `library/<mod>/` | One folder per mod version, laid out exactly as it goes into the game, with a `mod.json` beside the files: name, version, kinds, where it came from, Nexus data |
| `library.json` | The order of your mods (first wins), your sections, the active loadout and the game folder |
| `downloads/` | The original downloads, kept so a mod can be added again. Safe to delete |
| `backup/` | Files a deploy moved out of the way. **Undo deploy** puts them back |
| `loadouts/` | Your [loadouts](https://edgemodders.ai/wiki/edgedeck/loadouts.html) |
| `deploys/` | A report of each of the last 30 deploys: every file added, replaced or removed |

The game folder also gets one file from EDGEdeck, `edgedeck.deployment.json`: the list of what it deployed, which **Undo deploy** reads.

Because the library is plain folders and text files, you can look inside it with File Explorer, back it up by copying it, and an AI assistant can read it to answer questions about your mods.

## Moving the library

Keep the library on the **same drive as the game**. Then EDGEdeck can use **hardlinks**: a mod's file appears in the game folder without taking any extra space, because it is the same file as the one in the library. On different drives, EDGEdeck has to copy, and every mod you switch on takes up space twice.

**Move library...** moves it for you. It's in the Mods view's **`...`** menu, among the Set up steps as **Move the library to the game's drive** when the two are on different drives, and on the EDGEdeck page's footer while deploy is copying.

1. Close the game. Move library won't start while it runs.
2. Choose **Move library...** and pick the new folder.
3. Wait. On the same drive this is instant. To another drive, EDGEdeck copies everything, checks each file, then removes the old folder.
4. Press **Deploy** once. EDGEdeck redoes each file in the game to match the new place: hardlinks when the library is now on the game's drive, copies when it is not.

**What you should see:** the EDGEdeck page's footer names the new folder, and says "same drive as the game: hardlinks".

| Good to know | |
|---|---|
| **The setting follows** | EDGEdeck sets `edgedeck.libraryPath` to the new folder for you |
| **A folder that already holds an EDGEdeck library** | EDGEdeck asks whether to use that library instead. If you agree, it switches to it. Nothing is moved, and your current library stays where it is |

> **Don't just edit `edgedeck.libraryPath`.** Changing the setting by hand only points EDGEdeck at another folder; your mods stay where they were. Use **Move library...**.

## Disk space

EDGEdeck shows sizes everywhere: next to every mod, folder and file in the Mods view, in the EDGEdeck page's **Size** column, and in the page's footer, for example `Disk: 160 MB in mods, 1.9 MB in kept downloads`.

| What | Uses space? | Safe to delete? |
|---|---|---|
| **Mods** in the library | Yes, once | Remove mods you no longer want |
| **Deployed files** in the game | No extra space with hardlinks (library on the game's drive). A second copy otherwise | Use **Undo deploy**, never delete them by hand |
| **Kept downloads** | Yes | Yes. The footer link opens the folder |
| **Deploy backups** | Yes, usually little | Only if you'll never need **Undo deploy** to restore them |
| **Old versions** of mods | Yes | Switch to the version you want, then remove the others. See [Versions](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#versions) |

**Largest first** on the EDGEdeck page lists every mod by size, which is the quickest way to find what's using the most space.
