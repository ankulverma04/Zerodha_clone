import React, { useState } from "react";
import BuyActionWindow from "./BuyActionsWindow.jsx";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [orderMode, setOrderMode] = useState("BUY");

  const handleOpenBuyWindow = (stock, mode = "BUY") => {
    setSelectedStock(stock);
    setOrderMode(mode);
    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && selectedStock && (
        <BuyActionWindow stock={selectedStock} mode={orderMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
