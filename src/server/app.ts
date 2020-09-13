import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/RootController';
import './controllers/LoginController';

class App {
  public app: Express;
  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieSession({ keys: ['allTheShit'] }));
    this.app.use(AppRouter.getInstance());
  }
}
export default new App().app;
