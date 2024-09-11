import { User } from "@user/domain/entities/user.entity";
import { Client } from "pg";
import * as schema from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import { UserRepository } from "@user/domain/repositories/user.repository";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

export class UserPostgresRepository implements UserRepository {
  private dbClient: NodePgDatabase<typeof schema>;

  constructor(databaseUrl: string) {
    const client = new Client({
      connectionString: databaseUrl,
    });
    client.connect();

    this.dbClient = drizzle(client, { schema });
  }
  readById(userId: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  readByGithubId(githubId: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  readAllUsersLeaderboard(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
}
