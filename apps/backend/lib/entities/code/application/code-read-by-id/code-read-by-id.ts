import { Code } from '@code/domain/entities/code.entity';
import { CodeRepository } from '@code/domain/repositories/code.repository';
import { CodeNotFoundError } from '@code/domain/errors/code-not-found';

export class CodeReadById {
  constructor(private repository: CodeRepository) {}

  async run(codeId: number): Promise<Code> {
    const code: Code | null = await this.repository.readById(codeId);

    if (!code) {
      throw new CodeNotFoundError();
    }

    return code;
  }
}
