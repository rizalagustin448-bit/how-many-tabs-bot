import { mkdirSync, writeFileSync } from "node:fs";

// Honest count of open browser tabs, digits only.
const TABS = 213;
const text = String(TABS);
if (!/^[0-9]{1,5}$/.test(text)) throw new Error("count must be 1-5 digits");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
