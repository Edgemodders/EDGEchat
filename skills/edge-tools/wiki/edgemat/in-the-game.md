<!-- Copied from EDGEweb's docs/wiki/edgemat/in-the-game.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/in-the-game.html (reviewed 2026-11-18) -->

# Your mod in the game

EDGEmat saves your changes into a mod project, a folder on your PC. The game doesn't read that folder. It sees your changes once the project is **packed** into one `.archive` file and that file is **installed** in the game folder. [REDcode](https://edgemodders.ai/wiki/redcode/) does both with one button. Then you put the garment on V and look.

| On this page | |
|---|---|
| [1. Pack and install](https://edgemodders.ai/wiki/edgemat/in-the-game.html#1-pack-and-install) | The simple way, with the game closed |
| [Keep the game running](https://edgemodders.ai/wiki/edgemat/in-the-game.html#keep-the-game-running) | Pack and Play and REDnode |
| [If REDmod packing is on](https://edgemodders.ai/wiki/edgemat/in-the-game.html#if-redmod-packing-is-on) | A REDcode setting, and projects shared with EDGEwave |
| [2. Put the item on V](https://edgemodders.ai/wiki/edgemat/in-the-game.html#2-put-the-item-on-v) | The command, and where EDGEmat shows it |
| [3. If you don't see your change](https://edgemodders.ai/wiki/edgemat/in-the-game.html#3-if-you-dont-see-your-change) | What to check |
| [Take the mod out again](https://edgemodders.ai/wiki/edgemat/in-the-game.html#take-the-mod-out-again), [Share it](https://edgemodders.ai/wiki/edgemat/in-the-game.html#share-it) | |

## 1. Pack and install

You need [REDcode](https://edgemodders.ai/wiki/redcode/install.html), with your project open in it.

1. Close the game.
2. In REDcode's **Project** view, press **Pack and Install**, the rocket in the view's title bar.
3. Press **Run Game**, the play triangle beside it, and load a save.

| What you should see | |
|---|---|
| After step 2 | The file `<your project>.archive` in the game's `archive\pc\mod` folder (the folder is `mod`, not `mods`) |
| After step 3 | The game starts as usual. Your change shows once V wears the garment: go to [step 2](https://edgemodders.ai/wiki/edgemat/in-the-game.html#2-put-the-item-on-v) |

If you use [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/), EDGE's mod manager, REDcode hands the mod to it, and it appears in EDGEdeck's list with the version `dev`. More about the buttons: REDcode's [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html).

### Keep the game running

After EDGEmat saves into a project, its message has a **Pack and Play** button. It is REDcode's **Pack and Play**, the flame button in REDcode's Project view, and it shows when REDcode has that project open. (Before EDGEmat 0.3.3 and REDcode 0.10.5 it was called Pack and Try.)

| The game is | Pack and Play |
|---|---|
| Closed, or running without REDnode | Packs and installs, like Pack and Install. Start or restart the game to see the change |
| Running with [REDnode](https://edgemodders.ai/wiki/rednode/), at a loaded save | Packs, then swaps the new archive into the running game. No restart |

To set up the swap once: install [REDnode](https://edgemodders.ai/wiki/rednode/install.html) in the game, press **F10**, open the launcher's **Settings** and switch on **MCP server**. Then install your mod the normal way once, with Pack and Install. The details are on REDcode's page: [Pack and Play](https://edgemodders.ai/wiki/redcode/pack-install.html#pack-and-play-into-the-running-game).

| After a swap, to see | Do |
|---|---|
| A garment V is wearing | Nothing: REDnode refreshes it |
| Another garment | Unequip it and equip it again |

Older versions of these pages described a "hot folder" and Red Hot Tools. REDcode no longer uses either, and you don't need Red Hot Tools.

### If REDmod packing is on

Skip this unless you turned on REDcode's `redcode.pack.redmod` setting. It is off by default, and a material mod doesn't need it.

With the setting on, the project packs as a REDmod, CD PROJEKT RED's own mod format, into the game's `mods` folder instead of `archive\pc\mod`. A REDmod loads only when the game is started for REDmods: use REDcode's **Run Game**, which does that. Started any other way, the game ignores it, and your recolor doesn't show. Whether Pack and Play can swap a REDmod into the running game has not been checked.

**A project shared with EDGEwave.** [EDGEwave](https://edgemodders.ai/wiki/edgewave/)'s REDmod sounds need this setting on. If one project holds both such sounds and EDGEmat's materials, leave it on: the materials travel in the same REDmod, and show when you start the game with Run Game. If you'd rather keep the setting off for your clothes, keep sounds and materials in two projects.

## 2. Put the item on V

To see your change, V has to wear the item you changed. The quickest way is the Console of [REDnode](https://edgemodders.ai/wiki/rednode/install.html) (0.49.5 or later), a window in the game where you type commands:

1. In the game, with a save loaded, press **F10**, click the **REDNODE** tab and switch on **Console**.
2. Type the command with your item's id and press Enter:

   ```js
   addItem("Items.Pants_01_basic_01")
   ```

3. Press **Esc**, open the inventory and equip the item.
4. Look at V from outside: photo mode, or a mirror. For a close look at fine bumps or grain in photo mode, turn **Depth of Field** off on its **Camera** tab: its blur hides small details.

| What you should see | |
|---|---|
| After step 2 | The Console answers `1 × Items.Pants_01_basic_01 added` |
| After step 4 | The garment with your change |

`Items.Pants_01_basic_01` is the item's **record id**, the game's internal name for it. Use the id of the item you edited, so you get that exact item. More about the Console: [REDnode's Console](https://edgemodders.ai/wiki/rednode/overlay.html#the-console).

**EDGEmat gives you the command.** Several items can share one look, and some looks are worn only by NPCs. So EDGEmat lists the items that wear the look you changed:

| Where | What you get |
|---|---|
| The setup editor, for a setup opened from [Find](https://edgemodders.ai/wiki/edgemat/find.html) or the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html) | An **In the game** section near the top, below the title. Unfold it with its ▸. It lists each item that wears the look, with its `addItem(...)` command, the body it fits, and a **Copy** button |
| A mesh row in Find, or a look on the Desk | Hover it: the tooltip lists the items that wear it. On the Desk, the look also reads **worn by 2 items**, or **no item** |
| Right-click an item, a mesh, a look or a material, in Find or on the Desk | **Copy REDnode Command** puts the command on the clipboard. With several items, it asks which |
| Find | The record id, in grey beside each item's name |

The first time, EDGEmat reads every clothing item to build this list. That takes about ten seconds, once per game version.

A look marked **no item** is worn only by NPCs, so V can't equip it. For your tests, pick a look that an item wears.

No REDnode? If you have Cyber Engine Tweaks, its console does the same with `Game.AddToInventory("Items.Pants_01_basic_01", 1)`.

## 3. If you don't see your change

| Check | Do this |
|---|---|
| Did the mod reach the game? | Look for `<your project>.archive` in the game's `archive\pc\mod` folder. If it isn't there, run **Pack and Install** with the game closed. If it is in `mods` instead, see [If REDmod packing is on](https://edgemodders.ai/wiki/edgemat/in-the-game.html#if-redmod-packing-is-on) |
| Did the game start after the install? | A mod installed while the game runs shows after a restart, unless REDnode swapped it in |
| Is V wearing the item you edited? | Many items look alike. Give V the item with the command EDGEmat shows, and equip that one |
| Does your V's body type have the change? | Many garments use one mesh for the feminine body and another for the masculine. A line added from the Desk changes one of them. Save for both: [Two ways into a project](https://edgemodders.ai/wiki/edgemat/find.html#two-ways-into-a-project) |
| Is it the right look? | Some meshes have several looks that each use their own material. Edit the look your item wears: Find shows it on the mesh row |
| How did you save? | **As a new setup** works with no helper mod. **In place of the game's setup** shows only with the Material Texture Override mod (on Nexus Mods) installed |
| Did you save the same setup both ways? | The game then shows the **new setup** version, because the project's meshes use that one. Edit the new setup, or delete it and its meshes from the project |
| Does another mod change the same garment? | When two mods hold the same file, one wins. Switch the other mod off to check |

More symptoms are in [Troubleshooting](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#in-the-game).

## Take the mod out again

To get the game's own colors back, in REDcode's Project view open the **`...`** menu and choose **Uninstall**, with the game closed. Only your mod's file comes out. Your project is untouched, and **Pack and Install** puts the mod back. See REDcode's [Uninstall](https://edgemodders.ai/wiki/redcode/pack-install.html#uninstall).

## Share it

The packed mod is the `.archive` file in your project's `packed` folder. A recolor saved **As a new setup** needs no other mod, so that one file is all someone else needs. How to zip it for others: REDcode's [Sharing your mod](https://edgemodders.ai/wiki/redcode/pack-install.html#sharing-your-mod).
