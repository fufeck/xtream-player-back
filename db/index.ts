import "dotenv/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const sql = postgres(process.env.POSTGRES_URL!);
export const db = drizzle(sql);
