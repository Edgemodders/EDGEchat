<!-- Copied from EDGEweb's docs/wiki/edgemat/library.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/library.html (reviewed 2026-10-19) -->

# The Library

The Library is the first view in EDGEmat's sidebar. It lists the building blocks every multilayered material is made from, read from your own game:

| Group | What it holds |
|---|---|
| **Surfaces**, by category | The game's surfaces (its `.mltemplate` files), about 390 of them: leather, denim, chrome, rubber, paint, dirt and more, grouped as the game groups them (fabric, metal, plastic and so on). A surface is a material's texture and its list of colors and finishes. Each layer of a garment uses one |
| **Microblends** | About 130 small detail textures that break up a layer's edges with wear, dirt, scratches or prints. The second top-level group, below all the surface categories |

The line at the top of the view counts them and says when the library was built, for example "386 surfaces · 131 microblends · built 2026-10-19".

(Screenshot on the wiki, "The Library": The Library view with the fabric category open, showing leather and denim surfaces with their thumbnails, and the hover card of one surface with its larger thumbnail, color count and game path.)

## Looking around

- **Thumbnails** show each surface's texture. Most surface textures are grey detail (the color comes from the layer), so the thumbnails are grey too; a few show a relief picture when the surface's texture is flat.
- **Hover** a surface for a larger thumbnail, how many colors it offers and its game path.
- **Click** a surface or a microblend to open its [surface page](https://edgemodders.ai/wiki/edgemat/surfaces.html).
- **Copy Game Path** (the copy icon that appears when you hover a row, or the right-click menu) puts the file's game path on the clipboard, for WolvenKit, REDcode or a mod's notes.
- **Collapse All** in the view's title bar folds everything back, which shows the two groups side by side.

## Search

Press the **magnifier** in the Library's title bar (**Search Library**) and type plain words, such as `leather`, `worn chrome` or `denim`. Every word must match a surface's name or path. The view shows only the matches, and the count at the top changes. **Clear Search** (the icon beside it) brings the full list back.

This magnifier searches the Library only. To find a garment, use [Find](https://edgemodders.ai/wiki/edgemat/find.html), the view below.

## The title bar

| Button | Does |
|---|---|
| **Open Setup...** (the go-to-file icon) | Opens a garment's setup from the game, a file on disk, or a mod's archive. See [The setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html#opening-a-setup) |
| **Search Library** (magnifier) | Filters the Library by plain words |
| **Clear Search** | Shown while a search is active |
| **Rebuild Library** (refresh) | Builds the library again from the game. Rarely needed: EDGEmat rebuilds on its own after a game update. With the thumbnails already made, a rebuild takes a few seconds |
| **`...`** › **Set Game Folder** | Picks the Cyberpunk 2077 install EDGEmat reads |
| **`...`** › **Show Log** | EDGEmat's log, in VS Code's Output panel. Start here when something looks wrong ([Troubleshooting](https://edgemodders.ai/wiki/edgemat/troubleshooting.html)) |

## Where the library lives

In `%LOCALAPPDATA%\EDGEmat`, on your PC only. It is built from your game and never shipped, so EDGEmat stays current with game patches and carries no game data. The MCP server for assistants uses the same library. Deleting the folder is safe: EDGEmat builds it again on its next start.
