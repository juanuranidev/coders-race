import { Router } from "express";
import { CodeRouter } from "@code/infraestructure/router/code.router";
import { RaceRouter } from "@race/infraestructure/router/race.router";
import { UserRouter } from "@user/infraestructure/router/user.router";
import { LanguageRouter } from "@language/infraestructure/router/language.router";

export class ServerRouter {
  static get routes(): Router {
    const router = Router();

    router.use("/api/code", CodeRouter.routes);
    router.use("/api/language", LanguageRouter.routes);
    router.use("/api/race", RaceRouter.routes);
    router.use("/api/user", UserRouter.routes);

    return router;
  }
}
