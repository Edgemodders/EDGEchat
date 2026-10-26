// Builds the release file: dist/EDGEchat-<version>.zip, the plugin as its marketplace serves it
// (.claude-plugin, skills, scripts, README, license) in a folder, with README.txt beside it on how
// to install. The release workflow attaches it to the GitHub release and uploads it to Nexus
// (nexus/README.md). The same way as EDGEmat's tools/release/nexus-zip.mjs.
//   node tools/release/nexus-zip.mjs
import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const dist = path.join(root, "dist");
const { version } = JSON.parse(fs.readFileSync(path.join(root, ".claude-plugin", "plugin.json"), "utf8"));
const stage = path.join(dist, "stage");
const folder = `EDGEchat-${version}`;
const zip = path.join(dist, `EDGEchat-${version}.zip`);
// What the plugin is: the marketplace's source is the repo root, and these are the parts it uses.
const parts = [".claude-plugin", "skills", "scripts", "README.md", "LICENSE"];

fs.rmSync(stage, { recursive: true, force: true });
fs.rmSync(zip, { force: true });
fs.mkdirSync(path.join(stage, folder), { recursive: true });
for (const part of parts) fs.cpSync(path.join(root, part), path.join(stage, folder, part), { recursive: true });
fs.writeFileSync(
  path.join(stage, "README.txt"),
  [
    `EDGEchat ${version}: the EDGEmodders plugin for Claude Code. It makes Claude a Cyberpunk 2077`,
    "modding assistant: skills that know the game's files and frameworks, and the REDnode, REDcode,",
    "EDGEdeck and EDGEmat servers, in one install.",
    "",
    "This is a Claude Code plugin, not a game mod. Do not install it with Vortex.",
    "",
    "EDGEkit 1.140.2 or newer offers EDGEchat after its first-run steps: click Set Up, then Install.",
    "",
    "The easy way, which also updates it:",
    "  In VS Code: type /plugins in the Claude Code panel. In the Marketplaces tab,",
    "  enter Edgemodders/EDGEchat. In the Plugins tab, click Install on edge, Install for you.",
    "  From a terminal prompt:",
    "  claude plugin install edge --marketplace Edgemodders/EDGEchat",
    "  Or inside a running claude session:",
    "  /plugin marketplace add Edgemodders/EDGEchat",
    "  /plugin install edge@edgemodders",
    "",
    "Or from this zip, without GitHub:",
    `  1. Unzip it somewhere stable, and keep the ${folder} folder there.`,
    `  2. In Claude Code: /plugin marketplace add "<that folder>\\${folder}"`,
    "  3. Then: /plugin install edge@edgemodders",
    "",
    "Then run /edge:setup: it checks each server and says the one next step for any that is missing.",
    "",
    "Needs Claude Code. The servers run on Windows 10 or 11, 64-bit, with Node.js 20 or later.",
    "REDnode's server needs REDnode in the game; REDcode's and EDGEmat's need REDbridge, easiest",
    "through REDcode (https://github.com/Edgemodders/REDcode).",
    "",
    "Docs: https://edgemodders.github.io/EDGEchat/",
    "Source and issues: https://github.com/Edgemodders/EDGEchat",
    "",
  ].join("\r\n"),
);

// Windows' own tar writes zip files (-a picks the format from the name); Git's tar does not.
const tar = path.join(process.env.SystemRoot ?? "C:\\Windows", "System32", "tar.exe");
const packed = spawnSync(tar, ["-a", "-c", "-f", zip, "README.txt", folder], { cwd: stage, stdio: "inherit" });
if (packed.status !== 0) throw new Error("Zipping failed");
fs.rmSync(stage, { recursive: true, force: true });
console.log(`${zip}: ${(fs.statSync(zip).size / 1024).toFixed(0)} KB`);
