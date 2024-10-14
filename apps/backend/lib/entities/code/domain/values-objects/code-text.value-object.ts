import { ValueObject } from '@shared/domain/values-objects/value-object';
import { CodeTextTooLongError } from '@code/domain/errors/code-text-too-long.error';

export class CodeText extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value);
    this.ensureTextIsNotLargerThan500Characters(value);
  }

  private ensureTextIsNotLargerThan500Characters(value: string): void {
    if (value.length > 500) {
      throw new CodeTextTooLongError();
    }
  }
}
