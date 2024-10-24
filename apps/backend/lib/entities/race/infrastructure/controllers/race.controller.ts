import { User } from "@user/domain/entities/user.entity";
import { Race } from "@race/domain/entities/race.entity";
import { RaceCreateDto } from "@race/domain/dtos/race-create.dto";
import { ServiceContainer } from "@shared/infrastructure/container/service.container";
import { Response, Request, NextFunction } from "express";

export class RaceController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const [error, createRaceDto] = RaceCreateDto.run(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }

      await ServiceContainer.race.create.run(
        createRaceDto!.cps,
        createRaceDto!.timeInMS,
        createRaceDto!.codeId,
        createRaceDto!.userId
      );

      res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
  async readByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const user: User = req.body.user;
      const races: Race[] = await ServiceContainer.race.readByUserId.run(
        user.getId()
      );

      res.status(200).json(races.map((race: Race) => race.mapToPrimitives()));
    } catch (error) {
      next(error);
    }
  }
}
