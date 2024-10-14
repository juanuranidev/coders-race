import { Race } from '@race/domain/entities/race.entity';
import { RaceRepository } from '@race/domain/repositories/race.repository';
import { RaceNotFoundError } from './../../domain/errors/race-not-found.error';

export class RaceReadById {
  constructor(private repository: RaceRepository) {}

  async run(raceId: string): Promise<Race> {
    const race: Race | null = await this.repository.readById(raceId);

    if (!race) {
      throw new RaceNotFoundError();
    }

    return race;
  }
}
