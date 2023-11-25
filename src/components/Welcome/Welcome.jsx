import React from "react";
import styles from "./Welcome.module.scss";
const Welcome = ({ scrollBottom }) => {
  return (
    <>
      <div className={styles.text}>
        <h2>Fintess Club</h2>
        <h3>Sweat, Smile and Repeat</h3>
        <div>Check out the most effective exercises</div>
        <button onClick={scrollBottom}>EXPLORE EXERCISES</button>
        <div className={styles.exercises}>EXERCISES</div>
      </div>
      <img
        src="./../../../images/banner.png"
        className={styles.banner}
        alt="banner"
      />
    </>
  );
};

export default Welcome;
