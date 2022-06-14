import "../styles/ProductVariant.css";
import Sizes from "./Sizes";
import React from "react";

function ProductVariant(props) {
  const product = props.productsData.d[2];
  const shortDesc = product.description.split(" ").slice(0, 5).join(" ");

  const [sizes, setSizes] = React.useState(product.sizes);

  // Manipulate Sizes Array to include isActive property.
  React.useEffect(() => {
    setSizes((prevSizes) => {
      return prevSizes.map((size) => {
        return { ...size, isActive: false };
      });
    });
  }, []);

  // Render Sizes Component
  const productSizes = sizes.map((item) => {
    return (
      <Sizes
        key={sizes.indexOf(item)}
        isAvailable={item.isAvailable}
        isActive={item.isActive}
        label={item.label}
        handleClick={() => toggleSize(item.label)}
      />
    );
  });

  function toggleSize(id) {
    // Turn isActive to ON.
    setSizes((prevSizes) => {
      return prevSizes.map((size) => {
        // Make button unclickable if not available.
        // and only one size can be chosen.
        return size.label === id && size.isAvailable
          ? { ...size, isActive: !size.isActive }
          : { ...size, isActive: false };
      });
    });
  }

  // Clean up the prices
  const newPrice = parseFloat(product.salePrice.slice(1));
  const oldPrice = parseFloat(product.originalPrice.slice(1));

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
    <div className="provar-container">
      <div className="provar-header">
        <img
          className="brand-logo"
          src={require(`../images/brand-logo.png`)}
          alt="brand logo"
        />
        <p className="brand-name">{product.name}</p>
      </div>

      <h1 className="provar-title">{shortDesc}</h1>

      <div className="provar-prices">
        <p className="provar-new-price">
          {newPrice.toString().length > 3 ? newPriceComma : newPriceStr}
        </p>
        <p className="provar-old-price">
          {oldPrice.toString().length > 3 ? oldPriceComma : oldPriceStr}
        </p>
      </div>

      <div className="provar-sizes">{productSizes}</div>
    </div>
  );
}

export default ProductVariant;
