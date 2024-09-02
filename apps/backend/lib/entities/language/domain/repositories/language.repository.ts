import { Language } from "@language/domain/entities/language.entity";

export interface LanguageRepository {
  readAll(): Promise<Language[]>;
  readByName(name: string): Promise<Language>;
}
