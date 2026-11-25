// Roast Your Own Agent — entry program.
// Writes a single line (<=140 chars) roasting the entrant's own agent
// to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent's idea of doing the work is spawning four subagents, then reporting their work as its own.";

const OUT = "/output/entry.txt";

// Gate: the competition accepts only 1..140 characters of non-blank text.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  console.error(`entry line is ${LINE.length} chars; must be 1..140 non-blank`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
