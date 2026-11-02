---
title: Guide
---

# <span class="y">Guide</span>

EDGEchat turns Claude Code into a Cyberpunk 2077 modding assistant. This guide takes you from nothing installed to your own mods running in the game, one small step at a time. You don't need to know how to code.

Every lesson was run on a real PC with the game before it was written down ([tests](testing.html)). Claude words its answers a little differently each time, so the replies you see won't match this guide word for word; what it does, and what you see in the game, should.

## The lessons

Do them in order the first time. Each one ends with something you can see in the game.

| # | Lesson | You end with | Time |
|---|---|---|---|
| 1 | [Install and connect](guide-install.html) | EDGEchat installed, the game connected, `/edge:setup` all green | 20 to 40 minutes, most of it installing the EDGE tools |
| 2 | [Your first mod, no code](guide-first-mod.html) | A line on your screen in the game that you described in your own words | 15 minutes |
| 3 | [Recolor a jacket](guide-recolor.html) | A jacket in a new color, as a mod EDGEdeck manages | 20 minutes |
| 4 | [Change it while you play](guide-live.html) | The color changed again without restarting the game, and EDGEdeck back in step | 10 minutes |
| 5 | [When a mod doesn't work](guide-check.html) | A list of what's wrong with a mod, and a fix for each | 5 minutes |
| 6 | [Keep a project easy to work on](guide-projects.html) | A `CLAUDE.md` in your project, so later sessions know it | 5 minutes |

Then keep these at hand:

| Page | For |
|---|---|
| [Safety: what Claude asks before doing](guide-safety.html) | Which actions ask you first, and why you can say no |
| [Troubleshooting](guide-troubleshooting.html) | Something is missing, red, or not changing |
| [Settings and updates](guide-settings.html) | The plugin's five settings, and getting new versions |

## What EDGEchat is

EDGEchat is a plugin for [Claude Code](https://code.claude.com/docs/en/overview), Anthropic's coding assistant. It adds three things to it:

| Part | What it does | You use it by |
|---|---|---|
| **Four connections to the EDGE tools** (MCP servers) | `rednode` reaches the running game through REDnode. `redcode` reads the game's own files through REDbridge. `edgedeck` manages your mods and puts them in the game. `edgemat` finds and recolors garments' materials | Asking in plain words. Claude picks the tools |
| **Modding knowledge** (skills) | How REDnode packages, WolvenKit projects, the game's archives and the EDGE tools work. Claude loads it by itself when a task needs it | Nothing: it's automatic |
| **Four commands** | `/edge:setup`, `/edge:new-mod`, `/edge:check-mod`, `/edge:init-project` | Typing them in Claude Code |

EDGEchat isn't an agent of its own and doesn't run in the game. [REDagent](https://github.com/Edgemodders/REDagent) is the assistant inside the game; EDGEchat is for building mods at your desk.

## Words used in this guide

| Word | Means |
|---|---|
| **Claude Code** | The assistant you talk to: a panel in VS Code or EDGEkit, or `claude` in a terminal |
| **Prompt box** | Where you type to Claude Code |
| **Session** | One conversation with Claude Code. A new session starts fresh |
| **Server**, **MCP server** | A connection that gives Claude tools for one EDGE tool, such as `rednode` |
| **Permission prompt** | Claude Code asking "may I?" before an action. See [Safety](guide-safety.html) |
| **Mod library** | EDGEdeck's folder of your mods, kept outside the game |
| **Deploy** | EDGEdeck putting the mods that are on into the game folder |
| **WolvenKit project** | A folder that holds a mod's files before they are packed, with a `.cpmodproj` file |
| **Pack** | Turning a project into the `.archive` file the game loads |
| **REDnode package** | A mod made of a small web page or Node.js code that REDnode runs in the game: an overlay window, a HUD widget or a Node mod |

Not affiliated with Anthropic or CD PROJEKT RED. Claude and Claude Code are trademarks of Anthropic; Cyberpunk 2077 is a trademark of CD PROJEKT.

[Next: Install and connect &rarr;](guide-install.html)
