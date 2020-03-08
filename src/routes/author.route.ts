import { Router } from 'express';
import { AuthorController } from '../controllers/author.controller';

class AuthorRoute {
  public router: Router = Router();
  public authorController: AuthorController = new AuthorController();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router
      .route('/')
      .post(this.authorController.createAuthor);
  }
}

export const authorRouter = new AuthorRoute().router;
