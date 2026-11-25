<!-- Copied from EDGEweb's docs/wiki/redcode/troubleshooting.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/troubleshooting.html (reviewed 2026-11-25) -->

# Troubleshooting REDcode

Find what you see in the left column of the group where you're stuck. If it isn't here, the [last section](https://edgemodders.ai/wiki/redcode/troubleshooting.html#anything-else) says where to ask.

| Where you're stuck | |
|---|---|
| [Setting up](https://edgemodders.ai/wiki/redcode/troubleshooting.html#setting-up) | Installing, REDbridge, .NET, an empty Game Assets view |
| [Browsing and viewing](https://edgemodders.ai/wiki/redcode/troubleshooting.html#browsing-and-viewing) | TweakDB, the 3D views, Find Items, animations, sectors, sector scripts, sounds, lip sync |
| [Making animations](https://edgemodders.ai/wiki/redcode/troubleshooting.html#making-animations) | The Make panel, Uthana, the Edit tab, Blender |
| [Keys](https://edgemodders.ai/wiki/redcode/troubleshooting.html#keys) | The Keys view, a tool that gets no key |
| [Editing, export and import](https://edgemodders.ai/wiki/redcode/troubleshooting.html#editing-export-and-import) | Edits that vanish, a question before Add to Project, imports that aren't offered, Blender |
| [Pack, install and the game](https://edgemodders.ai/wiki/redcode/troubleshooting.html#pack-install-and-the-game) | A mod that doesn't show, a game that won't start, Pack and Play |
| [Other tools](https://edgemodders.ai/wiki/redcode/troubleshooting.html#other-tools) | EDGEdeck, EDGEwave, EDGEmat |

## Start with the log

Click REDcode's item in the status bar, at the bottom of VS Code, or run **REDcode: Show REDbridge log** from the command palette (`Ctrl+Shift+P`). It's also under **View**, **Output**, then **REDcode** in the dropdown. It says which REDbridge started, where the game is, and what each command did. When you ask for help, include it.

## Setting up

| You see | Do this |
|---|---|
| Searching the Marketplace for "REDcode" finds an extension about Core War | That is another extension. Search for **REDcode for Cyberpunk 2077**, publisher Edgemodders, or install by id: `edgemodders.redcode-cyberpunk` |
| "the old ... extension is still installed or loaded" | You still have REDcode Core or the older REDcode from before the Marketplace release, and the two can't run together. Press **Show It** and uninstall the old one, press **Reload Window**, then run **REDcode: Install REDbridge** once more. See [Coming from an older REDcode](https://edgemodders.ai/wiki/redcode/install.html#coming-from-an-older-redcode) |
| "bridge not found" in the status bar | REDcode can't find REDbridge. Run **REDcode: Install REDbridge**: it downloads it and sets everything up. If you set `redcode.bridgePath` yourself, check that it points to `REDbridge.exe` or its folder |
| "the bridge needs the .NET 10 runtime, which is not installed" | Press **Install with winget**, which runs the install in a terminal, or **Download page** to get it from Microsoft. Then run **REDcode: Restart REDbridge**. If .NET 10 is installed, but for your user only, set `redcode.dotnetRoot` to its folder. Don't set `DOTNET_ROOT` for your whole Windows account: it breaks other programs |
| "REDbridge ... is older than this extension needs" | A REDcode update needs a newer REDbridge. Press **Update REDbridge**, or run **REDcode: Update REDbridge** |
| Game Assets is empty, with **Set Game Folder**, **Show REDbridge log** and **Restart REDbridge** buttons | REDbridge isn't running, or has no game. Check the status bar for one of the messages above. Then run **REDcode: Set Game Folder** and pick the folder with `bin`, `archive` and `r6`. Then **REDcode: Restart REDbridge** |
| "the bridge stopped (exit code ...)" | REDbridge closed unexpectedly. Press **Restart REDbridge**. If it keeps happening, press **Show log** and include the last lines when you ask for help |
| "REDbridge is being updated in another window" | Another VS Code window is updating REDbridge. Wait: this window restarts its bridge when the update finishes |
| The REDcode sidebar is empty or REDcode's tools can't see the project, and VS Code says **Restricted Mode** | VS Code doesn't trust the folder yet, and REDcode stays off until it does. Click **Restricted Mode** in the status bar and choose to trust the folder. New Project reminds you of this before it opens a new one |

## Browsing and viewing

| You see | Do this |
|---|---|
| I can't find the file for an item | Files and records go by internal names. See [Finding what you want to change](https://edgemodders.ai/wiki/redcode/finding.html) |
| TweakDB takes a while the first time | Normal. Loading TweakDB takes about 12 seconds, once per session; the view says so while it loads |
| TweakDB doesn't load, on a game without Phantom Liberty | TweakDB hasn't been checked without Phantom Liberty. Please [tell us](https://github.com/Edgemodders/REDcode/issues) what the log says |
| Hovering a record in a tweak file shows nothing | The hover works once TweakDB is loaded. Open the TweakDB view once |
| A mesh shows in flat colours | Normal for game meshes. The 3D view colours each part by its material. With EDGEmat installed it shows EDGEmat's colours for the materials, still approximate. A GLB that carries its own textures shows them, unless **Shading** is set to flat colours |
| Find Items says it needs a newer REDbridge | Run **REDcode: Update REDbridge** |
| Find Items finds nothing for a weapon | Normal. Find Items works for clothing and similar items, not for weapons. For a mesh no item shows, it lists the `.app` looks that use it, to open instead |
| An animation file takes a long time to open | A large `.anims` file takes about a minute the first time, and is quick after that |
| An animation shows bones only, no body | Normal for rigs other than the game's base man and woman, such as a vehicle's or the player's: only those two have a base body |
| A synced set member says **not placed** | The game's sync tracks don't say where that clip goes beside this one. Hover the row for the reason. **placed, unsure** means another member fits the same track, so the two may be swapped |
| A sector shows markers but few or no meshes, the first time | Its meshes are still exporting: the line under the view counts them. A busy sector takes a few seconds, **Coarser levels** can take minutes. After that it opens at once. If the count stops, press **Show REDbridge log** |
| With **Materials** on, a building or the pavement is flat grey | Normal for now. The world's multilayered materials don't render yet; smaller things with plain materials do |
| Shift+drag in a sector no longer pans | Shift+drag now selects in a box. Pan with the middle button, or with the left and Ctrl held |
| **Overlaps** takes about a minute | Normal the first time at a place: REDcode reads every sector that might reach in. It keeps what it found, so the next time takes about a second |
| A change in the **Properties** tab leaves a layer's things alone | Normal for now: the Properties tab and scripts change only the opened sector's own things. Open the layer's sector with the open icon on its row, and change it there |
| The **Properties** tab shows **mixed** | The selected things have different values there. A value you set goes on all of them |
| A value I want to change isn't in the **Properties** tab | It shows only when every selected thing has it, as a plain value. Select fewer kinds of thing, or change it in the tree or with a [script](https://edgemodders.ai/wiki/redcode/sectors.html#sector-scripts). `nodeIdx` and `instanceIndex` are left out on purpose |
| A sector script asks "It has not run on this computer before" | Normal for a script REDcode didn't make, such as one you copied or an assistant wrote. Read it in the tab beside, then press **Run**. It asks once per file |
| Sector scripts don't run, and VS Code says **Restricted Mode** | Scripts run only in a trusted folder. Trust the folder (VS Code asks, or use **Manage Workspace Trust**) |
| A script seems to change nothing | It shows its changes first and makes them only on **Apply**, and only in a project's copy of the sector. Read the line under the view: it says what the script selected and changed |
| `Ctrl+A` or `F` does nothing in a sector | Click in the view first (the 3D view, the list or the line below it), so the view has the keys |
| I replaced a sound, but hear the game's sound some of the time | The event plays one of several sounds at random. Press **Replace…** again and choose **Replace All** |
| The game sound list shows numbers, not names | About a third of the sound events have no known name: WolvenKit's list doesn't cover them. Filter by a name that is known, or play your way to the sound |
| A voice line has no **Lip Sync** button | The game has no lip sync for that line, or the sound is no voice line. The button shows a moment after the sound loads |
| The Lip Sync tab shows a sketch of a mouth, not a head | The head is still loading. It takes a few seconds |
| A line I opened from elsewhere isn't in the Lip Sync tab's list | The scene filter holds that line's scene. Clear the box to see every scene |
| No sound plays after a game update, or EDGEwave says "could not read sound" | An old REDcode kept sound files from before the update. Update REDcode: it now empties that cache when the game changes |

## Making animations

| You see | Do this |
|---|---|
| There's no **Make** button in the animation view's bar | Since REDcode 0.10.17 the Make panel is in the side column's **Clip** tab, and editing in its **Edit** tab |
| The **Edit** tab has nothing to edit | It works on a clip REDcode made as a **New Clip**, opened from its own set in your project. Game clips can't be edited there yet |
| An edit doesn't show | A step changes nothing until **Apply**. Steps not applied yet show in the accent colour |
| A key I added in Blender is a one-frame flick | The clip has a key on every frame, so your key changes that frame only. Delete the bone's keys around the moment first, or key a few frames |
| **Make** says why it can't make a clip | It works on a man's or a woman's animations (the ones that play on the base body), with a project open. Open such a file, or a project |
| REDcode asks for an Uthana key | Making a clip with words uses [Uthana](https://edgemodders.ai/wiki/redcode/other-tools.html#uthana) on your own account. Make an account on uthana.com, then paste its key. It is kept in the [Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view) for every tool |
| The Uthana row in the Keys view reads `uthana` in small letters | REDbridge 0.18.0 doesn't know the service's name. It works the same; REDbridge 0.19.0 names it. Run **REDcode: Update REDbridge** |
| REDcode says a clip is already being made | One clip is made at a time, from any animation view. Wait for it to end: the notification shows its stage |
| REDcode asks **Make It Again** or **Keep Both** | You typed the name of a clip you made before. **Make It Again** replaces it and keeps its id; **Keep Both** makes a new one beside it. Escape makes nothing, and nothing is paid |
| In the game, a brief T pose before a made clip plays | Seen the first time a clip plays on a character. It looks like the game's side, not the clip's (unverified) |
| The legs move in a clip that should only use the arms | Make it again with **Upper body only** on: it holds the legs still |

## Keys

| You see | Do this |
|---|---|
| The Keys view says the key store needs REDbridge 0.18.0 | Run **REDcode: Update REDbridge** |
| A tool says it has no key, but the Keys view shows one | You may have pressed **Don't Allow** for that tool. Hover the key's row: the tooltip names the tools you allowed and refused. Press its unlock button to forget the answers for that key, and the tool asks again |
| A key row says "can't be read here" | It was saved by another Windows user or on another PC. Set it again |
| A key row says "from" a variable, such as `OPENAI_API_KEY` | An environment variable on your PC holds the key, and wins over the store. Change or remove it where it is set |
| A key I set in the game doesn't show | It should show at once. If it doesn't, press **Refresh Keys** in the view's title bar |

## Editing, export and import

| You see | Do this |
|---|---|
| Add to Project says to open a project first | REDcode needs somewhere to put the file. Make one with **New Project** in the Project view. See [Projects](https://edgemodders.ai/wiki/redcode/projects.html#make-a-new-project) |
| Add to Project says the file "is already in" the project | Your project has its own copy, maybe with your changes. **Open the Project's Copy** opens it. **Replace It** puts the game's file over it, and your changes to it are lost: an editor open on it closes first, and asks about unsaved changes. For a folder, **Add the Others** adds only the files not there yet, and **Replace All** replaces them all |
| Add to Project wrote over my project's copy without asking | Fixed in REDcode 0.10.16: it now asks first, as above. Update REDcode |
| Folders I shut with **Collapse All** open again after a reload | The Project view keeps the folders you open and shut by hand, but doesn't see Collapse All. Shut them one by one once, and they stay shut |
| The file is read-only | You opened the game's copy, from Game Assets. Press **Add to Project** on it, and open the copy under **Archive** in the Project view |
| My edit vanished after saving | Most likely it was inside `compiledData` in an `.ent` or `.app` file, which is rebuilt from `components` on every save. Make the same change under `components`. See [Why a value looks different after saving](https://edgemodders.ai/wiki/redcode/editing.html#why-a-value-looks-different-after-saving) |
| A number reads back slightly different, such as `0.219999999` for `0.22` | Normal. The game stores numbers to about seven digits, and both are the same number to it |
| Save JSON to Project says values "did not survive" | The message names them, and the log lists them all. It is one of the two cases above: an edit inside `compiledData`, or a number with more digits than the game stores |
| Export to Raw or Import from Raw isn't on a file | Only files that can be converted show them: textures, meshes, sounds and a few more. Entities and appearances are edited in the CR2W editor instead. See [What converts](https://edgemodders.ai/wiki/redcode/export-import.html#what-converts) |
| Import from Raw isn't offered on my sound | Only game sound effects import, from a WAV file named exactly after the sound's hash, such as `832549876.wav` (from **Copy Hash** in the game sound list). Voice lines (`.wem`) and WAVs with other names can't be imported. See [Replacing a sound](https://edgemodders.ai/wiki/redcode/viewers.html#replacing-a-sound) |
| Edit in Blender says it can't find Blender | REDcode looks in Program Files and your Steam libraries. Press **Open Setting** and set `redcode.blenderPath` to `blender.exe` or its folder |
| After a save in Blender, REDcode names an object it left out | The import writes back only the mesh's own parts. Join the object into one of them: select it, then the part, press `Ctrl+J`, and save again. See [Edit in Blender](https://edgemodders.ai/wiki/redcode/export-import.html#edit-in-blender) |
| Add to Project Onscreens isn't on a LocKeys entry | It needs a project open |

## Pack, install and the game

| You see | Do this |
|---|---|
| My mod doesn't show in the game | Go through [the checklist](https://edgemodders.ai/wiki/redcode/troubleshooting.html#my-mod-doesnt-show-in-the-game) below |
| "nothing to pack" | Your project has no files under Archive or Resources yet. Add a file from Game Assets, or a tweak |
| "packed, but ... path(s) have capital letters or spaces" | The game may not find those files. Press **Show log** to see which. Rename them in small letters without spaces. If the path contains your mod's name, the project's name is the cause: a name such as `my_jacket` avoids it. See [Naming](https://edgemodders.ai/wiki/redcode/projects.html#make-a-new-project) |
| "... not under r6\tweaks, so TweakXL will not load it" | Move the tweak file to `r6/tweaks/<mod name>/` under Resources |
| EDGEdeck asks about a mod with the same name | EDGEdeck already has a different mod called what your project is called. Cancel: nothing is installed. Then decide in EDGEdeck which mod keeps the name, and remove or rename the other |
| EDGEdeck asks me to quit the game | The game keeps mod files open, so a mod can't be put in while it runs. Quit the game, then answer. To change a mod while the game runs, use [Pack and Play](https://edgemodders.ai/wiki/redcode/pack-install.html#pack-and-play-into-the-running-game) |
| The game doesn't start, or crashes, after I installed my mod | Take the mod out: **Uninstall** in the Project view's **`...`** menu, then start the game again. If that fixes it, the last file you changed is the likely cause: undo that change, or delete the file from your project and add it again from Game Assets. A missing framework can also do this: see step 3 of the checklist |
| Pack and Play installs instead of swapping | It swaps only into a running game, through REDnode. In the game, press **F10**, open the launcher's **Settings** drawer and switch on **MCP server**: that is what lets REDcode reach REDnode. Then press Pack and Play again. REDnode's answer is in REDcode's log |
| "REDnode did not swap the archive: ..." | REDnode refused, and the message says why. The usual reason is that no save is loaded: swaps don't work at the main menu. See [When a swap does not show](https://edgemodders.ai/wiki/rednode/redswap.html#when-a-swap-does-not-show) |
| Pack and Play swapped, but says part of the mod is "not in the game yet" | A swap carries the archive only. Tweaks, scripts and `.xl` files are read when the game starts. Press **Install for Next Start** and restart the game |
| Pack and Play swapped, but nothing changed | The game still shows the copy it loaded before. Unequip and equip the item, or walk away and come back. See [Pack and Play](https://edgemodders.ai/wiki/redcode/pack-install.html#pack-and-play-into-the-running-game) |
| The game closed at a swap | A broken archive crashes the game at a swap as it would at the start. Check that the mod loads after Pack and Install and a normal start |
| The Hot Folder button is gone | REDcode no longer uses Red Hot Tools, which has no build for game 2.5. **Pack and Play** swaps through REDnode instead. See [Red Hot Tools](https://edgemodders.ai/wiki/redcode/pack-install.html#red-hot-tools) |
| Pack and Install asks to back up my own archive after Pack and Play | Fixed in REDcode 0.10.15: an archive swapped in through REDnode counts as the project's own. Update REDcode |
| After **Run Game**, REDnode's F10 shows only the cursor | Seen when REDcode started the game's exe directly (GOG, Epic, or `redcode.launch` set to `exe`) before REDcode 0.10.14. Update REDcode, or REDnode past 0.58.0 |

### My mod doesn't show in the game

1. Look in the Project view under **Packed**. If it's empty, **Pack** again and read any warning.
2. Make sure you pressed **Pack and Install**, or **Install**. With EDGEdeck, check the mod is on and deployed in EDGEdeck, and that no other mod higher in the list has the same files.
3. Check the frameworks. A tweak needs TweakXL in the game, and an `.xl` file, such as changed texts, needs ArchiveXL. Both need RED4ext. Install the frameworks your mod uses (see [EDGEdeck's frameworks page](https://edgemodders.ai/wiki/edgedeck/frameworks.html)).
4. Start the game again. Tweaks, scripts and texts are read only when the game starts.
5. A changed text shows only in the language its file is for. See [the LocKeys view](https://edgemodders.ai/wiki/redcode/game-assets.html#the-lockeys-view).
6. A REDmod needs the game started with `-modded`. **Run Game** adds it when `redcode.pack.redmod` is on.
7. Check REDcode's log for paths with capital letters or spaces, which Pack reports.

## Other tools

| You see | Do this |
|---|---|
| Install doesn't use EDGEdeck | Install uses EDGEdeck when it's installed and enabled in the same VS Code. The old REDdeck doesn't count: install [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) instead, and reload the window |
| Open in EDGEwave offers to install EDGEwave | EDGEwave isn't installed. See [EDGEwave](https://edgemodders.ai/wiki/edgewave/) for how to get it |
| Adding a line in the Lip Sync tab says it needs EDGEwave | Install [EDGEwave](https://edgemodders.ai/wiki/edgewave/) 0.3.0 or later, and set your ElevenLabs key in the [Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view) |
| EDGEwave says there is no voice for the character yet | Pick one with **EDGEwave: Character Voices…**. See [Character voices](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices) |
| Open in EDGEmat says it needs EDGEmat | EDGEmat isn't installed. Press **Install EDGEmat**, or see [EDGEmat](https://edgemodders.ai/wiki/edgemat/) |
| A package called REDcode is in REDnode's Mod Manager | REDcode put it there. It tells REDnode mods which project is open. See [REDnode](https://edgemodders.ai/wiki/redcode/other-tools.html#rednode) |
| An assistant's `redcode__projects` lists only one window, or the REDcode package in the game goes back to an older version | A window runs a REDcode older than 0.10.15, which puts its own older package back. Update REDcode in every window |
| An assistant has REDcode's tools twice | `redcode-mcp` is connected both by hand and through EDGEchat. Run `/edge:setup` in Claude Code. See [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html#connect-it-the-easy-way) |

## Anything else

Ask on [Discord](https://discord.gg/63qP3Erw43) with your log, or [open an issue](https://github.com/Edgemodders/REDcode/issues) on REDcode's repo. Say which REDcode version you have (the Extensions view shows it).
