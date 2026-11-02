---
title: "Lesson 1: Install and connect"
---

# Lesson 1: <span class="y">Install and connect</span>

By the end of this lesson EDGEchat is installed, Claude can see the running game, and `/edge:setup` reports all four connections working.

[&larr; Guide](guide.html)

## What you need

| Need | Why | Check |
|---|---|---|
| Windows 10 or 11 | The EDGE tools run on Windows | |
| Cyberpunk 2077 **2.5** | The game version the EDGE tools support now. On 2.31, see [Troubleshooting](guide-troubleshooting.html#game-231) | The game's main menu shows the version |
| Claude Code, signed in | The assistant itself: the extension in VS Code, EDGEkit (which has it built in), or `claude` in a terminal. It needs a Claude account that includes Claude Code | [Claude Code's setup](https://code.claude.com/docs/en/setup) |
| Node.js 20 or newer | Three of the four connections run on it | `node --version` in a terminal prints `v20` or higher |
| REDnode **0.41.0 or newer** in the game | The `rednode` connection, and swapping changes into the running game (lesson 4). 0.40.1 is the oldest that can sign in | REDnode's launcher (**F10**) shows its version |
| REDbridge 0.10.0 or newer, and the .NET 10 runtime | Lets `redcode` and `edgemat` read the game's files. 0.11.0 reads every file in 2.5 | `dotnet --list-runtimes` lists a `10.` runtime |
| EDGEdeck (recommended) | The VS Code extension that manages your mods. EDGEchat's `edgedeck` connection works without it, but its **Run game** button is the easy way to start the game with your mods | The EDGEdeck view in VS Code |

## Step 1: Install the EDGE tools EDGEchat connects to

Skip any you already have.

1. **REDnode** goes into the game: [install REDnode](https://edgemodders.ai/wiki/rednode/install.html). It needs RED4ext and redscript; its page says how to get them. With EDGEdeck, **Get the frameworks** fetches RED4ext and redscript, and EDGEdeck takes REDnode's release zip like any mod.
2. **REDbridge** is a program, not a mod: download `REDbridge-<version>-win-x64.zip` from [its releases](https://github.com/Edgemodders/REDbridge/releases) and unzip it anywhere you like, such as `C:\Tools\REDbridge`. Note where `REDbridge.exe` is: you need its path in step 3. If you use REDcode in VS Code, its **Install REDbridge** command does this for you.
3. **The .NET 10 runtime**, for REDbridge: from [dotnet.microsoft.com](https://dotnet.microsoft.com/download/dotnet/10.0).
4. **EDGEdeck**, if you want it: search for EDGEdeck in VS Code's Extensions view ([install EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html)).

## Step 2: Install EDGEchat

Pick the way that matches where you use Claude Code.

### In EDGEkit

EDGEkit 1.140.2 or newer offers EDGEchat after its first-run steps:

1. Answer **Set Up** to "Set up Claude Code for EDGE?".
2. Claude Code's plugin dialog opens on `edge`. Confirm adding the EDGEmodders marketplace, then **Install**.
3. EDGEkit opens a new Claude Code session with `/edge:setup` ready in the prompt box. Fill in the settings first (step 3), then run it.

### In VS Code

1. In the Claude Code panel, type `/plugins` in the prompt box. The **Manage plugins** dialog opens.
2. Open its **Marketplaces** tab and enter `Edgemodders/EDGEchat`.
3. Open its **Plugins** tab, find `edge`, click **Install**, and choose **Install for you**, so it works in every folder.

Or open this link from Windows' Run dialog (**Win+R**): it opens the same dialog on EDGEchat.

```
vscode://anthropic.claude-code/install-plugin?plugin=edge&marketplace=Edgemodders/EDGEchat
```

### From a terminal

At a PowerShell or Command Prompt prompt (not inside a running `claude` session):

```
claude plugin install edge --marketplace Edgemodders/EDGEchat
```

It prints `Successfully installed plugin: edge@edgemodders`. Inside a running `claude` session, the same is two commands: `/plugin marketplace add Edgemodders/EDGEchat`, then `/plugin install edge@edgemodders`.

All three install the same plugin, and the terminal and VS Code share it: install once, use it in both.

## Step 3: Fill in the settings

A form asks for the plugin's five settings. All are optional, but most people need the first two.

| Setting | Fill in | Leave empty when |
|---|---|---|
| **Cyberpunk 2077 folder** (`game_path`) | The game's install folder, the one holding `archive`, `bin` and `r6`, such as `E:\SteamLibrary\steamapps\common\Cyberpunk 2077` | REDcode is set up in VS Code with the same folder |
| **REDbridge.exe** (`redbridge_exe`) | The full path of `REDbridge.exe` from step 1 | REDcode is set up in VS Code |
| **EDGEdeck library** (`edgedeck_library`) | The folder in EDGEdeck's **Library Path** setting | You never moved EDGEdeck's library (the default is the `EDGEdeck` folder in your user folder) |
| Google Gemini key, OpenAI key | Your own key, only to make materials from words in EDGEmat (lesson 3 doesn't need one). Billed to you; kept in Windows' credential store | You don't make materials from words |

**In VS Code, scroll down:** the **Save configuration** button is below the last setting, out of sight at first. Nothing is saved until you press it.

To change the settings later: `/plugins`, then the gear on the `edge` row. In a terminal session: `/plugin configure edge@edgemodders`.

## Step 4: Restart Claude Code

The connections read their settings only when they start. In VS Code or EDGEkit: **Developer: Reload Window** from the Command Palette (**Ctrl+Shift+P**). In a terminal: quit `claude` and start it again.

## Step 5: Let Claude into the game

The `rednode` connection only works while the game runs, and you allow it once from inside the game.

1. Start the game and load a save.
2. Press **F10** to open REDnode's launcher. At the bottom left, open the **REDNODE** tab. Press the gear at the right of the **Theme** row: the Settings panel slides out.
3. Switch **MCP server** on. While you're there, switch **Hot reload** on too (lesson 2 uses it). Close the launcher with **F10**.
4. In Claude Code, type `/mcp`. Pick `plugin:edge:rednode` and choose **Authenticate**.
5. Your browser opens a page titled **Approve in Cyberpunk 2077**, showing a code. In the game, a **Connect** window shows a code too. Check that the two match.
6. Press **F10**, then **Allow** in the Connect window. Back in Claude Code, `/mcp` shows `plugin:edge:rednode` connected.

You stay signed in, also after the game restarts. REDnode's Settings panel lists Claude Code under **Connected assistants**; **Revoke** there takes the access back.

If the browser says the request was denied or lapsed: you pressed **Deny**, or nobody answered within two minutes. Choose **Authenticate** again.

## Step 6: Run `/edge:setup`

Type `/edge:setup` in the prompt box and press Enter. Claude checks each connection, changes nothing, and ends with a table like this:

| Server | State | Next step |
|---|---|---|
| rednode | Connected: the game at a loaded save | |
| redcode | Connected: REDbridge 0.11.0, 57 archives, 592,071 files | |
| edgedeck | Connected: your library, its mods, the frameworks line | |
| edgemat | Connected: the setups count | |

Anything not connected comes with one next step. The usual ones:

| It says | Do |
|---|---|
| rednode **not running** | Start the game, load a save, check **MCP server** is on (step 5). Then `/mcp`, `plugin:edge:rednode`, **Reconnect** |
| rednode **not signed in** | Step 5, from 4 on |
| redcode **no game folder** or **no REDbridge** | Fill in the setting it names (step 3), then restart (step 4) |
| edgedeck shows **no mods**, but you have some | It opened another library: fill in **EDGEdeck library** (step 3) |
| edgemat **library not built** | Ask Claude to build it (step 7) |
| A server **added by hand** | You added it before EDGEchat. Claude explains how to remove that copy and asks before running anything |

More in [Troubleshooting](guide-troubleshooting.html).

## Step 7: Build EDGEmat's library, once

EDGEmat finds garments' materials in a library it builds from your own game. If `/edge:setup` said it isn't built, ask:

> Build the EDGEmat library.

It reads the game's archives through REDbridge and takes a minute or two. The EDGEmat extension in VS Code shares the same library, so if you use it, it may be built already; the extension also rebuilds it after a game update. Without the extension, ask Claude to build it again after an update.

## Step 8: Your first question

With the game at a loaded save, ask:

> How much money does V have right now?

Claude reads it from the running game and answers with the number. It doesn't ask permission first: reading the game never changes it. That's the first sign everything works. Try a few more:

> What is V wearing right now?

> Which mods are on in EDGEdeck?

> How does EDGEdeck's Run game button work?

The last one comes from the EDGEmodders wiki, which EDGEchat carries: ask about any EDGE tool's buttons and settings.

## Check

- [ ] `/edge:setup` shows all four connected
- [ ] Claude told you V's money without a permission prompt
- [ ] REDnode's **Connected assistants** lists Claude Code

[&larr; Guide](guide.html) · [Next: Your first mod, no code &rarr;](guide-first-mod.html)
