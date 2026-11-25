<!-- Copied from EDGEweb's docs/wiki/edgechat/check-mod.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgechat/check-mod.html (reviewed 2026-11-13) -->

# When a mod doesn't work

A mod that doesn't show, crashes the game or does the wrong thing usually has a plain reason: a file in the wrong place, a capital letter in a path, an old build, a framework out of date. `/edge:check-mod` looks everywhere at once, and changes nothing. Allow 5 minutes.

## Step 1: Run it

Type `/edge:check-mod` and press Enter. Claude asks two things if it can't tell:

- **Which mod.** A WolvenKit project, a REDnode package, a mod in EDGEdeck by name, or files you name.
- **What you expected, and what happened instead.**

Say it plainly:

> My red_badge_coat mod: the coat should be red but it's the normal color.

## Step 2: Claude looks, and changes nothing

Claude reads your mod's files, the logs of the game and its frameworks, the running game, and EDGEdeck's records. Everything it does here only reads. Nothing in your mod, the game or EDGEdeck changes. The full list is in [What it checks](https://edgemodders.ai/wiki/edgechat/check-mod.html#what-it-checks).

## Step 3: Read the report

The report ends with one table, the most serious problem first, and says which one to fix first. An example of what it can look like (yours will differ):

| Problem | Where | Why it matters | Fix |
|---|---|---|---|
| The project was changed after the last pack | `packed\...\red_badge_coat.archive` is older than `source\...` | The game has the old build | Pack again, install and deploy |
| The mod is on in EDGEdeck but not deployed | EDGEdeck: `red_badge_coat`, waiting | The game folder doesn't have the mod yet | Close the game and deploy |

> Checked and found fine: game paths (no capitals or spaces), the logs (no errors naming the mod), conflicts with other mods (none).

(Screenshot on the wiki, "The check-mod report": Claude Code at the end of /edge:check-mod: a table of problems with where, why and the fix for each, and a line on what was checked and found fine.)

The line after the table says what was checked and found fine, so you know what was covered. A guess is marked as a guess.

Claude then offers to make the fixes. Each fix that changes the game folder, such as a deploy or an undo, asks you first, as always.

## Try it

The coat from [Recolor a jacket](https://edgemodders.ai/wiki/edgechat/recolor.html) works, so checking it finds nothing. Give the check something to find:

1. Ask Claude:

   > Recolor the jacket in red_badge_coat to blue. Don't pack it.

2. Type `/edge:check-mod` and name `red_badge_coat`.

| You should see | |
|---|---|
| A report that the project was changed after the last pack | The first row of the example above |
| The fix: pack again, install and deploy | Let Claude do it, or leave the coat as it is |
| Nothing changed by the check itself | The coat in the game has the color it had |

This exercise follows from what the command checks, but it is not one of EDGEchat's recorded tests. If the report differs, tell us on [Discord](https://discord.gg/63qP3Erw43).

## The usual causes

| Symptom | Often |
|---|---|
| Every mod broke at once, after a game update | Frameworks out of date. EDGEdeck's list says "game updated to ..." and which need updating: see [Frameworks and game patches](https://edgemodders.ai/wiki/edgedeck/frameworks.html) |
| A clothing or texture mod shows the old look | The mod isn't deployed. Or it's a REDmod, and the game was started without `-modded` (see [Recolor a jacket, step 6](https://edgemodders.ai/wiki/edgechat/recolor.html#step-6-start-the-game-and-look)). Or the build is older than the change. Or a path has a capital letter |
| A tweak has no effect | The `.yaml` file is outside `r6\tweaks`, or a record name has a typo |
| A REDnode package doesn't show | It crashed: its error is in REDnode's log. Or **Hot reload** is off, so REDnode hasn't loaded the latest files |
| Two mods fight | Both replace the same file, and the one higher in EDGEdeck's list wins: see [Conflicts](https://edgemodders.ai/wiki/edgedeck/conflicts.html) |

## What it checks

You don't need this list to run the command. It is here for when you want to know what was covered.

| Where | What Claude looks for |
|---|---|
| The mod's files | Capital letters or spaces in game paths, because the game never finds such a file. Files that don't open. A `packed` folder older than the changes in `source`. ArchiveXL files (`.xl`) that were left out of `packed`. Tweak files that aren't in `r6\tweaks` |
| A TweakXL tweak | That the file is valid YAML, and that every record and value it names exists in the game's data. A record is one entry in TweakDB, the game's database of items and stats |
| A REDnode package | That `rednode-app.json` is valid, that its id matches the folder's name, that the files it names are there, and that it lists the permissions it uses |
| The logs | The logs of RED4ext, ArchiveXL, TweakXL, Codeware, redscript, REDnode and Cyber Engine Tweaks in the game folder. Claude looks for your mod's name, errors and warnings |
| The running game | For a REDnode package: whether it runs or crashed, and its last error |
| EDGEdeck | Whether the mod is on and deployed, conflicts with other mods, files changed outside EDGEdeck, and frameworks out of date after a game patch |

## Check

- You got a table of problems with a fix for each, or a clear "nothing wrong found" with what was checked.
- Nothing changed until you chose a fix.

Next: [Keep a project easy to work on](https://edgemodders.ai/wiki/edgechat/projects.html). EDGEchat's [lesson 5](https://edgemodders.github.io/EDGEchat/guide-check.html) covers the same steps.
