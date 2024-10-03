import { Schema, model, models } from 'mongoose';

export const scoreSchema = new Schema({
  app: String,
  scores: [
    {
      level: String,
      first: { name: String, time: Number },
      second: { name: String, time: Number },
      third: { name: String, time: Number },
    },
  ],
});

export const Score = models.Score || model('Score', scoreSchema);
