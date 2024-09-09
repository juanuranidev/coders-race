import { Language } from "@language/domain/entities/language.entity";
import { ServiceContainer } from "@shared/infrastructure/container/service.container";
import { LanguageNotFoundError } from "@language/domain/errors/language-not-found.errors";
import { MissingLanguageNameError } from "@language/domain/errors/language-missing-name.errors";
import { Response, Request, NextFunction } from "express";

export class LanguageController {
  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const languagesEntities: Language[] =
        await ServiceContainer.language.readAll.run();

      const languagesInPrimitives = languagesEntities.map(
        (language: Language) => language.mapToPrimitives()
      );

      res.status(200).json(languagesInPrimitives);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async readByName(req: Request, res: Response, next: NextFunction) {
    try {
      const { languageName } = req.query;
      if (!languageName) {
        return res
          .status(404)
          .json({ message: "Missing languageName parameter" });
      }

      const languageEntity: Language =
        await ServiceContainer.language.readByName.run(String(languageName));

      res.status(200).json(languageEntity.mapToPrimitives());
    } catch (error) {
      console.log(error);

      if (error instanceof MissingLanguageNameError) {
        return res.status(400).json({ message: error.message });
      } else if (error instanceof LanguageNotFoundError) {
        return res.status(400).json({ message: error.message });
      }

      next(error);
    }
  }
}
