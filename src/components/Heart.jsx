import "../styles/Heart.css";
import HeartFilled from "../images/heart-filled.png";
import HeartOutlined from "../images/heart-outlined.png";

function Heart(props) {
  const heartIcon = props.isFilled ? "heart-filled.png" : "heart-outlined.png";

  return (
    <div className="heart-btn">
      <img
        className="heart-icon"
        src={require(`../images/${heartIcon}`)}
        alt="Heart icon"
        onClick={props.handleClick}
      />
    </div>
  );
}

export default Heart;
