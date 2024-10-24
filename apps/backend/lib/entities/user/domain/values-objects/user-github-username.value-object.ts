import { ValueObject } from "@shared/domain/values-objects/value-object";
import { UserGithubUsernameTooLongError } from "@user/domain/errors/user-github-username-too-long.errors";

export class UserGithubUsername extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
    this.ensureGithubUsernameIsNotLongerThan256Characters();
  }

  private ensureGithubUsernameIsNotLongerThan256Characters(): void {
    if (this.value.length > 256) {
      throw new UserGithubUsernameTooLongError();
    }
  }
}
