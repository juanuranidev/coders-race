import { Language } from "@language/domain/entities/language.entity";
import { Code } from "@code/domain/entities/code.entity";
import { Race } from "@race/domain/entities/race.entity";
import { RaceRepository } from "@race/domain/repositories/race.repository";

export class RaceCreate {
  constructor(private repository: RaceRepository) {}

  async run(
    id: string,
    code: Code,
    cpm: number,
    timeInMS: number,
    language: Language
  ): Promise<void> {
    const race = new Race(id, code, cpm, timeInMS, language);

    return this.repository.create(race);
  }
}
