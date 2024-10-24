import { User } from "@user/domain/entities/user.entity";
import { UserCreateDto } from "@user/domain/dtos/user-create.dto";
import { ServiceContainer } from "@shared/infrastructure/container/service.container";
import { Response, Request, NextFunction } from "express";

export class UserController {
  async readProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const user: User = req.body.user;

      const userEntity: User | null =
        await ServiceContainer.user.readProfile.run(user.getId());

      res.status(201).json(userEntity?.mapToPrimitives());
    } catch (error) {
      next(error);
    }
  }
  async readByAuthId(req: Request, res: Response, next: NextFunction) {
    try {
      const { authId } = req.query;
      if (!authId || typeof authId !== "string") {
        return res.status(400).json({ error: "AuthId is required" });
      }
      const user: User | null =
        await ServiceContainer.user.readByAuthId.run(authId);

      res.status(201).json(user?.mapToPrimitives());
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async readLeaderboard(req: Request, res: Response, next: NextFunction) {
    try {
      const users: User[] = await ServiceContainer.user.readLeaderboard.run();

      res.status(201).json(users.map((user) => user.mapToPrimitives()));
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async readOrCreate(req: Request, res: Response, next: NextFunction) {
    try {
      const { user } = req.body;
      if (!user) {
        return res.status(400).json({ error: "User is required" });
      }

      const [error, userDto] = UserCreateDto.run(user);
      if (error) {
        return res.status(400).json({ error });
      }

      const createdUser: User = await ServiceContainer.user.readOrCreate.run(
        userDto!
      );

      res.status(201).json(createdUser.mapToPrimitives());
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
