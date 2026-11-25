<!-- Copied from EDGEweb's docs/wiki/edgedir/install.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedir/install.html (reviewed 2026-11-18) -->

# Install and set up EDGEdir

EDGEdir has two parts. The **extension** runs in VS Code and is where you build scenes. **EDGE Director** is an app in the game, for playing and adjusting them there. You can use the extension alone: the editor and its 3D preview need no game running.

**EDGEdir is not released yet**, so there is nothing to install from a store. Until its first release you build both parts from the source. That takes a few minutes and three commands.

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgedir/install.html#what-you-need) | For the editor, and for the game |
| [Build and run the extension](https://edgemodders.ai/wiki/edgedir/install.html#build-and-run-the-extension) | From its source |
| [Where it shows](https://edgemodders.ai/wiki/edgedir/install.html#where-it-shows) | Its icon and four views |
| [Read the game](https://edgemodders.ai/wiki/edgedir/install.html#read-the-game) | Once, a few minutes |
| [EDGE Director in the game](https://edgemodders.ai/wiki/edgedir/install.html#edge-director-in-the-game) | Building its file and switching it on |
| [Updating](https://edgemodders.ai/wiki/edgedir/install.html#updating), [Uninstalling](https://edgemodders.ai/wiki/edgedir/install.html#uninstalling) | |

## What you need

For the editor:

| You need | Notes |
|---|---|
| Windows 10 or 11, and [VS Code](https://code.visualstudio.com/) 1.90 or later | |
| [Node.js](https://nodejs.org/) 20 or later, and Git | Only while you build from source |
| Cyberpunk 2077, version 2.5 | Installed; it does not have to run. EDGEdir reads characters and animations from your own game |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) 0.14.0 or later | The part that reads the game's files. The easy way: install [REDcode](https://edgemodders.ai/wiki/redcode/) and let it fetch REDbridge. EDGEdir then uses REDcode's copy. With an older REDbridge EDGEdir lists animation files but not the animations inside them, and says so |

For playing in the game, also:

| You need | Notes |
|---|---|
| [REDnode](https://edgemodders.ai/wiki/rednode/) 0.67.2 or later, in the game | With RED4ext, which REDnode needs. Earlier REDnode versions lack the weather calls, and EDGE Director will not load on them |
| Codeware 1.14 or later | REDnode needs it to spawn people |
| REDbridge for REDnode | REDnode's Mod Manager has **Get REDbridge**. One install serves REDnode and REDcode |
| EDGE Director | [Below](https://edgemodders.ai/wiki/edgedir/install.html#edge-director-in-the-game) |

## Build and run the extension

1. Get the source: `git clone https://github.com/Edgemodders/EDGEdir` and open the folder in VS Code.
2. In a terminal in that folder run `npm ci`, then `npm run build`.
3. Press **F5** and choose **Run EDGEdir**. A second VS Code window opens with EDGEdir in it. Work in that window.

After a `git pull`, run `npm run build` again and restart the second window.

## Where it shows

EDGEdir has its own icon in the activity bar, the strip of icons at the far left: a clapperboard. It opens four views.

| View | Shows |
|---|---|
| **Desk** | The scenes and sequences you are working on. **New Scene** is here |
| **Sets** | EDGEbuilder scenes found in your EDGE Library and the open REDcode project: the stages a scene can play on |
| **Library** | Empty for now: scenes kept for good come in a later version |
| **Animations** | The game's animations, with search |

(Screenshot on the wiki, "EDGEdir's side bar": VS Code with EDGEdir's icon chosen in the activity bar and its four views open: the Desk with two scenes and a sequence, Sets, Library, and Animations with the Game group opened to a few folders.)

A scene opens in EDGEdir's own editor when you click it on the Desk. Any file ending in `.edgedir` or `.edgeseq` opens in it too.

## Read the game

Open the **Animations** view and click **Read the Game**. EDGEdir reads your game's characters and animations through REDbridge and keeps what it reads on your PC, so it does this once for each game version.

| Step | Takes about |
|---|---|
| The characters (about 6,600) and the list of animation files (about 14,000) | 2 minutes |
| The animations inside the files (about 147,000) | 3.5 minutes more. The status bar counts; you can work meanwhile |

EDGEdir finds the game by itself when REDcode or EDGEdeck knows where it is. Otherwise set `edgedir.gamePath`: see [Settings](https://edgemodders.ai/wiki/edgedir/settings.html#settings).

## EDGE Director in the game

EDGE Director is its own file, as REDnode's app packs are. When EDGEdir is released, each release will have `EDGE-Director-<version>.zip` beside the extension. For now you build it:

1. In the EDGEdir folder run `npm run build`, then `npm run director-zip -- --draft`. It writes `dist/EDGE-Director-<version>-draft.zip`.
2. Install the zip with [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or Vortex, or extract it into the game's folder. It puts one folder into REDnode's apps: `red4ext/plugins/REDnode/apps/edge-director`. Nothing of the game's own is changed.
3. Start the game and load a save. Press **F10**, open REDnode's **Mod Manager**, and switch **EDGE Director** on. Allow its two permissions, **bridge** and **archives**: it uses them to write each actor's animations into a form the game plays.
4. Pin it to the launcher, so its window is one click away.

(Screenshot on the wiki, "EDGE Director in REDnode's Mod Manager": The game with REDnode's Mod Manager open: EDGE Director selected, switched on, with its two permissions, bridge and archives, allowed.)

EDGEdir in VS Code never copies anything into your game folder by itself. When you press **Play in Game** and EDGE Director is missing or too old, it says so and offers its download.

Then go on to [Playing in the game](https://edgemodders.ai/wiki/edgedir/director.html).

## Updating

Pull the source, run `npm run build`, and restart the second VS Code window. When EDGE Director changed too, build its zip again and install it over the old one: EDGEdir tells you when the one in the game is older than it needs.

## Uninstalling

Close the second VS Code window: nothing is installed in your own VS Code while you run from source. Remove EDGE Director with your mod manager, or delete its folder from REDnode's apps.

What EDGEdir keeps on your PC is under `%LOCALAPPDATA%\EDGEdir`: the Desk (your scenes), what it read from the game, and the folder it talks to EDGE Director through. Delete it only if you no longer want your scenes.
