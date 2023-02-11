import axios from "axios";
import React from "react";
import productImg from "./styles/img/productimg.jpg";
import { faTrashAlt } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/ProductList.css";
import Placeholder from "./Placeholder";

const ProductList = ({ dataRes, callApi }) => {
  const handleQuantity = ({ target }, products, dataID, quantity) => {
    if (target.innerText == "+") {
      axios
        .put(`http://localhost:3000/items/${dataID}`, {
          ...products,
          quantity: quantity + 1,
        })
        .then(() => callApi());
    } else if (target.innerText == "-") {
      if (quantity == 1) return;
      axios
        .put(`http://localhost:3000/items/${dataID}`, {
          ...products,
          quantity: quantity - 1,
        })
        .then(() => callApi());
    }
  };

  const handleDelete = (dataID) => {
    axios.delete(`http://localhost:3000/items/${dataID}`).then(() => callApi());
  };
  if (dataRes.length === 0) return <Placeholder />;
  if (dataRes) {
    return (
      <div className="products-list">
        {dataRes.map((product) => (
          <div key={product.id} className="list-products">
            <div className="product-details">
              <h4>PRODUCT DETAILS</h4>
              <div className="products-elements">
                <img src={productImg}></img>
                <div className="product-decription">
                  <p>ID: {product.id}</p>
                  <p>Smartphone</p>
                  <p>iPhone 13</p>
                  <button onClick={() => handleDelete(product.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            </div>
            <div className="quantity-container">
              <h4>QUANTITY</h4>
              <div className="quantity-elements">
                <button
                  onClick={(e) =>
                    handleQuantity(e, product, product.id, product.quantity)
                  }
                >
                  -
                </button>
                <div className="quantity-number">{product.quantity}</div>
                <button
                  onClick={(e) =>
                    handleQuantity(e, product, product.id, product.quantity)
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="price">
              <h4>PRICE</h4>
              <p>${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default ProductList;
