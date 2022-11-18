import React from "react";
import SearchBar from "./SearchBar";
import styles from "./NavBar.module.css";

function NavBar({ onSearch }) {
  return (
    <div className={styles.container}>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
}

export default NavBar;
