import { ValueObject } from '@shared/domain/values-objects/value-object';
import { UserGithubIdTooLongError } from '@user/domain/errors/user-github-id-too-long.errors';

export class UserGithubId extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
    this.ensureGithubIdIsNotLongerThan256Characters();
  }

  private ensureGithubIdIsNotLongerThan256Characters(): void {
    if (this.value.length > 256) {
      throw new UserGithubIdTooLongError();
    }
  }
}
