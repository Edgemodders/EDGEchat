// Copies the EDGE tools' own guides into EDGEchat's skills, so Claude Code reads the same text
// as REDagent and the tools' docs sites: each guide stays the one source (design, "One source of
// truth with REDagent"). Relative links become links to the tool's docs site.
//
//   node tools/sync-docs.mjs [path to the REDnode repo, default ../REDnode]
//
// Run it when REDnode's guide changes, check the diff, and raise the plugin's version.
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const rednode = resolve(process.argv[2] ?? join(repo, '..', 'REDnode'));
const site = 'https://edgemodders.github.io/REDnode/';
const tree = 'https://github.com/Edgemodders/REDnode/tree/main/';

const commit = execFileSync('git', ['-C', rednode, 'log', '-1', '--format=%h %cs'], { encoding: 'utf8' }).trim();
const read = (path) => {
  const file = join(rednode, path);
  if (!existsSync(file)) throw new Error(`REDnode's ${path} is not at ${file}`);
  return readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
};
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
