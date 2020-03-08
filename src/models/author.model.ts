import { Schema } from 'mongoose';

const AuthorSchema = new Schema({
  _id: Number,
  name: {
    type: String,
    required: 'Enter author name'
  },
  title: {
    type: String
  }
});

export { AuthorSchema };
