<!-- Copied from EDGEweb's docs/wiki/edgedeck/redcode.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/redcode.html (reviewed 2026-11-24) -->

# EDGEdeck and REDcode

This page is for people making their own mods. If you only install mods, you can skip it.

[REDcode](https://edgemodders.ai/wiki/redcode/) is EDGE's extension for making mods. If you make mods in REDcode or WolvenKit, EDGEdeck is how you get them into the game alongside everything else, and how you borrow from mods you already have. REDcode is a separate extension: the [EDGEkit app](https://edgemodders.ai/wiki/edgekit/) has it built in, and in VS Code you [install it](https://edgemodders.ai/wiki/redcode/install.html) from the Extensions view.

| On this page | |
|---|---|
| [Test your own mod](https://edgemodders.ai/wiki/edgedeck/redcode.html#test-your-own-mod) | A project as a mod in your list |
| [Installing from REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html#installing-from-redcode) | The same, from REDcode's side |
| [Copy files from a mod into your project](https://edgemodders.ai/wiki/edgedeck/redcode.html#copy-files-from-a-mod-into-your-project) | Learn from, or build on, an installed mod |

## Test your own mod

A project is a folder with a `.cpmodproj` file in it. **Packing** a project builds its finished mod files. **Add from REDcode project** takes those packed files as a mod.

1. Open your project's folder in the editor. WolvenKit projects work too.
2. Pack the project, with REDcode's **Pack** or with WolvenKit.
3. Choose **Add from REDcode project** in the Mods view's **`...`** menu and pick the project.
4. Close the game and deploy.

**What you should see:** the project in your list like any mod, switched on, with the version `dev`.

The mod **follows the project**. Each time you pack again, EDGEdeck refreshes its copy in the library, the mod's status turns to `changed, deploy again`, and the next deploy puts the new files in the game. Until then the game keeps the files you deployed. (EDGEdeck 0.34.0 and older, with the library and the game on one drive, changed the game's copy of a file at once, before any deploy; update to 0.34.1 or later.) It sits in the order with your other mods, so conflicts with them show up the same way.

(Screenshot on the wiki, "A project as a mod": A REDcode project's packed output listed as a mod in EDGEdeck, with the status showing it was rebuilt and is waiting for a deploy.)

| If | What happens |
|---|---|
| The library already has a mod of that name, from another project folder or a download | EDGEdeck asks once. **Use this project**: the existing mod follows your project folder from now on. **Keep both**: the project is added as a second version of that mod, labelled `dev 2`, and switched on instead of the first. Use **Switch version...** to go back |
| Another mod wins files over your project | The deploy message says so, for example "The game still has Body mod for 3 files, not the project Cool Jacket", and offers **Let Cool Jacket win** |

## Installing from REDcode

Packing, installing and running the game also work from inside REDcode. Its **Install** goes through EDGEdeck when EDGEdeck is installed, so EDGEdeck stays the one tool that writes to the game folder.

Install deploys only the project's mod. Other mods' changes keep waiting for your next full Deploy. See [Deploying one mod](https://edgemodders.ai/wiki/edgedeck/deploying.html#deploying-one-mod), and REDcode's [Pack and install](https://edgemodders.ai/wiki/redcode/pack-install.html).

## Copy files from a mod into your project

When a REDcode project is open, you can copy files from an installed mod into it, to learn from it or build on it.

1. In the Mods view, right-click a mod, one of its folders or a single file.
2. Choose **Add to REDcode project**.

| File type | What happens |
|---|---|
| Loose files: scripts, CET Lua, TweakXL YAML, ArchiveXL files, configs | Copied into the project's `source/resources`, at the same place they go in the game, so your packed mod carries them to that place |
| A file the project already has, with different content | Left alone, unless you choose **Replace** |
| `.archive` files | EDGEdeck lists what is packed inside and asks for all of it or a pick. REDcode then extracts those files into the project's `source/archive`. Files the project already has are kept unless you choose **Replace**. This needs REDcode and REDbridge installed; without them, archives are skipped and EDGEdeck says why |

The menu item shows only while a project is open. If the project has been closed since, EDGEdeck says "No REDcode project is open" and offers REDcode's **New Project**.

**An archive that isn't in your library**, such as one a contributor sent you, goes in the same way without installing it anywhere: right-click the `.archive` file in the editor's Explorer and choose **Add to REDcode project**, or run **EDGEdeck: Add to REDcode project** from the command palette and pick the file.

> **Respect the author.** Another modder's files are theirs. Check the mod's permissions on its Nexus page before you publish anything that includes them.
