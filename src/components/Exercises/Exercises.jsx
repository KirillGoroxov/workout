import React from "react";
import Exercise from "./Exercise/Exercise";
import { nanoid } from "nanoid";
import styles from "./Exercises.module.scss";
const Exercises = (props) => {
  const filter = props.filter;
  const exercises = filter ? props.filterExercises : props.exercises;
  return (
    <div className={styles.exercises}>
      {exercises.map((exercise) => (
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
