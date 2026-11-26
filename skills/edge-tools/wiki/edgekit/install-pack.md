<!-- Copied from EDGEweb's docs/wiki/edgekit/install-pack.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgekit/install-pack.html (reviewed 2026-11-13) -->

# Install the EDGEkit extension pack

The EDGEkit extension pack is one extension that installs the published EDGE extensions for you. It is for modders who want to stay in VS Code or VSCodium. If you'd rather have one app with everything built in, [install the EDGEkit app](https://edgemodders.ai/wiki/edgekit/install.html) instead. The pack itself has no features: it is a list, and installing it installs everything on the list.

**It is a preview**, like the EDGE extensions inside it. Expect rough edges, and tell us about them.

## What you need

| You need | Notes |
|---|---|
| [VS Code](https://code.visualstudio.com/) 1.80 or later, or [VSCodium](https://vscodium.com/) | |
| Windows, 64-bit | The EDGE tools read the game's files through REDbridge, which runs on Windows only. On other systems only the theme and Redscript IDE install |
| Cyberpunk 2077 | For the EDGE tools to be useful |

## What it installs

| Extension | What it does | In VS Code | In VSCodium |
|---|---|---|---|
| [REDcode](https://edgemodders.ai/wiki/redcode/) for Cyberpunk 2077 | The modding workspace: browse the game's archives, edit game files, view textures, meshes and sounds, pack mod projects | Yes | Yes |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | The mod manager | Yes | Yes |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/) | The material editor: find a garment's materials, recolor them, make new ones from your words | Yes | Yes |
| [EDGEwave](https://edgemodders.ai/wiki/edgewave/) | The sound studio: edit, mix and re-voice the game's sounds | Yes | Yes |
| [EDGEquest](https://edgemodders.ai/wiki/edgequest/) | The quest maker: read the game's quests, write your own | Yes | Yes |
| [EDGEhack](https://edgemodders.ai/wiki/edgehack/) | The quickhack editor | Not yet: see [Install and set up EDGEhack](https://edgemodders.ai/wiki/edgehack/install.html) | Yes |
| [REDsave](https://edgemodders.github.io/REDsave/) | The save game manager | Yes | Yes |
| REDnode HUD | A dark theme in the EDGE house style | Yes | Yes |
| Redscript IDE, by jac3km4 | Language support for redscript, the game's scripting language | Yes | No |

The two editors get their extensions from different places: VS Code from Microsoft's Marketplace, VSCodium from [Open VSX](https://open-vsx.org/). The pack lists only what each place has. EDGEhack isn't on the Marketplace yet, and Redscript IDE isn't on Open VSX.

New EDGE tools join the pack as they are published. If you installed an older pack, your editor updates it and installs what was added.

**The pack doesn't include the AI assistant.** For that, install Claude Code and then EDGEchat: see [EDGEchat's Install and connect](https://edgemodders.ai/wiki/edgechat/install.html).

## Install it

1. Open the **Extensions** view (`Ctrl+Shift+X`).
2. Search for **EDGEkit** and pick the one published by Edgemodders (id `edgemodders.edgekit`).
3. Press **Install**. VS Code installs the pack and every extension in it.

When it finishes, each tool has its own icon in the activity bar, the strip down the left edge of the window: REDcode, EDGEdeck, EDGEmat, EDGEwave, EDGEquest and REDsave.

Or install it from a terminal:

```powershell
code --install-extension edgemodders.edgekit
```

The listings: [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=edgemodders.edgekit) and [Open VSX](https://open-vsx.org/extension/edgemodders/edgekit).

(Screenshot on the wiki, "The EDGEkit pack in the Extensions view": VS Code's Extensions view with EDGEkit selected, its Extension Pack tab listing the EDGE extensions.)

## After installing

The pack installs the extensions; each still has its own first steps.

| Extension | First steps |
|---|---|
| REDcode | Run **REDcode: Install REDbridge** from the command palette (`Ctrl+Shift+P`) to fetch the engine it needs. See [REDcode](https://edgemodders.ai/wiki/redcode/) |
| EDGEdeck | Click the EDGEdeck icon in the activity bar and follow its Set up steps. See [Install and set up EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html) |
| EDGEmat | Build its material library from your game once. See [Install and set up EDGEmat](https://edgemodders.ai/wiki/edgemat/install.html) |
| EDGEwave | Needs REDcode set up and a REDcode project. See [Install and set up EDGEwave](https://edgemodders.ai/wiki/edgewave/install.html) |
| EDGEquest | See [Install and set up EDGEquest](https://edgemodders.ai/wiki/edgequest/install.html) |
| EDGEhack | Needs REDcode set up. See [Install and set up EDGEhack](https://edgemodders.ai/wiki/edgehack/install.html) |
| REDnode HUD | Optional: pick it with **Preferences: Color Theme** |

## Updates

Each extension updates itself, as VS Code extensions normally do. When a new EDGE tool is published, a new version of the pack adds it. The latest pack is 0.6.0 (2026-11-12).

## Uninstalling

Uninstalling the pack offers to remove its extensions too. You can keep or remove each one on its own. If you remove EDGEdeck, press **Undo deploy** in EDGEdeck first, so your game folder goes back to how it was (see [Uninstalling EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html#uninstalling)).
