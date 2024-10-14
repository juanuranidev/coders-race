import { Race } from '@race/domain/entities/race.entity';

export interface RaceRepository {
  create(race: Race): Promise<void>;
  readById(raceId: string): Promise<Race | null>;
}
