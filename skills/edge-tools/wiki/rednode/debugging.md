<!-- Copied from EDGEweb's docs/wiki/rednode/debugging.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/debugging.html (reviewed 2026-10-24) -->

# Debugging

REDnode gives you the same debugging tools web developers use, inside the game. Pick the one that fits:

| You want to | Use | Status |
|---|---|---|
| See what a Node mod printed, and its errors | [The Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log) | Passed in game |
| Inspect a window's page: its HTML, styles, console | [The window debugger](https://edgemodders.ai/wiki/rednode/debugging.html#the-window-debugger) | Passed in game, in the overlay and on the desktop |
| Stop a Node mod at a breakpoint and step through it | [The Node debugger](https://edgemodders.ai/wiki/rednode/debugging.html#the-node-debugger) | Passed in game, in the overlay |
| Debug a Node mod from VS Code or REDcode | [Attach VS Code](https://edgemodders.ai/wiki/rednode/debugging.html#attach-vs-code-or-redcode) | Documented, not yet tested in game |
| Let Claude read a window's console | The MCP server's `window_console` tool | Passed in game. See [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) |
| See what each package costs, and end a stuck one | The Task Manager, in the [Admin Tools pack](https://edgemodders.ai/wiki/rednode/index.html#optional-packs) | Released |
| Match log lines to what you did in the game | The **Test timer** sample: **Mark** after each step writes the step and time to the Mod log | Passed in game |

## The Mod log

The **Mod log** is a built-in window with every line every Node mod prints, live. Switch it on in the launcher or the Mod Manager. It opens at the lower right.

| Control | Does |
|---|---|
| The bar of mod names | Show one mod's lines only |
| **Errors only** | Show only errors |
| **Pause** | Stop the list moving while you read |
| **Clear** | Empty the window |
| **Copy** | Put the lines shown on the clipboard, ready to paste into a bug report or a chat with Claude |

Errors are red, and a crash shows only the stack lines from the mod's own code, so you see the file and line that broke. The same lines are in `red4ext\logs\rednode-mods.log`, each tagged with the mod's id.

(Screenshot on the wiki, "The Mod log": The Mod log window with lines from several mods, one crash in red with its file and line, and the Errors only and Copy controls.)

## Developer mode

**Developer mode** is a switch in the launcher's Settings drawer (the gear at the right of the Theme row), off by default so players never see debug buttons. It also shows the [Development folders](https://edgemodders.ai/wiki/rednode/settings.html#development-folders) list. With it on, every window built with the UI kit's `rn-window`, and every Node mod's window, gets a **debug** button on its title bar (under **⋯** if the bar is full). It opens the right debugger for that window: the Node debugger if the window belongs to a mod running with **Debug** on, otherwise the window debugger.

An app can hide the button on a window with `no-debug`.

## The window debugger

Every overlay window is a web page, so Chromium's own DevTools work on it: Elements, Styles, Console, Sources, breakpoints.

Open it from the window's debug button in Developer mode, or from the [Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html): select the package, then **Window debugger** with:

| Choice | Opens DevTools |
|---|---|
| **In the game** | As an overlay window, dragged and closed like any other, with a REDnode title bar in your theme |
| **On the desktop** | In a normal desktop window, without taking the game's focus. Alt+Tab to it. Useful with a second monitor |

(Screenshot on the wiki, "The window debugger in the game": Chromium DevTools drawn as an overlay window in the game, inspecting the Coords HUD, with the Console tab open.)

## The Node debugger

For a Node mod, select it in the Mod Manager and switch on **Debug (Node inspector)**:

1. The mod restarts alone, in its own process, with Node's inspector on. The Mod Manager shows the inspector's address, with **Copy**.
2. **Node debugger: In the game** opens Chromium's DevTools for Node as an overlay window. Its Console runs inside your mod.
3. In **Sources**, press **Ctrl+P** and type your file's name to open it. Click a line number to set a breakpoint.
4. Do whatever runs that line, for example press your mod's button. The mod stops there. Step through, then press Resume (**F8**).

**On the desktop** opens the same debugger in a desktop window.

| Good to know | |
|---|---|
| Attach after start | The inspector doesn't wait for a debugger, so your mod's first lines have already run when you attach. Set breakpoints in code that runs later: an event handler, a button, a timer |
| Not responding is expected | While stopped at a breakpoint, the mod doesn't answer. After 10 seconds the Mod Manager shows **NOT RESPONDING**. Resume and it recovers |
| Restart keeps you attached | **Restart** gives the mod a new address. The in-game debugger follows it by itself; a desktop debugger or VS Code must attach again |
| Not saved | **Debug** is off again after the game restarts, and the mod goes back to its normal process when you switch it off |

The in-game Node debugger, breakpoints included, passed its in-game test in REDnode 0.16.0.

## Attach VS Code or REDcode

You can also debug a Node mod from VS Code or [REDcode](https://edgemodders.ai/wiki/redcode/), with breakpoints in your own editor:

1. Switch on **Debug (Node inspector)** for the mod and press **Copy** beside the inspector's address.
2. In VS Code, add a launch configuration of type `node` with `"request": "attach"` and `"websocketAddress"` set to the address you copied.
3. Start debugging.

This is how REDnode's docs describe it, but it wasn't part of the in-game test, so treat it as untested. Report how it goes on [Discord](https://discord.gg/63qP3Erw43).

## Logs to read

| Log | In `red4ext\logs` | Has |
|---|---|---|
| Mods | `rednode-mods.log` | Everything Node mods print, and their crashes |
| Overlay host | `rednode-overlay.log` | Packages found and started, permissions, spaces, the MCP server, performance lines |
| Plugin | `rednode-*.log` | The in-game side: loading, game calls that failed, F10 and cursor changes |
| RED4ext | `red4ext-*.log` | Whether REDnode loaded at all |
| Last session's host | `rednode-overlay.prev.log` | The host log of the session before, kept so a crash's log survives the next start |
| Faults | `rednode-faults.log` | What went wrong around an archive swap, for bug reports |
| redscript | `r6\logs\redscript_rCURRENT.log` (not in `red4ext`) | Script errors, if REDnode's scripts failed to compile |

Read them after the game has closed: some are only complete then.
