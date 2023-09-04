import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerName: '',
  error: null,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerName: (state, action) => {
      state.playerName = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPlayerName, setError } = playerSlice.actions;

export default playerSlice.reducer;