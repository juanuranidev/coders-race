import { ValueObject } from "@shared/domain/values-objects/value-object";
import { UserImageTooLongError } from "@user/domain/errors/user-image-too-long.errors";

export class UserImage extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
    this.ensureImageIsNotLongerThan256Characters();
  }

  private ensureImageIsNotLongerThan256Characters(): void {
    if (this.value.length > 256) {
      throw new UserImageTooLongError();
    }
  }
}
