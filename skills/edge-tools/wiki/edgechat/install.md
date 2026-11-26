<!-- Copied from EDGEweb's docs/wiki/edgechat/install.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgechat/install.html (reviewed 2026-11-25) -->

# Install and connect

By the end of this page EDGEchat is installed, Claude can see the running game, and `/edge:setup` shows all seven connections working. Allow 20 to 40 minutes. Most of that goes on installing the programs EDGEchat connects to, and you skip any you already have.

| On this page | |
|---|---|
| [What you need](https://edgemodders.ai/wiki/edgechat/install.html#what-you-need) | The list, with a check for each |
| [Step 1: Install what EDGEchat needs](https://edgemodders.ai/wiki/edgechat/install.html#step-1-install-what-edgechat-needs) | Node.js, Claude Code, REDnode, REDbridge, EDGEdeck |
| [Step 2: Install EDGEchat](https://edgemodders.ai/wiki/edgechat/install.html#step-2-install-edgechat) | In EDGEkit, in VS Code, or from a terminal |
| [Step 3: Fill in the settings](https://edgemodders.ai/wiki/edgechat/install.html#step-3-fill-in-the-settings) | Where the game and REDbridge are |
| [Step 4: Restart Claude Code](https://edgemodders.ai/wiki/edgechat/install.html#step-4-restart-claude-code) | So the settings take effect |
| [Step 5: Let Claude into the game](https://edgemodders.ai/wiki/edgechat/install.html#step-5-let-claude-into-the-game) | Allow it once, from inside the game |
| [Step 6: Run /edge:setup](https://edgemodders.ai/wiki/edgechat/install.html#step-6-run-edgesetup) | The check, and what each answer means |
| [Step 7: Build EDGEmat's library, once](https://edgemodders.ai/wiki/edgechat/install.html#step-7-build-edgemats-library-once) | Needed for recolors |
| [Step 8: Your first question](https://edgemodders.ai/wiki/edgechat/install.html#step-8-your-first-question) | Proof that it all works |

## What you need

| Need | Why | Check |
|---|---|---|
| Windows 10 or 11 | The EDGE tools run on Windows | |
| Cyberpunk 2077 **2.5** | The game version the EDGE tools support now. On 2.31, see [Troubleshooting](https://edgemodders.ai/wiki/edgechat/troubleshooting.html#game-231) | The game's main menu shows the version |
| Claude Code, signed in | The assistant itself. It needs a Claude account whose plan includes Claude Code, paid to Anthropic | You can type a question in Claude Code and get an answer |
| Node.js 20 or later | A free program that six of the seven connections run on | `node --version` in a terminal prints `v20` or higher |
| [REDnode](https://edgemodders.ai/wiki/rednode/) 0.41.0 or later, in the game | The `rednode` connection, and swapping changes into the running game. Take the latest: [Recolor a jacket](https://edgemodders.ai/wiki/edgechat/recolor.html) uses REDnode's Console, which needs 0.49.5 | REDnode's launcher (**F10** in the game) shows its version |
| [REDbridge](https://edgemodders.ai/wiki/redbridge/) 0.12.0 or later, and the .NET 10 runtime | REDbridge reads the game's files for the `redcode`, `edgemat`, `edgefab`, `edgehack` and `edgequest` connections. It runs on Microsoft's .NET 10 runtime. 0.11.0 reads every file in game 2.5; 0.12.0 also finds the items an outfit's mesh belongs to. EDGEfab reads your keys from REDcode's **Keys** through 0.18.0 or later | `dotnet --list-runtimes` in a terminal lists a `10.` runtime |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) in VS Code or EDGEkit (recommended) | Its **Run game** button is the easy way to start the game with your mods. The `edgedeck` connection works without it | The EDGEdeck view in the editor |

A **terminal** is a window where you type commands. To open one, press the Windows key, type `PowerShell` and press Enter.

## Step 1: Install what EDGEchat needs

Skip any you already have.

1. **Node.js.** Download the **LTS** installer from [nodejs.org](https://nodejs.org/), run it and keep its defaults. Then open a new terminal and type `node --version`: it prints a version, `v20` or higher.
2. **Claude Code.** In [EDGEkit](https://edgemodders.ai/wiki/edgekit/install.html) there is nothing to do: EDGEkit installs Claude Code at its first start. In VS Code, open the Extensions view (**Ctrl+Shift+X**), search for `Claude Code` and install the extension published by Anthropic. To use it in a terminal, follow [Claude Code's setup](https://code.claude.com/docs/en/setup), which also explains accounts and plans. Sign in when Claude Code asks.
3. **REDnode** goes into the game: [install REDnode](https://edgemodders.ai/wiki/rednode/install.html). REDnode needs two frameworks, RED4ext and redscript. If you use EDGEdeck, its **Get the frameworks** button downloads both ([Frameworks](https://edgemodders.ai/wiki/edgedeck/frameworks.html#getting-the-frameworks)). Then add REDnode's release zip to EDGEdeck the way you add any mod, and deploy.
4. **REDbridge** is a program, not a mod: [install REDbridge](https://edgemodders.ai/wiki/redbridge/install.html#installing-it-by-hand). Unzip it anywhere, such as `C:\Tools\REDbridge`, and note where `REDbridge.exe` is. You need that path in step 3. If you use REDcode, its **REDcode: Install REDbridge** command downloads REDbridge for you.
5. **The .NET 10 runtime**, for REDbridge, from [dotnet.microsoft.com](https://dotnet.microsoft.com/download/dotnet/10.0). Or type `winget install Microsoft.DotNet.Runtime.10` in a terminal.
6. **EDGEdeck**, if you want it: [install EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html). EDGEkit has it built in.

## Step 2: Install EDGEchat

There are three ways. All three install the same plugin, so read only the one that matches where you use Claude Code. VS Code and the terminal share their plugins: install once, use it in both.

| You use | Read | Good to know |
|---|---|---|
| EDGEkit | [In EDGEkit](https://edgemodders.ai/wiki/edgechat/install.html#in-edgekit) | The easiest: one question, one button |
| VS Code | [In VS Code](https://edgemodders.ai/wiki/edgechat/install.html#in-vs-code) | A dialog in the Claude Code panel |
| `claude` in a terminal | [From a terminal](https://edgemodders.ai/wiki/edgechat/install.html#from-a-terminal) | One command |

### In EDGEkit

EDGEkit asks "Set up Claude Code for EDGE?" once, after its first-run steps. If you skipped it, press **Ctrl+Shift+P** and run **EDGEkit: Set Up Claude Code for EDGE**.

1. Answer **Set Up**.
2. Claude Code's plugin dialog opens on `edge`, which is EDGEchat's name as a plugin. Confirm adding the EDGEmodders marketplace, then press **Install**.
3. A few seconds after the install, EDGEkit opens a new Claude Code chat with `/edge:setup` already typed in its box.

You can press **Enter** on that typed command now: it only checks, and changes nothing. Expect it to report things as missing, because the settings (step 3) and the game (step 5) aren't done yet. The restart in step 4 starts a fresh chat, so in step 6 you type `/edge:setup` yourself.

### In VS Code

1. In the Claude Code panel, type `/plugins` in the prompt box (where you type to Claude) and press Enter. The **Manage plugins** dialog opens.
2. On its **Marketplaces** tab, enter `Edgemodders/EDGEchat`. This adds EDGEchat's marketplace, the place Claude Code downloads the plugin from. A marketplace named `edgemodders` joins the list.
3. On its **Plugins** tab, find `edge`, press **Install**, and choose **Install for you**, so it works in every folder.

(Screenshot on the wiki, "The plugin dialog": Claude Code's Manage plugins dialog in VS Code on the Plugins tab, with the edge plugin from the edgemodders marketplace and its Install button.)

A shortcut for steps 1 and 2: press **Win+R**, paste this link into the Run dialog and press Enter. VS Code opens the same dialog on EDGEchat and offers to add the marketplace.

```
vscode://anthropic.claude-code/install-plugin?plugin=edge&marketplace=Edgemodders/EDGEchat
```

### From a terminal

At a PowerShell or Command Prompt prompt, not inside a running `claude` session:

```
claude plugin install edge --marketplace Edgemodders/EDGEchat
```

It answers `Successfully installed plugin: edge@edgemodders`, and says how many settings are not set yet.

Inside a running `claude` session it takes two commands instead: `/plugin marketplace add Edgemodders/EDGEchat`, then `/plugin install edge@edgemodders`.

## Step 3: Fill in the settings

EDGEchat has six settings. All are optional, but most people need the first two.

| Where you installed | How the settings are asked |
|---|---|
| VS Code, EDGEkit | A form opens right after the install |
| A terminal | No form. Inside a `claude` session, type `/plugin configure edge@edgemodders`. Or put settings on the install command, one `--config` each, such as `--config game_path="E:\SteamLibrary\steamapps\common\Cyberpunk 2077"` |

| Setting | Fill in | Leave empty when |
|---|---|---|
| **Cyberpunk 2077 folder** | The game's install folder, the one holding `archive`, `bin` and `r6`, such as `E:\SteamLibrary\steamapps\common\Cyberpunk 2077` | You use VS Code, and REDcode there is set up with the same folder |
| **REDbridge.exe** | The full path of `REDbridge.exe` from step 1, such as `C:\Tools\REDbridge\REDbridge.exe` | You use VS Code, and REDcode there is set up |
| **EDGEdeck library** | The folder in EDGEdeck's **Library Path** setting | You never moved EDGEdeck's library |
| **Google Gemini key**, **OpenAI key**, **Tripo key** | Your own keys, only for what costs money: EDGEmat's materials from words and reshapes, and EDGEfab's props from words. Billed to you, and kept in Windows' credential store | You don't use those, or you set the keys once in REDcode's **Keys** view in VS Code, which every EDGE tool shares. The pages here don't need one |

**In EDGEkit, fill in the first two.** The "leave empty" shortcut reads VS Code's own settings, which EDGEkit doesn't share. If REDcode downloaded REDbridge for you, its path is in REDcode's `redcode.bridgePath` setting: open Settings (**Ctrl+,**), search for that name and copy the path.

**In the form, scroll down.** The **Save configuration** button is below the last setting, out of sight at first. Nothing is saved until you press it.

(Screenshot on the wiki, "The settings form": The edge plugin's settings form in VS Code, scrolled down to show the Cyberpunk 2077 folder and REDbridge.exe filled in and the Save configuration button below the last setting.)

You can change them later: see [Settings, commands and updates](https://edgemodders.ai/wiki/edgechat/settings.html#changing-them).

## Step 4: Restart Claude Code

The connections read their settings only when they start, so restart Claude Code now.

| Where | How |
|---|---|
| VS Code, EDGEkit | Press **Ctrl+Shift+P**, type `Developer: Reload Window` and press Enter |
| A terminal | Quit `claude` (type `/exit`) and start it again |

## Step 5: Let Claude into the game

The `rednode` connection works only while the game runs. You allow it once, from inside the game, and there is nothing to copy or paste.

1. Start the game and load a save.
2. Press **F10** to open REDnode's launcher. On the **REDNODE** tab, at the bottom left, press the gear at the right of the **Theme** row: the [Settings drawer](https://edgemodders.ai/wiki/rednode/settings.html) opens.
3. Switch **MCP server** on. This lets assistants on your PC reach the game. Switch **Hot reload** on too: [Your first mod](https://edgemodders.ai/wiki/edgechat/first-mod.html) uses it. Close the launcher with **F10**.
4. Switch to Claude Code (**Alt+Tab**). Type `/mcp`, pick `plugin:edge:rednode` and choose **Authenticate**.
5. Your browser opens a page titled **Approve in Cyberpunk 2077**, with a code. In the game, a **Connect** window shows a code too. Check that the two codes match, so you know the request you are about to allow is your own.
6. In the game, press **F10** to get the mouse cursor, then press **Allow** in the Connect window. You have two minutes.

(Screenshot on the wiki, "Allow Claude Code in the game": The game with REDnode's Connect window asking to allow Claude Code, its code matching the code on the Approve in Cyberpunk 2077 page in the browser beside it.)

| You should see | Where |
|---|---|
| `plugin:edge:rednode` shown as connected | In Claude Code, after typing `/mcp` again |
| Claude Code listed under **Connected assistants** | In REDnode's Settings drawer |

You stay signed in, even after you restart the game. **Revoke**, beside Claude Code under **Connected assistants**, takes the access back.

If the browser says the request was denied or lapsed (timed out), **Deny** was pressed or nobody answered within two minutes. Choose **Authenticate** again.

## Step 6: Run /edge:setup

Type `/edge:setup` and press Enter. Claude checks each connection, changes nothing, and ends with a table:

| Server | State when it works |
|---|---|
| rednode | Connected: the game, at a loaded save |
| redcode | Connected: the REDbridge version and how many archives and files it found |
| edgedeck | Connected: your library, its mods, and whether frameworks need updating |
| edgemat | Connected: how many material setups its library holds |
| edgefab | Connected: whether your Tripo and OpenAI keys are set |
| edgehack | Connected: it reads the game's quickhacks |
| edgequest | Connected: the quest index, or that it isn't built yet |

(Screenshot on the wiki, "/edge:setup, all connected": Claude Code showing the table /edge:setup ends with: rednode, redcode, edgedeck, edgemat, edgefab, edgehack and edgequest, each connected, with no next steps.)

Anything not connected comes with one next step. The usual ones:

| It says | Do this |
|---|---|
| rednode **not running** | Start the game, load a save, and check that **MCP server** is on (step 5). Then type `/mcp`, pick `plugin:edge:rednode` and choose **Reconnect** |
| rednode **not signed in** | Do step 5 again, starting at its item 4 (**Authenticate**) |
| redcode **no game folder** or **no REDbridge** | Fill in the setting it names (step 3), then restart (step 4) |
| edgedeck shows **no mods**, but you have some | It opened another library. Fill in **EDGEdeck library** (step 3), then restart |
| edgemat **library not built** | Go on to step 7 |
| edgequest **index not built** | Nothing to do now: it builds itself the first time you ask about a quest, in about 90 seconds |
| edgefab **keys not set** | Only needed for props from words: set them in REDcode's **Keys** view, or in the plugin's settings (step 3) |
| A server **added by hand** | You connected that tool to Claude Code yourself before EDGEchat, so Claude would see its tools twice. Claude explains how to remove that copy, and asks before running anything |

More in [Troubleshooting](https://edgemodders.ai/wiki/edgechat/troubleshooting.html).

## Step 7: Build EDGEmat's library, once

EDGEmat finds the materials of clothes in a list of [game materials](https://edgemodders.ai/wiki/edgemat/game-materials.html) that it builds from your own game. If `/edge:setup` said the library isn't built, ask:

> Build the EDGEmat library.

Claude reads the game's archives through REDbridge. It takes a minute or two. Afterwards `/edge:setup` shows `edgemat` as connected, with the number of material setups in the library.

If you also use the EDGEmat extension, it shares this library, so the library may be built already. The extension rebuilds it after a game update. Without the extension, ask Claude to build it again after a game update.

## Step 8: Your first question

With the game at a loaded save, ask:

> How much money does V have right now?

Claude reads it from the running game and answers with the number. It doesn't ask permission first, because reading the game never changes it. That answer is the sign that everything works.

A few more to try:

> What is V wearing right now?

> Which mods are on in EDGEdeck?

> How does EDGEdeck's Run game button work?

The last one is answered from the copy of this wiki that EDGEchat carries. You can ask about any EDGE tool's buttons and settings.

## Check

- `/edge:setup` shows all seven connected. EDGEfab's keys and EDGEquest's index may wait.
- Claude told you V's money without a permission prompt.
- REDnode's **Connected assistants** lists Claude Code.

Next: [Your first mod, no code](https://edgemodders.ai/wiki/edgechat/first-mod.html). EDGEchat's [lesson 1](https://edgemodders.github.io/EDGEchat/guide-install.html) covers the same steps.
