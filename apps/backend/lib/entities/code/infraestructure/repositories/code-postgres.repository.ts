import {
  codes,
  languages,
  CodePostgres,
} from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";
import { eq } from "drizzle-orm";
import { Code } from "lib/entities/code/domain/entities/code.entity";
import { Client } from "pg";
import { Language } from "@language/domain/entities/language.entity";
import * as schema from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";
import { CodeRepository } from "lib/entities/code/domain/repositories/code.repository";
import { CodeNotFoundError } from "@code/domain/errors/code-not-found";
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

  private mapPostgresCodeToEntity(code: CodePostgres): Code {
    const languageEntity: Language | undefined = code.language
      ? new Language(code.language.id, code.language.name)
      : undefined;

    return new Code(code.id, code.text, languageEntity);
  }

  async readById(codeId: number): Promise<Code> {
    const [codeFound]: CodePostgres[] = await this.dbClient
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
      throw new CodeNotFoundError();
    }

    return this.mapPostgresCodeToEntity(codeFound);
  }
  async readRandomByLanguage(language: Language): Promise<Code> {
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

    return this.mapPostgresCodeToEntity(randomCode);
  }
}
