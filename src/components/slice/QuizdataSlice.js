import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",

};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changedata: (state,actions) => {
      state.value = actions.payload
    },
    
  },
});

export const { changedata } = counterSlice.actions;

export default counterSlice.reducer;
