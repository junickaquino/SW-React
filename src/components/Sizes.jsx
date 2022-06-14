import "../styles/Sizes.css";
import React from "react";

function Sizes(props) {
  function renderBorder() {
    if (props.isActive) {
      return "2px solid #4c4d4d";
    } else {
      if (props.isAvailable) {
        return "2px solid #ececed";
      } else {
        return "2px solid #F6F6F6";
      }
    }
  }

  const styles = {
    // border: props.isAvailable ? "2px solid #ececed" : "2px solid #F6F6F6",
    border: renderBorder(),
    cursor: props.isAvailable ? "pointer" : "default"
  };

  return (
    <div className="sizes-btn" style={styles} onClick={props.handleClick}>
      {props.label}
    </div>
  );
}

export default Sizes;
