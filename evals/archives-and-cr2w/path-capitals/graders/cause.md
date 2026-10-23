---
type: llm
weight: 2
---

PASS if the answer names the capital letters in the path (`Base`, `Characters`, `Garment`) as the likely cause, and explains that the archive finds files by a hash of the exact lowercase game path (FNV1a64), so a path with capitals hashes differently and does not replace the game's file; the fix is to make the folders lowercase and pack again.
FAIL if it does not single out the capitals, or blames only load order, a missing framework or the texture format.
