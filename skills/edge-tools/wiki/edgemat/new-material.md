<!-- Copied from EDGEweb's docs/wiki/edgemat/new-material.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/new-material.html (reviewed 2026-10-20) -->

# New Material

The setup editor changes the layers a garment already has. **New Material** makes something the game doesn't have: describe it in words ("worn brown leather with fine creases") and an AI image service draws it, or pick a photo of your own. EDGEmat turns the image into a game material, seamless, with bumps and shine, writes it into your mod project, and can put it straight onto part of a garment.

It was tested in the game on 2026-10-20: a worn leather and a dark green snakeskin on a pair of slim-fit pants, both bodies.

(Screenshot on the wiki, "The New Material page": The New Material page for the slim-fits' leather material: 'Where it goes' naming both meshes, the words 'worn brown leather with fine creases', two takes, and the chosen take tiled 3 x 3 under '3. The material' with Name, Repeat, Bumps, Shine and Add to Project.)

## Opening it

| From | How | Where it goes |
|---|---|---|
| A garment's material | [Find](https://edgemodders.ai/wiki/edgemat/find.html): open a garment, a body and a mesh, hover a material and press the sparkle icon at its right (or right-click › **New Material Here...**) | That material, on every body's mesh of the garment |
| Anywhere | The sparkle icon (**New Material...**) in the Library's title bar | Written into your project only, for you to use later |

The top of the page, **Where it goes**, says which meshes and materials it will go on.

## 1. The image

### From words (AI)

You need an account with an image service and your own API key. EDGEmat never comes with one, and nothing is sent anywhere until you press **Generate** or **List models**.

| Service | Where to get a key | Good to know |
|---|---|---|
| Google Gemini ("Nano Banana") | [aistudio.google.com](https://aistudio.google.com) › Get API key | Google marks its images with SynthID |
| OpenAI (GPT Image) | [platform.openai.com](https://platform.openai.com) › API keys | OpenAI may ask you to verify your organization before GPT Image works. Has a **quality** choice (low, medium, high); higher costs more |

Each take costs a few cents of your own credits; the services set the prices.

1. Describe the material in the box: what it is, its color, its wear. "Dark green snakeskin", "brushed steel with fine scratches", "faded red denim".
2. **Detail**: fine, medium or coarse, the size of its features.
3. Pick the service. The model menu starts on "Newest"; **List models** asks the service which image models your key can use.
4. Press **Generate**. The first time, EDGEmat asks for your key and keeps it in VS Code's secret storage. A notification shows while it works, with **Cancel**; a take usually comes back within a minute.

**The words sent** shows exactly what goes to the service: your words inside a short request for a seamless texture, in flat light, with no text or logos. You can edit it; **Back to the standard words** undoes that.

### From an image file

**From an image file** › **Choose an image...**: a photo or texture of your own (PNG, JPG, TGA, DDS, BMP or TIFF). No service, no key, no cost. Use images you have the right to use in a mod.

## 2. Takes

Each Generate or image adds a **take**. Generate as many as you like and click between them. EDGEmat keeps the last 20 while the page is open.

## 3. The material

The take you pick shows **tiled 3 × 3, already made seamless**, so you can see seams and repeats before you use it.

| Setting | What it does |
|---|---|
| Name | The material's name, also used for its files: "worn leather" becomes `worn_leather` |
| Repeat | How many times the image repeats across the garment or object, 1 to 32 (default 4). More is finer |
| Bumps | Flat, Light, Moderate or Strong. Made from the image's light and dark |
| Shine | Matte, Satin or Glossy. Light parts of the image shine a little more |
| Metal | Tick for a metal |

Press **Add to Project**. EDGEmat writes the material into REDcode's open project (or asks you for one), puts it where it goes, and says what it did, with **Pack and Try** and **Show Files**.

### On a garment, the garment keeps its folds

A garment's own material carries its folds, seams and wrinkles in a bump map. When a new material goes on a garment, EDGEmat keeps that bump map and bakes the repeat into a larger color texture. The pants keep their wrinkles at their real size, and the new material's pattern repeats over them. (Repeating the whole material instead would also repeat the folds, which shrinks them.) On an object, the material repeats as a whole.

The page then lists each mesh with "repeat in the texture, garment folds kept".

## What it writes

In your project, under `source\archive\edgemat\materials\<name>\`:

| File | What |
|---|---|
| `<name>_d01.xbm`, `_n01.xbm`, `_r01.xbm` | The color, bumps and shine textures |
| `<name>.mi` | The material, for objects and later use |
| `<name>_x<repeat>_...` | On a garment: the larger color and shine textures with the repeat baked in, and a material that keeps the garment's own bumps |

The garment's meshes are copied into the project and pointed at the new material. Beside it, in `source\raw\edgemat\materials\<name>\`, EDGEmat keeps the image and `<name>.edgemat.json`: how it was made (the service, model and words, or the file).

Then pack and install the project to see it in the game: [Your mod in the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html).

## Good to know

- **It replaces a whole material.** On a garment, it covers every part that material paints. To change just one layer of a layered material, use the [setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html).
- **Seams at panel lines are normal.** A garment's texture is cut into pieces, like a sewing pattern. The pattern breaks where two pieces meet, which usually reads as a seam or stitching.
- **Text comes out mirrored on some parts.** Part of a garment can be mirrored in its texture, so the standard words ask for no text or logos.
- **Your key** stays in VS Code's secret storage on your PC. **Set Image Service Key...** changes it and **Clear Image Service Key...** removes it (command palette, `Ctrl+Shift+P`).
- **Colors** come from the image as it is: a warm photo makes a warm material.

## For assistants

`mat_generate` (from words), `mat_from_image` (from a file) and `mat_apply` (an existing material on mesh materials) do the same for an assistant: "make a dark green snakeskin material and put it on the Light Azure slim-fits". See [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html).
