<!-- Copied from EDGEweb's docs/wiki/edgedeck/settings.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/settings.html (reviewed 2026-10-24) -->

# Settings and commands

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `edgedeck`. Most people never change any of these: EDGEdeck finds what it needs on its own.

(Screenshot on the wiki, "EDGEdeck in VS Code's settings": VS Code's Settings editor filtered to edgedeck, showing the game path, library path and Nexus settings.)

| Setting | Default | What it does | Change it when |
|---|---|---|---|
| `edgedeck.gamePath` | empty | The Cyberpunk 2077 folder (the one with `bin`, `archive` and `r6`). Empty means find it through Steam, GOG or Epic on every start | The game is somewhere those launchers can't see. **Pick the game folder...** sets it for you |
| `edgedeck.launch` | `auto` | How **Run game** starts the game: `auto` (through Steam for a Steam install, else the exe), `steam` (always through Steam) or `exe` (always `bin\x64\Cyberpunk2077.exe`). Every way adds `-modded` | Run game starts the game the wrong way for your setup |
| `edgedeck.libraryPath` | empty | Where your mods are kept. Empty means `%USERPROFILE%\EDGEdeck` | The game is on another drive. Put the library on the game's drive so deploy can use hardlinks |
| `edgedeck.bridgePath` | empty | Path to `REDbridge.exe` or its folder. Empty means the copy **Get REDbridge** fetched, else a REDbridge checkout next to EDGEdeck's, else REDbridge on your PATH | You build REDbridge yourself |
| `edgedeck.dotnetRoot` | empty | The .NET location for the REDbridge process only. Empty means the per-user .NET 10 runtime, else whatever the PC has | Rarely. See the warning below |
| `edgedeck.nexusCheckUpdatesOnStart` | on | Asks Nexus once a day whether your mods have newer files. Needs a Nexus sign-in | You don't want daily update checks |
| `edgedeck.nexusClientId` | empty | The sign-in id Nexus assigns to EDGEdeck. With it, sign-in happens in your browser and renews itself | Only when told to in EDGEdeck's release notes |
| `edgedeck.nexusApplication` | empty | The application name for Nexus's older sign-in, used when there's no client id | Only when told to in EDGEdeck's release notes |
| `edgedeck.vortexStagingPath` | empty | Where Vortex keeps its Cyberpunk mods, for **Import from Vortex**. Empty means EDGEdeck looks in the usual places and asks when it finds none | Vortex keeps its mods somewhere unusual. Import sets it for you when it asks |

> **Never set `DOTNET_ROOT` for your whole Windows account.** Every .NET program then looks only there, and it breaks other tools, Vortex among them. If REDbridge needs a different .NET, use `edgedeck.dotnetRoot`, which applies to REDbridge alone.

## Commands

Open the command palette (`Ctrl+Shift+P`) and type `EDGEdeck` to see them. Most are also buttons in the Mods view, the EDGEdeck page or a mod's right-click menu. Most single-mod commands, and Not now, appear only there, not in the palette.

### Everyday

| Command | Does |
|---|---|
| Open EDGEdeck | Opens the wide EDGEdeck page |
| Add mod | Adds a mod from a zip, 7z or rar, a single mod file such as an `.archive`, or a folder |
| Deploy | Makes the game folder match your list. Waits until the game is closed |
| Run game | Deploys any waiting changes, then starts the game with `-modded`. Leaves a running game alone |
| Undo deploy | Removes everything EDGEdeck deployed. Waits until the game is closed |
| Show pending changes | Lists what the next deploy will do, and why |
| Show conflicts | Opens the Conflicts page |
| Refresh | Re-reads the library and the game folder |

### A single mod

| Command | Does |
|---|---|
| Details | Opens the mod's detail panel |
| Move up (wins conflicts), Move down | Changes its place in the order |
| Switch version... | Makes another version of the mod the active one |
| Open on Nexus Mods | Opens its Nexus page |
| Reveal in File Explorer | Opens its library folder |
| Reveal in Game Folder | Shows where the mod, folder or file sits in the game folder, in File Explorer |
| Rename... | A name of your own for the mod in EDGEdeck (also **F2** on its row). Files and the game don't change |
| Add to REDcode project | Copies its files into the open REDcode project. For an archive, REDcode extracts the resources you pick |
| Remove | Deletes it from the library |

### Nexus Mods

| Command | Does |
|---|---|
| Nexus: sign in | Signs in through the browser, or opens the API Access page |
| Nexus: set API key (paste, instead of signing in) | Uses a personal API key instead |
| Nexus: sign out | Removes the sign-in or key |
| Nexus: check for updates | Checks now instead of waiting for the daily check |
| Nexus: add from a link | Adds a mod from a pasted `nxm://` link |
| Nexus: handle download links (nxm) | Makes **Mod manager download** on Nexus send files to EDGEdeck |
| Nexus: stop handling download links | Gives the links up |

### Setup and maintenance

| Command | Does |
|---|---|
| EDGEdeck: Set up... | Lists every setup step, done or not, and brings hidden ones back |
| Not now | The **x** on a Set up row. Hides that step |
| Pick the game folder... | Chooses the game folder by hand |
| Get REDbridge | Downloads REDbridge for conflicts inside archives |
| Update REDbridge | Checks for and installs a newer REDbridge |
| Import from Vortex | Copies Vortex's mods into the library |
| Add from REDcode project | Adds a project's packed output as a mod |
| Add an archive to the REDcode project... | Puts the resources of any `.archive` file into the open REDcode project, without adding it to the library. Also on an archive's right-click menu in VS Code's Explorer |
| Switch loadout... | Makes another loadout active. Deploy afterwards |
| Save as new loadout... | Saves the mods as they are now as a new loadout. The active one stays active |
| Export the active loadout... | Writes the active loadout to a file, to share or keep |
| Import a loadout... | Adds a loadout file as a new loadout |
| Open library folder | Opens the library in File Explorer |
| Get the frameworks... | Next version, not released yet. Gets RED4ext, CET, redscript, ArchiveXL, TweakXL and Codeware from their authors' GitHub releases |
| Move library... | Next version, not released yet. Moves the library to a folder you pick and sets `edgedeck.libraryPath` |
| Show log | Opens EDGEdeck's log |
| EDGEdeck: Connect an assistant (MCP)... | Sets up Claude Code or another assistant |
| Suggest the HUD theme | Offers REDnode HUD, the colour theme EDGEdeck's pages are drawn for. EDGEdeck offers it once by itself |
