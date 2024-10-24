import { ValueObject } from "@shared/domain/values-objects/value-object";

export class UserHighestCPS extends ValueObject<number> {
  constructor(readonly value: number) {
    super(value);
  }
}
