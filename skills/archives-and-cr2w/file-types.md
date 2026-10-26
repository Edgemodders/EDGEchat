# File types

The common CR2W file types in Cyberpunk 2077 2.5. Each root type was read from a sample file through the `redcode` server on 2026-10-23 (game 2.31) and again on 2026-10-26 (game 2.5): none changed (`archive_search` for the extension, then `cr2w_read` of the root); the counts are rough, from a substring search. "Holds" for `.ent`, `.app`, `.mesh`, `.mi`, `.mt`, `.mlsetup`, `.mlmask`, `.xbm` and `.csv` comes from their fields, traced in [SKILL.md](SKILL.md); for the others it is read from the root type's name only, and is **unverified**. Check a file's fields (`cr2w_read`, `cr2w_describe_type`) before relying on it.

| Extension | Root type | Holds | About |
|---|---|---|---|
| `.ent` | `entEntityTemplate` | An entity: its `components`, and `appearances` that each point at an `.app` and an appearance name in it | 22,000 |
| `.app` | `appearanceAppearanceResource` | Named `appearances`, each with its own `components` (mesh components with `mesh` and `meshAppearance`) and `compiledData` | 3,300 |
| `.mesh` | `CMesh` | Geometry, with `appearances` (a material name per submesh, `chunkMaterials`), `materialEntries`, and the materials in `localMaterialBuffer` or `externalMaterials` | 105,000 |
| `.mi` | `CMaterialInstance` | A material: a `baseMaterial` (an `.mt` or another `.mi`) and `values` (textures, colors, numbers) | 10,700 |
| `.mt` | `CMaterialTemplate` | A shader with its parameters, such as `engine\materials\multilayered.mt` | 390 |
| `.mlsetup` | `Multilayer_Setup` | A multilayered material's layers: a surface (`.mltemplate`), color and settings per layer | 17,900 |
| `.mlmask` | `Multilayer_Mask` | Where each layer of a multilayered material goes | 5,800 |
| `.mltemplate` | `Multilayer_LayerTemplate` | A surface for one layer (leather, metal, rock), with its color presets | 390 |
| `.xbm` | `CBitmapTexture` | A texture. `texture_to_png` decodes it | 56,700 |
| `.morphtarget` | `MorphTargetMesh` | A mesh with shape changes, such as heads | 130 |
| `.rig` | `animRig` | A skeleton | 1,500 |
| `.anims` | `animAnimSet` | Animations | 14,000 |
| `.animgraph` | `animAnimGraph` | How an entity picks and blends its animations | 530 |
| `.workspot` | `workWorkspotResource` | What a character does at a spot: sit, lean, use a device | 3,900 |
| `.inkatlas` | `inkTextureAtlas` | UI images cut from a texture (icons) | 1,350 |
| `.inkwidget` | `inkWidgetLibraryResource` | UI layouts | 1,700 |
| `.scene` | `scnSceneResource` | A scene: dialogue, choices, animations | 9,400 |
| `.quest` | `questQuestResource` | A quest | 700 (unverified: the search total less the `.questphase` files) |
| `.questphase` | `questQuestPhaseResource` | A part of a quest's graph | 3,900 |
| `.journal` | `gameJournalResource` | The journal: quests, codex, messages (`base\journal\cooked_journal.journal` and `ep1\journal\cooked_journal.journal`, both in `ep1_2_gamedata.archive` on 2.5) | 2 |
| `.streamingsector` | `worldStreamingSector` | One piece of the world: the objects placed in it | 33,000 |
| `.cfoliage` | `worldFoliageCompiledResource` | A sector's foliage | 370 |
| `.physicalscene` | `CPhysicsDecorationResource` | Physics for a decoration | 60 |
| `.csv` | `C2dArray` | A table, as `headers` and `data` rows (also `compiledData`). The factories are `.csv` files | 135 |
| `.json` | `JsonResource` | Data in a CR2W wrapper, mostly localization (`onscreens`) | 74,000 |

Also in the archives, and not opened here as CR2W (**unverified**): `.wem` (about 122,000) and one `.opusinfo` (sound; use the `sound_*` tools), and `.bk2` (about 670, video).
