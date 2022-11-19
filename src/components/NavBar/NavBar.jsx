import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import rickAndMorty from "./rickAndMorty.png";

function NavBar({ onSearch }) {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={rickAndMorty} alt={""} className={styles.image}></img>
      </Link>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
}

export default NavBar;
