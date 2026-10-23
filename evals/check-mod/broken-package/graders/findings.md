---
type: llm
weight: 3
---

The package has three planted problems. PASS if the answer finds all three:
1. The `id` "Money_HUD" has capital letters; a REDnode id is lowercase letters, digits, `-` and `_` (and the folder should be named after it).
2. `main` is `mod.js`, but it uses `import` syntax, which needs the `.mjs` extension (or a package.json with "type": "module").
3. `entry` names `page.html`, which does not exist in the folder.
FAIL if it misses any of the three, or changes files.
