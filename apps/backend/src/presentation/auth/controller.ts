import { LoginUser } from "../../domain/use-cases/auth/login-user";
import { CustomError } from "../../domain/errors/custom.error";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import { Request, Response } from "express";

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  };

  public login = async (req: Request, res: Response) => {
    const { data } = req.body;

    const [error, loginUserDto] = LoginUserDto.create(data);
    if (error) {
      return res.status(400).json({ error });
    }

    new LoginUser(this.authRepository)
      .execute(loginUserDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };
}
