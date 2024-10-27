import { Router } from "express";
import { CodeRouter } from "@code/infrastructure/router/code.router";
import { RaceRouter } from "@race/infrastructure/router/race.router";
import { UserRouter } from "@user/infrastructure/router/user.router";
import { LanguageRouter } from "@language/infrastructure/router/language.router";
import { ErrorHandlerMiddleware } from "@shared/infrastructure/middlewares/error-handler.middleware";

export class ServerRouter {
  static get routes(): Router {
    const router = Router();

    router.use("/api/code", CodeRouter.routes);
    router.use("/api/language", LanguageRouter.routes);
    router.use("/api/race", RaceRouter.routes);
    router.use("/api/user", UserRouter.routes);
    router.use(ErrorHandlerMiddleware.run);


    return router;
  }
}
