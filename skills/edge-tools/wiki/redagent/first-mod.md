<!-- Copied from EDGEweb's docs/wiki/redagent/first-mod.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/redagent/first-mod.html (reviewed 2026-11-13) -->

# Your first mod with REDagent

In this walkthrough you ask REDagent for a mod that warns you when V's health is low. You won't write any code. By the end you'll know how to approve what REDagent writes, test it, change it, undo it and switch it off.

| | |
|---|---|
| **Time** | About ten minutes |
| **Cost** | Well under a dollar of your Anthropic credit. In REDagent's own test, a chat of eight questions that built this mod and fixed another cost $0.50 |
| **Before you start** | REDagent is [installed and set up](https://edgemodders.ai/wiki/redagent/install.html), and answered a first question |

## Talking to REDagent while you play

Press **F10**. A mouse cursor appears, and REDagent's window shows on the right of the game. Click in the box at the bottom of the window and type, and press **Enter** to send. Press **Esc** to go back to playing. The window hides while you play and comes back with F10; REDagent keeps working meanwhile.

Careful with **F9**, the key beside F10: it is the game's Quick Load.

## 1. Ask for the mod

Load a save, press **F10**, and type:

> Make a mod that shows a warning on the HUD when V's health is below 30%.

"On the HUD" matters: it asks for a warning that stays on screen while you play. A mod's ordinary windows show only after you press F10.

The last line of the chat says **WORKING...** while REDagent looks up how the game reports V's health and plans the mod. This can take a minute.

## 2. Approve its files

A mod is a folder with a few small files. Before REDagent creates each one, the chat shows a **change card** and the last line turns to **WAITING FOR YOU...**. The card shows the file's name and the lines REDagent wants to write, in green.

(Screenshot on the wiki, "A change card": The REDagent chat with a change card for a new file: the file's name and folder at the top, its lines in green, and the three buttons Allow, Allow all in this chat and Deny.)

| Button | What happens |
|---|---|
| **Allow** | This one change is made |
| **Allow all in this chat** | This change and every later one in this chat are made without asking. A new chat asks again |
| **Deny** | Nothing changes, and REDagent asks what you want instead |

You don't need to read the code. Check that the file is going into a new folder named after your mod, then press **Allow**. Expect two or three cards for a mod this small. Nothing is lost if you allow something you didn't want: every change can be undone in step 5.

## 3. Watch it check its work

REDnode starts the new mod about two seconds after its files exist. There is no restart. REDagent then reads the mod's log to see that it started without errors, and fixes what failed, with a new change card for each fix.

When it's done, its answer says what it built, with the cost under it.

## 4. Test it in the game

Press **Esc** to play, and let an enemy hurt V until health is under 30%. Or ask REDagent to do it:

> Lower V's health to 20% so I can test the warning.

REDagent asks your permission first, with a card, because this changes your game.

The warning shows on screen. What it looks like and where it sits is REDagent's choice, so yours may differ from someone else's.

(Screenshot on the wiki, "The warning in the game": Gameplay with V's health low and the new mod's warning on screen, with the REDagent window on the right showing the files it created.)

| If | Do this |
|---|---|
| The warning shows only after you press F10 | REDagent built it as a window. Ask: "Make the warning a HUD widget, so it shows while I play." |
| Nothing shows at all | Tell REDagent what you see, in plain words: "The warning doesn't show when my health is low." It reads the mod's log, finds the fault and fixes it |

## 5. Change it or undo it

Ask for changes the same way:

> Make the warning red and put it at the top of the screen.

Every change REDagent made is listed in the chat with an **Undo** button. The strip above the input box counts this chat's changes, and **Show** lists them all in one place.

| Undo on | Does this |
|---|---|
| A file REDagent changed | Puts the file back as it was |
| A file REDagent created | Removes the file, and its folder if that leaves it empty |

To remove the whole mod, undo each file it created. REDagent is told what you undid when you next ask it something.

## 6. Keep it, switch it off, or remove it

Your mod is now a mod like any other that REDnode runs. It starts with the game, with or without REDagent.

| To | Do this |
|---|---|
| Find it | Press **F10**, open the launcher and switch on **Mod Manager**. Your mod is in the table, with a **NEW** badge |
| Switch it off or on | Select it in the Mod Manager and use its switch. See [The Mod Manager](https://edgemodders.ai/wiki/rednode/mod-manager.html) |
| Remove it for good | Undo its files in REDagent, or delete its folder in `red4ext\plugins\REDnode\apps` in the game folder |
| See its files | Open that folder. To learn what the files are, see [Making mods and apps](https://edgemodders.ai/wiki/rednode/making-mods.html) |

## What to try next

Each of these is one request. Start a new chat (**New**, in the window's footer) when you change topic: long chats cost more per answer.

| Try | You'll see |
|---|---|
| "How many eddies does V have?" | REDagent reading the running game |
| "Make a window that shows V's money and level." | A mod with a window of its own |
| "Show a clock in the corner of the HUD." | A HUD widget: a piece of screen that stays up while you play |
| "What's on my screen?" | REDagent taking a picture of the game and describing it |
| "Why did my mod stop working?" | REDagent reading a log and explaining an error |

More ideas, and everything in the window: [Using REDagent](https://edgemodders.ai/wiki/redagent/using.html).
