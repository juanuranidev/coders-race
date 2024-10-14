export class RaceCreateDto {
  private constructor(
    public readonly codeId: number,
    public readonly cps: number,
    public readonly timeInMS: number,
    public readonly userId: string
  ) { }

  static run(data: { [key: string]: any }): [string?, RaceCreateDto?] {
    const { codeId, cps, timeInMS, userId } = data;

    if (!codeId) return ['codeId paramtere is required', undefined];
    if (!cps) return ['cps parameter is required', undefined];
    if (!timeInMS) return ['timeInMS parameter is required', undefined];
    if (!userId) return ['userId parameter is required', undefined];

    return [
      undefined,
      new RaceCreateDto(codeId, Number(cps.toFixed(2)), timeInMS, userId),
    ];
  }
}
