import { Schema } from 'mongoose';

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: 'Enter article name'
  },
  authorCode: String,
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
  localField: 'authorCode',
  foreignField: 'code',
  justOne: true,
});

export { ArticleSchema };
