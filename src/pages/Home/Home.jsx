import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Search from "../../components/Search/Search";
import Exercises from "../../components/Exercises/Exercises";
import axios from "axios";
import Filters from "../../components/Filters/Filters";
const Home = () => {
  const [searchValue, setSearchValue] = useState("Search Exercises");
  const [exercises, setExercises] = useState([]);
  const [filterExercises, setFilterExercises] = useState([]);
  const [searchedExercises, setSearchedExercises] = useState([]);
  const [filter, setFilter] = useState(false);
  const [searched, setSearched] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/exercises").then((res) => {
      setExercises(res.data);
    });
  }, []);
  const handleSearch = async () => {
    if (searchValue !== "" && searchValue !== "Search Exercises") {
      setSearched(true);
      const searched = exercises.filter((exercise) =>
        exercise.title.toUpperCase().includes(searchValue.toUpperCase().trim())
      );
      setSearchedExercises(searched);
    }
  };
  // нажатие на кнопку explore exercises
  const scrollBottom = () => {
    const width = window.innerWidth;
    window.scrollTo({
      top: width > 1110 ? 1050 : width < 850 ? 470 : 700,
      behavior: "smooth",
    });
  };
  const clearSearch = () => {
    if (searched || searchValue !== "" || searchValue !== "Search Exercises") {
      setSearchValue("Search Exercises");
      setSearched(false);
    }
  };
  return (
    <div className={styles.home}>
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
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
        clearSearch={clearSearch}
      />
      <Filters
        setFilterExercises={setFilterExercises}
        exercises={exercises}
        setExercises={setExercises}
        setFilter={setFilter}
      />
      <Exercises
        filterExercises={filterExercises}
        exercises={exercises}
        filter={filter}
        searched={searched}
        searchedExercises={searchedExercises}
      />
    </div>
  );
};

export default Home;
