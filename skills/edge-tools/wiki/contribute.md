<!-- Copied from EDGEweb's docs/wiki/contribute.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/contribute.html (reviewed 2026-11-13) -->

# Contribute to the wiki

The wiki is curated so it stays accurate. Claude sessions write the pages and check them against each tool's own docs, and the site's owner reviews them before they go up. You don't have to write a page to help.

| You have | Do this |
|---|---|
| A question the wiki doesn't answer | Ask on [Discord](https://discord.gg/63qP3Erw43). Questions that come up twice become FAQ entries |
| A mistake or an out-of-date page | [Open an issue](https://github.com/Edgemodders/EDGEweb/issues) with the page link and what's wrong |
| A tip, a recipe or a "how I made X" | Share it on Discord or in an issue. We'll turn it into a page and credit you |
| A finished page | Send a pull request adding a Markdown file under `docs/wiki/` in [EDGEweb](https://github.com/Edgemodders/EDGEweb) |

## Writing a page

- Plain words and short sentences. Explain or link any modding term.
- Tables for comparisons and steps that have options.
- Link to the tool's docs for reference detail instead of copying it.
- Say what is untested. Never include files extracted from the game.

Each page starts with front matter like this:

```yaml
---
title: Switch from Vortex to EDGEdeck
nav_title: Switch from Vortex
section: EDGEdeck
order: 2
description: "One sentence for search results."
reviewed: 2026-11-13
---
```

Put `description` in quotes, and any other value that contains a colon followed by a space. Without the quotes the page breaks and drops out of the sidebar.

`section` is the sidebar group, one of: Start here, REDagent, EDGEchat, REDnode, REDcode, EDGEdeck, REDbridge, EDGEbuilder, EDGEwave, EDGEmat, EDGEfab, EDGEquest, EDGEhack, EDGEdir, EDGEkit. `order` sorts pages within it. `reviewed` is the date the page was last checked against the tool's docs.
