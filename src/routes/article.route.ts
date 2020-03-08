import { Router } from 'express';
import { ArticleController } from '../controllers/article.controller';

class ArticleRoute {
  public router: Router = Router();
  public articleController: ArticleController = new ArticleController();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router
      .route('/')
      .get(this.articleController.getArticles)
      .post(this.articleController.createArticle);

    this.router
      .route('/:id')
      .get(this.articleController.getArticleByID)
      .put(this.articleController.updateArticle)
      .delete(this.articleController.deleteArticle);
  }
}

export const articleRouter = new ArticleRoute().router;
