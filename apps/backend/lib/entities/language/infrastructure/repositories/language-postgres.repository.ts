import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Language } from "@language/domain/entities/language.entity";
import { LanguageRepository } from "@language/domain/repositories/language.repository";
import { Code } from "lib/entities/code/domain/entities/code.entity";
import { CodeRepository } from "lib/entities/code/domain/repositories/code.repository";
import { Client, Pool } from "pg";
import * as schema from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";

export class LanguagePostgresRepository implements LanguageRepository {
  private dbClient: NodePgDatabase<typeof schema>;

  constructor(databaseUrl: string) {
    const client = new Client({
      connectionString: databaseUrl,
    });
    client.connect();

    this.dbClient = drizzle(client, { schema });
  }
  readAll(): Promise<Language[]> {
    throw new Error("Method not implemented.");
  }
  readByName(name: string): Promise<Language> {
    throw new Error("Method not implemented.");
  }
}
