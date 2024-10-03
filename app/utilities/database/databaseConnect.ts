'use server';

import { connect } from 'mongoose';

export const databaseConnect = async () => {
  const atlasURI = process.env.atlas || 'mongodb://localhost:27017/minesweeper';

  try {
    await connect(atlasURI);
    console.log('Connected to database');
  } catch (error) {
    console.error(error);
  }
};
