import { React, createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [dataRes, setData] = useState(null);
  const [total, setTotal] = useState(0);
  const [itemsQuantity, setQuantity] = useState(0);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get("http://localhost:3000/items")
      .then((resp) => {
        setData(resp.data);
        setTotal(
          resp.data
            .map((products) => products.price * products.quantity)
            .reduce((acc, item) => acc + item, 0)
            .toFixed(2)
        );
        setQuantity(
          resp.data
            .map((item) => item.quantity)
            .reduce((acc, item) => acc + item, 0)
        );
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  if (dataRes) {
    return (
      <GlobalContext.Provider
        value={{ dataRes, total, itemsQuantity, callApi }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
};
