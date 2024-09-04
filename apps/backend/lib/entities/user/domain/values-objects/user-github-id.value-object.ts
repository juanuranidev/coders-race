import { ValueObject } from "@shared/domain/values-objects/value-object";

export class UserGithubId extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
  }
}
