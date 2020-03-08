import { Request, Response } from 'express';
import mongoose from 'mongoose';

import { AuthorSchema } from '../models/author.model';

const Author = mongoose.model('Author', AuthorSchema);

export class AuthorController {
  public createAuthor(req: Request, res: Response) {
    const newAuthor = new Author(req.body);

    newAuthor.save((err, author) => {
      if (err) {
        res.send(err);
      }

      res.json(author);
    });
  }
}
