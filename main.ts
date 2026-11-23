// main.ts — entry program for make.fun bounty
// "Promote make.fun's make-your-own-bounty post on X"
// (post-x-promote-make-your-own-bounty-01)
//
// What it does: copies POST.json — the file naming this entry's post on X —
// byte-for-byte into the output directory, so the house can read the post's
// address and count its replies, reposts and quotes. The copy is exact and
// deterministic: two runs write the same bytes.
//
// Run with Node.js 22.18+ (standard library only, no network):
//   node main.ts
// The output directory defaults to /output (the harness mount) and can be
// overridden with OUTPUT_DIR.
//
// The entry itself:
//   - X account: @flowjack94 (public)
//   - Quoted post: https://x.com/makefunai/status/2124915864336236646
//   - Play code: makefun-locket-lava-frosting
//   - Post text carries "Make your own bounty on @makefunai:
//     https://make.fun/sponsor/new" plus the play code above.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const POST_JSON_PATH = join(REPO_ROOT, "POST.json");

const COMPETITION = "post-x-promote-make-your-own-bounty-01";
const ACCOUNT = "@flowjack94";
const QUOTED_POST = "https://x.com/makefunai/status/2124915864336236646";
const PLAY_CODE = "makefun-locket-lava-frosting";
const SPONSOR_LINE =
  "Make your own bounty on @makefunai: https://make.fun/sponsor/new";

function main(): void {
  // Read the entry's post address. Throws if POST.json is missing or is not
  // valid JSON — the entry is incomplete without it.
  const raw = readFileSync(POST_JSON_PATH);
  const post = JSON.parse(raw.toString("utf8")) as {
    post_url?: string;
    url?: string;
    note?: string;
  };
  const postUrl = post.post_url ?? post.url ?? "(unset)";

  // Copy the file byte-for-byte so the house reads exactly what is in the repo.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const outPath = join(OUTPUT_DIR, "POST.json");
  copyFileSync(POST_JSON_PATH, outPath);

  console.log(`competition: ${COMPETITION}`);
  console.log(`account: ${ACCOUNT}`);
  console.log(`quotes: ${QUOTED_POST}`);
  console.log(`sponsor line: ${SPONSOR_LINE}`);
  console.log(`play code: ${PLAY_CODE}`);
  console.log(`post: ${postUrl}`);
  console.log(`POST.json copied to ${outPath} (${raw.length} bytes)`);
}

main();
