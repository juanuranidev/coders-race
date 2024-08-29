import { CreateRaceDto } from "../dtos/race/create-race.dto";
import { RaceEntity } from "../entities/race.entity";

export abstract class RaceRepository {
  abstract create(race: CreateRaceDto): Promise<RaceEntity>;
  abstract getById(id: number): Promise<RaceEntity>;
}
