import React, { useEffect, useState } from "react";
import api from "../api.js";

const k = (n) => {
  if (n >= 1000) return (n / 1000).toFixed(2) + "k";
  return n.toFixed(2);
};

const Summary = () => {
  const userName = localStorage.getItem("userName") || "User";
  const [allHolding, setAllHolding] = useState([]);

  useEffect(() => {
    api
      .get("/api/holding")
      .then((res) => setAllHolding(res.data))
      .catch(() => {});
  }, []);

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
      <div className="username">
        <h6>Hi, {userName}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHolding.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {k(pnl)} <small>{pct}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{k(totalCurrent)}</span>{" "}
            </p>
            <p>
              Investment <span>{k(totalInvest)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
