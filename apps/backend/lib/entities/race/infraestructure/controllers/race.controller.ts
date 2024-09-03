import { ServiceContainer } from "@shared/infraestructure/container/service.container";
import { Response, Request, NextFunction } from "express";

export class RaceController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, code, cpm, timeInMS, languageName } = req.body;

      // const codeEntity = await ServiceContainer.code.
      const languageEntity =
        await ServiceContainer.language.readByName.run(languageName);

      const race = await ServiceContainer.race.create.run(
        id,
        code,
        cpm,
        timeInMS,
        languageEntity
      );

      res.status(201).json(race);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async readById(req: Request, res: Response, next: NextFunction) {
    try {
      const { raceId } = req.params;

      const race = await ServiceContainer.race.readById.run(raceId);

      res.status(201).json(race);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
