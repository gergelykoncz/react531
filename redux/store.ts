import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { military: 0, deadlift: 0, bench: 0, squat: 0 },
  reducers: {
    increment: (state, action) => ({
      ...state,
      [action.payload.id]: action.payload.value
    }),
  },
})

const store = configureStore({
  reducer: counterSlice.reducer
});

export { store, counterSlice };