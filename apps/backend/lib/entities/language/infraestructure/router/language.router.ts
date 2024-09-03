import { Router } from "express";
import { LanguageController } from "@language/infraestructure/controllers/language.controller";

export class LanguageRouter {
  static get routes(): Router {
    const router = Router();
    const languageController = new LanguageController();

    router.get("/v1/read-all", languageController.readAll);
    router.get("/v1/read-by-name", languageController.readByName);

    return router;
  }
}
