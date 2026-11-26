<!-- Copied from EDGEweb's docs/wiki/edgechat/troubleshooting.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgechat/troubleshooting.html (reviewed 2026-11-25) -->

# Troubleshooting EDGEchat

First, type `/edge:setup` in Claude Code. It checks every connection and gives the one next step for each. The tables below are the same answers, to read without Claude.

| On this page | |
|---|---|
| [Installing and settings](https://edgemodders.ai/wiki/edgechat/troubleshooting.html#installing-and-settings) | No commands, no form, a setting that doesn't take |
| [Signing in to the game](https://edgemodders.ai/wiki/edgechat/troubleshooting.html#signing-in-to-the-game) | The `rednode` connection |
| [The other connections](https://edgemodders.ai/wiki/edgechat/troubleshooting.html#the-other-connections) | `redcode`, `edgedeck`, `edgemat`, `edgefab`, `edgehack`, `edgequest`, tools shown twice |
| [Working with Claude](https://edgemodders.ai/wiki/edgechat/troubleshooting.html#working-with-claude) | It can't find an item, or it stops |
| [Mods](https://edgemodders.ai/wiki/edgechat/troubleshooting.html#mods) | A mod doesn't show, deploys and swaps |
| [Game 2.31](https://edgemodders.ai/wiki/edgechat/troubleshooting.html#game-231) | What still works on the older game version |
| [Still stuck](https://edgemodders.ai/wiki/edgechat/troubleshooting.html#still-stuck) | Where to ask |

## Installing and settings

| You see | Why | Do this |
|---|---|---|
| No `/edge:` commands | The plugin isn't installed, or Claude Code wasn't restarted | [Install and connect](https://edgemodders.ai/wiki/edgechat/install.html), steps 2 and 4 |
| The settings form never appeared | A terminal install has no form | Inside a `claude` session, type `/plugin configure edge@edgemodders`. In VS Code or EDGEkit, type `/plugins` and press the gear on the `edge` row |
| The settings form didn't save | **Save configuration** is below the settings, out of sight | Scroll down in the form, then press it |
| A changed setting has no effect | The connections read their settings only when they start | Restart Claude Code. In VS Code or EDGEkit, run **Developer: Reload Window** from the Command Palette (**Ctrl+Shift+P**) |
| In EDGEkit, `redcode`, `edgemat` or another connection can't find the game or REDbridge, though REDcode is set up | Empty settings fall back to VS Code's own settings, which EDGEkit doesn't share | Fill in **Cyberpunk 2077 folder** and **REDbridge.exe** ([step 3](https://edgemodders.ai/wiki/edgechat/install.html#step-3-fill-in-the-settings)), then restart Claude Code |

## Signing in to the game

| You see | Why | Do this |
|---|---|---|
| `rednode` failed to connect, or "connection refused" | The game isn't running, or REDnode's **MCP server** is off | Start the game and load a save. Switch **MCP server** on (**F10**, **REDNODE** tab, the gear by **Theme**). Then type `/mcp`, pick `plugin:edge:rednode` and choose **Reconnect** |
| `rednode` needs authentication | You haven't signed in yet. Claude can't start the sign-in for you | Type `/mcp`, pick `plugin:edge:rednode` and choose **Authenticate**. Then press **Allow** in the game ([step 5](https://edgemodders.ai/wiki/edgechat/install.html#step-5-let-claude-into-the-game)) |
| The browser says the request was denied or lapsed (timed out) | **Deny** was pressed, or nobody answered within two minutes | Choose **Authenticate** again |
| You can't click **Allow** in the game's Connect window | The game has the mouse | Press **F10** first, then click **Allow** |
| No sign-in page, or an error about the server's sign-in | Your REDnode is too old to sign in: that came with 0.40.1 | [Update REDnode](https://edgemodders.ai/wiki/rednode/install.html#updating-rednode) |
| `rednode` is connected, but every request fails as unauthorized | Claude Code was revoked under REDnode's **Connected assistants** | Choose **Authenticate** again |

## The other connections

| You see | Why | Do this |
|---|---|---|
| `redcode`, `edgedeck`, `edgemat`, `edgefab`, `edgehack` or `edgequest` is missing | The connection didn't start | Install [Node.js](https://nodejs.org/) 20 or later, and check it with `node --version` in a terminal. The first start downloads the connection's program and can be slow: type `/mcp` and choose **Reconnect** |
| `redcode`: game not loaded | It has no game folder | Fill in the **Cyberpunk 2077 folder** setting ([Settings](https://edgemodders.ai/wiki/edgechat/settings.html#the-six-settings)), then restart Claude Code |
| `redcode` fails starting the bridge | REDbridge is missing or too old, or the .NET 10 runtime is missing | Install REDbridge 0.12.0 or later and the .NET 10 runtime ([Install REDbridge](https://edgemodders.ai/wiki/redbridge/install.html)). Put the path of `REDbridge.exe` in the **REDbridge.exe** setting, then restart Claude Code |
| `edgedeck` shows no mods, but you have some | It opened another library | Fill in the **EDGEdeck library** setting with the folder in EDGEdeck's **Library Path** setting, then restart Claude Code |
| `edgemat`: library not built | The library is built once, from your game | Ask "Build the EDGEmat library" |
| `edgefab`: no key, or REDcode's Keys can't be reached | Props from words need your Tripo and OpenAI keys. EDGEfab reads REDcode's **Keys** through REDbridge 0.18.0 or later | Set the keys in REDcode's **Keys** view or in the plugin's settings, and fill in **REDbridge.exe** if REDcode isn't set up |
| `edgequest`: index not built | It's built once from your game, in about 90 seconds | Ask about any quest, or "Build the EDGEquest index" |
| Every EDGE tool shows twice | You connected an EDGE tool to Claude Code by hand before installing EDGEchat | `/edge:setup` names it and explains how to remove the copy |
| EDGEmat's tools show twice, one set named `edgemat__mat_...` | REDnode is set to share EDGEmat's tools with desktop assistants (`"edgematTools": "all"`, see [REDnode: Files and folders](https://edgemodders.ai/wiki/rednode/settings.html#files-and-folders)) | Set it back to its default. EDGEchat brings EDGEmat itself |
| EDGEhack's tools show twice, one set named `edgehack__hack_...` | The same, with `"edgehackTools": "all"` | Set it back to its default |

## Working with Claude

| You see | Why | Do this |
|---|---|---|
| Claude can't find an item | The item's id is wrong | With the game running and V wearing the item, ask "What is V wearing? Give me the TweakDB record ids" ([Recolor a jacket, step 1](https://edgemodders.ai/wiki/edgechat/recolor.html#step-1-put-the-jacket-on-v)) |
| Claude finds the item but not its materials | EDGEmat's library isn't built, or was built before a game update | Ask "Build the EDGEmat library" |
| You asked for a quest or a quickhack, and Claude says it can't | Your EDGEchat is older than 0.2.1, which added EDGEquest and EDGEhack | [Update](https://edgemodders.ai/wiki/edgechat/settings.html#updates), then restart Claude Code |
| You asked for a sound mod or a script, and Claude says it can't | EDGEchat 0.2.1 doesn't cover them | See [What it doesn't do yet](https://edgemodders.ai/wiki/edgechat/index.html#what-it-doesnt-do-yet) |
| `/edge:continue` says there is nothing to pick up | REDagent hasn't written a handoff on this PC | In the game, press **VS Code** in [REDagent](https://edgemodders.ai/wiki/redagent/using.html#continue-in-vs-code)'s chat window, then run `/edge:continue` again |
| Claude stops part-way, or says a usage limit was reached | That limit belongs to your Claude plan, not to EDGEchat | Wait for the limit to reset, or see your plan with Anthropic. Then say "carry on" |

## Mods

| You see | Do this |
|---|---|
| A mod doesn't show, or crashes | Type `/edge:check-mod`: see [When a mod doesn't work](https://edgemodders.ai/wiki/edgechat/check-mod.html) |
| A REDmod has no effect | A REDmod loads only when the game starts with the `-modded` launch option. EDGEdeck's **Run game** adds it |
| EDGEdeck says a file was "changed in the game folder" | A swap replaced a deployed file: see [Change it while you play, step 3](https://edgemodders.ai/wiki/edgechat/live.html#step-3-bring-edgedeck-back-in-step) |
| EDGEdeck won't deploy | The game is running. Close it first |
| A deploy would put in mods you didn't expect | They're switched on but were never deployed. Deploy only the mod you mean, or switch the others off. **Run game** deploys every waiting change |
| A swap says "RED Hot Tools not loaded" | Your REDnode is older than 0.41.0. Those versions swap files through a separate plugin, RED Hot Tools, which has no build for game 2.5. [Update REDnode](https://edgemodders.ai/wiki/rednode/install.html#updating-rednode): from 0.41.0 it has its own swapper, [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html) |

## Game 2.31

The EDGE tools now target game 2.5. On 2.31:

| Tool | On 2.31 |
|---|---|
| REDnode | 0.37.0 is the last version for 2.31, and it has no sign-in. Add REDnode to Claude Code by hand with its **Copy setup** command instead ([Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html)). `/edge:setup` leaves that copy alone |
| REDbridge | Keep 0.10.0. REDbridge 0.11.0 misreads 2.31's world sectors (the files for areas of the map) |
| Swaps into the running game | Need RED Hot Tools, which has a 2.31 build |

## Still stuck

Ask Claude in plain words, such as "rednode won't connect, what do I check?". It has these answers and a copy of this wiki. Or open an issue on [EDGEchat's GitHub](https://github.com/Edgemodders/EDGEchat/issues) with what `/edge:setup` said, or ask on [Discord](https://discord.gg/63qP3Erw43).
