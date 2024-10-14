import { ValueObject } from '@shared/domain/values-objects/value-object';

export class RaceTimeInMS extends ValueObject<number> {
  constructor(readonly value: number) {
    super(value);
  }
}
