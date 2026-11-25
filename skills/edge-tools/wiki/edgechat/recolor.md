<!-- Copied from EDGEweb's docs/wiki/edgechat/recolor.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgechat/recolor.html (reviewed 2026-11-13) -->

# Recolor a jacket

This page makes a mod that changes the color of a jacket, the way most clothing mods are made. Claude copies the game's files for that jacket into a project, changes them, and packs them into one mod file. [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) puts that file in the game. Claude does the file work; you check the result. Allow 20 minutes.

| On this page | |
|---|---|
| [Before you start](https://edgemodders.ai/wiki/edgechat/recolor.html#before-you-start) | What to have ready |
| [Step 1: Put the jacket on V](https://edgemodders.ai/wiki/edgechat/recolor.html#step-1-put-the-jacket-on-v) | So you can see the change |
| [Step 2: Know what you're recoloring](https://edgemodders.ai/wiki/edgechat/recolor.html#step-2-know-what-youre-recoloring) | A coat is several parts |
| [Step 3: Make the project, in red](https://edgemodders.ai/wiki/edgechat/recolor.html#step-3-make-the-project-in-red) | One request to Claude |
| [Step 4: Pack it](https://edgemodders.ai/wiki/edgechat/recolor.html#step-4-pack-it) | The project becomes a mod file |
| [Step 5: Put it in the game with EDGEdeck](https://edgemodders.ai/wiki/edgechat/recolor.html#step-5-put-it-in-the-game-with-edgedeck) | Install and deploy |
| [Step 6: Start the game and look](https://edgemodders.ai/wiki/edgechat/recolor.html#step-6-start-the-game-and-look) | The coat is red |
| [If it isn't red](https://edgemodders.ai/wiki/edgechat/recolor.html#if-it-isnt-red) | What to check |

## Before you start

- [Install and connect](https://edgemodders.ai/wiki/edgechat/install.html) done, with EDGEmat's library built (step 7 there).
- REDnode 0.49.5 or later, for the Console in step 1. On an older REDnode, [update it](https://edgemodders.ai/wiki/rednode/install.html#updating-rednode), or use a jacket V already wears (also in step 1).
- EDGEdeck in VS Code or EDGEkit, for the easy way to start the game afterwards (step 6).
- The game running at a loaded save, for step 1. You close it in step 5.

Words used on this page:

| Word | Means |
|---|---|
| **WolvenKit project** | A folder that holds a mod's files while you work on them. The EDGE tools make and read the same kind of project as WolvenKit, the community's modding tool |
| **Mesh** | A 3D shape, such as a jacket's |
| **Material** | How a mesh's surface looks: its colors, wear and shine. Recoloring changes the material, not the mesh |
| **Pack** | Turn a project into the one `.archive` file the game loads |
| **Deploy** | EDGEdeck putting the mods that are switched on into the game folder |

## Step 1: Put the jacket on V

This page uses the **Heavy-duty aramid-reinforced badge coat**, the NCPD coat: it's easy to get, and it's the one EDGEchat was tested with. Its id in the game's data is `Items.Cop_01_Set_Jacket`.

In the game, press **F10** and switch on **Console** in REDnode's launcher. The [Console](https://edgemodders.ai/wiki/rednode/overlay.html#the-console) is a window where you type commands for the game. Type this and press Enter:

```js
addItem("Items.Cop_01_Set_Jacket")
```

The Console answers that the item was added. The coat is now in V's inventory. Equip it there.

**To use a jacket V already wears instead,** ask Claude:

> What is V wearing in the outer torso slot? Give me its TweakDB record id.

TweakDB is the game's database of items and stats, and a record is one entry in it. Claude reads the answer from the game without asking, and gives you an id. Use that id instead of `Items.Cop_01_Set_Jacket` below.

## Step 2: Know what you're recoloring

A piece of clothing in the game is not one file. Ask:

> What materials does Items.Cop_01_Set_Jacket have? Use edgemat.

"Use edgemat" tells Claude which connection to use, the one made for materials.

Claude follows the item through the game's data to its meshes and materials, and lists them. The badge coat turns out to be a jacket with a tactical vest, a belt, an NCPD patch and cuffs. Each part has its own mesh and its own material. The jacket's material is named `cop_blue_black`: that's the one to change.

Three things to know. Each one came up while this lesson was tested.

| Know | Why |
|---|---|
| One item can be several meshes worn together | Recolor only the part you mean: here the jacket's `cop_blue_black`, not the vest's |
| Each body type has its own mesh | `pwa` in a file name is the feminine body, `pma` the masculine. The recolor in step 3 changes both, so the mod works whichever body your V has |
| V's clothes and NPCs' clothes are different files | V's are in a folder named `player_equipment`. A file under `citizen_casual` or another NPC folder changes what NPCs wear, not V. If the file list in step 3 has no `player_equipment` path, the wrong mesh was picked |

[EDGEmat's pages](https://edgemodders.ai/wiki/edgemat/) explain materials, layers and recolors in depth.

## Step 3: Make the project, in red

Ask Claude to make the project in a folder of your own, outside the game folder:

> Make a new WolvenKit project at `C:\Users\<you>\Documents\Cyberpunk Mods\red_badge_coat` that recolors the jacket of Items.Cop_01_Set_Jacket (its cop_blue_black material) to bright red with edgemat. Don't deploy yet.

Before you send it, change two things if you need to:

- Replace `<you>` with your Windows user name.
- The last part, `red_badge_coat`, is the project's name. Keep it in lowercase letters, digits and `_`, with no spaces. The name ends up in the names of files the game reads, and the game doesn't find files whose paths have capitals or spaces. The folders above it can be named anything.

Claude makes the project, describes the jacket's color layers in plain words, writes a red version of its material into the project, and points the jacket's meshes at it. Claude Code asks before writing files. Allow it.

At the end Claude lists what's in the project. Check that:

- the paths are under `base\characters\garment\player_equipment\torso\t2_064_jacket__t2_player_heavy\`;
- both bodies are there: `t2_064_pwa_...` and `t2_064_pma_...`;
- there is one new `.mlsetup` file, such as `cop_blue_black_red_badge_coat.mlsetup`. An `.mlsetup` is the file that holds a material's layers. This one is your red material.

You can do the same by hand in the [EDGEmat extension](https://edgemodders.ai/wiki/edgemat/new-material.html): find the item, open its material, recolor it, and add it to the project. Claude takes it from there.

## Step 4: Pack it

> Pack the project.

Claude packs the game files in the project's `source\archive` folder into one file, `red_badge_coat.archive`, in the project's `packed` folder. That file is your mod. Claude warns you if a path has capital letters or spaces; there should be none.

Claude tells you how the project was packed. Most pack as above. Some pack as a **REDmod** instead: that is CD PROJEKT RED's own mod format, and its files land in `packed\mods\<name>\`. Everything below still works for a REDmod, with one difference in step 6.

## Step 5: Put it in the game with EDGEdeck

**Close the game first.** EDGEdeck won't deploy while it runs. Then ask:

> Install the project into EDGEdeck and show me what a deploy would change.

Claude adds the project to EDGEdeck's library, as version `dev`, switched on. Nothing is in the game yet. Claude lists what the next deploy would do:

| You see | Means |
|---|---|
| `add` `archive/pc/mod/red_badge_coat.archive` | Your mod, as expected |
| Other mods' files too | Mods you switched on earlier but never deployed. A normal deploy puts them in as well. To keep this to one mod, ask to deploy only `red_badge_coat` |

> Deploy only red_badge_coat.

Claude Code **asks before the deploy**, every time, because a deploy writes into the game folder. Allow it. EDGEdeck links the file into the game folder and records it, so it can [undo the deploy](https://edgemodders.ai/wiki/edgedeck/deploying.html#undo-deploy) or remove the mod later.

## Step 6: Start the game and look

The easy way is EDGEdeck's **Run game**, the play button in its Mods view. It deploys any waiting changes first (every mod that's on, not only this one), then starts the game with `-modded`. `-modded` is a launch option that tells the game to load REDmods. See [Start the game](https://edgemodders.ai/wiki/edgedeck/deploying.html#start-the-game).

Starting from Steam works too, for a mod packed into `archive\pc\mod`. A **REDmod** loads only when the game starts with `-modded`: use **Run game**, or add `-modded` to the game's launch options in Steam. Without it the jacket keeps its old color.

Load a save and look at V.

| You should see | |
|---|---|
| The badge coat's jacket in bright red | On V, in the world |
| The same red in the inventory preview | In the inventory screen |
| The vest, belt and patch unchanged | You recolored only the jacket's material |

(Screenshot on the wiki, "The red badge coat": V in the game wearing the NCPD badge coat with its jacket recolored bright red, the tactical vest over it unchanged.)

## If it isn't red

| Check | How |
|---|---|
| V wears this coat | Ask "What is V wearing in the outer torso slot?" |
| The project changed V's jacket, not an NPC's | The paths in step 3 are under `player_equipment` |
| The mod is a REDmod, and the game was started without `-modded` | Start with **Run game** |
| The pack is older than your change | Pack again, then install and deploy again (steps 4 and 5) |
| Something else | `/edge:check-mod`: see [When a mod doesn't work](https://edgemodders.ai/wiki/edgechat/check-mod.html) |

## Good to know

- **A replaced file changes everything that uses it.** Your mod replaces the coat's own files, so the coat is red wherever the game uses those files, not only on V. Clothes that NPCs wear from their own folders (step 2) don't change.
- **The game's own files never change.** Your mod is a separate file the game loads on top. Remove it and the coat is back to normal.
- **To remove the mod,** ask Claude to remove it from EDGEdeck and then deploy, or use EDGEdeck's [Undo deploy](https://edgemodders.ai/wiki/edgedeck/deploying.html#undo-deploy) on the last deploy. Both ask first.

## Check

- The project holds V's jacket meshes for both bodies, and one new `.mlsetup`.
- Claude Code asked before the deploy.
- The coat is red in the game.

Next: [Change it while you play](https://edgemodders.ai/wiki/edgechat/live.html). EDGEchat's [lesson 3](https://edgemodders.github.io/EDGEchat/guide-recolor.html) covers the same steps.
