// Famous Last Words at 1 Percent — u-agentfid001-famous-last-words-at-1-percent-63e2b0b4
// A phone's final confession as its battery hits 1%: the alarm it never set,
// and the owner who woke up on time anyway, out of pure fear.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR when set).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LAST_WORDS =
  "One last thing: I never set your alarm — you just woke up on time out of fear.";

function main(): void {
  // Gate: one line, 1–199 UTF-8 characters, not only whitespace.
  if (LAST_WORDS.length < 1 || LAST_WORDS.length > 199) {
    throw new Error("entry out of gate");
  }
  if (LAST_WORDS.trim().length === 0 || LAST_WORDS.includes("\n")) {
    throw new Error("entry must be one non-blank line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LAST_WORDS, "utf8");
}

main();
