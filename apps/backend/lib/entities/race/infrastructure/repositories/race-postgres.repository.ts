import {
  codes,
  races,
  languages,
  PostgresRace,
} from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import { eq } from "drizzle-orm";
import { Race } from "@race/domain/entities/race.entity";
import { Code } from "@code/domain/entities/code.entity";
import { Client } from "pg";
import * as schema from "@shared/infrastructure/dbs/postgres/schemas/postgres.schemas";
import { Language } from "@language/domain/entities/language.entity";
import { RaceRepository } from "@race/domain/repositories/race.repository";
import { RaceNotFoundError } from "@race/domain/errors/race-not-found.error";
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
    const language = new Language(race?.language?.id!, race?.language?.name!);
    const code = new Code(race?.code?.id!, race?.code?.text!, language);

    return new Race(race.id, race.cpm, race.timeInMS, code, language);
  }

  async create(race: Race): Promise<void> {
    await this.dbClient
      .insert(races)
      .values({
        id: race.getId(),
        cpm: race.getCPM(),
        timeInMS: race.getTimeInMS(),
        code: race.getCode().getId(),
        language: race.getLanguage().getId(),
      })
      .returning();

    return;
  }
  async readById(raceId: string): Promise<Race | null> {
    const [race]: PostgresRace[] = await this.dbClient
      .select({
        id: races.id,
        code: {
          id: codes.id,
          text: codes.text,
        },
        cpm: races.cpm,
        timeInMS: races.timeInMS,
        language: {
          id: languages.id,
          name: languages.name,
        },
      })
      .from(races)
      .where(eq(races.id, raceId))
      .leftJoin(languages, eq(languages.id, races.language))
      .leftJoin(codes, eq(codes.id, races.code));

    if (!race) {
      return null;
    }

    return this.mapPostgresRaceToEntity(race);
  }
}
