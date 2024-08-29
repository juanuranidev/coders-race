import { CodeEntity } from "../entities/code.entity";
import { LanguageEntity } from "../entities/language.entity";

export abstract class CodeRepository {
  abstract getRandom(language: LanguageEntity): Promise<CodeEntity>;
}
