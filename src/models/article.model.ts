import mongoose, {Schema} from 'mongoose';
import { IArticleModel } from '../interfaces/article';

const articleSchema = new Schema({
        id: {type: Number, unique: true, readOnly: true},
        title: {type: String, default: ''},
        content: {type: String, default: ''},
        createdAt: {type: Date, readonly: true},
        modifiedAt: {type: Date, readonly: true},
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

const ArticleModel = mongoose.model('ArticleModel', articleSchema);

export const Article: IArticleModel = model<IArticleDocument, IArticleModel>('Episode', Entity);

export default ArticleModel;
