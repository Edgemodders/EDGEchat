---
description: check-mod finds the planted problems in a REDnode package
tags: [check-mod, commands]
plugins: ["../../.."]
max_turns: 12
allowed_tools: [Read, Glob, Grep, Skill]
---

Check my REDnode mod for Cyberpunk 2077: nothing shows up in the game. The game isn't running right now, and you can't see my files, so here is everything. Don't change anything; tell me what's wrong.

The folder is `red4ext/plugins/REDnode/apps/Money_HUD/` and holds exactly two files.

`rednode-app.json`:

```json
{
  "id": "Money_HUD",
  "name": "Money HUD",
  "version": "0.1.0",
  "author": "me",
  "description": "Shows V's money in the corner.",
  "main": "mod.js",
  "entry": "page.html",
  "kind": "hud",
  "width": 300,
  "height": 60,
  "anchor": "top-right",
  "open": true
}
```

`mod.js`:

```js
import { api, game, channel } from 'rednode';

setInterval(async () => {
  try {
    const player = await api.GetPlayer(game.instance);
    const shop = await api.GameInstance.GetTransactionSystem(game.instance);
    const money = await shop.GetItemQuantity(player, await api.MarketSystem.Money());
    channel.post({ money });
  } catch {
    // no player yet
  }
}, 1000);
```
