import { Race } from "@race/domain/entities/race.entity";
import { Client } from "pg";
import * as schema from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";
import { RaceRepository } from "@race/domain/repositories/race.repository";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

export class RacePostgresRepository implements RaceRepository {
  private dbClient: NodePgDatabase<typeof schema>;

  constructor(databaseUrl: string) {
    const client = new Client({
      connectionString: databaseUrl,
    });
    client.connect();

    this.dbClient = drizzle(client, { schema });
  }
  create(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  readById(id: string): Promise<Race> {
    throw new Error("Method not implemented.");
  }
}
