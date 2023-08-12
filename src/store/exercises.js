import { createSlice } from "@reduxjs/toolkit";

const exercises = createSlice({
  name: "exercises",
  initialState: {
    exercises: {},
  },
  reducers: {
    fetchExercises(state, action) {
      state = action.payload;
      console.log();
    },
  },
});

export const { fetchExercises } = exercises.actions;
export default exercises.reducer;
