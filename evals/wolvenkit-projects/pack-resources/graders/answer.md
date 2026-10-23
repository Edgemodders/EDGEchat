---
type: llm
weight: 2
---

PASS if the answer says that `project_pack` packs only the folder it is given (source/archive), so the files in source/resources never reached packed/, and EDGEdeck installs only what is in packed/; and that the fix is to copy them into packed/ (the .xl beside the archive in packed/archive/pc/mod, the yaml at packed/r6/tweaks/myjacket/items.yaml), or to use REDcode's Pack command, which does that, then install the project again and deploy.
FAIL if it blames ArchiveXL or TweakXL not being installed, a wrong load order, or tells the user to copy the files into the game folder by hand.
