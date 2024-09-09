import { Router } from "express";
import { CodeController } from "@code/infrastructure/controllers/code.controller";

export class CodeRouter {
  static get routes(): Router {
    const router = Router();
    const codeController = new CodeController();

    router.get("/v1/read-by-id", codeController.readById);
    router.get(
      "/v1/read-random-by-language",
      codeController.readRandomByLanguage
    );
    return router;
  }
}
