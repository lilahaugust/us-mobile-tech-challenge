import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './reducers/playerSlice';

const store = configureStore({
  reducer: {
    player: playerReducer
  },
});

export default store;