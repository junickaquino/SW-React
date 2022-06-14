import "../styles/ProductQuantity.css";
import React from "react";
// import plusIcon from "../images/icon-plus.png";
// import minusIcon from "../images/icon-plus.png";

function ProductQuantity(props) {
  const product = props.productsData.d[2];

  const shortDesc = product.description.split(" ").slice(0, 5).join(" ");

  const [counter, setCounter] = React.useState(1);

  function increaseCounter() {
    setCounter((prev) => prev + 1);
  }

  function decreaseCounter() {
    setCounter((prev) => {
      // Counter cannot be less than zero.
      if (prev <= 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  }

  // Set Prices in respective to the quantity.
  const newPrice = parseFloat(product.salePrice.slice(1)) * counter;
  const oldPrice = parseFloat(product.originalPrice.slice(1)) * counter;

  // Put commas on prices
  const newPriceStr = `$${newPrice.toFixed(2)}`;
  const newPriceCommaPos = newPrice.toString().length - 2;
  const newPriceComma =
    newPriceStr.slice(0, newPriceCommaPos) +
    "," +
    newPriceStr.slice(newPriceCommaPos);

  const oldPriceStr = `$${oldPrice.toFixed(2)}`;
  const oldPriceCommaPos = newPrice.toString().length - 2;
  const oldPriceComma =
    oldPriceStr.slice(0, oldPriceCommaPos) +
    "," +
    oldPriceStr.slice(oldPriceCommaPos);

  return (
    <div className="proqty-container">
      <div className="proqty-img-container">
        <img className="proqty-img" src={product.imageUrl} alt={product.name} />
        <p className="proqty-discount">-{product.percentOff}%</p>
      </div>

      <div className="proqty-details">
        <p className="proqty-desc">
          <span className="proqty-desc__name">{product.name}</span>
          {` ${shortDesc}`}
        </p>

        <div className="proqty-counter">
          <img
            src={require(`../images/icon-minus.png`)}
            alt=""
            onClick={decreaseCounter}
          />
          <p className="counter">{counter}</p>
          <img
            src={require(`../images/icons-plus.png`)}
            alt=""
            onClick={increaseCounter}
          />
        </div>

        <div className="proqty-prices">
          {/* If Counter is 0, do not put the price with comma format. */}
          <p className="proqty-new-price">
            {newPrice.toString().length > 3 ? newPriceComma : newPriceStr}
          </p>
          <p className="proqty-old-price">
            {oldPrice.toString().length > 3 ? oldPriceComma : oldPriceStr}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductQuantity;
