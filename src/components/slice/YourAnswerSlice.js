import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  youranswer: {},
};

export const YourAnswerSlice = createSlice({
  name: "YourAnswer",
  initialState,
  reducers: {
    youranswershow: (state,action) => {
      state.youranswer[action.payload.i]=action.payload.value
    },
  },
});

export const {youranswershow} = YourAnswerSlice.actions;

export default YourAnswerSlice.reducer;