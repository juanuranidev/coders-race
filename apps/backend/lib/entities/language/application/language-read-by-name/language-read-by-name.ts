import { Language } from "@language/domain/entities/language.entity";
import { LanguageRepository } from "@language/domain/repositories/language.repository";

export class LanguageReadByName {
  constructor(private repository: LanguageRepository) {}

  async run(languageName: string): Promise<Language> {
    return this.repository.readByName(languageName);
  }
}
