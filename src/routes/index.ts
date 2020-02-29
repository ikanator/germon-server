import { Router } from 'express';
import { articleRouter } from './article.route';
import { authorRouter } from './author.route';

class Routes {
  public router = Router();

  constructor() {
    this.config();
  }

  private config() {
    this.router.use('/article', articleRouter);
    this.router.use('/author', authorRouter);
  }
}

export default Routes;
