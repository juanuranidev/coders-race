import { Language } from "@language/domain/entities/language.entity";
import { LanguageRepository } from "@language/domain/repositories/language.repository";
import { LanguageNotFoundError } from "@language/domain/errors/language-not-found.errors";

export class LanguageReadByName {
  constructor(private repository: LanguageRepository) {}

  async run(languageName: string): Promise<Language> {
    const language: Language | null =
      await this.repository.readByName(languageName);

    if (!language) {
      throw new LanguageNotFoundError();
    }

    return language;
  }
}
