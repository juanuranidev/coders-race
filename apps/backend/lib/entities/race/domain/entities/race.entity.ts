import { Code } from "@code/domain/entities/code.entity";
import { RaceId } from "@race/domain/values-objects/race-id.value-object";
import { RaceCPM } from "@race/domain/values-objects/race-cpm.value-object";
import { Language } from "@language/domain/entities/language.entity";
import { RaceTimeInMS } from "@race/domain/values-objects/race-time-in-ms.value-object";

export class Race {
  private id: RaceId;
  private cpm: RaceCPM;
  private timeInMS: RaceTimeInMS;
  private code: Code;
  private language: Language;

  constructor(
    id: string,
    cpm: number,
    timeInMS: number,
    code: Code,
    language: Language
  ) {
    this.id = new RaceId(id);
    this.cpm = new RaceCPM(cpm);
    this.timeInMS = new RaceTimeInMS(timeInMS);
    this.code = code;
    this.language = language;
  }

  public getId(): string {
    return this.id.value;
  }

  public getCPM(): number {
    return this.cpm.value;
  }

  public getTimeInMS(): number {
    return this.timeInMS.value;
  }

  public getCode(): Code {
    return this.code;
  }
  public getLanguage(): Language {
    return this.language;
  }

  public mapToPrimitives() {
    return {
      id: this.id.value,
      cpm: this.cpm.value,
      timeInMS: this.timeInMS.value,
      code: this.code.mapToPrimitives(),
      language: this.language.mapToPrimitives(),
    };
  }
}
