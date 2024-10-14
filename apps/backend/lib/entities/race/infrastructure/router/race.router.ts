import { Router } from 'express';
import { RaceController } from '@race/infrastructure/controllers/race.controller';
import { AuthMiddleware } from '@shared/infrastructure/middlewares/auth.middleware';

export class RaceRouter {
  static get routes(): Router {
    const router = Router();
    const raceController = new RaceController();

    router.post('/v1/create', [AuthMiddleware.verifyToken], raceController.create);
    router.get('/v1/read-by-id', [AuthMiddleware.verifyToken], raceController.readById);

    return router;
  }
}
