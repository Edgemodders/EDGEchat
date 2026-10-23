---
type: llm
weight: 2
---

PASS if the steps are, in order: pack source/archive with redcode's `project_pack` into packed/archive/pc/mod (named after the mod); copy the .xl from source/resources beside the archive in packed (or use REDcode's Pack command instead); `edgedeck_install_project` with the .cpmodproj path; optionally `edgedeck_pending` to see what will change; quit the game (deploy refuses while it runs); `edgedeck_deploy`, which asks for approval.
FAIL if it copies files into the game folder by hand, skips EDGEdeck, leaves out the step that gets the .xl into packed, or invents tools that the redcode and edgedeck servers do not have.
