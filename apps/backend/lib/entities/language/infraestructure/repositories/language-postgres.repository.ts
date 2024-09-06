import { Client } from "pg";
import { Language } from "@language/domain/entities/language.entity";
import { LanguageRepository } from "@language/domain/repositories/language.repository";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";
import { languages } from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";
import { LanguageId } from "@language/domain/values-objects/language-id.value-object";
import { LanguageName } from "@language/domain/values-objects/language-name.value-object";

export class LanguagePostgresRepository implements LanguageRepository {
  private dbClient: NodePgDatabase<typeof schema>;

  constructor(databaseUrl: string) {
    const client = new Client({
      connectionString: databaseUrl,
    });
    client.connect();

    this.dbClient = drizzle(client, { schema });
  }
  private mapToDomain(language: any): Language {
    return new Language(language.id, language.name);
  }

  async readAll(): Promise<Language[]> {
    const languagesList = await this.dbClient.select().from(languages);

    return languagesList.map((language) => this.mapToDomain(language));
  }
  readByName(name: string): Promise<Language> {
    throw new Error("Method not implemented.");
  }
}
