<!-- Copied from EDGEweb's docs/wiki/edgemat/tutorial-worn-leather.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html (reviewed 2026-11-22) -->

# Tutorial: worn leather

In this tutorial you turn the **Comfy rocker aramid-weave slim-fits** into worn brown leather pants, from one line of words, and wear them in the game. These are the exact steps EDGEmat's New Material feature was tested with. It takes about 15 minutes, most of it in the game, and costs a few cents: an AI image service draws the leather, on your own key.

New to EDGEmat? Do [Tutorial: recolor a jacket](https://edgemodders.ai/wiki/edgemat/tutorial-recolor.html) first. It needs no key, and it explains projects and Find more slowly.

(Screenshot on the wiki, "The result: worn leather slim-fits, front": V in the worn leather slim-fits, from the front, in an indoor garage: warm brown leather with fine creases, the pants' own folds at the knees.)

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html#what-you-need) | A project, a key, REDnode |
| [1. Find the pants' material](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html#1-find-the-pants-material) | |
| [2. Generate the leather](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html#2-generate-the-leather) | From one line of words |
| [3. Add it to the project](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html#3-add-it-to-the-project) | Name, repeat, bumps, shine |
| [4. Into the game](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html#4-into-the-game) | Pack, install, wear |
| [What to look for](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html#what-to-look-for), [Try next](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html#try-next) | |

## What you need

| | |
|---|---|
| EDGEmat and [REDcode](https://edgemodders.ai/wiki/redcode/) | [Install and set up](https://edgemodders.ai/wiki/edgemat/install.html) |
| A project, the folder your mod lives in | Run **REDcode: New Project** from the command palette (`Ctrl+Shift+P`) and name it, for example `my_materials`. Leave it open |
| An image service key | Google Gemini or OpenAI, your own. [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html#from-words-ai) says what a key is and where to get one. One picture costs a few cents |
| [REDnode](https://edgemodders.ai/wiki/rednode/install.html) 0.49.5 or later, installed in the game | Its [Console](https://edgemodders.ai/wiki/rednode/overlay.html#the-console) puts the pants on V |

## 1. Find the pants' material

1. Click EDGEmat's icon in the activity bar, then the **FIND** header (below the Desk and Game Materials) and its magnifier.
2. Type `comfy rocker` and unfold **Comfy rocker aramid-weave slim-fits**. Its record id, `Items.Pants_01_basic_01`, shows in grey beside it. That is the game's internal name for the item: you'll need it in the game.
3. Under your V's body (**Feminine body** or **Masculine body**) is the mesh, the pants' 3D shape: `l1_012_pwa_pants__jeans_tight.mesh` for the feminine body, `l1_012_pma_...` for the masculine. Its materials are listed under it.
4. Hover the material **leather** and press the sparkle icon at its right (**New Material Here...**).

**You should see** the **New Material** page open. **Where it goes** names leather on two meshes, `l1_012_pwa_...` and `l1_012_pma_...`: one per body type, so the pants change whichever body you play.

(Screenshot on the wiki, "Find, with New Material Here on the leather material": The Find view open on the Comfy rocker slim-fits: the item with Items.Pants_01_basic_01 beside it, a body, the l1_012 mesh, and the leather material with the sparkle icon highlighted.)

## 2. Generate the leather

1. Under **1. The image**, stay on **From words (AI)** and type:

   > worn brown leather with fine creases

2. Leave **Detail** on medium. Pick your service.
3. Press **Generate**. The first time, paste your API key in the box that opens.

| What you should see | |
|---|---|
| While the service works | A notification, usually for under a minute |
| When it is done | **Take 1** under **2. Takes**, and the leather tiled 3 × 3 under **3. The material** |

Look for seams, or a pattern that repeats too obviously. Not happy? Press **Generate again**, or change the words, and pick the take you like best. Each take costs a few cents.

(Screenshot on the wiki, "Takes and the tiled preview": The New Material page with two takes of worn brown leather, the second selected, and its 3 x 3 tiled preview with no visible seams.)

## 3. Add it to the project

Under **3. The material**:

| Setting | Set to | Why |
|---|---|---|
| Name | `worn leather` | Names the files: `worn_leather` |
| Repeat | 6 | Six times across the pants: fine creases, not big blotches |
| Bumps | Moderate | The creases catch the light |
| Shine | Satin | A soft sheen, not plastic |
| Metal | off | |

Press **Add to Project**.

| What you should see | |
|---|---|
| A message | It saved `worn_leather` and put it on 2 mesh materials, with the buttons **Pack and Play** and **Reveal in File Explorer** (Show Files before 0.3.4) |
| On the page | Both meshes listed, with "repeat in the texture, garment folds kept": the pants keep their own folds and wrinkles at their real size |

(Screenshot on the wiki, "Saved into the project": The message 'Saved worn_leather into ... and put on 2 mesh materials.' with Pack and Play and Show Files, and the page listing both l1_012 meshes with 'repeat in the texture, garment folds kept'.)

## 4. Into the game

1. Close the game if it's running. In REDcode's Project view, press **Pack and Install**, the rocket. (The **Pack and Play** button in the message does the same while the game is closed. With the game running under REDnode it swaps the mod in: see [Keep the game running](https://edgemodders.ai/wiki/edgemat/in-the-game.html#keep-the-game-running).)
2. Press **Run Game**, or start the game your usual way, and load a save.
3. Press **F10**, click the **REDNODE** tab, switch on **Console**, and type:

   ```js
   addItem("Items.Pants_01_basic_01")
   ```

4. Equip the pants, and look in photo mode: front, side and back.

(Screenshot on the wiki, "Worn leather, side": V in the worn leather slim-fits from the side: the leather texture follows the leg evenly, with soft highlights on the seat.)

(Screenshot on the wiki, "Worn leather, back": V in the worn leather slim-fits from the back: fine creases, the pants' own folds behind the knees, panel lines reading as stitching.)

## What to look for

| Look at | You should see |
|---|---|
| Folds | The pants' own wrinkles at the knees and ankles, at their normal size |
| The leather | Fine creases and cracks, even over both legs, with no obvious repeat |
| Panel lines | The pattern breaks where the garment's pieces meet. On leather this reads as stitching |
| Color | Close to the take. A warm image gives a warm, tan brown |

If the pants look as they did before, see [If you don't see your change](https://edgemodders.ai/wiki/edgemat/in-the-game.html#3-if-you-dont-see-your-change). To get the game's own pants back, use REDcode's **Uninstall**: [Take the mod out again](https://edgemodders.ai/wiki/edgemat/in-the-game.html#take-the-mod-out-again).

## Try next

- Change the words: "black patent leather", "cracked red leather". Glossy shine suits patent.
- Use a photo of your own: **From an image file**, no key needed.
- Ask Claude instead: [Tutorial: snakeskin by asking Claude](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html).
