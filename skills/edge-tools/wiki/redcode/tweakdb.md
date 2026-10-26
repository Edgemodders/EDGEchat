<!-- Copied from EDGEweb's docs/wiki/redcode/tweakdb.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/tweakdb.html (reviewed 2026-10-24) -->

# TweakDB and tweaks

**TweakDB** is the game's database: every item, weapon, vehicle, character and many settings is a **record**, such as `Items.Preset_Yinglong_Default`, made of named values called **flats**: its price, its damage, its display name, the records it points to. Mods change TweakDB with [TweakXL](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms) tweak files, small text files in YAML or the game's own `.tweak` format.

REDcode lets you look up any record, follow its links, and start a tweak from it in one click.

## The TweakDB view

The **TweakDB** view in the REDcode sidebar lists the record types, such as `Clothing`, with how many records each has. Open a type to see its records, grouped by the first part of their path when there are many.

- The **first use loads TweakDB**, which takes about 12 seconds. The view says so while it loads. After that, lookups are quick.
- **Filter TweakDB**, the filter button, finds records by words of their path, for example `quadra type66`. **Clear TweakDB Filter** goes back to the types.
- **Open TweakDB Record...**, the magnifier, searches as you type and opens the record you pick. It's in the command palette too.
- Click a record to open its **record page**.

REDcode reads TweakDB **as the game ships it**, from the game's files, without any mods. To see what a mod changes in the running game, use [REDnode](https://edgemodders.ai/wiki/rednode/)'s live TweakDB reads, from a REDnode app or an assistant connected to REDnode. They aren't part of REDcode.

(Screenshot on the wiki, "The TweakDB view": The TweakDB view with record types and their counts, one type expanded to its records grouped by path, and the hover buttons on a record.)

## The record page

The record page shows every flat of a record, with its type and value.

- **Record links** open the record they name. **Back** and **Forward** (`Alt+Left`, `Alt+Right`) step through the records you opened.
- **LocKeys** (references to the game's text, `LocKey#...`) show the text they stand for.
- **Resource paths** open the game file they point to.
- Click a flat's **name** to copy its full path, such as `Items.money.quality`.
- The **filter box** narrows the flats by name or value.

(Screenshot on the wiki, "The record page": A weapon record open on its record page: flats with types and values, a record link, a LocKey with its text, and the filter box.)

## New Tweak from This Record

**New Tweak from This Record...**, on the record page or on a record in the view, writes a TweakXL YAML file into your project. It asks how:

| Choice | Means |
|---|---|
| **Clone as a new record** | A new record based on this one (`$base`), for a new item that starts as a copy. The original is untouched |
| **Change this record** | Changes the record itself. Everything in the game that uses it sees the change |

The file goes under your project's `source/resources/r6/tweaks/<mod name>/`, and REDcode shows it in the Project view. Every flat is listed with its current value, **commented out**: uncomment the lines you want to change and edit their values. When you [pack](https://edgemodders.ai/wiki/redcode/pack-install.html), the file goes to the game's `r6/tweaks` folder, where TweakXL loads it.

It needs a project open. Your mod also needs TweakXL installed in the game, like any tweak mod; [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/frameworks.html) manages it as a framework.

(Screenshot on the wiki, "A new tweak": The YAML file New Tweak from This Record wrote, open in the editor with its flats commented out, and the file selected in the Project view under Resources.)

## Hover in tweak files

In a `.yaml` or `.tweak` file, hover over a record path to see its type and main flats, with a link to its record page. It works once TweakDB is loaded; hovering never starts the 12-second load by itself.

## Writing `.tweak` files

REDcode knows TweakXL's own `.tweak` format:

- syntax colours, bracket matching, and `Ctrl+/` to comment lines in and out;
- snippets for the common blocks: `package`, `record`, `clone`, `edit`, `flat`, `fk`, `append`, `remove`, `inline` and `lockey`. Type one and press `Tab`.

The format follows the RED format on the [TweakXL wiki](https://github.com/psiberx/cp2077-tweak-xl/wiki/RED-Tweaks). YAML tweaks use VS Code's built-in YAML support.

One difference from WolvenKit: REDcode **packs `.tweak` files** in `r6/tweaks`, where WolvenKit leaves them out. A `.tweak` file anywhere else is left out and reported, because TweakXL wouldn't read it there.

## For assistants

An AI assistant connected through `redcode-mcp` can read TweakDB too: list types and records, read a record or a single flat, and search by words. See [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html).
