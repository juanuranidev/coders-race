import { Code } from "@code/domain/entities/code.entity";
import { CodeRepository } from "@code/domain/repositories/code.repository";
import { Language } from "@language/domain/entities/language.entity";

export class CodeReadRandomByLanguage {
  constructor(private repository: CodeRepository) {}

  async run(language: Language): Promise<Code> {
    return this.repository.readRandomByLanguage(language);
  }
}
