<!-- Copied from EDGEweb's docs/wiki/edgedeck/switch-from-vortex.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html (reviewed 2026-11-21) -->

# Switch from Vortex to EDGEdeck

EDGEdeck can take over the mods Vortex manages for Cyberpunk 2077. Vortex keeps its own copies the whole time, so you can go back.

Don't use Vortex? You don't need this page. Start with [Your first mod](https://edgemodders.ai/wiki/edgedeck/first-mod.html).

## The one rule

**Only one manager can have mods deployed in the game folder at a time.** While Vortex has files deployed, EDGEdeck refuses to deploy and only reads. So before you deploy in EDGEdeck, you **purge** in Vortex. Purge takes Vortex's files out of the game folder. It deletes nothing: your mods stay in Vortex.

It works the same the other way round: before you deploy in Vortex again, press **Undo deploy** in EDGEdeck.

## What the words mean

| Vortex says | EDGEdeck says |
|---|---|
| Enable, Disable | On, Off |
| Deploy, Purge | Deploy, Undo deploy |
| Staging folder | Library |
| Mod type | Kind |
| File override rules, Load after | Conflicts, wins |
| Profile | Loadout |

## Steps

1. **Install EDGEdeck** and open its Mods view. See [Install and set up](https://edgemodders.ai/wiki/edgedeck/install.html).
2. **Import.** Press **Import from Vortex** in the Mods view, or in its **`...`** menu. EDGEdeck lists the mods Vortex has for Cyberpunk. Nothing is ticked at first: tick the ones you want, or the box at the top for all of them, and press **OK**. If you tick more than 20, EDGEdeck asks you to confirm before it copies them.
3. **Wait for the copy.** EDGEdeck copies the mods into its library, with their names, versions and Nexus links. This needs as much free disk space as the mods take, and can take a few minutes. Nothing has changed in the game yet.
4. **Bring the installer choices over**, if you installed any mods through a FOMOD installer in Vortex (the pages of options some mods ask you to pick from). Run **EDGEdeck: Import FOMOD choices from Vortex** from the command palette. A message counts the mods that got their choices. Their next updates then install with those choices, without asking. See [Mods with an installer](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#mods-with-an-installer-fomod).
5. **Check the list.** The **Frameworks** group at the top holds RED4ext, Cyber Engine Tweaks, redscript, ArchiveXL, TweakXL and the other [frameworks](https://edgemodders.ai/wiki/edgedeck/frameworks.html) most mods need. The **Mods** group holds the rest. The mods Vortex had deployed are ticked. Untick anything you no longer want. If a framework is missing or old, **Get the frameworks...** in the **`...`** menu fetches the current one.
6. **Purge in Vortex.** In Vortex, go to **Mods** and press **Purge**. This only takes Vortex's files out of the game folder. Your mods stay in Vortex.
7. **Deploy in EDGEdeck.** Close the game if it's running, then press **Deploy**. To see first what it will place, and why, use **Show pending changes** in the **`...`** menu.
8. **Play.** Press **Run game**. If something looks wrong, **Undo deploy** removes everything EDGEdeck placed and nothing else.

(Screenshot on the wiki, "Import from Vortex": The Mods view straight after an import: Vortex's mods in the library, the frameworks pinned at the top, and the Deploy button counting the changes waiting.)

| What you should see | |
|---|---|
| After the import | Your Vortex mods in the list, the deployed ones ticked and saying `not deployed yet` |
| Before the purge | The status bar ends in `Vortex manages the game`, and Deploy refuses |
| After the purge and the deploy | Each ticked mod says `deployed` |

## Good to know

- **Framework names are tidied.** Vortex names a mod after its download file, so Cyber Engine Tweaks can show up as something like "CET 1.37.1 - Scripting fixes". EDGEdeck shows common frameworks under their usual names, in the import list and in the library.
- **Searching the import list** matches the mod's name, the download's own file name, the version and the Nexus id.
- **Mods already imported** aren't listed again, so you can import a few at a time.
- **Vortex's folder.** If Vortex keeps its mods somewhere unusual and EDGEdeck can't find them, it asks for the folder. Vortex shows it under **Settings**, **Mods**, **Mod Staging Folder**.
- **Collections** from Vortex are skipped. Their mods come across as ordinary mods.
- **Updates.** Imported mods keep their link to Nexus, so [update checks](https://edgemodders.ai/wiki/edgedeck/nexus.html#updates) work for them once you sign in. Each file from a Nexus page becomes a mod of its own, as for files downloaded from Nexus.
- **Download links.** Vortex takes back the Nexus **Mod manager download** links every time it starts. If you keep both installed, EDGEdeck's **Handle Nexus download links** step comes back so you can reclaim them. See [Download links](https://edgemodders.ai/wiki/edgedeck/nexus.html#download-links).
- **Conflicts.** After the switch, press **Get REDbridge** to see conflicts inside mod archives, which Vortex can't show. You may find some you didn't know about. See [Conflicts and who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html).
- **"Vortex manages the game"** in the status bar, or "Vortex manages this game folder" when you press Deploy, means step 6 is still to do.

## Going back to Vortex

Press **Undo deploy** in EDGEdeck, then deploy in Vortex. Your Vortex mods were never touched.
