import { Code } from '@code/domain/entities/code.entity';
import { Language } from '@language/domain/entities/language.entity';
import { CodeRepository } from '@code/domain/repositories/code.repository';
import { CodeNotFoundError } from '@code/domain/errors/code-not-found';
import { LanguageRepository } from '@language/domain/repositories/language.repository';
import { LanguageNotFoundError } from '@language/domain/errors/language-not-found.errors';

export class CodeReadRandomByLanguage {
  constructor(
    private repository: CodeRepository,
    private languageRepository: LanguageRepository
  ) { }

  async run(languageName: string): Promise<Code> {
    const languageEntity: Language | null =
      await this.languageRepository.readByName(languageName);

    if (!languageEntity) {
      throw new LanguageNotFoundError();
    }

    const code: Code | null =
      await this.repository.readRandomByLanguage(languageEntity);

    if (!code) {
      throw new CodeNotFoundError();
    }

    return code;
  }
}
