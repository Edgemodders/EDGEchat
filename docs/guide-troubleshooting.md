---
title: Troubleshooting
---

# <span class="y">Troubleshooting</span>

First, run `/edge:setup`: it checks every connection and gives the one next step for each. The tables below are the same answers, to read without Claude.

[&larr; Guide](guide.html)

## The connections

| Seen | Why | Do |
|---|---|---|
| No `/edge:` commands | The plugin isn't installed, or Claude Code wasn't restarted | [Lesson 1](guide-install.html), steps 2 and 4 |
| `rednode`: failed to connect, or "connection refused" | The game isn't running, or REDnode's **MCP server** is off | Start the game, load a save, switch **MCP server** on (**F10**, **REDNODE** tab, gear by **Theme**). Then `/mcp`, `plugin:edge:rednode`, **Reconnect** |
| `rednode`: needs authentication | Not signed in yet. Claude can't start the sign-in for you | `/mcp`, `plugin:edge:rednode`, **Authenticate**, then **Allow** in the game ([lesson 1, step 5](guide-install.html#step-5-let-claude-into-the-game)) |
| The browser says the request was denied or lapsed | **Deny** was pressed, or nobody answered within two minutes | **Authenticate** again |
| No sign-in page, or an error about the server's sign-in | REDnode older than 0.40.1 | Update REDnode |
| `rednode` connected, but every call fails as unauthorized | Claude Code was revoked in REDnode's **Connected assistants** | **Authenticate** again |
| `redcode`: game not loaded | No game folder | Fill in the **Cyberpunk 2077 folder** setting ([settings](guide-settings.html)), restart Claude Code |
| `redcode` fails starting the bridge | REDbridge missing or too old, or no .NET 10 runtime | REDbridge 0.10.0 or newer from [its releases](https://github.com/Edgemodders/REDbridge/releases), its path in the **REDbridge.exe** setting; the [.NET 10 runtime](https://dotnet.microsoft.com/download/dotnet/10.0) |
| `redcode`, `edgedeck` or `edgemat` missing | The connection didn't start | Install Node.js 20 or newer (`node --version`). The first start downloads it and can be slow: `/mcp`, **Reconnect** |
| `edgedeck` shows no mods, but you have some | It opened another library | Fill in the **EDGEdeck library** setting with EDGEdeck's **Library Path** |
| `edgemat`: library not built | It's built once from your game | Ask "Build the EDGEmat library" |
| Every EDGE tool shows twice | You added an EDGE server by hand before EDGEchat | `/edge:setup` names it and explains how to remove the copy |
| EDGEmat's tools show twice, one set named `edgemat__mat_...` | REDnode's settings share EDGEmat with desktop assistants (`"edgematTools": "all"`) | Set it back to its default: EDGEchat brings EDGEmat itself |
| A changed setting has no effect | The connections read settings only when they start | Restart Claude Code (in VS Code: **Developer: Reload Window**) |
| The settings form didn't save | **Save configuration** is below the settings, out of sight | Scroll down in the form |

## Mods

| Seen | Do |
|---|---|
| A mod doesn't show or crashes | `/edge:check-mod` ([lesson 5](guide-check.html)) |
| A REDmod has no effect | Start the game with `-modded`: EDGEdeck's **Run game** adds it |
| EDGEdeck: "changed in the game folder" | A swap replaced a deployed file. [Lesson 4, step 3](guide-live.html#step-3-bring-edgedeck-back-in-step) |
| EDGEdeck won't deploy | The game is running: close it first |
| A deploy would put in mods you didn't expect | They're switched on but were never deployed. Deploy only the mod you mean, or switch the others off. **Run game** deploys every waiting change |
| A swap: "RED Hot Tools not loaded" | REDnode older than 0.41.0, which needs RED Hot Tools (no 2.5 build). Update REDnode: from 0.41.0 REDswap does the swap |

## Game 2.31

The EDGE tools now target game 2.5. On 2.31:

| Tool | On 2.31 |
|---|---|
| REDnode | 0.37.0 is the last. It has no sign-in: add REDnode to Claude Code by hand with its **Copy setup** command instead of the plugin's sign-in. `/edge:setup` leaves that copy alone |
| REDbridge | Keep 0.10.0: 0.11.0 misreads 2.31's world sectors |
| Swaps in the running game | Need RED Hot Tools, which has a 2.31 build |

## Still stuck

Ask Claude, in plain words: "rednode won't connect, what do I check?". It has these answers and the EDGEmodders wiki. Or open an issue on [EDGEchat's GitHub](https://github.com/Edgemodders/EDGEchat/issues) with what `/edge:setup` said.

[&larr; Guide](guide.html)
