import { Code } from "@code/domain/entities/code.entity";
import { ServiceContainer } from "@shared/infrastructure/container/service.container";
import { Response, Request, NextFunction } from "express";
import { LanguageMissingNameError } from "@language/domain/errors/language-missing-name.errors";

export class CodeController {
  async readRandomByLanguage(req: Request, res: Response, next: NextFunction) {
    try {
      const { languageName } = req.query;
      if (!languageName || typeof languageName !== "string") {
        throw new LanguageMissingNameError();
      }

      const codeEntity: Code =
        await ServiceContainer.code.readRandomByLanguageName.run(languageName);

      res.status(200).json(codeEntity.mapToPrimitives());
    } catch (error) {
      next(error);
    }
  }
}
