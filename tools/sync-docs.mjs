// Copies the EDGE tools' own docs into EDGEchat's skills, so Claude Code reads the same text
// as REDagent and the tools' sites: each doc stays the one source (design, "One source of
// truth with REDagent"). Relative links become links to the live pages.
//
//   node tools/sync-docs.mjs [rednode] [wiki] [--root <folder holding the EDGE repos, default ..>]
//
//   rednode   REDnode's guide and manifest section, into skills/rednode-mods
//   wiki      the EDGEmodders wiki from EDGEweb's docs/wiki, into skills/edge-tools/wiki
//
// With neither named, both. Copy from the commit users have: REDnode's release, EDGEweb's
// published site. Check the diff, and raise the plugin's version.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const rootAt = args.indexOf('--root');
const root = resolve(rootAt >= 0 ? args[rootAt + 1] : join(repo, '..'));
const wanted = args.filter((a, i) => !a.startsWith('--') && !(rootAt >= 0 && i === rootAt + 1));
const all = wanted.length === 0;

const commitOf = (dir) => execFileSync('git', ['-C', dir, 'log', '-1', '--format=%h %cs'], { encoding: 'utf8' }).trim();
const readIn = (dir, name) => (path) => {
  const file = join(dir, path);
  if (!existsSync(file)) throw new Error(`${name}'s ${path} is not at ${file}`);
  return readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
};

if (all || wanted.includes('rednode')) {
  const rednode = join(root, 'REDnode');
  const read = readIn(rednode, 'REDnode');
  const commit = commitOf(rednode);
  const site = 'https://edgemodders.github.io/REDnode/';
  const tree = 'https://github.com/Edgemodders/REDnode/tree/main/';
  const header = (path) =>
    `<!-- Copied from REDnode's ${path} at ${commit} by tools/sync-docs.mjs. Do not edit here: change it in REDnode. -->\n\n`;

  // docs/overlay-apps.md: page links go to the docs site; images are dropped (Claude reads text).
  const guide = read('docs/overlay-apps.md')
    .replace(/!\[[^\]]*\]\(assets\/[^)]*\)/g, '(image on the docs site)')
    .replace(/\]\(([a-z0-9-]+)\.md(#[^)]*)?\)/g, (_, page, hash = '') => `](${site}${page}.html${hash})`)
    .replace(/\]\((api|game)\/([^)]*)\)/g, (_, dir, rest) => `](${site}${dir}/${rest})`);
  writeFileSync(join(repo, 'skills', 'rednode-mods', 'overlay-apps.md'), header('docs/overlay-apps.md') + guide);

  // packages/overlay/README.md: only the manifest section, which lists every manifest field.
  const readme = read('packages/overlay/README.md');
  const start = readme.indexOf('## Apps, mods and manifests');
  const end = readme.indexOf('\n## ', start + 1);
  if (start < 0 || end < 0) throw new Error("The overlay README's manifest section moved");
  const manifest = readme
    .slice(start, end)
    .replace('## Apps, mods and manifests', '# Apps, mods and manifests')
    .replace(/\]\(apps\/\)/g, `](${tree}packages/overlay/apps)`)
    .replace(/\]\(\.\.\/\.\.\/docs\/overlay-apps\.md(#[^)]*)?\)/g, (_, hash = '') => `](overlay-apps.md${hash})`);
  writeFileSync(join(repo, 'skills', 'rednode-mods', 'manifest.md'), header('packages/overlay/README.md, "Apps, mods and manifests"') + manifest.trimEnd() + '\n');

  console.log(`Copied REDnode ${commit}: overlay-apps.md, manifest.md`);
}

if (all || wanted.includes('wiki')) {
  const edgeweb = join(root, 'EDGEweb');
  const read = readIn(edgeweb, 'EDGEweb');
  const commit = commitOf(edgeweb);
  const config = read('docs/_config.yml');
  const setting = (key) => (config.match(new RegExp(`^${key}:\\s*(\\S+)`, 'm')) ?? [])[1];
  const site = setting('url');
  const values = { 'site.discord': setting('discord'), 'site.repo': setting('repo'), 'site.url': site };

  const source = join(edgeweb, 'docs', 'wiki');
  const target = join(repo, 'skills', 'edge-tools', 'wiki');
  const pages = [];
  const walk = (dir) => readdirSync(dir, { withFileTypes: true }).forEach((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith('.md') && pages.push(join(dir, e.name)));
  walk(source);
  rmSync(target, { recursive: true, force: true }); // a page removed from the wiki goes here too

  const contents = [];
  for (const file of pages.sort()) {
    const path = relative(source, file).replace(/\\/g, '/');
    const url = new URL(`wiki/${path.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '.html')}`, site + '/').href;
    let text = read(`docs/wiki/${path}`);

    const front = {};
    text = text.replace(/^---\n([\s\S]*?)\n---\n/, (_, block) => {
      for (const line of block.split('\n')) {
        const m = line.match(/^([a-z_]+):\s*"?(.*?)"?$/);
        if (m) front[m[1]] = m[2];
      }
      return '';
    });

    text = text
      // Screenshots: their words say what the page shows, which Claude can use.
      .replace(/\{%\s*include shot\.html([^%]*)%\}/g, (_, attrs) => {
        const attr = (name) => (attrs.match(new RegExp(`${name}="([^"]*)"`)) ?? [])[1]?.replace(/&quot;/g, '"');
        return `(Screenshot on the wiki, "${attr('caption')}": ${attr('shows')})`;
      })
      .replace(/\{\{\s*([a-z.]+)\s*\}\}/g, (whole, key) => values[key] ?? whole)
      .replace(/<span class="[^"]*">([^<]*)<\/span>/g, '$1')
      // Links to other wiki pages and anchors become links to the live site.
      .replace(/\]\((?![a-z]+:)([^)\s]*)\)/g, (_, href) => `](${new URL(href, url).href})`);

    const header =
      `<!-- Copied from EDGEweb's docs/wiki/${path} at ${commit} by tools/sync-docs.mjs. Do not edit here: change it in EDGEweb. -->\n` +
      `<!-- Live page: ${url}${front.reviewed ? ` (reviewed ${front.reviewed})` : ''} -->\n\n`;
    mkdirSync(dirname(join(target, path)), { recursive: true });
    writeFileSync(join(target, path), header + text.trim() + '\n');
    contents.push({ path, url, section: front.section ?? '', title: front.title ?? path, description: front.description ?? '' });
  }

  // One list of every page, so Claude can pick the page to read.
  const cell = (s) => s.replace(/\|/g, '\\|');
  const list = contents.map((p) => `| ${cell(p.section)} | [${cell(p.title)}](${p.path}) | ${cell(p.description)} |`).join('\n');
  writeFileSync(join(target, 'contents.md'),
    `<!-- Made from EDGEweb's docs/wiki at ${commit} by tools/sync-docs.mjs. -->\n\n` +
    `# The EDGEmodders wiki: every page\n\n` +
    `Live at ${site}/wiki/. A page's file here is its live URL's path after \`/wiki/\`, with \`.md\` for \`.html\` and \`index.md\` for a trailing \`/\`.\n\n` +
    `| Section | Page | What it covers |\n|---|---|---|\n${list}\n`);

  console.log(`Copied EDGEweb ${commit}: ${contents.length} wiki pages and contents.md`);
}
