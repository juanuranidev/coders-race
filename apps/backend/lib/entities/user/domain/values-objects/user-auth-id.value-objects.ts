import { ValueObject } from "@shared/domain/values-objects/value-object";
import { UserAuthIdTooLongError } from "../errors/user-auth-id-too-long.errors";

export class UserAuthId extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
    this.ensureAuthIdIsNotLongerThan256Characters();
  }

  private ensureAuthIdIsNotLongerThan256Characters(): void {
    if (this.value.length > 256) {
      throw new UserAuthIdTooLongError();
    }
  }
}
