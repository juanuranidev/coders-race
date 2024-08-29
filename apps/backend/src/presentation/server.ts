import express, { Router } from "express";
import compression from "compression";
import cors from "cors";

interface Options {
  port: number;
  routes: Router;
  dbClient: any;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly routes: Router;
  private readonly dbClient: any;

  constructor(options: Options) {
    const { port, routes, dbClient } = options;
    this.port = port;
    this.routes = routes;
    this.dbClient = dbClient;
  }

  async start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(compression());
    this.app.use(
      cors({
        origin: "*",
      })
    );

    this.app.use(this.routes);
    this.dbClient.execute();

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
