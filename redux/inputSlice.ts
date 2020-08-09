import {createSlice} from '@reduxjs/toolkit';

const inputInitialState: {
  military: number;
  deadlift: number;
  bench: number;
  squat: number;
} = {
  military: 0,
  deadlift: 0,
  bench: 0,
  squat: 0,
};

export const inputSlice = createSlice({
  name: 'counter',
  initialState: inputInitialState,
  reducers: {
    increment: (state, action) => ({
      ...state,
      [action.payload.id]: action.payload.value,
    }),
  },
});
