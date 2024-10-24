import { ServerRouter } from "@server/infrastructure/router/server.router";
import { Server } from "@server/infrastructure/server";
import ENVS from "@shared/infrastructure/config/envs/envs";

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: ENVS.PORT,
    routes: ServerRouter.routes,
  });

  server.start();
}
