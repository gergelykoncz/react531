import {createSlice} from '@reduxjs/toolkit';
import {toPound, toKg} from '../utils/units';

const inputInitialState: {
  military: number;
  deadlift: number;
  bench: number;
  squat: number;
  isPound: boolean;
} = {
  military: 0,
  deadlift: 0,
  bench: 0,
  squat: 0,
  isPound: false,
};

export const inputSlice = createSlice({
  name: 'counter',
  initialState: inputInitialState,
  reducers: {
    increment: (state, action) => ({
      ...state,
      [action.payload.id]: action.payload.value,
    }),
    setPound: (state, action) => ({
      ...state,
      isPound: action.payload.value,
      military: action.payload.value
        ? toPound(state.military)
        : toKg(state.military),
      deadlift: action.payload.value
        ? toPound(state.deadlift)
        : toKg(state.deadlift),
      bench: action.payload.value ? toPound(state.bench) : toKg(state.bench),
      squat: action.payload.value ? toPound(state.squat) : toKg(state.squat),
    }),
  },
});
