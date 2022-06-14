import "../styles/Card.css";
import Heart from "./Heart";
import React from "react";

function Card(props) {
  // Cut the description into maximum of 5 words.
  const shortDesc = props.desc.split(" ").slice(0, 5).join(" ");

  const [isFavorite, setIsFavorite] = React.useState(false);

  function toggleFavorite() {
    setIsFavorite((prev) => !prev);
    console.log(`User ${!isFavorite ? "liked" : "unliked"} ${props.name}`);
  }

  return (
    <div className="card">
      <Heart isFilled={isFavorite} handleClick={toggleFavorite} />
      <img className="card-img" src={props.img} alt={props.desc} />
      <div className="card-details">
        <p className="card-details-desc">
          <span className="card-details-desc__name">{props.name}</span>
          {` ${shortDesc}`}
        </p>
        <p className="card-details-price">{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
