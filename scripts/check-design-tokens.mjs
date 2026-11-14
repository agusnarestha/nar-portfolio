import { readFileSync } from "node:fs";

const EXPECTED = {
  paper: "#EDF0F4", sheet: "#FFFFFF", sheet2: "#F6F8FB",
  ink: "#15161A", ink2: "#444A57", ink3: "#69707F", rule: "#C4CAD5",
  cobalt: "#2446F2", cobaltDark: "#1B34C4",
  butter: "#FFF7B8", highlight: "#FFEE3B",
  mint: "#2FD49A", mintLight: "#CDF6E6", mintDark: "#077A52",
  pink: "#FF8DC7", pinkLight: "#FFD9EC",
  sky: "#D3E2FF", skyInk: "#1D2E62",
  tomato: "#FF5130", tomatoDark: "#C2341A", tomatoLight: "#FFE1DA",
  amber: "#D9B800",
};

let src;
try {
  src = readFileSync("src/lib/design-tokens.ts", "utf8");
} catch {
  console.error("FAIL: src/lib/design-tokens.ts not found");
  process.exit(1);
}

const missing = Object.entries(EXPECTED).filter(
  ([key, hex]) => !new RegExp(`${key}\\s*:\\s*"${hex}"`, "i").test(src)
);
if (missing.length) {
  console.error("FAIL: missing or mismatched tokens:");
  for (const [key, hex] of missing) console.error(`  ${key}: expected ${hex}`);
  process.exit(1);
}

const tailwind = readFileSync("tailwind.config.ts", "utf8");
const missingTailwindKeys = ["ink-2", "ink-3"].filter(
  (key) => !new RegExp(`"${key}"\\s*:`).test(tailwind)
);
if (missingTailwindKeys.length) {
  console.error(
    `FAIL: missing Tailwind color keys: ${missingTailwindKeys.join(", ")}`
  );
  process.exit(1);
}

const missingTailwindHexes = Object.entries(EXPECTED).filter(
  ([, hex]) => !tailwind.toUpperCase().includes(hex.toUpperCase())
);
if (missingTailwindHexes.length) {
  console.error("FAIL: Tailwind config is missing palette hexes:");
  for (const [key, hex] of missingTailwindHexes) {
    console.error(`  ${key}: ${hex}`);
  }
  process.exit(1);
}

const luminance = (hex) => {
  const n = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4]
    .map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const PAIRS = [
  ["ink/paper", EXPECTED.ink, EXPECTED.paper, 4.5],
  ["ink/sheet", EXPECTED.ink, EXPECTED.sheet, 4.5],
  ["ink/butter", EXPECTED.ink, EXPECTED.butter, 4.5],
  ["ink/highlight", EXPECTED.ink, EXPECTED.highlight, 4.5],
  ["ink/pinkLight", EXPECTED.ink, EXPECTED.pinkLight, 4.5],
  ["ink/sky", EXPECTED.ink, EXPECTED.sky, 4.5],
  ["ink/mintLight", EXPECTED.ink, EXPECTED.mintLight, 4.5],
  ["white/cobalt", "#FFFFFF", EXPECTED.cobalt, 4.5],
  ["white/tomatoDark", "#FFFFFF", EXPECTED.tomatoDark, 4.5],
  ["ink2/paper", EXPECTED.ink2, EXPECTED.paper, 4.5],
  ["ink3/sheet", EXPECTED.ink3, EXPECTED.sheet, 4.5],
  ["white/tomato (large only)", "#FFFFFF", EXPECTED.tomato, 3],
  ["tomatoDark/tomatoLight (large only)", EXPECTED.tomatoDark, EXPECTED.tomatoLight, 3],
  ["skyInk/sky", EXPECTED.skyInk, EXPECTED.sky, 4.5],
  ["mintDark/mintLight", EXPECTED.mintDark, EXPECTED.mintLight, 4.5],
];

const failures = PAIRS.filter(([, a, b, min]) => ratio(a, b) < min);
if (failures.length) {
  console.error("FAIL: contrast failures:");
  for (const [name, a, b, min] of failures) {
    console.error(`  ${name}: ${ratio(a, b).toFixed(2)} < ${min}`);
  }
  process.exit(1);
}
console.log(`PASS: ${Object.keys(EXPECTED).length} tokens, ${PAIRS.length} contrast pairs`);
