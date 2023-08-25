import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className={styles.navbar}>
        <img src="./../../../images/Logo.png" alt="" />
        <span>Home</span>
      </Link>
    </nav>
  );
};

export default Navbar;
