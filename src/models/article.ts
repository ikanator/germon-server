import { Schema } from 'mongoose';

export const ArticleSchema = new Schema({
  title: {
    type: String,
    required: 'Enter article name'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});
