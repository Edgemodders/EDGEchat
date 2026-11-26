<!-- Copied from EDGEweb's docs/wiki/edgebuilder/install.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/install.html (reviewed 2026-11-19) -->

# Install and set up EDGEbuilder

Setting up takes four steps. If you already followed [Getting started](https://edgemodders.ai/wiki/getting-started.html), you have REDnode and EDGEdeck, and the first step is short.

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgebuilder/install.html#what-you-need) | The list, with versions |
| [1. Get the frameworks and REDbridge](https://edgemodders.ai/wiki/edgebuilder/install.html#1-get-the-frameworks-and-redbridge) | The things EDGEbuilder runs on |
| [2. Install EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/install.html#2-install-edgebuilder) | With EDGEdeck, and other ways |
| [3. Open it and allow its permissions](https://edgemodders.ai/wiki/edgebuilder/install.html#3-open-it-and-allow-its-permissions) | In the game |
| [4. Check the three pills](https://edgemodders.ai/wiki/edgebuilder/install.html#4-check-the-three-pills) | What ready looks like |
| [Where EDGEbuilder keeps things](https://edgemodders.ai/wiki/edgebuilder/install.html#where-edgebuilder-keeps-things) | Settings and scenes |
| [Updating](https://edgemodders.ai/wiki/edgebuilder/install.html#updating) and [Uninstalling](https://edgemodders.ai/wiki/edgebuilder/install.html#uninstalling) | |

## What you need

To place and arrange objects:

| You need | Why |
|---|---|
| Cyberpunk 2077 on PC, game version 2.5 | And a save to load: EDGEbuilder works in the world, not in the menus |
| RED4ext | The framework that loads REDnode and Codeware into the game |
| [REDnode](https://edgemodders.ai/wiki/rednode/install.html) 0.58.0 or later | Runs EDGEbuilder inside the game and draws its window |
| [Codeware](https://www.nexusmods.com/cyberpunk2077/mods/7780) 1.14 or later | REDnode needs it to place and move objects |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) 0.12.1 or later (0.16.0 or later to bake removed doors) | The helper program that reads the game's files. It builds EDGEbuilder's list of models, and writes your bakes |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) 0.20.0 or later | Installs EDGEbuilder. Vortex or copying by hand work too: see [Other ways to install](https://edgemodders.ai/wiki/edgebuilder/install.html#other-ways-to-install) |

To bake a scene into a mod, also:

| You need | Why |
|---|---|
| [REDcode](https://edgemodders.ai/wiki/redcode/) 0.10.5 or later, in VS Code | A bake goes into a REDcode project, and REDcode packs the project into a mod |
| [ArchiveXL](https://www.nexusmods.com/cyberpunk2077/mods/4198) | The framework the game reads a baked scene through. Anyone who plays your mod needs it too. The bakes were tested with ArchiveXL 1.28.6 |

You can skip the second table for now. Nothing in it is needed until you bake.

## 1. Get the frameworks and REDbridge

Do this with the game closed.

1. **REDnode.** If the game has no REDnode yet, follow [Install REDnode](https://edgemodders.ai/wiki/rednode/install.html).
2. **The frameworks.** In EDGEdeck, choose **Get the frameworks...** in the Mods view's **`...`** menu, press **OK**, then **Deploy**. That gets RED4ext, Codeware and ArchiveXL in one go, with three more that most mods need. See [Getting the frameworks](https://edgemodders.ai/wiki/edgedeck/frameworks.html#getting-the-frameworks).
3. **REDbridge.** In EDGEdeck, press **Get REDbridge** in the Set up group. It says what it will download, then fetches REDbridge and the Microsoft .NET runtime it needs. See [Getting REDbridge](https://edgemodders.ai/wiki/edgedeck/install.html#getting-redbridge).

**What you should see:** Codeware, ArchiveXL and RED4ext in EDGEdeck's Frameworks group, saying `deployed`, and a green dot with REDbridge's version in the footer of the EDGEdeck page.

No EDGEdeck? REDnode's Mod Manager can fetch REDbridge too: see [Install and update REDbridge](https://edgemodders.ai/wiki/redbridge/install.html). A copy that REDcode downloaded also works. You don't need a second one.

## 2. Install EDGEbuilder

Still with the game closed:

1. Download `EDGEbuilder-<version>.zip` from [EDGEbuilder's Nexus page](https://www.nexusmods.com/cyberpunk2077/mods/36627) (Manual Download) or the [releases page](https://github.com/Edgemodders/EDGEbuilder/releases). Take the newest.
2. In EDGEdeck, press **Add mod** and pick the zip. EDGEdeck recognises it as a REDnode add-on and knows where to put it. See [Adding mods](https://edgemodders.ai/wiki/edgedeck/adding-mods.html).
3. Make sure it's ticked, and press **Deploy**.

**What you should see:** EDGEbuilder in EDGEdeck's list with the kind chip **rednode**, saying `deployed`.

(Screenshot on the wiki, "EDGEbuilder in EDGEdeck": The EDGEdeck Mods view with EDGEbuilder added from its zip, its kind chip showing rednode, and the Deploy button counting the change.)

### Other ways to install

The zip is laid out like the game folder, so it also installs:

- **with Vortex:** press Mod Manager Download on the Nexus page, then deploy;
- **by hand:** extract the zip into the game folder.

<a id="open-edgebuilder"></a><a id="allow-redbridge"></a>

## 3. Open it and allow its permissions

EDGEbuilder doesn't open by itself. A newly installed package is listed only in REDnode's Mod Manager until you pin it.

1. Start the game and load a save.
2. Press **F10**. A cursor shows, and REDnode's windows take the mouse.
3. Click the **REDNODE** tab to open the launcher, and switch on **Mod Manager**.
4. Click the **EDGEbuilder** row. Its details open at the right.
5. Switch EDGEbuilder **on**, and switch **Pin to launcher** on. Next time you only press F10 and switch EDGEbuilder on in the launcher.
6. Under **Permissions** there are three lines, each with its own **Allowed** switch. Switch them on:

| The line starts | It lets EDGEbuilder | Without it |
|---|---|---|
| "REDbridge, WolvenKit's engine" | Read the game's files, and write your bakes | No list of models and no baking. The second pill says **Allow REDbridge (hover)** |
| "hiding every other package's windows ... (solo mode)" | Hide other REDnode windows while you edit, and bring them back after | The other windows stay on screen while you edit. See [Builder mode and other windows](https://edgemodders.ai/wiki/edgebuilder/camera.html#builder-mode-and-other-windows) |
| "swapping archives in the game's mod folder while the game runs" | Put a model you import into the game at once, without a restart | Import still adds the prop to your project, but it shows in the game only after you allow it. See [Importing a model](https://edgemodders.ai/wiki/edgebuilder/importing.html) |

REDnode asks because REDbridge can read and write files on your PC. A permission stays off until you allow it, and you can switch it off again in the same place.

**What you should see:** EDGEbuilder's panel at the right of the screen. In the Mod Manager, the **Requires** line lists Codeware with a tick.

(Screenshot on the wiki, "Allowing REDbridge": REDnode's Mod Manager with EDGEbuilder selected, its Requires line showing Codeware with a tick, and the Allowed switches for REDbridge and solo mode under Permissions.)

For more on the Mod Manager, see [The Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html).

## 4. Check the three pills

Three pills at the top of EDGEbuilder's panel say whether everything is ready. Hover a pill that isn't green for the reason.

| Pill | Ready looks like | Otherwise |
|---|---|---|
| The game | **World ready** | **No game** (REDnode isn't connected to a running game), **Load a save**, or **Needs Codeware 1.14+** |
| REDbridge | **REDbridge** and its version | **Allow REDbridge (hover)**, **REDbridge starting**, **No REDbridge** or **REDbridge failed** |
| The list of models | A count, about **31,500 assets** | **Indexing...** while it's built, **No index** or **Index failed** |

After you allow REDbridge, EDGEbuilder picks it up by itself within about five seconds. The first time, the list of models then takes a few seconds to build, and the list of people a few more. After that both load straight away at every start. The list of models is built again only when the game is updated, or when you press **Rebuild asset index** on the Settings tab.

(Screenshot on the wiki, "The status pills": The top of the EDGEbuilder panel with all three pills green: World ready, REDbridge with its version, and the asset count.)

A pill that stays red? See [Troubleshooting](https://edgemodders.ai/wiki/edgebuilder/troubleshooting.html#setting-up-and-the-three-pills).

## Where EDGEbuilder keeps things

| What | Where |
|---|---|
| Its settings, and the list of models | A data folder of its own, which REDnode gives each package. The **Settings** tab shows the path. Updates don't touch it |
| Scenes you keep on **This PC** | The same data folder |
| Scenes in the **Library** | The [EDGE Library](https://edgemodders.ai/wiki/library.html), `Documents\EDGE Library` unless you chose another folder |
| Scenes in a **Project** | The REDcode project's `source\scenes` folder |
| Bakes | In the REDcode project, or in the Library. See [Baking](https://edgemodders.ai/wiki/edgebuilder/baking.html) |

[Scenes and the Library](https://edgemodders.ai/wiki/edgebuilder/scenes.html#where-a-scene-is-kept) says which place to choose.

## Updating

With the game closed, add the newer zip to EDGEdeck the same way and deploy. The new version takes the old one's place in the same row. Your settings, your scenes and your bakes stay.

## Uninstalling

1. If Edit is on, switch it off, so V's own camera and HUD are back.
2. Close the game. In EDGEdeck, untick EDGEbuilder, or remove it, and deploy.

| What | After uninstalling |
|---|---|
| Previews | Gone from the world. They only exist while EDGEbuilder runs |
| Your scenes | Still on disk, in the places above, in case you come back |
| Baked scenes | Still in the game. A bake is part of your REDcode project's mod, a separate row in EDGEdeck. Untick that mod and deploy to take it out |

## Next

[Your first scene](https://edgemodders.ai/wiki/edgebuilder/first-scene.html) walks you through EDGEbuilder once, from an empty scene to crates baked into the world.
