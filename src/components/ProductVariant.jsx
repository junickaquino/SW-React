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
        return size.label === id && size.isAvailable
          ? { ...size, isActive: !size.isActive }
          : size;
      });
    });

    // Turn off currently ON, then turn ON what was clicked.
  }

  return (
    <div className="provar-container">
      <div className="provar-header">
        <img className="brand-logo" src="" />
        <p className="brand-name">{product.name}</p>
      </div>

      <h1 className="provar-title">{shortDesc}</h1>

      <div className="provar-prices">
        {/* If Counter is 0, do not put the price with comma format. */}
        <p className="provar-new-price">
          {/* {newPrice.toString().length > 3 ? newPriceComma : newPriceStr} */}
          {product.salePrice}
        </p>
        <p className="provar-old-price">
          {/* {oldPrice.toString().length > 3 ? oldPriceComma : oldPriceStr} */}
          {product.originalPrice}
        </p>
      </div>

      <div className="provar-sizes">{productSizes}</div>
    </div>
  );
}

export default ProductVariant;
