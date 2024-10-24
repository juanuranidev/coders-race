import { ValueObject } from "@shared/domain/values-objects/value-object";
import { UserNameTooLongError } from "@user/domain/errors/user-name-too-long.errors";

export class UserName extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
    this.ensureNameIsNotLongerThan256Characters();
  }

  private ensureNameIsNotLongerThan256Characters(): void {
    if (this.value.length > 256) {
      throw new UserNameTooLongError();
    }
  }
}
