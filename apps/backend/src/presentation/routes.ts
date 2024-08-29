import { Router } from "express";
import { CodeRoutes } from "./code/routes";
import { UserRoutes } from "./user/routes";
import { AuthRoutes } from "./auth/routes";
import { RaceRoutes } from "./race/routes";
import { LanguageRoutes } from "./language/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/language", LanguageRoutes.routes);
    router.use("/api/code", CodeRoutes.routes);
    router.use("/api/user", UserRoutes.routes);
    router.use("/api/auth", AuthRoutes.routes);
    router.use("/api/race", RaceRoutes.routes);

    return router;
  }
}
