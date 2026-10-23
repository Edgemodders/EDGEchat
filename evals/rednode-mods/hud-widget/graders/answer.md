---
type: llm
weight: 2
---

PASS if the answer has all of these: a folder with a `rednode-app.json` manifest that has an `id`, `"entry"` pointing at the page, `"kind": "hud"`, a `"hideWith"` list including `menu` and `photo-mode`, and `width`/`height`; a page that gets the position from REDnode (for example `import { game } from 'rednode'` through an import map to `rednode://sdk/index.js` and `game.player.position()`, or `window.rednode.call('player.position')`), handling the main menu where there is no player; and the folder placed in `red4ext/plugins/REDnode/apps/` in the game folder.
FAIL if it invents a different manifest format or file name, uses Cyber Engine Tweaks, redscript or ink instead of a REDnode package, or puts the folder somewhere else.
