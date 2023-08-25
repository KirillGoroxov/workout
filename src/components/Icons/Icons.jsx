import React from "react";
import styles from "./Icons.module.scss";

const Icons = () => {
  return (
    <figure className={styles.icons}>
      <div className={styles.icon}>
        <img src="./../../../icons/body-part.png" alt="" />
        <figcaption>WAIST</figcaption>
      </div>
      <div className={styles.icon}>
        <img src="./../../../icons/target.png" alt="" />
        <figcaption>ABS</figcaption>
      </div>
      <div className={styles.icon}>
        <img src="./../../../icons/equipment.png" alt="" />
        <figcaption>BODY WEIGHT</figcaption>
      </div>
    </figure>
  );
};

export default Icons;
