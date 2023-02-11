import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import Header from "./Header";
import ProductList from "./ProductList";
import './styles/ProductContainer.css'


const ProductContainer = () => {
  const global = useContext(GlobalContext);

  return (
    <div className="cart-container">
      <div className="products-container">
        <Header callApi={global.callApi} />
        <ProductList dataRes={global.dataRes} callApi={global.callApi} />
      </div>
    </div>
  );
};

export default ProductContainer;
