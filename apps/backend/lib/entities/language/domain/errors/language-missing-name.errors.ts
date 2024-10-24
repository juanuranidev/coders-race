export class LanguageMissingNameError extends Error {
  constructor() {
    super("Language name is required");
    this.name = "LanguageMissingNameError";
  }
}
