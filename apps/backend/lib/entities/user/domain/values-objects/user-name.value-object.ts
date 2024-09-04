import { ValueObject } from "@shared/domain/values-objects/value-object";

export class UserName extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
  }
}
