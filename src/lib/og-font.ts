import { readFile } from "node:fs/promises";
import path from "node:path";

let cached: Promise<Buffer> | undefined;

export function loadOgFont(): Promise<Buffer> {
  cached ??= readFile(
    path.join(process.cwd(), "src/assets/fonts/ArchivoBlack-Regular.ttf")
  );
  return cached;
}
