import { CustomError } from "../../domain/errors/custom.error";
import { GetUserById } from "../../domain/use-cases/user/get-by-id";
import { UserRepository } from "../../domain/repositories/user.repository";
import { Request, Response } from "express";
import { GetUsersLeaderboard } from "../../domain/use-cases/user/get-users-leaderboard";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  };

  public getUserById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (!id) {
      return this.handleError("Id is required", res);
    }

    return new GetUserById(this.userRepository)
      .execute(Number(id))
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };

  public getUsersLeaderboard = async (req: Request, res: Response) => {
    return new GetUsersLeaderboard(this.userRepository)
      .execute()
      .then((users) => res.json(users))
      .catch((error) => this.handleError(error, res));
  };
}
