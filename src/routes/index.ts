import { Router } from 'express';
import { articleRouter } from './article.route';

class Routes {
  public router = Router();

  constructor() {
    this.config();
  }

  private config() {
    this.router.use('/article', articleRouter);
  }
}

export default new Routes().router;
