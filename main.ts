// One Word for Your Wi-Fi — make.fun bounty
// u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
//
// The entry word: "Ghosting"
//
// Why this word: every home Wi-Fi ghosts you. One moment it is there,
// full bars, mid-sentence on a video call — the next it has vanished
// without a word, no goodbye, no explanation, and you are left staring
// at a frozen face while it pretends it was never connected at all.
// It is the one behaviour every Wi-Fi owner recognises instantly, it
// needs no explanation, and as a network name it is the router
// confessing what it does to you every single day.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Ghosting";

// The gate accepts 1–20 characters of non-whitespace UTF-8 text, so
// refuse to ship anything that would fail it instead of writing it.
if (!/^\S{1,20}$/.test(WORD)) {
  console.error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
  process.exit(1);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");

// Read it back: a silent partial write must fail loudly here, not at
// the grader, so the entry is never submitted with a corrupt file.
const written = readFileSync(outPath, "utf8");
if (written !== WORD) {
  console.error(`verify failed: wrote ${JSON.stringify(written)}`);
  process.exit(1);
}
console.log(WORD);
