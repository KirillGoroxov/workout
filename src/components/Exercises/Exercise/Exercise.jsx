import React, { useEffect } from "react";
import styles from "./Exercise.module.scss";
import Gifffer from "gifffer";
import { Link } from "react-router-dom";
const Exercise = (props) => {
  useEffect(() => {
    Gifffer();
  });

  return (
    <Link to={`exercise/${props.id}`} className={styles.exercise}>
      <img src={props.url} alt="" />
      <div className={styles.name}> {props.name}</div>
    </Link>
  );
};

export default Exercise;
