<!-- Copied from EDGEweb's docs/wiki/rednode/ui-tools-export.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/ui-tools-export.html (reviewed 2026-11-13) -->

# UI Workbench: Export

**Export** turns a project into a mod anyone with REDnode can install. It writes a zip laid out like the game folder, so players add it to Vortex or EDGEdeck, or extract it into the game, like any other mod.

> **Needs the admin permission**, as Projects and Edit do. See [The admin permission](https://edgemodders.ai/wiki/rednode/ui-tools.html#the-admin-permission).

## Export a project

Press **Export** in either place:

| Where | |
|---|---|
| The **Projects** tab | On the project's row |
| The **Edit** tab | In the bar, beside Run and Stop. Unsaved changes are saved first |

The status line says where the zip went, how many files and how big, and that the path is on your clipboard:

`Exported My Panel: C:\Users\...\Documents\REDnode\UI exports\my-panel-0.1.0.zip (4 files, 3 KB). The path is copied.` (the size is an example)

Paste the path into Explorer's address bar to open the folder. Point at the status line if it's cut short: its tooltip shows the whole path.

## What's in the zip

| | |
|---|---|
| Its name | `<id>-<version>.zip`, such as `my-panel-0.1.0.zip`. Exporting the same version again writes over it |
| Its folder | `Documents\REDnode\UI exports`, beside your projects |
| Its layout | `red4ext\plugins\REDnode\apps\<id>\`, as in the game folder |
| Inside | Every file of the project (`rednode-app.json`, `panel.ink.html`, `mod.mjs`, and any you added), leaving out dot folders and `node_modules` |
| `README.txt` | Beside the project's files: the mod's name, version and description, what it needs, and how to install it |
| What it needs | Written into the zip's copy of `rednode-app.json`: Codeware 1.16 or later, as every project says, and a REDnode new enough for the template's live slider, when your project names no REDnode version. The line reads `"rednode": ">=0.55.2"`, a development build's number: every public release from 0.56.1 on passes it. Your project's own file is left as it is |

To export a new version, raise `version` in the project's `rednode-app.json` (in its folder, with any text editor), then export again: the new zip has the new number and the old one stays.

(Screenshot on the wiki, "An exported zip": Windows Explorer open on Documents\REDnode\UI exports with my-panel-0.1.0.zip, and the zip opened to show red4ext\plugins\REDnode\apps\my-panel with its files and README.txt.)

## How a player installs it

The same way as any REDnode package. They need REDnode and Codeware first.

1. Close the game.
2. Add the zip to Vortex or [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/adding-mods.html) and deploy, or extract it into the Cyberpunk 2077 folder (the one that holds `bin` and `red4ext`). It lands in `red4ext\plugins\REDnode\apps\<id>`.
3. Start the game, press **F10**, open the **Mod Manager**, find the mod by its name and switch it on.

It runs as a mod of its own: the Workbench doesn't need to be installed. This passed in game: an exported template project, extracted into the game folder, started as its own mod with its controls window and HUD panel, and the slider drove the panel.

### Share it

Upload the zip to Nexus Mods or anywhere else. Before you do:

| Do | Why |
|---|---|
| Test the zip as a player first: see [the next section](https://edgemodders.ai/wiki/rednode/ui-tools-export.html#install-it-on-your-own-pc) | You see what players will see |
| On the mod's page, list **REDnode** (name the version you tested with) and **Codeware** as requirements, and say it is for game version 2.5 | Players need both first |
| Say what the panel shows, and that its controls are in a window that opens with **F10** | A player who sees only a HUD panel won't guess there is a controls window |

See also [Sharing your package](https://edgemodders.ai/wiki/rednode/making-mods.html#sharing-your-package).

## Install it on your own PC

Your projects folder is a [development folder](https://edgemodders.ai/wiki/rednode/settings.html#development-folders), and a development copy **wins** over an installed one with the same id: REDnode runs the project from your Documents folder and hides the installed copy, with a **DEV** tag in the Mod Manager.

So to test your own export as a player would, the project has to step aside first. Nothing is lost either way:

1. Move the project's folder out of `UI projects` with Explorer (to your Desktop, say). Or press **Delete** in **Projects**: that only moves it to `.trash`. The Workbench's **Rename** is not enough: it changes the name, and the id stays.
2. Quit the game, install the zip, and start the game again.
3. In the Mod Manager, the mod shows with **no DEV tag**. Switch it on.

To go back to working on it, move the folder back into `UI projects`, or [bring it back from `.trash`](https://edgemodders.ai/wiki/rednode/ui-tools-projects.html#bring-a-deleted-project-back). You can leave the exported copy installed: while the project's folder is in `UI projects`, REDnode runs the project and ignores the installed copy.

## Good to know

| | |
|---|---|
| An exported mod is a normal package | Players allow its permissions, pin it and switch it on in the Mod Manager like any other |
| Interactive panels | Native panels can't take clicks yet. Put controls in an overlay window, as the template does |
| The project's id | Comes from the project's first name and never changes on Rename. The id is the mod's folder name, and how REDnode tells your mod from every other, so pick the first name with care if you plan to share it |
