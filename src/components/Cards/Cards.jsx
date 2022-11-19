// import characters from "../data";
import Card from "../Card/Card";
import "../Card/Card.css";

function Cards({ characters, onClose }) {
  return (
    <div className="div__cards">
      {characters.map((c, index) => (
        <Card
          name={c.name}
          species={c.species}
          gender={c.gender}
          image={c.image}
          id={c.id}
          onClose={onClose}
          key={index}
        />
      ))}
    </div>
  );
}

export default Cards;
