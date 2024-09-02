import { ValueObject } from "lib/shared/domain/values-objects/value-object";

export class CodeText extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
  }
}
