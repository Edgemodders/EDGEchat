---
type: llm
weight: 2
---

PASS if the answer explains that the swap replaced the archive file EDGEdeck had deployed in archive/pc/mod with the new build, so EDGEdeck sees the game's copy as changed by something else; and says to install the project into EDGEdeck again (edgedeck_install_project, so the library has the new build) and then deploy choosing restore for that path; or explains keep (take the game folder's file into the library) versus restore (overwrite it with the library's file) and recommends a consistent choice.
FAIL if it says the file is corrupt, tells the user to delete files in the game folder by hand, or does not explain why the swap caused the report.
