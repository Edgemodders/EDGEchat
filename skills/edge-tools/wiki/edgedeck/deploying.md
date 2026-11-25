<!-- Copied from EDGEweb's docs/wiki/edgedeck/deploying.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/deploying.html (reviewed 2026-11-23) -->

# Deploying and undo

**Deploy** is the one EDGEdeck word worth learning. Ticking and unticking mods only changes your list. Deploy makes the game folder match the list: it puts in the files of the mods that are on, and takes out the files of the mods that are off.

| On this page | |
|---|---|
| [Turn on, then deploy](https://edgemodders.ai/wiki/edgedeck/deploying.html#turn-on-then-deploy) | The routine, and why the game must be closed |
| [Check before you deploy](https://edgemodders.ai/wiki/edgedeck/deploying.html#check-before-you-deploy) | See every file a deploy will touch |
| [Start the game](https://edgemodders.ai/wiki/edgedeck/deploying.html#start-the-game) | Run game |
| [Deploying one mod](https://edgemodders.ai/wiki/edgedeck/deploying.html#deploying-one-mod) | Without the rest of your waiting changes |
| [Undo deploy](https://edgemodders.ai/wiki/edgedeck/deploying.html#undo-deploy) | Take everything out again |
| [Changes made outside EDGEdeck](https://edgemodders.ai/wiki/edgedeck/deploying.html#changes-made-outside-edgedeck) | Steam verify, game updates, [mods you installed by hand](https://edgemodders.ai/wiki/edgedeck/deploying.html#mods-you-installed-by-hand) |
| [What deploy does](https://edgemodders.ai/wiki/edgedeck/deploying.html#what-deploy-does) | Hardlinks, load order, REDmod, the manifest |

## Turn on, then deploy

1. Tick the mods you want, untick the ones you don't. The status bar at the bottom of the window counts what is waiting, for example `12 of 14 mods on · Deploy (3 changes)`.
2. **Close the game.**
3. Press **Deploy**: in the Mods view's title bar, on the EDGEdeck page's toolbar, or by clicking the status bar.

**What you should see:** a short message such as "Deployed: 3 files for 1 mod. 12 mods in the game now." It also says how many conflicts there are, if any. Each mod's status changes to `deployed`, and the status bar ends in `deployed`.

**View** on that message opens a report of every file the deploy added, replaced or removed, mod by mod.

(Screenshot on the wiki, "Deploy waiting": The Mods view with a few mods switched on, their status not deployed yet, and the Deploy button counting the changes waiting.)

### Close the game first

Cyberpunk 2077 keeps mod files open while it runs, and Windows won't let anything replace or delete an open file. So if the game is running when you press **Deploy** or **Undo deploy**, EDGEdeck says "Cyberpunk 2077 is running" and waits. Quit the game, then press **The game is closed now**.

Rarely, another program holds a file in the game folder open. Then the deploy stops at that file, and the message names it. Close what has it open and deploy again: what the deploy already finished is kept, and the rest is still waiting.

### Deploy reports

Every deploy writes a report: each mod's files added, replaced or removed, with their paths in the game folder. **View** on the deploy message opens it. To look back at an earlier one, open the `deploys` folder in your [library](https://edgemodders.ai/wiki/edgedeck/library.html); the newest 30 are kept. It's the quickest answer to "what did my last deploy change?".

## Check before you deploy

**Show pending changes**, in the Mods view's **`...`** menu, lists every file the next deploy will touch, and why:

| Reason | Meaning |
|---|---|
| Added | A mod you turned on puts this file in the game |
| Replaced | A different mod's version of this file takes its place, because that mod is now higher in [the order](https://edgemodders.ai/wiki/edgedeck/conflicts.html#who-wins) |
| Put back | A file EDGEdeck moved aside earlier comes back |
| Relinked | The mod's file changed in your library (for example after you packed your own project again), so the game's copy is refreshed |
| Removed | A mod you turned off or removed takes this file out |

On the EDGEdeck page, click a mod's status to see the same list for that mod only.

(Screenshot on the wiki, "Pending changes": The pending-changes list before a deploy: each file with its reason (added, replaced, put back, removed) and the mod it belongs to.)

## Start the game

**Run game**, the play button in the Mods view's title bar (also on the EDGEdeck page's toolbar), starts Cyberpunk 2077.

- If changes are waiting, it deploys them first, so the game gets what your list shows.
- It adds `-modded`, a launch option that tells the game to load mods in CD PROJEKT RED's REDmod format. Most mods aren't REDmod mods and load without it. If you start the game another way and use REDmod mods, add `-modded` to the game's launch options yourself.
- A game from Steam starts through Steam. Any other starts from `bin\x64\Cyberpunk2077.exe`. The setting `edgedeck.launch` can force one way: see [Settings](https://edgemodders.ai/wiki/edgedeck/settings.html#settings).
- If the game is already running, it's left alone.

## Deploying one mod

Sometimes you want one mod in or out of the game now, without the rest of your waiting changes. On the EDGEdeck page, the first button in each mod's Actions column does that. It shows what fits the mod:

| The mod | Button | What it does |
|---|---|---|
| On, with changes waiting | **Deploy** (yellow) | Puts only its changes in the game |
| Off, not in the game | **Deploy** | Turns it on and puts it in the game |
| On and in the game, nothing waiting | **Undeploy** | Turns it off and takes only its files out |
| Off, its files still in the game | **Undeploy** | Takes only its files out |

Good to know:

- Every other mod's changes keep waiting for the next full Deploy. The message says how many.
- Deploying or undeploying one mod also ticks or unticks it in your list, so a later full Deploy doesn't reverse what you did.
- Like a full Deploy, it waits until the game is closed, and it asks about files changed in the game folder.
- If another mod wins some of this mod's files, the message says so and offers **Let ... win**. See [Conflicts and who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html).
- The mod's detail panel has the same button. In the Mods view, right-click a mod for **Deploy this mod** and **Undeploy**, or hover its row for the **Deploy this mod** button, the first one.
- While the EDGEdeck page shows a [loadout](https://edgemodders.ai/wiki/edgedeck/loadouts.html) that isn't the active one, the button isn't there: the game always follows the active loadout.

(Screenshot on the wiki, "Deploy one mod": A row on the EDGEdeck page with its yellow Deploy button first in the Actions column, and the message after pressing it saying the mod went in and how many other changes still wait.)

REDcode's **Install** does the same for a project's own mod. See [EDGEdeck and REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html).

## Undo deploy

**Undo deploy**, in the Mods view's **`...`** menu and on the EDGEdeck page's toolbar, takes out every file EDGEdeck put in the game, and nothing else. It asks first, saying how many files it will remove. Like Deploy, it waits until the game is closed. It then puts back any files deploy moved aside, and removes folders it emptied.

Your library and your list aren't touched: press **Deploy** to put everything back.

Use it to:

- go back to a clean game, for example to check whether a problem comes from a mod;
- hand the game back to another mod manager;
- prepare to uninstall EDGEdeck.

> **EDGEdeck never deletes a file it didn't put there.** Everything it removes is on its own list of what it deployed, and each file is checked to be the one it placed before it is removed.

**Your saves are safe.** Deploy and Undo deploy only change mod files inside the game folder. They never touch save games. Keep in mind what any mod manager will tell you: a save made with a mod may miss that mod's items, or misbehave, once the mod is gone.

## Changes made outside EDGEdeck

Other things touch the game folder too: Steam's **Verify integrity of game files**, a game update, a framework's own updater, or you editing a file by hand. EDGEdeck notices when a file it deployed has changed, and the mod shows `changed in game folder`.

At the next deploy it asks **one question per file**. When several files changed, each question also has **Keep all** and **Put all back**, which answer that file and every one after it at once:

| Answer | What happens |
|---|---|
| **Keep the changed file** | The changed file is copied into your library, so it becomes the mod's version |
| **Put the mod's file back** | The game gets the mod's own file again |

Two cases need no question. If a deployed file has gone missing, deploy puts it back. If a file was replaced by an identical copy, EDGEdeck quietly puts its own file back.

### Files in the way

If a file that EDGEdeck needs to place is already in the game folder and isn't EDGEdeck's, deploy moves it into the library's `backup` folder first. **Undo deploy** puts it back.

### Mods you installed by hand

Mods you dropped into the game folder yourself, before EDGEdeck or beside it, stay where they are. EDGEdeck doesn't list them, doesn't change them and doesn't remove them: its list shows only the mods in its library.

To have EDGEdeck manage such a mod, add its original download with **Add mod** and deploy. Where the mod's files are already in the game, deploy moves your hand-placed copies into the `backup` folder and puts its own in their place, as described under [Files in the way](https://edgemodders.ai/wiki/edgedeck/deploying.html#files-in-the-way).

Until you do, a hand-installed mod can't appear on the [Conflicts](https://edgemodders.ai/wiki/edgedeck/conflicts.html) page, so EDGEdeck can't tell you when it clashes with a mod in your list.

## What deploy does

For the curious. You don't need this to use EDGEdeck.

1. **It places the files** of every mod that's on into the game folder.
    - If your library is on the **same drive** as the game, EDGEdeck uses **hardlinks**. A hardlink makes one file appear in two folders at once: the file shows up in the game folder without taking any extra space, because it is the very file in your library.
    - If the library is on **another drive**, EDGEdeck **copies** the files instead, and each mod takes up space twice. **Move library...** puts the library on the game's drive. See [Moving the library](https://edgemodders.ai/wiki/edgedeck/library.html#moving-the-library).
    - The EDGEdeck page's footer says which one it's using.
2. **It writes the archive load order** to `modlist.txt` in `archive/pc/mod`. That is a list the game reads to decide which archive's files load first, and EDGEdeck fills it from [the order](https://edgemodders.ai/wiki/edgedeck/conflicts.html#who-wins) of your mods. EDGEdeck rewrites it whenever your switched-on archive mods change, so new mods are always included. You don't need to rename archives with `#` or `00_` prefixes.
3. **It prepares REDmod mods** with the game's own `redMod.exe` when any are on, in the same order. You don't have to run REDmod's deploy step yourself. Most players can ignore REDmod unless a mod's page mentions it.
4. **It records everything** in a **manifest**: a file in the game folder, `edgedeck.deployment.json`, that lists every file EDGEdeck placed and the game's version. Undo deploy works from this list.

Scripts, CET mods and plugins have no load order: they all load together.

## Living with Vortex

Only one mod manager can have mods deployed in the game folder at a time. While Vortex does, EDGEdeck refuses to deploy. See [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html).
