import React, { useEffect, useState } from "react";
import styles from "./ExerciseDetail.module.scss";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ExerciseDetail = () => {
  const location = useLocation();
  const state = useSelector((state) => state.exercises);
  const path = location.pathname.split("/");
  console.log(state);
  return (
    <></>
    // <div className={styles.exercise}>
    //   <img src={obj.gif} alt="gif" />
    //   <div className={styles.title}>{obj.title}</div>
    //   <div className={styles.description}>{obj.description}</div>
    // </div>
  );
};

export default ExerciseDetail;
