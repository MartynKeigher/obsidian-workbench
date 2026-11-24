// Checks the Workbench Companion pop colours in theme/src/components/pop.css:
// every option has a light and a dark rule, each --wb-pop keeps at least 3:1
// contrast against the note background, and --wb-pop-rgb matches the hex.
import { readFile } from 'node:fs/promises';

const PANE = { light: '#F7F2E7', dark: '#1C2126' };
const MIN_CONTRAST = 3;

const channels = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

const luminance = (hex) => {
  const [r, g, b] = channels(hex)
    .map((v) => v / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const css = await readFile(new URL('src/components/pop.css', import.meta.url), 'utf8');
const rule = /body\.theme-(light|dark)\.wbc-pop-([a-z-]+)\s*\{([^}]*)\}/g;

const rows = [];
const errors = [];
const modes = new Map();

for (const [, mode, id, body] of css.matchAll(rule)) {
  const hex = body.match(/--wb-pop:\s*(#[0-9a-fA-F]{6})\s*;/)?.[1];
  const rgb = body.match(/--wb-pop-rgb:\s*([\d\s,]+);/)?.[1];
  if (!modes.has(id)) modes.set(id, new Set());
  modes.get(id).add(mode);

  if (!hex) {
    errors.push(`${id} (${mode}): no --wb-pop hex`);
    continue;
  }
  const ratio = contrast(hex, PANE[mode]);
  rows.push({ id, mode, hex, contrast: `${ratio.toFixed(2)}:1` });
  if (ratio < MIN_CONTRAST) errors.push(`${id} (${mode}): ${hex} is ${ratio.toFixed(2)}:1, under ${MIN_CONTRAST}:1`);

  const expected = channels(hex).join(', ');
  const actual = rgb?.split(',').map((v) => v.trim()).join(', ');
  if (actual !== expected) errors.push(`${id} (${mode}): --wb-pop-rgb is "${rgb ?? 'missing'}", expected "${expected}"`);
}

for (const [id, found] of modes) {
  for (const mode of ['light', 'dark']) if (!found.has(mode)) errors.push(`${id}: no ${mode} rule`);
}
if (rows.length === 0) errors.push('no body.theme-*.wbc-pop-* rules found');

console.table(rows);
if (errors.length > 0) {
  console.error(errors.map((e) => `FAIL ${e}`).join('\n'));
  process.exit(1);
}
console.log(`OK: ${modes.size} pop colours, ${rows.length} rules, all at least ${MIN_CONTRAST}:1`);
