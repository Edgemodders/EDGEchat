<!-- Copied from EDGEweb's docs/wiki/edgedeck/redcode.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/redcode.html (reviewed 2026-10-24) -->

# EDGEdeck and REDcode

If you make mods in [REDcode](https://edgemodders.ai/wiki/redcode/) or WolvenKit, EDGEdeck is how you get them into the game alongside everything else, and how you borrow from mods you already have.

## Test your own mod

**Add from REDcode project** (in the Mods view's `...` menu) takes a project's packed output as a mod.

1. Open your project's folder in VS Code. It contains a `.cpmodproj` file; WolvenKit projects work too.
2. Pack the project, with REDcode's **Pack** or with WolvenKit.
3. Choose **Add from REDcode project** and pick the project. It appears in your list like any mod.
4. Turn it on and deploy.

The mod **follows the project**. Each time you pack again, EDGEdeck refreshes the library copy, and the next deploy picks up the change. It's placed with your other mods, so conflicts with them show up the same way.

- **A mod of the same name already there?** If the library already has a mod of that name, from another project folder or a download, EDGEdeck asks once: **Use this project** (the existing mod follows the new folder from now on) or **Keep both** (the project becomes another version of that mod, `dev 2`, switched on in its place; **Switch version...** goes back).
- **Your project lost to another mod?** When another mod wins files over your project, the deploy message says "The game still has X for N files, not the project Y", with **Let Y win**.

(Screenshot on the wiki, "A project as a mod": A REDcode project's packed output listed as a mod in EDGEdeck, with the status showing it was rebuilt and is waiting for a deploy.)

## Copy files from a mod into your project

When a REDcode project is open, you can copy files from an installed mod into it, to learn from it or build on it.

1. Right-click a mod, one of its folders or a single file in the Mods view.
2. Choose **Add to REDcode project**.

| File type | What happens |
|---|---|
| Loose files: scripts, CET Lua, TweakXL YAML, ArchiveXL files, configs | Copied into the project's `source/resources` at the same place they deploy, so your packed mod carries them to the same place in the game |
| A file the project already has, with different content | Left alone, unless you choose **Replace** |
| `.archive` files | EDGEdeck lists the resources inside and asks for all of them or a pick. REDcode then extracts them into the project's `source/archive` at their game paths. Resources the project already has are kept unless you choose **Replace**. Needs REDcode 0.6.1 and REDbridge 0.7.1 or newer; without them, archives are skipped and EDGEdeck says why |

Without a project open, EDGEdeck says so and offers REDcode's **New Project**.

**An archive that isn't in your library**, such as one a contributor sent you, goes in the same way without installing it anywhere: right-click the `.archive` file in VS Code's Explorer and choose **Add an archive to the REDcode project...**, or run that command and pick the file.

> **Respect the author.** Another modder's files are theirs. Check the mod's permissions on its Nexus page before you publish anything that includes them.

## Installing from REDcode

Packing, installing and running the game also work from inside REDcode: its **Install** goes through EDGEdeck when EDGEdeck is installed, so EDGEdeck stays the one tool that writes to the game folder. Install deploys only the project's mod; other mods' changes keep waiting for your next Deploy (see [Deploying one mod](https://edgemodders.ai/wiki/edgedeck/deploying.html#deploying-one-mod)). REDcode is a separate extension: search the Extensions view for **REDcode for Cyberpunk 2077** by Edgemodders (its id is `edgemodders.redcode-cyberpunk`). See [REDcode](https://edgemodders.ai/wiki/redcode/). REDnode packages are a EDGEdeck mod kind of their own since 0.20 (see [Adding mods](https://edgemodders.ai/wiki/edgedeck/adding-mods.html)).
