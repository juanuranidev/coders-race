import { Pool } from "pg";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";
import ENVS from "@shared/infraestructure/config/envs/envs";

const pool = new Pool({
  connectionString: ENVS.POSTGRES_URL,
});

const db = drizzle(pool, { schema });

async function main() {
  try {
    console.log("Migrations started ⚠️");
    await migrate(db, {
      migrationsFolder: "lib/shared/infraestructure/dbs/postgres/migrations",
      migrationsTable: "migrations",
    });

    console.log("Migrations ended correctly ✅");
    process.exit();
  } catch (error) {
    console.log("Error in migrations 🚫:", error);
  }
}

main();