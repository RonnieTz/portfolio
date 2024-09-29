import { Schema, model, models } from 'mongoose';

export const userSchema = new Schema({
  easy: {
    username: String,
    score: Number,
  },
  medium: {
    username: String,
    score: Number,
  },
  hard: {
    username: String,
    score: Number,
  },
});

export const User = models.User || model('User', userSchema);
