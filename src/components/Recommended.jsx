import "../styles/Recommended.css";
import Card from "./Card";

function Recommended(props) {
  const dataArr = props.productsData.d;

  // Get the first 2 products
  const firstTwoProducts = dataArr.slice(0, 2);

  const dataCard = firstTwoProducts.map((item) => {
    return (
      <Card
        key={firstTwoProducts.indexOf(item)}
        img={item.imageUrl}
        name={item.name}
        desc={item.description}
        price={item.originalPrice}
      />
    );
  });

  return (
    <div className="recommended-section">
      <div className="recommended-header">
        <h1 className="recommended-title">Recommended for you</h1>
        <a className="recommended-more" href="#">
          See more
        </a>
      </div>
      <div className="card-container">{dataCard}</div>
    </div>
  );
}

export default Recommended;
