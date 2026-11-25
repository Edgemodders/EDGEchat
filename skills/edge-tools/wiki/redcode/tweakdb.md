<!-- Copied from EDGEweb's docs/wiki/redcode/tweakdb.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redcode/tweakdb.html (reviewed 2026-11-13) -->

# TweakDB and tweaks

**TweakDB** is the game's database: every item, weapon, vehicle, character and many settings is a **record**, such as `Items.Preset_Dian_Yinglong`, made of named values called **flats**: its price, its damage, its display name, the records it points to. Mods change TweakDB with [TweakXL](https://edgemodders.ai/wiki/glossary.html#game-and-modding-terms) **tweak files**, small text files in YAML or the game's own `.tweak` format.

REDcode lets you look up any record, follow its links, and start a tweak from it in one click.

| On this page | |
|---|---|
| [The TweakDB view](https://edgemodders.ai/wiki/redcode/tweakdb.html#the-tweakdb-view) | Browse and find records |
| [The record page](https://edgemodders.ai/wiki/redcode/tweakdb.html#the-record-page) | Every value of a record, with links |
| [New Tweak from This Record](https://edgemodders.ai/wiki/redcode/tweakdb.html#new-tweak-from-this-record) | REDcode writes the file for you, and [what it looks like](https://edgemodders.ai/wiki/redcode/tweakdb.html#what-the-file-looks-like) |
| [Try it: change a price](https://edgemodders.ai/wiki/redcode/tweakdb.html#try-it-change-a-price) | A three-line tweak, into the game |
| [Hover in tweak files](https://edgemodders.ai/wiki/redcode/tweakdb.html#hover-in-tweak-files), [Writing `.tweak` files](https://edgemodders.ai/wiki/redcode/tweakdb.html#writing-tweak-files) | Help while you type |

## The TweakDB view

The **TweakDB** view in the REDcode sidebar lists the record types, such as `Clothing`, with how many records each has. Open a type to see its records, grouped by the first part of their path when there are many.

- The **first use loads TweakDB**, which takes about 12 seconds. The view says so while it loads. After that, lookups are quick.
- **Filter TweakDB**, the funnel, finds records by words of their path, for example `quadra type66`. **Clear TweakDB Filter** goes back to the types.
- **Open TweakDB Record...**, the magnifier, searches as you type and opens the record you pick. It's in the command palette too.
- Click a record to open its **record page**. Hover buttons on a record: **Copy Record Path** and **New Tweak from This Record...**.

Records are found by their path, not by the name you see in the game. [Finding what you want to change](https://edgemodders.ai/wiki/redcode/finding.html#from-a-name-to-its-record) has tips.

Another EDGE tool can claim the records it is made for, as [EDGEhack](https://edgemodders.ai/wiki/edgehack/) does for quickhacks: a click on such a record then opens it in that tool. **Open TweakDB Record...** in the right-click menu still opens REDcode's own page, and **Open In...** lists every tool that can open the record.

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

**New Tweak from This Record...**, on the record page or on a record in the view, writes a TweakXL YAML file into your project. It needs a project open. It asks how:

| Choice | Means | Then |
|---|---|---|
| **Change this record** | Changes the record itself. Everything in the game that uses it sees the change | Writes the file |
| **Clone as a new record** | A new record that starts as a copy of this one, for a new item. The original is untouched | Asks for the new record's path, and suggests one with your mod's name in it, such as `Items.my_jacket_Preset_Dian_Yinglong` |

The file goes under your project's `source/resources/r6/tweaks/<mod name>/`, opens in the editor, and is selected in the Project view under **Resources**. When you [pack](https://edgemodders.ai/wiki/redcode/pack-install.html), it goes to the game's `r6/tweaks` folder, where TweakXL loads it when the game starts.

Your mod needs TweakXL installed in the game, like any tweak mod; [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/frameworks.html) manages it as a framework.

### What the file looks like

This is the file REDcode writes for **Change this record** on `Price.CasualShoes`, a small record that multiplies the price of casual shoes:

```yaml
# Changes to Price.CasualShoes (ConstantStatModifier), written by REDcode.
# Uncomment the flats to change. TweakXL loads this file from r6/tweaks when the game starts.

Price.CasualShoes:
  # value: 1
  # modifierType: Multiplier
  # statType: BaseStats.Price
```

A line that starts with `#` is a **comment**: a note for people, which TweakXL skips. REDcode lists every flat with its current value, but as comments ("commented out"), so the file changes nothing until you choose what to change.

To change a flat, remove the `#` and the space after it from its line, and type the new value. Keep the two spaces at the start of the line: YAML uses them to know the line belongs to the record. `Ctrl+/` adds or removes the `#` for you.

```yaml
Price.CasualShoes:
  value: 3
  # modifierType: Multiplier
  # statType: BaseStats.Price
```

Leave the other lines as comments, or delete them. For **Clone as a new record**, the file starts with the new record's path and a line `$base:` naming the original, then the same commented list.

To try a cloned item in the game, give it to V by its record path: with REDnode, type `addItem("Items.my_jacket_Preset_Dian_Yinglong")` in [REDnode's Console](https://edgemodders.ai/wiki/rednode/overlay.html#the-console).

(Screenshot on the wiki, "A new tweak": The YAML file New Tweak from This Record wrote, open in the editor with its flats commented out, and the file selected in the Project view under Resources.)

## Try it: change a price

This makes every pair of casual shoes three times as expensive. You need a project open, and TweakXL in the game.

1. In the TweakDB view, press **Open TweakDB Record...** (the magnifier), type `price casualshoes` and pick `Price.CasualShoes`.
2. On the record page, press **New Tweak from This Record...** and choose **Change this record**.
3. In the file that opens, change `  # value: 1` to `  value: 3`, as shown above. Save with `Ctrl+S`.
4. Close the game if it's running, and press **Pack and Install** (the rocket) in the Project view.
5. Press **Run Game**, load a save, and look at the price of casual shoes: at a clothing shop, or on a pair V owns, such as the Sunny Ammo synthetic high-tops.

| After | You should see |
|---|---|
| Step 1 | The record page with three flats: `value`, `modifierType` and `statType` |
| Step 2 | `CasualShoes.yaml` open in the editor, and selected under **Resources** in the Project view |
| Step 4 | Under **Packed**, `r6\tweaks\<mod name>\CasualShoes.yaml`. The mod installed |
| Step 5 | Casual shoes cost three times as much |

Steps 1 to 4 are tested. The price in the game was not checked in REDcode's own tests: if it doesn't change, see [My mod doesn't show in the game](https://edgemodders.ai/wiki/redcode/troubleshooting.html#pack-install-and-the-game), and tell us. To undo it, **Uninstall** from the Project view's **`...`** menu.

## Hover in tweak files

In a `.yaml` or `.tweak` file, hover over a record path to see its type and main flats, with a link to its record page. It works once TweakDB is loaded: open the TweakDB view once in a session. Hovering never starts the 12-second load by itself.

## Writing `.tweak` files

TweakXL reads two formats. **YAML** is what New Tweak writes, and the one to start with. The **`.tweak`** format is the game's own, for people who prefer it. REDcode knows it:

- syntax colours, bracket matching, and `Ctrl+/` to comment lines in and out;
- snippets for the common blocks: `package`, `record`, `clone`, `edit`, `flat`, `fk` (a link to another record), `append`, `remove`, `inline` and `lockey`. Type one and press `Tab`.

The format follows the RED format on the [TweakXL wiki](https://github.com/psiberx/cp2077-tweak-xl/wiki/RED-Tweaks). YAML tweaks use VS Code's built-in YAML support.

Tweak files must sit under `r6/tweaks` in your project's Resources, or TweakXL won't read them. Pack warns about one that sits anywhere else. REDcode packs `.tweak` files there too, which WolvenKit leaves out: see [WolvenKit](https://edgemodders.ai/wiki/redcode/other-tools.html#wolvenkit).

## For assistants

An AI assistant connected through `redcode-mcp` can read TweakDB too: list types and records, read a record or a single flat, and search by words. See [Assistants and MCP](https://edgemodders.ai/wiki/redcode/assistants.html).
