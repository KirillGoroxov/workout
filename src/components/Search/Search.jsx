import React from "react";
import styles from "./Search.module.scss";
const Search = (props) => {
  const setSearchValue = props.setSearchValue;
  const searchValue = props.searchValue;
  const handleSearch = props.handleSearch;
  document.addEventListener("keyup", (e) => {
    if (e.code == "Enter") handleSearch();
  });
  return (
    <div className={styles.search}>
      <div className={styles.searchText}>Awesome Exercises You Should Know</div>
      <div className={styles.input}>
        <img
          src="./../../../icons/cross.svg"
          alt=""
          onClick={props.clearSearch}
        />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
          onFocus={() =>
            searchValue === "Search Exercises" && setSearchValue("")
          }
          onBlur={() =>
            searchValue === "" && setSearchValue("Search Exercises")
          }
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
