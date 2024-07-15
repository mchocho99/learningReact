import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  people: [],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPeople: (state, action) => {
      state.people = action.payload.results;
    },
  },
});

export const { getPeople } = peopleSlice.actions;

export default peopleSlice.reducer;
