---
type: llm
weight: 2
---

PASS if the answer says: the library is in `%LOCALAPPDATA%\EDGEmat` on the user's PC; after a game update EDGEmat rebuilds it on its own (it checks the game's archives at start), and **Rebuild Library** in the Library view does it by hand if it did not; deleting the folder is safe, because EDGEmat builds it again on its next start.
FAIL if it names another folder as the library's place, says the user must rebuild by hand after every update, or says deleting it loses anything that cannot be rebuilt.
