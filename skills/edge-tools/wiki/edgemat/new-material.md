<!-- Copied from EDGEweb's docs/wiki/edgemat/new-material.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/new-material.html (reviewed 2026-11-22) -->

# New Material

The setup editor changes the layers a garment already has. **New Material** makes something the game doesn't have. Describe it in words ("worn brown leather with fine creases") and an AI image service draws it, or pick a photo of your own. EDGEmat turns the picture into a game material: seamless, with bumps and shine. It writes the material into your mod project and can put it straight onto part of a garment.

Both routes were seen in the game: a worn leather and a dark green snakeskin on a pair of slim-fit pants, for both body types. The two tutorials follow those tests step by step: [worn leather](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html) in the editor, [snakeskin](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html) by asking Claude.

| On this page | |
|---|---|
| [Opening it](https://edgemodders.ai/wiki/edgemat/new-material.html#opening-it) | From a garment's material, or from anywhere |
| [1. The image](https://edgemodders.ai/wiki/edgemat/new-material.html#1-the-image) | From words, with a key, or from an image file, with none |
| [2. Takes](https://edgemodders.ai/wiki/edgemat/new-material.html#2-takes) | Try several, pick one |
| [3. The material](https://edgemodders.ai/wiki/edgemat/new-material.html#3-the-material) | Name, repeat, bumps, shine, and Add to Project |
| [Good to know](https://edgemodders.ai/wiki/edgemat/new-material.html#good-to-know) | What it replaces, seams, mirrored text |
| [For modders: the files](https://edgemodders.ai/wiki/edgemat/new-material.html#for-modders-the-files) | What is written where |

(Screenshot on the wiki, "The New Material page": The New Material page for the slim-fits' leather material: 'Where it goes' naming both meshes, the words 'worn brown leather with fine creases', two takes, and the chosen take tiled 3 x 3 under '3. The material' with Name, Repeat, Bumps, Shine and Add to Project.)

## Opening it

| From | How | Where the material goes |
|---|---|---|
| A garment's material | In [Find](https://edgemodders.ai/wiki/edgemat/find.html), unfold a garment to its mesh, hover a material and press the **sparkle** at its right (or right-click › **New Material Here...**). The same button is on a material on the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html) | From Find: onto that material, on the garment's mesh for both body types. From the Desk: onto that line's mesh only |
| Anywhere | The **sparkle** (**New Material...**) in the Game Materials title bar | Into your project only. It isn't put on anything |

The top of the page, **Where it goes**, says which meshes and materials it will go on.

Start from a garment's material if you want to wear the result. A material made from "anywhere" is just files in your project. To put it on a garment afterwards, ask an assistant (the tool is `mat_apply`: see [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html)), or start again from the garment in Find. **From an image file** can take the picture EDGEmat kept in the project's `source\raw\edgemat\materials` folder, so you don't pay for a new one.

## 1. The image

### From words (AI)

EDGEmat doesn't draw the picture itself. It asks an image service on the internet, on your account. For that you need an **API key**: a long password the service gives you, so that programs can use the service in your name. You pay the service for each picture, a few cents at the time of writing. The services set the prices and the limits, and a free key may not be allowed to make pictures at all.

EDGEmat never comes with a key, and nothing is sent anywhere until you press **Generate** or **List models**.

| Service | Where to get a key | Good to know |
|---|---|---|
| Google Gemini ("Nano Banana") | [aistudio.google.com](https://aistudio.google.com) › Get API key | Google marks its pictures with SynthID, an invisible watermark that says the picture was made by AI |
| OpenAI (GPT Image) | [platform.openai.com](https://platform.openai.com) › API keys | OpenAI may ask you to verify your organization before GPT Image works. It has a **quality** choice (low, medium, high). Higher costs more |

If you have neither, either will do.

1. **Describe the material** in the box: what it is, its color, its wear. "Dark green snakeskin", "brushed steel with fine scratches", "faded red denim".
2. **Detail**: how big the pattern's features are. Fine for small grain such as leather pores, coarse for big shapes such as scales.
3. **Pick the service.** Leave the model menu on "Newest" unless Generate fails. **List models** asks the service which image models your key can use.
4. Press **Generate**. The first time, REDcode asks whether EDGEmat may use your key, and for the key itself if you have not set it yet. It keeps it in its **Keys** view, shared by every EDGE tool, so you set each key once.

| What you should see | |
|---|---|
| While it works | A notification with a **Cancel** button. A picture usually comes back within a minute |
| When it is done | **Take 1** under **2. Takes**, and the picture tiled 3 × 3 under **3. The material**. The button now reads **Generate again** |

**The words sent** shows exactly what goes to the service: your words inside a short request for a seamless texture, in flat light, with no text or logos. You can edit it. **Back to the standard words** undoes that.

### From an image file

**From an image file** › **Choose an image...**: a photo or texture of your own (PNG, JPG, TGA, DDS, BMP or TIFF). No service, no key, no cost. Use images you have the right to use in a mod.

## 2. Takes

Each time you press Generate or choose an image, the result is added as a **take**: one attempt. Generate as many as you like and click between them. EDGEmat keeps the last 20 while the page is open.

## 3. The material

The take you pick shows **tiled 3 × 3, already made seamless**, so you can see seams and repeats before you use it.

| Setting | What it does |
|---|---|
| Name | The material's name, also used for its files: "worn leather" becomes `worn_leather` |
| Repeat | How many times the picture repeats across the garment or object, 1 to 32 (default 4). A higher number makes the pattern smaller |
| Bumps | Flat, Light, Moderate or Strong. Made from the picture's light and dark: light parts come out raised, dark parts sunk in |
| Shine | Matte, Satin or Glossy. Light parts of the picture shine a little more |
| Metal | Tick for a metal |

Press **Add to Project**. EDGEmat writes the material into REDcode's open project, or asks you for one, and puts it where it goes.

| What you should see | |
|---|---|
| A message | "Saved ... and put on 2 mesh materials.", with **Pack and Play** and **Reveal in File Explorer** (called Show Files before 0.3.4) |
| On the page | Each mesh listed, with "repeat in the texture, garment folds kept" |

**Pack and Play** is REDcode's button. With the game closed it packs and installs the project, and you start the game afterwards. With the game running under REDnode it swaps the mod in. See [Your mod in the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html).

### On a garment, the garment keeps its folds

A garment's own material carries its folds, seams and wrinkles in a bump map. When a new material goes on a garment, EDGEmat keeps those folds at their real size, and builds larger pictures with your pattern already repeated across them:

| Map | On a garment |
|---|---|
| Color and shine | Your picture, repeated across the garment as many times as **Repeat** says |
| Bumps | Your material's bumps, repeated the same way, laid over the garment's own folds in one bump map. With **Bumps** Flat, the garment keeps its folds alone |

So the pants keep their wrinkles, and the new pattern, with its bumps, repeats over them. (Repeating the whole material instead would also repeat the folds, which shrinks them.) On an object, the material repeats as a whole.

**Fixed in 0.3.3.** Before EDGEmat 0.3.3, **Bumps** did nothing on a garment: only its folds showed. And bumps from words or a photo came out backwards, as dents where they should be raised, on objects too. A material made with an older EDGEmat keeps those faults: make it again to fix it.

**To see fine bumps in the game**, look closely in photo mode with **Depth of Field** off (on its **Camera** tab). Its blur hides small details. Under light from above, a raised bump is lit along its top and has a shadow along its bottom.

## Good to know

- **It replaces a whole material.** On a garment, it covers every part that material paints. To change just one layer of a layered material, use the [setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html).
- **Seams at panel lines are normal.** A garment's texture is cut into pieces, like a sewing pattern. The pattern breaks where two pieces meet, which usually reads as a seam or stitching.
- **Text comes out mirrored on some parts.** Part of a garment can be mirrored in its texture, so the standard words ask for no text or logos.
- **Your key** is kept in [REDcode](https://edgemodders.ai/wiki/redcode/)'s **Keys** view on your PC, for every EDGE tool (since EDGEmat 0.3.4, with REDcode 0.10.16 or later; a key EDGEmat kept itself moves there the first time). **Set Image Service Key...** (command palette, `Ctrl+Shift+P`) opens REDcode's box; to remove a key, use **Remove Key** in REDcode's Keys view. With an older REDcode, EDGEmat keeps its key in VS Code's secret storage, as before. A `GEMINI_API_KEY` or `OPENAI_API_KEY` environment variable wins.
- **If you pressed Don't Allow** when REDcode asked, EDGEmat says so instead of asking for the key. To allow it: REDcode's Keys view › **Forget Tool Permissions for Keys**, then Generate again and press **Allow**.
- **Colors** come from the picture as it is: a warm photo makes a warm material.
- **If the service refuses or doesn't answer,** see [Troubleshooting](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#new-material).

## For modders: the files

In your project, under `source\archive\edgemat\materials\<name>\`:

| File | What |
|---|---|
| `<name>_d01.xbm`, `_n01.xbm`, `_r01.xbm` | The color, bumps and shine textures |
| `<name>.mi` | The material, for objects and later use |
| `<name>_x<repeat>_...` | On a garment: the larger color, shine and bump textures with the repeat built in (the bump texture also holds the garment's own folds), and the material that uses them |

The garment's meshes are copied into the project and changed to use the new material. Beside it, in `source\raw\edgemat\materials\<name>\`, EDGEmat keeps the picture and `<name>.edgemat.json`: how it was made (the service, model and words, or the file).

## Ask an assistant instead

An assistant connected to EDGEmat can do all of this: "make a dark green snakeskin material and put it on the Light Azure slim-fits". The tools are `mat_generate` (from words), `mat_from_image` (from a file) and `mat_apply` (an existing material onto a garment). See [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html) and [Tutorial: snakeskin](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html).
