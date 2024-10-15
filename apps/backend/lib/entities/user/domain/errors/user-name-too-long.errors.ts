export class UserNameTooLongError extends Error {
    constructor() {
        super("Name cannot be longer than 256 characters");
        this.name = "UserNameTooLongError";
    }
}
