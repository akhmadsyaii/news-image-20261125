// news-image-20261125 — "The World in One Day", Wednesday 25 November 2026.
//
// The front page was laid out once as page.html and rendered to the
// bundled entry.png at 1024x1024. This program only delivers that
// finished image: it reads the PNG shipped beside it and writes the
// same bytes to the output folder on every run. No network access,
// no clock reads, no randomness, so repeated runs are byte-identical.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = resolve(outDir, "entry.png");
const pixels = readFileSync(resolve(repoRoot, "entry.png"));

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, pixels);
console.log("wrote", outFile, pixels.length, "bytes");
