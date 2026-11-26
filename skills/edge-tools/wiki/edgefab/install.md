<!-- Copied from EDGEweb's docs/wiki/edgefab/install.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgefab/install.html (reviewed 2026-11-22) -->

# Install and set up

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgefab/install.html#what-you-need) | |
| [Install](https://edgemodders.ai/wiki/edgefab/install.html#install) | From the editor, or from a file |
| [The first start](https://edgemodders.ai/wiki/edgefab/install.html#the-first-start) | What you should see |
| [Your keys](https://edgemodders.ai/wiki/edgefab/install.html#your-keys) | Only for making things from words |
| [Your Tripo plan](https://edgemodders.ai/wiki/edgefab/install.html#your-tripo-plan) | Paid or free, and why it matters |
| [Updating and removing](https://edgemodders.ai/wiki/edgefab/install.html#updating-and-removing) | |

## What you need

| Need | For | Notes |
|---|---|---|
| Windows 10 or 11, 64-bit | Everything | |
| [VS Code](https://code.visualstudio.com/) 1.70 or later, VSCodium, or the [EDGEkit app](https://edgemodders.ai/wiki/edgekit/) | EDGEfab runs inside the editor | |
| [REDcode](https://edgemodders.ai/wiki/redcode/install.html) | Add to Project, packing the mod, the 3D view | It brings [REDbridge](https://edgemodders.ai/wiki/redbridge/), which writes the game's files. EDGEfab uses REDcode's game folder, so there is nothing more to set up |
| Cyberpunk 2077, version 2.5 | Add to Project reads one game file as a starting point | |
| A [Tripo](https://platform.tripo3d.ai/) API key | 3D models made from words | Your own, with credits. Not needed for a model you bring yourself |
| An [OpenAI](https://platform.openai.com/) API key | The picture drawn first | Optional, your own |
| [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) on [REDnode](https://edgemodders.ai/wiki/rednode/) | Placing the prop in the game | Optional for making props, needed to place them |

## Install

**From the editor.** Open the Extensions view (`Ctrl+Shift+X`), search for **EDGEfab** and press **Install**. It updates itself from then on.

**From a file.** Download `edgefab-<version>.vsix` from [GitHub](https://github.com/Edgemodders/EDGEfab/releases) or [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/38605). In the Extensions view, press **`...`** at the top, choose **Install from VSIX...** and pick the file.

> EDGEfab is a VS Code extension, not a game mod. Don't install it with Vortex or put it in the game folder.

## The first start

Click the **EF** icon in the activity bar, the strip of icons at the far left. Two views open in the side bar:

| View | Shows at first |
|---|---|
| **Desk** | Two buttons, **Import a GLB...** and **Generate from Words...**, with a line on what EDGEfab does |
| **Library** | **Set Up the Library...**, if no EDGE tool has set the Library up on this PC yet. The Library is optional |

(Screenshot on the wiki, "EDGEfab's views at the first start": The EDGEfab side bar at the first start: an empty Desk with the Import a GLB and Generate from Words buttons, and the Library view below it.)

Nothing is asked until you make something. To check the install without a key, right-click any `.glb` file in VS Code's Explorer and choose **Make a Prop (EDGEfab)**: it appears on the Desk in under a minute.

## Your keys

Keys are needed only for making things **from words**. Since EDGEfab 0.2.0 they live in **REDcode's Keys** (REDcode 0.10.16 or later), the one store every EDGE tool shares, so a key set once there serves EDGEfab, EDGEmat and the rest. EDGEfab asks for a key the first time it needs one, in REDcode's password box. You can also set them ahead of time in REDcode's [Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view), or from the command palette (`Ctrl+Shift+P`):

| Command | Key | Where to get it |
|---|---|---|
| **EDGEfab: Set Tripo Key** | Starts with `tsk_` | [platform.tripo3d.ai](https://platform.tripo3d.ai/), under API keys |
| **EDGEfab: Set OpenAI Key** | Starts with `sk-` | [platform.openai.com](https://platform.openai.com/api-keys) |

| Good to know | |
|---|---|
| Where a key is kept | In REDcode's Keys, encrypted for your Windows user. It is sent only to the service it belongs to |
| **Allow** or **Don't Allow** | The first time EDGEfab needs a key, REDcode asks whether EDGEfab may read it. After **Don't Allow**, EDGEfab says so and opens no key box: run **Forget Tool Permissions for Keys** in REDcode's Keys view, then try again and choose **Allow** |
| A key from before | A key you set in EDGEfab 0.1.0 moves to REDcode's Keys by itself, once, and EDGEfab says so. If REDcode's Keys already has one, that one is kept |
| Removing one | **EDGEfab: Clear Tripo Key** or **Clear OpenAI Key** points you to REDcode's Keys view, where **Remove Key** removes it for every tool |
| An older REDcode | Without Keys, EDGEfab keeps its keys in VS Code's secret storage, as in 0.1.0 |
| Environment variables | If `TRIPO_API_KEY` or `OPENAI_API_KEY` is set in Windows, EDGEfab uses that one first |
| Assistants | EDGEfab's MCP server reads the same keys from REDcode's Keys, so Claude Code needs none in its settings. See [Assistants: keys](https://edgemodders.ai/wiki/edgefab/assistants.html#keys-for-the-server) |

## Your Tripo plan

The first time you make a model, EDGEfab asks **which Tripo plan your key is on**:

| Answer | Means |
|---|---|
| **Paid plan** (Pro, Advanced, Premium, or bought API credits) | The models are yours to use, change and release in mods |
| **Free plan** | Tripo keeps all rights to the models, so they can't go in a released mod. EDGEfab marks them so |

The answer is recorded with every model you make, and it travels with the prop into your project. Change it any time with **EDGEfab: Set Tripo Plan (Paid or Free)**. The rule is from [Tripo's terms](https://www.tripo3d.ai/terms), section 5.2: read them yourself before you release a mod.

## Updating and removing

| To | Do |
|---|---|
| Update | Nothing: the editor updates extensions on its own. After a file install, install the newer `.vsix` over it |
| Remove EDGEfab | Extensions view, EDGEfab, **Uninstall** |
| Remove its data too | Delete `%LOCALAPPDATA%\EDGEfab`. That holds the Desk, so move anything you want to keep into a project or the Library first |

Uninstalling leaves your projects and the EDGE Library alone.

Next: [Tutorial: your first prop](https://edgemodders.ai/wiki/edgefab/first-prop.html).
