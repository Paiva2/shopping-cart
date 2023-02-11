import axios from "axios";
import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles/Header.css'


const Header = ({ callApi }) => {
  const addProduct = () => {
    axios.post("http://localhost:3000/items", post);
    callApi();
  };

  function randomPrice(min, max) {
    return Math.random() * (max - min) + min;
  }
  const price = randomPrice(90, 500).toFixed(1);

  const post = {
    product: "Produto",
    price: price,
    quantity: 1,
  };
  return (
    <header className="header">
      <button onClick={addProduct}>
        <FontAwesomeIcon icon={faCartShopping} /> Add to cart
      </button>
      <h1>SHOPPING CART</h1>
    </header>
  );
};

export default Header;
