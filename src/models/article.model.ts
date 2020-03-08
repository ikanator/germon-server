import { Schema } from 'mongoose';

const ArticleSchema = new Schema({
  _id: Number,
  title: {
    type: String,
    required: 'Enter article name'
  },
  authorId: Number,
  created_at: {
    type: Date,
    default: Date.now
  }
}, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

ArticleSchema.virtual('author', {
  ref: 'Author',
  localField: 'authorId',
  foreignField: '_id',
  justOne: true,
});

export { ArticleSchema };
