import { Code } from "@code/domain/entities/code.entity";
import { Language } from "@language/domain/entities/language.entity";
import { CodeRepository } from "@code/domain/repositories/code.repository";
import { CodeNotFoundError } from "@code/domain/errors/code-not-found";

export class CodeReadRandomByLanguage {
  constructor(private repository: CodeRepository) {}

  async run(language: Language): Promise<Code> {
    const code: Code | null =
      await this.repository.readRandomByLanguage(language);

    if (!code) {
      throw new CodeNotFoundError();
    }

    return code;
  }
}
