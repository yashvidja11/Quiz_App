import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  name : "",
  surname : "",
 
};

export const NameSlice = createSlice({
  name: "Answer",
  initialState,
  reducers: {
    nameshow: (state,action) => {
      state.name = action.payload
    },
    surnameshow: (state,action) => {
        state.surname = action.payload
      },
      
  },
});

export const {nameshow,surnameshow, scoreshow} = NameSlice.actions;

export default NameSlice.reducer;
