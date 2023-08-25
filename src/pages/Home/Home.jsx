import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Exercises from "../../components/Exercises/Exercises";
import axios from "axios";
import Filters from "../../components/Filters/Filters";
import Welcome from "../../components/Welcome/Welcome";
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
    if (searchValue === "") setSearched(false);
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
    <>
      <Welcome scrollBottom={scrollBottom} />
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
    </>
  );
};

export default Home;
