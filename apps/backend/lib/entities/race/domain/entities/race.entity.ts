import { Code } from '@code/domain/entities/code.entity';
import { User } from '@user/domain/entities/user.entity';
import { RaceId } from '@race/domain/values-objects/race-id.value-object';
import { RaceCPS } from '../values-objects/race-cps.value-object';
import { Language } from '@language/domain/entities/language.entity';
import { RaceTimeInMS } from '@race/domain/values-objects/race-time-in-ms.value-object';

export class Race {
  private id: RaceId;
  private cps: RaceCPS;
  private timeInMS: RaceTimeInMS;
  private code: Code;
  private language: Language;
  private user?: User;

  constructor(
    id: string,
    cps: number,
    timeInMS: number,
    code: Code,
    language: Language,
    user?: User | null | undefined
  ) {
    this.id = new RaceId(id);
    this.cps = new RaceCPS(cps);
    this.timeInMS = new RaceTimeInMS(timeInMS);
    this.code = code;
    this.language = language;
    this.user = user ?? undefined;
  }

  public getId(): string {
    return this.id.value;
  }

  public getCPS(): number {
    return this.cps.value;
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

  public getUser(): User | undefined {
    return this.user;
  }

  public mapToPrimitives() {
    return {
      id: this.id.value,
      cps: this.cps.value,
      timeInMS: this.timeInMS.value,
      code: this.code.mapToPrimitives(),
      language: this.language.mapToPrimitives(),
      user: this.user?.mapToPrimitives(),
    };
  }
}
