export class MissingRaceIdError extends Error {
  constructor() {
    super("Race id is required");
    this.name = "MissingRaceIdError";
  }
}
