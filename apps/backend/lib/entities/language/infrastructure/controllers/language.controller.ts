import { Language } from "@language/domain/entities/language.entity";
import { ServiceContainer } from "@shared/infrastructure/container/service.container";
import { Response, Request, NextFunction } from "express";

export class LanguageController {
  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const languagesEntities: Language[] =
        await ServiceContainer.language.readAll.run();

      res
        .status(200)
        .json(
          languagesEntities.map((language: Language) =>
            language.mapToPrimitives()
          )
        );
    } catch (error) {
      next(error);
    }
  }
}
