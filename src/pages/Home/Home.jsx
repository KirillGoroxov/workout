import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Search from "../../components/Search/Search";
import Exercises from "../../components/Exercises/Exercises";
import axios from "axios";
import Filters from "../../components/Filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../../store/exercises";
const Home = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("Search Exercises");
  const [exercises, setExercises] = useState([]);
  const [filterExercises, setFilterExercises] = useState([]);
  const [filter, setFilter] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/exercisesWithTypes").then((res) => {
      setExercises(res.data);
      dispatch(fetchExercises(res.data));
    });
  }, []);
  const handleSearch = async () => {
    if (searchValue !== "" && searchValue !== "Search Exercises") {
      axios.get("http://localhost:3000/exercises").then((res) => {
        console.log(res.data);
      });
    }
  };
  const scrollBottom = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  const state = useSelector((state) => state.exercises);
  console.log(state);
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
        alt=""
      />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
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
      />
    </div>
  );
};

export default Home;
