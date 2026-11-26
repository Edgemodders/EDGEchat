<!-- Copied from EDGEweb's docs/wiki/edgedeck/conflicts.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/conflicts.html (reviewed 2026-11-13) -->

# Conflicts and who wins

Two mods **conflict** when they both change the same thing. Only one version can reach the game, so one mod **wins** and the other **loses** that file.

Conflicts are information, not errors. Most are on purpose: a texture mod that changes a body mod's skin is meant to win over it. EDGEdeck shows them, says who wins, and never blocks a deploy because of them.

| On this page | |
|---|---|
| [Who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html#who-wins) | The one rule, with an example |
| [Changing who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html#changing-who-wins) | Let ... win, Move up, drag |
| [Two kinds of conflict](https://edgemodders.ai/wiki/edgedeck/conflicts.html#two-kinds-of-conflict) | By file, and inside archives |
| [The Conflicts page](https://edgemodders.ai/wiki/edgedeck/conflicts.html#the-conflicts-page) | Where you see and settle them |
| [Try it](https://edgemodders.ai/wiki/edgedeck/conflicts.html#try-it) | A conflict from start to finish |
| [Deciding who should win](https://edgemodders.ai/wiki/edgedeck/conflicts.html#deciding-who-should-win) | Rules of thumb |

## Who wins

**EDGEdeck keeps all your mods in one order, and the mod that comes earlier in that order wins.**

How to read the order from your list:

| The two mods are | Who wins |
|---|---|
| In the same group or section (both under **Mods**, say) | The one shown **higher** |
| In different sections | The list can't tell you. Sections only group mods for display; they don't rank them. Look at the [Conflicts page](https://edgemodders.ai/wiki/edgedeck/conflicts.html#the-conflicts-page), which always names the winner |

Two things follow from the rule:

- **A mod you just added goes to the end of the order.** It shows at the bottom of its group and loses to every mod already there, until you move it up.
- **A section near the top doesn't make its mods win.** A mod in your "Visuals" section can lose to a mod in the built-in Mods group below it, if that mod came first in the order.

**An example.** You have a body mod, and you add a skin texture made for it. Both contain the same skin file.

| Your list, under Mods | What reaches the game |
|---|---|
| 1. Body mod<br>2. Skin texture | The body mod's own skin. The texture mod was added later, so it is lower and loses |
| 1. Skin texture<br>2. Body mod | The skin texture, as intended. You moved it above the body mod, so it wins |

The mod that loses a file still provides all its other files. Only the files both mods contain are at stake.

## Changing who wins

| Action | What it does to the order |
|---|---|
| **Let ... win**, on the [Conflicts page](https://edgemodders.ai/wiki/edgedeck/conflicts.html#the-conflicts-page) | Puts that mod just above the other one in the order. Both stay in their sections. This always works, wherever the two mods are shown |
| **Move up**, **Move down** (hover a mod's row in the Mods view, or its Actions on the EDGEdeck page) | Moves the mod past its neighbour in its own section. Up makes it win against the mod shown above it |
| **Drag a row onto another row**, on the EDGEdeck page | Puts the mod directly above or below that mod in the order, and in that mod's section |
| Putting a mod in a [section](https://edgemodders.ai/wiki/edgedeck/mods-view.html#sections) | Doesn't change the order |

Then deploy. Until you deploy, the game still has the old winner's file.

The order is the same in every [loadout](https://edgemodders.ai/wiki/edgedeck/loadouts.html): changing who wins changes it for all of them.

## Two kinds of conflict

| Kind | Example | How EDGEdeck finds it |
|---|---|---|
| **By file path** | Two mods both contain `r6/scripts/HUD/hud.reds` | By comparing the mods' file lists. Always on |
| **Inside archives** | Two `.archive` files with different names both contain the same character mesh | Needs [REDbridge](https://edgemodders.ai/wiki/redbridge/), which reads inside archives |

An **archive** is a package: one `.archive` file holding many game files, such as meshes (3D shapes), textures and sounds. This page calls those packed files **resources**.

Conflicts inside archives are the ones most mod managers can't see. Two archive files with different names don't look like a conflict on disk, but in the game only one of them provides that mesh or texture. EDGEdeck opens the archives of every mod that's on, lists the resources inside, and compares them. If you don't have REDbridge, press **Get REDbridge** in the Set up group or the **`...`** menu.

## The Conflicts page

The message after a deploy says how many conflicts there are. **Show conflicts**, on that message or in the Mods view's **`...`** menu, opens a page with every one.

(Screenshot on the wiki, "The Conflicts page": The Conflicts page with the file-path table above and the inside-archives table below: one row per pair of mods naming the winner and the loser, with its shared files folded inside and the Choose menu open on one row.)

- The **upper table** lists conflicts by file path.
- The **lower table** lists conflicts inside archives. Its heading names the REDbridge in use.
- Each row is one pair of mods and says which one wins. Click the row to unfold the files or resources they both change.
- Each row has one **Choose...** menu. A choice settles every file of that pair:

| Choice | What it does |
|---|---|
| **Let ... win** | Moves the losing mod just above the other in the order |
| **Turn off ...** | Switches one of the two off |
| **Use only ...** | Offered when the pair is two versions of the same mod: keeps one version on |

After a choice, a line above the tables says what it did, for example "Skin texture now wins over Body mod, for every file they share. Deploy to make it real." **Deploy now** applies what you decided.

### Conflicts on a single mod

A mod's detail panel (click its name) shows the same conflicts for that mod only. Its status in the list says, for example, `loses 3 archive files` or `overrides 2 archive files`.

## Try it

You need two mods that change the same thing. A mod and a recolor or retexture made for it are the usual pair.

1. Add both mods and deploy. The deploy message ends with something like "1 conflict, resolved by order." Press **Show conflicts**.
2. Find the row with your two mods. It names the winner: the one you added first.
3. If the other one should win, open the row's **Choose...** menu and pick **Let ... win**.
4. Press **Deploy now**.
5. Start the game with **Run game** and look at the item both mods change.

| What you should see | |
|---|---|
| On the Conflicts page | The same row, with winner and loser swapped |
| In the Mods view | The mod you chose has moved above the other |
| In the game | The winner's version of the item |

## Deciding who should win

| Situation | Usually |
|---|---|
| A texture, colour or appearance mod over a base mod it's made for | The add-on wins: put it **higher** than the base mod |
| Two mods that do the same job (two HUD overhauls) | Pick one and turn the other off |
| A fix or patch made for another mod | The patch wins |
| A framework conflicting with anything | Something is wrong. Check both pages on Nexus for compatibility notes |

When unsure, read both mods' Nexus pages: authors usually say what their mod should load before or after.
