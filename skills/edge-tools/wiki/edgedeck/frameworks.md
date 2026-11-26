<!-- Copied from EDGEweb's docs/wiki/edgedeck/frameworks.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/frameworks.html (reviewed 2026-11-13) -->

# Frameworks and game patches

| On this page | |
|---|---|
| [What frameworks are](https://edgemodders.ai/wiki/edgedeck/frameworks.html#what-frameworks-are) | And which ones there are |
| [Getting the frameworks](https://edgemodders.ai/wiki/edgedeck/frameworks.html#getting-the-frameworks) | Six of them in one go |
| [The Frameworks group](https://edgemodders.ai/wiki/edgedeck/frameworks.html#the-frameworks-group) | What its header tells you |
| [After a game update](https://edgemodders.ai/wiki/edgedeck/frameworks.html#after-a-game-update) | The steps, with and without a Nexus account |
| [After a Steam verify](https://edgemodders.ai/wiki/edgedeck/frameworks.html#steam-verify) | |

## What frameworks are

Many Cyberpunk mods don't work alone. They're built on **frameworks**: community tools that add abilities the game doesn't have. A mod's page on Nexus lists the frameworks it needs under **Requirements**. Without them, the mod is in the game but does nothing.

| Framework | What it does |
|---|---|
| RED4ext | Loads plugins into the game. Many other frameworks are RED4ext plugins |
| Cyber Engine Tweaks (CET) | Runs Lua script mods and their in-game windows |
| redscript | Adds `.reds` script mods to the game's own scripts |
| ArchiveXL | Lets mods add new items and appearances, not only replace existing ones |
| TweakXL | Changes the game's database of items and stats from simple text files |
| Codeware | A library many script mods use |
| Audioware | Adds custom sounds |
| input_loader | Adds custom key bindings |
| mod_settings | Gives mods a settings menu in the game |
| [REDnode](https://edgemodders.ai/wiki/rednode/) | Runs Node.js mods and overlay apps. Shown with the frameworks because REDnode packages need it |

In EDGEdeck, frameworks are mods like any other: they sit in your list, you turn them on, and you deploy. They're kept together in the **Frameworks** group at the top of the list because so much depends on them.

## Getting the frameworks

Most mods need at least the first six: RED4ext, Cyber Engine Tweaks, redscript, ArchiveXL, TweakXL and Codeware. **Get the frameworks** gets those six in one go.

1. Choose **Get the frameworks...** in the Mods view's **`...`** menu. (Other places are listed below.)
2. A list shows each of the six, with the version in your library and the newest version that's out. The missing ones and the older ones are ticked. Press **OK**.
3. Wait for the downloads. A message names what was added, with a **Deploy now** button.
4. Close the game and deploy.

(Screenshot on the wiki, "Get the frameworks": The list Get the frameworks shows: the six frameworks with the library's version and the newest one, the missing and older ones ticked.)

**What you should see:** six rows in the Frameworks group, each ticked and saying `not deployed yet`, then `deployed` after the deploy.

The files come from each author's release page on GitHub. They are the same files and versions as on Nexus, so **you don't need a Nexus account for these six**. A framework you get this way is the same mod in your list as if you had downloaded it from Nexus: you can update it and switch its versions like any other mod.

| Where **Get the frameworks** is | When |
|---|---|
| The Mods view's **`...`** menu, and the command palette | Always |
| A row in the **Set up** group | While any of the six is missing and your list isn't empty |
| The download button on the **Frameworks** group's header | Once you have at least one framework |
| A link beside the Frameworks heading on the EDGEdeck page | While some of the six are missing. After a game patch the same link reads **Update the frameworks** |

Frameworks other than those six, such as Audioware, input_loader or mod_settings, you add from their Nexus pages like any mod. See [Adding and removing mods](https://edgemodders.ai/wiki/edgedeck/adding-mods.html).

## The Frameworks group

The group's header counts the frameworks and shows the game's version, for example:

`6, 6 on · game 2.5`

That reads: six frameworks in your library, six switched on, and the game is version 2.5. EDGEdeck reads the version from the game's own program file, and writes it down at every deploy. That is how it notices a game update later.

## After a game update

**A game patch is the most common reason a modded game stops starting.** Frameworks reach deep into the game, and a patch can move what they reach for. Framework authors usually release updated versions within days.

When the game's version is no longer the one at your last deploy, the Frameworks header says so with a warning icon, for example `game updated to 2.5`.

(Screenshot on the wiki, "Game updated": The Frameworks group header saying game updated to 2.5 with a warning icon, and two frameworks marked update available.)

What to do:

1. Open the EDGEdeck page (the first button in the Mods view's title bar) and click **Update the frameworks**, beside the Frameworks heading. It opens the same list as Get the frameworks, with every framework that has a newer version ticked. Press **OK**.
2. Close the game and press **Deploy**.
3. Start the game.

If a framework has no newer version yet, its author hasn't caught up with the patch. Wait, or turn off the mods that need that framework until there is one.

### With and without a Nexus account

| | Signed in to Nexus | Not signed in |
|---|---|---|
| The warning on the Frameworks header | Yes | Yes |
| EDGEdeck checks by itself which frameworks have newer files, and names them | Yes, once for each new game version | No. A message offers **Sign in** instead |
| **Update the frameworks** for the six | Yes | Yes. It asks GitHub, not Nexus |
| Updates for other frameworks, such as Audioware or mod_settings | From their `update ... available` status, or **Update all** | Check their Nexus pages yourself |

So you can bring the six back up to date after a patch with no Nexus account. Signing in adds the automatic check and covers the other frameworks. **Update all** updates every mod with an update waiting, frameworks included: see [Update all](https://edgemodders.ai/wiki/edgedeck/nexus.html#update-all).

## Steam verify

Steam's **Verify integrity of game files** can overwrite files EDGEdeck deployed. GOG and Epic have a similar repair. Those mods then show `changed in game folder` or `changed, deploy again`. Deploy puts the mods' files back, and asks first about any file whose contents really changed. See [Changes made outside EDGEdeck](https://edgemodders.ai/wiki/edgedeck/deploying.html#changes-made-outside-edgedeck).
