<!-- Copied from EDGEweb's docs/wiki/redcode/viewers.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/viewers.html (reviewed 2026-11-25) -->

# Textures, meshes and sounds

REDcode shows game files the way they look and sound, not only as data. Each viewer opens with a click, from your project or straight from Game Assets, with nothing to extract first.

| On this page | |
|---|---|
| [Textures](https://edgemodders.ai/wiki/redcode/viewers.html#textures) | The texture viewer |
| [Meshes in 3D](https://edgemodders.ai/wiki/redcode/viewers.html#meshes-in-3d) | The 3D view, [its light](https://edgemodders.ai/wiki/redcode/viewers.html#the-light), and [which items use a mesh](https://edgemodders.ai/wiki/redcode/viewers.html#which-items-use-a-mesh) |
| [Animations](https://edgemodders.ai/wiki/redcode/viewers.html#animations) | Play an animation on a body, with root motion, [a synced set](https://edgemodders.ai/wiki/redcode/viewers.html#synced-sets) together, [make a clip](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip) from words or a GLB, and [edit it](https://edgemodders.ai/wiki/redcode/viewers.html#editing-a-made-clip), in REDcode or [in Blender](https://edgemodders.ai/wiki/redcode/viewers.html#edit-in-blender) |
| [Streaming sectors](https://edgemodders.ai/wiki/redcode/viewers.html#streaming-sectors) | A piece of the game's world in 3D: on its own page, [The sector view](https://edgemodders.ai/wiki/redcode/sectors.html) |
| [Sounds](https://edgemodders.ai/wiki/redcode/viewers.html#sounds) | The audio player, and its link to the [Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html) |
| [The game's sound effects](https://edgemodders.ai/wiki/redcode/viewers.html#the-games-sound-effects) | Browse and play all 73,000, and [replace one](https://edgemodders.ai/wiki/redcode/viewers.html#replacing-a-sound) |

## Textures

A texture (`.xbm`) is a picture the game wraps onto a shape or shows in its interface. It opens in the **texture viewer**: the image over a checkerboard, so you can see what's transparent, with its size.

| Button | Does |
|---|---|
| **Fit** | Scales the image to the pane |
| **1:1** | One texture pixel per screen pixel |
| **Pixels** | Sharp, blocky scaling, to see single pixels |

The same viewer opens `.dds` and `.tga` files, which VS Code can't show. In the Project view, PNG, JPG, BMP and TIFF open in it too, because a black texture is invisible in VS Code's own preview on a dark theme. In VS Code's own Explorer those files keep VS Code's preview: right-click one there and choose **Open With...**, then **REDcode Texture**, to get the viewer.

To see a texture's settings (its format, compression, flags), open it in the CR2W editor: see [Editing game files](https://edgemodders.ai/wiki/redcode/editing.html#which-files-open-in-it). To change the picture, [export](https://edgemodders.ai/wiki/redcode/export-import.html) it to PNG, edit it in any image editor, and import it back.

(Screenshot on the wiki, "The texture viewer": A game texture open in the texture viewer, over the checkerboard, with the size and the Fit, 1:1 and Pixels buttons.)

## Meshes in 3D

A mesh (`.mesh`) is a 3D shape. It opens on a **3D view** inside the CR2W editor. **Tree** shows the file's data; **3D** goes back.

| To | Do |
|---|---|
| Orbit | Drag |
| Pan | Right-drag, or Shift-drag |
| Zoom | Mouse wheel |
| Fit the model in view | **Frame** |

Two words first. A mesh is made of parts, called **submeshes**, and each part has a material. An **appearance** is one set of materials for those parts: the same jacket shape in black leather, in red, with a logo. One mesh usually has several.

- The **Appearance** list switches between the mesh's appearances. Each submesh then shows the material that appearance gives it.
- The list on the right turns each **submesh** on and off, with its material name and triangle count.
- The toolbar picks the **LOD**, the level of detail: the game keeps simpler copies of a shape to draw at a distance. The most detailed comes first.
- It also turns on and off the **wireframe**, the **bounding box** and the **ground grid**, and shows the triangle count and the size in metres.
- **Find Items** lists the items in the game that wear this mesh. See [Which items use a mesh](https://edgemodders.ai/wiki/redcode/viewers.html#which-items-use-a-mesh).
- **Open in EDGEmat** puts the mesh on [EDGEmat](https://edgemodders.ai/wiki/edgemat/)'s Desk with the appearance shown open, to change its materials.
- Drag the **splitter** between the 3D view and the list to widen the list for long names. Double-click it for the default width. The width is kept for the window, and the animation view shares it.
- **Tree** and back to **3D** keeps the view as you left it: the camera, and in the other 3D views the animation and the sectors loaded.

(Screenshot on the wiki, "The 3D mesh viewer": A vehicle or weapon mesh from the game in the 3D view: the model coloured by material, the LOD picker and toggles in the toolbar, and the submesh list on the right.)

Good to know:

- Game meshes are **coloured by material**, not textured.
- With [EDGEmat](https://edgemodders.ai/wiki/edgemat/) installed, the view shows the materials as EDGEmat renders them: colours only, and approximate. See [EDGEmat in 3D](https://edgemodders.ai/wiki/edgemat/view-in-3d.html).
- The view shows the **saved** file. Save to see your edits.
- `.glb` and `.gltf` files, such as a mesh you exported to Raw, open in the same viewer. A model that carries its own materials and textures, such as one from Blender, shows them; **Shading** switches to flat colours.

### The light

The mesh, animation and sector views light a model more like the game does. There is an environment for metal and gloss to reflect, and highlights are toned down so they don't turn flat white.

| Control | Does |
|---|---|
| **Light** | Sets the brightness, from 0.5× to 2.5×. A dark material is easier to read at 1.5× or more |
| **Fixed light** | Keeps the light still while you turn the model, to see how shine moves over it |

The light you pick is the one the next 3D view opens with, in the same window.

### Which items use a mesh

**Find Items**, in the 3D view's toolbar, answers "which item is this?". It looks through TweakDB, the game's database, for the items whose look shows the mesh. The first time takes about 10 seconds, while TweakDB loads.

- Items that show the **appearance you're looking at** come first, then items showing **other appearances** of the mesh.
- Pick a row to open the item's [TweakDB record](https://edgemodders.ai/wiki/redcode/tweakdb.html). The buttons on a row copy the record name, for [REDnode's Console](https://edgemodders.ai/wiki/rednode/overlay.html#the-console) or a tweak, or open the item's `.app` file.

Each row shows how the item reaches the mesh:

| On the row | What it is |
|---|---|
| The item's name in the game, and its record | The item, as the inventory shows it and as TweakDB knows it |
| The record's appearance name | The look the item asks for |
| The `.app` look | The entry in an `.app` file that the name leads to. An `.app` file is a list of looks, each naming the meshes it shows |
| The mesh appearance | The set of materials that look uses on this mesh |

It works for clothing and similar items: shoes, jackets, outfit sets, glasses, helmets, masks, food and drinks. It does not work for weapons, which choose their look another way. For a mesh no item shows, it lists the `.app` looks that use it, to open instead.

(Screenshot on the wiki, "Find Items": Find Items open over the 3D view of a pair of shoes: under Shows red_yellow_graphic, three item records with their names in the game, then the other appearances of the mesh below.)

**Try it.** In Game Assets, filter for `converse mesh` and open `s1_055_pma_shoe__converse.mesh`. Pick `red_yellow_graphic` in the Appearance list and press **Find Items**. You should see `Items.CasualShoes_01_basic_01`, the Sunny Ammo synthetic high-tops, at the top.

## Animations

An animation file (`.anims`) opens on an **Animations** view. It lists the file's animations with their length, and plays the one you pick on its **rig**, the skeleton the animation moves.

The column at the side has three tabs, each with the column's whole height:

| Tab | Holds |
|---|---|
| **Clip** | The Make panel, to [make a clip](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip) |
| **Edit** | The Edit panel, to [edit a made clip](https://edgemodders.ai/wiki/redcode/viewers.html#editing-a-made-clip). A clip you have edited opens on it |
| **Animations** | The file's animations, with their lengths, and a [synced set](https://edgemodders.ai/wiki/redcode/viewers.html#synced-sets) when there is one |

- A man's or a woman's animations play on the game's plain grey **base body**. The toolbar says which rig and which body: `Rig man_base.rig`, `On Base male body`. Heads are meshes of their own, so the base body has none.
- Other rigs, such as a vehicle's or the player's, show **bones** only: lines and dots for the bones and joints.
- **Body** and **Bones** switch each on and off. **Frame** fits the view to the whole animation.
- **Root motion** moves the whole rig through the scene as the animation moves it, such as a soldier dropping from an AV and walking off, and the view follows. It is off at first, and REDcode remembers your choice.
- Under the view, the usual media buttons: jump to the beginning, step back a frame, play backward, stop, play forward, step forward a frame, jump to the end. Each names itself when you hover it. Beside them are a bar to drag through the animation, **Loop** and the speed.
- With the 3D view clicked, `Space` plays or stops, the arrow keys step a frame, and `Home` and `End` jump to the beginning and the end.
- An animation of a frame or two, a still pose, opens paused.
- On a character's [lip sync](https://edgemodders.ai/wiki/redcode/lipsync.html) set, **Open in Lip Sync** in the bar opens the Lip Sync editor at the picked clip's line.
- **Tree** shows the file's data; **Animations** goes back to where you were.
- A large file takes about a minute to open the first time, and is quick after that.

Other EDGE tools can open an animation on a character's own meshes, such as [EDGEquest](https://edgemodders.ai/wiki/edgequest/)'s Preview: a Trauma Team paramedic with helmet and clothes, still plain grey.

**Try it.** In Game Assets, filter for `synced__q001_00c__male_average` and open the `.anims`. Pick `synced__q001_00c_trauma_arrives_soldiers__land_v1__soldier_01`: the body crouches and drops, in place. Turn on **Root motion**: it travels about 14 metres, and the view follows it.

(Screenshot on the wiki, "The animation view": An .anims file open on the Animations view: the base male body on the grid, the toolbar with Frame, Body, Bones, Root motion and the rig and body names, and the list of animations with their lengths on the right.)

### Synced sets

Some animations are one part of a moment several characters play together: the Trauma Team's landing is a clip for the AV and one for each soldier, each in its own `.anims` file. Pick such a clip, and a **Synced set** section under the list, in the **Animations** tab, names the others in the same folder, each with a colour and a tick.

- **Play the Set** turns on Root motion and plays them together on one clock, each on its own rig, placed where the game puts them. A row says **placed** once it is; hover it to see how. **Stop the Set** shows the one animation alone again.
- Play, pause, the time bar, Loop, speed, **Body**, **Bones** and **Frame** act on every member.
- Untick a member to hide it. The player's male and female files are alternatives: ticking one unticks the other.
- Turning **Root motion** off stops the set.

**Try it.** In the landing above, press **Play the Set**. The AV and the second soldier join. At the start both soldiers are inside the AV; at the end they stand on the ground out from it, about 4 metres apart.

(Screenshot on the wiki, "A synced set": The Trauma Team landing playing as a set: the AV's bones and two soldiers' bodies, and the Synced set section under the animation list with three ticked members marked placed.)

### Making a clip

You can make a new animation from words, with [Uthana](https://edgemodders.ai/wiki/glossary.html#uthana), an AI service that turns a sentence into motion. It lands straight on the game's own skeleton, ready to play. Uthana is paid, with your own key: you set it once in the [Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view).

The **Clip** tab, in the animation view's side column, holds the **Make** panel. It works on a man's or a woman's animations, the ones that play on the base body, with a project open; otherwise the panel says why. Under the heading **Make a Clip**, the clip picked in the list shows in yellow.

| In the panel | Does |
|---|---|
| The words | What the animation shows, such as "a man stands relaxed, then crosses his arms and taps his right foot" |
| Model | Uthana's model and its price: 3.0 and 3.0 Lite at $0.10 a second, 3.0 Mini at $0.075 |
| Length | 4 to 10 seconds; 5 at first |
| **In place** | No travel across the floor. On at first, because the game plays such clips where the character stands. The hips and feet still move as Uthana made them, so a dance or a shift of weight doesn't slide the feet. Off keeps the travel, which is untried in the game |
| **Upper body only** | Holds the legs still, for arm motions such as a wave or a phone call |
| **As written** | Sends your words as they are. Off, Uthana first rewrites them into a description of the motion |
| **New Clip**, **Replace Clip** | A new clip in your project, or a clip that takes the place of the one picked in the list |
| Name | The new clip's name: small letters, digits and `_`. Left empty, it is made from your words |

**Generate** shows the price on its button, such as **Generate, $0.50**, and makes the clip with Uthana. You are charged only when it finishes. **From a GLB…**, beside it, does the same with a clip already on the game's rig, from Blender say, and costs nothing.

While a clip is made, the panel's inputs are off and the button shows a spinner, the stage and the time so far. A bar steps through the stages, and a notification follows them. One clip is made at a time. It takes a minute or two.

The new clip then opens in its own tab, playing on its body. That tab opens with the Clip tab's Make panel showing the words and how the clip was made (the model, the length, the cost, when), ready to make it again.

| You chose | You get |
|---|---|
| **New Clip** | The clip in a set of its own, `<mod name>\anims\<name>\<name>.anims` under Archive. Under Raw, in the same folder: the clip as a `.glb`, the motion as Uthana sent it (`.source.glb`), and a record, `<name>.edgefab.json`, that [EDGEdir](https://edgemodders.ai/wiki/edgedir/) and [EDGEfab](https://edgemodders.ai/wiki/edgefab/) read |
| **Replace Clip** | A copy of the game's whole set in your project, with your clip in place of the one you picked. The game plays yours wherever it played that one |

- A name that is taken gets `_2`. If you type the name of a clip you made before, REDcode asks first, before anything is paid: **Make It Again** (it keeps its id) or **Keep Both**. It also says when EDGEfab has edited that clip.
- Every made clip faces the way the game's own clips do, and Uthana is asked for feet that stay on the ground: a foot that bears weight stays flat. A foot that still slides a little can be pinned in [Edit](https://edgemodders.ai/wiki/redcode/viewers.html#editing-a-made-clip).
- The same is in the command palette: **Generate an Animation with Uthana** asks the rig, the words and the length; **Add a Clip from GLB** (also in the Project view's right-click menu on a `.glb`) and **Replace a Game Clip**.

**Try it** (about $0.50 of Uthana credit). With a project open, open `generic_male_average__stand__2h_on_sides__01.anims` from Game Assets and click the **Clip** tab. Type "a man stands relaxed, then crosses his arms and taps his right foot" and press **Generate**. In a minute or two the new clip opens and plays, and the Project view shows its set under `anims`.

Tested by REDcode's developer: making clips both ways, a replaced clip played in the game, and an **In place** clip whose feet stay put in the game. The first time a clip plays on a character in the game, a brief T pose came before it; that looks like the game's side, not the clip's (unverified).

(Screenshot on the wiki, "The Make panel": An animation view with the Make panel open above the clip list: Make a Clip with the picked clip's name in yellow, the words typed in, the model and length, In place, Upper body only and As written, New Clip and Replace Clip, the Name box, and the Generate, $0.50 and From a GLB buttons.)

### Editing a made clip

A made clip is rarely exactly right: a foot slides a few centimetres, the head should turn, a hand should do something else. The **Edit** tab changes a clip you made, in steps. The clip as made is kept, and the steps are applied to it each time, so any step can be changed or taken out later. Nothing is lost.

Open a made clip from your project (its set under `anims` in the Project view) and click **Edit**. It works on a clip made as a **New Clip**, in its own set; game clips can't be edited there yet.

| In the Edit tab | Does |
|---|---|
| The steps | The list of steps, in the order they apply. Click one to go to its time and fill the form with it, to change it (**Update Step**). ↑ and ↓ reorder; × takes one out |
| **Feet** | Each place a foot rests, and how far it slides there. **Pin** holds a foot that slides, lit when it slides more than 1 cm. **Pin All Sliding** adds a pin for each |
| **Add a Step** | A form for a new step, below. **Now** puts the playhead's time in a time box |
| **Apply** | Rebuilds the clip from the steps. The view comes back at the same moment, camera and speed. Steps not applied yet are shown in the accent colour |
| **Revert** | Back to the steps applied last, without rebuilding |
| **Undo**, **Redo** | The steps before the last Apply, and back again. Kept while VS Code runs |
| **Clear** | No steps: the clip as made, after **Apply** |
| **Edit in Blender** | Opens the clip in Blender. See [Edit in Blender](https://edgemodders.ai/wiki/redcode/viewers.html#edit-in-blender) |

The steps:

| Step | Does |
|---|---|
| **Pin** | Holds a foot or a hand where it is from one time to another; the leg or arm bends to keep it there |
| **Key a bone** | Turns a bone at a moment (yaw, pitch and roll, in degrees), or moves a hand or foot (in cm), with an easing and a blend time. Pick the bone from the list, or click near its joint in the view with **Bones** on: a yellow dot marks it |
| **Layer another clip** | Lays another clip's motion on chosen bones only, such as the right arm or a hand, from a time, with a weight and a blend in and out. The other clip can be one you made or one of the game's on the same rig |
| **Trim** | Cuts the start or the end |
| **Loop** | Blends the end back into the start |

**Try it.** Open a clip you made, such as the one from [Making a clip](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip), and click **Edit**. **Pin All Sliding**, then **Apply**: the Feet now read near 0 cm, and the feet stay put. Then **Add a Step**, **Key a bone**, pick Head, drag the playhead to about 2.5 s, **Now**, Yaw 30, **Add Step** and **Apply**: he looks to his left around 2.5 s.

Tested by REDcode's developer, in REDcode and, through an assistant's edits, in the game. Planned: a timeline with moves on tracks, set by grabbing a bone in the view; hand poses from the game's clips (a fist, an open hand); joining two clips; and the same editor in the game, through the Animation Tools pack.

(Screenshot on the wiki, "The Edit tab": A made clip in the animation view with the Edit tab open: two steps in the list, the Feet with three rows and their slide in cm, Pin All Sliding, the Add a Step form for Key a bone with Head picked, Apply, Revert, Undo, Redo, Clear and Edit in Blender, and the seven media buttons under the view.)

#### Edit in Blender

**Edit in Blender**, in the Edit tab, opens the clip as it plays now, steps and all, on the base body in [Blender](https://edgemodders.ai/wiki/redcode/other-tools.html#blender), at 30 frames a second with the clip's frames as Blender's range. Pose it there and key what you change.

- Each time you save in Blender (`Ctrl+S`), what you saved becomes the clip's **new start**: REDcode fits it onto the rig, folds the steps into it and empties the list, and the view here rebuilds in place.
- **Undo** in the Edit tab brings back the clip before Blender, with its steps. **Redo** takes the Blender version again.
- While Blender is open, a **Blender** item shows in the status bar. Closing Blender ends the watch.
- The clip has a key on every frame, so a key you add on one frame changes that frame only: a one-frame flick. Delete the bone's keys around the moment first, or key a few frames.

Tested by REDcode's developer, with Blender 5.2.2.

## Streaming sectors

A streaming sector (`.streamingsector`), a piece of the game's world, opens on a 3D view with every mesh drawn where the game puts it. It has its own page: [The sector view](https://edgemodders.ai/wiki/redcode/sectors.html), with moving round, picking a thing and its materials, selecting many things, the sectors that reach in as layers, changing many things at once, and sector scripts.

## Sounds

A sound file opens in the **audio player**. Most `.wem` files in the game are voice lines, in the `localization` folders. `.opus` files open in it too.

- The player shows the sound's **waveform**. Click or drag on it to jump to a point.
- **Play** and **Loop** sit below it. `Space` plays and pauses.
- The toolbar shows the time, codec, channels and sample rate.
- **Save...** writes the sound to a file.
- **Open in EDGEwave** hands the sound to EDGEwave, the EDGE sound studio. See [Working with other tools](https://edgemodders.ai/wiki/redcode/other-tools.html#edgewave).
- **Lip Sync** shows on a voice line the game has lip sync for, a moment after the sound loads. It opens the [Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html) at that line.

WAV, Ogg, MP3 and FLAC files keep VS Code's own preview, and offer the player under **Open With...**.

(Screenshot on the wiki, "The audio player": A voice line (.wem) open in the audio player: the waveform with the play position, the Play and Loop buttons, and the codec and rate in the toolbar.)

## The game's sound effects

The game's sound effects aren't separate files you can browse. About **73,000 sounds** are packed together, with an index file that groups them into **events**, such as a gunshot or a door, each with a few variations. Each sound is known by a number, its **hash**.

**REDcode: Browse Game Sounds**, in the Game Assets **`...`** menu, opens that index as a list.

- Type in the filter box to narrow the list by event name, tag or hash. All the words must match, for example `revol reload`.
- Click a row to play its first sound, or a number to play that variation.
- The arrow keys step through the list and play as they go.
- **Copy Hash** copies the hash of the sound that's playing. **Replace…** [replaces it](https://edgemodders.ai/wiki/redcode/viewers.html#replacing-a-sound) with your own. **Save...** writes it as an `.opus` file.
- **Open in EDGEwave** works here too.

Event names come from WolvenKit's list of events for game version 1.6. It names about 10,900 of the 16,100 events that have sounds; the rest show only their hash.

(Screenshot on the wiki, "The game sound list": Browse Game Sounds open: the filter box with a search such as revol reload, the list of events with numbered variations, one playing.)

### Replacing a sound

You can replace any of the game's **sound effects** with a WAV file of your own, in one step. It needs a project open; without one, **Replace…** offers **New Project** or **Open Folder**.

1. In the game sound list, play the sound you want to replace and press **Replace…**.
2. If the event plays one of several sounds at random, REDcode asks: **Replace All** puts your WAV in for every one of them, **Only This One** for the one you picked. Replace only one and you hear yours only some of the time.
3. Pick your WAV.
4. Press **Pack and Play** in the message, with the game running under [REDnode](https://edgemodders.ai/wiki/rednode/), or **Pack and Install** and start the game.

| After | You should see |
|---|---|
| Step 3 | Your WAV copied to `source\raw\sounds\<hash>.wav`, named by the sound's hash, and imported at once: the Project view selects the new sound pack (`sfx_container_<number>.opuspak`) under **Archive**, beside a new sound index (`sfx_container.opusinfo`). Earlier replacements in the project stay. Replacing a sound you already replaced asks first |
| Step 4 | In the game, your sound plays where the old one did |

**Try it.** Filter the list for `cmn_generic_work_inhaler`, the sound of an NPC using an inhaler. It plays one of four sounds: press **Replace…**, then **Replace All 4**, and pick a WAV. Pack and Play, and watch an NPC use an inhaler.

Good to know:

- This was tested in the game by REDcode's developer, with the inhaler above.
- You can still do it by hand: save a WAV named by the hash (**Copy Hash**) anywhere under `source\raw`, and press **Import from Raw** on it.
- No rules for the WAV (length, mono or stereo, sample rate) are written down. Staying close to the original's length and channels is the careful choice.
- Every mod that replaces sounds carries its own copy of the game's one sound index. Two such mods can't both win: the game uses one index.
- With REDnode in the game, **Pack and Play** can swap a sound mod into the running game. See [Sound mods](https://edgemodders.ai/wiki/redcode/pack-install.html#sound-mods).

**Voice lines** (`.wem`) can be exported to Ogg to listen to or edit elsewhere, but not imported back yet. See [Export and import](https://edgemodders.ai/wiki/redcode/export-import.html#what-converts).

[EDGEwave](https://edgemodders.ai/wiki/edgewave/), the EDGE sound studio, builds on this to edit and mix sounds.
