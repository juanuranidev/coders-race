import { Race } from "@race/domain/entities/race.entity";

export interface RaceRepository {
  create(race: Race): Promise<void>;
  readByUserId(userId: string): Promise<Race[]>;
}
