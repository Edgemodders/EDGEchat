<!-- Copied from EDGEweb's docs/wiki/edgemat/troubleshooting.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgemat/troubleshooting.html (reviewed 2026-11-22) -->

# Troubleshooting EDGEmat

Find what you see in the left column. The sections follow the order you work in.

| On this page | |
|---|---|
| [Start with the log](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#start-with-the-log) | Where EDGEmat says what it did |
| [Setting up](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#setting-up) | The game, REDbridge, Game Materials, missing views |
| [Finding and editing](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#finding-and-editing) | Find, the color map, colors, the Desk |
| [Saving into a project](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#saving-into-a-project) | Save to Project and Add to Project |
| [In the game](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#in-the-game) | The change doesn't show, or shows on one body |
| [New Material](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#new-material) | The image service refuses or doesn't answer |
| [View in 3D](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#view-in-3d) | Nothing opens, or flat colors |
| [Assistants](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#assistants) | Claude doesn't see the tools |
| [Still stuck](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#still-stuck) | Where to ask |

## Start with the log

Open it with **Show Log** in Game Materials' **`...`** menu, or **View**, **Output**, then **EDGEmat** in the dropdown. It says which game and which REDbridge EDGEmat uses ("Using REDcode's REDbridge for ...", or "Starting REDbridge from ..."), how the Game Materials build went, what each save wrote, and every file it couldn't read. When you ask for help, include those lines.

## Setting up

| You see | Do this |
|---|---|
| "EDGEmat needs your Cyberpunk 2077 folder" | EDGEmat couldn't find the game through REDcode, EDGEdeck or the usual Steam, GOG and Epic folders. Press **Set Game Folder** and pick the folder that contains `bin`, `archive` and `r6`. It only accepts a folder with `bin\x64\Cyberpunk2077.exe` in it |
| "EDGEmat reads the game through REDbridge, which was not found" | EDGEmat needs REDbridge 0.8.0 or later. Install [REDcode](https://edgemodders.ai/wiki/redcode/install.html) and run its **Install REDbridge**, then press **Rebuild Game Materials**. Or set `edgemat.bridgePath` to `REDbridge.exe` ([Settings](https://edgemodders.ai/wiki/edgemat/settings.html#settings)) |
| The log says REDbridge "could not start" | The .NET 10 runtime may be missing, or installed for your user only. REDcode's **Install REDbridge** offers to fetch it. For a per-user install, see `edgemat.dotnetRoot` in [Settings](https://edgemodders.ai/wiki/edgemat/settings.html#settings) |
| "Game Materials could not be built" | Press **Show Log** for the reason, then **Try Again**. Common causes: REDbridge stopped (it restarts when needed, so try again), or REDcode's REDbridge is older than 0.8.0 (update it in REDcode). A few files listed as "missing in the game" are normal and not an error |
| Game Materials shows old data after a game update | EDGEmat checks the game's files on every start and rebuilds when they changed. If it didn't, press **Rebuild Game Materials**, the refresh icon in the view's title bar |
| There is no Desk, and the middle view is called **Library** | That is an older EDGEmat. Update it in the Extensions view. In the EDGEkit app, the built-in copy updates itself from Open VSX |
| Find is missing from the sidebar | It is there, below the Desk and Game Materials, often folded at the bottom: click its **FIND** header. Fold the other two (click their headers) if Find is squeezed. The funnel on Game Materials is a filter for that list, not Find |

## Finding and editing

| You see | Do this |
|---|---|
| Find finds nothing | Names come from your game in English: try part of the name (`ammo`), or part of the record id (`CasualShoes`). Items added by other mods aren't followed yet: find their meshes by path. If REDbridge isn't running, Find says so |
| The first search or the first "worn by" list is slow | Normal, once per game version. The first search reads the game's clothing list (a few seconds). The first list of items that wear a look reads every clothing item (about ten seconds) |
| The setup editor's color map looks scrambled | The setup is drawn with the wrong mask set, the images that say where each layer goes. A setup doesn't name its masks, so when you open one directly EDGEmat guesses by name. Press **Change** on the "Mask set" line under the map and pick another. Or open the setup through [Find](https://edgemodders.ai/wiki/edgemat/find.html), which uses the mask set the garment's mesh names |
| A layer says "shows white" | The layer names a color its surface doesn't offer, and the game draws such a color white. It is in the file itself, often from hand editing. Click the layer, pick one of its surface's colors, and [save](https://edgemodders.ai/wiki/edgemat/setup-editor.html#save-to-project) |
| The color I want isn't in the grid | Each surface has a fixed list of colors. Pick the closest, or change the layer's surface to one with a better color. See [Colors come from a list](https://edgemodders.ai/wiki/edgemat/index.html#colors-come-from-a-list) |
| `Ctrl+Z` does nothing in the setup editor | Click an empty part of the page first. While the cursor is in a box, the keys undo typing in that box |
| A look on the Desk says **no item** | Only NPCs wear that look, so V can't. Edit another look of the mesh, one marked **worn by ...** |
| **Use a Game Surface...** says "this works on a material of a mesh in a project" | The part commands change a mesh in your project. Open it from the project: in REDcode's **Project** view, right-click the `.mesh` › **Open in EDGEmat**, then right-click one of its materials on the Desk. See [A prop's parts](https://edgemodders.ai/wiki/edgemat/desk.html#a-props-parts) |
| A game surface on a prop's part has its grain far too big or too small | Click the part's row to open its setup, change **Tiling** and press `Ctrl+S`. A higher number makes the grain smaller |
| The Desk is empty after I deleted `%LOCALAPPDATA%\EDGEmat` | The Desk lived in that folder, in `desk`, and its unsaved edits are gone. What you added to projects is safe. Game Materials builds itself again |

## Saving into a project

| You see | Do this |
|---|---|
| Save to Project says no mesh uses the setup | The message says why. EDGEmat looks for meshes beside the setup, and in your project, that use it. If the setup came from a loose file, or no mesh near it uses it, EDGEmat can save only the setup, and nothing in the game will use it. Easiest: open the garment through [Find](https://edgemodders.ai/wiki/edgemat/find.html) and save from there |
| The list of meshes names another garment, not mine | The garment borrows a setup stored with another garment. Cancel, put your garment's mesh on the [Desk](https://edgemodders.ai/wiki/edgemat/desk.html), edit it there and use **Add to Project**. See [Two ways into a project](https://edgemodders.ai/wiki/edgemat/find.html#two-ways-into-a-project) |
| The list has only one mesh | The two body types use different setups for this garment, such as the punk jeans. Recolor the other body's material too: open it from the other body's row in Find |
| Add to Project says "nothing new to write" and the line stayed on the Desk | The project has its own copy of that mesh with other materials, and you chose **Keep the Project's**. Add the line again and choose **Replace with the Desk's** if you want the Desk's version. What the project's copy had is then lost |
| There is no **Pack and Play** button in the message | It shows only when REDcode has that project open. Open the project's folder in VS Code, then use REDcode's **Pack and Install** |
| "Saving into a project needs REDbridge" | See [Setting up](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#setting-up) |

## In the game

| You see | Do this |
|---|---|
| My change doesn't show at all | Work through the checks in [If you don't see your change](https://edgemodders.ai/wiki/edgemat/in-the-game.html#3-if-you-dont-see-your-change): the mod is in `archive\pc\mod`, the game was restarted, V wears the item you edited, the look and the way you saved |
| It shows on one body type only | The other body wears another mesh, and your project doesn't have it. A Desk line changes one mesh. Add the other body's mesh too: [Two ways into a project](https://edgemodders.ai/wiki/edgemat/find.html#two-ways-into-a-project) |
| The color in the game is not quite the color I picked | Expected, within limits. The game adds lighting, shine and wear on top of the layer's color, and EDGEmat's swatches can look darker than the game for dark colors: [Colors on screen and in the game](https://edgemodders.ai/wiki/edgemat/surfaces.html#colors-on-screen-and-in-the-game) |
| The mod went to `mods`, not `archive\pc\mod` | REDcode's `redcode.pack.redmod` setting is on. See [If REDmod packing is on](https://edgemodders.ai/wiki/edgemat/in-the-game.html#if-redmod-packing-is-on) |
| Pack and Play installed the mod instead of swapping it in | The swap needs the game running with REDnode, its **MCP server** switched on, and a save loaded. Otherwise REDcode installs for the next start. See [Keep the game running](https://edgemodders.ai/wiki/edgemat/in-the-game.html#keep-the-game-running) |
| REDnode's launcher has no **Console** | The Console needs REDnode 0.49.5 or later: [update REDnode](https://edgemodders.ai/wiki/rednode/install.html#updating-rednode) |
| `addItem` answers with an error | Load a save first: at the main menu V isn't in the world. Then check the id, which must match exactly, capitals included |

## New Material

| You see | Do this |
|---|---|
| "... refused the key" | The key is wrong, revoked, or for the other service. Run **Set Image Service Key...** and enter it again |
| "You told REDcode that EDGEmat may not use your ... key" | You pressed **Don't Allow** when REDcode asked. REDcode's Keys view › **Forget Tool Permissions for Keys**, then Generate again and press **Allow** |
| "No answer from ... in ... s" | The service was slow or down. Try again. Nothing was added |
| The service says the request was blocked | It refused the words. Rephrase them, or edit **The words sent** |
| OpenAI asks to verify your organization | That is OpenAI's rule for GPT Image. Verify on platform.openai.com, or use Gemini |
| "Cancelled." | You pressed Cancel. The service may still count the call |
| Generate keeps failing with a new or free key | Press **List models** to see which image models your key can use, and pick one. The services set the limits, and a free key may not be allowed any image model |
| A garment shows no bumps from my material, or the bumps look like dents | The material was made before EDGEmat 0.3.3. Make it again: bumps now lie over the garment's folds, and come out raised. See [On a garment](https://edgemodders.ai/wiki/edgemat/new-material.html#on-a-garment-the-garment-keeps-its-folds) |
| I can't see the bumps in photo mode | Turn **Depth of Field** off on photo mode's **Camera** tab, and look close, with light from above |

## View in 3D

| You see | Do this |
|---|---|
| The eye says REDcode isn't installed | View in 3D needs [REDcode](https://edgemodders.ai/wiki/redcode/). The message offers to show REDcode's extension page |
| "REDcode's REDbridge is not running" | Press **Restart REDbridge** in the message, wait for it, then click the eye again |
| The garment shows other colors than I expect | Pick the look you came from in the viewer's **Appearance** list. REDcode starts on the mesh's first look, and the status bar names the right one |
| Some parts are one flat color | Normal. Glass, hair and lights without a texture have no colors to give, and keep REDcode's flat color |
| Every material is flat | Check the [log](https://edgemodders.ai/wiki/edgemat/troubleshooting.html#start-with-the-log) for `3D view:` lines. With none, REDcode didn't ask EDGEmat: restart VS Code with both extensions installed. Since EDGEmat 0.3.3 layers show their surface's grain: if each layer is one flat color, update EDGEmat |
| A project's mesh on the Desk shows flat, and the log says "...is not in the loaded archives" | Fixed in EDGEmat 0.3.3, which reads the project's own materials for it. Update EDGEmat |
| Glossy or metal parts look matte, and there are no bumps | Normal for now: the 3D view has no shine, metal or bumps yet. See [What you see, and what you don't yet](https://edgemodders.ai/wiki/edgemat/view-in-3d.html#what-you-see-and-what-you-dont-yet) |
| My Desk edit doesn't show in 3D | Open the 3D view from the eye on that Desk line. A view opened from Find shows the game's own mesh. See [Live while you edit](https://edgemodders.ai/wiki/edgemat/view-in-3d.html#live-while-you-edit) |
| Colors look lighter or darker than in the game | The preview is approximate. Glossy dark surfaces look lighter here, as there is no shine yet. Trust the game over the preview: [Colors on screen and in the game](https://edgemodders.ai/wiki/edgemat/surfaces.html#colors-on-screen-and-in-the-game) |

## Assistants

| You see | Do this |
|---|---|
| Claude doesn't see EDGEmat's tools | Start a **new** Claude Code session after connecting. Run `claude mcp list` in a terminal: `edgemat` should show as connected. If it isn't listed, run **Connect an Assistant (MCP)...** › **Connect Claude Code** again |
| Every EDGEmat tool is listed twice | Both EDGEchat and Connect Claude Code added a server. Keep one: [The easy way: EDGEchat](https://edgemodders.ai/wiki/edgemat/assistants.html#the-easy-way-edgechat) |
| Claude has no `mat_desk` or `mat_restyle` | Its server is the earlier one that comes with EDGEchat or REDnode. The [newer tools](https://edgemodders.ai/wiki/edgemat/assistants.html#newer-tools) need the server connected from EDGEmat |
| Claude says it has no key for making materials | Hand the key over: [A key for new materials](https://edgemodders.ai/wiki/edgemat/assistants.html#a-key-for-new-materials) |
| Claude says the library isn't built | Ask it: "Build the EDGEmat library." Or open EDGEmat in VS Code once, which builds the same list |

## Still stuck

Ask on the community [Discord](https://discord.gg/63qP3Erw43), or [open an issue](https://github.com/Edgemodders/EDGEmat/issues) with the log lines and what you did. Never paste an API key.
