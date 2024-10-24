import { Language } from "@language/domain/entities/language.entity";

export interface LanguageRepository {
  readAll(): Promise<Language[]>;
  readByName(languageName: string): Promise<Language | null>;
}
