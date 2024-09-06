import { Client } from "pg";
import * as schema from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";
import { drizzle } from "drizzle-orm/node-postgres";
import ENVS from "@shared/infraestructure/config/envs/envs";

const client = new Client({
  connectionString: ENVS.POSTGRES_URL,
});

client.connect();

export const dbClient = drizzle(client, { schema });
