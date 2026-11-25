<!-- Copied from EDGEweb's docs/wiki/rednode/admin-tools.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/admin-tools.html (reviewed 2026-11-18) -->

# Admin Tools

**REDnode Admin Tools** is an optional pack of two apps for managing REDnode itself. Install it if you want to see what your mods cost, stop one that misbehaves, or decide which tools AI assistants and your other mods may use.

| App | What it does |
|---|---|
| [Task Manager](https://edgemodders.ai/wiki/rednode/admin-tools.html#task-manager) | Lists every running package with its CPU, memory and game calls. **End task** stops one, **Restart** starts it again |
| [Tools Manager](https://edgemodders.ai/wiki/rednode/admin-tools.html#tools-manager) | Lists every tool an AI assistant can use through REDnode, with a switch for each, and a **MODS** switch for which of your other mods may call it |

**Status:** released, for game 2.5. The current version is **0.2.0** (2026-11-18), which adds the Tools Manager's **MODS** switch; that Tools Manager passed its test in the game on 2.5. The Task Manager passed its test on the pack's first release, for game 2.31, and has had no separate test on 2.5.

## Install

| You need | |
|---|---|
| REDnode 0.66.0 or later for Admin Tools 0.2.0, so 0.67.3 or later among releases. The older 0.1.1 runs on 0.38.1 or later | [Install REDnode](https://edgemodders.ai/wiki/rednode/install.html) first |
| The pack's zip, `REDnode-Admin-Tools-<version>.zip` | From [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35793) or [REDnode's releases](https://github.com/Edgemodders/REDnode/releases) |

1. With the game closed, add the zip to EDGEdeck or Vortex and deploy, or extract it into the game folder. The two apps land in REDnode's apps folder, as `taskmanager` and `toolsmanager`.
2. Start the game, press **F10** and open the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html).
3. Select **Task Manager**. Under **Permissions**, read the warning, then switch **Allowed** on for both lines: "managing REDnode" and "staying above other packages' windows".
4. Switch it on. Press **Pin to launcher** to keep it one click away.
5. Do the same for **Tools Manager**.

| You should see | |
|---|---|
| Before step 3 | The window opens, but says "Task Manager needs the admin permission: allow it in the Mod Manager" |
| After step 3 | Within a second, its table fills with your running packages |

> **About the "managing REDnode" permission.** A package that has it can end or restart any of your mods, and switch on AI tools you switched off. Allow it only for a package you trust. You can withdraw it in the Mod Manager at any time.

To remove the pack, remove it in your mod manager or delete the two folders. REDnode stays.

## Task Manager

One row per running package, refreshed every second. **1 s**, **5 s** and **Pause** change how often. Click a column to sort by it.

(Screenshot on the wiki, "The Task Manager": The Task Manager window over the game: one row per running package with its status, CPU, memory, thread, heap, game calls and uptime, one row selected, and the End task and Restart buttons.)

| Column | Shows |
|---|---|
| **Status** | Running, starting, crashed, not responding, ended |
| **CPU %**, **Memory** | What the package's process and windows use. Mods in a [shared process](https://edgemodders.ai/wiki/rednode/mod-manager.html#node-mods-restart-and-shared-process) all show the whole process |
| **Thread**, **Heap** | How busy the mod itself is, and the memory its code uses. 100 % in **Thread** means stuck or very busy. These tell mods in a shared process apart |
| **Game calls/s** | How many times a second it calls the game |
| **Service** | Calls a second between it and other packages |
| **Up** | How long it has run |

Select a row, then:

| Button | Does |
|---|---|
| **End task** | Stops the package now, even a mod stuck in an endless loop. Its windows close. It stays switched on, so it comes back the next time the game starts |
| **Restart** | Starts it again now, with its window if it had one open |

REDnode's own windows, such as the Mod Manager and the Mod log, are listed but can't be ended.

### Try it: find what a mod costs

1. Switch on a sample such as **Hello mod**, and open the Task Manager.
2. Find the Hello mod's row and read its **Memory** and **Game calls/s**.
3. Select the row and press **End task**, then **Restart**.

| After | You should see |
|---|---|
| Step 2 | A few game calls a second: the Hello mod asks for V's position twice a second |
| Step 3 | The Hello mod's window closes, and opens again |

## Tools Manager

Every tool an AI assistant can see through REDnode's [MCP server](https://edgemodders.ai/wiki/rednode/agents.html), the way Claude Code and REDagent see it: REDnode's own tools first, then each running mod's. Each row says what the tool does and whether it **reads** (runs without asking), **asks first** or **acts**. Since 0.2.0 it also decides which of your other mods may call each mod's tools.

(Screenshot on the wiki, "The Tools Manager": The Tools Manager window over the game: REDnode's tools as the first group, then a mod's tools, each row with its switch and whether it reads or asks first, and one tool selected with its description.)

| Control | Does |
|---|---|
| The assistants' switch on a tool | Takes the tool away from every assistant, from its next request |
| The assistants' switch on a group | The same for all of REDnode's tools, or all of one mod's |
| **Off for new packages** | A newly installed mod's tools start switched off for assistants, until you switch them on |
| The **MODS** switch on a mod's tool | Which of your other mods may call it: **MODS ON** (any mod), **ALLOWED** (only mods you allowed in the [Mod Manager's Calls](https://edgemodders.ai/wiki/rednode/mod-manager.html#calls)) or **MODS OFF** (none). A click goes to the next. Tools that only read start on, the rest allowed |
| The **MODS** switch on a mod's group | The same for every tool of that mod. A tool's own switch wins over it; **Back to the default** in the tool's details undoes that |
| **Mods: off for new packages** | A newly installed mod's tools start switched off for other mods |
| Select a tool | Shows its description and options, as an assistant reads them, and the mods that ask to call it, each allowed or not |
| **Assistants** | Which assistants have connected, and when |
| **Recent calls of mods' tools** | The newest calls: when, by which assistant or mod (marked `(mod)`), and the result or error, refusals included |

Good to know:

- Switching off `api_read` or `api_call` takes the game away from every assistant, REDagent included. The window says so beside them.
- REDnode keeps the switches, not the pack. If you remove the pack, the tools you switched off stay off. Install the pack again to change them.
- The **MODS** switch needs REDnode 0.66.0 or later, so 0.67.3 among releases.

## More

- [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html): what the tools are, and connecting Claude Code.
- REDnode's own [Admin Tools guide](https://edgemodders.github.io/REDnode/admin-tools.html), with the `admin` permission's calls for mod makers.
