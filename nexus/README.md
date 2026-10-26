# EDGEchat on Nexus Mods

The source of EDGEchat's Nexus Mods page lives here, so updates are edits in the repo, not in Nexus's text box. The same way as REDnode's, REDagent's and EDGEmat's.

**Page:** https://www.nexusmods.com/cyberpunk2077/mods/35680 (made by the owner on 2026-10-26, with no files yet). It is kept through Nexus's v3 API: `tools/nexus/` (copied from REDnode; keep the copies the same) and `nexus.json` (the page, and how a release uploads: Mod Manager Download off, the old version archived). The release workflow's **Update Nexus Mods** box uploads the zip, adds the changelog and pushes `description.bbcode`. The first release creates the page's main file; later ones add versions to it.

| File | What it is |
|---|---|
| `description.bbcode` | The page's description, in Nexus's BBCode |
| `README.md` | This page: the other fields of the Nexus form, the download, and how to update |
| `nexus.json` | The page (35680), its internal mod id, how a release uploads, and the hash of the description last pulled (Nexus's empty template, on 2026-10-26) |

## The Nexus form

| Field | Value |
|---|---|
| Mod name | EDGEchat |
| Version | The plugin's version, from `.claude-plugin/plugin.json` (a release sets it) |
| Category | Modders Resources and Tutorials |
| Brief overview | A plugin for Claude Code that makes Claude a Cyberpunk 2077 modding assistant: modding skills, and the REDnode, REDcode, EDGEdeck and EDGEmat tools in one install. A preview, and a Claude Code plugin, not a game mod. (255 characters at most) |
| Author | Edgemodders |
| Primary image | `docs/assets/brand/nexus.png`. The banner (`docs/assets/brand/banner.png`) is at the top of the description |
| Requirements | None on Nexus. Off-site: Claude Code; for the servers Windows and Node.js 20 or later. REDnode (Nexus 35419) for the running game, EDGEmat (Nexus 35422) for materials, REDcode and EDGEdeck from GitHub |
| Permissions | MIT: open source, free to modify and redistribute with the license notice |
| Tags | Modders resource, utility, tools |

## The download

One main file: `EDGEchat-<version>.zip`, the same file as on the GitHub release:

| Entry | What it is |
|---|---|
| `EDGEchat-<version>/` | The plugin as its marketplace serves it: `.claude-plugin`, `skills`, `scripts`, `README.md`, `LICENSE`. `/plugin marketplace add "<that folder>"` installs from it without GitHub |
| `README.txt` | How to install, from the marketplace or from the folder |

**Mod Manager Download is off** for this file (`"modManager": false`): it is a Claude Code plugin, and Vortex would deploy it into the game folder, where it does nothing.

`node tools/release/nexus-zip.mjs` builds it by hand into `dist/`.

## Updating the page

1. Edit `description.bbcode` here, check it with `node tools/check-bbcode.mjs nexus/description.bbcode`, commit, push.
2. With a release: tick **Update Nexus Mods** beside **Make a release** in the Release workflow. After the GitHub release it uploads the zip, adds the version's changelog (`node tools/release/notes.mjs --nexus`) and pushes `description.bbcode` when it differs from the live one.
3. The push never overwrites an edit made on Nexus: if the live description is neither the one last pulled nor the one the previous release pushed, the run stops before it builds. Then `node tools/nexus/nexus.mjs pull`, merge with `git diff`, commit, and run again. `node tools/nexus/nexus.mjs status` shows the page's version, files and whether its description matches.
4. Screenshots uploaded on Nexus show in the description as `staticdelivery.nexusmods.com` links; keep them when editing.

The key: in CI the organisation secret `NEXUS_KEY`; on the dev PC the DPAPI file `%APPDATA%\Edgemodders\nexus-key.txt` (`tools/nexus/api.mjs`). Never print it or pass it on a command line.
