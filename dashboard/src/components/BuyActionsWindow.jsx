import React, { useState,useContext,useEffect } from "react";

import axios from "axios";

import GeneralContext from "../components/GeneralContext.jsx";

import "./BuyActionsWindow.css";

const BuyActionWindow = ({ uid,stockData }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);

  useEffect(() => {
    if (stockData) {
      setStockPrice(stockData.price); // 👈 yaha current price set ho raha hai
    }
  }, [stockData]);
  console.log("stockData:", stockData);

  const handleBuyClick = () => {
   axios
   .post(`${import.meta.env.VITE_API_URL}/api/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    })
  .then(() => {
    alert("ORDER PLACED✅")
      closeBuyWindow(); // ✅ window close after success
    })
    .catch((err) => {
      console.log("Order failed:", err);
    });
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container w-25" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Total: ₹ {stockQuantity * stockPrice} </span>
        <div>
          <button className="btn btn-primary" onClick={handleBuyClick}>
            Buy
          </button>
          <button to="" className="btn btn-danger" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;