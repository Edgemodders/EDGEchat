<!-- Copied from EDGEweb's docs/wiki/edgequest/music-sound.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgequest/music-sound.html (reviewed 2026-11-13) -->

# Music and sound

A quest plays music and sounds **by name**, as the game's own quests do. Every piece of music and every sound effect in the game has a name, called a **music cue** or a **sound event**. You don't add sound files to play the game's own music: you name the cue.

| On this page | |
|---|---|
| [Where music and sound go](https://edgemodders.ai/wiki/edgequest/music-sound.html#where-music-and-sound-go) | In a beat, or between lines |
| [Music cues](https://edgemodders.ai/wiki/edgequest/music-sound.html#music-cues) | START and STOP |
| [Sound events](https://edgemodders.ai/wiki/edgequest/music-sound.html#sound-events) | The game's sounds, and where to find their names |
| [The picker](https://edgemodders.ai/wiki/edgequest/music-sound.html#the-picker) | Search and hear before you pick |
| [Try it](https://edgemodders.ai/wiki/edgequest/music-sound.html#try-it) | Music that starts when V arrives |
| [Your own sounds](https://edgemodders.ai/wiki/edgequest/music-sound.html#your-own-sounds) | Made with EDGEwave |
| [Voices](https://edgemodders.ai/wiki/edgequest/music-sound.html#voices) | What voicing a line does today |

## Where music and sound go

| Where | Written in the story file | What it does |
|---|---|---|
| A beat's steps | `music: <cue>` | Starts or stops one of the game's music cues |
| A beat's steps | `sound: <event>` | Plays a sound where V is |
| A scene, between lines, or in an option | `sound: <event>` | Plays a sound where V is, at that point of the scene |

On the [Storyboard](https://edgemodders.ai/wiki/edgequest/writing.html#the-storyboard) these are **+ Step** > **Music**, **+ Step** > **Sound**, and **+ Sound** in a scene. In the text, a quest with music and a sound looks like this:

```yaml
beats:
  at_home:
    objective: You're home
    steps:
      - music: mus_q104_drone_flight_01_START
      - scene: at_the_door
  look_closer:
    objective: Look at the door
    steps:
      - music: mus_q104_drone_flight_02_STOP
      - done
  go_inside:
    objective: Get some rest
    steps:
      - music: mus_q104_drone_flight_02_STOP
      - failed

scenes:
  at_the_door:
    - V: Home. Something feels different.
    - sound: sa_airdrop_package_land
    - choice:
        Look closer:
          - go: look_closer
        Go inside:
          - go: go_inside
```

In words: the music starts when the beat "You're home" begins. V says a line, a sound plays, and the player chooses. Both endings stop the music.

## Music cues

The game's quests play their music as **cues**, one per moment. A cue with `START` in its name begins a piece of music; a cue with `STOP` in its name ends it.

- **Stop the music in every ending.** A START cue plays until its STOP. With no stop, the music plays on after your quest is over.
- **Which STOP goes with a START.** A quest's cues share a name and are numbered in the order the quest plays them: `mus_q104_drone_flight_01_START`, then `mus_q104_drone_flight_02_STOP`. So the stop has the same name before the number, and a later number. To be sure, open the game quest that uses the cue and read its "Play music" steps: it shows the START and the STOP it uses.
- **Cues work outside their own quest.** The q104 cues above start and stop from a new quest.
- **To find cues,** read the "Play music" steps of a game quest whose mood you like, on its [quest page](https://edgemodders.ai/wiki/edgequest/reading.html#the-quest-page), or search in [the picker](https://edgemodders.ai/wiki/edgequest/music-sound.html#the-picker).

## Sound events

Any of the game's sound events works, such as `sa_airdrop_package_land`. A sound in a quest always plays where V is.

EDGEquest knows the game's event names. When you save, a name it doesn't know, and that isn't one of your project's own sounds, goes on the [checklist](https://edgemodders.ai/wiki/edgequest/checking.html#the-checklist): the quest still plays, but that sound is silent.

Where to find a name:

| Where | How |
|---|---|
| [The picker](https://edgemodders.ai/wiki/edgequest/music-sound.html#the-picker), with EDGEwave installed | Type a word such as `door` or `alarm`, and hear each result |
| A game quest's [page](https://edgemodders.ai/wiki/edgequest/reading.html#the-quest-page) | The steps that start with "Play sound" or "Play music" name the event |
| [EDGEwave](https://edgemodders.ai/wiki/edgewave/)'s Game Assets view | Lists the game's sounds. Right-click one and choose **Copy Name** |

## The picker

On the [Storyboard](https://edgemodders.ai/wiki/edgequest/writing.html#the-storyboard):

- **+ Step** has **Music** and **Sound**;
- the add row of every scene and option has **+ Sound**;
- click a sound's name on a beat's page to pick another.

What you get depends on whether [EDGEwave](https://edgemodders.ai/wiki/edgewave/), the EDGE sound studio, is installed (0.2.0 or later):

| | With EDGEwave | Without |
|---|---|---|
| Finding a name | A search list: your project's own sounds first, then the game's events | A box to type the name in |
| Hearing it first | **▶** beside each result | No |

**▶** plays the sound before you pick it:

| What | Where it plays |
|---|---|
| A sound event | At once, in VS Code |
| A music cue | In the running game, through [REDnode](https://edgemodders.ai/wiki/rednode/) 0.43 or later, because the game's music can only be played by the game itself. Start the game and load a save first |

Closing the picker stops the sound. The last row of the list, **Type a name...**, takes a name that isn't listed.

If the game goes quiet while you try cues from the picker, open the game's pause menu and go back. Some cues turn the game's sound down, and this brings it back.

(Screenshot on the wiki, "The sound picker": The Storyboard's sound picker searching for q104 drone, with the project's own edgewave_ sounds listed first, game events below, and a play button beside each.)

## Try it

Give your quest from [Your first quest](https://edgemodders.ai/wiki/edgequest/first-quest.html) music that starts when V arrives.

1. On the Storyboard, click the first card, **Go to your apartment**.
2. Press **+ Step**, choose **Music**, and pick `mus_q104_drone_flight_01_START`. With EDGEwave, search for `q104 drone`. Without it, type the name.
3. The new step is last in the list. Press its **↑** once, so it sits between "arrive" and the scene.
4. Click each ending's card in turn. On each, press **+ Step**, choose **Music**, and pick `mus_q104_drone_flight_02_STOP`. The step goes in above the ending by itself.
5. Save, **Pack and Install**, start the game and load your test save.

**You should hear** the music start as V steps into the apartment, and stop when the quest ends, whichever option you pick. If it plays on, one of the endings has no STOP step.

Both cues were heard in the game this way, starting and stopping from a new quest.

## Your own sounds

With [EDGEwave](https://edgemodders.ai/wiki/edgewave/) 0.2.0 or later, a sound you made can become a **new event of its own**, named `edgewave_<name>`. A quest plays it like any other sound event.

To make one, open your sound in EDGEwave, choose **Add to Project...**, then **A new sound for this project...**, and give it a name. EDGEwave writes the sound as a WAV file into the project's `source\customSounds` folder and lists it in `source\resources\info.json`. The sound then shows first in EDGEquest's picker.

To hear it in the game:

1. **Switch on REDcode's setting `redcode.pack.redmod`.** Your own sounds only work in a REDmod, CD PROJEKT RED's own mod format. See [Packing as a REDmod](https://edgemodders.ai/wiki/redcode/pack-install.html#packing-as-a-redmod).
2. **Pack and Install** the project.
3. **Start the game again with REDmods on.** REDcode's **Run Game** does this for you: it adds the launch option `-modded`. The game reads new sounds only when it starts, so loading a save isn't enough.

If the story names an `edgewave_` sound the project doesn't have, the checklist says so, and that sound is silent until you make it.

A sound of the tester's own was heard in the game this way, played from a beat and from a scene.

## Voices

In this preview the game shows a quest's lines as **subtitles only**. Voiced lines in the game are coming.

What you can do now:

| You can | How | What it gives you |
|---|---|---|
| Write how each line is spoken | The **Direction** and **Say** boxes under a line. See [Voice prompts](https://edgemodders.ai/wiki/edgequest/story-file.html#how-a-line-is-spoken) | The lines are ready to voice. It ticks a checklist item |
| Make voice takes | **Generate** on a line, or **Voice all lines** on a scene. EDGEquest hands the lines to EDGEwave's **Voice Lines**, which speaks them through ElevenLabs, a paid text-to-speech service, with your own key | Sound files of the lines, kept in your project. It ticks the scene's voice item on the checklist. The game does not play them yet |

Without EDGEwave, **Generate** offers to show you EDGEwave in the Extensions view. With an EDGEwave older than 0.2.0, it copies the line so you can paste it into EDGEwave's **Speak Line**.

The status beside each line says **no take**, **take made**, or **changed since its take**. The last one means you changed the line's words after voicing it, so it counts as not voiced.
