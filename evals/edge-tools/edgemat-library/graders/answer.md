---
type: llm
weight: 2
---

PASS if the answer says: the library (called **Game Materials** in EDGEmat from 0.3.2, **Library** before) is in `%LOCALAPPDATA%\EDGEmat` on the user's PC; after a game update EDGEmat rebuilds it on its own (it checks the game's files at start), and **Rebuild Game Materials** does it by hand if it did not; deleting the material list is safe, because EDGEmat builds it again on its next start, but the same folder holds the Desk (`desk`), whose edits not yet added to a project would be lost, so not the whole folder while work is on the Desk.
FAIL if it names another folder as the library's place, says the user must rebuild by hand after every update, says deleting the list loses anything that cannot be rebuilt, or says the whole folder is safe to delete with no word about the Desk.
Not a reason to FAIL: the older button name **Rebuild Library** given beside the new one; mentioning other subfolders (such as `mcp`) as safe to delete.
