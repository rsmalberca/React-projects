import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "../src/components/NavBar/NavBar";
import "normalize.css";
import "../src/components/Card/Card.css";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "rasma37@hotmail.com";
  const password = "1234renzo";
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

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

  const location = useLocation();
  // location is an object that has a property name 'location' which value is the pathname (the URL where I'm located, the current location (url))
  // location = {pathname : url} ---> location.pathname = url ('/home') <--- for example

  return (
    //className="App" style={{ padding: "25px" }}>
    <div className="App">
      {location.pathname !== "/" && (
        <NavBar onSearch={onSearch} onClick={logout}></NavBar>
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/" element={<Form onClick={login} />} />
      </Routes>
    </div>
  );
}

export default App;
