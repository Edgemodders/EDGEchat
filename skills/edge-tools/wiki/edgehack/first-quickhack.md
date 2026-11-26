<!-- Copied from EDGEweb's docs/wiki/edgehack/first-quickhack.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgehack/first-quickhack.html (reviewed 2026-11-13) -->

# Your first quickhack

In this walk-through you make **Static Bloom**: a new quickhack that sits beside the game's Overheat. It costs 2 more RAM, and it poisons as well as burns. You click through it yourself, with no code. The game's own Overheat stays exactly as it is.

| | |
|---|---|
| **Time** | About twenty minutes, part of it the game starting |
| **Before you start** | EDGEhack and REDcode are installed, and a project is open in REDcode ([Install and set up](https://edgemodders.ai/wiki/edgehack/install.html)). The game is closed |
| **In the game** | The frameworks TweakXL, ArchiveXL and redscript. [REDnode](https://edgemodders.ai/wiki/rednode/install.html), whose Console gives V the quickhack in step 5 and which step 6 needs. See [What each feature needs](https://edgemodders.ai/wiki/edgehack/install.html#what-each-feature-needs) |
| **Never used EDGEhack?** | Do [Change a game quickhack](https://edgemodders.ai/wiki/edgehack/edit-quickhack.html) first. It takes five minutes and explains the Numbers table |

| On this page | |
|---|---|
| [1. Clone and Modify](https://edgemodders.ai/wiki/edgehack/first-quickhack.html#1-clone-and-modify) | A copy of Overheat under a new name |
| [2. Raise its RAM](https://edgemodders.ai/wiki/edgehack/first-quickhack.html#2-raise-its-ram) | By 2, on every tier |
| [3. Add Contagion's poison](https://edgemodders.ai/wiki/edgehack/first-quickhack.html#3-add-contagions-poison) | An effect borrowed from another quickhack |
| [4. Look at Get it](https://edgemodders.ai/wiki/edgehack/first-quickhack.html#4-look-at-get-it) | How players will find it |
| [5. Play it](https://edgemodders.ai/wiki/edgehack/first-quickhack.html#5-play-it) | Pack, install, and use it on an enemy |
| [6. Change it while you play](https://edgemodders.ai/wiki/edgehack/first-quickhack.html#6-change-it-while-you-play) | Try Live |
| [Take it out again](https://edgemodders.ai/wiki/edgehack/first-quickhack.html#take-it-out-again), [What next](https://edgemodders.ai/wiki/edgehack/first-quickhack.html#what-next) | |

## 1. Clone and Modify

**Clone and Modify** makes a new quickhack that starts as a copy of one of the game's.

1. In EDGEhack's **Quickhacks** view, open **People**, then **Damage Hack**.
2. Right-click **Overheat** and choose **Clone and Modify...**.
3. Type `Static Bloom` and press Enter.

(Screenshot on the wiki, "Naming the new quickhack": VS Code with the input box at the top titled Clone and Modify Overheat, Static Bloom typed in it, and the Quickhacks view below with Overheat selected.)

| What you should see | |
|---|---|
| A new tab | The editor, titled Static Bloom, with "A new quickhack, started from the game's Overheat, which it leaves as it is." |
| A message in the corner | The files EDGEhack added to your project, with an **Open** button |
| In the **Desk** view | A **Project** group with Static Bloom, marked `new, from Overheat` |

EDGEhack saved the new quickhack as a small file in your project (its **document**) and wrote the mod files the game needs beside it.

**Choose the name with care.** The game finds every item by an internal id, and EDGEhack builds the new quickhack's ids from your project's name and this first name. In a project called `my_hacks`, the Rare tier's id is `Items.EDGEhack_my_hacks_static_bloom_OverheatLvl2Program`. Saved games and vendors find the quickhack by those ids, so EDGEhack never changes them. The name players see is separate: change it any time in **Texts**, on the page.

## 2. Raise its RAM

The **Numbers** table has a column for each tier, Common to Legendary++, and a row for each number. An empty field keeps Overheat's value, shown in grey.

1. Click **Rare** at the top of its column, to select that tier.
2. In the **RAM** row, click the Rare field and type a number 2 more than the grey one. If the grey number is 8, type 10.
3. Press **All tiers** on the RAM row. Every other tier also goes up by 2 from its own value.
4. Save with `Ctrl+S`.

**You should see** every RAM field filled, and the line under the title say "Saved:" with the file it wrote: a TweakXL file under `source\resources\r6\tweaks` in your project.

(Screenshot on the wiki, "RAM on every tier": The Numbers table of Static Bloom: the RAM row filled on every tier, 2 more than the grey game values, and the status line under the title saying the save wrote the TweakXL file.)

## 3. Add Contagion's poison

1. Scroll to **Added effects** and press **Add Effect...**.
2. On the **Copy Existing** tab, click **Contagion**, then its poison in the list below.
3. Save.

(Screenshot on the wiki, "Adding an effect": The Add Effect dialog over the page, on its Copy Existing tab, with Contagion picked and its poison listed with a one-line summary: on the target, chemical damage a second, how long it lasts.)

**You should see** a card for the poison under Added effects, saying it comes from Contagion and follows its tiers. So Static Bloom's Rare tier gets the poison of Contagion's Rare tier, and its Epic tier the stronger Epic poison.

Grey notes near the top of the page tell you two things about this pair:

- **Machines are spared.** EDGEhack stops the added poison from hurting drones, androids and mechs. The game's own Contagion can't be used on machines either.
- **Burn and poison can cancel.** If V also carries the game's Contagion at Epic or better, the game ends the poison when the target is hit while burning. That is the game's rule, not a fault in your quickhack.

## 4. Look at Get it

Scroll to **Get it**. It shows how players will find the selected tier, and you can click another tier at the top of the Numbers table to see that one.

A new quickhack is sold and crafted like the game quickhack you cloned it from, tier for tier. Where a vendor sells Overheat's Rare tier, the same vendor sells Static Bloom's. Where the game sells a crafting recipe for a tier, yours gets its own recipe.

Under each tier is a line for testing, such as:

```js
await game.player.addItem("Items.EDGEhack_my_hacks_static_bloom_OverheatLvl2Program")
```

Yours has your project's name in it, so copy it from the page, not from here. `Lvl2` is the Rare tier. The line puts that tier in V's backpack without buying it. It works only once Static Bloom is in the game, which is the next step.

## 5. Play it

1. Make sure the game is closed.
2. On the page, press **Pack and Play**. REDcode packs the project into a mod and installs it, through [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) if you have it.
3. Start the game and load a save.
4. Press `F10` to open REDnode's launcher and switch on **Console**.
5. Copy the Rare tier's line from **Get it**, paste it into the Console and press Enter.
6. Close the launcher with `F10`. In the cyberdeck screen, slot Static Bloom.
7. Scan an enemy and upload Static Bloom.

| What you should see | |
|---|---|
| In V's backpack | Static Bloom, with Overheat's icon and its own name |
| On its card | A RAM cost 2 higher than Overheat's Rare tier |
| On the enemy | The burn, and the poison beside it |

(Screenshot on the wiki, "Static Bloom in the game": The game's inventory or cyberdeck screen with Static Bloom selected: its item card with Overheat's icon, its name, its higher RAM cost, and the poison among its effects.)

Not what you see? See [In the game](https://edgemodders.ai/wiki/edgehack/troubleshooting.html#in-the-game).

## 6. Change it while you play

**Try Live** sends a change into the running game, so you don't restart for every number. Keep the game running with your save loaded.

1. In VS Code, on Static Bloom's page, click **Rare** at the top of its column.
2. Press **Try Live**.
3. In the game, REDnode shows an **Editor request** window for EDGEhack. Press **Allow**. It asks once per game session. If you don't see the window, press `F10`.
4. Back on the page, change the Rare tier's RAM to another number and save.
5. In the game, scan an enemy again.
6. Press **Stop** on the page when you are done.

(Screenshot on the wiki, "Allowing EDGEhack in the game": The game with REDnode's Editor request window: EDGEhack asks to change the game, with Allow and Deny.)

| What you should see | |
|---|---|
| After step 3 | The line under the title: "Trying it live", how many changes are in the game, and that the Rare tier is in V's backpack |
| After step 5 | Static Bloom's new RAM cost in the quickhack list |
| After step 6 | The game back as the installed mod has it |

Try Live shows numbers and effects. It can't show a new name or new icons: those arrive with **Pack and Play** and a game restart. More in [Try Live and Pack and Play](https://edgemodders.ai/wiki/edgehack/try-live.html).

When you like the numbers, close the game and press **Pack and Play** again, so the installed mod has them.

## Take it out again

| To remove | Do this |
|---|---|
| The mod from the game | In REDcode's Project view, open the **`...`** menu and choose **Uninstall**: see [Uninstall](https://edgemodders.ai/wiki/redcode/pack-install.html#uninstall) |
| Static Bloom from the project | In the Desk view's **Project** group, hover it and click the trash can (**Remove from Project...**). A list shows what goes to the Recycle Bin |

What the game does with a Static Bloom that V still carries in a save, once the mod is gone, has not been tested. To be safe, sell or drop it before you uninstall.

## What next

- Change its name, description and icons, or add a line to its tooltip: [The editor](https://edgemodders.ai/wiki/edgehack/editor.html).
- Make it work only on some enemies, or do more when it lands: [Scripts](https://edgemodders.ai/wiki/edgehack/scripts.html).
- Keep it to use in other mods: [The Desk and the Library](https://edgemodders.ai/wiki/edgehack/desk-library.html).
- Ask Claude to make the next one: [Assistants](https://edgemodders.ai/wiki/edgehack/assistants.html).
