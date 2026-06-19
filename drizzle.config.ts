import "dotenv/config";
import { defineConfig } from "drizzle-kit";

console.log("=======>", process.env.POSTGRES_URL);

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schemas/users.schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
