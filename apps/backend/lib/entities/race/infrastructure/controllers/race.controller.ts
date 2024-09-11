import { uuid } from "drizzle-orm/pg-core";
import { Race } from "@race/domain/entities/race.entity";
import { Code } from "@code/domain/entities/code.entity";
import { Language } from "@language/domain/entities/language.entity";
import { uuidAdapter } from "@shared/infrastructure/adapters/uuid.adapter";
import { RaceCreateDto } from "@race/domain/dtos/race-create.dto";
import { ServiceContainer } from "@shared/infrastructure/container/service.container";
import { RaceNotFoundError } from "@race/domain/errors/race-not-found.error";
import { CodeNotFoundError } from "@code/domain/errors/code-not-found";
import { MissingRaceIdError } from "../../domain/errors/race-missing-name.errors";
import { LanguageNotFoundError } from "@language/domain/errors/language-not-found.errors";
import { Response, Request, NextFunction } from "express";

export class RaceController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      const [error, createRaceDto] = RaceCreateDto.run(data);
      if (error) {
        return res.status(400).json({ message: error });
      }

      const uuid = uuidAdapter.generate();
      const codeEntity: Code = await ServiceContainer.code.readById.run(
        Number(createRaceDto?.codeId!)
      );
      const languageEntity: Language =
        await ServiceContainer.language.readByName.run(
          codeEntity.getLanguage().getName()
        );

      await ServiceContainer.race.create.run(
        uuid,
        createRaceDto?.cpm!,
        createRaceDto?.timeInMS!,
        codeEntity,
        languageEntity
      );

      res.status(201).send();
    } catch (error) {
      console.log(error);

      if (error instanceof CodeNotFoundError) {
        return res.status(404).json({ message: error.message });
      } else if (error instanceof LanguageNotFoundError) {
        return res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async readById(req: Request, res: Response, next: NextFunction) {
    try {
      const { raceId } = req.query;
      if (!raceId) {
        return res
          .status(404)
          .json({ message: "raceId is a required parameter" });
      }

      if (!(raceId instanceof uuid)) {
        return res.status(404).json({ message: "raceId not valid" });
      }

      const raceEntity: Race = await ServiceContainer.race.readById.run(
        String(raceId)
      );

      res.status(201).json(raceEntity.mapToPrimitives());
    } catch (error) {
      if (error instanceof MissingRaceIdError) {
        return res.status(400).json({ message: error.message });
      } else if (error instanceof RaceNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      console.log(error);
      next(error);
    }
  }
}
