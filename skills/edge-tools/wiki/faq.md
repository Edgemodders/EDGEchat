<!-- Copied from EDGEweb's docs/wiki/faq.md at 8b425af 2026-10-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/faq.html (reviewed 2026-10-24) -->

# FAQ

## Do I need to know how to code?

No. With [REDagent](https://edgemodders.ai/wiki/redagent/) you describe the mod you want and it writes the code, shows you every change before it's made, and fixes what goes wrong. Knowing a little helps you ask better questions, but it isn't required to start.

## Does REDagent cost money?

REDagent itself is free and open source. It calls Claude with your own Anthropic API key, and Anthropic bills you per use. Each answer shows its cost in the chat. In REDagent's first in-game test, six questions cost $0.34 in all. Long chats cost more per question, so start a **New chat** when you change topic. A Claude.ai subscription cannot be used; it needs an API key.

## Is it safe for my game and my files?

- **REDagent** only writes inside REDnode's apps folders (and any development folders you set), shows each change as a diff before it is made, and backs up every file it changes so you can **Undo**.
- **EDGEdeck** records every file it deploys in a manifest. **Undo deploy** removes exactly those files and nothing else.
- **REDnode** runs mods and overlay apps in their own process, outside the game. If one crashes, the game keeps running. A package gets only the permissions you allow in REDnode's Mod Manager.
- **AI assistants** ask you before every call that could change your game or your game folder, such as REDnode's live game calls and archive swaps or EDGEdeck's deploy.

## Does it work with game version 2.5?

Not yet. Game 2.5 came out on 22 October 2026. REDnode, REDagent and the tools that run in the game work with **game version 2.31**, and move to 2.5 once RED4ext, redscript and Codeware support it. Until then, keep your game on 2.31 if you want to use them. The tools that only read the game's files (REDcode, EDGEdeck, EDGEmat, EDGEwave) are not tied to the game's runtime in the same way, but they are tested on 2.31 (2.5 untested).

## Does it work with WolvenKit, CET, RED4ext and my other mods?

EDGE is built to work alongside them, not replace them.

| Tool | How EDGE works with it |
|---|---|
| WolvenKit | REDcode opens and packs WolvenKit projects. REDbridge uses WolvenKit's own engine |
| RED4ext | REDnode is a RED4ext plugin |
| Cyber Engine Tweaks | REDnode's overlay was tested in game side by side with CET |
| redscript, ArchiveXL, TweakXL, REDmod | EDGEdeck recognises and deploys them. REDcode has TweakXL language support. REDnode writes TweakDB changes through TweakXL |
| Codeware | REDnode packages that place objects in the world or draw the game's own UI need it |
| RED Hot Tools | REDnode swaps changed archives into the running game through it. The [Edgemodders build](https://github.com/CyberbuildsAI/cp2077-red-hot-tools/releases) (`v1.3.0+edgemodders.1`) fixes swaps of archives with capital letters in their names |
| Vortex | EDGEdeck can import your Vortex mods. Use one manager at a time: see [Switch from Vortex](https://edgemodders.ai/wiki/edgedeck/switch-from-vortex.html) |

## Can I use it online or for cheats?

No. Cyberpunk 2077 is single-player, and EDGE is for single-player modding only.

## Does EDGE need the internet?

REDagent needs it to talk to Claude. A few things use it once or only when you ask: downloading REDbridge, EDGEdeck's Nexus Mods updates and downloads, EDGEmat's materials from words (an AI image service with your own key), EDGEwave's voice tools (ElevenLabs, with your own key) and update checks. Everything else runs on your PC.

## Is EDGEmodders part of CD PROJEKT RED or Anthropic?

No. EDGEmodders is a fan community, not affiliated with or endorsed by CD PROJEKT RED or Anthropic. REDagent is "powered by Claude", using Anthropic's API.

## Where do I ask something not on this page?

On [Discord](https://discord.gg/63qP3Erw43), or in the issues of the tool's GitHub repo.
