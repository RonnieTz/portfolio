'use server';

import { readFileSync, writeFileSync } from 'fs';

export const readData = async () => {
  const rawdata = readFileSync('./minesweeper_data.json');
  const data = JSON.parse(rawdata as any);
  return data;
};

export const writeData = async (data: any) => {
  writeFileSync('./data.json', JSON.stringify(data));
  const rawdata = readFileSync('./minesweeper_data.json');
  const newdata = JSON.parse(rawdata as any);
  return newdata;
};
