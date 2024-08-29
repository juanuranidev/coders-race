import { PrismaDb } from "../db/prisma";
import { LanguageEntity } from "../../domain/entities/language.entity";
import { LanguageRepository } from "../../domain/repositories/language.repository";
import { CustomError } from "../../domain/errors/custom.error";

const db = PrismaDb.execute();

export class LanguageRepositoryImpl implements LanguageRepository {
  async getAll(): Promise<LanguageEntity[]> {
    try {
      const languages = await db.language.findMany();
      if (!languages.length) {
        return [];
      }

      return languages.map((language) => LanguageEntity.fromObject(language));
    } catch (error) {
      throw CustomError.internalServer(`Error: ${error}`);
    }
  }
  async getByName(name: string): Promise<LanguageEntity> {
    try {
      const language = await db.language.findFirst({
        where: {
          name: name,
        },
      });

      if (!language) {
        throw CustomError.notFound("Language not found");
      }

      return LanguageEntity.fromObject(language);
    } catch (error) {
      throw CustomError.internalServer(`Error: ${error}`);
    }
  }
}
