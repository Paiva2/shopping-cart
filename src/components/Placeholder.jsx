import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Placeholder = () => {
  return (
    <div className="products-list">
      <h2 style={{ color: "#6b6b6b", userSelect: "none", fontSize: "30px" }}>
        <FontAwesomeIcon icon={faCartShopping} /> Your cart is empty
      </h2>
    </div>
  );
};

export default Placeholder;
