import {
  codes,
  languages,
  PostgresCode,
} from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import { eq } from "drizzle-orm";
import { Code } from "@code/domain/entities/code.entity";
import { Client } from "pg";
import { Language } from "@language/domain/entities/language.entity";
import * as schema from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import { CodeRepository } from "@code/domain/repositories/code.repository";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

export class CodePostgresRepository implements CodeRepository {
  private dbClient: NodePgDatabase<typeof schema>;

  constructor(databaseUrl: string) {
    const client = new Client({
      connectionString: databaseUrl,
    });
    client.connect();

    this.dbClient = drizzle(client, { schema });
  }

  private mapPostgresCodeToEntity(code: PostgresCode): Code {
    const languageEntity: Language = new Language(
      code?.language?.id!,
      code?.language?.name!
    );

    return new Code(code.id, code.text, languageEntity);
  }

  async readById(codeId: number): Promise<Code | null> {
    const [codeFound]: PostgresCode[] = await this.dbClient
      .select({
        id: codes.id,
        text: codes.text,
        language: {
          id: languages.id,
          name: languages.name,
        },
      })
      .from(codes)
      .where(eq(codes.id, codeId))
      .leftJoin(languages, eq(languages.id, codes.language));

    if (!codeFound) {
      return null;
    }

    return this.mapPostgresCodeToEntity(codeFound);
  }
  async readRandomByLanguage(language: Language): Promise<Code | null> {
    const allCodes = await this.dbClient
      .select({
        id: codes.id,
        text: codes.text,
        language: languages,
      })
      .from(codes)
      .where(eq(codes.language, language.getId()))
      .leftJoin(languages, eq(languages.id, codes.language));

    const randomIndex = Math.floor(Math.random() * allCodes.length);
    const randomCode = allCodes[randomIndex];

    if (!randomCode) {
      return null;
    }

    return this.mapPostgresCodeToEntity(randomCode);
  }
}
