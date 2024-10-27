import { User } from "@user/domain/entities/user.entity";
import { Client } from "pg";
import * as schema from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import {
  races,
  users,
  languages,
} from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import { UserRepository } from "@user/domain/repositories/user.repository";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { avg, count, desc, eq, max, sql, sum } from "drizzle-orm";

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
  async readById(userId: string): Promise<User | null> {
    const [userFound]: schema.PostgresUser[] = await this.dbClient
      .select()
      .from(users)
      .where(eq(users.id, userId));

    if (!userFound) {
      return null;
    }

    return this.mapPostgresUserToEntity(userFound);
  }
  async readProfile(user: User): Promise<User> {
    const [{ count: racesCompleted }] = await this.dbClient
      .select({ count: count() })
      .from(races)
      .where(eq(races.userId, user.getId()));

    const [{ totalTime }] = await this.dbClient
      .select({ totalTime: sum(races.timeInMS) })
      .from(races)
      .where(eq(races.userId, user.getId()));

    const [{ highestCPS }] = await this.dbClient
      .select({ highestCPS: max(races.cps) })
      .from(races)
      .where(eq(races.userId, user.getId()));

    const userWithProfile = new User(
      user.getId(),
      user.getName(),
      user.getImage(),
      user.getAuthId(),
      user.getGithubId(),
      user.getGithubUsername(),
      racesCompleted,
      totalTime ? parseInt(totalTime) : 0,
      highestCPS ? parseFloat(highestCPS) : 0
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
      totalTimeInRaces: string | null;
      rankingPosition: number;
    }[] = await this.dbClient
      .select({
        user: users,
        averageCPS: avg(races.cps),
        racesCompleted: count(races.id),
        totalTimeInRaces: sum(races.timeInMS),
        topLanguageName: sql<string>`
        (SELECT ${languages.name}
        FROM ${languages}
        JOIN ${races} ON ${languages.id} = ${races.language}
        WHERE ${races.userId} = ${users.id}
        GROUP BY ${languages.id}, ${languages.name}
        ORDER BY COUNT(*) DESC
        LIMIT 1)
        `,
        rankingPosition: sql<number>`ROW_NUMBER() OVER (ORDER BY ${avg(races.cps)} DESC)`,
      })
      .from(users)
      .where(
        sql`EXISTS (SELECT 1 FROM ${races} WHERE ${races.userId} = ${users.id})`
      )
      .leftJoin(races, eq(users.id, races.userId))
      .groupBy(users.id)
      .orderBy(desc(avg(races.cps)));

    return usersWithStats.map(
      ({
        user,
        racesCompleted,
        averageCPS,
        topLanguageName,
        totalTimeInRaces,
        rankingPosition,
      }) => {
        const userEntity: User = this.mapPostgresUserToEntity(user);

        userEntity.setId("");
        userEntity.setAuthId("");
        userEntity.setTopLanguage(topLanguageName ?? "");
        userEntity.setRankingPosition(Number(rankingPosition));
        userEntity.setRacesCompleted(Number(racesCompleted));
        userEntity.setAverageCPS(parseFloat(Number(averageCPS).toFixed(2)));
        userEntity.setTotalTimeInRaces(
          parseInt(Number(totalTimeInRaces).toFixed(2))
        );

        return userEntity;
      }
    );
  }
}
