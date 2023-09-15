import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  answer: [],
};

export const AnswerSlice = createSlice({
  name: "Answer",
  initialState,
  reducers: {
    answershow: (state,action) => {
      state.answer = action.payload
    },
  },
});

export const {answershow} = AnswerSlice.actions;

export default AnswerSlice.reducer;
