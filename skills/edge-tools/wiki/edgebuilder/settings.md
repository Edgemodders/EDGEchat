<!-- Copied from EDGEweb's docs/wiki/edgebuilder/settings.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/settings.html (reviewed 2026-10-24) -->

# Settings and keys

Everything in EDGEbuilder 0.3.3, in one place. The pages before this one explain each in context.

## The panel

EDGEbuilder's panel sits at the right of the screen. Its title bar holds the **Edit** switch. Under it are three status pills (see [Install and set up](https://edgemodders.ai/wiki/edgebuilder/install.html#open-edgebuilder)), a message line, and four tabs.

| Tab | What's in it |
|---|---|
| **Assets** | Search, the **All**, **Meshes** and **Entities** filters, the results, and the **Picked** panel with **Drop where I look** and **Drop at click**. Typing anywhere on this tab searches. See [Browsing and dropping](https://edgemodders.ai/wiki/edgebuilder/browsing.html) |
| **Scene** | Every object in the scene, and the **Selected** panel. See [Browsing and dropping](https://edgemodders.ai/wiki/edgebuilder/browsing.html#the-scene-tab) and [Positioning objects](https://edgemodders.ai/wiki/edgebuilder/positioning.html#typing-numbers) |
| **Settings** | The settings below |
| **About** | A short summary of the keys and what's next |

(Screenshot on the wiki, "The Settings tab": EDGEbuilder's Settings tab: the REDbridge.exe and Game folder fields, Save and restart REDbridge, the While Edit is on panel with its two switches, and the Rebuild asset index and Restart REDbridge buttons.)

## Settings

| Setting | Default | What it does |
|---|---|---|
| **REDbridge.exe** | Empty: found by itself | A path to a REDbridge of your choice. Leave it empty in nearly every case. When empty, the field shows `Automatic:` and the copy in use |
| **Game folder** | Empty: found from where REDnode runs | The game folder, for when EDGEbuilder can't find it. When empty, the field shows `Automatic:` and the folder in use |
| **Use EDGEbuilder's own camera (V stays put)** | On | Off: Edit works from V's own view instead, as in 0.2 |
| **Hide the game's HUD** | On | Off: the HUD stays on screen while Edit is on |

**Save and restart REDbridge** saves the two fields and restarts REDbridge if its path changed. The two switches apply as soon as you flip them, even while Edit is on (from 0.3.3; before that, switch Edit off and on to see the change).

Below them, the tab shows which REDbridge is in use, where the asset index is, and the path of the settings file.

| Button | What it does |
|---|---|
| **Rebuild asset index** | Reads the game's archives again and rebuilds the list of assets. Use it if assets seem to be missing |
| **Restart REDbridge** | Stops and starts REDbridge |

## Keys and mouse with Edit on

Keys work while Edit is on and no text field in the panel has focus.

### Selecting and positioning

| Key or mouse | Does |
|---|---|
| Click an object | Select it. Click empty space to select nothing |
| Drag an arrow | Move along that axis (red X, green Y, blue Z) |
| Drag the ring | Turn around the vertical |
| **G**, **R**, **S** | Start moving, turning or scaling (meshes only) the selected object |
| **X**, **Y**, **Z** | During G, R or S: lock to that axis. Again to unlock |
| Digits, `.`, `-`, **Backspace** | During G, R or S: type an exact amount |
| **Ctrl** | While dragging: snap to 0.25 m, 15° or 0.25 scale steps |
| **Enter** or a click | Keep |
| **Esc** or a right-click | Cancel: the object goes back |
| **Ctrl+E** | Drop the selected object to the floor |
| **Delete** | Remove the selected object |
| Click, after **Drop at click** | Drop the picked asset there. **Esc** cancels |

### The camera

| Key or mouse | Does |
|---|---|
| Right mouse button held | Look around |
| Right mouse held, **W**, **A**, **S**, **D** | Fly forward, left, back, right |
| Right mouse held, **Q**, **E** | Fly down, up |
| **Shift**, **Ctrl** while flying | Faster, slower |
| Mouse wheel while flying | Change the flying speed |
| Middle mouse button held | Orbit the selection, or a point 10 m ahead |
| **Shift** with the middle mouse button | Pan |
| Mouse wheel | Move closer or further |
| **F** | Frame the selection |
| **Esc** while looking | End the cursor lock without leaving Edit (REDnode 0.22.0 or later) |

The camera keys need **Use EDGEbuilder's own camera** on.

## REDnode keys

| Key | Does |
|---|---|
| **F10** | Opens the REDnode launcher and cycles its modes. EDGEbuilder's Edit needs the interactive mode, where REDnode's windows take the mouse |

See [REDnode](https://edgemodders.ai/wiki/rednode/).
