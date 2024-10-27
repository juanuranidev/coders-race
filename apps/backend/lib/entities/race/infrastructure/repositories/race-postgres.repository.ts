import {
  codes,
  races,
  languages,
  PostgresRace,
} from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import { Race } from "@race/domain/entities/race.entity";
import { Code } from "@code/domain/entities/code.entity";
import { Client } from "pg";
import * as schema from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import { Language } from "@language/domain/entities/language.entity";
import { desc, eq, sql } from "drizzle-orm";
import { RaceRepository } from "@race/domain/repositories/race.repository";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";

export class RacePostgresRepository implements RaceRepository {
  private dbClient: NodePgDatabase<typeof schema>;

  constructor(databaseUrl: string) {
    const client = new Client({
      connectionString: databaseUrl,
    });
    client.connect();

    this.dbClient = drizzle(client, { schema });
  }
  private mapPostgresRaceToEntity(race: PostgresRace): Race {
    const language: Language = new Language(
      race?.language?.id!,
      race?.language?.name!
    );
    const code: Code = new Code(race?.code?.id!, race?.code?.text!, language);

    return new Race(
      race.id,
      Number(race.cps),
      race.timeInMS,
      code,
      language,
      race.createdAt
    );
  }
  async create(race: Race): Promise<void> {
    await this.dbClient
      .insert(races)
      .values({
        id: race.getId(),
        cps: sql`${race.getCPS()}::decimal(5,2)`,
        timeInMS: race.getTimeInMS(),
        code: race.getCode().getId(),
        language: race.getLanguage().getId(),
        userId: race.getUser()?.getId()!,
      })
      .returning();

    return;
  }
  async readByUserId(userId: string): Promise<Race[]> {
    const raceData: PostgresRace[] = await this.dbClient
      .select({
        id: races.id,
        cps: races.cps,
        timeInMS: races.timeInMS,
        code: {
          id: codes.id,
          text: codes.text,
        },
        language: {
          id: languages.id,
          name: languages.name,
        },
        createdAt: races.createdAt,
        userId: races.userId,
      })
      .from(races)
      .where(eq(races.userId, userId))
      .leftJoin(languages, eq(languages.id, races.language))
      .leftJoin(codes, eq(codes.id, races.code))
      .limit(5)
      .orderBy(desc(races.createdAt));

    const racesList = raceData.map((race) =>
      this.mapPostgresRaceToEntity(race)
    );
    return racesList;
  }
}
