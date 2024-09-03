import { Router } from "express";
import { CodeController } from "@code/infraestructure/controllers/code.controller";

export class CodeRouter {
  static get routes(): Router {
    const router = Router();
    const codeController = new CodeController();

    router.post("/v1/create", codeController.create);
    router.get("/v1/read-random", codeController.readRandom);
    return router;
  }
}
