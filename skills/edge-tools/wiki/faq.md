<!-- Copied from EDGEweb's docs/wiki/faq.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/faq.html (reviewed 2026-11-13) -->

# FAQ

Short answers, each with a link to the page that has the detail.

| | Questions |
|---|---|
| **Starting** | [Where do I start?](https://edgemodders.ai/wiki/faq.html#where-do-i-start) · [Do I need to know how to code?](https://edgemodders.ai/wiki/faq.html#do-i-need-to-know-how-to-code) · [Do I have to use an AI?](https://edgemodders.ai/wiki/faq.html#do-i-have-to-use-an-ai) · [REDagent or EDGEchat?](https://edgemodders.ai/wiki/faq.html#redagent-or-edgechat-which-assistant-should-i-use) |
| **Cost** | [What does EDGE cost?](https://edgemodders.ai/wiki/faq.html#what-does-edge-cost) |
| **Safety** | [Is it safe, and what can the AI change?](https://edgemodders.ai/wiki/faq.html#is-it-safe-and-what-can-the-ai-change) · [Will it break my saves?](https://edgemodders.ai/wiki/faq.html#will-it-break-my-saves) · [Can I get banned?](https://edgemodders.ai/wiki/faq.html#can-i-get-banned) · [How do I uninstall?](https://edgemodders.ai/wiki/faq.html#how-do-i-uninstall) |
| **Compatibility** | [Game versions and stores](https://edgemodders.ai/wiki/faq.html#which-game-versions-and-stores-does-it-work-with) · [Vortex and my Nexus mods](https://edgemodders.ai/wiki/faq.html#can-i-keep-vortex-and-my-nexus-mods) · [WolvenKit, CET and other tools](https://edgemodders.ai/wiki/faq.html#does-it-work-with-wolvenkit-cet-red4ext-and-my-other-mods) · [The internet](https://edgemodders.ai/wiki/faq.html#does-edge-need-the-internet) |
| **The community** | [CD PROJEKT RED and Anthropic](https://edgemodders.ai/wiki/faq.html#is-edgemodders-part-of-cd-projekt-red-or-anthropic) · [Where do I ask for help?](https://edgemodders.ai/wiki/faq.html#where-do-i-ask-for-help) |

## Starting

### Where do I start?

With [Your first hour](https://edgemodders.ai/wiki/first-hour.html). It is one route from nothing installed to a first mod in your game, with the time and cost of each step. To look up which tool does what, see [Getting started](https://edgemodders.ai/wiki/getting-started.html).

### Do I need to know how to code?

No. There are three ways to mod without code:

| Way | How |
|---|---|
| Ask an assistant in the game | [REDagent](https://edgemodders.ai/wiki/redagent/) writes the mod, shows you every change before it is made, and fixes what goes wrong |
| Ask an assistant at your desk | [EDGEchat](https://edgemodders.ai/wiki/edgechat/) lets Claude Code build the mod with you, step by step |
| Use buttons and lists | [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/) manages mods, [EDGEmat](https://edgemodders.ai/wiki/edgemat/) recolors clothes, [EDGEhack](https://edgemodders.ai/wiki/edgehack/) changes quickhacks, [EDGEwave](https://edgemodders.ai/wiki/edgewave/) edits sounds, [EDGEquest](https://edgemodders.ai/wiki/edgequest/) writes quests, and [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/) places objects |

Knowing a little helps you ask better questions. It isn't needed to start.

### Do I have to use an AI?

No. Every EDGE tool except the two assistants works by hand, with no AI. The assistants are an extra: whatever a tool's buttons can do, an assistant can do for you.

### REDagent or EDGEchat: which assistant should I use?

| | [REDagent](https://edgemodders.ai/wiki/redagent/) | [EDGEchat](https://edgemodders.ai/wiki/edgechat/) |
|---|---|---|
| Where you talk to it | A chat window over the game | Claude Code: a panel in VS Code or EDGEkit, or a terminal |
| What it makes | REDnode mods, while you play | REDnode packages, tweaks, clothing recolors and other WolvenKit projects |
| What you pay with | Your own Anthropic API key, billed by use | Your Claude plan, if it includes Claude Code |

Use REDagent to stay in the game. Use EDGEchat for mods made of game files, such as a recolored jacket. You can have both.

## Cost

<a id="does-redagent-cost-money"></a>

### What does EDGE cost?

Every EDGE tool is free and open source. Some features use a paid service on your own account. You never pay EDGEmodders.

| What | Cost | Detail |
|---|---|---|
| Every EDGE tool, and the EDGEkit app | Free | |
| [REDagent](https://edgemodders.ai/wiki/redagent/) | Your own Anthropic API key. Anthropic bills you per use, from credit you buy. In REDagent's tests, a small mod cost $0.13 and a chat of eight questions that built a mod cost $0.50. There is no spending limit except your credit | [Costs, your key and your data](https://edgemodders.ai/wiki/redagent/costs.html) |
| [EDGEchat](https://edgemodders.ai/wiki/edgechat/) | A Claude plan that includes Claude Code, paid to Anthropic. EDGEchat itself is free | [EDGEchat](https://edgemodders.ai/wiki/edgechat/) |
| [EDGEmat](https://edgemodders.ai/wiki/edgemat/)'s New Material from words | Your own Google Gemini or OpenAI key, a few cents a picture at the time of writing. Recoloring, and a material from a photo, need no key | [New Material](https://edgemodders.ai/wiki/edgemat/new-material.html) |
| [EDGEhack](https://edgemodders.ai/wiki/edgehack/)'s icons drawn from words | Your own paid OpenAI key. Uploading your own pictures needs none | [The editor: icons](https://edgemodders.ai/wiki/edgehack/editor.html#icons) |
| [EDGEwave](https://edgemodders.ai/wiki/edgewave/)'s voice tools | Your own ElevenLabs account and key. Editing and replacing sounds needs none | [Voice tools](https://edgemodders.ai/wiki/edgewave/voices.html) |
| Mods from Nexus Mods | A free Nexus account is enough to download | [Nexus Mods in EDGEdeck](https://edgemodders.ai/wiki/edgedeck/nexus.html) |

A Claude plan and an API key are two different things. A Claude plan can't be used with REDagent: it needs an API key.

## Safety

### Is it safe, and what can the AI change?

Each tool makes its own promise. These are the promises as the tools' pages state them.

| Tool | What it promises | More |
|---|---|---|
| **REDagent** | Before it creates or changes a file, it shows you the change and waits for **Allow** or **Deny**. Every file it changes is backed up first and listed with an **Undo** button. Every file it writes is inside REDnode's apps folder, or a development folder if you set one. It can't touch the game's own files. A change to the running game, such as giving V money, asks first | [REDagent: what it can't do](https://edgemodders.ai/wiki/redagent/#what-it-cant-do) |
| **EDGEchat** | An EDGE tool changing the running game, your save or your game folder asks you first, every time. No setting turns this off. Claude Code writing files in your mod project asks in its default permission setting; in a mode that lets it work on its own, it can write there without asking. Reading never asks | [EDGEchat: Safety](https://edgemodders.ai/wiki/edgechat/safety.html) |
| **EDGEdeck** | It records every file it puts in the game folder. **Undo deploy** removes exactly those files. It never deletes a file it didn't put there | [Deploying and undo](https://edgemodders.ai/wiki/edgedeck/deploying.html) |
| **REDnode** | Mods and apps run in their own processes, outside the game. If one crashes, the game keeps running. A mod gets extra powers only after you allow each one | [Permissions](https://edgemodders.ai/wiki/rednode/mod-manager.html#permissions) |
| **REDbridge** | It runs only on your PC, only while a tool needs it, and opens no network port | [Is it safe?](https://edgemodders.ai/wiki/redbridge/#is-it-safe) |

Two things to know. REDagent can use tools that other EDGE software gives it, and those can change other things, such as a material in your own mod project; each of those changes asks you first. With EDGEchat there is [one exception](https://edgemodders.ai/wiki/edgechat/safety.html#the-one-exception-in-the-game-folder) in the game folder: a REDnode package you are building.

What is sent to Anthropic when you use REDagent is on [Costs, your key and your data](https://edgemodders.ai/wiki/redagent/costs.html#your-data).

### Will it break my saves?

The EDGE tools change mod files, not save games. What a mod does to a save depends on the mod, as with any mod manager.

| Tool | What its pages say |
|---|---|
| EDGEdeck | Deploy and Undo deploy only change mod files inside the game folder. They never touch save games. A save made with a mod may miss that mod's items, or misbehave, once the mod is gone |
| EDGEbuilder | Objects you place are previews: they go when a save loads or the game closes. Removing a baked scene does not harm your save games |
| EDGEquest | A save from before the quest was installed is not affected. What a save does once a started quest is uninstalled has not been tested: keep a test save, and don't test on a save you care about |
| EDGEhack | What a save made while trying a new quickhack with Try Live does later has not been tested. Don't keep a save made in that state |
| REDagent and EDGEchat | A change to the running game, such as V's money or a quest fact, asks you first. If you allow it and then save, the change is in that save |

The safe habit: keep one save you never test on.

### Can I get banned?

EDGE is for the single-player game, and its tools make no claims about anything online. The community's rule is no cheats for online play: see [Get involved](https://edgemodders.ai/community.html#ground-rules).

### How do I uninstall?

Take your mods out of the game first, then remove the tools. Each tool's page has the steps and says what is left behind.

| To remove | See |
|---|---|
| Mods you deployed with EDGEdeck | **Undo deploy**: [Uninstalling EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html#uninstalling) |
| The EDGEkit app, or its extension pack | [The app](https://edgemodders.ai/wiki/edgekit/install.html#uninstalling), [the pack](https://edgemodders.ai/wiki/edgekit/install-pack.html#uninstalling) |
| REDcode, EDGEdeck | [REDcode](https://edgemodders.ai/wiki/redcode/install.html#uninstalling), [EDGEdeck](https://edgemodders.ai/wiki/edgedeck/install.html#uninstalling) |
| EDGEmat, EDGEwave | [EDGEmat](https://edgemodders.ai/wiki/edgemat/install.html#updating-and-removing), [EDGEwave](https://edgemodders.ai/wiki/edgewave/install.html#updating-and-removing) |
| EDGEquest, EDGEhack | [EDGEquest](https://edgemodders.ai/wiki/edgequest/install.html#updating-and-uninstalling), [EDGEhack](https://edgemodders.ai/wiki/edgehack/install.html#uninstalling) |
| REDnode, REDagent, EDGEbuilder | [REDnode](https://edgemodders.ai/wiki/rednode/install.html#removing-rednode), [REDagent](https://edgemodders.ai/wiki/redagent/install.html#removing), [EDGEbuilder](https://edgemodders.ai/wiki/edgebuilder/install.html#uninstalling) |
| REDbridge | [Removing it](https://edgemodders.ai/wiki/redbridge/install.html#removing-it) |
| EDGEchat | [Uninstalling](https://edgemodders.ai/wiki/edgechat/settings.html#uninstalling) |

## Compatibility

### Which game versions and stores does it work with?

Game version 2.5, the current one, on Windows. The game's main menu shows your version.

| Tool | On game 2.5 | If you kept the game on 2.31 |
|---|---|---|
| REDnode | Yes, the current release | Use REDnode 0.37.0, the last release for 2.31 |
| REDagent | Yes, the current release | Use REDagent 0.3.1 with REDnode 0.37.0 |
| EDGEbuilder, EDGEhack, EDGEquest | Yes. They are for 2.5 only | Not supported |
| EDGEchat | Yes | See [EDGEchat on 2.31](https://edgemodders.ai/wiki/edgechat/troubleshooting.html#game-231) |
| REDbridge | Yes | See [REDbridge on 2.31](https://edgemodders.ai/wiki/redbridge/install.html#game-231) |
| REDcode | Yes. Its tests ran on 2.5 with Phantom Liberty | |
| EDGEdeck | It places files and isn't tied to one game version. Its recorded tests ran on 2.31; a test on 2.5 is not recorded yet | Yes |
| EDGEmat, EDGEwave | They read your own game's files. See each one's Status | |

Stores: EDGEdeck, EDGEmat and EDGEwave work with a game from Steam, GOG or Epic. REDnode was tested on Steam; GOG and Epic copies are untested. Everything is for Windows only.

### Can I keep Vortex and my Nexus mods?

Yes. The EDGE tools are ordinary mods and editor extensions, and your Nexus mods work beside them. REDnode, REDagent and EDGEbuilder install with Vortex, EDGEdeck or by hand.

If you want EDGEdeck to manage your mods, it can import them from Vortex, and Vortex keeps its copies so you can go back. Use one mod manager at a time on the game folder: [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html).

### Does it work with WolvenKit, CET, RED4ext and my other mods?

EDGE is built to work alongside them, not replace them.

| Tool | How EDGE works with it |
|---|---|
| WolvenKit | REDcode opens and packs WolvenKit projects. REDbridge uses WolvenKit's own code |
| RED4ext | REDnode is a RED4ext plugin |
| Cyber Engine Tweaks | REDnode's overlay was tested in the game side by side with CET |
| redscript, ArchiveXL, TweakXL, REDmod | EDGEdeck recognises and deploys them. REDcode has TweakXL language support. REDnode writes TweakDB changes through TweakXL |
| Codeware | EDGEbuilder, REDnode mods that place objects or work with the game's own UI, and the UI Tools pack need it |
| RED Hot Tools | You don't need it. It has no build for game 2.5; REDnode swaps changed archives into the running game with its own [REDswap](https://edgemodders.ai/wiki/rednode/redswap.html) |
| Vortex | See [above](https://edgemodders.ai/wiki/faq.html#can-i-keep-vortex-and-my-nexus-mods) |

### Does EDGE need the internet?

| What | Needs the internet |
|---|---|
| REDagent, and Claude Code with EDGEchat | Yes, to talk to Claude |
| Downloads: the tools, REDbridge, the frameworks, mods from Nexus Mods, updates | Once each, or when you ask |
| EDGEmat's materials from words, EDGEhack's drawn icons, EDGEwave's voice tools | Only when you press the button, and only to the service you chose |
| Everything else | No. It runs on your PC |

## The community

### Is EDGEmodders part of CD PROJEKT RED or Anthropic?

No. EDGEmodders is a fan community, not affiliated with or endorsed by CD PROJEKT RED or Anthropic. REDagent is "powered by Claude", using Anthropic's API.

### Where do I ask for help?

On [Discord](https://discord.gg/63qP3Erw43). Say what you wanted to make and where you got stuck: every question is welcome. If you use GitHub, you can also open an issue in the tool's repository; the links are on [Get involved](https://edgemodders.ai/community.html).
