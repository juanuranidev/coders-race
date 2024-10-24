export class CodeMissingIdError extends Error {
  constructor() {
    super("Code id is required");
    this.name = "CodeMissingIdError";
  }
}
