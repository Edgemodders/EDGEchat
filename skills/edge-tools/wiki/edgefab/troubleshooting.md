<!-- Copied from EDGEweb's docs/wiki/edgefab/troubleshooting.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgefab/troubleshooting.html (reviewed 2026-11-22) -->

# Troubleshooting

Look in the log first: **EDGEfab: Show Log** in the command palette (`Ctrl+Shift+P`). It lists every step with file paths, and says why something failed.

| On this page | |
|---|---|
| [Keys](https://edgemodders.ai/wiki/edgefab/troubleshooting.html#keys) | |
| [Pictures and models](https://edgemodders.ai/wiki/edgefab/troubleshooting.html#pictures-and-models) | |
| [The 3D view](https://edgemodders.ai/wiki/edgefab/troubleshooting.html#the-3d-view) | |
| [The Desk and Rename](https://edgemodders.ai/wiki/edgefab/troubleshooting.html#the-desk-and-rename) | |
| [Add to Project](https://edgemodders.ai/wiki/edgefab/troubleshooting.html#add-to-project) | |
| [In the game](https://edgemodders.ai/wiki/edgefab/troubleshooting.html#in-the-game) | |
| [The Library](https://edgemodders.ai/wiki/edgefab/troubleshooting.html#the-library) | |
| [Assistants](https://edgemodders.ai/wiki/edgefab/troubleshooting.html#assistants) | |
| [Still stuck](https://edgemodders.ai/wiki/edgefab/troubleshooting.html#still-stuck) | |

## Keys

| You see | Do |
|---|---|
| A key is refused as you type it | A Tripo key starts with `tsk_`, an OpenAI key with `sk-`. Paste the whole key, with no spaces |
| "OpenAI refused the key" or Tripo refuses it | The key is wrong, revoked or switched off. Make a new one and set it again |
| EDGEfab uses a different key than the one you set | `TRIPO_API_KEY` or `OPENAI_API_KEY` is set in Windows, and that one wins. Remove the variable, or change it |
| EDGEfab says you chose Don't Allow | Run **Forget Tool Permissions for Keys** in REDcode's Keys view, try again and choose **Allow** |
| "REDcode's question about your Tripo key was closed" | Try again and choose **Allow**. EDGEfab opens no key box over a key that is already set |
| "EDGEfab can't read a Tripo key" | No key is set in REDcode's Keys, or EDGEfab isn't allowed to read it. **Open REDcode's Keys** on the message shows which |

## Pictures and models

| You see | Do |
|---|---|
| A picture has the wrong thing on one side | Change it: "put the keypad on the right side". Or **Draw Picture** with the whole object described again |
| A change altered more than you asked | Go back to the earlier picture in the history and ask again, with one change at a time |
| OpenAI or Tripo refuses the words | The service's content rules stopped it. EDGEfab says so in plain words. Reword it |
| Tripo says there are not enough credits | Top up at Tripo. EDGEfab shows your balance before each model |
| The model looks worse than the picture | Check all four views of the picture first: the model follows them. Then try **High detail**, or another picture |
| The model is far too big or small | **Set Size...** on the Desk |
| **Size unknown** on the Desk | Tripo gives no size for models in parts. **Set Size...** |
| Panels ripple | That is Tripo's detailed shape. Use **Detailed texture** instead of **High detail** |
| A part is missing or see-through from behind | Say so in an issue, with the model. EDGEfab adds back faces to open parts, and drops small loose pieces |
| The glow caught paint that isn't a light | **Make the Painted Lights Glow...** again with **A few lights** |
| The glow barely shows in the game | **Glow Strength...**, a step up. Then Add to Project again |
| Making a model takes more than ten minutes | Tripo may be busy. The progress note's **Cancel** stops the wait |

## The 3D view

| You see | Do |
|---|---|
| "EDGEfab shows models in REDcode's 3D view" | Install [REDcode](https://edgemodders.ai/wiki/redcode/install.html), or press **Open Preview** for Tripo's picture |
| "this prop has no model to show" | The prop is still a picture, or its model file is gone. Make it 3D |
| The tab is named `view.glb` | That is the file the view opens. A tab that says the prop's name is asked of REDcode |
| The model shows grey | The view opened the game's model, which carries no textures. Open it from the Desk, not from the file |

## The Desk and Rename

| You see | Do |
|---|---|
| "Could not move ... something has it open" | The prop's 3D view or one of its files is open in **another** VS Code window. Close it there and rename again. EDGEfab closes the tabs in its own window, but can't reach another window's |
| The Desk doesn't show something an assistant made | Press **Refresh** at the top of the Desk |
| A deleted prop is still in a project | Delete removes it from the Desk only. Delete its folder from the project too |

## Add to Project

| You see | Do |
|---|---|
| It asks for a project | No project is open in REDcode. Open one, or pick the project's folder |
| "is not a WolvenKit project" | Pick the folder that holds the `.cpmodproj` file |
| REDbridge can't start, or the game isn't found | Set REDcode up first: [REDcode: install](https://edgemodders.ai/wiki/redcode/install.html). EDGEfab uses REDcode's game folder and REDbridge |
| It takes minutes | Normal the first time for a prop in parts: about four textures are made for each part. Adding it again keeps the unchanged ones and is much faster |
| A part lost the material you gave it | You pressed **Start Over...**, or the prop was renamed: a new name is a new prop in the project. Give the part its material again |
| A material is listed as missing in the log | That part keeps a plain look. Say so in an issue, with the log |
| After a rename, the project has the prop twice | The new name is a new folder. Delete the old one from the project |

## In the game

| You see | Do |
|---|---|
| The prop isn't in EDGEbuilder's **Mods** tab | Wait a few seconds, or close and open **Assets**. Check that the mod was packed and installed, or swapped in |
| "Restart the game to see the change" after Pack and Play | REDnode's MCP server is off, or the game isn't running with REDnode. Turn it on in REDnode's settings and press Pack and Play again |
| V walks through the prop | The **Collision** setting is `none`. Set it to `physical` and Add to Project again |
| The prop faces sideways | Only Tripo's models are turned. For a model of your own, turn it in your 3D program and import it again, or turn it with EDGEbuilder |
| Raised details look like dents | Not expected: EDGEfab writes bumps the way the game reads them. Say so in an issue |
| The lights are dark at night | Tripo's lights are painted. Use [Make the Painted Lights Glow](https://edgemodders.ai/wiki/edgefab/models.html#glow) |
| It sinks into the ground or floats | Move it with EDGEbuilder. EDGEfab stands the model on its lowest point |

## The Library

| You see | Do |
|---|---|
| "no EDGE Library is set up yet" | **Set Up the Library...** in the Library view |
| "The Library's folder is missing" | The folder was moved or its drive is off. Bring it back, or **Set the Library Folder...** |
| Add to Library stops at the size | **Set Size...** first |
| A prop's name is taken | Two Library props can't share a game name. Rename the one on the Desk |
| A project doesn't get the newer version | **Refresh Project from Library...**, tick it, then pack again |

## Assistants

| You see | Do |
|---|---|
| Claude doesn't see the `fab_` tools | Start a **new** Claude Code session after connecting. Run `claude mcp list`: `edgefab` should show as connected |
| "claude command isn't on the PATH" | EDGEfab couldn't run Claude Code. Press **Copy the Command** and run it in the terminal where `claude` works |
| "No OpenAI API key" or "No Tripo API key" | The server reads REDcode's Keys. Set the key there, then ask again: see [Keys for the server](https://edgemodders.ai/wiki/edgefab/assistants.html#keys-for-the-server) |
| The key is set, and still "No ... API key" | Ask "Is EDGEfab's Tripo key set?": the answer says where the server looked. It needs REDcode installed, with REDbridge 0.18.0 or later (**REDcode: Update REDbridge**) |
| "OpenAI refused the key" | The variable holds a wrong or revoked key. If the buttons in EDGEfab work, that key is good: use the same one |
| Every EDGEfab tool shows twice | EDGEfab is connected twice. Run `claude mcp list` and remove one with `claude mcp remove edgefab` |
| Claude made a prop but the Desk is empty | Press **Refresh** on the Desk. If it is still empty, the server may use another data folder: check the folder it names in its answer |

## Still stuck

Ask on the [EDGEmodders Discord](https://discord.gg/63qP3Erw43), or open an [issue](https://github.com/Edgemodders/EDGEfab/issues). Say what you did and what you saw, and paste the lines from **Show Log**. Check them for your Windows user name in paths before you post.
