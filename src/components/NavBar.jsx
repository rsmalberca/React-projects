import React from "react";
import SearchBar from "./SearchBar";
import styles from "./NavBar.module.css";
import rickAndMorty from "../assets/rickAndMorty.png";

function NavBar({ onSearch }) {
  return (
    <div className={styles.container}>
      <img src={rickAndMorty} alt={""}></img>
      <span>"Morty, can you get to the left nipple?" -Rick Sanchez</span>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
}

export default NavBar;
