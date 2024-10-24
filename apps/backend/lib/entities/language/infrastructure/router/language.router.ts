import { Router } from "express";
import { LanguageController } from "@language/infrastructure/controllers/language.controller";

export class LanguageRouter {
  static get routes(): Router {
    const router: Router = Router();
    const languageController: LanguageController = new LanguageController();

    router.get("/v1/read-all", languageController.readAll);

    return router;
  }
}
