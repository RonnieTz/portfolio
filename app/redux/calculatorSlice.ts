import { createSlice } from '@reduxjs/toolkit';
import exp from 'constants';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
  },
  reducers: {},
});

export default calculatorSlice.reducer;
export const {} = calculatorSlice.actions;
