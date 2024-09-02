import { Code } from "@code/domain/entities/code.entity";
import { RaceId } from "@race/domain/values-objects/race-id.value-object";
import { RaceCPM } from "@race/domain/values-objects/race-cpm.value-object";
import { Language } from "@language/domain/entities/language.entity";
import { RaceTimeInMS } from "@race/domain/values-objects/race-time-in-ms.value-object";

export class Race {
  private id: RaceId;
  private code: Code;
  private cpm: RaceCPM;
  private timeInMS: RaceTimeInMS;
  private language: Language;

  constructor(
    id: string,
    code: Code,
    cpm: number,
    timeInMS: number,
    language: Language
  ) {
    this.id = new RaceId(id);
    this.code = code;
    this.cpm = new RaceCPM(cpm);
    this.timeInMS = new RaceTimeInMS(timeInMS);
    this.language = language;
  }

  public mapToPrimitives() {
    return {
      id: this.id,
      code: this.code,
      cpm: this.cpm,
      timeInMS: this.timeInMS,
      language: this.language,
    };
  }
}
