export class UserGithubUsernameTooLongError extends Error {
    constructor() {
        super("Github username cannot be longer than 256 characters");
        this.name = "UserGithubUsernameTooLongError";
    }
}
