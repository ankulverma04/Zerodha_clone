import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph.jsx";
import api from "../api.js";

const Holdings = () => {
  const [allHolding, setAllHolding] = useState([]);

  useEffect(() => {
    api
      .get("/api/holding")
      .then((res) => {
        setAllHolding(res.data);
      })
      .catch((err) => {
        console.log("Holdings failed", err);
      });
  }, []);

  const labels = allHolding.map((item) => item.name);
  const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${a})`;

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHolding.map((stock) => stock.price),
        backgroundColor: rgba(255, 99, 132, 0.8),
      },
    ],
  };

  const totalInvest = allHolding.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );
  const totalCurrent = allHolding.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );
  const pnl = totalCurrent - totalInvest;
  const pct = totalInvest ? ((pnl / totalInvest) * 100).toFixed(2) : "0.00";

  return (
    <>
      <h3 className="title">Holdings ({allHolding.length})</h3>

      <div className="order-table table-responsive">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHolding.map((stock) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id || stock.name}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvest.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{totalCurrent.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {pnl.toFixed(2)} ({pct}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
