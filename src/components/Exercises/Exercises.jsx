import React from "react";
import Exercise from "./Exercise/Exercise";
import { nanoid } from "nanoid";
import styles from "./Exercises.module.scss";
const Exercises = ({ filter, searched, searchedExercises, exercises }) => {
  const exercisesLocal = filter
    ? filterExercises
    : searched
    ? searchedExercises
    : exercises;

  return (
    <div className={styles.exercises}>
      {exercisesLocal.map((exercise) => (
        <Exercise
          name={exercise.title}
          url={exercise.gif}
          key={nanoid()}
          id={exercise.id}
        />
      ))}
    </div>
  );
};

export default Exercises;
