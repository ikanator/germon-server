import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ArticleSchema } from '../models/article.model';

const Article = mongoose.model('Article', ArticleSchema);

export class ArticleController {
  public createArticle(req: Request, res: Response) {
    const newArticle = new Article(req.body);

    newArticle.save((err, article) => {
      if (err) {
        res.send(err);
      }

      res.json(article);
    });
  }

  public getArticles(req: Request, res: Response) {
    Article.find({}, (err, articles) => {
      if (err) {
        res.send(err);
      }

      res.json(articles);
    });
  }

  public async getArticleByID(req: Request, res: Response) {
    try {
      const article = await Article.findById(req.params.id).populate('author');

      res.json(article);
    } catch (err) {
      if (err) {
        res.send(err);
      }
    }
  }

  public updateArticle(req: Request, res: Response) {
    Article.findOneAndUpdate({ _id: req.params.id },
      req.body,
      {new: true},
      (err, article) => {
        if (err) {
          res.send(err);
        }

        res.json(article);
      });
  }

  public deleteArticle(req: Request, res: Response) {
    Article.deleteOne(
      { _id: req.params.id },
      (err) => {
        if (err) {
          res.send(err);
        }

        res.json({ message: 'Successfully deleted article' });
      });
  }
}
