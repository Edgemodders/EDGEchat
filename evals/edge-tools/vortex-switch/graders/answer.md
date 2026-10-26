---
type: llm
weight: 2
---

PASS if the steps include: EDGEdeck's **Import from Vortex** (in the Set up group or the Mods view's menu), picking the mods to import; **Purge** in Vortex before deploying, because only one manager can have mods deployed at a time; then **Deploy** in EDGEdeck with the game closed. And it says going back works: **Undo deploy** in EDGEdeck, then deploy in Vortex, since Vortex's own copies were never touched.
FAIL if it tells the user to copy or move mod files by hand, skips the Purge in Vortex, or says going back is not possible.
