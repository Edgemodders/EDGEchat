<!-- Copied from EDGEweb's docs/wiki/edgekit/install-pack.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgekit/install-pack.html (reviewed 2026-10-24) -->

# Install the EDGEkit extension pack

The EDGEkit extension pack is one extension that installs the published EDGE extensions for you. It is for modders who want to stay in VS Code or VSCodium. If you'd rather have one app with everything built in, [get the EDGEkit app](https://edgemodders.ai/wiki/edgekit/index.html#get-the-app) instead. The pack itself has no features: it is a list, and installing it installs everything on the list.

**It is a preview**, like REDcode and EDGEdeck inside it. Expect rough edges, and tell us about them.

## What you need

| You need | Notes |
|---|---|
| [VS Code](https://code.visualstudio.com/) 1.80 or later, or [VSCodium](https://vscodium.com/) | |
| Windows x64 for REDcode and EDGEdeck | They read game files through REDbridge, which runs on Windows only, so they install only there. The theme and REDscript IDE work everywhere |
| Cyberpunk 2077 | For REDcode and EDGEdeck to be useful |

## What it installs

Checked on 2026-10-24, pack version 0.2.0 (the published one):

| Extension | What it does | In VS Code | In VSCodium |
|---|---|---|---|
| [REDcode](https://edgemodders.ai/wiki/redcode/) for Cyberpunk 2077 | The modding workspace: browse the game's archives, edit game files, view textures, meshes and sounds, pack WolvenKit projects | Yes | Yes |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | The mod manager | Yes | Yes |
| REDnode HUD | A dark theme in the EDGE house style | Yes | Yes |
| REDscript IDE, by jac3km4 | Language support for redscript, the game's scripting language | Yes | No: it isn't on Open VSX |

VS Code installs extensions from the Microsoft Marketplace, and VSCodium from Open VSX, so the pack lists only what each one can get. New EDGE extensions join the pack as they are published: pack 0.3.0, built but not published yet, adds [EDGEmat](https://edgemodders.ai/wiki/edgemat/) and [EDGEwave](https://edgemodders.ai/wiki/edgewave/). Until it's out, install those two on their own from the Extensions view.

## Install it

1. Open the **Extensions** view (`Ctrl+Shift+X`).
2. Search for **EDGEkit** and pick the one published by Edgemodders (id `edgemodders.edgekit`).
3. Press **Install**. VS Code installs the pack and every extension in it.

Or install it from a terminal:

```powershell
code --install-extension edgemodders.edgekit
```

The listings: [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgekit) and [Open VSX](https://open-vsx.org/extension/edgemodders/edgekit).

(Screenshot on the wiki, "The EDGEkit pack in the Extensions view": VS Code's Extensions view with EDGEkit selected, its Extension Pack tab listing REDcode, EDGEdeck, REDnode HUD and REDscript IDE.)

## After installing

The pack installs the extensions; each still has its own first steps.

| Extension | First steps |
|---|---|
| REDcode | Run **REDcode: Install REDbridge** from the command palette (`Ctrl+Shift+P`) to fetch the engine it needs. See [REDcode](https://edgemodders.ai/wiki/redcode/) |
| EDGEdeck | Click the EDGEdeck icon in the activity bar and follow its Set up steps. See [Install and set up EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html) |
| REDnode HUD | Optional: pick it with **Preferences: Color Theme** |

## Updates

Each extension updates itself, as VS Code extensions normally do. When a new EDGE extension is published, a new version of the pack adds it.

## Uninstalling

Uninstalling the pack offers to remove its extensions too. You can keep or remove each one on its own. If you remove EDGEdeck, press **Undo deploy** in EDGEdeck first, so your game folder goes back to how it was (see [Uninstalling EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html#uninstalling)).
