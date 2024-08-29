import { LanguageEntity } from "../../entities/language.entity";
import { LanguageRepository } from "../../repositories/language.repository";

export interface GetLanguagesInterface {
  execute(): Promise<LanguageEntity[]>;
}

export class GetLanguages implements GetLanguagesInterface {
  constructor(private readonly repository: LanguageRepository) {}

  execute(): Promise<LanguageEntity[]> {
    return this.repository.getAll();
  }
}
