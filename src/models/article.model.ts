import { model, Schema } from 'mongoose';
import { IArticleDocument, IArticleModel } from '../interfaces/article';

const articleSchema = new Schema({
        content: {type: String, default: ''},
        createdAt: {type: Date, readonly: true},
        id: {type: Number, unique: true, readOnly: true},
        modifiedAt: {type: Date, readonly: true},
        title: {type: String, default: ''},
    },
    {
        collection: 'Articles'
    }
);

articleSchema.statics.findById = async function(id: number): Promise<object> {
    return this.findOne({id});
};

articleSchema.statics.createArticle = async function(data: object): Promise<object> {
    return this.create(data);
};

export const Article: IArticleModel = model<IArticleDocument, IArticleModel>('ArticleModel', articleSchema);
