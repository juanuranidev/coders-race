import { Client } from "pg";
import { Language } from "@language/domain/entities/language.entity";
import { LanguageRepository } from "@language/domain/repositories/language.repository";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";

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
