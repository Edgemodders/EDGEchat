<!-- Copied from EDGEweb's docs/wiki/redagent/install.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redagent/install.html (reviewed 2026-11-13) -->

# Install and set up REDagent

There are three things to do: get an API key from Anthropic, put REDagent in the game, and go through its first start. Allow about twenty minutes.

| On this page | |
|---|---|
| [1. Get an Anthropic API key](https://edgemodders.ai/wiki/redagent/install.html#1-get-an-anthropic-api-key) | The key that lets REDagent use Claude |
| [2. Install REDnode and REDagent](https://edgemodders.ai/wiki/redagent/install.html#2-install-rednode-and-redagent) | With a mod manager or by hand |
| [3. First start](https://edgemodders.ai/wiki/redagent/install.html#3-first-start) | The download, the permission, the key |
| [Updating](https://edgemodders.ai/wiki/redagent/install.html#updating), [Removing](https://edgemodders.ai/wiki/redagent/install.html#removing) | And [where REDagent keeps things](https://edgemodders.ai/wiki/redagent/install.html#where-redagent-keeps-things) |

## 1. Get an Anthropic API key

An **API key** is a long password that lets a program use Claude on your account. REDagent comes with no key of its own: it uses yours, and Anthropic bills you for what it uses. A Claude.ai plan can't be used instead.

1. Go to [console.anthropic.com](https://console.anthropic.com/) and make an account, or sign in.
2. Buy some credit, under **Billing**. A few dollars is plenty to start: in REDagent's tests, a small mod cost well under a dollar. See [what it costs](https://edgemodders.ai/wiki/redagent/costs.html#what-it-costs).
3. Under **API keys**, create a key. Give it a name you'll recognise, such as "REDagent".
4. Copy the key at once and keep it somewhere safe until [the first start](https://edgemodders.ai/wiki/redagent/install.html#3-first-start). Anthropic shows it only this one time. It starts with `sk-ant-`.

Treat the key like a password: anyone who has it can spend your credit.

## 2. Install REDnode and REDagent

REDagent runs inside REDnode, so REDnode goes in first.

1. Install [REDnode](https://edgemodders.ai/wiki/rednode/install.html) 0.50.2 or later, and [check it worked](https://edgemodders.ai/wiki/rednode/install.html#check-it-worked).
2. Download REDagent from [Nexus Mods](https://www.nexusmods.com/cyberpunk2077/mods/35670) or [GitHub](https://github.com/Edgemodders/REDagent/releases). The file is `REDagent-<version>.zip`.
3. With the game closed, install it one of these ways:

| With | Do this |
|---|---|
| [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) or Vortex | Add the zip as you would any mod, and deploy |
| By hand | Extract the zip into your Cyberpunk 2077 folder |

Either way, REDagent ends up in `red4ext\plugins\REDnode\apps\redagent` in the game folder. That **apps folder** is where REDnode keeps every mod it runs, and where REDagent will put the mods it writes for you.

## 3. First start

Start the game, load a save and press **F10**. A mouse cursor appears, and REDagent's window is on the right of the screen.

REDnode calls this interactive mode: its windows show, and they take your mouse and keyboard. Press **Esc** to go back to playing. REDagent's window hides while you play, and comes back with F10. Careful with **F9**, the key beside F10: it is the game's Quick Load. More in [F10 and the three modes](https://edgemodders.ai/wiki/rednode/overlay.html#f10-and-the-three-modes).

(Screenshot on the wiki, "REDagent's first start": The REDagent window at its first start, on the right of the game: the Get the Agent SDK panel with its button.)

### Get the Agent SDK

Press **Get the Agent SDK** in REDagent's window and wait. This downloads the Claude Agent SDK, Anthropic's software that REDagent runs on: about 140 MB, from Anthropic's own packages. It happens once. REDagent checks the download before using it, and throws away one that is incomplete or doesn't match.

### Allow REDnode's tools

REDagent needs your permission to see the game:

1. Click the **REDNODE** tab to open the launcher, and switch on **Mod Manager**, the first entry.
2. Select **REDagent** in its table.
3. Under its permissions, switch **Allowed** on for "REDnode's tools for AI agents".

Without this, REDagent can chat and read your mods' files, but it can't see the mod log, the game or any window, so it can't check its own work.

While you're there, **Pin to launcher** gives REDagent its own entry in the launcher, so you can show and hide its window in one click. It's optional.

(Screenshot on the wiki, "Allowing REDnode's tools": REDnode's Mod Manager with REDagent selected: its details panel with the permission REDnode's tools for AI agents and its Allowed switch on, and the Pin to launcher button.)

### Give it your key

Press **Set up the key** in REDagent. REDnode's **Key request** window opens. Copy your key, click the box in that window, press **Ctrl+V**, then **Allow**.

REDnode now keeps the key, encrypted for your Windows account, and shares it with the EDGE tools you allow. If REDnode already has an Anthropic key, from its Settings or from another EDGE tool, REDagent only asks you to allow it.

(Screenshot on the wiki, "The Key request window": REDnode's Key request window, opened by REDagent: it names REDagent and the Anthropic key, with the box to paste the key into and the Allow and Deny buttons.)

### Check it worked

The chat appears. Type a short question and press **Enter**:

> What's in my mod log?

| You should see | |
|---|---|
| **WORKING...** as the last line of the chat | REDagent is thinking, or reading the log |
| An answer, usually within a minute | A summary of what REDnode's mods have printed |
| The answer's cost under it, in dim text | What that answer cost you |

If something else happens, see [Troubleshooting](https://edgemodders.ai/wiki/redagent/troubleshooting.html). Otherwise you're set up. Next: [your first mod](https://edgemodders.ai/wiki/redagent/first-mod.html).

## Updating

Install the new zip the same way, with the game closed. Your chats, backups and key stay: they are kept outside the game folder.

Check the release's notes for the REDnode version it needs. REDagent 0.4.1 needs REDnode 0.50.2 or later.

**Coming from REDagent 0.3?** That version kept your key itself. At your first question, the new version offers to move it into REDnode's shared keys, so other EDGE tools can use it too, and then deletes its own copy. If you say no, REDagent keeps using its own copy.

## Removing

1. With the game closed, remove REDagent in EDGEdeck or Vortex, or delete the folder `red4ext\plugins\REDnode\apps\redagent`.
2. To remove its data too, delete `%APPDATA%\@rednode\overlay\packages\redagent`. That folder holds your chats, the backups for Undo and the Agent SDK.
3. Your API key stays in REDnode. Remove it in REDnode's Settings, under [Keys](https://edgemodders.ai/wiki/rednode/settings.html#shared-keys).

The mods REDagent wrote for you are separate folders in the apps folder. They keep working without it.

## Where REDagent keeps things

| What | Where |
|---|---|
| REDagent itself | `red4ext\plugins\REDnode\apps\redagent` in the game folder |
| The mods it writes | Their own folders beside it, in `red4ext\plugins\REDnode\apps` |
| Chats | `%APPDATA%\@rednode\overlay\packages\redagent\chats` |
| Backups, for Undo | `%APPDATA%\@rednode\overlay\packages\redagent\backups` |
| The Agent SDK | `%APPDATA%\@rednode\overlay\packages\redagent\sdk` |
| Your API key | In REDnode's shared keys, encrypted for your Windows account |
