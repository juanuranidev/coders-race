import { User } from '@user/domain/entities/user.entity';
import { Client } from 'pg';
import * as schema from '@shared/infrastructure/dbs/postgres/schemas/postgres.schemas';
import {
  races,
  users,
  languages,
} from '@shared/infrastructure/dbs/postgres/schemas/postgres.schemas';
import { UserRepository } from '@user/domain/repositories/user.repository';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { avg, count, desc, eq, max, sql, sum } from 'drizzle-orm';

export class UserPostgresRepository implements UserRepository {
  private dbClient: NodePgDatabase<typeof schema>;

  constructor(databaseUrl: string) {
    const client = new Client({
      connectionString: databaseUrl,
    });
    client.connect();

    this.dbClient = drizzle(client, { schema });
  }
  private mapPostgresUserToEntity(user: schema.PostgresUser): User {
    return new User(
      user.id,
      user.name,
      user.image,
      user.authId,
      user.githubId,
      user.githubUsername
    );
  }
  async create(user: User): Promise<User> {
    const [userCreated]: schema.PostgresUser[] = await this.dbClient
      .insert(schema.users)
      .values({
        id: user.getId(),
        name: user.getName(),
        image: user.getImage(),
        authId: user.getAuthId(),
        githubId: user.getGithubId(),
        githubUsername: user.getGithubUsername(),
      })
      .returning();

    return this.mapPostgresUserToEntity(userCreated);
  }
  async readById(userId: string): Promise<User> {
    const [userFound]: schema.PostgresUser[] = await this.dbClient
      .select()
      .from(users)
      .where(eq(users.id, userId));

    if (!userFound) {
      throw '';
    }

    return this.mapPostgresUserToEntity(userFound);
  }
  async readProfile(userId: string): Promise<User> {
    const user: User = await this.readById(userId);

    const [{ count: racesCompleted }] = await this.dbClient
      .select({ count: count() })
      .from(races)
      .where(eq(races.userId, userId));

    const [{ totalTime }] = await this.dbClient
      .select({ totalTime: sum(races.timeInMS) })
      .from(races)
      .where(eq(races.userId, userId));

    const [{ highestCPS }] = await this.dbClient
      .select({ highestCPS: max(races.cps) })
      .from(races)
      .where(eq(races.userId, userId));

    const userWithProfile = new User(
      user.getId(),
      user.getName(),
      user.getImage(),
      user.getAuthId(),
      user.getGithubId(),
      user.getGithubUsername(),
      racesCompleted,
      totalTime ? parseInt(totalTime) : 0,
      highestCPS ? parseFloat(highestCPS) : 0,

    );

    return userWithProfile;
  }
  async readByAuthId(authId: string): Promise<User | null> {
    const [userFound]: schema.PostgresUser[] = await this.dbClient
      .select()
      .from(users)
      .where(eq(users.authId, authId));

    if (!userFound) {
      return null;
    }

    return this.mapPostgresUserToEntity(userFound);
  }
  async readLeaderboard(): Promise<User[]> {
    const usersWithStats: {
      user: schema.PostgresUser;
      averageCPS: string | null;
      racesCompleted: number;
      topLanguageName: string;
    }[] = await this.dbClient
      .select({
        user: users,
        averageCPS: avg(races.cps),
        racesCompleted: count(races.id),
        topLanguageName: sql<string>`
          (SELECT ${languages.name}
           FROM ${languages}
           JOIN ${races} ON ${languages.id} = ${races.language}
           WHERE ${races.userId} = ${users.id}
           GROUP BY ${languages.id}, ${languages.name}
           ORDER BY COUNT(*) DESC
           LIMIT 1)
        `,
      })
      .from(users)
      .leftJoin(races, eq(users.id, races.userId))
      .groupBy(users.id)
      .orderBy(desc(avg(races.cps)));

    return usersWithStats.map(({ user, racesCompleted, averageCPS, topLanguageName }) => {
      const userEntity = this.mapPostgresUserToEntity(user);

      userEntity.setRacesCompleted(Number(racesCompleted));
      userEntity.setAverageCPS(Number(averageCPS));
      userEntity.setTopLanguage(topLanguageName);

      return userEntity;
    });
  }
}
