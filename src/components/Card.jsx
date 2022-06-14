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

  // Clean up the prices
  const newPrice = parseFloat(props.price.slice(1));

  // Put commas on prices
  const priceStr = `$${newPrice.toFixed(2)}`;
  const priceCommaPos = newPrice.toString().length - 2;
  const priceComma =
    priceStr.slice(0, priceCommaPos) + "," + priceStr.slice(priceCommaPos);

  return (
    <div className="card">
      <Heart isFilled={isFavorite} handleClick={toggleFavorite} />
      <img className="card-img" src={props.img} alt={props.desc} />
      <div className="card-details">
        <p className="card-details-desc">
          <span className="card-details-desc__name">{props.name}</span>
          {` ${shortDesc}`}
        </p>
        <p className="card-details-price">{priceComma}</p>
      </div>
    </div>
  );
}

export default Card;
