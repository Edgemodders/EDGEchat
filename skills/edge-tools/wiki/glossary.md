<!-- Copied from EDGEweb's docs/wiki/glossary.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/glossary.html (reviewed 2026-11-25) -->

# Glossary

The words this wiki uses, in plain language. Every term has its own address, so a page can link straight to it: `glossary.html#framework`. If a word you met isn't here, ask on [Discord](https://discord.gg/63qP3Erw43) and we'll add it.

| Group | What's in it |
|---|---|
| [Assistants and AI](https://edgemodders.ai/wiki/glossary.html#assistants-and-ai) | Agent, API key, Claude Code, MCP server, plugin, skill, Uthana |
| [The editor](https://edgemodders.ai/wiki/glossary.html#the-editor) | Extension, activity bar, command palette, Open VSX |
| [Game and modding terms](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms) | Archive, framework, record, TweakDB, WolvenKit and the rest |
| [EDGE terms](https://edgemodders.ai/wiki/glossary.html#edge-terms) | Words every EDGE tool shares: project, pack, deploy, the Desk, the Library, preview |
| [In the game: REDnode](https://edgemodders.ai/wiki/glossary.html#in-the-game-rednode) | Package, overlay, launcher, HUD widget, space, Console |
| [Looks and materials](https://edgemodders.ai/wiki/glossary.html#looks-and-materials) | Mesh, appearance, layer, surface, setup, mask |
| [Building in the world](https://edgemodders.ai/wiki/glossary.html#building-in-the-world) | Scene, bake, sector, gizmo, solid |
| [Quickhacks](https://edgemodders.ai/wiki/glossary.html#quickhacks) | Tier, family, RAM, upload, status effect |
| [Quests](https://edgemodders.ai/wiki/glossary.html#quests) | Beat, story file, fact, journal, trigger area |
| [Sound](https://edgemodders.ai/wiki/glossary.html#sound) | Event, variation, override, voice line, take |

## Assistants and AI

| Term | Meaning |
|---|---|
| <a id="agent"></a>Agent | An AI that can use tools, not only chat: it reads files, runs things and checks the result. REDagent is one; Claude Code is another. These pages also say assistant |
| <a id="api-key"></a>API key | A long password that lets a program use a paid service on your account. REDagent needs one from Anthropic; a few optional features need one from Google, OpenAI, ElevenLabs, Tripo or Uthana. The EDGE tools share your keys: see [Shared keys](https://edgemodders.ai/wiki/glossary.html#shared-keys). Treat it like a password: anyone who has it can spend your credit |
| <a id="change-card"></a>Change card | REDagent's preview of a file change, with **Allow** and **Deny**. Nothing is written until you allow it |
| <a id="claude"></a>Claude | The AI made by Anthropic. REDagent and Claude Code both run on it |
| <a id="claude-code"></a>Claude Code | Anthropic's AI assistant that works on your PC: a chat panel in VS Code or EDGEkit, or in a terminal, that can read files and do work for you. It needs a Claude plan that includes it. See [EDGEchat](https://edgemodders.ai/wiki/edgechat/) |
| <a id="mcp"></a><a id="mcp-server"></a>MCP server | A connection that lets an AI assistant use one program's tools. MCP (Model Context Protocol) is the standard for it. REDnode, REDcode, EDGEdeck, EDGEmat, EDGEquest, EDGEhack and EDGEwave each offer one. See [Connect Claude Code](https://edgemodders.ai/wiki/connect-claude-code.html) |
| <a id="permission-prompt"></a>Permission prompt | The box Claude Code shows before an action that needs your OK. It names the tool and what it is about to do. See [EDGEchat: Safety](https://edgemodders.ai/wiki/edgechat/safety.html) |
| <a id="plugin"></a>Plugin | An add-on. For Claude Code, a plugin adds connections, knowledge and commands: EDGEchat is one. For the game, a RED4ext plugin is a program RED4ext loads into the game: REDnode is one |
| <a id="skill"></a>Skill | A piece of knowledge a plugin gives Claude, loaded when a task needs it. EDGEchat's skills teach Claude how the EDGE tools and the game's files work |
| <a id="uthana"></a>Uthana | An AI service ([uthana.com](https://uthana.com)) that makes body motion from a sentence. REDcode uses it to [make animations](https://edgemodders.ai/wiki/redcode/viewers.html#making-a-clip) on the game's own skeleton. It is paid, with your own account and key. Under Uthana's terms a paying customer owns what it makes, and Uthana may train on what you send and get back |

## The editor

| Term | Meaning |
|---|---|
| <a id="activity-bar"></a>Activity bar | The strip of icons down the left edge of VS Code and EDGEkit. One icon per tool; click one to open that tool's panel |
| <a id="command-palette"></a>Command palette | A search box for every command in the editor. Press **Ctrl+Shift+P** and type a tool's name |
| <a id="edgekit"></a>EDGEkit | The EDGEmodders editor: a free app for Windows that looks and works like VS Code, with the EDGE editor tools built in. See [EDGEkit](https://edgemodders.ai/wiki/edgekit/) |
| <a id="extension"></a>Extension | An add-on for VS Code or EDGEkit. REDcode, EDGEdeck, EDGEmat, EDGEwave, EDGEquest and EDGEhack are extensions |
| <a id="extension-pack"></a>Extension pack | An extension that only installs other extensions. EDGEkit's pack installs the EDGE tools in VS Code in one go |
| <a id="open-vsx"></a><a id="vs-code-marketplace"></a>VS Code Marketplace, Open VSX | The two stores editors install extensions from. VS Code uses Microsoft's Marketplace; EDGEkit and VSCodium use Open VSX |
| <a id="vs-code"></a>VS Code | Visual Studio Code, a free editor from Microsoft. Most EDGE tools run inside it or inside EDGEkit |

## Game and modding terms

| Term | Meaning |
|---|---|
| <a id="archive"></a>Archive | A `.archive` file: a package of many game files. The game ships hundreds; many mods are a single archive in `archive/pc/mod` |
| <a id="archivexl"></a>ArchiveXL | A framework that lets mods add new things rather than only replace files: items, appearances, quests, journal entries and texts. The game also reads EDGEbuilder's baked scenes through it |
| <a id="cet"></a>CET (Cyber Engine Tweaks) | A popular framework for Lua script mods, with its own windows and console in the game |
| <a id="codeware"></a>Codeware | A framework that gives other mods extra game functions. EDGEbuilder, and REDnode mods that place objects or change the game's own UI, need it |
| <a id="conflict"></a>Conflict | Two mods changing the same file, or the same thing inside their archives. Only one can win. See [Conflicts and who wins](https://edgemodders.ai/wiki/edgedeck/conflicts.html) |
| <a id="cr2w"></a>CR2W | The binary format of most game files inside archives. You never edit it directly: REDcode shows such files as a tree or as readable JSON |
| <a id="entity"></a>Entity | A `.ent` file: a ready-made game object with its own parts, such as lights or doors |
| <a id="flat"></a>Flat | One value inside a TweakDB record, such as an item's price |
| <a id="fomod"></a>FOMOD | An installer that comes inside some mod downloads: a few pages of options, such as which color or which extras, that decide which of the mod's files are installed. EDGEdeck shows it and remembers your choices. See [Mods with an installer](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#mods-with-an-installer-fomod) |
| <a id="framework"></a>Framework | A mod that other mods need in order to work. Six cover most mods: RED4ext, Cyber Engine Tweaks, redscript, ArchiveXL, TweakXL and Codeware. EDGEdeck's [Get the frameworks](https://edgemodders.ai/wiki/edgedeck/frameworks.html#getting-the-frameworks) installs them |
| <a id="hash"></a>Hash | A number that stands for a name. Inside an archive, each file path is stored as a hash; if a tool shows a long number instead of a file name, it is a hash the tool could not turn back into a path. Sounds and sound events are known by hashes too |
| <a id="ink"></a>Ink | The game's UI system: the HUD, the menus and their widgets. Its files are `.inkwidget` (a piece of UI), `.inkatlas` (pictures) and `.inkstyle` (colors and text styles) |
| <a id="load-order"></a>Load order | The order the game loads mods in, which decides who wins a conflict. In EDGEdeck, the mod shown higher in the list wins |
| <a id="lockey"></a><a id="text-key"></a>LocKey, text key | The id of one on-screen text, such as `LocKey#4123`. An item refers to its name by that number, not by the words. If the game shows a key instead of a text, the text is missing |
| <a id="nexus-mods"></a>Nexus Mods | The main site where Cyberpunk mods are published |
| <a id="nxm-link"></a><a id="mod-manager-download"></a>Mod manager download, nxm link | The button on a Nexus Mods file that sends the download straight to a mod manager, through a link that starts with `nxm://`. Only one program on your PC can receive those links. See [Nexus Mods in EDGEdeck](https://edgemodders.ai/wiki/edgedeck/nexus.html) |
| <a id="onscreens"></a>Onscreens | The game's name for its on-screen texts. A mod's own texts go in an Onscreens file in its project |
| <a id="record"></a>Record | One entry in TweakDB. Every item, effect and price is a record with an id, such as `Items.Preset_Lexington_Default` |
| <a id="red4ext"></a>RED4ext | The framework that loads plugins into the game. REDnode is one of them |
| <a id="red-hot-tools"></a>RED Hot Tools | A plugin by psiberx that loads changed archives into the running game. It has no build for game 2.5, and REDnode and REDcode no longer use it there: [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html) does the job |
| <a id="redengine"></a>REDengine | The game's engine. The source of "RED" in the tool names |
| <a id="redmod"></a>REDmod | CD PROJEKT RED's own mod format. It is the only one that can add new sounds, or replace everything a sound event plays. REDmod mods load only when the game starts with the `-modded` launch option; EDGEdeck's **Run game** adds it |
| <a id="redscript"></a>redscript | A framework and a language for script mods, compiled into the game's own scripts. REDnode needs it |
| <a id="resource"></a>Resource | One game file packed inside an archive, such as a mesh or a texture |
| <a id="rtti"></a>RTTI | The game's own list of its classes and functions. REDnode's game API is made from it |
| <a id="tweakdb"></a>TweakDB | The game's database of items, stats, characters and settings |
| <a id="tweakxl"></a>TweakXL | The framework that changes TweakDB from small text files: YAML (`.yaml`) or the game's own tweak format (`.tweak`) |
| <a id="vortex"></a>Vortex | Nexus Mods' general-purpose mod manager. EDGEdeck can import its mods |
| <a id="wolvenkit"></a>WolvenKit | The community's main Cyberpunk modding tool. EDGE reads and writes the game's files with WolvenKit's own code |

## EDGE terms

| Term | Meaning |
|---|---|
| <a id="deploy"></a>Deploy | EDGEdeck putting your switched-on mods into the game folder. On the same drive as the game it links the files (hardlinks), so they take no extra space; if your library is on another drive it copies them. Either way it records every file in its manifest |
| <a id="desk"></a>The Desk | One tool's own scratch area for work in progress, kept across restarts until the work goes into a project or the EDGE Library. EDGEmat, EDGEhack, EDGEdir and EDGEwave have one |
| <a id="edge"></a>EDGE | The platform: the EDGE toolkits working together |
| <a id="edge-director"></a>EDGE Director | [EDGEdir](https://edgemodders.ai/wiki/edgedir/)'s app in the game, a REDnode window. It plays the scenes made in EDGEdir on real people and lets you adjust them where you stand. Not released yet |
| <a id="edge-library"></a>EDGE Library | One folder of your own where the EDGE tools keep finished work for good, outside any project: scenes, bakes, quickhacks, sounds and game files you set aside. Optional. See [The EDGE Library](https://edgemodders.ai/wiki/library.html) |
| <a id="hardlink"></a>Hardlink | One file that appears in two folders at once. A deployed mod shows up in the game folder without taking extra space, because it is the very file in your library. It only works within one drive |
| <a id="kind"></a>Kind | What is inside a mod, shown by EDGEdeck as small labels on each mod, such as framework or REDmod |
| <a id="library-edgedeck"></a>Library (EDGEdeck's mod library) | The folder where EDGEdeck keeps your mods, outside the game folder. Not the EDGE Library |
| <a id="loadout"></a>Loadout | A named set of which mods are on, and which version of each, in EDGEdeck. Other mod managers call it a profile |
| <a id="manifest"></a>Manifest | A list a tool keeps of what belongs to something. EDGEdeck's manifest lists every file a deploy placed, which makes **Undo deploy** exact. A REDnode package's manifest (`rednode-app.json`) says what the package is and what it asks for |
| <a id="pack"></a>Pack | Turn a project into the files the game loads, such as one `.archive`. REDcode does it |
| <a id="pack-and-play"></a>Pack and Play | REDcode's button that packs your mod and swaps it into the running game through REDnode, so you see a change without a restart |
| <a id="passed-in-game"></a>Passed in game | A status word: the developer tested that part in their own modded game. "Tested in VS Code" means it was tested in the editor, not in the game. "Untested" means nobody has confirmed it |
| <a id="preview-release"></a>Preview (a release) | Released and usable, but young. Expect rough edges. For EDGEbuilder's other meaning, see [Preview](https://edgemodders.ai/wiki/glossary.html#preview) |
| <a id="project"></a><a id="wolvenkit-project"></a>Project, WolvenKit project | The working folder of one mod: the files you changed, and what gets packed into the mod. REDcode makes one for you. It is the same kind of project WolvenKit uses, a `.cpmodproj` |
| <a id="toolkit"></a>Toolkit | One EDGE tool with its own section in this wiki, such as REDcode or EDGEmat |
| <a id="try-live"></a>Try Live | EDGEhack's button that tries a quickhack change in the running game in seconds, without packing a mod |

## In the game: REDnode

| Term | Meaning |
|---|---|
| <a id="apps-folder"></a>Apps folder | `red4ext/plugins/REDnode/apps` in the game folder. Every REDnode package lives there, each in a folder of its own. REDagent puts the mods it writes there |
| <a id="console"></a>Console | REDnode's built-in command line in the game. Type commands such as `addItem`, or JavaScript. See [The Console](https://edgemodders.ai/wiki/rednode/overlay.html#the-console) |
| <a id="development-folder"></a>Development folder | A folder outside the game, such as your own project, whose packages run in the game in place of their installed copies |
| <a id="editor-channel"></a>Editor channel | The connection REDnode offers to EDGE tools on the same PC, such as VS Code extensions, so they can reach the running game after you allow them. Try Live uses it |
| <a id="hot-reload"></a>Hot reload | REDnode restarting a changed mod in the running game, without a game restart |
| <a id="hud-widget"></a>HUD widget | An overlay app the player only looks at, such as a clock in a corner of the screen |
| <a id="ink-markup"></a>Ink markup | REDnode's way to write a panel the game draws on its own HUD: an `.ink.html` file with tags such as `<column>` and `<text>`. See [Native UI: ink markup](https://edgemodders.ai/wiki/rednode/ink-markup.html) |
| <a id="launcher"></a>Launcher | REDnode's home in the game, behind the **REDNODE** tab: the list where you switch windows and mods on and off |
| <a id="mod-log"></a>Mod log | A built-in REDnode window with every line every Node mod prints, live |
| <a id="mod-manager"></a>Mod Manager | REDnode's in-game list of installed packages. New packages appear there first; you switch them on, allow their permissions and pin them. Not EDGEdeck, which manages game mods before the game starts |
| <a id="mod-service"></a><a id="service"></a>Mod service | Functions a REDnode package offers for other packages to call. A package can offer some of them to AI assistants as tools |
| <a id="modes"></a>Modes: passive, interactive, hidden | The three states **F10** steps through. Passive: you play, and HUD widgets show. Interactive: every open window shows, with a cursor, and takes your mouse and keyboard. Hidden: nothing from REDnode shows |
| <a id="node-mod"></a>Node mod | A REDnode mod written in JavaScript or TypeScript. It runs outside the game and can read and change the running game |
| <a id="overlay"></a>Overlay | Everything REDnode draws on top of the game: windows, HUD widgets and the launcher |
| <a id="overlay-app"></a>Overlay app | A small web page (HTML, CSS, JavaScript) that REDnode draws over the game, as a window or as a HUD widget |
| <a id="package"></a>Package | Anything REDnode runs: a Node mod, an overlay app, or both. REDagent and EDGEbuilder are packages |
| <a id="permission"></a>Permission | What a REDnode package may do beyond the basics, such as change TweakDB, swap archives or ask an AI. You allow each one in the Mod Manager |
| <a id="pin"></a>Pin to HUD, Pin to launcher | Two switches in the Mod Manager. Pin to HUD keeps a window on screen while you play. Pin to launcher gives a package its own entry in the launcher |
| <a id="redswap"></a>REDswap | The part of REDnode that swaps a changed archive into the running game, so you see a new texture or color without restarting. See [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html) |
| <a id="role"></a>Role | A kind of service, such as a voice that speaks lines, that a mod can ask for whichever package provides it |
| <a id="shared-keys"></a>Shared keys | The one store of your API keys that every EDGE tool shares, in the game and in VS Code. You set each key once, in REDnode's Keys panel in the game or in REDcode's [Keys view](https://edgemodders.ai/wiki/redcode/settings.html#the-keys-view), and every EDGE tool you allow can use it |
| <a id="solo-mode"></a>Solo mode | A package hiding every other package's windows and HUD widgets while it works. EDGEbuilder uses it |
| <a id="space"></a>Space | A named set of windows, like a virtual desktop. You might keep a "Combat" space and a "Build" space and switch between them |
| <a id="tier-code"></a>Tier 1 and Tier 2 code | REDnode's two kinds of mod code. Tier 2 runs outside the game (every mod today). Tier 1 would run inside it, for rare cases; it is planned. Not the tiers of a quickhack |
| <a id="ui-workbench"></a>UI Workbench | The app in REDnode's optional UI Tools pack: inspect the game's own UI, try changes live, and write and export HUD panels. See [UI Tools](https://edgemodders.ai/wiki/rednode/ui-tools.html) |
| <a id="widget"></a>Widget | One piece of the game's own UI: a panel, a text, an image |

## Looks and materials

| Term | Meaning |
|---|---|
| <a id="appearance"></a><a id="look"></a>Appearance, look | One set of materials for a mesh: the same jacket shape in black, or in red. The game's files say appearance; EDGEmat says look |
| <a id="atlas"></a>Atlas | An `.inkatlas`: one texture cut into many small pictures that the game's interface uses, such as icons |
| <a id="body-type"></a>Body type | V's body, feminine or masculine. Many garments have a separate mesh for each, so a recolor has to reach both |
| <a id="gltf"></a>glTF | A 3D file format that Blender and other tools open. REDcode exports meshes to it and imports them back |
| <a id="layer"></a>Layer | One coat in a multilayered material: a surface, a color and a mask |
| <a id="lod"></a>LOD | Level of detail. The game keeps simpler copies of a shape to draw at a distance |
| <a id="mask"></a><a id="mask-set"></a>Mask, mask set | A mask is a black-and-white image that says where one layer shows. A garment has one per layer; together they are its mask set, an `.mlmask` |
| <a id="mesh"></a>Mesh | A `.mesh` file: the 3D shape of an object or garment. The mesh also names the materials it wears |
| <a id="microblend"></a>Microblend | A small detail pattern, such as wear, dirt, scratches or a print, that a layer can carry on top of its surface |
| <a id="multilayered-material"></a>Multilayered material | How the game colors most clothing and many objects: a stack of up to 20 layers. EDGEmat shows them in plain words and recolors them |
| <a id="setup"></a>Setup (`.mlsetup`) | The file that holds a material's stack of layers. Recoloring changes a setup |
| <a id="submesh"></a>Submesh | One part of a mesh. Each part has its own material |
| <a id="surface"></a>Surface (`.mltemplate`) | One kind of stuff, such as a leather, a denim or a chrome: a grey texture plus the list of colors and finishes it can take |
| <a id="texture"></a>Texture | An `.xbm` file: a picture the game wraps onto a shape or shows in its interface |

## Building in the world

| Term | Meaning |
|---|---|
| <a id="bake"></a>Bake | EDGEbuilder turning a scene into a mod. After a bake, the objects are in the world without EDGEbuilder, for anyone who installs the mod. People are not baked yet |
| <a id="builder-mode"></a>Builder mode | EDGEbuilder's state while its Edit switch is on: its own camera flies free, V stays put, and the game's HUD and other windows hide |
| <a id="collision"></a><a id="solid"></a>Collision, solid | Collision data is the invisible shape the game uses to stop V, bullets and cars. An object with it is solid. Many of the game's models have none, and those can't be made solid |
| <a id="gizmo"></a>Gizmo | The handles drawn on a selected object that you drag to move, turn and scale it |
| <a id="preview"></a>Preview (an object) | In EDGEbuilder, an object you placed that is not baked yet. Only you see it, and only while EDGEbuilder is running |
| <a id="scene"></a>Scene | Three meanings. In EDGEbuilder, a saved arrangement of objects you placed, which you can bake into a mod. In [EDGEdir](https://edgemodders.ai/wiki/edgedir/), a timeline of what people do and when; there an EDGEbuilder scene is called a set. In EDGEquest and the game's quests, a conversation or a moment: lines and choices |
| <a id="sector"></a>Sector | The game's own file format for one piece of the world: a list of the objects there, loaded as you get near. A bake writes your scene as a sector |
| <a id="seen-from"></a>Seen from | An object's draw distance in a bake: how many metres away the game still shows it |

## Quickhacks

| Term | Meaning |
|---|---|
| <a id="cooldown"></a>Cooldown | The time before V can use the same quickhack again |
| <a id="family"></a>Family | One quickhack with all its tiers. EDGEhack lists families: "Overheat, 6 tiers" |
| <a id="feature-line"></a>Feature line | A line you add to a quickhack's tooltip that tells players what it does |
| <a id="quickhack"></a>Quickhack | An ability V uploads onto a target through the scanner, such as Overheat. In the game it is an item V slots into the cyberdeck |
| <a id="ram"></a>RAM | What a quickhack costs V to use. V's cyberdeck has a limited amount. Not your PC's memory |
| <a id="status-effect"></a>Status effect | Something the game puts on a character for a while: burning, poisoned, blinded. Most quickhacks work by adding one |
| <a id="tier"></a>Tier | One strength of a quickhack: Common, Uncommon, Rare, Epic, Legendary and Legendary++. Each tier is its own item |
| <a id="upload"></a>Upload | The time a quickhack takes to reach its target, in seconds |

## Quests

| Term | Meaning |
|---|---|
| <a id="beat"></a>Beat | One stage of a quest you write in EDGEquest, with the objective the journal shows while it runs. Beats are EDGEquest's word; the game has no beats |
| <a id="fact"></a>Fact | A named number the game keeps in your save, to remember what happened ("V met Judy" = 1) |
| <a id="journal"></a>Journal | The game's quest log |
| <a id="map-marker"></a>Map marker | The icon on the map and minimap that an objective points at. A place in an EDGEquest quest is a map marker the game already has |
| <a id="music-cue"></a>Music cue | A sound event that starts or stops a piece of the game's music. Its name starts with `mus_` |
| <a id="objective"></a>Objective | The one line the journal shows for the current stage of a quest, also in the tracker on the HUD |
| <a id="phase"></a>Phase | The game's word for a part of a quest: a set of steps and the links between them. A quest made with EDGEquest becomes one phase |
| <a id="quest"></a>Quest | A whole quest, as the journal shows it: a title, objectives, and what happens |
| <a id="story-file"></a>Story file | Your quest, written in story words, as one text file in your project (`<id>.quest.yaml`). EDGEquest makes the game's quest files from it |
| <a id="storyboard"></a>Storyboard | EDGEquest's editor for a story file: one card per beat, with arrows between them |
| <a id="trigger-area"></a>Trigger area | An invisible box in the world. The game notices when V steps into it |

## Sound

| Term | Meaning |
|---|---|
| <a id="character-voice"></a>Character voice | The one voice a game character, such as `judy`, speaks in for every EDGE tool that speaks their lines. Set in EDGEwave: one of your ElevenLabs voices, or one designed from a description. See [Character voices](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices) |
| <a id="custom-sound"></a>Custom sound | A WAV file in a REDmod that the game plays for a sound event's name |
| <a id="lip-sync"></a>Lip sync | The mouth's movement to a spoken line. The game keeps one short clip per voice line, with curves for the jaw, lips, tongue, brows and blinks, in `.anims` sets. REDcode's [Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html) plays them on the character's head |
| <a id="override"></a>Override | Replacing one recording of a game sound effect with yours |
| <a id="sound-event"></a>Sound event | The game's name for something to play, such as `w_melee_katana_equip`. Quests, scenes and scripts ask for events, never for files |
| <a id="sound-pack"></a>Sound pack (`.opuspak`) | A file that holds many of the game's sound effects packed together. An override adds one to your project |
| <a id="take"></a>Take | One attempt from a voice tool. You keep the one you like |
| <a id="variation"></a>Variation | One of the recordings a sound event can play. The game picks one each time, so the same action doesn't always sound the same |
| <a id="voice-clone"></a>Voice clone | A copy of a voice, made by ElevenLabs from a recording. EDGEwave clones only your own recordings: it never sends the game's audio |
| <a id="voice-line"></a>Voice line | One spoken line of dialogue, a `.wem` file in the game |
| <a id="wem"></a>`.wem` | The game's format for voice lines. Only Audiokinetic's Wwise tool makes it, which is why new voiced lines are not in the game yet |
