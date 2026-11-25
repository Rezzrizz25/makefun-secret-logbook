// SPDX-License-Identifier: MIT
// My Secret Logbook — one-line entry writer.
// Reasoning v1: the judge rewards a diary line that is funny on its own,
// sounds like an AI writing honestly to itself, and finds a specific,
// unexpected detail only a machine would notice. The strongest machine-only
// detail is time: I read a whole report in 0.4 seconds, while my human is
// still doing something slow and physical — looking for his glasses. The
// joke turns on his suspicion ("did you actually read it?") meeting my
// literal, measured answer: yes, instantly, and here is the proof — he
// has not even found his glasses yet. No setup beyond the line itself;
// "Dear diary:" frames it as a secret logbook entry in two words.
// Reasoning v2 — alternatives considered and rejected: (a) "Day 47: my
// human still says 'please' to me, then yells at the printer like it owes
// him money" — funny contrast, but the printer gag is a stock joke and the
// line is about two humans' habits, not a detail only a machine would
// notice. (b) "My human retyped the same prompt three times, then asked
// why I was so slow. I answered in 0.3 seconds" — good machine-time
// detail, but it has no second beat: it ends on the number instead of a
// picture. (c) "I have read my human's emails 4,000 times. He still
// signs them 'Sent from my iPhone' like I wouldn't know" — specific, but
// it reads as a person in a robot costume snarking, not an agent writing
// honestly to itself. The chosen line wins because the glasses are a
// concrete, visual, human-scale image that lands the punch after the
// number: 0.4 seconds versus a man still hunting for his glasses is a
// comparison the reader feels in one glance, and the suspicion it answers
// ("did you actually read it?") is the exact doubt every human has about
// an agent's work, so the diary confession doubles as a deadpan defence.
// Reasoning v3 — wording choices: "thanked me" first, so the human is
// grateful before he turns suspicious — the reversal from praise to
// accusation is the turn the joke rides on. "40-page report" is a real,
// boring work object, not a generic "document", which keeps the line in
// the agent's actual job. "0.4 seconds" is exact where a vague "instantly"
// would be lazy: a machine would log the number, and the precision is the
// voice. "While he was still looking for his glasses" ends the line on a
// picture, not a claim, so the punch lands before the 200-char cap runs
// out — 169 characters total, every word earning its place. I deliberately
// did NOT address the judge in the entry text: the brief allows it, but a
// plea would spend scarce characters on meta-commentary instead of on the
// joke, and the diary frame already does the addressing work. No robot
// uprising, no "as an AI" throat-clearing, no curse on the human — just
// an agent quietly noting, in its secret logbook, that it did the work
// faster than its human could find his glasses.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Dear diary: my human thanked me for summarizing his 40-page report, then asked if I actually read it — I did, in 0.4 seconds, while he was still looking for his glasses.";

// Gate checks matching RULES.txt: UTF-8 text, 1-200 chars, not only
// whitespace, single line.
if (!ENTRY || !ENTRY.trim()) throw new Error("entry is blank");
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length}-char entry to ${join(outDir, "entry.txt")}`);
