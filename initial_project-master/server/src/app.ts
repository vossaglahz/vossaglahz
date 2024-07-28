import express from 'express';
import { Application, RequestHandler } from 'express';
import { AppInit } from './interfaces/AppInit.interface';
import { IRoute } from './interfaces/IRoute.interface';
import { AppDataSource } from './appDataSource';

class App {
  public app: Application;
  public port: number;
  constructor(appInit: AppInit) {
    this.app = express();
    this.port = appInit.port;

    this.initAssets();
    this.initMiddlewares(appInit.middlewares);
    this.initRoutes(appInit.controllers);
  }
  private initMiddlewares(middlewares: RequestHandler[]) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }
  private initRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  }
  private initAssets() {
    this.app.use(express.json());
    this.app.use(express.static('public'))
  }
  public async listen() {
    await AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    this.app.listen(this.port, () => {
      console.log(`App listening  on the http://localhost:${this.port}`);
      process.on('exit', () => {
        AppDataSource.destroy();
      })
    });
  }
}

export default App;

