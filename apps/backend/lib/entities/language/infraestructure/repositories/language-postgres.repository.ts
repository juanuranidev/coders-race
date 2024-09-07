import { eq } from "drizzle-orm";
import { Client } from "pg";
import * as schema from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";
import { Language } from "@language/domain/entities/language.entity";
import { LanguageRepository } from "@language/domain/repositories/language.repository";
import { LanguageNotFoundError } from "@language/domain/errors/language-not-found.errors";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import {
  languages,
  LanguagePostgres,
} from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";

export class LanguagePostgresRepository implements LanguageRepository {
  private dbClient: NodePgDatabase<typeof schema>;

  constructor(databaseUrl: string) {
    const client = new Client({
      connectionString: databaseUrl,
    });
    client.connect();

    this.dbClient = drizzle(client, { schema });
  }
  private mapPostgresLanguageToEntity(language: LanguagePostgres): Language {
    return new Language(language.id, language.name);
  }

  async readAll(): Promise<Language[]> {
    const languagesList: LanguagePostgres[] = await this.dbClient
      .select()
      .from(languages);

    return languagesList.map((language: LanguagePostgres) =>
      this.mapPostgresLanguageToEntity(language)
    );
  }
  async readByName(languageName: string): Promise<Language> {
    const [language]: LanguagePostgres[] = await this.dbClient
      .select()
      .from(languages)
      .where(eq(languages.name, languageName));

    if (!language) {
      throw new LanguageNotFoundError();
    }

    return this.mapPostgresLanguageToEntity(language);
  }
}
