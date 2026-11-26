<!-- Copied from EDGEweb's docs/wiki/connect-claude-code.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/connect-claude-code.html (reviewed 2026-11-25) -->

# Connect Claude Code

[Claude Code](https://claude.com/claude-code) is Anthropic's AI assistant for your desktop: a chat panel in VS Code or EDGEkit, or in a terminal, that can read files and do work for you. It needs a Claude plan that includes it. Connected to the EDGE tools, it can read the game's files, manage your mods and reach the running game. (The assistant inside the game is a different one: [REDagent](https://edgemodders.ai/wiki/redagent/).)

Each connection is what Claude Code calls an [MCP server](https://edgemodders.ai/wiki/glossary.html#mcp-server): a small program that offers one tool's abilities to an assistant.

## The easy way: EDGEchat

**Most people should install [EDGEchat](https://edgemodders.ai/wiki/edgechat/)**, the EDGE plugin for Claude Code. One install connects seven tools, adds modding knowledge and gives you commands such as `/edge:new-mod`. Its command `/edge:setup` checks every connection and gives the next step for anything missing.

Go to [Install and connect](https://edgemodders.ai/wiki/edgechat/install.html). It has every step, with what you need and which versions. [EDGEkit](https://edgemodders.ai/wiki/edgekit/first-session.html#claude-code-and-edgechat) offers the install in one click.

## What connects, and how

Eight EDGE tools offer a connection. EDGEchat 0.2.1 sets up seven of them. EDGEwave you add by hand today, and it works beside EDGEchat.

| Tool | Gives Claude | With EDGEchat | By hand |
|---|---|---|---|
| [REDnode](https://edgemodders.ai/wiki/rednode/) | The running game: mod logs, REDnode's windows, pictures of the game's screen, reading and calling the game, swapping a changed mod in, quest facts, things in the world, and the tools your installed REDnode mods offer | Included | [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html#connect-claude-code) |
| [REDcode](https://edgemodders.ai/wiki/redcode/) | The game's files: browse and search the archives, read and change game files, textures, TweakDB, game sounds, pack, export and import; make and edit animations, read lip sync, and find and change a sector's nodes with your sector scripts. It works through REDbridge | Included | [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html#connect-it-by-hand) |
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) | Your mods: list, add, turn on or off, reorder, remove, deploy, undo, conflicts, loadouts, Vortex import | Included | [Assistants and the command line](https://edgemodders.ai/wiki/edgedeck/assistants.html#connect-an-assistant) |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/) | Materials: a garment's materials from its in-game name, its layers in plain words, recolors saved into your project, new materials from words or an image | Included | [Assistants](https://edgemodders.ai/wiki/edgemat/assistants.html#connect-claude-code) |
| [EDGEfab](https://edgemodders.ai/wiki/edgefab/) | Props: draw an object from your words, make it 3D, size it, make it glow, and put it into your project or the EDGE Library | Included | [Assistants](https://edgemodders.ai/wiki/edgefab/assistants.html#connect-claude-code) |
| [EDGEquest](https://edgemodders.ai/wiki/edgequest/) | Quests: read the game's quests, write and check a quest | Included | [For assistants](https://edgemodders.ai/wiki/edgequest/assistants.html#connect-it) |
| [EDGEhack](https://edgemodders.ai/wiki/edgehack/) | Quickhacks: find, make, change and pack them | Included | [Assistants](https://edgemodders.ai/wiki/edgehack/assistants.html#connect-claude-code) |
| [EDGEwave](https://edgemodders.ai/wiki/edgewave/) | Sound: search sound events, make a sound into a new event, voice lines | Not yet | [Assistants](https://edgemodders.ai/wiki/edgewave/assistants.html#connect-claude-code) |

> **Connect each tool one way only.** If you have EDGEchat, don't also add REDnode, REDcode, EDGEdeck, EDGEmat, EDGEfab, EDGEquest or EDGEhack by hand: Claude would see every one of that tool's abilities twice. If that has happened, run `/edge:setup`. It finds the copies you added by hand and explains how to remove them.

## Connecting by hand

Use this for EDGEwave, or for any tool if you don't want the plugin. If you connected EDGEfab, EDGEquest or EDGEhack by hand before EDGEchat 0.2.1, remove that copy now: `/edge:setup` explains how. Each tool's own page, linked in the table above, has the full steps, what the connection needs and what you should see. In short:

| Tool | What you do |
|---|---|
| REDnode | In the game, press **F10**, open the Settings drawer (the gear at the right of the **Theme** row) and switch **MCP server** on. In a terminal, run `claude mcp add --transport http --scope user rednode http://127.0.0.1:41820/mcp` once. Then sign in, as below |
| REDcode | In a terminal, run `claude mcp add redcode -- npx -y @edgemodders/redcode-mcp` once. If that fails on Windows, the REDcode page has a longer command to use instead |
| EDGEdeck | In the editor, press **Ctrl+Shift+P** and run **EDGEdeck: Connect an assistant (MCP)...**. Choose **Copy the Claude Code command** and paste it into a terminal once |
| EDGEmat | In EDGEmat's **Game Materials** view, press **`...`** and choose **Connect an Assistant (MCP)...**, then **Connect Claude Code** |
| EDGEfab | Press **Ctrl+Shift+P** and run **EDGEfab: Connect an Assistant (MCP)...**, then choose **Connect Claude Code**. For pictures and models from words, its server reads your keys from REDcode's Keys, so none goes in its settings: [Keys for the server](https://edgemodders.ai/wiki/edgefab/assistants.html#keys-for-the-server) |
| EDGEquest | In a terminal, run `claude mcp add edgequest -- npx -y @edgemodders/edgequest-mcp` once |
| EDGEhack | In EDGEhack's **Desk** view, press **`...`** and choose **Connect an Assistant (MCP)...**, then **Connect Claude Code** |
| EDGEwave | Press **Ctrl+Shift+P** and run **EDGEwave: Connect an Assistant (MCP)...**, then choose **Connect Claude Code** |

After adding a connection, start a **new** Claude Code session. A session that was already open doesn't see the new tools.

**Signing in to the game.** REDnode has no password to copy. Instead you approve Claude once, from inside the game. In Claude Code, type `/mcp`, pick `rednode` and choose **Authenticate**. Your browser shows a code, and the game shows a **Connect** window with a code. Press **F10** so you can click, check that the two codes match, so you know it is your Claude asking, and press **Allow**. It lasts across game restarts. **Revoke** under **Connected assistants** in REDnode's Settings drawer takes it back.

## Try it

Start Claude Code and ask, for example:

> What errors are in my mod log?

> Find the texture for the Mantis Blades and show it to me.

> Turn off every mod that conflicts with my weapon pack, then deploy.

Claude reads without asking. Before the deploy in the last one, it stops and asks you. For walkthroughs, see [Your first mod, no code](https://edgemodders.ai/wiki/edgechat/first-mod.html) and [Recolor a jacket](https://edgemodders.ai/wiki/edgechat/recolor.html).

## Good to know

- **What asks first.** The EDGE tools ask you before every action that changes the running game, your save or the game folder, such as a change to V, an archive swap, or EDGEdeck's deploy, undo and remove. Reading doesn't ask. [EDGEchat: Safety](https://edgemodders.ai/wiki/edgechat/safety.html) has the whole list.
- **The game must be running** for REDnode's tools, with REDnode in it. The other tools work with the game closed.
- **Versions.** EDGEchat's [What you need](https://edgemodders.ai/wiki/edgechat/install.html#what-you-need) lists the versions for the tools it connects. Each by-hand page lists its own.
- **No key comes with the tools.** Claude Code uses your own Claude account.
