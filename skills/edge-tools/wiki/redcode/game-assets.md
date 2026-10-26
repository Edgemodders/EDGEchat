<!-- Copied from EDGEweb's docs/wiki/redcode/game-assets.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/game-assets.html (reviewed 2026-10-24) -->

# Game Assets

The game keeps its files in hundreds of [archives](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms). The **Game Assets** view shows what's inside them as one folder tree, as if they were unpacked: `base\characters`, `base\gameplay`, `ep1\...` and so on. Nothing is unpacked on disk: REDbridge reads the archives as you go.

(Screenshot on the wiki, "The Game Assets view": The Game Assets view with base expanded a few levels, folders showing their file counts, and the hover buttons on one file row.)

## Browsing

Folders open when you expand them and show how many files they hold. Click a file to open it, straight from the game:

| File | Opens in |
|---|---|
| A texture (`.xbm`) | The [texture viewer](https://edgemodders.ai/wiki/redcode/viewers.html#textures) |
| A mesh (`.mesh`) | The CR2W editor's [3D view](https://edgemodders.ai/wiki/redcode/viewers.html#meshes-in-3d) |
| A sound (`.wem`) | The [audio player](https://edgemodders.ai/wiki/redcode/viewers.html#sounds) |
| The sound effect index (`sfx_container.opusinfo`) | The [game sound list](https://edgemodders.ai/wiki/redcode/viewers.html#the-games-sound-effects) |
| Any other game file | The [CR2W editor](https://edgemodders.ai/wiki/redcode/editing.html) |

Files opened from Game Assets are **read-only**, and a banner says so. The game's own files are never changed. To change a file, add it to your project first.

## Add to Project

**Add to Project** copies a game file, or a whole folder of them, into your project's `source/archive`, at the same game path. It's the hover button on every row, and the first item in the right-click menu.

- REDcode then shows what it added in the Project view, opened down to the file, because editing it is usually the next step.
- For a folder, REDcode asks first and says how many files it will add.
- It needs a project open. Without one, make one with **REDcode: New Project**. See [Projects](https://edgemodders.ai/wiki/redcode/projects.html).

Only add the files you mean to change. Every file in `source/archive` goes into your mod and replaces the game's copy.

## Right-click menu

| Command | Does |
|---|---|
| Add to Project | Copies the file or folder into the project, as above |
| Extract to... | Copies the file or folder to any folder you choose, as it is in the archive. For a look in another tool, not for your mod |
| Open Texture | On a texture: opens it in the texture viewer |
| Open in Editor | Opens the file read-only in its editor or viewer, as a click does |
| Open as JSON | Opens a copy of the file as WolvenKit JSON text, for reading. Changes to that copy go nowhere: to change the file, add it to your project. See [Editing as JSON](https://edgemodders.ai/wiki/redcode/editing.html#editing-as-json) |
| Copy Game Path | Copies the path inside the game, such as `base\gameplay\...`. Also a hover button. The status bar shows what was copied |

## Filter

The **Filter Game Assets** button in the view's title bar narrows the tree to matching files while you type.

- A pattern is **words separated by spaces**, and a file must match all of them. A plain word matches anywhere in the path, so `osprey mesh` finds the Nokota Osprey's meshes.
- `*` and `?` are wildcards: `ep1\weapons\*.xbm` or `*.inkatlas`. `/` works as well as `\`, and case doesn't matter.
- The folders on the way to the matches open by themselves, and a chain of single folders shows as one row.
- **Enter** keeps the filter. The message above the tree shows the pattern and how many files match. **Clear the Game Assets Filter**, the button next to it, brings the full tree back.
- Game Assets shows at most 5,000 matches, and says so when there are more. Add words to narrow it down.
- **Add to Project** on a folder in a filtered tree takes only the matching files under it.

(Screenshot on the wiki, "A filtered tree": Game Assets filtered with a pattern such as osprey mesh, the message above the tree showing the pattern and match count, and the matching mesh files with their folders opened.)

## Search

The **Search game files** button (the magnifier) opens a search box that finds files across all archives as you type. Pick a file and choose what to do with it: **Open as JSON**, **Add to project** or **Copy path**.

**REDcode: Open game file as JSON**, from the command palette, is the same search, and opens the file you pick as JSON straight away.

Filter or search? The filter keeps you in the tree, so you can see where files sit and add whole folders. Search is quicker when you know part of a file's name.

## Sounds, TweakDB and texts

Three more ways into the game's data sit next to Game Assets:

- **Browse Game Sounds**, in the Game Assets **`...`** menu, opens the game's 73,000 sound effects as a list you can filter and play. See [Textures, meshes and sounds](https://edgemodders.ai/wiki/redcode/viewers.html#the-games-sound-effects).
- The **TweakDB** view lists the game's database records. See [TweakDB and tweaks](https://edgemodders.ai/wiki/redcode/tweakdb.html).
- The **LocKeys** view finds the game's on-screen texts. See [The LocKeys view](https://edgemodders.ai/wiki/redcode/game-assets.html#the-lockeys-view) below.

## The LocKeys view

The game doesn't store its texts where they're used. An item's name, for example, is a reference such as `LocKey#12345`, and the text for each language sits in the game's localization files. The **LocKeys** view in the REDcode sidebar finds them, for the base game and Phantom Liberty.

- **Search LocKeys...**, the magnifier, takes a key such as `LocKey#12345` or a number, a secondary key, or words that must all be in the text.
- **LocKey Language...** picks one of the game's 19 languages. The setting is `redcode.loc.language` (default `en-us`).
- Click an entry to open it on its row in its localization file: the game's copy read-only, your project's to edit.
- Hover buttons on each entry: **Copy LocKey** and **Add to Project Onscreens**. The right-click menu adds **Copy Text**.
- **Add to Project Onscreens** copies the entry into your project's own localization file, creating it, and the `.xl` file that tells ArchiveXL about it, when there is none. It opens the file on that row, ready to change. Your mod then needs ArchiveXL in the game.
- Your project's own entries count, and win over the game's, as they do in the game.

Hover over `LocKey#...` in a tweak, YAML, JSON, Lua or redscript file to see its text. The CR2W editor shows the text beside `LocKey#...` values too.

(Screenshot on the wiki, "The LocKeys view": The LocKeys view with a search for a word, entries with their keys and texts, and the hover buttons on one entry.)

## When the view is empty

Game Assets shows **Set Game Folder**, **Show REDbridge log** and **Restart REDbridge** when REDbridge isn't running or has no game loaded. See [Troubleshooting](https://edgemodders.ai/wiki/redcode/troubleshooting.html#game-assets-is-empty).
