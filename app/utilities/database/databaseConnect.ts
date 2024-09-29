'use server';

import { connect } from 'mongoose';

export const databaseConnect = async () => {
  try {
    await connect('mongodb://localhost:27017/minesweeper');
    console.log('Connected to database');
  } catch (error) {
    console.error(error);
  }
};
