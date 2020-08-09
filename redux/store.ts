import {configureStore, combineReducers, Store} from '@reduxjs/toolkit';
import {programmeSlice} from './programmeSlice';
import {inputSlice} from './inputSlice';

const store = configureStore({
  reducer: combineReducers({
    counter: inputSlice.reducer,
    programme: programmeSlice.reducer,
  }),
});

export {store, inputSlice, programmeSlice};
export type RootState = ReturnType<typeof store.getState>;
