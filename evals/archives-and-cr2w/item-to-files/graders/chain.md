---
type: llm
weight: 2
---

PASS if the answer gives this chain in order, naming the linking field at most steps: the TweakDB record's `entityName` (and `appearanceName`) → a factory `.csv` (such as clothing.csv) that maps the entity name to an `.ent` → the `.ent`'s appearance (named from appearanceName plus gender and camera suffixes such as &Female&TPP) → an `.app` → a mesh component's `mesh` and `meshAppearance` → the `.mesh`'s material entry → a multilayered material whose `.mlsetup` holds the colors (with an `.mlmask`).
FAIL if it skips the factory `.csv` step, invents fields or file types, or says the colors are only in a texture (`.xbm`) without mentioning the `.mlsetup`.
