<!-- Copied from EDGEweb's docs/wiki/edgemat/surfaces.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/surfaces.html (reviewed 2026-11-13) -->

# Surface pages

A **surface** is one kind of stuff a layer can be made of, such as a leather, a denim or a chrome. Click a surface in [Game Materials](https://edgemodders.ai/wiki/edgemat/game-materials.html) and its page opens in an editor tab. It answers the questions you have before recoloring: which colors does this surface offer, which is closest to the one I want, and how shiny, metallic and bumpy can it be?

| On this page | |
|---|---|
| [What's on the page](https://edgemodders.ai/wiki/edgemat/surfaces.html#whats-on-the-page) | Each part |
| [Finding the right color](https://edgemodders.ai/wiki/edgemat/surfaces.html#finding-the-right-color) | Filter, and Closest to |
| [Colors on screen and in the game](https://edgemodders.ai/wiki/edgemat/surfaces.html#colors-on-screen-and-in-the-game) | Why a swatch can look darker |
| [Keeping a page open](https://edgemodders.ai/wiki/edgemat/surfaces.html#keeping-a-page-open) | One tab, or several |
| [Raw values](https://edgemodders.ai/wiki/edgemat/surfaces.html#raw-values), [Microblend pages](https://edgemodders.ai/wiki/edgemat/surfaces.html#microblend-pages) | |

(Screenshot on the wiki, "A surface page": The surface page of fabric › leather bull 01 30: the large tinted image at the top left, the selected color's panel under it, and the grid of color swatches with the Filter and Closest to boxes on the right.)

## What's on the page

| Part | What it shows |
|---|---|
| The header | "Surface", its category ("fabric › leather"), and the game path with **Copy path** |
| The image | The surface's texture, tinted with the selected color. A small version shows at once and a sharper one replaces it within a second or two. Untick **Tint with the selected color** to see the texture alone. The tint is an approximation: the game lights and shades it too |
| The color panel, under the image | The selected color: a plain name ("dark muted blue"), the game's name for it, its RGB values and its swatch, each with **Copy** |
| **Colors** | Every color this surface offers, as swatches: greys first, then by hue. A surface offers anything from a few colors to over a thousand. Click one to select it |
| **Roughness**, **Metal**, **Bumps** | The finishes this surface offers, in plain words: "glossy to rough", "not metal", "strong bumps". The one marked default is what a new layer starts with |
| **Textures** | The surface's own images: detail, bumps and roughness. Where a surface has no image of its own for one of these, the page says "Shared default: none of its own" |

## Finding the right color

A layer can only use a color its surface offers ([Colors come from a list](https://edgemodders.ai/wiki/edgemat/index.html#colors-come-from-a-list)). Two boxes above the swatches help you choose:

| Box | Use it to |
|---|---|
| **Filter** | Show only colors whose plain name matches, such as `red` or `pale`. The count says how many match ("12 of 750 colors") |
| **Closest to** | Sort every color by how close it is to one you name: words such as `dark red` or `pale muted blue`, a hex value such as `#a03030`, or a pick from the color box beside it. The closest come first. A word EDGEmat doesn't know turns the box red |

If none of the close colors is close enough, another surface may have a better one. In the [setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html#changing-a-layer), **Change...** in a layer's Surface row swaps the surface.

### Try it

1. In Game Materials, open **fabric**, then a leather.
2. Type `dark red` in **Closest to**.
3. Click the first swatch and read its plain name in the color panel.

You should see the swatches re-sorted, with the nearest dark reds first. In the setup editor, a layer that uses this leather offers the same swatches.

## Colors on screen and in the game

A dark color can look darker on this page than it does in the game. EDGEmat shows each color's stored value directly on your screen, and the game may brighten some of them. This is still being checked against in-game screenshots. Until then, trust the game over the swatch for dark colors.

A few colors are brighter than a screen can show. Their swatch carries a **+** and the color panel says "brighter than shown". How those look in the game has not been checked.

## Keeping a page open

Clicking around Game Materials reuses one tab, as VS Code's Explorer does with previews, so you don't end up with forty tabs. Press **Keep open** at the top of a page to keep that one: the next click opens a new tab. A page remembers its selected color, filter and settings when you switch tabs and come back.

## Raw values

For people who also use WolvenKit, or who are asking for help on Discord. Tick **Raw values** to see the game's own names beside the plain words: the preset names (the game's word for a named color or finish choice) with their numbers for roughness, metal and bumps, and the color mask levels under Textures.

## Microblend pages

A **microblend** is a small detail pattern, such as wear, dirt, scratches or a print, that a layer can carry on top of its surface. Click one in Game Materials for its page: its mask image (white is where the detail shows), its name and game path, and a line on what a microblend does.

(Screenshot on the wiki, "A microblend page": The page of a microblend such as edgewear 01: its mask image, name, game path and the short explanation of microblends.)

## Ask an assistant instead

An assistant connected to EDGEmat can read the same page: "which dark reds does this leather have?" The tool is `mat_colors`. See [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html).
