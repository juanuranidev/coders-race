import { Language } from "@language/domain/entities/language.entity";
import { ServiceContainer } from "@shared/infraestructure/container/service.container";
import { Response, Request, NextFunction } from "express";

export class LanguageController {
  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const entities = await ServiceContainer.language.readAll.run();
      const languages = entities.map((language: Language) =>
        language.mapToPrimitives()
      );

      res.status(201).json(languages);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async readByName(req: Request, res: Response, next: NextFunction) {
    try {
      const { languageName } = req.params;

      const language =
        await ServiceContainer.language.readByName.run(languageName);

      res.status(201).json(language);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
