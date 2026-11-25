<!-- Copied from EDGEweb's docs/wiki/edgequest/story-file.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/story-file.html (reviewed 2026-11-13) -->

# The story file

A quest in EDGEquest is one file in your project: `<id>.quest.yaml`, the **story file**. It's written in YAML, a plain text format: `key: value` lines, with indentation for what belongs inside what, and `#` for a comment. The [Storyboard](https://edgemodders.ai/wiki/edgequest/writing.html#the-storyboard) edits this file for you, so you rarely have to type it. This page explains what the file holds, so you know what the Storyboard is doing and can edit the text when you'd rather.

This is a page for looking things up. To learn by doing, follow [Your first quest](https://edgemodders.ai/wiki/edgequest/first-quest.html). EDGEquest's own docs have the same reference in [developer form](https://edgemodders.github.io/EDGEquest/story.html).

| On this page | |
|---|---|
| [A whole quest](https://edgemodders.ai/wiki/edgequest/story-file.html#a-whole-quest) | One example, and what it does |
| [The quest](https://edgemodders.ai/wiki/edgequest/story-file.html#the-quest) | Title, id, author, type, description |
| [Places](https://edgemodders.ai/wiki/edgequest/story-file.html#places) | Map markers and trigger areas |
| [Beats](https://edgemodders.ai/wiki/edgequest/story-file.html#beats) and [Steps](https://edgemodders.ai/wiki/edgequest/story-file.html#steps) | The stages of the quest, and what happens in each |
| [Scenes](https://edgemodders.ai/wiki/edgequest/story-file.html#scenes) | Lines, choices and sounds |
| [How a line is spoken](https://edgemodders.ai/wiki/edgequest/story-file.html#how-a-line-is-spoken) | Voice prompts |
| [Choices](https://edgemodders.ai/wiki/edgequest/story-file.html#choices) and [Kinds of options](https://edgemodders.ai/wiki/edgequest/story-file.html#kinds-of-options) | Yellow and white, lifepaths, checks, payments |
| [Facts](https://edgemodders.ai/wiki/edgequest/story-file.html#facts) | What they are, and what they are for today |
| [The checklist](https://edgemodders.ai/wiki/edgequest/story-file.html#the-checklist) | |
| [What saving makes](https://edgemodders.ai/wiki/edgequest/story-file.html#what-saving-makes) | The game files, and where they are |

## A whole quest

```yaml
quest: Something at the Door      # the title the journal shows
id: door_mystery                   # used in file names and fact names
author: yourname                   # your modder name
type: side                         # side or minor
description: Go home and see what happens.

places:
  home:
    # the game's map marker on V's apartment door, in Megabuilding H10
    marker: quests/minor_quest/mq055_romance_apartment/01_megabuilding/judy_megabuilding/apartment
    # the invisible area inside V's apartment
    area: "#mq000_tr_vs_apartment"

beats:
  go_home:
    objective: Go to your apartment
    marker: home
    steps:
      - arrive: home
  at_home:
    objective: You're home
    steps:
      - scene: at_the_door
  look_closer:
    objective: Look at the door
    steps:
      - done
  go_inside:
    objective: Get some rest
    steps:
      - failed

scenes:
  at_the_door:
    - V: Home. Something feels different.
    - choice:
        Look closer:
          - go: look_closer
        Go inside:
          - go: go_inside
```

In words: the quest starts when a save loads. The journal says "Go to your apartment", with a map marker on V's door. When V gets there, the objective changes to "You're home", V says a line and the player picks an option. "Look closer" ends the quest as succeeded; "Go inside" ends it as failed.

The marker's path has another quest's name in it (`mq055_romance_apartment`, with a folder called `judy_megabuilding`). That is only where the game keeps this marker. It stands on V's own apartment door.

## The quest

The lines at the top describe the quest itself. The Storyboard shows them in its header but can't change them: edit them here.

| Key | What it is |
|---|---|
| `quest` | The title the journal shows |
| `id` | Small letters, digits and `_`, starting with a letter. It is used in the quest's file names, and is put in front of the name of every fact the quest sets (see [Facts](https://edgemodders.ai/wiki/edgequest/story-file.html#facts)). Keep it unique: two quests with the same id overwrite each other. Don't change it once the quest has been played: with a new id it is a different quest |
| `author` | Your modder name, using the same characters as `id`. The quest's files go in a folder named after it (see [What saving makes](https://edgemodders.ai/wiki/edgequest/story-file.html#what-saving-makes)) |
| `type` | `side` or `minor`: which kind of quest the journal files it as. `side` is a side job, and is what the template uses. `minor` is the game's kind for its smaller quests; it has not been tried in the game yet |
| `description` | The text the journal shows under the title |

**How a quest starts.** Every quest starts by itself when the player loads a save, once in each save. The first beat begins at once. Nothing in a story file can change that in this preview; other ways to start a quest are planned.

## Places

A place is a **map marker the game already has**: the icon on the map and minimap that an objective points at. You name the place under `places:` and use that name in the beats.

| Key | What it is |
|---|---|
| `marker` | The marker's path, as the game's journal names it. [Copying a place from a game quest](https://edgemodders.ai/wiki/edgequest/reading.html#copying-a-place-from-a-game-quest) shows where to find one |
| `area` | Optional: the trigger area V must step into, in quotes because it starts with `#` (`"#mq000_tr_vs_apartment"`). Leave it out and EDGEquest uses the area the game's own quest uses with that marker |

A **trigger area** is an invisible box in the world. The game notices when V steps into it. V arrives at a place when V is **inside its trigger area**, as in the game's own quests, never by being near the marker.

EDGEquest knows 4,394 of the game's markers and its 10,795 quest trigger areas. When you save, it tells you if it can't use the place:

| The Problems panel says | It means |
|---|---|
| The place "is not a game map marker the quest index knows" | The path is wrong, or the game doesn't tie that marker to a fixed spot in the world |
| The place "has no trigger area to arrive in" | No game quest waits for V near that marker. Give the place an `area:` yourself, or pick another marker |
| The place has `at:`, "which the game cannot use yet" | A place can't be a bare position. It needs a `marker:` |

Only V's apartment door has been tried in the game so far. Other markers are made the same way.

## Beats

Under `beats:` the quest is a list of beats, in order. A beat is one stage of the quest, with the objective the journal shows while it runs. The first beat starts the quest. Each beat has a name (small letters, digits and `_`) and these keys:

| Key | What it is |
|---|---|
| `objective` | The objective the journal shows while the beat runs. It is also the card's title on the Storyboard |
| `marker` | Optional: a place whose map marker the objective shows |
| `steps` | What happens, in order (below) |
| `next` | Optional: the beat that follows. Without it, the next beat in the list follows. `next: none` means nothing follows: the quest stops there and stays open in the player's journal, with that objective showing. Use it only while a quest is unfinished |

### Steps

| Step | What it does |
|---|---|
| `arrive: <place>` | Waits until V is inside the place's trigger area |
| `scene: <scene>` | Plays one of the story's scenes, and waits until it ends |
| `wait: <seconds>` | Waits that long |
| `set: <fact>` | Sets a fact (see [Facts](https://edgemodders.ai/wiki/edgequest/story-file.html#facts)) |
| `music: <cue>` | Starts or stops a music cue (see [Music and sound](https://edgemodders.ai/wiki/edgequest/music-sound.html)) |
| `sound: <event>` | Plays a sound where V is |
| `done` | Ends the quest, succeeded. Last in its beat |
| `failed` | Ends the quest, failed. Last in its beat |

A beat that ends with `done` or `failed` is an **ending**. A quest can have several, and branches can join again before them. You never build the branching yourself: EDGEquest builds it from the choices.

## Scenes

Scenes are listed under `scenes:` by name. A scene is a conversation or a moment: a list of items, played in order. A scene plays when a beat has a `scene:` step that names it. A scene no beat plays is reported as a problem.

| Item | What it is |
|---|---|
| `V: <text>` | A line V says. It shows as a subtitle |
| `choice:` | Options the player picks from (see [Choices](https://edgemodders.ai/wiki/edgequest/story-file.html#choices)) |
| `set: <fact>` | Sets a fact at this point |
| `sound: <event>` | Plays a sound where V is, between lines |
| `go: <beat>` | Ends the scene and sends the quest to that beat. Always last in its list |

In this preview, **V is alone in scenes**: V is the only speaker, and lines play as subtitles only. People standing in a scene, phone calls and voiced lines are coming.

### How a line is spoken

A line can carry a **voice prompt**: a note on how it should be spoken. It is for making a voice take of the line with [EDGEwave](https://edgemodders.ai/wiki/edgewave/), the EDGE sound studio. On the Storyboard these are the **Direction** and **Say** boxes under each line.

```yaml
    - V: Here it is.
      voice:
        direction: Quiet and a little unsure, thinking aloud.
        say: "[quietly] Here it is."
```

| Key | What it is |
|---|---|
| `direction` | The delivery in plain words, for a voice actor or a text-to-speech service |
| `say` | The line as it is spoken, with delivery tags in square brackets, such as `[softly]` or `[sighs]`. Leave it out and the line's own words are spoken |
| `id` | Added by EDGEquest when it makes the quest. EDGEquest uses it to match a voice take to its line, so don't change or copy it |

A voice prompt changes nothing in the game today. See [Voices](https://edgemodders.ai/wiki/edgequest/music-sound.html#voices) for what voicing a line does and doesn't do yet.

## Choices

A choice is a list of options. Each option has the text the player sees, and what happens when it's picked. The short form lists those items right under the option:

```yaml
    - choice:
        Look closer:
          - V: Huh. Same as ever.
          - go: look_closer
```

The long form gives the option a **kind**, with its items under `then:`:

```yaml
        Pay the doorman:
          pay: 500
          then:
            - V: Keep the change.
            - go: look_closer
```

An option with nothing after it (`then: []`) ends the scene, and the beat carries on with its next step.

### Kinds of options

| Key | What it does | In the game |
|---|---|---|
| `main: yes` or `main: no` | Makes the option's text yellow or white | Yellow or white |
| `lifepath: corpo`, `nomad` or `streetkid` | Only a V with that lifepath sees the option | The lifepath's tag in front of it |
| `check: { body: hard }` | V needs that attribute at that level. Attributes: `body`, `intelligence`, `reflexes`, `tech` (Technical Ability), `cool`. Levels: `easy`, `medium`, `hard`, `impossible` | The attribute's tag, with V's value |
| `pay: 500` or `pay: medium` | V pays on picking it: that many eddies, or a price that grows with V's level | The price's tag. Locked when V has too little; picking it takes the money |

**Yellow and white.** If you leave `main` out, EDGEquest decides: an option that leads to another beat or sets a fact is yellow, which is how the game marks options that move the story on. Other options are white.

**One condition per option.** An option can have a lifepath, a check or a payment, but only one of them. `main` can be added to any option. Every choice must keep at least one option with no condition, so no V is ever stuck.

**How a check shows.** When V passes, the tag shows V's value and the option can be picked. When V fails, the tag shows V's value over the number needed (`15 / 20`), and the option is dimmed and locked. That is how the game shows a failed check in a conversation; the all-red prompt you may know is for objects, such as forcing a door.

**Checks grow with V's level.** At a high level, `hard` can ask for 20, the top of the scale. For a check most players can pass, use `easy` or `medium`.

(Screenshot on the wiki, "Kinds of options in the game": A choice in the game with five options: a yellow one, a white one, one with the Corpo lifepath tag, a dimmed Body check showing 15 / 20, and one with a 500 eddies price tag.)

## Facts

A fact is a named number the game keeps in the save. The game's quests use facts to remember what happened, such as whether V took the money.

| Written | What it does |
|---|---|
| `set: looked` | Sets the quest's fact `looked` to 1 |
| `set: { fact: looked, to: 2 }` | Sets it to 2 |
| `set: { fact: visits, add: 1 }` | Adds 1 to it |

A fact you name belongs to your quest: EDGEquest puts the quest's id in front (`door_mystery_looked`), so two quests never share one by mistake.

**What a fact is for today.** In this preview a story file can set a fact but can't test one: there is no "if" on a beat, a step or an option. To make the quest go different ways, use a choice with `go:`. A fact you set is still useful in three ways:

| Use | How |
|---|---|
| It marks an option as important | An option that sets a fact shows yellow |
| Other mods can read it | A [REDnode](https://edgemodders.ai/wiki/rednode/more-apis.html) mod, or an assistant connected to the game, can read and watch facts, and so react to what the player did in your quest |
| It is ready for later | Testing a fact in a story file is planned |

To set one of the game's own facts, write `game:` in front (`set: game:some_fact`). Take care with those: they change what the game itself remembers, and [Check Quest Mod](https://edgemodders.ai/wiki/edgequest/checking.html#check-quest-mod) warns about them.

## The checklist

Under `todo:` at the end, EDGEquest keeps a list of what is unfinished or still a placeholder, such as lines with no voice yet. See [Checking a quest](https://edgemodders.ai/wiki/edgequest/checking.html#the-checklist).

## What saving makes

Saving the story file makes these files in your project. In REDcode's Project view the first four are under **Archive**, and the last under **Resources**.

| File in the project | What it is |
|---|---|
| `source\archive\mod\<author>\<id>\<id>.questphase` | The quest's steps, in the game's own form |
| `source\archive\mod\<author>\<id>\<id>.journal` | The journal entry: title, description, objectives and map markers |
| `source\archive\mod\<author>\<id>\scenes\<scene>.scene` | Each scene |
| `source\archive\mod\<author>\<id>\loc\en-us\...` | The texts: subtitles and on-screen texts, in English |
| `source\resources\<id>.archive.xl` | Tells ArchiveXL to add the quest to the game |

You don't need to open any of these. **Made Files** lists them, and opens the phase or a scene in plain words: see [What happens when you save](https://edgemodders.ai/wiki/edgequest/writing.html#what-happens-when-you-save).

EDGEquest also keeps a small list of the files it made, in `.edgequest\<id>.made.json`. That is how it knows when you changed one by hand.
