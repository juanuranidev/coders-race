import { ServiceContainer } from "@shared/infraestructure/container/service.container";
import { Response, Request, NextFunction } from "express";

export class CodeController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { text, languageName } = req.body;
      console.log(languageName);
      const language =
        await ServiceContainer.language.readByName.run(languageName);

      console.log(language);

      const codeCreated = await ServiceContainer.code.create.run(
        text,
        language
      );

      res.status(201).json(codeCreated);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async readRandom(req: Request, res: Response, next: NextFunction) {
    try {
      const randomCode = await ServiceContainer.code.readRandom.run();

      res.status(201).json(randomCode);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
