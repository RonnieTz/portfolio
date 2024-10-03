'use server';
import { Score } from './schemas';
import { databaseConnect } from './databaseConnect';

export type ScoreType = {
  app: string;
  scores: {
    level: string;
    first: { name: string; time: number };
    second: { name: string; time: number };
    third: { name: string; time: number };
  }[];
};

export const getScores = async () => {
  try {
    await databaseConnect();
    const scores = await Score.find();

    if (!scores.length) {
      const scores = new Score({
        app: 'minesweeper',
        scores: [
          {
            level: 'begginer',
            first: { name: 'Anonymous', time: 999 },
            second: { name: 'Anonymous', time: 999 },
            third: { name: 'Anonymous', time: 999 },
          },
          {
            level: 'intermediate',
            first: { name: 'Anonymous', time: 999 },
            second: { name: 'Anonymous', time: 999 },
            third: { name: 'Anonymous', time: 999 },
          },
          {
            level: 'expert',
            first: { name: 'Anonymous', time: 999 },
            second: { name: 'Anonymous', time: 999 },
            third: { name: 'Anonymous', time: 999 },
          },
        ],
      });
      await scores.save();
    }

    const newScores = await Score.find();

    return JSON.stringify(newScores);
  } catch (error) {
    console.error(error);
  }
};

export const addNewScore = async (newScore: {
  level: 'begginer' | 'intermediate' | 'expert';
  time: number;
  name: string;
}) => {
  try {
    await databaseConnect();
    const scores: ScoreType[] = (await Score.find()) as unknown as ScoreType[];
    const newScores = scores.map((score) => {
      if (score.app === 'minesweeper') {
        score.scores.map((s) => {
          if (s.level === newScore.level) {
            if (newScore.time < s.first.time) {
              s.third = s.second;
              s.second = s.first;
              s.first = { name: newScore.name, time: newScore.time };
            } else if (newScore.time < s.second.time) {
              s.third = s.second;
              s.second = { name: newScore.name, time: newScore.time };
            } else if (newScore.time < s.third.time) {
              s.third = { name: newScore.name, time: newScore.time };
            }
          }
        });
      }
      console.log(score);

      return score;
    });

    await Score.updateOne(
      { app: 'minesweeper' },
      { scores: newScores[0].scores }
    );

    return await getScores();
  } catch (error) {
    console.error(error);
  }
};
