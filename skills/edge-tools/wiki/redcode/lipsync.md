<!-- Copied from EDGEweb's docs/wiki/redcode/lipsync.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/lipsync.html (reviewed 2026-11-25) -->

# The Lip Sync editor

When a character speaks in Cyberpunk 2077, their mouth follows the words. The game keeps that movement as **lip sync**: one short clip per spoken line, with curves for the jaw, the lips, the tongue, the brows and the blinks. The clips sit in `.anims` sets in the game's `lipsync` folders, one set per character per scene.

The **Lip Sync editor** shows those lines the way they play. Pick a character, pick a line, and hear it while it's spoken on the head it was made for, with the curves running under the voice. It came to REDcode from EDGEfab in REDcode 0.10.17.

| On this page | |
|---|---|
| [Opening it](https://edgemodders.ai/wiki/redcode/lipsync.html#opening-it) | The command, and the links from the audio player and the animation view |
| [A character's lines](https://edgemodders.ai/wiki/redcode/lipsync.html#a-characters-lines) | Scenes, lines and the filter |
| [Playing a line](https://edgemodders.ai/wiki/redcode/lipsync.html#playing-a-line) | The head, the curves and the controls |
| [Adding a line](https://edgemodders.ai/wiki/redcode/lipsync.html#adding-a-line) | New words in the character's voice, through EDGEwave |
| [What it doesn't do yet](https://edgemodders.ai/wiki/redcode/lipsync.html#what-it-doesnt-do-yet) | And what is planned |
| [For assistants and other tools](https://edgemodders.ai/wiki/redcode/lipsync.html#for-assistants-and-other-tools) | The MCP tools and the API |

(Screenshot on the wiki, "The Lip Sync editor": A Lip Sync tab on Judy: her scenes and lines on the left with the scene filter, one line open on the right with its words, the voice as a waveform, the curves in lanes under it (jaw, lips, tongue, brows, eyes) with the marker part way along, and Judy's head in 3D speaking the line.)

## Opening it

| From | Do |
|---|---|
| The Command Palette | Press `Ctrl+Shift+P` and run **REDcode: Open Lip Sync**. Pick a character from the list: the ones with the most scenes come first (V, Johnny, Panam), and you can type to filter. A tab **Lip Sync: \<character\>** opens |
| A voice line in the [audio player](https://edgemodders.ai/wiki/redcode/viewers.html#sounds) | A **Lip Sync** button shows a moment after the sound loads, when the game has lip sync for that line. It opens the tab at the line. Sounds that are no voice line have no such button |
| A lip sync set in the [animation view](https://edgemodders.ai/wiki/redcode/viewers.html#animations) | **Open in Lip Sync**, in the view's bar, opens the tab at the line of the clip you picked. Other `.anims` files have no such button |

The audio player and the animation view stay each file's basic view: the Lip Sync editor adds to them. The tab comes back after a window reload, on the same character and line.

## A character's lines

The left of the tab lists the character's **scenes**, by the game's scene names, and the lines in each, with their words.

- Type in the **scene filter** to narrow the scenes, such as `mq` for minor quests.
- A character with many scenes shows them a page at a time: **Show More Scenes** lists more.
- **Change Character** picks another character, in the same tab.
- Opened at a line from elsewhere, the filter holds that line's scene. Clear the box to see them all.

## Playing a line

Pick a line. The right of the tab shows:

- the line's **words**, and the lip sync set it comes from;
- the **voice** as a waveform;
- the **curves**, in lanes: jaw, lips, tongue, brows and eyes, with how many of the clip's tracks move, such as "76 of 414 tracks move";
- the character's own **head** in 3D, within a few seconds. A sketch of a mouth stands in while it loads.

| To | Do |
|---|---|
| Play and stop | **Play**, or `Space` |
| Go to a moment | Drag the marker along the curves |
| Step a frame | The arrow keys |
| Back to the start | `Home` |
| Turn the head | Drag it |
| Set the volume | The volume slider |

The head has no hair or textures yet.

**Try it.** Run **REDcode: Open Lip Sync** and pick Judy. Pick her line "Heeeeey, V!" and press **Play**: you hear it while her head speaks, and the marker runs over the curves. With Phantom Liberty, open `ep1\localization\en-us\vo\angelica_whelan_mq306_f_2ce9c077837e0000.wem` from Game Assets and press **Lip Sync** in the audio player: the tab opens on Angelica Whelan at "There you are."

Tested by REDcode's developer and by script: the lines, the head, the curves and the controls, the filter, the links from the audio player and the animation view, and the tab coming back after a reload.

## Adding a line

You can type a new line for the character and see it spoken with lip sync. It needs [EDGEwave](https://edgemodders.ai/wiki/edgewave/) 0.3.0 or later, your [ElevenLabs key](https://edgemodders.ai/wiki/edgewave/voices.html#your-key) in REDcode's [Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view), and a voice for the character in EDGEwave's [character voices](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices).

1. In the tab, type a short line and press Enter.
2. The first time, EDGEwave asks whether REDcode may spend your ElevenLabs credits.
3. EDGEwave speaks the line in the character's voice, with when each letter is spoken. REDcode makes the lip sync from the words and that timing, and plays both on the head.
4. **New Take** speaks it again, for another reading.

- Each take spends ElevenLabs credits, on your own account.
- Without EDGEwave, the tab says so. Without a voice for the character, EDGEwave says how to set one.
- The line stays in the tab until it closes. Writing it into a mod comes later.

This shipped **untested**: REDcode's developer has not yet run it in VS Code. If you try it, please tell us on [Discord](https://discord.gg/63qP3Erw43) how well the mouth matches the voice.

## What it doesn't do yet

| Not yet | Planned |
|---|---|
| Change a line's curves | Editing the lip sync on the curves, and making it again from the words or the voice |
| See a line on another head | A **Head** picker: any character's head, V's among them |
| Put a new line, voice or subtitle into your mod | Writing the lip sync, the voice (through EDGEwave) and the subtitle into your project, so they play in the game |
| Pick an earlier take, or a voice in the tab | Takes as buttons, and a voice control through EDGEwave |
| Lip sync from NVIDIA's Audio2Face | A choice beside the letter timing, for power users |
| A made line spoken in the running game | Live lip sync on an NPC, through REDnode |

The plans are on REDcode's [Lip Sync design page](https://edgemodders.github.io/REDcode/design/lipsync.html).

## For assistants and other tools

- **Assistants:** `redcode-mcp` has `lipsync_lines` (the characters with lip sync, and a character's lines scene by scene), `lipsync_line` (one line's clip as curves) and `lipsync_make` (a spoken line, with its timing from EDGEwave's `voice_speak_line`, into mouth shapes and the game's lip sync tracks). See [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html#what-it-can-do).
- **Other extensions:** `REDcodeApi.openLipSync(character?, clip?)` opens the tab on a character, and at one of their lines. See [REDcode's API](https://edgemodders.ai/wiki/redcode/other-tools.html#for-extension-authors-redcodes-api).

These were EDGEfab's `fab_lipsync_*` tools and its Lip Sync tab. EDGEfab now covers props and clothing; lip sync is REDcode's.
