---
type: llm
weight: 2
---

PASS if the answer says that a Node mod's console.log goes to `red4ext/logs/rednode-mods.log` (tagged with the mod id) and can be watched in the game in the built-in Mod log app opened from the REDnode launcher, and points out that `import` syntax needs the `.mjs` extension (or a package.json with "type": "module"), so `mod.js` is the likely problem. Mentioning that the mod must be switched on in the Mod Manager, or `"open": true`, is a plus but not required.
FAIL if it sends the user to the CET console, the game's own logs, or browser DevTools as the place for a Node mod's output, or does not mention the `.mjs` problem.
