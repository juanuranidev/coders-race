import { Language } from "@language/domain/entities/language.entity";
import { LanguageRepository } from "@language/domain/repositories/language.repository";

export class LanguageReadAll {
  constructor(private repository: LanguageRepository) {}

  async run(): Promise<Language[]> {
    return this.repository.readAll();
  }
}
