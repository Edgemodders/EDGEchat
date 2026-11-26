<!-- Copied from EDGEweb's docs/wiki/edgequest/reading.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/reading.html (reviewed 2026-11-13) -->

# Reading the game's quests

Reading a quest you know from playing is the quickest way to learn how the game builds quests. It is also where you find the places, music cues and facts to use in your own. Nothing on this page changes anything: reading is safe.

| On this page | |
|---|---|
| [Game Quests](https://edgemodders.ai/wiki/edgequest/reading.html#game-quests) | The list of every quest, and four words to know |
| [Find Quest](https://edgemodders.ai/wiki/edgequest/reading.html#find-quest) | Search by title, person, place or fact |
| [The quest page](https://edgemodders.ai/wiki/edgequest/reading.html#the-quest-page) | A quest as numbered steps |
| [The scene page](https://edgemodders.ai/wiki/edgequest/reading.html#the-scene-page) | A conversation: lines and choices |
| [Following a quest: the step trail](https://edgemodders.ai/wiki/edgequest/reading.html#following-a-quest-the-step-trail) | Jump from step to step, and back |
| [Try it](https://edgemodders.ai/wiki/edgequest/reading.html#try-it) | Follow one quest from its steps into a conversation |
| [Raw](https://edgemodders.ai/wiki/edgequest/reading.html#raw) | The game's own data, when you want it |
| [Copying a place from a game quest](https://edgemodders.ai/wiki/edgequest/reading.html#copying-a-place-from-a-game-quest) | For your own quest |
| [Things worth looking up](https://edgemodders.ai/wiki/edgequest/reading.html#things-worth-looking-up) | |

## Game Quests

The **Game Quests** view lists every quest, phase and scene in the game: the main game, Phantom Liberty and the open world's gigs. Folders carry their quest's in-game name, so you see "Pyramid Song" instead of only `sq030`.

Click a quest or phase to open its quest page, and a scene to open its scene page. The buttons at the top of the view are **Find Quest** (the magnifier), **Refresh** and **Check Quest Mod** (the checklist).

| Word | What it means |
|---|---|
| Quest | A whole quest, as the journal shows it |
| Phase | A part of a quest: a set of steps and the links between them. Big quests have many phases, some inside others |
| Scene | A conversation or a moment: who is there, the lines, and the choices |
| Fact | A named number the game keeps in your save, to remember what happened ("V met Judy" = 1). Quests set facts, and wait for them |

## Find Quest

**Find Quest...** finds quests and phases by any of these:

- the in-game title, such as `pyramid song`;
- a file name, such as `sq030`;
- a fact, a journal entry, a person or a place.

Type at least two letters. Each result shows a file name, its quest's title, and why it matched. Pick one to open its page.

## The quest page

A quest page shows a quest or phase as **numbered steps in plain words**, in reading order. It looks about like this. The example shows the wording only; the names in it are made up:

```
1   Start                                                        → 2
2   Journal: objective quests/side_quest/example/... becomes active   → 3
3   Wait until V is inside #example_tr_parking                   → 4
4   Play music mus_example_01_START                              → 5
5   Scene example_01_meetup                                      → 6
6   Set fact example_met_contact to 1                            → 7
7   If fact example_took_money is 1                              → 8, → 12
```

The steps tell you:

- what starts the quest or phase;
- what it waits for, such as V arriving somewhere or a fact changing;
- the facts it sets and tests;
- the journal entries it adds and updates. The journal's own words are shown beside them;
- the scenes and phases it plays, as links you can click;
- the music and sound it plays;
- for a step that checks a distance, who and what it measures between.

At the side are lists of everything the quest uses: its **Facts**, its **Journal** entries, its **Scenes**, the **Phases it plays**, and its **People, places, objects**. Names that start with `#` are the game's names for things in the world.

At the top of the page are **Raw** and **Copy path**, which copies the quest file's own path.

(Screenshot on the wiki, "A quest page": The quest page for a side quest such as sq030, Pyramid Song: numbered steps in plain words with arrow links to other steps, and the facts, journal entries, scenes and places listed at the side.)

## The scene page

A scene page shows:

- who is in the scene;
- each line, with its speaker and text;
- each choice, with its options and where each one leads.

Options show their tags as the game does: a lifepath, an attribute check or a price. A yellow option is one the game marks as moving the story on; the others are white.

(Screenshot on the wiki, "A scene page": A scene page from a game quest: the people in the scene at the top, lines with speaker names and subtitles, and a choice whose options show their yellow or white colour and a lifepath or attribute tag.)

## Following a quest: the step trail

A step that leads somewhere has a link, such as **→ 12**. Click it to jump to step 12.

Each jump is added to the **trail**, a row under the page's header that stays in view as you scroll. It lists the steps you followed, in order. To go back:

- click a step in the trail; or
- click **← Step** to go back to the step you clicked from.

If you go back to an earlier step in the trail and follow a different link, the trail is cut back to that step and continues from there. **✕** clears the trail. Each page starts with an empty trail.

This is how you can follow a whole side quest, from its phase through its scenes, without opening a single raw file.

## Try it

Follow Judy's side job from its steps into a conversation.

1. Press **Find Quest**, type `pyramid song`, and pick `sq030.questphase`.
2. Read the first few steps, then click the first **→** link.
3. Find a step that starts with **Scene** and click the scene's name.
4. On the scene page, find a choice and click the **→** link on one of its options.
5. Click **← Step**.

**You should see:**

| After step | What |
|---|---|
| 1 | A page headed `sq030.questphase`, with **Pyramid Song** above it, and numbered steps |
| 2 | The page jumps to the step you followed, and a trail row appears under the header with two step numbers |
| 3 | A scene page: the people in the scene, then lines with their speakers |
| 4 | The page jumps to where that option leads, and the trail shows the jump |
| 5 | You are back at the choice |

## Raw

**Raw** opens the file in REDcode's editor, when you want to see the game's own data. See [Editing files](https://edgemodders.ai/wiki/redcode/editing.html) in the REDcode section. You never need it to make a quest.

## Copying a place from a game quest

A place in your own quest is a map marker the game already has. You name it by its path, and a game quest's page is where you find that path.

1. Open the page of a quest that sends V where you want. **Find Quest** also finds quests by a place's name.
2. At the side of the page, look at the **Journal** list. Rows that start with `map pin` are the quest's map markers. Each has a path such as `quests/minor_quest/mq055_romance_apartment/01_megabuilding/judy_megabuilding/apartment`. The words beside a row say which objective it belongs to.
3. Select the whole path with the mouse and copy it (`Ctrl+C`). There is no button for this yet: **Copy path** at the top copies the quest file's path, which is something else.
4. In your story file, paste it after `marker:` under `places:`. [Change the place](https://edgemodders.ai/wiki/edgequest/first-quest.html#change-the-place) walks through it.

V "arrives" at a place by stepping into a **trigger area**, an invisible box in the world. You usually don't need to copy one: EDGEquest uses the area the game's own quest waits in with that marker. If you want to name one yourself, it is in the game quest's steps, in a line such as "Wait until V is inside `#mq055_tr_megabuilding_apartment`". See [Places](https://edgemodders.ai/wiki/edgequest/story-file.html#places).

Two limits to know:

- **Not every marker works.** EDGEquest can use a marker only if the game ties it to a fixed spot in the world, and V can arrive there only if a game quest waits in an area near it. EDGEquest tells you when you save.
- **Only V's apartment door has been tried in the game.** Other places are untested.

Copying a whole conversation from a game quest into yours is not possible yet. It is coming.

## Things worth looking up

| To find | Look at |
|---|---|
| A map marker for your quest's place | [Copying a place from a game quest](https://edgemodders.ai/wiki/edgequest/reading.html#copying-a-place-from-a-game-quest) |
| A music cue | The steps that start with "Play music" in a quest whose mood you like. See [Music cues](https://edgemodders.ai/wiki/edgequest/music-sound.html#music-cues) |
| A sound | The steps that start with "Play sound" |
| How a choice is staged | The scene page of a conversation you remember |
| How the game uses facts | The **Facts** list at the side of a quest page: it says where each fact is set and where it is tested |
| Why a quest mod misbehaves | [Check Quest Mod](https://edgemodders.ai/wiki/edgequest/checking.html#check-quest-mod) |
