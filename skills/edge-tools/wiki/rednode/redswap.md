<!-- Copied from EDGEweb's docs/wiki/rednode/redswap.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/redswap.html (reviewed 2026-11-13) -->

# REDswap

**REDswap** loads a changed `.archive` into the running game. An archive is a packed mod file: meshes, materials, textures. Edit one of those, pack it, swap it in, and see it on V or in the world a moment later, with no restart.

REDswap is a small RED4ext plugin for game version **2.5**. It comes inside REDnode, which uses it for every archive swap. It also has its own [Nexus page](https://www.nexusmods.com/cyberpunk2077/mods/36172), for tools and players who want it without REDnode.

> **Status:** released. The current REDswap is 1.0.3, and it comes with REDnode. Passed in game on 2.5: a swap takes about 50 ms. Archives that change the game's sound are untested on 2.5.

| On this page | |
|---|---|
| [Why you'd want it](https://edgemodders.ai/wiki/rednode/redswap.html#why-youd-want-it) | What a swap saves you |
| [Ways to swap](https://edgemodders.ai/wiki/rednode/redswap.html#ways-to-swap) | From REDcode, an assistant, or an app |
| [Try it: your first swap](https://edgemodders.ai/wiki/rednode/redswap.html#try-it-your-first-swap) | A changed jacket on V, end to end |
| [What a swap does](https://edgemodders.ai/wiki/rednode/redswap.html#what-a-swap-does) | Step by step, and why [a swap is not temporary](https://edgemodders.ai/wiki/rednode/redswap.html#a-swap-is-not-temporary) |
| [Install](https://edgemodders.ai/wiki/rednode/redswap.html#install) | Usually nothing to do |
| [When a swap does not show](https://edgemodders.ai/wiki/rednode/redswap.html#when-a-swap-does-not-show) | Messages and fixes |
| [For mod makers](https://edgemodders.ai/wiki/rednode/redswap.html#for-mod-makers) | Calling REDswap from your own code |

## Why you'd want it

| | |
|---|---|
| **No restart** | A full game restart to check a colour or a seam takes minutes. A swap takes about a twentieth of a second |
| **It shows on V at once** | With REDnode, what V wears shows the new version straight away, without taking it off. That includes items worn in the extra outfit slots of the Equipment-EX mod. The inventory's preview of V updates too, whether the inventory is open or closed at the time |
| **Safe on game updates** | REDswap checks the game before it touches anything. After a game patch it says it cannot swap; it does not crash the game |
| **Works with your tools** | REDnode's apps, AI assistants through REDnode, and any script or plugin can call it |

## Ways to swap

You rarely use REDswap directly. You make the change in [REDcode](https://edgemodders.ai/wiki/redcode/) or [EDGEmat](https://edgemodders.ai/wiki/edgemat/), and the swap goes through REDnode:

| From | How you swap |
|---|---|
| [REDcode](https://edgemodders.ai/wiki/redcode/pack-install.html) | **Pack and Play** packs your project and hands the archive to REDnode. REDnode's **MCP server** switch must be on |
| Claude Code | Ask "pack my project and swap it into the game". Claude calls REDnode's `archives_reload` tool, and asks you first, every time. See [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) |
| REDagent | The same tool, from the chat in the game. REDagent asks you first |
| The **Hot swap** app | Paste an archive's path and press **Swap**. It is in the [Sound Tools](https://edgemodders.ai/wiki/rednode/sound-tools.html#hot-swap) pack, and works for any archive |

Mod makers can also swap from their own package or script: see [For mod makers](https://edgemodders.ai/wiki/rednode/redswap.html#for-mod-makers).

(Screenshot on the wiki, "A swap from Claude Code": Claude Code asking to swap an archive, its question before the swap, and the jacket on V in its new colour)

## Try it: your first swap

This uses the Hot swap app, the route with the fewest parts. You need:

| You need | |
|---|---|
| A mod of your own, packed as an `.archive`, that changes a piece of clothing | No mod yet? EDGEchat's [Recolor a jacket](https://edgemodders.ai/wiki/edgechat/recolor.html) makes one in 20 minutes, and EDGEmat's [In the game](https://edgemodders.ai/wiki/edgemat/in-the-game.html) packs a material |
| The [Sound Tools](https://edgemodders.ai/wiki/rednode/sound-tools.html) pack, with Hot swap's permission allowed | Its [install steps](https://edgemodders.ai/wiki/rednode/sound-tools.html#install) |
| The item's id, to put it on V | See [Finding an item's id](https://edgemodders.ai/wiki/rednode/overlay.html#finding-an-items-id) |

1. Start the game and **load a save**. Swaps don't work at the main menu.
2. Put the item on V. In the [Console](https://edgemodders.ai/wiki/rednode/overlay.html#the-console), type `addItem("Items.Cop_01_Set_Jacket")` with your item's id, then equip it in the inventory.
3. Press **F10** and switch on **Hot swap**.
4. In Windows, right-click your `.archive` file and choose **Copy as path**. Paste it into Hot swap's box and press **Swap**.
5. Press **Esc** and look at V. Photo mode gives the best view.
6. Change your mod, pack it again, and press **↻** beside the swap under **Recent**.

| After | You should see |
|---|---|
| Step 4 | An answer in Hot swap: the archive swapped, and how long it took |
| Step 5 | V wearing the new version, without taking the item off |
| Step 6 | The newer version on V, a moment after the press |

This exact route was not run as one test. Its parts were: Hot swap passed its check on game 2.5, and the same swap, with the refresh of what V wears, passed in REDnode's own test.

## What a swap does

1. Your file is **copied** into the game. If the game already has an archive with that name, REDswap replaces it where it is. If it is new, REDswap adds it to `archive\pc\mod` in the game folder. The file you built is not moved.
2. The game's own loader loads the archive, and drops what the old one held from its memory. Whatever loads those files next gets your version.
3. ArchiveXL, if installed, reloads its `.xl` and `.yaml` files.
4. REDnode then refreshes what V wears, the inventory's preview of V, the objects REDnode itself put in the world, and nearby objects that use the swapped files.

Anything else already in the world keeps the old version until the game loads it again. To make that happen, walk away and come back, or unequip and re-equip the item.

If your new archive no longer contains a file the old one had, that file goes back to the game's own version, or another mod's. So swapping in an archive without a file restores the game's own look for it.

### A swap is not temporary

The archive stays in `archive\pc\mod` after the swap, and the game loads it on every start until you remove it. Delete it from that folder when you're done testing.

Your mod manager did not put that file there, so EDGEdeck or Vortex won't list it or remove it for you. When the mod is ready, install it the normal way: with EDGEdeck, or REDcode's **Pack and Install**.

## Install

| You have | What to do |
|---|---|
| REDnode | Nothing: REDswap comes with it, in `red4ext\plugins\REDswap` |
| No REDnode | Install REDswap from its [Nexus page](https://www.nexusmods.com/cyberpunk2077/mods/36172) with [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or Vortex, or extract its zip into the game folder. It needs RED4ext 1.31 or later |
| Both | They carry the same files. If your mod manager shows a conflict, either copy works; let the newer one win |
| RED Hot Tools too | Fine. They can sit side by side, and REDnode uses REDswap |

**About RED Hot Tools.** Before game 2.5, REDnode swapped archives through RED Hot Tools, a plugin by psiberx. RED Hot Tools has no build for game 2.5, so on 2.5 you don't need it and REDnode doesn't use it. Only a game kept on 2.31, with REDnode 0.37.0, still swaps through RED Hot Tools 1.3 or later.

## When a swap does not show

| You see | Why, and what to do |
|---|---|
| "Load a save first" | Swaps work in a loaded save, not at the main menu |
| "cannot swap archives in this game" | REDswap's safety checks failed: usually a game patch REDswap doesn't know yet. Its log, `red4ext\logs\redswap-*.log` in the game folder, says which check. Wait for an update |
| The swap worked but nothing changed | The object loaded the old version before the swap. Clothing V wears refreshes by itself. For anything else, make the game load it again: walk away and come back, or unequip and re-equip the item |
| I removed a file from my mod, swapped, and the game still shows my old version of it | Update REDnode: releases before 0.49.5 had this fault. Now a file your new archive no longer contains goes back to the game's own version |
| The game closed at the swap | A broken archive, or a mod missing its other parts, crashes the game at the swap as it would at the start. Check that the mod loads after a normal restart |
| A package's swap is refused | Allow its "swapping archives" permission in the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions) |
| My test archive is still in the game | See [A swap is not temporary](https://edgemodders.ai/wiki/rednode/redswap.html#a-swap-is-not-temporary) |

**Sound mods.** An archive that changes the game's sound swaps through REDnode too, which pauses the game for a moment around the swap. This is untested on game 2.5.

## For mod makers

| From | How |
|---|---|
| A REDnode package | `archives.reload([...])` from the `rednode` package. The package needs the `archives` permission. See [More of the game](https://edgemodders.ai/wiki/rednode/more-apis.html) |
| A script or plugin without REDnode | REDswap's own three functions: `REDswap_Version()`, `REDswap_Check()` (empty when it can swap) and `REDswap_Swap(files)` (absolute paths joined by a vertical bar, answering what each file became) |

The [REDswap docs](https://edgemodders.github.io/REDnode/redswap.html) have examples in REDnode's JavaScript, redscript and C++, and the full answer. Called without REDnode, REDswap only swaps: nothing already in the world is refreshed.

REDswap's swap is ported from [RED Hot Tools](https://github.com/psiberx/cp2077-red-hot-tools) by psiberx (MIT), with thanks.
