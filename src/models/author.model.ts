import { Schema } from 'mongoose';

const AuthorSchema = new Schema({
  code: {
    type: String,
    required: 'Enter author code',
    unique: true,
  },
  name: {
    type: String,
    required: 'Enter author name'
  },
  title: {
    type: String
  }
});

export { AuthorSchema };
