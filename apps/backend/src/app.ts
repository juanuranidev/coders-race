import { envs } from "./config";
import { Server } from "./presentation/server";
import { PrismaDb } from "./infraestructure/db/prisma";
import { AppRoutes } from "./presentation/routes";

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    dbClient: PrismaDb,
    routes: AppRoutes.routes,
  });

  server.start();
}
