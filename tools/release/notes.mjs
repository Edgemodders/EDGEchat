// Release notes from docs/changelog.md, the one changelog (the same way as REDnode's and EDGEmat's
// tools/release/notes.mjs). The release workflow uses it, and stops when the version has no section.
//
//   node tools/release/notes.mjs [version]              markdown for the GitHub release, with the install lines
//   node tools/release/notes.mjs [version] --nexus      the section's short Nexus summary (below), for
//                                                       Nexus's changelog field; stops when there is none
//   --out <file>                                        writes the notes to a file (UTF-8)
//
// The version defaults to the plugin's, in .claude-plugin/plugin.json.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../../", import.meta.url));
const args = process.argv.slice(2);
const nexus = args.includes("--nexus");
const outAt = args.indexOf("--out");
const out = outAt >= 0 ? args.splice(outAt, 2)[1] : null;
const version = args.find((a) => !a.startsWith("--")) ?? JSON.parse(readFileSync(root + ".claude-plugin/plugin.json", "utf8")).version;
const lines = readFileSync(root + "docs/changelog.md", "utf8").split(/\r?\n/);
const Docs = "https://edgemodders.github.io/EDGEchat/";

// "## 0.1.0" or "## 0.1.0 (2026-10-26)"
const heading = new RegExp(`^## ${version.replace(/\./g, "\\.")}(\\s|,|$)`);
const start = lines.findIndex((line) => heading.test(line));
if (start < 0) {
  console.error(`docs/changelog.md has no section for ${version}: rename Unreleased to "## ${version} (date)" first`);
  process.exit(1);
}
let end = lines.findIndex((line, i) => i > start && line.startsWith("## "));
if (end < 0) end = lines.length;
const section = lines.slice(start + 1, end);
if (!section.some((line) => line.trim())) {
  console.error(`docs/changelog.md: the section for ${version} is empty`);
  process.exit(1);
}

// The section for GitHub: without its Nexus summary (below).
const github = [];
for (let i = 0, inBlock = false; i < section.length; i++) {
  if (!inBlock && section[i].trim() === "<!-- nexus") inBlock = true;
  else if (inBlock && section[i].trim() === "-->") inBlock = false;
  else if (!inBlock) github.push(section[i]);
}

if (nexus) {
  // Nexus shows each line of a version's changelog as one entry, as plain text in a small field,
  // and its API cannot change one once posted. So the lines are a short summary written by hand in
  // the section, as REDnode's (EDGEchat#6; EDGErepo's README, "Nexus changelogs"):
  //
  //   <!-- nexus
  //   New: The edgefab, edgehack and edgequest servers: props, quickhacks and quests by chat
  //   -->
  //
  // An HTML comment, so GitHub and the docs site show none of it. Each line starts with New:,
  // Changed:, Fixed:, Removed:, Other: or Needs:, has no markdown and at most NEXUS_LINE characters;
  // at most NEXUS_LINES lines. A "Full changelog" line with the link is added at the end.
  const NEXUS_LINE = 120;
  const NEXUS_LINES = 12;
  const open = section.findIndex((line) => line.trim() === "<!-- nexus");
  const close = open < 0 ? -1 : section.findIndex((line, i) => i > open && line.trim() === "-->");
  if (open < 0 || close < 0) {
    console.error(`docs/changelog.md: the section for ${version} has no Nexus summary. Add one under its heading:

<!-- nexus
New: one short line per change, at most ${NEXUS_LINE} characters
-->`);
    process.exit(1);
  }
  const summary = section.slice(open + 1, close).map((line) => line.trim()).filter(Boolean);
  const wrong = [];
  if (!summary.length) wrong.push("it is empty");
  if (summary.length > NEXUS_LINES) wrong.push(`${summary.length} lines, at most ${NEXUS_LINES}`);
  for (const line of summary) {
    if (!/^(New|Changed|Fixed|Removed|Other|Needs): \S/.test(line)) wrong.push(`"${line}" does not start with New:, Changed:, Fixed:, Removed:, Other: or Needs:`);
    if (line.length > NEXUS_LINE) wrong.push(`"${line.slice(0, 50)}..." is ${line.length} characters, at most ${NEXUS_LINE}`);
    if (/`|\*\*|\]\(|^#|^- /.test(line)) wrong.push(`"${line.slice(0, 50)}..." has markdown`);
  }
  if (wrong.length) {
    console.error(`docs/changelog.md: the Nexus summary for ${version}:\n- ${wrong.join("\n- ")}`);
    process.exit(1);
  }
  write([...summary, `Full changelog: ${Docs}changelog.html`].join("\n"));
} else {
  write(`${github.join("\n").trim()}

**Install:** EDGEkit 1.140.2 or newer offers it in one click. In VS Code, type \`/plugins\` in the Claude Code panel, add \`Edgemodders/EDGEchat\` in the **Marketplaces** tab, then **Install** \`edge\` in the **Plugins** tab. From a terminal prompt:

\`\`\`
claude plugin install edge --marketplace Edgemodders/EDGEchat
\`\`\`

Inside a running \`claude\` session, the same is \`/plugin marketplace add Edgemodders/EDGEchat\`, then \`/plugin install edge@edgemodders\`.

It updates from the marketplace from then on. \`EDGEchat-${version}.zip\` below is the same plugin for installing without GitHub: unzip it, then \`/plugin marketplace add "<that folder>\\EDGEchat-${version}"\` (README.txt in the zip has the steps). Then run \`/edge:setup\`. The servers are Windows only. New here? The guide walks you through every step: https://edgemodders.github.io/EDGEchat/guide.html

Docs: ${Docs} (changelog: ${Docs}changelog.html)`);
}

function write(text) {
  if (out) writeFileSync(out, text + "\n", "utf8");
  else console.log(text);
}
