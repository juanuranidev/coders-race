export class CreateRaceDto {
  constructor(
    public readonly user: number,
    public readonly code: number,
    public readonly cpm: number,
    public readonly timeInMs: number
  ) {}
  static create(props: { [key: string]: any }): [string?, CreateRaceDto?] {
    const { user, code, cpm, timeInMs } = props;

    if (!user) return ["User is required", undefined];
    if (!code) return ["Code is required", undefined];
    if (!cpm) return ["Cpm is required", undefined];
    if (!timeInMs) return ["TimeInMs is required", undefined];

    return [undefined, new CreateRaceDto(user, code, cpm, timeInMs)];
  }
}
