import React, { useState, useContext, useEffect } from "react";
import GeneralContext from "./GeneralContext.jsx";
import api from "../api.js";
import "./BuyActionsWindow.css";

const BuyActionWindow = ({ stock, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const { closeBuyWindow } = useContext(GeneralContext);

  useEffect(() => {
    if (stock) {
      setStockPrice(stock.price);
    }
  }, [stock]);

  const handleBuyClick = () => {
    if (stockQuantity < 1 || stockPrice <= 0) {
      alert("Enter valid qty and price");
      return;
    }

    api
      .post("/api/newOrder", {
        name: stock.name,
        qty: stockQuantity,
        price: stockPrice,
        mode: mode || "BUY",
      })
      .then(() => {
        alert("ORDER PLACED✅");
        closeBuyWindow();
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Order failed");
      });
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="buy-window" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
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
        <span>Total: ₹ {(stockQuantity * stockPrice).toFixed(2)} </span>
        <div>
          <button className="btn btn-primary" onClick={handleBuyClick}>
            {mode || "BUY"}
          </button>
          <button className="btn btn-danger" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
