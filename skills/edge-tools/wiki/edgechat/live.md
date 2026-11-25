<!-- Copied from EDGEweb's docs/wiki/edgechat/live.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgechat/live.html (reviewed 2026-11-13) -->

# Change it while you play

Restarting the game for every change is slow. REDnode can swap a freshly packed mod into the running game, so you see a change in seconds. Afterwards you bring EDGEdeck back in step, so it keeps managing the mod. Allow 10 minutes.

The part of REDnode that does the swap is called [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html). It is a different thing from **Hot reload** in [Your first mod](https://edgemodders.ai/wiki/edgechat/first-mod.html): Hot reload reloads REDnode packages, and REDswap swaps packed game files, such as your coat's `.archive`.

## Before you start

- [Recolor a jacket](https://edgemodders.ai/wiki/edgechat/recolor.html) done: the red badge coat deployed by EDGEdeck and showing in the game.
- REDnode 0.41.0 or later, which includes REDswap.
- The game running at a loaded save, with V wearing the coat.

## Step 1: Change it and swap it in

> Recolor the jacket in red_badge_coat to bright green, pack it and swap it into the running game.

Claude changes the project's material, packs the project again, and asks REDnode to swap the new archive into the game. **Claude Code asks before the swap**, every time, because the swap replaces a file in the game folder while the game runs. Allow it.

| You should see | |
|---|---|
| The jacket turns green at once, with no restart | In testing the swap took 88 milliseconds |
| The inventory preview is green too | REDnode puts V's clothes on again, so they show the new version |
| Claude's report | That REDswap did the swap, and that nothing failed |

(Screenshot on the wiki, "Green after a swap": V in the running game wearing the badge coat, now bright green, seconds after Claude swapped the new build in, with Claude Code's report of the swap beside it.)

**Things already in the world keep the old version** until the game loads them again. V's clothes are refreshed for you. An NPC wearing the same coat stays red until they appear again.

Try a few more rounds, such as "make it darker" or "make the trim gold". Each is a pack and a swap, and takes seconds.

## Step 2: Why EDGEdeck is now out of step

When EDGEdeck deployed the red version, it didn't copy the file into the game folder. It linked it: the file in the game folder and the file in EDGEdeck's library were one and the same file. The swap put a different file, the green one, in the game folder. That broke the link. So now:

| Where | Has |
|---|---|
| Your project's `packed` folder | Green |
| The game folder | Green, from the swap |
| EDGEdeck's library | Still red, and no longer linked to the game's file |

EDGEdeck notices. **Close the game**, then ask:

> What would an EDGEdeck deploy change now?

Claude lists one file, your mod's archive, as **changed in the game folder**, and says the deploy will ask what to do with it. EDGEdeck won't overwrite or clean up that file until you choose. See [Changes made outside EDGEdeck](https://edgemodders.ai/wiki/edgedeck/deploying.html#changes-made-outside-edgedeck).

(Screenshot on the wiki, "Changed in the game folder": Claude Code listing what an EDGEdeck deploy would change after a swap: one archive marked changed in the game folder, with the keep and restore choices explained.)

## Step 3: Bring EDGEdeck back in step

There are two ways to settle a file that changed in the game folder:

| Choice | Does | Use when |
|---|---|---|
| **restore** | Puts the library's copy back in the game | The library has the version you want. That is the case here, once the green build is installed into the library |
| **keep** | Takes the game folder's file into the library, as it is | You want exactly what's in the game, and have no project build of it |

Here you want restore, after giving the library the green build. Ask:

> Put the new build in the library and restore that file.

Claude does it in two steps:

1. It installs the project into EDGEdeck again, so the library gets the green build.
2. It deploys with **restore** for that file. The game's copy is replaced by the library's, which is the same green build, and the two are linked again. Claude Code asks before the deploy.

If you ask less exactly, Claude explains both choices and lets you pick. It doesn't pick one for you.

| You should see | |
|---|---|
| Nothing to deploy for your mod | Ask "What would a deploy change now?" again |
| The coat still green | Start the game and load a save |

## Don't delete swapped files by hand

You can also swap in a mod that EDGEdeck never deployed. REDnode then adds its archive to the game's `archive\pc\mod` folder, and EDGEdeck doesn't know the file.

Leave the file where it is, and tell EDGEdeck about the mod: install the project into EDGEdeck and deploy, as in [Recolor a jacket, step 5](https://edgemodders.ai/wiki/edgechat/recolor.html#step-5-put-it-in-the-game-with-edgedeck). EDGEdeck moves a file it finds [in the way](https://edgemodders.ai/wiki/edgedeck/deploying.html#files-in-the-way) into its library's backup folder, puts its own linked copy in place, and manages the mod from then on.

## The loop, from now on

| While | Do |
|---|---|
| The game runs | Change, pack, swap. Look. Repeat |
| You're done for the day | Close the game. Install the project's last build into EDGEdeck, and deploy with restore |

A swap works the same for a mod in `archive\pc\mod` and for a REDmod in the game's `mods` folder.

## Check

- The jacket turned green without a restart, and Claude Code asked before the swap.
- After closing the game, EDGEdeck showed the file as changed in the game folder.
- After install and restore, nothing was left to deploy, and the coat stayed green after a restart.

Next: [When a mod doesn't work](https://edgemodders.ai/wiki/edgechat/check-mod.html). EDGEchat's [lesson 4](https://edgemodders.github.io/EDGEchat/guide-live.html) covers the same steps.
