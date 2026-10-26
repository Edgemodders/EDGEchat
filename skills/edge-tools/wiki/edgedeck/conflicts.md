<!-- Copied from EDGEweb's docs/wiki/edgedeck/conflicts.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/conflicts.html (reviewed 2026-10-24) -->

# Conflicts

Two mods **conflict** when they both change the same thing. Only one version can reach the game, so one mod **wins** and the other **loses** that file.

Conflicts are information, not errors. Most are on purpose: a texture mod that changes a body mod's skin is meant to win over it. EDGEdeck shows them, explains who wins, and never blocks a deploy because of them.

## Who wins

**The mod earlier in EDGEdeck's order wins:** higher in the list, within a section. To change the winner, choose **Let ... win** on the Conflicts page, or move a mod up or down with the arrow buttons on its row.

The order is one list for all your mods, whatever [section](https://edgemodders.ai/wiki/edgedeck/mods-view.html#sections) they're shown in. A section near the top of the page doesn't make its mods win over mods in a lower section. **Let ... win** always works, wherever the two mods are shown. See [Order: who wins](https://edgemodders.ai/wiki/edgedeck/mods-view.html#order-who-wins).

## Two kinds of conflict

| Kind | Example | How EDGEdeck finds it |
|---|---|---|
| **By file path** | Two mods both ship `r6/scripts/HUD/hud.reds` | From the library alone. Always on |
| **Inside archives** | Two `.archive` files with different names both contain the same character mesh | Needs [REDbridge](https://edgemodders.ai/wiki/redbridge/), which reads inside archives |

Conflicts inside archives are the ones most mod managers can't see. Two archive files with different names don't look like a conflict on disk, but in the game only one of them provides that mesh or texture. EDGEdeck opens every archive that's on, lists the resources inside, and compares them. If you don't have REDbridge, click **Get REDbridge** in the Set up group or the `...` menu.

## The Conflicts page

The deploy message says how many conflicts there are. **Show conflicts** opens a page with every one.

(Screenshot on the wiki, "The Conflicts page": The Conflicts page with the file-path table above and the inside-archives table below: one row per pair of mods naming the winner and the loser, with its shared files folded inside and the Choose menu open on one row.)

- The **upper table** lists conflicts by file path.
- The **lower table** lists conflicts inside archives. Its heading names the REDbridge in use.
- Each row is one pair of mods, with the files or resources they share folded inside, the winner and the loser.
- Each row has one **Choose** menu, and a choice settles every file of that pair:
  - **Let ... win** moves that mod just above the other.
  - **Turn off ...** switches one of the two off.
  - **Use only ...** keeps one version, when the pair is two versions of the same mod.
- A line above the table says what your last choice did.
- **Deploy now** applies what you decided. Until you deploy, the choices only change your list.

## Conflicts on a single mod

A mod's detail panel shows the same conflicts for that mod only. Its status line says, for example, `loses 3 archive files` or `overrides 2 archive files`.

## Deciding who should win

| Situation | Usually |
|---|---|
| A texture, colour or appearance mod over a base mod it's made for | The add-on wins: put it **higher** in the list than the base mod |
| Two mods that do the same job (two HUD overhauls) | Pick one and turn the other off |
| A fix or patch made for another mod | The patch wins |
| A framework conflicting with anything | Something is wrong. Check the mod pages on Nexus for compatibility notes |

When unsure, read both mods' Nexus pages: authors usually say what their mod should load before or after.
