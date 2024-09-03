import { Code } from "lib/entities/code/domain/entities/code.entity";
import { CodeRepository } from "lib/entities/code/domain/repositories/code.repository";
import { Client, Pool } from "pg";
import * as schema from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { codes } from "@shared/infraestructure/dbs/postgres/schemas/postgres.schemas";

export class CodePostgresRepository implements CodeRepository {
  private dbClient: NodePgDatabase<typeof schema>;

  constructor(databaseUrl: string) {
    const client = new Client({
      connectionString: databaseUrl,
    });
    client.connect();

    this.dbClient = drizzle(client, { schema });
  }

  async create(code: Code): Promise<void> {
    const [codeCreated] = await this.dbClient.select().from(codes);
  }
  async readRandom(): Promise<Code> {
    throw new Error("Method not implemented.");
  }
}
