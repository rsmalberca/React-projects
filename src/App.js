import "./App.css";
import Cards from "./components/Cards.jsx";
import NavBar from "../src/components/NavBar";
import "normalize.css";
import "../src/components/Card.css";
import React from "react";
import { useState } from "react";

function App() {
  // const example = {
  //   name: "Morty Smith",
  //   species: "Human",
  //   gender: "Male",
  //   image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  // };
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          for (let c of characters) {
            if (c.id === data.id) {
              window.alert(
                "This character has already been added, try another one!"
              );
              return;
            }
          }
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("There is not a character with that ID");
        }
      });
  };

  console.log(characters);

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    //className="App" style={{ padding: "25px" }}>
    <div className="App">
      <NavBar onSearch={onSearch}></NavBar>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
