<!-- Copied from EDGEweb's docs/wiki/edgedeck/nexus.md at f5d1ce3 2026-11-25 by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->
<!-- Live page: https://edgemodders.ai/wiki/edgedeck/nexus.html (reviewed 2026-11-23) -->

# Nexus Mods

[Nexus Mods](https://www.nexusmods.com/cyberpunk2077) is where most Cyberpunk 2077 mods are published. EDGEdeck works without it: you can always [add mods from files](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#from-a-file-or-folder) you downloaded yourself. Connecting EDGEdeck to your Nexus account adds one-click downloads and update checks.

| On this page | |
|---|---|
| [Signing in](https://edgemodders.ai/wiki/edgedeck/nexus.html#signing-in) | With a personal API key |
| [Download links](https://edgemodders.ai/wiki/edgedeck/nexus.html#download-links) | Making **Mod manager download** send files to EDGEdeck |
| [Downloads](https://edgemodders.ai/wiki/edgedeck/nexus.html#downloads) | Progress, Cancel, and [Premium and free accounts](https://edgemodders.ai/wiki/edgedeck/nexus.html#premium-and-free-accounts) |
| [Updates](https://edgemodders.ai/wiki/edgedeck/nexus.html#updates), [Update all](https://edgemodders.ai/wiki/edgedeck/nexus.html#update-all) | |
| [Several files from one page](https://edgemodders.ai/wiki/edgedeck/nexus.html#several-files-from-one-page) | A main file and a patch, or 1K and 4K |
| [Switching versions](https://edgemodders.ai/wiki/edgedeck/nexus.html#switching-versions), [Open on Nexus](https://edgemodders.ai/wiki/edgedeck/nexus.html#open-on-nexus) | |

## Signing in

You sign in by giving EDGEdeck a **personal API key**: a long password that Nexus makes for you, which lets a program use your Nexus account. A free account is enough.

1. In the Mods view, press **Sign in to Nexus Mods** (a Set up step), or choose **Nexus sign in** in the **`...`** menu. In the command palette it is **Nexus: sign in**.
2. Your browser opens the **API Access** page of your Nexus account. Sign in to Nexus there if it asks.
3. Scroll to the bottom of that page, to **Personal API Key**. If there is no key yet, press the button to generate one. Copy the key.
4. Go back to the editor. A box at the top of the window, titled **Sign in to Nexus Mods**, is waiting. Paste the key and press Enter.

**What you should see:** a message "Nexus: signed in as" with your Nexus name, and "(Premium)" after it if you have Premium. The **Sign in to Nexus Mods** step disappears.

(Screenshot on the wiki, "Signing in to Nexus": The Sign in to Nexus Mods row in the Set up group, and the prompt where you paste a personal API key.)

| Good to know | |
|---|---|
| **Treat the key like a password** | Anyone who has it can act as you on Nexus. Don't post it on Discord or show it in a screenshot |
| **Where EDGEdeck keeps it** | In the editor's secret storage, not in a settings file |
| **Signing out** | **Nexus: sign out**, in the command palette, removes the key from EDGEdeck. To cancel the key itself, use the API Access page |
| **If the box closed** | Run **Nexus: set API key (paste, instead of signing in)** from the command palette. It asks for the key without opening the browser |
| **Nexus rejects the key** | Copy the whole key and paste it again. See [Troubleshooting](https://edgemodders.ai/wiki/edgedeck/troubleshooting.html#nexus-mods) |

**Signing in through the browser, with no key to copy, is not available yet.** It is built, but Nexus has to approve EDGEdeck first. When that happens, the same **Sign in** button will open a Nexus page where you approve EDGEdeck, and the key route stays as an alternative.

## Download links

On a Nexus mod page, each file has a **Mod manager download** button. It sends a special link, starting with `nxm://`, to a mod manager on your PC. Only one program can receive those links.

To make EDGEdeck that program, press **Handle Nexus download links** in the Set up steps, or run **Nexus: handle download links (nxm)** from the command palette. If Vortex or another manager has the links, EDGEdeck asks before taking them over.

**What you should see:** "EDGEdeck now handles Nexus download links." From then on, pressing **Mod manager download** on Nexus puts the file in your library and the mod in your list. You need to be [signed in](https://edgemodders.ai/wiki/edgedeck/nexus.html#signing-in): if you aren't, EDGEdeck asks you to when the first link arrives.

| Good to know | |
|---|---|
| **The first link** | The editor asks once whether EDGEdeck may open the link. That question can sit behind your browser window: switch to the editor |
| **In the EDGEkit app** | The links open in EDGEkit, not in VS Code. EDGEkit's installer can set this up for you: see [The Nexus Mods box](https://edgemodders.ai/wiki/edgekit/install.html#2-the-nexus-mods-box) |
| **Vortex takes the links back** | Every time Vortex starts. If you use both, the **Handle Nexus download links** step reappears so you can reclaim them |
| **Giving the links up** | **Nexus: stop handling download links**, in the command palette |
| **Without link handling** | Run **Nexus: add from a link** and paste an `nxm://` link |
| **Who has the links** | Each time EDGEdeck starts, its log has a line "Nexus download links go to:" |
| **EDGEdeck 0.32.0 and older** | A crafted link opened from a web page could run commands on your PC through the link handler those versions registered. Update to 0.33.0 or later: it replaces that handler the first time it starts. See the [security advisory](https://github.com/Edgemodders/EDGEdeck/security/advisories/GHSA-crv2-8m58-wxvv) |

## Downloads

Each download shows a notification with its progress, speed and time left, for example "12 of 70 MB · 1.4 MB/s · 42 s left". The notification has a **Cancel** button: the download stops, and the part already downloaded is deleted.

With a free account, downloads run **one at a time**. The others say, for example, "waiting: 2 downloads ahead" until their turn. Nexus limits a free account's speed for the whole account, so downloading several files at once would not be faster. Cancelling a waiting file takes it out of the queue. With Premium, downloads run all at once.

Pressing **Mod manager download** twice for the same file doesn't download it twice: the second press gets a short notice.

### Premium and free accounts

Nexus lets a program fetch a file directly only for Premium members. Free members have to press a button on the website for each file. In practice:

| | Premium | Free |
|---|---|---|
| **Mod manager download** on a Nexus page | Works | Works |
| An update, from EDGEdeck | Downloads straight away | EDGEdeck opens the file's download page on Nexus in your browser. Press the download button there, and the file comes back to EDGEdeck through the link |
| Download speed | Not limited by Nexus | Limited by Nexus |

For the free route to work, EDGEdeck has to [handle the download links](https://edgemodders.ai/wiki/edgedeck/nexus.html#download-links).

## Updates

Once a day, when you're signed in, EDGEdeck asks Nexus whether any of your mods from Nexus has a newer file. A mod with one shows `update 1.2 available`.

1. Click that status, or press **Update** in the mod's detail panel.
2. Confirm. The new version downloads and takes the old one's place. It's switched on if the old one was.
3. Deploy.

(Screenshot on the wiki, "An update waiting": A mod row with update 1.2 available, and the EDGEdeck page's version dropdown offering Get 1.2 from Nexus.)

Good to know:

- **The old version stays** in the library, switched off, so you can [switch back](https://edgemodders.ai/wiki/edgedeck/nexus.html#switching-versions). Remove it when you're sure.
- **To check now**, press **Nexus: check for updates** in the Mods view's title bar (**Check updates** on the EDGEdeck page). Its message names the mods with an update and offers **Update all**.
- **To check one mod**, use **Check for an update** in its Actions on the EDGEdeck page. **Update** appears beside it while an update waits. In the Mods view, right-click the mod, or hover its row, for **Check for updates** and **Update**, which checks first and then updates. A mod with an update waiting has a green icon there.
- **To see only the mods with updates**, pick the **Update available** chip on the EDGEdeck page.
- **To turn the daily check off**, untick the setting `edgedeck.nexusCheckUpdatesOnStart`.
- **A mod you added from a file** may not know its Nexus page, so it gets no update checks. To link it, remove it and add it again with **Mod manager download**.

## Update all

**Update all** gets the newest file for every mod with an update waiting, after one question that lists them.

| Where | |
|---|---|
| The EDGEdeck page's toolbar | Greyed out while nothing waits, with a count when something does |
| The Frameworks group's header in the Mods view | While any mod has an update |
| The Mods view's **`...`** menu | Always |

- **Frameworks** come from their authors' GitHub releases, so they download without a click, even on a free account.
- **Other mods** come from Nexus. Premium members get them straight away. For free members, EDGEdeck opens each file's download page: press the button on each.
- **With a search typed or a filter chip picked** on the EDGEdeck page, the button reads **Update shown** and updates only the mods left showing.
- **A cancelled download** is skipped, and the others go on.
- **Mods with a [FOMOD installer](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#mods-with-an-installer-fomod)** update with the choices you made before. Update all never opens an installer: an update whose installer changed waits as `options to review`.
- **At the end**, one summary offers **Deploy**. The older versions stay in the library, switched off.

(Screenshot on the wiki, "Update all": The EDGEdeck page's toolbar with Update all and its count, and the one question listing the mods it will update.)

## Several files from one page

Some Nexus pages offer more than one file: two main files to choose from (Male and Female, 1K and 4K), or an optional patch beside the main file. Each file you download is a mod of its own, with its own versions, update checks and on/off box. An update only ever offers a newer version of the same file, so an update to the 4K file is never offered for your 1K file.

Once two or more files from one page are in your library, they sit under one row named after the page, with a row per file under it.

| On the page's row | What it does |
|---|---|
| **The box** | Turns every file off and remembers which were on. Ticking it again turns those back on. It shows a dash while only some are on |
| **Move up, Move down, drag** | Moves all its files together |
| **Section** | Puts all its files in a section |
| **Check for updates, Open on Nexus** | For the whole page |
| **Remove from Library** | Takes every file, and every version of each, after one question |
| **The arrow** | Folds the files away |

Each file's own row works like any mod's. Moving a file changes its place among the page's other files; it doesn't leave the page's row.

(Screenshot on the wiki, "Files from one Nexus page": A row named after a Nexus page on the EDGEdeck page, its box showing a dash, and three file rows under it, two of them on.)

## Switching versions

When your library holds more than one version of a mod, you can switch between them. In the Mods view, hover the mod's row and press **Switch version...**. On the EDGEdeck page, the mod's version is a dropdown: pick a version, or **Get x.y from Nexus** when Nexus has a newer one. Deploy afterwards. More in [Versions](https://edgemodders.ai/wiki/edgedeck/adding-mods.html#versions).

## Open on Nexus

Right-click a mod and choose **Open on Nexus Mods** to open its page, for its description, requirements and the author's notes.

## Good to know

Nexus limits how often programs may ask it things. EDGEdeck remembers what it has already fetched and checks once a day, so you won't normally notice.
