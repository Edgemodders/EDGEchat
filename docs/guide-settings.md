---
title: Settings and updates
---

# Settings and <span class="y">updates</span>

[&larr; Guide](guide.html)

## The five settings

| Setting | Id | What | Default when empty |
|---|---|---|---|
| Cyberpunk 2077 folder | `game_path` | The game's install folder (it holds `archive`, `bin` and `r6`) | REDcode's game folder setting in VS Code; EDGEdeck then remembers or finds Steam, GOG or Epic |
| REDbridge.exe | `redbridge_exe` | The path of `REDbridge.exe` | REDcode's REDbridge setting in VS Code |
| EDGEdeck library | `edgedeck_library` | EDGEdeck's library folder | The `EDGEdeck` folder in your user folder. EDGEdeck's VS Code settings aren't read: if you moved the library, fill this in |
| Google Gemini key | `gemini_api_key` | Your key, for EDGEmat's materials from words | Off. Kept in Windows' credential store |
| OpenAI key | `openai_api_key` | The same, with OpenAI | Off. Kept in Windows' credential store |

The REDcode fallbacks read VS Code's own settings. In EDGEkit or another editor build, fill in the settings instead.

REDnode needs no setting: you allow Claude Code in the game ([lesson 1, step 5](guide-install.html#step-5-let-claude-into-the-game)).

## Changing them

| Where | How |
|---|---|
| VS Code, EDGEkit | `/plugins`, the gear on the `edge` row, change, scroll down, **Save configuration** |
| Inside a terminal session | `/plugin configure edge@edgemodders` |
| At a terminal prompt | `claude plugin configure edge@edgemodders` lists them and which are unset |

Then restart Claude Code: the connections read the settings only when they start. Changing REDcode's own VS Code setting doesn't change the plugin's, which comes first.

## Updates

New versions come from EDGEchat's marketplace. Claude Code leaves auto-update off for marketplaces like this one, so you stay on the version you installed until you update.

**Turn on auto-update** (recommended): in the **Marketplaces** tab of `/plugins` (VS Code, EDGEkit) or `/plugin` (terminal), select `edgemodders`, then **Enable auto-update**. Claude Code then updates the plugin when a session starts, and the next session loads it.

**Or update by hand**, at a terminal prompt:

```
claude plugin marketplace update edgemodders
claude plugin update edge@edgemodders
```

Inside a running `claude` session the same commands start with `/plugin`. In VS Code, the refresh icon in `/plugins`' **Marketplaces** tab updates the listing.

After an update, restart Claude Code. A new version may add settings: `/edge:setup` names any that are unset. What changed is in the [changelog](changelog.html).

## Where things are

| Thing | Where |
|---|---|
| The plugin's settings | Claude Code's user settings, `%USERPROFILE%\.claude\settings.json`, under `pluginConfigs`. Keys aren't there: they're in the credential store |
| The plugin itself | Claude Code's plugin cache, managed by Claude Code. Don't edit it |
| EDGEmat's library | `%LOCALAPPDATA%\EDGEmat`, shared with the EDGEmat extension |
| EDGEdeck's library | The `edgedeck_library` setting, or `%USERPROFILE%\EDGEdeck` |

[&larr; Guide](guide.html)
