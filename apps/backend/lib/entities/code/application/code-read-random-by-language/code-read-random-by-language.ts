import { Code } from "@code/domain/entities/code.entity";
import { Language } from "@language/domain/entities/language.entity";
import { CodeRepository } from "@code/domain/repositories/code.repository";
import { CodeNotFoundError } from "@code/domain/errors/code-not-found";
import { LanguageReadByName } from "@language/application/language-read-by-name/language-read-by-name";

export class CodeReadRandomByLanguage {
  constructor(
    private codeRepository: CodeRepository,
    private languageReadByName: LanguageReadByName
  ) {}

  async run(languageName: string): Promise<Code> {
    const language: Language = await this.languageReadByName.run(languageName);
    const code: Code | null =
      await this.codeRepository.readRandomByLanguage(language);
    if (!code) {
      throw new CodeNotFoundError();
    }

    return code;
  }
}
