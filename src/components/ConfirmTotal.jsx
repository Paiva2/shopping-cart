import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import "./styles/ConfirmTotal.css";

const ConfirmTotal = () => {
  const global = useContext(GlobalContext);
  return (
    <div className="resume">
      <div className="resume-elements">
        <div className="resume-title">
          <h1>RESUME</h1>
        </div>
        <div className="shipping-resume">
          <h5>Shipping</h5>
          <input placeholder="Enter your zipcode" type="text" />
          <h5>Promo code</h5>
          <input placeholder="Enter your promo code" type="text" />
          <button>CONFIRM</button>
        </div>
        <div className="total-resume">
          <div className="total-resume-bg">
            <p>Total items: {global.itemsQuantity}</p>
            <p>Total cost: ${global.total}</p>
          </div>
          <div className="checkout-div">
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTotal;
