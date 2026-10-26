<!-- Copied from EDGEweb's docs/wiki/edgedeck/deploying.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/deploying.html (reviewed 2026-10-24) -->

# Deploying and undo

**Deploy** is the one EDGEdeck word worth learning. Turning mods on and off only changes your list, the active [loadout](https://edgemodders.ai/wiki/edgedeck/library.html#loadouts). Deploy makes the game folder match it.

## Turn on, then deploy

1. Tick the mods you want, untick the ones you don't.
2. The **Deploy** button counts the changes waiting, for example **Deploy (3 changes)**.
3. **Close the game**, then press **Deploy**. Progress shows in the status bar; a short message says how many files went in for how many mods, how many mods are in the game now, and how many conflicts there are.
4. **View** on that message opens a report of every file the deploy added, replaced or removed, mod by mod. The last 30 reports stay in the library's `deploys` folder.

### Close the game first

Cyberpunk 2077 keeps mod files open while it runs, and Windows won't let anything replace or delete an open file. So if the game is running when you press **Deploy** or **Undo deploy**, EDGEdeck says so and waits: quit the game, then press **The game is closed now**. The command line, and an assistant working through EDGEdeck, refuse with the same reason until the game is closed.

Rarely, another program holds a file in the game folder open. Then the deploy stops at that file, and the message names it. Close what has it open and deploy again: what the deploy already finished is kept, and the rest is still waiting.

### Deploy reports

Every deploy writes a report: each mod's files added, replaced or removed, with their paths in the game folder, and anything skipped. **View** on the deploy message opens it. To look back at an earlier one, open the `deploys` folder in your [library](https://edgemodders.ai/wiki/edgedeck/library.html); the newest 30 are kept. It's the quickest answer to "what did my last deploy change?".

(Screenshot on the wiki, "Deploy waiting": The Mods view with a few mods switched on, their status not deployed yet, and the Deploy button counting the changes waiting.)

## Check before you deploy

**Show pending changes** lists every file the next deploy will touch, and why:

| Reason | Meaning |
|---|---|
| Added | A mod you turned on puts this file in the game |
| Replaced | A mod higher in the list wins this file |
| Put back | A file EDGEdeck moved aside earlier comes back |
| Relinked | The library copy was rebuilt (for example a REDcode project packed again) |
| Removed | A mod you turned off or removed takes this file out |

On the EDGEdeck page, a mod's status links to the same list for that mod only.

(Screenshot on the wiki, "Pending changes": The pending-changes list before a deploy: each file with its reason (added, replaced, put back, removed) and the mod it belongs to.)

## What deploy does

1. **Places the files** of every mod that's on into the game folder.
    - If your library is on the **same drive** as the game, EDGEdeck uses **hardlinks**: the file appears in the game folder without taking any extra space, because it's the same file as the one in your library.
    - If the library is on **another drive**, EDGEdeck **copies** the files instead.
    - The EDGEdeck page's footer says which one it's using.
2. **Writes the archive load order** to `modlist.txt` in `archive/pc/mod`, from the order of your list. It rewrites the file whenever the archives that are on change, so an archive you add later is in the list too.
3. **Prepares REDmod packages** with the game's own `redMod.exe` when any REDmod mods are on. You don't have to run REDmod's deploy step yourself. REDmod mods need the game started with `-modded`; the deploy message reminds you, and **Run game** adds it for you (see [Start the game](https://edgemodders.ai/wiki/edgedeck/deploying.html#start-the-game)).
4. **Records everything** in a manifest in the game folder: every file it placed, and the game version.

## Start the game

**Run game**, the play button in the Mods view's title bar (also on the EDGEdeck page's toolbar), starts Cyberpunk 2077 with `-modded`, so REDmod mods load. If changes are waiting, it deploys them first, so the game gets what your list shows. A game in a Steam library starts through Steam; any other starts from `bin\x64\Cyberpunk2077.exe`. The setting `edgedeck.launch` can force one way (see [Settings and commands](https://edgemodders.ai/wiki/edgedeck/settings.html)). If the game is already running, it's left alone.

## Deploying one mod

REDcode's **Install** deploys only the project's own mod: its files go in, are refreshed or come out, and other mods' changes keep waiting for the next full Deploy. The message says how many are still waiting. The command line and assistants can do the same with `deploy --mod <id>` (see [Assistants and the command line](https://edgemodders.ai/wiki/edgedeck/assistants.html)).

## Changes made outside EDGEdeck

Other things touch the game folder too: a Steam **Verify integrity of game files**, a game update, a framework's own updater, or you editing a file by hand. EDGEdeck notices when a file it deployed has changed, and the mod shows `changed in game folder`.

At the next deploy it asks **one question per file**:

| Answer | What happens |
|---|---|
| **Keep the changed file** | The changed file is copied into your library, so it becomes the mod's version |
| **Put the mod's file back** | The game gets the mod's own file again |

If a deployed file has simply gone missing, deploy puts it back without asking.

### Files in the way

If a file that EDGEdeck needs to place is already in the game folder and isn't EDGEdeck's, deploy moves it into the library's `backup` folder first. **Undo deploy** puts it back.

## Undo deploy

**Undo deploy** removes every file in the manifest, and nothing else. Like Deploy, it waits until the game is closed. It then puts back any files deploy moved aside and removes folders it emptied. Your library isn't touched: turn the mods on again and deploy to bring them back.

Use it to:

- go back to a clean game, for example to check whether a problem comes from a mod;
- hand the game back to another mod manager;
- prepare to uninstall EDGEdeck.

> **EDGEdeck never deletes a file it didn't put there.** Everything it removes is in its manifest, and hardlinks are checked to be the very same file before they're removed.

## Living with Vortex

While Vortex has files deployed in the game folder, EDGEdeck refuses to deploy. Purge in Vortex first (**Mods**, **Purge**). After that, both can be installed side by side, as long as only one of them has deployed. See [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html).

## Load order, in short

- **Your list is the load order.** Higher wins.
- For **archives**, EDGEdeck writes `modlist.txt`, which tells the game which archives to load first. You don't need to rename archives with `#` or `00_` prefixes to control order.
- For **REDmod packages**, EDGEdeck passes the same order to `redMod.exe`.
- **Scripts, CET mods and plugins** have no load order: they all load together.

See [Conflicts](https://edgemodders.ai/wiki/edgedeck/conflicts.html) for choosing who wins.
