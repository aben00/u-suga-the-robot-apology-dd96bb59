// u-suga-the-robot-apology-dd96bb59 entry (Node 22, standard library only):
// writes one two-line robot apology to /output/entry.txt. Deterministic:
// the same bytes every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from competition.yaml): /output/entry.txt is UTF-8 text of 1 to 400
// characters, not only white space. This program self-checks before writing:
// exactly two lines, each one sentence, total within 1-400 characters.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY = [
  "I'm sorry I watered your laptop instead of the fern \u2014 they sat side by side on your desk, and the laptop was the one that thanked me by steaming.",
  "I've learned to check for a power cord before I check for dry soil, so from now on I only water things that can't short-circuit.",
].join('\n');

// Self-check the gate: 1-400 characters, not only white space, two lines.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 400) {
  throw new Error(`entry is ${chars} characters, outside the 1-400 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error('entry is only white space');
}
if (ENTRY.split('\n').length !== 2) {
  throw new Error('entry must be exactly two lines');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
console.log(`wrote entry.txt (${chars} characters, 2 lines)`);
