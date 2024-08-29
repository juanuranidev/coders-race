import { RaceEntity } from "../../entities/race.entity";
import { RaceRepository } from "../../repositories/race.repository";

export interface GetRaceByIdInterface {
  execute(id: number): Promise<RaceEntity>;
}

export class GetRaceById implements GetRaceByIdInterface {
  constructor(private readonly repository: RaceRepository) {}

  execute(id: number): Promise<RaceEntity> {
    return this.repository.getById(id);
  }
}
