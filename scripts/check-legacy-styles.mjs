import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const ROOTS = ["src"];
const EXTRA = ["tailwind.config.ts"];
const ALLOWED_EXT = new Set([".ts", ".tsx", ".css"]);

const BANNED = [
  [/\.neo-(badge|btn|card)/, "legacy .neo-* utility"],
  [/\bneo-(red|orange|yellow|lime|green|teal|cyan|blue|indigo|violet|purple|pink|rose)\b/, "legacy neo color"],
  [/\.(dot-grid|zigzag-top|animated-underline)\b/, "legacy utility class"],
  [/border-\[3px\]/, "legacy 3px border"],
  [/\b(border-black|bg-black|text-black|bg-white)\b/, "hard-coded black/white class"],
  [/\.(animate-float|animate-float-slow|animate-drift)\b/, "legacy float animation"],
  [/#(fbbf24|06b6d4|ec4899|f97316|84cc16|22c55e|3b82f6|ef4444|fef3c7|fef9c3|fffbe6|e6b448|3cc4ce|df548e|dcebfe|e0f2fe|525252)\b/i, "legacy hex"],
  [/#(FFE5E5|FF6B6B|4ECDC4|FFE66D)\b/i, "legacy OG hex"],
  [/#000000\b|#000\b/, "hard-coded black"],
];

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (ALLOWED_EXT.has(extname(name))) files.push(full);
  }
};
ROOTS.forEach(walk);
files.push(...EXTRA);

let hits = 0;
for (const file of files) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const [re, label] of BANNED) {
      if (re.test(line)) {
        console.error(`${file}:${i + 1}: ${label}: ${line.trim()}`);
        hits++;
      }
    }
  });
}
if (hits) {
  console.error(`FAIL: ${hits} legacy style hit(s)`);
  process.exit(1);
}
console.log(`PASS: no legacy styles in ${files.length} files`);
