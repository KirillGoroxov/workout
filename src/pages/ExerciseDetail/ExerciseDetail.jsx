import React, { useEffect, useState } from "react";
import styles from "./ExerciseDetail.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

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
          <figure className={styles.icons}>
            <div className={styles.icon}>
              <img src="./../../../icons/body-part.png" alt="" />
              <figcaption>ТАЛИЯ</figcaption>
            </div>
            <div className={styles.icon}>
              <img src="./../../../icons/target.png" alt="" />
              <figcaption>ПРЕСС</figcaption>
            </div>
            <div className={styles.icon}>
              <img src="./../../../icons/equipment.png" alt="" />
              <figcaption>МАССА ТЕЛА</figcaption>
            </div>
          </figure>
        </figure>
      )}
    </>
  );
};

export default ExerciseDetail;
