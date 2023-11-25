import React, { useEffect } from "react";
import styles from "./Exercise.module.scss";
import { Link } from "react-router-dom";
const Exercise = ({ id, url, title, name }) => {
  return (
    <Link to={`exercise/${id}`} className={styles.exercise}>
      <div className={styles.imgContainer}>
        <img src={url} alt={title} />
      </div>
      <div className={styles.name}>{name}</div>
    </Link>
  );
};

export default Exercise;
