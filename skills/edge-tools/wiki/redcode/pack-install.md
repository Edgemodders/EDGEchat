<!-- Copied from EDGEweb's docs/wiki/redcode/pack-install.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/pack-install.html (reviewed 2026-11-21) -->

# Pack, install and run

Three steps take a project into the game: **Pack** builds the mod, **Install** puts it in the game folder, and **Run Game** starts the game. Buttons in the Project view's title bar do them, alone or together.

| On this page | |
|---|---|
| [The everyday loop](https://edgemodders.ai/wiki/redcode/pack-install.html#the-everyday-loop) | Change, pack, look, repeat |
| [Which button](https://edgemodders.ai/wiki/redcode/pack-install.html#which-button) | What each one does and when to use it |
| [Pack](https://edgemodders.ai/wiki/redcode/pack-install.html#pack) | What goes into the mod |
| [Install](https://edgemodders.ai/wiki/redcode/pack-install.html#install) and [Uninstall](https://edgemodders.ai/wiki/redcode/pack-install.html#uninstall) | With EDGEdeck, and without |
| [Pack and Play: into the running game](https://edgemodders.ai/wiki/redcode/pack-install.html#pack-and-play-into-the-running-game) | No restart, with REDnode |
| [Run Game](https://edgemodders.ai/wiki/redcode/pack-install.html#run-game) | |
| [Sharing your mod](https://edgemodders.ai/wiki/redcode/pack-install.html#sharing-your-mod) | What to zip |
| [Packing as a REDmod](https://edgemodders.ai/wiki/redcode/pack-install.html#packing-as-a-redmod) | Advanced |

## The everyday loop

1. Change something: a value in the CR2W editor, a texture, a tweak.
2. Press **Pack and Install** (the rocket).
3. Press **Run Game** (the play triangle) and look.
4. Close the game, and go back to 1.

With [REDnode](https://edgemodders.ai/wiki/rednode/) in the game, you can keep the game running: press **Pack and Play** (the flame) in step 2 instead, and look at once. See [Pack and Play](https://edgemodders.ai/wiki/redcode/pack-install.html#pack-and-play-into-the-running-game).

When you're done for the day, nothing needs undoing. When you want the game clean, **Uninstall**.

## Which button

| Button | Icon | What it does | Use it when | The game |
|---|---|---|---|---|
| **Pack** | A package | Builds the mod into your project's `packed` folder. Nothing goes into the game | You want to check what the mod contains, or share it | Running or closed |
| **Pack and Install** | A rocket | Packs, then puts the mod in the game | Every normal test. Tweaks, scripts and texts only take effect this way | Closed. Start it afterwards |
| **Pack and Play** | A flame | Packs, then swaps the mod's archive into the running game through REDnode | You are changing game files (looks, textures, meshes) and want to see each change without a restart | Running, with REDnode and a save loaded. Otherwise it does Pack and Install |
| **Run Game** | A play triangle | Starts Cyberpunk 2077 | After Pack and Install | Closed |
| **Install** | In the **`...`** menu | Puts an already packed mod in the game | Rarely: Pack and Install does both | Closed |
| **Uninstall** | In the **`...`** menu | Takes your mod out of the game | You want the game without it | Closed |

## Pack

**REDcode: Pack**, the package button in the Project view's title bar, builds your project's `packed` folder: the finished mod, laid out like the game folder. `Ctrl+Shift+B` runs it too, as VS Code's build task `redcode: pack`.

Pack does what WolvenKit's pack does, so the result installs the same way.

| From your project | Goes to |
|---|---|
| Everything in `source/archive` | One archive, `packed/archive/pc/mod/<mod name>.archive` |
| ArchiveXL files (`.xl`) under `source/resources` | Beside the archive |
| Other files under `source/resources` | The same path under `packed`, so `resources/r6/tweaks/my.yaml` becomes `packed/r6/tweaks/my.yaml` |

A few files are left out, as in WolvenKit: `.script` and `.ws` files, `info.json`, and `.tweak` files outside `r6/tweaks`.

- `packed` is **emptied first**, so a file you removed from the project doesn't linger in the mod. The setting is `redcode.pack.clean`.
- A project with nothing in `source/archive` is fine: the mod may be tweaks or scripts only. A project with nothing in `source/archive` or `source/resources` has nothing to pack, and REDcode says so.

**You should see** the archive selected under **Packed** in the Project view, and a message saying what was packed: how many files went into the archive, and the ArchiveXL and other resource files beside it, with **Show log**. Pack and Install and Pack and Play show only the install's own message.

**Warnings.** Pack warns, with **Show log**, about things that will stop the mod working:

| Warning | Means | Do this |
|---|---|---|
| Paths have capital letters or spaces | A file under Archive has a game path the game may not find. The game looks files up by their exact path, in small letters | Rename the file or folder in small letters without spaces. If the path contains your mod's name, the project's name is the cause: see [Naming](https://edgemodders.ai/wiki/redcode/projects.html#make-a-new-project) |
| A tweak file is not under `r6\tweaks` | TweakXL will not load it | Move it to `r6/tweaks` under Resources |
| A custom sound is missing, or needs a REDmod | See [Packing as a REDmod](https://edgemodders.ai/wiki/redcode/pack-install.html#packing-as-a-redmod) | |

(Screenshot on the wiki, "Packing": The Project view after a pack: the Pack, Pack and Install and Run Game buttons in the title bar, and Packed expanded to show the mod's archive and a tweak file.)

## Install

**Pack and Install** (the rocket) packs, then installs. **Install** alone is in the Project view's **`...`** menu. What it does depends on whether you have [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/), the EDGE mod manager.

### With EDGEdeck

1. REDcode hands the packed project to EDGEdeck.
2. The first time, EDGEdeck adds it as a mod named after the project, with the version `dev`. If EDGEdeck already has another mod with that name, it asks first; cancel there and nothing is installed.
3. Each later time, the same mod gets the new files and keeps its place in your mod list.
4. EDGEdeck **deploys** the mod: it puts the files into the game folder, and records every one, so it can undo it and show conflicts with other mods.

Only your mod is deployed. If you have other changes waiting in EDGEdeck (mods you switched on or off but haven't deployed), they keep waiting until you press Deploy in EDGEdeck. REDcode's log then says two things:

- how many files of those other changes still wait;
- whether your mod **lost files to another mod**: both mods contain the same file, the other mod is higher in EDGEdeck's list, so the game gets the other mod's version. Move your mod up in EDGEdeck if you want yours to win.

If the game is running, EDGEdeck asks you to quit it first, because the game keeps mod files open. An EDGEdeck older than 0.28.0 can't deploy one mod alone: REDcode asks before the deploy takes your other waiting changes along.

(Screenshot on the wiki, "Your mod in EDGEdeck": EDGEdeck's Mods view after Install from REDcode: the project listed as a mod with version dev, switched on and deployed.)

### Without EDGEdeck

> **Not yet tested on a real game.** Installing without EDGEdeck has only been tested against a stand-in game folder. It is simple copying, but if you use any other mods, use EDGEdeck.

REDcode copies `packed` into the game folder and records every file in the project's `.redcode/installed.json`.

- If a file is already in the game, put there by something else, REDcode asks, then backs it up before replacing it. An archive that [Pack and Play](https://edgemodders.ai/wiki/redcode/pack-install.html#pack-and-play-into-the-running-game) swapped in counts as your project's own, so it isn't asked about.
- Installing again first removes the previous set of files, so a file you dropped from the project doesn't stay behind.

> **Use EDGEdeck if you use any mod manager.** A tool that copies files into the game behind a mod manager's back confuses it. Through EDGEdeck, your own mod sits in the same list as everything else, and conflicts with other mods show up. See [EDGEdeck and REDcode](https://edgemodders.ai/wiki/edgedeck/redcode.html).

### When there is nothing to install

If the project hasn't been packed yet, Install says so and offers **Pack and Install**. If the project has no files at all and an earlier install of it is still in the game, REDcode offers **Uninstall**.

## Uninstall

**Uninstall**, in the Project view's **`...`** menu, takes your mod out of the game again:

- with EDGEdeck, it turns the mod off in EDGEdeck and takes its files out. Only your mod's files come out, and other mods' waiting changes keep waiting;
- without EDGEdeck, it removes exactly the files listed in `.redcode/installed.json`, and puts back anything it backed up.

Your project is untouched. Pack and Install puts the mod back.

## Pack and Play: into the running game

**Pack and Play**, the flame button in the Project view's title bar (or **REDcode: Pack and Play**), packs, then gets the mod's archive into the game without a restart. The swap is done by [REDnode](https://edgemodders.ai/wiki/rednode/), through its plugin [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html).

**Set it up once:**

1. Install [REDnode](https://edgemodders.ai/wiki/rednode/install.html) 0.41.0 or later in the game.
2. In the game, press **F10** to show REDnode's launcher, open its **Settings** drawer, and switch on **MCP server**. That switch lets programs outside the game, such as REDcode, send requests to REDnode. It has nothing else to do with AI here.
3. Install your mod the normal way once, with **Pack and Install**. Then the swap replaces a file your mod manager knows about.

**Each time:**

1. Have the game running with a save loaded. Swaps don't work at the main menu.
2. Change something in your project and press **Pack and Play**.
3. Look at the change in the game.

**You should see** a notification in VS Code: *REDnode swapped my_jacket.archive into the running game*, with the time it took.

| What you changed | To see it |
|---|---|
| Clothing V is wearing | Nothing: REDnode refreshes it |
| Another item | Unequip it and equip it again |
| Something in the world: a car, a prop, a character | Walk away until it is out of sight, and come back, so the game loads it again |

More in [What a swap does](https://edgemodders.ai/wiki/rednode/redswap.html#what-a-swap-does).

(Screenshot on the wiki, "Pack and Play through REDnode": REDcode's notification after Pack and Play with the game running: REDnode swapped the project's archive, and how long it took.)

**What a swap can't carry.** A swap replaces the archive: game files such as meshes, textures and materials. Tweaks, scripts and `.xl` files are read only when the game starts. If your mod has some that aren't in the game yet, Pack and Play says so after the swap and offers **Install for Next Start**.

**When it can't swap,** Pack and Play does the next best thing:

| Situation | What happens |
|---|---|
| The game is closed, or runs without REDnode, or REDnode's MCP server is off | **Pack and Install**, with a note to restart the game. If the game is still running, EDGEdeck asks you to quit it first |
| The mod has no archive, only tweaks or scripts | Pack and Install, and a note that there was nothing to swap |
| REDnode refuses, for example with no save loaded | An error that says why. Nothing is installed |

A swap is not temporary: the archive stays in the game's `archive\pc\mod` folder. That is why step 3 of the setup matters. See [A swap is not temporary](https://edgemodders.ai/wiki/rednode/redswap.html#a-swap-is-not-temporary).

### Sound mods

An archive that replaces game sounds (from [Replacing a sound](https://edgemodders.ai/wiki/redcode/viewers.html#replacing-a-sound)) swaps through REDnode too, which pauses the game for a moment and loads the game's sound index again. This was tested on game 2.5 by REDcode's developer: after Pack and Play, the replaced sound played in the running game. If one doesn't work, use Pack and Install and restart the game.

### Red Hot Tools

Older versions of REDcode could also swap through Red Hot Tools, a plugin by psiberx, and had a second flame button, **Install to the Hot Folder**. Red Hot Tools has no build for game 2.5, so REDcode no longer uses it, and the button is gone. You don't need Red Hot Tools. **Uninstall** still removes archives an older REDcode left in the game's `archive/pc/hot` folder.

## Run Game

**Run Game**, the play button, starts Cyberpunk 2077.

- For a Steam install it starts the game through Steam, so the overlay and achievements work. Otherwise it starts `bin\x64\Cyberpunk2077.exe`.
- `redcode.launch` chooses: `auto` (the default, as above), `steam` or `exe`.
- Started from the exe (a GOG or Epic install, or `exe` above), REDnode's overlay works as it does from Steam. Before REDcode 0.10.14, with REDnode 0.58.0 or older, F10 showed only the cursor that way.
- If the project packs as a REDmod, REDcode adds `-modded`, the game's launch option for REDmods.

## Sharing your mod

The `packed` folder is your mod, laid out like the game folder.

1. Press **Pack**.
2. In the Project view, right-click **Packed** and choose **Reveal in File Explorer**.
3. Make a zip of what is **inside** `packed` (the `archive` folder, and `r6` if there is one), not of `packed` itself.

Someone else installs that zip with a mod manager such as [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or Vortex, or by extracting it into their game folder. Tell them which frameworks the mod needs:

| Your mod has | It needs |
|---|---|
| An `.xl` file, such as changed texts | ArchiveXL (and RED4ext) |
| Tweak files under `r6/tweaks` | TweakXL (and RED4ext) |
| Only an `.archive` that replaces game files | Nothing |

Give the mod a real version before you share it: the project's version is in its `.cpmodproj` file.

## Packing as a REDmod

Most mods ship as plain archives, and you can skip this section. A [REDmod](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms) is CD PROJEKT RED's own mod format, and the only one that can add new sounds to the game.

Turn on `redcode.pack.redmod` to pack the project as a REDmod, as WolvenKit's REDmod option does. The archive and ArchiveXL files go under `packed/mods/<mod name>/archives`, scripts under `packed/mods/<mod name>/scripts`, with an `info.json` written from the project.

A REDmod can add new sounds: list them under `customSounds` in `source/resources/info.json` and put the WAV files in `source/customSounds`. Pack copies them into the mod, as WolvenKit does, and warns about a listed WAV that's missing. Pack and Install asks before installing a REDmod with a missing sound, because REDmod would refuse it. Custom sounds play only in a REDmod. Hearing one in the game has not been tested by REDcode's developer yet.
