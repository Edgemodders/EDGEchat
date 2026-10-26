<!-- Copied from EDGEweb's docs/wiki/edgemat/surfaces.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/surfaces.html (reviewed 2026-10-20) -->

# Surface pages

Click a surface in the [Library](https://edgemodders.ai/wiki/edgemat/library.html) and its page opens in an editor tab. It answers the questions you have before recoloring: which colors does this surface offer, which is closest to the one I want, and how shiny, metallic and bumpy can it be?

(Screenshot on the wiki, "A surface page": The surface page of fabric › leather bull 01 30: the large tinted image at the top left, the selected color's panel under it, and the grid of color swatches with the Filter and Closest to boxes on the right.)

## One tab, or keep it

Clicking around the Library reuses one tab, as VS Code's Explorer does with previews, so you don't end up with forty tabs. Press **Keep open** at the top of a page to keep that one: the next click opens a new tab. A page remembers its selected color, filter and settings when you switch tabs and come back.

## What's on the page

| Part | What it shows |
|---|---|
| The header | "Surface", its category ("fabric › leather"), the game path with **Copy path** |
| The image | The surface's texture, tinted with the selected color. A small version shows at once and a sharper one replaces it within a second or two. Untick **Tint with the selected color** to see the texture alone. The tint is an approximation: the game lights and shades it too |
| The color panel, under the image | The selected color: a plain name ("dark muted blue"), the game's preset name, its RGB values and its swatch, each with **Copy** |
| **Colors** | Every color this surface offers, as swatches: greys first, then by hue. A surface offers anything from a few colors to over a thousand. Click one to select it |
| **Roughness**, **Metal**, **Bumps** | The finishes this surface offers, in plain words: "glossy to rough", "not metal", "strong bumps". The one marked default is what a new layer starts with |
| **Textures** | The surface's own images: detail, bumps and roughness. "Shared default: none of its own" where the surface uses a plain map |

## Finding the right color

A layer can only use a color its surface offers. Two boxes above the swatches help you choose:

| Box | Use it to |
|---|---|
| **Filter** | Show only colors whose plain name matches, such as `red` or `pale`. The count says how many match ("12 of 750 colors") |
| **Closest to** | Sort every color by how close it is to one you name: words such as `dark red` or `pale muted blue`, a hex value such as `#a03030`, or a pick from the color box beside it. The closest come first. A word EDGEmat doesn't know marks the box red |

If none of the close colors is close enough, another surface may have a better one: in the [setup editor](https://edgemodders.ai/wiki/edgemat/setup-editor.html#changing-a-layer), **Change...** in a layer's Surface row swaps it.

**Good to know:** EDGEmat shows the preset values as screen colors. Some presets then look darker than the same color in the game; whether the game treats them differently is being checked against in-game screenshots (unverified). Very bright presets, with values above the normal range, are marked as bright.

## Raw values

Tick **Raw values** to see the game's own names beside the plain words: the preset names with their scale and bias for roughness, metal and bumps, and the color mask levels under Textures. Useful when you edit the same file in WolvenKit, or ask for help on Discord.

## Microblend pages

Click a microblend in the Library for its page: its mask image (white is where the detail shows), its name and game path, and a line on what a microblend does. Microblends are the wear, dirt, scratches and printed patterns a layer can carry on top of its surface.

(Screenshot on the wiki, "A microblend page": The page of a microblend such as edgewear 01: its mask image, name, game path and the short explanation of microblends.)

## For assistants

The same page, as data, is the MCP tool `mat_colors`: "which dark reds does this leather have?" See [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html).
