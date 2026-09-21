import React, { useState, useContext } from "react";
import { Grow, Tooltip } from "@mui/material";
import { watchlist } from "../Data/data";
import GeneralContext from "./GeneralContext.jsx";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { DoughnutChart } from "./DoughnutChart.jsx";

const WatchList = () => {
  const [search, setSearch] = useState("");

  const list = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(search.toLowerCase())
  );

  const labels = list.map((item) => item.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: list.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="counts">{list.length}/50</span>
      </div>

      <ul className="list">
        {list.map((stock) => (
          <WatchlistItem stock={stock} key={stock.name} />
        ))}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchlistItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchListActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchListActions(true)}
      onMouseLeave={() => setShowWatchListActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions stock={stock} />}
    </li>
  );
};

const WatchListActions = ({ stock }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions ">
      <Tooltip title="Buy(B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          className="buy"
          onClick={() => generalContext.openBuyWindow(stock, "BUY")}
        >
          B
        </button>
      </Tooltip>

      <Tooltip title="Sell(S)" placement="top" arrow TransitionComponent={Grow}>
        <button
          className="sell"
          onClick={() => generalContext.openBuyWindow(stock, "SELL")}
        >
          S
        </button>
      </Tooltip>

      <Tooltip
        title="Analytics(A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action ">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};
