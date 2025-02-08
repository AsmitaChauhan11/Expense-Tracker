import dotenv from "dotenv";
dotenv.config();

import { defineConfig } from "drizzle-kit";

console.log("Database URL:", process.env.DATABASE_URL);

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
});
