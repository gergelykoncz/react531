import {createSlice} from '@reduxjs/toolkit';
import {generateExercise} from '../utils/calculator';

export interface WorkingSet {
  reps: number;
  weight: number;
}

export interface Training {
  week: number;
  sets: WorkingSet[];
}

const programmeInitialState: {
  military: Training[];
  deadlift: Training[];
  bench: Training[];
  squat: Training[];
} = {
  military: [],
  deadlift: [],
  bench: [],
  squat: [],
};

export const programmeSlice = createSlice({
  name: 'programme',
  initialState: programmeInitialState,
  reducers: {
    calculate: (state, action) => ({
      ...state,
      military: generateExercise(action.payload.military),
      deadlift: generateExercise(action.payload.deadlift),
      bench: generateExercise(action.payload.bench),
      squat: generateExercise(action.payload.squat),
    }),
  },
});
