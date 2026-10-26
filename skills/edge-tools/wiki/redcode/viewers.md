<!-- Copied from EDGEweb's docs/wiki/redcode/viewers.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/viewers.html (reviewed 2026-10-24) -->

# Textures, meshes and sounds

REDcode shows game files the way they look and sound, not only as data. Each viewer opens with a click, from your project or straight from Game Assets, with nothing to extract first.

## Textures

A texture (`.xbm`) opens in the **texture viewer**: the image over a checkerboard, so you can see what's transparent, with its size.

| Button | Does |
|---|---|
| **Fit** | Scales the image to the pane |
| **1:1** | One texture pixel per screen pixel |
| **Pixels** | Sharp, blocky scaling, to see single pixels |

The same viewer opens `.dds` and `.tga` files, which VS Code can't show. In the Project view, PNG, JPG, BMP and TIFF open in it too, because a black texture is invisible in VS Code's own preview on a dark theme. Elsewhere those keep VS Code's preview and offer **REDcode Texture** under **Open With...**.

To see a texture's settings (its format, compression, flags), open it in the CR2W editor: see [Editing game files](https://edgemodders.ai/wiki/redcode/editing.html#which-files-open-in-it). To change the picture, [export](https://edgemodders.ai/wiki/redcode/export-import.html) it to PNG, edit it in any image editor, and import it back.

(Screenshot on the wiki, "The texture viewer": A game texture open in the texture viewer, over the checkerboard, with the size and the Fit, 1:1 and Pixels buttons.)

## Meshes in 3D

A mesh (`.mesh`) opens on a **3D view** inside the CR2W editor. **Tree** shows the file's data; **3D** goes back.

| To | Do |
|---|---|
| Orbit | Drag |
| Pan | Right-drag, or Shift-drag |
| Zoom | Mouse wheel |
| Fit the model in view | **Frame** |

- The toolbar picks the **LOD**, the level of detail. LOD 1 has the most detail.
- It also turns on and off the **wireframe**, the **bounding box** and the **ground grid**, and shows the triangle count and the size in metres.
- The list on the right turns each **submesh** on and off, with its material name and triangle count.
- The **Appearance** list switches between the mesh's appearances. Each submesh then shows the material that appearance gives it.

Good to know:

- Game meshes are **coloured by material**, not textured.
- With [EDGEmat](https://edgemodders.ai/wiki/edgemat/) installed, the view shows the materials as EDGEmat renders them: colours only, and approximate. See [EDGEmat in 3D](https://edgemodders.ai/wiki/edgemat/view-in-3d.html).
- The view shows the **saved** file. Save to see your edits.
- `.glb` and `.gltf` files, such as a mesh you exported to Raw, open in the same viewer. A model that carries its own materials and textures, such as one from Blender, shows them; **Shading** switches to flat colours.

(Screenshot on the wiki, "The 3D mesh viewer": A vehicle or weapon mesh from the game in the 3D view: the model coloured by material, the LOD picker and toggles in the toolbar, and the submesh list on the right.)

## Sounds

A sound file opens in the **audio player**. Most `.wem` files in the game are voice lines, in the `localization` folders. `.opus` files open in it too.

- The player shows the sound's **waveform**. Click or drag on it to jump to a point.
- **Play** and **Loop** sit below it. `Space` plays and pauses.
- The toolbar shows the time, codec, channels and sample rate.
- **Save...** writes the sound to a file.
- **Open in EDGEwave** hands the sound to EDGEwave, the EDGE sound studio. See [Working with other tools](https://edgemodders.ai/wiki/redcode/other-tools.html#edgewave).

WAV, Ogg, MP3 and FLAC files keep VS Code's own preview, and offer the player under **Open With...**.

(Screenshot on the wiki, "The audio player": A voice line (.wem) open in the audio player: the waveform with the play position, the Play and Loop buttons, and the codec and rate in the toolbar.)

## The game's sound effects

The game's sound effects aren't separate files you can browse. About **73,000 sounds** are packed together, with an index file that groups them into **events**, such as a gunshot or a door, each with a few variations.

**REDcode: Browse Game Sounds**, in the Game Assets **`...`** menu, opens that index as a list.

- Type in the filter box to narrow the list by event name, tag or hash. All the words must match, for example `revol reload`.
- Click a row to play its first sound, or a number to play that variation.
- The arrow keys step through the list and play as they go.
- **Copy Hash** copies the hash of the sound that's playing. You need it to [replace the sound](https://edgemodders.ai/wiki/redcode/viewers.html#replacing-a-sound). **Save...** writes it as an `.opus` file.
- **Open in EDGEwave** works here too.

Event names come from WolvenKit's list of events for game version 1.6. It names about 10,900 of the 16,100 events that have sounds; the rest show only their hash.

(Screenshot on the wiki, "The game sound list": Browse Game Sounds open: the filter box with a search such as revol reload, the list of events with numbered variations, one playing.)

### Replacing a sound

You can replace any of the game's **sound effects** with your own sound:

1. In the game sound list, play the sound you want to replace and press **Copy Hash**.
2. Save your sound as a WAV file named after that hash, such as `832549876.wav`, under **Raw** in your project.
3. Press **Import from Raw** on it. REDcode writes the changed sound packs and a new sound index into your project's Archive. Earlier replacements in the project stay.
4. [Pack and install](https://edgemodders.ai/wiki/redcode/pack-install.html), then **restart the game**. Don't use Pack and Try or the hot folder for sounds: swapping sound files into a running game through Red Hot Tools crashes it.

**Voice lines** (`.wem`) can be exported to Ogg to listen to or edit elsewhere, but not imported back yet. See [Export and import](https://edgemodders.ai/wiki/redcode/export-import.html#what-converts).

[EDGEwave](https://edgemodders.ai/wiki/edgewave/), the EDGE sound studio, builds on this to edit and mix sounds.
