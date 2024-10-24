export class CodeTextTooLongError extends Error {
  constructor() {
    super("Code text is too long");
    this.name = "CodeTextTooLongError";
  }
}
