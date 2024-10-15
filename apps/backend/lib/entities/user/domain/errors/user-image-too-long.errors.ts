export class UserImageTooLongError extends Error {
    constructor() {
        super("Image cannot be longer than 256 characters");
        this.name = "UserImageTooLongError";
    }
}
