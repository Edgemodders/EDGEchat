<!-- Copied from EDGEweb's docs/wiki/edgemat/tutorial-worn-leather.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html (reviewed 2026-10-20) -->

# Tutorial: worn leather

In this tutorial you turn the **Comfy rocker aramid-weave slim-fits** into worn brown leather pants, from one line of words, and wear them in the game. It is the test EDGEmat passed on 2026-10-20, written up so you can follow it. It takes about 15 minutes, most of it in the game.

(Screenshot on the wiki, "The result: worn leather slim-fits, front": V in the worn leather slim-fits, from the front, in an indoor garage: warm brown leather with fine creases, the pants' own folds at the knees.)

## What you need

| | |
|---|---|
| EDGEmat 0.3 or later and [REDcode](https://edgemodders.ai/wiki/redcode/) | [Install and set up](https://edgemodders.ai/wiki/edgemat/install.html) |
| A REDcode project | **REDcode: New Project** (`Ctrl+Shift+P`), for example `MyMaterials`. Leave it open |
| An image service key | Google Gemini or OpenAI, your own ([New Material](https://edgemodders.ai/wiki/edgemat/new-material.html#from-words-ai)). One take costs a few cents |
| [Cyber Engine Tweaks](https://www.nexusmods.com/cyberpunk2077/mods/107) | To put the pants on V |

## 1. Find the pants' material

1. Click EDGEmat's icon in the activity bar, then the **FIND** header (below the Library) and its magnifier.
2. Type `comfy rocker` and open **Comfy rocker aramid-weave slim-fits**. Its record id, `Items.Pants_01_basic_01`, shows beside it: you'll need it in the game.
3. Open your V's body (Feminine or Masculine), then the mesh `l1_012_pw?_pants__jeans_tight.mesh`.
4. Hover the material **leather** and press the sparkle icon at its right (**New Material Here...**).

The **New Material** page opens. **Where it goes** names leather on two meshes, `l1_012_pwa_...` and `l1_012_pma_...`: one per body, so the pants change whichever body you play.

(Screenshot on the wiki, "Find, with New Material Here on the leather material": The Find view open on the Comfy rocker slim-fits: the item with Items.Pants_01_basic_01 beside it, a body, the l1_012 mesh, and the leather material with the sparkle icon highlighted.)

## 2. Generate the leather

1. Under **1. The image**, stay on **From words (AI)** and type:

   > worn brown leather with fine creases

2. Leave **Detail** on medium. Pick your service.
3. Press **Generate**. The first time, paste your API key in the box that opens. A notification shows while the service works, usually under a minute.
4. **Take 1** appears under **2. Takes**, and **3. The material** shows it tiled 3 × 3. Look for seams or a pattern that repeats too obviously. Not happy? Press **Generate again**, or change the words, and pick the take you like best.

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

Press **Add to Project**. The message says it saved `worn_leather` and put it on 2 mesh materials, and the page lists both meshes with "repeat in the texture, garment folds kept": the pants keep their own folds and wrinkles at their real size.

(Screenshot on the wiki, "Saved into the project": The message 'Saved worn_leather into ... and put on 2 mesh materials.' with Pack and Try and Show Files, and the page listing both l1_012 meshes with 'repeat in the texture, garment folds kept'.)

## 4. Into the game

1. Close the game if it's running. In REDcode, **Pack and Install**. (Pack and Try is for a running game with Red Hot Tools: see [Your mod in the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html).)
2. Start the game and load a save.
3. Open Cyber Engine Tweaks' console and run:

   ```lua
   Game.AddToInventory("Items.Pants_01_basic_01", 1)
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

## Try next

- Change the words: "black patent leather", "cracked red leather". Glossy shine suits patent.
- Use a photo of your own: **From an image file**, no key needed.
- Ask Claude instead: [Tutorial: snakeskin by asking Claude](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html).
