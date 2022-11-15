// import characters from "../data";
import Card from "./Card";

function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((c, index) => (
        <Card
          name={c.name}
          species={c.species}
          gender={c.gender}
          image={c.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
          key = {index}
        />
      ))}
    </div>
  );
}

export default Cards;
