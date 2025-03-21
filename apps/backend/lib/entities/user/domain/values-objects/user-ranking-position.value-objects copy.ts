import { ValueObject } from "@shared/domain/values-objects/value-object";

export class UserRankingPosition extends ValueObject<number> {
  constructor(readonly value: number) {
    super(value);
  }
}
