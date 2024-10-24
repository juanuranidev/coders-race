export class RaceMissingIdError extends Error {
  constructor() {
    super("Race id is required");
    this.name = "RaceMissingIdError";
  }
}
