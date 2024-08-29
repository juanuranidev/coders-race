import { Router } from "express";
import { RaceController } from "./controller";
import { RaceRepositoryImpl } from "../../infraestructure/repositories/race.repository.impl";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class RaceRoutes {
  static get routes(): Router {
    const router = Router();

    const raceRepository = new RaceRepositoryImpl();
    const raceController = new RaceController(raceRepository);

    router.post("/", [AuthMiddleware.validateJWT], raceController.createRace);
    router.get(
      "/get/:id",
      [AuthMiddleware.validateJWT],
      raceController.getById
    );

    return router;
  }
}
