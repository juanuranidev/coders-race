import { Router } from "express";
import { RaceController } from "@race/infraestructure/controllers/race.controller";

export class RaceRouter {
  static get routes(): Router {
    const router = Router();
    const raceController = new RaceController();

    router.post("/v1/create", raceController.create);
    router.get("/v1/read-by-id", raceController.readById);

    return router;
  }
}
