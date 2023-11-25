import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={styles.navbar}>
      <img src="./../../../images/Logo.png" alt="logo" />
      <span>Home</span>
    </Link>
  );
};

export default Logo;
