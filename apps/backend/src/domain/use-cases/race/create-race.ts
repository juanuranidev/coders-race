import { RaceEntity } from "../../entities/race.entity";
import { CreateRaceDto } from "../../dtos/race/create-race.dto";
import { RaceRepository } from "../../repositories/race.repository";

export interface CreateRaceInterface {
  execute(race: CreateRaceDto): Promise<RaceEntity>;
}

export class CreateRace implements CreateRaceInterface {
  constructor(private readonly repository: RaceRepository) {}

  execute(race: CreateRaceDto): Promise<RaceEntity> {
    return this.repository.create(race);
  }
}
