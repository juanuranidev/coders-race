import { sql } from "drizzle-orm";
import { Client } from "pg";
import * as schema from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import { Language } from "@language/domain/entities/language.entity";
import { LanguageRepository } from "@language/domain/repositories/language.repository";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import {
  languages,
  PostgresLanguage,
} from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";

export class LanguagePostgresRepository implements LanguageRepository {
  private dbClient: NodePgDatabase<typeof schema>;

  constructor(databaseUrl: string) {
    const client = new Client({
      connectionString: databaseUrl,
    });
    client.connect();

    this.dbClient = drizzle(client, { schema });
  }
  private mapPostgresLanguageToEntity(language: PostgresLanguage): Language {
    return new Language(language.id, language.name);
  }

  async readAll(): Promise<Language[]> {
    const languagesList: PostgresLanguage[] = await this.dbClient
      .select()
      .from(languages);

    return languagesList.map((language: PostgresLanguage) =>
      this.mapPostgresLanguageToEntity(language)
    );
  }
  async readByName(languageName: string): Promise<Language | null> {
    const [language]: PostgresLanguage[] = await this.dbClient
      .select()
      .from(languages)
      .where(sql`LOWER(${languages.name}) = LOWER(${languageName})`);

    if (!language) {
      return null;
    }

    return this.mapPostgresLanguageToEntity(language);
  }
}
