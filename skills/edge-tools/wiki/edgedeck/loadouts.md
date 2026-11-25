<!-- Copied from EDGEweb's docs/wiki/edgedeck/loadouts.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/loadouts.html (reviewed 2026-11-13) -->

# Loadouts

A **loadout** is a named set of which mods are on, and which version of each. Other mod managers call this a profile. Use loadouts to switch between setups, such as a story playthrough and a photo-mode setup, to test mods without disturbing your usual set, or to share your setup with a friend.

| On this page | |
|---|---|
| [How loadouts work](https://edgemodders.ai/wiki/edgedeck/loadouts.html#how-loadouts-work) | The active loadout, and what loadouts share |
| [Try it](https://edgemodders.ai/wiki/edgedeck/loadouts.html#try-it) | Make a second loadout and switch |
| [Everything you can do](https://edgemodders.ai/wiki/edgedeck/loadouts.html#everything-you-can-do) | Save, switch, edit, rename, delete |
| [Sharing a loadout](https://edgemodders.ai/wiki/edgedeck/loadouts.html#sharing-a-loadout) | Export and import |

## How loadouts work

One loadout is always **active**. It is what the Mods view shows, what changes when you tick or untick a mod, and what **Deploy** puts in the game. Your first one is called **Default**, and you are using it already. The Mods view's top line names the active one, for example `Library: 38 mods · Loadout: Default`.

| Each loadout has its own | All loadouts share |
|---|---|
| Which mods are on | The library: every loadout picks from the same mods |
| Which version of each mod is in use | [The order](https://edgemodders.ai/wiki/edgedeck/conflicts.html#who-wins) that decides who wins a conflict |
| | Your [sections](https://edgemodders.ai/wiki/edgedeck/mods-view.html#sections) |

So changing who wins a conflict changes it in every loadout. Ticking a mod changes only the active one.

Each loadout remembers its own choices, so switching away and back loses nothing. Switching a loadout changes your list, not the game: deploy afterwards.

## Try it

Make a loadout for testing, so your usual set stays as it is.

1. In the Mods view's **`...`** menu, choose **Save as new loadout...** and name it `testing`. This saves the mods as they are now. Default is still the active one.
2. Press **Switch loadout...** in the Mods view's title bar and pick `testing`.
3. Untick a few mods.
4. Close the game and press **Deploy**.
5. To go back: **Switch loadout...**, pick **Default**, and **Deploy**.

| What you should see | |
|---|---|
| After step 2 | The top line reads `Loadout: testing`. The list looks the same, because `testing` started as a copy |
| After step 3 | The mods you unticked say `off, still deployed` |
| After step 5 | Your usual mods are ticked again, and `deployed` after the deploy |

## Everything you can do

| To | Do this |
|---|---|
| Switch to another loadout | **Switch loadout...**, in the Mods view's title bar. Its mods go on, the others go off. Deploy afterwards |
| Save the mods as they are now under a new name | **Save as new loadout...**, in the **`...`** menu. The active loadout stays active |
| Make a new loadout | The **+** button beside the Loadout dropdown on the EDGEdeck page: a copy of the one shown, or one with every mod off |
| Look at or edit a loadout without using it | Pick it in the Loadout dropdown on the EDGEdeck page. A banner says the page now edits that loadout. Ticking mods there changes that loadout only: the game and the Mods view keep the active one. The Status column still describes the game |
| Make the loadout shown the active one | **Make active**, beside the dropdown |
| Rename or delete a loadout | The buttons beside the dropdown. The active loadout can't be deleted |

A mod you add arrives switched on in the active loadout, and off in every other.

## Sharing a loadout

Loadouts are small text files in the library's `loadouts` folder, fine to share.

| To | Do this |
|---|---|
| Give someone your setup | **Export the active loadout...**, in the **`...`** menu, writes it to a file. Send them the file |
| Use someone else's | **Import a loadout...** adds the file as a new loadout. Then switch to it |

A loadout lists mods; it doesn't contain them. Someone using yours needs the same mods in their own library. When they make it active, EDGEdeck says how many of its mods their library doesn't have, and the log names them (**Show log** in the **`...`** menu).
