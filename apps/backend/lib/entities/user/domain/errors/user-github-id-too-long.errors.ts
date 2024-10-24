export class UserGithubIdTooLongError extends Error {
  constructor() {
    super("Github ID cannot be longer than 256 characters");
    this.name = "UserGithubIdTooLongError";
  }
}
