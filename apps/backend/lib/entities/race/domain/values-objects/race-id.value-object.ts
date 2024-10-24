import { ValueObject } from "@shared/domain/values-objects/value-object";

export class RaceId extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
  }
}
