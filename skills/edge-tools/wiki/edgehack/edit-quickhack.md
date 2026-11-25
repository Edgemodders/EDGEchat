<!-- Copied from EDGEweb's docs/wiki/edgehack/edit-quickhack.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgehack/edit-quickhack.html (reviewed 2026-11-13) -->

# Change a game quickhack

In this walk-through you make the game's own **Overheat** cost 1 RAM less on every tier, and see the new cost in the game. It is the simplest job EDGEhack does, and every other job builds on it.

| | |
|---|---|
| **Time** | About five minutes, plus the game starting |
| **Before you start** | EDGEhack and REDcode are installed, and a project is open in REDcode ([Install and set up](https://edgemodders.ai/wiki/edgehack/install.html)). No project yet? Run **REDcode: New Project**: see [Make a new project](https://edgemodders.ai/wiki/redcode/projects.html#make-a-new-project) |
| **In the game** | TweakXL, for the finished mod. [REDnode](https://edgemodders.ai/wiki/rednode/install.html), if you want to see the change without restarting the game. See [What each feature needs](https://edgemodders.ai/wiki/edgehack/install.html#what-each-feature-needs) |

| On this page | |
|---|---|
| [1. Open Overheat](https://edgemodders.ai/wiki/edgehack/edit-quickhack.html#1-open-overheat) | Read it first |
| [2. Press Edit](https://edgemodders.ai/wiki/edgehack/edit-quickhack.html#2-press-edit) | The same page, with fields |
| [3. Lower the RAM](https://edgemodders.ai/wiki/edgehack/edit-quickhack.html#3-lower-the-ram) | One tier, then all of them |
| [4. Save](https://edgemodders.ai/wiki/edgehack/edit-quickhack.html#4-save) | EDGEhack writes the mod's file |
| [5. See it in the game](https://edgemodders.ai/wiki/edgehack/edit-quickhack.html#5-see-it-in-the-game) | Two ways |
| [Put it back](https://edgemodders.ai/wiki/edgehack/edit-quickhack.html#put-it-back), [Try next](https://edgemodders.ai/wiki/edgehack/edit-quickhack.html#try-next) | |

Two words first. A quickhack comes in **tiers**: Overheat has six, from Common to Legendary++, and each has its own numbers. **RAM** is what a quickhack costs V to use.

## 1. Open Overheat

1. Click EDGEhack's icon in the activity bar, the strip of icons down the left edge of VS Code.
2. In the **Quickhacks** view, open **People**, then **Damage Hack**.
3. Click **Overheat**.

**You should see** a tab with Overheat's six tiers and what each one does. This page is read-only.

## 2. Press Edit

Press **Edit...** near the top of the page.

| What you should see | |
|---|---|
| A new tab | The editor: Texts and Icons at the top, then a **Numbers** table with a column for each tier |
| Under the title | "A change to the game's Overheat. Empty fields keep the game's value." |
| In EDGEhack's **Desk** view | A **Project** group with one row: Overheat, marked `changes Overheat` |

EDGEhack has made a small file in your project for this change. It calls that file a **document**. There is one per quickhack you change, so pressing **Edit...** on Overheat again opens this same one.

## 3. Lower the RAM

Every field in the Numbers table is empty and shows the game's value in grey. An empty field means "keep the game's value".

1. Click **Rare** at the top of its column. That selects the Rare tier.
2. In the **RAM** row, click the Rare field and type a number 1 less than the grey one. If the grey number is 8, type 7.
3. Press **All tiers**, the small button on the RAM row.

| What you should see | |
|---|---|
| After step 2 | The Rare field highlighted as changed |
| After step 3 | Every tier's RAM field filled, each 1 less than its own grey value |

**All tiers** copies the selected tier's *change*, not its number. Rare went down by 1, so every tier goes down by 1 from its own value, and the tiers keep their spread. That is why you select Rare in step 1: **All tiers** always works from the selected tier.

## 4. Save

Press `Ctrl+S`.

**You should see** the line under the title change to "Saved:" and a file name ending in `.yaml`, under `source\resources\r6\tweaks` in your project. That file is the whole mod so far: a few lines for TweakXL, the framework that changes the game's numbers. You never need to open it.

## 5. See it in the game

Pick one way.

| | Try Live | Pack and Play |
|---|---|---|
| What it does | Sends the change into the running game | Packs the project and installs it as a mod |
| The game | Running, with a save loaded | Closed. Start it afterwards |
| Needs | REDnode in the game | TweakXL in the game, and [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) if you use it |
| The change stays | Until you press **Stop** or close the game | Until you uninstall the mod |

**With Try Live:**

1. Start the game and load a save.
2. On the editor page, press **Try Live**.
3. The first time, the game shows REDnode's **Editor request** window, asking whether EDGEhack may change the game. Press **Allow**. If you don't see the window, press `F10`.

The line under the title now reads "Trying it live" with a count of changes in the game.

**With Pack and Play:**

1. Close the game.
2. On the editor page, press **Pack and Play**.
3. Start the game and load a save.

**Then, either way,** scan an enemy with Overheat in V's cyberdeck, and look at its RAM cost in the quickhack list.

| What you should see | |
|---|---|
| Overheat's RAM cost | 1 less than before. V's perks and cyberdeck can lower the cost further, so compare with what it showed before your change, not with the grey number on the page |

V has no Overheat? With REDnode, open its launcher (`F10`), switch on **Console**, and run this line. It puts the Rare tier in V's backpack. Then slot it into the cyberdeck:

```js
await game.player.addItem("Items.OverheatLvl2Program")
```

## Put it back

| To undo | Do this |
|---|---|
| Try Live | Press **Stop** on the page. The game's numbers go back |
| One number | Clear its field, or type the grey value, and save. The change is taken out of the document |
| The whole change | In the Desk view's **Project** group, hover Overheat and click the trash can (**Remove from Project...**). The document and its mod file go to the Recycle Bin |
| The installed mod | In REDcode's Project view, open the **`...`** menu and choose **Uninstall**: see [Uninstall](https://edgemodders.ai/wiki/redcode/pack-install.html#uninstall) |

## Try next

- Change Overheat's name or description: [Texts](https://edgemodders.ai/wiki/edgehack/editor.html#texts). These need Pack and Play and a game restart to show.
- Make a quickhack of your own instead of changing the game's: [Your first quickhack](https://edgemodders.ai/wiki/edgehack/first-quickhack.html).
- What every row and button on the page does: [The editor](https://edgemodders.ai/wiki/edgehack/editor.html).
