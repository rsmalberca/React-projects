import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");
  const handleChange = (e) => {
    setCharacter(e.target.value);
  };

  const clearInput = () => {
    let inputID = document.querySelector("input");
    inputID.value = "";
  };
  return (
    <div className="div__search">
      <input
        type="search"
        placeholder="Who would you like to add?"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          onSearch(character);
          clearInput();
        }}
      >
        Add
      </button>
    </div>
  );
}

// A veces al button estos argentinos le dicen 'submit'

export default SearchBar;
