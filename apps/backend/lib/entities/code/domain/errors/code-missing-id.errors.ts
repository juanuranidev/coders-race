export class MissingCodeIdError extends Error {
  constructor() {
    super("Code id is required");
    this.name = "MissingCodeIdError";
  }
}
