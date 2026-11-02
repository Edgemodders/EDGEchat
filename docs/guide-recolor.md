---
title: "Lesson 3: Recolor a jacket"
---

# Lesson 3: <span class="y">Recolor a jacket</span>

You make a mod that changes how a jacket looks, the way most clothing mods are made: a WolvenKit project with the game's files for that jacket, changed, then packed and put in the game by EDGEdeck. Claude does the file work through `edgemat` and `redcode`; you check the result.

[&larr; Lesson 2](guide-first-mod.html) · [Guide](guide.html)

## Before you start

- Lesson 1 done, with EDGEmat's library built (lesson 1, step 7).
- EDGEdeck installed in VS Code is the easy way to start the game afterwards; without it, see step 6.
- The game running at a loaded save, for step 1. You close it in step 5.

## Step 1: Put the jacket on V

This lesson uses the **Heavy-duty aramid-reinforced badge coat**, the NCPD coat, because it's easy to get and has been tested. Its id in the game's data is `Items.Cop_01_Set_Jacket`.

With REDnode 0.49.5 or newer, open REDnode's **Console** from the launcher (**F10**) and type:

```
addItem("Items.Cop_01_Set_Jacket")
```

It puts the coat in V's inventory. Equip it from the inventory.

To use a jacket V already wears instead, ask Claude:

> What is V wearing in the outer torso slot? Give me its TweakDB record id.

It reads that from the game without asking, and answers with an id like `Items.Something_Jacket`. Use that id instead of `Items.Cop_01_Set_Jacket` below.

## Step 2: Know what you're recoloring

A garment in the game is not one file. Ask:

> What materials does Items.Cop_01_Set_Jacket have? Use edgemat.

Claude follows the item through the game's data to its meshes and materials, and lists them. For the badge coat:

| Part | Mesh | Material |
|---|---|---|
| **The jacket** | `t2_064_..._jacket__t2_player_heavy_02.mesh` | `cop_blue_black` |
| A tactical vest over it | `t2_073_..._vest__tactic_collar2.mesh` | `max_tac` |
| A belt, an NCPD patch, the cuffs | Their own meshes | Their own |

Three things to know, all met while testing this lesson:

| Know | Why |
|---|---|
| One item can be several meshes worn together | The coat is a jacket, a vest, a belt and a patch. Recolor only the part you mean: here the jacket's `cop_blue_black` |
| Each body type has its own mesh | `pwa` in a file name is the feminine body, `pma` the masculine. A recolor changes both, so it works for any V |
| Player meshes and NPC meshes are different files | V's clothes are under `player_equipment`. A file under `citizen_casual` or another NPC folder changes what NPCs wear, not V. If Claude's file list in step 3 has no `player_equipment` path, it picked the wrong mesh |

## Step 3: Make the project, red

Ask, with a folder of your own (outside the game folder) and a name in lowercase:

> Make a new WolvenKit project at `C:\Users\<you>\Documents\Cyberpunk Mods\red_badge_coat` that recolors the jacket of Items.Cop_01_Set_Jacket (its cop_blue_black material) to bright red with edgemat. Don't deploy yet.

Claude makes the project folders and the `.cpmodproj` file, describes the jacket's color layers in plain words, writes a new red version of its material setup into the project, and points the jacket's meshes at it. Claude Code asks before writing files. At the end it lists what's in the project. Check that list:

- [ ] The paths are under `base\characters\garment\player_equipment\torso\t2_064_jacket__t2_player_heavy\`
- [ ] Both bodies: `t2_064_pwa_...` and `t2_064_pma_...`
- [ ] One new `.mlsetup`, such as `cop_blue_black_red_badge_coat.mlsetup`

You can do the same by hand in the EDGEmat extension: **Find** the item, open its material, recolor it, and **Add to Project**. Claude takes it from there.

## Step 4: Pack it

> Pack the project.

`redcode` packs the game files in `source\archive` into one file, `red_badge_coat.archive`, in the project's `packed` folder. It warns about capital letters or spaces in game paths; there should be none.

Some projects pack as a **REDmod** instead (`packed\mods\<name>\`). That works too, with one difference in step 6.

## Step 5: Put it in the game with EDGEdeck

**Close the game first:** EDGEdeck refuses to deploy while it runs. Then:

> Install the project into EDGEdeck and show me what a deploy would change.

Claude adds the project to EDGEdeck's library (version `dev`, switched on), and lists what the next deploy would do. Read the list:

| You see | Means |
|---|---|
| `add` `archive/pc/mod/red_badge_coat.archive` | Your mod, as expected |
| Other mods' files too | Mods you switched on earlier but never deployed. A normal deploy puts them in as well. To keep this lesson to one mod, ask to deploy only `red_badge_coat` |

> Deploy only red_badge_coat.

Claude Code **asks before the deploy**, every time: it writes into the game folder. Allow it. EDGEdeck links the file into the game folder and remembers it, so it can undo the deploy or remove the mod later.

## Step 6: Start the game and look

The easy way: EDGEdeck's **Run game**, the play button in its Mods view. It deploys any waiting changes first (every mod that's on, not only this one), then starts the game with `-modded`.

From Steam it works the same for a mod packed into `archive\pc\mod`. A **REDmod** loads only when the game starts with `-modded`: add it in Steam's launch options for the game, or use Run game. Without it, the jacket simply keeps its old color.

Load a save and look at V: the badge coat is red, in the inventory preview too.

## If it isn't red

| Check | How |
|---|---|
| V wears this coat | Ask "What is V wearing in the outer torso slot?" |
| The project changed V's jacket, not an NPC's | The paths in step 3 are under `player_equipment` |
| A REDmod, started without `-modded` | Start with **Run game** |
| The pack is older than your change | Pack again, then install and deploy again (steps 4 and 5) |
| Something else | `/edge:check-mod`, [lesson 5](guide-check.html) |

## Good to know

- **A replaced file changes it everywhere it's used.** Your mod replaces the coat's meshes, so anyone wearing this coat in your game shows red.
- **The game's own files are never changed.** Your mod is a separate file that the game loads on top; remove it and the coat is back to normal.
- **Removing the mod:** ask Claude to remove it from EDGEdeck, then deploy, or use EDGEdeck's **Undo** on the last deploy. Both ask first.

## Check

- [ ] The project holds V's jacket meshes for both bodies and one new `.mlsetup`
- [ ] Claude Code asked before the deploy
- [ ] The coat is red in the game

[&larr; Lesson 2](guide-first-mod.html) · [Guide](guide.html) · [Next: Change it while you play &rarr;](guide-live.html)
