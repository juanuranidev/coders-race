import { Router } from "express";
import { UserController } from "@user/infrastructure/controllers/user.controller";

export class UserRouter {
  static get routes(): Router {
    const router = Router();
    const userController = new UserController();

    router.get("/v1/read-by-github-id", userController.readByGithubid);
    router.get("/v1/read-by-id", userController.readById);
    router.get("/v1/read-all-leaderboard", userController.readAllLeaderboard);

    return router;
  }
}
