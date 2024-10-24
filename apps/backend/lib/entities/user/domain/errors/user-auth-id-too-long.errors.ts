export class UserAuthIdTooLongError extends Error {
  constructor() {
    super("Auth ID cannot be longer than 256 characters");
    this.name = "UserAuthIdTooLongError";
  }
}
