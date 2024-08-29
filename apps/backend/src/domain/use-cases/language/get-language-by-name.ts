import { LanguageEntity } from "../../entities/language.entity";
import { LanguageRepository } from "../../repositories/language.repository";

export interface GetLanguageByNameInterface {
  execute(languageName: string): Promise<LanguageEntity | undefined>;
}

export class GetLanguageByName implements GetLanguageByNameInterface {
  constructor(private readonly repository: LanguageRepository) {}

  execute(languageName: string): Promise<LanguageEntity> {
    return this.repository.getByName(languageName);
  }
}
