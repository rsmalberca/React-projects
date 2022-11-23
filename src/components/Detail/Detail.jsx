import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("There is not a character with that ID");
        }
      })
      .catch((err) => {
        window.alert("There is not a character with that ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <h1>Name: {character.name}</h1>
      <div>
        <ul>
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin?.name}</h2>
          <h2>Type: {character.type === "" ? "unknown" : character.type}</h2>
        </ul>
      </div>
      <img src={character.image} alt={""} />
      <Link to="/home">
        <button>Go Home</button>
      </Link>
    </div>
  );
}

export default Detail;
