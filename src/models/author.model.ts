import { Schema } from 'mongoose';

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: 'Enter author name'
  },
  title: {
    type: String
  }
});

export { AuthorSchema };
