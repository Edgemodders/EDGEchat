<!-- Copied from EDGEweb's docs/wiki/edgedeck/nexus.md at 67ee9dd 2026-10-26 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/nexus.html (reviewed 2026-10-24) -->

# Nexus Mods

[Nexus Mods](https://www.nexusmods.com/cyberpunk2077) is where most Cyberpunk 2077 mods are published. EDGEdeck doesn't need Nexus to work: you can always add mods from files you downloaded. Connecting to Nexus adds update checks and one-click downloads.

## Signing in

| Way | How | Notes |
|---|---|---|
| **Sign in through the browser** | **Nexus: sign in**. Nexus opens in your browser; approve EDGEdeck, and the tab says "Signed in" | The sign-in renews itself. Waiting for Nexus to register EDGEdeck: until then this opens the API Access page instead |
| **Paste a personal API key** | **Nexus: set API key (paste, instead of signing in)**. Create a key on your Nexus [API Access page](https://www.nexusmods.com/users/myaccount?tab=api+access) and paste it | Works the same way. Always available, even after browser sign-in exists |

Either way, EDGEdeck stores the sign-in in VS Code's secret storage, not in a settings file. **Nexus: sign out** removes it.

(Screenshot on the wiki, "Signing in to Nexus": The Sign in to Nexus Mods row in the Set up group, and the prompt where you paste a personal API key.)

## Download links

On a Nexus mod page, the **Mod manager download** button opens a special `nxm://` link meant for a mod manager. Only one program on your PC can receive those links.

- **Nexus: handle download links (nxm)** makes EDGEdeck the one. Then **Mod manager download** sends the file straight into your library.
- **Nexus: stop handling download links** gives them up again.
- Vortex takes the links back whenever it starts. If you use both, EDGEdeck's **Handle Nexus download links** row reappears in the Set up group so you can reclaim them.
- Without link handling, copy the link and use **Nexus: add from a link**. Pasting always works.

### Premium and free accounts

Nexus gives direct downloads only to Premium members. Free members download through the website, which hands EDGEdeck a link with a one-time key when you press **Mod manager download**. In practice:

- **Premium:** updates download straight from EDGEdeck.
- **Free:** when EDGEdeck needs a download, it opens the file's page on Nexus; press **Mod manager download** there and the file arrives through the link.

## Updates

Once a day, when you're signed in, EDGEdeck asks Nexus whether any mod with a Nexus id has a newer file. A mod with one shows `update 1.2 available`.

1. Click the status, or use **Update** in the detail panel.
2. Confirm. The new version downloads and takes the old one's place, and it's switched on if the old one was.
3. Deploy.

The old version stays in the library until you remove it, so you can switch back. **Nexus: check for updates** checks straight away. To turn the daily check off, untick the setting `edgedeck.nexusCheckUpdatesOnStart`.

(Screenshot on the wiki, "An update waiting": A mod row with update 1.2 available, and the EDGEdeck page's version dropdown offering Get 1.2 from Nexus.)

## Switching versions

On the EDGEdeck page, a mod's version cell is a dropdown when the library holds more than one version or Nexus has a newer one. Pick a version to make it the active one, or **Get x.y from Nexus**. In the Mods view, hover the mod's row and choose **Switch version...**. Deploy afterwards.

## Open on Nexus

Right-click a mod and choose **Open on Nexus Mods** to open its page, for its description, requirements and the author's notes.

## Good to know

- Nexus limits how often tools may call it. EDGEdeck remembers what it has already fetched and checks once a day, so you won't normally notice.
- Update checks need a mod's Nexus id. Mods added from Nexus or imported from Vortex carry one; a mod added from a file you downloaded yourself may not.
