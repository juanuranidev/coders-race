import { ValueObject } from "@shared/domain/values-objects/value-object";

export class UserRacesCompleted extends ValueObject<number> {
  constructor(readonly value: number) {
    super(value);
  }
}
