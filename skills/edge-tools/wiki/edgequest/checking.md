<!-- Copied from EDGEweb's docs/wiki/edgequest/checking.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/checking.html (reviewed 2026-11-13) -->

# Checking a quest

EDGEquest checks a quest in three ways:

| Check | What it tells you | When |
|---|---|---|
| **Problems** | What is wrong in your story file, such as a choice that leads to a beat that doesn't exist. A quest with problems is not made | Each time you save. See [What happens when you save](https://edgemodders.ai/wiki/edgequest/writing.html#what-happens-when-you-save) |
| **The checklist** | What is unfinished or still a placeholder in your own quest. The quest plays anyway | Each time you save |
| **Check Quest Mod** | What is broken in a quest mod's game files: yours, or someone else's | When you run it |

| On this page | |
|---|---|
| [The checklist](https://edgemodders.ai/wiki/edgequest/checking.html#the-checklist) | Your quest's to-do list |
| [Check Quest Mod](https://edgemodders.ai/wiki/edgequest/checking.html#check-quest-mod) | Find out why a quest mod doesn't work |
| [Try it](https://edgemodders.ai/wiki/edgequest/checking.html#try-it) | Watch the checker catch a deliberate mistake |

## The checklist

Each story file has a list at its end, under `todo:`. It lists what in the quest is unfinished or still a placeholder, and the EDGE tool that can do each item:

```yaml
todo:
  - do: Voice the 4 lines in the scene at_the_door. Until then they show as text only.
    found: voice/at_the_door
    tool: EDGEwave
```

| Key | What it is |
|---|---|
| `do` | What is left to do, in words |
| `tool` | The EDGE tool that can do it |
| `found` | EDGEquest's own label for an item it found itself. It uses it to find the item again and tick it. Leave it alone; items you write yourself don't have one |
| `done: true` | The item is ticked |

- **It keeps itself up to date.** Each time the quest is made, EDGEquest adds new items, and ticks an item once the thing is done.
- **Your own items stay.** Add a line such as `- Decide what the reward is` under `todo:`, and EDGEquest keeps it as it is. Write `done: true` to tick one, or tick it in the **Checklist** on a beat's page.
- **Open items never stop the quest from playing.** They are reminders, not errors.

Typical items:

| Item | What to do |
|---|---|
| The journal still shows the template's description | Write your own `description:` at the top of the story file |
| Lines have no voice prompt | Fill in **Direction** and **Say** under each line (see [Voice prompts](https://edgemodders.ai/wiki/edgequest/story-file.html#how-a-line-is-spoken)) |
| Lines aren't voiced yet | Nothing, unless you want voice takes. The game shows lines as subtitles for now, so in this preview this item stays open on most quests. That is expected. See [Voices](https://edgemodders.ai/wiki/edgequest/music-sound.html#voices) |
| A sound name EDGEquest doesn't know | Check the spelling, or make the sound with EDGEwave (see [Your own sounds](https://edgemodders.ai/wiki/edgequest/music-sound.html#your-own-sounds)). Until then that sound is silent |

The **Project Quests** view and the status bar show how many items are left. A new quest from the template has three.

## Check Quest Mod

**EDGEquest: Check Quest Mod...** reads a quest mod and names what's wrong, in plain words. Use it when a quest doesn't show, doesn't start, shows a choice without text, or crashes. It only reads: it changes nothing.

Ways to run it:

| To check | Do |
|---|---|
| A mod's `.archive` file | Right-click it in VS Code's Explorer and choose **Check Quest Mod...**. The mod's `.xl` file should be beside it, as it is in the game's `archive\pc\mod` folder |
| A folder inside the folder you have open: a project, or files extracted from a mod | Right-click it in the Explorer and choose **Check Quest Mod...** |
| Any other folder, such as your open project itself | Click the checklist icon at the top of the **Game Quests** view, or run the command, and pick the folder |

The result opens as a page. It starts with what was read and a count, such as `0 errors, 1 warning, 2 notes`, followed by one line per finding:

| A finding starts with | It means |
|---|---|
| **error** | Something that breaks the quest, or can crash the game |
| **warning** | Something that is probably wrong, or will surprise players |
| **info** | A note: worth knowing, nothing to fix |

With nothing to report it says "No problems found."

It checks the mod's files against each other and against the game. Among other things it finds:

| Problem | What it means |
|---|---|
| Missing files, or entries that point nowhere | A journal entry, a scene or a phase the mod names but doesn't have |
| Texts that aren't there | Lines with no subtitle, or leftover texts from a copied scene |
| Lines and options numbered wrongly | A choice that shows no text, and can crash the game when picked |
| A phase nothing starts | Part of the quest that can never run |
| A wait in a trigger area nothing switches on | V can never arrive |
| Map markers at the world's origin | The marker shows far away, often in a strange place |
| Subtitle files nothing loads, or that replace the game's own | Lines with no text, or the game's own lines broken |
| The game's own facts written | The mod changes what the game itself remembers |

On a published quest mod it found every fault already known from studying the mod by hand, and two more that the hand study had missed.

**Your own quest:** the same checks run each time your quest is made, and their errors and warnings go to the Problems panel. A quest made by EDGEquest from a story without problems should come out clean. If it doesn't, please [report it](https://github.com/Edgemodders/EDGEquest/issues).

**Someone else's mod:** the findings tell you what is wrong, not how to fix it in their files. Send them to the mod's author.

(Screenshot on the wiki, "Check Quest Mod": The result of Check Quest Mod on a quest mod's archive: a list of errors, warnings and notes in plain words, each naming the file and what is wrong.)

## Try it

Use the project from [Your first quest](https://edgemodders.ai/wiki/edgequest/first-quest.html).

1. Click the checklist icon at the top of the **Game Quests** view and pick your project's folder, `my_first_quest`.

   **You should see** a result with `0 errors, 0 warnings`. There may be notes.
2. Now break the mod. In the Explorer, open `source\resources` and delete `door_mystery.archive.xl`. That small file tells ArchiveXL the quest exists.
3. Run **Check Quest Mod...** on the project again.

   **You should see** a warning that no `.xl` file was found, so ArchiveXL loads nothing from this mod. That is the reason a quest made this way would never show in the game.
4. Put it right: open the story file and press **Make** on the Storyboard. EDGEquest writes the missing file again. Run the check once more to see it clean.

This Try it was worked out from how the checker is built, and hasn't been run as written. If your result differs, please tell us on [Discord](https://discord.gg/63qP3Erw43).
