import { ValueObject } from "@shared/domain/values-objects/value-object";

export class RaceCPM extends ValueObject<number> {
  constructor(readonly value: number) {
    super(value);
  }
}
