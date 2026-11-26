<!-- Copied from EDGEweb's docs/wiki/edgedir/weather.md at b4b8f65 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedir/weather.html (reviewed 2026-11-21) -->

# Weather

**EDGEdir is not released yet.** This page describes what is built on its `main`, for review before the first release; see the [Overview](https://edgemodders.ai/wiki/edgedir/) for what has been tested.

A scene can change the weather. A clip on the **weather track** holds one of the game's weathers, such as rain or fog, for as long as the clip lasts. When the clip ends and no other follows it, the weather goes back to what it was.

**Not tested in the game yet.** In VS Code and against a stand-in for the game, a test by script passed 8 of its 11 steps on 2026-11-21; the three that missed were the inspector's **In the game** lines for a weather clip, added in 0.0.30 and not run again yet. REDnode's weather calls, which this rests on, passed their own test in the game on 2026-11-18.

(Screenshot on the wiki, "A weather clip": The scene editor with a Weather lane under the two actors' lanes, a Rain clip selected and a Sunny clip after it: the preview has a grey tint and its line reads Weather: Rain; the inspector shows the clip's Weather list and its Blend in seconds.)

| On this page | |
|---|---|
| [Add weather to a scene](https://edgemodders.ai/wiki/edgedir/weather.html#add-weather-to-a-scene) | |
| [In the preview](https://edgemodders.ai/wiki/edgedir/weather.html#in-the-preview) | |
| [In the game](https://edgemodders.ai/wiki/edgedir/weather.html#in-the-game) | |

## Add weather to a scene

1. **Add Track**, then **Weather**. A scene has one weather track: the game has one weather at a time, so a second is refused.
2. Select the lane and click **Add Clip**. Move and stretch the clip to cover the part of the scene the weather should hold.
3. Select the clip. In the inspector choose a **Weather**, and set **Blend (s)**. A blend outside 0 to 60 is refused, and the number goes back.

| Field | Means |
|---|---|
| **Weather** | One of the game's weathers, by plain name: Cloudy, Fog, Heavy clouds, Light clouds, Pollution, Rain, Sandstorm, Sunny, Toxic rain, and a few the game made for single quests. The list is read from your game the first time a scene with a weather track opens, which can take about 15 seconds. Without the game's files you can type a name instead |
| **Blend (s)** | How many seconds the change should take, from 0 to 60. The default is 5 |
| The clip's length | How long the weather is held |

Put a second clip right after the first to go from one weather straight to another, with no return between them.

## In the preview

The preview does not draw rain or fog. While the playhead is in a weather clip, the line at the bottom of the view starts with the weather's name, and the view takes a tint: grey for rain, fog and cloud, warm for sun, sand for dust and toxic rain.

## In the game

| When | What happens |
|---|---|
| A weather clip starts | The weather begins to change to the clip's weather |
| A clip ends with another right after it | The weather changes to the next clip's |
| A clip ends with nothing after it | The weather goes back to what it was before the scene, over about 10 seconds |
| **Stop** | The weather goes back, too |
| EDGE Director is switched off mid-scene | REDnode itself gives the weather back |

(Screenshot on the wiki, "A scene's rain in the game": The game with a scene playing in the rain its weather clip set, and EDGE Director's strip with the playhead inside the Rain clip.)

Two things to know:

| | |
|---|---|
| The blend is the game's | In REDnode's own test, rain came over a couple of seconds though 10 were asked for. Treat **Blend** as a wish. The inspector says so under **In the game** |
| It needs REDnode 0.67.2 or later | Earlier versions have no way to give the weather back. EDGE Director will not load on them |

A scene with weather and no actors plays too: nobody is spawned, and the weather changes on time.

A muted weather track is left out of the game.
