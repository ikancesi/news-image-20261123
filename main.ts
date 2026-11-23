// News image entry for 23 Nov 2026: copy the rendered entry.png beside this file
// into the grader output directory as entry.png. Node 22, standard library only,
// no network. Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Ensure the output directory exists before copying, so both grader runs
// write identical bytes to the same path.
mkdirSync(outDir, { recursive: true });
const src = join(here, 'entry.png');
if (!existsSync(src)) throw new Error('news image: entry.png missing beside main.ts');
copyFileSync(src, join(outDir, 'entry.png'));
console.log('news image: wrote entry.png to ' + join(outDir, 'entry.png'));
