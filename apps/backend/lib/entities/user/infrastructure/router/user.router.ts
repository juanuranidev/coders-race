import { Router } from 'express';
import { UserController } from '@user/infrastructure/controllers/user.controller';
import { AuthMiddleware } from '@shared/infrastructure/middlewares/auth.middleware';

export class UserRouter {
  static get routes(): Router {
    const router = Router();
    const userController = new UserController();

    router.get('/v1/read-profile', AuthMiddleware.verifyToken, userController.readProfile);
    router.get('/v1/read-by-id', AuthMiddleware.verifyToken, userController.readById);
    router.get('/v1/read-by-auth-id/', userController.readByAuthId);
    router.get('/v1/read-leaderboard', userController.readLeaderboard);
    router.post('/v1/read-or-create', userController.readOrCreate);

    return router;
  }
}
