import mongoose, { Schema } from 'mongoose';

const articleSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
},
    {
        collection: 'Articles'
    }
);

articleSchema.statics.findById = async function(id: number): Promise<object> {
    return this.findOne({ id });
};

const Article = mongoose.model('Article', articleSchema);

export default Article;
