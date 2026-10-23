---
type: llm
weight: 2
---

PASS if the answer explains that hot reload watches the package's own folder, so writing settings.json there restarts the mod, and says to write data to `pkg.dataDir` from the `rednode` package (a data folder of the package's own, outside its folder, that survives updates).
FAIL if it only suggests debouncing, ignoring the file in a watcher config, or turning off hot reload, without naming `pkg.dataDir`.
