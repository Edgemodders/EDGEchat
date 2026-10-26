<!-- Copied from EDGEweb's docs/wiki/edgemat/in-the-game.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/in-the-game.html (reviewed 2026-10-24) -->

# Your mod in the game

EDGEmat saves into a WolvenKit project: the files sit in the project's `source\archive` folder. The game sees them once the project is **packed** into a `.archive` and **installed** in the game folder. [REDcode](https://edgemodders.ai/wiki/redcode/) does both. This page is the short path, and the two things that tripped up EDGEmat's own tests.

## 1. Pack and install

In REDcode, with the project open:

| You have | Use | Result |
|---|---|---|
| The game closed (most of the time) | **Pack and Install** | The archive goes into the game. Start the game |
| The game running, with [Red Hot Tools](https://github.com/psiberx/cp2077-red-hot-tools) installed | **Pack and Try** | The archive goes to `archive\pc\hot`, and Red Hot Tools loads it into the running game |

**Pitfall 1: the hot folder.** With Red Hot Tools installed, Pack and Try only copies the archive to `archive\pc\hot`. Red Hot Tools picks it up from there **only while the game runs**. Pressed with the game closed, the archive just waits there, and the game starts without it. With the game closed, use Pack and Install (or REDcode's Deploy).

**Pitfall 2: REDmod.** If REDcode's `redcode.pack.redmod` setting is on, the project packs as a REDmod into the game's `mods\` folder. REDmods need a deploy step (EDGEdeck's and REDcode's Deploy run it) and load only when the game starts with `-modded` (REDcode's Run Game does that). A material mod doesn't need REDmod: with the setting off, it goes to `archive\pc\mod` and simply loads.

To check: after installing, `<game>\archive\pc\mod\<project>.archive` should exist (folder `mod`, singular).

**Pitfall 3: capital letters in the archive's name.** The official RED Hot Tools can fail to swap in a new build of an archive whose name has capital letters (such as `MyMaterials.archive`) and close the game. The [Edgemodders build of RED Hot Tools](https://github.com/CyberbuildsAI/cp2077-red-hot-tools/releases/tag/v1.3.0%2Bedgemodders.1) (`1.3.0+edgemodders.1`) fixes it: extract its zip over the official files. An all-lowercase project name avoided the problem in REDnode's tests too.

## 2. Put the item on V

You need to wear the item you changed. The quickest way is the console of [Cyber Engine Tweaks](https://www.nexusmods.com/cyberpunk2077/mods/107):

```lua
Game.AddToInventory("Items.Pants_01_basic_01", 1)
```

The id is the item's record id. [Find](https://edgemodders.ai/wiki/edgemat/find.html) shows it beside each item, after its slot (and `mat_find` returns it), so you know the item you add is the one you edited. Equip it, then look in third person: photo mode, or a mirror.

Some garments are worn only by NPCs, so V can't equip them: pick a garment V can wear for your tests.

## 3. If you don't see your change

| Check | Why |
|---|---|
| The archive is in `archive\pc\mod` | See the two pitfalls above |
| You saved **As a new setup** (the default) | It works with no other mod. **In place of the game's setup** needs the Material Texture Override mod (on Nexus Mods) |
| Both saves are in the project | If you saved a setup both ways, the project's mesh copies point at the new setup, so the game shows that one |
| You're wearing the right body's mesh | Many garments use different meshes, and sometimes different setups, for each body. Save for both: Find lists both, and Save to Project offers every mesh it found |
| The right look | Some items have several looks (colorways) that share a mesh but not a material. Find's looks show which material each uses |
| Another mod changes the same item | Mods load in order; disable the other one to check |

More in [Troubleshooting](https://edgemodders.ai/wiki/edgemat/troubleshooting.html).
