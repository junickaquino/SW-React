import "./styles.css";
import React from "react";
import Recommended from "./components/Recommended";
import ProductQuantity from "./components/ProductQuantity";

export default function App() {
  // Get data from API.
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs";
  const [resultProduct, setResultProduct] = React.useState();

  React.useEffect(() => {
    fetch("https://sw-coding-challenge.herokuapp.com/api/v1/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => setResultProduct(data));
  }, []);

  return (
    <div className="App">
      {resultProduct && <Recommended productsData={resultProduct} />}
      {resultProduct && <ProductQuantity productsData={resultProduct} />}
    </div>
  );
}