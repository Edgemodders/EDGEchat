<!-- Copied from EDGEweb's docs/wiki/rednode/debugging.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/rednode/debugging.html (reviewed 2026-11-21) -->

# Debugging

REDnode gives you the debugging tools web developers use, inside the game. This page is for people who make packages. Players need only the first tool, the [Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log).

## My mod doesn't work: what first?

1. **Open the Mod log and read the red line.** It names your file and the line that broke. Most problems end here.
2. **If a window looks wrong,** open the [window debugger](https://edgemodders.ai/wiki/rednode/debugging.html#the-window-debugger) and read its Console tab.
3. **If you need to watch the code run,** use the [Node debugger](https://edgemodders.ai/wiki/rednode/debugging.html#the-node-debugger) and set a breakpoint: a mark on a line where the mod stops so you can look around.

| You want to | Use | Status |
|---|---|---|
| See what a Node mod printed, and its errors | [The Mod log](https://edgemodders.ai/wiki/rednode/debugging.html#the-mod-log) | Passed in game |
| Match log lines to what you did in the game | [The Test timer](https://edgemodders.ai/wiki/rednode/debugging.html#the-test-timer) | Passed in game |
| Inspect a window's page: its HTML, styles, console | [The window debugger](https://edgemodders.ai/wiki/rednode/debugging.html#the-window-debugger) | Passed in game, in the overlay and on the desktop |
| Stop a Node mod at a breakpoint and step through it | [The Node debugger](https://edgemodders.ai/wiki/rednode/debugging.html#the-node-debugger) | Passed in game, in the overlay |
| Debug a Node mod from VS Code or REDcode | [Attach VS Code](https://edgemodders.ai/wiki/rednode/debugging.html#attach-vs-code-or-redcode) | Untested in the game |
| Let Claude read a window's console | The `window_console` tool. See [Agents and MCP](https://edgemodders.ai/wiki/rednode/agents.html) | Passed in game |
| See what each package costs, and end a stuck one | The [Task Manager](https://edgemodders.ai/wiki/rednode/admin-tools.html#task-manager), in the Admin Tools pack | Released |

## The Mod log

The **Mod log** is a built-in window with every line every Node mod prints, live. Switch it on in the launcher or the Mod Manager. It opens at the lower right.

| Control | Does |
|---|---|
| The bar of mod names | Show one mod's lines only |
| **Errors only** | Show only errors |
| **Pause** | Stop the list moving while you read |
| **Clear** | Empty the window |
| **Copy** | Put the lines shown on the clipboard, ready to paste into a bug report or a chat with Claude |
| **✕** | Close the Mod log |
| The grip at its lower right corner | Make it larger or smaller (since 0.68.2). Its size is kept across starts |

Errors are red, and a crash shows only the lines from the mod's own code, so you see the file and line that broke. The same lines are in the file `red4ext\logs\rednode-mods.log` in the game folder, each tagged with the mod's id.

(Screenshot on the wiki, "The Mod log": The Mod log window with lines from several mods, one crash in red with its file and line, and the Errors only and Copy controls.)

### Try it: read a mod's lines

1. Press **F10** and switch on **Mod log** and the **Hello mod** sample in the launcher or the Mod Manager.
2. Press **Play sound** in the Hello mod's window, twice.
3. Click **Hello mod** in the Mod log's bar of names.

| After | You should see |
|---|---|
| Step 1 | A line `Hello mod started (first version)` |
| Step 2 | `Sound button pressed 1 time(s)`, then `Sound button pressed 2 time(s)` |
| Step 3 | Only the Hello mod's lines |

A mod prints a line with `console.log(...)`. To see an error, put `throw new Error('test')` inside a button's function in a mod of your own, save, and press the button: the error shows in red, with the name of your file and the number of the line that threw it.

## The Test timer

The **Test timer** is a sample that comes with REDnode: a stopwatch for testing. Switch it on in the Mod Manager, and allow its permission to stay above other windows if you want it always in reach.

| Button | Writes to the Mod log |
|---|---|
| **Start** | `Started` |
| **Mark** | `Mark: step 3 done at ...`, with the step's number and the time on the stopwatch |
| The note box | A note you type, with the time |

Press **Mark** after each thing you do in the game. Afterwards, the marks in the log tell you which lines belong to which step. REDnode's own tests are run this way.

## Developer mode

**Developer mode** is a switch in the launcher's Settings drawer (the gear at the right of the Theme row). It is off by default, so players never see debug buttons. Switched on, it does two things:

- It shows the [Development folders](https://edgemodders.ai/wiki/rednode/settings.html#development-folders) list in the drawer.
- It adds a **debug** button to the title bar of every Node mod's window and every window built with the UI kit's window component, `rn-window` (see [Overlay apps](https://edgemodders.ai/wiki/rednode/overlay-apps.html)). The button sits under **⋯** if the bar is full.

The button opens the right debugger for that window: the Node debugger if the window belongs to a mod running with **Debug** on, otherwise the window debugger.

An app can hide the button on one of its windows by adding the attribute `no-debug` to that window's `rn-window` tag.

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

1. REDnode restarts the mod in a process of its own, even if it was in a shared one, with Node's inspector switched on. The inspector is the part of Node a debugger connects to. Its address appears in the Mod Manager with a **Copy** button.
2. **Node debugger: In the game** opens Chromium's DevTools for Node as an overlay window. Its Console runs inside your mod.
3. In **Sources**, press **Ctrl+P** and type your file's name to open it. Click a line number to set a breakpoint.
4. Do whatever runs that line, for example press your mod's button. The mod stops there. Step through, then press Resume (**F8**).

**On the desktop** opens the same debugger in a desktop window.

| Good to know | |
|---|---|
| Attach after start | The inspector doesn't wait for a debugger, so your mod's first lines have already run when you attach. Set breakpoints in code that runs later: an event handler, a button, a timer |
| Not responding is expected | While stopped at a breakpoint, the mod doesn't answer. After 10 seconds the Mod Manager shows **NOT RESPONDING**. Resume and it recovers |
| After a Restart | **Restart** gives the mod a new address. The in-game debugger follows it by itself; a desktop debugger or VS Code must attach again |
| Not saved | **Debug** is off again after the game restarts, and the mod goes back to its normal process when you switch it off |

## Attach VS Code or REDcode

**Untested.** This is how REDnode's docs describe it, but it wasn't part of the in-game test. Report how it goes on [Discord](https://discord.gg/63qP3Erw43).

You can also debug a Node mod from VS Code or [REDcode](https://edgemodders.ai/wiki/redcode/), with breakpoints in your own editor:

1. Switch on **Debug (Node inspector)** for the mod and press **Copy** beside the inspector's address.
2. In VS Code, open the folder with your mod, open **Run and Debug** in the side bar and choose **create a launch.json file**. Put this in it, with the address you copied:

    ```json
    {
      "version": "0.2.0",
      "configurations": [
        {
          "type": "node",
          "request": "attach",
          "name": "Attach to my REDnode mod",
          "websocketAddress": "<the address you copied>"
        }
      ]
    }
    ```

3. Press **F5** to start debugging.

After a **Restart** of the mod, copy the new address into the file and attach again.

## Logs to read

Two logs matter most when you make a package. Both are in `red4ext\logs` in the game folder:

| Log | Has |
|---|---|
| `rednode-mods.log` | Everything Node mods print, and their crashes |
| `rednode-overlay.log` | The overlay host's log: packages found, started and skipped, permissions, the MCP server |

The full list, with the plugin's, RED4ext's and redscript's logs, is under [The logs](https://edgemodders.ai/wiki/rednode/troubleshooting.html#the-logs) in Troubleshooting. Read them after the game has closed: some are only complete then.
