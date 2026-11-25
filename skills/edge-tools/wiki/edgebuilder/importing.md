<!-- Copied from EDGEweb's docs/wiki/edgebuilder/importing.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/importing.html (reviewed 2026-11-23) -->

# Importing a model

The game's own models are a lot, but sometimes you want your own: a sign you modelled in Blender, a chair you bought, a prop an AI model maker made for you. **Import** turns such a model into a prop of the game, in the running game, without a restart. Then you drop it like any other.

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgebuilder/importing.html#what-you-need) | A project, a permission and a model |
| [Find your model](https://edgemodders.ai/wiki/edgebuilder/importing.html#find-your-model) | On the Library tab, or by its path |
| [Import it](https://edgemodders.ai/wiki/edgebuilder/importing.html#import-it) | Name, height, solid, and the wait |
| [After the import](https://edgemodders.ai/wiki/edgebuilder/importing.html#after-the-import) | Drop it, and where its files are |
| [Import it again](https://edgemodders.ai/wiki/edgebuilder/importing.html#import-it-again) | Change the model, and every copy changes |
| [When it doesn't work](https://edgemodders.ai/wiki/edgebuilder/importing.html#when-it-doesnt-work) | The messages you may see |

## What you need

| | |
|---|---|
| **A REDcode project, open in VS Code** | The prop's files go into it, so the prop becomes part of your mod. Without one, **Import** is greyed out. With projects open in several VS Code windows, the Import box has a **Project** row to choose one (0.13.2). See [REDcode](https://edgemodders.ai/wiki/redcode/) |
| **The Archives permission** | In REDnode's Mod Manager, EDGEbuilder, **Permissions**: switch **Allowed** on for the line "swapping archives in the game's mod folder while the game runs". It lets EDGEbuilder put the new prop into the running game. See [Install and set up](https://edgemodders.ai/wiki/edgebuilder/install.html#3-open-it-and-allow-its-permissions) |
| **A model** | A **GLB** file (a 3D model with its textures, in one file), or a prop already on [EDGEfab](https://edgemodders.ai/wiki/edgefab/)'s Desk |
| **A loaded save** | The prop goes into the world you are playing |

You don't need to install EDGEfab: the part of it that prepares models comes inside EDGEbuilder.

## Find your model

Open the **Library** tab. Below your scenes and bakes, the tree lists the models EDGEbuilder can import:

| In the tree | What it is | Tag |
|---|---|---|
| Your Library's folders | GLB files you keep in the [EDGE Library](https://edgemodders.ai/wiki/library.html), in their folders | `glb` |
| **<project>: source\raw** | GLB files in the open REDcode project's `source\raw` folder, where a project keeps models it hasn't turned into game files yet | `glb` |
| **EDGEfab's Desk** | Props you made or brought in with EDGEfab, already prepared | `prop`, "prepared" |

Click one to pick it. The Picked panel says what it is and where Import will put it.

A model somewhere else on your PC: type its full path in the box **Import a GLB from anywhere**, above the tree, and press **Pick**. A prop's `.prop.asset` folder works there too.

## Import it

The Picked panel shows the Import box:

| Field | What to put |
|---|---|
| **Name** | The prop's file name: lowercase, no spaces. Leave it empty to use the file's name (shown greyed in the box). The same name again replaces the prop: see [Import it again](https://edgemodders.ai/wiki/edgebuilder/importing.html#import-it-again) |
| **Height, m** | Only for a model whose file has no real size, such as an AI model maker's. Leave it empty to keep the size in the file. Blender models usually have a real size |
| **Solid**, **Solid, a box**, **Not solid** | Whether V, bullets and cars stop at it. **Solid** is right almost always. **Solid, a box** builds it as many of the game's own props are, with a separate box. **Not solid** only draws; V walks through it |

Press **Import**. The busy bar shows each step:

1. **Preparing** (a GLB only): its size, which way it faces, simpler versions for far away (levels of detail), and its textures.
2. **Adding the mesh** to the project.
3. **Making textures**, with a count. This is the long part: about two minutes for a model with large (4096 px) textures, a few seconds for a small one.
4. **Packing** the project into its mod, and **swapping** it into the game. Under a second.

**Stop** on the busy bar ends an Import within one texture. The project then holds part of the model; import it again to finish.

(Screenshot on the wiki, "Importing a model": The Library tab with a prop on EDGEfab's Desk picked, the Import box below with Name, Height and the three solid choices, and the busy bar making textures.)

## After the import

When it's done, EDGEbuilder opens the **Assets** tab with the new prop picked, and says it is in the game. Press **Drop where I look**, or use Drop at click, as for anything else ([Dropping](https://edgemodders.ai/wiki/edgebuilder/browsing.html#drop-it)).

From now on the prop is an asset of your project like any other:

- It is listed on the Assets tab under your project, so you can drop more copies.
- Your scenes keep it, and it comes back after a restart: its packed mod stays installed in the game's `archive\pc\mod` folder.
- A [bake](https://edgemodders.ai/wiki/edgebuilder/baking.html) of a scene with it works like any bake. Ship your project's mod and the prop goes with it.

The files are in your project: the entity (`.ent`), the mesh, its materials and textures, under `source\archive\<your mod>\props\<name>\`. [EDGEfab's Add to Project](https://edgemodders.ai/wiki/edgefab/add-to-project.html) explains each file.

## Import it again

Changed the model? Pick it again, give it the **same name**, and press **Import**. EDGEbuilder says it is replacing the earlier one, and every copy you already placed changes in place: you don't drop them again.

Each Import makes every texture again, so a second Import takes as long as the first.

## When it doesn't work

| You see | Why | Do |
|---|---|---|
| **Import** is greyed out, and "Open a REDcode project to import into" | No project is open | Open your project in VS Code. Then **Refresh** on the Bake tab, so EDGEbuilder asks REDcode again |
| "Not in the game yet" and "Allow Archives in REDnode's Mod Manager" | The prop is in your project and packed, but EDGEbuilder may not put it into the game | Allow Archives (see [What you need](https://edgemodders.ai/wiki/edgebuilder/importing.html#what-you-need)), then press **Drop**: it puts the prop in and drops it, with no second Import |
| "The world is not loaded; load a save" | No save was loaded when the Import finished | Load a save, then press **Drop** |
| It stopped, "the project holds part of the model" | You pressed **Stop** | Import it again with the same name |
| "Its file has no real size, so its height ... is a guess", or the prop is very large or very small | The file has no real size, as with most AI model makers' models | Import it again with the same name and a **Height** |

More in [Troubleshooting](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html).

## Try it

1. Open a REDcode project in VS Code, and load a save.
2. Put a GLB in the project's `source\raw` folder (or make a prop in EDGEfab).
3. On the Library tab, pick it under **<project>: source\raw**.
4. Name it `my_first_prop`, leave the rest, and press **Import**.
5. When the Assets tab opens, press **Drop where I look**. Walk V into it: it stops V.
