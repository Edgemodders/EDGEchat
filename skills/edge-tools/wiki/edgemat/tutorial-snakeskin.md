<!-- Copied from EDGEweb's docs/wiki/edgemat/tutorial-snakeskin.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html (reviewed 2026-11-22) -->

# Tutorial: snakeskin by asking Claude

In this tutorial you don't press a button in EDGEmat's pages at all. You ask [Claude Code](https://claude.com/claude-code), Anthropic's AI assistant, for dark green snakeskin pants in one sentence, and it uses EDGEmat's tools to find the garment, generate the material and put it on. These are the steps EDGEmat was tested with. The garment is the **Light Azure composite-lined slim-fits**.

It costs what Claude Code costs you (a Claude plan or API credit), plus a few cents for the picture, on your own image service key.

(Screenshot on the wiki, "The result: snakeskin slim-fits, front": V in the dark green snakeskin slim-fits, from the front: green scales with black edges over both legs, the pants' own folds kept.)

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html#what-you-need) | Claude Code, a project, a key, REDnode |
| [1. Connect Claude Code, with your key](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html#1-connect-claude-code-with-your-key) | Once |
| [2. Ask](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html#2-ask) | One sentence, and what Claude does with it |
| [3. Into the game](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html#3-into-the-game) | Pack, install, wear |
| [What to look for](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html#what-to-look-for), [Try next](https://edgemodders.ai/wiki/edgemat/tutorial-snakeskin.html#try-next) | |

## What you need

| | |
|---|---|
| Claude Code, installed and signed in | Get it from [claude.com/claude-code](https://claude.com/claude-code). How it reaches the EDGE tools: [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html) |
| EDGEmat and [REDcode](https://edgemodders.ai/wiki/redcode/) in VS Code | [Install and set up](https://edgemodders.ai/wiki/edgemat/install.html) |
| An image service key | Google Gemini or OpenAI, your own. [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html#from-words-ai) says what a key is and where to get one |
| A project, the folder your mod lives in | Run **REDcode: New Project** and name it, for example `my_materials`. Note the folder it is in |
| [REDnode](https://edgemodders.ai/wiki/rednode/install.html) 0.49.5 or later, installed in the game | Its Console puts the pants on V |

## 1. Connect Claude Code, with your key

1. In VS Code, run **EDGEmat: Set Image Service Key...** from the command palette (`Ctrl+Shift+P`) and paste your Gemini or OpenAI key, if you haven't yet. With REDcode 0.10.16 or later it goes into REDcode's **Keys** view, shared by every EDGE tool.
2. In EDGEmat's **Game Materials** view, press **`...`** at its top right and choose **Connect an Assistant (MCP)...** › **Connect Claude Code**.
3. When it asks whether to give the assistant your key too, choose **Yes**. Claude Code keeps the key in its own settings file, in plain text.
4. Start a **new** Claude Code session, so it sees EDGEmat.

**You should see** the message "EDGEmat is connected to Claude Code." after step 3. More on this: [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html#connect-claude-code).

## 2. Ask

In the new session, ask, with your own project's folder:

> Using EDGEmat, make a dark green snakeskin material and put it on the Light Azure composite-lined slim-fits, both bodies, in my project `C:\Mods\my_materials`

Claude then works through EDGEmat's tools. You can follow along in its replies:

| Step | Tool | What happens |
|---|---|---|
| Find the pants | `mat_find` | The item is `Items.Pants_01_basic_02`. Both bodies' meshes, `l1_012_pwa_...` and `l1_012_pma_...`, use the material `flames_blue_pink` for this look |
| Make the material | `mat_generate` | Your words go to the image service, with EDGEmat's request for a seamless texture with no text. The picture is made seamless, gets bumps and shine, and is written into your project |
| Put it on | `mat_generate`, in the same call | Both meshes are copied into the project and changed to use the new material. The pattern is repeated inside one large picture, so the pants [keep their own folds](https://edgemodders.ai/wiki/edgemat/new-material.html#on-a-garment-the-garment-keeps-its-folds) |

**You should see** Claude end by naming the files it wrote and the next step: pack and install.

(Screenshot on the wiki, "Claude Code making the snakeskin": A Claude Code session: the request, then Claude calling mat_find and mat_generate, and its reply listing the files written into the project for both meshes.)

You can name the settings too: "repeat 6, glossy, strong bumps". Or ask to see the picture first: "generate it but don't use it yet". Claude then makes only the picture, and uses it once you agree.

## 3. Into the game

1. With the game closed, in REDcode's Project view, press **Pack and Install**, the rocket.
2. Start the game and load a save.
3. Press **F10**, click the **REDNODE** tab, switch on **Console**, and type:

   ```js
   addItem("Items.Pants_01_basic_02")
   ```

4. Equip the pants, and look in photo mode: front, side and back.

(Screenshot on the wiki, "Snakeskin, side": V in the snakeskin slim-fits from the side: even scales down the leg, a sheen on the hip.)

(Screenshot on the wiki, "Snakeskin, back": V in the snakeskin slim-fits from the back: a wet-look sheen on the seat and thighs, the scales in relief, the pants' folds behind the knees.)

## What to look for

| Look at | You should see |
|---|---|
| Folds | The pants' own wrinkles, at their normal size |
| Scales | A believable size, even over both legs, with no obvious repeat |
| Shine and bumps | The scales stand out in relief, with a sheen where the light hits |
| Panel lines | The pattern breaks where the garment's pieces meet, such as the front of the thigh. That's normal |

If the pants look as they did before, see [If you don't see your change](https://edgemodders.ai/wiki/edgemat/in-the-game.html#3-if-you-dont-see-your-change).

## Try next

- Do both: the [worn leather tutorial](https://edgemodders.ai/wiki/edgemat/tutorial-worn-leather.html) uses the Comfy rocker slim-fits (`Items.Pants_01_basic_01`), which share these meshes but use another material, so both can be in one project.
- Recolor instead of replacing: "make the punk jeans dark green" changes the garment's own layers ([Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html#what-you-can-ask)).
- The same by chat for a recolor, with EDGEchat: [Recolor a jacket](https://edgemodders.ai/wiki/edgechat/recolor.html).
