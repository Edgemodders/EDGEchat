---
type: llm
weight: 2
---

PASS if the steps include all of these: pack source/archive with redcode's `project_pack` into packed/archive/pc/mod; get the .xl from source/resources into packed beside the archive (a copy, or REDcode's Pack command); `edgedeck_install_project` with the .cpmodproj path; `edgedeck_deploy`, with the game closed (saying so anywhere in the steps is enough).
FAIL if it copies files into the game folder by hand, skips EDGEdeck, leaves the .xl out of packed, or invents tools that the redcode and edgedeck servers do not have.
