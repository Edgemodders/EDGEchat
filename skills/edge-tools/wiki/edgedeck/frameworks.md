<!-- Copied from EDGEweb's docs/wiki/edgedeck/frameworks.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/frameworks.html (reviewed 2026-10-24) -->

# Frameworks and game patches

## What frameworks are

Many Cyberpunk mods don't work alone. They're built on **frameworks**: community tools that add abilities the game doesn't have. A mod page on Nexus lists the frameworks it needs under its requirements.

| Framework | What it does |
|---|---|
| RED4ext | Loads native plugins into the game. Many other frameworks are RED4ext plugins |
| Cyber Engine Tweaks (CET) | Runs Lua script mods and their in-game windows |
| redscript | Compiles `.reds` script mods into the game's scripts |
| ArchiveXL | Lets archive mods add new items and appearances, not only replace existing ones |
| TweakXL | Changes the game's database of items and stats from simple YAML files |
| Codeware | A library many script mods use |
| Audioware | Adds custom sounds |
| input_loader | Adds custom key bindings |
| mod_settings | Gives mods a settings menu in the game |
| [REDnode](https://edgemodders.ai/wiki/rednode/) | Runs Node.js mods and overlay apps. Shown with the frameworks because REDnode packages need it |

In EDGEdeck, frameworks are mods like any other: you add them from Nexus (or as files), turn them on, and deploy. They're pinned in the **Frameworks** group at the top of the list because so much depends on them.

## Getting the frameworks

Today, add each framework from its Nexus page like any mod (see [Adding mods](https://edgemodders.ai/wiki/edgedeck/adding-mods.html)). Most mods need at least RED4ext, Cyber Engine Tweaks, redscript, ArchiveXL, TweakXL and Codeware.

**Get the frameworks** is built for the next version after 0.28.0 and not released yet. One button gets those six: on the Frameworks group's header, in the Set up group while any is missing, on the EDGEdeck page, and in the `...` menu. A list shows what the library has and what's out, with the missing and older ones ticked. The files come from each author's GitHub release, the same as on Nexus, so no Nexus account is needed. After a game patch, the page offers **Update the frameworks**. Then deploy.

## The game version

The Frameworks group's header shows the game version, for example `3, 3 on · game 2.31`. EDGEdeck reads the version from the game's executable and records it at every deploy.

## After a game update

**A game patch is the most common reason a modded game stops starting.** Frameworks hook deep into the game, and a patch can move what they hook into. Framework authors usually release updated versions within days.

When the game's version differs from the one at your last deploy, the Frameworks header says, for example, `game updated to 2.31`, with a warning icon. If you're signed in to Nexus, EDGEdeck checks the frameworks once for that game version and names the ones that have newer files.

(Screenshot on the wiki, "Game updated": The Frameworks group header saying game updated to 2.31 with a warning icon, and two frameworks marked update available.)

What to do:

1. **Update each framework** from its `update ... available` link. See [Nexus Mods](https://edgemodders.ai/wiki/edgedeck/nexus.html#updates).
2. **Deploy.**
3. If a framework has no update yet, wait for its author, or turn off the mods that need it until there is one.
4. If you aren't signed in to Nexus, EDGEdeck asks you to sign in so it can check. You can also check each framework's Nexus page yourself.

## Steam verify

A Steam **Verify integrity of game files** can overwrite files EDGEdeck deployed. Those mods then show `changed in game folder` or `changed, deploy again`. Deploy puts the mods' files back, asking first about any file that changed. See [Deploying and undo](https://edgemodders.ai/wiki/edgedeck/deploying.html#changes-made-outside-edgedeck).
