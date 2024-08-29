export class RaceEntity {
  constructor(
    public id: number,
    public code: any,
    public cpm: number,
    public timeInMs: number,
    public user: any,
    public language?: string
  ) {}

  public static fromObject(object: { [key: string]: any }): RaceEntity {
    const { id, code, cpm, timeInMs, user, language } = object;

    if (!id) throw "id is required";
    if (!code) throw "code is required";
    if (!cpm) throw "cpm is required";
    if (!user) throw "user is required";
    if (!timeInMs) throw "timeInMs is required";

    return new RaceEntity(id, code, cpm, timeInMs, user, language);
  }
}
