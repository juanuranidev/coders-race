import { Race } from "@race/domain/entities/race.entity";
import { RaceRepository } from "@race/domain/repositories/race.repository";

export class RaceReadByUserId {
  constructor(private repository: RaceRepository) {}

  async run(userId: string): Promise<Race[]> {
    const races: Race[] = await this.repository.readByUserId(userId);

    return races;
  }
}
