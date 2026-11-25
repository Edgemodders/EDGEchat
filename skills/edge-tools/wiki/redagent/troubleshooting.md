<!-- Copied from EDGEweb's docs/wiki/redagent/troubleshooting.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redagent/troubleshooting.html (reviewed 2026-11-13) -->

# Troubleshooting REDagent

Find what you see in the left column. If it isn't here, the [last section](https://edgemodders.ai/wiki/redagent/troubleshooting.html#anything-else) says where to look and where to ask.

## The window

| You see | Do this |
|---|---|
| No REDagent window | Press **F10**, open the launcher (the **REDNODE** tab) and switch on **Mod Manager**. Check that REDagent is in the table and switched on, and press **Show** if its window was closed |
| REDagent isn't in the Mod Manager | It isn't installed where REDnode looks. Check that the folder `red4ext\plugins\REDnode\apps\redagent` exists in the game folder. See [Install](https://edgemodders.ai/wiki/redagent/install.html#2-install-rednode-and-redagent) |
| No **REDNODE** tab at all | REDnode itself isn't running. See [REDnode's troubleshooting](https://edgemodders.ai/wiki/rednode/troubleshooting.html) |
| The window is there only sometimes | It shows in interactive mode: press **F10**. To keep it up while you play, switch on **Pin to HUD** for REDagent in the Mod Manager |
| I can't click or type in the window | Press **F10** until you see a mouse cursor. See [F10 and the three modes](https://edgemodders.ai/wiki/rednode/overlay.html#f10-and-the-three-modes) |
| The game loaded an old save | You pressed **F9**, the game's Quick Load, beside F10 |

## Setting up

| You see | Do this |
|---|---|
| **Get the Agent SDK** fails | Check your internet connection and press it again. A partial or mismatched download is thrown away, never used |
| "REDnode's tools are off" | In the Mod Manager, select REDagent and switch **Allowed** on for "REDnode's tools for AI agents". See [Allow REDnode's tools](https://edgemodders.ai/wiki/redagent/install.html#allow-rednodes-tools) |
| REDnode refuses the key | Copy the whole key. An Anthropic key starts with `sk-ant-`, and REDnode refuses one that doesn't |
| REDagent asks for your key again | The saved key couldn't be read, for example after a change to your Windows account. REDnode's Keys shows it as **Unreadable here**. Press **Set up the key** and paste it again |

## Asking

| You see | Do this |
|---|---|
| An error about your key or credit | Check the key, and that you have credit left, at [console.anthropic.com](https://console.anthropic.com/). To use another key: REDnode's Settings, **Keys**, **Replace** on the Anthropic line |
| **WAITING FOR YOU...** and nothing happens | A card in the chat needs **Allow** or **Deny**. Scroll up to it |
| **WORKING...** for several minutes | Press **Stop**, then ask again, in a **New** chat if the chat is long |
| REDagent says it can't see the game or the log | REDnode's tools aren't allowed. See "REDnode's tools are off" above |
| Answers cost more and more | The chat has grown long. Start a **New** chat. See [Keeping costs down](https://edgemodders.ai/wiki/redagent/costs.html#keeping-costs-down) |

## A mod it made

| You see | Do this |
|---|---|
| The mod doesn't show or doesn't work | Tell REDagent what you see, in plain words. It reads the mod's log and fixes it. If it shows only after you press **F10**, it was built as a window: ask REDagent to make it a HUD widget, or switch on **Pin to HUD** for it in the Mod Manager |
| I can't find the mod | It's in REDnode's **Mod Manager**, with a **NEW** badge, and its folder is in `red4ext\plugins\REDnode\apps` in the game folder |
| I want it gone | Press **Undo** on each file it created, or switch the mod off in the Mod Manager, or delete its folder. See [Keep it, switch it off, or remove it](https://edgemodders.ai/wiki/redagent/first-mod.html#6-keep-it-switch-it-off-or-remove-it) |
| Undo is missing for an old change | Undo lives with its chat. Open the chat under **Chats**. REDagent keeps the last 30 chats; older ones, and their Undo buttons, are deleted |

## Anything else

Open REDnode's **Mod log** app from the launcher. REDagent's lines start with `[redagent]`, and usually say what failed. The same lines are in `red4ext\logs\rednode-mods.log` in the game folder.

Still stuck? Ask on [Discord](https://discord.gg/63qP3Erw43) or [open an issue](https://github.com/Edgemodders/REDagent/issues). Say which REDagent and REDnode versions you have, and paste the `[redagent]` lines. Never paste your API key.
