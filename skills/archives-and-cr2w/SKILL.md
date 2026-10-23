---
name: archives-and-cr2w
description: How Cyberpunk 2077's game files are organised and linked. The .archive files, game paths and their hashes, what each file type holds (.ent, .app, .mesh, .mi, .mt, .mlsetup, .mlmask, .xbm, .anims, .rig, .inkwidget, .scene, .questphase, .streamingsector, .csv, .json and more), how an item in the game leads to its files (TweakDB record, factory .csv, .ent, .app, .mesh, material, texture), and how a mod archive replaces a game file. Use when finding, reading, replacing or editing the game's files, when the user names one of these file types, or asks which file something in the game comes from.
---

# The game's files

Checked against Cyberpunk 2077 2.31 (with Phantom Liberty) through the `redcode` server on 2026-10-23. The server's tool descriptions say how to call its tools and the CR2W editing rules; this skill is what the files are and how they link. File types in detail: [file-types.md](file-types.md).

## Where they are

Paths are under the game's install folder.

| Folder | Holds |
|---|---|
| `archive/pc/content/` | The base game's archives: `basegame_*`, `audio_*`, `memoryresident_*`, and one `lang_<language>_text.archive` per language (`lang_en_voice` for English voices) |
| `archive/pc/ep1/` | Phantom Liberty's archives: `ep1_*`, `audio_1_general`, `lang_*` |
| `archive/pc/mod/` | Mods' archives, and ArchiveXL's `.xl` files |
| `r6/cache/` | TweakDB (`tweakdb.bin`, `tweakdb_ep1.bin`) and compiled scripts. TweakDB is not in the archives: see the `tweakxl` skill |

The game has 57 archives holding 583,798 files. Inside them, game paths start with `base\` (505,491 files), `ep1\` (77,560), `engine\` (387) or `dlc\` (177). Phantom Liberty's archives also carry `base\` paths. `base\localization` (154,942 files) holds, per language, the on-screen texts (`onscreens`), subtitles, voice lines (`vo`, `vo_holocall`, ...) and lip sync. For texts, use the `loc_*` tools rather than the files.

## Game paths and hashes

- A game path is lowercase with backslashes: `base\characters\common\player_base_bodies\player_female_average\t0_000_pwa_base__full.mesh`.
- An archive stores each file by the FNV1a64 hash of its path, not the path. That exact path hashes to `11686970451251223753`; the same path with capitals or forward slashes hashes to something else, so the game would not find it. Keep a mod's paths lowercase, with no spaces.
- Some files are known only by hash, because no one has named them. They show as numbers; `hash_resolve` names the ones the hash list knows.
- Files point at each other by game path (a `DepotPath`), so a path must match exactly.

## From an item in the game to its files

Each step names the field to follow. The example is the jacket `Items.Cop_01_Set_Jacket` ("Heavy-duty aramid-reinforced badge coat"), traced on 2026-10-23.

| Step | File | Follow | In the example |
|---|---|---|---|
| 1 | TweakDB record | `entityName`, `appearanceName`, `appearanceSuffixes` | `player_outer_torso_item`, `set_01_cop_01_t2_`, suffixes Gender and Camera |
| 2 | Factory `.csv` (`base\gameplay\factories\...`) | The row whose first column is `entityName`; the second is an `.ent` | `items\clothing.csv`: `player_outer_torso_item` = `base\gameplay\items\equipment\torso\player_outer_torso_item.ent` |
| 3 | `.ent` (entity template) | In `appearances`, the entry named `appearanceName` plus the suffixes: its `appearanceResource` (an `.app`) and `appearanceName` | `set_01_cop_01_t2_&Female&TPP` = `base\characters\appearances\player\items\outfit\set_01.app`, appearance `_cop_01_t2_w` |
| 4 | `.app` (appearance resource) | In `appearances`, that name; its mesh components give `mesh` and `meshAppearance` | `entGarmentSkinnedMeshComponent`: `...\t2_064_pwa_jacket__t2_player_heavy_02.mesh`, appearance `cop_blue_black` |
| 5 | `.mesh` | In `appearances`, that name: `chunkMaterials` name one material per submesh. In `materialEntries`, that name: `index`, and `isLocalInstance` | `materialEntries.22`, local |
| 6 | The material | A local one is in the mesh's `localMaterialBuffer.materials.<index>`; otherwise in `externalMaterials`, as an `.mi` file (field names; not traced). Its `baseMaterial` is the shader (`.mt`) or another `.mi`; its `values` are the textures and settings | `engine\materials\multilayered.mt`, with an `.mlsetup`, an `.mlmask` and a normal map `.xbm` |

Clothing has Female and Male, and FPP (first person) and TPP (third person), appearances. A change to one garment usually needs all four. Weapons, vehicles, NPCs and other items follow the same idea from their own records and factories. `base\gameplay\factories.csv` lists every factory (`items\weapons\weapons.csv`, `vehicles\vehicles.csv`, `characters\npcs\friendly_npc.csv`, ...); Phantom Liberty adds its own in `ep1\gameplay\factories.csv`.

Multilayered materials (`multilayered.mt`): the `.mlmask` says where each layer goes, and the `.mlsetup` gives each layer a surface (`.mltemplate`), a color and settings. Recoloring a garment means editing its `.mlsetup`, which the `edgemat` server does in plain words.

## Replacing a game file with a mod

- A file in a mod's archive at the same game path replaces the game's file everywhere it is used: every item, NPC or place that uses it.
- Mod archives in `archive/pc/mod` load in alphabetical order, and the one loaded first wins a conflict. `modlist.txt` in that folder names archives to load first. EDGEdeck manages both (EDGEdeck's design).
- To add something new, such as a new item or a new appearance, instead of replacing one, give it new paths and register it with ArchiveXL (`.xl`) and TweakXL (see the `tweakxl` skill; not checked against the game here). Replacing a shared file is the quickest change and the one most likely to conflict with other mods.
- A mod's archive is made by packing a WolvenKit project: the game files go under `source/archive` at their game paths. See the `wolvenkit-projects` skill.
- Never change the game's own archives. Changed copies go into the project.

## Reading and editing

- Look before editing: read the few values you need (`cr2w_read`) rather than converting a whole file. `.ent` files can be large: the torso item has 2,318 appearances.
- `.ent` and `.app` files hold their components twice: in `components` and in `compiledData`, which is rebuilt from `components` when the file is saved. Edit `components`. In an `.app`, both sit inside each appearance.
- Factory `.csv` files have the same twin: `data` and `compiledData`.
- Edit a copy in the mod's project, never the game's file: give a game path with an `outFile` under the project's `source/archive`, at the same game path.
