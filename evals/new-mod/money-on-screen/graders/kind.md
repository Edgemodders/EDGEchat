---
type: llm
weight: 2
---

PASS if the answer recommends a REDnode package (an overlay app or HUD widget with a `rednode-app.json`) placed in `red4ext/plugins/REDnode/apps/<id>/`, and its first steps are a small first version tested in the game (for example with hot reload on, then checking that it shows).
FAIL if it recommends Cyber Engine Tweaks, redscript, an ink widget or another framework instead of a REDnode package, or skips testing in the game.
