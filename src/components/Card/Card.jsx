import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  return (
    <div className="card__character">
      <button className="close__button" onClick={() => props.onClose(props.id)}>
        &#10006;
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <img src={props.image} alt="" />
      <h2>{props.gender}</h2>
      <h2>{props.species}</h2>
    </div>
  );
}

export default Card;
