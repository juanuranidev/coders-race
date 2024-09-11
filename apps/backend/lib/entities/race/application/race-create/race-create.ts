import { Code } from "@code/domain/entities/code.entity";
import { Race } from "@race/domain/entities/race.entity";
import { Language } from "@language/domain/entities/language.entity";
import { RaceRepository } from "@race/domain/repositories/race.repository";

export class RaceCreate {
  constructor(private repository: RaceRepository) {}

  async run(
    id: string,
    cpm: number,
    timeInMS: number,
    code: Code,
    language: Language
  ): Promise<void> {
    const race = new Race(id, cpm, timeInMS, code, language);

    return this.repository.create(race);
  }
}
