---
title: "Lesson 4: Change it while you play"
---

# Lesson 4: <span class="y">Change it while you play</span>

Restarting the game for every change is slow. REDnode can swap a freshly packed mod into the running game, so you see a change in seconds. Afterwards you bring EDGEdeck back in step, so it keeps managing the mod.

[&larr; Lesson 3](guide-recolor.html) · [Guide](guide.html)

## Before you start

- Lesson 3 done: the red badge coat deployed by EDGEdeck and showing in the game.
- REDnode **0.41.0 or newer**. It comes with **REDswap**, the part that does the swap on game 2.5.
- The game running at a loaded save, V wearing the coat.

## Step 1: Change it and swap it in

> Recolor the jacket in red_badge_coat to bright green, pack it and swap it into the running game.

Claude changes the project's material setup, packs the project again, then calls REDnode's `archives_reload` with the new archive. **Claude Code asks before the swap**, every time: it replaces a file in the game folder while the game runs. Allow it.

The jacket turns green at once, without a restart. Claude reports what the swap did:

| In the answer | Means |
|---|---|
| `via: "redswap"` | REDswap did the swap |
| The archive under `reloaded` | It was swapped in |
| `failed` empty | Nothing went wrong |
| V's clothes applied again | REDnode put V's outfit on again, so it shows the new version; the inventory preview too |

In testing this took 88 milliseconds. A swap works for a mod in `archive\pc\mod` and for a REDmod in `mods\` alike.

**Things already in the world keep the old version** until the game loads them again. V's clothes are refreshed for you; an NPC wearing the same coat keeps red until they appear again.

Try a few more rounds: "make it darker", "make the trim gold". Each one is pack and swap, seconds each.

## Step 2: Why EDGEdeck is now out of step

EDGEdeck put the red version in the game, linked to the copy in its library. The swap replaced that file in the game folder with the green one. So now:

| Where | Has |
|---|---|
| Your project's `packed` folder | Green |
| The game folder | Green, from the swap |
| EDGEdeck's library | Still red, and no longer linked to the game's file |

EDGEdeck notices this. **Close the game**, then ask:

> What would an EDGEdeck deploy change now?

It lists one file, your mod's archive, **changed in the game folder**, and says the deploy will ask what to do with it. It won't overwrite or clean up the file until you choose.

## Step 3: Bring EDGEdeck back in step

> Put the new build in the library and restore that file.

Claude does it in two steps:

1. `edgedeck_install_project`: the library gets the green build from your project.
2. A deploy with **restore** for that file: the game's copy is replaced by the library's, the same green build, and linked again. Claude Code asks first.

Ask "What would a deploy change now?" again: nothing for your mod. Start the game: the coat is still green, and EDGEdeck manages it as before.

The two choices, so you know what they mean when Claude asks:

| Choice | Does | Use when |
|---|---|---|
| **restore** | Puts the library's copy back in the game | The library has the version you want, as after step 3's install |
| **keep** | Takes the game folder's file into the library, as it is | You want to keep exactly what's in the game, and have no project build of it |

Claude doesn't pick one for you without saying what each does.

## Don't delete swapped files by hand

If you swap in a mod EDGEdeck never deployed, REDnode adds its archive to `archive\pc\mod`, where EDGEdeck doesn't know about it. Don't delete it by hand, and don't leave it there: install the project into EDGEdeck and deploy (lesson 3, step 5), so EDGEdeck manages it.

## The loop, from now on

| While | Do |
|---|---|
| The game runs | Change, pack, swap. Look. Repeat |
| You're done for the day | Close the game. Install the project's last build into EDGEdeck and deploy with restore |

## Check

- [ ] The jacket turned green without a restart, and Claude Code asked before the swap
- [ ] After closing the game, EDGEdeck showed the file as changed in the game folder
- [ ] After install and restore, nothing was left to deploy, and the coat stayed green after a restart

[&larr; Lesson 3](guide-recolor.html) · [Guide](guide.html) · [Next: When a mod doesn't work &rarr;](guide-check.html)
