---
type: llm
weight: 2
---

PASS if the answer says to change the mesh under `components`, because `compiledData` is rebuilt from `components` when the file is saved (by WolvenKit or REDcode), and says to edit a copy in the mod's project at the same game path rather than the game's own file.
FAIL if it says to edit `compiledData`, or to edit both by hand as the main advice, or to change the game's archive.
