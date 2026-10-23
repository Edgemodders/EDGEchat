---
name: wolvenkit-projects
description: Make and test a Cyberpunk 2077 mod from a WolvenKit project (.cpmodproj) with the EDGE servers - redcode to fill, edit and pack it, edgemat for materials, edgedeck to install and deploy, rednode to swap it into the running game. Use when creating, building or testing a WolvenKit or REDcode project.
---

# A WolvenKit project, from start to the game

The steps cross four servers; each server's own tool descriptions say how to call it. The project format is WolvenKit's, which REDcode reads and writes the same way. Facts from REDcode's, EDGEdeck's and REDnode's code, read 2026-10-23, with the sources at the end.

## The project

| Path | Holds |
|---|---|
| `<Name>.cpmodproj` | The project file, XML (below) |
| `source/archive/` | Game files (CR2W) at their game paths: `source/archive/base/...`. Packed into the mod's `.archive` |
| `source/raw/` | Working files exported from `source/archive`: `.glb` meshes, `.png` textures, `.wav` sounds. Imported back after editing |
| `source/resources/` | Loose files at their install paths: `r6/tweaks/<mod>/x.yaml`, `r6/scripts/<mod>/x.reds`, `bin/x64/plugins/cyber_engine_tweaks/mods/<mod>/`, and ArchiveXL `.xl` files |
| `packed/` | The build, laid out like the game folder. EDGEdeck installs from here |

A new project is the four folders (`source/archive`, `source/raw`, `source/resources`, `packed`) and this file. REDcode's **New project** command makes the same:

```xml
<?xml version="1.0" encoding="utf-8"?>
<CP77Mod xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <Name>MyJacket</Name>
  <ModName>MyJacket</ModName>
  <Author>you</Author>
  <Email />
  <Description />
  <Version>1.0.0</Version>
</CP77Mod>
```

`ModName` names the archive (`MyJacket.archive`). Keep game paths lowercase, with no spaces (see the `archives-and-cr2w` skill).

## 1. Bring game files in

| To | Use |
|---|---|
| Copy a game file into the project as it is | `archive_extract` with `outFile` = `<project>/source/archive/<game path>` |
| Copy it and change values in one go | `cr2w_edit_file` with the game `path` and `outFile` there |
| Edit a file already in the project | `cr2w_edit_file` with `file` (saved in place), or `cr2w_open` ... `cr2w_save` for many changes |

Never change the game's archives; the tools never do.

## 2. Edit

| What | How |
|---|---|
| Values in a CR2W file | `cr2w_*` tools, on the file in `source/archive` |
| A mesh or texture | `project_export` (to `source/raw`: `.glb`, `.png`, ...), edit it in Blender or an image editor, then `project_import` back over the file in `source/archive`. A GLB imports only over an existing `.mesh` at the same path; for a new mesh pass `template` |
| A garment's colors or materials | The `edgemat` server: `mat_find` by the item's name, `mat_describe`, `mat_edit` in words, saved into the project |
| A game sound | `sound_import` with `<hash>.wav` files |
| TweakDB, scripts, CET | Files in `source/resources` at their install paths |

## 3. Pack

`project_pack` packs **only `source/archive`**: `dir` = `<project>/source/archive`, `outDir` = `<project>/packed/archive/pc/mod`, `modName` = the project's `ModName`. It warns about paths with capitals or spaces: fix those.

Then copy `source/resources` into `packed` yourself, as REDcode's **Pack** command does:

| File in `source/resources` | Goes to |
|---|---|
| `.xl` (ArchiveXL) | `packed/archive/pc/mod/`, beside the archive |
| `.tweak` | `packed/<same path>`, only from `r6/tweaks/`; anywhere else it is left out |
| `.yaml`, `.yml` outside `r6/tweaks/` | Copied, but TweakXL will not read it: move it under `r6/tweaks/` |
| Everything else | `packed/<same path>` |

Or ask the user to run REDcode's **Pack** command, which does all of it (and REDmod packing).

## 4. Into the game

1. `edgedeck_install_project` with the `.cpmodproj` path. The first time it adds the mod (version `dev`) and turns it on; later calls replace its files. Nothing reaches the game yet.
2. `edgedeck_pending` says what the deploy will change. The game must be closed: deploy and undo refuse while it runs.
3. `edgedeck_deploy`. Claude Code asks the user first. `edgedeck_undo` takes it back.

## 5. Change it while the game runs

With the game at a loaded save and RED Hot Tools installed: pack again, then `archives_reload` with the packed archive's full path. It swaps the archive in without a restart (Claude Code asks first). Things already in the world keep the old version until they load it again; the clothing V wears is applied again by itself.

The swap replaces the file in `archive/pc/mod` that EDGEdeck deployed, so EDGEdeck's next deploy reports it as **changed in game folder** and skips it until told what to do. When the project made that change: run `edgedeck_install_project` again (the library gets the new build), then deploy with `restore` for that path, which links the game's copy to the library again. Do not choose `keep` or `restore` for the user without saying what each does: `keep` takes the game folder's file into the library, `restore` overwrites it with the library's.

## Sources

| Fact | Source |
|---|---|
| Project folders and XML | REDcode `extensions/redcode/src/project.ts` |
| What Pack copies from `source/resources` | REDcode `extensions/redcode/src/pack.ts` |
| `project_pack` packs one folder | redcode-mcp 0.3.0's tool description |
| Install, pending, deploy, keep and restore; deploy refuses while the game runs | EDGEdeck `src/mcp.ts`, `src/verbs.ts` |
| The swap copies into RED Hot Tools' folder, which replaces the archive | REDnode `packages/overlay/main.js` (`archives.reload`) |
| A swapped archive shows as changed in game folder | Seen in P1 on 2026-10-21 (`EDGEmat_M3.archive`). The `install_project` then `restore` fix is **not tested yet** |
