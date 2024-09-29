'use server';
import { User } from './schemas';

export const getScores = async () => {
  try {
    const scores = await User.find();
    return scores;
  } catch (error) {
    console.error(error);
  }
};
