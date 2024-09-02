import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Language } from "@language/domain/entities/language.entity";
import { Race } from "@race/domain/entities/race.entity";
import { RaceRepository } from "@race/domain/repositories/race.repository";
import { Client, Pool } from "pg";
import * as schema from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";

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
