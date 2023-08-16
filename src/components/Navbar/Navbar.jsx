import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const navs = [...document.getElementsByName("nav")];
  const location = useLocation();
  useEffect(() => {
    navs.map((nav) => {
      if (nav.pathname === location.pathname) {
        nav.style.textDecoration = "solid underline rgb(207, 60, 60) 3px";
      } else nav.style.textDecoration = "none";
    });
  });
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src="./../../../images/Logo.png" alt="" />
      </Link>
      <div className={styles.links}>
        <Link
          to="/"
          name="nav"
          style={{ textDecoration: "solid underline rgb(207, 60, 60) 3px" }}
        >
          Home
        </Link>
        <Link to="/exercises" name="nav">
          Exercises
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
