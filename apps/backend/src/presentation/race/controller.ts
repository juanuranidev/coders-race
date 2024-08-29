import { CreateRace } from "../../domain/use-cases/race/create-race";
import { GetRaceById } from "../../domain/use-cases/race/get-race-by-id";
import { CustomError } from "../../domain/errors/custom.error";
import { CreateRaceDto } from "../../domain/dtos/race/create-race.dto";
import { RaceRepository } from "../../domain/repositories/race.repository";
import { Request, Response } from "express";

export class RaceController {
  constructor(private readonly raceRepository: RaceRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  };

  public createRace = async (req: Request, res: Response) => {
    const [error, raceDto] = CreateRaceDto.create(req.body);
    if (error) {
      return this.handleError(error, res);
    }

    return new CreateRace(this.raceRepository)
      .execute(raceDto!)
      .then((race) => res.json(race))
      .catch((error) => this.handleError(error, res));
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
      return this.handleError("Id is required", res);
    }

    return new GetRaceById(this.raceRepository)
      .execute(Number(id))
      .then((race) => res.json(race))
      .catch((error) => this.handleError(error, res));
  };
}
