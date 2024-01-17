import { getEnv } from "waku";
import { neon } from "@neondatabase/serverless";

// fixme: https://github.com/dai-shi/waku/issues/388
// @ts-ignore
globalThis.__WAKU_PRIVATE_ENV__ = process.env;
const url = getEnv("DATABASE_URL");
if (!url) {
  throw new Error("DATABASE_URL is not defined");
}

export const sql = neon(url);
