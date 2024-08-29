import { Router } from "express";
import { AuthController } from "./controller";
import { AuthRepositoryImpl } from "../../infraestructure/repositories/auth.repository.impl";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const authRepository = new AuthRepositoryImpl();
    const authController = new AuthController(authRepository);

    router.post("/login", authController.login);

    return router;
  }
}
