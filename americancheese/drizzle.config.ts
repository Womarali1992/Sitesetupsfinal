import { defineConfig } from "drizzle-kit";

if (!process.env.PGPASSWORD && !process.env.DB_PASSWORD) {
  console.warn("Database password not set. Database migrations will not be available.");
  console.warn("To enable database features, create a .env file with your DB credentials.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.PGHOST || process.env.DB_HOST || "localhost",
    port: parseInt(process.env.PGPORT || process.env.DB_PORT || "5432"),
    database: process.env.PGDATABASE || process.env.DB_NAME || "project_management",
    user: process.env.PGUSER || process.env.DB_USER || "postgres",
    password: process.env.PGPASSWORD || process.env.DB_PASSWORD || "",
    ssl: false,
  },
});
