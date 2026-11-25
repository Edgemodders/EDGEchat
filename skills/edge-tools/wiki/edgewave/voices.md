<!-- Copied from EDGEweb's docs/wiki/edgewave/voices.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgewave/voices.html (reviewed 2026-11-22) -->

# Voice tools

Three buttons in EDGEwave's editor make new sound instead of editing old sound: **Generate Sound** makes a sound effect from a description, **Speak Line** speaks a line of text in a voice, and **Re-Voice** gives an existing line another voice. They work through [ElevenLabs](https://elevenlabs.io), an AI sound service, with your own account there.

They are optional. Everything else in EDGEwave works without an account.

| On this page | |
|---|---|
| [Cost, privacy and your key](https://edgemodders.ai/wiki/edgewave/voices.html#cost-privacy-and-your-key) | Who pays, what is sent, where the key lives |
| [Your key](https://edgemodders.ai/wiki/edgewave/voices.html#your-key) | Getting one and setting it |
| [Where the buttons are](https://edgemodders.ai/wiki/edgewave/voices.html#where-the-buttons-are) | And why Re-Voice is sometimes missing |
| [Generate Sound](https://edgemodders.ai/wiki/edgewave/voices.html#generate-sound) | A sound effect from words, with a Try it |
| [Speak Line](https://edgemodders.ai/wiki/edgewave/voices.html#speak-line) | Text, spoken |
| [Re-Voice](https://edgemodders.ai/wiki/edgewave/voices.html#re-voice) | The same line in another voice |
| [Character voices](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices) | One voice per game character, for every tool that speaks their lines |
| [Voice clones](https://edgemodders.ai/wiki/edgewave/voices.html#voice-clones) | Only from your own recordings: the game's audio is never sent |
| [Into the game](https://edgemodders.ai/wiki/edgewave/voices.html#into-the-game) | What you can do with the result today |

## Cost, privacy and your key

| | |
|---|---|
| **Who pays, and whom** | You pay ElevenLabs. EDGEwave is free, and neither it nor EDGEmodders takes or sees any payment. What your ElevenLabs plan includes is between you and ElevenLabs |
| **What costs** | Making sound: each **Generate**, each **Speak**, each set of Re-Voice previews and each **Re-Voice** spends credits from your ElevenLabs account. A request that fails because the key is wrong spends nothing |
| **What is sent to ElevenLabs** | **Generate Sound**: your description and its options. **Speak Line**: the line's text and the voice you chose. **In the selected line's voice**, and **Re-Voice**: also the recording of the selected line, as you edited it, and only when it is your own recording. Nothing else leaves your PC: not your project, and never the game's own audio ([why](https://edgemodders.ai/wiki/edgewave/voices.html#voice-clones)) |
| **Where the key is kept** | In **REDcode's Keys**, the store every EDGE tool shares, encrypted for your Windows user. It is never written into a settings file, a sound document or your project. See [Your key](https://edgemodders.ai/wiki/edgewave/voices.html#your-key) |
| **Which server** | `api.elevenlabs.io`, unless you change the [setting](https://edgemodders.ai/wiki/edgewave/settings.html#settings) |

## Your key

An **API key** is a password that lets a program use your account.

1. Make an account at [elevenlabs.io](https://elevenlabs.io).
2. On the ElevenLabs site, go to **Developers**, then **API Keys**, and make a key. A new key is restricted by default: switch on **text to speech**, **voices**, **sound effects** and **voice changer** for it.
3. Copy the key. The first time you use a voice tool, REDcode asks for it in a password box: paste it there.

Since EDGEwave 0.3.0 the key lives in **REDcode's Keys** (REDcode 0.10.16 or later), shared by every EDGE tool that uses ElevenLabs. Set it once, in EDGEwave or in REDcode's Keys view, and every tool can use it.

| | |
|---|---|
| **Asked once** | The first time EDGEwave reads the key, REDcode asks "EDGEwave wants your ElevenLabs key", with **Allow** and **Don't Allow**, and remembers your answer |
| **Don't Allow** | EDGEwave stops and says how to change it: run **Forget Tool Permissions for Keys** in REDcode's Keys view, then try again. It doesn't ask you to type the key |
| **A key from before** | A key you set in EDGEwave 0.2.0 moves to REDcode's Keys by itself, once, and EDGEwave says so. If REDcode's Keys already has an ElevenLabs key, that one is kept |
| **Changed elsewhere** | A key set, replaced or removed in REDcode's Keys counts at once. A window that failed for want of a key tries again by itself |
| **An older REDcode** | Without Keys, EDGEwave keeps its own copy of the key in VS Code's secret storage, as in 0.2.0 |

| Command (`Ctrl+Shift+P`) | Does |
|---|---|
| **EDGEwave: Set ElevenLabs API Key** | Sets or replaces the key, in REDcode's password box |
| **EDGEwave: Clear ElevenLabs API Key** | Points you to REDcode's Keys view, where **Remove Key** removes it for every tool |

If the key is missing, or ElevenLabs refuses it, the tool's window says so and shows two buttons: **Set ElevenLabs API Key...** and **Where to make one**, which opens ElevenLabs' help page.

## Where the buttons are

Open any sound in the [editor](https://edgemodders.ai/wiki/edgewave/editing.html). The buttons are at the right of the header, the top line of the editor's page.

| Button | Shows |
|---|---|
| **Generate Sound...** | Always |
| **Speak Line...** | Always |
| **Re-Voice...** | Only while the selected track is a voice line |
| **Translate** | Only on a voice line. It is planned: pressing it says so |

A track counts as a **voice line** when the header's **Voice line** box is ticked. EDGEwave ticks it by itself for a game voice line, by the line's folder or file name. Tick it yourself for a recording of your own.

## Generate Sound

A sound effect from a description.

1. Click where the sound should start: an empty part of a lane, or the ruler above the lanes. That places the mix cursor.
2. Press **Generate Sound...** and describe the sound, such as `a heavy metal door slams in a concrete corridor, short echo`.
3. Set the options if you like, and press **Generate**.
4. Play **Take 1**. Not right? Change the description and press **Generate again**: Take 2 appears above Take 1. Play both.
5. Press **Add** on the take you want.

| Option | Means |
|---|---|
| Length | From half a second to 30 seconds. Left empty, the service decides from your description |
| **Loop** | Asks for a sound whose end runs into its start without a gap, for something that repeats, such as a hum |
| **Follow the prompt** | From 0 to 1. Higher keeps closer to your words. Lower leaves the service more freedom |

| What you should see | |
|---|---|
| After step 3 | "Generating...", then **Take 1** with a play button. No new track yet |
| After step 5 | The window closes. A new track at the mix cursor, selected, with that take |

Each take costs credits. Only the take you add is saved, as a WAV in a `<name>.gen` folder beside the sound document. The other takes are gone when you close the window.

### Try it: a door slam

It spends a few seconds' worth of ElevenLabs credits.

1. In the **Desk** view, press **+** (**Create a Sound on the Desk...**) and name the sound.
2. Press **Generate Sound...**, type `a heavy metal door slams in a concrete corridor`, set the length to 2 and press **Generate**.
3. Play the take, press **Add**, then press `Space`.

You now have a sound of your own. **Move to Project...** on its Desk row puts it in a project, and [A new sound for this project](https://edgemodders.ai/wiki/edgewave/into-the-game.html#a-new-sound-for-this-project) gives it a name a quest can play.

## Speak Line

A line of text, spoken.

1. Press **Speak Line...** and type what the line says.
2. Choose **In one of your ElevenLabs voices**. Search the list by name, gender or accent, and press the play button beside a voice to hear its sample.
3. Leave the model on the one offered, unless you know you want another.
4. Press **Speak**.

| What you should see | |
|---|---|
| The window | The voices from your ElevenLabs account. With no key, a line saying so, and the buttons to set one |
| After step 4 | A new track at the mix cursor with the spoken line, marked as a voice line |

The other choice, **In the selected line's voice**, speaks your text in the voice of the voice line you had selected. That makes a [voice clone](https://edgemodders.ai/wiki/edgewave/voices.html#voice-clones), so it works only on a recording of your own. On a game line it is switched off, and says that the game's own audio is not sent to ElevenLabs.

## Re-Voice

The same line, said the same way, in another voice. Select a voice line's track and press **Re-Voice...**.

| Choice | What happens |
|---|---|
| **Describe the change** | Type what should change, such as `female`, `older and raspy` or `shouting, angry`, and press **Make previews**. EDGEwave clones the line's voice and asks ElevenLabs for versions of it. Play the previews, pick one and press **Re-Voice** |
| **Into one of your ElevenLabs voices** | Pick a voice from your account and press **Re-Voice**. No clone is made |

| What you should see | |
|---|---|
| The result | A new track at the same place as the original line, with the same words and timing in the new voice |
| The original | Unticked, so it is out of the mix. Tick its lane to keep it in. The window's **Mute the original** box decides this |

Re-Voice sends the line's recording, so it works on your own recordings and on lines ElevenLabs made for you. On a game voice line or sound effect, the window says at once that the game's own audio is not sent, and its buttons are off.

## Character voices

A **character voice** is the one voice a game character speaks in, for every tool that speaks their lines: EDGEwave's own [Voice Lines](https://edgemodders.ai/wiki/edgewave/voice-lines.html), and other tools that ask EDGEwave to speak a line, such as REDcode's [Lip Sync editor](https://edgemodders.ai/wiki/redcode/lipsync.html) or an [assistant](https://edgemodders.ai/wiki/edgewave/assistants.html). Characters go by the game's voice tag, such as `judy`. V has two, female and male.

**EDGEwave: Character Voices...** lists them. The first time a tool needs a character with no voice yet, EDGEwave asks you to pick one:

| Choice | What happens |
|---|---|
| One of your ElevenLabs voices | That voice, from your account |
| **Design a voice for <character> from a description...** | Describe the character in your own words. ElevenLabs makes three voices speaking the same sample sentence. Click each to hear it (the list stays open), then **Keep Voice N** at the top keeps the one you heard last. It is saved in your account as `EDGEwave <character>`. Not right? **Describe again...** |

Voice Lines offers each speaker's voice to the list when you pick it there.

A character's menu, in **EDGEwave: Character Voices...**:

| | |
|---|---|
| **Hear It** | Plays the character's sample, free. A voice with no sample speaks the sample sentence once, then keeps it |
| **Design Again from Its Description...** | The design box, with your earlier words ready to change |
| **Pick Another Voice...** | Another of your voices, or a new design |
| **Reveal in File Explorer** | The folder with the lines spoken in that voice |
| **Forget It** | Takes the character off the list |

A character voice is a voice in your ElevenLabs account, not a sound: it has no editor tab and no Desk item.

**Lines for other tools.** Another EDGE tool can ask EDGEwave to speak one line with **timings**: when each letter is spoken, so a face can move its mouth to it. Before a tool first spends your credits this way, EDGEwave asks you once whether it may, with the line's cost. Each line is kept, so asking for the same line again plays it for free. Lines are kept in `%LOCALAPPDATA%\EDGEwave\lines\<character>\`, each WAV with its timings beside it.

## Voice clones

A **voice clone** is a copy of a voice that ElevenLabs makes from a recording. **Speak Line** in the selected line's voice, and **Re-Voice** by description, clone the voice in the selected line, in your ElevenLabs account.

> **EDGEwave never sends the game's audio to ElevenLabs.** A game line's voice is a real voice actor's, so a track that plays a game voice line or sound effect can't be cloned or re-voiced: the window says so as it opens. Clone only a voice you have the right to, such as your own, or one whose owner agreed. EDGEwave asks you to confirm this once, before the first clone, with a link to [ElevenLabs' policy](https://elevenlabs.io/use-policy). Read the policy yourself: these pages don't quote it.

A sound file you exported from the game yourself isn't told apart from your own recordings. Don't use one.

| | |
|---|---|
| **How many** | One clone per line. Using the same line again makes no new clone |
| **How good** | A longer recording makes a better clone |
| **Where they are** | In your ElevenLabs account, where they take up voice slots |
| **Deleting them** | **EDGEwave: ElevenLabs Voices Made by EDGEwave...** lists the clones and saved versions EDGEwave made. Tick the ones to delete. If you delete one on the ElevenLabs site instead, EDGEwave makes it again the next time it is needed |

For a game character's voice, [design one from a description](https://edgemodders.ai/wiki/edgewave/voices.html#character-voices) instead.

## Into the game

A made sound or line is a track like any other: edit it, add effects, mix it.

| You made | Into the game |
|---|---|
| A sound effect | Any route in [Into the game](https://edgemodders.ai/wiki/edgewave/into-the-game.html): let it replace a game sound, or make it a new sound for your project |
| A spoken line | Not as real dialogue yet: see [Voice lines](https://edgemodders.ai/wiki/edgewave/into-the-game.html#voice-lines). Today it can replace a sound event, become a new sound a quest plays, or go into a REDnode package |
| Lines for a whole quest | [Voice Lines](https://edgemodders.ai/wiki/edgewave/voice-lines.html#voice-a-quest) does them in one go |

The tools ask ElevenLabs for sound at the rate in the setting `edgewave.elevenlabs.sampleRate`. If your plan refuses that rate, EDGEwave uses a lower one from then on, by itself. Add to Project converts to what the game needs either way.
