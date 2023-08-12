import { configureStore } from "@reduxjs/toolkit";
import exercises from "./exercises";

export default configureStore({
  reducer: {
    exercises: exercises,
  },
});
