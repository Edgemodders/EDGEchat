<!-- Copied from EDGEweb's docs/wiki/edgedeck/switch-from-vortex.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html (reviewed 2026-10-24) -->

# Switch from Vortex to EDGEdeck

EDGEdeck can take over the mods Vortex manages for Cyberpunk 2077. Vortex keeps its own copies the whole time, so you can go back.

## The one rule

**Only one manager can have mods deployed in the game folder at a time.** While Vortex has files deployed, EDGEdeck refuses to deploy, and EDGEdeck writes its own manifest under a different name so Vortex refuses in turn. Purging in Vortex takes its files out of the game folder; your mods stay in Vortex.

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
2. **Import.** Click **Import from Vortex** in the Set up group, or in the Mods view's `...` menu. EDGEdeck lists the mods Vortex has for Cyberpunk. Nothing is ticked at first: tick the ones you want, or the box at the top for all of them. If you pick more than 20, it asks once more. EDGEdeck copies them into its library with their names, versions and Nexus ids, and turns on the ones Vortex had deployed.
3. **Check the list.** The **Frameworks** group at the top holds RED4ext, Cyber Engine Tweaks, redscript, ArchiveXL, TweakXL and the other frameworks most mods need. The **Mods** group holds the rest. Turn off anything you no longer want.
4. **Purge in Vortex.** In Vortex, go to **Mods** and press **Purge**. This removes Vortex's deployed files from the game folder.
5. **Deploy in EDGEdeck.** Close the game if it's running, then press **Deploy**. Use **Show pending changes** first if you want to see every file it will place, and why.
6. **Play.** If something looks wrong, **Undo deploy** removes everything EDGEdeck placed and nothing else.

(Screenshot on the wiki, "Import from Vortex": The Mods view straight after an import: Vortex's mods in the library, the frameworks pinned at the top, and the Deploy button counting the changes waiting.)

## Good to know

- **Names you know.** Vortex names a mod after its download file, so Cyber Engine Tweaks can show up as something like "CET 1.37.1 - Scripting fixes". EDGEdeck shows common frameworks (Cyber Engine Tweaks, redscript, RED4ext, ArchiveXL, TweakXL, Codeware and others) under their usual names, in the import list and in the library.
- **Searching the import list** matches the mod's name, the download's own file name, the version and the Nexus id.
- **Mods already imported** aren't listed again, so you can import a few at a time.
- **Vortex's folder.** If Vortex keeps its mods somewhere unusual and EDGEdeck can't find them, it asks for the folder. Vortex shows it under **Settings**, **Mods**, **Mod Staging Folder**.
- **Collections** from Vortex are skipped. Their mods come across as ordinary mods.
- **Download links.** Vortex takes back the Nexus **Mod manager download** links every time it starts. If you keep both installed, EDGEdeck's **Handle Nexus download links** row comes back so you can reclaim them.
- **Conflicts.** After the switch, click **Get REDbridge** to see conflicts inside mod archives, which Vortex can't show. You may find some you didn't know about. See [Conflicts](https://edgemodders.ai/wiki/edgedeck/conflicts.html).
- **"Vortex manages the game"** in EDGEdeck means step 4 is still to do.

## Going back to Vortex

Press **Undo deploy** in EDGEdeck, then deploy in Vortex. Your Vortex mods were never touched.
