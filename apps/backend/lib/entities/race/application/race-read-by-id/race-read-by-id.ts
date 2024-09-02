import { Race } from "@race/domain/entities/race.entity";
import { RaceRepository } from "@race/domain/repositories/race.repository";

export class RaceReadById {
  constructor(private repository: RaceRepository) {}

  async run(id: string): Promise<Race> {
    return this.repository.readById(id);
  }
}
