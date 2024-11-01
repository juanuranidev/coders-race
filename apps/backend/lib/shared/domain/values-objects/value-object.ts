import { InvalidArgumentError } from "@shared/domain/errors/invalid-argument.error";

export type Primitives = string | number | boolean | Date;

type Optional<T> = T | undefined | null;

export abstract class ValueObject<T extends Primitives> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
    this.ensureValueIsDefined(value);
    this.ensureValueIsTheSameAsParams(value);
  }

  equals(other: ValueObject<T>): boolean {
    return (
      other.constructor.name === this.constructor.name &&
      other.value === this.value
    );
  }

  toString(): string {
    return this.value.toString();
  }

  private ensureValueIsDefined(value: Optional<T>): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentError("Value must be defined");
    }
  }

  private ensureValueIsTheSameAsParams(value: T): void {
    if (value !== value) {
      throw new InvalidArgumentError("Value must be the same as the parameter");
    }
  }
}
