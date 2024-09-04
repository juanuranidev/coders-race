import { ServiceContainer } from "@shared/infraestructure/container/service.container";
import { Response, Request, NextFunction } from "express";

export class UserController {
  async readByGithubid(req: Request, res: Response, next: NextFunction) {
    try {
      const { githubId } = req.params;

      const user = await ServiceContainer.user.readByGithubId.run(githubId);

      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async readById(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const user = await ServiceContainer.user.readById.run(userId);

      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async readAllLeaderboard(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await ServiceContainer.user.readAllLeaderboard.run();

      res.status(201).json(users);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
