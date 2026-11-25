<!-- Copied from EDGEweb's docs/wiki/edgequest/first-quest.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/first-quest.html (reviewed 2026-11-13) -->

# Your first quest

In this walkthrough you make a small quest and play it. The quest sends V home to the apartment in Megabuilding H10. At the door V thinks aloud, and the player picks one of three options. Each option ends the quest in its own way. You write no code and open no game file.

| | |
|---|---|
| **Time** | About 30 minutes |
| **Before you start** | EDGEquest is [installed](https://edgemodders.ai/wiki/edgequest/install.html), and its [Try it](https://edgemodders.ai/wiki/edgequest/install.html#try-it) worked |
| **In the game** | **ArchiveXL** and **RED4ext**, two free framework mods. See [What you need](https://edgemodders.ai/wiki/edgequest/install.html#what-you-need) |
| **A test save** | A save in which V can walk to the apartment in Megabuilding H10. Make it now, **before** you install the quest, and keep it. [Step 8](https://edgemodders.ai/wiki/edgequest/first-quest.html#8-play-it) says why |

| On this page | |
|---|---|
| [1. Make a project](https://edgemodders.ai/wiki/edgequest/first-quest.html#1-make-a-project) | A folder for your mod |
| [2. Start the quest](https://edgemodders.ai/wiki/edgequest/first-quest.html#2-start-the-quest) | New Quest, and what the template holds |
| [3. Change a line and an objective](https://edgemodders.ai/wiki/edgequest/first-quest.html#3-change-a-line-and-an-objective) | Click and type |
| [4. Add an option with its own ending](https://edgemodders.ai/wiki/edgequest/first-quest.html#4-add-an-option-with-its-own-ending) | A third way out |
| [5. Write the description](https://edgemodders.ai/wiki/edgequest/first-quest.html#5-write-the-description) | One line of text |
| [6. Save, and catch a mistake](https://edgemodders.ai/wiki/edgequest/first-quest.html#6-save-and-catch-a-mistake) | Saving makes the quest |
| [7. Pack and install](https://edgemodders.ai/wiki/edgequest/first-quest.html#7-pack-and-install) | One button in REDcode |
| [8. Play it](https://edgemodders.ai/wiki/edgequest/first-quest.html#8-play-it) | What you should see in the game |
| [9. Change it and play again](https://edgemodders.ai/wiki/edgequest/first-quest.html#9-change-it-and-play-again) | The loop from now on |
| [Change the place](https://edgemodders.ai/wiki/edgequest/first-quest.html#change-the-place) | Optional, and untested |
| [What was tested](https://edgemodders.ai/wiki/edgequest/first-quest.html#what-was-tested), [What to try next](https://edgemodders.ai/wiki/edgequest/first-quest.html#what-to-try-next) | |

## 1. Make a project

A **project** is a folder that holds everything your mod is made of. [REDcode](https://edgemodders.ai/wiki/redcode/) makes it. It is the same kind of project WolvenKit uses.

1. Click the REDcode icon in the activity bar, the strip of icons down the left edge of VS Code.
2. In the **Project** view, press **New Project**.
3. Type the name `my_first_quest` and press Enter.
4. Choose where the project's folder goes: anywhere outside the game folder. Press **Create project here**.

**You should see** the Project view showing `my_first_quest` with empty folders under it. [Your first mod with REDcode](https://edgemodders.ai/wiki/redcode/first-mod.html#1-make-a-project) shows this step with more detail.

Use a new project for this. A project that already holds another test quest gives you two quests at the same door: see [Two quests play their scenes at the same place](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#two-quests-play-their-scenes-at-the-same-place).

## 2. Start the quest

1. Click the EDGEquest icon in the activity bar.
2. At the top of the **Project Quests** view, press **New Quest** (the **+**). The command palette has it too, as **EDGEquest: New Quest...**.
3. **The title:** type `Something at the Door` and press Enter. This is the name the journal shows.
4. **The id:** EDGEquest suggests one made from the title. Replace it with `door_mystery` and press Enter. The id is short, in small letters, with `_` between words.
5. The first time only, EDGEquest asks for **your modder name**, also in small letters. It remembers it.

**Choose the id with care.** It becomes part of the quest's file names and of everything the quest remembers in a save. Changing it later makes a different quest.

**You should see:**

| Where | What |
|---|---|
| The editor | The **Storyboard**: three cards joined by arrows. One card says "Go to the place". Arrows labelled **Look around** and **Leave** lead from it to the cards "Look around" and "Think it over", and both of those are marked **quest succeeds** |
| A message | "Something at the Door starts from the template: a place, a scene with a choice and two endings. Its game files are being made" |
| The status bar, bottom left | After a few seconds: **EDGEquest: made**, a time, and how many things are left to do |
| The Project view | A new file at the top of the project, `door_mystery.quest.yaml`. This is the **story file**: your quest in words, and the only file you change |
| Project Quests | Your quest, with its beats and its checklist under it |

Each card is a **beat**: one stage of the quest, titled with the objective the journal shows while it runs. The template has three:

| Beat | What happens in it |
|---|---|
| **Go to the place** | The journal says "Go to the place", with a map marker on V's apartment door. When V gets there, a scene plays: V says "Here it is." and the player picks **Look around** or **Leave** |
| **Look around** | Three seconds pass, then the quest ends as succeeded |
| **Think it over** | Three seconds pass, then the quest ends as succeeded. This is where **Leave** goes |

(Screenshot on the wiki, "The new quest on the Storyboard": The Storyboard just after New Quest: the header with the title Something at the Door and the id door_mystery, three beat cards (Go to the place, Look around, Think it over) with arrows labelled Look around and Leave, and both endings marked quest succeeds.)

## 3. Change a line and an objective

1. Click the card **Go to the place**. Its page opens under the board.
2. Press **Rename** at the top of the page. Type `Go to your apartment` and press Enter. This changes the objective the journal shows.
3. Further down is the scene, named `arrival`. Its first row is V's line, in a box that says `Here it is.` Click in the box, type `Home. Something feels different.` and press Enter.

**You should see** the card's title change to "Go to your apartment", and a dot on the editor's tab. The dot means the story file has changes that aren't saved yet. You save in step 6.

Under the line are two smaller boxes, **Direction** and **Say**. They describe how the line should be spoken, for voicing it later. Leave them for now. [Voice prompts](https://edgemodders.ai/wiki/edgequest/story-file.html#how-a-line-is-spoken) explains them.

## 4. Add an option with its own ending

The choice has two options. You add a third, and a new beat for it to lead to.

1. At the top of the Storyboard, press **+ Beat**. Type the objective `Forget about it` and press Enter.

   **You should see** a fourth card. No arrow leads to it: nothing in the quest goes there yet, so the quest still plays as before.
2. Click the new card. On its page, find the line that starts with **Then**, and pick **the quest fails** from its list.

   **You should see** the card marked **quest fails**. It is now an ending.
3. Click the card **Go to your apartment** again. In the scene, on the row **Choice**, press **+ Option**. Type `Walk away` and press Enter.
4. On the new option's row, find **goes on to** and pick **Forget about it** from its list.

**You should see** a third arrow on the board, labelled **Walk away**, from the first card to "Forget about it". On the page the option is now marked yellow. EDGEquest colours an option yellow when it leads to another beat, which is how the game marks options that move the story on.

To give the option a line of its own, press **+ Line** in the row under it, type `Not today.` and press Enter. V says it after the player picks the option.

(Screenshot on the wiki, "The third option": The page of the beat Go to your apartment: the scene arrival with V's line, and a choice with three options, Look around, Leave and Walk away, the last one set to go on to Forget about it.)

## 5. Write the description

The journal shows a short description under the quest's title. The template's is a placeholder, and the Storyboard has no box for it, so you change it in the text.

1. At the top of the Storyboard, press **Open YAML**. The story file opens as text beside the board. YAML is a plain text format: `key: value` lines, with indentation showing what belongs inside what.
2. Near the top, find the line `description: What the journal says about this quest.`
3. Change it to `description: Go home and see what is different.`

Look through the rest of the file while it is open. Everything you did on the Storyboard is there in words: your beats under `beats:`, and the line and the three options under `scenes:`. The board and the text are two views of the same file. [The story file](https://edgemodders.ai/wiki/edgequest/story-file.html) explains every part.

## 6. Save, and catch a mistake

**Saving makes the quest.** Each time you save the story file, EDGEquest writes the quest's game files into your project and checks them. A change on the Storyboard is not saved until you save.

1. Press `Ctrl+S`.

**You should see** the dot leave the tab, and the status bar say **EDGEquest: made** with the time. Click it to list the game files that were made. You don't need to open them.

Now break something on purpose, to see what a problem looks like.

2. In the YAML text, find the line `- go: look` under the option **Look around**. Change it to `- go: lok` and save.

**You should see:**

| Where | What |
|---|---|
| The status bar | **EDGEquest: 1 problem, not made**, on a warning colour |
| VS Code's Problems panel (click the status bar) | `go: "lok" is not one of the beats`, followed by your beats' names, at its line in the story file |
| The Storyboard | The cards are replaced by a notice with the same problem and a link to its line |

3. Change `lok` back to `look` and save. The board comes back and the status bar says **made** again.

A quest with a problem is not made, so the game files stay as they were at the last good save. Fix problems before you pack.

## 7. Pack and install

The quest is in your project. The game doesn't have it yet.

1. **Quit the game** if it is running.
2. In the activity bar, click the REDcode icon. In the **Project** view's title bar, press **Pack and Install** (the rocket).

REDcode packs the project into a mod and puts it in the game. With [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) installed, the mod goes into EDGEdeck's list and is deployed from there. See [Pack, install and run](https://edgemodders.ai/wiki/redcode/pack-install.html#install).

**You should see** a message from REDcode that the mod was packed and installed.

REDcode's **Pack and Play** (the flame) is no shortcut here. It swaps files into the running game, but a quest is added by ArchiveXL when the game starts. Use **Pack and Install**, then start the game.

## 8. Play it

1. Press **Run Game** (the play triangle) in REDcode's Project view, or start the game your usual way.
2. **Load your test save**: the one you made before you installed the quest.
3. Open the journal. **Something at the Door** is listed, with your description and the objective **Go to your apartment**. Track it.
4. Follow the marker to V's apartment in Megabuilding H10 and walk in through the door.

**You should see:**

| When | What |
|---|---|
| The save has loaded and you track the quest | The objective on the HUD, a map marker at V's apartment door, and a route to it |
| V steps inside the apartment | The subtitle "Home. Something feels different.", then three options: **Look around**, **Leave** and **Walk away** |
| You pick **Look around** | The line "Let's see what's here.", the objective changes to **Look around**, and after three seconds the quest is completed |
| You pick **Walk away** instead | Your line, the objective **Forget about it**, and the quest fails |

There are no voices: in this preview, lines show as subtitles.

To see another ending, load the test save again. **Why the test save matters:** a new quest starts once in each save, the first time that save loads with the mod installed. Saves you make afterwards remember how far the quest got. Your test save, made before the first install, always starts it from the beginning.

(Screenshot on the wiki, "The quest in the game": Cyberpunk 2077 with the new quest's objective in the tracker, its map marker at V's apartment door, and the scene's choice on screen with its three options.)

| If | Do this |
|---|---|
| The quest isn't in the journal | See [The quest doesn't show in the journal](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#the-quest-doesnt-show-in-the-journal) |
| V is at the marker and nothing happens | Walk right in. V arrives by stepping into an invisible area inside the apartment, not by being near the marker. See [V reaches the place and nothing happens](https://edgemodders.ai/wiki/edgequest/troubleshooting.html#v-reaches-the-place-and-nothing-happens) |

## 9. Change it and play again

The loop from now on:

1. Quit the game.
2. Change the quest on the Storyboard, and save.
3. **Pack and Install**.
4. Start the game and load the test save.

To take the quest out of the game, use REDcode's **Uninstall**. To remove it for good, see [Removing a quest](https://edgemodders.ai/wiki/edgequest/writing.html#removing-a-quest).

## Change the place

> **Untested.** Only V's apartment door has been tried in the game. Other places are made the same way, but nobody has seen one work yet. For a first quest, keep the door. If you try another place, please tell us on [Discord](https://discord.gg/63qP3Erw43) what happened.

A place is a map marker the game already has, written as a path. The Storyboard has no picker for places yet, so you copy the path from a game quest and paste it into the text.

1. Find a game quest that sends V where you want, and open its page. [Copying a place from a game quest](https://edgemodders.ai/wiki/edgequest/reading.html#copying-a-place-from-a-game-quest) shows where the marker's path is and how to copy it.
2. On your Storyboard, press **Open YAML** and find the `places:` block near the top:

   ```yaml
   places:
     spot:
       marker: quests/minor_quest/mq055_romance_apartment/01_megabuilding/judy_megabuilding/apartment   # V's apartment door; any game map marker works
       area: "#mq000_tr_vs_apartment"   # V arrives inside this; leave it out to use the marker's own
   ```

3. Replace the path after `marker:` with the one you copied.
4. Delete the whole `area:` line. It names the invisible area inside V's apartment. Without the line, EDGEquest uses the area the game's own quest uses with your new marker.
5. Save.

| The Problems panel says | It means |
|---|---|
| Nothing | EDGEquest found the marker and an area for it. Pack, install and try it |
| The place "is not a game map marker the quest index knows" | The path isn't a marker EDGEquest can use. Check that you copied all of it, or pick another |
| The place "has no trigger area to arrive in" | The game's quests don't wait for V near that marker, so EDGEquest has no area to use. Pick another marker. See [Places](https://edgemodders.ai/wiki/edgequest/story-file.html#places) |

## What was tested

EDGEquest's developer tested the parts of this walkthrough, but not the walkthrough as one run. From EDGEquest's [test record](https://edgemodders.github.io/EDGEquest/testing.html):

| Part | Seen working |
|---|---|
| New Quest, the Storyboard, edits, saving, a deliberate bad `go:` in the Problems panel | Yes, in VS Code |
| A quest made from the template, played from the marker to its end | Yes, in the game |
| A choice that leads to different endings, one succeeded and one failed | Yes, in the game |
| A choice with more than two options | Yes, in the game |
| This exact quest, with these edits | Not on record |
| A place other than V's apartment door | No |
| Whether an early save, from before V has the apartment, can reach the door | Not on record |

If a step doesn't match what you see, please tell us on [Discord](https://discord.gg/63qP3Erw43).

## What to try next

- Give an option a condition, such as a Body check or a price: [Kinds of options](https://edgemodders.ai/wiki/edgequest/story-file.html#kinds-of-options).
- Start music when V arrives, and stop it in every ending: [Music and sound](https://edgemodders.ai/wiki/edgequest/music-sound.html#try-it).
- Read how the game stages a conversation you remember: [Reading the game's quests](https://edgemodders.ai/wiki/edgequest/reading.html).
- Ask Claude to write the next quest: [For assistants](https://edgemodders.ai/wiki/edgequest/assistants.html).
