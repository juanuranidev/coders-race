export class RaceCreateDto {
  private constructor(
    public readonly codeId: number,
    public readonly cpm: number,
    public readonly timeInMS: number
  ) {}

  static run(data: { [key: string]: any }): [string?, RaceCreateDto?] {
    const { codeId, cpm, timeInMS } = data;

    if (!codeId) return ["codeId paramtere is required", undefined];
    if (!cpm) return ["cpm paramtere is required", undefined];
    if (!timeInMS) return ["timeInMS paramtere is required", undefined];

    return [undefined, new RaceCreateDto(codeId, cpm, timeInMS)];
  }
}
