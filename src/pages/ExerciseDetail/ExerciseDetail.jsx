import React, { useEffect, useState } from "react";
import styles from "./ExerciseDetail.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import Icons from "../../components/Icons/Icons";

const ExerciseDetail = () => {
  const [exercise, setExercise] = useState();
  const [gifSrc, setGifSrc] = useState();
  const { id } = useParams();
  const img = new Image();
  img.src = gifSrc;
  useEffect(() => {
    axios.get(`http://localhost:3000/exercises/${id}`).then((res) => {
      const data = res.data;
      setExercise(data);
      setGifSrc(data.gif);
    });
  }, []);
  const classExercise = img.width < 400 ? styles.min : styles.max;
  return (
    <>
      {exercise && (
        <figure className={classExercise}>
          <img
            src={exercise.gif}
            className={styles.gif}
            id="gif"
            alt={exercise.title}
          />
          <h2>{exercise.title}</h2>
          <figcaption>{exercise.description}</figcaption>
          <Icons />
        </figure>
      )}
    </>
  );
};

export default ExerciseDetail;
