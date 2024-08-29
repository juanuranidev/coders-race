import { PrismaDb } from "../db/prisma";
import { CodeEntity } from "../../domain/entities/code.entity";
import { LanguageEntity } from "../../domain/entities/language.entity";
import { CodeRepository } from "../../domain/repositories/code.repository";
import { CustomError } from "../../domain/errors/custom.error";

const db = PrismaDb.execute();

export class CodeRepositoryImpl implements CodeRepository {
  async getRandom(language: LanguageEntity): Promise<any> {
    try {
      const codes = await db.code.findMany({
        where: {
          languageId: language.id,
        },
      });
      if (!codes) {
        return [];
      }

      const codeSelected = codes[Math.floor(Math.random() * codes.length)];

      return CodeEntity.fromObject({
        language,
        id: codeSelected.id,
        text: codeSelected.text,
      });
    } catch (error) {
      throw CustomError.internalServer(`Error: ${error}`);
    }
  }
}
