import { CodeEntity } from "../../entities/code.entity";
import { LanguageEntity } from "../../entities/language.entity";
import { CodeRepository } from "../../repositories/code.repository";

export interface GetRandomCodeInterface {
  execute(language: LanguageEntity): Promise<CodeEntity>;
}

export class GetRandomCode implements GetRandomCodeInterface {
  constructor(private readonly repository: CodeRepository) {}

  execute(language: LanguageEntity): Promise<CodeEntity> {
    return this.repository.getRandom(language);
  }
}
