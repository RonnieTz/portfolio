import { createAsyncThunk } from '@reduxjs/toolkit';
import { getScores, addNewScore } from '@/app/utilities/database/getScores';

export const fetchHighScores = createAsyncThunk(
  'highScores/fetch',
  async () => {
    const response = await getScores();
    const scores = await JSON.parse(response!);

    return scores[0];
  }
);
