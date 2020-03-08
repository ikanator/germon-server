import { Document, Model } from 'mongoose';

export interface IArticleDocument extends Document {
    title: string;
    content: string;
    createdAt: Date;
    modifiedAt: Date;
}

export interface IArticleModel extends Model<IArticleDocument> {
    findById: (id: number) => any;
    createArticle: (data: object) => IArticleDocument;
}
