<!-- Copied from EDGEweb's docs/wiki/edgedeck/settings.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/settings.html (reviewed 2026-11-23) -->

# Settings and commands

A reference page. Most people never change a setting: EDGEdeck finds what it needs on its own.

| On this page | |
|---|---|
| [Settings](https://edgemodders.ai/wiki/edgedeck/settings.html#settings) | All nine |
| [Commands](https://edgemodders.ai/wiki/edgedeck/settings.html#commands) | [Everyday](https://edgemodders.ai/wiki/edgedeck/settings.html#everyday), [a single mod](https://edgemodders.ai/wiki/edgedeck/settings.html#a-single-mod), [Nexus Mods](https://edgemodders.ai/wiki/edgedeck/settings.html#nexus-mods), [setup and maintenance](https://edgemodders.ai/wiki/edgedeck/settings.html#setup-and-maintenance) |
| [Buttons on the EDGEdeck page only](https://edgemodders.ai/wiki/edgedeck/settings.html#buttons-on-the-edgedeck-page-only) | Not in the command palette |

## Settings

Open the editor's settings (`Ctrl+,`) and type `edgedeck` in the search box.

(Screenshot on the wiki, "EDGEdeck in VS Code's settings": VS Code's Settings editor filtered to edgedeck, showing the game path, library path and Nexus settings.)

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `edgedeck.gamePath` | empty | The Cyberpunk 2077 folder (the one with `bin`, `archive` and `r6`). Empty means find it through Steam, GOG or Epic on every start | The game is somewhere those launchers can't see. **Pick the game folder...** sets it for you |
| `edgedeck.launch` | `auto` | How **Run game** starts the game: `auto` (through Steam for a Steam install, else the game's program file), `steam` (always through Steam) or `exe` (always `bin\x64\Cyberpunk2077.exe`). Every way adds `-modded`, which REDmod mods need | Run game starts the game the wrong way for your setup |
| `edgedeck.libraryPath` | empty | Where your mods are kept: every mod in the list, on or off. Empty means `%USERPROFILE%\EDGEdeck` | Don't change it by hand: that only points EDGEdeck at another folder. Use **Move library...**, which moves the mods and sets this for you |
| `edgedeck.bridgePath` | empty | Path to `REDbridge.exe` or its folder. Empty means the copy **Get REDbridge** fetched, else a REDbridge checkout next to EDGEdeck's, else REDbridge on your PATH | You build REDbridge yourself |
| `edgedeck.dotnetRoot` | empty | Where REDbridge, and only REDbridge, looks for .NET. Empty means the .NET 10 that Get REDbridge installed for your Windows user, else whatever the PC has | Rarely. See the warning below |
| `edgedeck.nexusCheckUpdatesOnStart` | on | Asks Nexus once a day whether your mods have newer files. Needs a Nexus sign-in | You don't want daily update checks |
| `edgedeck.nexusClientId` | empty | The id Nexus will assign to EDGEdeck for signing in through the browser. Not assigned yet | Only when told to in EDGEdeck's release notes |
| `edgedeck.nexusApplication` | empty | The application name for Nexus's older browser sign-in, used when there's no client id | Only when told to in EDGEdeck's release notes |
| `edgedeck.vortexStagingPath` | empty | Where Vortex keeps its Cyberpunk mods, for **Import from Vortex**. Empty means EDGEdeck looks in the usual places and asks when it finds none | Vortex keeps its mods somewhere unusual. Import sets it for you when it asks |

> **Never set `DOTNET_ROOT` for your whole Windows account.** Every .NET program then looks only there, and it breaks other tools, Vortex among them. If REDbridge needs a different .NET, use `edgedeck.dotnetRoot`, which applies to REDbridge alone.

## Commands

Press `Ctrl+Shift+P` to open the command palette and type `EDGEdeck` to see them. Most are also buttons in the Mods view or on the EDGEdeck page.

Commands that act on one mod aren't in the command palette. They are on the mod's row and in its right-click menu. Names ending in `...` ask you something before they act.

### Everyday

| Command | Does |
|---|---|
| Open EDGEdeck | Opens the wide EDGEdeck page |
| Add mod | Adds a mod from a zip, 7z or rar, a single mod file such as an `.archive`, or a folder |
| Deploy | Makes the game folder match your list. Waits until the game is closed |
| Run game | Deploys any waiting changes, then starts the game with `-modded`. Leaves a running game alone |
| Update all | Gets the newest file for every mod with an update waiting, after one question. Reads **Update shown** on the EDGEdeck page while a search or filter narrows the list |
| Undo deploy | Removes everything EDGEdeck deployed. Waits until the game is closed |
| Show pending changes | Lists what the next deploy will do, and why |
| Show conflicts | Opens the Conflicts page |
| Refresh | Reads the library and the game folder again |
| Hide mods that are off, Show all mods | The eye in the Mods view's title bar. Shows only the mods that are on, or all of them again |

### A single mod

| Command | Does |
|---|---|
| Details | Opens the mod's detail panel |
| Deploy this mod | Turns the mod on and puts only its files in the game. Other changes keep waiting |
| Undeploy | Turns the mod off and takes only its files out of the game |
| Move up (wins conflicts), Move down | Changes its place in the order. See [Who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html#who-wins) |
| Switch version... | Makes another version of the mod the one in use. This one is in the command palette too |
| Check for updates | For a mod from Nexus: asks Nexus whether it has a newer file of this mod |
| Update | For a mod from Nexus: checks, and when there is a newer file, downloads it in the mod's place |
| Open on Nexus Mods | Opens its Nexus page |
| Reveal in File Explorer | Opens its library folder |
| Reveal in Game Folder | Shows where the mod, folder or file sits in the game folder, in File Explorer |
| Rename... | A name of your own for the mod in EDGEdeck (also **F2** on its row). Files and the game don't change |
| Add to REDcode project | Copies its files into the open REDcode project. For an archive, REDcode extracts the files you pick |
| Remove | Deletes it from the library |

### Nexus Mods

| Command | Does |
|---|---|
| Nexus: sign in | Opens your Nexus API Access page and asks for your personal API key. Shown as **Nexus sign in** in menus and **Sign in to Nexus Mods** among the Set up steps. See [Signing in](https://edgemodders.ai/wiki/edgedeck/nexus.html#signing-in) |
| Nexus: set API key (paste, instead of signing in) | Asks for the key without opening the browser |
| Nexus: sign out | Removes the key from EDGEdeck |
| Nexus: check for updates | Checks now instead of waiting for the daily check. **Check updates** on the EDGEdeck page |
| Nexus: add from a link | Adds a mod from a pasted `nxm://` link |
| Nexus: handle download links (nxm) | Makes **Mod manager download** on Nexus send files to EDGEdeck. **Handle Nexus download links** among the Set up steps |
| Nexus: stop handling download links | Gives the links up |
| EDGEmods: handle links | Makes the **Mod manager** button on [EDGEmods](https://edgemods.ai) open in EDGEdeck, which hands the link to the EDGEmods extension. EDGEdeck takes these links by itself when no other program has them |
| EDGEmods: stop handling links | Gives the EDGEmods links up, and EDGEdeck won't take them back by itself |

### Setup and maintenance

| Command | Does |
|---|---|
| EDGEdeck: Set up... | Lists every setup step, done or not, and brings back steps you hid with the **x** on their row |
| Pick the game folder... | Chooses the game folder by hand. The Set up step **Find the game folder** is the same command |
| Get the frameworks... | Gets RED4ext, CET, redscript, ArchiveXL, TweakXL and Codeware from their authors' GitHub releases. The link **Update the frameworks** on the EDGEdeck page is the same command |
| Get REDbridge | Downloads REDbridge for conflicts inside archives |
| Update REDbridge | Checks for and installs a newer REDbridge |
| Import from Vortex | Copies Vortex's mods into the library |
| Import FOMOD choices from Vortex | Brings over the choices Vortex kept for mods you installed through a [FOMOD installer](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#mods-with-an-installer-fomod), so their updates install with them |
| Review FOMOD options | Opens the installer for an update waiting with `options to review` |
| Add from REDcode project | Adds a project's packed output as a mod |
| Add to REDcode project (for an `.archive` file) | Puts the contents of any `.archive` file into the open REDcode project, without adding it to the library. On an archive's right-click menu in the editor's Explorer, or run it and pick the file. In the command palette only while a project is open |
| Switch loadout... | Makes another loadout active. Deploy afterwards |
| Save as new loadout... | Saves the mods as they are now as a new loadout. The active one stays active |
| Export the active loadout... | Writes the active loadout to a file, to share or keep |
| Import a loadout... | Adds a loadout file as a new loadout |
| Open library folder | Opens the library in File Explorer |
| Move library... | Moves the library to a folder you pick and sets `edgedeck.libraryPath`. Won't start while the game runs |
| Show log | Opens EDGEdeck's log |
| Connect an assistant (MCP)... | Copies the command or settings entry that connects Claude Code or another assistant. See [Assistants](https://edgemodders.ai/wiki/edgedeck/assistants.html#connect-an-assistant) |
| Suggest the HUD theme | Offers REDnode HUD, the colour theme EDGEdeck's pages are drawn for. EDGEdeck offers it once by itself |

## Buttons on the EDGEdeck page only

These have no command. Find them on the [EDGEdeck page](https://edgemodders.ai/wiki/edgedeck/mods-view.html#the-edgedeck-page-part-by-part) and the Conflicts page.

| Button | Where | Does |
|---|---|---|
| **+ Section**, and the buttons on a section's header | The EDGEdeck page | Make, rename, move, fold, delete and empty [sections](https://edgemodders.ai/wiki/edgedeck/mods-view.html#sections) |
| **Section** | A mod's Actions | Puts the mod in a section |
| **Check for an update**, **Update** | A mod's Actions | Asks Nexus about that mod alone, and gets the update |
| **Largest first**, **Newest update first**, **Columns** | Above the table | Sort the list, and pick the columns |
| **Make active**, and the loadout buttons | Beside the Loadout dropdown | See [Loadouts](https://edgemodders.ai/wiki/edgedeck/loadouts.html#everything-you-can-do) |
| **Remove from Library**, and the other buttons on a Nexus page's row | The row named after a Nexus page | Act on every file from that page. See [Several files from one page](https://edgemodders.ai/wiki/edgedeck/nexus.html#several-files-from-one-page) |
| **Choose...**, **Deploy now** | The Conflicts page | Settle a conflict and apply it. See [The Conflicts page](https://edgemodders.ai/wiki/edgedeck/conflicts.html#the-conflicts-page) |
| **The game is closed now** | The message when you deploy while the game runs | Tries again |
