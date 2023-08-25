import React, { useEffect } from "react";
import styles from "./Filters.module.scss";
const Filters = (props) => {
  const filters = ["all", "cardio", "legs", "press", "hands"];
  const setFilter = props.setFilter;
  const filtersButton = [...document.getElementsByName("filter")];
  const selection = "2px solid rgb(207, 60, 60)";
  // Используем хук для того чтобы добавить селектор к 'All'
  useEffect(() => {
    document.getElementById("all").style.borderBottom = selection;
  }, []);
  const clickOnFilter = (e) => {
    setFilter(true);
    const id = e.target.id;
    filtersButton.map((fltr) => {
      if (fltr.id === id) {
        fltr.style.borderBottom = selection;
      } else fltr.style.borderBottom = null;
    });
    // Все фильтры кроме all
    if (id !== "all") {
      const filterExercises = props.exercises.filter(
        (exer) => exer.type === id
      );
      props.setFilterExercises(filterExercises);
    } else setFilter(false);
  };
  return (
    <div className={styles.filters}>
      {filters.map((filter, index) => (
        <button id={filter} key={index} name="filter" onClick={clickOnFilter}>
          {filter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Filters;
