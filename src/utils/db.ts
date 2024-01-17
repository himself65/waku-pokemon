import { getEnv } from "waku";
import { neon } from "@neondatabase/serverless";

const url = getEnv("DATABASE_URL");
if (!url) {
  throw new Error("WAKU_DATABASE_URL is not defined");
}

export const sql = neon(url);
