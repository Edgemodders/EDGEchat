<!-- Copied from EDGEweb's docs/wiki/edgehack/settings.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgehack/settings.html (reviewed 2026-11-22) -->

# Settings and commands

Everything EDGEhack offers, in one place. You don't need to learn it: each button is explained on the page where you use it.

| On this page | |
|---|---|
| [Settings](https://edgemodders.ai/wiki/edgehack/settings.html#settings) | Two, both for Generate |
| [Command palette](https://edgemodders.ai/wiki/edgehack/settings.html#command-palette) | Commands you can run by name |
| [In the views](https://edgemodders.ai/wiki/edgehack/settings.html#in-the-views) | Title-bar buttons and right-click actions |
| [On a quickhack's page](https://edgemodders.ai/wiki/edgehack/settings.html#on-a-quickhacks-page) | Its buttons |
| [Where things are kept](https://edgemodders.ai/wiki/edgehack/settings.html#where-things-are-kept) | Files and folders |

## Settings

Open VS Code's settings (`Ctrl+,`) and search for `edgehack`. Both settings are for **Generate**, which draws icons with OpenAI: see [Generating icons](https://edgemodders.ai/wiki/edgehack/editor.html#generating-icons-cost-and-your-openai-key).

| Setting | Default | What it does |
|---|---|---|
| `edgehack.generate.model` | Empty | The OpenAI model Generate uses. Empty means the newest GPT Image model your OpenAI account offers |
| `edgehack.generate.quality` | `medium` | The quality Generate asks for: `low`, `medium`, `high` or `auto`. Higher costs more per image |

EDGEhack has no setting for the game folder or the project. It takes both from [REDcode](https://edgemodders.ai/wiki/redcode/settings.html).

## Command palette

Press `Ctrl+Shift+P` and type `EDGEhack`.

| Command | What it does |
|---|---|
| **EDGEhack: Open a Quickhack...** | Opens a quickhack by its record id, such as `Items.OverheatLvl2Program`. For when you know the id from REDcode or another tool |
| **EDGEhack: Filter** | Narrows the Quickhacks view by words: a name, a category, or part of an id (`overheat`, `control`, `Lvl4`, `camera`) |
| **EDGEhack: Clear the Filter** | Shows every quickhack again. Listed only while a filter is on |
| **EDGEhack: Refresh** | Listed twice. One reads the game's quickhacks again, after a game patch or a mod change. The other reads the Library's folders again |
| **EDGEhack: Clone and Modify on the Desk...** | Starts a new quickhack on the [Desk](https://edgemodders.ai/wiki/edgehack/desk-library.html#the-desk), from one of the game's |
| **EDGEhack: Connect an Assistant (MCP)...** | Connects Claude Code or another assistant: see [Assistants](https://edgemodders.ai/wiki/edgehack/assistants.html#connect-claude-code) |
| **EDGEhack: Set the OpenAI Key...** | Saves or changes the key Generate uses |
| **EDGEhack: Clear the OpenAI Key...** | Forgets the key, after asking. Generate asks for it again next time |

EDGEhack sets no keyboard shortcuts. Add your own in VS Code's Keyboard Shortcuts (`Ctrl+K Ctrl+S`).

## In the views

**The Quickhacks view**

| Where | Action | What it does |
|---|---|---|
| Title bar | **Filter**, or **Clear the Filter** | As above |
| Title bar | **Refresh** | Reads the game's quickhacks again |
| Click a quickhack | | Opens its read-only page, which has **Edit...** and **Clone and Modify...** |
| Right-click a quickhack or a tier | **Clone and Modify...** | Makes a new quickhack from it: in the open project, or on the Desk if none is open |
| Right-click a quickhack, a tier, or a device or vehicle hack | **Open the Record in REDcode** | Shows the raw record in REDcode's TweakDB page |

**The Desk view**

| Where | Action | What it does |
|---|---|---|
| Title bar | **+** (**Clone and Modify on the Desk...**) | A new quickhack on the Desk |
| Title bar, **`...`** menu | **Connect an Assistant (MCP)...** | See [Assistants](https://edgemodders.ai/wiki/edgehack/assistants.html#connect-claude-code) |
| A Desk quickhack | **Add to Project** | Copies it into the open project and writes its mod files |
| A Desk quickhack | **Add to Library** | Keeps a copy in the EDGE Library |
| A new Desk quickhack, right-click | **Duplicate...** | A copy under another name |
| A Desk quickhack | **Remove from the Desk...** (trash can) | To the Recycle Bin, after asking |
| A Project quickhack, right-click | **Add to Library** | Keeps a copy in the EDGE Library |
| A Project quickhack marked newer | **Refresh from Library** | Takes the Library's newer version |
| A Project quickhack | **Remove from Project...** (trash can) | Its document and mod files go to the Recycle Bin, after asking |

**The Library view**

| Where | Action | What it does |
|---|---|---|
| Title bar | **Refresh** | Reads the Library's folders again |
| A quickhack | **Add to Project** | Copies it into the open project and writes its mod files |
| A quickhack, right-click | **Copy to the Desk** | A copy to work on |
| A quickhack, right-click | **Reveal in File Explorer** | Opens its folder |
| A quickhack | **Remove from Library** (trash can) | To the Recycle Bin, after asking |

All of these are explained in [The Desk and the Library](https://edgemodders.ai/wiki/edgehack/desk-library.html).

**In REDcode's TweakDB view**, right-click a record and choose **Open in EDGEhack** to open the quickhack it belongs to. It works on a quickhack's item, on what it does at any tier, and on device and vehicle hacks.

## On a quickhack's page

| Button | Where | What it does |
|---|---|---|
| **Edit...**, **Clone and Modify...** | A game quickhack's read-only page | Start a change, or a new quickhack |
| **Pack and Play** | The top of the editor | Packs the project and installs the mod: [Pack and Play](https://edgemodders.ai/wiki/edgehack/try-live.html#pack-and-play) |
| **Add to Project** | The top, for a Desk or Library quickhack | Copies it into the open project |
| **Try Live**, **Try Again**, **Stop** | The top | [Try Live](https://edgemodders.ai/wiki/edgehack/try-live.html#try-live) |
| **Add a line**, **Remove** | Texts | [Feature lines](https://edgemodders.ai/wiki/edgehack/editor.html#feature-lines) |
| **Change...**, **Upload...**, **Generate...**, **Original**, **Generate All...** | Icons | [Icons](https://edgemodders.ai/wiki/edgehack/editor.html#icons) |
| **Generate**, **Cancel**, **Close**, **Show the Prompt**, **Keep**, **Try Again**, **Keep All** | Generate's panel | [Generating icons](https://edgemodders.ai/wiki/edgehack/editor.html#generating-icons-cost-and-your-openai-key) |
| **All tiers** | Each row of Numbers, and of an added effect | Gives every tier the selected tier's change: [Numbers](https://edgemodders.ai/wiki/edgehack/editor.html#numbers) |
| **Add Effect...**, **Remove** | Added effects | [Added effects](https://edgemodders.ai/wiki/edgehack/editor.html#added-effects) |
| **Sell it there**, **Components to craft it** | Get it | [Get it](https://edgemodders.ai/wiki/edgehack/editor.html#get-it) |
| **Add**, **Open**, **Remove** | Scripts | [Scripts](https://edgemodders.ai/wiki/edgehack/scripts.html#add-one) |

## Where things are kept

| What | Where |
|---|---|
| A project's quickhacks (their documents) | `source\raw\edgehack\<name>.quickhack.json` in the project |
| Their TweakXL files | `source\resources\r6\tweaks\<mod>\` in the project |
| Their scripts | `source\resources\red4ext\plugins\REDnode\apps\<mod>\` in the project |
| The redscript file for new quickhacks | `source\resources\r6\scripts\EDGEhack\NewQuickhacks.reds` in the project |
| The Desk | `%LOCALAPPDATA%\EDGEhack\desk` |
| The EDGE Library | The folder you chose, `Documents\EDGE Library` by default. Its place is noted in `%APPDATA%\EDGE\library.json`, which every EDGE tool reads |
| What a project took from the Library | `source\library.json` in the project |
| Your OpenAI key | REDcode's Keys, encrypted, shared with the other EDGE tools (`%APPDATA%\Edgemodders\keys`). If Windows has an `OPENAI_API_KEY` environment variable, EDGEhack uses that one |
| The server for assistants | `%LOCALAPPDATA%\EDGEhack\server\edgehack-mcp.cjs`, copied there by the extension |
| The log | **View › Output**, then **EDGEhack** in the list |

Nothing is kept in the game folder until you install a mod.
