import { Router } from "express";
import { CodeController } from "@code/infrastructure/controllers/code.controller";
import { ErrorHandlerMiddleware } from "@shared/infrastructure/middlewares/error-handler.middleware";

export class CodeRouter {
  static get routes(): Router {
    const router: Router = Router();
    const codeController: CodeController = new CodeController();

    router.get(
      "/v1/read-random-by-language",
      codeController.readRandomByLanguage,
      ErrorHandlerMiddleware.run
    );
    return router;
  }
}
