---
description: After a hot swap, EDGEdeck reports the archive as changed in the game folder
tags: [wolvenkit-projects, knowledge]
plugins: ["../../.."]
max_turns: 10
allowed_tools: [Read, Glob, Grep, Skill]
---

I deployed my WolvenKit project MyJacket with EDGEdeck, then while playing I repacked it and swapped it into the running game with REDnode's `archives_reload`, which worked. Now I quit the game and EDGEdeck's deploy says `archive/pc/mod/MyJacket.archive` was changed in the game folder and it skipped it, asking whether to keep or restore. What happened, and what should I do so EDGEdeck and the game agree again? Keep it short.
