import { LanguageEntity } from "../entities/language.entity";

export abstract class LanguageRepository {
  abstract getAll(): Promise<LanguageEntity[]>;
  abstract getByName(name: string): Promise<LanguageEntity>;
}
