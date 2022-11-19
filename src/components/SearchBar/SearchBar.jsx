import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");
  const handleChange = (e) => {
    // const { value } = e.target;
    setCharacter(e.target.value);
  };
  return (
    <div className="div__search">
      <input
        type="search"
        placeholder="Who would you like to add?"
        onChange={handleChange}
      />
      <button onClick={() => onSearch(character)}>Add</button>
    </div>
  );
}

// A veces al button estos argentinos le dicen 'submit'

export default SearchBar;
