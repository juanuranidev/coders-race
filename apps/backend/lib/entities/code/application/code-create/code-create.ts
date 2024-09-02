import { Code } from "@code/domain/entities/code.entity";
import { Language } from "@language/domain/entities/language.entity";
import { CodeRepository } from "@code/domain/repositories/code.repository";

export class CodeCreate {
  constructor(private repository: CodeRepository) {}

  async run(text: string, language: Language): Promise<void> {
    const code = new Code(text, language);

    return this.repository.create(code);
  }
}
