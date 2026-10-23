---
description: A REDnode mod that writes into its own folder keeps restarting
tags: [rednode-mods, knowledge]
plugins: ["../../.."]
max_turns: 10
allowed_tools: [Read, Glob, Grep, Skill]
---

My REDnode Node mod for Cyberpunk 2077 saves the player's settings to settings.json in its own folder (next to mod.mjs) every time a setting changes. Since I turned on Hot reload, the mod restarts every time it saves, and sometimes loses the setting. Why, and what should it do instead? Keep it short.
