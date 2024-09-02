import ENVS from "@shared/infrastructure/config/envs/envs";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema:
    "./lib/shared/infrastructure/dbs/postgres/schemas/postgres.schemas.ts",
  out: "./lib/shared/infrastructure/dbs/postgres/migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: ENVS.POSTGRES_PORT,
    user: ENVS.POSTGRES_USER,
    password: ENVS.POSTGRES_PASSWORD,
    database: ENVS.POSTGRES_DB,
  },
});
