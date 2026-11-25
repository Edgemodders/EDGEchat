<!-- Copied from EDGEweb's docs/wiki/edgebuilder/arranging.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgebuilder/arranging.html (reviewed 2026-11-13) -->

# Arranging a scene

Arranging is where single objects become a scene: a table with its chairs, a row of crates, a barricade you build once and copy down the street. You can work on several objects at once, group them, copy them and undo your changes.

Keeping your work as named scenes is covered on the next page, [Scenes and the Library](https://edgemodders.ai/wiki/edgebuilder/scenes.html).

| On this page | |
|---|---|
| [Selecting several objects](https://edgemodders.ai/wiki/edgebuilder/arranging.html#selecting-several-objects) | Ctrl+click, and a box |
| [Moving several at once](https://edgemodders.ai/wiki/edgebuilder/arranging.html#moving-several-at-once) | The gizmo, the keys and the fields on a whole selection |
| [Groups](https://edgemodders.ai/wiki/edgebuilder/arranging.html#groups) | Objects that stay together |
| [Duplicate](https://edgemodders.ai/wiki/edgebuilder/arranging.html#duplicate) | Ctrl+D |
| [Copy, cut and paste](https://edgemodders.ai/wiki/edgebuilder/arranging.html#copy-cut-and-paste) | Ctrl+C, Ctrl+X, Ctrl+V |
| [Undo and redo](https://edgemodders.ai/wiki/edgebuilder/arranging.html#undo-and-redo) | The last 100 changes |
| [When EDGEbuilder is busy](https://edgemodders.ai/wiki/edgebuilder/arranging.html#when-edgebuilder-is-busy) | The busy bar and Stop |
| [Try it](https://edgemodders.ai/wiki/edgebuilder/arranging.html#try-it-a-barricade-down-the-street) | A barricade down the street |

The keys on this page are for [Edit](https://edgemodders.ai/wiki/edgebuilder/positioning.html#the-edit-switch) on. With Edit off, use the buttons on the Scene tab. [Settings and keys](https://edgemodders.ai/wiki/edgebuilder/settings.html#arranging) lists every key in one table.

## Selecting several objects

Switch Edit on first.

| Do | Selects |
|---|---|
| Click an object | That object alone (or its whole group: see [Groups](https://edgemodders.ai/wiki/edgebuilder/arranging.html#groups)) |
| **Ctrl+click** an object | Adds it to the selection. Ctrl+click it again to take it out |
| **Shift+drag** | A dashed yellow box. When you let go, everything inside it is selected |
| **Ctrl+A** | The whole scene |
| Click empty ground | Nothing |

Ctrl+click works in the **Scene** tab's list too.

Each selected object gets the game's outline and a thin box. The gizmo sits at the middle of the selection. The Scene tab's count says how many are selected, for example **5 objects, 1 group; 3 selected**.

(Screenshot on the wiki, "Three crates selected": Three cargo crates selected with Edit on: each outlined with its thin cyan box, one gizmo at their middle, and the Scene tab saying 3 selected.)

## Moving several at once

Everything on [Positioning objects](https://edgemodders.ai/wiki/edgebuilder/positioning.html) works on the whole selection:

| You use | What happens |
|---|---|
| The gizmo's arrows | All of them move together |
| The gizmo's ring, or **R** | They turn around their middle, so the outer ones swing round |
| **S** | They scale from their middle: they spread out and grow |
| **Delete**, **Drop to floor** | Each object is deleted, or lowered to the floor below it |

With several objects selected, the **Selected** panel changes too:

| Field | With several objects selected |
|---|---|
| **X**, **Y**, **Z** | The middle of the selection. Type new numbers and the whole selection moves there |
| **Turn by** (in place of Heading) | Turns them around their middle by that many degrees |
| **Scale by** (in place of Scale) | Scales them from their middle by that factor. Hidden when the selection holds an entity or a person, since those don't scale |

Press **Apply**, or **Enter** in a field, to use the numbers.

## Groups

A **group** keeps objects together, so one click picks them all. Group a table with its chairs and you can move, copy or delete the set as one.

| Key or button | Does |
|---|---|
| **Ctrl+G**, or **Group** | Groups the selection. The message says, for example, "Grouped 3 objects as Group 1" |
| **Ctrl+Shift+G**, or **Ungroup** | Splits the selected group up. Its objects stay where they are, as single objects |
| A click on an object in a group | Selects the whole group |
| **Alt+click** | Selects just that object, out of its group |

The **Scene** tab's list is a tree: each group shows **group of N** at its right, and its objects under it. The arrow beside a group folds them away and back. Groups can hold other groups.

With a group selected, the **Selected** panel has a **Group name** field. Type a name and press **Enter**.

(Screenshot on the wiki, "Groups in the Scene tab": The Scene tab's list as a tree: a group with its name and arrow, three crates under it, a second group folded, and the Group name field in the Selected panel.)

## Duplicate

**Ctrl+D**, or **Duplicate** on the Scene tab, copies the selection, groups and all.

| With | The copy |
|---|---|
| Edit on | Follows the mouse. A click puts it down. **Esc** or a right-click takes it back, and nothing is copied |
| Edit off | Lands beside the original, to its east |

## Copy, cut and paste

| Key | Does |
|---|---|
| **Ctrl+C** | Copies the selection, groups included. The message says "Copied N objects" |
| **Ctrl+X** | Cuts it: copies it, then deletes it. Ctrl+Z puts it back |
| **Ctrl+V** | Pastes it where the cursor points, standing on the surface there, and selects it |

Paste as often as you like. What you copied is kept until you close the game, even if you delete the originals. A pasted group arrives as a new group with the same name.

Where Ctrl+V puts the copy:

| | The copy lands |
|---|---|
| Cursor over the world | On the surface under the cursor |
| Cursor over EDGEbuilder's panel | Where the camera looks |
| Edit off | Where **Drop where I look** would put it |

## Undo and redo

| Key or button | Does |
|---|---|
| **Ctrl+Z**, or **Undo** | Takes back the last change |
| **Ctrl+Y** or **Ctrl+Shift+Z**, or **Redo** | Does it again |

Undo covers the last 100 changes: drops, moves, turns, scales, **Apply**, **Drop to floor**, deletes, copies and pastes, grouping, renaming and **Clear scene**. The message says what came back or went. The history lasts until you close the game. It starts empty at the next start.

If Ctrl+Z seems to undo text instead of a move, the cursor is in a field. Click in the world first. See [Typing numbers](https://edgemodders.ai/wiki/edgebuilder/positioning.html#typing-numbers).

## When EDGEbuilder is busy

Some changes take a while, such as an undo or **Rebuild previews** that puts back many objects. When a change runs for more than half a second, a **busy bar** shows what it is, how far it has got and for how long, for example **Rebuild previews: 3 of 12 · 2 s**. With Edit on, it shows at the top of the view too.

| While the bar shows | What happens |
|---|---|
| You click something else | The click waits its turn. The bar counts it (**1 more waiting**), and it runs when the change ends |
| You press **Stop** | The running change places no more previews. The objects it hadn't placed yet stay in the scene, marked **not in world** in the Scene tab's list. **Rebuild previews** places them later. Changes that were waiting still run |

(Screenshot on the wiki, "The busy bar": The top of the view with Edit on: the busy bar saying Rebuild previews, 3 of 12, 2 s, 1 more waiting, with the Stop button.)

Your scene's objects are placed even when V is far away from them. So you can fly the camera to any part of a scene and keep working there.

## Try it: a barricade down the street

1. Drop a crate and switch **Edit** on.
2. Press **Ctrl+D**, move the copy beside the crate and click. Do it once more, so three crates stand in a row.
3. Hold **Shift** and drag a box around the three. The Scene tab says **3 selected**.
4. Press **Ctrl+G**. In **Group name**, type `Barricade` and press **Enter**.
5. In the Scene tab's list, click the arrow beside **Barricade** to fold its crates away, and again to show them.
6. **Alt+click** the middle crate and press **Delete**. Only that one goes. **Ctrl+Z** puts it back.
7. Click the barricade and press **Ctrl+X**. It's gone, and copied.
8. Fly down the street, point the cursor at the road and press **Ctrl+V**. Press **Ctrl+V** again further on. Now there are two barricades.
9. Press **Ctrl+Z** three times: the two pastes and the cut come undone, and the barricade is back where it started.

A key does nothing? After typing in **Group name**, click in the world once: while the cursor is in a field, keys go to the field.
