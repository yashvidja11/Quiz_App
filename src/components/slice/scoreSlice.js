import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  score:"",
};

export const ScoreSlice = createSlice({
  name: "YourAnswer",
  initialState,
  reducers: {
    scoreshow: (state,action) => {
      state.score=action.payload
    },
  },
});

export const {scoreshow} = ScoreSlice.actions;

export default ScoreSlice.reducer;